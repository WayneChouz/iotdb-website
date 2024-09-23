import{_ as t,c as a,b as r,o as n}from"./app-CYbL30xh.js";const i={};function o(l,e){return n(),a("div",null,e[0]||(e[0]=[r('<h1 id="触发器" tabindex="-1"><a class="header-anchor" href="#触发器"><span>触发器</span></a></h1><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><p>触发器提供了一种侦听序列数据变动的机制。配合用户自定义逻辑，可完成告警、数据转发等功能。</p><p>触发器基于 Java 反射机制实现。用户通过简单实现 Java 接口，即可实现数据侦听。IoTDB 允许用户动态注册、卸载触发器，在注册、卸载期间，无需启停服务器。</p><h3 id="侦听模式" tabindex="-1"><a class="header-anchor" href="#侦听模式"><span>侦听模式</span></a></h3><p>IoTDB 的单个触发器可用于侦听符合特定模式的时间序列的数据变动，如时间序列 root.sg.a 上的数据变动，或者符合路径模式 root.**.a 的时间序列上的数据变动。您在注册触发器时可以通过 SQL 语句指定触发器侦听的路径模式。</p><h3 id="触发器类型" tabindex="-1"><a class="header-anchor" href="#触发器类型"><span>触发器类型</span></a></h3><p>目前触发器分为两类，您在注册触发器时可以通过 SQL 语句指定类型：</p><ul><li>有状态的触发器。该类触发器的执行逻辑可能依赖前后的多条数据，框架会将不同节点写入的数据汇总到同一个触发器实例进行计算，来保留上下文信息，通常用于采样或者统计一段时间的数据聚合信息。集群中只有一个节点持有有状态触发器的实例。</li><li>无状态的触发器。触发器的执行逻辑只和当前输入的数据有关，框架无需将不同节点的数据汇总到同一个触发器实例中，通常用于单行数据的计算和异常检测等。集群中每个节点均持有无状态触发器的实例。</li></ul><h3 id="触发时机" tabindex="-1"><a class="header-anchor" href="#触发时机"><span>触发时机</span></a></h3><p>触发器的触发时机目前有两种，后续会拓展其它触发时机。您在注册触发器时可以通过 SQL 语句指定触发时机：</p><ul><li>BEFORE INSERT，即在数据持久化之前触发。请注意，目前触发器并不支持数据清洗，不会对要持久化的数据本身进行变动。</li><li>AFTER INSERT，即在数据持久化之后触发。</li></ul>',12)]))}const c=t(i,[["render",o],["__file","Instructions.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Trigger/Instructions.html","title":"触发器","lang":"zh-CN","frontmatter":{"description":"触发器 使用说明 触发器提供了一种侦听序列数据变动的机制。配合用户自定义逻辑，可完成告警、数据转发等功能。 触发器基于 Java 反射机制实现。用户通过简单实现 Java 接口，即可实现数据侦听。IoTDB 允许用户动态注册、卸载触发器，在注册、卸载期间，无需启停服务器。 侦听模式 IoTDB 的单个触发器可用于侦听符合特定模式的时间序列的数据变动，如...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Trigger/Instructions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Trigger/Instructions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"触发器"}],["meta",{"property":"og:description","content":"触发器 使用说明 触发器提供了一种侦听序列数据变动的机制。配合用户自定义逻辑，可完成告警、数据转发等功能。 触发器基于 Java 反射机制实现。用户通过简单实现 Java 接口，即可实现数据侦听。IoTDB 允许用户动态注册、卸载触发器，在注册、卸载期间，无需启停服务器。 侦听模式 IoTDB 的单个触发器可用于侦听符合特定模式的时间序列的数据变动，如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"触发器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"侦听模式","slug":"侦听模式","link":"#侦听模式","children":[]},{"level":3,"title":"触发器类型","slug":"触发器类型","link":"#触发器类型","children":[]},{"level":3,"title":"触发时机","slug":"触发时机","link":"#触发时机","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"zh/UserGuide/V1.1.x/Trigger/Instructions.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,p as data};
