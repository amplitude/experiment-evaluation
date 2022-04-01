import com.amplitude.experiment.evaluation.EvaluationEngineImpl
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

private val engine = EvaluationEngineImpl()

/**
 * [rules] is a JSON representation of List<[FlagConfig]>
 *
 * [user] is a JSON representation of [ExperimentUser]
 *
 * returns a JSON representation of Map<String, FlagResult>
 */
@OptIn(ExperimentalJsExport::class, ExperimentalSerializationApi::class)
@JsExport
fun evaluate(rules: String, user: String): String {
    val flagsDecoded = format.decodeFromString<List<FlagConfig>>(rules)
    val userDecoded = format.decodeFromString<ExperimentUser>(user)
    val results = engine.evaluate(flagsDecoded.map { it.convert() }, userDecoded.convert())
    return format.encodeToString(results.mapValues { FlagResult(it.value) })
}
