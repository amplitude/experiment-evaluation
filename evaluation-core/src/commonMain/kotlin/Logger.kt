package com.amplitude.experiment.evaluation

internal interface ILogger {
    fun v(msg: String)
    fun d(msg: String)
    fun i(msg: String)
    fun w(msg: String, e: Throwable? = null)
    fun e(msg: String, e: Throwable? = null)
}

// TODO figure out MPP logging
internal object Logger : ILogger {

    private val debug = true
    private val tag = "Evaluation"

    override fun v(msg: String) {
        if (debug) {
            println("VERBOSE [$tag] $msg")
        }
    }

    override fun d(msg: String) {
        if (debug) {
            println("DEBUG [$tag] $msg")
        }
    }

    override fun i(msg: String) {
        if (debug) {
            println("INFO [$tag] $msg")
        }
    }

    override fun w(msg: String, e: Throwable?) {
        if (e == null) {
            println("WARN [$tag] $msg")
        } else {
            println("WARN [$tag] $msg\n${e.printStackTrace()}")
        }
    }

    override fun e(msg: String, e: Throwable?) {
        if (e == null) {
            println("ERROR [$tag] $msg")
        } else {
            println("ERROR [$tag] $msg\n$e")
        }
    }
}