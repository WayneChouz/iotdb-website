import{_ as e,o as a,c as s,e as n}from"./app-CIPkfidu.js";const t={},l=n(`<h1 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令"><span>运维命令</span></a></h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush"><span>FLUSH</span></a></h2><p>将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。</p><p>注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行 flush。<br> 如果频繁调用 flush 会导致数据文件很小，降低查询性能。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> FLUSH 
IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> CLUSTER
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache"><span>CLEAR CACHE</span></a></h2><p>手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。在集群模式下，我们提供了清空本节点缓存、清空整个集群缓存命令。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> CLEAR CACHE
IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-running" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-running"><span>SET SYSTEM TO READONLY / RUNNING</span></a></h2><p>手动设置系统为正常运行、只读状态。在集群模式下，我们提供了设置本节点状态、设置整个集群状态的命令，默认对整个集群生效。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> RUNNING
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终止查询" tabindex="-1"><a class="header-anchor" href="#终止查询"><span>终止查询</span></a></h2><p>IoTDB 支持设置 Session 连接超时和查询超时时间，并支持手动终止正在执行的查询。</p><h3 id="session-超时" tabindex="-1"><a class="header-anchor" href="#session-超时"><span>Session 超时</span></a></h3><p>Session 超时控制何时关闭空闲 Session。空闲 Session 指在一段时间内没有发起任何操作的 Session。</p><p>Session 超时默认未开启。可以在配置文件中通过 <code>dn_session_timeout_threshold</code> 参数进行配置。</p><h3 id="查询超时" tabindex="-1"><a class="header-anchor" href="#查询超时"><span>查询超时</span></a></h3><p>对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">;</span>
Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统默认的超时时间为 60000 ms，可以在配置文件中通过 <code>query_timeout_threshold</code> 参数进行自定义配置。</p><p>如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果不配置超时时间参数或将超时时间设置为负数，将使用服务器端默认的超时时间。<br> 如果超时时间设置为0，则会禁用超时功能。</p></blockquote><h3 id="查询终止" tabindex="-1"><a class="header-anchor" href="#查询终止"><span>查询终止</span></a></h3><p>除了被动地等待查询超时外，IoTDB 还支持主动地终止查询：</p><h4 id="终止指定查询" tabindex="-1"><a class="header-anchor" href="#终止指定查询"><span>终止指定查询</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">KILL</span> QUERY <span class="token operator">&lt;</span>queryId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过指定 <code>queryId</code> 可以中止指定的查询，<code>queryId</code>是一个字符串，所以使用时需要添加引号。</p><p>为了获取正在执行的查询 id，用户可以使用 <a href="#show-queries">show queries</a> 命令，该命令将显示所有正在执行的查询列表。</p><h5 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h5><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">kill</span> query <span class="token string">&#39;20221205_114444_00003_5&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="终止所有查询" tabindex="-1"><a class="header-anchor" href="#终止所有查询"><span>终止所有查询</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">KILL</span> <span class="token keyword">ALL</span> QUERIES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>终止所有DataNode上的所有查询。</p><h2 id="show-queries" tabindex="-1"><a class="header-anchor" href="#show-queries"><span>SHOW QUERIES</span></a></h2><p>该命令用于显示所有正在执行的查询，有以下使用场景：</p><ul><li>想要中止某个查询时，需要获取查询对应的queryId</li><li>中止某个查询后验证查询是否已被中止</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>SHOW QUERIES | (QUERY PROCESSLIST)
[WHERE whereCondition]
[ORDER BY sortKey {ASC | DESC}]
[LIMIT rowLimit] [OFFSET rowOffset]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>兼容旧语法<code>show query processlist</code></li><li>使用WHERE时请保证过滤的目标列是结果集中存在的列</li><li>使用ORDER BY时请保证sortKey是结果集中存在的列</li></ul><h3 id="结果集" tabindex="-1"><a class="header-anchor" href="#结果集"><span>结果集</span></a></h3><p>Time：查询开始时间，数据类型为<code>INT64</code><br> QueryId：集群级别唯一的查询标识，数据类型为<code>TEXT</code>，格式为<code>yyyyMMdd_HHmmss_index_dataNodeId</code><br> DataNodeId：执行该查询的节点，数据类型为<code>INT32</code><br> ElapsedTime：查询已执行时间（不完全精确），以<code>秒</code>为单位，数据类型为<code>FLOAT</code><br> Statement：查询的原始语句，数据类型为<code>TEXT</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------+----------+-----------+------------+
|                         Time|                QueryId|DataNodeId|ElapsedTime|   Statement|
+-----------------------------+-----------------------+----------+-----------+------------+
|2022-12-30T13:26:47.260+08:00|20221230_052647_00005_1|         1|      0.019|show queries|
+-----------------------------+-----------------------+----------+-----------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>结果集默认按照Time列升序排列，如需按其他key进行排序，请使用ORDER BY子句</li></ul><h3 id="sql示例" tabindex="-1"><a class="header-anchor" href="#sql示例"><span>SQL示例</span></a></h3><h4 id="示例1-获取当前所有执行时间大于30s的查询" tabindex="-1"><a class="header-anchor" href="#示例1-获取当前所有执行时间大于30s的查询"><span>示例1：获取当前所有执行时间大于30s的查询</span></a></h4><p>SQL 语句为：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>SHOW QUERIES WHERE ElapsedTime &gt; 30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|                         Time|                QueryId|DataNodeId|ElapsedTime|                    Statement|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:44.515+08:00|20221205_114444_00002_2|         2|     31.111|     select * from root.test1|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:45.515+08:00|20221205_114445_00003_2|         2|     30.111|     select * from root.test2|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:43.515+08:00|20221205_114443_00001_3|         3|     32.111|        select * from root.**|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例2-获取当前执行耗时top5的查询" tabindex="-1"><a class="header-anchor" href="#示例2-获取当前执行耗时top5的查询"><span>示例2：获取当前执行耗时Top5的查询</span></a></h4><p>SQL 语句为：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>SHOW QUERIES limit 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等价于</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>SHOW QUERIES ORDER BY ElapsedTime DESC limit 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|                         Time|                QueryId|DataNodeId|ElapsedTime|                    Statement|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:44.515+08:00|20221205_114444_00003_5|         5|     31.111|     select * from root.test1|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:45.515+08:00|20221205_114445_00003_2|         2|     30.111|     select * from root.test2|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:46.515+08:00|20221205_114446_00003_3|         3|     29.111|     select * from root.test3|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:47.515+08:00|20221205_114447_00003_2|         2|     28.111|     select * from root.test4|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
|2022-12-05T11:44:48.515+08:00|20221205_114448_00003_4|         4|     27.111|     select * from root.test5|
+-----------------------------+-----------------------+----------+-----------+-----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59),i=[l];function d(o,r){return a(),s("div",null,i)}const p=e(t,[["render",d],["__file","Maintenance-Command.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.html","title":"运维命令","lang":"zh-CN","frontmatter":{"description":"运维命令 FLUSH 将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。 注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"运维命令"}],["meta",{"property":"og:description","content":"运维命令 FLUSH 将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。 注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运维命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"FLUSH","slug":"flush","link":"#flush","children":[]},{"level":2,"title":"CLEAR CACHE","slug":"clear-cache","link":"#clear-cache","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / RUNNING","slug":"set-system-to-readonly-running","link":"#set-system-to-readonly-running","children":[]},{"level":2,"title":"终止查询","slug":"终止查询","link":"#终止查询","children":[{"level":3,"title":"Session 超时","slug":"session-超时","link":"#session-超时","children":[]},{"level":3,"title":"查询超时","slug":"查询超时","link":"#查询超时","children":[]},{"level":3,"title":"查询终止","slug":"查询终止","link":"#查询终止","children":[]}]},{"level":2,"title":"SHOW QUERIES","slug":"show-queries","link":"#show-queries","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"结果集","slug":"结果集","link":"#结果集","children":[]},{"level":3,"title":"SQL示例","slug":"sql示例","link":"#sql示例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.41,"words":1322},"filePathRelative":"zh/UserGuide/V1.1.x/Maintenance-Tools/Maintenance-Command.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,u as data};
