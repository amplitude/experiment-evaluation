import com.amplitude.experiment.evaluation.Allocation
import com.amplitude.experiment.evaluation.DEFAULT_BUCKETING_KEY
import com.amplitude.experiment.evaluation.EvaluationMode
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.MutualExclusionConfig
import com.amplitude.experiment.evaluation.Operator
import com.amplitude.experiment.evaluation.SegmentTargetingConfig
import com.amplitude.experiment.evaluation.SkylabUser
import com.amplitude.experiment.evaluation.SkylabUser.Keys.CARRIER
import com.amplitude.experiment.evaluation.SkylabUser.Keys.CITY
import com.amplitude.experiment.evaluation.SkylabUser.Keys.COUNTRY
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_FAMILY
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_ID
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_TYPE
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DMA
import com.amplitude.experiment.evaluation.SkylabUser.Keys.LANGUAGE
import com.amplitude.experiment.evaluation.SkylabUser.Keys.OS
import com.amplitude.experiment.evaluation.SkylabUser.Keys.PLATFORM
import com.amplitude.experiment.evaluation.SkylabUser.Keys.REGION
import com.amplitude.experiment.evaluation.SkylabUser.Keys.USER_ID
import com.amplitude.experiment.evaluation.SkylabUser.Keys.USER_PROPERTIES
import com.amplitude.experiment.evaluation.SkylabUser.Keys.VERSION
import com.amplitude.experiment.evaluation.UserPropertyFilter
import com.amplitude.experiment.evaluation.Variant

internal fun dynamicAllocation(js: dynamic) = if (js) {
    Allocation(
        percentage = js.percentage as Int,
        weights = dynamicMapOf(js = js.weights),
    )
} else null

fun dynamicEvaluationMode(js: dynamic) = when (js as String) {
    "LOCAL" -> EvaluationMode.LOCAL
    "REMOTE" -> EvaluationMode.REMOTE
    else -> throw IllegalArgumentException("EvaluationMode $js must be a valid: local, remote")
}

internal fun dynamicFlagConfig(js: dynamic) = if (js) {
    FlagConfig(
        flagKey = js.flagKey as String,
        flagName = js.flagName as String,
        flagVersion = js.flagVersion as? Int ?: 0,
        enabled = js.enabled as? Boolean ?: false,
        bucketingKey = js.bucketingKey as? String ?: DEFAULT_BUCKETING_KEY,
        bucketingSalt = js.bucketingSalt as? String?,
        useStickyBucketing = js.useStickyBucketing as? Boolean ?: false,
        globalHoldbackSalt = js.globalHoldbackSalt as? String?,
        globalHoldbackPct = js.globalHoldbackPct as? Int ?: 0,
        mutualExclusionConfig = dynamicMutualExclusionConfig(js = js.mutualExclusionConfig),
        defaultValue = js.defaultValue as? String?,
        variants = dynamicListOf(js = js.variants) { dynamicVariant(js = it)!! }!!,
        variantsExclusions = dynamicMapOf(js = js.variantsExclusions) { dynamicListOf<String>(js = it)!!.toSet() },
        variantsInclusions = dynamicMapOf(js = js.variantsInclusions) { dynamicListOf<String>(js = it)!!.toSet() },
        allUsersTargetingConfig = dynamicSegmentTargetingConfig(js = js.allUsersTargetingConfig)!!,
        customSegmentTargetingConfigs = dynamicListOf(js = js.customSegmentTargetingConfigs) {
            dynamicSegmentTargetingConfig(js = it)!!
        },
        userProperty = js.userProperty as? String?,
        evalMode = dynamicEvaluationMode(js = js.evalMode),
    )
} else null

internal fun dynamicMutualExclusionConfig(js: dynamic) = if (js) {
    MutualExclusionConfig(
        groupSalt = js.groupSalt as String,
        lowerBound = js.lowerBound as Int,
        percentage = js.percentage as Int,
        bucketingKey = js.bucketingKey as? String ?: DEFAULT_BUCKETING_KEY,
    )
} else null

fun dynamicSegmentTargetingConfig(js: dynamic) = if (js) {
    SegmentTargetingConfig(
        name = js.name as String,
        conditions = dynamicListOf(js = js.conditions) { dynamicUserPropertyFilter(js = it)!! }!!,
        allocations = dynamicListOf(js = js.allocations) { dynamicAllocation(js = it)!! }!!,
        bucketingKey = js.bucketingKey as? String?,
    )
} else null

fun dynamicOperator(js: dynamic): Operator = when (js as String) {
    "IS" -> Operator.IS
    "IS_NOT" -> Operator.IS_NOT
    "CONTAINS" -> Operator.CONTAINS
    "DOES_NOT_CONTAIN" -> Operator.DOES_NOT_CONTAIN
    "LESS_THAN" -> Operator.LESS_THAN
    "LESS_THAN_EQUALS" -> Operator.LESS_THAN_EQUALS
    "GREATER_THAN" -> Operator.GREATER_THAN
    "GREATER_THAN_EQUALS" -> Operator.GREATER_THAN_EQUALS
    "SET_IS" -> Operator.SET_IS
    "SET_IS_NOT" -> Operator.SET_IS_NOT
    "CSS_MATCH" -> Operator.CSS_MATCH
    "GLOB_MATCH" -> Operator.GLOB_MATCH
    "SET_CONTAINS" -> Operator.SET_CONTAINS
    "SET_DOES_NOT_CONTAIN" -> Operator.SET_DOES_NOT_CONTAIN
    "GLOB_DOES_NOT_MATCH" -> Operator.GLOB_DOES_NOT_MATCH
    "VERSION_LESS_THAN" -> Operator.VERSION_LESS_THAN
    "VERSION_LESS_THAN_EQUALS" -> Operator.VERSION_LESS_THAN_EQUALS
    "VERSION_GREATER_THAN" -> Operator.VERSION_GREATER_THAN
    "VERSION_GREATER_THAN_EQUALS" -> Operator.VERSION_GREATER_THAN_EQUALS
    "HAS_PREFIX" -> Operator.HAS_PREFIX
    else -> throw IllegalArgumentException("Invalid operator $js")
}

internal fun dynamicUserPropertyFilter(js: dynamic) = if (js) {
    UserPropertyFilter(
        prop = js.prop as String,
        op = dynamicOperator(js = js.op),
        values = dynamicListOf<String>(js = js.values)!!.toSet()
    )
} else null

fun dynamicVariant(js: dynamic) = if (js) {
    Variant(
        key = js.key as? String?,
        payload = js.payload,
    )
} else null

fun dynamicSkylabUser(js: dynamic) = if (js) {
    SkylabUser(
        userId = js[USER_ID] as? String,
        deviceId = js[DEVICE_ID] as? String,
        country = js[COUNTRY] as? String,
        region = js[REGION] as? String,
        dma = js[DMA] as? String,
        city = js[CITY] as? String,
        language = js[LANGUAGE] as? String,
        platform = js[PLATFORM] as? String,
        version = js[VERSION] as? String,
        os = js[OS] as? String,
        deviceFamily = js[DEVICE_FAMILY] as? String,
        deviceType = js[DEVICE_TYPE] as? String,
        carrier = js[CARRIER] as? String,
        userProperties = dynamicMapOf(js = js[USER_PROPERTIES]),
    )
} else null
