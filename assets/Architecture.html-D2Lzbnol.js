import{_ as e,o as t,c as o,e as a}from"./app-D_cz5DM4.js";const i={},r=a('<h1 id="system-architecture" tabindex="-1"><a class="header-anchor" href="#system-architecture"><span>System Architecture</span></a></h1><p>Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB refers specifically to the IoTDB engine.</p><p>IoTDB suite can provide a series of functions in the real situation such as data collection, data writing, data storage, data query, data visualization and data analysis. Figure 1.1 shows the overall application architecture brought by all the components of the IoTDB suite.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/IoTDB-Introduction/Architecture/Structure-of-Apache-IoTDB.png?raw=true"><p>As shown in Figure 1.1, users can use JDBC to import timeseries data collected by sensor on the device to local/remote IoTDB. These timeseries data may be system state data (such as server load and CPU memory, etc.), message queue data, timeseries data from applications, or other timeseries data in the database. Users can also write the data directly to the TsFile (local or on HDFS).</p><p>TsFile could be written to the HDFS, thereby implementing data processing tasks such as abnormality detection and machine learning on the Hadoop or Spark data processing platform.</p><p>For the data written to HDFS or local TsFile, users can use TsFile-Hadoop-Connector or TsFile-Spark-Connector to allow Hadoop or Spark to process data.</p><p>The results of the analysis can be write back to TsFile in the same way.</p><p>Also, IoTDB and TsFile provide client tools to meet the various needs of users in writing and viewing data in SQL form, script form and graphical form.</p><p>IoTDB offers two deployment modes: standalone and cluster. In cluster deployment mode, IoTDB supports automatic failover, ensuring that the system can quickly switch to standby nodes in the event of a node failure. The switch time can be achieved in seconds, thereby minimizing system downtime and ensuring no data loss after the switch. When the faulty node returns to normal, the system will automatically reintegrate it into the cluster, ensuring the cluster&#39;s high availability and scalability.</p><p>IoTDB also supports a read-write separation deployment mode, which can allocate read and write operations to different nodes, achieving load balancing and enhancing the system&#39;s concurrent processing capability.</p><p>Through these features, IoTDB can avoid single-point performance bottlenecks and single-point failures (SPOF), offering a high-availability and reliable data storage and management solution.</p>',12),s=[r];function n(c,l){return t(),o("div",null,s)}const p=e(i,[["render",n],["__file","Architecture.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V1.2.x/IoTDB-Introduction/Architecture.html","title":"System Architecture","lang":"en-US","frontmatter":{"description":"System Architecture Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"System Architecture"}],["meta",{"property":"og:description","content":"System Architecture Besides IoTDB engine, we also developed several components to provide better IoT service. All components are referred to below as the IoTDB suite, and IoTDB ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-14T08:04:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-14T08:04:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"System Architecture\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-14T08:04:43.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1692000283000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"Li Yu Heng","email":"liyuheng55555@126.com","commits":1}]},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"UserGuide/V1.2.x/IoTDB-Introduction/Architecture.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,h as data};
