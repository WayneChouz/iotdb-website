import{_ as a,c as t,b as n,o as s}from"./app-B280G6gL.js";const i={};function l(r,e){return s(),t("div",null,e[0]||(e[0]=[n(`<h1 id="配置项修改介绍" tabindex="-1"><a class="header-anchor" href="#配置项修改介绍"><span>配置项修改介绍</span></a></h1><h2 id="设置方式" tabindex="-1"><a class="header-anchor" href="#设置方式"><span>设置方式</span></a></h2><ul><li>使用sql语句修改【推荐】</li><li>直接修改配置文件【不推荐】</li></ul><h2 id="生效方式" tabindex="-1"><a class="header-anchor" href="#生效方式"><span>生效方式</span></a></h2><ul><li>第一次启动后不可修改 (first_start)</li><li>重启后生效 (restart)</li><li>热加载 (hot_reload)</li></ul><h1 id="直接修改配置文件" tabindex="-1"><a class="header-anchor" href="#直接修改配置文件"><span>直接修改配置文件</span></a></h1><p>可以通过重启或以下命令生效</p><h2 id="热加载配置命令" tabindex="-1"><a class="header-anchor" href="#热加载配置命令"><span>热加载配置命令</span></a></h2><p>使支持热加载的配置项改动立即生效。<br> 对于已经写在配置文件中修改过的配置项，从配置文件中删除或注释后再进行 load configuration 将恢复默认值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">load configuration</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="配置项操作语句" tabindex="-1"><a class="header-anchor" href="#配置项操作语句"><span>配置项操作语句</span></a></h1><p>设置配置项</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">set configuration &quot;key1&quot;=&quot;value1&quot; &quot;key2&quot;=&quot;value2&quot;... (on nodeId)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1"><span>示例1</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">set configuration &quot;enable_cross_space_compaction&quot;=&quot;false&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对集群所有节点永久生效，设置 enable_cross_space_compaction 为 false，并写入到 iotdb-common.properties 中。</p><h3 id="示例2" tabindex="-1"><a class="header-anchor" href="#示例2"><span>示例2</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">set configuration &quot;enable_cross_space_compaction&quot;=&quot;false&quot; &quot;enable_seq_space_compaction&quot;=&quot;false&quot; on 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对 nodeId 为 1 的节点永久生效，设置 enable_cross_space_compaction 为 false，设置 enable_seq_space_compaction 为 false，并写入到 iotdb-common.properties 中。</p><h3 id="示例3" tabindex="-1"><a class="header-anchor" href="#示例3"><span>示例3</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">set configuration &quot;enable_cross_space_compaction&quot;=&quot;false&quot; &quot;timestamp_precision&quot;=&quot;ns&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对集群所有节点永久生效，设置 enable_cross_space_compaction 为 false，timestamp_precision 为 ns，并写入到 iotdb-common.properties 中。但是，timestamp_precision 是第一次启动后就无法修改的配置项，因此会忽略这个配置项的更新，返回如下。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Msg: org.apache.iotdb.jdbc.IoTDBSQLException: 301: ignored config items: [timestamp_precision]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="生效配置项" tabindex="-1"><a class="header-anchor" href="#生效配置项"><span>生效配置项</span></a></h1><p>支持热加载立即生效的配置项在 iotdb-common.properties.template 文件中标记 effectiveMode 为 hot_reload</p><p>示例</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Used for indicate cluster name and distinguish different cluster.</span>
<span class="line"># If you need to modify the cluster name, it&#39;s recommended to use &#39;set configuration &quot;cluster_name=xxx&quot;&#39; sql.</span>
<span class="line"># Manually modifying configuration file is not recommended, which may cause node restart fail.</span>
<span class="line"># effectiveMode: hot_reload</span>
<span class="line"># Datatype: string</span>
<span class="line">cluster_name=defaultCluster</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const d=a(i,[["render",l],["__file","Modify-Config-Manual.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Reference/Modify-Config-Manual.html","title":"配置项修改介绍","lang":"zh-CN","frontmatter":{"description":"配置项修改介绍 设置方式 使用sql语句修改【推荐】 直接修改配置文件【不推荐】 生效方式 第一次启动后不可修改 (first_start) 重启后生效 (restart) 热加载 (hot_reload) 直接修改配置文件 可以通过重启或以下命令生效 热加载配置命令 使支持热加载的配置项改动立即生效。 对于已经写在配置文件中修改过的配置项，从配置文件...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Reference/Modify-Config-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Reference/Modify-Config-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"配置项修改介绍"}],["meta",{"property":"og:description","content":"配置项修改介绍 设置方式 使用sql语句修改【推荐】 直接修改配置文件【不推荐】 生效方式 第一次启动后不可修改 (first_start) 重启后生效 (restart) 热加载 (hot_reload) 直接修改配置文件 可以通过重启或以下命令生效 热加载配置命令 使支持热加载的配置项改动立即生效。 对于已经写在配置文件中修改过的配置项，从配置文件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置项修改介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"设置方式","slug":"设置方式","link":"#设置方式","children":[]},{"level":2,"title":"生效方式","slug":"生效方式","link":"#生效方式","children":[]},{"level":2,"title":"热加载配置命令","slug":"热加载配置命令","link":"#热加载配置命令","children":[{"level":3,"title":"示例1","slug":"示例1","link":"#示例1","children":[]},{"level":3,"title":"示例2","slug":"示例2","link":"#示例2","children":[]},{"level":3,"title":"示例3","slug":"示例3","link":"#示例3","children":[]}]}],"git":{"createdTime":1721383100000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"zh/UserGuide/V1.3.0-2/Reference/Modify-Config-Manual.md","localizedDate":"2024年7月19日","autoDesc":true}');export{d as comp,c as data};
