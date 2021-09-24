require 'ffi'

module EvaluationInterop
  extend FFI::Library

  ffi_lib '../evaluation-interop/build/bin/sharedDebug/libevaluation_interop.dylib'
  attach_function :concat, [:string, :string, :pointer], :void
end