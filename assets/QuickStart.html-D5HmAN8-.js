import{_ as r,r as l,o as d,c,b as e,d as t,a as i,w as o,e as n}from"./app-nVIpYHtH.js";const u={},m=e("h1",{id:"quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start"},[e("span",null,"Quick Start")])],-1),h=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites"},[e("span",null,"Prerequisites")])],-1),p=e("p",null,"To use IoTDB, you need to have:",-1),v=e("ol",null,[e("li",null,"Java >= 1.8 (Please make sure the environment path has been set)"),e("li",null,'Set the max open files num as 65535 to avoid "too many open files" problem.')],-1),g=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation"},[e("span",null,"Installation")])],-1),b=e("p",null,"IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:",-1),f=e("li",null,"Installation from source code. If you need to modify the code yourself, you can use this method.",-1),_=e("li",null,"Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.(Coming Soon...)",-1),x={href:"https://github.com/apache/iotdb/blob/master/docker/src/main",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download"},[e("span",null,"Download")])],-1),w=e("br",null,null,-1),I={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},S=n('<h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h2><p>configuration files are under &quot;conf&quot; folder</p><ul><li>environment config module (<code>iotdb-env.bat</code>, <code>iotdb-env.sh</code>),</li><li>system config module (<code>iotdb-engine.properties</code>)</li><li>log config module (<code>logback.xml</code>).</li></ul>',3),y=n(`<h2 id="start" tabindex="-1"><a class="header-anchor" href="#start"><span>Start</span></a></h2><p>You can go through the following step to test the installation, if there is no error after execution, the installation is completed.</p><h3 id="start-iotdb" tabindex="-1"><a class="header-anchor" href="#start-iotdb"><span>Start IoTDB</span></a></h3><p>Users can start IoTDB by the start-server script under the sbin folder.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Unix/OS X
&gt; nohup sbin/start-server.sh -b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">nohup</span> sbin/start-server.sh <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>parameters:</p><ul><li>by default, iotdb will run in the background</li><li>&quot;-v&quot;: show iotdb version</li><li>&quot;-f&quot;: run iotdb on the foreground and print logs on the console (by default before v0.14)</li><li>&quot;-b&quot;: run iotdb in the background which does not print logs on the console</li><li>&quot;-p &lt;pidfile&gt;&quot;: save the pid into target pidfile</li><li>&quot;-h&quot;: help</li><li>&quot;printgc&quot;(must be at the end of the command): print the GC log (deprecated from v0.14 on)</li><li>&quot;-g&quot;: print the GC log</li><li>&quot;-c &lt;config folder&gt;&quot;: set IOTDB_CONF parameter</li><li>&quot;-D &lt;a=b&gt;&quot;: set system variables to IoTDB program.</li><li>&quot;-H &lt;filePath&gt; save heap dump file to &lt;filePath&gt; (only works when iotdb memory &lt;16GB)&quot;</li><li>&quot;-E &lt;\\filePath&gt; save error file of JVM to &lt;filePath&gt;&quot;</li><li>&quot;-X &lt;command&gt; equal to -XX:&lt;command&gt;&quot;</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Windows
&gt; sbin\\start-server.bat -c &lt;conf_path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that Windows OS only support -v, -c, -f and -b.</p><p>if you want to use JMX to connect IOTDB, you may need to add/modify</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-Dcom.sun.management.jmxremote.rmi.port=&lt;PORT&gt; -Djava.rmi.server.hostname=&lt;IP&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),k={href:"http://iotdb-env.sh",target:"_blank",rel:"noopener noreferrer"},E=n(`<h3 id="use-cli" tabindex="-1"><a class="header-anchor" href="#use-cli"><span>Use Cli</span></a></h3><p>IoTDB offers different ways to interact with server, here we introduce basic steps of using Cli tool to insert and query data.</p><p>After installing IoTDB, there is a default user &#39;root&#39;, its default password is also &#39;root&#39;. Users can use this<br> default user to login Cli to use IoTDB. The startup script of Cli is the start-cli script in the folder sbin. When executing the script, user should assign<br> IP, PORT, USER_NAME and PASSWORD. The default parameters are &quot;-h 127.0.0.1 -p 6667 -u root -pw -root&quot;.</p><p>Here is the command for starting the Cli:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Unix/OS X
&gt; sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root

# Windows
&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command line client is interactive so if everything is ready you should see the welcome logo and statements:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ \`.|_   _ \\
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x


IoTDB&gt; login successfully
IoTDB&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basic-commands-for-iotdb" tabindex="-1"><a class="header-anchor" href="#basic-commands-for-iotdb"><span>Basic commands for IoTDB</span></a></h3><p>Now, let us introduce the way of creating timeseries, inserting data and querying data.</p><p>The data in IoTDB is organized as timeseries, in each timeseries there are some data-time pairs, and every timeseries is owned by a storage group. Before defining a timeseries, we should define a storage group using SET STORAGE GROUP, and here is an example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SET STORAGE GROUP TO root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We can also use SHOW STORAGE GROUP to check created storage group:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW STORAGE GROUP
+-----------------------------------+
|                      Storage Group|
+-----------------------------------+
|                            root.ln|
+-----------------------------------+
storage group number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the storage group is set, we can use CREATE TIMESERIES to create new timeseries. When we create a timeseries, we should define its data type and the encoding scheme. We create two timeseries as follow:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN
IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To query the specific timeseries, use SHOW TIMESERIES &lt;Path&gt;. &lt;Path&gt; represents the path of the timeseries. Its default value is null, which means querying all the timeseries in the system(the same as using &quot;SHOW TIMESERIES root&quot;). Here are the examples:</p><ol><li>Query all timeseries in the system:</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES
+-------------------------------+---------------+--------+--------+
|                     Timeseries|  Storage Group|DataType|Encoding|
+-------------------------------+---------------+--------+--------+
|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|
|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|
+-------------------------------+---------------+--------+--------+
Total timeseries number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Query a specific timeseries(root.ln.wf01.wt01.status):</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status
+------------------------------+--------------+--------+--------+
|                    Timeseries| Storage Group|DataType|Encoding|
+------------------------------+--------------+--------+--------+
|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|
+------------------------------+--------------+--------+--------+
Total timeseries number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Insert timeseries data is the basic operation of IoTDB, you can use ‘INSERT’ command to finish this. Before insert you should assign the timestamp and the suffix path name:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);
IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The data we’ve just inserted displays like this:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SELECT status FROM root.ln.wf01.wt01
+-----------------------+------------------------+
|                   Time|root.ln.wf01.wt01.status|
+-----------------------+------------------------+
|1970-01-01T08:00:00.100|                    true|
|1970-01-01T08:00:00.200|                   false|
+-----------------------+------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can also query several timeseries data at once like this:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SELECT * FROM root.ln.wf01.wt01
+-----------------------+--------------------------+-----------------------------+
|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------+--------------------------+-----------------------------+
|1970-01-01T08:00:00.100|                      true|                         null|
|1970-01-01T08:00:00.200|                     false|                        20.71|
+-----------------------+--------------------------+-----------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The commands to exit the Cli are:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; quit
or
IoTDB&gt; exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),D=n(`<h3 id="stop-iotdb" tabindex="-1"><a class="header-anchor" href="#stop-iotdb"><span>Stop IoTDB</span></a></h3><p>The server can be stopped with ctrl-C or the following script:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Unix/OS X
&gt; sbin/stop-server.sh

# Windows
&gt; sbin\\stop-server.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="administration-management" tabindex="-1"><a class="header-anchor" href="#administration-management"><span>Administration management</span></a></h3><p>There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.</p><p>You can alter the password of root using the following command：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),B={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Administration-Management/Administration.html",target:"_blank",rel:"noopener noreferrer"},q=n('<h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration"><span>Basic configuration</span></a></h2><p>The configuration files is in the <code>conf</code> folder, includes:</p><ul><li>environment configuration (<code>iotdb-env.bat</code>, <code>iotdb-env.sh</code>),</li><li>system configuration (<code>iotdb-engine.properties</code>)</li><li>log configuration (<code>logback.xml</code>).</li></ul>',3);function O(R,A){const s=l("RouteLink"),a=l("ExternalLinkIcon");return d(),c("div",null,[m,e("p",null,[t("This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's "),i(s,{to:"/UserGuide/V0.13.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:o(()=>[t("User Guide")]),_:1}),t(".")]),h,p,v,g,b,e("ul",null,[f,_,e("li",null,[t("Using Docker：The path to the dockerfile is "),e("a",x,[t("github"),i(a)])])]),T,e("p",null,[t("You can download the binary file from:"),w,e("a",I,[t("Download Page"),i(a)])]),S,e("p",null,[t("For more, see "),i(s,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:o(()=>[t("Config")]),_:1}),t(" in detail.")]),y,e("p",null,[t("to $IOTDB_JMX_OPTS in "),e("a",k,[t("iotdb-env.sh"),i(a)]),t(". or iotdb-env.bat")]),E,e("p",null,[t("For more on what commands are supported by IoTDB SQL, see "),i(s,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>[t("SQL Reference")]),_:1}),t(".")]),D,e("p",null,[t("More about administration management："),e("a",B,[t("Administration Management"),i(a)])]),q])}const C=r(u,[["render",O],["__file","QuickStart.html.vue"]]),N=JSON.parse(`{"path":"/UserGuide/V0.13.x/QuickStart/QuickStart.html","title":"Quick Start","lang":"en-US","frontmatter":{"description":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's . Prerequisites To use IoTDB, you need...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Quick Start"}],["meta",{"property":"og:description","content":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's . Prerequisites To use IoTDB, you need..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick Start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Download","slug":"download","link":"#download","children":[]},{"level":2,"title":"Configurations","slug":"configurations","link":"#configurations","children":[]},{"level":2,"title":"Start","slug":"start","link":"#start","children":[{"level":3,"title":"Start IoTDB","slug":"start-iotdb","link":"#start-iotdb","children":[]},{"level":3,"title":"Use Cli","slug":"use-cli","link":"#use-cli","children":[]},{"level":3,"title":"Basic commands for IoTDB","slug":"basic-commands-for-iotdb","link":"#basic-commands-for-iotdb","children":[]},{"level":3,"title":"Stop IoTDB","slug":"stop-iotdb","link":"#stop-iotdb","children":[]},{"level":3,"title":"Administration management","slug":"administration-management","link":"#administration-management","children":[]}]},{"level":2,"title":"Basic configuration","slug":"basic-configuration","link":"#basic-configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.08,"words":1225},"filePathRelative":"UserGuide/V0.13.x/QuickStart/QuickStart.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{C as comp,N as data};
