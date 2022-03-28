plugins {
    id("dev.petuska.npm.publish") version Versions.npmPublishPlugin
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

val isDebug = true
val frameworkName = "EvaluationInterop"

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
                baseName = frameworkName
            }
        }
        iosArm32().binaries.framework { baseName = frameworkName }
        iosArm64().binaries.framework { baseName = frameworkName }
        iosX64().binaries.framework { baseName = frameworkName }
        tvosArm64().binaries.framework { baseName = frameworkName }
        tvosX64().binaries.framework { baseName = frameworkName }
        watchosArm32().binaries.framework { baseName = frameworkName }
        watchosArm64().binaries.framework { baseName = frameworkName }
        watchosX86().binaries.framework { baseName = frameworkName }
        watchosX64().binaries.framework { baseName = frameworkName }
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
    gradleVersion = "7.4.1"
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

    // Clear the old xcframework
    exec { commandLine("rm", "-rf", "build/xcframework") }

    // Setup fat-frameworks directory for 32-bit and 64-bit platforms with the same arch
    exec { commandLine("mkdir", "-p", "build/fat-frameworks") }
    exec { commandLine("cp", "-R", "build/bin/iosArm64", "build/fat-frameworks/iosArm") }
    exec { commandLine("cp", "-R", "build/bin/watchosArm64", "build/fat-frameworks/watchosArm") }
    exec { commandLine("cp", "-R", "build/bin/watchosX64", "build/fat-frameworks/watchosX") }

    // For debug and release frameworks, create fat frameworks and create the final xcframework
    listOf("debugFramework", "releaseFramework").forEach { debugOrReleaseFramework ->
        exec {
            commandLine(
                "lipo", "-create",
                "build/bin/iosArm32/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName",
                "build/bin/iosArm64/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName",
                "-output", "build/fat-frameworks/iosArm/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName"
            )
        }
        exec {
            commandLine(
                "lipo", "-create",
                "build/bin/watchosArm32/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName",
                "build/bin/watchosArm64/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName",
                "-output", "build/fat-frameworks/watchosArm/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName"
            )
        }
        exec {
            commandLine(
                "lipo", "-create",
                "build/bin/watchosX86/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName",
                "build/bin/watchosX64/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName",
                "-output", "build/fat-frameworks/watchosX/$debugOrReleaseFramework/$frameworkName.framework/$frameworkName"
            )
        }
        exec {
            commandLine(
                "xcodebuild", "-create-xcframework",
                "-framework", "build/fat-frameworks/iosArm/$debugOrReleaseFramework/$frameworkName.framework",
                "-framework", "build/bin/iosX64/$debugOrReleaseFramework/$frameworkName.framework",
                "-framework", "build/bin/macosX64/$debugOrReleaseFramework/$frameworkName.framework",
                "-framework", "build/bin/tvosArm64/$debugOrReleaseFramework/$frameworkName.framework",
                "-framework", "build/bin/tvosX64/$debugOrReleaseFramework/$frameworkName.framework",
                "-framework", "build/fat-frameworks/watchosArm/$debugOrReleaseFramework/$frameworkName.framework",
                "-framework", "build/fat-frameworks/watchosX/$debugOrReleaseFramework/$frameworkName.framework",
                "-output", "build/xcframework/$debugOrReleaseFramework/$frameworkName.xcframework"
            )
        }
    }
}
