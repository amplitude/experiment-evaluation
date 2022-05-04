package com.amplitude.experiment.evaluation

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
        Operator.LESS_THAN, Operator.LESS_THAN_EQUALS, Operator.GREATER_THAN, Operator.GREATER_THAN_EQUALS -> value.matchesCompare(
            values,
            operator
        )
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
        Operator.LESS_THAN -> compareTo < 0
        Operator.LESS_THAN_EQUALS -> compareTo <= 0
        Operator.GREATER_THAN -> compareTo > 0
        Operator.GREATER_THAN_EQUALS -> compareTo >= 0
        else -> throw IllegalArgumentException("Unexpected operator $operator")
    }
}
