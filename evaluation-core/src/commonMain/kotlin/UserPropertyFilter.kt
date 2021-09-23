package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

private const val COHORT_PROP_KEY = "userdata_cohort"

@Serializable
data class UserPropertyFilter(
    val prop: String,
    val op: Operator,
    val values: Set<String>,
)

internal fun UserPropertyFilter.isCohortFilter(): Boolean {
    return prop == COHORT_PROP_KEY
}
