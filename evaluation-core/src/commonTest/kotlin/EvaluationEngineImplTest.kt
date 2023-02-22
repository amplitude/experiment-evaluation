package com.amplitude.experiment.evaluation

import com.amplitude.experiment.evaluation.util.flagConfig
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

private const val USER_ID_BUCKETING_KEY = "user_id"

class EvaluationEngineImplTest {

    // use the actual implementation to test the non-interface exposed methods directly
    private var evaluationEngine = EvaluationEngineImpl()

    @Test
    fun testEmptyFlagConfigs() {
        run {
            assertEquals(
                mapOf(),
                evaluationEngine.evaluate(arrayListOf(), SkylabUser())
            )
        }
    }

    @Test
    fun testEvalInclusions() {
        // null inclusions, default result
        run {
            val flagConfig = flagConfig(variantsInclusions = null)
            assertEquals(
                "off",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "user-1", deviceId = "device-1")
                ).variant.key
            )
        }
        // empty inclusions, default result
        run {
            val flagConfig = flagConfig(variantsInclusions = mapOf())
            assertEquals(
                "off",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "user-1", deviceId = "device-1")
                ).variant.key
            )
        }
        // empty inclusions set, default result
        run {
            val flagConfig = flagConfig(
                variants = listOf(Variant("on")),
                variantsInclusions = mapOf("flag-config" to setOf())
            )
            assertEquals(
                "off",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "user-1", deviceId = "device-1")
                ).variant.key
            )
        }
        // inclusion, no match, default result
        run {
            val flagConfig = flagConfig(
                variants = listOf(Variant("on")),
                variantsInclusions = mapOf("flag-config" to setOf("user-2", "device-2"))
            )
            assertEquals(
                "off",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "user-1", deviceId = "device-1")
                ).variant.key
            )
        }
        // inclusion, user id match, variant result
        run {
            val flagConfig = flagConfig(
                variants = listOf(Variant("on")),
                variantsInclusions = mapOf("flag-config" to setOf("user-1", "device-2"))
            )
            assertEquals(
                "off",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "user-1", deviceId = "device-1")
                ).variant.key
            )
        }
        // inclusion, device id match, variant result
        run {
            val flagConfig = flagConfig(
                variants = listOf(Variant("on")),
                variantsInclusions = mapOf("on" to setOf("user-2", "device-1"))
            )
            assertEquals(
                "off",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "user-1", deviceId = "device-1")
                ).variant.key
            )
        }
    }

    @Test
    fun testGetVariantBasedOnRollout() {
        run {

            // 100% rolled out; B is 1,000,000 times more likely than A
            val variants: List<Variant> = arrayListOf(Variant("A"), Variant("B"), Variant("C"))
            val percentage = 100
            val rolloutWeightsPerVariantKey: Map<String, Int> =
                mapOf("A" to 1, "B" to 1000000)
            val allocations: List<Allocation> = arrayListOf(
                fromCentilePercentage(percentage, rolloutWeightsPerVariantKey)
            )
            val flagVariant = evaluationEngine.getVariantBasedOnRollout(
                variants, allocations, "bucketingSalt", "id-1"
            )?.key
            assertEquals("B", flagVariant)
        }
        run {

            // 50% rolled out; B is approximately equal to A
            val variants: List<Variant> =
                arrayListOf(Variant("A"), Variant("B"), Variant("C"))
            val percentage = 100
            val rolloutWeightsPerVariantKey: Map<String, Int> =
                mapOf("A" to 1, "B" to 1)
            val allocations: List<Allocation> = arrayListOf(
                fromCentilePercentage(percentage, rolloutWeightsPerVariantKey)
            )
            var countA = 0
            var countB = 0
            for (i in 0..99) {
                val flagVariant = evaluationEngine.getVariantBasedOnRollout(
                    variants, allocations, "bucketingSalt", "id-$i"
                )
                if ("A" == flagVariant?.key) {
                    countA++
                }
                if ("B" == flagVariant?.key) {
                    countB++
                }
            }
            assertEquals(52, countA.toLong())
            assertEquals(48, countB.toLong())
        }
    }

