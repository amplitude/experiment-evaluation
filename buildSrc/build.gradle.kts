plugins {
    kotlin("jvm") version "1.6.20"
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
