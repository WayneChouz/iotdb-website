import{_ as t,c as r,b as n,o as i}from"./app-i6u37es5.js";const a={};function s(o,e){return i(),r("div",null,e[0]||(e[0]=[n('<h1 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h1><p>The trigger provides a mechanism for listening to changes in time series data. With user-defined logic, tasks such as alerting and data forwarding can be conducted.</p><p>The trigger is implemented based on the reflection mechanism. Users can monitor data changes by implementing the Java interfaces. IoTDB allows users to dynamically register and drop triggers without restarting the server.</p><p>The document will help you learn to define and manage triggers.</p><h2 id="pattern-for-listening" tabindex="-1"><a class="header-anchor" href="#pattern-for-listening"><span>Pattern for listening</span></a></h2><p>A single trigger can be used to listen for data changes in a time series that match a specific pattern. For example, a trigger can listen for the data changes of time series <code>root.sg.a</code>, or time series that match the pattern <code>root.sg.*</code>. When you register a trigger, you can specify the path pattern that the trigger listens on through an SQL statement.</p><h2 id="trigger-type" tabindex="-1"><a class="header-anchor" href="#trigger-type"><span>Trigger Type</span></a></h2><p>There are currently two types of triggers, and you can specify the type through an SQL statement when registering a trigger:</p><ul><li>Stateful triggers: The execution logic of this type of trigger may depend on data from multiple insertion statement . The framework will aggregate the data written by different nodes into the same trigger instance for calculation to retain context information. This type of trigger is usually used for sampling or statistical data aggregation for a period of time. information. Only one node in the cluster holds an instance of a stateful trigger.</li><li>Stateless triggers: The execution logic of the trigger is only related to the current input data. The framework does not need to aggregate the data of different nodes into the same trigger instance. This type of trigger is usually used for calculation of single row data and abnormal detection. Each node in the cluster holds an instance of a stateless trigger.</li></ul><h2 id="trigger-event" tabindex="-1"><a class="header-anchor" href="#trigger-event"><span>Trigger Event</span></a></h2><p>There are currently two trigger events for the trigger, and other trigger events will be expanded in the future. When you register a trigger, you can specify the trigger event through an SQL statement:</p><ul><li>BEFORE INSERT: Fires before the data is persisted. <strong>Please note that currently the trigger does not support data cleaning and will not change the data to be persisted itself.</strong></li><li>AFTER INSERT: Fires after the data is persisted.</li></ul>',12)]))}const l=t(a,[["render",s],["__file","Instructions.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Trigger/Instructions.html","title":"Instructions","lang":"en-US","frontmatter":{"description":"Instructions The trigger provides a mechanism for listening to changes in time series data. With user-defined logic, tasks such as alerting and data forwarding can be conducted....","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Trigger/Instructions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Trigger/Instructions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Instructions"}],["meta",{"property":"og:description","content":"Instructions The trigger provides a mechanism for listening to changes in time series data. With user-defined logic, tasks such as alerting and data forwarding can be conducted...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Instructions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Pattern for listening","slug":"pattern-for-listening","link":"#pattern-for-listening","children":[]},{"level":2,"title":"Trigger Type","slug":"trigger-type","link":"#trigger-type","children":[]},{"level":2,"title":"Trigger Event","slug":"trigger-event","link":"#trigger-event","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"UserGuide/V1.1.x/Trigger/Instructions.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,c as data};
