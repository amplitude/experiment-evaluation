package com.amplitude.experiment.evaluation

class EvaluationContext(context: Map<String, Any?> = mapOf()) : Selectable {

    private val data = context.toMutableMap()

    override fun select(selector: String): Any? = data[selector]

    override fun toString(): String {
        return data.toString()
    }

    override fun equals(other: Any?): Boolean {
        return data == other
    }

    override fun hashCode(): Int {
        return data.hashCode()
    }
}
