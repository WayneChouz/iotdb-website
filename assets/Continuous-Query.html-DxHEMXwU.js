import{_ as t,c as o,b as a,d as s,e,a as i,w as r,r as p,o as c}from"./app-Cy-L1ril.js";const d={};function u(v,n){const l=p("RouteLink");return c(),o("div",null,[n[11]||(n[11]=a(`<h2 id="连续查询-continuous-query-cq" tabindex="-1"><a class="header-anchor" href="#连续查询-continuous-query-cq"><span>连续查询（Continuous Query, CQ）</span></a></h2><p>我们可以通过 SQL 语句注册、或卸载一个 CQ 实例，以及查询到所有已经注册的 CQ 配置信息。</p><p>注意，目前连续查询尚未对分布式场景进行适配。敬请期待分布式版本。</p><h3 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句"><span>SQL 语句</span></a></h3><h4 id="创建-cq" tabindex="-1"><a class="header-anchor" href="#创建-cq"><span>创建 CQ</span></a></h4><h5 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h5><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token punctuation">(</span>CONTINUOUS QUERY <span class="token operator">|</span> CQ<span class="token punctuation">)</span> <span class="token operator">&lt;</span>cq_id<span class="token operator">&gt;</span> </span>
<span class="line"><span class="token punctuation">[</span>RESAMPLE EVERY <span class="token operator">&lt;</span>every_interval<span class="token operator">&gt;</span> <span class="token keyword">FOR</span> <span class="token operator">&lt;</span>for_interval<span class="token operator">&gt;</span> BOUNDARY <span class="token operator">&lt;</span>execution_boundary_time<span class="token operator">&gt;</span><span class="token punctuation">]</span> </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">&lt;</span><span class="token keyword">function</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>path_suffix<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token operator">&lt;</span>full_path<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>node_name<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">FROM</span> <span class="token operator">&lt;</span>path_prefix<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>group_by_interval<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword">level</span> <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">level</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>`,8)),s("ul",null,[n[10]||(n[10]=a("<li><p><code>&lt;cq_id&gt;</code> 指定 CQ 全局唯一的 id。</p></li><li><p><code>&lt;every_interval&gt;</code> 指定查询执行时间间隔，支持 ns、us、ms、s、m、h、d、w 等单位，其值不应小于用户所配置的 <code>continuous_query_min_every_interval</code> 值。可选择指定。</p></li><li><p><code>&lt;for_interval&gt;</code> 指定每次查询的窗口大小，即查询时间范围为<code>[now() - &lt;for_interval&gt;, now())</code>，其中 <code>now()</code> 指查询时的时间戳。支持 ns、us、ms、s、m、h、d、w 等单位。可选择指定。</p></li><li><p><code>&lt;execution_boundary_time&gt;</code> 是一个日期参数，表示<strong>第一个窗口的起始时间</strong>。</p><ul><li><code>&lt;execution_boundary_time&gt;</code> 可早于、等于、晚于<strong>当前时间</strong>。</li><li>该参数可选择指定，不指定的情况下等价于输入 <code>BOUNDARY now()</code>。</li><li><strong>第一个窗口的结束时间</strong>为 <code>&lt;execution_boundary_time&gt; + &lt;for_interval&gt;</code>。</li><li>第 <code> i (1 &lt;= i)</code> 个窗口的<strong>开始时间</strong> <code>&lt;execution_boundary_time&gt; + &lt;for_interval&gt; + （i - 1） * &lt;every_interval&gt;</code>。</li><li>第 <code> i (1 &lt;= i)</code> 个窗口的<strong>结束时间</strong> <code>&lt;execution_boundary_time&gt; + &lt;for_interval&gt; + i * &lt;every_interval&gt;</code>。</li><li>如果<strong>当前时间</strong>小于等于<strong>第一个窗口的结束时间</strong> ，那么连续查询的第一个执行时刻为<strong>第一个窗口的结束时间</strong>。</li><li>如果<strong>当前时间</strong>大于<strong>第一个窗口的结束时间</strong>，那么连续查询的第一个执行时刻为<strong>第一个</strong>大于等于<strong>当前时间</strong>的<strong>窗口结束时间</strong>。</li><li>每一个执行时刻执行的<strong>查询时间范围</strong>为<code>[now() - &lt;for_interval&gt;, now())</code>。</li></ul></li><li><p><code>&lt;function&gt;</code> 指定聚合函数，目前支持 <code>count</code>, <code>sum</code>, <code>avg</code>, <code>last_value</code>, <code>first_value</code>, <code>min_time</code>, <code>max_time</code>, <code>min_value</code>, <code>max_value</code> 等。</p></li><li><p><code>&lt;path_prefix&gt;</code> 与 <code>&lt;path_suffix&gt;</code> 拼接成完整的查询原时间序列。</p></li><li><p><code>&lt;full_path&gt;</code> 或 <code>&lt;node_name&gt;</code> 指定将查询出的数据写入的结果序列路径。</p></li><li><p><code>&lt;group_by_interval&gt;</code> 指定时间分组长度，支持 ns、us、ms、s、m、h、d、w、mo、y 等单位。</p></li>",8)),s("li",null,[s("p",null,[n[1]||(n[1]=s("code",null,"<level>",-1)),n[2]||(n[2]=e("指按照序列第 ")),n[3]||(n[3]=s("code",null,"<level>",-1)),n[4]||(n[4]=e(" 层分组，将第 ")),n[5]||(n[5]=s("code",null,"<level>",-1)),n[6]||(n[6]=e(" 层同名的所有序列聚合。Group By Level 语句的具体语义及 ")),n[7]||(n[7]=s("code",null,"<level>",-1)),n[8]||(n[8]=e(" 的定义见 ")),i(l,{to:"/zh/UserGuide/V0.13.x/Query-Data/Aggregate-Query.html#%E8%81%9A%E5%90%88%E6%9F%A5%E8%AF%A2"},{default:r(()=>n[0]||(n[0]=[e("路径层级分组聚合")])),_:1}),n[9]||(n[9]=e("。"))])])]),n[12]||(n[12]=a(`<p>注：</p><ul><li><code>&lt;for_interval&gt;</code>, <code>&lt;every_interval&gt;</code> 可选择指定。如果用户没有指定其中的某一项，则未指定项的值按照<code>&lt;group_by_interval&gt;</code> 处理。 <ul><li><code>&lt;every_interval&gt;</code>，<code>&lt;for_interval&gt;</code>，<code>&lt;group_by_interval&gt;</code> 的值均应大于 0。</li><li><code>&lt;group_by_interval&gt;</code> 的值应小于<code>&lt;for_interval&gt;</code>的值，否则系统会按照等于<code>&lt;for_interval&gt;</code>的值处理。</li><li>用户应当结合实际需求指定合适的 <code>&lt;for_interval&gt;</code> 与 <code>&lt;every_interval&gt;</code>。 <ul><li>若 <code>&lt;for_interval&gt;</code> 大于 <code>&lt;every_interval&gt;</code>，每次的查询窗口会有部分数据重叠，从查询性能角度这种配置不被建议。</li><li>若 <code>&lt;for_interval&gt;</code> 小于 <code>&lt;every_interval&gt;</code>，每次的查询窗口之间可能会有未覆盖到的数据。</li></ul></li></ul></li><li>对于结果序列路径 <ul><li>用户可以选择指定<code>&lt;full_path&gt;</code>，即以 <code>root</code> 开头的完整的时间序列路径，用户可以在路径中使用 <code>\${x}</code> 变量来表示原始时间序列中 <code>level = x</code> 的节点名称，<code>x</code>应当大于等于 1 且小于等于 <code>&lt;level&gt;</code> 值<br> （若未指定 <code>level</code>，则应小于等于 <code>&lt;path_prefix&gt;</code> 长度）。</li><li>用户也可以仅指定<code>&lt;node_name&gt;</code>，即生成时间序列路径的最后一个结点名。 <ul><li>若用户指定 <code>&lt;level&gt; = l</code>，则系统生成的结果时间序列路径为 <code>root.\${1}. ... .\${l}.&lt;node_name&gt;</code></li><li>若用户未指定 <code>&lt;level&gt;</code>，令原始时间序列最大层数为 <code>L</code>，<br> 则系统生成的结果时间序列路径为 <code>root.\${1}. ... .\${L - 1}.&lt;node_name&gt;</code>。</li></ul></li></ul></li></ul><h5 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h5><h6 id="原始时间序列" tabindex="-1"><a class="header-anchor" href="#原始时间序列"><span>原始时间序列</span></a></h6><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.ln.wf02.wt02.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf02.wt01.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf01.wt02.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.temperature|root.ln.wf02.wt01.temperature|root.ln.wf01.wt02.temperature|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+</span>
<span class="line">|2021-05-11T22:18:14.598+08:00|                        121.0|                         72.0|                        183.0|                        115.0|</span>
<span class="line">|2021-05-11T22:18:19.941+08:00|                          0.0|                         68.0|                         68.0|                        103.0|</span>
<span class="line">|2021-05-11T22:18:24.949+08:00|                        122.0|                         45.0|                         11.0|                         14.0|</span>
<span class="line">|2021-05-11T22:18:29.967+08:00|                         47.0|                         14.0|                         59.0|                        181.0|</span>
<span class="line">|2021-05-11T22:18:34.979+08:00|                        182.0|                        113.0|                         29.0|                        180.0|</span>
<span class="line">|2021-05-11T22:18:39.990+08:00|                         42.0|                         11.0|                         52.0|                         19.0|</span>
<span class="line">|2021-05-11T22:18:44.995+08:00|                         78.0|                         38.0|                        123.0|                         52.0|</span>
<span class="line">|2021-05-11T22:18:49.999+08:00|                        137.0|                        172.0|                        135.0|                        193.0|</span>
<span class="line">|2021-05-11T22:18:55.003+08:00|                         16.0|                        124.0|                        183.0|                         18.0|</span>
<span class="line">+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="结果序列配置举例说明" tabindex="-1"><a class="header-anchor" href="#结果序列配置举例说明"><span>结果序列配置举例说明</span></a></h6><p>对于以上原始时间序列，若用户指定查询聚合层级为 <code>2</code>，聚合函数为 <code>avg</code>，<br> 用户可以在 <code>INTO</code> 语句中仅指定生成序列的最后一个结点名，若用户将其指定为 <code>temperature_avg</code>，则系统生成的完整路径为 <code>root.\${1}.\${2}.temperature_avg</code>。<br> 用户也可以在 <code>INTO</code> 语句中指定完整写入路径，用户可将其指定为 <code>root.\${1}.\${2}.temperature_avg</code>、<code>root.ln_cq.\${2}.temperature_avg</code>、<code>root.\${1}_cq.\${2}.temperature_avg</code>、<code>root.\${1}.\${2}_cq.temperature_avg</code>等，<br> 也可以按需要指定为 <code>root.\${2}.\${1}.temperature_avg</code> 等其它形式。<br> 需要注意的是，<code>\${x}</code> 中的 <code>x</code> 应当大于等于 <code>1</code> 且小于等于 <code>&lt;level&gt;</code> 值<br> （若未指定 <code>&lt;level&gt;</code>，则应小于等于 <code>&lt;path_prefix&gt;</code> 层级）。在上例中，<code>x</code> 应当小于等于 <code>2</code>。</p><h6 id="创建-cq1" tabindex="-1"><a class="header-anchor" href="#创建-cq1"><span>创建 <code>cq1</code></span></a></h6><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq1 </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line">  <span class="token keyword">SELECT</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">INTO</span> temperature_max </span>
<span class="line">  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每隔 10s 查询 <code>root.ln.*.*.temperature</code> 在前 10s 内的最大值（结果以 10s 为一组），<br> 将结果写入到 <code>root.\${1}.\${2}.\${3}.temperature_max</code> 中，<br> 结果将产生 4 条新序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+---------------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|                       timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+---------------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.ln.wf02.wt02.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf02.wt01.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf01.wt02.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf01.wt01.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">+---------------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------------------+---------------------------------+---------------------------------+---------------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.temperature_max|root.ln.wf02.wt01.temperature_max|root.ln.wf01.wt02.temperature_max|root.ln.wf01.wt01.temperature_max|</span>
<span class="line">+-----------------------------+---------------------------------+---------------------------------+---------------------------------+---------------------------------+</span>
<span class="line">|2021-05-11T22:18:16.964+08:00|                            122.0|                             68.0|                             68.0|                            103.0|</span>
<span class="line">|2021-05-11T22:18:26.964+08:00|                            182.0|                            113.0|                             59.0|                            181.0|</span>
<span class="line">|2021-05-11T22:18:36.964+08:00|                             78.0|                             38.0|                            123.0|                             52.0|</span>
<span class="line">|2021-05-11T22:18:46.964+08:00|                            137.0|                            172.0|                            183.0|                            193.0|</span>
<span class="line">+-----------------------------+---------------------------------+---------------------------------+---------------------------------+---------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="创建-cq2" tabindex="-1"><a class="header-anchor" href="#创建-cq2"><span>创建 <code>cq2</code></span></a></h6><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq2 </span>
<span class="line">RESAMPLE EVERY <span class="token number">20</span>s <span class="token keyword">FOR</span> <span class="token number">20</span>s </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line">  <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">INTO</span> temperature_avg </span>
<span class="line">  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">2</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每隔 20s 查询 <code>root.ln.*.*.temperature</code> 在前 20s 内的平均值（结果以 10s 为一组，按照第 2 层节点分组），<br> 将结果写入到 <code>root.\${1}.\${2}.temperature_avg</code> 中。<br> 结果将产生如下两条新序列，<br> 其中 <code>root.ln.wf02.temperature_avg</code> 由 <code>root.ln.wf02.wt02.temperature</code> 和 <code>root.ln.wf02.wt01.temperature</code> 聚合计算生成，<br><code>root.ln.wf01.temperature_avg</code> 由 <code>root.ln.wf01.wt02.temperature</code> 和 <code>root.ln.wf01.wt01.temperature</code> 聚合计算生成。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|                  timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.ln.wf02.temperature_avg| null|      root.ln|  DOUBLE| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln.wf01.temperature_avg| null|      root.ln|  DOUBLE| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">+----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------+----------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.temperature_avg|root.ln.wf01.temperature_avg|</span>
<span class="line">+-----------------------------+----------------------------+----------------------------+</span>
<span class="line">|2021-05-11T22:18:16.969+08:00|                       58.75|                        49.0|</span>
<span class="line">|2021-05-11T22:18:26.969+08:00|                        89.0|                      112.25|</span>
<span class="line">|2021-05-11T22:18:36.969+08:00|                       42.25|                        61.5|</span>
<span class="line">|2021-05-11T22:18:46.969+08:00|                      112.25|                      132.25|</span>
<span class="line">+-----------------------------+----------------------------+----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="创建-cq3" tabindex="-1"><a class="header-anchor" href="#创建-cq3"><span>创建 <code>cq3</code></span></a></h6><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq3 </span>
<span class="line">RESAMPLE EVERY <span class="token number">20</span>s <span class="token keyword">FOR</span> <span class="token number">20</span>s </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line">  <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln_cq<span class="token punctuation">.</span>\${<span class="token number">2</span>}<span class="token punctuation">.</span>temperature_avg </span>
<span class="line">  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">2</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询模式与 cq2 相同，在这个例子中，用户自行指定结果写入到 <code>root.ln_cq.\${2}.temperature_avg</code> 中。<br> 结果将产生如下两条新序列，<br> 其中 <code>root.ln_cq.wf02.temperature_avg</code> 由 <code>root.ln.wf02.wt02.temperature</code> 和 <code>root.ln.wf02.wt01.temperature</code> 聚合计算生成，<br><code>root.ln_cq.wf01.temperature_avg</code> 由 <code>root.ln.wf01.wt02.temperature</code> 和 <code>root.ln.wf01.wt01.temperature</code> 聚合计算生成。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|                     timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+-------------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.ln_cq.wf02.temperature_avg| null|   root.ln_cq|  DOUBLE| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">|root.ln_cq.wf01.temperature_avg| null|   root.ln_cq|  DOUBLE| GORILLA|     SNAPPY|null|      null|</span>
<span class="line">+-------------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------+-------------------------------+</span>
<span class="line">|                         Time|root.ln_cq.wf02.temperature_avg|root.ln_cq.wf01.temperature_avg|</span>
<span class="line">+-----------------------------+-------------------------------+-------------------------------+</span>
<span class="line">|2021-05-11T22:18:16.971+08:00|                          58.75|                           49.0|</span>
<span class="line">|2021-05-11T22:18:26.971+08:00|                           89.0|                         112.25|</span>
<span class="line">|2021-05-11T22:18:36.971+08:00|                          42.25|                           61.5|</span>
<span class="line">|2021-05-11T22:18:46.971+08:00|                         112.25|                         132.25|</span>
<span class="line">+-----------------------------+-------------------------------+-------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="创建-cq4" tabindex="-1"><a class="header-anchor" href="#创建-cq4"><span>创建 <code>cq4</code></span></a></h6><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq4 </span>
<span class="line">RESAMPLE EVERY <span class="token number">20</span>s <span class="token keyword">FOR</span> <span class="token number">20</span>s BOUNDARY <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">14</span>T23:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span> </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line">  <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln_cq<span class="token punctuation">.</span>\${<span class="token number">2</span>}<span class="token punctuation">.</span>temperature_avg </span>
<span class="line">  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">2</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子与创建 cq3 几乎完全相同。不同的是，在这个例子中用户自行指定了 <code>BOUNDARY 2022-01-14T23:00:00.000+08:00 </code> 。</p><p>注意这个 CQ 的第一个执行时刻大于例子中的时间，因此 <code>2022-01-14T23:00:20.000+08:00</code> 为第一个执行时刻。递推地，<code>2022-01-14T23:00:40.000+08:00</code> 为第二个执行时刻，<code>2022-01-14T23:01:00.000+08:00</code> 为第三个执行时刻……</p><p>第一个执行时刻执行的 SQL 语句为 <code>select avg(temperature) from root.ln.*.* group by ([2022-01-14T23:00:00.000+08:00, 2022-01-14T23:00:20.000+08:00), 10s), level = 2</code>。</p><p>第二个执行时刻执行的 SQL 语句为 <code>select avg(temperature) from root.ln.*.* group by ([2022-01-14T23:00:20.000+08:00, 2022-01-14T23:00:40.000+08:00), 10s), level = 2</code>。</p><p>第三个执行时刻执行的 SQL 语句为 <code>select avg(temperature) from root.ln.*.* group by ([2022-01-14T23:00:40.000+08:00, 2022-01-14T23:01:00.000+08:00), 10s), level = 2</code>。</p><p>……</p><h4 id="展示-cq-信息" tabindex="-1"><a class="header-anchor" href="#展示-cq-信息"><span>展示 CQ 信息</span></a></h4><h5 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h5><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token punctuation">(</span>CONTINUOUS QUERIES <span class="token operator">|</span> CQS<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="结果示例" tabindex="-1"><a class="header-anchor" href="#结果示例"><span>结果示例</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------+--------------+------------+-------------+----------------------------------------------------------------------------------------+-----------------------------------+</span>
<span class="line">|cq name|every interval|for interval|     boundary|                                                                               query sql|                        target path|</span>
<span class="line">+-------+--------------+------------+-------------+----------------------------------------------------------------------------------------+-----------------------------------+</span>
<span class="line">|    cq1|         10000|       10000|1642166102238|     select max_value(temperature) from root.ln.*.* group by ([now() - 10s, now()), 10s)|root.\${1}.\${2}.\${3}.temperature_max|</span>
<span class="line">|    cq3|         20000|       20000|1642166118339|select avg(temperature) from root.ln.*.* group by ([now() - 20s, now()), 10s), level = 2|    root.ln_cq.\${2}.temperature_avg|</span>
<span class="line">|    cq2|         20000|       20000|1642166111493|select avg(temperature) from root.ln.*.* group by ([now() - 20s, now()), 10s), level = 2|     root.\${1}.\${2}.temperature_avg|</span>
<span class="line">|    cq4|         20000|       20000|1642172400000|select avg(temperature) from root.ln.*.* group by ([now() - 20s, now()), 10s), level = 2|    root.ln_cq.\${2}.temperature_avg|</span>
<span class="line">+-------+--------------+------------+-------------+----------------------------------------------------------------------------------------+-----------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除-cq" tabindex="-1"><a class="header-anchor" href="#删除-cq"><span>删除 CQ</span></a></h4><h5 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h5><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token punctuation">(</span>CONTINUOUS QUERY <span class="token operator">|</span> CQ<span class="token punctuation">)</span> <span class="token operator">&lt;</span>cq_id<span class="token operator">&gt;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h5><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> CONTINUOUS QUERY cq3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> CQ cq3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="系统参数配置" tabindex="-1"><a class="header-anchor" href="#系统参数配置"><span>系统参数配置</span></a></h3><table><thead><tr><th style="text-align:left;">参数名</th><th>描述</th><th>数据类型</th><th>默认值</th></tr></thead><tbody><tr><td style="text-align:left;"><code>continuous_query_execution_thread</code></td><td>执行连续查询任务的线程池的线程数</td><td>int</td><td>max(1, CPU 核数 / 2)</td></tr><tr><td style="text-align:left;"><code>max_pending_continuous_query_tasks</code></td><td>队列中连续查询最大任务堆积数</td><td>int</td><td>64</td></tr><tr><td style="text-align:left;"><code>continuous_query_min_every_interval</code></td><td>连续查询执行时间间隔的最小值</td><td>duration</td><td>1s</td></tr></tbody></table>`,44))])}const b=t(d,[["render",u],["__file","Continuous-Query.html.vue"]]),g=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Process-Data/Continuous-Query.html","title":"","lang":"zh-CN","frontmatter":{"description":"连续查询（Continuous Query, CQ） 我们可以通过 SQL 语句注册、或卸载一个 CQ 实例，以及查询到所有已经注册的 CQ 配置信息。 注意，目前连续查询尚未对分布式场景进行适配。敬请期待分布式版本。 SQL 语句 创建 CQ 语法 其中： <cq_id> 指定 CQ 全局唯一的 id。 <every_interval> 指定查询执行...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Process-Data/Continuous-Query.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Process-Data/Continuous-Query.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"连续查询（Continuous Query, CQ） 我们可以通过 SQL 语句注册、或卸载一个 CQ 实例，以及查询到所有已经注册的 CQ 配置信息。 注意，目前连续查询尚未对分布式场景进行适配。敬请期待分布式版本。 SQL 语句 创建 CQ 语法 其中： <cq_id> 指定 CQ 全局唯一的 id。 <every_interval> 指定查询执行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"连续查询（Continuous Query, CQ）","slug":"连续查询-continuous-query-cq","link":"#连续查询-continuous-query-cq","children":[{"level":3,"title":"SQL 语句","slug":"sql-语句","link":"#sql-语句","children":[]},{"level":3,"title":"系统参数配置","slug":"系统参数配置","link":"#系统参数配置","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":7.82,"words":2346},"filePathRelative":"zh/UserGuide/V0.13.x/Process-Data/Continuous-Query.md","localizedDate":"2023年7月10日","autoDesc":true}');export{b as comp,g as data};
