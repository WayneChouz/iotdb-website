import{_ as t,o as e,c as l,a as r,f as a}from"./app-91105029.js";const i={},d=a(`<h2 id="integration-with-hdfs" tabindex="-1"><a class="header-anchor" href="#integration-with-hdfs" aria-hidden="true">#</a> Integration with HDFS</h2><h3 id="shared-storage-architecture" tabindex="-1"><a class="header-anchor" href="#shared-storage-architecture" aria-hidden="true">#</a> Shared Storage Architecture</h3><p>Currently, TsFiles(including both TsFile and related data files) are supported to be stored in local file system and hadoop distributed file system(HDFS). It is very easy to config the storage file system of TSFile.</p><h4 id="system-architecture" tabindex="-1"><a class="header-anchor" href="#system-architecture" aria-hidden="true">#</a> System architecture</h4><p>When you config to store TSFile on HDFS, your data files will be in distributed storage. The system architecture is as below:</p><img style="width:100%;max-width:700px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/66922722-35180400-f05a-11e9-8ff0-7dd51716e4a8.png"><h4 id="config-and-usage" tabindex="-1"><a class="header-anchor" href="#config-and-usage" aria-hidden="true">#</a> Config and usage</h4><p>To store TSFile and related data files in HDFS, here are the steps:</p><p>First, download the source release from website or git clone the repository</p><p>Build server and Hadoop module by: <code>mvn clean package -pl server,hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code></p><p>Then, copy the target jar of Hadoop module <code>hadoop-tsfile-X.X.X-jar-with-dependencies.jar</code> into server target lib folder <code>.../server/target/iotdb-server-X.X.X/lib</code>.</p><p>Edit user config in <code>iotdb-datanode.properties</code>. Related configurations are:</p><ul><li>tsfile_storage_fs</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">tsfile_storage_fs</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The storage file system of Tsfile and related data files. Currently LOCAL file system and HDFS are supported.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">LOCAL</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>core_site_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">core_site_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Absolute file path of core-site.xml if Tsfile and related data files are stored in HDFS.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">/etc/hadoop/conf/core-site.xml</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_site_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_site_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Absolute file path of hdfs-site.xml if Tsfile and related data files are stored in HDFS.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">/etc/hadoop/conf/hdfs-site.xml</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_ip</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_ip</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">IP of HDFS if Tsfile and related data files are stored in HDFS. <strong>If there are more than one hdfs_ip in configuration, Hadoop HA is used.</strong></td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">localhost</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Port of HDFS if Tsfile and related data files are stored in HDFS</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">9000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_nameservices</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_nameservices</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Nameservices of HDFS HA if using Hadoop HA</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">hdfsnamespace</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_ha_namenodes</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_ha_namenodes</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Namenodes under DFS nameservices of HDFS HA if using Hadoop HA</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">nn1,nn2</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_ha_automatic_failover_enabled</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dfs_ha_automatic_failover_enabled</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether using automatic failover if using Hadoop HA</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>dfs_client_failover_proxy_provider</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dfs_client_failover_proxy_provider</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Proxy provider if using Hadoop HA and enabling automatic failover</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>hdfs_use_kerberos</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">hdfs_use_kerberos</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether use kerberos to authenticate hdfs</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>kerberos_keytab_file_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">kerberos_keytab_file_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Full path of kerberos keytab file</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">/path</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><ul><li>kerberos_principal</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">kerberos_principal</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Kerberos pricipal</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">your principal</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restart system</td></tr></tbody></table><p>Start server, and Tsfile will be stored on HDFS.</p><p>To reset storage file system to local, just edit configuration <code>tsfile_storage_fs</code> to <code>LOCAL</code>. In this situation, if data files are already on HDFS, you should either download them to local and move them to your config data file folder (<code>../server/target/iotdb-server-X.X.X/data/data</code> by default), or restart your process and import data to IoTDB.</p><h4 id="frequent-questions" tabindex="-1"><a class="header-anchor" href="#frequent-questions" aria-hidden="true">#</a> Frequent questions</h4><ol><li>What Hadoop version does it support?</li></ol><p>A: Both Hadoop 2.x and Hadoop 3.x can be supported.</p><ol start="2"><li>When starting the server or trying to create timeseries, I encounter the error below:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ERROR org.apache.iotdb.tsfile.fileSystem.fsFactory.HDFSFactory:62 - Failed to get Hadoop file system. Please check your dependency of Hadoop module.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A: It indicates that you forget to put Hadoop module dependency in IoTDB server. You can solve it by:</p><ul><li>Build Hadoop module: <code>mvn clean package -pl hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies</code></li><li>Copy the target jar of Hadoop module <code>hadoop-tsfile-X.X.X-jar-with-dependencies.jar</code> into server target lib folder <code>.../server/target/iotdb-server-X.X.X/lib</code>.</li></ul>`,45);function s(n,o){return e(),l("div",null,[r(`

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

`),d])}const c=t(i,[["render",s],["__file","Writing-Data-on-HDFS.html.vue"]]);export{c as default};
