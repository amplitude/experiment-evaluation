package com.amplitude.experiment.evaluation

interface EvaluationEngine {
    fun evaluate(flags: List<FlagConfig>, user: SkylabUser?): Map<String, FlagResult>
}

private const val MAX_HASH_VALUE = 4294967295L
private const val MAX_VARIANT_HASH_VALUE = MAX_HASH_VALUE.floorDiv(100)

internal data class EvaluationResult(val variant: Variant, val description: String) {
    companion object {
        const val DESC_MISSING_USER_FULLY_ROLLED_OUT = "missing-user-fully-rolled-out-variant"
        const val DESC_MISSING_USER_DEFAULT_VARIANT = "missing-user-default-variant"
        const val DESC_EMPTY_BUCKETING_KEY_FULLY_ROLLED_OUT_VARIANT = "empty-bucketing-key-fully-rolled-out-variant"
        const val DESC_EMPTY_BUCKETING_KEY_DEFAULT_VALUE = "empty-bucketing-key-default-value"
        const val DESC_FULLY_ROLLED_OUT_VARIANT = "fully-rolled-out-variant"
        const val DESC_GLOBAL_HOLDBACK = "global-holdback"
        const val DESC_MUTUAL_EXCLUSION = "mutual-exclusion-group"
        const val DESC_STICKY_BUCKETING = "sticky-bucketing"
        const val DESC_DEFAULT_SEGMENT = "default-segment"
        const val DESC_INCLUSION_LIST = "inclusion-list"
        const val DESC_FLAG_DISABLED = "flag-disabled"
    }
}

class EvaluationEngineImpl : EvaluationEngine {

    override fun evaluate(flags: List<FlagConfig>, user: SkylabUser?): Map<String, FlagResult> {
        val result: MutableMap<String, FlagResult> = mutableMapOf()
        for (flag in flags) {
            val evalResult = evaluateFlag(flag, user)
            val flagResult = FlagResult(flag, evalResult)
            result[flag.flagKey] = flagResult
        }
        return result
    }

    internal fun evaluateFlag(flag: FlagConfig, user: SkylabUser?): EvaluationResult {
        var result = checkEnabled(flag) ?: checkEmptyUser(flag, user)
        if (result != null) {
            return result
        }

        if (user == null) {
            throw RuntimeException("User should always be non-null at this point.")
        }

        val excludedVariantsForUser = getExclusions(flag, user)
        result = checkInclusions(flag, user, excludedVariantsForUser)
        if (result != null) {
            return result
        }
        val bucketingValue = user.getBucketingValue(flag.bucketingKey)
        // Now we have a bucketing value
        result = checkGlobalHoldback(flag, user)
            ?: checkMutualExclusion(flag, user)
            ?: checkStickyBucketing(flag, user)
            ?: checkEmptyBucketingValue(flag, bucketingValue)
            ?: checkSegmentRules(flag, user, bucketingValue, excludedVariantsForUser)
            ?: checkAllUsersRule(flag, user, bucketingValue, excludedVariantsForUser)
        return result
    }

    private fun scaled(pct: Double, max: Long): Double {
        // add 1 to max to allow for range [0, max+1) when comparing the upper bound (which uses <, not <=)
        return pct * (max + 1)
    }

