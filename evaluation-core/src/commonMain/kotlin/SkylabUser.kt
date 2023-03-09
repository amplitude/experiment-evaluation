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
        const val LIBRARY = "library"
        const val USER_PROPERTIES = "user_properties"
        const val COHORT_IDS = "cohort_ids"
    }
}

internal fun SkylabUser.getPropertyValue(key: String): String? {
    if (key.isCustomUserProperty()) {
        val sanitizedKey = key.sanitizeCustomUserPropKey()
        return if (userProperties == null || !userProperties.containsKey(sanitizedKey)) {
            null
        } else {
            // NOTE(bgiori): The actual class of any is JsonLiteral, which will add quotes to String values.
            userProperties[sanitizedKey]?.toString()?.removeSurrounding("\"")
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
        SkylabUser.DEVICE_BRAND -> deviceBrand
        SkylabUser.DEVICE_MANUFACTURER -> deviceManufacturer
        SkylabUser.DEVICE_MODEL -> deviceModel
        SkylabUser.CARRIER -> carrier
        SkylabUser.LIBRARY -> library
        else -> {
            Logger.d("Property key $key not found on SkylabUser")
            null
        }
    }
}

private fun String.isCustomUserProperty(): Boolean {
    return startsWith("gp:")
}

private fun String.sanitizeCustomUserPropKey(): String? {
    return substring(3)
}
