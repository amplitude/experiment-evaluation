@file:UseSerializers(AnySerializer::class)

package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable
import kotlinx.serialization.UseSerializers

/**
 *
 */
@Serializable
data class EvaluationFlag(
    // The flag key. Must be unique within a project.
    val key: String,

    // The flag's variants. The result of a flag evaluation is zero or one
    // variant.
    val variants: Map<String, EvaluationVariant>,

    // The targeting segments. targets and buckets users into a variant.
    val segments: List<EvaluationSegment>,

    // The flag's dependencies, used to order the flags prior to evaluation.
    val dependencies: Set<String>? = null,

    // An object of metadata for this flag. Contains information useful
    // outside evaluation. The bucketing segment's metadata is merged with
    // the flag metadata and returned within the evaluation result.
    val metadata: Map<String, Any?>? = null
)
