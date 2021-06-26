#OS := $(shell uname)
#ARCH := $(shell uname -m)
#
#ifeq ($(OS), Darwin)
#	LIB_EXT = dylib
#	ifeq ($(ARCH), x86_64)
#		ARCH = macosX64
#	else
#		ARCH = macosArm64
#	endif
#endif
#
#ifeq ($(OS), Linux)
#	LIB_EXT = so
#	ifeq ($(ARCH), x86_64)
#		ARCH = linuxX64
#	else
#		ARCH = linuxArm64
#	endif
#endif


debug:
	# macosX64
	cp ../evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop_api.h internal/evaluation/lib/macosX64/
	cp ../evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop.dylib internal/evaluation/lib/macosX64/
	# linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/debugShared/libevaluation_interop_api.h internal/evaluation/lib/linuxX64/
	cp ../evaluation-interop/build/bin/linuxX64/debugShared/libevaluation_interop.so internal/evaluation/lib/linuxX64/
	# linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/debugShared/libevaluation_interop_api.h internal/evaluation/lib/linuxArm64/
	cp ../evaluation-interop/build/bin/linuxArm64/debugShared/libevaluation_interop.so internal/evaluation/lib/linuxArm64/

release:
	# macosX64
	cp ../evaluation-interop/build/bin/macosX64/releaseShared/libevaluation_interop_api.h internal/evaluation/lib/macosX64/
	cp ../evaluation-interop/build/bin/macosX64/releaseShared/libevaluation_interop.dylib internal/evaluation/lib/macosX64/
	# linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/releaseShared/libevaluation_interop_api.h internal/evaluation/lib/linuxX64/
	cp ../evaluation-interop/build/bin/linuxX64/releaseShared/libevaluation_interop.so internal/evaluation/lib/linuxX64/
	# linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/releaseShared/libevaluation_interop_api.h internal/evaluation/lib/linuxArm64/
	cp ../evaluation-interop/build/bin/linuxArm64/releaseShared/libevaluation_interop.so internal/evaluation/lib/linuxArm64/
