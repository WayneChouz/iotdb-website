import{_ as t,r as a,o as s,c as i,b as r,d as e,a as o,w as l,e as d}from"./app-vSSc7VXH.js";const c={},p=d(`<h1 id="query-alignment-mode" tabindex="-1"><a class="header-anchor" href="#query-alignment-mode"><span>Query Alignment Mode</span></a></h1><p>In addition, IoTDB supports another result set format: <code>ALIGN BY DEVICE</code>.</p><h2 id="align-by-device" tabindex="-1"><a class="header-anchor" href="#align-by-device"><span>align by device</span></a></h2><p>The <code>ALIGN BY DEVICE</code> indicates that the deviceId is considered as a column. Therefore, there are totally limited columns in the dataset.</p><blockquote><p>NOTE：</p><p>1.You can see the result of &#39;align by device&#39; as one relational table, <code>Time + Device</code> is the primary key of this Table.</p><p>2.The result is order by <code>Device</code> firstly, and then by <code>Time</code> order.</p></blockquote><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------+-----------+------+--------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ordering-in-align-by-device" tabindex="-1"><a class="header-anchor" href="#ordering-in-align-by-device"><span>Ordering in ALIGN BY DEVICE</span></a></h2><p>ALIGN BY DEVICE mode arranges according to the device first, and sort each device in ascending order according to the timestamp. The ordering and priority can be adjusted through <code>ORDER BY</code> clause.</p>`,11);function u(m,h){const n=a("RouteLink");return s(),i("div",null,[p,r("p",null,[e("For details and examples, see the document "),o(n,{to:"/UserGuide/V1.1.x/Query-Data/Order-By.html"},{default:l(()=>[e("Order By")]),_:1}),e(".")])])}const v=t(c,[["render",u],["__file","Align-By.html.vue"]]),y=JSON.parse('{"path":"/UserGuide/V1.1.x/Query-Data/Align-By.html","title":"Query Alignment Mode","lang":"en-US","frontmatter":{"description":"Query Alignment Mode In addition, IoTDB supports another result set format: ALIGN BY DEVICE. align by device The ALIGN BY DEVICE indicates that the deviceId is considered as a c...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Query-Data/Align-By.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Query-Data/Align-By.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Query Alignment Mode"}],["meta",{"property":"og:description","content":"Query Alignment Mode In addition, IoTDB supports another result set format: ALIGN BY DEVICE. align by device The ALIGN BY DEVICE indicates that the deviceId is considered as a c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Query Alignment Mode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"align by device","slug":"align-by-device","link":"#align-by-device","children":[]},{"level":2,"title":"Ordering in ALIGN BY DEVICE","slug":"ordering-in-align-by-device","link":"#ordering-in-align-by-device","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"UserGuide/V1.1.x/Query-Data/Align-By.md","localizedDate":"July 10, 2023","autoDesc":true}');export{v as comp,y as data};
