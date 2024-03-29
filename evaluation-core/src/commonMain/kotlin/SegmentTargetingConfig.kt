package com.amplitude.experiment.evaluation

import kotlin.native.concurrent.SharedImmutable

@SharedImmutable
private val VERSION_USER_PROPS: Set<String> = hashSetOf("version", "start_version")

@SharedImmutable
private val VERSION_OPERATOR_MAP: Map<Operator, Operator> = mapOf(
    Operator.LESS_THAN to Operator.VERSION_LESS_THAN,
    Operator.LESS_THAN_EQUALS to Operator.VERSION_LESS_THAN_EQUALS,
    Operator.GREATER_THAN to Operator.VERSION_GREATER_THAN,
    Operator.GREATER_THAN_EQUALS to Operator.VERSION_GREATER_THAN_EQUALS
)

data class SegmentTargetingConfig(
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
            // NOTE(bgiori): this is different from remote evaluation since we
            // don't allow selecting the amplitude `version` or `start_version`
            // user props from the UI. If the semver parsing fails the version
            // comparison operators should fall back on a normal string compare.
            val op = if (filter.prop.contains(SkylabUser.VERSION)) {
                filter.op.toVersionOperator()
            } else {
                filter.op
            }

            val matchFilter = StringMatchColumnFilter(filter.prop, op, filter.values)
            val userPropValue = user.getPropertyValue(filter.prop)
            val matchesFilter = if (userPropValue == null) {
                matchFilter.matchesNull()
            } else {
                try {
                    matchFilter.matches(userPropValue)
                } catch (e: IllegalArgumentException) {
                    Logger.e("failed to match filter $matchFilter", e)
                    false
                }
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

private fun Operator.toVersionOperator(): Operator {
    return VERSION_OPERATOR_MAP[this] ?: this
}
