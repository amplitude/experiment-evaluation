plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

version = "0.0.1"

kotlin {

    sourceSets.all {
        this.languageSettings.apply {
            useExperimentalAnnotation("kotlin.RequiresOptIn")
        }
    }

    if (isMacOs()) {
        macosX64()
        macosArm64()
//        iosArm32()
//        iosArm64()
//        iosX64()
//        tvosArm64()
//        tvosX64()
//        watchosArm32()
//        watchosArm64()
//        watchosX86()
//        watchosX64()
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
                // None
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
