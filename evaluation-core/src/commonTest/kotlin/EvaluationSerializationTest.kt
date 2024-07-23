package com.amplitude.experiment.evaluation

import kotlin.test.Test
import kotlin.test.assertEquals

class EvaluationSerializationTest {

    private val primitiveTypeObject = mapOf<String, Any?>(
        "null" to null,
        "string" to "value",
        "int" to 13,
        "double" to 13.12,
        "boolean" to true
    )

    private val primitiveTypeArray = listOf<Any?>(
        null,
        "value",
        13,
        13.12,
        true
    )

    private val nestedJsonObject = primitiveTypeObject.toMutableMap().apply {
        put(
            "array",
            primitiveTypeArray.toMutableList().apply {
                add(primitiveTypeObject)
                add(primitiveTypeArray)
            }
        )
        put(
            "object",
            primitiveTypeObject.toMutableMap().apply {
                put("object", primitiveTypeObject)
                put("array", primitiveTypeArray)
            }
        )
    }

    @Test
    fun testEvaluationSerialization() {
        val result = nestedJsonObject.toJsonObject().toAny()
        assertEquals(nestedJsonObject, result)
    }
}
