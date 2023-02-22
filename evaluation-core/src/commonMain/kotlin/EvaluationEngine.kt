package com.amplitude.experiment.evaluation

import kotlin.native.concurrent.SharedImmutable

interface EvaluationEngine {
    fun evaluate(flags: List<FlagConfig>, user: SkylabUser?): Map<String, FlagResult>
}

@SharedImmutable
private const val MAX_HASH_VALUE = 4294967295L

@SharedImmutable
private const val MAX_VARIANT_HASH_VALUE = MAX_HASH_VALUE.floorDiv(100)

internal data class EvaluationResult(
    val variant: Variant,
    val description: String,
) {
    companion object {
        const val DESC_MISSING_USER_FULLY_ROLLED_OUT = "missing-user-fully-rolled-out-variant"
        const val DESC_MISSING_USER_DEFAULT_VARIANT = "missing-user-default-variant"
        const val DESC_DEFAULT_SEGMENT = "default-segment"
        const val DESC_INCLUSION_LIST = "inclusion-list"
        const val DESC_FLAG_DISABLED = "flag-disabled"
        const val DESC_DEPENDENCY_NOT_MET = "dependency-not-met"
        const val DESC_INVALID_DEPENDENCY_OPERATOR = "invalid-dependency-operator"
    }
}

class EvaluationEngineImpl : EvaluationEngine {

    override fun evaluate(flags: List<FlagConfig>, user: SkylabUser?): Map<String, FlagResult> {
        val evaluations: MutableMap<String, EvaluationResult> = mutableMapOf()
        val results: MutableMap<String, FlagResult> = mutableMapOf()
        for (flag in flags) {
            val evalResult = evaluateFlag(flag, user, evaluations)
            evaluations[flag.flagKey] = evalResult
            val flagResult = FlagResult(flag, evalResult)
            results[flag.flagKey] = flagResult
        }
        return results
    }

