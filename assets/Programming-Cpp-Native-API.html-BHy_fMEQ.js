import{_ as l,r as o,o as i,c as p,b as n,d as s,a as t,e}from"./app-BiY8UsO2.js";const c={},d=e('<h1 id="c-原生接口" tabindex="-1"><a class="header-anchor" href="#c-原生接口"><span>C++ 原生接口</span></a></h1><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><ul><li>Java 8+</li><li>Maven 3.5+</li><li>Flex</li><li>Bison 2.7+</li><li>Boost 1.56+</li><li>OpenSSL 1.0+</li><li>GCC 5.5.0+</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="安装相关依赖" tabindex="-1"><a class="header-anchor" href="#安装相关依赖"><span>安装相关依赖</span></a></h3>',5),r=e(`<li><p><strong>MAC</strong></p><ol><li><p>安装 Bison ：Mac 环境下预安装了 Bison 2.3 版本，但该版本过低不能够用来编译 Thrift。</p><p>使用 Bison 2.3 版本会报以下错误：<br><code>invalid directive: &#39;%code&#39;</code></p><p>使用下面 brew 命令更新 bison 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> bison
brew <span class="token function">link</span> bison <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加环境变量：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=&quot;/usr/local/opt/bison/bin:$PATH&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装 Boost ：确保安装较新的 Boost 版本。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> boost
brew <span class="token function">link</span> boost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查 OpenSSL ：确保 openssl 库已安装，默认的 openssl 头文件路径为&quot;/usr/local/opt/openssl/include&quot;</p><p>如果在编译过程中出现找不到 openssl 的错误，尝试添加<code>-Dopenssl.include.dir=&quot;&quot;</code></p></li></ol></li><li><p><strong>Ubuntu 20</strong></p><p>使用以下命令安装所有依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc-9 g++-9 libstdc++-9-dev bison flex libboost-all-dev libssl-dev zlib1g-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>CentOS 7.x</strong></p><p>使用 yum 命令安装部分依赖。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> bison flex openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 yum 安装的 GCC、Boost 版本过低，在编译时会报错，需自行安装或升级。</p></li>`,3),u=n("p",null,[n("strong",null,"Windows")],-1),v=n("p",null,"构建编译环境",-1),m=n("li",null,"安装 MS Visual Studio（推荐安装 2019 版本）：安装时需要勾选 Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW)。",-1),g={href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"下载安装 Flex、Bison",-1),b={href:"https://sourceforge.net/projects/winflexbison/",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"下载后需要将可执行文件重命名为 flex.exe 和 bison.exe 以保证编译时能够被找到，添加可执行文件的目录到 PATH 环境变量中。",-1),f=n("p",null,"安装 Boost",-1),y={href:"https://www.boost.org/users/download/",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,"本地编译 Boost ：依次执行 bootstrap.bat 和 b2.exe 。",-1),w=n("p",null,"安装 OpenSSL",-1),T={href:"http://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},S=e(`<h3 id="执行编译" tabindex="-1"><a class="header-anchor" href="#执行编译"><span>执行编译</span></a></h3><p>从 git 克隆源代码:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认的主分支是master分支，如果你想使用某个发布版本，请切换分支 (如 0.13 版本):</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout rel/0.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 IoTDB 根目录下执行 maven 编译:</p><ul><li><p>Mac &amp; Linux</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn package <span class="token parameter variable">-P</span> compile-cpp <span class="token parameter variable">-pl</span> example/client-cpp-example <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Windows</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn package <span class="token parameter variable">-P</span> compile-cpp <span class="token parameter variable">-pl</span> iotdb-client/client-cpp,iotdb-core/datanode,example/client-cpp-example <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dcmake.generator</span><span class="token operator">=</span><span class="token string">&quot;your cmake generator&quot;</span> <span class="token parameter variable">-Dboost.include.dir</span><span class="token operator">=</span><span class="token variable">\${your boost header folder}</span> <span class="token parameter variable">-Dboost.library.dir</span><span class="token operator">=</span><span class="token variable">\${your boost lib (stage) folder}</span> <span class="token parameter variable">-DskipTests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>CMake 根据不同编译平台使用不同的生成器，需添加<code>-Dcmake.generator=&quot;&quot;</code>选项来指定使用的生成器名称，例如： <code>-Dcmake.generator=&quot;Visual Studio 16 2019&quot;</code>。（通过<code>cmake --help</code>命令可以查看 CMake 支持的生成器列表）</li><li>为了帮助 CMake 找到本地安装好的 Boost，在编译命令中需添加相关参数，例如：<code>-DboostIncludeDir=&quot;C:\\Program Files (x86)\\boost_1_78_0&quot; -DboostLibraryDir=&quot;C:\\Program Files (x86)\\boost_1_78_0\\stage\\lib&quot;</code></li></ul></li></ul><p>编译成功后，打包好的 zip 文件位于 <code>client-cpp/target/client-cpp-1.3.0-SNAPSHOT-cpp-\${os}.zip</code></p><h3 id="编译-q-a" tabindex="-1"><a class="header-anchor" href="#编译-q-a"><span>编译 Q&amp;A</span></a></h3><p>Q：编译报错<code>undefined reference to &#39;_libc_sinle_thread&#39;</code>如何处理？</p><p>A：</p><ul><li>删除 C++client 的 pom.xml 里关于test相关的编译和运行操作，修改后的 pom 如下所示：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>      
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!--

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    &quot;License&quot;); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

