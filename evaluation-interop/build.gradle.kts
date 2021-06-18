plugins {
    id("dev.petuska.npm.publish") version Versions.npmPublishPlugin
    kotlin("multiplatform")
    kotlin("native.cocoapods") version Versions.cocoapodsPlugin
    id("org.jetbrains.kotlin.plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
}

kotlin {

    sourceSets.all {
        this.languageSettings.apply {
            useExperimentalAnnotation("kotlin.RequiresOptIn")
        }
    }

    cocoapods {
        // Configure fields required by CocoaPods.
        summary = "Native evaluation interoperability library for Amplitude Experiment"
        homepage = "https://github.com/amplitude/experiment-evaluation"

        // You can change the name of the produced framework.
        // By default, it is the name of the Gradle project.
        frameworkName = "EvaluationInterop"
    }

    val hostOs = getHostOs()
    if (hostOs == HostOs.MAC) {
        macosX64 {
            binaries.sharedLib()
            binaries.framework {
                baseName = "EvaluationInterop"
            }
        }
        iosArm32 {
            binaries.sharedLib()
            binaries.framework {
                baseName = "EvaluationInterop"
            }
        }
        iosArm64 {
            binaries.sharedLib()
            binaries.framework {
                baseName = "EvaluationInterop"
            }
        }
        iosX64 {
            binaries.sharedLib()
            binaries.framework {
                baseName = "EvaluationInterop"
            }
        }
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