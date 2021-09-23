package com.amplitude.experiment.evaluation

// sealed class EvaluationMode(value: String) {
//    object Local : EvaluationMode("local")
//    object Remote : EvaluationMode("remote")
// }

enum class EvaluationMode(val value: String) {
    LOCAL("local"),
    REMOTE("remote"),
}
