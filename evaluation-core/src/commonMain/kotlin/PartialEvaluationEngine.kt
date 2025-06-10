package com.amplitude.experiment.evaluation

class PartialEvaluationEngine(log: Logger? = null) : EvaluationEngineImpl(log) {

    fun partialEvaluate(
        context: EvaluationContext,
        flags: List<EvaluationFlag>
    ): List<EvaluationFlag> {
        val target = EvaluationTarget(context, mutableMapOf())
        val partiallyEvaluatedFlags = mutableListOf<EvaluationFlag>()

        for (flag in flags) {
            val partiallyEvaluatedSegments = flag.segments.map { segment ->
                partialEvaluateSegment(segment, target)
            }
            val partiallyEvaluatedFlag = EvaluationFlag(
                flag.key,
                flag.variants,
                partiallyEvaluatedSegments,
                flag.dependencies,
                flag.metadata
            )
            partiallyEvaluatedFlags.add(partiallyEvaluatedFlag)
        }
        return partiallyEvaluatedFlags
    }

    internal fun partialEvaluateSegment(
        segment: EvaluationSegment,
        target: EvaluationTarget
    ): EvaluationSegment {
        var bucket = segment.bucket
        val metadata = segment.metadata
        val evaluationConditions = segment.conditions
        var variant = segment.variant

        /*
         * Bucketing is successful when:
         * 1. bucket is not null
         * 2. bucket selector is not empty
         * 3. remote property exists
         * If bucketing is successful, simplify the bucket - make bucket null and set default variant to bucketed
         * variant else keep the bucket AS IS, this way, on local eval, when conditions match, the correct bucketed variant
         * will be returned
         */

        if (bucket != null && bucket.selector.isNotEmpty() && target.select(bucket.selector) != null) {
            bucket = null
            variant = bucket(target, segment)
        }

        if (evaluationConditions == null) {
            return EvaluationSegment(bucket, null, variant, metadata)
        }

        val orConditions = mutableListOf<List<EvaluationCondition>>()
        // if the targeted property exists AND matches the user context, remove it
        for (conditions in evaluationConditions) {
            var andConditions = mutableListOf<EvaluationCondition>()
            for (condition in conditions) {
                // if the targeted property exists
                if (target.select(condition.selector) != null) {
                    // if the property does not match the user context, replace the whole AND-condition with an
                    // ALWAYS-FALSE, else leave it out (this is the same as ALWAYS-TRUE)
                    if (!matchCondition(target, condition)) {
                        andConditions = mutableListOf(
                            EvaluationCondition(
                                listOf(),
                                EvaluationOperator.IS_NOT,
                                setOf("(none)")
                            )
                        )
                        break
                    }
                } else {
                    // else keep the condition for local evaluation
                    andConditions.add(condition)
                }
            }
            // if no and-conditions remain, this means all conditions matched
            if (andConditions.isEmpty()) {
                // set up an EvaluationCondition that always matches
                andConditions.add(
                    EvaluationCondition(
                        listOf(),
                        EvaluationOperator.IS,
                        setOf("(none)")
                    )
                )
            }
            orConditions.add(andConditions)
        }
        return EvaluationSegment(bucket, orConditions, variant, metadata)
    }
}
