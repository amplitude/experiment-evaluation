package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.FlagApi
import kotlinx.coroutines.runBlocking
import kotlin.test.DefaultAsserter
import kotlin.test.Test

private const val DEPLOYMENT_KEY = "server-NgJxxvg8OGwwBsWVXqyxQbdiflbhvugy"

private fun userContext(
    userId: String? = null,
    deviceId: String? = null,
    amplitudeId: String? = null,
    userProperties: Map<String, Any?>? = null
): EvaluationContext {
    return EvaluationContext().apply {
        put("user", mutableMapOf<String, Any?>().apply {
            if (userId != null) put("user_id", userId)
            if (deviceId != null) put("device_id", deviceId)
            if (amplitudeId != null) put("amplitude_id", amplitudeId)
            if (userProperties != null) put("user_properties", userProperties)
        })
    }
}

private fun groupContext(
    groupType: String,
    groupName: String,
    groupProperties: Map<String, Any?>? = null
): EvaluationContext {
    return EvaluationContext().apply {
        put("groups", mutableMapOf<String, Any?>().apply {
            put(groupType, mutableMapOf<String, Any?>().apply {
                put("group_name", groupName)
                if (groupProperties != null) {
                    put("group_properties", groupProperties)
                }
            })
        })
    }
}

class EvaluationIntegrationTest {

    private val engine: EvaluationEngine = EvaluationEngineImpl()
    private val flags: List<EvaluationFlag>

    init {
        val flagApi = FlagApi("http://localhost:3034")
        flags = runBlocking { flagApi.getFlagConfigs(DEPLOYMENT_KEY) }
    }

    // Basic Tests

    @Test
    fun `test off`() {
        val user = userContext(userId = "user_id", deviceId = "device_id")
        val result = engine.evaluate(user, flags)["test-off"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )
    }

