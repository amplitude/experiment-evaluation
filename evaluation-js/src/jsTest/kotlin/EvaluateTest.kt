import kotlin.test.DefaultAsserter
import kotlin.test.Test

val RULES: dynamic = JSON.parse(
    """[{"allUsersTargetingConfig":{"allocations":[{"percentage":0,"weights":{"array-payload":0,"control":0,"object-payload":0}}],"bucketingKey":"device_id","conditions":[],"name":"default-segment"},"bucketingKey":"device_id","bucketingSalt":"6jLqNjj5","customSegmentTargetingConfigs":[{"allocations":[{"percentage":9900,"weights":{"array-payload":0,"boolean-payload":0,"control":1,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":0}}],"bucketingKey":"user_id","conditions":[{"op":"IS","prop":"gp:bucket","values":["user_id"]}],"name":"Bucket by User ID"},{"allocations":[{"percentage":9900,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":1}}],"bucketingKey":"device_id","conditions":[{"op":"IS","prop":"gp:bucket","values":["device_id"]}],"name":"Bucket by Device ID"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":1,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"IS","prop":"gp:test is","values":["string","true","1312.1"]},{"op":"IS_NOT","prop":"gp:test is not","values":["string","true","1312.1"]}],"name":"Test IS & IS NOT"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":1,"control":0,"null-payload":0,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"CONTAINS","prop":"gp:test contains","values":["@amplitude.com"]},{"op":"DOES_NOT_CONTAIN","prop":"gp:test does not contain","values":["asdf"]}],"name":"Test CONTAINS & DOES_NOT_CONTAIN"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":0,"number-payload":0,"object-payload":1,"string-payload":0,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"GREATER_THAN","prop":"gp:test greater","values":["1.2.3"]},{"op":"GREATER_THAN_EQUALS","prop":"gp:test greater or equal","values":["1.2.3"]},{"op":"LESS_THAN","prop":"gp:test less","values":["1.2.3"]},{"op":"LESS_THAN_EQUALS","prop":"gp:test less or equal","values":["1.2.3"]}],"name":"Test GREATER & GREATER OR EQUAL & LESS & LESS OR EQUAL"},{"allocations":[{"percentage":10000,"weights":{"array-payload":0,"boolean-payload":0,"control":0,"null-payload":1,"number-payload":0,"object-payload":0,"string-payload":0,"treatment":0}}],"bucketingKey":"device_id","conditions":[{"op":"SET_CONTAINS","prop":"gp:test set contains","values":["asdf"]}],"name":"Test SET_CONTAINS (not supported)"}],"defaultValue":"off","enabled":true,"evalMode":"LOCAL","flagKey":"sdk-local-evaluation-unit-test","flagName":"sdk-local-evaluation-unit-test","flagVersion":33,"globalHoldbackBucketingKey":"amplitude_id","globalHoldbackPct":0,"globalHoldbackSalt":null,"mutualExclusionConfig":null,"type":"RELEASE","useStickyBucketing":false,"userProperty":"[Experiment] sdk-local-evaluation-unit-test","variants":[{"key":"control","payload":null},{"key":"treatment","payload":null},{"key":"string-payload","payload":"string"},{"key":"number-payload","payload":1312.1},{"key":"boolean-payload","payload":true},{"key":"object-payload","payload":{"array":[1,2,3],"boolean":true,"number":2,"object":{"k":"v"},"string":"value"}},{"key":"array-payload","payload":[1,2,3,"4",true,{"k":"v"},[1,2,3]]},{"key":"null-payload","payload":null}],"variantsExclusions":null,"variantsInclusions":{"array-payload":["array-payload"],"boolean-payload":["boolean-payload"],"control":["control"],"null-payload":["null-payload"],"number-payload":["number-payload"],"object-payload":["object-payload"],"string-payload":["string-payload"],"treatment":["treatment"]}}]"""
)

class EvaluateTest {

    // Inclusions

