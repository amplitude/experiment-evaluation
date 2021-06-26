
demo:
	go build -o demo cmd/demo/main.go

clean:
	rm demo

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
