import ctypes
import os
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

SHARED_LIBRARY_PATH = os.path.join(
    ROOT_DIR,
    '../evaluation-core/build/bin/macosX64/debugShared/libevaluation_interop.dylib')

if __name__ == '__main__':
    clib = ctypes.CDLL(SHARED_LIBRARY_PATH)
    lib = clib.libevaluation_core_symbols()
    # client = lib.kotlin.root.com.amplitude.experiment.evaluation
    print("yes")

