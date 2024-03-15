# Evaluation Model

* Version: `2.0.0`
* Created: 2024-02-02
* Last Modified: -
* Author: Brian Giori (@bgiori)

This document defines the evaluation model. 

The model is defined in **Kotlin** syntax, and each data class is serialized as
JSON using `camelCase` as defined by the class variables.

## Flag

A flag defines targeting, bucketing, and variants for a feature.

```kotlin
data class EvaluationFlag(
    // The flag key. Must be unique within a project.
    val key: String,

    // The flag's variants. The result of a flag evaluation is zero or one
    // variant.
    val variants: Map<String, EvaluationVariant>,

    // The targeting segments. targets and buckets users into a variant.
    val segments: List<EvaluationSegment>,

    // The flag's dependencies, used to order the flags prior to evaluation. 
    val dependencies: Set<String>? = null,

    // An object of metadata for this flag. Contains information useful
    // outside evaluation. The bucketing segment's metadata is merged with
    // the flag metadata and returned within the evaluation result.
    val metadata: Map<String, Any?>? = null
)
```

## Variant

A variant is the result of a flag's evaluation.

```kotlin
data class EvaluationVariant(
    // The key must be unique for a flag's variant. I.e. no two variants on one 
    // flag can have the same key.
    val key: String,
    // The variant value is used primarily in the application build feature 
    // logic.
    val value: Any? = null,
    // The payload may contain additional data for use in the application.
    val payload: Any? = null,
    // Metadata is aggregated from the flag, segment and variant upon assignment
    // and may be used for tracking and debugging purposes, among others.
    val metadata: Map<String, Any?>? = null,
)
```

## Segment

A segment targets and buckets users into a variant. 

The `conditions` define if the user should be bucketed. If the user should be bucketed, the `bucket` determines which variant the user is assigned. If the conditions or bucket is `null` or the bucket does not assign a variant, then the default `variant` is assigned. If the user is not bucketed, and the `variant` is `null` then the user falls through to the next segment.

```kotlin
data class EvaluationSegment(
    // How to bucket the user given a matching condition. If the bucket is null,
    // assign the default variant.
    val bucket: EvaluationBucket? = null,

    // The targeting conditions. On match, bucket the user. The outer list
    // is operated with "OR" and the inner list is operated with "AND". If the
    // conditions are null, assign the default variant.
    val conditions: List<List<EvaluationCondition>>? = null,

    // The default variant if the conditions match but either no bucket is set,
    // or the bucket does not produce a variant.
    val variant: String? = null,

    // An object of metadata for this segment. For example, contains the
    // segment name and may contain the experiment key associated with this
    // segment. The bucketing segment's metadata is passed back in the
    // evaluation result after being merged with the along with the vairant and
    // flag metadata.
    val metadata: Map<String, Any?>? = null
)
```

## Condition

A condition represents a function which returns a boolean value.

The `selector` is used to select a value from the target which is compared to the `values`. The specific behavior of the function depends on the `op`.

```kotlin
data class EvaluationCondition(
    // How to select the property from the evaluation state. Each entry in the 
    // selector will access a key from the target. The resulting value is used 
    // in the operator function.
    val selector: List<String>,

    // The operator. Defines the function to use with the selection and values.
    val op: String,

    // The values to compare to.
    val values: Set<String>
)
```

## Bucket

The bucket defines which variant, if any, the user should be assigned.

The `allocations` determine which variant, if any, the user is assigned to. If assigned, the `selector` is used to access the value from the target. The selected value from the target is appended to the `salt` before being hashed.

```kotlin
data class EvaluationBucket(
    // How to select the property value from the target.
    val selector: List<String>,

    // A random string used to salt the bucketing value prior to hashing.
    val salt: String,

    // Determines which variant, if any, should be returned based on the
    // result of the hash functions applied on these allocations.
    val allocations: List<EvaluationAllocation>,
)
```

## Allocation

An allocation defines a `max`, `range`, and the `distribution` of variants within that range. 

```kotlin
data class EvaluationAllocation(
    // The max for the allocation range. This number is used to modulo the hash
    // to compare with the range.
    val max: Int = 100,

    // The distribution range [0, max). That is the possibles values are [0, max-1].
    // E.g. with max 100, [0, 49] is 50% allocation
    val range: List<Int>,

    // The distribution of variants if allocated.
    val distributions: List<EvaluationDistribution>,
)
```

## Distribution

A distribution defines a `range`, and the `variant` to assign if the range matches.

```kotlin
data class EvaluationDistribution(
    // The key of the variant to deliver if this range matches.
    val variant: String,

    // The distribution range [start, end), where the max value is 42949672.
    // E.g. [0, 42949673] = [0%, 100%]
    val range: List<Int>,
)
```

## Operator

An operation is represented as a `String` in a condition.

```kotlin
object EvaluationOperator {
    const val IS = "is"
    const val IS_NOT = "is not"
    const val CONTAINS = "contains"
    const val DOES_NOT_CONTAIN = "does not contain"
    const val LESS_THAN = "less"
    const val LESS_THAN_EQUALS = "less or equal"
    const val GREATER_THAN = "greater"
    const val GREATER_THAN_EQUALS = "greater or equal"
    const val VERSION_LESS_THAN = "version less"
    const val VERSION_LESS_THAN_EQUALS = "version less or equal"
    const val VERSION_GREATER_THAN = "version greater"
    const val VERSION_GREATER_THAN_EQUALS = "version greater or equal"
    const val SET_IS = "set is"
    const val SET_IS_NOT = "set is not"
    const val SET_CONTAINS = "set contains"
    const val SET_DOES_NOT_CONTAIN = "set does not contain"
    const val SET_CONTAINS_ANY = "set contains any"
    const val SET_DOES_NOT_CONTAIN_ANY = "set does not contain any"
    const val REGEX_MATCH = "regex match"
    const val REGEX_DOES_NOT_MATCH = "regex does not match"
}
```
