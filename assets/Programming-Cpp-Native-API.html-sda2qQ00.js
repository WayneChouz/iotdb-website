import{_ as o,r as l,o as i,c as p,a as c,d as n,e as s,b as e,f as t}from"./app-dNeAgOFp.js";const d={},r=t('<h1 id="c-native-api" tabindex="-1"><a class="header-anchor" href="#c-native-api" aria-hidden="true">#</a> C++ Native API</h1><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2><ul><li>Java 8+</li><li>Maven 3.5+</li><li>Flex</li><li>Bison 2.7+</li><li>Boost 1.56+</li><li>OpenSSL 1.0+</li><li>GCC 5.5.0+</li></ul><h2 id="installation-from-source-code" tabindex="-1"><a class="header-anchor" href="#installation-from-source-code" aria-hidden="true">#</a> Installation From Source Code</h2><h3 id="install-cpp-dependencies" tabindex="-1"><a class="header-anchor" href="#install-cpp-dependencies" aria-hidden="true">#</a> Install CPP Dependencies</h3>',5),u=t(`<li><p><strong>MAC</strong></p><ol><li><p>Install Bison ：Bison 2.3 is preinstalled on OSX, but this version is too low.</p><p>When building Thrift with Bison 2.3, the following error would pop out:<br><code>invalid directive: &#39;%code&#39;</code></p><p>For such case, please update <code>Bison</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> bison
brew <span class="token function">link</span> bison <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, you need to tell the OS where the new bison is.</p><p>For Bash users:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=&quot;/usr/local/opt/bison/bin:$PATH&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For zsh users:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=&quot;/usr/local/opt/bison/bin:$PATH&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Install Boost ：Please make sure a relative new version of Boost is ready on your machine.<br> If no Boost available, install the latest version of Boost:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> boost
brew <span class="token function">link</span> boost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>OpenSSL ：Make sure the Openssl libraries has been install on your Mac. The default Openssl include file search path is &quot;/usr/local/opt/openssl/include&quot;.</p><p>If Openssl header files can not be found when building Thrift, please add option<code>-Dopenssl.include.dir=&quot;&quot;</code>.</p></li></ol></li><li><p><strong>Ubuntu 20</strong></p><p>To install all dependencies, run:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gcc-9 g++-9 libstdc++-9-dev bison flex libboost-all-dev libssl-dev zlib1g-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>CentOS 7.x</strong></p><p>Some packages can be installed using Yum:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> bison flex openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The version of gcc and boost installed by yum is too low, therefore you should compile or download these binary packages by yourself.</p></li>`,3),v=n("p",null,[n("strong",null,"Windows")],-1),m=n("p",null,"Building environment",-1),g=n("li",null,[s("Install "),n("code",null,"MS Visual Studio"),s("(recommend 2019 version): remember to install Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW).")],-1),k={href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[s("Download and install "),n("code",null,"Flex"),s(" & "),n("code",null,"Bison")],-1),h={href:"https://sourceforge.net/projects/winflexbison/",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,[s("After downloaded, please rename the executables to "),n("code",null,"flex.exe"),s(" and "),n("code",null,"bison.exe"),s(' and add them to "PATH" environment variables.')],-1),y=n("p",null,[s("Install "),n("code",null,"Boost")],-1),w={href:"https://www.boost.org/users/download/",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,[s("Then build "),n("code",null,"Boost"),s(" by executing bootstrap.bat and b2.exe.")],-1),T=n("p",null,[s("Install "),n("code",null,"OpenSSL")],-1),S={href:"http://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},I=t(`<h3 id="compile" tabindex="-1"><a class="header-anchor" href="#compile" aria-hidden="true">#</a> Compile</h3><p>You can download the source code from:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default dev branch is the master branch, If you want to use a released version (eg. <code>rel/0.13</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout rel/0.13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Under the root path of iotdb:</p><ul><li><p>Mac &amp; Linux</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn package <span class="token parameter variable">-P</span> compile-cpp <span class="token parameter variable">-pl</span> example/client-cpp-example <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Windows</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn package <span class="token parameter variable">-P</span> compile-cpp <span class="token parameter variable">-pl</span> iotdb-client/client-cpp,iotdb-core/datanode,example/client-cpp-example <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dcmake.generator</span><span class="token operator">=</span><span class="token string">&quot;your cmake generator&quot;</span> <span class="token parameter variable">-Dboost.include.dir</span><span class="token operator">=</span><span class="token variable">\${your boost header folder}</span> <span class="token parameter variable">-Dboost.library.dir</span><span class="token operator">=</span><span class="token variable">\${your boost lib (stage) folder}</span> <span class="token parameter variable">-DskipTests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>When building client-cpp project, use <code>-Dcmake.generator=&quot;&quot;</code> option to specify a Cmake generator. E.g. <code>-Dcmake.generator=&quot;Visual Studio 16 2019&quot;</code> (<code>cmake --help</code> shows a long list of supported Cmake generators.)</li><li>To help CMake find your Boost libraries on windows, you should set <code>-DboostIncludeDir=&quot;C:\\Program Files (x86)\\boost_1_78_0&quot; -DboostLibraryDir=&quot;C:\\Program Files (x86)\\boost_1_78_0\\stage\\lib&quot;</code> to your mvn build command.<br> \`\`</li></ul></li></ul><p>If the compilation finishes successfully, the packaged zip file will be placed under <code>client-cpp/target/client-cpp-1.3.0-SNAPSHOT-cpp-\${os}.zip</code></p><h3 id="compile-q-a" tabindex="-1"><a class="header-anchor" href="#compile-q-a" aria-hidden="true">#</a> Compile Q&amp;A</h3><p>Q：How to deal with compile error<code>undefined reference to &#39;_libc_sinle_thread&#39;</code>?</p><p>A：</p><ul><li>Delete the test-related compilation and running operations in the pom.xml of C++client. The modified pom is as follows:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Execute <code>mvn clean package -P with-cpp -pl iotdb-client/client-cpp -am -DskipTests</code>，successfully build.</li></ul><h2 id="native-apis" tabindex="-1"><a class="header-anchor" href="#native-apis" aria-hidden="true">#</a> Native APIs</h2><p>Here we show the commonly used interfaces and their parameters in the Native API:</p><h3 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h3><ul><li>Open a Session</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Open a session, with a parameter to specify whether to enable RPC compression</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">bool</span> enableRPCCompression<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Notice: this RPC compression status of client must comply with that of IoTDB server</p><ul><li>Close a Session</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="data-definition-interface-ddl" tabindex="-1"><a class="header-anchor" href="#data-definition-interface-ddl" aria-hidden="true">#</a> Data Definition Interface (DDL)</h3><h4 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management" aria-hidden="true">#</a> Database Management</h4><ul><li>CREATE DATABASE</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">setStorageGroup</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>storageGroupId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Delete one or several databases</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">deleteStorageGroup</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>storageGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">deleteStorageGroups</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>storageGroups<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="timeseries-management" tabindex="-1"><a class="header-anchor" href="#timeseries-management" aria-hidden="true">#</a> Timeseries Management</h4><ul><li>Create one or multiple timeseries</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">createTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> TSDataType<span class="token double-colon punctuation">::</span>TSDataType dataType<span class="token punctuation">,</span> TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding encoding<span class="token punctuation">,</span>
                          CompressionType<span class="token double-colon punctuation">::</span>CompressionType compressor<span class="token punctuation">)</span><span class="token punctuation">;</span>
                          