//    @Test
//    fun testGetVariantMaxHash() {
//        val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//        Mockito.doReturn(EvaluationEngineImpl.MAX_HASH_VALUE).`when`(spy).getHash(Mockito.anyString())
//        run {
//
//            // 100% rolled out; B is 1,000,000 times more likely than A
//            val variants: List<Variant> = arrayListOf(Variant("A"), Variant("B"), Variant("C"))
//            val percentage = 100
//            val rolloutWeightsPerVariantKey: Map<String, Int> = mapOf("B" to 1)
//            val allocations: List<Allocation> = Lists
//                .newArrayList(Allocation.fromCentilePercentage(percentage, rolloutWeightsPerVariantKey))
//            val flagVariant: String = spy.getVariantBasedOnRollout(
//                variants, allocations, "false", setOf(),
//                "bucketingSalt", "id-1"
//            ).key
//            assertEquals("B", flagVariant)
//        }
//    }

    @Test
    fun testGetVariantBasedOnRolloutMultipleAllocations() {
        run {

            // Two rollouts of 25% each; B is 1,000,000 times more likely than A in the first rollout, A is 1,000,000
            // times more likely than B in the second rollout
            // Should be roughly equal
            val variants: List<Variant> = arrayListOf(Variant("A"), Variant("B"), Variant("C"))
            val rolloutWeightsPerVariantKey: Map<String, Int> =
                mapOf("A" to 1, "B" to 1000000)
            val rolloutWeightsPerVariantKey2: Map<String, Int> =
                mapOf("A" to 1000000, "B" to 1)
            val allocations: List<Allocation> = arrayListOf(
                Allocation(2500, rolloutWeightsPerVariantKey),
                Allocation(2500, rolloutWeightsPerVariantKey2)
            )
            var countA = 0
            var countB = 0
            var countDefault = 0
            for (i in 0..999) {
                val flagVariant = evaluationEngine.getVariantBasedOnRollout(
                    variants, allocations, "bucketingSalt", "id-$i"
                )
                if ("A" == flagVariant?.key) {
                    countA++
                }
                if ("B" == flagVariant?.key) {
                    countB++
                }
                if ("false" == flagVariant?.key) {
                    countDefault++
                }
            }
            assertEquals(226, countA.toLong())
            assertEquals(272, countB.toLong())
            assertEquals(502, countDefault.toLong())
        }
        run {

            // Two rollouts of 25% each; B is 1,000,000 times more likely than A in the first rollout
            // Should have the same distribution as the first allocation in the previous test
            val variants: List<Variant> =
                arrayListOf(Variant("A"), Variant("B"), Variant("C"))
            val rolloutWeightsPerVariantKey: Map<String, Int> =
                mapOf("A" to 1, "B" to 1000000)
            val allocations: List<Allocation> =
                arrayListOf(Allocation(2500, rolloutWeightsPerVariantKey))
            var countA = 0
            var countB = 0
            var countDefault = 0
            for (i in 0..999) {
                val flagVariant = evaluationEngine.getVariantBasedOnRollout(
                    variants, allocations, "bucketingSalt", "id-$i"
                )
                if ("A" == flagVariant?.key) {
                    countA++
                }
                if ("B" == flagVariant?.key) {
                    countB++
                }
                if ("false" == flagVariant?.key) {
                    countDefault++
                }
            }
            assertEquals(0, countA.toLong())
            assertEquals(272, countB.toLong())
            assertEquals(728, countDefault.toLong())
        }
    }

    @Test
    fun testGetHash() {
        // Source: https://cimi.io/murmurhash3js-revisited/ (x86 32bit)
        run {
            val testString = "My hovercraft is full of eels."
            assertEquals(2953494853L, evaluationEngine.getHash(testString))
        }
        run {
            val testString = "My 🚀 is full of 🦎."
            assertEquals(1818098979L, evaluationEngine.getHash(testString))
        }
        run {
            val testString = "吉 星 高 照"
            assertEquals(3435142074L, evaluationEngine.getHash(testString))
        }
    }

    @Test
    fun testEvalCustomTargetingSegmentConfig() {
        run {

            // everyone in the ALL_USERS segment gets A
            // everyone in custom-target segment 1 gets B
            // everyone in custom-target segment 2 gets C
            val flagConfig = FlagConfig(
                "flag-1", null, 0, true, "abcdef", "false",
                arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
                SegmentTargetingConfig(
                    "default-segment", listOf(), 100,
                    mapOf("A" to 1), USER_ID_BUCKETING_KEY
                ),
                arrayListOf(
                    SegmentTargetingConfig(
                        "segment-1",
                        listOf(
                            UserPropertyFilter("country", Operator.IS, setOf("Canada"))
                        ),
                        100, mapOf("B" to 1), USER_ID_BUCKETING_KEY
                    ),
                    SegmentTargetingConfig(
                        "segment-2",
                        listOf(
                            UserPropertyFilter(
                                "platform", Operator.IS,
                                setOf("android")
                            )
                        ),
                        100, mapOf("C" to 1), USER_ID_BUCKETING_KEY
                    )
                ),
            )

            // no user properties, so fails to match custom segment filters
            assertEquals(
                "A",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-1")
                ).variant.key
            )

            // country = "Canada", gets segment 1 config which returns "B"
            assertEquals(
                "B",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-1", country = "Canada")
                ).variant.key
            )

            // platform = "android", gets segment 2 config which returns "C"
            assertEquals(
                "C",
                evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-1", platform = "android")
                ).variant.key
            )

            // mismatch country and matches platform (2nd segment)
            assertEquals(
                "C",
                evaluationEngine.evaluateFlag(
                    flagConfig, SkylabUser(userId = "id-1", country = "Italy", platform = "android")
                ).variant.key
            )

            // matches both segments, first one is returned
            assertEquals(
                "B",
                evaluationEngine.evaluateFlag(
                    flagConfig, SkylabUser(userId = "id-1", country = "Canada", platform = "android")
                ).variant.key
            )

            // has properties, but doesn't match both segments, ALL_USERS_SEGMENT info is returned
            assertEquals(
                "A",
                evaluationEngine.evaluateFlag(
                    flagConfig, SkylabUser(userId = "id-1", country = "France", platform = "iPhone")
                ).variant.key
            )
        }
    }

    @Test
    fun testEvaluate() {
        // everyone gets A
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", null, 0, true,  "abcdef", "default-value",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(),
        )

        // flag is disabled, everyone gets default value
        val flagConfig2 = FlagConfig(
            "test-evaluate-flag-2", null, 0, false, "abcdef", "default-value",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf(), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(),
        )
        val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
            arrayListOf(flagConfig1, flagConfig2),
            SkylabUser(userId = "test-evaluate-user")
        )
        val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
            "test-evaluate-flag-1" to
                FlagResult(Variant("A"), "fully-rolled-out-variant", false, null),
            "test-evaluate-flag-2" to
                FlagResult(Variant("default-value"), "flag-disabled", true, null)
        )
        assertEquals(expectedEvaluationResult, evaluationResult)
    }

    @Test
    fun testFullyRolledOutVariant() {
        run {

            // variant has been fully rolled out and everyone should get A
            val flagConfig1 = FlagConfig(
                "test-evaluate-flag-1", null, 0, true, "abcdef", "default-value",
                arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
                SegmentTargetingConfig(
                    "default-segment", listOf(), 100,
                    mapOf("A" to 1), USER_ID_BUCKETING_KEY
                ),
                arrayListOf(),
            )

            // no context passed. It should return fully rolled out variant instead of the default value
            assertEquals(
                "A",
                evaluationEngine.evaluateFlag(flagConfig1, SkylabUser()).variant.key
            )
        }
        run {

            // there's only one variant A; flag has been 100% rolled out and no roll-out weight is assigned, so assume
            // even distribution
            val flagConfig = FlagConfig(
                "test-fully-rolled-out-variant", null, 0, true,
                "abcdef", "default-value",
                arrayListOf(Variant("A")), mapOf(),
                SegmentTargetingConfig(
                    "default-segment", listOf(), 100, mapOf(),
                    USER_ID_BUCKETING_KEY
                ),
                arrayListOf()
            )
            // no context passed. It should return fully rolled out variant instead of the default value
            assertEquals(
                "A",
                evaluationEngine.evaluateFlag(flagConfig, SkylabUser()).variant.key
            )
        }
    }

    @Test
    fun testNullMultiPropFilterInSegment() {
        // variant has been fully rolled out and everyone should get A
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", null, 0, true,  "abcdef", "default-value",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig("default-segment", null, 0, mapOf("A" to 1), USER_ID_BUCKETING_KEY),
            arrayListOf(
                SegmentTargetingConfig(
                    "segment-1", null, 100, mapOf("B" to 1),
                    USER_ID_BUCKETING_KEY
                )
            )
        )
        assertEquals(
            "B",
            evaluationEngine.evaluateFlag(
                flagConfig1,
                SkylabUser(userId = "does-not-matter")
            ).variant.key
        )
    }

    @Test
    fun testCustomUserPropertyFilter() {
        // everyone in the ALL_USERS segment gets A
        // everyone in custom-target segment 1 gets B
        // everyone in custom-target segment 2 gets C
        val flagConfig = FlagConfig(
            "flag-1", null, 0, true, "abcdef", "false",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(
                SegmentTargetingConfig(
                    "segment-1",
                    listOf(
                        UserPropertyFilter(
                            "gp:custom-prop-1", Operator.IS,
                            setOf("prop-1-value-1")
                        )
                    ),
                    100, mapOf("B" to 1), USER_ID_BUCKETING_KEY
                ),
                SegmentTargetingConfig(
                    "segment-2",
                    listOf(
                        UserPropertyFilter(
                            "gp:custom-prop-2", Operator.IS,
                            setOf("prop-2-value-1")
                        )
                    ),
                    100, mapOf("C" to 1), USER_ID_BUCKETING_KEY
                )
            ),
        )

        // no user properties, so fails to match custom segment filters and falls back to the general segment
        assertEquals(
            "A",
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )

        // custom-prop-1 = "prop-1-value-1", gets segment 1 config which returns "B"
        assertEquals(
            "B",
            evaluationEngine.evaluateFlag(
                flagConfig, SkylabUser(userId = "id-1", userProperties = mapOf("custom-prop-1" to "prop-1-value-1"))
            ).variant.key
        )

        // custom-prop-2 = "prop-2-value-1", gets segment 2 config which returns "C"
        assertEquals(
            "C",
            evaluationEngine.evaluateFlag(
                flagConfig, SkylabUser(userId = "id-1", userProperties = mapOf("custom-prop-2" to "prop-2-value-1"))
            ).variant.key
        )

        // mismatch custom-prop-1 and matches custom-prop-2 (2nd segment)
        assertEquals(
            "C",
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf(
                        "custom-prop-1" to "prop-1-value-2",
                        "custom-prop-2" to "prop-2-value-1",
                    )
                )
            ).variant.key
        )

        // matches both segments, first one is returned
        assertEquals(
            "B",
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf(
                        "custom-prop-1" to "prop-1-value-1",
                        "custom-prop-2" to "prop-2-value-1",
                    )
                )
            ).variant.key
        )

        // has properties, but doesn't match both segments, ALL_USERS_SEGMENT info is returned
        assertEquals(
            "A",
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf(
                        "custom-prop-1" to "prop-1-value-not-match",
                        "custom-prop-2" to "prop-2-value-not-match",
                    )
                )
            ).variant.key
        )
    }

    @Test
    fun testNullUser() {
        // should return default value which is null in this case
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", null, 0, true, "abcdef", null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", null, 0,
                mapOf("A" to 1, "B" to 1, "C" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(),
        )
        assertEquals(null, evaluationEngine.evaluateFlag(flagConfig1, null).variant.key)
    }

    @Test
    fun testEmptyStringUserId() {
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", null, 0, true, "abcdef", null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", null, 0,
                mapOf("A" to 1, "B" to 1, "C" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(),
        )
        assertEquals(
            null,
            evaluationEngine.evaluateFlag(
                flagConfig1,
                SkylabUser(userId = "")
            ).variant.key
        )
    }

    @Test
    fun testEmptySkylabUser() {
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", null, 0, true, "abcdef", null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", null, 0,
                mapOf("A" to 1, "B" to 1, "C" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(),
        )
        assertEquals(
            null,
            evaluationEngine.evaluateFlag(flagConfig1, SkylabUser()).variant.key
        )
    }

    @Test
    fun testCustomTargetSegment_DefaultVariant() {
        // everyone in segment-1 gets default-variant (null)
        // everyone in segment-2 gets default-variant (null)
        // everyone else gets A
        val flagConfig = FlagConfig(
            "flag-1", null, 0, true, "abcdef", null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(
                SegmentTargetingConfig(
                    "segment-1",
                    listOf(
                        UserPropertyFilter(
                            "gp:custom-prop-1", Operator.IS,
                            setOf("prop-1-value-1")
                        )
                    ),
                    0, mapOf(), USER_ID_BUCKETING_KEY
                ),
                SegmentTargetingConfig(
                    "segment-1",
                    listOf(
                        UserPropertyFilter(
                            "gp:custom-prop-2", Operator.IS,
                            setOf("prop-2-value-1")
                        )
                    ),
                    0, mapOf(), USER_ID_BUCKETING_KEY
                )
            ),
        )

        // custom-prop-1 = "prop-1-value-1", gets segment 1 config which returns "B"
        assertEquals(
            null,
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf("custom-prop-1" to "prop-1-value-1")
                )
            ).variant.key
        )

        // custom-prop-2 = "prop-2-value-1", gets segment 2 config which returns "C"
        assertEquals(
            null,
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf("custom-prop-2" to "prop-2-value-1")
                )
            ).variant.key
        )

        // no user properties, so fails to match custom segment filters and falls back to the general segment
        assertEquals(
            "A",
            evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )
    }

    @Test
    fun testDefaultVariantNull() {
        // flag is disabled, everyone gets default value
        val flagConfig = FlagConfig(
            "test-default-variant-null", null, 0, false,"abcdef", null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf(), USER_ID_BUCKETING_KEY
            ),
            arrayListOf()
        )
        val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
            arrayListOf(flagConfig),
            SkylabUser(userId = "user-id")
        )
        val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
            "test-default-variant-null" to
                FlagResult(Variant(null), "flag-disabled", true, null)
        )
        assertEquals(expectedEvaluationResult, evaluationResult)
    }

