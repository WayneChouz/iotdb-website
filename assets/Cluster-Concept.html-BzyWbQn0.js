import{_ as n,c as i,b as o,d as t,e as a,a as r,w as l,r as d,o as c}from"./app-i6u37es5.js";const g={};function h(p,e){const s=d("RouteLink");return c(),i("div",null,[e[6]||(e[6]=o('<h1 id="cluster-related-concepts" tabindex="-1"><a class="header-anchor" href="#cluster-related-concepts"><span>Cluster-related Concepts</span></a></h1><p>The figure below illustrates a typical IoTDB 3C3D1A cluster deployment mode, comprising 3 ConfigNodes, 3 DataNodes, and 1 AINode:<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/Common-Concepts_02.png"></p><p>This deployment involves several key concepts that users commonly encounter when working with IoTDB clusters, including:</p><ul><li><strong>Nodes</strong> (ConfigNode, DataNode, AINode);</li><li><strong>Slots</strong> (SchemaSlot, DataSlot);</li><li><strong>Regions</strong> (SchemaRegion, DataRegion);</li><li><strong>Replica Groups</strong>.</li></ul><p>The following sections will provide a detailed introduction to these concepts.</p><h2 id="nodes" tabindex="-1"><a class="header-anchor" href="#nodes"><span>Nodes</span></a></h2><p>An IoTDB cluster consists of three types of nodes (processes): <strong>ConfigNode</strong> (the main node), <strong>DataNode</strong>, and <strong>AINode</strong>, as detailed below:</p>',7)),t("ul",null,[t("li",null,[e[1]||(e[1]=t("strong",null,"ConfigNode:",-1)),e[2]||(e[2]=a(" ConfigNodes store cluster configurations, database metadata, the routing information of time series' schema and data. They also monitor cluster nodes and conduct load balancing. All ConfigNodes maintain full mutual backups, as shown in the figure with ConfigNode-1, ConfigNode-2, and ConfigNode-3. ConfigNodes do not directly handle client read or write requests. Instead, they guide the distribution of time series' schema and data within the cluster using a series of ")),r(s,{to:"/UserGuide/latest/Technical-Insider/Cluster-data-partitioning.html"},{default:l(()=>e[0]||(e[0]=[a("load balancing algorithms")])),_:1}),e[3]||(e[3]=a("."))]),e[4]||(e[4]=t("li",null,[t("strong",null,"DataNode:"),a(" DataNodes are responsible for reading and writing time series' schema and data. Each DataNode can accept client read and write requests and provide corresponding services, as illustrated with DataNode-1, DataNode-2, and DataNode-3 in the above figure. When a DataNode receives client requests, it can process them directly or forward them if it has the relevant routing information cached locally. Otherwise, it queries the ConfigNode for routing details and caches the information to improve the efficiency of subsequent requests.")],-1)),e[5]||(e[5]=t("li",null,[t("strong",null,"AINode:"),a(" AINodes interact with ConfigNodes and DataNodes to extend IoTDB's capabilities for data intelligence analysis on time series data. They support registering pre-trained machine learning models from external sources and performing time series analysis tasks using simple SQL statements on specified data. This process integrates model creation, management, and inference within the database engine. Currently, the system provides built-in algorithms or self-training models for common time series analysis scenarios, such as forecasting and anomaly detection.")],-1))]),e[7]||(e[7]=o('<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><p>IoTDB divides time series&#39; schema and data into smaller, more manageable units called <strong>slots</strong>. Slots are logical entities, and in an IoTDB cluster, the <strong>SchemaSlots</strong> and <strong>DataSlots</strong> are defined as follows:</p><ul><li><strong>SchemaSlot:</strong> A SchemaSlot represents a subset of the time series&#39; schema collection. The total number of SchemaSlots is fixed, with a default value of 1000. IoTDB uses a hashing algorithm to evenly distribute all devices across these SchemaSlots.</li><li><strong>DataSlot:</strong> A DataSlot represents a subset of the time series&#39; data collection. Based on the SchemaSlots, the data for corresponding devices is further divided into DataSlots by a fixed time interval. The default time interval for a DataSlot is 7 days.</li></ul><h2 id="region" tabindex="-1"><a class="header-anchor" href="#region"><span>Region</span></a></h2><p>In IoTDB, time series&#39; schema and data are replicated across DataNodes to ensure high availability in the cluster. However, replicating data at the slot level can increase management complexity and reduce write throughput. To address this, IoTDB introduces the concept of <strong>Region</strong>, which groups SchemaSlots and DataSlots into <strong>SchemaRegions</strong> and <strong>DataRegions</strong> respectively. Replication is then performed at the Region level. The definitions of SchemaRegion and DataRegion are as follows:</p><ul><li><strong>SchemaRegion</strong>: A SchemaRegion is the basic unit for storing and replicating time series&#39; schema. All SchemaSlots in a database are evenly distributed across the database&#39;s SchemaRegions. SchemaRegions with the same RegionID are replicas of each other. For example, in the figure above, SchemaRegion-1 has three replicas located on DataNode-1, DataNode-2, and DataNode-3.</li><li><strong>DataRegion</strong>: A DataRegion is the basic unit for storing and replicating time series&#39; data. All DataSlots in a database are evenly distributed across the database&#39;s DataRegions. DataRegions with the same RegionID are replicas of each other. For instance, in the figure above, DataRegion-2 has two replicas located on DataNode-1 and DataNode-2.</li></ul><h2 id="replica-groups" tabindex="-1"><a class="header-anchor" href="#replica-groups"><span>Replica Groups</span></a></h2><p>Region replicas are critical for the fault tolerance of the cluster. Each Region&#39;s replicas are organized into <strong>replica groups</strong>, where the replicas are assigned roles as either <strong>leader</strong> or <strong>follower</strong>, working together to provide read and write services. Recommended replica group configurations under different architectures are as follows:</p><table><thead><tr><th style="text-align:center;">Category</th><th style="text-align:center;">Parameter</th><th style="text-align:center;">Single-node Recommended Configuration</th><th style="text-align:center;">Distributed Recommended Configuration</th></tr></thead><tbody><tr><td style="text-align:center;">Schema</td><td style="text-align:center;"><code>schema_replication_factor</code></td><td style="text-align:center;">1</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">Data</td><td style="text-align:center;"><code>data_replication_factor</code></td><td style="text-align:center;">1</td><td style="text-align:center;">2</td></tr></tbody></table>',9))])}const u=n(g,[["render",h],["__file","Cluster-Concept.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/latest/Background-knowledge/Cluster-Concept.html","title":"Cluster-related Concepts","lang":"en-US","frontmatter":{"description":"Cluster-related Concepts The figure below illustrates a typical IoTDB 3C3D1A cluster deployment mode, comprising 3 ConfigNodes, 3 DataNodes, and 1 AINode: This deployment involv...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Background-knowledge/Cluster-Concept.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Background-knowledge/Cluster-Concept.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Cluster-related Concepts"}],["meta",{"property":"og:description","content":"Cluster-related Concepts The figure below illustrates a typical IoTDB 3C3D1A cluster deployment mode, comprising 3 ConfigNodes, 3 DataNodes, and 1 AINode: This deployment involv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-02T06:34:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-02T06:34:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cluster-related Concepts\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T06:34:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Nodes","slug":"nodes","link":"#nodes","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Region","slug":"region","link":"#region","children":[]},{"level":2,"title":"Replica Groups","slug":"replica-groups","link":"#replica-groups","children":[]}],"git":{"createdTime":1732597948000,"updatedTime":1733121246000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":2.74,"words":822},"filePathRelative":"UserGuide/latest/Background-knowledge/Cluster-Concept.md","localizedDate":"November 26, 2024","autoDesc":true}');export{u as comp,f as data};
