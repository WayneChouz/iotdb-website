import{_ as e,o as n,c as t,e as a}from"./app-BZ7vU6A9.js";const s={},o=a(`<h1 id="time-zone" tabindex="-1"><a class="header-anchor" href="#time-zone"><span>Time zone</span></a></h1><p>When a client connects to the IoTDB server, it can specify the time zone to be used for this connection. If not specified, the default time zone is the one of the client.</p><p>The time zone can be set in both JDBC and session native interface connections. The usage is as follows:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token constant">JDBC</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">IoTDBConnection</span><span class="token punctuation">)</span> connection<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;+08:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Session</span><span class="token operator">:</span> session<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;+08:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the CLI command line tool, the way to manually set the time zone through command is as follows:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">SET</span> time_zone<span class="token operator">=</span><span class="token operator">+</span><span class="token number">08</span><span class="token operator">:</span><span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The way to view the time zone used by the current connection is as follows:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token constant">JDBC</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">IoTDBConnection</span><span class="token punctuation">)</span> connection<span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Session</span><span class="token operator">:</span> session<span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In CLI:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> time_zone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="time-zone-usage-scenarios" tabindex="-1"><a class="header-anchor" href="#time-zone-usage-scenarios"><span>Time zone usage scenarios</span></a></h2><p>The IoTDB server only stores and processes time stamps, and the time zone is only used to interact with clients. The specific scenarios are as follows:</p><ol><li><p>Convert the time format string sent from the client to the corresponding time stamp.</p><p>For example，execute <code>insert into root.sg.d1(timestamp, s1) values(2021-07-01T08:00:00.000, 3.14)</code></p><p>Then <code>2021-07-01T08:00:00.000</code> will be converted to the corresponding timestamp value according to the time zone of the client. If it&#39;s in GMT+08:00, the result will be <code>1625097600000</code> ，which is equal to the timestamp value of <code>2021-07-01T00:00:00.000</code> in GMT+00:00。</p><blockquote><p>Note: At the same time, the dates of different time zones are different, but the timestamps are the same.</p></blockquote></li><li><p>Convert the timestamp in the result returned to the client into a time format string.</p><p>Take the above situation as an example，execute <code>select * from root.sg.d1</code>，the server will return the time value pair: <code>(1625097600000, 3.14)</code>. If CLI tool is used，then <code>1625097600000</code> will be converted into time format string according to time zone, as shown in the figure below：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------+
|                         Time|root.sg.d1.s1|
+-----------------------------+-------------+
|2021-07-01T08:00:00.000+08:00|         3.14|
+-----------------------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the query is executed on the client in GMT:+00:00, the result will be as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------+
|                         Time|root.sg.d1.s1|
+-----------------------------+-------------+
|2021-07-01T00:00:00.000+00:00|         3.14|
+-----------------------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the timestamps returned are the same, but the dates shown in different time zones are different.</p></li></ol>`,13),i=[o];function c(l,p){return n(),t("div",null,i)}const d=e(s,[["render",c],["__file","Time-zone.html.vue"]]),m=JSON.parse('{"path":"/UserGuide/V1.0.x/Data-Concept/Time-zone.html","title":"Time zone","lang":"en-US","frontmatter":{"description":"Time zone When a client connects to the IoTDB server, it can specify the time zone to be used for this connection. If not specified, the default time zone is the one of the clie...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Data-Concept/Time-zone.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Data-Concept/Time-zone.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Time zone"}],["meta",{"property":"og:description","content":"Time zone When a client connects to the IoTDB server, it can specify the time zone to be used for this connection. If not specified, the default time zone is the one of the clie..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Time zone\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Time zone usage scenarios","slug":"time-zone-usage-scenarios","link":"#time-zone-usage-scenarios","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"UserGuide/V1.0.x/Data-Concept/Time-zone.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,m as data};