//    @Test
//    fun testPayloads() {
//        // everyone gets A
//        val payload = JSONObject()
//        payload.put("bool", true)
//        val flagConfig = FlagConfig(
//            "test-payloads", "Flag Name", 0, true, "user_id", "abcdef", false,
//            "globalHoldbackSalt", 0, MutualExclusionConfig(), "default-value",
//            arrayListOf(Variant("A", payload), Variant("B"), Variant("C")), mapOf(),
//            mapOf(), SegmentTargetingConfig(
//                "default-segment", listOf(), 100,
//                mapOf("A" to 1), USER_ID_BUCKETING_KEY
//            ),
//            arrayListOf(), null
//        )
//        val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
//            arrayListOf(flagConfig),
//            SkylabUser(userId = "user-id")
//        )
//        val expectedPayload = JSONObject()
//        expectedPayload.put("bool", true)
//        val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//            "test-payloads",
//            FlagResult(Variant("A", expectedPayload), "fully-rolled-out-variant", false)
//        )
//        assertEquals(expectedEvaluationResult, evaluationResult)
//    }
//
//    @Test
//    fun testGlobalHoldback() {
//        val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//        Mockito.doReturn(java.lang.Math.floor(.499 * EvaluationEngineImpl.MAX_HASH_VALUE) as Long).`when`(spy)
//            .getHash(Mockito.startsWith("gh/"))
//        val flagConfig = FlagConfig(
//            "test-global-holdback", "Flag Name", 0, true, AMPLITUDE_ID_BUCKETING_KEY,
//            "bucketingSalt", false, "globalHoldbackSalt", 5000, null, "defaultValue",
//            arrayListOf(Variant("A"), Variant("B")), mapOf(), mapOf(), null,
//            null, null
//        )
//        val evaluationResult: Map<String, FlagResult> = spy.evaluate(
//            arrayListOf(flagConfig),
//            SkylabUser(amplitudeId = 1)
//        )
//        val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//            "test-global-holdback",
//            FlagResult(Variant("defaultValue"), "global-holdback", true)
//        )
//        assertEquals(expectedEvaluationResult, evaluationResult)
//    }
//
//    @Test
//    fun testMutualExclusionGroupInBounds() {
//        run {
//            val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//            Mockito.doReturn(java.lang.Math.floor(.201 * EvaluationEngineImpl.MAX_HASH_VALUE) as Long).`when`(spy)
//                .getHash(Mockito.startsWith("me/"))
//            val flagConfig = FlagConfig(
//                "test-mutual-exclusion", "Flag Name", 0, true,
//                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
//                MutualExclusionConfig("mutualExclusionGroupSalt", 2000, 3000), "defaultValue",
//                arrayListOf(Variant("A"), Variant("B")), mapOf(), mapOf(),
//                SegmentTargetingConfig(
//                    "default-segment", listOf(), 100,
//                    mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
//                ),
//                null, null
//            )
//            val evaluationResult: Map<String, FlagResult> = spy.evaluate(
//                arrayListOf(flagConfig),
//                SkylabUser(amplitudeId = 1)
//            )
//            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//                "test-mutual-exclusion",
//                FlagResult(Variant("A"), "fully-rolled-out-variant", false)
//            )
//            assertEquals(expectedEvaluationResult, evaluationResult)
//        }
//        run {
//            val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//            Mockito.doReturn(java.lang.Math.floor(.499 * EvaluationEngineImpl.MAX_HASH_VALUE) as Long)
//                .`when`(spy)
//                .getHash(Mockito.startsWith("me/"))
//            val flagConfig = FlagConfig(
//                "test-mutual-exclusion", "Flag Name", 0, true,
//                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
//                MutualExclusionConfig("mutualExclusionGroupSalt", 2000, 3000), "defaultValue",
//                arrayListOf(Variant("A"), Variant("B")), mapOf(), mapOf(),
//                SegmentTargetingConfig(
//                    "default-segment", listOf(), 100,
//                    mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
//                ),
//                null, null
//            )
//            val evaluationResult: Map<String, FlagResult> = spy.evaluate(
//                arrayListOf(flagConfig),
//                SkylabUser(amplitudeId = 1)
//            )
//            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//                "test-mutual-exclusion",
//                FlagResult(Variant("A"), "fully-rolled-out-variant", false)
//            )
//            assertEquals(expectedEvaluationResult, evaluationResult)
//        }
//    }
//
//    @Test
//    fun testMutualExclusionGroupOutOfBounds() {
//        run {
//            val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//            Mockito.doReturn(java.lang.Math.floor(.199 * EvaluationEngineImpl.MAX_HASH_VALUE) as Long).`when`(spy)
//                .getHash(Mockito.startsWith("me/"))
//            val flagConfig = FlagConfig(
//                "test-mutual-exclusion", "Flag Name", 0, true,
//                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
//                MutualExclusionConfig("mutualExclusionGroupSalt", 2000, 3000), "defaultValue",
//                arrayListOf(Variant("A"), Variant("B")), mapOf(), mapOf(),
//                SegmentTargetingConfig(
//                    "default-segment", listOf(), 100,
//                    mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
//                ),
//                null, null
//            )
//            val evaluationResult: Map<String, FlagResult> = spy.evaluate(
//                arrayListOf(flagConfig),
//                SkylabUser(amplitudeId = 1)
//            )
//            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//                "test-mutual-exclusion",
//                FlagResult(Variant("defaultValue"), "mutual-exclusion-group", true)
//            )
//            assertEquals(expectedEvaluationResult, evaluationResult)
//        }
//        run {
//            val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//            Mockito.doReturn(java.lang.Math.floor(.501 * EvaluationEngineImpl.MAX_HASH_VALUE) as Long)
//                .`when`(spy)
//                .getHash(Mockito.startsWith("me/"))
//            val flagConfig = FlagConfig(
//                "test-mutual-exclusion", "Flag Name", 0, true,
//                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
//                MutualExclusionConfig("mutualExclusionGroupSalt", 2000, 3000), "defaultValue",
//                arrayListOf(Variant("A"), Variant("B")), mapOf(), mapOf(),
//                SegmentTargetingConfig(
//                    "default-segment", listOf(), 100,
//                    mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
//                ),
//                null, null
//            )
//            val evaluationResult: Map<String, FlagResult> = spy.evaluate(
//                arrayListOf(flagConfig),
//                SkylabUser(amplitudeId = 1)
//            )
//            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//                "test-mutual-exclusion",
//                FlagResult(Variant("defaultValue"), "mutual-exclusion-group", true)
//            )
//            assertEquals(expectedEvaluationResult, evaluationResult)
//        }
//    }

