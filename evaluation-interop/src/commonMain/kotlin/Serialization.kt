import com.amplitude.experiment.evaluation.SkylabUser
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonObject
import kotlin.native.concurrent.SharedImmutable

@Serializable
internal data class Allocation(
    val percentage: Int,
    val weights: Map<String, Int>?
) {
    fun convert() = com.amplitude.experiment.evaluation.Allocation(
        percentage = percentage,
        weights = weights,
    )
}

@Serializable
internal enum class EvaluationMode(val value: String) {
    LOCAL("local"),
    REMOTE("remote");

    fun convert() = when (this) {
        LOCAL -> com.amplitude.experiment.evaluation.EvaluationMode.LOCAL
        REMOTE -> com.amplitude.experiment.evaluation.EvaluationMode.REMOTE
    }
}

@SharedImmutable
internal const val DEFAULT_BUCKETING_KEY = "amplitude_id"

@Serializable
internal data class FlagConfig(
    val flagKey: String,
    val flagName: String,
    val flagVersion: Int = 0,
    val enabled: Boolean = false,
    val bucketingKey: String = DEFAULT_BUCKETING_KEY,
    val bucketingSalt: String? = null,
    val useStickyBucketing: Boolean = false,
    val globalHoldbackSalt: String? = null,
    val globalHoldbackPct: Int = 0,
    val mutualExclusionConfig: MutualExclusionConfig? = null,
    val defaultValue: String? = null,
    val variants: List<Variant>,
    val variantsExclusions: Map<String, Set<String>>?,
    val variantsInclusions: Map<String, Set<String>>?,
    val allUsersTargetingConfig: SegmentTargetingConfig, // TODO java code allows this to be null, only null in tests
    val customSegmentTargetingConfigs: List<SegmentTargetingConfig>?,
    val userProperty: String?,
    val evalMode: EvaluationMode = EvaluationMode.REMOTE,
) {
    // TODO can this just be a constant?
    val globalHoldbackBucketingKey = DEFAULT_BUCKETING_KEY

    fun convert() = com.amplitude.experiment.evaluation.FlagConfig(
        flagKey = this.flagKey,
        flagName = this.flagName,
        flagVersion = this.flagVersion,
        enabled = this.enabled,
        bucketingKey = this.bucketingKey,
        bucketingSalt = this.bucketingSalt,
        useStickyBucketing = this.useStickyBucketing,
        globalHoldbackSalt = this.globalHoldbackSalt,
        globalHoldbackPct = this.globalHoldbackPct,
        mutualExclusionConfig = this.mutualExclusionConfig?.convert(),
        defaultValue = this.defaultValue,
        variants = this.variants.map { it.convert() },
        variantsExclusions = this.variantsExclusions,
        variantsInclusions = this.variantsInclusions,
        allUsersTargetingConfig = this.allUsersTargetingConfig.convert(),
        customSegmentTargetingConfigs = this.customSegmentTargetingConfigs?.map { it.convert() },
        userProperty = this.userProperty,
        evalMode = this.evalMode.convert(),
    )
}

@Serializable
internal data class FlagResult(
    val variant: Variant,
    val description: String,
    val isDefaultVariant: Boolean,
) {
    constructor(
        result: com.amplitude.experiment.evaluation.FlagResult
    ) : this(
        variant = Variant(result.variant),
        description = result.description,
        isDefaultVariant = result.isDefaultVariant,
    )
}

@Serializable
internal data class MutualExclusionConfig(
    val groupSalt: String,
    val lowerBound: Int,
    val percentage: Int,
    val bucketingKey: String = DEFAULT_BUCKETING_KEY,
) {
    fun convert() = com.amplitude.experiment.evaluation.MutualExclusionConfig(
        groupSalt = this.groupSalt,
        lowerBound = this.lowerBound,
        percentage = this.percentage,
        bucketingKey = this.bucketingKey,
    )
}

@Serializable
internal data class SegmentTargetingConfig(
    val name: String,
    val conditions: List<UserPropertyFilter>,
    val allocations: List<Allocation>,
    val bucketingKey: String?,
) {
    fun convert() = com.amplitude.experiment.evaluation.SegmentTargetingConfig(
        name = this.name,
        conditions = this.conditions.map { it.convert() },
        allocations = this.allocations.map { it.convert() },
        bucketingKey = this.bucketingKey,
    )
}

@Serializable
internal enum class Operator(private val value: Int) {
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
    HAS_PREFIX(20);

    fun convert() = when (this) {
        IS -> com.amplitude.experiment.evaluation.Operator.IS
        IS_NOT -> com.amplitude.experiment.evaluation.Operator.IS_NOT
        CONTAINS -> com.amplitude.experiment.evaluation.Operator.CONTAINS
        DOES_NOT_CONTAIN -> com.amplitude.experiment.evaluation.Operator.DOES_NOT_CONTAIN
        LESS_THAN -> com.amplitude.experiment.evaluation.Operator.LESS_THAN
        LESS_THAN_EQUALS -> com.amplitude.experiment.evaluation.Operator.LESS_THAN_EQUALS
        GREATER_THAN -> com.amplitude.experiment.evaluation.Operator.GREATER_THAN
        GREATER_THAN_EQUALS -> com.amplitude.experiment.evaluation.Operator.GREATER_THAN_EQUALS
        SET_IS -> com.amplitude.experiment.evaluation.Operator.SET_IS
        SET_IS_NOT -> com.amplitude.experiment.evaluation.Operator.SET_IS_NOT
        CSS_MATCH -> com.amplitude.experiment.evaluation.Operator.CSS_MATCH
        GLOB_MATCH -> com.amplitude.experiment.evaluation.Operator.GLOB_MATCH
        SET_CONTAINS -> com.amplitude.experiment.evaluation.Operator.SET_CONTAINS
        SET_DOES_NOT_CONTAIN -> com.amplitude.experiment.evaluation.Operator.SET_DOES_NOT_CONTAIN
        GLOB_DOES_NOT_MATCH -> com.amplitude.experiment.evaluation.Operator.GLOB_DOES_NOT_MATCH
        VERSION_LESS_THAN -> com.amplitude.experiment.evaluation.Operator.VERSION_LESS_THAN
        VERSION_LESS_THAN_EQUALS -> com.amplitude.experiment.evaluation.Operator.VERSION_LESS_THAN_EQUALS
        VERSION_GREATER_THAN -> com.amplitude.experiment.evaluation.Operator.VERSION_GREATER_THAN
        VERSION_GREATER_THAN_EQUALS -> com.amplitude.experiment.evaluation.Operator.VERSION_GREATER_THAN_EQUALS
        HAS_PREFIX -> com.amplitude.experiment.evaluation.Operator.HAS_PREFIX
    }
}

@Serializable
internal data class UserPropertyFilter(
    val prop: String,
    val op: Operator,
    val values: Set<String>,
) {
    fun convert() = com.amplitude.experiment.evaluation.UserPropertyFilter(
        prop = this.prop,
        op = this.op.convert(),
        values = this.values,
    )
}

@Serializable
internal data class Variant(
    val key: String? = null,
    val payload: JsonElement? = null,
) {
    constructor(
        variant: com.amplitude.experiment.evaluation.Variant
    ) : this(
        key = variant.key,
        payload = variant.payload as JsonElement?
    )

    fun convert() = com.amplitude.experiment.evaluation.Variant(
        key = key,
        payload = payload
    )
}

@Serializable
internal data class ExperimentUser(
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
    @SerialName(SkylabUser.USER_PROPERTIES) val userProperties: JsonObject? = null,
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
