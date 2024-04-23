import{_ as p,r as l,o as i,c as r,b as s,d as e,a as n,w as t,e as o}from"./app-DrPcRZG6.js";const c={},d=s("h1",{id:"delete",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete"},[s("span",null,"DELETE")])],-1),u=o(`<h2 id="delete-single-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-single-timeseries"><span>Delete Single Timeseries</span></a></h2><p>Taking ln Group as an example, there exists such a usage scenario:</p><p>The wf02 plant&#39;s wt02 device has many segments of errors in its power supply status before 2017-11-01 16:26:00, and the data cannot be analyzed correctly. The erroneous data affected the correlation analysis with other devices. At this point, the data before this time point needs to be deleted. The SQL statement for this operation is</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case we hope to merely delete the data before 2017-11-01 16:26:00 in the year of 2017, The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IoTDB supports to delete a range of timeseries points. Users can write SQL expressions as follows to specify the delete interval:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">20</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">20</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please pay attention that multiple intervals connected by &quot;OR&quot; expression are not supported in delete statement:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>delete from root.ln.wf02.wt02.status where time &gt; 4 or time &lt; 0
Msg: 303: Check metadata error: For delete statement, where clause can only contain atomic
expressions like : time &gt; XXX, time &lt;= XXX, or two atomic expressions connected by &#39;AND&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If no &quot;where&quot; clause specified in a delete statement, all the data in a timeseries will be deleted.</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-multiple-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-multiple-timeseries"><span>Delete Multiple Timeseries</span></a></h2>`,13),k=o(`<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It should be noted that when the deleted path does not exist, IoTDB will not prompt that the path does not exist, but that the execution is successful, because SQL is a declarative programming method. Unless it is a syntax error, insufficient permissions and so on, it is not considered an error, as shown below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; delete from root.ln.wf03.wt02.status where time &lt; now()
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-time-partition-experimental" tabindex="-1"><a class="header-anchor" href="#delete-time-partition-experimental"><span>Delete Time Partition (experimental)</span></a></h2><p>You may delete all data in a time partition of a database using the following grammar:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">PARTITION</span> root<span class="token punctuation">.</span>ln <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>0,1,2</code> above is the id of the partition that is to be deleted, you can find it from the IoTDB<br> data folders or convert a timestamp manually to an id using <code>timestamp / partitionInterval </code> (flooring), and the <code>partitionInterval</code> should be in your config (if time-partitioning is<br> supported in your version).</p><p>Please notice that this function is experimental and mainly for development, please use it with care.</p>`,10);function m(h,w){const a=l("RouteLink");return i(),r("div",null,[d,s("p",null,[e("Users can delete data that meet the deletion condition in the specified timeseries by using the "),n(a,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:t(()=>[e("DELETE statement")]),_:1}),e(". When deleting data, users can select one or more timeseries paths, prefix paths, or paths with star to delete data within a certain time interval.")]),s("p",null,[e("In a JAVA programming environment, you can use the "),n(a,{to:"/UserGuide/V1.0.x/API/Programming-JDBC.html"},{default:t(()=>[e("Java JDBC")]),_:1}),e(" to execute single or batch UPDATE statements.")]),u,s("p",null,[e("If both the power supply status and hardware version of the ln group wf02 plant wt02 device before 2017-11-01 16:26:00 need to be deleted, "),n(a,{to:"/UserGuide/V1.0.x/Data-Concept/Data-Model-and-Terminology.html"},{default:t(()=>[e("the prefix path with broader meaning or the path with star")]),_:1}),e(" can be used to delete the data. The SQL statement for this operation is:")]),k])}const y=p(c,[["render",m],["__file","Delete-Data.html.vue"]]),g=JSON.parse('{"path":"/UserGuide/V1.0.x/Delete-Data/Delete-Data.html","title":"DELETE","lang":"en-US","frontmatter":{"description":"DELETE Users can delete data that meet the deletion condition in the specified timeseries by using the . When deleting data, users can select one or more timeseries paths, prefi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Delete-Data/Delete-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Delete-Data/Delete-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DELETE"}],["meta",{"property":"og:description","content":"DELETE Users can delete data that meet the deletion condition in the specified timeseries by using the . When deleting data, users can select one or more timeseries paths, prefi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DELETE\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Delete Single Timeseries","slug":"delete-single-timeseries","link":"#delete-single-timeseries","children":[]},{"level":2,"title":"Delete Multiple Timeseries","slug":"delete-multiple-timeseries","link":"#delete-multiple-timeseries","children":[]},{"level":2,"title":"Delete Time Partition (experimental)","slug":"delete-time-partition-experimental","link":"#delete-time-partition-experimental","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"UserGuide/V1.0.x/Delete-Data/Delete-Data.md","localizedDate":"July 10, 2023","autoDesc":true}');export{y as comp,g as data};
