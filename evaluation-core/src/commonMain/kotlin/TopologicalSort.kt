package com.amplitude.experiment.evaluation

class CycleException(val cycle: Set<String>) : RuntimeException() {
    override val message: String
        get() = "Detected a cycle between flags $cycle"
}

@Throws(CycleException::class)
fun topologicalSort(flagConfigs: List<FlagConfig>, flagKeys: Set<String> = setOf()): List<FlagConfig> {
    val available = LinkedHashMap(flagConfigs.associateBy { it.flagKey }.toMutableMap())
    val result = mutableListOf<FlagConfig>()
    val starting = if (flagKeys.isEmpty()) {
        available.values.toSet()
    } else {
        flagKeys.mapNotNull { available[it] }
    }
    for (flag in starting) {
        if (!flag.deployed) {
            continue
        }
        val pathTraversal = parentTraversal(flag, available) ?: continue
        result.addAll(pathTraversal)
    }
    return result
}

fun parentTraversal(
    flag: FlagConfig,
    available: MutableMap<String, FlagConfig>,
    path: MutableSet<String> = mutableSetOf(flag.flagKey),
): List<FlagConfig>? {
    if (available[flag.flagKey] == null) {
        return null
    }
    if (flag.parentDependencies == null || flag.parentDependencies.flags.isEmpty()) {
        available.remove(flag.flagKey)
        return listOf(flag)
    }
    path.add(flag.flagKey)
    val result = mutableListOf<FlagConfig>()
    val parentKeys = flag.parentDependencies.flags.keys
    for (parentKey in parentKeys) {
        if (path.contains(parentKey)) {
            throw CycleException(path)
        }
        val parent = available[parentKey] ?: continue
        val traversals = parentTraversal(parent, available, path)
        if (traversals != null) {
            result.addAll(traversals)
        }
    }
    path.remove(flag.flagKey)
    available.remove(flag.flagKey)
    result.add(flag)
    return result
}
