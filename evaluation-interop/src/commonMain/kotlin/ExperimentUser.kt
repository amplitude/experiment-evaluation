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
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonObject

@Serializable
internal data class ExperimentUser(
    @SerialName(USER_ID) val userId: String? = null,
    @SerialName(DEVICE_ID) val deviceId: String? = null,
    @SerialName(AMPLITUDE_ID) val amplitudeId: Long? = 0L,
    @SerialName(COUNTRY) val country: String? = null,
    @SerialName(REGION) val region: String? = null,
    @SerialName(DMA) val dma: String? = null,
    @SerialName(CITY) val city: String? = null,
    @SerialName(LANGUAGE) val language: String? = null,
    @SerialName(PLATFORM) val platform: String? = null,
    @SerialName(VERSION) val version: String? = null,
    @SerialName(OS) val os: String? = null,
    @SerialName(DEVICE_MANUFACTURER) val deviceManufacturer: String? = null,
    @SerialName(DEVICE_BRAND) val deviceBrand: String? = null,
    @SerialName(DEVICE_MODEL) val deviceModel: String? = null,
    @SerialName(DEVICE_FAMILY) val deviceFamily: String? = null,
    @SerialName(DEVICE_TYPE) val deviceType: String? = null,
    @SerialName(CARRIER) val carrier: String? = null,
    @SerialName(LIBRARY) val library: String? = null,
    @SerialName(COHORT_IDS) val cohortIds: Set<String>? = null,
    @SerialName(USER_PROPERTIES) val userProperties: JsonObject? = null,
)

internal fun ExperimentUser.toSkylabUser(): SkylabUser = SkylabUser(
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
