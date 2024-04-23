import{_ as s,o as n,c as a,e as t}from"./app-DrPcRZG6.js";const e={},o=t(`<h2 id="结果集空值过滤" tabindex="-1"><a class="header-anchor" href="#结果集空值过滤"><span>结果集空值过滤</span></a></h2><p>在实际应用中，用户可能希望对查询的结果集中某些存在空值的行进行过滤。在 IoTDB 中，可以使用 <code>WITHOUT NULL</code> 子句对结果集中的空值进行过滤，有两种过滤策略：<code>WITHOUT NULL ANY</code>和<code>WITHOUT NULL ALL</code>。不仅如此， <code>WITHOUT NULL</code> 子句支持指定相应列进行过滤。</p><blockquote><p>WITHOUT NULL ANY: 指定的列集中，存在一列为NULL,则满足条件进行过滤</p><p>WITHOUT NULL ALL: 指定的列集中，所有列都为NULL,才满足条件进行过滤</p></blockquote><h3 id="不指定列" tabindex="-1"><a class="header-anchor" href="#不指定列"><span>不指定列</span></a></h3><blockquote><p>默认就是对结果集中的所有列生效，即指定的列集为结果集中的所有列</p></blockquote><ol><li>在下列查询中，如果结果集中某一行任意一列为 null，则过滤掉该行；即获得的结果集不包含任何空值。</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ANY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在下列查询中，如果结果集的某一行所有列都为 null，则过滤掉该行；即获得的结果集不包含所有值都为 null 的行。</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ALL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定列" tabindex="-1"><a class="header-anchor" href="#指定列"><span>指定列</span></a></h3><blockquote><p>只对指定的列集生效</p></blockquote><p>使用 <code>WITHOUT NULL</code>子句对结果集中指定列名的空值进行过滤，下面是一些例子及其说明:</p><blockquote><p>注意，如果指定的列在当前元数据里不存在则会直接过滤掉，这与目前查询列的输出结果是一致的;<br> 如果指定的列存在，但与结果集中输出的列名不匹配，则会报错: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></p></blockquote><p>比如下面的例子</p><ol><li>比如<code>without null</code>指定的列集中<code>root.test.sg1.s1</code>列在元数据中存在，<code>root.test.sg1.usag</code>列在元数据不存在，则下面查询的without null子句的作用相当于without null all(s1)</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> usag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>比如<code>without null</code>指定的列集中<code>root.test.sg1.s2</code>列在元数据中存在，但查询的结果集中输出列不包括，所以会报错:<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">-</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">*</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">/</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">%</span> s2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>s1<span class="token operator">+</span>s2<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="原始数据查询" tabindex="-1"><a class="header-anchor" href="#原始数据查询"><span>原始数据查询</span></a></h4><ol><li>如果查询的结果集中, root.ln.sg1.s1这一列如果为null,则过滤掉该行</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>sg1 WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ANY</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>如果查询的结果集中, root.ln.sg1.s1和root.ln.sg1.s2中只要存在至少一列为null,则过滤掉该行</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>sg1 WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ANY</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>如果查询的结果集中, 只要root.ln.sg1.s1和root.ln.sg1.s2这两列都为null,则过滤掉该行</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>sg1 WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ALL</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="带表达式查询" tabindex="-1"><a class="header-anchor" href="#带表达式查询"><span>带表达式查询</span></a></h4><p>指定的列可以为表达式</p><ol><li>计算s2+s4和s2这两列是否都为null,如果是则过滤</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> <span class="token operator">-</span> s2<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">-</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">*</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">/</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">%</span> s4 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>s2<span class="token operator">+</span>s4<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>计算s2+s4和s2这两列是否至少有一列为null,如果是则过滤</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> <span class="token operator">-</span> s2<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">-</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">*</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">/</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">%</span> s4 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">any</span> <span class="token punctuation">(</span>s2<span class="token operator">+</span>s4<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h4><p>指定的列可以为别名</p><ol><li>计算t2和t1这两列是否都为null,如果是则过滤</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2 <span class="token keyword">as</span> t1<span class="token punctuation">,</span> <span class="token operator">-</span> s2<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">+</span> s4 <span class="token keyword">as</span> t2<span class="token punctuation">,</span> s2 <span class="token operator">-</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">*</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">/</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">%</span> s4 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>t2<span class="token punctuation">,</span> t1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">as</span> t1<span class="token punctuation">,</span> cos<span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2 <span class="token operator">+</span> s4<span class="token punctuation">)</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span> <span class="token keyword">as</span> t2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>当你指定了别名，如果在without null指定的列集中再使用原始列名，则会报错：<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> 比如下面同时使用了tan(s1)和t</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> d<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> tan<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">as</span> t<span class="token punctuation">,</span> s2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span>  tan<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span> <span class="token keyword">limit</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="带函数查询" tabindex="-1"><a class="header-anchor" href="#带函数查询"><span>带函数查询</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2 <span class="token operator">+</span> s4<span class="token punctuation">)</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2 <span class="token operator">+</span> s4<span class="token punctuation">)</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="按设备对齐查询" tabindex="-1"><a class="header-anchor" href="#按设备对齐查询"><span>按设备对齐查询</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_value<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span>last_value<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> last_value<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果示例如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select last_value(*) from root.sg1.* group by([1,10), 2ms) without null all(last_value(s2), last_value(s3)) align by device
+-----------------------------+-----------+--------------+--------------+--------------+
|                         Time|     Device|last_value(s1)|last_value(s2)|last_value(s3)|
+-----------------------------+-----------+--------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|root.sg1.d1|           1.0|           2.0|          null|
|1970-01-01T08:00:00.003+08:00|root.sg1.d1|           3.0|           4.0|          null|
|1970-01-01T08:00:00.001+08:00|root.sg1.d2|           1.0|           1.0|           1.0|
+-----------------------------+-----------+--------------+--------------+--------------+
Total line number = 3
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定的列名是与输出结果的列名对应，目前<code>without null</code>子句不支持指定某设备的某列，会报错:<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> 比如下面这个查询例子,指定last_value(root.sg1.d1.s3)为null的行进行过滤，目前是不支持的。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_value<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span>last_value<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>root.sg1.d1.s3<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="聚合查询" tabindex="-1"><a class="header-anchor" href="#聚合查询"><span>聚合查询</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="指定全路径列名" tabindex="-1"><a class="header-anchor" href="#指定全路径列名"><span>指定全路径列名</span></a></h4><p>假设下面的查询输出的结果列为&quot;root.test.sg1.s2&quot;, &quot;root.test.sg1.s3&quot;, &quot;root.test.sg2.s2&quot;, &quot;root.test.sg2.s3&quot;四个，可以使用全路径名指定相应列进行过滤，比如下面的例子：</p><ol><li>指定<code>root.test.sg1.s2</code>, <code>root.test.sg2.s3</code>两列都为null则过滤</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> s3 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>root.test.sg1.s2<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>root.test.sg2.s3<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>指定<code>root.test.sg1.s2</code>, <code>root.test.sg1.s3</code>, <code>root.test.sg2.s3</code>三列都为null则过滤</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> s3 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>root.test.sg1.s2<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="对齐序列查询" tabindex="-1"><a class="header-anchor" href="#对齐序列查询"><span>对齐序列查询</span></a></h4><ol><li>可以指定<code>without null</code> 子句后的列名为对齐序列列名</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> ALIGNED TIMESERIES root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg3<span class="token punctuation">(</span>s5 INT32<span class="token punctuation">,</span> s6 <span class="token keyword">BOOLEAN</span><span class="token punctuation">,</span> s7 <span class="token keyword">DOUBLE</span><span class="token punctuation">,</span> s8 INT32<span class="token punctuation">)</span>
<span class="token keyword">select</span> sg1<span class="token punctuation">.</span>s1<span class="token punctuation">,</span> sg1<span class="token punctuation">.</span>s2<span class="token punctuation">,</span> sg2<span class="token punctuation">.</span>s3<span class="token punctuation">,</span> sg3<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>sg3<span class="token punctuation">.</span>s5<span class="token punctuation">,</span> sg3<span class="token punctuation">.</span>s6<span class="token punctuation">,</span> sg2<span class="token punctuation">.</span>s3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,58),p=[o];function l(c,u){return n(),a("div",null,p)}const r=s(e,[["render",l],["__file","Without-Null.html.vue"]]),k=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Without-Null.html","title":"","lang":"zh-CN","frontmatter":{"description":"结果集空值过滤 在实际应用中，用户可能希望对查询的结果集中某些存在空值的行进行过滤。在 IoTDB 中，可以使用 WITHOUT NULL 子句对结果集中的空值进行过滤，有两种过滤策略：WITHOUT NULL ANY和WITHOUT NULL ALL。不仅如此， WITHOUT NULL 子句支持指定相应列进行过滤。 WITHOUT NULL ANY...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Without-Null.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Without-Null.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"结果集空值过滤 在实际应用中，用户可能希望对查询的结果集中某些存在空值的行进行过滤。在 IoTDB 中，可以使用 WITHOUT NULL 子句对结果集中的空值进行过滤，有两种过滤策略：WITHOUT NULL ANY和WITHOUT NULL ALL。不仅如此， WITHOUT NULL 子句支持指定相应列进行过滤。 WITHOUT NULL ANY..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"结果集空值过滤","slug":"结果集空值过滤","link":"#结果集空值过滤","children":[{"level":3,"title":"不指定列","slug":"不指定列","link":"#不指定列","children":[]},{"level":3,"title":"指定列","slug":"指定列","link":"#指定列","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.98,"words":1493},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Without-Null.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,k as data};
