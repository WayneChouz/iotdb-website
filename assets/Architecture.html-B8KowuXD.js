import{_ as t,c as o,b as a,o as r}from"./app-ED5DzO24.js";const i={};function s(n,e){return r(),o("div",null,e[0]||(e[0]=[a('<h1 id="system-architecture" tabindex="-1"><a class="header-anchor" href="#system-architecture"><span>System Architecture</span></a></h1><p>Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB refers specifically to the IoTDB engine.</p><p>IoTDB suite can provide a series of functions in the real situation such as data collection, data writing, data storage, data query, data visualization and data analysis. Figure 1.1 shows the overall application architecture brought by all the components of the IoTDB suite.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/IoTDB-Introduction/Architecture/Structure-of-Apache-IoTDB.png?raw=true"><p>As shown in Figure 1.1, users can use JDBC to import timeseries data collected by sensor on the device to local/remote IoTDB. These timeseries data may be system state data (such as server load and CPU memory, etc.), message queue data, timeseries data from applications, or other timeseries data in the database. Users can also write the data directly to the TsFile (local or on HDFS).</p><p>TsFile could be written to the HDFS, thereby implementing data processing tasks such as abnormality detection and machine learning on the Hadoop or Spark data processing platform.</p><p>For the data written to HDFS or local TsFile, users can use TsFile-Hadoop-Connector or TsFile-Spark-Connector to allow Hadoop or Spark to process data.</p><p>The results of the analysis can be write back to TsFile in the same way.</p><p>Also, IoTDB and TsFile provide client tools to meet the various needs of users in writing and viewing data in SQL form, script form and graphical form.</p><p>IoTDB offers two deployment modes: standalone and cluster. In cluster deployment mode, IoTDB supports automatic failover, ensuring that the system can quickly switch to standby nodes in the event of a node failure. The switch time can be achieved in seconds, thereby minimizing system downtime and ensuring no data loss after the switch. When the faulty node returns to normal, the system will automatically reintegrate it into the cluster, ensuring the cluster&#39;s high availability and scalability.</p><p>IoTDB also supports a read-write separation deployment mode, which can allocate read and write operations to different nodes, achieving load balancing and enhancing the system&#39;s concurrent processing capability.</p><p>Through these features, IoTDB can avoid single-point performance bottlenecks and single-point failures (SPOF), offering a high-availability and reliable data storage and management solution.</p>',12)]))}const l=t(i,[["render",s],["__file","Architecture.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/latest/IoTDB-Introduction/Architecture.html","title":"System Architecture","lang":"en-US","frontmatter":{"description":"System Architecture Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"System Architecture"}],["meta",{"property":"og:description","content":"System Architecture Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T06:56:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T06:56:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"System Architecture\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T06:56:46.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1705474606000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"UserGuide/latest/IoTDB-Introduction/Architecture.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,d as data};
