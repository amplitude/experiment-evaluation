import com.amplitude.experiment.evaluation.EvaluationContext
import com.amplitude.experiment.evaluation.EvaluationEngineImpl
import com.amplitude.experiment.evaluation.EvaluationFlag
import com.amplitude.experiment.evaluation.EvaluationVariant
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

internal val json = Json {
    ignoreUnknownKeys = true
    isLenient = true
    coerceInputValues = true
    explicitNulls = false
}

internal val engine = EvaluationEngineImpl()

/**
 * A serialized result to allow errors to be passed back from the library and
 * handled natively by the caller. Uncaught exceptions are otherwise sent as
 * SIGABRT signals which will kill the process unnecessarily.
 */
@Serializable
internal data class InteropResult(
    val result: Map<String, EvaluationVariant>? = null,
    val error: String? = null,
) {
    companion object {
        fun success(result: Map<String, EvaluationVariant>) =
            InteropResult(result = result, error = null)

        fun error(error: Exception) =
            InteropResult(error = error.toString())
    }
}

fun evaluate(flags: String, context: String): String {
    val interopResult = try {
        val flagsDecoded = json.decodeFromString<List<EvaluationFlag>>(flags)
        val contextDecoded = json.decodeFromString<EvaluationContext>(context)
        val results = engine.evaluate(contextDecoded, flagsDecoded)
        InteropResult.success(results)
    } catch (e: Exception) {
        InteropResult.error(e)
    }
    return json.encodeToString(interopResult)
}
