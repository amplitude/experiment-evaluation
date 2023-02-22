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
import kotlinx.serialization.json.JsonPrimitive

@Serializable
data class SerialAllocation(
    val percentage: Int,
    val weights: Map<String, Int>?
) {
    fun convert() = Allocation(
        percentage = percentage,
        weights = weights,
    )
}

@Serializable
data class SerialFlagConfig(
    val flagKey: String,
    val flagVersion: Int = 0,
    val enabled: Boolean,
    val bucketingSalt: String,
    val defaultValue: String?,
    val variants: List<SerialVariant>,
    val variantsInclusions: Map<String, Set<String>>?,
    val allUsersTargetingConfig: SerialSegmentTargetingConfig,
    val customSegmentTargetingConfigs: List<SerialSegmentTargetingConfig>?,
    val parentDependencies: SerialParentDependencies? = null,
    val type: String = FLAG_TYPE_RELEASE,
    val deployed: Boolean = true,
) {
    fun convert() = FlagConfig(
        flagKey = this.flagKey,
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
) {
    constructor(
        result: FlagResult
    ) : this(
        variant = SerialVariant(result.variant),
        description = result.description,
        isDefaultVariant = result.isDefaultVariant,
    )
}

@Serializable
data class SerialSegmentTargetingConfig(
    val name: String,
    val conditions: List<SerialUserPropertyFilter>,
    val allocations: List<SerialAllocation>,
    val bucketingKey: String,
) {
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

    fun convert() = when (this) {
        IS -> Operator.IS
        IS_NOT -> Operator.IS_NOT
        CONTAINS -> Operator.CONTAINS
        DOES_NOT_CONTAIN -> Operator.DOES_NOT_CONTAIN
        LESS_THAN -> Operator.LESS_THAN
        LESS_THAN_EQUALS -> Operator.LESS_THAN_EQUALS
        GREATER_THAN -> Operator.GREATER_THAN
        GREATER_THAN_EQUALS -> Operator.GREATER_THAN_EQUALS
        SET_IS -> Operator.SET_IS
        SET_IS_NOT -> Operator.SET_IS_NOT
        CSS_MATCH -> Operator.CSS_MATCH
        GLOB_MATCH -> Operator.GLOB_MATCH
        SET_CONTAINS -> Operator.SET_CONTAINS
        SET_DOES_NOT_CONTAIN -> Operator.SET_DOES_NOT_CONTAIN
        GLOB_DOES_NOT_MATCH -> Operator.GLOB_DOES_NOT_MATCH
        VERSION_LESS_THAN -> Operator.VERSION_LESS_THAN
        VERSION_LESS_THAN_EQUALS -> Operator.VERSION_LESS_THAN_EQUALS
        VERSION_GREATER_THAN -> Operator.VERSION_GREATER_THAN
        VERSION_GREATER_THAN_EQUALS -> Operator.VERSION_GREATER_THAN_EQUALS
        HAS_PREFIX -> Operator.HAS_PREFIX
        ENDS_WITH ->  Operator.ENDS_WITH
    }
}

@Serializable
data class SerialUserPropertyFilter(
    val prop: String,
    val op: SerialOperator,
    val values: Set<String>,
) {
    fun convert() = UserPropertyFilter(
        prop = this.prop,
        op = this.op.convert(),
        values = this.values,
    )
}

@Serializable
data class SerialParentDependencies(
    val operator: String,
    val flags: Map<String, Set<String>>
) {
    fun convert() = ParentDependencies(
        operator = operator,
        flags = flags,
    )
}

@Serializable
data class SerialVariant(
    val key: String? = null,
    val payload: JsonElement? = null,
) {
    constructor(
        variant: Variant
    ) : this(
        key = variant.key,
        payload = variant.payload as JsonElement?
    )

    fun convert() = Variant(
        key = key,
        payload = payload
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
    fun convert() = SkylabUser(
        userId = userId,
        deviceId = deviceId,
        amplitudeId = amplitudeId,
        country = country,
        region = region,
        dma = dma,
        city = city,
        language = language,
        platform = platform,
        version = version,
        os = os,
        deviceManufacturer = deviceManufacturer,
        deviceBrand = deviceBrand,
        deviceModel = deviceModel,
        deviceFamily = deviceFamily,
        deviceType = deviceType,
        carrier = carrier,
        library = library,
        cohortIds = cohortIds,
        userProperties = userProperties
    )
}
