package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

@Serializable
internal data class MutualExclusionConfig(
    val groupSalt: String,
    val lowerBound: Int,
    val percentage: Int,
    val bucketingKey: String = DEFAULT_BUCKETING_KEY,
)