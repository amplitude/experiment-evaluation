package com.amplitude.experiment.evaluation

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import kotlin.test.fail

fun evaluationFlag(key: Int, dependencies: Set<Int>): EvaluationFlag {
    return EvaluationFlag(
        key = key.toString(),
        variants = mapOf(),
        segments = listOf(),
        dependencies = dependencies.map { it.toString() }.toSet()
    )
}

class TopologicalSortTest {

    @Test
    fun testEmpty() {
        run { // no flag keys
            val flagConfigs = listOf<EvaluationFlag>()
            val result = topologicalSort(flagConfigs)
            assertTrue(result.isEmpty())
        }
        run { // with flag keys
            val flagConfigs = listOf<EvaluationFlag>()
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagNoDependencies() {
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(evaluationFlag(1, dependencies))
            val result = topologicalSort(flagConfigs)
            assertEquals(listOf(evaluationFlag(1, dependencies)), result)
        }
        run { // with flag keys
            val flagConfigs = listOf(evaluationFlag(1, dependencies))
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertEquals(listOf(evaluationFlag(1, dependencies)), result)
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(evaluationFlag(1, dependencies))
            val result = topologicalSort(flagConfigs, setOf("999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagWithDependencies() {
        val dependencies = setOf(2)
        run { // no flag keys
            val flagConfigs = listOf(evaluationFlag(1, dependencies))
            val result = topologicalSort(flagConfigs)
            assertEquals(listOf(evaluationFlag(1, dependencies)), result)
        }
        run { // with flag keys
            val flagConfigs = listOf(evaluationFlag(1, dependencies))
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertEquals(listOf(evaluationFlag(1, dependencies)), result)
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(evaluationFlag(1, dependencies))
            val result = topologicalSort(flagConfigs, setOf("999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsNoDependencies() {
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(
                evaluationFlag(1, dependencies),
                evaluationFlag(2, dependencies),
            )
            val result = topologicalSort(flagConfigs)
            assertEquals(
                listOf(
                    evaluationFlag(1, dependencies),
                    evaluationFlag(2, dependencies),
                ),
                result
            )
        }
        run { // with flag keys
            val flagConfigs = listOf(
                evaluationFlag(1, dependencies),
                evaluationFlag(2, dependencies),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertEquals(
                listOf(
                    evaluationFlag(1, dependencies),
                    evaluationFlag(2, dependencies),
                ),
                result
            )
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                evaluationFlag(1, dependencies),
                evaluationFlag(2, dependencies),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsWithDependencies() {
        run { // no flag keys
            val flagConfigs = listOf(
                evaluationFlag(1, setOf(2)),
                evaluationFlag(2, setOf(3)),
                evaluationFlag(3, setOf()),
            )
            val result = topologicalSort(flagConfigs)
            assertEquals(
                listOf(
                    evaluationFlag(3, setOf()),
                    evaluationFlag(2, setOf(3)),
                    evaluationFlag(1, setOf(2)),
                ),
                result
            )
        }
        run { // with flag keys
            val flagConfigs = listOf(
                evaluationFlag(1, setOf(2)),
                evaluationFlag(2, setOf(3)),
                evaluationFlag(3, setOf()),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertEquals(
                listOf(
                    evaluationFlag(3, setOf()),
                    evaluationFlag(2, setOf(3)),
                    evaluationFlag(1, setOf(2)),
                ),
                result
            )
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                evaluationFlag(1, setOf(2)),
                evaluationFlag(2, setOf(3)),
                evaluationFlag(3, setOf()),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagCycle() {
        run { // no flag keys
            try {
                val flagConfigs = listOf(
                    evaluationFlag(1, setOf(1)),
                )
                val result = topologicalSort(flagConfigs)
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys
            try {
                val flagConfigs = listOf(
                    evaluationFlag(1, setOf(1)),
                )
                val result = topologicalSort(flagConfigs, setOf("1"))
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys, no match
            try {
                val flagConfigs = listOf(
                    evaluationFlag(1, setOf(1)),
                )
                val result = topologicalSort(flagConfigs, setOf("999"))
                assertTrue(result.isEmpty())
            } catch (e: CycleException) {
                fail(e.message)
            }
        }
    }

    @Test
    fun testTwoFlagCycle() {
        run { // no flag keys
            try {
                val flagConfigs = listOf(
                    evaluationFlag(1, setOf(2)),
                    evaluationFlag(2, setOf(1)),
                )
                val result = topologicalSort(flagConfigs)
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys
            try {
                val flagConfigs = listOf(
                    evaluationFlag(1, setOf(2)),
                    evaluationFlag(2, setOf(1)),
                )
                val result = topologicalSort(flagConfigs, setOf("2"))
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys, no match
            try {
                val flagConfigs = listOf(
                    evaluationFlag(1, setOf(2)),
                    evaluationFlag(2, setOf(1)),
                )
                val result = topologicalSort(flagConfigs, setOf("999"))
                assertTrue(result.isEmpty())
            } catch (e: CycleException) {
                fail(e.message)
            }
        }
    }

    @Test
    fun testMultipleFlagsComplexCycle() {
        val flagConfigs = listOf(
            evaluationFlag(3, setOf(1, 2)),
            evaluationFlag(1, setOf()),
            evaluationFlag(4, setOf(21, 3)),
            evaluationFlag(2, setOf()),
            evaluationFlag(5, setOf(3)),
            evaluationFlag(6, setOf()),
            evaluationFlag(7, setOf()),
            evaluationFlag(8, setOf(9)),
            evaluationFlag(9, setOf()),
            evaluationFlag(20, setOf(4)),
            evaluationFlag(21, setOf(20))
        )
        try {
            val result = topologicalSort(flagConfigs)
            fail("expected cycle, instead:$result")
        } catch (e: CycleException) {
            // Expected
            assertEquals(setOf("4", "21", "20"), e.cycle)
        }
    }

    @Test
    fun testTopologicalSortComplexNoCycle_startWithLeaf() {
        // 8,7,4,6,10,5,3,1,2,9,20,21,30
        val flags = listOf(
            evaluationFlag(1, setOf(6, 3)),
            evaluationFlag(2, setOf(8, 5, 3, 1)),
            evaluationFlag(3, setOf(6, 5)),
            evaluationFlag(4, setOf(8, 7)),
            evaluationFlag(5, setOf(10, 7)),
            evaluationFlag(7, setOf(8)),
            evaluationFlag(6, setOf(7, 4)),
            evaluationFlag(8, setOf()),
            evaluationFlag(9, setOf(10, 7, 5)),
            evaluationFlag(10, setOf(7)),
            evaluationFlag(20, setOf()),
            evaluationFlag(21, setOf(20)),
            evaluationFlag(30, setOf()),
        )
        val result = topologicalSort(flags)
        val expected = listOf(
            evaluationFlag(8, setOf()),
            evaluationFlag(7, setOf(8)),
            evaluationFlag(4, setOf(8, 7)),
            evaluationFlag(6, setOf(7, 4)),
            evaluationFlag(10, setOf(7)),
            evaluationFlag(5, setOf(10, 7)),
            evaluationFlag(3, setOf(6, 5)),
            evaluationFlag(1, setOf(6, 3)),
            evaluationFlag(2, setOf(8, 5, 3, 1)),
            evaluationFlag(9, setOf(10, 7, 5)),
            evaluationFlag(20, setOf()),
            evaluationFlag(21, setOf(20)),
            evaluationFlag(30, setOf()),
        )
        assertEquals(expected, result)
    }

    @Test
    fun testTopologicalSortComplexNoCycle_startWithMiddle() {
        // 8,7,4,6,10,5,3,1,2,9,20,21,30
        val flags = listOf(
            evaluationFlag(6, setOf(7, 4)),
            evaluationFlag(1, setOf(6, 3)),
            evaluationFlag(2, setOf(8, 5, 3, 1)),
            evaluationFlag(3, setOf(6, 5)),
            evaluationFlag(4, setOf(8, 7)),
            evaluationFlag(5, setOf(10, 7)),
            evaluationFlag(7, setOf(8)),
            evaluationFlag(8, setOf()),
            evaluationFlag(9, setOf(10, 7, 5)),
            evaluationFlag(10, setOf(7)),
            evaluationFlag(20, setOf()),
            evaluationFlag(21, setOf(20)),
            evaluationFlag(30, setOf()),
        )
        val result = topologicalSort(flags)
        val expected = listOf(
            evaluationFlag(8, setOf()),
            evaluationFlag(7, setOf(8)),
            evaluationFlag(4, setOf(8, 7)),
            evaluationFlag(6, setOf(7, 4)),
            evaluationFlag(10, setOf(7)),
            evaluationFlag(5, setOf(10, 7)),
            evaluationFlag(3, setOf(6, 5)),
            evaluationFlag(1, setOf(6, 3)),
            evaluationFlag(2, setOf(8, 5, 3, 1)),
            evaluationFlag(9, setOf(10, 7, 5)),
            evaluationFlag(20, setOf()),
            evaluationFlag(21, setOf(20)),
            evaluationFlag(30, setOf()),
        )
        assertEquals(expected, result)
    }

    @Test
    fun testTopologicalSortComplexNoCycle_startWithRoot() {
        val flags = listOf(
            evaluationFlag(8, setOf()),
            evaluationFlag(1, setOf(6, 3)),
            evaluationFlag(2, setOf(8, 5, 3, 1)),
            evaluationFlag(3, setOf(6, 5)),
            evaluationFlag(4, setOf(8, 7)),
            evaluationFlag(5, setOf(10, 7)),
            evaluationFlag(6, setOf(7, 4)),
            evaluationFlag(7, setOf(8)),
            evaluationFlag(9, setOf(10, 7, 5)),
            evaluationFlag(10, setOf(7)),
            evaluationFlag(20, setOf()),
            evaluationFlag(21, setOf(20)),
            evaluationFlag(30, setOf()),
        )
        val result = topologicalSort(flags)
        val expected = listOf(
            evaluationFlag(8, setOf()),
            evaluationFlag(7, setOf(8)),
            evaluationFlag(4, setOf(8, 7)),
            evaluationFlag(6, setOf(7, 4)),
            evaluationFlag(10, setOf(7)),
            evaluationFlag(5, setOf(10, 7)),
            evaluationFlag(3, setOf(6, 5)),
            evaluationFlag(1, setOf(6, 3)),
            evaluationFlag(2, setOf(8, 5, 3, 1)),
            evaluationFlag(9, setOf(10, 7, 5)),
            evaluationFlag(20, setOf()),
            evaluationFlag(21, setOf(20)),
            evaluationFlag(30, setOf()),
        )
        assertEquals(expected, result)
    }
}
