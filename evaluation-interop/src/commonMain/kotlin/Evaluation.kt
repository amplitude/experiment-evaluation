import com.amplitude.experiment.evaluation.EvaluationEngineImpl
import com.amplitude.experiment.evaluation.serialization.SerialExperimentUser
import com.amplitude.experiment.evaluation.serialization.SerialFlagConfig
import com.amplitude.experiment.evaluation.serialization.SerialFlagResult
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

@SharedImmutable
internal val format = Json {
    ignoreUnknownKeys = true
    isLenient = true
    coerceInputValues = true
}

@SharedImmutable
internal val engine = EvaluationEngineImpl()

/**
 * A serialized result to allow errors to be passed back from the library and
 * handled natively by the caller. Uncaught exceptions are otherwise sent as
 * SIGABRT signals which will kill the process unnecessarily.
 */
@Serializable
internal data class InteropResult(
    @SerialName("result")
    val result: Map<String, SerialFlagResult>? = null,
    @SerialName("error")
    val error: String? = null,
) {
    companion object {
        fun success(result: Map<String, SerialFlagResult>) =
            InteropResult(result = result, error = null)

        fun error(error: Exception) =
            InteropResult(error = error.toString())
    }
}

/**
 * [rules] is a JSON representation of Array<[FlagConfig]>
 *
 * [user] is a JSON representation of [ExperimentUser]
 *
 * returns a JSON representation of Map<String, [FlagResult]>
 */
fun evaluate(rules: String, user: String): String {
    val interopResult = try {
        val flagsDecoded = format.decodeFromString<List<SerialFlagConfig>>(rules)
        val userDecoded = format.decodeFromString<SerialExperimentUser>(user)
        val results = engine.evaluate(flagsDecoded.map { it.convert() }, userDecoded.convert())
        val serializableResults = results.mapValues { SerialFlagResult(it.value) }
        InteropResult.success(serializableResults)
    } catch (e: Exception) {
        InteropResult.error(e)
    }
    return format.encodeToString(interopResult)
}
