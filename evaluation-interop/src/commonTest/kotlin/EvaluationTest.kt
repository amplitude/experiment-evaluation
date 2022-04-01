import kotlin.test.Test

const val RULES = """
[
{"allUsersTargetingConfig":{"allocations":[{"percentage":10000,"weights":{"control":1,"treatment":1}}],"bucketingKey":"user_id","conditions":[],"name":"default-segment"},"bucketingKey":"device_id","bucketingSalt":"7WIcke1h","customSegmentTargetingConfigs":[],"defaultValue":"off","enabled":true,"evalMode":"LOCAL","flagKey":"edge-local-evaluation","flagName":"edge-local-evaluation","flagVersion":29,"globalHoldbackBucketingKey":"amplitude_id","globalHoldbackPct":0,"globalHoldbackSalt":null,"mutualExclusionConfig":null,"type":"RELEASE","useStickyBucketing":false,"userProperty":"[Experiment] edge-local-evaluation","variants":[{"key":"control","payload":null},{"key":"treatment","payload":null}],"variantsExclusions":null,"variantsInclusions":{}}
]
"""

const val USER = """
{
  "user_id":"brian.giori@amplitude.com",
  "device_id":"hfuiewfueiwnquife"
}
"""

class EvaluationTest {

    @Test
    fun testEvaluation() {
        val result = evaluate(RULES, USER)
        println(result)
    }
}
