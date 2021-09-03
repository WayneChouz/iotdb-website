(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{952:function(s,e,a){"use strict";a.r(e);var t=a(70),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"c-原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-原生接口"}},[s._v("#")]),s._v(" C++ 原生接口")]),s._v(" "),a("h3",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("ul",[a("li",[s._v("Java 8+")]),s._v(" "),a("li",[s._v("Maven 3.5+")]),s._v(" "),a("li",[s._v("Flex")]),s._v(" "),a("li",[s._v("Bison 2.7+")]),s._v(" "),a("li",[s._v("Boost")]),s._v(" "),a("li",[s._v("OpenSSL 1.0+")])]),s._v(" "),a("h3",{attrs:{id:"安装方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装方法"}},[s._v("#")]),s._v(" 安装方法")]),s._v(" "),a("p",[s._v("编译 C++客户端之前首先需要本地编译 Thrift 库，compile-tools 模块负责编译 Thrift，之后再编译 client-cpp。")]),s._v(" "),a("h4",{attrs:{id:"在-mac-上编译-thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-mac-上编译-thrift"}},[s._v("#")]),s._v(" 在 Mac 上编译 Thrift")]),s._v(" "),a("ul",[a("li",[s._v("Bison")])]),s._v(" "),a("p",[s._v("Mac 环境下预安装了 Bison 2.3 版本，但该版本过低不能够用来编译 Thrift。使用 Bison 2.3 版本是会报以下错误：")]),s._v(" "),a("p",[a("code",[s._v("invalid directive: '%code'")])]),s._v(" "),a("p",[s._v("使用下面 brew 命令更新 bison 版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bison     \nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" bison --force        \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("添加环境变量：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=\"/usr/local/opt/bison/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile     \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Boost")])]),s._v(" "),a("p",[s._v("确保安装较新的 Boost 版本：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" boost\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" boost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("OpenSSL")])]),s._v(" "),a("p",[s._v('确保 openssl 库已安装，默认的 openssl 头文件路径为"/usr/local/opt/openssl/include"\n如果在编译 Thrift 过程中出现找不到 openssl 的错误，尝试添加')]),s._v(" "),a("p",[a("code",[s._v('-Dopenssl.include.dir=""')])]),s._v(" "),a("h4",{attrs:{id:"在-linux-上编译-thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-linux-上编译-thrift"}},[s._v("#")]),s._v(" 在 Linux 上编译 Thrift")]),s._v(" "),a("p",[s._v("Linux 下需要确保 g++已被安装。")]),s._v(" "),a("p",[s._v("一条命令安装所有依赖库：")]),s._v(" "),a("p",[s._v("Debian/Ubuntu:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc g++ bison flex libboost-all-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("CentOS:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc g++ bison flex boost-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"在-windows-上编译-thrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-上编译-thrift"}},[s._v("#")]),s._v(" 在 Windows 上编译 Thrift")]),s._v(" "),a("p",[s._v("保证你的 Windows 系统已经搭建好了完整的 C/C++的编译构建环境。可以是 MSVC，MinGW 等。")]),s._v(" "),a("p",[s._v("如使用 MS Visual Studio，在安装时需要勾选 Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW)。")]),s._v(" "),a("ul",[a("li",[s._v("Flex 和 Bison")])]),s._v(" "),a("p",[s._v("Windows 版的 Flex 和 Bison 可以从 SourceForge 下载：https://sourceforge.net/projects/winflexbison/")]),s._v(" "),a("p",[s._v("下载后需要将可执行文件重命名为 flex.exe 和 bison.exe 以保证编译时能够被找到，添加可执行文件的目录到 PATH 环境变量中。")]),s._v(" "),a("ul",[a("li",[s._v("Boost")])]),s._v(" "),a("p",[s._v("Boost 官网下载新版本 Boost: https://www.boost.org/users/download/")]),s._v(" "),a("p",[s._v("依次执行 bootstrap.bat 和 b2.exe，本地编译 boost")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("bootstrap.bat\n."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("b2.exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("为了帮助 CMake 本地安装好的 Boost，在编译 client-cpp 的 mvn 命令中需添加：")]),s._v(" "),a("p",[a("code",[s._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}")])]),s._v(" "),a("h4",{attrs:{id:"cmake-生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake-生成器"}},[s._v("#")]),s._v(" CMake 生成器")]),s._v(" "),a("p",[s._v("CMake 需要根据不同编译平台使用不同的生成器。CMake 支持的生成器列表如下 ("),a("code",[s._v("cmake --help")]),s._v("的结果）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.\n                                 Use -A option to specify architecture.\n  Visual Studio 15 2017 [arch] = Generates Visual Studio 2017 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 14 2015 [arch] = Generates Visual Studio 2015 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 12 2013 [arch] = Generates Visual Studio 2013 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 11 2012 [arch] = Generates Visual Studio 2012 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 10 2010 [arch] = Generates Visual Studio 2010 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Visual Studio 9 2008 [arch]  = Generates Visual Studio 2008 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Borland Makefiles            = Generates Borland makefiles.\n* NMake Makefiles              = Generates NMake makefiles.\n  NMake Makefiles JOM          = Generates JOM makefiles.\n  MSYS Makefiles               = Generates MSYS makefiles.\n  MinGW Makefiles              = Generates a make file for use with\n                                 mingw32-make.\n  Unix Makefiles               = Generates standard UNIX makefiles.\n  Green Hills MULTI            = Generates Green Hills MULTI files\n                                 (experimental, work-in-progress).\n  Ninja                        = Generates build.ninja files.\n  Ninja Multi-Config           = Generates build-<Config>.ninja files.\n  Watcom WMake                 = Generates Watcom WMake makefiles.\n  CodeBlocks - MinGW Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project files.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v('编译 client-cpp 时的 mvn 命令中添加 -Dcmake.generator="" 选项来指定使用的生成器名称。\n'),a("code",[s._v('mvn package -Dcmake.generator="Visual Studio 15 2017 [arch]"')])]),s._v(" "),a("h4",{attrs:{id:"编译-c-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译-c-客户端"}},[s._v("#")]),s._v(" 编译 C++ 客户端")]),s._v(" "),a("p",[s._v('Maven 命令中添加"-P client-cpp" 选项编译 client-cpp 模块。client-cpp 需要依赖编译好的 thrift，即 compile-tools 模块。')]),s._v(" "),a("h4",{attrs:{id:"编译及测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译及测试"}},[s._v("#")]),s._v(" 编译及测试")]),s._v(" "),a("p",[s._v("完整的 C++客户端命令如下：")]),s._v(" "),a("p",[a("code",[s._v("mvn package -P compile-cpp -pl example/client-cpp-example -am -DskipTest")])]),s._v(" "),a("p",[s._v("注意在 Windows 下需提前安装好 Boost，并添加以下 Maven 编译选项：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-Dboost.include.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your boost header folder}")]),s._v(" -Dboost.library.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${your boost lib (stage) folder}")]),s._v("` \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mvn package -P compile-cpp -pl client-cpp,server,example/client-cpp-example -am \n-D"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"boost.include.dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('oost_1_75_0"')]),s._v(" -D"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"boost.library.dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('oost_1_75_0\\stage\\lib"')]),s._v(" -DskipTests\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v('编译成功后，打包好的。zip 文件将位于："client-cpp/target/client-cpp-0.13.0-SNAPSHOT-cpp-${os}.zip"')]),s._v(" "),a("p",[s._v("解压后的目录结构如下图所示 (Mac)：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n+-- client\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   +-- include\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- Session.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- TSIService.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- rpc_types.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- rpc_constants.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- thrift\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           +-- thrift_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   +-- lib\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       +-- libiotdb_session.dylib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[s._v("#")]),s._v(" Q&A")]),s._v(" "),a("h4",{attrs:{id:"mac-相关问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-相关问题"}},[s._v("#")]),s._v(" Mac 相关问题")]),s._v(" "),a("p",[s._v("本地 Maven 编译 Thrift 时如出现以下链接的问题，可以尝试将 xcode-commandline 版本从 12 降低到 11.5")]),s._v(" "),a("p",[s._v("https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087")]),s._v(" "),a("h4",{attrs:{id:"windows-相关问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-相关问题"}},[s._v("#")]),s._v(" Windows 相关问题")]),s._v(" "),a("p",[s._v("Maven 编译 Thrift 时需要使用 wget 下载远端文件，可能出现以下报错：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Failed to delete cached file C:\\Users\\Administrator\\.m2\\repository\\.cache\\download-maven-plugin\\index.ser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决方法：")]),s._v(" "),a("ul",[a("li",[s._v('尝试删除 ".m2\\repository\\.cache" 目录并重试。')]),s._v(" "),a("li",[s._v('在添加 pom 文件对应的 download-maven-plugin 中添加 "<skipCache>true</skipCache>"')])])])}),[],!1,null,null,null);e.default=n.exports}}]);