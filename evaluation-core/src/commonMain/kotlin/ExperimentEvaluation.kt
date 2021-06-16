package com.amplitude.experiment.evaluation

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

private val format = Json {
    ignoreUnknownKeys = true
    isLenient = true
    coerceInputValues = true
}

@OptIn(ExperimentalJsExport::class)
@JsExport
class ExperimentEvaluation {

    private val engine = EvaluationEngineImpl()

    /**
     * [flags] is a JSON representation of [FlagConfig]
     *
     * [user] is a JSON representation of [ExperimentUser]
     *
     * returns a JSON representation of Map<String, FlagResult>
     */
    fun evaluate(flags: String, user: String): String {
        val flagsDecoded = format.decodeFromString<List<FlagConfig>>(flags)
        val userDecoded = format.decodeFromString<ExperimentUser>(user)
        val results = engine.evaluate(flagsDecoded, userDecoded.toSkylabUser())
        return format.encodeToString(results)
    }
}