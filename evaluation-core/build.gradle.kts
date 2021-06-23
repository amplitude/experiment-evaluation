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
