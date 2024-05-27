import{_ as e,o as n,c as a,e as t}from"./app-D_cz5DM4.js";const s={},i=t(`<h2 id="机器学习" tabindex="-1"><a class="header-anchor" href="#机器学习"><span>机器学习</span></a></h2><h3 id="ar" tabindex="-1"><a class="header-anchor" href="#ar"><span>AR</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>本函数用于学习数据的自回归模型系数。</p><p><strong>函数名:</strong> AR</p><p><strong>输入序列:</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数:</strong></p><ul><li><code>p</code>：自回归模型的阶数。默认为1。</li></ul><p><strong>输出序列:</strong> 输出单个序列，类型为 DOUBLE。第一行对应模型的一阶系数，以此类推。</p><p><strong>提示:</strong></p><ul><li><p><code>p</code>应为正整数。</p></li><li><p>序列中的大部分点为等间隔采样点。</p></li><li><p>序列中的缺失点通过线性插值进行填补后用于学习过程。</p></li></ul><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><h5 id="指定阶数" tabindex="-1"><a class="header-anchor" href="#指定阶数"><span>指定阶数</span></a></h5><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d0.s0|
+-----------------------------+---------------+
|2020-01-01T00:00:01.000+08:00|           -4.0|
|2020-01-01T00:00:02.000+08:00|           -3.0|
|2020-01-01T00:00:03.000+08:00|           -2.0|
|2020-01-01T00:00:04.000+08:00|           -1.0|
|2020-01-01T00:00:05.000+08:00|            0.0|
|2020-01-01T00:00:06.000+08:00|            1.0|
|2020-01-01T00:00:07.000+08:00|            2.0|
|2020-01-01T00:00:08.000+08:00|            3.0|
|2020-01-01T00:00:09.000+08:00|            4.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ar<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&quot;p&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------+
|                         Time|ar(root.test.d0.s0,&quot;p&quot;=&quot;2&quot;)|
+-----------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                     0.9429|
|1970-01-01T08:00:00.002+08:00|                    -0.2571|
+-----------------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),r=[i];function l(o,d){return n(),a("div",null,r)}const p=e(s,[["render",l],["__file","Machine-Learning.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.html","title":"","lang":"zh-CN","frontmatter":{"description":"机器学习 AR 函数简介 本函数用于学习数据的自回归模型系数。 函数名: AR 输入序列: 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 参数: p：自回归模型的阶数。默认为1。 输出序列: 输出单个序列，类型为 DOUBLE。第一行对应模型的一阶系数，以此类推。 提示: p应为正整数。 序列中的大部分点为...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"机器学习 AR 函数简介 本函数用于学习数据的自回归模型系数。 函数名: AR 输入序列: 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 参数: p：自回归模型的阶数。默认为1。 输出序列: 输出单个序列，类型为 DOUBLE。第一行对应模型的一阶系数，以此类推。 提示: p应为正整数。 序列中的大部分点为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"机器学习","slug":"机器学习","link":"#机器学习","children":[{"level":3,"title":"AR","slug":"ar","link":"#ar","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,u as data};
