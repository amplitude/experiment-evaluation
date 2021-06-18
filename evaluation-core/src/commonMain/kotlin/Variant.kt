package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement


@Serializable
data class Variant(
    val key: String? = null,
    val payload: JsonElement? = null,
)