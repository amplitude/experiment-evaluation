plugins {
    `maven-publish`
    signing
    id("io.github.gradle-nexus.publish-plugin") version "1.1.0"
}

allprojects {
    group = "com.amplitude"

    repositories {
        google()
        mavenCentral()
    }
}

nexusPublishing {
    repositories {
        sonatype {
            stagingProfileId.set(properties["sonatypeStagingProfileId"].toString())
            username.set(properties["sonatypeUsername"].toString())
            password.set(properties["sonatypePassword"].toString())
        }
    }
}
