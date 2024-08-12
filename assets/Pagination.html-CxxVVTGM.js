import{_ as s,o as n,c as a,e}from"./app-XaimuxhO.js";const t={},l=e(`<h2 id="查询结果分页" tabindex="-1"><a class="header-anchor" href="#查询结果分页"><span>查询结果分页</span></a></h2><p>当查询结果集数据量很大，放在一个页面不利于显示，可以使用 <code>LIMIT/SLIMIT</code> 子句和 <code>OFFSET/SOFFSET </code>子句进行分页控制。</p><ul><li><code>LIMIT</code> 和 <code>SLIMIT</code> 子句用于控制查询结果的行数和列数。</li><li><code>OFFSET</code> 和 <code>SOFFSET</code> 子句用于控制结果显示的起始位置。</li></ul><h3 id="按行分页" tabindex="-1"><a class="header-anchor" href="#按行分页"><span>按行分页</span></a></h3><p>通过使用 <code>LIMIT</code> 和 <code>OFFSET</code> 子句，用户可以以与行相关的方式控制查询结果。 我们将通过以下示例演示如何使用 <code>LIMIT</code> 和 <code>OFFSET</code> 子句。</p><ul><li><strong>示例 1：</strong> 基本的 <code>LIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">limit</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的前 10 行。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:00:00.000+08:00|                    true|                        25.96|
|2017-11-01T00:01:00.000+08:00|                    true|                        24.36|
|2017-11-01T00:02:00.000+08:00|                   false|                        20.09|
|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|
|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|
|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
+-----------------------------+------------------------+-----------------------------+
Total line number = 10
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 2：</strong> 带 <code>OFFSET</code> 的 <code>LIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的第 3 至 7 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|
|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|
|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
+-----------------------------+------------------------+-----------------------------+
Total line number = 5
It costs 0.342s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 3：</strong> <code>LIMIT</code> 子句与 <code>WHERE</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回时间“ 2017-11-01T00：05：00.000”和“ 2017-11-01T00：12：00.000”之间的状态和温度传感器值的第 3 至 4 行（第一行） 编号为第 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|
|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|
|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
+-----------------------------+------------------------+-----------------------------+
Total line number = 5
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 4：</strong> <code>LIMIT</code> 子句与 <code>GROUP BY</code> 子句组合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">)</span><span class="token punctuation">,</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">,</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">07</span>T23:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>d<span class="token punctuation">)</span> <span class="token keyword">limit</span> <span class="token number">4</span> <span class="token keyword">offset</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>SQL 语句子句要求返回查询结果的第 3 至 6 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+----------------------------------------+
|                         Time|count(root.ln.wf01.wt01.status)|max_value(root.ln.wf01.wt01.temperature)|
+-----------------------------+-------------------------------+----------------------------------------+
|2017-11-04T00:00:00.000+08:00|                           1440|                                    26.0|
|2017-11-05T00:00:00.000+08:00|                           1440|                                    26.0|
|2017-11-06T00:00:00.000+08:00|                           1440|                                   25.99|
|2017-11-07T00:00:00.000+08:00|                           1380|                                    26.0|
+-----------------------------+-------------------------------+----------------------------------------+
Total line number = 4
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是，由于当前的 FILL 子句只能在某个时间点填充时间序列的缺失值，也就是说，FILL 子句的执行结果恰好是一行，因此 LIMIT 和 OFFSE 不能与 FILL 子句结合使用，否则将提示错误。 例如，执行以下 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">50.000</span> fill<span class="token punctuation">(</span>previous<span class="token punctuation">,</span> <span class="token number">1</span>m<span class="token punctuation">)</span> <span class="token keyword">limit</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>错误提示如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Msg: 401: Error occured while parsing SQL to physical plan: line 1:101 mismatched input &#39;limit&#39; expecting {&lt;EOF&gt;, &#39;;&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="按列分页" tabindex="-1"><a class="header-anchor" href="#按列分页"><span>按列分页</span></a></h3><p>通过使用 <code>SLIMIT</code> 和 <code>SOFFSET</code> 子句，用户可以与列相关的方式控制查询结果。 我们将通过以下示例演示如何使用 <code>SLIMIT</code> 和 <code>SOFFSET</code> 子句。</p><ul><li><strong>示例 1：</strong> 基本的 <code>SLIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> slimit <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第二列，即温度。 SQL 语句要求在&quot;2017-11-01T00:05:00.000&quot;和&quot;2017-11-01T00:12:00.000&quot;的时间点之间选择温度传感器值。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.temperature|
+-----------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                        20.71|
|2017-11-01T00:07:00.000+08:00|                        21.45|
|2017-11-01T00:08:00.000+08:00|                        22.58|
|2017-11-01T00:09:00.000+08:00|                        20.98|
|2017-11-01T00:10:00.000+08:00|                        25.52|
|2017-11-01T00:11:00.000+08:00|                        22.91|
+-----------------------------+-----------------------------+
Total line number = 6
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 2：</strong> 带 <code>SOFFSET</code> 的 <code>SLIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> slimit <span class="token number">1</span> soffset <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第一列，即电源状态。 SQL 语句要求在&quot; 2017-11-01T00:05:00.000&quot;和&quot;2017-11-01T00:12:00.000&quot;的时间点之间选择状态传感器值。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+
|                         Time|root.ln.wf01.wt01.status|
+-----------------------------+------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|
|2017-11-01T00:07:00.000+08:00|                   false|
|2017-11-01T00:08:00.000+08:00|                   false|
|2017-11-01T00:09:00.000+08:00|                   false|
|2017-11-01T00:10:00.000+08:00|                    true|
|2017-11-01T00:11:00.000+08:00|                   false|
+-----------------------------+------------------------+
Total line number = 6
It costs 0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 3：</strong> <code>SLIMIT</code> 子句与 <code>GROUP BY</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> max_value<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">,</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">07</span>T23:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>d<span class="token punctuation">)</span> slimit <span class="token number">1</span> soffset <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------+
|                         Time|max_value(root.ln.wf01.wt01.status)|
+-----------------------------+-----------------------------------+
|2017-11-01T00:00:00.000+08:00|                               true|
|2017-11-02T00:00:00.000+08:00|                               true|
|2017-11-03T00:00:00.000+08:00|                               true|
|2017-11-04T00:00:00.000+08:00|                               true|
|2017-11-05T00:00:00.000+08:00|                               true|
|2017-11-06T00:00:00.000+08:00|                               true|
|2017-11-07T00:00:00.000+08:00|                               true|
+-----------------------------+-----------------------------------+
Total line number = 7
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 4：</strong> <code>SLIMIT</code> 子句与 <code>FILL</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">50.000</span> fill<span class="token punctuation">(</span>previous<span class="token punctuation">,</span> <span class="token number">1</span>m<span class="token punctuation">)</span> slimit <span class="token number">1</span> soffset <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.status|
+-----------------------------+--------------------------+
|2017-11-01T16:35:00.000+08:00|                      true|
+-----------------------------+--------------------------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行和列混合分页" tabindex="-1"><a class="header-anchor" href="#行和列混合分页"><span>行和列混合分页</span></a></h3><p>除了对查询结果进行行或列控制之外，IoTDB 还允许用户控制查询结果的行和列。 这是同时包含 <code>LIMIT</code> 子句和 <code>SLIMIT</code> 子句的完整示例。</p><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">limit</span> <span class="token number">10</span> <span class="token keyword">offset</span> <span class="token number">100</span> slimit <span class="token number">2</span> soffset <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是此设备下的第 0 列至第 1 列（第一列编号为第 0 列）。 SQL 语句子句要求返回查询结果的第 100 至 109 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+-----------------------------+------------------------+
|2017-11-01T01:40:00.000+08:00|                        21.19|                   false|
|2017-11-01T01:41:00.000+08:00|                        22.79|                   false|
|2017-11-01T01:42:00.000+08:00|                        22.98|                   false|
|2017-11-01T01:43:00.000+08:00|                        21.52|                   false|
|2017-11-01T01:44:00.000+08:00|                        23.45|                    true|
|2017-11-01T01:45:00.000+08:00|                        24.06|                    true|
|2017-11-01T01:46:00.000+08:00|                         22.6|                   false|
|2017-11-01T01:47:00.000+08:00|                        23.78|                    true|
|2017-11-01T01:48:00.000+08:00|                        24.72|                    true|
|2017-11-01T01:49:00.000+08:00|                        24.68|                    true|
+-----------------------------+-----------------------------+------------------------+
Total line number = 10
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h3><p>当 <code>LIMIT / SLIMIT</code> 的参数 <code>N / SN</code> 超过结果集的大小时，IoTDB 将按预期返回所有结果。 例如，原始 SQL 语句的查询结果由六行组成，我们通过 <code>LIMIT</code> 子句选择前 100 行：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> <span class="token keyword">limit</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
+-----------------------------+------------------------+-----------------------------+
Total line number = 6
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>LIMIT / SLIMIT</code> 子句的参数 <code>N / SN</code> 超过允许的最大值（<code>N / SN</code> 的类型为 <code>INT32</code>）时，系统将提示错误。 例如，执行以下 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> <span class="token keyword">limit</span> <span class="token number">1234567890123456789</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SQL 语句将不会执行，并且相应的错误提示如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Msg: 303: check metadata error: Out of range. LIMIT &lt;N&gt;: N should be Int32.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>LIMIT / LIMIT</code> 子句的参数 <code>N / SN</code> 不是正整数时，系统将提示错误。 例如，执行以下 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> <span class="token keyword">limit</span> <span class="token number">13.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SQL 语句将不会执行，并且相应的错误提示如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Msg: 401: line 1:129 mismatched input &#39;.&#39; expecting {&lt;EOF&gt;, &#39;;&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>LIMIT</code> 子句的参数 <code>OFFSET</code> 超过结果集的大小时，IoTDB 将返回空结果集。 例如，执行以下 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> <span class="token keyword">limit</span> <span class="token number">2</span> <span class="token keyword">offset</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+----+------------------------+-----------------------------+
|Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+----+------------------------+-----------------------------+
Empty set.
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,88),p=[l];function o(i,c){return n(),a("div",null,p)}const d=s(t,[["render",o],["__file","Pagination.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Pagination.html","title":"","lang":"zh-CN","frontmatter":{"description":"查询结果分页 当查询结果集数据量很大，放在一个页面不利于显示，可以使用 LIMIT/SLIMIT 子句和 OFFSET/SOFFSET 子句进行分页控制。 LIMIT 和 SLIMIT 子句用于控制查询结果的行数和列数。 OFFSET 和 SOFFSET 子句用于控制结果显示的起始位置。 按行分页 通过使用 LIMIT 和 OFFSET 子句，用户可以...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Pagination.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Pagination.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"查询结果分页 当查询结果集数据量很大，放在一个页面不利于显示，可以使用 LIMIT/SLIMIT 子句和 OFFSET/SOFFSET 子句进行分页控制。 LIMIT 和 SLIMIT 子句用于控制查询结果的行数和列数。 OFFSET 和 SOFFSET 子句用于控制结果显示的起始位置。 按行分页 通过使用 LIMIT 和 OFFSET 子句，用户可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"查询结果分页","slug":"查询结果分页","link":"#查询结果分页","children":[{"level":3,"title":"按行分页","slug":"按行分页","link":"#按行分页","children":[]},{"level":3,"title":"按列分页","slug":"按列分页","link":"#按列分页","children":[]},{"level":3,"title":"行和列混合分页","slug":"行和列混合分页","link":"#行和列混合分页","children":[]},{"level":3,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":7.21,"words":2162},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Pagination.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,u as data};
