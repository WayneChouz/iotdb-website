import{_ as e,c as l,b as a,o as r}from"./app-ED5DzO24.js";const i={};function d(s,t){return r(),l("div",null,t[0]||(t[0]=[a(`<h2 id="integration-with-hdfs" tabindex="-1"><a class="header-anchor" href="#integration-with-hdfs"><span>Integration with HDFS</span></a></h2><h3 id="shared-storage-architecture" tabindex="-1"><a class="header-anchor" href="#shared-storage-architecture"><span>Shared Storage Architecture</span></a></h3><p>Currently, TsFiles(including both TsFile and related data files) are supported to be stored in local file system and hadoop distributed file system(HDFS). It is very easy to config the storage file system of TSFile.</p><h4 id="system-architecture" tabindex="-1"><a class="header-anchor" href="#system-architecture"><span>System architecture</span></a></h4><p>When you config to store TSFile on HDFS, your data files will be in distributed storage. The system architecture is as below:</p><img style="width:100%;max-width:700px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/66922722-35180400-f05a-11e9-8ff0-7dd51716e4a8.png"><h4 id="config-and-usage" tabindex="-1"><a class="header-anchor" href="#config-and-usage"><span>Config and usage</span></a></h4><p>To store TSFile and related data files in HDFS, here are the steps:</p><p>First, download the source release from website or git clone the repository</p><p>Build server and Hadoop module by: <code>mvn clean package -pl server,hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code></p><p>Then, copy the target jar of Hadoop module <code>hadoop-tsfile-X.X.X-jar-with-dependencies.jar</code> into server target lib folder <code>.../server/target/iotdb-server-X.X.X/lib</code>.</p><p>Edit user config in <code>iotdb-engine.properties</code>. Related configurations are:</p><ul><li>tsfile_storage_fs</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">tsfile_storage_fs</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The storage file system of Tsfile and related data files. Currently LOCAL file system and HDFS are supported.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">LOCAL</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>core_site_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">core_site_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Absolute file path of core-site.xml if Tsfile and related data files are stored in HDFS.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">/etc/hadoop/conf/core-site.xml</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_site_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_site_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Absolute file path of hdfs-site.xml if Tsfile and related data files are stored in HDFS.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">/etc/hadoop/conf/hdfs-site.xml</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_ip</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_ip</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">IP of HDFS if Tsfile and related data files are stored in HDFS. <strong>If there are more than one hdfs_ip in configuration, Hadoop HA is used.</strong></td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">localhost</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Port of HDFS if Tsfile and related data files are stored in HDFS</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">9000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_nameservices</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_nameservices</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Nameservices of HDFS HA if using Hadoop HA</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">hdfsnamespace</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_ha_namenodes</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_ha_namenodes</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Namenodes under DFS nameservices of HDFS HA if using Hadoop HA</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">nn1,nn2</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_ha_automatic_failover_enabled</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dfs_ha_automatic_failover_enabled</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether using automatic failover if using Hadoop HA</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_client_failover_proxy_provider</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dfs_client_failover_proxy_provider</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Proxy provider if using Hadoop HA and enabling automatic failover</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_use_kerberos</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_use_kerberos</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether use kerberos to authenticate hdfs</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>kerberos_keytab_file_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">kerberos_keytab_file_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Full path of kerberos keytab file</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">/path</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>kerberos_principal</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">kerberos_principal</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Kerberos pricipal</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">your principal</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><p>Start server, and Tsfile will be stored on HDFS.</p><p>To reset storage file system to local, just edit configuration <code>tsfile_storage_fs</code> to <code>LOCAL</code>. In this situation, if data files are already on HDFS, you should either download them to local and move them to your config data file folder (<code>../server/target/iotdb-server-X.X.X/data/data</code> by default), or restart your process and import data to IoTDB.</p><h4 id="frequent-questions" tabindex="-1"><a class="header-anchor" href="#frequent-questions"><span>Frequent questions</span></a></h4><ol><li>What Hadoop version does it support?</li></ol><p>A: Both Hadoop 2.x and Hadoop 3.x can be supported.</p><ol start="2"><li>When starting the server or trying to create timeseries, I encounter the error below:</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ERROR org.apache.iotdb.tsfile.fileSystem.fsFactory.HDFSFactory:62 - Failed to get Hadoop file system. Please check your dependency of Hadoop module.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>A: It indicates that you forget to put Hadoop module dependency in IoTDB server. You can solve it by:</p><ul><li>Build Hadoop module: <code>mvn clean package -pl hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code></li><li>Copy the target jar of Hadoop module <code>hadoop-tsfile-X.X.X-jar-with-dependencies.jar</code> into server target lib folder <code>.../server/target/iotdb-server-X.X.X/lib</code>.</li></ul>`,45)]))}const o=e(i,[["render",d],["__file","Writing-Data-on-HDFS.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Ecosystem-Integration/Writing-Data-on-HDFS.html","title":"","lang":"en-US","frontmatter":{"description":"Integration with HDFS Shared Storage Architecture Currently, TsFiles(including both TsFile and related data files) are supported to be stored in local file system and hadoop dis...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Writing-Data-on-HDFS.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Writing-Data-on-HDFS.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Integration with HDFS Shared Storage Architecture Currently, TsFiles(including both TsFile and related data files) are supported to be stored in local file system and hadoop dis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Integration with HDFS","slug":"integration-with-hdfs","link":"#integration-with-hdfs","children":[{"level":3,"title":"Shared Storage Architecture","slug":"shared-storage-architecture","link":"#shared-storage-architecture","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.67,"words":801},"filePathRelative":"UserGuide/V0.13.x/Ecosystem-Integration/Writing-Data-on-HDFS.md","localizedDate":"July 10, 2023","autoDesc":true}');export{o as comp,c as data};