<span class="token keyword">void</span> <span class="token function">createMultiTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>paths<span class="token punctuation">,</span>
                           <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                           <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                           <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">*</span>propsList<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">*</span>tagsList<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">*</span>attributesList<span class="token punctuation">,</span>
                           std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">*</span>measurementAliasList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create aligned timeseries</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">createAlignedTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                             <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete one or several timeseries</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">deleteTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">deleteTimeseries</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>paths<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Check whether the specific timeseries exists.</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">checkTimeseriesExists</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="schema-template" tabindex="-1"><a class="header-anchor" href="#schema-template" aria-hidden="true">#</a> Schema Template</h4><ul><li>Create a schema template</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">createSchemaTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> Template <span class="token operator">&amp;</span>templ<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Set the schema template named <code>templateName</code> at path <code>prefixPath</code>.</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">setSchemaTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>prefix_path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Unset the schema template</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">unsetSchemaTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>prefix_path<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>After measurement template created, you can edit the template with belowed APIs.</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Add aligned measurements to a template</span>
<span class="token keyword">void</span> <span class="token function">addAlignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add one aligned measurement to a template</span>
<span class="token keyword">void</span> <span class="token function">addAlignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                      <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>measurement<span class="token punctuation">,</span>
                                      TSDataType<span class="token double-colon punctuation">::</span>TSDataType dataType<span class="token punctuation">,</span>
                                      TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding encoding<span class="token punctuation">,</span>
                                      CompressionType<span class="token double-colon punctuation">::</span>CompressionType compressor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add unaligned measurements to a template</span>
