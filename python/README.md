# Python Evaluation Interop

This package is currently a proof-of-concept for running the 
evaluation-interop module as a shared library in python utilizing the CFFI package.

## Install dependencies

(Assuming python 3.9 installed)

1. Install CFFI via pip
   ```
   pip install cffi
   ```

## Setup & Run Proof-of-concept

(Assuming macosX64)

1. Build the `evaluation-interop` shared library. From the root `experimentation-evaluation` directory:
   ```
   ./gradlew evaluation-interop:build
   ```
2. Copy the shared library into `/usr/local/lib`:
   ```
   sudo cp evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop.dylib /usr/local/lib
   ```
3. Copy the header file to the `python` directory:
   ```
   cp evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop_api.h python 
   ```
4. Change to `python` directory and run `setup.py`:
   ```
   cd python
   python setup.py
   ```
5. Run the proof-of-concept python file to run an evaluation:
   ```
   python main.py
   ```