    private fun checkGlobalHoldback(flag: FlagConfig, user: SkylabUser?): EvaluationResult? {
        if (flag.globalHoldbackPct == 0 || flag.globalHoldbackSalt.isNullOrEmpty()) {
            // TODO(curtis): only perform global holdback for experiments, not flags
            return null
        }
        val bucketingValue = user?.getBucketingValue(flag.globalHoldbackBucketingKey)
        val keyToHash = "gh/${flag.globalHoldbackSalt}/$bucketingValue"
        val hash = getHash(keyToHash)
        val upperBound = scaled(flag.globalHoldbackPct / 10000.0, MAX_HASH_VALUE)
        return if (hash < upperBound) {
            // in global holdback, return default value
            EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_GLOBAL_HOLDBACK,)
        } else null
    }

    private fun checkMutualExclusion(flag: FlagConfig, user: SkylabUser?): EvaluationResult? {
        if (flag.mutualExclusionConfig == null) {
            return null
        }
        val bucketingValue = user?.getBucketingValue(flag.mutualExclusionConfig.bucketingKey)
        val keyToHash = "me/${flag.mutualExclusionConfig.groupSalt}/$bucketingValue"
        val hash = getHash(keyToHash)
        val lowerBound = scaled(flag.mutualExclusionConfig.lowerBound / 10000.0, MAX_HASH_VALUE)
        val upperBound = scaled(
            (flag.mutualExclusionConfig.lowerBound + flag.mutualExclusionConfig.percentage) / 10000.0,
            MAX_HASH_VALUE
        )
        return if (hash < lowerBound || hash >= upperBound) {
            // outside of mutual exclusion group bound, return default value
            EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_MUTUAL_EXCLUSION)
        } else null
    }

    private fun checkStickyBucketing(flag: FlagConfig, user: SkylabUser): EvaluationResult? {
        if (!flag.useStickyBucketing) {
            return null
        }
        if (flag.userProperty == null) {
            return null
        }
        val propertyKey = convertFlagUserProperty(flag) ?: return null
        val propertyValue = user.getProperty(propertyKey)
        return if (propertyValue != null && propertyValue != flag.defaultValue) {
            EvaluationResult(Variant(propertyValue), EvaluationResult.DESC_STICKY_BUCKETING)
        } else null
    }

    private fun checkEnabled(flag: FlagConfig): EvaluationResult? {
        return if (!flag.enabled) {
            EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_FLAG_DISABLED)
        } else null
    }

    private fun checkEmptyUser(flag: FlagConfig, user: SkylabUser?): EvaluationResult? {
        // if the user is null, return a fully rolled out variant if any, otherwise return the default
        if (user == null) {
            val variant = flag.getFullyRolledOutVariantIfPresent()
            return if (variant != null) {
                EvaluationResult(variant, EvaluationResult.DESC_MISSING_USER_FULLY_ROLLED_OUT)
            } else {
                EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_MISSING_USER_DEFAULT_VARIANT)
            }
        }
        return null
    }

    private fun checkEmptyBucketingValue(flag: FlagConfig, bucketingValue: String?): EvaluationResult? {
        // if the user is null, return a fully rolled out variant if any, otherwise return the default
        if (bucketingValue.isNullOrEmpty()) {
            val variant = flag.getFullyRolledOutVariantIfPresent()
            return if (variant != null) {
                EvaluationResult(
                    variant,
                    EvaluationResult.DESC_EMPTY_BUCKETING_KEY_FULLY_ROLLED_OUT_VARIANT
                )
            } else {
                EvaluationResult(
                    Variant(flag.defaultValue),
                    EvaluationResult.DESC_EMPTY_BUCKETING_KEY_DEFAULT_VALUE
                )
            }
        }
        return null
    }

    private fun checkSegmentRules(
        flag: FlagConfig,
        user: SkylabUser?,
        bucketingValue: String?,
        excludedVariantsForUser: Set<String?>
    ): EvaluationResult? {
        // check custom target segments and see if a user falls in any of the target segments
        if (flag.customSegmentTargetingConfigs != null && flag.customSegmentTargetingConfigs.isNotEmpty()) {
            for (segTargetingConfig in flag.customSegmentTargetingConfigs) {
                if (!segTargetingConfig.match(user)) {
                    continue
                }

                val resolvedBucketingValue = if (segTargetingConfig.bucketingKey.isNullOrEmpty()) {
                    bucketingValue
                } else {
                    user?.getBucketingValue(segTargetingConfig.bucketingKey)
                }

                // user matches filters. Serve the variantKey based on the current segment's distribution
                val variant = getVariantBasedOnRollout(
                    flag.variants,
                    segTargetingConfig.allocations,
                    flag.defaultValue,
                    excludedVariantsForUser,
                    flag.bucketingSalt,
                    resolvedBucketingValue,
                )
                return EvaluationResult(variant, segTargetingConfig.name)
            }
        }
        return null
    }

    private fun checkAllUsersRule(
        flag: FlagConfig,
        user: SkylabUser?,
        bucketingValue: String?,
        excludedVariantsForUser: Set<String?>
    ): EvaluationResult {
        // Optimization: we have already computed that the flag has been fully rolled out to a single variant. And we
        // got to this point because there is no special allowlist/blocklist/custom-target-segment for this user
        val fullyRolledOutVariant = flag.getFullyRolledOutVariantIfPresent()
        if (fullyRolledOutVariant != null) {
            if (!excludedVariantsForUser.contains(fullyRolledOutVariant.key)) {
                return EvaluationResult(fullyRolledOutVariant, EvaluationResult.DESC_FULLY_ROLLED_OUT_VARIANT)
            }
        }
        val bucketingKey = flag.allUsersTargetingConfig.bucketingKey
        val resolvedBucketingValue = if (bucketingKey.isNullOrEmpty()) {
            bucketingValue
        } else {
            user?.getBucketingValue(bucketingKey)
        }
        // fall back to the all users target segment
        val variant = getVariantBasedOnRollout(
            flag.variants,
            flag.allUsersTargetingConfig.allocations,
            flag.defaultValue,
            excludedVariantsForUser,
            flag.bucketingSalt,
            resolvedBucketingValue
        )
        return EvaluationResult(variant, EvaluationResult.DESC_DEFAULT_SEGMENT)
    }

    private fun getExclusions(flag: FlagConfig, user: SkylabUser): Set<String?> {
        val excludedVariantsForUser: MutableSet<String?> = mutableSetOf()
        // check variant exclusions and inclusions together. If a user is in both lists, the key won't be served as
        // exclusion takes priority
        if (flag.variantsExclusions == null) {
            return excludedVariantsForUser
        }
        for (variant in flag.variants) {
            val exclusions = flag.variantsExclusions[variant.key] ?: continue
            if (exclusions.contains(user.userId) || exclusions.contains(user.deviceId)) {
                // can't be served this key. Keep track to make sure the user doesn't get served this key later
                excludedVariantsForUser.add(variant.key)
            }
        }
        return excludedVariantsForUser
    }

    private fun checkInclusions(
        flag: FlagConfig,
        user: SkylabUser,
        excludedVariantsForUser: Set<String?>
    ): EvaluationResult? {
        if (flag.variantsInclusions == null) {
            return null
        }
        for (variant in flag.variants) {
            val inclusions = flag.variantsInclusions[variant.key] ?: continue
            if (excludedVariantsForUser.contains(variant.key)) {
                continue
            }
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
        defaultValue: String?,
        excludedVariantsForUser: Set<String?>,
        bucketingSalt: String?,
        bucketingValue: String?,
    ): Variant {
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
                    return if (excludedVariantsForUser.contains(slice.variant.key)) {
                        Variant(defaultValue)
                    } else slice.variant
                }
            }
        }
        return Variant(defaultValue)
    }
}

private fun convertFlagUserProperty(flag: FlagConfig): String? {
    return if (flag.userProperty == null) {
        null
    } else "gp:" + flag.userProperty
}
