package com.amplitude.experiment.evaluation

import io.github.z4kn4fein.semver.Version
import io.github.z4kn4fein.semver.VersionFormatException
import kotlin.native.concurrent.SharedImmutable

@SharedImmutable
private const val NONE = "(none)"

internal data class StringMatchColumnFilter(
    val columnName: String,
    val operator: Operator,
    val values: Set<String?>,
) {
    val hasNone = values.containsNone()
    val hasBooleans = values.containsBooleans()
}

internal fun StringMatchColumnFilter.matchesNull(): Boolean {
    return when (operator) {
        Operator.IS,
        Operator.CONTAINS,
        Operator.LESS_THAN,
        Operator.LESS_THAN_EQUALS,
        Operator.GREATER_THAN,
        Operator.GREATER_THAN_EQUALS,
        Operator.VERSION_LESS_THAN,
        Operator.VERSION_LESS_THAN_EQUALS,
        Operator.VERSION_GREATER_THAN,
        Operator.VERSION_GREATER_THAN_EQUALS,
        Operator.SET_IS,
        Operator.SET_CONTAINS -> hasNone
        Operator.IS_NOT, Operator.DOES_NOT_CONTAIN -> !hasNone
        Operator.SET_IS_NOT, Operator.SET_DOES_NOT_CONTAIN, Operator.GLOB_DOES_NOT_MATCH -> true
        Operator.CSS_MATCH, Operator.GLOB_MATCH -> false
        else -> throw IllegalArgumentException("Unexpected operator $operator")
    }
}

internal fun StringMatchColumnFilter.matches(value: String?): Boolean {
    return when (operator) {
        Operator.IS -> value.matchesIs(values, hasBooleans)
        Operator.IS_NOT -> !value.matchesIs(values, hasBooleans)
        Operator.CONTAINS -> value.matchesContains(values)
        Operator.DOES_NOT_CONTAIN -> !value.matchesContains(values)
        Operator.LESS_THAN,
        Operator.LESS_THAN_EQUALS,
        Operator.GREATER_THAN,
        Operator.GREATER_THAN_EQUALS -> value.matchesCompare(values, operator)
        Operator.VERSION_LESS_THAN,
        Operator.VERSION_LESS_THAN_EQUALS,
        Operator.VERSION_GREATER_THAN,
        Operator.VERSION_GREATER_THAN_EQUALS -> value.matchesVersion(values, operator)
        Operator.HAS_PREFIX -> value.matchesHasPrefix(values)
        Operator.ENDS_WITH -> value.matchesEndsWith(values)
        else -> throw IllegalArgumentException("Unexpected or unsupported operator $operator")
    }
}

private fun Set<String?>.containsNone(): Boolean {
    return contains(NONE)
}

private fun Set<String?>.containsBooleans(): Boolean {
    return any { it == "true" || it == "false" }
}

private fun String?.matchesIs(values: Set<String?>, hasBooleans: Boolean): Boolean {
    var value: String? = this
    if (hasBooleans) {
        val lower = this?.lowercase()
        if (lower == "true" || lower == "false") {
            value = lower
        }
    }
    return values.contains(value)
}

private fun String?.matchesContains(values: Set<String?>): Boolean {
    if (this == null) {
        return false
    }
    for (filterValue in values) {
        val filter = filterValue ?: continue
        if (this.contains(filter, ignoreCase = true)) {
            return true
        }
    }
    return false
}

private fun String?.matchesHasPrefix(values: Set<String?>): Boolean {
    if (this == null) {
        return false
    }
    for (filterValue in values) {
        val filter = filterValue ?: continue
        if (this.startsWith(filter)) {
            return true
        }
    }
    return false
}

private fun String?.matchesEndsWith(values: Set<String?>): Boolean {
    if (this == null) {
        return false
    }
    for (filterValue in values) {
        val filter = filterValue ?: continue
        if (this.endsWith(filter)) {
            return true
        }
    }
    return false
}

private fun String?.matchesCompare(values: Set<String?>, operator: Operator): Boolean {
    val valueNumber = this?.toDoubleOrNull()
    return if (valueNumber != null) {
        values.any { filterValue ->
            val filterValueNumber = filterValue?.toDoubleOrNull()
            if (filterValueNumber == null) {
                this.compare(operator, filterValue)
            } else {
                valueNumber.compare(operator, filterValueNumber)
            }
        }
    } else {
        values.any { compare(operator, it) }
    }
}

private fun <T> Comparable<T>?.compare(operator: Operator, filterValue: T?): Boolean {
    if (this == null && filterValue == null) {
        return true
    } else if (this == null || filterValue == null) {
        return false
    }
    val compareTo = this.compareTo(filterValue)
    // Also support version operators, if version parsing fails.
    return when (operator) {
        Operator.LESS_THAN, Operator.VERSION_LESS_THAN -> compareTo < 0
        Operator.LESS_THAN_EQUALS, Operator.VERSION_LESS_THAN_EQUALS -> compareTo <= 0
        Operator.GREATER_THAN, Operator.VERSION_GREATER_THAN -> compareTo > 0
        Operator.GREATER_THAN_EQUALS, Operator.VERSION_GREATER_THAN_EQUALS -> compareTo >= 0
        else -> throw IllegalArgumentException("Unexpected comparison operator $operator")
    }
}

private fun String?.matchesVersion(values: Set<String?>, operator: Operator): Boolean {
    return values.any { compareVersions(operator, it) }
}

private fun String?.compareVersions(operator: Operator, filterValue: String?): Boolean {
    if (this == null && filterValue == null) {
        return true
    } else if (this == null || filterValue == null) {
        return false
    }
    // Parse semantic versions. If either fails, fallback on string compare.
    return try {
        val thisSemver = Version.parse(this, strict = false)
        val filterValueSemver = Version.parse(filterValue, strict = false)
        thisSemver.compare(operator, filterValueSemver)
    } catch (e: VersionFormatException) {
        this.compare(operator, filterValue)
    }
}
