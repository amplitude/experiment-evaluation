Pod::Spec.new do |spec|
    spec.name                     = 'evaluation_interop'
    spec.version                  = '0.0.1'
    spec.homepage                 = 'https://github.com/amplitude/experiment-evaluation'
    spec.source = { :http => "https://github.com/amplitude/experiment-evaluation/archive/#{s.version}.zip", :type => "zip", :flatten => true }
    spec.author = { "Amplitude" => "experiment@amplitude.com" }
    spec.license = { :type => "MIT" }
    spec.summary                  = 'Native evaluation interoperability library for Amplitude Experiment'

    spec.static_framework         = true
    spec.vendored_frameworks      = "build/cocoapods/framework/EvaluationInterop.framework"
    spec.libraries                = "c++"
    spec.module_name              = "#{spec.name}_umbrella"

    spec.ios.deployment_target = '10.0'
    spec.osx.deployment_target = '10.10'
    spec.tvos.deployment_target = '9.0'
    spec.watchos.deployment_target = '3.0'

                

    spec.pod_target_xcconfig = {
        'KOTLIN_TARGET[sdk=iphonesimulator*]' => 'ios_x64',
        'KOTLIN_TARGET[sdk=iphoneos*]' => 'ios_arm',
        'KOTLIN_TARGET[sdk=watchsimulator*]' => 'watchos_x64',
        'KOTLIN_TARGET[sdk=watchos*]' => 'watchos_arm',
        'KOTLIN_TARGET[sdk=appletvsimulator*]' => 'tvos_x64',
        'KOTLIN_TARGET[sdk=appletvos*]' => 'tvos_arm64',
        'KOTLIN_TARGET[sdk=macosx*]' => 'macos_x64'
    }

    spec.script_phases = [
        {
            :name => 'Build evaluation_interop',
            :execution_position => :before_compile,
            :shell_path => '/bin/sh',
            :script => <<-SCRIPT
                set -ev
                REPO_ROOT=/Users/brian.giori/dev/experiment-evaluation/evaluation-interop
                "$REPO_ROOT/../gradlew" -p "$REPO_ROOT" :evaluation-interop:syncFramework \
                    -Pkotlin.native.cocoapods.target=$KOTLIN_TARGET \
                    -Pkotlin.native.cocoapods.configuration=$CONFIGURATION \
                    -Pkotlin.native.cocoapods.cflags="$OTHER_CFLAGS" \
                    -Pkotlin.native.cocoapods.paths.headers="$HEADER_SEARCH_PATHS" \
                    -Pkotlin.native.cocoapods.paths.frameworks="$FRAMEWORK_SEARCH_PATHS"
            SCRIPT
        }
    ]
end