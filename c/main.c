#include "libevaluation_interop_api.h"
#include "stdio.h"

int main(int argc, char** argv) {
    libevaluation_interop_ExportedSymbols* lib = libevaluation_interop_symbols();

    const char* rules = "[{\"allUsersTargetingConfig\":{\"allocations\":[{\"percentage\":6600,\"weights\":{\"control\":1,\"treatment\":1}}],\"bucketingKey\":\"amplitude_id\",\"conditions\":[],\"name\":\"default-segment\"},\"bucketingKey\":\"amplitude_id\",\"bucketingSalt\":\"xIsm9BUj\",\"customSegmentTargetingConfigs\":[],\"defaultValue\":\"off\",\"enabled\":true,\"flagKey\":\"brian-bug-safari\",\"flagName\":\"brian-bug-safari\",\"flagVersion\":15,\"globalHoldbackBucketingKey\":\"amplitude_id\",\"globalHoldbackPct\":0,\"globalHoldbackSalt\":\"5inHyVr4\",\"mutualExclusionConfig\":{\"bucketingKey\":\"amplitude_id\",\"groupSalt\":\"yYIqQGSY\",\"lowerBound\":0,\"percentage\":5000},\"useStickyBucketing\":false,\"userProperty\":\"[Amplitude][Flag]brian-bug-safari\",\"variants\":[{\"key\":\"control\",\"payload\":{\"asdf\":\"asdf\"}},{\"key\":\"treatment\",\"payload\":[\"array\"]}],\"variantsExclusions\":null,\"variantsInclusions\":null},{\"allUsersTargetingConfig\":{\"allocations\":[{\"percentage\":0,\"weights\":{\"control\":1,\"treatment\":1}}],\"bucketingKey\":\"amplitude_id\",\"conditions\":[],\"name\":\"default-segment\"},\"bucketingKey\":\"amplitude_id\",\"bucketingSalt\":\"LRVo9Day\",\"customSegmentTargetingConfigs\":[],\"defaultValue\":\"off\",\"enabled\":true,\"flagKey\":\"brian-bug-safari-2\",\"flagName\":\"brian-bug-safari-2\",\"flagVersion\":6,\"globalHoldbackBucketingKey\":\"amplitude_id\",\"globalHoldbackPct\":0,\"globalHoldbackSalt\":\"5inHyVr4\",\"mutualExclusionConfig\":{\"bucketingKey\":\"amplitude_id\",\"groupSalt\":\"yYIqQGSY\",\"lowerBound\":5000,\"percentage\":2500},\"useStickyBucketing\":false,\"userProperty\":\"[Experiment]brian-bug-safari-2\",\"variants\":[{\"key\":\"control\",\"payload\":null},{\"key\":\"treatment\",\"payload\":null}],\"variantsExclusions\":null,\"variantsInclusions\":null}]";
    const char* user = "{\"amplitude_id\":1234567,\"user_id\":\"brian.giori@amplitude.com\",\"device_brand\":\"asus\",\"device_manufacturer\":\"asus\",\"device_model\":\"asus_t00f1\",\"language\":\"spanish(puertorico)\"}";

    const char* response = lib->kotlin.root.evaluate(rules, user);
    printf("%s\n", response);
    lib->DisposeString(response);

    return 0;
}
