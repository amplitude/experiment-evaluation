package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.Operator.*

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
        IS,
        CONTAINS,
        LESS_THAN,
        LESS_THAN_EQUALS,
        GREATER_THAN,
        GREATER_THAN_EQUALS,
        VERSION_LESS_THAN,
        VERSION_LESS_THAN_EQUALS,
        VERSION_GREATER_THAN,
        VERSION_GREATER_THAN_EQUALS,
        SET_IS,
        SET_CONTAINS -> hasNone
        IS_NOT, DOES_NOT_CONTAIN -> !hasNone
        SET_IS_NOT, SET_DOES_NOT_CONTAIN, GLOB_DOES_NOT_MATCH -> true
        CSS_MATCH, GLOB_MATCH -> false
        else -> throw IllegalArgumentException("Unexpected operator $operator")
    }
}

internal fun StringMatchColumnFilter.matches(value: String?): Boolean {
    return when (operator) {
        IS -> value.matchesIs(values, hasBooleans)
        IS_NOT -> !value.matchesIs(values, hasBooleans)
        CONTAINS -> value.matchesContains(values)
        DOES_NOT_CONTAIN -> !value.matchesContains(values)
        LESS_THAN, LESS_THAN_EQUALS, GREATER_THAN, GREATER_THAN_EQUALS -> value.matchesCompare(values, operator)
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

private fun String?.matchesCompare(values: Set<String?>, operator: Operator): Boolean {
    return values.any { compareStrings(operator, it) }
}


private fun String?.compareStrings(operator: Operator, filterValue: String?): Boolean {
    if (this == null || filterValue == null) {
        return false
    }
    val compareTo = this.compareTo(filterValue)
    return when (operator) {
        LESS_THAN -> compareTo < 0
        LESS_THAN_EQUALS -> compareTo <= 0
        GREATER_THAN -> compareTo > 0
        GREATER_THAN_EQUALS -> compareTo >= 0
        else -> throw IllegalArgumentException("Unexpected operator $operator")
    }
}