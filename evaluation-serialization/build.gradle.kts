plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
    signing
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

version = "1.0.0-rc2"

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

// Publishing

val javadocJar by tasks.registering(Jar::class) {
    archiveClassifier.set("javadoc")
}

publishing {
    @Suppress("LocalVariableName")
    publications.withType<MavenPublication> {
        artifact(javadocJar)
        pom {
            name.set("Amplitude Experiment Evaluation Serialization")
            description.set("Kotlin multiplatform package for serialization of Amplitude Experiment's evaluation objects.")
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
}

signing {
    val publishing = extensions.findByType<PublishingExtension>()
    val signingKeyId = System.getenv("SIGNING_KEY_ID")
    val signingKey = System.getenv("SIGNING_KEY")
    val signingPassword = System.getenv("SIGNING_PASSWORD")
    useInMemoryPgpKeys(signingKeyId, signingKey, signingPassword)
    sign(publishing?.publications)
}

tasks.withType<Sign>().configureEach {
    onlyIf { isReleaseBuild }
}

val isReleaseBuild: Boolean
    get() = System.getenv("SIGNING_KEY") != null
