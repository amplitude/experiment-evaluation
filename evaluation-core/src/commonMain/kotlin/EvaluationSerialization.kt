package com.amplitude.experiment.evaluation

import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.contentOrNull
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.floatOrNull
import kotlinx.serialization.json.intOrNull
import kotlinx.serialization.json.longOrNull
import kotlin.jvm.JvmStatic

object EvaluationSerialization {

    @JvmStatic
    val JSON = json

    @JvmStatic
    fun toJsonObject(value: Map<String, Any?>?): JsonObject? = value?.toJsonObject()

    @JvmStatic
    fun fromJsonObject(jsonObject: JsonObject?): Map<String, Any?>? = jsonObject?.toMap()

    @JvmStatic
    fun serializeFlags(flags: List<EvaluationFlag>): String =
        json.encodeToString(ListSerializer(EvaluationFlag.serializer()), flags)
}

internal val json = Json {
    ignoreUnknownKeys = true
    isLenient = true
    coerceInputValues = true
    explicitNulls = false
}

internal fun Any?.toJsonElement(): JsonElement = when (this) {
    null -> JsonNull
    is Map<*, *> -> toJsonObject()
    is Collection<*> -> toJsonArray()
    is Boolean -> JsonPrimitive(this)
    is Number -> JsonPrimitive(this)
    is String -> JsonPrimitive(this)
    else -> JsonPrimitive(toString())
}

internal fun Collection<*>.toJsonArray(): JsonArray = JsonArray(map { it.toJsonElement() })

internal fun Map<*, *>.toJsonObject(): JsonObject = JsonObject(
    mapNotNull {
        (it.key as? String ?: return@mapNotNull null) to it.value.toJsonElement()
    }.toMap(),
)

internal fun JsonElement.toAny(): Any? {
    return when (this) {
        is JsonPrimitive -> toAny()
        is JsonArray -> toList()
        is JsonObject -> toMap()
    }
}

internal fun JsonPrimitive.toAny(): Any? {
    return if (isString) {
        contentOrNull
    } else {
        booleanOrNull ?: intOrNull ?: longOrNull ?: doubleOrNull
    }
}

internal fun JsonArray.toList(): List<Any?> = map { it.toAny() }

internal fun JsonObject.toMap(): Map<String, Any?> = mapValues { it.value.toAny() }

