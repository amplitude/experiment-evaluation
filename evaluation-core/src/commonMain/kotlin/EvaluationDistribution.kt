package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

@Serializable
data class EvaluationDistribution(
    // The key of the variant to deliver if this range matches.
    val variant: String,

    // The percentage (as permyriad, 1/10,000th) range of this variant in
    // the total distribution.
    // E.g. [5000,10000] = (50%,100%]
    val range: List<Int>,
)
