package com.amplitude.experiment.evaluation

import kotlin.native.concurrent.SharedImmutable

@SharedImmutable const val FLAG_TYPE_RELEASE = "release"
@SharedImmutable const val FLAG_TYPE_EXPERIMENT = "experiment"
@SharedImmutable const val FLAG_TYPE_MUTUAL_EXCLUSION_GROUP = "mutual-exclusion-group"
@SharedImmutable const val FLAG_TYPE_HOLDOUT_GROUP = "holdout-group"
@SharedImmutable const val FLAG_TYPE_RELEASE_GROUP = "release-group"

data class FlagConfig(
    val flagKey: String,
    val experimentKey: String? = null,
    val flagVersion: Int = 0,
    val enabled: Boolean,
    val bucketingSalt: String,
    val defaultValue: String? = null,
    val variants: List<Variant>,
    val variantsInclusions: Map<String, Set<String>>? = null,
    val allUsersTargetingConfig: SegmentTargetingConfig,
    val customSegmentTargetingConfigs: List<SegmentTargetingConfig>? = null,
    val parentDependencies: ParentDependencies? = null,
    val type: String = FLAG_TYPE_RELEASE,
    val deployed: Boolean = true,
)
