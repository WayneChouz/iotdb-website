import{_ as l,r as i,o as r,c as p,a as c,d as s,e,b as a,w as t,f as o}from"./app-dNeAgOFp.js";const u={},d=o(`<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><h2 id="syntax-definition" tabindex="-1"><a class="header-anchor" href="#syntax-definition" aria-hidden="true">#</a> Syntax Definition</h2><p>In IoTDB, <code>SELECT</code> statement is used to retrieve data from one or more selected time series. Here is the syntax definition of <code>SELECT</code> statement:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>TRACING?<span class="token punctuation">]</span> <span class="token keyword">SELECT</span> 
	<span class="token punctuation">[</span><span class="token keyword">LAST</span>?<span class="token punctuation">]</span> selectExpr <span class="token punctuation">(</span><span class="token punctuation">,</span> selectExpr<span class="token punctuation">)</span><span class="token operator">*</span>
	<span class="token operator">&lt;</span>fromClause<span class="token operator">&gt;</span> <span class="token keyword">FROM</span> prefixPath <span class="token punctuation">(</span><span class="token punctuation">,</span> prefixPath<span class="token punctuation">)</span><span class="token operator">*</span>
	<span class="token operator">&lt;</span>whereClause?<span class="token operator">&gt;</span> <span class="token keyword">WHERE</span> queryFilter
	<span class="token operator">&lt;</span>orderByTimeClause?<span class="token operator">&gt;</span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token keyword">TIME</span> <span class="token punctuation">[</span><span class="token keyword">ASC</span> <span class="token operator">|</span> <span class="token keyword">DESC</span><span class="token punctuation">]</span>
	<span class="token operator">&lt;</span>paginationClause?<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token operator">|</span> SLIMIT<span class="token punctuation">]</span> <span class="token keyword">INT</span> <span class="token punctuation">[</span><span class="token keyword">OFFSET</span> <span class="token operator">|</span> SOFFSET<span class="token punctuation">]</span> <span class="token keyword">INT</span>
	<span class="token operator">&lt;</span>groupByLevelClause?<span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">LEVEL</span> <span class="token operator">=</span> <span class="token keyword">INT</span>
	<span class="token operator">&lt;</span>groupByTimeClause?<span class="token operator">&gt;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span><span class="token punctuation">,</span> slidingStep<span class="token punctuation">)</span>
	<span class="token operator">&lt;</span>fillClause?<span class="token operator">&gt;</span> FILL <span class="token punctuation">(</span><span class="token punctuation">[</span>PREVIOUS<span class="token punctuation">,</span> beforeRange <span class="token operator">|</span> LINEAR<span class="token punctuation">,</span> beforeRange<span class="token punctuation">,</span> afterRange <span class="token operator">|</span> constant<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;</span>withoutNullClause?<span class="token operator">&gt;</span> WITHOUT <span class="token boolean">NULL</span> <span class="token punctuation">[</span><span class="token keyword">ANY</span> <span class="token operator">|</span> <span class="token keyword">ALL</span><span class="token punctuation">]</span>
	<span class="token operator">&lt;</span>alignClause?<span class="token operator">&gt;</span> <span class="token punctuation">[</span>ALIGN <span class="token keyword">BY</span> DEVICE <span class="token operator">|</span> <span class="token keyword">DISABLE</span> ALIGN<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The most commonly used clauses of <code>SELECT</code> statements are these:</p>`,5),m=s("code",null,"selectExpr",-1),k=s("code",null,"selectExpr",-1),v=s("code",null,"selectExpr",-1),h=s("li",null,[s("code",null,"fromClause"),e(" contains the prefix of one or more time-series paths to query.")],-1),b=s("code",null,"whereClause",-1),f=s("code",null," queryfilter",-1),w=s("code",null,"queryfilter",-1),T=s("code",null,"whereClause",-1),y=s("li",null,[e("The query results are sorted in ascending order by timestamp. You can specify the results to be sorted in descending order by timestamp through "),s("code",null,"ORDER BY TIME DESC"),e(" clause.")],-1),g=s("code",null,"LIMIT/SLIMIT",-1),x=s("code",null,"OFFSET/SOFFSET",-1),q=o(`<h2 id="basic-examples" tabindex="-1"><a class="header-anchor" href="#basic-examples" aria-hidden="true">#</a> Basic Examples</h2><h3 id="select-a-column-of-data-based-on-a-time-interval" tabindex="-1"><a class="header-anchor" href="#select-a-column-of-data-based-on-a-time-interval" aria-hidden="true">#</a> Select a Column of Data Based on a Time Interval</h3><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">08</span>:<span class="token number">00.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected device is ln group wf01 plant wt01 device; the selected timeseries is the temperature sensor (temperature). The SQL statement requires that all temperature sensor values before the time point of &quot;2017-11-01T00:08:00.000&quot; be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.temperature|
+-----------------------------+-----------------------------+
|2017-11-01T00:00:00.000+08:00|                        25.96|
|2017-11-01T00:01:00.000+08:00|                        24.36|
|2017-11-01T00:02:00.000+08:00|                        20.09|
|2017-11-01T00:03:00.000+08:00|                        20.18|
|2017-11-01T00:04:00.000+08:00|                        21.13|
|2017-11-01T00:05:00.000+08:00|                        22.72|
|2017-11-01T00:06:00.000+08:00|                        20.71|
|2017-11-01T00:07:00.000+08:00|                        21.45|
+-----------------------------+-----------------------------+
Total line number = 8
It costs 0.026s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-multiple-columns-of-data-based-on-a-time-interval" tabindex="-1"><a class="header-anchor" href="#select-multiple-columns-of-data-based-on-a-time-interval" aria-hidden="true">#</a> Select Multiple Columns of Data Based on a Time Interval</h3><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected device is ln group wf01 plant wt01 device; the selected timeseries is &quot;status&quot; and &quot;temperature&quot;. The SQL statement requires that the status and temperature sensor values between the time point of &quot;2017-11-01T00:05:00.000&quot; and &quot;2017-11-01T00:12:00.000&quot; be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
+-----------------------------+------------------------+-----------------------------+
Total line number = 6
It costs 0.018s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-multiple-columns-of-data-for-the-same-device-according-to-multiple-time-intervals" tabindex="-1"><a class="header-anchor" href="#select-multiple-columns-of-data-for-the-same-device-according-to-multiple-time-intervals" aria-hidden="true">#</a> Select Multiple Columns of Data for the Same Device According to Multiple Time Intervals</h3><p>IoTDB supports specifying multiple time interval conditions in a query. Users can combine time interval conditions at will according to their needs. For example, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected device is ln group wf01 plant wt01 device; the selected timeseries is &quot;status&quot; and &quot;temperature&quot;; the statement specifies two different time intervals, namely &quot;2017-11-01T00:05:00.000 to 2017-11-01T00:12:00.000&quot; and &quot;2017-11-01T16:35:00.000 to 2017-11-01T16:37:00.000&quot;. The SQL statement requires that the values of selected timeseries satisfying any time interval be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
|2017-11-01T16:35:00.000+08:00|                    true|                        23.44|
|2017-11-01T16:36:00.000+08:00|                   false|                        21.98|
|2017-11-01T16:37:00.000+08:00|                   false|                        21.93|
+-----------------------------+------------------------+-----------------------------+
Total line number = 9
It costs 0.018s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="choose-multiple-columns-of-data-for-different-devices-according-to-multiple-time-intervals" tabindex="-1"><a class="header-anchor" href="#choose-multiple-columns-of-data-for-different-devices-according-to-multiple-time-intervals" aria-hidden="true">#</a> Choose Multiple Columns of Data for Different Devices According to Multiple Time Intervals</h3><p>The system supports the selection of data in any column in a query, i.e., the selected columns can come from different devices. For example, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected timeseries are &quot;the power supply status of ln group wf01 plant wt01 device&quot; and &quot;the hardware version of ln group wf02 plant wt02 device&quot;; the statement specifies two different time intervals, namely &quot;2017-11-01T00:05:00.000 to 2017-11-01T00:12:00.000&quot; and &quot;2017-11-01T16:35:00.000 to 2017-11-01T16:37:00.000&quot;. The SQL statement requires that the values of selected timeseries satisfying any time interval be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+--------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf02.wt02.hardware|
+-----------------------------+------------------------+--------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        v1|
|2017-11-01T00:07:00.000+08:00|                   false|                        v1|
|2017-11-01T00:08:00.000+08:00|                   false|                        v1|
|2017-11-01T00:09:00.000+08:00|                   false|                        v1|
|2017-11-01T00:10:00.000+08:00|                    true|                        v2|
|2017-11-01T00:11:00.000+08:00|                   false|                        v1|
|2017-11-01T16:35:00.000+08:00|                    true|                        v2|
|2017-11-01T16:36:00.000+08:00|                   false|                        v1|
|2017-11-01T16:37:00.000+08:00|                   false|                        v1|
+-----------------------------+------------------------+--------------------------+
Total line number = 9
It costs 0.014s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="order-by-time-query" tabindex="-1"><a class="header-anchor" href="#order-by-time-query" aria-hidden="true">#</a> Order By Time Query</h3><p>IoTDB supports the &#39;order by time&#39; statement since 0.11, it&#39;s used to display results in descending order by time.<br> For example, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|2017-11-07T23:59:00.000+08:00|                        v1|                   false|                        21.07|                   false|
|2017-11-07T23:58:00.000+08:00|                        v1|                   false|                        22.93|                   false|
|2017-11-07T23:57:00.000+08:00|                        v2|                    true|                        24.39|                    true|
|2017-11-07T23:56:00.000+08:00|                        v2|                    true|                        24.44|                    true|
|2017-11-07T23:55:00.000+08:00|                        v2|                    true|                         25.9|                    true|
|2017-11-07T23:54:00.000+08:00|                        v1|                   false|                        22.52|                   false|
|2017-11-07T23:53:00.000+08:00|                        v2|                    true|                        24.58|                    true|
|2017-11-07T23:52:00.000+08:00|                        v1|                   false|                        20.18|                   false|
|2017-11-07T23:51:00.000+08:00|                        v1|                   false|                        22.24|                   false|
|2017-11-07T23:50:00.000+08:00|                        v2|                    true|                         23.7|                    true|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
Total line number = 10
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage-in-different-clients" tabindex="-1"><a class="header-anchor" href="#usage-in-different-clients" aria-hidden="true">#</a> Usage in Different Clients</h2><p>Data query statements can be used in SQL command-line terminals, JDBC, JAVA / C++ / Python / Go and other native APIs, and RESTful APIs.</p>`,36),S=o(`<li><p>Execute query statements in native APIs such as JAVA / C++ / Python / Go. For details, please refer to the relevant documentation in the Application Programming Interface chapter. The interface prototype is as follows:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SessionDataSet</span> <span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function I(L,_){const n=i("RouterLink");return r(),p("div",null,[c(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),d,s("ul",null,[s("li",null,[e("Each "),m,e(" indicates a column that you want to retrieve, which may be a suffix of time series paths, an aggregate function and so on. There must be at least one "),k,e(". For more details for "),v,e(", please refer to "),a(n,{to:"/UserGuide/V0.13.x/Query-Data/Select-Expression.html"},{default:t(()=>[e("Select Expression")]),_:1}),e(" .")]),h,s("li",null,[b,e(" (Optional) specify the filter criterion named "),f,e(". "),w,e(" is a logical expression that returns the data points which calculation result is TRUE. If you do not specify "),T,e(", return all data points in the time series. For more details, please refer to "),a(n,{to:"/UserGuide/V0.13.x/Query-Data/Query-Filter.html"},{default:t(()=>[e("Query Filter")]),_:1}),e(".")]),y,s("li",null,[e("When there is a large amount of query result data, you can use "),g,e(" and "),x,e(" to paginate the result set, see "),a(n,{to:"/UserGuide/V0.13.x/Query-Data/Pagination.html"},{default:t(()=>[e("Query Result Pagination")]),_:1}),e(" for details.")]),s("li",null,[e("The query result set is aligned according to the timestamp by default, that is, the time series is used as the column, and the timestamp of each row of data is the same. For other result set alignments, see "),a(n,{to:"/UserGuide/V0.13.x/Query-Data/Result-Format.html"},{default:t(()=>[e("Query Result Alignment")]),_:1}),e(".")])]),q,s("ul",null,[s("li",null,[s("p",null,[e("Execute the query statement in the SQL command line terminal: start the SQL command line terminal, and directly enter the query statement to execute, see "),a(n,{to:"/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"},{default:t(()=>[e("SQL command line terminal")]),_:1}),e(".")])]),s("li",null,[s("p",null,[e("Execute query statements in JDBC, see "),a(n,{to:"/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:t(()=>[e("JDBC")]),_:1}),e(" for details.")])]),S,s("li",null,[s("p",null,[e("Used in RESTful API, see "),a(n,{to:"/UserGuide/V0.13.x/API/RestService.html"},{default:t(()=>[e("HTTP API")]),_:1}),e(" for details.")])])])])}const C=l(u,[["render",I],["__file","Overview.html.vue"]]);export{C as default};
