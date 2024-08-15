import{_ as t,o as a,c as e,e as i}from"./app-CHHFxD1F.js";const n={},o=i('<h1 id="data-partitioning-load-balancing" tabindex="-1"><a class="header-anchor" href="#data-partitioning-load-balancing"><span>Data Partitioning &amp; Load Balancing</span></a></h1><p>IoTDB manages metadata and data based on data partitions (DataRegion), dividing the data from both the sequence and time dimensions.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/upload/data-region.jpg"><h2 id="partition-slots" tabindex="-1"><a class="header-anchor" href="#partition-slots"><span>Partition Slots</span></a></h2><p>A sequence partition slot combined with a time partition slot can generate a data partition (when the sequence slot has corresponding data under that time slot).</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/SeriesPartitionSlot.png?raw=true"><h3 id="sequence-partition-slots" tabindex="-1"><a class="header-anchor" href="#sequence-partition-slots"><span>Sequence Partition Slots</span></a></h3><p>Each database holds a fixed number of sequence partition slots, with the default set to 1000. Every time series managed by the database is allocated to a unique sequence partition slot using a partitioning algorithm (usually some hash method).</p><h3 id="time-partition-slots" tabindex="-1"><a class="header-anchor" href="#time-partition-slots"><span>Time Partition Slots</span></a></h3><p>Every time series will continuously produce data. If all the data from a time series is stored on one node continuously, the newly added DataNode in the cluster might not be effectively utilized.</p><p>Time partition slots slice the time-series data from the time dimension (typically, one time partition per day), making the time-series data storage in the cluster easy to manage.</p><h2 id="metadata-partitioning" tabindex="-1"><a class="header-anchor" href="#metadata-partitioning"><span>Metadata Partitioning</span></a></h2><p>The metadata partition management of a single database, following a specific load balancing strategy, assigns all sequence slots to the corresponding SchemaRegionGroup, further horizontally scaling within the cluster.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/SchemaRegion.png?raw=true"><h2 id="data-partitioning" tabindex="-1"><a class="header-anchor" href="#data-partitioning"><span>Data Partitioning</span></a></h2><p>It follows a certain load balancing strategy, dividing time and sequence partition slots, and allocating them to the relevant DataRegionGroup, further allowing horizontal scaling in the cluster.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/DataRegion.png?raw=true"><h2 id="load-balancing" tabindex="-1"><a class="header-anchor" href="#load-balancing"><span>Load Balancing</span></a></h2><p>When the cluster&#39;s capacity remains unchanged, data will be evenly distributed across all nodes to utilize storage and computational resources effectively.</p><p>Also, during cluster expansion, the system automatically increases the number of regions to fully exploit the computational resources of all nodes without manual intervention. Such dynamic expansion enhances the cluster&#39;s performance and scalability, making the system more flexible and efficient.</p>',20),s=[o];function r(l,d){return a(),e("div",null,s)}const p=t(n,[["render",r],["__file","Cluster-data-partitioning.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/latest/Basic-Concept/Cluster-data-partitioning.html","title":"Data Partitioning & Load Balancing","lang":"en-US","frontmatter":{"description":"Data Partitioning & Load Balancing IoTDB manages metadata and data based on data partitions (DataRegion), dividing the data from both the sequence and time dimensions. Partition...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Basic-Concept/Cluster-data-partitioning.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Basic-Concept/Cluster-data-partitioning.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Partitioning & Load Balancing"}],["meta",{"property":"og:description","content":"Data Partitioning & Load Balancing IoTDB manages metadata and data based on data partitions (DataRegion), dividing the data from both the sequence and time dimensions. Partition..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-17T08:00:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-17T08:00:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Partitioning & Load Balancing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-17T08:00:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Partition Slots","slug":"partition-slots","link":"#partition-slots","children":[{"level":3,"title":"Sequence Partition Slots","slug":"sequence-partition-slots","link":"#sequence-partition-slots","children":[]},{"level":3,"title":"Time Partition Slots","slug":"time-partition-slots","link":"#time-partition-slots","children":[]}]},{"level":2,"title":"Metadata Partitioning","slug":"metadata-partitioning","link":"#metadata-partitioning","children":[]},{"level":2,"title":"Data Partitioning","slug":"data-partitioning","link":"#data-partitioning","children":[]},{"level":2,"title":"Load Balancing","slug":"load-balancing","link":"#load-balancing","children":[]}],"git":{"createdTime":1692000283000,"updatedTime":1715932853000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"UserGuide/latest/Basic-Concept/Cluster-data-partitioning.md","localizedDate":"August 14, 2023","autoDesc":true}');export{p as comp,h as data};
