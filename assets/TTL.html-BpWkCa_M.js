import{_ as t,c as a,b as s,o}from"./app-ED5DzO24.js";const l={};function n(i,e){return o(),a("div",null,e[0]||(e[0]=[s(`<h1 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl"><span>TTL</span></a></h1><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.</p><h2 id="set-ttl" tabindex="-1"><a class="header-anchor" href="#set-ttl"><span>Set TTL</span></a></h2><p>The SQL Statement for setting TTL is as follow:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; set ttl to root.ln 3600000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This example means that for data in <code>root.ln</code>, only that of the latest 1 hour will remain, the older one is removed or made invisible.</p><h2 id="unset-ttl" tabindex="-1"><a class="header-anchor" href="#unset-ttl"><span>Unset TTL</span></a></h2><p>To unset TTL, we can use follwing SQL statement:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; unset ttl to root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After unset TTL, all data will be accepted in <code>root.ln</code></p><h2 id="show-ttl" tabindex="-1"><a class="header-anchor" href="#show-ttl"><span>Show TTL</span></a></h2><p>To Show TTL, we can use following SQL statement:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW ALL TTL</span>
<span class="line">IoTDB&gt; SHOW TTL ON StorageGroupNames</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The SHOW ALL TTL example gives the TTL for all storage groups.<br> The SHOW TTL ON root.group1 , root.group2 , root.group3 example shows the TTL for the three storage<br> groups specified.<br> Note: the TTL for storage groups that do not have a TTL set will display as null.</p>`,14)]))}const d=t(l,[["render",n],["__file","TTL.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V0.13.x/Operate-Metadata/TTL.html","title":"TTL","lang":"en-US","frontmatter":{"description":"TTL IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can contr...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/TTL.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/TTL.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TTL"}],["meta",{"property":"og:description","content":"TTL IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can contr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TTL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Set TTL","slug":"set-ttl","link":"#set-ttl","children":[]},{"level":2,"title":"Unset TTL","slug":"unset-ttl","link":"#unset-ttl","children":[]},{"level":2,"title":"Show TTL","slug":"show-ttl","link":"#show-ttl","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.11,"words":334},"filePathRelative":"UserGuide/V0.13.x/Operate-Metadata/TTL.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,p as data};
