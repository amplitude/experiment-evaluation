import kotlin.test.Test

const val RULES = """
[
   {
      "allUsersTargetingConfig":{
         "allocations":[
            {
               "percentage":10000,
               "weights":{
                  "control":1,
                  "treatment":1
               }
            }
         ],
         "bucketingKey":"device_id",
         "conditions":[
            
         ],
         "name":"default-segment"
      },
      "bucketingKey":"device_id",
      "bucketingSalt":"DdqDXcww",
      "customSegmentTargetingConfigs":[
         {
            "allocations":[
               {
                  "percentage":0,
                  "weights":{
                     "control":1,
                     "treatment":1
                  }
               }
            ],
            "bucketingKey":"device_id",
            "conditions":[
               {
                  "op":"IS",
                  "prop":"gp:premium",
                  "values":[
                     "true"
                  ]
               }
            ],
            "name":"Segment 1"
         }
      ],
      "defaultValue":"off",
      "enabled":true,
      "evalMode":"LOCAL",
      "flagKey":"local-evaluation-demo",
      "flagName":"local-evaluation-demo",
      "flagVersion":4,
      "globalHoldbackBucketingKey":"amplitude_id",
      "globalHoldbackPct":0,
      "globalHoldbackSalt":null,
      "mutualExclusionConfig":null,
      "type":"EXPERIMENT",
      "useStickyBucketing":false,
      "userProperty":"[Experiment] local-evaluation-demo",
      "variants":[
         {
            "key":"control",
            "payload":{
               "k":"v"
            }
         },
         {
            "key":"treatment",
            "payload":"s"
         }
      ],
      "variantsExclusions":null,
      "variantsInclusions":{
         
      }
   }
]
"""

const val USER = """
{
    "user_id":"brian.giori@amplitude.com",
    "device_id":"fhfuewilhfdsafqfil",
    "user_properties":{}
}
"""

class EvaluationTest {
    @Test
    fun testEvaluation() {
        val rules: dynamic = JSON.parse(RULES)
        val user: dynamic = JSON.parse(USER)
        val results = evaluate(rules, user)
        println(JSON.stringify(results))
    }
}
