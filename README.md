# experiment-evaluation

Multiplatform (JVM, Node.js, Native) implementation of the experiment evaluation engine. The purpose of this library is to share the same evaluation code across all local-evaluation experiment 
SDKs.

The current implementation supports:
* JVM
* Node.js
* Native
  * macos
    * macosX64
    * macosArm64
  * linux
    * linuxX64
    * linuxArm64
  
### Native Language Bindings

Native language bindings are currently in a beta state.

**Proof-of-concepts:**

* C/C++ - `c/`
* Python - `python/`
* Go - `go/`

## Build

This may take some time.

```
./gradlew assemble
```

## Modules

### `evaluation-core`

The core evaluation engine with public data types exposed. Used by other kotlin mulitplatform modules/libraries and JVM targets.

### `evaluation-interop`

Module which supports better interoperability with native targets. Uses kotlinx serialization to serialize data across the native interface.

This module exposes a single function `evaluate` which takes JSON `String` inputs and outputs. The caller is in charge of building the json objects and parsing the result.

```kotlin
fun evaluate(rules: String, user: String): String
```

This kotlin function maps to an equivalent function in C:

```c
const char* (*evaluate)(const char* rules, const char* user);
```

This C function is [wrapped in structures generated by kotlin](https://kotlinlang.org/docs/native-dynamic-libraries.html#use-generated-headers-from-c) (some functions omitted):

```c
typedef struct {
  /* Service functions. */
  void (*DisposeString)(const char* string);

  /* User functions. */
  struct {
    struct {
      const char* (*evaluate)(const char* rules, const char* user);
    } root;
  } kotlin;
} libevaluation_interop_ExportedSymbols;
extern libevaluation_interop_ExportedSymbols* libevaluation_interop_symbols(void);
```

Here's example of calling evaluate in C:

```c
#include "libevaluation_interop_api.h"
#include "stdio.h"

int main(int argc, char** argv) {
    libevaluation_interop_ExportedSymbols* lib = libevaluation_interop_symbols();

    const char* rules = "{}";
    const char* user = "{}";
    
    const char* response = lib->kotlin.root.evaluate(rules, user);
    printf("result: %s\n", response);
    lib->DisposeString(response);

    return 0;
}
```

#### Important Build Outputs

**Dynamic Libraries**

Native dynamic libraries are built for specific operating systems and architectures. MacOS targets generate `.dylib` files while linux targets generate `.so` files. Outputs are generated for `debug` and `release` build flavors. Debug flavor outputs will contain additional debug info when the native code crashes (kotlin stack traces, register dump, etc).

* **`<target>`** 
  * `macosX64`: MacOS with Intel Chip
  * `macosArm64`: MacOS with M1 / Apple Silicon Chip
  * `linuxX64`: Linux with Intel/AMD (x64)
  * `linuxArm64`: Linux with Arm Chip
* **`<flavor>`**
  * `debug`: larger, slower binaries with additional debug output on crash (stack traces, register dump, etc.)
  * `release`: smaller, faster binaries without additional debug output on crash.
* `<file>`
  * `dylib`: output file type for macOS
  * `so`: output file type for linux

```
build/bin/<target>/<flavor>Shared/libevaluation_interop.<file>
build/bin/<target>/<flavor>Shared/libevaluation_interop_api.h
```

### `evaluation-js`

Module which only targets nodejs for optimizing bundle size and evaluation speed and consistency. The generated javascript is completely stateless, and takes and returns `dynamic` javascript objects/arrays in the `evaluate` function.

```kotlin
fun evaluate(rules: dynamic, user: dynamic): dynamic
```
