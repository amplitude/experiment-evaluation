package com.amplitude.experiment.evaluation

import kotlin.native.concurrent.SharedImmutable

@SharedImmutable
const val DEFAULT_BUCKETING_KEY = "amplitude_id"
@SharedImmutable
const val FLAG_TYPE_RELEASE = "RELEASE"
@SharedImmutable
const val FLAG_TYPE_EXPERIMENT = "EXPERIMENT"

data class FlagConfig(
    val flagKey: String,
    val enabled: Boolean = false,
    val bucketingKey: String = DEFAULT_BUCKETING_KEY,
    val bucketingSalt: String? = null,
    val defaultValue: String? = null,
    val variants: List<Variant>,
    val variantsExclusions: Map<String, Set<String>>?,
    val variantsInclusions: Map<String, Set<String>>?,
    val allUsersTargetingConfig: SegmentTargetingConfig,
    val customSegmentTargetingConfigs: List<SegmentTargetingConfig>?,
    val evalMode: EvaluationMode = EvaluationMode.REMOTE,
    val parentDependencies: ParentDependencies? = null,
    val type: String = FLAG_TYPE_RELEASE,
    val deployed: Boolean = true,
)
