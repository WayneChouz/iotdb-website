import{_ as l,r as d,o as r,c,b as e,d as t,a as i,w as n,e as s}from"./app-vSSc7VXH.js";const u={},m=e("h1",{id:"quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start"},[e("span",null,"Quick Start")])],-1),h=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites"},[e("span",null,"Prerequisites")])],-1),p=e("p",null,"To use IoTDB, you need to have:",-1),v=e("ol",null,[e("li",null,"Java >= 1.8 (Please make sure the environments PATH variable has been set to include the Java bin directory)"),e("li",null,'Set the max number of open files to at least 65535 in order to avoid "too many open files" problem. ')],-1),b=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation"},[e("span",null,"Installation")])],-1),g=e("p",null,"IoTDB can be installed using one of the following three installation methods:",-1),f=e("li",null,"Installation from source code. If you need to modify the code yourself, you can use this method.",-1),_=e("li",null,"Installation from binary files. Download the binary distribution from the official website. This is the recommended method, in which you will get a binary released package which you can use out-of-the-box. ",-1),x={href:"https://github.com/apache/iotdb/blob/master/docker/src/main",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download"},[e("span",null,"Download")])],-1),w=e("br",null,null,-1),I={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},S=s('<h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h2><p>Configuration files are located in the <code>conf</code> folder</p><ul><li>environment config module (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system config module (<code>iotdb-datanode.properties</code>)</li><li>log config module (<code>logback.xml</code>).</li></ul>',3),y=s(`<h2 id="start" tabindex="-1"><a class="header-anchor" href="#start"><span>Start</span></a></h2><p>You can go through the following step to test the installation.<br> If there is no error after execution, the installation is completed.</p><h3 id="starting-iotdb" tabindex="-1"><a class="header-anchor" href="#starting-iotdb"><span>Starting IoTDB</span></a></h3><p>IoTDB is designed as distributed database. You can however start it in a single node <code>standalone mode</code>.<br> In order to test your configuration, you can first start everything in <code>standalone mode</code> (i.e. 1 ConfigNode and 1 DataNode) to check everything works as expected.</p><p>Users can start IoTDB in standalone mode by using the <code>start-standalone</code> script under the <code>sbin</code> folder.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Unix/OS X
&gt; bash sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Windows
&gt; sbin\\start-standalone.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: In order to run IoTDB in standalone mode, you need to ensure that all addresses are set to 127.0.0.1.<br> If you need to access the IoTDB from a different machine, please change the configuration item <code>dn_rpc_address</code> to the public IP of the machine where IoTDB is running and be sure to set <code>replication factors</code> to 1, which is currently the default setting.<br> It is recommended to use <code>SimpleConsensus</code> in this mode, as this has performance advantages in this mode of operation.</p><h3 id="using-the-command-line-interfave-cli" tabindex="-1"><a class="header-anchor" href="#using-the-command-line-interfave-cli"><span>Using the Command Line Interfave (CLI)</span></a></h3><p>IoTDB offers several ways to interact with server, here we introduce basic steps of using the <code>CLI tool</code> to insert and query data.</p><p>After installing IoTDB, there is a pre-configured default user named <code>root</code>, its default password is also set to <code>root</code>.<br> Users can use this default credentials to login to IoTDB from the <code>CLI</code>.<br> Please use the <code>start-cli</code> scriopt in the <code>sbin</code> folder in order to start the <code>CLI</code>.</p><p>When executing the script, user should assign: <code>HOST/IP</code>, <code>PORT</code>, <code>USER_NAME</code> and <code>PASSWORD</code>.</p><p>The default parameters are <code>-h 127.0.0.1 -p 6667 -u root -pw root</code>.</p><p>Here are the commands for starting the CLI:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Unix/OS X
&gt; bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root

# Windows
&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command line interface is interactive.<br> If everything is set up correctly, you should see the IoTDB logo and welcome statement:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ \`.|_   _ \\
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x


Successfully login at 127.0.0.1:6667
IoTDB&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basic-commands-for-iotdb" tabindex="-1"><a class="header-anchor" href="#basic-commands-for-iotdb"><span>Basic commands for IoTDB</span></a></h3><p>Next, let us go a bit more into detail to how to create a timeseries, insert data into it and how to query data from it.</p><p>Data in IoTDB is organized as a set of timeseries, in each timeseries there are some timestamp-data pairs.<br> Every timeseries belongs to a database.</p><p>All commands are executed in an SQL-like syntax we call <code>IoTDB SQL</code>.</p><p>Before defining a timeseries, we should define the database it should belong to using <code>CREATE DATABASE</code>.<br> Here&#39;s is an example on how to do that:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We can also use <code>SHOW DATABASES</code> to list all databases present:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES
+-----------------------------------+
|                           Database|
+-----------------------------------+
|                            root.ln|
+-----------------------------------+
Database number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the database is created, we can use <code>CREATE TIMESERIES</code> to create new timeseries.<br> When we create a timeseries, we should define its structure as well as the data types used for each field along with their encoding scheme.</p><p>We can create two timeseries the following way:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN
IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To query a specific timeseries, use the <code>SHOW TIMESERIES \\&lt;Path\\&gt;</code> command. <code>\\&lt;Path\\&gt;</code> represents the path of the timeseries.<br> Its default value is null, which means that we&#39;re querying all timeseries in the system (the same as using <code>SHOW TIMESERIES root</code>).</p><p>Here are some examples:</p><ol><li>Query all timeseries in the system:</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES
+-------------------------------+---------------+--------+--------+
|                     Timeseries|       Database|DataType|Encoding|
+-------------------------------+---------------+--------+--------+
|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|
|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|
+-------------------------------+---------------+--------+--------+
Total timeseries number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Query a specific timeseries (root.ln.wf01.wt01.status):</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status
+------------------------------+--------------+--------+--------+
|                    Timeseries|      Database|DataType|Encoding|
+------------------------------+--------------+--------+--------+
|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|
+------------------------------+--------------+--------+--------+
Total timeseries number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Insertion of timeseries data is the probably most basic operation of IoTDB.<br> You can use the <code>INSERT</code> command to do this.</p><p>Here come some examples on how to do that.<br> In the <code>INTO</code> part we tell IoTDB which timeseries we want to store the data in as well as which fields we&#39;ll be filling.<br> Please note, that the timestamp field is mandatory for this step and that we don&#39;t necessarily have to fill all fields defined of the timeseries we&#39;re inserting into:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);
IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The data we’ve just inserted will then look like this if we query it:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SELECT status FROM root.ln.wf01.wt01
+-----------------------+------------------------+
|                   Time|root.ln.wf01.wt01.status|
+-----------------------+------------------------+
|1970-01-01T08:00:00.100|                    true|
|1970-01-01T08:00:00.200|                   false|
+-----------------------+------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can also query several timeseries fields at once like this:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SELECT * FROM root.ln.wf01.wt01
+-----------------------+--------------------------+-----------------------------+
|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------+--------------------------+-----------------------------+
|1970-01-01T08:00:00.100|                      true|                         null|
|1970-01-01T08:00:00.200|                     false|                        20.71|
+-----------------------+--------------------------+-----------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The commands to exit the CLI are:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; quit
or
IoTDB&gt; exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),D=e("code",null,"IoTDB SQL",-1),E=s(`<h3 id="stopping-iotdb" tabindex="-1"><a class="header-anchor" href="#stopping-iotdb"><span>Stopping IoTDB</span></a></h3><p>The server can be stopped using <code>ctrl-C</code> or by running the following script:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Unix/OS X
&gt; bash sbin/stop-standalone.sh

# Windows
&gt; sbin\\stop-standalone.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: In Linux, please add the <code>sudo</code> as far as possible, or else the stopping process may fail. </p>`,4),B=s(`<h3 id="administration" tabindex="-1"><a class="header-anchor" href="#administration"><span>Administration</span></a></h3><p>When installing IoTDB, there is a default user which is automatically pre-configured.<br> Its username is <code>root</code>, and the default password for it is also <code>root</code>.<br> This user is a user with administrative privileges, who cannot be deleted and has all privileges assigned to it.<br> Neither can new privileges be granted to the root user nor can privileges owned by it be revoked.</p><p>We strongly recommend you change the default password.<br> You do this using the following command：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k=s('<h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration"><span>Basic configuration</span></a></h2><p>The configuration files are located in the <code>conf</code> directory.</p><p>The most important ones being:</p><ul><li>environment variable configuration (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system configuration (<code>iotdb-datanode.properties</code>)</li><li>log configuration (<code>logback.xml</code>).</li></ul>',4);function A(C,L){const a=d("RouteLink"),o=d("ExternalLinkIcon");return r(),c("div",null,[m,e("p",null,[t("This short guide will walk you through the basic process of using IoTDB. For a more comprehensive guide, please visit our website's "),i(a,{to:"/UserGuide/V1.2.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:n(()=>[t("User Guide")]),_:1}),t(".")]),h,p,v,b,g,e("ul",null,[f,_,e("li",null,[t("Using Docker：The path to the dockerfile is "),e("a",x,[t("github"),i(o)])])]),T,e("p",null,[t("You can download the binary distribution from:"),w,e("a",I,[t("Download Page"),i(o)])]),S,e("p",null,[t("For more information, please go to "),i(a,{to:"/UserGuide/V1.2.x/stage/DataNode-Config-Manual.html"},{default:n(()=>[t("Config")]),_:1}),t(".")]),y,e("p",null,[t("For more information on which commands are supported by "),D,t(", please see "),i(a,{to:"/UserGuide/V1.2.x/SQL-Manual/SQL-Manual.html"},{default:n(()=>[t("SQL Reference")]),_:1}),t(".")]),E,e("p",null,[t("More explanations on running IoTDB in a clustered environment are available at "),i(a,{to:"/UserGuide/V1.2.x/stage/Cluster/Cluster-Setup.html"},{default:n(()=>[t("Cluster-Setup")]),_:1}),t(".")]),B,e("p",null,[t("More about administration options："),i(a,{to:"/UserGuide/V1.2.x/User-Manual/Security-Management.html"},{default:n(()=>[t("Administration Management")]),_:1})]),k])}const N=l(u,[["render",A],["__file","QuickStart.html.vue"]]),O=JSON.parse(`{"path":"/UserGuide/V1.2.x/QuickStart/QuickStart.html","title":"Quick Start","lang":"en-US","frontmatter":{"description":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more comprehensive guide, please visit our website's . Prerequisites To use IoTDB, you...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Quick Start"}],["meta",{"property":"og:description","content":"Quick Start This short guide will walk you through the basic process of using IoTDB. For a more comprehensive guide, please visit our website's . Prerequisites To use IoTDB, you..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-15T13:16:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-15T13:16:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quick Start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-15T13:16:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Download","slug":"download","link":"#download","children":[]},{"level":2,"title":"Configurations","slug":"configurations","link":"#configurations","children":[]},{"level":2,"title":"Start","slug":"start","link":"#start","children":[{"level":3,"title":"Starting IoTDB","slug":"starting-iotdb","link":"#starting-iotdb","children":[]},{"level":3,"title":"Using the Command Line Interfave (CLI)","slug":"using-the-command-line-interfave-cli","link":"#using-the-command-line-interfave-cli","children":[]},{"level":3,"title":"Basic commands for IoTDB","slug":"basic-commands-for-iotdb","link":"#basic-commands-for-iotdb","children":[]},{"level":3,"title":"Stopping IoTDB","slug":"stopping-iotdb","link":"#stopping-iotdb","children":[]},{"level":3,"title":"Administration","slug":"administration","link":"#administration","children":[]}]},{"level":2,"title":"Basic configuration","slug":"basic-configuration","link":"#basic-configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1702646176000,"contributors":[{"name":"Christofer Dutz","email":"christofer.dutz@c-ware.de","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.84,"words":1453},"filePathRelative":"UserGuide/V1.2.x/QuickStart/QuickStart.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{N as comp,O as data};
