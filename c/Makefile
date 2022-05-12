demo:
	echo "Run one of the following make commands based on your specific OS and architecture:"
	echo "\tmake macosX64\n\tmake macosArm64\n\tmake linuxX64\n\tmake linuxArm64"

clean:
	rm -f demo

macosX64:
	clang main.c lib/macosX64/libevaluation_interop.dylib -I./lib/macosX64 -o demo

macosArm64:
	clang main.c lib/macosArm64/libevaluation_interop.dylib -I./lib/macosX64 -o demo

linuxX64:
	gcc main.c lib/linuxX64/libevaluation_interop.so -I./lib/macosX64 -o demo

linuxArm64:
	gcc main.c lib/linuxArm64/libevaluation_interop.so -I./lib/macosX64 -o demo

release:
	# macosX64
	cp ../evaluation-interop/build/bin/macosX64/releaseShared/libevaluation_interop_api.h lib/macosX64
	cp ../evaluation-interop/build/bin/macosX64/releaseShared/libevaluation_interop.dylib lib/macosX64
	# macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/releaseShared/libevaluation_interop_api.h lib/macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/releaseShared/libevaluation_interop.dylib lib/macosArm64
	# linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/releaseShared/libevaluation_interop_api.h lib/linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/releaseShared/libevaluation_interop.so lib/linuxX64
	# linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/releaseShared/libevaluation_interop_api.h lib/linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/releaseShared/libevaluation_interop.so lib/linuxArm64

debug:
	# macosX64
	cp ../evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop_api.h lib/macosX64
	cp ../evaluation-interop/build/bin/macosX64/debugShared/libevaluation_interop.dylib lib/macosX64
	# macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/debugShared/libevaluation_interop_api.h lib/macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/debugShared/libevaluation_interop.dylib lib/macosArm64
	# linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/debugShared/libevaluation_interop_api.h lib/linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/debugShared/libevaluation_interop.so lib/linuxX64
	# linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/debugShared/libevaluation_interop_api.h lib/linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/debugShared/libevaluation_interop.so lib/linuxArm64
