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
