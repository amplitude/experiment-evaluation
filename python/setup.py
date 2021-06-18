from cffi import FFI

ffibuilder = FFI()

# cdef() expects a single string declaring the C types, functions and
# globals needed to use the shared object. It must be in valid C syntax.
ffibuilder.cdef("""
typedef _Bool           libevaluation_interop_KBoolean;
typedef unsigned short     libevaluation_interop_KChar;
typedef signed char        libevaluation_interop_KByte;
typedef short              libevaluation_interop_KShort;
typedef int                libevaluation_interop_KInt;
typedef long long          libevaluation_interop_KLong;
typedef unsigned char      libevaluation_interop_KUByte;
typedef unsigned short     libevaluation_interop_KUShort;
typedef unsigned int       libevaluation_interop_KUInt;
typedef unsigned long long libevaluation_interop_KULong;
typedef float              libevaluation_interop_KFloat;
typedef double             libevaluation_interop_KDouble;
typedef void*              libevaluation_interop_KNativePtr;
struct libevaluation_interop_KType;
typedef struct libevaluation_interop_KType libevaluation_interop_KType;

typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Byte;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Short;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Int;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Long;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Float;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Double;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Char;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Boolean;
typedef struct {
  libevaluation_interop_KNativePtr pinned;
} libevaluation_interop_kref_kotlin_Unit;


typedef struct {
  /* Service functions. */
  void (*DisposeStablePointer)(libevaluation_interop_KNativePtr ptr);
  void (*DisposeString)(const char* string);
  libevaluation_interop_KBoolean (*IsInstance)(libevaluation_interop_KNativePtr ref, const libevaluation_interop_KType* type);
  libevaluation_interop_kref_kotlin_Byte (*createNullableByte)(libevaluation_interop_KByte);
  libevaluation_interop_kref_kotlin_Short (*createNullableShort)(libevaluation_interop_KShort);
  libevaluation_interop_kref_kotlin_Int (*createNullableInt)(libevaluation_interop_KInt);
  libevaluation_interop_kref_kotlin_Long (*createNullableLong)(libevaluation_interop_KLong);
  libevaluation_interop_kref_kotlin_Float (*createNullableFloat)(libevaluation_interop_KFloat);
  libevaluation_interop_kref_kotlin_Double (*createNullableDouble)(libevaluation_interop_KDouble);
  libevaluation_interop_kref_kotlin_Char (*createNullableChar)(libevaluation_interop_KChar);
  libevaluation_interop_kref_kotlin_Boolean (*createNullableBoolean)(libevaluation_interop_KBoolean);
  libevaluation_interop_kref_kotlin_Unit (*createNullableUnit)(void);

  struct {
    struct {
      const char* (*evaluate)(const char* rules, const char* user);
    } root;
  } kotlin;
} libevaluation_interop_ExportedSymbols;
extern libevaluation_interop_ExportedSymbols* libevaluation_interop_symbols(void);
""")

# set_source() gives the name of the python extension module to
# produce, and some C source code as a string.  This C code needs
# to make the declarated functions, types and globals available,
# so it is often just the "#include".
ffibuilder.set_source(
    "evaluation_cffi",
    """
    #include "libevaluation_interop_api.h"
    """,
    libraries=['evaluation_interop']  # library name, for the linker
)

if __name__ == "__main__":
    ffibuilder.compile(verbose=True)
