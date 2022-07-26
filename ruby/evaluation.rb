
require 'ffi'

module EvaluationInterop
  extend FFI::Library
  ffi_lib ["/Users/hao.yu/Workspace/experiment-evaluation/evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop.dylib"] if RUBY_PLATFORM =~ /darwin/
  class Root < FFI::Struct
    layout :evaluate, callback([ :string, :string], :pointer)
  end

  class Kotlin < FFI::Struct
    layout :root, Root.ptr
  end

  class Libevaluation_interop_ExportedSymbols < FFI::Struct
    layout :kotlin, Kotlin.ptr
  end

  attach_function :libevaluation_interop_symbols, [], Libevaluation_interop_ExportedSymbols.by_value

  #https://stackoverflow.com/questions/5372483/how-do-i-specify-a-struct-as-the-return-value-of-a-function-in-rubyffi 
  #stack-allocated  struct should use .by_value

end

rulesJson = '[
   {
      "allUsersTargetingConfig":{
         "allocations":[
            {
               "percentage":6600,
               "weights":{
                  "control":1,
                  "treatment":1
               }
            }
         ],
         "bucketingKey":"amplitude_id",
         "conditions":[],
         "name":"default-segment"
      },
      "bucketingKey":"amplitude_id",
      "bucketingSalt":"xIsm9BUj",
      "customSegmentTargetingConfigs":[
      ],
      "defaultValue":"off",
      "enabled":true,
      "flagKey":"brian-bug-safari",
      "flagName":"brian-bug-safari",
      "flagVersion":15,
      "globalHoldbackBucketingKey":"amplitude_id",
      "globalHoldbackPct":0,
      "globalHoldbackSalt":"5inHyVr4",
      "mutualExclusionConfig":{
         "bucketingKey":"amplitude_id",
         "groupSalt":"yYIqQGSY",
         "lowerBound":0,
         "percentage":5000
      },
      "useStickyBucketing":false,
      "userProperty":"[Amplitude][Flag]brian-bug-safari",
      "variants":[
         {
            "key":"control",
            "payload":{
               "asdf":"asdf"
            }
         },
         {
            "key":"treatment",
            "payload":[
               "array"
            ]
         }
      ],
      "variantsExclusions":null,
      "variantsInclusions":null
   },
   {
      "allUsersTargetingConfig":{
         "allocations":[
            {
               "percentage":0,
               "weights":{
                  "control":1,
                  "treatment":1
               }
            }
         ],
         "bucketingKey":"amplitude_id",
         "conditions":[],
         "name":"default-segment"
      },
      "bucketingKey":"amplitude_id",
      "bucketingSalt":"LRVo9Day",
      "customSegmentTargetingConfigs":[],
      "defaultValue":"off",
      "enabled":true,
      "flagKey":"brian-bug-safari-2",
      "flagName":"brian-bug-safari-2",
      "flagVersion":6,
      "globalHoldbackBucketingKey":"amplitude_id",
      "globalHoldbackPct":0,
      "globalHoldbackSalt":"5inHyVr4",
      "mutualExclusionConfig":{
         "bucketingKey":"amplitude_id",
         "groupSalt":"yYIqQGSY",
         "lowerBound":5000,
         "percentage":2500
      },
      "useStickyBucketing":false,
      "userProperty":"[Experiment]brian-bug-safari-2",
      "variants":[
         {
            "key":"control",
            "payload":null
         },
         {
            "key":"treatment",
            "payload":null
         }
      ],
      "variantsExclusions":null,
      "variantsInclusions":null
   }
]'

userJson = '{
   "amplitude_id":1234567,
   "user_id":"brian.giori@amplitude.com",
   "device_brand":"asus",
   "device_manufacturer":"asus",
   "device_model":"asus_t00f1",
   "language":"spanish(puertorico)"
}'

lib = EvaluationInterop.libevaluation_interop_symbols()

puts "#{lib.class}"
puts "#{lib[:kotlin].class}"
puts "#{lib[:kotlin][:root].class}"
puts "#{lib[:kotlin][:root][:evaluate].class}"
fn = lib[:kotlin][:root][:evaluate]
puts "#{fn.respond_to?(:call)}"

#json1 = JSON.parse rulesJson
#json2 = JSON.parse userJson

result = fn.call(rulesJson, userJson)
#puts "#{result}"