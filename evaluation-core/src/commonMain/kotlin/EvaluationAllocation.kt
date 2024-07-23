package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

@Serializable
data class EvaluationAllocation(
    // The max for the allocation range. This number is used to modulo the hash
    // to compare with the range.
    val max: Int = 100,

    // The distribution range [0, max). That is the possibles values are [0, max-1].
    // E.g. with max 100, [0, 49] is 50% allocation
    val range: List<Int>,

    // The distribution of variants if allocated.
    val distributions: List<EvaluationDistribution>
)
