import{_ as i,c as n,b as t,o as a}from"./app-D6rlonH6.js";const s={};function o(l,e){return a(),n("div",null,e[0]||(e[0]=[t(`<h1 id="security-management" tabindex="-1"><a class="header-anchor" href="#security-management"><span>Security Management</span></a></h1><h2 id="white-list" tabindex="-1"><a class="header-anchor" href="#white-list"><span>White List</span></a></h2><p><strong>function description</strong></p><p>Allow which client addresses can connect to IoTDB</p><p><strong>configuration file</strong></p><p>conf/iotdb-common.properties</p><p>conf/white.list</p><p><strong>configuration item</strong></p><p>iotdb-common.properties:</p><p>Decide whether to enable white list</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre><code><span class="line"></span>
<span class="line"># Whether to enable white list</span>
<span class="line">enable_white_list=true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>white.list:</p><p>Decide which IP addresses can connect to IoTDB</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre><code><span class="line"># Support for annotation</span>
<span class="line"># Supports precise matching, one IP per line</span>
<span class="line">10.2.3.4</span>
<span class="line"></span>
<span class="line"># Support for * wildcards, one ip per line</span>
<span class="line">10.*.1.3</span>
<span class="line">10.100.0.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>note</strong></p><ol><li>If the white list itself is cancelled via the session client, the current connection is not immediately disconnected. It is rejected the next time the connection is created.</li><li>If white.list is modified directly, it takes effect within one minute. If modified via the session client, it takes effect immediately, updating the values in memory and the white.list disk file.</li><li>Enable the whitelist function, there is no white.list file, start the DB service successfully, however, all connections are rejected.</li><li>while DB service is running, the white.list file is deleted, and all connections are denied after up to one minute.</li><li>whether to enable the configuration of the white list function, can be hot loaded.</li><li>Use the Java native interface to modify the whitelist, must be the root user to modify, reject non-root user to modify; modify the content must be legal, otherwise it will throw a StatementExecutionException.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/白名单.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="audit-log" tabindex="-1"><a class="header-anchor" href="#audit-log"><span>Audit log</span></a></h2><h3 id="background-of-the-function" tabindex="-1"><a class="header-anchor" href="#background-of-the-function"><span>Background of the function</span></a></h3><p>Audit log is the record credentials of a database, which can be queried by the audit log function to ensure information security by various operations such as user add, delete, change and check in the database. With the audit log function of IoTDB, the following scenarios can be achieved:</p><ul><li>We can decide whether to record audit logs according to the source of the link ( human operation or not), such as: non-human operation such as hardware collector write data no need to record audit logs, human operation such as ordinary users through cli, workbench and other tools to operate the data need to record audit logs.</li><li>Filter out system-level write operations, such as those recorded by the IoTDB monitoring system itself.</li></ul><h4 id="scene-description" tabindex="-1"><a class="header-anchor" href="#scene-description"><span>Scene Description</span></a></h4><h5 id="logging-all-operations-add-delete-change-check-of-all-users" tabindex="-1"><a class="header-anchor" href="#logging-all-operations-add-delete-change-check-of-all-users"><span>Logging all operations (add, delete, change, check) of all users</span></a></h5><p>The audit log function traces all user operations in the database. The information recorded should include data operations (add, delete, query) and metadata operations (add, modify, delete, query), client login information (user name, ip address).</p><p>Client Sources：</p><ul><li>Cli、workbench、Zeppelin、Grafana、通过 Session/JDBC/MQTT 等协议传入的请求</li></ul><figure><img src="https://alioss.timecho.com/docs/img/审计日志.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="audit-logging-can-be-turned-off-for-some-user-connections" tabindex="-1"><a class="header-anchor" href="#audit-logging-can-be-turned-off-for-some-user-connections"><span>Audit logging can be turned off for some user connections</span></a></h5><p>No audit logs are required for data written by the hardware collector via Session/JDBC/MQTT if it is a non-human action.</p><h3 id="function-definition" tabindex="-1"><a class="header-anchor" href="#function-definition"><span>Function Definition</span></a></h3><p>It is available through through configurations:</p><ul><li>Decide whether to enable the audit function or not</li><li>Decide where to output the audit logs, support output to one or more <ol><li>log file</li><li>IoTDB storage</li></ol></li><li>Decide whether to block the native interface writes to prevent recording too many audit logs to affect performance.</li><li>Decide the content category of the audit log, supporting recording one or more <ol><li>data addition and deletion operations</li><li>data and metadata query operations</li><li>metadata class adding, modifying, and deleting operations.</li></ol></li></ul><h4 id="configuration-item" tabindex="-1"><a class="header-anchor" href="#configuration-item"><span>configuration item</span></a></h4><p>In iotdb-common.properties, change the following configurations:</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre><code><span class="line">####################</span>
<span class="line">### Audit log Configuration</span>
<span class="line">####################</span>
<span class="line"></span>
<span class="line"># whether to enable the audit log.</span>
<span class="line"># Datatype: Boolean</span>
<span class="line"># enable_audit_log=false</span>
<span class="line"></span>
<span class="line"># Output location of audit logs</span>
<span class="line"># Datatype: String</span>
<span class="line"># IOTDB: the stored time series is: root.__system.audit._{user}</span>
<span class="line"># LOGGER: log_audit.log in the log directory</span>
<span class="line"># audit_log_storage=IOTDB,LOGGER</span>
<span class="line"></span>
<span class="line"># whether enable audit log for DML operation of data</span>
<span class="line"># whether enable audit log for DDL operation of schema</span>
<span class="line"># whether enable audit log for QUERY operation of data and schema</span>
<span class="line"># Datatype: String</span>
<span class="line"># audit_log_operation=DML,DDL,QUERY</span>
<span class="line"></span>
<span class="line"># whether the local write api records audit logs</span>
<span class="line"># Datatype: Boolean</span>
<span class="line"># This contains Session insert api: insertRecord(s), insertTablet(s),insertRecordsOfOneDevice</span>
<span class="line"># MQTT insert api</span>
<span class="line"># RestAPI insert api</span>
<span class="line"># This parameter will cover the DML in audit_log_operation</span>
<span class="line"># enable_audit_log_for_native_insert_api=true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35)]))}const c=i(s,[["render",o],["__file","Security-Management_timecho.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/latest/User-Manual/Security-Management_timecho.html","title":"Security Management","lang":"en-US","frontmatter":{"description":"Security Management White List function description Allow which client addresses can connect to IoTDB configuration file conf/iotdb-common.properties conf/white.list configurati...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Security-Management_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Security-Management_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Security Management"}],["meta",{"property":"og:description","content":"Security Management White List function description Allow which client addresses can connect to IoTDB configuration file conf/iotdb-common.properties conf/white.list configurati..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E7%99%BD%E5%90%8D%E5%8D%95.PNG"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-05T02:28:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-05T02:28:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Security Management\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E7%99%BD%E5%90%8D%E5%8D%95.PNG\\",\\"https://alioss.timecho.com/docs/img/%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97.PNG\\"],\\"dateModified\\":\\"2024-09-05T02:28:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"White List","slug":"white-list","link":"#white-list","children":[]},{"level":2,"title":"Audit log","slug":"audit-log","link":"#audit-log","children":[{"level":3,"title":"Background of the function","slug":"background-of-the-function","link":"#background-of-the-function","children":[]},{"level":3,"title":"Function Definition","slug":"function-definition","link":"#function-definition","children":[]}]}],"git":{"createdTime":1704854860000,"updatedTime":1725503328000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.63,"words":789},"filePathRelative":"UserGuide/latest/User-Manual/Security-Management_timecho.md","localizedDate":"January 10, 2024","autoDesc":true}');export{c as comp,d as data};