--&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt;
        &lt;groupId&gt;org.apache.iotdb&lt;/groupId&gt;
        &lt;artifactId&gt;iotdb-client&lt;/artifactId&gt;
        &lt;version&gt;1.3.1-SNAPSHOT&lt;/version&gt;
    &lt;/parent&gt;
    &lt;artifactId&gt;client-cpp&lt;/artifactId&gt;
    &lt;packaging&gt;pom&lt;/packaging&gt;
    &lt;name&gt;IoTDB: Client: Client for CPP&lt;/name&gt;
    &lt;description&gt;C++ client&lt;/description&gt;
    &lt;!-- TODO: The tests don&#39;t run, if distribution has not been built locally and fails without reasoning --&gt;
    &lt;properties&gt;
        &lt;catch2.url&gt;https://alioss.timecho.com/upload/catch.hpp&lt;/catch2.url&gt;
        &lt;cmake.build.type&gt;Release&lt;/cmake.build.type&gt;
        &lt;!-- Default value of cmake root --&gt;
        &lt;cmake.root.dir&gt;\${project.build.directory}/dependency/cmake/&lt;/cmake.root.dir&gt;
        &lt;thrift.exec.absolute.path&gt;\${project.build.directory}/thrift/bin/\${thrift.executable}&lt;/thrift.exec.absolute.path&gt;
    &lt;/properties&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.apache.iotdb&lt;/groupId&gt;
            &lt;artifactId&gt;iotdb-thrift-commons&lt;/artifactId&gt;
            &lt;version&gt;1.3.1-SNAPSHOT&lt;/version&gt;
            &lt;scope&gt;provided&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
    &lt;build&gt;
        &lt;plugins&gt;
            &lt;!-- Build and do session integration test --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-dependency-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;get-thrift&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;unpack&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;phase&gt;generate-sources&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;artifactItems&gt;
                                &lt;artifactItem&gt;
                                    &lt;groupId&gt;org.apache.iotdb.tools&lt;/groupId&gt;
                                    &lt;artifactId&gt;iotdb-tools-thrift&lt;/artifactId&gt;
                                    &lt;version&gt;\${iotdb-tools-thrift.version}&lt;/version&gt;
                                    &lt;classifier&gt;\${os.classifier}&lt;/classifier&gt;
                                    &lt;type&gt;zip&lt;/type&gt;
                                    &lt;overWrite&gt;true&lt;/overWrite&gt;
                                    &lt;outputDirectory&gt;\${project.build.directory}/thrift&lt;/outputDirectory&gt;
                                &lt;/artifactItem&gt;
                            &lt;/artifactItems&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.googlecode.maven-download-plugin&lt;/groupId&gt;
                &lt;artifactId&gt;download-maven-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;get-catch2&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;wget&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;phase&gt;generate-resources&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;url&gt;\${catch2.url}&lt;/url&gt;
                            &lt;unpack&gt;false&lt;/unpack&gt;
                            &lt;outputDirectory&gt;\${project.build.directory}/build/test/catch2&lt;/outputDirectory&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.coderplus.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;copy-rename-maven-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;!-- TODO: Do this differently using the artifact downloader --&gt;
                    &lt;execution&gt;
                        &lt;id&gt;copy-protocol-thrift-source&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;copy&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;configuration&gt;
                            &lt;fileSets&gt;
                                &lt;fileSet&gt;
                                    &lt;sourceFile&gt;../../iotdb-protocol/thrift-datanode/src/main/thrift/client.thrift&lt;/sourceFile&gt;
                                    &lt;destinationFile&gt;\${project.build.directory}/protocols/client.thrift&lt;/destinationFile&gt;
                                &lt;/fileSet&gt;
                                &lt;fileSet&gt;
                                    &lt;sourceFile&gt;../../iotdb-protocol/thrift-commons/src/main/thrift/common.thrift&lt;/sourceFile&gt;
                                    &lt;destinationFile&gt;\${project.build.directory}/protocols/common.thrift&lt;/destinationFile&gt;
                                &lt;/fileSet&gt;
                            &lt;/fileSets&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                    &lt;!-- TODO: Do this differently using the maven-resources-plugin --&gt;
                    &lt;execution&gt;
                        &lt;!-- Copy source file and CmakeLists.txt into target directory --&gt;
                        &lt;id&gt;copy-cmakelist-file&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;copy&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;phase&gt;compile&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;fileSets&gt;
                                &lt;fileSet&gt;
                                    &lt;sourceFile&gt;\${project.basedir}/src/main/CMakeLists.txt&lt;/sourceFile&gt;
                                    &lt;destinationFile&gt;\${project.build.directory}/build/main/CMakeLists.txt&lt;/destinationFile&gt;
                                &lt;/fileSet&gt;
                                &lt;fileSet&gt;
                                    &lt;sourceFile&gt;\${project.basedir}/src/main/Session.h&lt;/sourceFile&gt;
                                    &lt;destinationFile&gt;\${project.build.directory}/build/main/generated-sources-cpp/Session.h&lt;/destinationFile&gt;
                                &lt;/fileSet&gt;
                                &lt;fileSet&gt;
                                    &lt;sourceFile&gt;\${project.basedir}/src/main/Session.cpp&lt;/sourceFile&gt;
                                    &lt;destinationFile&gt;\${project.build.directory}/build/main/generated-sources-cpp/Session.cpp&lt;/destinationFile&gt;
                                &lt;/fileSet&gt;
                            &lt;/fileSets&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.thrift.tools&lt;/groupId&gt;
                &lt;artifactId&gt;maven-thrift-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;generate-thrift-sources-cpp&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;compile&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;!-- Move from generate-sources to generate-resources to avoid double executions --&gt;
                        &lt;phase&gt;generate-resources&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;generator&gt;cpp:no_skeleton&lt;/generator&gt;
                            &lt;thriftExecutable&gt;\${thrift.exec.absolute.path}&lt;/thriftExecutable&gt;
                            &lt;thriftSourceRoot&gt;\${project.build.directory}/protocols&lt;/thriftSourceRoot&gt;
                            &lt;outputDirectory&gt;\${project.build.directory}/build/main/generated-sources-cpp&lt;/outputDirectory&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;com.googlecode.cmake-maven-project&lt;/groupId&gt;
                &lt;artifactId&gt;cmake-maven-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;!-- Uses a CMake generator to generate the build using the build tool of choice --&gt;
                    &lt;execution&gt;
                        &lt;id&gt;cmake-generate&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;generate&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;phase&gt;compile&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;generator&gt;\${cmake.generator}&lt;/generator&gt;
                            &lt;sourcePath&gt;\${project.build.directory}/build/main&lt;/sourcePath&gt;
                            &lt;targetPath&gt;\${project.build.directory}/build/main&lt;/targetPath&gt;
                            &lt;options&gt;
                                &lt;option&gt;-DBOOST_INCLUDEDIR=\${boost.include.dir}&lt;/option&gt;
                            &lt;/options&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                    &lt;!-- Generate Cmake build directory to compile testing program --&gt;
                    &lt;!-- Actually executes the build --&gt;
                    &lt;execution&gt;
                        &lt;id&gt;cmake-compile&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;compile&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;phase&gt;compile&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;config&gt;\${cmake.build.type}&lt;/config&gt;
                            &lt;!-- The directory where the &quot;generate&quot; step generated the build configuration --&gt;
                            &lt;projectDirectory&gt;\${project.build.directory}/build/main&lt;/projectDirectory&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                    &lt;!-- Actually executes the testing compilation --&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
            &lt;!--Package all C++ header files and client library--&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-assembly-plugin&lt;/artifactId&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;id&gt;package-client-cpp&lt;/id&gt;
                        &lt;goals&gt;
                            &lt;goal&gt;single&lt;/goal&gt;
                        &lt;/goals&gt;
                        &lt;phase&gt;package&lt;/phase&gt;
                        &lt;configuration&gt;
                            &lt;finalName&gt;\${project.artifactId}-\${project.version}&lt;/finalName&gt;
                            &lt;descriptors&gt;
                                &lt;descriptor&gt;src/assembly/client-cpp.xml&lt;/descriptor&gt;
                            &lt;/descriptors&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
    &lt;profiles&gt;
        &lt;profile&gt;
            &lt;id&gt;.os-unix&lt;/id&gt;
            &lt;activation&gt;
                &lt;os&gt;
                    &lt;name&gt;Linux&lt;/name&gt;
                    &lt;family&gt;unix&lt;/family&gt;
                    &lt;arch&gt;!aarch64&lt;/arch&gt;
                &lt;/os&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;iotdb.start.script&gt;start-standalone.sh&lt;/iotdb.start.script&gt;
                &lt;iotdb.stop.script&gt;stop-standalone.sh&lt;/iotdb.stop.script&gt;
                &lt;os.suffix&gt;linux&lt;/os.suffix&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
        &lt;profile&gt;
            &lt;id&gt;.os-unix-arm&lt;/id&gt;
            &lt;activation&gt;
                &lt;os&gt;
                    &lt;name&gt;Linux&lt;/name&gt;
                    &lt;family&gt;unix&lt;/family&gt;
                    &lt;arch&gt;aarch64&lt;/arch&gt;
                &lt;/os&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;iotdb.start.script&gt;start-standalone.sh&lt;/iotdb.start.script&gt;
                &lt;iotdb.stop.script&gt;stop-standalone.sh&lt;/iotdb.stop.script&gt;
                &lt;os.suffix&gt;linux&lt;/os.suffix&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
        &lt;profile&gt;
            &lt;id&gt;.os-mac&lt;/id&gt;
            &lt;activation&gt;
                &lt;os&gt;
                    &lt;family&gt;mac&lt;/family&gt;
                    &lt;arch&gt;!aarch64&lt;/arch&gt;
                &lt;/os&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;iotdb.start.script&gt;start-standalone.sh&lt;/iotdb.start.script&gt;
                &lt;iotdb.stop.script&gt;stop-standalone.sh&lt;/iotdb.stop.script&gt;
                &lt;os.suffix&gt;mac&lt;/os.suffix&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
        &lt;profile&gt;
            &lt;id&gt;.os-mac-arm&lt;/id&gt;
            &lt;activation&gt;
                &lt;os&gt;
                    &lt;family&gt;mac&lt;/family&gt;
                    &lt;arch&gt;aarch64&lt;/arch&gt;
                &lt;/os&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;iotdb.start.script&gt;start-standalone.sh&lt;/iotdb.start.script&gt;
                &lt;iotdb.stop.script&gt;stop-standalone.sh&lt;/iotdb.stop.script&gt;
                &lt;os.suffix&gt;mac&lt;/os.suffix&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
        &lt;profile&gt;
            &lt;id&gt;.os-windows&lt;/id&gt;
            &lt;activation&gt;
                &lt;os&gt;
                    &lt;family&gt;windows&lt;/family&gt;
                &lt;/os&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;iotdb.start.script&gt;start-standalone.bat&lt;/iotdb.start.script&gt;
                &lt;iotdb.stop.script&gt;stop-standalone.bat&lt;/iotdb.stop.script&gt;
                &lt;os.suffix&gt;win&lt;/os.suffix&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
    &lt;/profiles&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再次执行 mvn clean package -P with-cpp -pl iotdb-client/client-cpp -am -DskipTests，成功build</li></ul><h2 id="基本接口说明" tabindex="-1"><a class="header-anchor" href="#基本接口说明"><span>基本接口说明</span></a></h2><p>下面将给出 Session 接口的简要介绍和原型定义：</p><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3><ul><li>开启 Session</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>开启 Session，并决定是否开启 RPC 压缩</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">bool</span> enableRPCCompression<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意: 客户端的 RPC 压缩开启状态需和服务端一致。</p><ul><li>关闭 Session</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据定义接口-ddl" tabindex="-1"><a class="header-anchor" href="#数据定义接口-ddl"><span>数据定义接口（DDL）</span></a></h3><h4 id="database-管理" tabindex="-1"><a class="header-anchor" href="#database-管理"><span>Database 管理</span></a></h4><ul><li>设置 database</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">setStorageGroup</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>storageGroupId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除单个或多个 database</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">deleteStorageGroup</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>storageGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">deleteStorageGroups</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>storageGroups<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="时间序列管理" tabindex="-1"><a class="header-anchor" href="#时间序列管理"><span>时间序列管理</span></a></h4><ul><li>创建单个或多个非对齐时间序列</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">createTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> TSDataType<span class="token double-colon punctuation">::</span>TSDataType dataType<span class="token punctuation">,</span> TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding encoding<span class="token punctuation">,</span>
                          CompressionType<span class="token double-colon punctuation">::</span>CompressionType compressor<span class="token punctuation">)</span><span class="token punctuation">;</span>
                          
