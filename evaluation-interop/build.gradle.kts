plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

version = "2.0.0-alpha.3"

kotlin {

    if (isMacOs()) {
        macosArm64().binaries.sharedLib()
        macosArm64().binaries.staticLib()
        macosX64().binaries.sharedLib()
        macosX64().binaries.staticLib()
    }

    linuxArm64().binaries.sharedLib()
    linuxArm64().binaries.staticLib()
    linuxX64().binaries.sharedLib()
    linuxX64().binaries.staticLib()

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
    gradleVersion = "7.4.1"
    distributionType = Wrapper.DistributionType.ALL
}
