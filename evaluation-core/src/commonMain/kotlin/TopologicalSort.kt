package com.amplitude.experiment.evaluation

class CycleException(private val cycle: Set<String>) : RuntimeException() {
    override val message: String
        get() = "Detected a cycle between flags $cycle"
}

@Throws(CycleException::class)
fun topologicalSort(flagConfigs: List<FlagConfig>): List<FlagConfig> {
    // Only sort if flags are not already sorted.

    val flags = flagConfigs.associateBy { it.flagKey }.toMutableMap()
    val result = mutableListOf<FlagConfig>()
    for (flag in flagConfigs) {
        val pathTraversal = parentTraversal(flag, flags)
        for (traversalFlag in pathTraversal) {
            flags.remove(traversalFlag.flagKey)
            result.add(traversalFlag)
        }
    }
    return result
}

fun parentTraversal(
    flag: FlagConfig,
    flags: Map<String, FlagConfig>,
    path: MutableSet<String> = mutableSetOf(flag.flagKey)
): List<FlagConfig> {
    val parentKeys = flag.parentDependencies?.keys ?: setOf()
    if (flags[flag.flagKey] == null) {
        return listOf()
    }
    val result = mutableListOf<FlagConfig>()
    for (parentKey in parentKeys) {
        if (path.contains(parentKey)) throw CycleException(path)
        val parent = flags[parentKey] ?: continue
        path.add(parentKey)
        val pathTraversal = parentTraversal(parent, flags, path)
        result.addAll(pathTraversal)
    }
    result.add(flag)
    return result
}
