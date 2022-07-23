import com.amplitude.experiment.evaluation.serialization.SerialFlagResult
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonPrimitive
import kotlin.test.DefaultAsserter
import kotlin.test.Test

const val RULES =
    """[{"allUsersTargetingConfig":{"allocations":[{"percentage":0,"weights":{"array-payload":0,"control":0,"object-payload":0}}],"bucketingKey":"device_id","conditions":[],"name":"default-segment"},"bucketingKey":"device_id","bucketingSalt":"6jLqNjj5","customSegmentTargetingConfigs":[{"allocations":[{"percentage":9900,"weights":{"array-payload":0,"boolean-payload":0,"control":1,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":0}}],"bucketingKey":"user_id","conditions":[{"op":"IS","prop":"gp:bucket","values":["user_id"]}],"name":"Bucket by User ID"},{"allocations":[{"percentage":9900,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":1}}],"bucketingKey":"device_id","conditions":[{"op":"IS","prop":"gp:bucket","values":["device_id"]}],"name":"Bucket by Device ID"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":1,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"IS","prop":"gp:test is","values":["string","true","1312.1"]},{"op":"IS_NOT","prop":"gp:test is not","values":["string","true","1312.1"]}],"name":"Test IS & IS NOT"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":1,"control":0,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"CONTAINS","prop":"gp:test contains","values":["@amplitude.com"]},{"op":"DOES_NOT_CONTAIN","prop":"gp:test does not contain","values":["asdf"]}],"name":"Test CONTAINS & DOES_NOT_CONTAIN"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":0,"number-payload":0,"object-payload":1,"string-payload":0,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"GREATER_THAN","prop":"gp:test greater","values":["1.2.3"]},{"op":"GREATER_THAN_EQUALS","prop":"gp:test greater or equal","values":["1.2.3"]},{"op":"LESS_THAN","prop":"gp:test less","values":["1.2.3"]},{"op":"LESS_THAN_EQUALS","prop":"gp:test less or equal","values":["1.2.3"]}],"name":"Test GREATER & GREATER OR EQUAL & LESS & LESS OR EQUAL"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":1,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"SET_CONTAINS","prop":"gp:test set contains","values":["asdf"]}],"name":"Test SET_CONTAINS (not supported)"}],"defaultValue":"off","enabled":true,"evalMode":"LOCAL","flagKey":"sdk-local-evaluation-unit-test","flagName":"sdk-local-evaluation-unit-test","flagVersion":33,"globalHoldbackBucketingKey":"amplitude_id","globalHoldbackPct":0,"globalHoldbackSalt":null,"mutualExclusionConfig":null,"type":"RELEASE","useStickyBucketing":false,"userProperty":"[Experiment] sdk-local-evaluation-unit-test","variants":[{"key":"control","payload":null},{"key":"treatment","payload":null},{"key":"string-payload","payload":"string"},{"key":"number-payload","payload":1312.1},{"key":"boolean-payload","payload":true},{"key":"object-payload","payload":{"array":[1,2,3],"boolean":true,"number":2,"object":{"k":"v"},"string":"value"}},{"key":"array-payload","payload":[1,2,3,"4",true,{"k":"v"},[1,2,3]]},{"key":"null-payload","payload":null}],"variantsExclusions":null,"variantsInclusions":{"array-payload":["array-payload"],"boolean-payload":["boolean-payload"],"control":["control"],"null-payload":["null-payload"],"number-payload":["number-payload"],"object-payload":["object-payload"],"string-payload":["string-payload"],"treatment":["treatment"]}}]"""

class EvaluateTest {

    // Inclusions

