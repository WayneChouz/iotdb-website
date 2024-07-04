import{_ as n,r as a,o as s,c as r,b as o,d as e,a as d,w as l,e as t}from"./app-nVIpYHtH.js";const c={},m=t('<h1 id="deadband-process" tabindex="-1"><a class="header-anchor" href="#deadband-process"><span>Deadband Process</span></a></h1><h2 id="sdt" tabindex="-1"><a class="header-anchor" href="#sdt"><span>SDT</span></a></h2><p>The Swinging Door Trending (SDT) algorithm is a deadband process algorithm.<br> SDT has low computational complexity and uses a linear trend to represent a quantity of data.</p><p>In IoTDB SDT compresses and discards data when flushing into the disk.</p><p>IoTDB allows you to specify the properties of SDT when creating a time series, and supports three properties:</p><ul><li>CompDev (Compression Deviation)</li></ul><p>CompDev is the most important parameter in SDT that represents the maximum difference between the<br> current sample and the current linear trend. CompDev needs to be greater than 0 to perform compression.</p><ul><li>CompMinTime (Compression Minimum Time Interval)</li></ul><p>CompMinTime is a parameter measures the time distance between two stored data points, which is used for noisy reduction.<br> If the time interval between the current point and the last stored point is less than or equal to its value,<br> current point will NOT be stored regardless of compression deviation.<br> The default value is 0 with time unit ms.</p><ul><li>CompMaxTime (Compression Maximum Time Interval)</li></ul><p>CompMaxTime is a parameter measure the time distance between two stored data points.<br> If the time interval between the current point and the last stored point is greater than or equal to its value,<br> current point will be stored regardless of compression deviation.<br> The default value is 9,223,372,036,854,775,807 with time unit ms.</p>',11),p=t(`<p>Supported datatypes:</p><ul><li>INT32 (Integer)</li><li>INT64 (Long Integer)</li><li>FLOAT (Single Precision Floating Point)</li><li>DOUBLE (Double Precision Floating Point)</li></ul><p>The following is an example of using SDT compression.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE TIMESERIES root.sg1.d0.s0 WITH DATATYPE=INT32,ENCODING=PLAIN,LOSS=SDT,COMPDEV=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Prior to flushing and SDT compression, the results are shown below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; SELECT s0 FROM root.sg1.d0
+-----------------------------+--------------+
|                         Time|root.sg1.d0.s0|
+-----------------------------+--------------+
|2017-11-01T00:06:00.001+08:00|             1|
|2017-11-01T00:06:00.002+08:00|             1|
|2017-11-01T00:06:00.003+08:00|             1|
|2017-11-01T00:06:00.004+08:00|             1|
|2017-11-01T00:06:00.005+08:00|             1|
|2017-11-01T00:06:00.006+08:00|             1|
|2017-11-01T00:06:00.007+08:00|             1|
|2017-11-01T00:06:00.015+08:00|            10|
|2017-11-01T00:06:00.016+08:00|            20|
|2017-11-01T00:06:00.017+08:00|             1|
|2017-11-01T00:06:00.018+08:00|            30|
+-----------------------------+--------------+
Total line number = 11
It costs 0.008s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After flushing and SDT compression, the results are shown below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; FLUSH
IoTDB&gt; SELECT s0 FROM root.sg1.d0
+-----------------------------+--------------+
|                         Time|root.sg1.d0.s0|
+-----------------------------+--------------+
|2017-11-01T00:06:00.001+08:00|             1|
|2017-11-01T00:06:00.007+08:00|             1|
|2017-11-01T00:06:00.015+08:00|            10|
|2017-11-01T00:06:00.016+08:00|            20|
|2017-11-01T00:06:00.017+08:00|             1|
+-----------------------------+--------------+
Total line number = 5
It costs 0.044s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SDT takes effect when flushing to the disk. The SDT algorithm always stores the first point and does not store the last point.</p><p>The data in [2017-11-01T00:06:00.001, 2017-11-01T00:06:00.007] is within the compression deviation thus discarded.<br> The data point at time 2017-11-01T00:06:00.007 is stored because the next data point at time 2017-11-01T00:06:00.015<br> exceeds compression deviation. When a data point exceeds the compression deviation, SDT stores the last read<br> point and updates the upper and lower boundaries. The last point at time 2017-11-01T00:06:00.018 is not stored.</p>`,10);function u(h,v){const i=a("RouteLink");return s(),r("div",null,[m,o("p",null,[e("The specified syntax for SDT is detailed in "),d(i,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:l(()=>[e("Create Timeseries Statement")]),_:1}),e(".")]),p])}const b=n(c,[["render",u],["__file","Deadband-Process.html.vue"]]),g=JSON.parse('{"path":"/UserGuide/V0.13.x/Data-Concept/Deadband-Process.html","title":"Deadband Process","lang":"en-US","frontmatter":{"description":"Deadband Process SDT The Swinging Door Trending (SDT) algorithm is a deadband process algorithm. SDT has low computational complexity and uses a linear trend to represent a quan...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Concept/Deadband-Process.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Concept/Deadband-Process.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Deadband Process"}],["meta",{"property":"og:description","content":"Deadband Process SDT The Swinging Door Trending (SDT) algorithm is a deadband process algorithm. SDT has low computational complexity and uses a linear trend to represent a quan..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Deadband Process\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SDT","slug":"sdt","link":"#sdt","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.24,"words":672},"filePathRelative":"UserGuide/V0.13.x/Data-Concept/Deadband-Process.md","localizedDate":"July 10, 2023","autoDesc":true}');export{b as comp,g as data};
