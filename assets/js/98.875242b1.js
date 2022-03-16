(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{721:function(t,e,a){"use strict";a.r(e);var s=a(83),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"way-to-get-iotdb-binary-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#way-to-get-iotdb-binary-files"}},[t._v("#")]),t._v(" Way to get IoTDB binary files")]),t._v(" "),a("p",[t._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),t._v(" "),a("ul",[a("li",[t._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),t._v(" "),a("li",[t._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.")]),t._v(" "),a("li",[t._v("Using Docker：The path to the dockerfile is https://github.com/apache/iotdb/blob/master/docker/Dockerfile")])]),t._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("To use IoTDB, you need to have:")]),t._v(" "),a("ol",[a("li",[t._v("Java >= 1.8 (Please make sure the environment path has been set)")]),t._v(" "),a("li",[t._v("Maven >= 3.6 (Optional)")]),t._v(" "),a("li",[t._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])]),t._v(" "),a("blockquote",[a("p",[t._v("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with 'mvnw.sh' or 'mvnw.cmd'.")]),t._v(" "),a("h3",{attrs:{id:"installation-from-binary-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binary-files"}},[t._v("#")]),t._v(" Installation from  binary files")])]),t._v(" "),a("p",[t._v("You can download the binary file from:\n"),a("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download page"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"installation-from-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[t._v("#")]),t._v(" Installation from source code")]),t._v(" "),a("p",[t._v("You can get the released source code from https://iotdb.apache.org/Download/, or from the git repository https://github.com/apache/iotdb/tree/master\nYou can download the source code from:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/apache/iotdb.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Under the root path of iotdb:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> mvn clean package -DskipTests\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Then the binary version (including both server and client) can be found at "),a("strong",[t._v("distribution/target/apache-iotdb-{project.version}-bin.zip")])]),t._v(" "),a("blockquote",[a("p",[t._v('NOTE: Directories "thrift/target/generated-sources/thrift" and "antlr/target/generated-sources/antlr4" need to be added to sources roots to avoid compilation errors in IDE.')])]),t._v(" "),a("p",[t._v("If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> mvn clean package -pl server -am -DskipTests\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v('After build, the IoTDB server will be at the folder "server/target/iotdb-server-{project.version}".')]),t._v(" "),a("h3",{attrs:{id:"installation-by-docker-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-by-docker-dockerfile"}},[t._v("#")]),t._v(" Installation by Docker (Dockerfile)")]),t._v(" "),a("p",[t._v("Apache IoTDB' Docker image is released on "),a("a",{attrs:{href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/r/apache/iotdb"),a("OutboundLink")],1),t._v(",")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Get IoTDB docker image")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Recommended:")]),t._v(" Using "),a("code",[t._v("docker pull apache/iotdb:latest")]),t._v(" can get the latest docker image.")]),t._v(" "),a("li",[t._v("Users can also build a docker image themselves. Now a Dockerfile has been written at docker/src/main/Dockerfile.\n"),a("ul",[a("li",[t._v("Way 1: "),a("code",[t._v("$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker")])]),t._v(" "),a("li",[t._v("Way 2:")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" $ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/apache/iotdb\n $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" iotdb\n $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build -t iotdb:base "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])])])]),t._v(" "),a("p",[t._v("Once the docker image has been built locally (the tag is iotdb:base in this example), you are almost done!")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("Create docker volume for data files and logs:")])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" volume create mydata\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" volume create mylogs\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("Run a docker container:")])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(":6667 -v mydata:/iotdb/data -v mylogs:/iotdb/logs -d iotdb:base /iotdb/bin/start-server.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If success, you can run "),a("code",[t._v("docker ps")]),t._v(", and get something like the following:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES\n2a68b6944cb5        iotdb:base          "/iotdb/bin/start-se…"   4 minutes ago       Up 5 minutes        0.0.0.0:6667->6667/tcp              laughing_meitner\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("You can use the above command to get the container ID:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("suppose the ID is <C_ID>.")]),t._v(" "),a("p",[t._v("And get the docker IP by the following, suppose the IP is <C_IP>.:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" inspect --format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{.NetworkSettings.IPAddress}}'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("C_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Now IoTDB server has started succesfully.")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("If you just want to have a try by using iotdb-cli, you can:")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("C_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /bin/bash\n$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now you have enter the container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": /iotdb/sbin/start-cli.sh -h localhost -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u root -pw root\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Or,  if you have a iotdb-cli locally, execute the following command:")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ /%IOTDB_HOME%/sbin/start-cli.sh -h localhost -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u root -pw root\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("If you want to write codes to insert data and query data, please add the following dependence:")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.iotdb"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("iotdb-jdbc"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.14.0-SNAPSHOT"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Some examples about how to use IoTDB with IoTDB-JDBC can be found at: https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb")])])}),[],!1,null,null,null);e.default=n.exports}}]);