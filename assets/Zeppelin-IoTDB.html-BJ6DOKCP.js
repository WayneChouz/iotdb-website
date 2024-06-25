import{_ as i,r as o,o as l,c as r,b as e,d as n,a as t,w as c,e as s}from"./app-vSSc7VXH.js";const d={},u=s('<h2 id="zeppelin-iotdb" tabindex="-1"><a class="header-anchor" href="#zeppelin-iotdb"><span>Zeppelin-IoTDB</span></a></h2><h3 id="about-zeppelin" tabindex="-1"><a class="header-anchor" href="#about-zeppelin"><span>About Zeppelin</span></a></h3><p>Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with SQL, Scala, etc. The operations can be saved as documents, just like Jupyter. Zeppelin has already supported many data sources, including Spark, ElasticSearch, Cassandra, and InfluxDB. Now, we have enabled Zeppelin to operate IoTDB via SQL.</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png" alt="iotdb-note-snapshot" tabindex="0" loading="lazy"><figcaption>iotdb-note-snapshot</figcaption></figure><h3 id="zeppelin-iotdb-interpreter" tabindex="-1"><a class="header-anchor" href="#zeppelin-iotdb-interpreter"><span>Zeppelin-IoTDB Interpreter</span></a></h3><h4 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h4><table><thead><tr><th style="text-align:center;">IoTDB Version</th><th style="text-align:center;">Java Version</th><th style="text-align:center;">Zeppelin Version</th></tr></thead><tbody><tr><td style="text-align:center;">&gt;=<code>0.12.0</code></td><td style="text-align:center;">&gt;=<code>1.8.0_271</code></td><td style="text-align:center;"><code>&gt;=0.9.0</code></td></tr></tbody></table>',7),k=e("code",null,"$IoTDB_HOME",-1),m=e("p",null,"Install Zeppelin:",-1),b={href:"https://zeppelin.apache.org/download.html#",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.apache.org/dyn/closer.cgi/zeppelin/zeppelin-0.9.0/zeppelin-0.9.0-bin-netinst.tgz",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zeppelin.apache.org/docs/latest/setup/basics/how_to_build.html",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"mvn clean package -pl zeppelin-web,zeppelin-server -am -DskipTests",-1),f=s(`<p>Suppose Zeppelin is placed at <code>$Zeppelin_HOME</code>.</p><h4 id="build-interpreter" tabindex="-1"><a class="header-anchor" href="#build-interpreter"><span>Build Interpreter</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> cd $IoTDB_HOME
 mvn clean package -pl zeppelin-interpreter -am -DskipTests -P get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The interpreter will be in the folder:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> $IoTDB_HOME/zeppelin-interpreter/target/zeppelin-{version}-SNAPSHOT-jar-with-dependencies.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="install-interpreter" tabindex="-1"><a class="header-anchor" href="#install-interpreter"><span>Install Interpreter</span></a></h4><p>Once you have built your interpreter, create a new folder under the Zeppelin interpreter directory and put the built interpreter into it.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> cd $IoTDB_HOME
 mkdir -p $Zeppelin_HOME/interpreter/iotdb
 cp $IoTDB_HOME/zeppelin-interpreter/target/zeppelin-{version}-SNAPSHOT-jar-with-dependencies.jar $Zeppelin_HOME/interpreter/iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="running-zeppelin-and-iotdb" tabindex="-1"><a class="header-anchor" href="#running-zeppelin-and-iotdb"><span>Running Zeppelin and IoTDB</span></a></h4><p>Go to <code>$Zeppelin_HOME</code> and start Zeppelin by running:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> ./bin/zeppelin-daemon.sh start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or in Windows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> .\\bin\\zeppelin.cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Go to <code>$IoTDB_HOME</code> and start IoTDB server:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> # Unix/OS X
 &gt; nohup sbin/start-server.sh &gt;/dev/null 2&gt;&amp;1 &amp;
 or
 &gt; nohup sbin/start-server.sh -c &lt;conf_path&gt; -rpc_port &lt;rpc_port&gt; &gt;/dev/null 2&gt;&amp;1 &amp;
 
 # Windows
 &gt; sbin\\start-server.bat -c &lt;conf_path&gt; -rpc_port &lt;rpc_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-zeppelin-iotdb" tabindex="-1"><a class="header-anchor" href="#use-zeppelin-iotdb"><span>Use Zeppelin-IoTDB</span></a></h3>`,16),y={href:"http://127.0.0.1:8080/",target:"_blank",rel:"noopener noreferrer"},w=s(`<p>In the interpreter page:</p><ol><li>Click the <code>Create new node</code> button</li><li>Set the note name</li><li>Configure your interpreter</li></ol><p>Now you are ready to use your interpreter.</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png" alt="iotdb-create-note" tabindex="0" loading="lazy"><figcaption>iotdb-create-note</figcaption></figure><p>We provide some simple SQL to show the use of Zeppelin-IoTDB interpreter:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code> <span class="token keyword">SET</span> STORAGE <span class="token keyword">GROUP</span> <span class="token keyword">TO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
 <span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">BOOLEAN</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
 <span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
 <span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>hardware <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
 
 <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span>
 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span>
 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span>
 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span>
 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4.4</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span>
 <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
 <span class="token keyword">SELECT</span> <span class="token operator">*</span>
 <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01
 <span class="token keyword">WHERE</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">1</span>
   <span class="token operator">AND</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The screenshot is as follows:</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png" alt="iotdb-note-snapshot2" tabindex="0" loading="lazy"><figcaption>iotdb-note-snapshot2</figcaption></figure>`,8),T={href:"https://zeppelin.apache.org/docs/0.9.0/usage/display_system/basic.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[n("The above demo notebook can be found at "),e("code",null,"$IoTDB_HOME/zeppelin-interpreter/Zeppelin-IoTDB-Demo.zpln"),n(".")],-1),I=e("h3",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration"},[e("span",null,"Configuration")])],-1),x={href:"http://127.0.0.1:8080/#/interpreter",target:"_blank",rel:"noopener noreferrer"},E=s('<figure><img src="https://alioss.timecho.com/docs/img/github/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png" alt="iotdb-configuration" tabindex="0" loading="lazy"><figcaption>iotdb-configuration</figcaption></figure><p>The parameters you can configure are as follows:</p><table><thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>iotdb.host</td><td>127.0.0.1</td><td>IoTDB server host to connect to</td></tr><tr><td>iotdb.port</td><td>6667</td><td>IoTDB server port to connect to</td></tr><tr><td>iotdb.username</td><td>root</td><td>Username for authentication</td></tr><tr><td>iotdb.password</td><td>root</td><td>Password for authentication</td></tr><tr><td>iotdb.fetchSize</td><td>10000</td><td>Query fetch size</td></tr><tr><td>iotdb.zoneId</td><td></td><td>Zone Id</td></tr><tr><td>iotdb.enable.rpc.compression</td><td>FALSE</td><td>Whether enable rpc compression</td></tr><tr><td>iotdb.time.display.type</td><td>default</td><td>The time format to display</td></tr></tbody></table>',3);function D(z,S){const p=o("RouteLink"),a=o("ExternalLinkIcon");return l(),r("div",null,[u,e("p",null,[n("Install IoTDB: Reference to "),t(p,{to:"/UserGuide/V0.13.x/QuickStart/QuickStart.html"},{default:c(()=>[n("IoTDB Quick Start")]),_:1}),n(". Suppose IoTDB is placed at "),k,n(".")]),m,e("blockquote",null,[e("p",null,[n("Method A. Download directly: You can download "),e("a",b,[n("Zeppelin"),t(a)]),n(" and unpack the binary package. "),e("a",h,[n("netinst"),t(a)]),n(" binary package is recommended since it's relatively small by excluding irrelevant interpreters.")]),e("p",null,[n("Method B. Compile from source code: Reference to "),e("a",g,[n("build Zeppelin from source"),t(a)]),n(". The command is "),v,n(".")])]),f,e("p",null,[n("Wait for Zeppelin server to start, then visit "),e("a",y,[n("http://127.0.0.1:8080/"),t(a)])]),w,e("p",null,[n("You can also design more fantasy documents referring to "),e("a",T,[n("[1]"),t(a)]),n(" and others.")]),_,I,e("p",null,[n("You can configure the connection parameters in "),e("a",x,[n("http://127.0.0.1:8080/#/interpreter"),t(a)]),n(" :")]),E])}const B=i(d,[["render",D],["__file","Zeppelin-IoTDB.html.vue"]]),N=JSON.parse('{"path":"/UserGuide/V0.13.x/Ecosystem-Integration/Zeppelin-IoTDB.html","title":"","lang":"en-US","frontmatter":{"description":"Zeppelin-IoTDB About Zeppelin Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with S...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Zeppelin-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Zeppelin-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Zeppelin-IoTDB About Zeppelin Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png\\",\\"https://alioss.timecho.com/docs/img/github/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png\\",\\"https://alioss.timecho.com/docs/img/github/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png\\",\\"https://alioss.timecho.com/docs/img/github/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Zeppelin-IoTDB","slug":"zeppelin-iotdb","link":"#zeppelin-iotdb","children":[{"level":3,"title":"About Zeppelin","slug":"about-zeppelin","link":"#about-zeppelin","children":[]},{"level":3,"title":"Zeppelin-IoTDB Interpreter","slug":"zeppelin-iotdb-interpreter","link":"#zeppelin-iotdb-interpreter","children":[]},{"level":3,"title":"Use Zeppelin-IoTDB","slug":"use-zeppelin-iotdb","link":"#use-zeppelin-iotdb","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.33,"words":698},"filePathRelative":"UserGuide/V0.13.x/Ecosystem-Integration/Zeppelin-IoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{B as comp,N as data};
