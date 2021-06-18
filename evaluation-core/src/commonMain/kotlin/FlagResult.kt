package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable

@Serializable
data class FlagResult(
    val variant: Variant,
    val description: String,
    val isDefaultVariant: Boolean,
) {
    internal constructor(
        flagConfig: FlagConfig,
        evaluationResult: EvaluationResult
    ): this(
        variant = evaluationResult.variant,
        description = evaluationResult.description,
        isDefaultVariant = flagConfig.defaultValue == evaluationResult.variant.key
    )
}