import{_ as e,o as a,c as n,e as s}from"./app-DrPcRZG6.js";const t={},o=s(`<h1 id="maintenance-command" tabindex="-1"><a class="header-anchor" href="#maintenance-command"><span>Maintenance Command</span></a></h1><h2 id="flush" tabindex="-1"><a class="header-anchor" href="#flush"><span>FLUSH</span></a></h2><p>Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist the specified database cache of local node and persist the specified database cache of the cluster.</p><p>Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security<br> and IoTDB will flush when appropriate.<br> Frequently call flush can result in small data files that degrade query performance.</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> FLUSH 
IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> FLUSH <span class="token keyword">ON</span> CLUSTER
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2 <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache"><span>CLEAR CACHE</span></a></h2><p>Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint. In cluster mode, we provide commands to clear local node cache and clear the cluster cache.</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> CLEAR CACHE
IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> CLEAR CACHE <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-running" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-running"><span>SET SYSTEM TO READONLY / RUNNING</span></a></h2><p>Manually set IoTDB system to running, read-only mode. In cluster mode, we provide commands to set the local node status and set the cluster status, valid for the entire cluster by default.</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> RUNNING
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span>
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY <span class="token keyword">ON</span> CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kill-query" tabindex="-1"><a class="header-anchor" href="#kill-query"><span>Kill Query</span></a></h2><p>IoTDB supports setting session connection timeouts and query timeouts, and also allows to stop the executing query manually.</p><h3 id="session-timeout" tabindex="-1"><a class="header-anchor" href="#session-timeout"><span>Session timeout</span></a></h3><p>Session timeout controls when idle sessions are closed. An idle session is one that had not initiated any query or non-query operations for a period of time.</p><p>Session timeout is disabled by default and can be set using the <code>dn_session_timeout_threshold</code> parameter in IoTDB configuration file.</p><h3 id="query-timeout" tabindex="-1"><a class="header-anchor" href="#query-timeout"><span>Query timeout</span></a></h3><p>For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">;</span>
Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The default timeout of a query is 60000 ms，which can be customized in the configuration file through the <code>query_timeout_threshold</code> parameter.</p><p>If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>If the timeout parameter is not configured or with a negative number, the default timeout time will be used.<br> If value 0 is used, timeout function will be disabled.</p></blockquote><h3 id="query-abort" tabindex="-1"><a class="header-anchor" href="#query-abort"><span>Query abort</span></a></h3><p>Not supported yet</p>`,25),l=[o];function i(r,c){return a(),n("div",null,l)}const d=e(t,[["render",i],["__file","Maintenance-Command.html.vue"]]),u=JSON.parse('{"path":"/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html","title":"Maintenance Command","lang":"en-US","frontmatter":{"description":"Maintenance Command FLUSH Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Maintenance Command"}],["meta",{"property":"og:description","content":"Maintenance Command FLUSH Persist all the data points in the memory table of the database to the disk, and seal the data file. In cluster mode, we provide commands to persist th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maintenance Command\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"FLUSH","slug":"flush","link":"#flush","children":[]},{"level":2,"title":"CLEAR CACHE","slug":"clear-cache","link":"#clear-cache","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / RUNNING","slug":"set-system-to-readonly-running","link":"#set-system-to-readonly-running","children":[]},{"level":2,"title":"Kill Query","slug":"kill-query","link":"#kill-query","children":[{"level":3,"title":"Session timeout","slug":"session-timeout","link":"#session-timeout","children":[]},{"level":3,"title":"Query timeout","slug":"query-timeout","link":"#query-timeout","children":[]},{"level":3,"title":"Query abort","slug":"query-abort","link":"#query-abort","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"UserGuide/V1.0.x/Maintenance-Tools/Maintenance-Command.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,u as data};
