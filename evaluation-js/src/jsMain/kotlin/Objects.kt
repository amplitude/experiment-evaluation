import com.amplitude.experiment.evaluation.Allocation
import com.amplitude.experiment.evaluation.FlagConfig
import com.amplitude.experiment.evaluation.Operator
import com.amplitude.experiment.evaluation.ParentDependencies
import com.amplitude.experiment.evaluation.SegmentTargetingConfig
import com.amplitude.experiment.evaluation.SkylabUser
import com.amplitude.experiment.evaluation.SkylabUser.Keys.AMPLITUDE_ID
import com.amplitude.experiment.evaluation.SkylabUser.Keys.CARRIER
import com.amplitude.experiment.evaluation.SkylabUser.Keys.CITY
import com.amplitude.experiment.evaluation.SkylabUser.Keys.COHORT_IDS
import com.amplitude.experiment.evaluation.SkylabUser.Keys.COUNTRY
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_BRAND
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_FAMILY
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_ID
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_MANUFACTURER
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_MODEL
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DEVICE_TYPE
import com.amplitude.experiment.evaluation.SkylabUser.Keys.DMA
import com.amplitude.experiment.evaluation.SkylabUser.Keys.LANGUAGE
import com.amplitude.experiment.evaluation.SkylabUser.Keys.LIBRARY
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

internal fun dynamicFlagConfig(js: dynamic) = if (js) {
    FlagConfig(
        flagKey = js.flagKey as String,
        experimentKey = js.experimentKey as String?,
        flagVersion = js.flagVersion as? Int ?: 0,
        enabled = js.enabled as Boolean,
        bucketingSalt = js.bucketingSalt as String,
        defaultValue = js.defaultValue as? String?,
        variants = dynamicListOf(js = js.variants) { dynamicVariant(js = it)!! }!!,
        variantsInclusions = dynamicMapOf(js = js.variantsInclusions) { dynamicListOf<String>(js = it)!!.toSet() },
        allUsersTargetingConfig = dynamicSegmentTargetingConfig(js = js.allUsersTargetingConfig)!!,
        customSegmentTargetingConfigs = dynamicListOf(js = js.customSegmentTargetingConfigs) {
            dynamicSegmentTargetingConfig(js = it)!!
        },
        parentDependencies = dynamicParentDependencies(js = js.parentDependencies),
        deployed = js.deployed as? Boolean ?: true
    )
} else null

fun dynamicSegmentTargetingConfig(js: dynamic) = if (js) {
    SegmentTargetingConfig(
        name = js.name as String,
        conditions = dynamicListOf(js = js.conditions) { dynamicUserPropertyFilter(js = it)!! }!!,
        allocations = dynamicListOf(js = js.allocations) { dynamicAllocation(js = it)!! }!!,
        bucketingKey = js.bucketingKey as String,
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
    "ENDS_WITH" -> Operator.ENDS_WITH
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

fun dynamicParentDependencies(js: dynamic) = if (js) {
    ParentDependencies(
        operator = js.operator as String,
        flags = dynamicMapOf(js = js.flags) { dynamicListOf<String>(js = it)!!.toSet() }!!
    )
} else null

fun dynamicSkylabUser(js: dynamic) = if (js) {
    SkylabUser(
        userId = js[USER_ID] as? String,
        deviceId = js[DEVICE_ID] as? String,
        amplitudeId = js[AMPLITUDE_ID] as? Long,
        country = js[COUNTRY] as? String,
        region = js[REGION] as? String,
        dma = js[DMA] as? String,
        city = js[CITY] as? String,
        language = js[LANGUAGE] as? String,
        platform = js[PLATFORM] as? String,
        version = js[VERSION] as? String,
        os = js[OS] as? String,
        deviceManufacturer = js[DEVICE_MANUFACTURER] as? String,
        deviceBrand = js[DEVICE_BRAND] as? String,
        deviceModel = js[DEVICE_MODEL] as? String,
        deviceFamily = js[DEVICE_FAMILY] as? String,
        deviceType = js[DEVICE_TYPE] as? String,
        carrier = js[CARRIER] as? String,
        library = js[LIBRARY] as? String,
        cohortIds = js[COHORT_IDS] as? Set<String>?,
        userProperties = dynamicMapOf(js = js[USER_PROPERTIES]),
    )
} else null
