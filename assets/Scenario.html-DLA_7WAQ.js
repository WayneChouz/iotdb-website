import{_ as a,c as t,b as i,o}from"./app-B280G6gL.js";const l={};function n(c,e){return o(),t("div",null,e[0]||(e[0]=[i('<h1 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h1><h2 id="应用1——车联网" tabindex="-1"><a class="header-anchor" href="#应用1——车联网"><span>应用1——车联网</span></a></h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><blockquote><ul><li>难点：设备多，序列多</li></ul></blockquote><p>某车企业务体量庞大，需处理车辆多、数据量大，亿级数据测点，每秒超千万条新增数据点，毫秒级采集频率，对数据库的实时写入、存储与处理能力均要求较高。</p><p>原始架构中使用Hbase集群作为存储数据库，查询延迟高，系统维护难度和成本高。难以满足需求。而IoTDB支持百万级测点数高频数据写入和查询毫秒级响应，高效的数据处理方式可以让用户快速、准确地获取到所需数据，大幅提升了数据处理的效率。</p><p>因此选择以IoTDB为数据存储层，架构轻量，减轻运维成本，且支持弹性扩缩容和高可用，确保系统的稳定性和可用性。</p><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构"><span>架构</span></a></h3><p>该车企以IoTDB为时序数据存储引擎的数据管理架构如下图所示。</p><figure><img src="https://alioss.timecho.com/docs/img/1280X1280.PNG" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>车辆数据基于TCP和工业协议编码后发送至边缘网关，网关将数据发往消息队列Kafka集群，解耦生产和消费两端。Kafka将数据发送至Flink进行实时处理，处理后的数据写入IoTDB中，历史数据和最新数据均在IoTDB中进行查询，最后数据通过API流入可视化平台等进行应用。</p><h2 id="应用2——智能运维" tabindex="-1"><a class="header-anchor" href="#应用2——智能运维"><span>应用2——智能运维</span></a></h2><h3 id="背景-1" tabindex="-1"><a class="header-anchor" href="#背景-1"><span>背景</span></a></h3><p>某钢厂旨在搭建低成本、大规模接入能力的远程智能运维软硬件平台，接入数百条产线，百万以上设备，千万级时间序列，实现智能运维远程覆盖。</p><p>此过程中面临诸多痛点：</p><blockquote><ul><li>设备种类繁多、协议众多、数据类型众多</li><li>时序数据特别是高频数据，数据量巨大</li><li>海量时序数据下的读写速度无法满足业务需求</li><li>现有时序数据管理组件无法满足各类高级应用需求</li></ul></blockquote><p>而选取IoTDB作为智能运维平台的存储数据库后，能稳定写入多频及高频采集数据，覆盖钢铁全工序，并采用复合压缩算法使数据大小缩减10倍以上，节省成本。IoTDB 还有效支持超过10年的历史数据降采样查询，帮助企业挖掘数据趋势，助力企业长远战略分析。</p><h3 id="架构-1" tabindex="-1"><a class="header-anchor" href="#架构-1"><span>架构</span></a></h3><p>下图为该钢厂的智能运维平台架构设计。</p><figure><img src="https://alioss.timecho.com/docs/img/1280X1280 (1).PNG" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="应用3——智能工厂" tabindex="-1"><a class="header-anchor" href="#应用3——智能工厂"><span>应用3——智能工厂</span></a></h2><h3 id="背景-2" tabindex="-1"><a class="header-anchor" href="#背景-2"><span>背景</span></a></h3><blockquote><ul><li>难点/亮点：云边协同</li></ul></blockquote><p>某卷烟厂希望从“传统工厂”向“高端工厂”完成转型升级，利用物联网和设备监控技术，加强信息管理和服务实现数据在企业内部自由流动，数据和决策的上通下达，帮助企业提高生产力，降低运营成本。</p><h3 id="架构-2" tabindex="-1"><a class="header-anchor" href="#架构-2"><span>架构</span></a></h3><p>下图为该工厂的物联网系统架构，IoTDB贯穿公司、工厂、车间三级物联网平台，实现设备统一联调联控。车间层面的数据通过边缘层的IoTDB进行实时采集、处理和存储，并实现了一系列的分析任务。经过预处理的数据被发送至平台层的IoTDB，进行业务层面的数据治理，如设备管理、连接管理、服务支持等。最终，数据会被集成到集团层面的IoTDB中，供整个组织进行综合分析和决策。</p><figure><img src="https://alioss.timecho.com/docs/img/1280X1280 (2).PNG" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="应用4——工况监控" tabindex="-1"><a class="header-anchor" href="#应用4——工况监控"><span>应用4——工况监控</span></a></h2><h3 id="背景-3" tabindex="-1"><a class="header-anchor" href="#背景-3"><span>背景</span></a></h3><blockquote><ul><li>难点/亮点：智慧供热，降本增效</li></ul></blockquote><p>某电厂需要对风机锅炉设备、发电机、变电设备等主辅机数万测点进行监控。在以往的供暖供热过程中缺少对于下一阶段的供热量的预判，导致无效供热、过度供热、供热不足等情况。</p><p>使用IoTDB作为存储与分析引擎后，结合气象数据、楼控数据、户控数据、换热站数据、官网数据、热源侧数据等总和评判供热量，所有数据在IoTDB中进行时间对齐，为智慧供热提供可靠的数据依据，实现智慧供热。同时也解决了按需计费、管网、热战等相关供热过程中各重要组成部分的工况监控，减少了人力投入。</p><h3 id="架构-3" tabindex="-1"><a class="header-anchor" href="#架构-3"><span>架构</span></a></h3><p>下图为该电厂的供热场景数据管理架构。</p><figure><img src="https://alioss.timecho.com/docs/img/7b7a22ae-6367-4084-a526-53c88190bc50.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',35)]))}const r=a(l,[["render",n],["__file","Scenario.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/IoTDB-Introduction/Scenario.html","title":"应用场景","lang":"zh-CN","frontmatter":{"description":"应用场景 应用1——车联网 背景 难点：设备多，序列多 某车企业务体量庞大，需处理车辆多、数据量大，亿级数据测点，每秒超千万条新增数据点，毫秒级采集频率，对数据库的实时写入、存储与处理能力均要求较高。 原始架构中使用Hbase集群作为存储数据库，查询延迟高，系统维护难度和成本高。难以满足需求。而IoTDB支持百万级测点数高频数据写入和查询毫秒级响应，高...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/IoTDB-Introduction/Scenario.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/IoTDB-Introduction/Scenario.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"应用场景"}],["meta",{"property":"og:description","content":"应用场景 应用1——车联网 背景 难点：设备多，序列多 某车企业务体量庞大，需处理车辆多、数据量大，亿级数据测点，每秒超千万条新增数据点，毫秒级采集频率，对数据库的实时写入、存储与处理能力均要求较高。 原始架构中使用Hbase集群作为存储数据库，查询延迟高，系统维护难度和成本高。难以满足需求。而IoTDB支持百万级测点数高频数据写入和查询毫秒级响应，高..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/1280X1280.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"应用场景\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/1280X1280.PNG\\",\\"https://alioss.timecho.com/docs/img/1280X1280%20(1\\",\\"https://alioss.timecho.com/docs/img/1280X1280%20(2\\",\\"https://alioss.timecho.com/docs/img/7b7a22ae-6367-4084-a526-53c88190bc50.png\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"应用1——车联网","slug":"应用1——车联网","link":"#应用1——车联网","children":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"架构","slug":"架构","link":"#架构","children":[]}]},{"level":2,"title":"应用2——智能运维","slug":"应用2——智能运维","link":"#应用2——智能运维","children":[{"level":3,"title":"背景","slug":"背景-1","link":"#背景-1","children":[]},{"level":3,"title":"架构","slug":"架构-1","link":"#架构-1","children":[]}]},{"level":2,"title":"应用3——智能工厂","slug":"应用3——智能工厂","link":"#应用3——智能工厂","children":[{"level":3,"title":"背景","slug":"背景-2","link":"#背景-2","children":[]},{"level":3,"title":"架构","slug":"架构-2","link":"#架构-2","children":[]}]},{"level":2,"title":"应用4——工况监控","slug":"应用4——工况监控","link":"#应用4——工况监控","children":[{"level":3,"title":"背景","slug":"背景-3","link":"#背景-3","children":[]},{"level":3,"title":"架构","slug":"架构-3","link":"#架构-3","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.21,"words":1262},"filePathRelative":"zh/UserGuide/V1.2.x/IoTDB-Introduction/Scenario.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,h as data};
