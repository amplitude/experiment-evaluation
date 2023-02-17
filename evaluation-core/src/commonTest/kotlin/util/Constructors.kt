package com.amplitude.experiment.evaluation.util

import com.amplitude.experiment.evaluation.DEFAULT_BUCKETING_KEY
import com.amplitude.experiment.evaluation.DependencyOperator
import com.amplitude.experiment.evaluation.EvaluationMode
import com.amplitude.experiment.evaluation.FLAG_TYPE_RELEASE
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.ParentDependencies
import com.amplitude.experiment.evaluation.SegmentTargetingConfig

fun flagConfig(key: String, parentDependencies: ParentDependencies? = null, defaultValue: String? = "off"): FlagConfig {
    return FlagConfig(
        flagKey = key,
        enabled = true,
        bucketingKey = DEFAULT_BUCKETING_KEY,
        bucketingSalt = null,
        defaultValue = defaultValue,
        variants = listOf(),
        variantsExclusions = null,
        variantsInclusions = null,
        allUsersTargetingConfig = SegmentTargetingConfig("", listOf(), listOf(), null),
        customSegmentTargetingConfigs = listOf(),
        evalMode = EvaluationMode.LOCAL,
        parentDependencies = parentDependencies,
        deployed = true,
    )
}

fun flagConfig(key: Int, parents: Set<Int>, deployed: Boolean): FlagConfig {
    return FlagConfig(
        flagKey = key.toString(),
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
        parentDependencies = ParentDependencies(DependencyOperator.ALL, parents.associate { it.toString() to setOf() }),
        type = FLAG_TYPE_RELEASE,
        deployed = deployed,
    )
}
