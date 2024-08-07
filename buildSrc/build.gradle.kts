plugins {
    kotlin("jvm") version "1.9.10"
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
