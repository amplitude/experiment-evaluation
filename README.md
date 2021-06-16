# experiment-evaluation

Proof of concept for building a multiplatform (JVM, Node.js, Native) implementation of the experiment evaluation engine.
The purpose of this library is to share the same evaluation code across all local-evaluation experiment SDKs.

The current implementation supports:
* JVM
  * Publish: `.jar`
* Node.js
  * Publish: `npm`
* Native
  * macosX64
    * Publish: `.dylib`, `.h`
  * linuxX64
    * Publish: `.so`, `.h`
  * linuxArm64
    * Publish: `.so`, `.h`
  
The native C shared (dynamic) libraries can be used with other languages (Python, Ruby, Go) to execute the
Evaluation code from a wrapping SDK.

## Public Interface

To make the code easy to interoperate with, the public API has been reduced to a single function which takes string 
inputs and outputs strings.

More on this TODO.

