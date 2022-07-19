demo:
	echo "Run one of the following make commands based on your specific OS and architecture:"
	echo "\tmake macosX64\n\tmake macosArm64\n\tmake linuxX64\n\tmake linuxArm64"

clean:
	rm -f demo

macosX64:
	clang main.c -framework Foundation -lstdc++ lib/macosX64/libevaluation_interop.a -I./lib/macosX64 -o demo

macosArm64:
	clang main.c -framework Foundation -lstdc++ lib/macosArm64/libevaluation_interop.a -I./lib/macosArm64 -o demo

linuxX64:
	gcc main.c lib/linuxX64/libevaluation_interop.a -I./lib/linuxX64 -o demo -lstdc++ -lpthread -lc -ldl -lm

linuxArm64:
	gcc main.c lib/linuxArm64/libevaluation_interop.a -I./lib/linuxArm64 -o demo -lstdc++ -lpthread -lc -ldl -lm

docker:
	docker build -t ceval . --progress plain
	docker run -it --rm --name ceval-run ceval

release:
	# macosX64
	cp ../evaluation-interop/build/bin/macosX64/releaseStatic/libevaluation_interop_api.h lib/macosX64
	cp ../evaluation-interop/build/bin/macosX64/releaseStatic/libevaluation_interop.a lib/macosX64
	# macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/releaseStatic/libevaluation_interop_api.h lib/macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/releaseStatic/libevaluation_interop.a lib/macosArm64
	# linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/releaseStatic/libevaluation_interop_api.h lib/linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/releaseStatic/libevaluation_interop.a lib/linuxX64
	# linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/releaseStatic/libevaluation_interop_api.h lib/linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/releaseStatic/libevaluation_interop.a lib/linuxArm64

debug:
	# macosX64
	cp ../evaluation-interop/build/bin/macosX64/debugStatic/libevaluation_interop_api.h lib/macosX64
	cp ../evaluation-interop/build/bin/macosX64/debugStatic/libevaluation_interop.a lib/macosX64
	# macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/debugStatic/libevaluation_interop_api.h lib/macosArm64
	cp ../evaluation-interop/build/bin/macosArm64/debugStatic/libevaluation_interop.a lib/macosArm64
	# linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/debugStatic/libevaluation_interop_api.h lib/linuxX64
	cp ../evaluation-interop/build/bin/linuxX64/debugStatic/libevaluation_interop.a lib/linuxX64
	# linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/debugStatic/libevaluation_interop_api.h lib/linuxArm64
	cp ../evaluation-interop/build/bin/linuxArm64/debugStatic/libevaluation_interop.a lib/linuxArm64
