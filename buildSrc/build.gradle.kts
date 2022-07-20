plugins {
    kotlin("jvm") version "1.7.10"
}

repositories {
    google()
    gradlePluginPortal()
    mavenCentral()
}

dependencies {
    implementation(kotlin("gradle-plugin"))
    implementation(kotlin("compiler-embeddable"))
}
