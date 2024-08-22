import{_ as a,r as t,o as s,c as o,b as l,d as e,a as r,w as i,e as c}from"./app-BZ7vU6A9.js";const d={},p=c(`<h2 id="查询对齐模式" tabindex="-1"><a class="header-anchor" href="#查询对齐模式"><span>查询对齐模式</span></a></h2><p>在 IoTDB 中，查询结果集<strong>默认按照时间对齐</strong>，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。</p><p>除按照时间对齐外，还支持以下对齐模式：</p><ul><li>按设备对齐 <code>ALIGN BY DEVICE</code></li></ul><h3 id="按设备对齐" tabindex="-1"><a class="header-anchor" href="#按设备对齐"><span>按设备对齐</span></a></h3><p>在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 <code>SELECT</code> 子句中选择了 <code>N</code> 列，则结果集包含 <code>N + 2</code> 列（时间列和设备名字列）。</p><p>在默认情况下，结果集按照 <code>Device</code> 进行排列，在每个 <code>Device</code> 内按照 <code>Time</code> 列升序排序。</p><p>当查询多个设备时，要求设备之间同名的列数据类型相同。</p><p>为便于理解，可以按照关系模型进行对应。设备可以视为关系模型中的表，选择的列可以视为表中的列，<code>Time + Device</code> 看做其主键。</p><p><strong>示例：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------+-----------+------+--------+
|                         Time|           Device|temperature|status|hardware|
+-----------------------------+-----------------+-----------+------+--------+
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|
+-----------------------------+-----------------+-----------+------+--------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设备对齐模式下的排序" tabindex="-1"><a class="header-anchor" href="#设备对齐模式下的排序"><span>设备对齐模式下的排序</span></a></h3><p>在设备对齐模式下，默认按照设备名的字典序升序排列，每个设备内部按照时间戳大小升序排列，可以通过 <code>ORDER BY</code> 子句调整设备列和时间列的排序优先级。</p>`,15);function u(m,h){const n=t("RouteLink");return s(),o("div",null,[p,l("p",null,[e("详细说明及示例见文档 "),r(n,{to:"/zh/UserGuide/V1.1.x/Query-Data/Order-By.html"},{default:i(()=>[e("结果集排序")]),_:1}),e("。")])])}const g=a(d,[["render",u],["__file","Align-By.html.vue"]]),k=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Query-Data/Align-By.html","title":"","lang":"zh-CN","frontmatter":{"description":"查询对齐模式 在 IoTDB 中，查询结果集默认按照时间对齐，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。 除按照时间对齐外，还支持以下对齐模式： 按设备对齐 ALIGN BY DEVICE 按设备对齐 在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 SELECT 子句中选择了 N 列，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Query-Data/Align-By.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Query-Data/Align-By.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"查询对齐模式 在 IoTDB 中，查询结果集默认按照时间对齐，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。 除按照时间对齐外，还支持以下对齐模式： 按设备对齐 ALIGN BY DEVICE 按设备对齐 在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 SELECT 子句中选择了 N 列，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"查询对齐模式","slug":"查询对齐模式","link":"#查询对齐模式","children":[{"level":3,"title":"按设备对齐","slug":"按设备对齐","link":"#按设备对齐","children":[]},{"level":3,"title":"设备对齐模式下的排序","slug":"设备对齐模式下的排序","link":"#设备对齐模式下的排序","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.85,"words":555},"filePathRelative":"zh/UserGuide/V1.1.x/Query-Data/Align-By.md","localizedDate":"2023年7月10日","autoDesc":true}');export{g as comp,k as data};
