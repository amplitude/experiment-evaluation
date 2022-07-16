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

internal fun FlagConfig.getFullyRolledOutVariantIfPresent(): Variant? {
    val totalAllocationPercentage: Int = allUsersTargetingConfig.allocations.sumOf { it.percentage }
    if (totalAllocationPercentage < 10000) {
        return null
    }

    // If a flag is rolled out to 100% and there's only one variant, return the variant
    if (variants.size == 1) {
        return variants[0]
    }

    val weights: Map<String, Int> = allUsersTargetingConfig.allocations[0].weights
        ?: return null
    var fullyRolledOutVariant: Variant? = null
    var variantsWithWeights = 0
    for (variant in variants) {
        if ((weights[variant.key] ?: 0) > 0) {
            fullyRolledOutVariant = variant
            variantsWithWeights++
        }
    }
    if (variantsWithWeights == 1) {
        return fullyRolledOutVariant
    }
    return null
}
