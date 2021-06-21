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
        homepage = "https://github.com/amplitude/experiment-evaluation"
        ios.deploymentTarget = "10.0"
        osx.deploymentTarget = "10.10"
        tvos.deploymentTarget = "9.0"
        watchos.deploymentTarget = "3.0"
    }

    val hostOs = getHostOs()
    if (hostOs == HostOs.MAC) {
        macosX64().binaries.sharedLib()
        macosX64()
        iosArm32()
        iosArm64()
        iosX64()
        tvosArm64()
        tvosX64()
        watchosArm32()
        watchosArm64()
        watchosX86()
        watchosX64()
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
    val newPodspecContent = podspec.readLines().map {
        when {
            // Needed to publish the pod
            it.contains("    spec.source") -> {
                "    spec.source = { :git => \"https://github.com/amplitude/experiment-evaluation.git\", :tag => \"#{spec.version}\" }"
            }
            // Silence warnings for license
            it.contains("    spec.license") -> {
                "    spec.license = { :type => \"MIT\" }"
            }
            it.contains("    spec.author") -> {
                "    spec.author = { \"Amplitude\" => \"experiment@amplitude.com\" }"
            }
            // NOTE: This is required because for some reason the PODS_TARGET_SRCROOT is misconfigured
            // to point to the OS root directory (i.e. /). Manually set the repo root to point to the
            // project directory.
            it.contains("REPO_ROOT=\"\$PODS_TARGET_SRCROOT\"") -> {
                "                REPO_ROOT=$projectDir"
            }
            else -> it
        }
    }
    podspec.writeText(newPodspecContent.joinToString(separator = "\n"))
}
