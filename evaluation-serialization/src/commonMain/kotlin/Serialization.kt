package com.amplitude.experiment.evaluation.serialization

import com.amplitude.experiment.evaluation.Allocation
import com.amplitude.experiment.evaluation.FLAG_TYPE_RELEASE
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.FlagResult
import com.amplitude.experiment.evaluation.Operator
import com.amplitude.experiment.evaluation.ParentDependencies
import com.amplitude.experiment.evaluation.SegmentTargetingConfig
import com.amplitude.experiment.evaluation.SkylabUser
import com.amplitude.experiment.evaluation.UserPropertyFilter
import com.amplitude.experiment.evaluation.Variant
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive

@Serializable
data class SerialAllocation(
    val percentage: Int,
    val weights: Map<String, Int>?
) {

    constructor(convert: Allocation) : this(
        percentage = convert.percentage,
        weights = convert.weights,
    )

    fun convert() = Allocation(
        percentage = percentage,
        weights = weights,
    )
}

@Serializable
data class SerialFlagConfig(
    val flagKey: String,
    val experimentKey: String? = null,
    val flagVersion: Int = 0,
    val enabled: Boolean,
    val bucketingSalt: String,
    val defaultValue: String? = null,
    val variants: List<SerialVariant>,
    val variantsInclusions: Map<String, Set<String>>?,
    val allUsersTargetingConfig: SerialSegmentTargetingConfig,
    val customSegmentTargetingConfigs: List<SerialSegmentTargetingConfig>? = null,
    val parentDependencies: SerialParentDependencies? = null,
    val type: String = FLAG_TYPE_RELEASE,
    val deployed: Boolean = true,
) {

    constructor(convert: FlagConfig) : this(
        flagKey = convert.flagKey,
        experimentKey = convert.experimentKey,
        flagVersion = convert.flagVersion,
        enabled = convert.enabled,
        bucketingSalt = convert.bucketingSalt,
        defaultValue = convert.defaultValue,
        variants = convert.variants.map { SerialVariant(it) },
        variantsInclusions = convert.variantsInclusions,
        allUsersTargetingConfig = SerialSegmentTargetingConfig(convert.allUsersTargetingConfig),
        customSegmentTargetingConfigs = convert.customSegmentTargetingConfigs?.map { SerialSegmentTargetingConfig(it) },
        parentDependencies = convert.parentDependencies?.let { SerialParentDependencies(it) },
        type = convert.type,
        deployed = convert.deployed,
    )

    fun convert() = FlagConfig(
        flagKey = this.flagKey,
        experimentKey = this.experimentKey,
        flagVersion = this.flagVersion,
        enabled = this.enabled,
        bucketingSalt = this.bucketingSalt,
        defaultValue = this.defaultValue,
        variants = this.variants.map { it.convert() },
        variantsInclusions = this.variantsInclusions,
        allUsersTargetingConfig = this.allUsersTargetingConfig.convert(),
        customSegmentTargetingConfigs = this.customSegmentTargetingConfigs?.map { it.convert() },
        parentDependencies = this.parentDependencies?.convert(),
        type = this.type,
        deployed = this.deployed,
    )
}

@Serializable
data class SerialFlagResult(
    val variant: SerialVariant,
    val description: String,
    val isDefaultVariant: Boolean,
    val expKey: String? = null,
    val deployed: Boolean,
    val type: String? = null,
) {
    constructor(
        convert: FlagResult
    ) : this(
        variant = SerialVariant(convert.variant),
        description = convert.description,
        isDefaultVariant = convert.isDefaultVariant,
        expKey = convert.expKey,
        deployed = convert.deployed,
        type = convert.type
    )

    fun convert() = FlagResult(
        variant = this.variant.convert(),
        description = this.description,
        isDefaultVariant = this.isDefaultVariant,
        expKey = this.expKey,
        deployed = this.deployed,
        type = this.type,
    )
}

@Serializable
data class SerialSegmentTargetingConfig(
    val name: String,
    val conditions: List<SerialUserPropertyFilter>,
    val allocations: List<SerialAllocation>,
    val bucketingKey: String,
) {

    constructor(convert: SegmentTargetingConfig) : this(
        name = convert.name,
        conditions = convert.conditions.map { SerialUserPropertyFilter(it) },
        allocations = convert.allocations.map { SerialAllocation(it) },
        bucketingKey = convert.bucketingKey,
    )
    fun convert() = SegmentTargetingConfig(
        name = this.name,
        conditions = this.conditions.map { it.convert() },
        allocations = this.allocations.map { it.convert() },
        bucketingKey = this.bucketingKey,
    )
}

