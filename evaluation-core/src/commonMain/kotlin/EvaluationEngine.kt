package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.Murmur3
import io.github.z4kn4fein.semver.Version
import io.github.z4kn4fein.semver.VersionFormatException
import kotlinx.serialization.json.JsonElement
import kotlin.native.concurrent.SharedImmutable

@SharedImmutable
private const val MAX_HASH_VALUE = 4294967295L

@SharedImmutable
private const val MAX_VARIANT_HASH_VALUE = MAX_HASH_VALUE.floorDiv(100)

@SharedImmutable
private const val VERSION = "version"

interface EvaluationEngine {
    fun evaluate(
        context: EvaluationContext,
        flags: List<EvaluationFlag>
    ): Map<String, EvaluationVariant>
}

class EvaluationEngineImpl(private val log: Logger) : EvaluationEngine {

    data class EvaluationTarget(
        val context: EvaluationContext,
        val result: MutableMap<String, EvaluationVariant>
    ) : Selectable {
        override fun select(selector: String): Any? {
            return when (selector) {
                "context" -> context
                "result" -> result
                else -> null
            }
        }
    }

    override fun evaluate(
        context: EvaluationContext,
        flags: List<EvaluationFlag>
    ): Map<String, EvaluationVariant> {
        log.debug { "Evaluating flags ${flags.map { it.key }} with context $context." }
        val results: MutableMap<String, EvaluationVariant> = mutableMapOf()
        val target = EvaluationTarget(context, results)
        for (flag in flags) {
            // Evaluate flag and update results.
            val variant = evaluateFlag(target, flag)
            if (variant != null) {
                results[flag.key] = variant
            } else {
                log.debug { "Flag ${flag.key} evaluation returned a null result." }
            }
        }
        log.debug { "Evaluation completed. $results" }
        return results
    }

    private fun evaluateFlag(target: EvaluationTarget, flag: EvaluationFlag): EvaluationVariant? {
        log.verbose { "Evaluating flag $flag with target $target." }
        var result: EvaluationVariant? = null
        for (segment in flag.segments) {
            result = evaluateSegment(target, flag, segment)
            if (result != null) {
                // Merge all metadata into the result
                val metadata = mergeMetadata(flag.metadata, segment.metadata, result.metadata)
                result = EvaluationVariant(result.key, result.value, metadata)
                log.verbose { "Flag evaluation returned result $result on segment $segment." }
                break
            }
        }
        return result
    }

    private fun evaluateSegment(
        target: EvaluationTarget,
        flag: EvaluationFlag,
        segment: EvaluationSegment
    ): EvaluationVariant? {
        log.verbose { "Evaluating segment $segment with target $target." }
        if (segment.conditions == null) {
            log.verbose { "Segment conditions are null, bucketing target." }
            // Null conditions always match
            val variantKey = bucket(target, segment)
            return flag.variants[variantKey]
        }
        // Outer list logic is "or" (||)
        for (conditions in segment.conditions) {
            var match = true
            // Inner list logic is "and" (&&)
            for (condition in conditions) {
                match = matchCondition(target, condition)
                if (!match) {
                    log.verbose { "Segment condition $condition did not match target." }
                    break
                } else {
                    log.verbose { "Segment condition $condition matched target." }
                }
            }
            // On match bucket the user.
            if (match) {
                log.verbose { "Segment conditions matched, bucketing target." }
                val variantKey = bucket(target, segment)
                return flag.variants[variantKey]
            }
        }
        return null
    }

    private fun matchCondition(target: EvaluationTarget, condition: EvaluationCondition): Boolean {
        val propValue = target.select(condition.selector)
        val op = transformOperator(condition.op, condition.selector)
        return match(propValue, op, condition.values)
    }

    private fun getHash(key: String): Long {
        // hash32x86 returns a number that can't fit in a signed 32-bit java integer.
        // Source: https://stackoverflow.com/a/24090718/2322146
        val data = key.encodeToByteArray()
        val value = Murmur3.hash32x86(data, data.size, 0)
        return value.toLong() and 0xffffffffL
    }