    internal fun evaluateFlag(
        flag: FlagConfig,
        user: SkylabUser?,
        evaluationContext: Map<String, EvaluationResult> = mutableMapOf()
    ): EvaluationResult {
        val result = checkEnabled(flag)
            ?: checkDependencies(flag, evaluationContext)
            ?: checkEmptyUser(flag, user)
        if (result != null) {
            return result
        }
        if (user == null) {
            throw RuntimeException("User should always be non-null at this point.")
        }
        return checkInclusions(flag, user)
            ?: checkSegments(flag, user)
            ?: EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEFAULT_SEGMENT)
    }

    private fun scaled(pct: Double, max: Long): Double {
        // add 1 to max to allow for range [0, max+1) when comparing the upper bound (which uses <, not <=)
        return pct * (max + 1)
    }

    internal fun checkDependencies(flag: FlagConfig, results: Map<String, EvaluationResult>): EvaluationResult? {
        if (flag.parentDependencies == null || flag.parentDependencies.flags.isEmpty()) {
            return null
        }
        if (flag.parentDependencies.operator == PARENT_DEPENDENCY_OPERATOR_ALL) {
            /*
             * For the ALL operator, we need all the dependencies listed to match in order to continue evaluation.
             */
            for ((flagKey, allowedVariants) in flag.parentDependencies.flags.entries) {
                // Null or empty values always match
                if (allowedVariants.isEmpty()) {
                    continue
                }
                // Check if flag result does not exist, or result is not in allowed variants
                val result = results[flagKey]
                if (result == null || !allowedVariants.contains(result.variant.key)) {
                    return EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEPENDENCY_NOT_MET)
                }
            }
            return null
        } else if (flag.parentDependencies.operator == PARENT_DEPENDENCY_OPERATOR_ANY) {
            /*
             * For the ANY operator, we need only one dependency listed to match in order to continue evaluation.
             */
            for ((flagKey, allowedVariants) in flag.parentDependencies.flags.entries) {
                // Null or empty values always match
                if (allowedVariants.isEmpty()) {
                    return null
                }
                // If dependency flag result exists and contains the variant result.
                val result = results[flagKey]
                if (result != null && allowedVariants.contains(result.variant.key)) {
                    // Dependency met. Return an empty result to continue evaluation.
                    return null
                }
            }
            return EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEPENDENCY_NOT_MET)
        } else {
            return EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_INVALID_DEPENDENCY_OPERATOR)
        }
    }

    private fun checkEnabled(flag: FlagConfig): EvaluationResult? {
        return if (!flag.enabled) {
            EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_FLAG_DISABLED)
        } else null
    }

    private fun checkEmptyUser(flag: FlagConfig, user: SkylabUser?): EvaluationResult? {
        // if the user is null, return a fully rolled out variant if any, otherwise return the default
        if (user == null) {
            val variant = getFullyRolledOutVariantIfPresent(flag.allUsersTargetingConfig.allocations, flag.variants)
            return if (variant != null) {
                EvaluationResult(variant, EvaluationResult.DESC_MISSING_USER_FULLY_ROLLED_OUT)
            } else {
                EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_MISSING_USER_DEFAULT_VARIANT)
            }
        }
        return null
    }

    private fun checkSegments(
        flag: FlagConfig,
        user: SkylabUser,
    ): EvaluationResult? {
        if (flag.customSegmentTargetingConfigs != null && flag.customSegmentTargetingConfigs.isNotEmpty()) {
            for (segment in flag.customSegmentTargetingConfigs) {
                return checkSegment(flag, user, segment) ?: continue
            }
        }
        return checkSegment(flag, user, flag.allUsersTargetingConfig)
    }

    private fun checkSegment(
        flag: FlagConfig,
        user: SkylabUser,
        segment: SegmentTargetingConfig,
    ): EvaluationResult? {
        if (!segment.match(user)) {
            return null
        }
        val bucketingValue = user.getPropertyValue(segment.bucketingKey)
        val variant = getVariantBasedOnRollout(
            flag.variants,
            segment.allocations,
            flag.bucketingSalt,
            bucketingValue
        ) ?: return null
        return EvaluationResult(variant, segment.name)
    }

    private fun checkInclusions(
        flag: FlagConfig,
        user: SkylabUser,
    ): EvaluationResult? {
        if (flag.variantsInclusions == null) {
            return null
        }
        for (variant in flag.variants) {
            val inclusions = flag.variantsInclusions[variant.key] ?: continue
            if (inclusions.contains(user.userId) || inclusions.contains(user.deviceId)) {
                // return the first match
                return EvaluationResult(variant, EvaluationResult.DESC_INCLUSION_LIST)
            }
        }
        return null
    }

    internal fun getHash(key: String): Long {
        // hash32x86 returns a number that can't fit in a signed 32-bit java integer.
        // Source: https://stackoverflow.com/a/24090718/2322146
        val data = key.encodeToByteArray()
        val value = Murmur3.hash32x86(data, data.size, 0)
        return value.toLong() and 0xffffffffL
    }

    internal fun getVariantBasedOnRollout(
        variants: List<Variant>,
        allocations: List<Allocation>,
        bucketingSalt: String,
        bucketingValue: String?,
    ): Variant? {
        if (bucketingValue.isNullOrEmpty()) {
            return getFullyRolledOutVariantIfPresent(allocations, variants)
        }
        val keyToHash = "$bucketingSalt/$bucketingValue"
        val hash = getHash(keyToHash)
        val bucket = hash % 100
        val variantHash = hash.floorDiv(100)
        var minBucket: Long
        var maxBucket: Long = 0
        for (allocation in allocations) {
            minBucket = maxBucket
            maxBucket += (allocation.percentage / 100).toLong()
            if (bucket in minBucket until maxBucket) {
                val distribution = allocation.getVariantDistribution(variants)
                if (distribution.isEmpty()) {
                    continue
                }
                // rolled out, serve the appropriate variant
                var upperBound: Double
                for (slice in distribution) {
                    if (slice.pct <= 0) {
                        continue
                    }
                    upperBound = scaled(slice.cumulativePct, MAX_VARIANT_HASH_VALUE)
                    if (variantHash >= upperBound) {
                        continue
                    }
                    return slice.variant
                }
            }
        }
        return null
    }

    private fun getFullyRolledOutVariantIfPresent(allocations: List<Allocation>, variants: List<Variant>): Variant? {
        val totalAllocationPercentage: Int = allocations.sumOf { it.percentage }
        if (totalAllocationPercentage < 10000) {
            return null
        }

        // If a flag is rolled out to 100% and there's only one variant, return the variant
        if (variants.size == 1) {
            return variants[0]
        }

        val weights: Map<String, Int> = allocations[0].weights
            ?: return null
        var fullyRolledOutVariant: Variant? = null
        var variantsWithWeights = 0
        for (variant in variants) {
            if ((weights[variant.key] ?: 0) > 0) {
                fullyRolledOutVariant = variant
                variantsWithWeights++
            }
        }
        if (variantsWithWeights == 1) {
            return fullyRolledOutVariant
        }
        return null
    }
}
