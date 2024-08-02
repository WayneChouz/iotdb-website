import{_ as o,r as i,o as p,c as l,b as e,d as s,a,w as t,e as r}from"./app-CVD6HEOl.js";const c={},u=e("h1",{id:"insert",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#insert"},[e("span",null,"INSERT")])],-1),d=e("p",null,"Writing a repeat timestamp covers the original timestamp data, which can be regarded as updated data.",-1),m=e("h2",{id:"use-of-insert-statements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-of-insert-statements"},[e("span",null,"Use of INSERT Statements")])],-1),k=r(`<p>In the scenario of this section, take two timeseries <code>root.ln.wf02.wt02.status</code> and <code>root.ln.wf02.wt02.hardware</code> as an example, and their data types are BOOLEAN and TEXT, respectively.</p><p>The sample code for single column data insertion is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,status) values(1,true)
IoTDB &gt; insert into root.ln.wf02.wt02(timestamp,hardware) values(1, &#39;v1&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The above example code inserts the long integer timestamp and the value &quot;true&quot; into the timeseries <code>root.ln.wf02.wt02.status</code> and inserts the long integer timestamp and the value &quot;v1&quot; into the timeseries <code>root.ln.wf02.wt02.hardware</code>. When the execution is successful, cost time is shown to indicate that the data insertion has been completed.</p><blockquote><p>Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.</p></blockquote><p>The INSERT statement can also support the insertion of multi-column data at the same time point. The sample code of inserting the values of the two timeseries at the same time point &#39;2&#39; is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In addition, The INSERT statement support insert multi-rows at once. The sample code of inserting two rows as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After inserting the data, we can simply query the inserted data using the SELECT statement:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements of single column and multi column data are performed correctly.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|
+-----------------------------+--------------------------+------------------------+
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|
|1970-01-01T08:00:00.003+08:00|                        v3|                   false|
|1970-01-01T08:00:00.004+08:00|                        v4|                    true|
+-----------------------------+--------------------------+------------------------+
Total line number = 4
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, we can omit the timestamp column, and the system will use the current system timestamp as the timestamp of the data point. The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note:</strong> Timestamps must be specified when inserting multiple rows of data in a SQL.</p><h2 id="insert-data-into-aligned-timeseries" tabindex="-1"><a class="header-anchor" href="#insert-data-into-aligned-timeseries"><span>Insert Data Into Aligned Timeseries</span></a></h2><p>To insert data into a group of aligned time series, we only need to add the <code>ALIGNED</code> keyword in SQL, and others are similar.</p><p>The sample code is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is shown below. The query result shows that the insertion statements are performed correctly.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|             1|           1.0|
|1970-01-01T08:00:00.002+08:00|             2|           2.0|
|1970-01-01T08:00:00.003+08:00|             3|           3.0|
+-----------------------------+--------------+--------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function h(v,g){const n=i("RouteLink");return p(),l("div",null,[u,e("p",null,[s("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting "),a(n,{to:"/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:t(()=>[s("INSERT SQL statement")]),_:1}),s(" in "),a(n,{to:"/UserGuide/V1.1.x/QuickStart/Command-Line-Interface.html"},{default:t(()=>[s("Client/Shell tools")]),_:1}),s(", or using "),a(n,{to:"/UserGuide/V1.1.x/API/Programming-JDBC.html"},{default:t(()=>[s("Java JDBC")]),_:1}),s(" to perform single or batch execution of "),a(n,{to:"/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:t(()=>[s("INSERT SQL statement")]),_:1}),s(".")]),e("p",null,[s("NOTE： This section mainly introduces the use of "),a(n,{to:"/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:t(()=>[s("INSERT SQL statement")]),_:1}),s(" for real-time data import in the scenario.")]),d,m,e("p",null,[s("The "),a(n,{to:"/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:t(()=>[s("INSERT SQL statement")]),_:1}),s(" statement is used to insert data into one or more specified timeseries created. For each point of data inserted, it consists of a "),a(n,{to:"/UserGuide/V1.1.x/Data-Concept/Data-Model-and-Terminology.html"},{default:t(()=>[s("timestamp")]),_:1}),s(" and a sensor acquisition value (see "),a(n,{to:"/UserGuide/V1.1.x/Data-Concept/Data-Type.html"},{default:t(()=>[s("Data Type")]),_:1}),s(").")]),k])}const f=o(c,[["render",h],["__file","Write-Data.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V1.1.x/Write-Data/Write-Data.html","title":"INSERT","lang":"en-US","frontmatter":{"description":"INSERT IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting in , or using to perform single or batch execution of . NOTE： This sectio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Write-Data/Write-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Write-Data/Write-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"INSERT"}],["meta",{"property":"og:description","content":"INSERT IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting in , or using to perform single or batch execution of . NOTE： This sectio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"INSERT\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use of INSERT Statements","slug":"use-of-insert-statements","link":"#use-of-insert-statements","children":[]},{"level":2,"title":"Insert Data Into Aligned Timeseries","slug":"insert-data-into-aligned-timeseries","link":"#insert-data-into-aligned-timeseries","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.5,"words":751},"filePathRelative":"UserGuide/V1.1.x/Write-Data/Write-Data.md","localizedDate":"July 10, 2023","autoDesc":true}');export{f as comp,b as data};
