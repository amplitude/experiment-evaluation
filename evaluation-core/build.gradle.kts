import Versions.ktorVersion
import com.vanniktech.maven.publish.SonatypeHost

plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    id("com.vanniktech.maven.publish") version Versions.mavenPublish
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

version = "2.1.1"

kotlin {

    if (isMacOs()) {
        macosX64()
        macosArm64()
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
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                implementation("io.ktor:ktor-client-cio:$ktorVersion")
            }
        }
    }
}

mavenPublishing {
    publishToMavenCentral(SonatypeHost.CENTRAL_PORTAL, automaticRelease = true)
    signAllPublications()
    coordinates("com.amplitude", "experiment-evaluation", version.toString())
    pom {
        name.set("Amplitude Experiment Evaluation")
        description.set("Core kotlin multiplatform package for Amplitude Experiment's evaluation.")
        url.set("https://github.com/amplitude/experiment-evaluation")
        licenses {
            license {
                name.set("MIT")
                url.set("https://opensource.org/licenses/MIT")
                distribution.set("repo")
            }
        }
        developers {
            developer {
                id.set("amplitude")
                name.set("Amplitude")
                email.set("dev@amplitude.com")
            }
        }
        scm {
            url.set("https://github.com/amplitude/experiment-evaluation")
            connection.set("scm:git@github.com:amplitude/experiment-evaluation.git")
            developerConnection.set("scm:git@github.com:amplitude/experiment-evaluation.git")
        }
    }
}
