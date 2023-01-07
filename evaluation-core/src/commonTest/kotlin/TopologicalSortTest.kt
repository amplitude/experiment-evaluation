package com.amplitude.experiment.evaluation

import kotlin.test.Test

class TopologicalSortTest {
    @Test
    fun test() {
        val flags = listOf(
            FlagConfig(3, setOf(1, 2)),
            FlagConfig(1, setOf()),
            FlagConfig(4, setOf(21, 3)),
            FlagConfig(2, setOf()),
            FlagConfig(5, setOf(3)),
            FlagConfig(6, setOf()),
            FlagConfig(7, setOf()),
            FlagConfig(8, setOf(9)),
            FlagConfig(9, setOf()),
            FlagConfig(20, setOf(4)),
            FlagConfig(21, setOf(20)),
        )
        val result = topologicalSort(flags)
        println(result.map { it.flagKey.toInt() })
        throw RuntimeException()
    }
}
