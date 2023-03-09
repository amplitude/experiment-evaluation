package com.amplitude.experiment.evaluation.util

import com.amplitude.experiment.evaluation.Allocation
import com.amplitude.experiment.evaluation.FLAG_TYPE_RELEASE
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.ParentDependencies
import com.amplitude.experiment.evaluation.SegmentTargetingConfig
import com.amplitude.experiment.evaluation.Variant

fun flagConfig(
    key: String = "flag-config",
    flagVersion: Int = 0,
    enabled: Boolean = true,
    bucketingSalt: String = "abcd",
    defaultValue: String? = "off",
    variants: List<Variant> = listOf(Variant("on")),
    variantsInclusions: Map<String, Set<String>>? = null,
    allUsersTargetingConfig: SegmentTargetingConfig = SegmentTargetingConfig(
        "All Users Segment",
        listOf(),
        listOf(Allocation(100, mapOf("on" to 1))),
        "user_id"
    ),
    customSegmentTargetingConfig: List<SegmentTargetingConfig> = listOf(
        SegmentTargetingConfig(
            "Segment 1",
            listOf(),
            listOf(Allocation(100, mapOf("on" to 1))),
            "user_id"
        )
    ),
    parentDependencies: ParentDependencies? = null,
    type: String = FLAG_TYPE_RELEASE,
    deployed: Boolean = true,
): FlagConfig {
    return FlagConfig(
        flagKey = key,
        flagVersion = flagVersion,
        enabled = enabled,
        bucketingSalt = bucketingSalt,
        defaultValue = defaultValue,
        variants = variants,
        variantsInclusions = variantsInclusions,
        allUsersTargetingConfig = allUsersTargetingConfig,
        customSegmentTargetingConfigs = customSegmentTargetingConfig,
        parentDependencies = parentDependencies,
        type = type,
        deployed = deployed,
    )
}
