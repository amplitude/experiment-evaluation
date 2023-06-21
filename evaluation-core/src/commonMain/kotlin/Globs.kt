package com.amplitude.experiment.evaluation

internal object Globs {

    private const val REGEX_META_CHARS = ".^$+{[]|()"
    private const val GLOB_META_CHARS = "\\*?[{"
    private const val NON_CAPTURING_GROUP_OPEN = "(?:"
    private const val NON_CAPTURING_GROUP_CLOSE = ")"
    private const val REGEX_OR = "|"
    private const val EOL = 0.toChar()

    fun toRegexPattern(globPatterns: Collection<String>): String? {
        try {
            val regex = StringBuilder()
            var i = 0
            for (pattern in globPatterns) {
                regex.append(NON_CAPTURING_GROUP_OPEN)
                regex.append(toRegexPatternInternal(pattern))
                regex.append(NON_CAPTURING_GROUP_CLOSE)
                if (i != globPatterns.size - 1) {
                    regex.append(REGEX_OR)
                }
                i++
            }
            return regex.toString()
        } catch (e: IllegalArgumentException) {
            return null
        }
    }

    private fun toRegexPatternInternal(globPattern: String): StringBuilder {
        var inGroup = false
        val regex = StringBuilder()
        var i = 0
        while (i < globPattern.length) {
            var c = globPattern[i++]
            when (c) {
                '\\' -> {
                    // escape special characters
                    if (i == globPattern.length) {
                        throw IllegalArgumentException("No character to escape at index ${i - 1}. pattern=$globPattern")
                    }
                    val next = globPattern[i++]
                    if (isGlobMeta(next) || isRegexMeta(next)) {
                        regex.append('\\')
                    }
                    regex.append(next)
                }
                '/' -> regex.append(c)
                '[' -> {
                    // don't match name separator in class
                    regex.append("[")
                    if (next(globPattern, i) == '^') {
                        // escape the regex negation char if it appears
                        regex.append("\\^")
                        i++
                    } else {
                        // negation
                        if (next(globPattern, i) == '!') {
                            regex.append('^')
                            i++
                        }
                        // hyphen allowed at start
                        if (next(globPattern, i) == '-') {
                            regex.append('-')
                            i++
                        }
                    }
                    var hasRangeStart = false
                    var last = EOL
                    while (i < globPattern.length) {
                        c = globPattern[i++]
                        if (c == ']') {
                            break
                        }
                        if (c == '/') {
                            throw patternException("Explicit 'name separator' in class", globPattern, i - 1)
                        }
                        // TBD: how to specify ']' in a class?
                        if (c == '\\' || c == '[' || c == '&' && next(globPattern, i) == '&') {
                            // escape '\', '[' or "&&" for regex class
                            regex.append('\\')
                        }
                        regex.append(c)
                        if (c == '-') {
                            if (!hasRangeStart) {
                                throw patternException("Invalid range", globPattern, i - 1)
                            }
                            if (next(globPattern, i++).also { c = it } == EOL || c == ']') {
                                break
                            }
                            if (c < last) {
                                throw patternException("Invalid range", globPattern, i - 3)
                            }
                            regex.append(c)
                            hasRangeStart = false
                        } else {
                            hasRangeStart = true
                            last = c
                        }
                    }
                    if (c != ']') {
                        throw patternException("Missing ']", globPattern, i - 1)
                    }
                    regex.append("]")
                }
                '{' -> {
                    if (inGroup) {
                        throw patternException("Cannot nest groups", globPattern, i - 1)
                    }
                    regex.append("(?:(?:")
                    inGroup = true
                }
                '}' -> if (inGroup) {
                    regex.append("))")
                    inGroup = false
                } else {
                    regex.append('}')
                }
                ',' -> if (inGroup) {
                    regex.append(")|(?:")
                } else {
                    regex.append(',')
                }
                '*' -> if (next(globPattern, i) == '*') {
                    // crosses directory boundaries
                    regex.append(".*")
                    i++
                } else {
                    // within directory boundary
                    regex.append("[^/]*")
                }
                '?' -> regex.append("[^/]")
                else -> {
                    if (isRegexMeta(c)) {
                        regex.append('\\')
                    }
                    regex.append(c)
                }
            }
        }
        if (inGroup) {
            throw patternException("Missing '}", globPattern, i - 1)
        }
        return regex
    }

    private fun isRegexMeta(c: Char): Boolean {
        return REGEX_META_CHARS.indexOf(c) != -1
    }

    private fun isGlobMeta(c: Char): Boolean {
        return GLOB_META_CHARS.indexOf(c) != -1
    }

    private fun next(glob: String, i: Int): Char {
        return if (i < glob.length) {
            glob[i]
        } else EOL
    }

    private fun patternException(description: String, globPattern: String, index: Int): IllegalArgumentException {
        return IllegalArgumentException("$description. index=${index - 1}, pattern=$globPattern")
    }
}
