plugins {
    id("dev.petuska.npm.publish") version Versions.npmPublishPlugin
    kotlin("multiplatform")
    id("org.jetbrains.kotlin.plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
}

kotlin {

    sourceSets.all {
        this.languageSettings.apply {
            useExperimentalAnnotation("kotlin.RequiresOptIn")
        }
    }

    val hostOs = getHostOs()
    if (hostOs == HostOs.MAC) {
        macosX64().binaries {
            sharedLib()
            framework {
                baseName = "EvaluationInterop"
            }
        }
        iosArm64().binaries.framework { baseName = "EvaluationInterop" }
        iosX64().binaries.framework { baseName = "EvaluationInterop" }
        tvosArm64().binaries.framework { baseName = "EvaluationInterop" }
        tvosX64().binaries.framework { baseName = "EvaluationInterop" }
        watchosArm64().binaries.framework { baseName = "EvaluationInterop" }
        watchosX64().binaries.framework { baseName = "EvaluationInterop" }

        // These targets cause building the xcframework to fail with:
        //     - Both watchos-i386-simulator and watchos-x86_64-simulator represent two equivalent library definitions.
        //     - Both watchos-armv7k and watchos-arm64_32 represent two equivalent library definitions.
        //     - Both ios-armv7 and ios-arm64 represent two equivalent library definitions.
        // TODO: Create fat frameworks for 32-bit architectures with the 64-bit equivalent then build xcframework
        //iosArm32()
        //watchosArm32()
        //watchosX86()
    }
    linuxArm64().binaries.sharedLib()
    linuxX64().binaries.sharedLib()

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }

    js(IR) {
        binaries.library()
        nodejs()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":evaluation-core"))
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:${Versions.serializationRuntime}")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:${Versions.serializationRuntime}")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
    }
}

tasks.withType<Wrapper> {
    gradleVersion = "7.0.2"
    distributionType = Wrapper.DistributionType.ALL
}

npmPublishing {
    organization = "amplitude"
    repositories {
        repository("npmjs") {
            registry = uri("https://registry.npmjs.org")
            authToken = properties["NPM_TOKEN"] as? String
        }
    }
}

tasks["build"].doLast {
    exec {
        commandLine("rm", "-rf",  "build/xcframework")
    }
    exec {
        commandLine("xcodebuild", "-create-xcframework",
            "-framework", "build/bin/iosArm64/debugFramework/EvaluationInterop.framework",
            "-framework", "build/bin/iosX64/debugFramework/EvaluationInterop.framework",
            "-framework", "build/bin/macosX64/debugFramework/EvaluationInterop.framework",
            "-framework", "build/bin/tvosArm64/debugFramework/EvaluationInterop.framework",
            "-framework", "build/bin/tvosX64/debugFramework/EvaluationInterop.framework",
            "-framework", "build/bin/watchosArm64/debugFramework/EvaluationInterop.framework",
            "-framework", "build/bin/watchosX64/debugFramework/EvaluationInterop.framework",
            "-output", "build/xcframework/EvaluationInterop.xcframework"
        )
    }

}
