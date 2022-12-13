(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{673:function(e,s,a){"use strict";a.r(s);var n=a(19),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"python-native-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-native-dependencies"}},[e._v("#")]),e._v(" Python Native Dependencies")]),e._v(" "),s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),s("p",[e._v("python3.7 or later is preferred.")]),e._v(" "),s("p",[e._v("You have to install Thrift (0.11.0 or later) to compile our thrift file into python code. Below is the official\ntutorial of installation:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://thrift.apache.org/docs/install/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("ul",[s("li",[e._v("Option 1: pip install")])]),e._v(" "),s("p",[e._v("You can find the Apache IoTDB Python Client API package on https://pypi.org/project/apache-iotdb/.")]),e._v(" "),s("p",[e._v("The download command is:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("pip install apache-iotdb\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Option 2: basic usage of thrift")])]),e._v(" "),s("p",[e._v("Optionally, if you know the basic usage of thrift, you can download the thrift source file in\n"),s("code",[e._v("thrift\\src\\main\\thrift\\rpc.thrift")]),e._v(", and simply run "),s("code",[e._v("thrift -gen py -out ./target/iotdb rpc.thrift")]),e._v("\nto generate the Python library.")]),e._v(" "),s("h3",{attrs:{id:"coding-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coding-example"}},[e._v("#")]),e._v(" Coding Example")]),e._v(" "),s("p",[e._v("We provided an example of how to use the thrift library to connect to IoTDB in "),s("code",[e._v("client-py/src /SessionExample.py")]),e._v(", please read it carefully before you write your own code.")]),e._v(" "),s("h2",{attrs:{id:"c-native-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-native-interfaces"}},[e._v("#")]),e._v(" C++ Native Interfaces")]),e._v(" "),s("h3",{attrs:{id:"dependencies-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-2"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),s("ul",[s("li",[e._v("Java 8+")]),e._v(" "),s("li",[e._v("Maven 3.5+")]),e._v(" "),s("li",[e._v("Flex")]),e._v(" "),s("li",[e._v("Bison 2.7+")]),e._v(" "),s("li",[e._v("Boost 1.56+")]),e._v(" "),s("li",[e._v("OpenSSL 1.0+")]),e._v(" "),s("li",[e._v("GCC 5.5.0+")])]),e._v(" "),s("h3",{attrs:{id:"installation-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-2"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v('The compilation of CPP client requires the module "compile-tools" to be built first.\n"compile-tools" is mainly responsible for building Thrift libraries locally.')]),e._v(" "),s("h4",{attrs:{id:"build-thrift-on-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-macos"}},[e._v("#")]),e._v(" Build Thrift on MacOS")]),e._v(" "),s("ul",[s("li",[e._v("Bison")])]),e._v(" "),s("p",[e._v("Bison 2.3 is preinstalled on OSX, but this version is too low.\nWhen building Thrift with Bison 2.3, the following error would pop out:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("invalid directive: '%code'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("For such case, please update "),s("code",[e._v("Bison")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("brew install bison\t\t\nbrew link bison --force\t\t\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Then, you need to tell the OS where the new bison is.")]),e._v(" "),s("p",[e._v("For Bash users:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("echo 'export PATH=\"/usr/local/opt/bison/bin:$PATH\"' >> ~/.bash_profile\t\t\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("For zsh users:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("echo 'export PATH=\"/usr/local/opt/bison/bin:$PATH\"' >> ~/.zshrc\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Boost")])]),e._v(" "),s("p",[e._v("Please make sure a relative new version of Boost is ready on your machine.\nIf no Boost available, install the latest version of Boost:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("brew install boost\nbrew link boost\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("OpenSSL")])]),e._v(" "),s("p",[e._v('Make sure the Openssl libraries has been install on your Mac.\nThe default Openssl include file search path is "/usr/local/opt/openssl/include".\nIf Openssl header files can not be found when building Thrift, please add option')]),e._v(" "),s("p",[s("code",[e._v('-Dopenssl.include.dir=""')])]),e._v(" "),s("p",[e._v("to specify the OpenSSL installation directory on your Mac.")]),e._v(" "),s("h4",{attrs:{id:"build-thrift-on-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-linux"}},[e._v("#")]),e._v(" Build Thrift on Linux")]),e._v(" "),s("p",[e._v("Ubuntu 20:")]),e._v(" "),s("p",[e._v("To install all dependencies, run:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get install gcc-9 g++-9 libstdc++-9-dev bison flex libboost-all-dev libssl-dev zlib1g-dev\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("CentOS 7.x:")]),e._v(" "),s("p",[e._v("In CentOS 7.x, Some packages can be installed using Yum:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum install bison flex openssl-devel\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The version of gcc and boost installed by yum is too low, therefore you should compile or download these binary packages by yourself.")]),e._v(" "),s("h4",{attrs:{id:"build-thrift-on-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-windows"}},[e._v("#")]),e._v(" Build Thrift on Windows")]),e._v(" "),s("p",[e._v("Make sure a complete Windows C++ building environment is prepared on your machine.\nMSVC, MinGW... are supported.")]),e._v(" "),s("p",[e._v("If you are using MS Visual Studio, remember to install Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW).")]),e._v(" "),s("ul",[s("li",[e._v("Flex and Bison\nWindows Flex and Bison could be downloaded from SourceForge: https://sourceforge.net/projects/winflexbison/")])]),e._v(" "),s("p",[e._v('After downloaded, please rename the executables to flex.exe and bison.exe and add them to "PATH" environment variables.')]),e._v(" "),s("ul",[s("li",[e._v("Boost\nFor Boost, please download from the official website: https://www.boost.org/users/download/")])]),e._v(" "),s("p",[e._v("Then build Boost by executing bootstrap.bat and b2.exe.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bootstrap.bat\n.\\b2.exe\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("To help CMake find your Boost libraries on windows, you should set "),s("code",[e._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}")]),e._v("\nto your mvn build command.")]),e._v(" "),s("h4",{attrs:{id:"cmake-generator-on-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmake-generator-on-windows"}},[e._v("#")]),e._v(" Cmake generator on Windows")]),e._v(" "),s("p",[e._v("There is a long list of supported Cmake generators on Windows environment.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.\n                                 Use -A option to specify architecture.\n  Visual Studio 15 2017 [arch] = Generates Visual Studio 2017 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 14 2015 [arch] = Generates Visual Studio 2015 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 12 2013 [arch] = Generates Visual Studio 2013 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 11 2012 [arch] = Generates Visual Studio 2012 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 10 2010 [arch] = Generates Visual Studio 2010 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Visual Studio 9 2008 [arch]  = Generates Visual Studio 2008 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Borland Makefiles            = Generates Borland makefiles.\n* NMake Makefiles              = Generates NMake makefiles.\n  NMake Makefiles JOM          = Generates JOM makefiles.\n  MSYS Makefiles               = Generates MSYS makefiles.\n  MinGW Makefiles              = Generates a make file for use with\n                                 mingw32-make.\n  Unix Makefiles               = Generates standard UNIX makefiles.\n  Green Hills MULTI            = Generates Green Hills MULTI files\n                                 (experimental, work-in-progress).\n  Ninja                        = Generates build.ninja files.\n  Ninja Multi-Config           = Generates build-<Config>.ninja files.\n  Watcom WMake                 = Generates Watcom WMake makefiles.\n  CodeBlocks - MinGW Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project fi\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br")])]),s("p",[e._v("the list is available via command: "),s("code",[e._v("cmake --help")])]),e._v(" "),s("p",[e._v('When building client-cpp project, use -Dcmake.generator="" option to specify a Cmake generator.\nE.g., '),s("code",[e._v('mvn package -Dcmake.generator="Visual Studio 15 2017 [arch]"')])]),e._v(" "),s("h4",{attrs:{id:"building-c-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-c-client"}},[e._v("#")]),e._v(" Building C++ Client")]),e._v(" "),s("p",[e._v('To compile cpp client, add "-P compile-cpp" option to maven build command.')]),e._v(" "),s("p",[e._v('The compiling requires the module "compile-tools" to be built first.')]),e._v(" "),s("h4",{attrs:{id:"compile-and-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-test"}},[e._v("#")]),e._v(" Compile and Test:")]),e._v(" "),s("p",[s("code",[e._v("mvn package -P compile-cpp -pl example/client-cpp-example -am -DskipTest")])]),e._v(" "),s("p",[e._v("To compile on Windows, please install Boost first and add following Maven settings:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}` \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("e.g.,")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mvn package -P compile-cpp -pl client-cpp,server,example/client-cpp-example -am \n-D"boost.include.dir"="D:\\boost_1_75_0" -D"boost.library.dir"="D:\\boost_1_75_0\\stage\\lib" -DskipTests\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v('If the compilation finishes successfully, the packaged zip file will be placed under\n"client-cpp/target/client-cpp-${project.version}-cpp-${os}.zip".')]),e._v(" "),s("p",[e._v("On Mac machines, the hierarchy of the package should look like this:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\n+-- client\n|   +-- include\n|       +-- Session.h\n|       +-- TSIService.h\n|       +-- rpc_types.h\n|       +-- rpc_constants.h\n|       +-- thrift\n|           +-- thrift_headers...\n|   +-- lib\n|       +-- libiotdb_session.dylib\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h3",{attrs:{id:"q-a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),s("h4",{attrs:{id:"on-mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-mac"}},[e._v("#")]),e._v(" on Mac")]),e._v(" "),s("p",[e._v("If errors occur when compiling thrift source code, try to downgrade your xcode-commandline from 12 to 11.5")]),e._v(" "),s("p",[e._v("see https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087")]),e._v(" "),s("h4",{attrs:{id:"on-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-windows"}},[e._v("#")]),e._v(" on Windows")]),e._v(" "),s("p",[e._v('When Building Thrift and downloading packages via "wget", a possible annoying issue may occur with\nerror message looks like:')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Failed to delete cached file C:\\Users\\Administrator\\.m2\\repository\\.cache\\download-maven-plugin\\index.ser\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Possible fixes:")]),e._v(" "),s("ul",[s("li",[e._v('Try to delete the ".m2\\repository\\.cache" directory and try again.')]),e._v(" "),s("li",[e._v('Add "<skipCache>true</skipCache>" configuration to the download-maven-plugin maven phase that complains this error.')])])])}),[],!1,null,null,null);s.default=t.exports}}]);