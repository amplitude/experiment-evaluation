plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization") version Versions.serializationPlugin
    `maven-publish`
    signing
    id("org.jlleitschuh.gradle.ktlint") version Versions.kotlinLint
}

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

// Publishing

version = "0.0.1"

val javadocJar by tasks.registering(Jar::class) {
    archiveClassifier.set("javadoc")
}

publishing {
    @Suppress("LocalVariableName")
    publications.withType<MavenPublication> {
        artifact(javadocJar)
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
}

signing {
    val publishing = extensions.findByType<PublishingExtension>()
    val signingKeyId = properties["signingKeyId"]?.toString()
    val signingKey = properties["signingKey"]?.toString()
    val signingPassword = properties["signingPassword"]?.toString()
    useInMemoryPgpKeys(signingKeyId, signingKey, signingPassword)
    sign(publishing?.publications)
}

tasks.withType<Sign>().configureEach {
    onlyIf { isReleaseBuild }
}

val isReleaseBuild: Boolean
    get() = properties.containsKey("signingKey")
