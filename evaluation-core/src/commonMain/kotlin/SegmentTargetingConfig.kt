package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.Logger
import kotlinx.serialization.Serializable

@Serializable
internal data class SegmentTargetingConfig(
    val name: String,
    val conditions: List<UserPropertyFilter>,
    val allocations: List<Allocation>,
    val bucketingKey: String,
)

internal fun SegmentTargetingConfig.match(user: SkylabUser?): Boolean {
    return conditions.match(user)
}

private fun List<UserPropertyFilter>.match(user: SkylabUser?): Boolean {
    if (user == null) {
        return false
    }
    Logger.d("User: $user to be matched against filters for segment: $this")
    for (filter in this) {
        // cohorts are treated specially
        if (filter.isCohortFilter()) {
            val userMatchesCohortFilter = user.matchesCohortUserPropFilter(filter)
            Logger.d("User: $user returned: $userMatchesCohortFilter for cohort match for filter: $filter")
            if (!userMatchesCohortFilter) {
                return false
            }
        } else {
            val matchFilter = StringMatchColumnFilter(filter.prop, filter.op, filter.values)
            val userPropValue = user.getProperty(filter.prop)
            val matchesFilter = if (userPropValue == null) {
                matchFilter.matchesNull()
            } else {
                matchFilter.matches(userPropValue)
            }
            if (!matchesFilter) {
                return false
            }
        }
    }
    // if the user meets all filter conditions, return true
    Logger.d("User: $user matches all filters for segment: $this")
    return true
}

private fun SkylabUser?.matchesCohortUserPropFilter(userFilter: UserPropertyFilter): Boolean {
    return when (userFilter.op) {
        Operator.IS -> this.belongsToCohort(userFilter.values)
        Operator.IS_NOT -> !this.belongsToCohort(userFilter.values)
        else -> throw IllegalArgumentException("Not supported for cohorts")
    }
}

private fun SkylabUser?.belongsToCohort(filterCohortIds: Set<String>): Boolean {
    if (filterCohortIds.isEmpty()) {
        return true
    }
    if (this == null || cohortIds.isNullOrEmpty()) {
        return false
    }
    for (cohortId in filterCohortIds) {
        if (cohortIds.contains(cohortId)) {
            return true
        }
    }
    return false
}