    @Test
    fun `test on`() {
        val user = userContext(userId = "user_id", deviceId = "device_id")
        val result = engine.evaluate(user, flags)["test-on"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    // Opinionated Segment Tests

    @Test
    fun `test individual inclusions match`() {
        // Match User ID
        var user = userContext(userId = "user_id")
        var result = engine.evaluate(user, flags)["test-individual-inclusions"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected segment",
            "individual-inclusions",
            result?.metadata?.get("segmentName")
        )
        // Match Device ID
        user = userContext(deviceId = "device_id")
        result = engine.evaluate(user, flags)["test-individual-inclusions"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected segment",
            "individual-inclusions",
            result?.metadata?.get("segmentName")
        )
        // Doesn't Match User ID
        user = userContext(userId = "not_user_id")
        result = engine.evaluate(user, flags)["test-individual-inclusions"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )
        // Doesn't Match Device ID
        user = userContext(deviceId = "not_device_id")
        result = engine.evaluate(user, flags)["test-individual-inclusions"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )
    }

    @Test
    fun `test flag dependencies on`() {
        val user = userContext(userId = "user_id", deviceId = "device_id")
        val result = engine.evaluate(user, flags)["test-flag-dependencies-on"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test flag dependencies off`() {
        val user = userContext(userId = "user_id", deviceId = "device_id")
        val result = engine.evaluate(user, flags)["test-flag-dependencies-off"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected segment",
            "flag-dependencies",
            result?.metadata?.get("segmentName")
        )
    }

    @Test
    fun `test sticky bucketing`() {
        // On
        var user = userContext(
            userId = "user_id",
            deviceId = "device_id",
            userProperties = mapOf(
                "[Experiment] test-sticky-bucketing" to "on",
            )
        )
        var result = engine.evaluate(user, flags)["test-sticky-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected segment",
            "sticky-bucketing",
            result?.metadata?.get("segmentName")
        )
        // Off
        user = userContext(
            userId = "user_id",
            deviceId = "device_id",
            userProperties = mapOf(
                "[Experiment] test-sticky-bucketing" to "off",
            )
        )
        result = engine.evaluate(user, flags)["test-sticky-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result: $result",
            "off",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected segment",
            "All Other Users",
            result?.metadata?.get("segmentName")
        )
        // Non-variant
        user = userContext(
            userId = "user_id",
            deviceId = "device_id",
            userProperties = mapOf(
                "[Experiment] test-sticky-bucketing" to "not-a-variant",
            )
        )
        result = engine.evaluate(user, flags)["test-sticky-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result: $result",
            "off",
            result?.key
        )
    }

    // Experiment and Flag Segment Tests

    @Test
    fun `test experiment`() {
        val user = userContext(userId = "user_id", deviceId = "device_id")
        val result = engine.evaluate(user, flags)["test-experiment"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected experiment key",
            "exp-1",
            result?.metadata?.get("experimentKey")
        )
    }

    @Test
    fun `test flag`() {
        val user = userContext(userId = "user_id", deviceId = "device_id")
        val result = engine.evaluate(user, flags)["test-flag"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
        DefaultAsserter.assertEquals(
            "Unexpected experiment key",
            null,
            result?.metadata?.get("experimentKey")
        )
    }

    // Conditional Logic Tests

    @Test
    fun `test multiple conditions and values`() {
        // All match, on
        var user = userContext(
            userProperties = mapOf(
                "key-1" to "value-1",
                "key-2" to "value-2",
                "key-3" to "value-3",
            )
        )
        var result = engine.evaluate(user, flags)["test-multiple-conditions-and-values"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
        // Some match, off
        user = userContext(
            userProperties = mapOf(
                "key-1" to "value-1",
                "key-2" to "value-2",
            )
        )
        result = engine.evaluate(user, flags)["test-multiple-conditions-and-values"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )
    }

    // Condition Property Targeting Tests

    @Test
    fun `test amplitude property targeting`() {
        val user = userContext(userId = "user_id")
        val result = engine.evaluate(user, flags)["test-amplitude-property-targeting"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test group name targeting`() {
        val user = groupContext("org name", "amplitude")
        val result = engine.evaluate(user, flags)["test-group-name-targeting"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test group property targeting`() {
        val user = groupContext("org name", "amplitude", mapOf("org plan" to "enterprise2"))
        val result = engine.evaluate(user, flags)["test-group-property-targeting"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    // Bucketing Unit Tests

    @Test
    fun `test amplitude id bucketing`() {
        val user = userContext(amplitudeId = "1234567890")
        val result = engine.evaluate(user, flags)["test-amplitude-id-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test user id bucketing`() {
        val user = userContext(userId = "user_id")
        val result = engine.evaluate(user, flags)["test-user-id-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test device id bucketing`() {
        val user = userContext(userId = "device_id")
        val result = engine.evaluate(user, flags)["test-user-id-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test custom user property bucketing`() {
        val user = userContext(userProperties = mapOf("key" to "value"))
        val result = engine.evaluate(user, flags)["test-custom-user-property-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test group name bucketing`() {
        val user = groupContext("org name", "amplitude")
        val result = engine.evaluate(user, flags)["test-group-name-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test group property bucketing`() {
        val user = groupContext("org name", "amplitude", mapOf("org plan" to "enterprise2"))
        val result = engine.evaluate(user, flags)["test-group-property-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    // Bucketing Allocation Tests

    @Test
    fun `test 1 percent allocation`() {
        var on = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-1-percent-allocation"]
            if (result?.key == "on") {
                on++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            107,
            on
        )
    }

    @Test
    fun `test 50 percent allocation`() {
        var on = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-50-percent-allocation"]
            if (result?.key == "on") {
                on++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            5009,
            on
        )
    }

    @Test
    fun `test 99 percent allocation`() {
        var on = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-99-percent-allocation"]
            if (result?.key == "on") {
                on++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            9900,
            on
        )
    }

    // Bucketing Distribution Tests

    @Test
    fun `test 1 percent distribution`() {
        var control = 0
        var treatment = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-1-percent-distribution"]
            if (result?.key == "control") {
                control++
            } else if (result?.key == "treatment") {
                treatment++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            106,
            control
        )
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            9894,
            treatment
        )
    }

    @Test
    fun `test 50 percent distribution`() {
        var control = 0
        var treatment = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-50-percent-distribution"]
            if (result?.key == "control") {
                control++
            } else if (result?.key == "treatment") {
                treatment++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            4990,
            control
        )
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            5010,
            treatment
        )
    }

    @Test
    fun `test 99 percent distribution`() {
        var control = 0
        var treatment = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-99-percent-distribution"]
            if (result?.key == "control") {
                control++
            } else if (result?.key == "treatment") {
                treatment++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            9909,
            control
        )
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            91,
            treatment
        )
    }

    @Test
    fun `test multiple distributions`() {
        var a = 0
        var b = 0
        var c = 0
        var d = 0
        repeat(10000) { i ->
            val user = userContext(deviceId = "${i + 1}")
            val result = engine.evaluate(user, flags)["test-multiple-distributions"]
            when (result?.key) {
                "a" -> a++
                "b" -> b++
                "c" -> c++
                "d" -> d++
            }
        }
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            2444,
            a
        )
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            2634,
            b
        )
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            2447,
            c
        )
        DefaultAsserter.assertEquals(
            "Unexpected assignments",
            2475,
            d
        )
    }

    // Operator Tests

    @Test
    fun `test is`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "value"
            )
        )
        val result = engine.evaluate(user, flags)["test-is"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test is not`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "value"
            )
        )
        val result = engine.evaluate(user, flags)["test-is-not"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test contains`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "value"
            )
        )
        val result = engine.evaluate(user, flags)["test-contains"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test does not contain`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "value"
            )
        )
        val result = engine.evaluate(user, flags)["test-does-not-contain"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test less`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "-1"
            )
        )
        val result = engine.evaluate(user, flags)["test-less"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test less or equal`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "0"
            )
        )
        val result = engine.evaluate(user, flags)["test-less-or-equal"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test greater`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "1"
            )
        )
        val result = engine.evaluate(user, flags)["test-greater"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test greater or equal`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "0"
            )
        )
        val result = engine.evaluate(user, flags)["test-greater-or-equal"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test version less`() {
        val user = userContext(
            userProperties = mapOf(
                "version" to "1.9.0"
            )
        )
        val result = engine.evaluate(user, flags)["test-version-less"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test version less or equal`() {
        val user = userContext(
            userProperties = mapOf(
                "version" to "1.10.0"
            )
        )
        val result = engine.evaluate(user, flags)["test-version-less-or-equal"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test version greater`() {
        val user = userContext(
            userProperties = mapOf(
                "version" to "1.10.0"
            )
        )
        val result = engine.evaluate(user, flags)["test-version-greater"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test version greater or equal`() {
        val user = userContext(
            userProperties = mapOf(
                "version" to "1.9.0"
            )
        )
        val result = engine.evaluate(user, flags)["test-version-greater-or-equal"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test set is`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to listOf("1", "2", "3")
            )
        )
        val result = engine.evaluate(user, flags)["test-set-is"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test set is not`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to listOf("1", "2")
            )
        )
        val result = engine.evaluate(user, flags)["test-set-is-not"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test set contains`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to listOf("1", "2")
            )
        )
        val result = engine.evaluate(user, flags)["test-set-contains"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test set does not contain`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to listOf("1", "2", "4")
            )
        )
        val result = engine.evaluate(user, flags)["test-set-does-not-contain"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test glob match`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "/path/1/2/3/end"
            )
        )
        val result = engine.evaluate(user, flags)["test-glob-match"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }

    @Test
    fun `test glob does not match`() {
        val user = userContext(
            userProperties = mapOf(
                "key" to "/path/1/2/3"
            )
        )
        val result = engine.evaluate(user, flags)["test-glob-does-not-match"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "on",
            result?.key
        )
    }
}
