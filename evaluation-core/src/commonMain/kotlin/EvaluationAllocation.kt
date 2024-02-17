package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

@Serializable
data class EvaluationAllocation(
    // The distribution range [0, 100). That is the possibles values are 0-99.
    // E.g. [0, 44] is 50% allocation
    val range: List<Int>,

    // The distribution of variants if allocated.
    val distributions: List<EvaluationDistribution>,
)
