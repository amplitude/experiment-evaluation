package com.amplitude.experiment.evaluation

data class SkylabUser(
    val userId: String? = null,
    val deviceId: String? = null,
    val amplitudeId: Long? = 0L,
    val country: String? = null,
    val region: String? = null,
    val dma: String? = null,
    val city: String? = null,
    val language: String? = null,
    val platform: String? = null,
    val version: String? = null,
    val startVersion: String? = null,
    val os: String? = null,
    val deviceManufacturer: String? = null,
    val deviceBrand: String? = null,
    val deviceModel: String? = null,
    val deviceFamily: String? = null,
    val deviceType: String? = null,
    val carrier: String? = null,
    val library: String? = null,
    val cohortIds: Set<String>? = null,
    val userProperties: Map<String, Any?>? = null,
) {
    companion object Keys {
        const val ID = "id"
        const val USER_ID = "user_id"
        const val DEVICE_ID = "device_id"
        const val AMPLITUDE_ID = "amplitude_id"
        const val DEVICE_FAMILY = "device_family"
        const val DEVICE_TYPE = "device_type"
        const val DEVICE_MANUFACTURER = "device_manufacturer"
        const val DEVICE_BRAND = "device_brand"
        const val DEVICE_MODEL = "device_model"
        const val COUNTRY = "country"
        const val REGION = "region"
        const val DMA = "dma"
        const val CITY = "city"
        const val LANGUAGE = "language"
        const val PLATFORM = "platform"
        const val VERSION = "version"
        const val START_VERSION = "start_version"
        const val OS = "os"
        const val CARRIER = "carrier"
        const val USER_PROPERTIES = "user_properties"
        const val COHORT_IDS = "cohort_ids"
        const val LIBRARY = "library"
    }
}

internal fun SkylabUser.getProperty(key: String): String? {
    if (key.isCustomUserProperty()) {
        val sanitizedKey = key.sanitizeCustomUserPropKey()
        return if (userProperties == null || !userProperties.containsKey(sanitizedKey)) {
            null
        } else {
            userProperties[sanitizedKey]?.toString()
        }
    }

    return when (key) {
        SkylabUser.AMPLITUDE_ID -> amplitudeId.toString()
        SkylabUser.USER_ID -> userId
        SkylabUser.DEVICE_ID -> deviceId
        SkylabUser.COUNTRY -> country
        SkylabUser.REGION -> region
        SkylabUser.DMA -> dma
        SkylabUser.CITY -> city
        SkylabUser.LANGUAGE -> language
        SkylabUser.PLATFORM -> platform
        SkylabUser.VERSION -> version
        SkylabUser.START_VERSION -> startVersion
        SkylabUser.OS -> os
        SkylabUser.DEVICE_FAMILY -> deviceFamily
        SkylabUser.DEVICE_TYPE -> deviceType
        SkylabUser.CARRIER -> carrier
        else -> {
            Logger.d("Property key $key not found on SkylabUser")
            null
        }
    }
}

internal fun SkylabUser.getBucketingValue(bucketingKey: String): String? {
    return when (bucketingKey) {
        // We are deprecating the id field, so use the deviceId.
        SkylabUser.ID -> deviceId
        // amplitudeId is 0 when there was no match for an existing ID and we couldn't create a new amplitude ID
        SkylabUser.AMPLITUDE_ID ->
            // shouldn't happen and log error message
            if (amplitudeId == 0L) {
                Logger.w("AmpId is 0 for amplitudeId bucketing; Skylab User is $this")
                null
            } else {
                val amplitudeId = amplitudeId.toString()
                Logger.d("AmplitudeID bucketing key is $amplitudeId")
                amplitudeId
            }
        // user.getProperty expects bucketingKey to start with "gp:"
        else -> getProperty(bucketingKey)
    }
}

private fun String.isCustomUserProperty(): Boolean {
    return startsWith("gp:")
}

private fun String.sanitizeCustomUserPropKey(): String? {
    return substring(3)
}