<span class="token keyword">void</span> <span class="token function">addUnalignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>dataTypes<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>encodings<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>CompressionType<span class="token double-colon punctuation">::</span>CompressionType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>compressors<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add one unaligned measurement to a template</span>
<span class="token keyword">void</span> <span class="token function">addUnalignedMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span>
                                        <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>measurement<span class="token punctuation">,</span>
                                        TSDataType<span class="token double-colon punctuation">::</span>TSDataType dataType<span class="token punctuation">,</span>
                                        TSEncoding<span class="token double-colon punctuation">::</span>TSEncoding encoding<span class="token punctuation">,</span>
                                        CompressionType<span class="token double-colon punctuation">::</span>CompressionType compressor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Delete a node in template and its children</span>
<span class="token keyword">void</span> <span class="token function">deleteNodeInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>You can query measurement templates with these APIS:</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// Return the amount of measurements inside a template</span>
<span class="token keyword">int</span> <span class="token function">countMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Return true if path points to a measurement, otherwise returne false</span>
<span class="token keyword">bool</span> <span class="token function">isMeasurementInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Return true if path exists in template, otherwise return false</span>
<span class="token keyword">bool</span> <span class="token function">isPathExistInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Return all measurements paths inside template</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token function">showMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Return all measurements paths under the designated patter inside template</span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token function">showMeasurementsInTemplate</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>template_name<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-manipulation-interface-dml" tabindex="-1"><a class="header-anchor" href="#data-manipulation-interface-dml" aria-hidden="true">#</a> Data Manipulation Interface (DML)</h3><h4 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> Insert</h4><blockquote><p>It is recommended to use insertTablet to help improve write efficiency.</p></blockquote><ul><li>Insert a Tablet，which is multiple rows of a device, each row has the same measurements <ul><li>Better Write Performance</li><li>Support null values: fill the null value with any value, and then mark the null value via BitMap</li></ul></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertTablet</span><span class="token punctuation">(</span>Tablet <span class="token operator">&amp;</span>tablet<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Insert multiple Tablets</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertTablets</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>unordered_map<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token punctuation">,</span> Tablet <span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>tablets<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Insert a Record, which contains multiple measurement value of a device at a timestamp</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecord</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                  <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>types<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Insert multiple Records</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecords</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>deviceIds<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>typesList<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Insert multiple Records that belong to the same device. With type info the server has no need to do type inference, which leads a better performance</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecordsOfOneDevice</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>TSDataType<span class="token double-colon punctuation">::</span>TSDataType<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>typesList<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="insert-with-type-inference" tabindex="-1"><a class="header-anchor" href="#insert-with-type-inference" aria-hidden="true">#</a> Insert with type inference</h4><p>Without type information, server has to do type inference, which may cost some time.</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">insertRecord</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">,</span> <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>measurements<span class="token punctuation">,</span>
                  <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">insertRecords</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>deviceIds<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                   <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">void</span> <span class="token function">insertRecordsOfOneDevice</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int64_t</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>times<span class="token punctuation">,</span>
                              std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>measurementsList<span class="token punctuation">,</span>
                              <span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="insert-data-into-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#insert-data-into-aligned-timeseries" aria-hidden="true">#</a> Insert data into Aligned Timeseries</h4><p>The Insert of aligned timeseries uses interfaces like <code>insertAlignedXXX</code>, and others are similar to the above interfaces:</p><ul><li>insertAlignedRecord</li><li>insertAlignedRecords</li><li>insertAlignedRecordsOfOneDevice</li><li>insertAlignedTablet</li><li>insertAlignedTablets</li></ul><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h4><ul><li>Delete data before or equal to a timestamp of one or several timeseries</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>path<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>string<span class="token operator">&gt;</span> <span class="token operator">&amp;</span>deviceId<span class="token punctuation">,</span> <span class="token keyword">int64_t</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iotdb-sql-interface" tabindex="-1"><a class="header-anchor" href="#iotdb-sql-interface" aria-hidden="true">#</a> IoTDB-SQL Interface</h3><ul><li>Execute query statement</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">executeNonQueryStatement</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Execute non query statement</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">executeNonQueryStatement</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string <span class="token operator">&amp;</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>The sample code of using these interfaces is in:</p><ul><li><code>example/client-cpp-example/src/SessionExample.cpp</code></li><li><code>example/client-cpp-example/src/AlignedTimeseriesSessionExample.cpp</code> （使用对齐时间序列）</li></ul><p>If the compilation finishes successfully, the example project will be placed under <code>example/client-cpp-example/target</code></p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="on-mac" tabindex="-1"><a class="header-anchor" href="#on-mac" aria-hidden="true">#</a> on Mac</h3><p>If errors occur when compiling thrift source code, try to downgrade your xcode-commandline from 12 to 11.5</p>`,84),_={href:"https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087",target:"_blank",rel:"noopener noreferrer"},D=t(`<h3 id="on-windows" tabindex="-1"><a class="header-anchor" href="#on-windows" aria-hidden="true">#</a> on Windows</h3><p>When Building Thrift and downloading packages via &quot;wget&quot;, a possible annoying issue may occur with<br> error message looks like:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Failed to delete cached <span class="token function">file</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator<span class="token punctuation">\\</span>.m2<span class="token punctuation">\\</span>repository<span class="token punctuation">\\</span>.cache<span class="token punctuation">\\</span>download-maven-plugin<span class="token punctuation">\\</span>index.ser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Possible fixes:</p><ul><li>Try to delete the &quot;.m2\\repository\\.cache&quot; directory and try again.</li><li>Add &quot;&lt;skipCache&gt;true&lt;/skipCache&gt;&quot; configuration to the download-maven-plugin maven phase that complains this error.</li></ul>`,5);function C(A,q){const a=l("ExternalLinkIcon");return i(),p("div",null,[c(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),r,n("ul",null,[u,n("li",null,[v,n("ol",null,[n("li",null,[m,n("ul",null,[g,n("li",null,[s("Download and install "),n("a",k,[s("CMake"),e(a)]),s(" .")])])]),n("li",null,[b,n("ul",null,[n("li",null,[s("Download "),n("a",h,[s("Win_Flex_Bison"),e(a)]),s(" .")]),f])]),n("li",null,[y,n("ul",null,[n("li",null,[s("Download "),n("a",w,[s("Boost"),e(a)]),s(" .")]),x])]),n("li",null,[T,n("ul",null,[n("li",null,[s("Download and install "),n("a",S,[s("OpenSSL"),e(a)]),s(" .")])])])])])]),I,n("p",null,[s("see "),n("a",_,[s("https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087"),e(a)])]),D])}const O=o(d,[["render",C],["__file","Programming-Cpp-Native-API.html.vue"]]);export{O as default};