    private fun bucket(target: EvaluationTarget, segment: EvaluationSegment): String? {
        log.verbose { "Bucketing segment $segment with target $target" }
        if (segment.bucket == null) {
            // A null bucket means the segment is fully rolled out. Select the default variant.
            log.verbose { "Segment bucket is null, returning default variant ${segment.defaultVariant}." }
            return segment.defaultVariant
        }
        // Select the bucketing value.
        val bucketingValue = target.select(segment.bucket.selector)
        log.verbose { "Selected bucketing value $bucketingValue from target." }
        if (bucketingValue == null || bucketingValue.isEmpty()) {
            // A null or empty bucketing value cannot be bucketed. Select the default variant.
            log.verbose { "Selected bucketing value is null or empty." }
            return segment.defaultVariant
        }
        // Salt and hash the value, and compute the allocation and distribution values.
        val keyToHash = "${segment.bucket.salt}/$bucketingValue"
        val hash = getHash(keyToHash)
        val allocationValue = hash % 100
        val distributionValue = hash.floorDiv(100)
        // Iterate over allocations. If the value falls within the range, check the distribution.
        for (allocation in segment.bucket.allocations) {
            val allocationRangeFrom = allocation.range[0]
            val allocationRangeTo = allocation.range[1]
            val allocationStart: Int = allocationRangeFrom / 100
            val allocationEnd: Int = allocationRangeTo / 100
            if (allocationValue in allocationStart until allocationEnd) {
                for (distribution in allocation.distributions) {
                    val distributionRangeFrom = distribution.range[0]
                    val distributionRangeTo = distribution.range[1]
                    // Add 1 to max to allow for range [0, max+1) when comparing the upper bound (which uses <, not <=)
                    val distributionStart: Double = distributionRangeFrom / 10000.0 * (MAX_VARIANT_HASH_VALUE + 1)
                    val distributionEnd: Double = distributionRangeTo / 10000.0 * (MAX_VARIANT_HASH_VALUE + 1)
                    if (distributionValue >= distributionStart && distributionValue < distributionEnd) {
                        log.verbose { "Bucketing hit allocation and distribution, returning variant ${distribution.variant}." }
                        return distribution.variant
                    }
                }
            }
        }
        // No allocation and distribution match. Select the default variant.
        return segment.defaultVariant
    }

    private fun mergeMetadata(vararg metadata: Map<String, JsonElement>?): Map<String, JsonElement> {
        val mergedMetadata: MutableMap<String, JsonElement> = HashMap()
        for (metadataElement in metadata) {
            if (metadataElement != null) {
                mergedMetadata.putAll(metadataElement)
            }
        }
        return mergedMetadata
    }

    private fun transformOperator(op: String, selector: List<String>?): String {
        var operator = op
        if (selector != null && selector.isNotEmpty()) {
            // if it's a version field, map the operator into an operator that supports semantic versioning. Nova
            // doesn't have to do this, because dash does it while creating a nova query
            if (selector[selector.size - 1].contains(VERSION)) {
                operator = when (op) {
                    EvaluationOperator.LESS_THAN -> EvaluationOperator.VERSION_LESS_THAN
                    EvaluationOperator.LESS_THAN_EQUALS -> EvaluationOperator.VERSION_LESS_THAN_EQUALS
                    EvaluationOperator.GREATER_THAN -> EvaluationOperator.VERSION_GREATER_THAN
                    EvaluationOperator.GREATER_THAN_EQUALS -> EvaluationOperator.VERSION_GREATER_THAN_EQUALS
                    else -> op
                }
            }
        }
        return operator
    }

    // TODO handle typed selection and matching
    private fun match(propValue: String?, op: String, filterValues: Set<String>): Boolean {
        return if (propValue == null) {
            matchesNull(op, filterValues)
        } else when (op) {
            EvaluationOperator.IS -> matchesIs(propValue, filterValues)
            EvaluationOperator.IS_NOT -> !matchesIs(propValue, filterValues)
            EvaluationOperator.CONTAINS -> matchesContains(propValue, filterValues)
            EvaluationOperator.DOES_NOT_CONTAIN -> !matchesContains(propValue, filterValues)
            EvaluationOperator.LESS_THAN, EvaluationOperator.LESS_THAN_EQUALS,
            EvaluationOperator.GREATER_THAN, EvaluationOperator.GREATER_THAN_EQUALS ->
                matchesComparable(propValue, op, filterValues) { value -> parseDouble(value) }
            EvaluationOperator.VERSION_LESS_THAN, EvaluationOperator.VERSION_LESS_THAN_EQUALS,
            EvaluationOperator.VERSION_GREATER_THAN, EvaluationOperator.VERSION_GREATER_THAN_EQUALS ->
                matchesComparable(propValue, op, filterValues) { value -> parseSemanticVersion(value) }
            else -> false
        }
    }

