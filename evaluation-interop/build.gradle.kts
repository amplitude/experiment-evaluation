plugins {
    id("dev.petuska.npm.publish") version Versions.npmPublishPlugin
    kotlin("multiplatform")
    kotlin("native.cocoapods")
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
        frameworkName = "EvaluationInterop"
        summary = "Native evaluation interoperability library for Amplitude Experiment"
        homepage = "https://amplitude.com/"
        ios.deploymentTarget = "10.0"
        osx.deploymentTarget = "10.10"
        tvos.deploymentTarget = "9.0"
        watchos.deploymentTarget = "3.0"
    }

    val hostOs = getHostOs()
    if (hostOs == HostOs.MAC) {
        macosX64().binaries.sharedLib()
        ios()
        tvos()
        watchos()
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

tasks["podspec"].doLast {
    val podspec = file("${project.name.replace("-", "_")}.podspec")
    project.delete(podspec)
}
