import com.amplitude.experiment.evaluation.EvaluationEngineImpl
import com.amplitude.experiment.evaluation.FlagConfig
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

private val engine = EvaluationEngineImpl()

/**
 * [rules] is a JSON representation of List<[FlagConfig]>
 *
 * [user] is a JSON representation of [ExperimentUser]
 *
 * returns a JSON representation of Map<String, FlagResult>
 */
@OptIn(ExperimentalJsExport::class)
@JsExport
fun evaluate(rules: String, user: String): String {
    val flagsDecoded = format.decodeFromString<List<FlagConfig>>(rules)
    val userDecoded = format.decodeFromString<ExperimentUser>(user)
    val results = engine.evaluate(flagsDecoded, userDecoded.toSkylabUser())
    return format.encodeToString(results)
}
