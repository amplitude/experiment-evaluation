package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.flagConfig
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import kotlin.test.fail

class TopologicalSortTest {

    @Test
    fun testEmpty() {
        run { // no flag keys
            val flagConfigs = listOf<FlagConfig>()
            val result = topologicalSort(flagConfigs)
            assertTrue(result.isEmpty())
        }
        run { // with flag keys
            val flagConfigs = listOf<FlagConfig>()
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagDeployedNoDependencies() {
        val deployed = true
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs)
            assertEquals(listOf(flagConfig(1, dependencies, deployed)), result)
        }
        run { // with flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertEquals(listOf(flagConfig(1, dependencies, deployed)), result)
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagNotDeployedNoDependencies() {
        val deployed = false
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs)
            assertTrue(result.isEmpty())
        }
        run { // with flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertTrue(result.isEmpty())
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagDeployedWithDependencies() {
        val deployed = true
        val dependencies = setOf(2)
        run { // no flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs)
            assertEquals(listOf(flagConfig(1, dependencies, deployed)), result)
        }
        run { // with flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertEquals(listOf(flagConfig(1, dependencies, deployed)), result)
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testSingleFlagNotDeployedWithDependencies() {
        val deployed = false
        val dependencies = setOf(2)
        run { // no flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs)
            assertTrue(result.isEmpty())
        }
        run { // with flag keys
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("1"))
            assertTrue(result.isEmpty())
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(flagConfig(1, dependencies, deployed))
            val result = topologicalSort(flagConfigs, setOf("999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsAllDeployedNoDependencies() {
        val deployed = true
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(
                flagConfig(1, dependencies, deployed),
                flagConfig(2, dependencies, deployed),
            )
            val result = topologicalSort(flagConfigs)
            assertEquals(
                listOf(
                    flagConfig(1, dependencies, deployed),
                    flagConfig(2, dependencies, deployed),
                ),
                result
            )
        }
        run { // with flag keys
            val flagConfigs = listOf(
                flagConfig(1, dependencies, deployed),
                flagConfig(2, dependencies, deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertEquals(
                listOf(
                    flagConfig(1, dependencies, deployed),
                    flagConfig(2, dependencies, deployed),
                ),
                result
            )
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                flagConfig(1, dependencies, deployed),
                flagConfig(2, dependencies, deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsSomeDeployedNoDependencies() {
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(
                flagConfig(1, dependencies, true),
                flagConfig(2, dependencies, false),
            )
            val result = topologicalSort(flagConfigs)
            assertEquals(
                listOf(
                    flagConfig(1, dependencies, true),
                ),
                result
            )
        }
        run { // with flag keys
            val flagConfigs = listOf(
                flagConfig(1, dependencies, true),
                flagConfig(2, dependencies, false),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertEquals(
                listOf(
                    flagConfig(1, dependencies, true),
                ),
                result
            )
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                flagConfig(1, dependencies, true),
                flagConfig(2, dependencies, false),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsNoneDeployedNoDependencies() {
        val deployed = false
        val dependencies = setOf<Int>()
        run { // no flag keys
            val flagConfigs = listOf(
                flagConfig(1, dependencies, deployed),
                flagConfig(2, dependencies, deployed),
            )
            val result = topologicalSort(flagConfigs)
            assertTrue(result.isEmpty())
        }
        run { // with flag keys
            val flagConfigs = listOf(
                flagConfig(1, dependencies, deployed),
                flagConfig(2, dependencies, deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertTrue(result.isEmpty())
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                flagConfig(1, dependencies, deployed),
                flagConfig(2, dependencies, deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsAllDeployedWithDependencies() {
        val deployed = true
        run { // no flag keys
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), deployed),
                flagConfig(2, setOf(3), deployed),
                flagConfig(3, setOf(), deployed),
            )
            val result = topologicalSort(flagConfigs)
            assertEquals(
                listOf(
                    flagConfig(3, setOf(), deployed),
                    flagConfig(2, setOf(3), deployed),
                    flagConfig(1, setOf(2), deployed),
                ),
                result
            )
        }
        run { // with flag keys
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), deployed),
                flagConfig(2, setOf(3), deployed),
                flagConfig(3, setOf(), deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertEquals(
                listOf(
                    flagConfig(3, setOf(), deployed),
                    flagConfig(2, setOf(3), deployed),
                    flagConfig(1, setOf(2), deployed),
                ),
                result
            )
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), deployed),
                flagConfig(2, setOf(3), deployed),
                flagConfig(3, setOf(), deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsSomeDeployedWithDependencies() {
        run { // no flag keys
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), true),
                flagConfig(2, setOf(3), true),
                flagConfig(3, setOf(), false),
            )
            val result = topologicalSort(flagConfigs)
            assertEquals(
                listOf(
                    flagConfig(3, setOf(), false),
                    flagConfig(2, setOf(3), true),
                    flagConfig(1, setOf(2), true),
                ),
                result
            )
        }
        run { // with flag keys
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), true),
                flagConfig(2, setOf(3), true),
                flagConfig(3, setOf(), false),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertEquals(
                listOf(
                    flagConfig(3, setOf(), false),
                    flagConfig(2, setOf(3), true),
                    flagConfig(1, setOf(2), true),
                ),
                result
            )
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), true),
                flagConfig(2, setOf(3), true),
                flagConfig(3, setOf(), false),
            )
            val result = topologicalSort(flagConfigs, setOf("99", "999"))
            assertTrue(result.isEmpty())
        }
    }

    @Test
    fun testMultipleFlagsNoneDeployedWithDependencies() {
        val deployed = false
        run { // no flag keys
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), deployed),
                flagConfig(2, setOf(3), deployed),
                flagConfig(3, setOf(), deployed),
            )
            val result = topologicalSort(flagConfigs)
            assertTrue(result.isEmpty())
        }
        run { // with flag keys
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), deployed),
                flagConfig(2, setOf(3), deployed),
                flagConfig(3, setOf(), deployed),
            )
            val result = topologicalSort(flagConfigs, setOf("1", "2"))
            assertTrue(result.isEmpty())
        }
        run { // with flag keys, no match
            val flagConfigs = listOf(
                flagConfig(1, setOf(2), deployed),
                flagConfig(2, setOf(3), deployed),
                flagConfig(3, setOf(), deployed),
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
                    flagConfig(1, setOf(1), true),
                )
                val result = topologicalSort(flagConfigs)
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys, deployed
            try {
                val flagConfigs = listOf(
                    flagConfig(1, setOf(1), true),
                )
                val result = topologicalSort(flagConfigs, setOf("1"))
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys, not deployed
            try {
                val flagConfigs = listOf(
                    flagConfig(1, setOf(1), false),
                )
                val result = topologicalSort(flagConfigs, setOf("1"))
                assertTrue(result.isEmpty())
            } catch (e: CycleException) {
                fail(e.message)
            }
        }
        run { // with flag keys, no match
            try {
                val flagConfigs = listOf(
                    flagConfig(1, setOf(1), true),
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
                    flagConfig(1, setOf(2), false),
                    flagConfig(2, setOf(1), true),
                )
                val result = topologicalSort(flagConfigs)
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys, deployed
            try {
                val flagConfigs = listOf(
                    flagConfig(1, setOf(2), false),
                    flagConfig(2, setOf(1), true),
                )
                val result = topologicalSort(flagConfigs, setOf("2"))
                fail("expected cycle, instead: $result")
            } catch (e: CycleException) {
                e.printStackTrace()
            }
        }
        run { // with flag keys, not deployed
            try {
                val flagConfigs = listOf(
                    flagConfig(1, setOf(2), false),
                    flagConfig(2, setOf(1), true),
                )
                val result = topologicalSort(flagConfigs, setOf("1"))
                assertTrue(result.isEmpty())
            } catch (e: CycleException) {
                fail(e.message)
            }
        }
        run { // with flag keys, no match
            try {
                val flagConfigs = listOf(
                    flagConfig(1, setOf(2), false),
                    flagConfig(2, setOf(1), true),
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
            flagConfig(3, setOf(1, 2), true),
            flagConfig(1, setOf(), true),
            flagConfig(4, setOf(21, 3), true),
            flagConfig(2, setOf(), true),
            flagConfig(5, setOf(3), true),
            flagConfig(6, setOf(), true),
            flagConfig(7, setOf(), true),
            flagConfig(8, setOf(9), true),
            flagConfig(9, setOf(), true),
            flagConfig(20, setOf(4), true),
            flagConfig(21, setOf(20), true)
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
        val flags = listOf(
            flagConfig(1, setOf(6, 3), false),
            flagConfig(2, setOf(8, 5, 3, 1), true),
            flagConfig(3, setOf(6, 5), false),
            flagConfig(4, setOf(8, 7), false),
            flagConfig(5, setOf(10, 7), false),
            flagConfig(7, setOf(8), false),
            flagConfig(6, setOf(7, 4), true),
            flagConfig(8, setOf(), true),
            flagConfig(9, setOf(10, 7, 5), false),
            flagConfig(10, setOf(7), false),
            flagConfig(20, setOf(), false),
            flagConfig(21, setOf(20), true),
            flagConfig(30, setOf(), true),
        )
        val result = topologicalSort(flags)
        val expected = listOf(
            flagConfig(8, setOf(), true),
            flagConfig(7, setOf(8), false),
            flagConfig(10, setOf(7), false),
            flagConfig(5, setOf(10, 7), false),
            flagConfig(4, setOf(8, 7), false),
            flagConfig(6, setOf(7, 4), true),
            flagConfig(3, setOf(6, 5), false),
            flagConfig(1, setOf(6, 3), false),
            flagConfig(2, setOf(8, 5, 3, 1), true),
            flagConfig(20, setOf(), false),
            flagConfig(21, setOf(20), true),
            flagConfig(30, setOf(), true),
        )
        assertEquals(expected, result)
    }

    @Test
    fun testTopologicalSortComplexNoCycle_startWithMiddle() {
        val flags = listOf(
            flagConfig(6, setOf(7, 4), true),
            flagConfig(1, setOf(6, 3), false),
            flagConfig(2, setOf(8, 5, 3, 1), true),
            flagConfig(3, setOf(6, 5), false),
            flagConfig(4, setOf(8, 7), false),
            flagConfig(5, setOf(10, 7), false),
            flagConfig(7, setOf(8), false),
            flagConfig(8, setOf(), true),
            flagConfig(9, setOf(10, 7, 5), false),
            flagConfig(10, setOf(7), false),
            flagConfig(20, setOf(), false),
            flagConfig(21, setOf(20), true),
            flagConfig(30, setOf(), true),
        )
        val result = topologicalSort(flags)
        val expected = listOf(
            flagConfig(8, setOf(), true),
            flagConfig(7, setOf(8), false),
            flagConfig(4, setOf(8, 7), false),
            flagConfig(6, setOf(7, 4), true),
            flagConfig(10, setOf(7), false),
            flagConfig(5, setOf(10, 7), false),
            flagConfig(3, setOf(6, 5), false),
            flagConfig(1, setOf(6, 3), false),
            flagConfig(2, setOf(8, 5, 3, 1), true),
            flagConfig(20, setOf(), false),
            flagConfig(21, setOf(20), true),
            flagConfig(30, setOf(), true),
        )
        assertEquals(expected, result)
    }

    @Test
    fun testTopologicalSortComplexNoCycle_startWithRoot() {
        val flags = listOf(
            flagConfig(8, setOf(), true),
            flagConfig(1, setOf(6, 3), false),
            flagConfig(2, setOf(8, 5, 3, 1), true),
            flagConfig(3, setOf(6, 5), false),
            flagConfig(4, setOf(8, 7), false),
            flagConfig(5, setOf(10, 7), false),
            flagConfig(6, setOf(7, 4), true),
            flagConfig(7, setOf(8), false),
            flagConfig(9, setOf(10, 7, 5), false),
            flagConfig(10, setOf(7), false),
            flagConfig(20, setOf(), false),
            flagConfig(21, setOf(20), true),
            flagConfig(30, setOf(), true),
        )
        val result = topologicalSort(flags)
        val expected = listOf(
            flagConfig(8, setOf(), true),
            flagConfig(7, setOf(8), false),
            flagConfig(10, setOf(7), false),
            flagConfig(5, setOf(10, 7), false),
            flagConfig(4, setOf(8, 7), false),
            flagConfig(6, setOf(7, 4), true),
            flagConfig(3, setOf(6, 5), false),
            flagConfig(1, setOf(6, 3), false),
            flagConfig(2, setOf(8, 5, 3, 1), true),
            flagConfig(20, setOf(), false),
            flagConfig(21, setOf(20), true),
            flagConfig(30, setOf(), true),
        )
        assertEquals(expected, result)
    }
}
