import{_ as s,c as n,b as a,o as i}from"./app-B280G6gL.js";const l={};function t(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="node-management" tabindex="-1"><a class="header-anchor" href="#node-management"><span>Node Management</span></a></h1><h2 id="show-child-paths" tabindex="-1"><a class="header-anchor" href="#show-child-paths"><span>Show Child Paths</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS pathPattern ? limitClause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Return all child paths of all the paths matching pathPattern.</p><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Example：</p><ul><li>return the child paths of root.ln：show child paths root.ln</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+</span>
<span class="line">| child paths|</span>
<span class="line">+------------+</span>
<span class="line">|root.ln.wf01|</span>
<span class="line">|root.ln.wf02|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>get all paths in form of root.xx.xx.xx：show child paths root.xx.xx</p></blockquote><h2 id="show-child-nodes" tabindex="-1"><a class="header-anchor" href="#show-child-nodes"><span>Show Child Nodes</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD NODES pathPattern ? limitClause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Return all child nodes of the pathPattern.</p><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Example：</p><ul><li>return the child nodes of root：show child nodes root</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+</span>
<span class="line">| child nodes|</span>
<span class="line">+------------+</span>
<span class="line">|          ln|</span>
<span class="line">+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>return the child nodes of root.ln：show child nodes root.ln</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+</span>
<span class="line">| child nodes|</span>
<span class="line">+------------+</span>
<span class="line">|        wf01|</span>
<span class="line">|        wf02|</span>
<span class="line">+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-nodes" tabindex="-1"><a class="header-anchor" href="#count-nodes"><span>Count Nodes</span></a></h2><p>IoTDB is able to use <code>COUNT NODES &lt;PathPattern&gt; LEVEL=&lt;INTEGER&gt;</code> to count the number of nodes at<br> the given level in current Metadata Tree considering a given pattern. IoTDB will find paths that<br> match the pattern and counts distinct nodes at the specified level among the matched paths.<br> This could be used to query the number of devices with specified measurements. The usage are as<br> follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; COUNT NODES root.** LEVEL=2</span>
<span class="line">IoTDB &gt; COUNT NODES root.ln.** LEVEL=2</span>
<span class="line">IoTDB &gt; COUNT NODES root.ln.wf01.** LEVEL=3</span>
<span class="line">IoTDB &gt; COUNT NODES root.**.temperature LEVEL=3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As for the above mentioned example and Metadata tree, you can get following results:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----+</span>
<span class="line">|count|</span>
<span class="line">+-----+</span>
<span class="line">|    4|</span>
<span class="line">+-----+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+-----+</span>
<span class="line">|count|</span>
<span class="line">+-----+</span>
<span class="line">|    2|</span>
<span class="line">+-----+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-----+</span>
<span class="line">|count|</span>
<span class="line">+-----+</span>
<span class="line">|    1|</span>
<span class="line">+-----+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-----+</span>
<span class="line">|count|</span>
<span class="line">+-----+</span>
<span class="line">|    2|</span>
<span class="line">+-----+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.</p></blockquote><h2 id="show-devices" tabindex="-1"><a class="header-anchor" href="#show-devices"><span>Show Devices</span></a></h2><ul><li>SHOW DEVICES pathPattern? (WITH STORAGE GROUP)? limitClause? #showDevices</li></ul><p>The default size of result set is 10000000. To query more child paths, please use <code>limit</code> and <code>offset</code>.</p><p>Similar to <code>Show Timeseries</code>, IoTDB also supports two ways of viewing devices:</p><ul><li><code>SHOW DEVICES</code> statement presents all devices&#39; information, which is equal to <code>SHOW DEVICES root.**</code>.</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> statement specifies the <code>PathPattern</code> and returns the devices information matching the pathPattern and under the given level.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show devices</span>
<span class="line">IoTDB&gt; show devices root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------+---------+</span>
<span class="line">|            devices|isAligned|</span>
<span class="line">+-------------------+---------+</span>
<span class="line">|  root.ln.wf01.wt01|    false|</span>
<span class="line">|  root.ln.wf02.wt02|    false|</span>
<span class="line">|root.sgcc.wf03.wt01|    false|</span>
<span class="line">|    root.turbine.d1|    false|</span>
<span class="line">+-------------------+---------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-----------------+---------+</span>
<span class="line">|          devices|isAligned|</span>
<span class="line">+-----------------+---------+</span>
<span class="line">|root.ln.wf01.wt01|    false|</span>
<span class="line">|root.ln.wf02.wt02|    false|</span>
<span class="line">+-----------------+---------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.001s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isAligned</code> indicates whether the timeseries under the device are aligned.</p><p>To view devices&#39; information with storage group, we can use <code>SHOW DEVICES WITH STORAGE GROUP</code> statement.</p><ul><li><code>SHOW DEVICES WITH STORAGE GROUP</code> statement presents all devices&#39; information with their storage group.</li><li><code>SHOW DEVICES &lt;PathPattern&gt; WITH STORAGE GROUP</code> statement specifies the <code>PathPattern</code> and returns the<br> devices&#39; information under the given level with their storage group information.</li></ul><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show devices with storage group</span>
<span class="line">IoTDB&gt; show devices root.ln.** with storage group</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can get results below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------+-------------+---------+</span>
<span class="line">|            devices|storage group|isAligned|</span>
<span class="line">+-------------------+-------------+---------+</span>
<span class="line">|  root.ln.wf01.wt01|      root.ln|    false|</span>
<span class="line">|  root.ln.wf02.wt02|      root.ln|    false|</span>
<span class="line">|root.sgcc.wf03.wt01|    root.sgcc|    false|</span>
<span class="line">|    root.turbine.d1| root.turbine|    false|</span>
<span class="line">+-------------------+-------------+---------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+-----------------+-------------+---------+</span>
<span class="line">|          devices|storage group|isAligned|</span>
<span class="line">+-----------------+-------------+---------+</span>
<span class="line">|root.ln.wf01.wt01|      root.ln|    false|</span>
<span class="line">|root.ln.wf02.wt02|      root.ln|    false|</span>
<span class="line">+-----------------+-------------+---------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.001s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)]))}const r=s(l,[["render",t],["__file","Node.html.vue"]]),o=JSON.parse('{"path":"/UserGuide/V0.13.x/Operate-Metadata/Node.html","title":"Node Management","lang":"en-US","frontmatter":{"description":"Node Management Show Child Paths Return all child paths of all the paths matching pathPattern. The default size of result set is 10000000. To query more child paths, please use ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Node.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Node.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Node Management"}],["meta",{"property":"og:description","content":"Node Management Show Child Paths Return all child paths of all the paths matching pathPattern. The default size of result set is 10000000. To query more child paths, please use ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Show Child Paths","slug":"show-child-paths","link":"#show-child-paths","children":[]},{"level":2,"title":"Show Child Nodes","slug":"show-child-nodes","link":"#show-child-nodes","children":[]},{"level":2,"title":"Count Nodes","slug":"count-nodes","link":"#count-nodes","children":[]},{"level":2,"title":"Show Devices","slug":"show-devices","link":"#show-devices","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.2,"words":660},"filePathRelative":"UserGuide/V0.13.x/Operate-Metadata/Node.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,o as data};
