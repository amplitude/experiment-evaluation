# C Demo

This is a demo of running evaluations in C using the shared library outputs.

## Build

(assuming macosX64)

Build the shared library
```
../gradlew assemble
```

Copy header and shared library into this directory
```
cp ../evaluation-interop/build/bin/macosX64/releaseShared/libevaluation_interop_api.h .
cp ../evaluation-interop/build/bin/macosX64/releaseShared/libevaluation_interop.dylib .
```

Make the demo binary
```
make
```

## Run

```
./demo
```

