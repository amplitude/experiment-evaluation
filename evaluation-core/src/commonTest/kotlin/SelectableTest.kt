package com.amplitude.experiment.evaluation

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class SelectableTest {

    private val primitiveObject = mapOf<String, Any?>(
        "null" to null,
        "string" to "value",
        "int" to 13,
        "double" to 13.12,
        "boolean" to true
    )

    private val primitiveArray = listOf<Any?>(
        null, "value", 13, 13.12, true
    )

    private val nestedArray = primitiveArray.toMutableList().apply {
        add(primitiveObject)
        add(primitiveArray)
    }

    private val nestedObject = primitiveObject.toMutableMap().apply {
        put("object", primitiveObject)
        put("array", primitiveArray)
    }

    @Test
    fun testSelectableEvaluationContextTypes() {

        val contextMap = primitiveObject.toMutableMap().apply {
            put("array", nestedArray)
            put("object", nestedObject)
        }

        val context = EvaluationContext().apply {
            putAll(contextMap)
        }

        val missingValue = context.select(listOf("does", "not", "exist"))
        val nullValue = context.select(listOf("null"))
        val stringValue = context.select(listOf("string"))
        val intValue = context.select(listOf("int"))
        val doubleValue = context.select(listOf("double"))
        val booleanValue = context.select(listOf("boolean"))
        val arrayValue = context.select(listOf("array"))
        val objectValue = context.select(listOf("object"))

        assertNull(missingValue)
        assertNull(nullValue)
        assertEquals("value", stringValue)
        assertEquals(13, intValue)
        assertEquals(13.12, doubleValue)
        assertEquals(true, booleanValue)
        assertEquals(nestedArray, arrayValue)
        assertEquals(nestedObject, objectValue)

        val nestedMissingValue = context.select(listOf("object", "does", "not", "exist"))
        val nestedNullValue = context.select(listOf("object", "null"))
        val nestedStringValue = context.select(listOf("object", "string"))
        val nestedIntValue = context.select(listOf("object", "int"))
        val nestedDoubleValue = context.select(listOf("object", "double"))
        val nestedBooleanValue = context.select(listOf("object", "boolean"))
        val nestedArrayValue = context.select(listOf("object", "array"))
        val nestedObjectValue = context.select(listOf("object", "object"))

        assertNull(nestedMissingValue)
        assertNull(nestedNullValue)
        assertEquals("value", nestedStringValue)
        assertEquals(13, nestedIntValue)
        assertEquals(13.12, nestedDoubleValue)
        assertEquals(true, nestedBooleanValue)
        assertEquals(primitiveArray, nestedArrayValue)
        assertEquals(primitiveObject, nestedObjectValue)
    }
}
