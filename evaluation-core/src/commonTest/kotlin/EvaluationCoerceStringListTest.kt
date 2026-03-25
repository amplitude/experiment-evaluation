package com.amplitude.experiment.evaluation

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

private val engine: EvaluationEngine = EvaluationEngineImpl()

private fun flagWithCondition(op: String, values: Set<String>): EvaluationFlag {
    return EvaluationFlag(
        key = "test-flag",
        variants = mapOf("on" to EvaluationVariant(key = "on")),
        segments = listOf(
            EvaluationSegment(
                conditions = listOf(
                    listOf(
                        EvaluationCondition(
                            selector = listOf("context", "user", "user_properties", "test_prop"),
                            op = op,
                            values = values
                        )
                    )
                ),
                variant = "on"
            )
        )
    )
}

private fun contextWithProp(value: Any?): EvaluationContext {
    return EvaluationContext().apply {
        put(
            "user",
            mutableMapOf<String, Any?>(
                "user_properties" to mutableMapOf<String, Any?>("test_prop" to value)
            )
        )
    }
}

private fun evaluate(propValue: Any?, op: String, values: Set<String>): EvaluationVariant? {
    val flag = flagWithCondition(op, values)
    return engine.evaluate(contextWithProp(propValue), listOf(flag))["test-flag"]
}

private fun assertMatch(propValue: Any?, op: String, values: Set<String>) {
    val result = evaluate(propValue, op, values)
    assertNotNull(result, "Expected match for propValue=$propValue op=$op values=$values")
    assertEquals("on", result.key)
}

private fun assertNoMatch(propValue: Any?, op: String, values: Set<String>) {
    assertNull(
        evaluate(propValue, op, values),
        "Expected no match for propValue=$propValue op=$op values=$values"
    )
}

class EvaluationCoerceStringListTest {

    @Test
    fun `scalar string with non-set operators matches via string path`() {
        assertMatch("hello", EvaluationOperator.IS, setOf("hello"))
        assertMatch("hello", EvaluationOperator.CONTAINS, setOf("ell"))
        assertMatch("2", EvaluationOperator.GREATER_THAN, setOf("1"))
        assertNoMatch("world", EvaluationOperator.IS, setOf("hello"))
    }

    @Test
    fun `json array string parses correctly`() {
        assertMatch("""["a","b"]""", EvaluationOperator.SET_CONTAINS, setOf("a"))
        assertMatch("""["a","b"]""", EvaluationOperator.IS, setOf("a"))
    }

    @Test
    fun `collection values work with both operator types`() {
        assertMatch(listOf("a", "b"), EvaluationOperator.SET_CONTAINS, setOf("a"))
        assertMatch(listOf("a", "b"), EvaluationOperator.IS, setOf("a"))
    }

    @Test
    fun `non-string scalar with non-set operator matches via string path`() {
        assertMatch(42, EvaluationOperator.GREATER_THAN, setOf("1"))
        assertMatch(true, EvaluationOperator.IS, setOf("true"))
    }

    @Test
    fun `malformed json array falls through to string match`() {
        assertMatch("[broken", EvaluationOperator.IS, setOf("[broken"))
    }

    @Test
    fun `empty json array returns no match for set operator`() {
        assertNoMatch("[]", EvaluationOperator.SET_CONTAINS, setOf("a"))
    }

    @Test
    fun `string with leading whitespace before bracket does not parse as array`() {
        assertMatch(""" ["a"]""", EvaluationOperator.IS, setOf(""" ["a"]"""))
        assertNoMatch(""" ["a"]""", EvaluationOperator.SET_CONTAINS, setOf("a"))
    }
}
