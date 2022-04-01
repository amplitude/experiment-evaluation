enum class HostOs(val value: String) {
    MAC("Mac OS X"),
    LINUX("Linux"),
    WINDOWS("Windows");
}

fun isMacOs(): Boolean {
    return getHostOs() == HostOs.MAC
}

fun getHostOs(): HostOs {
    val hostOs = System.getProperty("os.name")
    return when {
        hostOs.startsWith("Windows") -> HostOs.WINDOWS
        hostOs == "Mac OS X" -> HostOs.MAC
        hostOs == "Linux" -> HostOs.LINUX
        else -> throw Throwable("Host OS is not supported in Kotlin/Native.")
    }
}
