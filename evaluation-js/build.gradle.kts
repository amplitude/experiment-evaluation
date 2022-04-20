plugins {
    id("dev.petuska.npm.publish") version Versions.npmPublishPlugin
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

version = "0.0.4"

kotlin {

    sourceSets.all {
        this.languageSettings.apply {
            useExperimentalAnnotation("kotlin.RequiresOptIn")
        }
    }

    js(IR) {
        binaries.library()
        nodejs()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(project(":evaluation-core"))
            }
        }
        val jsTest by getting {
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
