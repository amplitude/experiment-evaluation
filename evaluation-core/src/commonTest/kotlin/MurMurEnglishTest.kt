package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.ENGLISH_WORDS
import com.amplitude.experiment.evaluation.util.HASH3_X86_32
import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * The murmur seed to be used
 */
private const val MURMUR_SEED = 0x7f3a21ea

class Murmur3Test {

    private val englishWords = ENGLISH_WORDS.trim()
    private val hash3X8632 = HASH3_X86_32.trim()

    @Test
    fun testEnglishWordsMurmur3_x86_32() {
        testHashes(object : StringHashFunction {
            override fun getHash(bytes: ByteArray): String {
                return Murmur3.hash32x86(bytes, bytes.size, MURMUR_SEED).toString()
            }
        })
    }

    /**
     * The main core logic for all testing.
     */
    private fun testHashes(function: StringHashFunction) {
        val iterator = englishWords.lineSequence().iterator()
        val results = hash3X8632.lineSequence().iterator()
        var matched = 0
        var total = 0
        while (iterator.hasNext()) {
            val line: String = iterator.next()
            val bytes: ByteArray = line.encodeToByteArray()
            val computed = function.getHash(bytes)
            val actual: String = results.next()
            // result has only a single value
            when {
                actual == computed -> {
                    matched++
                }
                bigMatch(actual, computed) -> {
                    matched++
                }
                else -> {
                    println("hash match failed: input=$line, computed=$computed, actual=$actual")
                }
            }
            total++
        }
        assertEquals(total, matched, "Total number of hashes did not match")
    }

    private fun bigMatch(actual: String, computed: String): Boolean {
        // try with big decimal
        try {
            val x: Long = actual.toLong()
            if (computed == x.toString()) {
                return true
            }
            val y: Int = x.toInt()
            if (computed == y.toString()) {
                return true
            }
        } catch (e: Exception) {
            println("actual: $actual")
            println("computed: $computed")
            throw RuntimeException(e)
        }
        return false
    }

    /**
     * Hash function
     *
     * @author sangupta
     */
    private interface StringHashFunction {
        fun getHash(bytes: ByteArray): String
    }
}