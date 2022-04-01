private fun <V> entriesOf(js: dynamic, transform: (dynamic) -> V): List<Pair<String, V>>? =
    if (js) {
        (js("Object.entries") as (dynamic) -> Array<Array<V>>)
            .invoke(js)
            .map { entry -> entry[0] as String to transform.invoke(entry[1]) }
    } else null

internal fun <V> dynamicMapOf(
    js: dynamic,
    transform: (dynamic) -> V = { it as V }
): Map<String, V>? = entriesOf(js, transform)?.toMap()

internal fun <V> dynamicListOf(
    js: dynamic,
    transform: (dynamic) -> V = { it as V }
): List<V>? = (js as? Array<dynamic>)?.map { transform.invoke(it) }
