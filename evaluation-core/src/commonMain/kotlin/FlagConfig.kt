package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

internal const val DEFAULT_BUCKETING_KEY = "amplitude_id"

@Serializable
data class FlagConfig(
    val flagKey: String,
    val flagName: String,
    val flagVersion: Int = 0,
    val enabled: Boolean = false,
    val bucketingKey: String = DEFAULT_BUCKETING_KEY,
    val bucketingSalt: String? = null,
    val useStickyBucketing: Boolean = false,
    val globalHoldbackSalt: String? = null,
    val globalHoldbackPct: Int = 0,
    val mutualExclusionConfig: MutualExclusionConfig? = null,
    val defaultValue: String? = null,
    val variants: List<Variant>,
    val variantsExclusions: Map<String, Set<String>>?,
    val variantsInclusions: Map<String, Set<String>>?,
    val allUsersTargetingConfig: SegmentTargetingConfig, // TODO java code allows this to be null, only null in tests
    val customSegmentTargetingConfigs: List<SegmentTargetingConfig>?,
    val userProperty: String?,
    val evalMode: EvaluationMode = EvaluationMode.REMOTE,
) {
    // TODO can this just be a constant?
    val globalHoldbackBucketingKey = DEFAULT_BUCKETING_KEY
}

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
        if (weights[variant.key] ?: 0 > 0) {
            fullyRolledOutVariant = variant
            variantsWithWeights++
        }
    }
    if (variantsWithWeights == 1) {
        return fullyRolledOutVariant
    }
    return null
}
