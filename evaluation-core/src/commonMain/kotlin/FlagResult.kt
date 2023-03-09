package com.amplitude.experiment.evaluation

data class FlagResult(
    val variant: Variant,
    val description: String,
    val isDefaultVariant: Boolean,
    val expKey: String?,
    val deployed: Boolean,
    val type: String?,
) {
    internal constructor(
        flagConfig: FlagConfig,
        evaluationResult: EvaluationResult
    ) : this(
        variant = evaluationResult.variant,
        description = evaluationResult.description,
        isDefaultVariant = flagConfig.defaultValue == evaluationResult.variant.key,
        expKey = flagConfig.experimentKey,
        deployed = flagConfig.deployed,
        type = flagConfig.type
    )
}
