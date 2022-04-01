# experiment-evaluation

Proof of concept for building a multiplatform (JVM, Node.js, Native) 
implementation of the experiment evaluation engine. The purpose of this library 
is to share the same evaluation code across all local-evaluation experiment 
SDKs.

The current implementation supports:
* JVM
* Node.js
* Native
  * macos
    * macosX64
    * macosArm64
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
  
> Note: **ios/tvos/watchos targets and macos frameworks are currently disabled** 
> because they make build times too long and they're currently not being used.

### Native Language Bindings

Native language bindings are currently in a proof-of-concept state. Additional 
work must be put in to properly distribute libraries for common server-side 
languages for multiple architectures.

**Proof-of-concepts:**

* C/C++ - `c/`
* Python - `python/`
* Go - `go/`

## Build

This may take some time.

```
./gradlew build
```

## Modules

### `evaluation-core`

The core evaluation engine with public data types exposed. Used by other kotlin 
mulitplatform modules/libraries and JVM targets.

### `evaluation-interop`

Module which supports better interoperability with native targets. Uses kotlinx 
serialization to serialize data across the native interface.

```kotlin
fun evaluate(rules: String, user: String): String
```

Only exposes a single function `evaluate` which takes JSON `String` inputs and outputs. The caller is in charge of 
building the json objects and parsing the result.

### `evaluation-js`

Module which only targets nodejs for optimizing bundle size and evaluation speed
and consistency. The generated javascript is completely stateless, and takes and
returns `dynamic` javascript objects/arrays in the `evaluate` function.

```kotlin
fun evaluate(rules: dynamic, user: dynamic): dynamic
```

#### Important Build Outputs

**Apple Framework**

> Note: Apple framework outputs are currently disabled.

```
build/xcframework/EvaluationInterop.xcframework
```

**Dynamic Libraries**

```
build/bin/<target>/<debug|release>Shared/libevaluation_interop.<dylib|so>
build/bin/<target>/<debug|release>Shared/libevaluation_interop_api.h
```

