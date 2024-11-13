import{_ as o,c as l,d as e,e as d,a as r,w as n,b as a,r as s,o as p}from"./app-B280G6gL.js";const h={};function c(m,t){const i=s("RouteLink");return p(),l("div",null,[t[2]||(t[2]=e("h1",{id:"产品介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#产品介绍"},[e("span",null,"产品介绍")])],-1)),t[3]||(t[3]=e("p",null,"TimechoDB 是一款低成本、高性能的物联网原生时序数据库，是天谋科技基于 Apache IoTDB 社区版本提供的原厂商业化产品。它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。",-1)),t[4]||(t[4]=e("p",null,"天谋科技基于 TimechoDB 提供更多样的产品功能、更强大的性能和稳定性、更丰富的效能工具，并为用户提供全方位的企业服务，从而为商业化客户提供更强大的产品能力，和更优质的开发、运维、使用体验。",-1)),e("ul",null,[e("li",null,[t[1]||(t[1]=d("下载、部署与使用：")),r(i,{to:"/zh/UserGuide/V1.3.0-2/QuickStart/QuickStart_timecho.html"},{default:n(()=>t[0]||(t[0]=[d("快速上手")])),_:1})])]),t[5]||(t[5]=a('<h2 id="产品特性" tabindex="-1"><a class="header-anchor" href="#产品特性"><span>产品特性</span></a></h2><p>TimechoDB 具备以下优势和特性：</p><ul><li><p>灵活的部署方式：支持云端一键部署、终端解压即用、终端-云端无缝连接（数据云端同步工具）</p></li><li><p>低硬件成本的存储解决方案：支持高压缩比的磁盘存储，无需区分历史库与实时库，数据统一管理</p></li><li><p>层级化的测点组织管理方式：支持在系统中根据设备实际层级关系进行建模，以实现与工业测点管理结构的对齐，同时支持针对层级结构的目录查看、检索等能力</p></li><li><p>高通量的数据读写：支持百万级设备接入、数据高速读写、乱序/多频采集等复杂工业读写场景</p></li><li><p>丰富的时间序列查询语义：支持时序数据原生计算引擎，支持查询时时间戳对齐，提供近百种内置聚合与时序计算函数，支持面向时序特征分析和AI能力</p></li><li><p>高可用的分布式系统：支持HA分布式架构，系统提供7*24小时不间断的实时数据库服务，一个物理节点宕机或网络故障，不会影响系统的正常运行；支持物理节点的增加、删除或过热，系统会自动进行计算/存储资源的负载均衡处理；支持异构环境，不同类型、不同性能的服务器可以组建集群，系统根据物理机的配置，自动负载均衡</p></li><li><p>极低的使用&amp;运维门槛：支持类 SQL 语言、提供多语言原生二次开发接口、具备控制台等完善的工具体系</p></li><li><p>丰富的生态环境对接：支持Hadoop、Spark等大数据生态系统组件对接，支持Grafana、Thingsboard、DataEase等设备管理和可视化工具</p></li></ul><h2 id="企业特性" tabindex="-1"><a class="header-anchor" href="#企业特性"><span>企业特性</span></a></h2><h3 id="更高阶的产品功能" tabindex="-1"><a class="header-anchor" href="#更高阶的产品功能"><span>更高阶的产品功能</span></a></h3><p>TimechoDB 在开源版基础上提供了更多高阶产品功能，在内核层面针对工业生产场景进行原生升级和优化，如多级存储、云边协同、可视化工具、安全增强等功能，能够让用户无需过多关注底层逻辑，将精力聚焦在业务开发中，让工业生产更简单更高效，为企业带来更多的经济效益。如：</p><ul><li><p>双活部署：双活通常是指两个独立的单机（或集群），实时进行镜像同步，它们的配置完全独立，可以同时接收外界的写入，每一个独立的单机（或集群）都可以将写入到自己的数据同步到另一个单机（或集群）中，两个单机（或集群）的数据可达到最终一致。</p></li><li><p>数据同步：通过数据库内置的同步模块，支持数据由场站向中心汇聚，支持全量汇聚、部分汇聚、级联汇聚等各类场景，可支持实时数据同步与批量数据同步两种模式。同时提供多种内置插件，支持企业数据同步应用中的网闸穿透、加密传输、压缩传输等相关要求。</p></li><li><p>多级存储：通过升级底层存储能力，支持根据访问频率和数据重要性等因素将数据划分为冷、温、热等不同层级的数据，并将其存储在不同介质中（如 SSD、机械硬盘、云存储等），同时在查询过程中也由系统进行数据调度。从而在保证数据访问速度的同时，降低客户数据存储成本。</p></li><li><p>安全增强：通过白名单、审计日志等功能加强企业内部管理，降低数据泄露风险。</p></li></ul><p>详细功能对比如下：</p><table style="text-align:left;"><tr><th colspan="2">功能</th><th>Apache IoTDB</th><th>TimechoDB</th></tr><tr><td rowspan="4">部署模式</td><td>单机部署</td><td>√</td><td>√</td></tr><tr><td>分布式部署</td><td>√</td><td>√</td></tr><tr><td>双活部署</td><td>×</td><td>√</td></tr><tr><td>容器部署</td><td>部分支持</td><td>√</td></tr><tr><td rowspan="13">数据库功能</td><td>测点管理</td><td>√</td><td>√</td></tr><tr><td>数据写入</td><td>√</td><td>√</td></tr><tr><td>数据查询</td><td>√</td><td>√</td></tr><tr><td>连续查询</td><td>√</td><td>√</td></tr><tr><td>触发器</td><td>√</td><td>√</td></tr><tr><td>用户自定义函数</td><td>√</td><td>√</td></tr><tr><td>权限管理</td><td>√</td><td>√</td></tr><tr><td>数据同步</td><td>仅文件同步，无内置插件</td><td>实时同步+文件同步，丰富内置插件</td></tr><tr><td>流处理</td><td>仅框架，无内置插件</td><td>框架+丰富内置插件</td></tr><tr><td>多级存储</td><td>×</td><td>√</td></tr><tr><td>视图</td><td>×</td><td>√</td></tr><tr><td>白名单</td><td>×</td><td>√</td></tr><tr><td>审计日志</td><td>×</td><td>√</td></tr><tr><td rowspan="3">配套工具</td><td>可视化控制台</td><td>×</td><td>√</td></tr><tr><td>集群管理工具</td><td>×</td><td>√</td></tr><tr><td>系统监控工具</td><td>×</td><td>√</td></tr><tr><td>国产化</td><td>国产化兼容性认证</td><td>×</td><td>√</td></tr><tr><td rowspan="2">技术支持</td><td>最佳实践</td><td>×</td><td>√</td></tr><tr><td>使用培训</td><td>×</td><td>√</td></tr></table><h3 id="更高效-稳定的产品性能" tabindex="-1"><a class="header-anchor" href="#更高效-稳定的产品性能"><span>更高效/稳定的产品性能</span></a></h3><p>TimechoDB 在开源版的基础上优化了稳定性与性能，经过企业版技术支持，能够实现10倍以上性能提升，并具有故障及时恢复的性能优势。</p><h3 id="更用户友好的工具体系" tabindex="-1"><a class="header-anchor" href="#更用户友好的工具体系"><span>更用户友好的工具体系</span></a></h3><p>TimechoDB 将为用户提供更简单、易用的工具体系，通过集群监控面板（IoTDB Grafana）、数据库控制台（IoTDB Workbench）、集群管理工具（IoTDB Deploy Tool，简称 IoTD）等产品帮助用户快速部署、管理、监控数据库集群，降低运维人员工作/学习成本，简化数据库运维工作，使运维过程更加方便、快捷。</p><ul><li>集群监控面板：旨在解决 IoTDB 及其所在操作系统的监控问题，主要包括：操作系统资源监控、IoTDB 性能监控，及上百项内核监控指标，从而帮助用户监控集群健康状态，并进行集群调优和运维。</li></ul><div style="display:flex;justify-content:space-between;width:100%;"><p style="width:30%;text-align:center;">总体概览</p><p style="width:30%;text-align:center;">操作系统资源监控</p><p style="width:30%;text-align:center;">IoTDB 性能监控</p></div><div style="display:flex;justify-content:space-between;width:100%;"><img src="https://alioss.timecho.com/docs/img/Introduction01.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction02.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction03.png" alt="" style="width:30%;height:auto;"></div><p></p><ul><li>数据库控制台：旨在提供低门槛的数据库交互工具，通过提供界面化的控制台帮助用户简洁明了的进行元数据管理、数据增删改查、权限管理、系统管理等操作，简化数据库使用难度，提高数据库使用效率。</li></ul><div style="display:flex;justify-content:space-between;width:100%;"><p style="width:30%;text-align:center;">首页</p><p style="width:30%;text-align:center;">元数据管理</p><p style="width:30%;text-align:center;">SQL 查询</p></div><div style="display:flex;justify-content:space-between;width:100%;"><img src="https://alioss.timecho.com/docs/img/Introduction04.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction05.png" alt="" style="width:30%;height:auto;"><img src="https://alioss.timecho.com/docs/img/Introduction06.png" alt="" style="width:30%;height:auto;"></div><p></p><ul><li>集群管理工具：旨在解决分布式系统多节点的运维难题，主要包括集群部署、集群启停、弹性扩容、配置更新、数据导出等功能，从而实现对复杂数据库集群的一键式指令下发，极大降低管理难度。</li></ul><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/Intoduction07.png" alt=" " style="width:50%;"></div><h3 id="更专业的企业技术服务" tabindex="-1"><a class="header-anchor" href="#更专业的企业技术服务"><span>更专业的企业技术服务</span></a></h3><p>TimechoDB 客户提供强大的原厂服务，包括但不限于现场安装及培训、专家顾问咨询、现场紧急救助、软件升级、在线自助服务、远程支持、最新开发版使用指导等服务。同时，为了使 IoTDB 更契合工业生产场景，我们会根据企业实际数据结构和读写负载，进行建模方案推荐、读写性能调优、压缩比调优、数据库配置推荐及其他的技术支持。如遇到部分产品未覆盖的工业化定制场景，TimechoDB 将根据用户特点提供定制化开发工具。</p><p>相较于开源版本，每 2-3 个月一个发版周期，TimechoDB 提供周期更快的发版频率，同时针对客户现场紧急问题，提供天级别的专属修复，确保生产环境稳定。</p><h3 id="更兼容的国产化适配" tabindex="-1"><a class="header-anchor" href="#更兼容的国产化适配"><span>更兼容的国产化适配</span></a></h3><p>TimechoDB 代码自研可控，同时兼容大部分主流信创产品（CPU、操作系统等），并完成与多个厂家的兼容认证，确保产品的合规性和安全性。</p>',28))])}const g=o(h,[["render",c],["__file","IoTDB-Introduction_timecho.html.vue"]]),T=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/IoTDB-Introduction/IoTDB-Introduction_timecho.html","title":"产品介绍","lang":"zh-CN","frontmatter":{"description":"产品介绍 TimechoDB 是一款低成本、高性能的物联网原生时序数据库，是天谋科技基于 Apache IoTDB 社区版本提供的原厂商业化产品。它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。 天谋科技基于 TimechoDB 提供更多...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/IoTDB-Introduction/IoTDB-Introduction_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/IoTDB-Introduction/IoTDB-Introduction_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"产品介绍"}],["meta",{"property":"og:description","content":"产品介绍 TimechoDB 是一款低成本、高性能的物联网原生时序数据库，是天谋科技基于 Apache IoTDB 社区版本提供的原厂商业化产品。它可以解决企业组建物联网大数据平台管理时序数据时所遇到的应用场景复杂、数据体量大、采样频率高、数据乱序多、数据处理耗时长、分析需求多样、存储与运维成本高等多种问题。 天谋科技基于 TimechoDB 提供更多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"产品介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"产品特性","slug":"产品特性","link":"#产品特性","children":[]},{"level":2,"title":"企业特性","slug":"企业特性","link":"#企业特性","children":[{"level":3,"title":"更高阶的产品功能","slug":"更高阶的产品功能","link":"#更高阶的产品功能","children":[]},{"level":3,"title":"更高效/稳定的产品性能","slug":"更高效-稳定的产品性能","link":"#更高效-稳定的产品性能","children":[]},{"level":3,"title":"更用户友好的工具体系","slug":"更用户友好的工具体系","link":"#更用户友好的工具体系","children":[]},{"level":3,"title":"更专业的企业技术服务","slug":"更专业的企业技术服务","link":"#更专业的企业技术服务","children":[]},{"level":3,"title":"更兼容的国产化适配","slug":"更兼容的国产化适配","link":"#更兼容的国产化适配","children":[]}]}],"git":{"createdTime":1727583586000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.63,"words":2589},"filePathRelative":"zh/UserGuide/V1.3.0-2/IoTDB-Introduction/IoTDB-Introduction_timecho.md","localizedDate":"2024年9月29日","autoDesc":true}');export{g as comp,T as data};
