package com.amplitude.experiment.evaluation

import kotlin.test.Test
import kotlin.test.assertEquals

private const val AMPLITUDE_ID_BUCKETING_KEY = "amplitude_id"
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
    fun testEvalExclusionsAndInclusions_1() {
        // exclude only: Variant "A" has "id-1" in exclusion list and the flag is 100% rolled out to A
        val flagConfig = FlagConfig(
            "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
            "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")),
            mapOf("A" to setOf("id-1")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        assertEquals(
            flagConfig.defaultValue, evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )
    }

    @Test
    fun testEvalExclusionsAndInclusions_2() {
        // include and exclude both: Variant "A" has "id-1" under inclusion and exclusion, user can't be served A
        val flagConfig = FlagConfig(
            "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
            "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")),
            mapOf("A" to setOf("id-1")), mapOf("A" to setOf("id-1")),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        assertEquals(
            flagConfig.defaultValue, evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )
    }

    @Test
    fun testEvalExclusionsAndInclusions_3() {
        // include and exclude both: Variant "A" has "id-1" under inclusion and exclusion, user can't be served A.
        // experiment is rolled out to 100% of users and rolloutWeight is {"B":1}. User should be served B
        val flagConfig = FlagConfig(
            "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
            "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")),
            mapOf("A" to setOf("id-1")), mapOf("A" to setOf("id-1")),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("B" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        assertEquals(
            "B", evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )
    }

    @Test
    fun testEvalExclusionsAndInclusions_4() {
        run {

            // include only: Variant "A" has "id-1" and "id-2" in inclusion lists, null exclusionss
            val flagConfig = FlagConfig(
                "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
                "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
                arrayListOf(Variant("A"), Variant("B"), Variant("C")), null,
                mapOf("A" to setOf("id-1", "id-2")), EmptySegmentTargetingConfig(), arrayListOf(), null
            )
            assertEquals(
                "A", evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-2")
                ).variant.key
            )
        }
        run {

            // include only: Variant "A" has "id-1" and "id-2" in inclusion lists
            val flagConfig = FlagConfig(
                "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
                "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
                arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
                mapOf("A" to setOf("id-1", "id-2")), EmptySegmentTargetingConfig(), arrayListOf(), null
            )
            assertEquals(
                "A", evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-2")
                ).variant.key
            )
        }
    }

    @Test
    fun testEvalExclusionsAndInclusions_5() {
        // exclude only: Variant "A" has "id-2" in exclusion list and the flag is 100% rolled out to A and B evenly
        val flagConfig = FlagConfig(
            "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
            "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")),
            mapOf("A" to setOf("id-2")), mapOf(),
            SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1, "B" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        assertEquals(
            flagConfig.defaultValue, evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-2")
            ).variant.key
        )
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
                variants, allocations, "false",
                setOf(), "bucketingSalt", "id-1"
            ).key
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
                val flagVariant: Variant = evaluationEngine.getVariantBasedOnRollout(
                    variants, allocations, "false",
                    setOf(), "bucketingSalt", "id-$i"
                )
                if ("A" == flagVariant.key) {
                    countA++
                }
                if ("B" == flagVariant.key) {
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
                val flagVariant: Variant = evaluationEngine.getVariantBasedOnRollout(
                    variants, allocations, "false",
                    setOf(), "bucketingSalt", "id-$i"
                )
                if ("A" == flagVariant.key) {
                    countA++
                }
                if ("B" == flagVariant.key) {
                    countB++
                }
                if ("false" == flagVariant.key) {
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
                val flagVariant: Variant = evaluationEngine.getVariantBasedOnRollout(
                    variants, allocations, "false",
                    setOf(), "bucketingSalt", "id-$i"
                )
                if ("A" == flagVariant.key) {
                    countA++
                }
                if ("B" == flagVariant.key) {
                    countB++
                }
                if ("false" == flagVariant.key) {
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
                "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
                "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
                arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
                mapOf(),
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
                null
            )

            // no user properties, so fails to match custom segment filters
            assertEquals(
                "A", evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-1")
                ).variant.key
            )

            // country = "Canada", gets segment 1 config which returns "B"
            assertEquals(
                "B", evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-1", country = "Canada")
                ).variant.key
            )

            // platform = "android", gets segment 2 config which returns "C"
            assertEquals(
                "C", evaluationEngine.evaluateFlag(
                    flagConfig,
                    SkylabUser(userId = "id-1", platform = "android")
                ).variant.key
            )

            // mismatch country and matches platform (2nd segment)
            assertEquals(
                "C", evaluationEngine.evaluateFlag(
                    flagConfig, SkylabUser(userId = "id-1", country = "Italy", platform = "android")
                ).variant.key
            )

            // matches both segments, first one is returned
            assertEquals(
                "B", evaluationEngine.evaluateFlag(
                    flagConfig, SkylabUser(userId = "id-1", country = "Canada", platform = "android")
                ).variant.key
            )

            // has properties, but doesn't match both segments, ALL_USERS_SEGMENT info is returned
            assertEquals(
                "A", evaluationEngine.evaluateFlag(
                    flagConfig, SkylabUser(userId = "id-1", country = "France", platform = "iPhone")
                ).variant.key
            )
        }
    }

    @Test
    fun testEvaluate() {
        // everyone gets A
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", "Flag Name", 0, true, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), "default-value",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(), SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf("A" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )

        // flag is disabled, everyone gets default value
        val flagConfig2 = FlagConfig(
            "test-evaluate-flag-2", "Flag Name", 0, false, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), "default-value",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(), SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf(), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
            arrayListOf(flagConfig1, flagConfig2),
            SkylabUser(userId = "test-evaluate-user")
        )
        val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
            "test-evaluate-flag-1" to
            FlagResult(Variant("A"), "fully-rolled-out-variant", false),
            "test-evaluate-flag-2" to
            FlagResult(Variant("default-value"), "flag-disabled", true)
        )
        assertEquals(expectedEvaluationResult, evaluationResult)
    }

    @Test
    fun testFullyRolledOutVariant() {
        run {

            // variant has been fully rolled out and everyone should get A
            val flagConfig1 = FlagConfig(
                "test-evaluate-flag-1", "Flag Name", 0, true, "user_id", "abcdef",
                false, "globalHoldbackSalt", 0, MutualExclusionConfig(), "default-value",
                arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
                mapOf(), SegmentTargetingConfig(
                    "default-segment", listOf(), 100,
                    mapOf("A" to 1), USER_ID_BUCKETING_KEY
                ),
                arrayListOf(), null
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
                "test-fully-rolled-out-variant", "Flag Name", 0, true, "user_id",
                "abcdef", false, "globalHoldbackSalt", 0, MutualExclusionConfig(), "default-value",
                arrayListOf(Variant("A")), mapOf(), mapOf(),
                SegmentTargetingConfig(
                    "default-segment", listOf(), 100, mapOf(),
                    USER_ID_BUCKETING_KEY
                ),
                arrayListOf(), null
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
            "test-evaluate-flag-1", "Flag Name", 0, true, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), "default-value",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(),
            SegmentTargetingConfig("default-segment", null, 0, mapOf("A" to 1), USER_ID_BUCKETING_KEY),
            arrayListOf(
                SegmentTargetingConfig(
                    "segment-1", null, 100, mapOf("B" to 1),
                    USER_ID_BUCKETING_KEY
                )
            ),
            null
        )
        assertEquals(
            "B", evaluationEngine.evaluateFlag(
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
            "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
            "globalHoldbackSalt", 0, MutualExclusionConfig(), "false",
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(),
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
            null
        )

        // no user properties, so fails to match custom segment filters and falls back to the general segment
        assertEquals(
            "A", evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )

        // custom-prop-1 = "prop-1-value-1", gets segment 1 config which returns "B"
        assertEquals(
            "B", evaluationEngine.evaluateFlag(
                flagConfig, SkylabUser(userId = "id-1", userProperties = mapOf("custom-prop-1" to "prop-1-value-1"))
            ).variant.key
        )

        // custom-prop-2 = "prop-2-value-1", gets segment 2 config which returns "C"
        assertEquals(
            "C", evaluationEngine.evaluateFlag(
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
                SkylabUser(userId = "id-1",
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
            "test-evaluate-flag-1", "Flag Name", 0, true, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(), SegmentTargetingConfig(
                "default-segment", null, 0,
                mapOf("A" to 1, "B" to 1, "C" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        assertEquals(null, evaluationEngine.evaluateFlag(flagConfig1, null).variant.key)
    }

    @Test
    fun testEmptyStringUserId() {
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", "Flag Name", 0, true, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(), SegmentTargetingConfig(
                "default-segment", null, 0,
                mapOf("A" to 1, "B" to 1, "C" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        assertEquals(
            null, evaluationEngine.evaluateFlag(
                flagConfig1,
                SkylabUser(userId = "")
            ).variant.key
        )
    }

    @Test
    fun testEmptySkylabUser() {
        val flagConfig1 = FlagConfig(
            "test-evaluate-flag-1", "Flag Name", 0, true, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(), SegmentTargetingConfig(
                "default-segment", null, 0,
                mapOf("A" to 1, "B" to 1, "C" to 1), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
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
            "flag-1", "Flag Name", 0, true, "user_id", "abcdef", false,
            "globalHoldbackSalt", 0, MutualExclusionConfig(), null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(),
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
            null
        )

        // custom-prop-1 = "prop-1-value-1", gets segment 1 config which returns "B"
        assertEquals(
            null, evaluationEngine.evaluateFlag(
                flagConfig, SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf("custom-prop-1" to "prop-1-value-1")
                )
            ).variant.key
        )

        // custom-prop-2 = "prop-2-value-1", gets segment 2 config which returns "C"
        assertEquals(
            null, evaluationEngine.evaluateFlag(
                flagConfig, SkylabUser(
                    userId = "id-1",
                    userProperties = mapOf("custom-prop-2" to "prop-2-value-1")
                )
            ).variant.key
        )

        // no user properties, so fails to match custom segment filters and falls back to the general segment
        assertEquals(
            "A", evaluationEngine.evaluateFlag(
                flagConfig,
                SkylabUser(userId = "id-1")
            ).variant.key
        )
    }

    @Test
    fun testDefaultVariantNull() {
        // flag is disabled, everyone gets default value
        val flagConfig = FlagConfig(
            "test-default-variant-null", "Flag Name", 0, false, "user_id", "abcdef",
            false, "globalHoldbackSalt", 0, MutualExclusionConfig(), null,
            arrayListOf(Variant("A"), Variant("B"), Variant("C")), mapOf(),
            mapOf(), SegmentTargetingConfig(
                "default-segment", listOf(), 100,
                mapOf(), USER_ID_BUCKETING_KEY
            ),
            arrayListOf(), null
        )
        val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
            arrayListOf(flagConfig),
            SkylabUser(userId = "user-id")
        )
        val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
            "test-default-variant-null" to
            FlagResult(Variant(null), "flag-disabled", true)
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

    @Test
    fun testStickyBucketingOff() {
        run {
            val flagConfig = FlagConfig(
                "test-sticky-bucketing", "Flag Name", 0, true,
                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
                MutualExclusionConfig(), "defaultValue", arrayListOf(Variant("A"), Variant("B")),
                mapOf(), mapOf(), SegmentTargetingConfig(
                    "default-segment",
                    listOf(), 100, mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
                ),
                null, null
            )
            val user = SkylabUser(
                amplitudeId = 1,
                userProperties = mapOf("[Experiment] ${flagConfig.flagKey}" to "stickyValue")
            )
            val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
                arrayListOf(flagConfig),
                user
            )
            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
                "test-sticky-bucketing" to
                FlagResult(Variant("A"), "fully-rolled-out-variant", false)
            )
            assertEquals(expectedEvaluationResult, evaluationResult)
        }
    }

    @Test
    fun testStickyBucketingOn() {
        run {
            val flagConfig = FlagConfig(
                "test-sticky-bucketing", "Flag Name", 0, true,
                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", true, "globalHoldbackSalt", 0,
                MutualExclusionConfig(), "defaultValue", arrayListOf(Variant("A"), Variant("B")),
                mapOf(), mapOf(),
                SegmentTargetingConfig(
                    "default-segment", listOf(), 100,
                    mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
                ),
                null, "[Experiment] test-sticky-bucketing"
            )
            val user = SkylabUser(
                amplitudeId = 1,
                userProperties = mapOf("[Experiment] ${flagConfig.flagKey}" to "stickyValue")
            )
            val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
                arrayListOf(flagConfig),
                user
            )
            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
                "test-sticky-bucketing" to
                FlagResult(Variant("stickyValue"), "sticky-bucketing", false)
            )
            assertEquals(expectedEvaluationResult, evaluationResult)
        }
        run {

            // Test null
            val flagConfig = FlagConfig(
                "test-sticky-bucketing", "Flag Name", 0, true,
                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
                MutualExclusionConfig(), "defaultValue", arrayListOf(Variant("A"), Variant("B")),
                mapOf(), mapOf(), SegmentTargetingConfig(
                    "default-segment",
                    listOf(), 100, mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
                ),
                null, null
            )
            val user: SkylabUser = SkylabUser(amplitudeId = 1)
            val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
                arrayListOf(flagConfig),
                user
            )
            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
                "test-sticky-bucketing" to
                FlagResult(Variant("A"), "fully-rolled-out-variant", false)
            )
            assertEquals(expectedEvaluationResult, evaluationResult)
        }
        run {

            // Test default value
            val flagConfig = FlagConfig(
                "test-sticky-bucketing", "Flag Name", 0, true,
                AMPLITUDE_ID_BUCKETING_KEY, "bucketingSalt", false, "globalHoldbackSalt", 0,
                MutualExclusionConfig(), "defaultValue", arrayListOf(Variant("A"), Variant("B")),
                mapOf(), mapOf(), SegmentTargetingConfig(
                    "default-segment",
                    listOf(), 100, mapOf("A" to 1), AMPLITUDE_ID_BUCKETING_KEY
                ),
                null, null
            )
            val user = SkylabUser(
                amplitudeId = 1,
                userProperties = mapOf("[Experiment] ${flagConfig.flagKey}" to flagConfig.defaultValue)
            )
            val evaluationResult: Map<String, FlagResult> = evaluationEngine.evaluate(
                arrayListOf(flagConfig),
                user
            )
            val expectedEvaluationResult: Map<String, FlagResult> = mapOf(
                "test-sticky-bucketing" to
                FlagResult(Variant("A"), "fully-rolled-out-variant", false)
            )
            assertEquals(expectedEvaluationResult, evaluationResult)
        }
    }

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
}

internal fun MutualExclusionConfig(): MutualExclusionConfig {
    return MutualExclusionConfig("", 0, 10000)
}

internal fun SegmentTargetingConfig(
    segmentName: String, segmentFilters: List<UserPropertyFilter>?, percentage: Int,
    rolloutWeights: Map<String, Int>?, bucketingKey: String
): SegmentTargetingConfig {
    return SegmentTargetingConfig(
        segmentName, segmentFilters ?: listOf(),
        listOf(fromCentilePercentage(percentage, rolloutWeights)), bucketingKey
    )
}

internal fun EmptySegmentTargetingConfig(): SegmentTargetingConfig {
    return SegmentTargetingConfig("", listOf(), listOf(), "")
}