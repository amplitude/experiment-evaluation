package com.amplitude.experiment.evaluation

data class ParentDependencies(
    val operator: DependencyOperator,
    val flags: Map<String, Set<String>>
)
