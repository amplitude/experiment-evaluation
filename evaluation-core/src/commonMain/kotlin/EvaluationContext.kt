@file:UseSerializers(AnySerializer::class)

package com.amplitude.experiment.evaluation

import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.UseSerializers
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.json.JsonObject

@Serializable(EvaluationContextSerializer::class)
class EvaluationContext : MutableMap<String, Any?> by LinkedHashMap(), Selectable {

    override fun select(selector: String): Any? = this[selector]
}

internal object EvaluationContextSerializer : KSerializer<EvaluationContext> {
    private val delegate = JsonObject.serializer()
    override val descriptor: SerialDescriptor
        get() = SerialDescriptor("EvaluationContext", delegate.descriptor)

    override fun serialize(encoder: Encoder, value: EvaluationContext) {
        val jsonObject = value.toJsonObject()
        encoder.encodeSerializableValue(delegate, jsonObject)
    }

    override fun deserialize(decoder: Decoder): EvaluationContext {
        val jsonElement = decoder.decodeSerializableValue(delegate)
        val map = jsonElement.toMap()
        return EvaluationContext().apply {
            putAll(map)
        }
    }
}
