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
            val flagKey = it.key.stringify()
            val variantKey = it.value.variant.key.stringify()
            val variantPayload = it.value.variant.payload.stringify()
            val expKey = it.value.expKey.stringify()
            val deployed = it.value.deployed.stringify()
            val type = it.value.type.stringify()
            sb.append(
                "$flagKey:{" +
                    "\"value\":$variantKey," +
                    "\"payload\":$variantPayload," +
                    "\"expKey\":$expKey," +
                    "\"deployed\":$deployed," +
                    "\"type\":$type" +
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
    println(result)
    return JSON.parse(sb.toString())
}
