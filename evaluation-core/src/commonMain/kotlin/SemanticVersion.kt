package com.amplitude.experiment.evaluation

/**
 * Copied from: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
 *
 * Modified to:
 *   - Support versions starting with 0 (e.g. 01.01.01)
 *   - Support versions with only major and minor versions (e.g. 1.1)
 */
private const val VERSION_PATTERN = "^(0|[0-9]\\d*)\\.(0|[0-9]\\d*)(\\.(0|[0-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?)?$"
private val pattern = Regex(VERSION_PATTERN)

/**
 * Implementation of Semantic version specification as per the spec in
 * https://semver.org/#semantic-versioning-specification-semver
 *
 * Some important things to call out:
 *
 * - Major, minor, patch should not contain leading 0s and should increment numerically.
 * If leading 0s are specified, the information will be lost as we cast it to integer.
 * - Prerelease tags are optional and if provided they are considered as strings for comparison.
 * - Version with Prerelease tags < Same version without prerelease tags
 */
internal data class SemanticVersion(
    val major: Int = 0,
    val minor: Int = 0,
    val patch: Int = 0,
    val preRelease: String? = null
) : Comparable<SemanticVersion> {

    companion object {

        fun parse(version: String?): SemanticVersion? {
            if (version == null) {
                return null
            }
            val matchGroup = pattern.matchEntire(version)?.groupValues ?: return null
            val major = matchGroup[1].toIntOrNull() ?: return null
            val minor = matchGroup[2].toIntOrNull() ?: return null
            val patch = matchGroup[4].toIntOrNull() ?: 0
            val preRelease = matchGroup[5].takeIf { it.isNotEmpty() }
            return SemanticVersion(major, minor, patch, preRelease)
        }
    }

    override fun compareTo(other: SemanticVersion): Int {
        return when {
            major > other.major -> 1
            major < other.major -> -1
            minor > other.minor -> 1
            minor < other.minor -> -1
            patch > other.patch -> 1
            patch < other.patch -> -1
            preRelease != null && other.preRelease == null -> -1
            preRelease == null && other.preRelease != null -> 1
            preRelease != null && other.preRelease != null ->
                preRelease.compareTo(other.preRelease)

            else -> 0
        }
    }
}
