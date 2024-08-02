import{_ as o,r as i,o as l,c as r,b as e,d as a,a as n,e as s}from"./app-CVD6HEOl.js";const c={},d=e("h2",{id:"way-to-get-iotdb-binary-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#way-to-get-iotdb-binary-files"},[e("span",null,"Way to get IoTDB binary files")])],-1),p=e("p",null,"IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:",-1),u=e("li",null,"Installation from source code. If you need to modify the code yourself, you can use this method.",-1),h=e("li",null,"Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.",-1),m={href:"https://github.com/apache/iotdb/blob/master/docker/Dockerfile",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites"},[e("span",null,"Prerequisites")])],-1),g=e("p",null,"To use IoTDB, you need to have:",-1),v=e("ol",null,[e("li",null,"Java >= 1.8 (Please make sure the environment path has been set)"),e("li",null,"Maven >= 3.6 (Optional)"),e("li",null,'Set the max open files num as 65535 to avoid "too many open files" problem.')],-1),k={href:"http://mvnw.sh",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"installation-from-binary-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation-from-binary-files"},[e("span",null,"Installation from binary files")])],-1),y=e("br",null,null,-1),_={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"installation-from-source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation-from-source-code"},[e("span",null,"Installation from source code")])],-1),x={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"},T=e("br",null,null,-1),w=s(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After that, go to the root path of IoTDB. If you want to build the version that we have released, you need to create and check out a new branch by command <code>git checkout -b my_{project.version} v{project.version}</code>. E.g., you want to build the version <code>0.12.4</code>, you can execute this command to make it:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> my_0.12.4 v0.12.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you can execute this command to build the version that you want:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; mvn clean package -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then the binary version (including both server and client) can be found at <strong>distribution/target/apache-iotdb-{project.version}-bin.zip</strong></p><blockquote><p>NOTE: Directories &quot;thrift/target/generated-sources/thrift&quot; and &quot;antlr/target/generated-sources/antlr4&quot; need to be added to sources roots to avoid compilation errors in IDE.</p></blockquote><p>If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; mvn clean package -pl server -am -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After build, the IoTDB server will be at the folder &quot;server/target/iotdb-server-{project.version}&quot;.</p><p>If you would like to build a module, you can execute command <code>mvn clean package -pl {module.name} -am -DskipTests</code> under the root path of IoTDB.<br> If you need the jar with dependencies, you can add parameter <code>-P get-jar-with-dependencies</code> after the command. E.g., If you need the jar of jdbc with dependencies, you can execute this command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you can find it under the path <code>{module.name}/target</code>.</p><h3 id="installation-by-docker-dockerfile" tabindex="-1"><a class="header-anchor" href="#installation-by-docker-dockerfile"><span>Installation by Docker (Dockerfile)</span></a></h3>`,14),B={href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},j=s(`<ol><li><strong>Get IoTDB docker image</strong><ul><li><strong>Recommended:</strong> Using <code>docker pull apache/iotdb:latest</code> can get the latest docker image.</li><li>Users can also build a docker image themselves. Now a Dockerfile has been written at docker/src/main/Dockerfile. <ul><li>Way 1: <code>$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker</code></li><li>Way 2:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> $ <span class="token function">git</span> clone https://github.com/apache/iotdb
 $ <span class="token builtin class-name">cd</span> iotdb
 $ <span class="token builtin class-name">cd</span> <span class="token function">docker</span>
 $ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> iotdb:base <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p>Once the docker image has been built locally (the tag is iotdb:base in this example), you are almost done!</p><ol start="2"><li><strong>Create docker volume for data files and logs:</strong></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume create mydata
$ <span class="token function">docker</span> volume create mylogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>Run a docker container:</strong></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token parameter variable">-v</span> mydata:/iotdb/data <span class="token parameter variable">-v</span> mylogs:/iotdb/logs <span class="token parameter variable">-d</span> iotdb:base /iotdb/bin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If success, you can run <code>docker ps</code>, and get something like the following:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
2a68b6944cb5        iotdb:base          &quot;/iotdb/bin/start-se…&quot;   4 minutes ago       Up 5 minutes        0.0.0.0:6667-&gt;6667/tcp              laughing_meitner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the above command to get the container ID:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> container <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>suppose the ID is &lt;C_ID&gt;.</p><p>And get the docker IP by the following, suppose the IP is &lt;C_IP&gt;.:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now IoTDB server has started succesfully.</p><ol start="4"><li>If you just want to have a try by using iotdb-cli, you can:</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>C_ID<span class="token operator">&gt;</span> /bin/bash
$ <span class="token punctuation">(</span>now you have enter the container<span class="token punctuation">)</span>: /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, if you have a iotdb-cli locally, execute the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ /%IOTDB_HOME%/sbin/start-cli.sh <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>If you want to write codes to insert data and query data, please add the following dependence:</li></ol><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.13.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),q={href:"https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb",target:"_blank",rel:"noopener noreferrer"};function N(S,W){const t=i("ExternalLinkIcon");return l(),r("div",null,[d,p,e("ul",null,[u,h,e("li",null,[a("Using Docker：The path to the dockerfile is "),e("a",m,[a("https://github.com/apache/iotdb/blob/master/docker/Dockerfile"),n(t)])])]),b,g,v,e("blockquote",null,[e("p",null,[a("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with '"),e("a",k,[a("mvnw.sh"),n(t)]),a("' or 'mvnw.cmd'.")]),f]),e("p",null,[a("You can download the binary file from:"),y,e("a",_,[a("Download page"),n(t)])]),I,e("p",null,[a("You can get the released source code from "),e("a",x,[a("https://iotdb.apache.org/Download/"),n(t)]),a(", or from the git repository "),e("a",D,[a("https://github.com/apache/iotdb/tree/master"),n(t)]),T,a(" You can download the source code from:")]),w,e("p",null,[a("Apache IoTDB' Docker image is released on "),e("a",B,[a("https://hub.docker.com/r/apache/iotdb"),n(t)]),a(",")]),j,e("p",null,[a("Some examples about how to use IoTDB with IoTDB-JDBC can be found at: "),e("a",q,[a("https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb"),n(t)])])])}const E=o(c,[["render",N],["__file","WayToGetIoTDB.html.vue"]]),$=JSON.parse('{"path":"/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html","title":"","lang":"en-US","frontmatter":{"description":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Way to get IoTDB binary files IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them: Installation from source code. If yo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-20T06:31:38.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-20T06:31:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-20T06:31:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Way to get IoTDB binary files","slug":"way-to-get-iotdb-binary-files","link":"#way-to-get-iotdb-binary-files","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"Installation from source code","slug":"installation-from-source-code","link":"#installation-from-source-code","children":[]},{"level":3,"title":"Installation by Docker (Dockerfile)","slug":"installation-by-docker-dockerfile","link":"#installation-by-docker-dockerfile","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1716186698000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Zhijia Cao","email":"caozhijia@126.com","commits":1}]},"readingTime":{"minutes":2.91,"words":873},"filePathRelative":"UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{E as comp,$ as data};
