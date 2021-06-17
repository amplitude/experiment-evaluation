import org.gradle.api.GradleException

enum class HostOs {
    MAC, LINUX, WINDOWS
}
fun getHostOs(): HostOs {
    val hostOs = System.getProperty("os.name")
    return when {
        hostOs.startsWith("Windows") -> HostOs.WINDOWS
        hostOs == "Mac OS X" -> HostOs.MAC
        hostOs == "Linux" -> HostOs.LINUX
        else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
    }
}