//    @Test
//    fun testCustomBucketingKey() {
//        run {
//            val flagConfig = FlagConfig(
//                "test-custom-bucketing-key", "Flag Name", 0, true, "gp:custom",
//                "bucketingSalt", true, "globalHoldbackSalt", 0, MutualExclusionConfig(), "defaultValue",
//                arrayListOf(Variant("A"), Variant("B")), mapOf(), mapOf(),
//                SegmentTargetingConfig(
//                    "default-segment", listOf(), 1,
//                    mapOf("A" to 1), null
//                ),
//                null, null
//            )
//            val user: SkylabUser = SkylabUser.builder().setAmplitudeId(1).setUserProperty("custom", "value").build()
//            val spy: EvaluationEngineImpl = Mockito.spy(evaluationEngine)
//            Mockito.doReturn(0L).`when`(spy).getHash(Mockito.matches(flagConfig.bucketingSalt.toString() + "/value"))
//            val evaluationResult: Map<String, FlagResult> =
//                spy.evaluate(arrayListOf(flagConfig), user)
//            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
//                "test-custom-bucketing-key",
//                FlagResult(Variant("A"), "default-segment", false)
//            )
//            assertEquals(expectedEvaluationResult, evaluationResult)
//        }
//    }

    @Test
    fun testCheckDependenciesAllOperator() {
        val engine = EvaluationEngineImpl()
        run {
            // flag parent dependencies is null returns empty
            val results: Map<String, EvaluationResult> = mapOf("f2" to EvaluationResult(Variant("on"), ""))
            val flag: FlagConfig = flagConfig("f1", parentDependencies = null)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag parent dependencies flags is empty returns empty
            val results: Map<String, EvaluationResult> = mapOf("f2" to EvaluationResult(Variant("on"), ""))
            val parentDependencies = ParentDependencies(PARENT_DEPENDENCY_OPERATOR_ALL, mapOf())
            val flag = flagConfig("f1", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, all dependencies met, returns empty
            val results: Map<String, EvaluationResult> = mapOf(
                "p1" to EvaluationResult(Variant("on"), ""),
                "p2" to EvaluationResult(Variant("on"), "")
            )
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ALL,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("on")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, one dependency met, returns NOT_MET result
            val results: Map<String, EvaluationResult> = mapOf(
                "p1" to EvaluationResult(Variant("on"), ""),
            )
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ALL,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("on")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertEquals(
                EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEPENDENCY_NOT_MET),
                checkResult
            )
        }
        run {
            // flag has dependencies, no dependencies met, returns NOT_MET result
            val results: Map<String, EvaluationResult> = mapOf()
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ALL,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("on")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertEquals(
                EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEPENDENCY_NOT_MET),
                checkResult
            )
        }
        run {
            // flag has dependencies all allowed is empty, returns empty
            val results: Map<String, EvaluationResult> = mapOf()
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ALL,
                mapOf(
                    "p1" to setOf(),
                    "p2" to setOf()
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, allowed not met, returns NOT_MET result
            val results: Map<String, EvaluationResult> = mapOf(
                "p1" to EvaluationResult(Variant("on"), ""),
                "p2" to EvaluationResult(Variant("on"), "")
            )
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ALL,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("other")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertEquals(
                EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEPENDENCY_NOT_MET),
                checkResult
            )
        }
    }

    @Test
    fun testCheckDependenciesAnyOperator() {
        val engine = EvaluationEngineImpl()
        run {
            // flag parent dependencies is null returns empty
            val results: Map<String, EvaluationResult> = mapOf(
                "f2" to EvaluationResult(Variant("on"), "")
            )
            val flag: FlagConfig = flagConfig("f1", parentDependencies = null)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag parent dependencies flags is empty returns empty
            val results: Map<String, EvaluationResult> = mapOf(
                "f2" to EvaluationResult(Variant("on"), "")
            )
            val parentDependencies = ParentDependencies(PARENT_DEPENDENCY_OPERATOR_ANY, mapOf())
            val flag = flagConfig("f1", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, all dependencies met, returns empty
            val results: Map<String, EvaluationResult> = mapOf(
                "p1" to EvaluationResult(Variant("on"), ""),
                "p2" to EvaluationResult(Variant("on"), "")
            )
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ANY,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("on")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, one dependency met, returns empty
            val results: Map<String, EvaluationResult> = mapOf(
                "p1" to EvaluationResult(Variant("on"), ""),
            )
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ANY,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("on")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, no dependencies met, returns NOT_MET result
            val results: Map<String, EvaluationResult> = mapOf()
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ANY,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("on")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertEquals(
                EvaluationResult(Variant(flag.defaultValue), EvaluationResult.DESC_DEPENDENCY_NOT_MET),
                checkResult
            )
        }
        run {
            // flag has dependencies all allowed is empty, returns empty
            val results: Map<String, EvaluationResult> = mapOf()
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ANY,
                mapOf(
                    "p1" to setOf(),
                    "p2" to setOf()
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
        run {
            // flag has dependencies, allowed not met, returns empty
            val results: Map<String, EvaluationResult> = mapOf(
                "p1" to EvaluationResult(Variant("on"), ""),
                "p2" to EvaluationResult(Variant("on"), "")
            )
            val parentDependencies = ParentDependencies(
                PARENT_DEPENDENCY_OPERATOR_ANY,
                mapOf(
                    "p1" to setOf("on"),
                    "p2" to setOf("other")
                )
            )
            val flag: FlagConfig = flagConfig("c", parentDependencies = parentDependencies)
            val checkResult = engine.checkDependencies(flag, results)
            assertNull(checkResult)
        }
    }
}

internal fun SegmentTargetingConfig(
    segmentName: String,
    segmentFilters: List<UserPropertyFilter>?,
    percentage: Int,
    rolloutWeights: Map<String, Int>?,
    bucketingKey: String
): SegmentTargetingConfig {
    return SegmentTargetingConfig(
        segmentName, segmentFilters ?: listOf(),
        listOf(fromCentilePercentage(percentage, rolloutWeights)), bucketingKey
    )
}
