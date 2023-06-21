package com.amplitude.experiment.evaluation

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject

@Serializable
data class EvaluationVariant(
    val key: String,
    val value: JsonElement,
    val metadata: JsonObject?,
) : Selectable {
    override fun select(selector: String): Any? {
        return when (selector) {
            "key" -> key
            "value" -> value
            "metadata" -> metadata
            else -> null
        }
    }
}
