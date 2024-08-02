import{_ as e,o as t,c as a,e as i}from"./app-CVD6HEOl.js";const n={},o=i('<h1 id="scenario" tabindex="-1"><a class="header-anchor" href="#scenario"><span>Scenario</span></a></h1><h2 id="application-1-internet-of-vehicles" tabindex="-1"><a class="header-anchor" href="#application-1-internet-of-vehicles"><span>Application 1: Internet of Vehicles</span></a></h2><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h3><blockquote><ul><li>Challenge: a large number of vehicles and time series</li></ul></blockquote><p>A car company has a huge business volume and needs to deal with a large number of vehicles and a large amount of data. It has hundreds of millions of data measurement points, over ten million new data points per second, millisecond-level collection frequency, posing high requirements on real-time writing, storage and processing of databases.</p><p>In the original architecture, the HBase cluster was used as the storage database. The query delay was high, and the system maintenance was difficult and costly. The HBase cluster cannot meet the demand. On the contrary, IoTDB supports high-frequency data writing with millions of measurement points and millisecond-level query response speed. The efficient data processing capability allows users to obtain the required data quickly and accurately. Therefore, IoTDB is chosen as the data storage layer, which has a lightweight architecture, reduces operation and maintenance costs, and supports elastic expansion and contraction and high availability to ensure system stability and availability.</p><h3 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture"><span>Architecture</span></a></h3><p>The data management architecture of the car company using IoTDB as the time-series data storage engine is shown in the figure below.</p><figure><img src="https://alioss.timecho.com/docs/img/architecture1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>The vehicle data is encoded based on TCP and industrial protocols and sent to the edge gateway, and the gateway sends the data to the message queue Kafka cluster, decoupling the two ends of production and consumption. Kafka sends data to Flink for real-time processing, and the processed data is written into IoTDB. Both historical data and latest data are queried in IoTDB, and finally the data flows into the visualization platform through API for application.</p><h2 id="application-2-intelligent-operation-and-maintenance" tabindex="-1"><a class="header-anchor" href="#application-2-intelligent-operation-and-maintenance"><span>Application 2: Intelligent Operation and Maintenance</span></a></h2><h3 id="background-1" tabindex="-1"><a class="header-anchor" href="#background-1"><span>Background</span></a></h3><p>A steel factory aims to build a low-cost, large-scale access-capable remote intelligent operation and maintenance software and hardware platform, access hundreds of production lines, more than one million devices, and tens of millions of time series, to achieve remote coverage of intelligent operation and maintenance.</p><p>There are many challenges in this process:</p><blockquote><ul><li>Wide variety of devices, protocols, and data types</li><li>Time series data, especially high-frequency data, has a huge amount of data</li><li>The reading and writing speed of massive time series data cannot meet business needs</li><li>Existing time series data management components cannot meet various advanced application requirements</li></ul></blockquote><p>After selecting IoTDB as the storage database of the intelligent operation and maintenance platform, it can stably write multi-frequency and high-frequency acquisition data, covering the entire steel process, and use a composite compression algorithm to reduce the data size by more than 10 times, saving costs. IoTDB also effectively supports downsampling query of historical data of more than 10 years, helping enterprises to mine data trends and assist enterprises in long-term strategic analysis.</p><h3 id="architecture-1" tabindex="-1"><a class="header-anchor" href="#architecture-1"><span>Architecture</span></a></h3><p>The figure below shows the architecture design of the intelligent operation and maintenance platform of the steel plant.</p><figure><img src="https://alioss.timecho.com/docs/img/architecture2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="application-3-smart-factory" tabindex="-1"><a class="header-anchor" href="#application-3-smart-factory"><span>Application 3: Smart Factory</span></a></h2><h3 id="background-2" tabindex="-1"><a class="header-anchor" href="#background-2"><span>Background</span></a></h3><blockquote><ul><li>Challenge：Cloud-edge collaboration</li></ul></blockquote><p>A cigarette factory hopes to upgrade from a &quot;traditional factory&quot; to a &quot;high-end factory&quot;. It uses the Internet of Things and equipment monitoring technology to strengthen information management and services to realize the free flow of data within the enterprise and to help improve productivity and lower operating costs.</p><h3 id="architecture-2" tabindex="-1"><a class="header-anchor" href="#architecture-2"><span>Architecture</span></a></h3><p>The figure below shows the factory&#39;s IoT system architecture. IoTDB runs through the three-level IoT platform of the company, factory, and workshop to realize unified joint debugging and joint control of equipment. The data at the workshop level is collected, processed and stored in real time through the IoTDB at the edge layer, and a series of analysis tasks are realized. The preprocessed data is sent to the IoTDB at the platform layer for data governance at the business level, such as device management, connection management, and service support. Eventually, the data will be integrated into the IoTDB at the group level for comprehensive analysis and decision-making across the organization.</p><figure><img src="https://alioss.timecho.com/docs/img/architecture3.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="application-4-condition-monitoring" tabindex="-1"><a class="header-anchor" href="#application-4-condition-monitoring"><span>Application 4: Condition monitoring</span></a></h2><h3 id="background-3" tabindex="-1"><a class="header-anchor" href="#background-3"><span>Background</span></a></h3><blockquote><ul><li>Challenge: Smart heating, cost reduction and efficiency increase</li></ul></blockquote><p>A power plant needs to monitor tens of thousands of measuring points of main and auxiliary equipment such as fan boiler equipment, generators, and substation equipment. In the previous heating process, there was a lack of prediction of the heat supply in the next stage, resulting in ineffective heating, overheating, and insufficient heating.</p><p>After using IoTDB as the storage and analysis engine, combined with meteorological data, building control data, household control data, heat exchange station data, official website data, heat source side data, etc., all data are time-aligned in IoTDB to provide reliable data basis to realize smart heating. At the same time, it also solves the problem of monitoring the working conditions of various important components in the relevant heating process, such as on-demand billing and pipe network,heating station, etc., to reduce manpower input.</p><h3 id="architecture-3" tabindex="-1"><a class="header-anchor" href="#architecture-3"><span>Architecture</span></a></h3><p>The figure below shows the data management architecture of the power plant in the heating scene.</p><figure><img src="https://alioss.timecho.com/docs/img/architecture4.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',34),r=[o];function c(s,l){return t(),a("div",null,r)}const d=e(n,[["render",c],["__file","Scenario.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/latest/IoTDB-Introduction/Scenario.html","title":"Scenario","lang":"en-US","frontmatter":{"description":"Scenario Application 1: Internet of Vehicles Background Challenge: a large number of vehicles and time series A car company has a huge business volume and needs to deal with a l...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/IoTDB-Introduction/Scenario.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/IoTDB-Introduction/Scenario.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Scenario"}],["meta",{"property":"og:description","content":"Scenario Application 1: Internet of Vehicles Background Challenge: a large number of vehicles and time series A car company has a huge business volume and needs to deal with a l..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/architecture1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-07T04:01:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-07T04:01:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Scenario\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/architecture1.png\\",\\"https://alioss.timecho.com/docs/img/architecture2.jpg\\",\\"https://alioss.timecho.com/docs/img/architecture3.jpg\\",\\"https://alioss.timecho.com/docs/img/architecture4.jpg\\"],\\"dateModified\\":\\"2024-03-07T04:01:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Application 1: Internet of Vehicles","slug":"application-1-internet-of-vehicles","link":"#application-1-internet-of-vehicles","children":[{"level":3,"title":"Background","slug":"background","link":"#background","children":[]},{"level":3,"title":"Architecture","slug":"architecture","link":"#architecture","children":[]}]},{"level":2,"title":"Application 2: Intelligent Operation and Maintenance","slug":"application-2-intelligent-operation-and-maintenance","link":"#application-2-intelligent-operation-and-maintenance","children":[{"level":3,"title":"Background","slug":"background-1","link":"#background-1","children":[]},{"level":3,"title":"Architecture","slug":"architecture-1","link":"#architecture-1","children":[]}]},{"level":2,"title":"Application 3: Smart Factory","slug":"application-3-smart-factory","link":"#application-3-smart-factory","children":[{"level":3,"title":"Background","slug":"background-2","link":"#background-2","children":[]},{"level":3,"title":"Architecture","slug":"architecture-2","link":"#architecture-2","children":[]}]},{"level":2,"title":"Application 4: Condition monitoring","slug":"application-4-condition-monitoring","link":"#application-4-condition-monitoring","children":[{"level":3,"title":"Background","slug":"background-3","link":"#background-3","children":[]},{"level":3,"title":"Architecture","slug":"architecture-3","link":"#architecture-3","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1709784080000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.16,"words":948},"filePathRelative":"UserGuide/latest/IoTDB-Introduction/Scenario.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,p as data};
