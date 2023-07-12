package com.amplitude.experiment.evaluation

class CycleException(val cycle: Set<String>) : RuntimeException() {
    override val message: String
        get() = "Detected a cycle between flags $cycle"
}

@Throws(CycleException::class)
fun topologicalSort(
    flagConfigs: List<EvaluationFlag>,
    flagKeys: Set<String> = setOf()
): List<EvaluationFlag> {
    return topologicalSort(flagConfigs.associateBy { it.key }, flagKeys)
}

@Throws(CycleException::class)
fun topologicalSort(
    flagConfigs: Map<String, EvaluationFlag>,
    flagKeys: Set<String> = setOf()
): List<EvaluationFlag> {
    val available = flagConfigs.toMutableMap()
    val result = mutableListOf<EvaluationFlag>()
    val startingKeys = flagKeys.ifEmpty {
        available.keys.toSet()
    }
    for (flagKey in startingKeys) {
        val pathTraversal = parentTraversal(flagKey, available) ?: continue
        result.addAll(pathTraversal)
    }
    return result
}

private fun parentTraversal(
    flagKey: String,
    available: MutableMap<String, EvaluationFlag>,
    path: MutableSet<String> = mutableSetOf(flagKey),
): List<EvaluationFlag>? {
    val flag = available[flagKey] ?: return null
    if (flag.dependencies.isNullOrEmpty()) {
        available.remove(flag.key)
        return listOf(flag)
    }
    path.add(flag.key)
    val result = mutableListOf<EvaluationFlag>()
    for (parentKey in flag.dependencies) {
        if (path.contains(parentKey)) {
            throw CycleException(path)
        }
        val traversals = parentTraversal(parentKey, available, path) ?: continue
        result.addAll(traversals)
    }
    result.add(flag)
    path.remove(flag.key)
    available.remove(flag.key)
    return result
}
