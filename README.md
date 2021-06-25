# experiment-evaluation

Proof of concept for building a multiplatform (JVM, Node.js, Native) implementation of the experiment evaluation engine.
The purpose of this library is to share the same evaluation code across all local-evaluation experiment SDKs.

The current implementation supports:
* JVM
* Node.js
* Native
  * macos
    * macosX64
  * ios
    * iosArm32
    * iosArm64
    * iosX64
  * tvos
    * tvosArm64
    * tvosX64
  * watchos
    * watchosArm32
    * watchosArm64
    * watchosX86
    * watchosX64
  * linux
    * linuxX64
    * linuxArm64
  
> Note: `macosArm64` (Apple Silicon) is not yet supported. It will be added to kotlin 1.5.30.

## Build

This will take some time.

```
./gradlew build
```

## Modules

### `evaluation-core`

The core evaluation engine with public data types exposed. Used by other kotlin mulitplatform modules/libraries and JVM
targets.

### `evaluation-interop`

Module which supports better interoperability with non-JVM targets. Eventually we will want to support JS/Native 
targets with non-string apis in order to avoid unnecessary JSON serialization.

```kotlin
fun evaluate(rules: String, user: String): String
```

Only exposes a single function `evaluate` which takes JSON `String` inputs and outputs. The caller is in charge of 
building the json objects and parsing the result.

#### Important Build Outputs

**Apple Framework**

```
build/xcframework/EvaluationInterop.xcframework
```

**Dynamic Libraries**

```
build/bin/<target>/<debug|release>Shared/libevaluation_interop.<dylib|so>
build/bin/<target>/<debug|release>Shared/libevaluation_interop_api.h
```

