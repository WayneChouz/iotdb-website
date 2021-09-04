(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{636:function(s,e,a){"use strict";a.r(e);var t=a(71),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"c-native-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-native-api"}},[s._v("#")]),s._v(" C++ Native API")]),s._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[s._v("#")]),s._v(" Dependencies")]),s._v(" "),a("ul",[a("li",[s._v("Java 8+")]),s._v(" "),a("li",[s._v("Maven 3.5+")]),s._v(" "),a("li",[s._v("Flex")]),s._v(" "),a("li",[s._v("Bison 2.7+")]),s._v(" "),a("li",[s._v("Boost")]),s._v(" "),a("li",[s._v("OpenSSL 1.0+")])]),s._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),a("p",[s._v('The compilation of CPP client requires the module "compile-tools" to be built first.\n"compile-tools" is mainly responsible for building Thrift libraries locally.')]),s._v(" "),a("h4",{attrs:{id:"build-thrift-on-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-macos"}},[s._v("#")]),s._v(" Build Thrift on MacOS")]),s._v(" "),a("ul",[a("li",[s._v("Bison")])]),s._v(" "),a("p",[s._v("Bison 2.3 is preinstalled on OSX, but this version is too low.")]),s._v(" "),a("p",[s._v("When building Thrift with Bison 2.3, the following error would pop out:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("invalid directive: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%code'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("For such case, please update "),a("code",[s._v("Bison")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install bison\t\t\nbrew link bison --force\t\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Then, you need to tell the OS where the new bison is.")]),s._v(" "),a("p",[s._v("For Bash users:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"/usr/local/opt/bison/bin:$PATH\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile\t\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("For zsh users:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"/usr/local/opt/bison/bin:$PATH\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Boost")])]),s._v(" "),a("p",[s._v("Please make sure a relative new version of Boost is ready on your machine.")]),s._v(" "),a("p",[s._v("If no Boost available, install the latest version of Boost:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" boost\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" boost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("OpenSSL")])]),s._v(" "),a("p",[s._v('Make sure the Openssl libraries has been install on your Mac.\nThe default Openssl include file search path is "/usr/local/opt/openssl/include".\nIf Openssl header files can not be found when building Thrift, please add option')]),s._v(" "),a("p",[a("code",[s._v('-Dopenssl.include.dir=""')])]),s._v(" "),a("p",[s._v("to specify the OpenSSL installation directory on your Mac.")]),s._v(" "),a("h4",{attrs:{id:"build-thrift-on-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-linux"}},[s._v("#")]),s._v(" Build Thrift on Linux")]),s._v(" "),a("p",[s._v("To install all dependencies, run:")]),s._v(" "),a("p",[s._v("Debian/Ubuntu:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc g++ bison flex libboost-all-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("CentOS:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc g++ bison flex boost-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"build-thrift-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-windows"}},[s._v("#")]),s._v(" Build Thrift on Windows")]),s._v(" "),a("p",[s._v("Make sure a complete Windows C++ building environment is prepared on your machine.\nMSVC, MinGW... are supported.")]),s._v(" "),a("p",[s._v("If you are using MS Visual Studio, remember to install Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW).")]),s._v(" "),a("ul",[a("li",[s._v("Flex and Bison\nWindows Flex and Bison could be downloaded from SourceForge: https://sourceforge.net/projects/winflexbison/")])]),s._v(" "),a("p",[s._v('After downloaded, please rename the executables to flex.exe and bison.exe and add them to "PATH" environment variables.')]),s._v(" "),a("ul",[a("li",[s._v("Boost\nFor Boost, please download from the official website: https://www.boost.org/users/download/")])]),s._v(" "),a("p",[s._v("Then build Boost by executing bootstrap.bat and b2.exe.")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("bootstrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bat\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\b2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("To help CMake find your Boost libraries on windows, you should set "),a("code",[s._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}")]),s._v("\nto your mvn build command.")]),s._v(" "),a("h4",{attrs:{id:"cmake-generator-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake-generator-on-windows"}},[s._v("#")]),s._v(" Cmake generator on Windows")]),s._v(" "),a("p",[s._v("There is a long list of supported Cmake generators on Windows environment.")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.\n                                 Use -A option to specify architecture.\n  Visual Studio 15 2017 [arch] = Generates Visual Studio 2017 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 14 2015 [arch] = Generates Visual Studio 2015 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 12 2013 [arch] = Generates Visual Studio 2013 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 11 2012 [arch] = Generates Visual Studio 2012 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 10 2010 [arch] = Generates Visual Studio 2010 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Visual Studio 9 2008 [arch]  = Generates Visual Studio 2008 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Borland Makefiles            = Generates Borland makefiles.\n* NMake Makefiles              = Generates NMake makefiles.\n  NMake Makefiles JOM          = Generates JOM makefiles.\n  MSYS Makefiles               = Generates MSYS makefiles.\n  MinGW Makefiles              = Generates a make file for use with\n                                 mingw32-make.\n  Unix Makefiles               = Generates standard UNIX makefiles.\n  Green Hills MULTI            = Generates Green Hills MULTI files\n                                 (experimental, work-in-progress).\n  Ninja                        = Generates build.ninja files.\n  Ninja Multi-Config           = Generates build-<Config>.ninja files.\n  Watcom WMake                 = Generates Watcom WMake makefiles.\n  CodeBlocks - MinGW Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project files.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("the list is available via command: "),a("code",[s._v("cmake --help")])]),s._v(" "),a("p",[s._v('When building client-cpp project, use -Dcmake.generator="" option to specify a Cmake generator.\nE.g., '),a("code",[s._v('mvn package -Dcmake.generator="Visual Studio 15 2017 [arch]"')])]),s._v(" "),a("h4",{attrs:{id:"building-c-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-c-client"}},[s._v("#")]),s._v(" Building C++ Client")]),s._v(" "),a("p",[s._v('To compile cpp client, add "-P compile-cpp" option to maven build command.')]),s._v(" "),a("p",[s._v('The compiling requires the module "compile-tools" to be built first.')]),s._v(" "),a("h4",{attrs:{id:"compile-and-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-test"}},[s._v("#")]),s._v(" Compile and Test")]),s._v(" "),a("p",[a("code",[s._v("mvn package -P compile-cpp -pl example/client-cpp-example -am -DskipTest")])]),s._v(" "),a("p",[s._v("To compile on Windows, please install Boost first and add following Maven settings:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-Dboost.include.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your boost header folder}")]),s._v(" -Dboost.library.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your boost lib (stage) folder}")]),s._v("` \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("e.g.,")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mvn package -P compile-cpp -pl client-cpp,server,example/client-cpp-example -am \n-D"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"boost.include.dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('oost_1_75_0"')]),s._v(" -D"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"boost.library.dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('oost_1_75_0\\stage\\lib"')]),s._v(" -DskipTests\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v('If the compilation finishes successfully, the packaged zip file will be placed under\n"client-cpp/target/client-cpp-0.13.0-SNAPSHOT-cpp-${os}.zip".')]),s._v(" "),a("p",[s._v("On Mac machines, the hierarchy of the package should look like this:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n+-- client\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   +-- include\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- Session.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- TSIService.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- rpc_types.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- rpc_constants.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- thrift\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           +-- thrift_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   +-- lib\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- libiotdb_session.dylib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[s._v("#")]),s._v(" Q&A")]),s._v(" "),a("h4",{attrs:{id:"on-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-mac"}},[s._v("#")]),s._v(" on Mac")]),s._v(" "),a("p",[s._v("If errors occur when compiling thrift source code, try to downgrade your xcode-commandline from 12 to 11.5")]),s._v(" "),a("p",[s._v("see https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087")]),s._v(" "),a("h4",{attrs:{id:"on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-windows"}},[s._v("#")]),s._v(" on Windows")]),s._v(" "),a("p",[s._v('When Building Thrift and downloading packages via "wget", a possible annoying issue may occur with\nerror message looks like:')]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Failed to delete cached "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Administrator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".m2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("download-maven-plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index.ser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Possible fixes:")]),s._v(" "),a("ul",[a("li",[s._v('Try to delete the ".m2\\repository\\.cache" directory and try again.')]),s._v(" "),a("li",[s._v('Add "<skipCache>true</skipCache>" configuration to the download-maven-plugin maven phase that complains this error.')])])])}),[],!1,null,null,null);e.default=n.exports}}]);