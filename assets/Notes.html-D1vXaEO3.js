import{_ as t,c as o,b as r,o as i}from"./app-CYbL30xh.js";const a={};function n(l,e){return i(),o("div",null,e[0]||(e[0]=[r('<h2 id="重要注意事项" tabindex="-1"><a class="header-anchor" href="#重要注意事项"><span>重要注意事项</span></a></h2><ul><li>触发器从注册时开始生效，不对已有的历史数据进行处理。<strong>即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。</strong></li><li>触发器目前采用<strong>同步触发</strong>，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。<strong>您需要自己保证触发器内部的并发安全性</strong>。</li><li>集群中<strong>不能注册过多触发器</strong>。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNode 都有一份该信息的副本。</li><li><strong>建议注册触发器时停止写入</strong>。注册触发器并不是一个原子操作，注册触发器时，会出现集群内部分节点已经注册了该触发器，部分节点尚未注册成功的中间状态。为了避免部分节点上的写入请求被触发器侦听到，部分节点上没有被侦听到的情况，我们建议注册触发器时不要执行写入。</li><li>触发器将作为进程内程序执行，如果您的触发器编写不慎，内存占用过多，由于 IoTDB 并没有办法监控触发器所使用的内存，所以有 OOM 的风险。</li><li>持有有状态触发器实例的节点宕机时，我们会尝试在另外的节点上恢复相应实例，在恢复过程中我们会调用一次触发器类的 restore 接口，您可以在该接口中实现恢复触发器所维护的状态的逻辑。</li><li>触发器 JAR 包有大小限制，必须小于 min(<code>config_node_ratis_log_appender_buffer_size_max</code>, 2G)，其中 <code>config_node_ratis_log_appender_buffer_size_max</code> 是一个配置项，具体含义可以参考 IOTDB 配置项说明。</li><li><strong>不同的 JAR 包中最好不要有全类名相同但功能实现不一样的类</strong>。例如：触发器 trigger1、trigger2 分别对应资源 trigger1.jar、trigger2.jar。如果两个 JAR 包里都包含一个 <code>org.apache.iotdb.trigger.example.AlertListener</code> 类，当 <code>CREATE TRIGGER</code> 使用到这个类时，系统会随机加载其中一个 JAR 包中的类，最终导致触发器执行行为不一致以及其他的问题。</li></ul>',2)]))}const c=t(a,[["render",n],["__file","Notes.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Trigger/Notes.html","title":"","lang":"zh-CN","frontmatter":{"description":"重要注意事项 触发器从注册时开始生效，不对已有的历史数据进行处理。即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。 触发器目前采用同步触发，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。您需要自己保证触发器内部的并发安全性。 集群中不能注册过多触发器。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNode...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Trigger/Notes.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Trigger/Notes.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"重要注意事项 触发器从注册时开始生效，不对已有的历史数据进行处理。即只有成功注册触发器之后发生的写入请求才会被触发器侦听到。 触发器目前采用同步触发，所以编写时需要保证触发器效率，否则可能会大幅影响写入性能。您需要自己保证触发器内部的并发安全性。 集群中不能注册过多触发器。因为触发器信息全量保存在 ConfigNode 中，并且在所有 DataNode..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"重要注意事项","slug":"重要注意事项","link":"#重要注意事项","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"zh/UserGuide/V1.1.x/Trigger/Notes.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,g as data};