<span class="token keyword">void</span> <span class="token function">createMultiTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>paths<span class="token punctuation">,</span>
                           <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                           <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                           <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">*</span>propsList<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">*</span>tagsList<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">*</span>attributesList<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">*</span>measurementAliasList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建对齐时间序列</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">createAlignedTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除一个或多个时间序列</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">deleteTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">deleteTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>paths<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查时间序列是否存在</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">checkTimeseriesExists</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="元数据模版" tabindex="-1"><a class="header-anchor" href="#元数据模版"><span>元数据模版</span></a></h4><ul><li>创建元数据模板</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">createSchemaTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> Template <span class="token operator">&amp;</span>templ<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>挂载元数据模板</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">setSchemaTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>prefix_path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意，如果一个子树中有多个孩子节点需要使用模板，可以在其共同父母节点上使用 setSchemaTemplate 。而只有在已有数据点插入模板对应的物理量时，模板才会被设置为激活状态，进而被 show timeseries 等查询检测到。</p><ul><li>卸载元数据模板</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">unsetSchemaTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>prefix_path<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：目前不支持从曾经在<code>prefixPath</code>路径及其后代节点使用模板插入数据后（即使数据已被删除）卸载模板。</p><ul><li>在创建概念元数据模板以后，还可以通过以下接口增加或删除模板内的物理量。请注意，已经挂载的模板不能删除内部的物理量。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 为指定模板新增一组对齐的物理量，若其父节点在模板中已经存在，且不要求对齐，则报错</span>
