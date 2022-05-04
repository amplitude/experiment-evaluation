import com.amplitude.experiment.evaluation.EvaluationEngineImpl
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * [rules] is a JSON representation of Array<[FlagConfig]>
 *
 * [user] is a JSON representation of [ExperimentUser]
 *
 * returns a JSON representation of Map<String, [FlagResult]>
 */
@OptIn(ExperimentalJsExport::class, ExperimentalSerializationApi::class)
@JsExport
fun evaluate(rules: String, user: String): String {
    val format = Json {
        ignoreUnknownKeys = true
        isLenient = true
        coerceInputValues = true
    }
    val engine = EvaluationEngineImpl()
    val flagsDecoded = format.decodeFromString<List<FlagConfig>>(rules)
    val userDecoded = format.decodeFromString<ExperimentUser>(user)
    val results = engine.evaluate(flagsDecoded.map { it.convert() }, userDecoded.convert())
    return format.encodeToString(results.mapValues { FlagResult(it.value) })
}
