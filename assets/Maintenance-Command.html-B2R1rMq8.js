import{_ as a,c as n,b as e,o as t}from"./app-D6rlonH6.js";const o={};function l(p,s){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令"><span>运维命令</span></a></h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush"><span>FLUSH</span></a></h2><p>将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。</p><p>注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行 flush。<br> 如果频繁调用 flush 会导致数据文件很小，降低查询性能。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH </span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> CLUSTER</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache"><span>CLEAR CACHE</span></a></h2><p>手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。在集群模式下，我们提供了清空本节点缓存、清空整个集群缓存命令。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-running" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-running"><span>SET SYSTEM TO READONLY / RUNNING</span></a></h2><p>手动设置系统为正常运行、只读状态。在集群模式下，我们提供了设置本节点状态、设置整个集群状态的命令，默认对整个集群生效。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> RUNNING</span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终止查询" tabindex="-1"><a class="header-anchor" href="#终止查询"><span>终止查询</span></a></h2><p>IoTDB 支持设置 Session 连接超时和查询超时时间，并支持手动终止正在执行的查询。</p><h3 id="session-超时" tabindex="-1"><a class="header-anchor" href="#session-超时"><span>Session 超时</span></a></h3><p>Session 超时控制何时关闭空闲 Session。空闲 Session 指在一段时间内没有发起任何操作的 Session。</p><p>Session 超时默认未开启。可以在配置文件中通过 <code>dn_session_timeout_threshold</code> 参数进行配置。</p><h3 id="查询超时" tabindex="-1"><a class="header-anchor" href="#查询超时"><span>查询超时</span></a></h3><p>对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如下所示：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">;</span></span>
<span class="line">Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统默认的超时时间为 60000 ms，可以在配置文件中通过 <code>query_timeout_threshold</code> 参数进行自定义配置。</p><p>如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span></span>
<span class="line">session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果不配置超时时间参数或将超时时间设置为负数，将使用服务器端默认的超时时间。<br> 如果超时时间设置为0，则会禁用超时功能。</p></blockquote><h3 id="查询终止" tabindex="-1"><a class="header-anchor" href="#查询终止"><span>查询终止</span></a></h3><p>尚未支持</p>`,25)]))}const r=a(o,[["render",l],["__file","Maintenance-Command.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html","title":"运维命令","lang":"zh-CN","frontmatter":{"description":"运维命令 FLUSH 将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。 注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"运维命令"}],["meta",{"property":"og:description","content":"运维命令 FLUSH 将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。 注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运维命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"FLUSH","slug":"flush","link":"#flush","children":[]},{"level":2,"title":"CLEAR CACHE","slug":"clear-cache","link":"#clear-cache","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / RUNNING","slug":"set-system-to-readonly-running","link":"#set-system-to-readonly-running","children":[]},{"level":2,"title":"终止查询","slug":"终止查询","link":"#终止查询","children":[{"level":3,"title":"Session 超时","slug":"session-超时","link":"#session-超时","children":[]},{"level":3,"title":"查询超时","slug":"查询超时","link":"#查询超时","children":[]},{"level":3,"title":"查询终止","slug":"查询终止","link":"#查询终止","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.4,"words":720},"filePathRelative":"zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,c as data};
