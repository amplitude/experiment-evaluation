plugins {
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
        macosX64()
        iosArm64()
        iosX64()
        tvosArm64()
        tvosX64()
        watchosArm64()
        watchosX64()

        // These targets cause building the xcframework to fail with:
        //     - Both watchos-i386-simulator and watchos-x86_64-simulator represent two equivalent library definitions.
        //     - Both watchos-armv7k and watchos-arm64_32 represent two equivalent library definitions.
        //     - Both ios-armv7 and ios-arm64 represent two equivalent library definitions.
        // TODO: Create fat frameworks for 32-bit architectures with the 64-bit equivalent then build xcframework
        //iosArm32()
        //watchosArm32()
        //watchosX86()
    }
    linuxArm64()
    linuxX64()


    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }

    js(IR) {
        nodejs()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
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