<span class="token keyword">void</span> <span class="token function">addAlignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 为指定模板新增一个对齐物理量, 若其父节点在模板中已经存在，且不要求对齐，则报错</span>
<span class="token keyword">void</span> <span class="token function">addAlignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>measurement<span class="token punctuation">,</span>
                                      TSDataType<span class="token double-colon punctuation">::</span>TSDataType dataType<span class="token punctuation">,</span>
                                      TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding encoding<span class="token punctuation">,</span>
                                      CompressionType<span class="token double-colon punctuation">::</span>CompressionType compressor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 为指定模板新增一个不对齐物理量, 若其父节在模板中已经存在，且要求对齐，则报错</span>
<span class="token keyword">void</span> <span class="token function">addUnalignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 为指定模板新增一组不对齐的物理量, 若其父节在模板中已经存在，且要求对齐，则报错</span>
<span class="token keyword">void</span> <span class="token function">addUnalignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>measurement<span class="token punctuation">,</span>
                                        TSDataType<span class="token double-colon punctuation">::</span>TSDataType dataType<span class="token punctuation">,</span>
                                        TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding encoding<span class="token punctuation">,</span>
                                        CompressionType<span class="token double-colon punctuation">::</span>CompressionType compressor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 从指定模板中删除一个节点及其子树</span>
