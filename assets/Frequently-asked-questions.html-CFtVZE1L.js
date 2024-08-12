import{_ as n,r as s,o as r,c as d,b as e,d as t,a as o,e as i}from"./app-XaimuxhO.js";const l={},h=i(`<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h1><h2 id="general-faq" tabindex="-1"><a class="header-anchor" href="#general-faq"><span>General FAQ</span></a></h2><h3 id="_1-how-can-i-identify-my-version-of-iotdb" tabindex="-1"><a class="header-anchor" href="#_1-how-can-i-identify-my-version-of-iotdb"><span>1. How can I identify my version of IoTDB?</span></a></h3><p>There are several ways to identify the version of IoTDB that you are using:</p><ul><li>Launch IoTDB&#39;s Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-where-can-i-find-iotdb-logs" tabindex="-1"><a class="header-anchor" href="#_2-where-can-i-find-iotdb-logs"><span>2. Where can I find IoTDB logs?</span></a></h3><p>Suppose your root directory is:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ pwd
/workspace/iotdb

$ ls -l
server/
cli/
pom.xml
Readme.md
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>Let <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>By default settings, the logs are stored under <code>IOTDB_HOME/logs</code>. You can change log level and storage path by configuring <code>logback.xml</code> under <code>IOTDB_HOME/conf</code>.</p><h3 id="_3-where-can-i-find-iotdb-data-files" tabindex="-1"><a class="header-anchor" href="#_3-where-can-i-find-iotdb-data-files"><span>3. Where can I find IoTDB data files?</span></a></h3><p>By default settings, the data files (including tsfile, metadata, and WAL files) are stored under <code>IOTDB_HOME/data/datanode</code>.</p><h3 id="_4-how-do-i-know-how-many-time-series-are-stored-in-iotdb" tabindex="-1"><a class="header-anchor" href="#_4-how-do-i-know-how-many-time-series-are-stored-in-iotdb"><span>4. How do I know how many time series are stored in IoTDB?</span></a></h3><p>Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the result, there is a statement shows <code>Total timeseries number</code>, this number is the timeseries number in IoTDB.</p><p>In the current version, IoTDB supports querying the number of time series. Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; count timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using Linux, you can use the following shell command:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l
&gt;   6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb" tabindex="-1"><a class="header-anchor" href="#_5-can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"><span>5. Can I use Hadoop and Spark to read TsFile in IoTDB?</span></a></h3>`,29),c={href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/apache/iotdb/tree/master/spark-tsfile",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/apache/iotdb/tree/master/grafana-plugin",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="_6-how-does-iotdb-handle-duplicate-points" tabindex="-1"><a class="header-anchor" href="#_6-how-does-iotdb-handle-duplicate-points"><span>6. How does IoTDB handle duplicate points?</span></a></h3><p>A data point is uniquely identified by a full time series path (e.g. <code>root.vehicle.d0.s0</code>) and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB updates the value of this point instead of inserting a new point.</p><h3 id="_7-how-can-i-tell-what-type-of-the-specific-timeseries" tabindex="-1"><a class="header-anchor" href="#_7-how-can-i-tell-what-type-of-the-specific-timeseries"><span>7. How can I tell what type of the specific timeseries?</span></a></h3><p>Use <code>SHOW TIMESERIES &lt;timeseries path&gt;</code> SQL in IoTDB&#39;s Command Line Interface:</p><p>For example, if you want to know the type of all timeseries, the &lt;timeseries path&gt; should be <code>root</code>. The statement will be:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to query specific sensor, you can replace the &lt;timeseries path&gt; with the sensor name. For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Otherwise, you can also use wildcard in timeseries path:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-how-can-i-change-iotdb-s-cli-time-display-format" tabindex="-1"><a class="header-anchor" href="#_8-how-can-i-change-iotdb-s-cli-time-display-format"><span>8. How can I change IoTDB&#39;s Cli time display format?</span></a></h3><p>The default IoTDB&#39;s Cli time display format is readable (e.g. <code>1970-01-01T08:00:00.001</code>), if you want to display time in timestamp type or other readable format, add parameter <code>-disableISO8601</code> in start command:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender" tabindex="-1"><a class="header-anchor" href="#_9-how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender"><span>9. How to handle error <code>IndexOutOfBoundsException</code> from <code>org.apache.ratis.grpc.server.GrpcLogAppender</code>?</span></a></h3><h3 id="_10-how-to-deal-with-estimated-out-of-memory-errors" tabindex="-1"><a class="header-anchor" href="#_10-how-to-deal-with-estimated-out-of-memory-errors"><span>10. How to deal with estimated out of memory errors?</span></a></h3><p>Report an error message:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>301: There is not enough memory to execute current fragment instance, current remaining free memory is 86762854, estimated memory usage for current fragment instance is 270139392
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Error analysis:<br> The datanode_memory_proportion parameter controls the memory divided to the query, and the chunk_timeseriesmeta_free_memory_proportion parameter controls the memory available for query execution.<br> By default the memory allocated to the query is 30% of the heap memory and the memory available for query execution is 20% of the query memory.<br> The error report shows that the current remaining memory available for query execution is 86762854B = 82.74MB, and the query is estimated to use 270139392B = 257.6MB of execution memory.</p><p>Some possible improvement items:</p><ul><li>Without changing the default parameters, crank up the heap memory of IoTDB greater than 4.2G (4.2G * 1024MB = 4300MB), 4300M * 30% * 20% = 258M &gt; 257.6M, which can fulfill the requirement.</li><li>Change parameters such as datanode_memory_proportion so that the available memory for query execution is &gt;257.6MB.</li><li>Reduce the number of exported time series.</li><li>Add slimit limit to the query statement, which is also an option to reduce the query time series.</li><li>Add align by device, which will export in device order, and the memory usage will be reduced to single-device level.</li></ul><p>It is an internal error introduced by Ratis 2.4.1 dependency, and we can safely ignore this exception as it will<br> not affect normal operations. We will fix this message in the incoming releases.</p><h2 id="faq-for-cluster-setup" tabindex="-1"><a class="header-anchor" href="#faq-for-cluster-setup"><span>FAQ for Cluster Setup</span></a></h2><h3 id="cluster-startup-and-stop" tabindex="-1"><a class="header-anchor" href="#cluster-startup-and-stop"><span>Cluster StartUp and Stop</span></a></h3><h4 id="_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason"><span>1. Failed to start ConfigNode for the first time, how to find the reason?</span></a></h4><ul><li>Make sure that the data/confignode directory is cleared when start ConfigNode for the first time.</li><li>Make sure that the &lt;IP+Port&gt; used by ConfigNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other ConfigNodes.</li><li>Make sure that the <code>cn_target_confignode_list</code> is configured correctly, which points to the alive ConfigNode. And if the ConfigNode is started for the first time, make sure that <code>cn_target_confignode_list</code> points to itself.</li><li>Make sure that the configuration(consensus protocol and replica number) of the started ConfigNode is accord with the <code>cn_target_confignode_list</code> ConfigNode.</li></ul><h4 id="_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" tabindex="-1"><a class="header-anchor" href="#_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster"><span>2. ConfigNode is started successfully, but why the node doesn&#39;t appear in the results of <code>show cluster</code>?</span></a></h4><ul><li>Examine whether the <code>cn_target_confignode_list</code> points to the correct address. If <code>cn_target_confignode_list</code> points to itself, a new ConfigNode cluster is started.</li></ul><h4 id="_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason"><span>3. Failed to start DataNode for the first time, how to find the reason?</span></a></h4><ul><li>Make sure that the data/datanode directory is cleared when start DataNode for the first time. If the start result is “Reject DataNode restart.”, maybe the data/datanode directory is not cleared.</li><li>Make sure that the &lt;IP+Port&gt; used by DataNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other DataNodes.</li><li>Make sure that the <code>dn_target_confignode_list</code> points to the alive ConfigNode.</li></ul><h4 id="_4-failed-to-remove-datanode-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_4-failed-to-remove-datanode-how-to-find-the-reason"><span>4. Failed to remove DataNode, how to find the reason?</span></a></h4>`,30),f={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},g=i("<li>Only when the number of available DataNodes in the cluster is greater than max(schema_replication_factor, data_replication_factor), removing operation can be executed.</li><li>Removing DataNode will migrate the data from the removing DataNode to other alive DataNodes. Data migration is based on Region, if some regions are migrated failed, the removing DataNode will always in the status of <code>Removing</code>.</li><li>If the DataNode is in the status of <code>Removing</code>, the regions in the removing DataNode will also in the status of <code>Removing</code> or <code>Unknown</code>, which are unavailable status. Besides, the removing DataNode will not receive new write requests from client.<br> And users can use the command <code>set system status to running</code> to make the status of DataNode from Removing to Running;<br> If users want to make the Regions from Removing to available status, command <code>migrate region from datanodeId1 to datanodeId2</code> can take effect, this command can migrate the regions to other alive DataNodes.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> command in the next version, which can remove DataNodes forced (The failed migrated regions will be discarded).</li>",3),_=i('<h4 id="_5-whether-the-down-datanode-can-be-removed" tabindex="-1"><a class="header-anchor" href="#_5-whether-the-down-datanode-can-be-removed"><span>5. Whether the down DataNode can be removed?</span></a></h4><ul><li>The down DataNode can be removed only when the replica factor of schema and data is greater than 1.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> function in the next version.</li></ul><h4 id="_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" tabindex="-1"><a class="header-anchor" href="#_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0"><span>6. What should be paid attention to when upgrading from 0.13 to 1.0?</span></a></h4><ul><li>The file structure between 0.13 and 1.0 is different, we can&#39;t copy the data directory from 0.13 to 1.0 to use directly.<br> If you want to load the data from 0.13 to 1.0, you can use the LOAD function.</li><li>The default RPC address of 0.13 is <code>0.0.0.0</code>, but the default RPC address of 1.0 is <code>127.0.0.1</code>.</li></ul><h3 id="cluster-restart" tabindex="-1"><a class="header-anchor" href="#cluster-restart"><span>Cluster Restart</span></a></h3><h4 id="_1-how-to-restart-any-confignode-in-the-cluster" tabindex="-1"><a class="header-anchor" href="#_1-how-to-restart-any-confignode-in-the-cluster"><span>1. How to restart any ConfigNode in the cluster?</span></a></h4>',6),v={href:"http://stop-confignode.sh",target:"_blank",rel:"noopener noreferrer"},b={href:"http://start-confignode.sh",target:"_blank",rel:"noopener noreferrer"},w=e("h4",{id:"_2-how-to-restart-any-datanode-in-the-cluster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-how-to-restart-any-datanode-in-the-cluster"},[e("span",null,"2. How to restart any DataNode in the cluster?")])],-1),y={href:"http://stop-datanode.sh",target:"_blank",rel:"noopener noreferrer"},x={href:"http://start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},I=e("h4",{id:"_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed"},[e("span",null,"3. If it's possible to restart ConfigNode using the old data directory when it's removed?")])],-1),k=e("ul",null,[e("li",null,`Can't. The running result will be "Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster".`)],-1),D=e("h4",{id:"_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed"},[e("span",null,"4. If it's possible to restart DataNode using the old data directory when it's removed?")])],-1),T=e("ul",null,[e("li",null,`Can't. The running result will be "Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...".`)],-1),B={id:"_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid",tabindex:"-1"},N={class:"header-anchor",href:"#_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid"},C={href:"http://start-confignode.sh/start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},q=i('<ul><li>Can&#39;t. The running result will be &quot;The port is already occupied&quot;.</li></ul><h3 id="cluster-maintenance" tabindex="-1"><a class="header-anchor" href="#cluster-maintenance"><span>Cluster Maintenance</span></a></h3><h4 id="_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" tabindex="-1"><a class="header-anchor" href="#_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown"><span>1. How to find the reason when Show cluster failed, and error logs like &quot;please check server status&quot; are shown?</span></a></h4><ul><li>Make sure that more than one half ConfigNodes are alive.</li><li>Make sure that the DataNode connected by the client is alive.</li></ul><h4 id="_2-how-to-fix-one-datanode-when-the-disk-file-is-broken" tabindex="-1"><a class="header-anchor" href="#_2-how-to-fix-one-datanode-when-the-disk-file-is-broken"><span>2. How to fix one DataNode when the disk file is broken?</span></a></h4>',5),F={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},H=e("li",null,"IoTDB will publish Node-Fix tools in the next version.",-1),M=e("h4",{id:"_3-how-to-decrease-the-memory-usage-of-confignode-datanode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-how-to-decrease-the-memory-usage-of-confignode-datanode"},[e("span",null,"3. How to decrease the memory usage of ConfigNode/DataNode?")])],-1),A=e("ul",null,[e("li",null,"Adjust the ON_HEAP_MEMORY、OFF_HEAP_MEMORY options in conf/confignode-env.sh and conf/datanode-env.sh.")],-1);function O(R,S){const a=s("ExternalLinkIcon");return r(),d("div",null,[h,e("p",null,[t("Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports "),e("a",c,[t("Hadoop"),o(a)]),t(", "),e("a",u,[t("Spark"),o(a)]),t(" and "),e("a",p,[t("Grafana"),o(a)]),t(" visualization tool.")]),m,e("ul",null,[e("li",null,[t("Examine whether the parameter of "),e("a",f,[t("remove-datanode.sh"),o(a)]),t(" is correct, only rpcIp:rpcPort and dataNodeId are correct parameter.")]),g]),_,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",v,[t("stop-confignode.sh"),o(a)]),t(" or kill PID of ConfigNode.")]),e("li",null,[t("Second step: execute "),e("a",b,[t("start-confignode.sh"),o(a)]),t(" to restart ConfigNode.")])]),w,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",y,[t("stop-datanode.sh"),o(a)]),t(" or kill PID of DataNode.")]),e("li",null,[t("Second step: execute "),e("a",x,[t("start-datanode.sh"),o(a)]),t(" to restart DataNode.")])]),I,k,D,T,e("h4",B,[e("a",N,[e("span",null,[t("5. Can we execute "),e("a",C,[t("start-confignode.sh/start-datanode.sh"),o(a)]),t(" successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?")])])]),q,e("ul",null,[e("li",null,[t("We can use "),e("a",F,[t("remove-datanode.sh"),o(a)]),t(" to fix it. Remove-datanode will migrate the data in the removing DataNode to other alive DataNodes.")]),H]),M,A])}const L=n(l,[["render",O],["__file","Frequently-asked-questions.html.vue"]]),P=JSON.parse(`{"path":"/UserGuide/V1.2.x/FAQ/Frequently-asked-questions.html","title":"Frequently Asked Questions","lang":"en-US","frontmatter":{"description":"Frequently Asked Questions General FAQ 1. How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Comm...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Frequently Asked Questions"}],["meta",{"property":"og:description","content":"Frequently Asked Questions General FAQ 1. How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Comm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-07T02:18:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-07T02:18:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frequently Asked Questions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-07T02:18:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"General FAQ","slug":"general-faq","link":"#general-faq","children":[{"level":3,"title":"1. How can I identify my version of IoTDB?","slug":"_1-how-can-i-identify-my-version-of-iotdb","link":"#_1-how-can-i-identify-my-version-of-iotdb","children":[]},{"level":3,"title":"2. Where can I find IoTDB logs?","slug":"_2-where-can-i-find-iotdb-logs","link":"#_2-where-can-i-find-iotdb-logs","children":[]},{"level":3,"title":"3. Where can I find IoTDB data files?","slug":"_3-where-can-i-find-iotdb-data-files","link":"#_3-where-can-i-find-iotdb-data-files","children":[]},{"level":3,"title":"4. How do I know how many time series are stored in IoTDB?","slug":"_4-how-do-i-know-how-many-time-series-are-stored-in-iotdb","link":"#_4-how-do-i-know-how-many-time-series-are-stored-in-iotdb","children":[]},{"level":3,"title":"5. Can I use Hadoop and Spark to read TsFile in IoTDB?","slug":"_5-can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb","link":"#_5-can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb","children":[]},{"level":3,"title":"6. How does IoTDB handle duplicate points?","slug":"_6-how-does-iotdb-handle-duplicate-points","link":"#_6-how-does-iotdb-handle-duplicate-points","children":[]},{"level":3,"title":"7. How can I tell what type of the specific timeseries?","slug":"_7-how-can-i-tell-what-type-of-the-specific-timeseries","link":"#_7-how-can-i-tell-what-type-of-the-specific-timeseries","children":[]},{"level":3,"title":"8. How can I change IoTDB's Cli time display format?","slug":"_8-how-can-i-change-iotdb-s-cli-time-display-format","link":"#_8-how-can-i-change-iotdb-s-cli-time-display-format","children":[]},{"level":3,"title":"9. How to handle error IndexOutOfBoundsException from org.apache.ratis.grpc.server.GrpcLogAppender?","slug":"_9-how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender","link":"#_9-how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender","children":[]},{"level":3,"title":"10. How to deal with estimated out of memory errors?","slug":"_10-how-to-deal-with-estimated-out-of-memory-errors","link":"#_10-how-to-deal-with-estimated-out-of-memory-errors","children":[]}]},{"level":2,"title":"FAQ for Cluster Setup","slug":"faq-for-cluster-setup","link":"#faq-for-cluster-setup","children":[{"level":3,"title":"Cluster StartUp and Stop","slug":"cluster-startup-and-stop","link":"#cluster-startup-and-stop","children":[]},{"level":3,"title":"Cluster Restart","slug":"cluster-restart","link":"#cluster-restart","children":[]},{"level":3,"title":"Cluster Maintenance","slug":"cluster-maintenance","link":"#cluster-maintenance","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1707272328000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":2},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.67,"words":1701},"filePathRelative":"UserGuide/V1.2.x/FAQ/Frequently-asked-questions.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{L as comp,P as data};
