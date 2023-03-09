import com.amplitude.experiment.evaluation.EvaluationEngineImpl
import com.amplitude.experiment.evaluation.serialization.SerialExperimentUser
import com.amplitude.experiment.evaluation.serialization.SerialFlagConfig
import com.amplitude.experiment.evaluation.serialization.SerialFlagResult
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
 * [rules] is a JSON representation of Array<[FlagConfig]>
 *
 * [user] is a JSON representation of [ExperimentUser]
 *
 * returns a JSON representation of Map<String, [FlagResult]>
 */
fun evaluate(rules: String, user: String): String {
    val flagsDecoded = format.decodeFromString<List<SerialFlagConfig>>(rules)
    val userDecoded = format.decodeFromString<SerialExperimentUser>(user)
    val results = engine.evaluate(flagsDecoded.map { it.convert() }, userDecoded.convert())
    return format.encodeToString(results.mapValues { SerialFlagResult(it.value) })
}