<span class="token keyword">void</span> <span class="token function">deleteNodeInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对于已经创建的元数据模板，还可以通过以下接口查询模板信息：</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 查询返回目前模板中所有物理量的数量</span>
<span class="token keyword">int</span> <span class="token function">countMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 检查模板内指定路径是否为物理量</span>
<span class="token keyword">bool</span> <span class="token function">isMeasurementInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 检查在指定模板内是否存在某路径</span>
<span class="token keyword">bool</span> <span class="token function">isPathExistInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回指定模板内所有物理量的路径</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token function">showMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回指定模板内某前缀路径下的所有物理量的路径</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token function">showMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据操作接口-dml" tabindex="-1"><a class="header-anchor" href="#数据操作接口-dml"><span>数据操作接口（DML）</span></a></h3><h4 id="数据写入" tabindex="-1"><a class="header-anchor" href="#数据写入"><span>数据写入</span></a></h4><blockquote><p>推荐使用 insertTablet 帮助提高写入效率。</p></blockquote><ul><li>插入一个 Tablet，Tablet 是一个设备若干行数据块，每一行的列都相同。 <ul><li>写入效率高。</li><li>支持写入空值：空值处可以填入任意值，然后通过 BitMap 标记空值。</li></ul></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertTablet</span><span class="token punctuation">(</span>Tablet <span class="token operator">&amp;</span>tablet<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>插入多个 Tablet</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertTablets</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> Tablet <span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>tablets<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>插入一个 Record，一个 Record 是一个设备一个时间戳下多个测点的数据</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecord</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                  <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>types<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入多个 Record</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecords</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>deviceIds<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>typesList<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入同属于一个 device 的多个 Record</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecordsOfOneDevice</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>typesList<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带有类型推断的写入" tabindex="-1"><a class="header-anchor" href="#带有类型推断的写入"><span>带有类型推断的写入</span></a></h4><p>服务器需要做类型推断，可能会有额外耗时，速度较无需类型推断的写入慢。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecord</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                  <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">insertRecords</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>deviceIds<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">insertRecordsOfOneDevice</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                              <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对齐时间序列写入" tabindex="-1"><a class="header-anchor" href="#对齐时间序列写入"><span>对齐时间序列写入</span></a></h4><p>对齐时间序列的写入使用 insertAlignedXXX 接口，其余与上述接口类似：</p><ul><li>insertAlignedRecord</li><li>insertAlignedRecords</li><li>insertAlignedRecordsOfOneDevice</li><li>insertAlignedTablet</li><li>insertAlignedTablets</li></ul><h4 id="数据删除" tabindex="-1"><a class="header-anchor" href="#数据删除"><span>数据删除</span></a></h4><ul><li>删除一个或多个时间序列在某个时间点前或这个时间点的数据</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iotdb-sql-接口" tabindex="-1"><a class="header-anchor" href="#iotdb-sql-接口"><span>IoTDB-SQL 接口</span></a></h3><ul><li>执行查询语句</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">executeNonQueryStatement</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>执行非查询语句</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">executeNonQueryStatement</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><p>示例工程源代码：</p><ul><li><code>example/client-cpp-example/src/SessionExample.cpp</code></li><li><code>example/client-cpp-example/src/AlignedTimeseriesSessionExample.cpp</code> （使用对齐时间序列）</li></ul><p>编译成功后，示例代码工程位于 <code>example/client-cpp-example/target</code></p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h3 id="thrift-编译相关问题" tabindex="-1"><a class="header-anchor" href="#thrift-编译相关问题"><span>Thrift 编译相关问题</span></a></h3>`,85),_=n("br",null,null,-1),I={href:"https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087",target:"_blank",rel:"noopener noreferrer"},C=n("li",null,[n("p",null,"Windows：Maven 编译 Thrift 时需要使用 wget 下载远端文件，可能出现以下报错："),n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Failed to delete cached file C:\\Users\\Administrator\\.m2\\repository\\.cache\\download-maven-plugin\\index.ser
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])]),n("p",null,"解决方法："),n("ul",null,[n("li",null,'尝试删除 ".m2\\repository\\.cache" 目录并重试。'),n("li",null,'在添加 pom 文件对应的 download-maven-plugin 中添加 "<skipCache>true</skipCache>"')])],-1);function D(q,A){const a=o("ExternalLinkIcon");return i(),p("div",null,[d,n("ul",null,[r,n("li",null,[u,n("ol",null,[n("li",null,[v,n("ul",null,[m,n("li",null,[s("下载安装 "),n("a",g,[s("CMake"),t(a)]),s(" 。")])])]),n("li",null,[k,n("ul",null,[n("li",null,[s("下载 "),n("a",b,[s("Win_Flex_Bison"),t(a)]),s(" 。")]),h])]),n("li",null,[f,n("ul",null,[n("li",null,[s("下载 "),n("a",y,[s("Boost"),t(a)]),s(" 。")]),x])]),n("li",null,[w,n("ul",null,[n("li",null,[s("下载安装 "),n("a",T,[s("OpenSSL"),t(a)]),s(" 。")])])])])])]),S,n("ol",null,[n("li",null,[n("p",null,[s("MAC：本地 Maven 编译 Thrift 时如出现以下链接的问题，可以尝试将 xcode-commandline 版本从 12 降低到 11.5"),_,n("a",I,[s("https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087"),t(a)])])]),C])])}const P=l(c,[["render",D],["__file","Programming-Cpp-Native-API.html.vue"]]),M=JSON.parse('{"path":"/zh/UserGuide/latest/API/Programming-Cpp-Native-API.html","title":"C++ 原生接口","lang":"zh-CN","frontmatter":{"description":"C++ 原生接口 依赖 Java 8+ Maven 3.5+ Flex Bison 2.7+ Boost 1.56+ OpenSSL 1.0+ GCC 5.5.0+ 安装 安装相关依赖 MAC 安装 Bison ：Mac 环境下预安装了 Bison 2.3 版本，但该版本过低不能够用来编译 Thrift。 使用 Bison 2.3 版本会报以下错误： ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/API/Programming-Cpp-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/API/Programming-Cpp-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"C++ 原生接口"}],["meta",{"property":"og:description","content":"C++ 原生接口 依赖 Java 8+ Maven 3.5+ Flex Bison 2.7+ Boost 1.56+ OpenSSL 1.0+ GCC 5.5.0+ 安装 安装相关依赖 MAC 安装 Bison ：Mac 环境下预安装了 Bison 2.3 版本，但该版本过低不能够用来编译 Thrift。 使用 Bison 2.3 版本会报以下错误： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-07T04:02:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-07T04:02:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++ 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-07T04:02:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"安装相关依赖","slug":"安装相关依赖","link":"#安装相关依赖","children":[]},{"level":3,"title":"执行编译","slug":"执行编译","link":"#执行编译","children":[]},{"level":3,"title":"编译 Q&A","slug":"编译-q-a","link":"#编译-q-a","children":[]}]},{"level":2,"title":"基本接口说明","slug":"基本接口说明","link":"#基本接口说明","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"数据定义接口（DDL）","slug":"数据定义接口-ddl","link":"#数据定义接口-ddl","children":[]},{"level":3,"title":"数据操作接口（DML）","slug":"数据操作接口-dml","link":"#数据操作接口-dml","children":[]},{"level":3,"title":"IoTDB-SQL 接口","slug":"iotdb-sql-接口","link":"#iotdb-sql-接口","children":[]}]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Thrift 编译相关问题","slug":"thrift-编译相关问题","link":"#thrift-编译相关问题","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1709784171000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.81,"words":3242},"filePathRelative":"zh/UserGuide/latest/API/Programming-Cpp-Native-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{P as comp,M as data};
