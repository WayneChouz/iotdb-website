import{_ as t,r as l,o,c as i,b as n,d as a,a as r,e as s}from"./app-CHHFxD1F.js";const p={},c=s('<h2 id="lambda-表达式" tabindex="-1"><a class="header-anchor" href="#lambda-表达式"><span>Lambda 表达式</span></a></h2><h3 id="jexl-自定义函数" tabindex="-1"><a class="header-anchor" href="#jexl-自定义函数"><span>JEXL 自定义函数</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>Java Expression Language (JEXL) 是一个表达式语言引擎。我们使用 JEXL 来扩展 UDF，在命令行中，通过简易的 lambda 表达式来实现 UDF。</p>',4),d={href:"https://commons.apache.org/proper/commons-jexl/apidocs/org/apache/commons/jexl3/package-summary.html#customization",target:"_blank",rel:"noopener noreferrer"},u=s(`<table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>JEXL</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td><code>expr</code>是一个支持标准的一元或多元参数的lambda表达式，符合<code>x -&gt; {...}</code>或<code>(x, y, z) -&gt; {...}</code>的格式，例如<code>x -&gt; {x * 2}</code>, <code>(x, y, z) -&gt; {x + y * z}</code></td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td>返回将输入的时间序列通过lambda表达式变换的序列</td></tr></tbody></table><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select * from root.ln.wf01.wt01;
+-----------------------------+---------------------+--------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.str|root.ln.wf01.wt01.st|root.ln.wf01.wt01.temperature|
+-----------------------------+---------------------+--------------------+-----------------------------+
|1970-01-01T08:00:00.000+08:00|                  str|                10.0|                          0.0|
|1970-01-01T08:00:00.001+08:00|                  str|                20.0|                          1.0|
|1970-01-01T08:00:00.002+08:00|                  str|                30.0|                          2.0|
|1970-01-01T08:00:00.003+08:00|                  str|                40.0|                          3.0|
|1970-01-01T08:00:00.004+08:00|                  str|                50.0|                          4.0|
|1970-01-01T08:00:00.005+08:00|                  str|                60.0|                          5.0|
|1970-01-01T08:00:00.006+08:00|                  str|                70.0|                          6.0|
|1970-01-01T08:00:00.007+08:00|                  str|                80.0|                          7.0|
|1970-01-01T08:00:00.008+08:00|                  str|                90.0|                          8.0|
|1970-01-01T08:00:00.009+08:00|                  str|               100.0|                          9.0|
|1970-01-01T08:00:00.010+08:00|                  str|               110.0|                         10.0|
+-----------------------------+---------------------+--------------------+-----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {x + x}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl1<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {x * 3}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl2<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {x * x}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl3<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {multiply(x, 100)}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl4<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> st<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;(x, y) -&gt; {x + y}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl5<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> st<span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;(x, y, z) -&gt; {x + y + z}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl6 <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----+-----+-----+------+-----+--------+
|                         Time|jexl1|jexl2|jexl3| jexl4|jexl5|   jexl6|
+-----------------------------+-----+-----+-----+------+-----+--------+
|1970-01-01T08:00:00.000+08:00|  0.0|  0.0|  0.0|   0.0| 10.0| 10.0str|
|1970-01-01T08:00:00.001+08:00|  2.0|  3.0|  1.0| 100.0| 21.0| 21.0str|
|1970-01-01T08:00:00.002+08:00|  4.0|  6.0|  4.0| 200.0| 32.0| 32.0str|
|1970-01-01T08:00:00.003+08:00|  6.0|  9.0|  9.0| 300.0| 43.0| 43.0str|
|1970-01-01T08:00:00.004+08:00|  8.0| 12.0| 16.0| 400.0| 54.0| 54.0str|
|1970-01-01T08:00:00.005+08:00| 10.0| 15.0| 25.0| 500.0| 65.0| 65.0str|
|1970-01-01T08:00:00.006+08:00| 12.0| 18.0| 36.0| 600.0| 76.0| 76.0str|
|1970-01-01T08:00:00.007+08:00| 14.0| 21.0| 49.0| 700.0| 87.0| 87.0str|
|1970-01-01T08:00:00.008+08:00| 16.0| 24.0| 64.0| 800.0| 98.0| 98.0str|
|1970-01-01T08:00:00.009+08:00| 18.0| 27.0| 81.0| 900.0|109.0|109.0str|
|1970-01-01T08:00:00.010+08:00| 20.0| 30.0|100.0|1000.0|120.0|120.0str|
+-----------------------------+-----+-----+-----+------+-----+--------+
Total line number = 11
It costs 0.118s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(v,b){const e=l("ExternalLinkIcon");return o(),i("div",null,[c,n("p",null,[a("lambda 表达式中支持的运算符详见链接 "),n("a",d,[a("JEXL 中 lambda 表达式支持的运算符"),r(e)]),a(" 。")]),u])}const k=t(p,[["render",m],["__file","Lambda.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Lambda.html","title":"","lang":"zh-CN","frontmatter":{"description":"Lambda 表达式 JEXL 自定义函数 函数简介 Java Expression Language (JEXL) 是一个表达式语言引擎。我们使用 JEXL 来扩展 UDF，在命令行中，通过简易的 lambda 表达式来实现 UDF。 lambda 表达式中支持的运算符详见链接 JEXL 中 lambda 表达式支持的运算符 。 使用示例 输入序列：...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Lambda.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Lambda.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Lambda 表达式 JEXL 自定义函数 函数简介 Java Expression Language (JEXL) 是一个表达式语言引擎。我们使用 JEXL 来扩展 UDF，在命令行中，通过简易的 lambda 表达式来实现 UDF。 lambda 表达式中支持的运算符详见链接 JEXL 中 lambda 表达式支持的运算符 。 使用示例 输入序列：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Lambda 表达式","slug":"lambda-表达式","link":"#lambda-表达式","children":[{"level":3,"title":"JEXL 自定义函数","slug":"jexl-自定义函数","link":"#jexl-自定义函数","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.25,"words":674},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Lambda.md","localizedDate":"2023年7月10日","autoDesc":true}');export{k as comp,h as data};
