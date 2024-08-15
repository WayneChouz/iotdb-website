import{_ as e,o as n,c as t,e as a}from"./app-CHHFxD1F.js";const s={},o=a(`<h1 id="查询对齐模式" tabindex="-1"><a class="header-anchor" href="#查询对齐模式"><span>查询对齐模式</span></a></h1><p>在 IoTDB 中，查询结果集<strong>默认按照时间对齐</strong>，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。</p><p>除按照时间对齐外，还支持以下对齐模式：</p><ul><li>按设备对齐 <code>ALIGN BY DEVICE</code></li></ul><h2 id="按设备对齐" tabindex="-1"><a class="header-anchor" href="#按设备对齐"><span>按设备对齐</span></a></h2><p>在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 <code>SELECT</code> 子句中选择了 <code>N</code> 列，则结果集包含 <code>N + 2</code> 列（时间列和设备名字列）。</p><p>在默认情况下，结果集按照 <code>Device</code> 进行排列，在每个 <code>Device</code> 内按照 <code>Time</code> 列升序排序。</p><p>当查询多个设备时，要求设备之间同名的列数据类型相同。</p><p>为便于理解，可以按照关系模型进行对应。设备可以视为关系模型中的表，选择的列可以视为表中的列，<code>Time + Device</code> 看做其主键。</p><p><strong>示例：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[o];function r(i,c){return n(),t("div",null,l)}const d=e(s,[["render",r],["__file","Align-By.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Query-Data/Align-By.html","title":"查询对齐模式","lang":"zh-CN","frontmatter":{"description":"查询对齐模式 在 IoTDB 中，查询结果集默认按照时间对齐，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。 除按照时间对齐外，还支持以下对齐模式： 按设备对齐 ALIGN BY DEVICE 按设备对齐 在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 SELECT 子句中选择了 N 列，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Align-By.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Align-By.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"查询对齐模式"}],["meta",{"property":"og:description","content":"查询对齐模式 在 IoTDB 中，查询结果集默认按照时间对齐，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。 除按照时间对齐外，还支持以下对齐模式： 按设备对齐 ALIGN BY DEVICE 按设备对齐 在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 SELECT 子句中选择了 N 列，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询对齐模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"按设备对齐","slug":"按设备对齐","link":"#按设备对齐","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Align-By.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,u as data};
