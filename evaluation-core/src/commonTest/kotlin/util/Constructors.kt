package com.amplitude.experiment.evaluation.util

import com.amplitude.experiment.evaluation.DEFAULT_BUCKETING_KEY
import com.amplitude.experiment.evaluation.EvaluationMode
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.SegmentTargetingConfig

fun flagConfig(key: Int, parents: Set<Int>): FlagConfig {
    return FlagConfig(key.toString(),
        enabled = true,
        bucketingKey = DEFAULT_BUCKETING_KEY,
        bucketingSalt = null,
        defaultValue = null,
        variants = listOf(),
        variantsExclusions = null,
        variantsInclusions = null,
        allUsersTargetingConfig = SegmentTargetingConfig("", listOf(), listOf(), null),
        customSegmentTargetingConfigs = listOf(),
        evalMode = EvaluationMode.LOCAL,
        dependencyOperator = null,
        parentDependencies = parents.associate { it.toString() to null }
    )
}
