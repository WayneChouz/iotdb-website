const e=JSON.parse('{"key":"v-02a70d5e","path":"/zh/UserGuide/Master/Basic-Concept/Cluster-data-partitioning.html","title":"集群数据分区与负载均衡","lang":"zh-CN","frontmatter":{"description":"IoTDB 以数据分区（DataRegion）为单位对元数据和数据进行管理，从序列和时间两个维度进行数据划分。 分区槽 一个序列分区槽和一个时间分区槽可以组合产生一个数据分区(当该序列分区槽在该时间分区槽下有对应数据时)。 序列分区槽 每个数据库持有固定数量的序列分区槽，默认为1000个。该数据库管理的每个时间序列都将通过序列分区算法（通常为某种哈希算...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/Master/Basic-Concept/Cluster-data-partitioning.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/Master/Basic-Concept/Cluster-data-partitioning.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集群数据分区与负载均衡"}],["meta",{"property":"og:description","content":"IoTDB 以数据分区（DataRegion）为单位对元数据和数据进行管理，从序列和时间两个维度进行数据划分。 分区槽 一个序列分区槽和一个时间分区槽可以组合产生一个数据分区(当该序列分区槽在该时间分区槽下有对应数据时)。 序列分区槽 每个数据库持有固定数量的序列分区槽，默认为1000个。该数据库管理的每个时间序列都将通过序列分区算法（通常为某种哈希算..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-08T09:29:18.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-08T09:29:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群数据分区与负载均衡\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T09:29:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"分区槽","slug":"分区槽","link":"#分区槽","children":[{"level":3,"title":"序列分区槽","slug":"序列分区槽","link":"#序列分区槽","children":[]},{"level":3,"title":"时间分区槽","slug":"时间分区槽","link":"#时间分区槽","children":[]}]},{"level":2,"title":"元数据分区","slug":"元数据分区","link":"#元数据分区","children":[]},{"level":2,"title":"数据分区","slug":"数据分区","link":"#数据分区","children":[]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]}],"git":{"createdTime":1702027758000,"updatedTime":1702027758000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.44,"words":731},"filePathRelative":"zh/UserGuide/Master/Basic-Concept/Cluster-data-partitioning.md","localizedDate":"2023年12月8日","autoDesc":true}');export{e as data};
