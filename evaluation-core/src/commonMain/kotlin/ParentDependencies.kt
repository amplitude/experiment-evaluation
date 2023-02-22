package com.amplitude.experiment.evaluation

import kotlin.native.concurrent.SharedImmutable

@SharedImmutable
const val PARENT_DEPENDENCY_OPERATOR_ALL = "ALL"

@SharedImmutable
const val PARENT_DEPENDENCY_OPERATOR_ANY = "ANY"

data class ParentDependencies(
    val operator: String,
    val flags: Map<String, Set<String>>
)
