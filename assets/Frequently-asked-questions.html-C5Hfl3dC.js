import{_ as s,c as n,b as a,o as t}from"./app-D6rlonH6.js";const i={};function l(r,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h1><p><strong>如何查询我的 IoTDB 版本</strong></p><p>有几种方法可以识别您使用的 IoTDB 版本：</p><ul><li>启动 IoTDB 的命令行界面：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost</span>
<span class="line"> _____       _________  ______   ______    </span>
<span class="line">|_   _|     |  _   _  ||_   _ \`.|_   _ \\   </span>
<span class="line">  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  </span>
<span class="line">  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  </span>
<span class="line"> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | </span>
<span class="line">|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查 pom.xml 文件：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;version&gt;x.x.x&lt;/version&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用 JDBC API:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用命令行接口：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show version</span>
<span class="line">show version</span>
<span class="line">+---------------+</span>
<span class="line">|version        |</span>
<span class="line">+---------------+</span>
<span class="line">|x.x.x          |</span>
<span class="line">+---------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.241s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在哪里可以找到 IoTDB 的日志</strong></p><p>假设您的根目录是：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token builtin class-name">pwd</span></span>
<span class="line">/workspace/iotdb</span>
<span class="line"></span>
<span class="line">$ <span class="token function">ls</span> <span class="token parameter variable">-l</span></span>
<span class="line">server/</span>
<span class="line">cli/</span>
<span class="line">pom.xml</span>
<span class="line">Readme.md</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如 <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>假如 <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>在默认的设置里，logs 文件夹会被存储在<code>IOTDB_HOME/logs</code>。您可以在<code>IOTDB_HOME/conf</code>目录下的<code>logback.xml</code>文件中修改日志的级别和日志的存储路径。</p><p><strong>在哪里可以找到 IoTDB 的数据文件</strong></p><p>在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在<code>IOTDB_HOME/data/datanode</code>文件夹。</p><p><strong>如何知道 IoTDB 中存储了多少时间序列</strong></p><p>使用 IoTDB 的命令行接口：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在返回的结果里，会展示<code>Total timeseries number</code>，这个数据就是 IoTDB 中 timeseries 的数量。</p><p>在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; count timeseries root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l</span>
<span class="line">&gt;   6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以使用 Hadoop 和 Spark 读取 IoTDB 中的 TsFile 吗？</strong></p><p>是的。IoTDB 与开源生态紧密结合。IoTDB 支持 <a href="https://github.com/apache/iotdb/tree/master/hadoop" target="_blank" rel="noopener noreferrer">Hadoop</a>, <a href="https://github.com/apache/iotdb/tree/master/spark-tsfile" target="_blank" rel="noopener noreferrer">Spark</a> 和 <a href="https://github.com/apache/iotdb/tree/master/grafana" target="_blank" rel="noopener noreferrer">Grafana</a> 可视化工具。</p><p><strong>IoTDB 如何处理重复的数据点</strong></p><p>一个数据点是由一个完整的时间序列路径（例如：<code>root.vehicle.d0.s0</code>) 和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么 IoTDB 将更新这个点的值，而不是插入一个新点。</p><p><strong>我如何知道具体的 timeseries 的类型</strong></p><p>在 IoTDB 的命令行接口中使用 SQL <code>SHOW TIMESERIES &lt;timeseries path&gt;</code>:</p><p>例如：如果您想知道所有 timeseries 的类型 &lt;timeseries path&gt; 应该为 <code>root</code>。上面的 SQL 应该修改为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您想查询一个指定的时间序列，您可以修改 &lt;timeseries path&gt; 为时间序列的完整路径。比如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.s1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您还可以在 timeseries 路径中使用通配符：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>如何更改 IoTDB 的客户端时间显示格式</strong></p><p>IoTDB 客户端默认显示的时间是人类可读的（比如：<code>1970-01-01T08:00:00.001</code>)，如果您想显示是时间戳或者其他可读格式，请在启动命令上添加参数<code>-disableISO8601</code>:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>怎么处理来自<code>org.apache.ratis.grpc.server.GrpcLogAppender</code>的<code>IndexOutOfBoundsException</code></strong></p><p>这是我们的依赖Ratis 2.4.1的一个内部错误日志，不会对数据写入和读取造成任何影响。<br> 已经报告给Ratis社区，并会在未来的版本中修复。</p>`,44)]))}const o=s(i,[["render",l],["__file","Frequently-asked-questions.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.html","title":"常见问题","lang":"zh-CN","frontmatter":{"description":"常见问题 如何查询我的 IoTDB 版本 有几种方法可以识别您使用的 IoTDB 版本： 启动 IoTDB 的命令行界面： 检查 pom.xml 文件： 使用 JDBC API: 使用命令行接口： 在哪里可以找到 IoTDB 的日志 假设您的根目录是： 假如 $IOTDB_HOME = /workspace/iotdb/server/target/io...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"常见问题"}],["meta",{"property":"og:description","content":"常见问题 如何查询我的 IoTDB 版本 有几种方法可以识别您使用的 IoTDB 版本： 启动 IoTDB 的命令行界面： 检查 pom.xml 文件： 使用 JDBC API: 使用命令行接口： 在哪里可以找到 IoTDB 的日志 假设您的根目录是： 假如 $IOTDB_HOME = /workspace/iotdb/server/target/io..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"zh/UserGuide/V1.1.x/FAQ/Frequently-asked-questions.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,p as data};
