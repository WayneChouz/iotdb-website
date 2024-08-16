import{_ as s,r as o,o as r,c as d,b as t,d as e,a as n,e as a}from"./app-CIPkfidu.js";const l={},c=a(`<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h1><p><strong>How can I identify my version of IoTDB?</strong></p><p>There are several ways to identify the version of IoTDB that you are using:</p><ul><li>Launch IoTDB&#39;s Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost
 _____       _________  ______   ______    
|_   _|     |  _   _  ||_   _ \`.|_   _ \\   
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | 
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Check pom.xml file:</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;version&gt;x.x.x&lt;/version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Use JDBC API:</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Use Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show version
show version
+---------------+
|version        |
+---------------+
|x.x.x          |
+---------------+
Total line number = 1
It costs 0.241s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Where can I find IoTDB logs?</strong></p><p>Suppose your root directory is:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ pwd
/workspace/iotdb

$ ls -l
server/
cli/
pom.xml
Readme.md
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>Let <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>By default settings, the logs are stored under <code>IOTDB_HOME/logs</code>. You can change log level and storage path by configuring <code>logback.xml</code> under <code>IOTDB_HOME/conf</code>.</p><p><strong>Where can I find IoTDB data files?</strong></p><p>By default settings, the data files (including tsfile, metadata, and WAL files) are stored under <code>IOTDB_HOME/data/datanode</code>.</p><p><strong>How do I know how many time series are stored in IoTDB?</strong></p><p>Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the result, there is a statement shows <code>Total timeseries number</code>, this number is the timeseries number in IoTDB.</p><p>In the current version, IoTDB supports querying the number of time series. Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; count timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using Linux, you can use the following shell command:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l
&gt;   6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Can I use Hadoop and Spark to read TsFile in IoTDB?</strong></p>`,28),u={href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/apache/iotdb/tree/master/spark-tsfile",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/apache/iotdb/tree/master/grafana-plugin",target:"_blank",rel:"noopener noreferrer"},v=a(`<p><strong>How does IoTDB handle duplicate points?</strong></p><p>A data point is uniquely identified by a full time series path (e.g. <code>root.vehicle.d0.s0</code>) and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB updates the value of this point instead of inserting a new point.</p><p><strong>How can I tell what type of the specific timeseries?</strong></p><p>Use <code>SHOW TIMESERIES &lt;timeseries path&gt;</code> SQL in IoTDB&#39;s Command Line Interface:</p><p>For example, if you want to know the type of all timeseries, the &lt;timeseries path&gt; should be <code>root</code>. The statement will be:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to query specific sensor, you can replace the &lt;timeseries path&gt; with the sensor name. For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Otherwise, you can also use wildcard in timeseries path:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>How can I change IoTDB&#39;s Cli time display format?</strong></p><p>The default IoTDB&#39;s Cli time display format is readable (e.g. <code>1970-01-01T08:00:00.001</code>), if you want to display time in timestamp type or other readable format, add parameter <code>-disableISO8601</code> in start command:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>How to handle error <code>IndexOutOfBoundsException</code> from <code>org.apache.ratis.grpc.server.GrpcLogAppender</code>?</strong></p><p>It is an internal error introduced by Ratis 2.4.1 dependency, and we can safely ignore this exception as it will<br> not affect normal operations. We will fix this message in the incoming releases.</p>`,15);function g(h,_){const i=o("ExternalLinkIcon");return r(),d("div",null,[c,t("p",null,[e("Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports "),t("a",u,[e("Hadoop"),n(i)]),e(", "),t("a",p,[e("Spark"),n(i)]),e(" and "),t("a",m,[e("Grafana"),n(i)]),e(" visualization tool.")]),v])}const x=s(l,[["render",g],["__file","Frequently-asked-questions.html.vue"]]),f=JSON.parse(`{"path":"/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.html","title":"Frequently Asked Questions","lang":"en-US","frontmatter":{"description":"Frequently Asked Questions How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Command Line Interf...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Frequently Asked Questions"}],["meta",{"property":"og:description","content":"Frequently Asked Questions How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Command Line Interf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frequently Asked Questions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"UserGuide/V1.1.x/FAQ/Frequently-asked-questions.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{x as comp,f as data};
