module.exports = {
    "branches": ["main"],
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "preset": "angular",
            "parserOpts": {
                "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
            }
        }],
        "@semantic-release/github",
        [
            "@google/semantic-release-replace-plugin",
            {
                "replacements": [
                    {
                        "files": ["build.gradle.kts"],
                        "from": "version = \".*\"",
                        "to": "version = \"${nextRelease.version}\"",
                        "results": [
                            {
                                "file": "build.gradle.kts",
                                "hasChanged": true,
                                "numMatches": 1,
                                "numReplacements": 1
                            }
                        ],
                        "countMatches": true
                    },
                    {
                        "files": ["Sources/Experiment/ExperimentConfig.swift"],
                        "from": "Version: String = \".*\"",
                        "to": "Version: String = \"${nextRelease.version}\"",
                        "results": [
                            {
                                "file": "Sources/Experiment/ExperimentConfig.swift",
                                "hasChanged": true,
                                "numMatches": 1,
                                "numReplacements": 1
                            }
                        ],
                        "countMatches": true
                    },
                ]
            }
        ],
        ["@semantic-release/git", {
            "assets": ["build.gradle.kts"],
            "message": "chore(release): evaluation-core ${nextRelease.version} [skip ci]"
        }],
        ["@semantic-release/exec", {
            "publishCmd":
                "./gradlew evaluation-core:publishKotlinMultiplatformPublicationToSonatypeRepository && " +
                "./gradlew evaluation-core:publishJvmPublicationToSonatypeRepository",
        }],
    ],
}