    @Test
    fun `test inclusions with user id`() {
        val expectedVariant = "control"
        val user = """{"user_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
    }

    @Test
    fun `test inclusions with device id`() {
        val expectedVariant = "treatment"
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
    }

    // Payloads

    @Test
    fun `test string payload`() {
        val expectedVariant = "string-payload"
        val expectedPayload = JsonPrimitive("string")
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.variant?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun `test number payload`() {
        val expectedVariant = "number-payload"
        val expectedPayload = JsonPrimitive(1312.1)
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.variant?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun `test boolean payload`() {
        val expectedVariant = "boolean-payload"
        val expectedPayload = JsonPrimitive(true)
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.variant?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun `test object payload`() {
        val expectedVariant = "object-payload"
        val expectedPayload =
            Json.decodeFromString<JsonElement>(
                """{"array":[1,2,3],"number":2,"object":{"k":"v"},"string":"value","boolean":true}"""
            )
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.variant?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun `test array payload`() {
        val expectedVariant = "array-payload"
        val expectedPayload =
            Json.decodeFromString<JsonElement>(
                """[1,2,3,"4",true,{"k":"v"},[1,2,3]]"""
            )
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.variant?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun `test null payload`() {
        val expectedVariant = "null-payload"
        val expectedPayload = null
        val user = """{"device_id":"$expectedVariant"}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.variant?.payload,
            expected = expectedPayload,
        )
    }

    // Bucketing

    @Test
    fun `test bucketing by user id and user has user id`() {
        val expectedVariant = "control"
        val user = """{"user_id":"user_id","user_properties":{"bucket":"user_id"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
    }

    @Test
    fun `test bucketing by user id and user does not have user id`() {
        val expectedVariant = "control"
        val user = """{"user_properties":{"bucket":"user_id"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertNotEquals(
            message = "result variant key should not be $expectedVariant",
            actual = result?.variant?.key,
            illegal = expectedVariant,
        )
    }

    @Test
    fun `test bucketing by device id and user has device id`() {
        val expectedVariant = "treatment"
        val user = """{"device_id":"device_id","user_properties":{"bucket":"device_id"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
    }

    @Test
    fun `test bucketing by device id and user does not have device id`() {
        val expectedVariant = "treatment"
        val user = """{"user_properties":{"bucket":"device_id"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertNotEquals(
            message = "result variant key should not be $expectedVariant",
            actual = result?.variant?.key,
            illegal = expectedVariant,
        )
    }

    // Targeting

    @Test
    fun `test is and is not`() {
        val expectedVariant = "string-payload"
        // String value
        run {
            val user = """{"user_properties":{"test is":"string","test is not":"other"}}"""
            val results = evaluate(RULES, user)
            val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
            val result = flagResults["sdk-local-evaluation-unit-test"]
            DefaultAsserter.assertEquals(
                message = "result variant key should be $expectedVariant",
                actual = result?.variant?.key,
                expected = expectedVariant,
            )
        }
        // Boolean value
        run {
            val user = """{"user_properties":{"test is":true,"test is not":false}}"""
            val results = evaluate(RULES, user)
            val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
            val result = flagResults["sdk-local-evaluation-unit-test"]
            DefaultAsserter.assertEquals(
                message = "result variant key should be $expectedVariant",
                actual = result?.variant?.key,
                expected = expectedVariant,
            )
        }
        // Number value
        run {
            val user = """{"user_properties":{"test is":1312.1,"test is not":0}}"""
            val results = evaluate(RULES, user)
            val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
            val result = flagResults["sdk-local-evaluation-unit-test"]
            DefaultAsserter.assertEquals(
                message = "result variant key should be $expectedVariant",
                actual = result?.variant?.key,
                expected = expectedVariant,
            )
        }
    }

    @Test
    fun `test contains and does not contain`() {
        val expectedVariant = "boolean-payload"
        val user =
            """{"user_properties":{"test contains":"test@amplitude.com","test does not contain":"test@amplitude.com"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
    }

    @Test
    fun `test greater and greater or equal and less and less or equal`() {
        val expectedVariant = "object-payload"
        val user =
            """{"user_properties":{"test greater":"1.2.4","test greater or equal":"1.2.3","test less":"1.2.2","test less or equal":"1.2.3"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.variant?.key,
            expected = expectedVariant,
        )
    }

    @Test
    fun `test unsupported operator set contains`() {
        val expectedVariant = "null-payload"
        val user =
            """{"user_properties":{"test set contains":"asdf"}}"""
        val results = evaluate(RULES, user)
        val flagResults = Json.decodeFromString<Map<String, SerialFlagResult>>(results)
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertNotEquals(
            message = "result variant key should not be $expectedVariant",
            actual = result?.variant?.key,
            illegal = expectedVariant,
        )
    }
}
