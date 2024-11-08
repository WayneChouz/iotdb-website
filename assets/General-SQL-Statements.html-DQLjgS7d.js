import{_ as a,c as s,b as t,o as n}from"./app-ED5DzO24.js";const i={};function l(r,e){return n(),s("div",null,e[0]||(e[0]=[t(`<h1 id="general-sql-statements" tabindex="-1"><a class="header-anchor" href="#general-sql-statements"><span>General SQL Statements</span></a></h1><h2 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management"><span>Database Management</span></a></h2><p>Database is similar to the database in the relational database, which is a collection of structured time series data.</p><h3 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database"><span>create database</span></a></h3><p>Create a database named <code>root.ln</code> with the following syntax:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases"><span>show databases</span></a></h3><p>View all databases:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database"><span>delete database</span></a></h3><p>Drop the database named <code>root.ln</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases"><span>count databases</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">COUNT <span class="token keyword">DATABASES</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="time-series-management" tabindex="-1"><a class="header-anchor" href="#time-series-management"><span>Time Series Management</span></a></h2><p>Time series is a collection of data points indexed by time. In IoTDB, time series refers to a complete sequence of measurement points. This section mainly introduces the management of time series.</p><h3 id="create-timeseries" tabindex="-1"><a class="header-anchor" href="#create-timeseries"><span>create timeseries</span></a></h3><p>The encoding method and data type need to be specified. For example, create a time series named <code>root.ln.wf01.wt01.temperature</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature <span class="token keyword">WITH</span> datatype<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span>ENCODING<span class="token operator">=</span>RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="show-timeseries" tabindex="-1"><a class="header-anchor" href="#show-timeseries"><span>show timeseries</span></a></h3><p>View all time series:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> TIMESERIES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Use wildcards to match time series under database <code>root.ln</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="delete-timeseries" tabindex="-1"><a class="header-anchor" href="#delete-timeseries"><span>delete timeseries</span></a></h3><p>Delete a time series named <code>root.ln.wf01.wt01.temperature</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DELETE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="count-timeseries" tabindex="-1"><a class="header-anchor" href="#count-timeseries"><span>count timeseries</span></a></h3><p>Count the total number of time series:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">COUNT TIMESERIES root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Count the number of time series under a wildcard path:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">COUNT TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="time-series-path-management" tabindex="-1"><a class="header-anchor" href="#time-series-path-management"><span>Time Series Path Management</span></a></h2><p>In addition to the concept of time series, IoTDB also has the concepts of subpaths and devices.</p><p><strong>Subpath</strong>: It is a part of the path in a complete time series name. For example, if the time series name is <code>root.ln.wf01.wt01.temperature</code>, then <code>root.ln</code>, <code>root.ln.wf01</code>, and <code>root.ln.wf01.wt01</code> are all its subpaths.</p><p><strong>Device</strong>: It is a combination of a group of time series. In IoTDB, the device is a subpath from the root to the penultimate node. If the time series name is <code>root.ln.wf01.wt01.temperature</code>, then <code>root.ln.wf01.wt01</code> is its device.</p><h3 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices"><span>show devices</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> DEVICES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths"><span>show child paths</span></a></h3><p>Check out the next level of <code>root.ln</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> CHILD PATHS root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes"><span>show child nodes</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> CHILD NODES root<span class="token punctuation">.</span>ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="count-devices" tabindex="-1"><a class="header-anchor" href="#count-devices"><span>count devices</span></a></h3><p>Count the number of devices:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">COUNT DEVICES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="count-nodes" tabindex="-1"><a class="header-anchor" href="#count-nodes"><span>count nodes</span></a></h3><p>Count the number of nodes at the specified level in the path:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">COUNT NODES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">LEVEL</span><span class="token operator">=</span><span class="token number">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="query-data" tabindex="-1"><a class="header-anchor" href="#query-data"><span>Query Data</span></a></h2><p>The following are commonly used query statements in IoTDB.</p><h3 id="query-the-data-of-the-specified-time-series" tabindex="-1"><a class="header-anchor" href="#query-the-data-of-the-specified-time-series"><span>Query the data of the specified time series</span></a></h3><p>Query all time series data under the device <code>root.ln.wf01.wt01</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="query-time-series-data-within-a-certain-time-range" tabindex="-1"><a class="header-anchor" href="#query-time-series-data-within-a-certain-time-range"><span>Query time series data within a certain time range</span></a></h3><p>Query the data in the time series <code>root.ln.wf01.wt01.temperature</code> whose timestamp is greater than 2022-01-01T00:05:00.000:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> temperature <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">WHERE</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="query-time-series-data-whose-values-are-within-the-specified-range" tabindex="-1"><a class="header-anchor" href="#query-time-series-data-whose-values-are-within-the-specified-range"><span>Query time series data whose values are within the specified range</span></a></h3><p>Query the data whose value is greater than 36.5 in the time series <code>root.ln.wf01.wt01.temperature</code>:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> temperature <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">WHERE</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="use-last-to-query-the-latest-point-data" tabindex="-1"><a class="header-anchor" href="#use-last-to-query-the-latest-point-data"><span>Use last to query the latest point data</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token keyword">last</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,62)]))}const o=a(i,[["render",l],["__file","General-SQL-Statements.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.html","title":"General SQL Statements","lang":"en-US","frontmatter":{"description":"General SQL Statements Database Management Database is similar to the database in the relational database, which is a collection of structured time series data. create database ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/QuickStart/General-SQL-Statements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"General SQL Statements"}],["meta",{"property":"og:description","content":"General SQL Statements Database Management Database is similar to the database in the relational database, which is a collection of structured time series data. create database ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T06:02:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T06:02:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"General SQL Statements\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T06:02:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Database Management","slug":"database-management","link":"#database-management","children":[{"level":3,"title":"create database","slug":"create-database","link":"#create-database","children":[]},{"level":3,"title":"show databases","slug":"show-databases","link":"#show-databases","children":[]},{"level":3,"title":"delete database","slug":"delete-database","link":"#delete-database","children":[]},{"level":3,"title":"count databases","slug":"count-databases","link":"#count-databases","children":[]}]},{"level":2,"title":"Time Series Management","slug":"time-series-management","link":"#time-series-management","children":[{"level":3,"title":"create timeseries","slug":"create-timeseries","link":"#create-timeseries","children":[]},{"level":3,"title":"show timeseries","slug":"show-timeseries","link":"#show-timeseries","children":[]},{"level":3,"title":"delete timeseries","slug":"delete-timeseries","link":"#delete-timeseries","children":[]},{"level":3,"title":"count timeseries","slug":"count-timeseries","link":"#count-timeseries","children":[]}]},{"level":2,"title":"Time Series Path Management","slug":"time-series-path-management","link":"#time-series-path-management","children":[{"level":3,"title":"show devices","slug":"show-devices","link":"#show-devices","children":[]},{"level":3,"title":"show child paths","slug":"show-child-paths","link":"#show-child-paths","children":[]},{"level":3,"title":"show child nodes","slug":"show-child-nodes","link":"#show-child-nodes","children":[]},{"level":3,"title":"count devices","slug":"count-devices","link":"#count-devices","children":[]},{"level":3,"title":"count nodes","slug":"count-nodes","link":"#count-nodes","children":[]}]},{"level":2,"title":"Query Data","slug":"query-data","link":"#query-data","children":[{"level":3,"title":"Query the data of the specified time series","slug":"query-the-data-of-the-specified-time-series","link":"#query-the-data-of-the-specified-time-series","children":[]},{"level":3,"title":"Query time series data within a certain time range","slug":"query-time-series-data-within-a-certain-time-range","link":"#query-time-series-data-within-a-certain-time-range","children":[]},{"level":3,"title":"Query time series data whose values are within the specified range","slug":"query-time-series-data-whose-values-are-within-the-specified-range","link":"#query-time-series-data-whose-values-are-within-the-specified-range","children":[]},{"level":3,"title":"Use last to query the latest point data","slug":"use-last-to-query-the-latest-point-data","link":"#use-last-to-query-the-latest-point-data","children":[]}]}],"git":{"createdTime":1690869728000,"updatedTime":1690869728000,"contributors":[{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.89,"words":567},"filePathRelative":"UserGuide/V1.2.x/QuickStart/General-SQL-Statements.md","localizedDate":"August 1, 2023","autoDesc":true}');export{o as comp,p as data};