    @Test
    fun testInclusionsWithUserId() {
        val expectedVariant = "control"
        val user = """{"user_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
    }

    @Test
    fun testInclusionsWithDeviceId() {
        val expectedVariant = "treatment"
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
    }

    // Payloads

    @Test
    fun testStringPayload() {
        val expectedVariant = "string-payload"
        val expectedPayload = "string"
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun testNumberPayload() {
        val expectedVariant = "number-payload"
        val expectedPayload = 1312.1
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun testBooleanPayload() {
        val expectedVariant = "boolean-payload"
        val expectedPayload = true
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.payload,
            expected = expectedPayload,
        )
    }

    @Test
    fun testObjectPayload() {
        val expectedVariant = "object-payload"
        val expectedPayload: dynamic = JSON.parse(
            """{"array":[1,2,3],"number":2,"object":{"k":"v"},"string":"value","boolean":true}"""
        )
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
        // Can't check deep equality of dynamic objects easily, check each field and object separately.
        DefaultAsserter.assertEquals(
            message = "array field not equal",
            actual = JSON.stringify(result?.payload?.array),
            expected = JSON.stringify(expectedPayload.array),
        )
        DefaultAsserter.assertEquals(
            message = "number field not equal",
            actual = result?.payload?.number,
            expected = expectedPayload.number,
        )
        DefaultAsserter.assertEquals(
            message = "object field not equal",
            actual = JSON.stringify(result?.payload?.`object`),
            expected = JSON.stringify(expectedPayload.`object`),
        )
        DefaultAsserter.assertEquals(
            message = "string field not equal",
            actual = result?.payload?.string,
            expected = expectedPayload.string,
        )
        DefaultAsserter.assertEquals(
            message = "boolean field not equal",
            actual = result?.payload?.boolean,
            expected = expectedPayload.boolean,
        )
    }

    @Test
    fun testArrayPayload() {
        val expectedVariant = "array-payload"
        val expectedPayload: dynamic = JSON.parse(
            """[1,2,3,"4",true,{"k":"v"},[1,2,3]]"""
        )
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be ${JSON.stringify(expectedPayload)}, actually ${JSON.stringify(result?.payload)}",
            actual = JSON.stringify(result?.payload),
            expected = JSON.stringify(expectedPayload),
        )
    }

    @Test
    fun testNullPayload() {
        val expectedVariant = "null-payload"
        val expectedPayload = null
        val user = """{"device_id":"$expectedVariant"}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedPayload",
            actual = result?.payload,
            expected = expectedPayload,
        )
    }

    // Bucketing

    @Test
    fun testBucketingByUserIdAndUserHasUserId() {
        val expectedVariant = "control"
        val user = """{"user_id":"user_id","user_properties":{"bucket":"user_id"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
    }

    @Test
    fun testBucketingByUserIdAndUserDoesNotHaveUserId() {
        val expectedVariant = "control"
        val user = """{"user_properties":{"bucket":"user_id"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertNotEquals(
            message = "result variant key should not be $expectedVariant",
            actual = result?.value,
            illegal = expectedVariant,
        )
    }

    @Test
    fun testBucketingByDeviceIdAndUserHasDeviceId() {
        val expectedVariant = "treatment"
        val user = """{"device_id":"device_id","user_properties":{"bucket":"device_id"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
    }

    @Test
    fun testBucketingByDeviceIdAndUserDoesNotHaveDeviceId() {
        val expectedVariant = "treatment"
        val user = """{"user_properties":{"bucket":"device_id"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertNotEquals(
            message = "result variant key should not be $expectedVariant",
            actual = result?.value,
            illegal = expectedVariant,
        )
    }

    // Targeting

    @Test
    fun testIsAndIsNot() {
        val expectedVariant = "string-payload"
        // String value
        run {
            val user = """{"user_properties":{"test is":"string","test is not":"other"}}"""
            val flagResults = evaluate(RULES, JSON.parse(user))
            val result = flagResults["sdk-local-evaluation-unit-test"]
            DefaultAsserter.assertEquals(
                message = "result variant key should be $expectedVariant",
                actual = result?.value,
                expected = expectedVariant,
            )
        }
        // Boolean value
        run {
            val user = """{"user_properties":{"test is":true,"test is not":false}}"""
            val flagResults = evaluate(RULES, JSON.parse(user))
            val result = flagResults["sdk-local-evaluation-unit-test"]
            DefaultAsserter.assertEquals(
                message = "result variant key should be $expectedVariant",
                actual = result?.value,
                expected = expectedVariant,
            )
        }
        // Number value
        run {
            val user = """{"user_properties":{"test is":1312.1,"test is not":0}}"""
            val flagResults = evaluate(RULES, JSON.parse(user))
            val result = flagResults["sdk-local-evaluation-unit-test"]
            DefaultAsserter.assertEquals(
                message = "result variant key should be $expectedVariant",
                actual = result?.value,
                expected = expectedVariant,
            )
        }
    }

    @Test
    fun testContainsAndDoesNotContain() {
        val expectedVariant = "boolean-payload"
        val user =
            """{"user_properties":{"test contains":"test@amplitude.com","test does not contain":"test@amplitude.com"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
    }

    @Test
    fun testGreaterAndGreaterOrEqualAndLessAndLessOrEqual() {
        val expectedVariant = "object-payload"
        val user =
            """{"user_properties":{"test greater":"1.2.4","test greater or equal":"1.2.3","test less":"1.2.2","test less or equal":"1.2.3"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertEquals(
            message = "result variant key should be $expectedVariant",
            actual = result?.value,
            expected = expectedVariant,
        )
    }

    @Test
    fun testUnsupportedOperatorSetContains() {
        val expectedVariant = "null-payload"
        val user =
            """{"user_properties":{"test set contains":"asdf"}}"""
        val flagResults = evaluate(RULES, JSON.parse(user))
        val result = flagResults["sdk-local-evaluation-unit-test"]
        DefaultAsserter.assertNotEquals(
            message = "result variant key should not be $expectedVariant",
            actual = result?.value,
            illegal = expectedVariant,
        )
    }
}
