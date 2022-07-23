package com.amplitude.experiment.evaluation

import kotlin.native.concurrent.SharedImmutable

@SharedImmutable
const val DEFAULT_BUCKETING_KEY = "amplitude_id"

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
)
