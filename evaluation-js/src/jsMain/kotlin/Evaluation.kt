import com.amplitude.experiment.evaluation.EvaluationEngineImpl
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
@OptIn(ExperimentalJsExport::class)
@JsExport
fun evaluate(rules: dynamic, user: dynamic): dynamic {
    // Map dynamic javascript objects to kotlin objects
    val flagConfigs = dynamicListOf(js = rules) { dynamicFlagConfig(js = it)!! }!!
    val skylabUser = dynamicSkylabUser(js = user)!!

    // Evaluate user for flag configurations
    val results = engine.evaluate(flagConfigs, skylabUser)
    if (results.isEmpty()) {
        return JSON.parse("{}")
    }

    // Build JSON Output
    val sb = StringBuilder()
    sb.append("{")
    results.forEach {
        if (!it.value.isDefaultVariant) {
            val flagKey = it.key
            val variantKey = it.value.variant.key
            val variantPayload = it.value.variant.payload
            val expKey = it.value.expKey
            val deployed = it.value.deployed
            val type = it.value.type
            sb.append(
                "\"${flagKey}\":{" +
                    "\"value\":\"${variantKey ?: "null"}\"," +
                    "\"payload\":${JSON.stringify(variantPayload)}," +
                    "\"expKey\":${expKey ?: "null"}," +
                    "\"deployed\":$deployed," +
                    "\"type\":${type ?: "null"}" +
                    "}"
            )
            sb.append(",")
        }
    }
    if (sb.length > 1) {
        sb.deleteAt(sb.length - 1)
    }
    sb.append("}")
    val result = sb.toString()
    return JSON.parse(sb.toString())
}
