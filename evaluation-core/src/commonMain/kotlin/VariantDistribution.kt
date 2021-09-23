package com.amplitude.experiment.evaluation

internal data class VariantDistribution(
    var variant: Variant,
    var pct: Double,
    var cumulativePct: Double,
)
