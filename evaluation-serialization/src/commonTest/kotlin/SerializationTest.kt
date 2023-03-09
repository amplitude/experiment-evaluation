import com.amplitude.experiment.evaluation.Allocation
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.Operator
import com.amplitude.experiment.evaluation.ParentDependencies
import com.amplitude.experiment.evaluation.SegmentTargetingConfig
import com.amplitude.experiment.evaluation.UserPropertyFilter
import com.amplitude.experiment.evaluation.Variant
import com.amplitude.experiment.evaluation.serialization.SerialFlagConfig
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject
import kotlin.test.Test
import kotlin.test.assertEquals

const val FLAG_CONFIG_V1 = """{"allUsersTargetingConfig":{"allocations":[{"percentage":10000,"weights":{"control":0,"other":0,"treatment":1}}],"bucketingGroupType":null,"bucketingKey":"user_id","conditions":[],"name":"All Other Users"},"bucketingGroupType":null,"bucketingSalt":"xIsm9BUj","customSegmentTargetingConfigs":[{"allocations":[{"percentage":10000,"weights":{"control":0,"other":0,"treatment":1}}],"bucketingGroupType":null,"bucketingKey":"user_id","conditions":[{"op":"IS","prop":"gp:feature-opt-in","values":["true"]}],"name":"Segment 1"}],"defaultValue":"off","deployed":true,"enabled":true,"experimentKey":"exp-1","flagKey":"brian-bug-safari","flagVersion":105,"parentDependencies":{"flags":{"parent":["on"]},"operator":"ALL"},"type":"experiment","variants":[{"key":"control","payload":{"asdf":"asdf"}},{"key":"treatment","payload":["array"]},{"key":"other","payload":123}],"variantsInclusions":{"control":["brian"],"other":[],"treatment":[]}}"""
internal val format = Json {
    ignoreUnknownKeys = true
    isLenient = true
    coerceInputValues = true
}
class SerializationTest {

    @Test
    fun testFlagConfigObjectConvert() {
        val actualSerialFlagConfig = format.decodeFromString<SerialFlagConfig>(FLAG_CONFIG_V1)
        val actualFlagConfig = actualSerialFlagConfig.convert()
        val expectedFlagConfig = FlagConfig(
            flagKey = "brian-bug-safari",
            experimentKey = "exp-1",
            flagVersion = 105,
            enabled = true,
            bucketingSalt = "xIsm9BUj",
            defaultValue = "off",
            variants = listOf(Variant("control", buildJsonObject { put("asdf", JsonPrimitive("asdf")) }), Variant("treatment", buildJsonArray { add(JsonPrimitive("array")) }), Variant("other", JsonPrimitive(123))),
            variantsInclusions = linkedMapOf("control" to setOf("brian"), "other" to setOf(), "treatment" to setOf()),
            allUsersTargetingConfig = SegmentTargetingConfig("All Other Users", listOf(), listOf(Allocation(10000, mapOf("control" to 0, "other" to 0, "treatment" to 1))), "user_id"),
            customSegmentTargetingConfigs = listOf(
                SegmentTargetingConfig(
                    "Segment 1", listOf(UserPropertyFilter("gp:feature-opt-in", Operator.IS, setOf("true"))),
                    listOf(
                        Allocation(10000, mapOf("control" to 0, "other" to 0, "treatment" to 1))
                    ),
                    "user_id"
                )
            ),
            parentDependencies = ParentDependencies("ALL", mapOf("parent" to setOf("on"))),
            type = "experiment",
            deployed = true,
        )
        val expectedSerialFlagConfig = SerialFlagConfig(expectedFlagConfig)
        assertEquals(expectedFlagConfig, actualFlagConfig)
        assertEquals(expectedSerialFlagConfig, actualSerialFlagConfig)
    }
}
