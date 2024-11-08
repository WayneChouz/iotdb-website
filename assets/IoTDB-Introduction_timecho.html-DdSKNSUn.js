import{_ as o,c as n,d as t,e as i,a as r,w as s,b as d,r as l,o as c}from"./app-Cy-L1ril.js";const p={};function h(u,e){const a=l("RouteLink");return c(),n("div",null,[e[2]||(e[2]=t("h1",{id:"what-is-iotdb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#what-is-iotdb"},[t("span",null,"What is IoTDB")])],-1)),e[3]||(e[3]=t("p",null,"TimechoDB is a low-cost, high-performance native temporal database for the Internet of Things, provided by Timecho based on the Apache IoTDB community version as an original commercial product. It can solve various problems encountered by enterprises when building IoT big data platforms to manage time-series data, such as complex application scenarios, large data volumes, high sampling frequencies, high amount of unaligned data, long data processing time, diverse analysis requirements, and high storage and operation costs.",-1)),e[4]||(e[4]=t("p",null,"Timecho provides a more diverse range of product features, stronger performance and stability, and a richer set of utility tools based on TimechoDB. It also offers comprehensive enterprise services to users, thereby providing commercial customers with more powerful product capabilities and a higher quality of development, operations, and usage experience.",-1)),t("ul",null,[t("li",null,[e[1]||(e[1]=i("Download 、Deployment and Usage：")),r(a,{to:"/UserGuide/latest/QuickStart/QuickStart_timecho.html"},{default:s(()=>e[0]||(e[0]=[i("QuickStart")])),_:1})])]),e[5]||(e[5]=d('<h2 id="product-features" tabindex="-1"><a class="header-anchor" href="#product-features"><span>Product Features</span></a></h2><p>TimechoDB has the following advantages and characteristics:</p><ul><li><p>Flexible deployment methods: Support for one-click cloud deployment, out-of-the-box use after unzipping at the terminal, and seamless connection between terminal and cloud (data cloud synchronization tool).</p></li><li><p>Low hardware cost storage solution: Supports high compression ratio disk storage, no need to distinguish between historical and real-time databases, unified data management.</p></li><li><p>Hierarchical sensor organization and management: Supports modeling in the system according to the actual hierarchical relationship of devices to achieve alignment with the industrial sensor management structure, and supports directory viewing, search, and other capabilities for hierarchical structures.</p></li><li><p>High throughput data reading and writing: supports access to millions of devices, high-speed data reading and writing, out of unaligned/multi frequency acquisition, and other complex industrial reading and writing scenarios.</p></li><li><p>Rich time series query semantics: Supports a native computation engine for time series data, supports timestamp alignment during queries, provides nearly a hundred built-in aggregation and time series calculation functions, and supports time series feature analysis and AI capabilities.</p></li><li><p>Highly available distributed system: Supports HA distributed architecture, the system provides 7*24 hours uninterrupted real-time database services, the failure of a physical node or network fault will not affect the normal operation of the system; supports the addition, deletion, or overheating of physical nodes, the system will automatically perform load balancing of computing/storage resources; supports heterogeneous environments, servers of different types and different performance can form a cluster, and the system will automatically load balance according to the configuration of the physical machine.</p></li><li><p>Extremely low usage and operation threshold: supports SQL like language, provides multi language native secondary development interface, and has a complete tool system such as console.</p></li><li><p>Rich ecological environment docking: Supports docking with big data ecosystem components such as Hadoop, Spark, and supports equipment management and visualization tools such as Grafana, Thingsboard, DataEase.</p></li></ul><h2 id="enterprise-characteristics" tabindex="-1"><a class="header-anchor" href="#enterprise-characteristics"><span>Enterprise characteristics</span></a></h2><h3 id="higher-level-product-features" tabindex="-1"><a class="header-anchor" href="#higher-level-product-features"><span>Higher level product features</span></a></h3><p>Building on the open-source version, TimechoDB offers a range of advanced product features, with native upgrades and optimizations at the kernel level for industrial production scenarios. These include multi-level storage, cloud-edge collaboration, visualization tools, and security enhancements, allowing users to focus more on business development without worrying too much about underlying logic. This simplifies and enhances industrial production, bringing more economic benefits to enterprises. For example:</p><ul><li><p>Dual Active Deployment：Dual active usually refers to two independent single machines (or clusters) that perform real-time mirror synchronization. Their configurations are completely independent and can simultaneously receive external writes. Each independent single machine (or clusters) can synchronize the data written to itself to another single machine (or clusters), and the data of the two single machines (or clusters) can achieve final consistency.</p></li><li><p>Data Synchronisation：Through the built-in synchronization module of the database, data can be aggregated from the station to the center, supporting various scenarios such as full aggregation, partial aggregation, and hierarchical aggregation. It can support both real-time data synchronization and batch data synchronization modes. Simultaneously providing multiple built-in plugins to support requirements such as gateway penetration, encrypted transmission, and compressed transmission in enterprise data synchronization applications.</p></li><li><p>Tiered Storage：Multi level storage: By upgrading the underlying storage capacity, data can be divided into different levels such as cold, warm, and hot based on factors such as access frequency and data importance, and stored in different media (such as SSD, mechanical hard drive, cloud storage, etc.). At the same time, the system also performs data scheduling during the query process. Thereby reducing customer data storage costs while ensuring data access speed.</p></li><li><p>Security Enhancements: Features like whitelists and audit logs strengthen internal management and reduce the risk of data breaches.</p></li></ul><p>The detailed functional comparison is as follows：</p><table style="text-align:left;"><tr><th colspan="2">Function</th><th>Apache IoTDB</th><th>TimechoDB</th></tr><tr><td rowspan="4">Deployment Mode</td><td>Stand-Alone Deployment</td><td>√</td><td>√</td></tr><tr><td>Distributed Deployment</td><td>√</td><td>√</td></tr><tr><td>Dual Active Deployment</td><td>×</td><td>√</td></tr><tr><td>Container Deployment</td><td>Partial support</td><td>√</td></tr><tr><td rowspan="13">Database Functionality</td><td>Sensor Management</td><td>√</td><td>√</td></tr><tr><td>Write Data</td><td>√</td><td>√</td></tr><tr><td>Query Data</td><td>√</td><td>√</td></tr><tr><td>Continuous Query</td><td>√</td><td>√</td></tr><tr><td>Trigger</td><td>√</td><td>√</td></tr><tr><td>User Defined Function</td><td>√</td><td>√</td></tr><tr><td>Permission Management</td><td>√</td><td>√</td></tr><tr><td>Data Synchronisation</td><td>Only file synchronization, no built-in plugins</td><td>Real time synchronization+file synchronization, enriched with built-in plugins</td></tr><tr><td>Stream Processing</td><td>Only framework, no built-in plugins</td><td>Framework+rich built-in plugins</td></tr><tr><td>Tiered Storage</td><td>×</td><td>√</td></tr><tr><td>View</td><td>×</td><td>√</td></tr><tr><td>White List</td><td>×</td><td>√</td></tr><tr><td>Audit Log</td><td>×</td><td>√</td></tr><tr><td rowspan="3">Supporting Tools</td><td>Workbench</td><td>×</td><td>√</td></tr><tr><td>Cluster Management Tool</td><td>×</td><td>√</td></tr><tr><td>System Monitor Tool</td><td>×</td><td>√</td></tr><tr><td>Localization</td><td>Localization Compatibility Certification</td><td>×</td><td>√</td></tr><tr><td rowspan="2">Technical Support</td><td>Best Practices</td><td>×</td><td>√</td></tr><tr><td>Use Training</td><td>×</td><td>√</td></tr></table><h3 id="more-efficient-stable-product-performance" tabindex="-1"><a class="header-anchor" href="#more-efficient-stable-product-performance"><span>More efficient/stable product performance</span></a></h3><p>TimechoDB has optimized stability and performance on the basis of the open source version. With technical support from the enterprise version, it can achieve more than 10 times performance improvement and has the performance advantage of timely fault recovery.</p><h3 id="more-user-friendly-tool-system" tabindex="-1"><a class="header-anchor" href="#more-user-friendly-tool-system"><span>More User-Friendly Tool System</span></a></h3><p>TimechoDB will provide users with a simpler and more user-friendly tool system. Through products such as the Cluster Monitoring Panel (IoTDB Grafana), Database Console (IoTDB Workbench), and Cluster Management Tool (IoTDB Deploy Tool, abbreviated as IoTD), it will help users quickly deploy, manage, and monitor database clusters, reduce the work/learning costs of operation and maintenance personnel, simplify database operation and maintenance work, and make the operation and maintenance process more convenient and efficient.</p><ul><li>Cluster Monitoring Panel: Designed to address the monitoring issues of IoTDB and its operating system, including operating system resource monitoring, IoTDB performance monitoring, and hundreds of kernel monitoring indicators, to help users monitor the health status of the cluster and perform cluster tuning and operation.</li></ul><div style="display:flex;justify-content:space-between;width:100%;"><p style="width:30%;text-align:center;">Overall Overview</p><p style="width:30%;text-align:center;">Operating System Resource Monitoring</p><p style="width:30%;text-align:center;">IoTDB Performance Monitoring</p></div><div style="display:flex;justify-content:space-between;width:100%;"><img src="https://alioss.timecho.com/docs/img/Introduction01.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction02.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction03.png" alt="" style="width:30%;height:auto;"></div><p></p><ul><li>Database Console: Designed to provide a low threshold database interaction tool, it helps users perform metadata management, data addition, deletion, modification, query, permission management, system management, and other operations in a concise and clear manner through an interface console, simplifying the difficulty of database use and improving database efficiency.</li></ul><div style="display:flex;justify-content:space-between;width:100%;"><p style="width:30%;text-align:center;">Home Page</p><p style="width:30%;text-align:center;">Operate Metadata</p><p style="width:30%;text-align:center;">SQL Query</p></div><div style="display:flex;justify-content:space-between;width:100%;"><img src="https://alioss.timecho.com/docs/img/Introduction04.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction05.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction06.png" alt="" style="width:30%;height:auto;"></div><p></p><ul><li>Cluster management tool: aimed at solving the operational difficulties of multi node distributed systems, mainly including cluster deployment, cluster start stop, elastic expansion, configuration updates, data export and other functions, so as to achieve one click instruction issuance for complex database clusters, greatly reducing management difficulty.</li></ul><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/Intoduction07.png" alt=" " style="width:50%;"></div><h3 id="more-professional-enterprise-technical-services" tabindex="-1"><a class="header-anchor" href="#more-professional-enterprise-technical-services"><span>More professional enterprise technical services</span></a></h3><p>TimechoDB customers provide powerful original factory services, including but not limited to on-site installation and training, expert consultant consultation, on-site emergency assistance, software upgrades, online self-service, remote support, and guidance on using the latest development version. At the same time, in order to make IoTDB more suitable for industrial production scenarios, we will recommend modeling solutions, optimize read-write performance, optimize compression ratios, recommend database configurations, and provide other technical support based on the actual data structure and read-write load of the enterprise. If encountering industrial customization scenarios that are not covered by some products, TimechoDB will provide customized development tools based on user characteristics.</p><p>Compared to the open source version, TimechoDB provides a faster release frequency every 2-3 months. At the same time, it offers day level exclusive fixes for urgent customer issues to ensure stable production environments.</p><h3 id="more-compatible-localization-adaptation" tabindex="-1"><a class="header-anchor" href="#more-compatible-localization-adaptation"><span>More compatible localization adaptation</span></a></h3><p>The TimechoDB code is self-developed and controllable, and is compatible with most mainstream information and creative products (CPU, operating system, etc.), and has completed compatibility certification with multiple manufacturers to ensure product compliance and security.</p>',28))])}const g=o(p,[["render",h],["__file","IoTDB-Introduction_timecho.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_timecho.html","title":"What is IoTDB","lang":"en-US","frontmatter":{"description":"What is IoTDB TimechoDB is a low-cost, high-performance native temporal database for the Internet of Things, provided by Timecho based on the Apache IoTDB community version as a...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"What is IoTDB"}],["meta",{"property":"og:description","content":"What is IoTDB TimechoDB is a low-cost, high-performance native temporal database for the Internet of Things, provided by Timecho based on the Apache IoTDB community version as a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-08T09:43:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-08T09:43:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is IoTDB\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-08T09:43:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Product Features","slug":"product-features","link":"#product-features","children":[]},{"level":2,"title":"Enterprise characteristics","slug":"enterprise-characteristics","link":"#enterprise-characteristics","children":[{"level":3,"title":"Higher level product features","slug":"higher-level-product-features","link":"#higher-level-product-features","children":[]},{"level":3,"title":"More efficient/stable product performance","slug":"more-efficient-stable-product-performance","link":"#more-efficient-stable-product-performance","children":[]},{"level":3,"title":"More User-Friendly Tool System","slug":"more-user-friendly-tool-system","link":"#more-user-friendly-tool-system","children":[]},{"level":3,"title":"More professional enterprise technical services","slug":"more-professional-enterprise-technical-services","link":"#more-professional-enterprise-technical-services","children":[]},{"level":3,"title":"More compatible localization adaptation","slug":"more-compatible-localization-adaptation","link":"#more-compatible-localization-adaptation","children":[]}]}],"git":{"createdTime":1727583586000,"updatedTime":1728380589000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":6.09,"words":1827},"filePathRelative":"UserGuide/latest/IoTDB-Introduction/IoTDB-Introduction_timecho.md","localizedDate":"September 29, 2024","autoDesc":true}');export{g as comp,f as data};
