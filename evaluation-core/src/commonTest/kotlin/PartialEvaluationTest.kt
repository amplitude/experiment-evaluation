package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.FlagApi
import kotlinx.coroutines.runBlocking
import kotlin.test.DefaultAsserter
import kotlin.test.Test

private const val DEPLOYMENT_KEY = "server-NgJxxvg8OGwwBsWVXqyxQbdiflbhvugy"

class PartialEvaluationTest {
    private val engine: EvaluationEngine = EvaluationEngineImpl()
    private val partialEvaluationEngine: PartialEvaluationEngine = PartialEvaluationEngine()
    private val flags: List<EvaluationFlag> = runBlocking {
        FlagApi().getFlagConfigs(DEPLOYMENT_KEY)
    }

    @Test
    fun `test partial evaluate segments`() {
        // test condition translations
        // if only one condition matches, that condition should be removed
        val segmentFlag = flags.find { it.key == "test-partial-evaluate-segment" }
        var user = freeformUserContext(mapOf("language" to "English"))
        var partialEvaluatedSegment = partialEvaluationEngine.partialEvaluateSegment(
            segmentFlag?.segments?.get(0) ?: EvaluationSegment(),
            EvaluationEngineImpl.EvaluationTarget(user, mutableMapOf())
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            1,
            partialEvaluatedSegment.conditions?.get(0)?.size
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            listOf("context", "user", "platform"),
            partialEvaluatedSegment.conditions?.get(0)?.get(0)?.selector
        )

        // if both conditions match, both conditions should be removed, replaced with an ALWAY-MATCH condition
        user = freeformUserContext(mapOf("language" to "English", "platform" to "iOS"))
        partialEvaluatedSegment = partialEvaluationEngine.partialEvaluateSegment(
            segmentFlag?.segments?.get(0) ?: EvaluationSegment(),
            EvaluationEngineImpl.EvaluationTarget(user, mutableMapOf())
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            1,
            partialEvaluatedSegment.conditions?.get(0)?.size
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            EvaluationCondition(
                listOf(),
                EvaluationOperator.IS,
                setOf("(none)")
            ),
            partialEvaluatedSegment.conditions?.get(0)?.get(0)
        )

        // if both props exist, but either condition DOES NOT match, the condition should be ALWAYS-FALSE
        user = freeformUserContext(mapOf("language" to "English", "platform" to "Android"))
        partialEvaluatedSegment = partialEvaluationEngine.partialEvaluateSegment(
            segmentFlag?.segments?.get(0) ?: EvaluationSegment(),
            EvaluationEngineImpl.EvaluationTarget(user, mutableMapOf())
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            1,
            partialEvaluatedSegment.conditions?.get(0)?.size
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            EvaluationCondition(
                listOf(),
                EvaluationOperator.IS_NOT,
                setOf("(none)")
            ),
            partialEvaluatedSegment.conditions?.get(0)?.get(0)
        )

        // test bucketing translations
        // if bucketing segment matches, the bucket should be set to null and the default bucket should be set to the
        // bucketed variant
        user = freeformUserContext(mapOf("device_id" to "device_id"))
        partialEvaluatedSegment = partialEvaluationEngine.partialEvaluateSegment(
            segmentFlag?.segments?.get(1) ?: EvaluationSegment(),
            EvaluationEngineImpl.EvaluationTarget(user, mutableMapOf())
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "b",
            partialEvaluatedSegment.variant
        )

        // if bucketing unit does not exist remotely, bucket stays unchanged
        user = freeformUserContext(mapOf())
        partialEvaluatedSegment = partialEvaluationEngine.partialEvaluateSegment(
            segmentFlag?.segments?.get(1) ?: EvaluationSegment(),
            EvaluationEngineImpl.EvaluationTarget(user, mutableMapOf())
        )
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            partialEvaluatedSegment.variant
        )
        DefaultAsserter.assertNotNull(
            "Unexpected evaluation result",
            partialEvaluatedSegment.bucket
        )
    }

    @Test
    fun `test partial evaluate conditions`() {
        // test remote user props match segment 1
        var remoteUser = freeformUserContext(mapOf("language" to "English"))
        var partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        var localUser = userContext(deviceId = "device_id")
        var result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-condition"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "a",
            result?.key
        )

        // test remote user props match segment 2
        remoteUser = freeformUserContext(mapOf("platform" to "iOS"))
        partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-condition"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "b",
            result?.key
        )

        // test remote user props match neither segment 1 nor 2
        remoteUser = freeformUserContext(mapOf("language" to "A", "platform" to "B"))
        partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-condition"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )

        // test remote user props does not match segment 1, and only exists (and matches) locally for segment 2
        remoteUser = freeformUserContext(mapOf("language" to "A"))
        partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        localUser = freeformUserContext(mapOf("platform" to "iOS"))
        result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-condition"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "b",
            result?.key
        )

        // test remote user props does not match segment 1, and only exists (and DOES NOT match) locally for segment 2
        remoteUser = freeformUserContext(mapOf("language" to "A"))
        partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        localUser = freeformUserContext(mapOf("platform" to "Android"))
        result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-condition"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )
    }

    @Test
    fun `test partial evaluate bucketing`() {
        // bucketing unit (user_id) exists remotely BUT NOT locally
        var remoteUser = userContext(userId = "user_id")
        var partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        var localUser = freeformUserContext(mapOf("platform" to "iOS"))
        var result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "a",
            result?.key
        )

        // bucketing unit exists neither remotely NOR locally
        remoteUser = userContext()
        partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "off",
            result?.key
        )

        // bucketing unit does not exist remotely but does locally
        localUser = freeformUserContext(mapOf("user_id" to "id", "platform" to "iOS"))
        partialEvaluatedFlags = partialEvaluationEngine.partialEvaluate(
            remoteUser,
            flags
        )
        result = engine.evaluate(localUser, partialEvaluatedFlags)["test-partial-evaluate-bucketing"]
        DefaultAsserter.assertEquals(
            "Unexpected evaluation result",
            "a",
            result?.key
        )
    }
}
