import{_ as n,r,o as s,c as d,a as l,d as e,e as t,b as o,f as i}from"./app-e51629e5.js";const h={},c=i(`<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently Asked Questions</h1><h2 id="general-faq" tabindex="-1"><a class="header-anchor" href="#general-faq" aria-hidden="true">#</a> General FAQ</h2><h3 id="_1-how-can-i-identify-my-version-of-iotdb" tabindex="-1"><a class="header-anchor" href="#_1-how-can-i-identify-my-version-of-iotdb" aria-hidden="true">#</a> 1. How can I identify my version of IoTDB?</h3><p>There are several ways to identify the version of IoTDB that you are using:</p><ul><li>Launch IoTDB&#39;s Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost
 _____       _________  ______   ______    
|_   _|     |  _   _  ||_   _ \`.|_   _ \\   
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | 
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Check pom.xml file:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;version&gt;x.x.x&lt;/version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Use JDBC API:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Use Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show version
show version
+---------------+
|version        |
+---------------+
|x.x.x          |
+---------------+
Total line number = 1
It costs 0.241s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-where-can-i-find-iotdb-logs" tabindex="-1"><a class="header-anchor" href="#_2-where-can-i-find-iotdb-logs" aria-hidden="true">#</a> 2. Where can I find IoTDB logs?</h3><p>Suppose your root directory is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ pwd
/workspace/iotdb

$ ls -l
server/
cli/
pom.xml
Readme.md
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>Let <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>By default settings, the logs are stored under <code>IOTDB_HOME/logs</code>. You can change log level and storage path by configuring <code>logback.xml</code> under <code>IOTDB_HOME/conf</code>.</p><h3 id="_3-where-can-i-find-iotdb-data-files" tabindex="-1"><a class="header-anchor" href="#_3-where-can-i-find-iotdb-data-files" aria-hidden="true">#</a> 3. Where can I find IoTDB data files?</h3><p>By default settings, the data files (including tsfile, metadata, and WAL files) are stored under <code>IOTDB_HOME/data/datanode</code>.</p><h3 id="_4-how-do-i-know-how-many-time-series-are-stored-in-iotdb" tabindex="-1"><a class="header-anchor" href="#_4-how-do-i-know-how-many-time-series-are-stored-in-iotdb" aria-hidden="true">#</a> 4. How do I know how many time series are stored in IoTDB?</h3><p>Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the result, there is a statement shows <code>Total timeseries number</code>, this number is the timeseries number in IoTDB.</p><p>In the current version, IoTDB supports querying the number of time series. Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using Linux, you can use the following shell command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l
&gt;   6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb" tabindex="-1"><a class="header-anchor" href="#_5-can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb" aria-hidden="true">#</a> 5. Can I use Hadoop and Spark to read TsFile in IoTDB?</h3>`,29),u={href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/apache/iotdb/tree/master/spark-tsfile",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/apache/iotdb/tree/master/grafana-plugin",target:"_blank",rel:"noopener noreferrer"},p=i(`<h3 id="_6-how-does-iotdb-handle-duplicate-points" tabindex="-1"><a class="header-anchor" href="#_6-how-does-iotdb-handle-duplicate-points" aria-hidden="true">#</a> 6. How does IoTDB handle duplicate points?</h3><p>A data point is uniquely identified by a full time series path (e.g. <code>root.vehicle.d0.s0</code>) and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB updates the value of this point instead of inserting a new point.</p><h3 id="_7-how-can-i-tell-what-type-of-the-specific-timeseries" tabindex="-1"><a class="header-anchor" href="#_7-how-can-i-tell-what-type-of-the-specific-timeseries" aria-hidden="true">#</a> 7. How can I tell what type of the specific timeseries?</h3><p>Use <code>SHOW TIMESERIES &lt;timeseries path&gt;</code> SQL in IoTDB&#39;s Command Line Interface:</p><p>For example, if you want to know the type of all timeseries, the &lt;timeseries path&gt; should be <code>root</code>. The statement will be:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to query specific sensor, you can replace the &lt;timeseries path&gt; with the sensor name. For example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Otherwise, you can also use wildcard in timeseries path:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-how-can-i-change-iotdb-s-cli-time-display-format" tabindex="-1"><a class="header-anchor" href="#_8-how-can-i-change-iotdb-s-cli-time-display-format" aria-hidden="true">#</a> 8. How can I change IoTDB&#39;s Cli time display format?</h3><p>The default IoTDB&#39;s Cli time display format is readable (e.g. <code>1970-01-01T08:00:00.001</code>), if you want to display time in timestamp type or other readable format, add parameter <code>-disableISO8601</code> in start command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender" tabindex="-1"><a class="header-anchor" href="#_9-how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender" aria-hidden="true">#</a> 9. How to handle error <code>IndexOutOfBoundsException</code> from <code>org.apache.ratis.grpc.server.GrpcLogAppender</code>?</h3><p>It is an internal error introduced by Ratis 2.4.1 dependency, and we can safely ignore this exception as it will<br> not affect normal operations. We will fix this message in the incoming releases.</p><h2 id="faq-for-cluster-setup" tabindex="-1"><a class="header-anchor" href="#faq-for-cluster-setup" aria-hidden="true">#</a> FAQ for Cluster Setup</h2><h3 id="cluster-startup-and-stop" tabindex="-1"><a class="header-anchor" href="#cluster-startup-and-stop" aria-hidden="true">#</a> Cluster StartUp and Stop</h3><h4 id="_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" aria-hidden="true">#</a> 1. Failed to start ConfigNode for the first time, how to find the reason?</h4><ul><li>Make sure that the data/confignode directory is cleared when start ConfigNode for the first time.</li><li>Make sure that the &lt;IP+Port&gt; used by ConfigNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other ConfigNodes.</li><li>Make sure that the <code>cn_target_confignode_list</code> is configured correctly, which points to the alive ConfigNode. And if the ConfigNode is started for the first time, make sure that <code>cn_target_confignode_list</code> points to itself.</li><li>Make sure that the configuration(consensus protocol and replica number) of the started ConfigNode is accord with the <code>cn_target_confignode_list</code> ConfigNode.</li></ul><h4 id="_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" tabindex="-1"><a class="header-anchor" href="#_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" aria-hidden="true">#</a> 2. ConfigNode is started successfully, but why the node doesn&#39;t appear in the results of <code>show cluster</code>?</h4><ul><li>Examine whether the <code>cn_target_confignode_list</code> points to the correct address. If <code>cn_target_confignode_list</code> points to itself, a new ConfigNode cluster is started.</li></ul><h4 id="_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" aria-hidden="true">#</a> 3. Failed to start DataNode for the first time, how to find the reason?</h4><ul><li>Make sure that the data/datanode directory is cleared when start DataNode for the first time. If the start result is “Reject DataNode restart.”, maybe the data/datanode directory is not cleared.</li><li>Make sure that the &lt;IP+Port&gt; used by DataNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other DataNodes.</li><li>Make sure that the <code>dn_target_confignode_list</code> points to the alive ConfigNode.</li></ul><h4 id="_4-failed-to-remove-datanode-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_4-failed-to-remove-datanode-how-to-find-the-reason" aria-hidden="true">#</a> 4. Failed to remove DataNode, how to find the reason?</h4>`,24),g={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},_=i("<li>Only when the number of available DataNodes in the cluster is greater than max(schema_replication_factor, data_replication_factor), removing operation can be executed.</li><li>Removing DataNode will migrate the data from the removing DataNode to other alive DataNodes. Data migration is based on Region, if some regions are migrated failed, the removing DataNode will always in the status of <code>Removing</code>.</li><li>If the DataNode is in the status of <code>Removing</code>, the regions in the removing DataNode will also in the status of <code>Removing</code> or <code>Unknown</code>, which are unavailable status. Besides, the removing DataNode will not receive new write requests from client.<br> And users can use the command <code>set system status to running</code> to make the status of DataNode from Removing to Running;<br> If users want to make the Regions from Removing to available status, command <code>migrate region from datanodeId1 to datanodeId2</code> can take effect, this command can migrate the regions to other alive DataNodes.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> command in the next version, which can remove DataNodes forced (The failed migrated regions will be discarded).</li>",3),b=i('<h4 id="_5-whether-the-down-datanode-can-be-removed" tabindex="-1"><a class="header-anchor" href="#_5-whether-the-down-datanode-can-be-removed" aria-hidden="true">#</a> 5. Whether the down DataNode can be removed?</h4><ul><li>The down DataNode can be removed only when the replica factor of schema and data is greater than 1.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> function in the next version.</li></ul><h4 id="_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" tabindex="-1"><a class="header-anchor" href="#_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" aria-hidden="true">#</a> 6. What should be paid attention to when upgrading from 0.13 to 1.0?</h4><ul><li>The file structure between 0.13 and 1.0 is different, we can&#39;t copy the data directory from 0.13 to 1.0 to use directly.<br> If you want to load the data from 0.13 to 1.0, you can use the LOAD function.</li><li>The default RPC address of 0.13 is <code>0.0.0.0</code>, but the default RPC address of 1.0 is <code>127.0.0.1</code>.</li></ul><h3 id="cluster-restart" tabindex="-1"><a class="header-anchor" href="#cluster-restart" aria-hidden="true">#</a> Cluster Restart</h3><h4 id="_1-how-to-restart-any-confignode-in-the-cluster" tabindex="-1"><a class="header-anchor" href="#_1-how-to-restart-any-confignode-in-the-cluster" aria-hidden="true">#</a> 1. How to restart any ConfigNode in the cluster?</h4>',6),v={href:"http://stop-confignode.sh",target:"_blank",rel:"noopener noreferrer"},w={href:"http://start-confignode.sh",target:"_blank",rel:"noopener noreferrer"},x=e("h4",{id:"_2-how-to-restart-any-datanode-in-the-cluster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-how-to-restart-any-datanode-in-the-cluster","aria-hidden":"true"},"#"),t(" 2. How to restart any DataNode in the cluster?")],-1),y={href:"http://stop-datanode.sh",target:"_blank",rel:"noopener noreferrer"},I={href:"http://start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},D=e("h4",{id:"_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed","aria-hidden":"true"},"#"),t(" 3. If it's possible to restart ConfigNode using the old data directory when it's removed?")],-1),N=e("ul",null,[e("li",null,`Can't. The running result will be "Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster".`)],-1),k=e("h4",{id:"_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed","aria-hidden":"true"},"#"),t(" 4. If it's possible to restart DataNode using the old data directory when it's removed?")],-1),T=e("ul",null,[e("li",null,`Can't. The running result will be "Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...".`)],-1),B={id:"_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid","aria-hidden":"true"},"#",-1),O={href:"http://start-confignode.sh/start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},S=i('<ul><li>Can&#39;t. The running result will be &quot;The port is already occupied&quot;.</li></ul><h3 id="cluster-maintenance" tabindex="-1"><a class="header-anchor" href="#cluster-maintenance" aria-hidden="true">#</a> Cluster Maintenance</h3><h4 id="_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" tabindex="-1"><a class="header-anchor" href="#_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" aria-hidden="true">#</a> 1. How to find the reason when Show cluster failed, and error logs like &quot;please check server status&quot; are shown?</h4><ul><li>Make sure that more than one half ConfigNodes are alive.</li><li>Make sure that the DataNode connected by the client is alive.</li></ul><h4 id="_2-how-to-fix-one-datanode-when-the-disk-file-is-broken" tabindex="-1"><a class="header-anchor" href="#_2-how-to-fix-one-datanode-when-the-disk-file-is-broken" aria-hidden="true">#</a> 2. How to fix one DataNode when the disk file is broken?</h4>',5),L={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},E=e("li",null,"IoTDB will publish Node-Fix tools in the next version.",-1),H=e("h4",{id:"_3-how-to-decrease-the-memory-usage-of-confignode-datanode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-how-to-decrease-the-memory-usage-of-confignode-datanode","aria-hidden":"true"},"#"),t(" 3. How to decrease the memory usage of ConfigNode/DataNode?")],-1),R=e("ul",null,[e("li",null,"Adjust the ON_HEAP_MEMORY、OFF_HEAP_MEMORY options in conf/confignode-env.sh and conf/datanode-env.sh.")],-1);function q(A,M){const a=r("ExternalLinkIcon");return s(),d("div",null,[l(`

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

`),c,e("p",null,[t("Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports "),e("a",u,[t("Hadoop"),o(a)]),t(", "),e("a",f,[t("Spark"),o(a)]),t(" and "),e("a",m,[t("Grafana"),o(a)]),t(" visualization tool.")]),p,e("ul",null,[e("li",null,[t("Examine whether the parameter of "),e("a",g,[t("remove-datanode.sh"),o(a)]),t(" is correct, only rpcIp:rpcPort and dataNodeId are correct parameter.")]),_]),b,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",v,[t("stop-confignode.sh"),o(a)]),t(" or kill PID of ConfigNode.")]),e("li",null,[t("Second step: execute "),e("a",w,[t("start-confignode.sh"),o(a)]),t(" to restart ConfigNode.")])]),x,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",y,[t("stop-datanode.sh"),o(a)]),t(" or kill PID of DataNode.")]),e("li",null,[t("Second step: execute "),e("a",I,[t("start-datanode.sh"),o(a)]),t(" to restart DataNode.")])]),D,N,k,T,e("h4",B,[C,t(" 5. Can we execute "),e("a",O,[t("start-confignode.sh/start-datanode.sh"),o(a)]),t(" successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?")]),S,e("ul",null,[e("li",null,[t("We can use "),e("a",L,[t("remove-datanode.sh"),o(a)]),t(" to fix it. Remove-datanode will migrate the data in the removing DataNode to other alive DataNodes.")]),E]),H,R])}const P=n(h,[["render",q],["__file","Frequently-asked-questions.html.vue"]]);export{P as default};