@Serializable
enum class SerialOperator(private val value: Int) {
    IS(1),
    IS_NOT(2),
    CONTAINS(3),
    DOES_NOT_CONTAIN(4),
    LESS_THAN(5),
    LESS_THAN_EQUALS(6),
    GREATER_THAN(7),
    GREATER_THAN_EQUALS(8),
    SET_IS(9),
    SET_IS_NOT(10),
    CSS_MATCH(11),
    GLOB_MATCH(12),
    SET_CONTAINS(13),
    SET_DOES_NOT_CONTAIN(14),
    GLOB_DOES_NOT_MATCH(15),
    VERSION_LESS_THAN(16),
    VERSION_LESS_THAN_EQUALS(17),
    VERSION_GREATER_THAN(18),
    VERSION_GREATER_THAN_EQUALS(19),
    HAS_PREFIX(20),
    ENDS_WITH(21);
}

@Serializable
data class SerialUserPropertyFilter(
    val prop: String,
    val op: SerialOperator,
    val values: Set<String>,
) {

    constructor(convert: UserPropertyFilter) : this(
        prop = convert.prop,
        op = SerialOperator.valueOf(convert.op.toString()),
        values = convert.values,
    )

    fun convert() = UserPropertyFilter(
        prop = this.prop,
        op = Operator.valueOf(this.op.toString()),
        values = this.values,
    )
}

@Serializable
data class SerialParentDependencies(
    val operator: String,
    val flags: Map<String, Set<String>>
) {

    constructor(convert: ParentDependencies) : this (
        operator = convert.operator,
        flags = convert.flags,
    )

    fun convert() = ParentDependencies(
        operator = this.operator,
        flags = this.flags,
    )
}

@Serializable
data class SerialVariant(
    val key: String? = null,
    val payload: JsonElement? = null,
) {
    constructor(convert: Variant) : this(
        key = convert.key,
        payload = convert.payload as JsonElement?
    )

    fun convert() = Variant(
        key = this.key,
        payload = this.payload
    )
}

@Serializable
data class SerialExperimentUser(
    @SerialName(SkylabUser.USER_ID) val userId: String? = null,
    @SerialName(SkylabUser.DEVICE_ID) val deviceId: String? = null,
    @SerialName(SkylabUser.AMPLITUDE_ID) val amplitudeId: Long? = 0L,
    @SerialName(SkylabUser.COUNTRY) val country: String? = null,
    @SerialName(SkylabUser.REGION) val region: String? = null,
    @SerialName(SkylabUser.DMA) val dma: String? = null,
    @SerialName(SkylabUser.CITY) val city: String? = null,
    @SerialName(SkylabUser.LANGUAGE) val language: String? = null,
    @SerialName(SkylabUser.PLATFORM) val platform: String? = null,
    @SerialName(SkylabUser.VERSION) val version: String? = null,
    @SerialName(SkylabUser.OS) val os: String? = null,
    @SerialName(SkylabUser.DEVICE_MANUFACTURER) val deviceManufacturer: String? = null,
    @SerialName(SkylabUser.DEVICE_BRAND) val deviceBrand: String? = null,
    @SerialName(SkylabUser.DEVICE_MODEL) val deviceModel: String? = null,
    @SerialName(SkylabUser.DEVICE_FAMILY) val deviceFamily: String? = null,
    @SerialName(SkylabUser.DEVICE_TYPE) val deviceType: String? = null,
    @SerialName(SkylabUser.CARRIER) val carrier: String? = null,
    @SerialName(SkylabUser.LIBRARY) val library: String? = null,
    @SerialName(SkylabUser.COHORT_IDS) val cohortIds: Set<String>? = null,
    @SerialName(SkylabUser.USER_PROPERTIES) val userProperties: Map<String, JsonPrimitive>? = null,
) {

    constructor(convert: SkylabUser) : this(
        userId = convert.userId,
        deviceId = convert.deviceId,
        amplitudeId = convert.amplitudeId,
        country = convert.country,
        region = convert.region,
        dma = convert.dma,
        city = convert.city,
        language = convert.language,
        platform = convert.platform,
        version = convert.version,
        os = convert.os,
        deviceManufacturer = convert.deviceManufacturer,
        deviceBrand = convert.deviceBrand,
        deviceModel = convert.deviceModel,
        deviceFamily = convert.deviceFamily,
        deviceType = convert.deviceType,
        carrier = convert.carrier,
        library = convert.library,
        cohortIds = convert.cohortIds,
        userProperties = convert.userProperties?.mapValues {
            when (val value = it.value) {
                is String -> JsonPrimitive(value)
                is Number -> JsonPrimitive(value)
                is Boolean -> JsonPrimitive(value)
                else -> JsonNull
            }
        },
    )

    fun convert() = SkylabUser(
        userId = this.userId,
        deviceId = this.deviceId,
        amplitudeId = this.amplitudeId,
        country = this.country,
        region = this.region,
        dma = this.dma,
        city = this.city,
        language = this.language,
        platform = this.platform,
        version = this.version,
        os = this.os,
        deviceManufacturer = this.deviceManufacturer,
        deviceBrand = this.deviceBrand,
        deviceModel = this.deviceModel,
        deviceFamily = this.deviceFamily,
        deviceType = this.deviceType,
        carrier = this.carrier,
        library = this.library,
        cohortIds = this.cohortIds,
        userProperties = this.userProperties
    )
}
