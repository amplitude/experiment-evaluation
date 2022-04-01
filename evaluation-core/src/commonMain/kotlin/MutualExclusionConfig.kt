package com.amplitude.experiment.evaluation

data class MutualExclusionConfig(
    val groupSalt: String,
    val lowerBound: Int,
    val percentage: Int,
    val bucketingKey: String = DEFAULT_BUCKETING_KEY,
)