    private fun matchesNull(op: String, filterValues: Set<String>): Boolean {
        val containsNone = containsNone(filterValues)
        return when (op) {
            EvaluationOperator.IS, EvaluationOperator.CONTAINS, EvaluationOperator.LESS_THAN,
            EvaluationOperator.LESS_THAN_EQUALS, EvaluationOperator.GREATER_THAN,
            EvaluationOperator.GREATER_THAN_EQUALS, EvaluationOperator.VERSION_LESS_THAN,
            EvaluationOperator.VERSION_LESS_THAN_EQUALS, EvaluationOperator.VERSION_GREATER_THAN,
            EvaluationOperator.VERSION_GREATER_THAN_EQUALS -> containsNone
            EvaluationOperator.IS_NOT, EvaluationOperator.DOES_NOT_CONTAIN -> !containsNone
            else -> false
        }
    }

    private fun matchesIs(propValue: String, filterValues: Set<String>): Boolean {
        var transformedPropValue = propValue
        val containsBooleans = containsBooleans(filterValues)
        if (containsBooleans) {
            val lower: String = propValue.lowercase()
            if (lower == "true" || lower == "false") {
                transformedPropValue = lower
            }
        }
        return filterValues.contains(transformedPropValue)
    }

    private fun matchesContains(propValue: String, filterValues: Set<String>): Boolean {
        for (filterValue in filterValues) {
            if (filterValue.lowercase().contains(propValue.lowercase())) {
                return true
            }
        }
        return false
    }

    private fun <T : Comparable<T>> matchesComparable(
        propValue: String,
        op: String,
        filterValues: Set<String>,
        transformer: (String) -> T?,
    ): Boolean {
        val propValueTransformed: T? = transformer.invoke(propValue)
        return filterValues.any { filterValue ->
            if (propValueTransformed != null) {
                val filterValueTransformed: T? = transformer.invoke(filterValue)
                if (filterValueTransformed != null) {
                    matchesComparable(propValueTransformed, op, filterValueTransformed)
                }
            }
            matchesComparable(propValue, op, filterValue)
        }
    }

    private fun <T> matchesComparable(propValue: Comparable<T>, op: String, filterValue: T): Boolean {
        val compareTo = propValue.compareTo(filterValue)
        return when (op) {
            EvaluationOperator.LESS_THAN, EvaluationOperator.VERSION_LESS_THAN -> compareTo < 0
            EvaluationOperator.LESS_THAN_EQUALS, EvaluationOperator.VERSION_LESS_THAN_EQUALS -> compareTo <= 0
            EvaluationOperator.GREATER_THAN, EvaluationOperator.VERSION_GREATER_THAN -> compareTo > 0
            EvaluationOperator.GREATER_THAN_EQUALS, EvaluationOperator.VERSION_GREATER_THAN_EQUALS -> compareTo >= 0
            else -> throw IllegalArgumentException("Unexpected comparison operator $op")
        }
    }

    private fun containsNone(filterValues: Set<String>): Boolean {
        return filterValues.contains("(none)")
    }

    private fun containsBooleans(filterValues: Set<String>): Boolean {
        for (value in filterValues) {
            if ("true".equals(value, ignoreCase = true) || "false".equals(value, ignoreCase = true)) {
                return true
            }
        }
        return false
    }

    private fun parseDouble(value: String): Double? {
        return try {
            value.toDouble()
        } catch (e: NumberFormatException) {
            null
        }
    }

    private fun parseSemanticVersion(value: String): Version? {
        return try {
            Version.parse(value, strict = false)
        } catch (e: VersionFormatException) {
            null
        }
    }
}
