package com.amplitude.experiment.evaluation

data class Allocation(
    val percentage: Int,
    val weights: Map<String, Int>?
)

internal fun Allocation.getVariantDistribution(variants: List<Variant>): List<VariantDistribution> {
    val distribution: MutableList<VariantDistribution> = arrayListOf()
    val totalWeight: Long = getTotalWeightForVariants(variants)
    if (totalWeight == 0L) {
        // if everything is 0, even distribution
        val pct = 1.0 / variants.size
        for (i in variants.indices) {
            distribution.add(VariantDistribution(variants[i], pct, (i + 1) * pct))
        }
    } else {
        var cumulativeWeight = 0
        var cumulativePct = 0.0
        for (variant in variants) {
            var pct = 0.0
            val variantRolloutWeight: Int = weights?.get(variant.key) ?: 0
            if (variantRolloutWeight > 0) {
                cumulativeWeight += variantRolloutWeight
                pct = variantRolloutWeight.toDouble() / totalWeight
                cumulativePct = cumulativeWeight.toDouble() / totalWeight
            }
            distribution.add(VariantDistribution(variant, pct, cumulativePct))
        }
    }
    return distribution
}

internal fun Allocation.getTotalWeightForVariants(variants: List<Variant>): Long {
    var totalWeight: Long = 0
    // some old configurations don't have this defined; ignore rollout info in that case
    if (weights != null) {
        for (variant in variants) {
            totalWeight += weights[variant.key] ?: 0
        }
    }
    return totalWeight
}

/**
 * Utility method to convert from an percentage (old values [0-100]) and map of rollout weights
 */
internal fun fromCentilePercentage(percentage: Int, rolloutWeights: Map<String, Int>?): Allocation {
    return Allocation(percentage * 100, rolloutWeights)
}
