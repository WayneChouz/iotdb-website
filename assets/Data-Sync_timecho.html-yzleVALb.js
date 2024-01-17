import{_ as e,o as t,c as i,a as n,f as d}from"./app-WGfa3gEA.js";const r={},a=d(`<h1 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步" aria-hidden="true">#</a> 数据同步</h1><p>数据同步是工业物联网的典型需求，通过数据同步机制，可实现IoTDB之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。</p><h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2><h3 id="同步任务概述" tabindex="-1"><a class="header-anchor" href="#同步任务概述" aria-hidden="true">#</a> 同步任务概述</h3><p>一个数据同步任务包含2个阶段：</p><ul><li>抽取（Extract）阶段：该部分用于从源 IoTDB 抽取数据，在SQL语句中的 Extractor 部分定义</li><li>发送（Connect）阶段：该部分用于向目标 IoTDB 发送数据，在SQL语句中的 Connector 部分定义</li></ul><p>通过 SQL 语句声明式地配置2个部分的具体内容，可实现灵活的数据同步能力。</p><h3 id="同步任务-创建" tabindex="-1"><a class="header-anchor" href="#同步任务-创建" aria-hidden="true">#</a> 同步任务 - 创建</h3><p>使用 <code>CREATE PIPE</code> 语句来创建一条数据同步任务，下列属性中<code>PipeId</code>和<code>connector</code>为必填项，<code>extractor</code>和<code>processor</code>为选填项，输入SQL时注意 <code>EXTRACTOR </code>与 <code>CONNECTOR</code> 插件顺序不能替换。</p><p>SQL 示例如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE PIPE &lt;PipeId&gt; -- PipeId 是能够唯一标定任务任务的名字
-- 数据抽取插件，必填插件
WITH EXTRACTOR (
  [&lt;parameter&gt; = &lt;value&gt;,],
-- 数据连接插件，必填插件
WITH CONNECTOR (
  [&lt;parameter&gt; = &lt;value&gt;,],
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>📌 注：使用数据同步功能，请保证接收端开启自动创建元数据</p></blockquote><h3 id="同步任务-管理" tabindex="-1"><a class="header-anchor" href="#同步任务-管理" aria-hidden="true">#</a> 同步任务 - 管理</h3><p>数据同步任务有三种状态：RUNNING、STOPPED和DROPPED。任务状态转换如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/状态迁移图.png" alt="状态迁移图" tabindex="0" loading="lazy"><figcaption>状态迁移图</figcaption></figure><p>一个数据同步任务在生命周期中会经过多种状态：</p><ul><li>RUNNING： 运行状态。</li><li>STOPPED： 停止状态。 <ul><li>说明1：任务的初始状态为停止状态，需要使用SQL语句启动任务</li><li>说明2：用户也可以使用SQL语句手动将一个处于运行状态的任务停止，此时状态会从 RUNNING 变为 STOPPED</li><li>说明3：当一个任务出现无法恢复的错误时，其状态会自动从 RUNNING 变为 STOPPED</li></ul></li><li>DROPPED：删除状态。</li></ul><p>我们提供以下SQL语句对同步任务进行状态管理。</p><h4 id="启动任务" tabindex="-1"><a class="header-anchor" href="#启动任务" aria-hidden="true">#</a> 启动任务</h4><p>创建之后，任务不会立即被处理，需要启动任务。使用<code>START PIPE</code>语句来启动任务，从而开始处理数据：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>START PIPE&lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="停止任务" tabindex="-1"><a class="header-anchor" href="#停止任务" aria-hidden="true">#</a> 停止任务</h4><p>停止处理数据：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>STOP PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除任务" tabindex="-1"><a class="header-anchor" href="#删除任务" aria-hidden="true">#</a> 删除任务</h4><p>删除指定任务：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>DROP PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除任务不需要先停止同步任务。</p><h4 id="查看任务" tabindex="-1"><a class="header-anchor" href="#查看任务" aria-hidden="true">#</a> 查看任务</h4><p>查看全部任务：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>SHOW PIPES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看指定任务：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>SHOW PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><p>为了使得整体架构更加灵活以匹配不同的同步场景需求，在上述同步任务框架中IoTDB支持进行插件组装。系统为您预置了一些常用插件可直接使用，同时您也可以自定义 connector 插件，并加载至IoTDB系统进行使用。</p><table><thead><tr><th>模块</th><th>插件</th><th>预置插件</th><th>自定义插件</th></tr></thead><tbody><tr><td>抽取（Extract）</td><td>Extractor 插件</td><td>iotdb-extractor</td><td>不支持</td></tr><tr><td>发送（Connect）</td><td>Connector 插件</td><td>iotdb-thrift-connector、iotdb-air-gap-connector</td><td>支持</td></tr></tbody></table><h4 id="预置插件" tabindex="-1"><a class="header-anchor" href="#预置插件" aria-hidden="true">#</a> 预置插件</h4><p>预置插件如下：</p><table><thead><tr><th>插件名称</th><th>类型</th><th>介绍</th><th>适用版本</th></tr></thead><tbody><tr><td>iotdb-extractor</td><td>extractor 插件</td><td>默认的extractor插件，用于抽取 IoTDB 历史或实时数据</td><td>1.2.x</td></tr><tr><td>iotdb-thrift-connector</td><td>connector 插件</td><td>用于 IoTDB（v1.2.0及以上）与 IoTDB（v1.2.0及以上）之间的数据传输。使用 Thrift RPC 框架传输数据，多线程 async non-blocking IO 模型，传输性能高，尤其适用于目标端为分布式时的场景</td><td>1.2.x</td></tr><tr><td>iotdb-air-gap-connector</td><td>connector 插件</td><td>用于 IoTDB（v1.2.2+）向 IoTDB（v1.2.2+）跨单向数据网闸的数据同步。支持的网闸型号包括南瑞 Syskeeper 2000 等</td><td>1.2.1以上</td></tr></tbody></table><p>每个插件的详细参数可参考本文<a href="#connector-%E5%8F%82%E6%95%B0">参数说明</a>章节。</p><h4 id="查看插件" tabindex="-1"><a class="header-anchor" href="#查看插件" aria-hidden="true">#</a> 查看插件</h4><p>查看系统中的插件（含自定义与内置插件）可以用以下语句：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>SHOW PIPEPLUGINS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回结果如下（其中部分插件为系统内部插件，将在1.3.0版本中删除）：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>IoTDB&gt; SHOW PIPEPLUGINS
+----------------------------+----------+--------------------------------------------------------------------------------+----------------------------------------------------+
|                  PluginName|PluginType|                                                                       ClassName|                                           PluginJar|
+----------------------------+----------+--------------------------------------------------------------------------------+----------------------------------------------------+
|        DO-NOTHING-CONNECTOR|   Builtin|       org.apache.iotdb.commons.pipe.plugin.builtin.connector.DoNothingConnector|                                                    |
|        DO-NOTHING-PROCESSOR|   Builtin|       org.apache.iotdb.commons.pipe.plugin.builtin.processor.DoNothingProcessor|                                                    |
|     IOTDB-AIR-GAP-CONNECTOR|   Builtin|     org.apache.iotdb.commons.pipe.plugin.builtin.connector.IoTDBAirGapConnector|                                                    |
|             IOTDB-EXTRACTOR|   Builtin|           org.apache.iotdb.commons.pipe.plugin.builtin.extractor.IoTDBExtractor|                                                    |
| IOTDB-LEGACY-PIPE-CONNECTOR|   Builtin| org.apache.iotdb.commons.pipe.plugin.builtin.connector.IoTDBLegacyPipeConnector|                                                    |
|IOTDB-THRIFT-ASYNC-CONNECTOR|   Builtin|org.apache.iotdb.commons.pipe.plugin.builtin.connector.IoTDBThriftAsyncConnector|                                                    |
|      IOTDB-THRIFT-CONNECTOR|   Builtin|     org.apache.iotdb.commons.pipe.plugin.builtin.connector.IoTDBThriftConnector|                                                    |
| IOTDB-THRIFT-SYNC-CONNECTOR|   Builtin| org.apache.iotdb.commons.pipe.plugin.builtin.connector.IoTDBThriftSyncConnector|                                                    |
+----------------------------+----------+--------------------------------------------------------------------------------+----------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><h3 id="全量数据同步" tabindex="-1"><a class="header-anchor" href="#全量数据同步" aria-hidden="true">#</a> 全量数据同步</h3><p>本例子用来演示将一个 IoTDB 的所有数据同步至另一个IoTDB，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，我们可以创建一个名为 A2B 的同步任务，用来同步 A IoTDB 到 B IoTDB 间的全量数据，这里需要用到用到 connector 的 iotdb-thrift-connector 插件（内置插件），需指定接收端地址，这个例子中指定了&#39;connector.ip&#39;和&#39;connector.port&#39;，也可指定&#39;connector.node-urls&#39;，如下面的示例语句：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe A2B
with connector (
  &#39;connector&#39;=&#39;iotdb-thrift-connector&#39;,
  &#39;connector.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;connector.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="历史数据同步" tabindex="-1"><a class="header-anchor" href="#历史数据同步" aria-hidden="true">#</a> 历史数据同步</h3><p>本例子用来演示同步某个历史时间范围（2023年8月23日8点到2023年10月23日8点）的数据至另一个IoTDB，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，我们可以创建一个名为 A2B 的同步任务。首先我们需要在 extractor 中定义传输数据的范围，由于传输的是历史数据（历史数据是指同步任务创建之前存在的数据），所以需要将extractor.realtime.enable参数配置为false；同时需要配置数据的起止时间start-time和end-time以及传输的模式mode，此处推荐mode设置为 hybrid 模式（hybrid模式为混合传输，在无数据积压时采用实时传输方式，有数据积压时采用批量传输方式，并根据系统内部情况自动切换）。</p><p>详细语句如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create pipe A2B
WITH EXTRACTOR (
&#39;extractor&#39;= &#39;iotdb-extractor&#39;,
&#39;extractor.realtime.enable&#39; = &#39;false&#39;, 
&#39;extractor.realtime.mode&#39;=&#39;hybrid&#39;,
&#39;extractor.history.start-time&#39; = &#39;2023.08.23T08:00:00+00:00&#39;,
&#39;extractor.history.end-time&#39; = &#39;2023.10.23T08:00:00+00:00&#39;) 
with connector (
&#39;connector&#39;=&#39;iotdb-thrift-async-connector&#39;,
&#39;connector.node-urls&#39;=&#39;xxxx:6668&#39;,
&#39;connector.batch.enable&#39;=&#39;false&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向数据传输" tabindex="-1"><a class="header-anchor" href="#双向数据传输" aria-hidden="true">#</a> 双向数据传输</h3><p>本例子用来演示两个 IoTDB 之间互为双活的场景，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，为了避免数据无限循环，需要将A和B上的参数<code>extractor.forwarding-pipe-requests</code> 均设置为 <code>false</code>，表示不转发从另一pipe传输而来的数据。同时将<code>&#39;extractor.history.enable&#39;</code> 设置为 <code>false</code>，表示不传输历史数据，即不同步创建该任务前的数据。</p><p>详细语句如下：</p><p>在 A IoTDB 上执行下列语句：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe AB
with extractor (
  &#39;extractor.history.enable&#39; = &#39;false&#39;,
  &#39;extractor.forwarding-pipe-requests&#39; = &#39;false&#39;,
with connector (
  &#39;connector&#39;=&#39;iotdb-thrift-connector&#39;,
  &#39;connector.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;connector.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 B IoTDB 上执行下列语句：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe BA
with extractor (
  &#39;extractor.history.enable&#39; = &#39;false&#39;,
  &#39;extractor.forwarding-pipe-requests&#39; = &#39;false&#39;,
with connector (
  &#39;connector&#39;=&#39;iotdb-thrift-connector&#39;,
  &#39;connector.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;connector.port&#39;=&#39;6667&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="级联数据传输" tabindex="-1"><a class="header-anchor" href="#级联数据传输" aria-hidden="true">#</a> 级联数据传输</h3><p>本例子用来演示多个 IoTDB 之间级联传输数据的场景，数据由A集群同步至B集群，再同步至C集群，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，为了将A集群的数据同步至C，在BC之间的pipe需要将 <code>extractor.forwarding-pipe-requests</code> 配置为<code>true</code>，详细语句如下：</p><p>在A IoTDB上执行下列语句，将A中数据同步至B：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe AB
with connector (
  &#39;connector&#39;=&#39;iotdb-thrift-connector&#39;,
  &#39;connector.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;connector.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在B IoTDB上执行下列语句，将B中数据同步至C：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe BC
with extractor (
  &#39;extractor.forwarding-pipe-requests&#39; = &#39;true&#39;,
with connector (
  &#39;connector&#39;=&#39;iotdb-thrift-connector&#39;,
  &#39;connector.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;connector.port&#39;=&#39;6669&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨网闸数据传输" tabindex="-1"><a class="header-anchor" href="#跨网闸数据传输" aria-hidden="true">#</a> 跨网闸数据传输</h3><p>本例子用来演示将一个 IoTDB 的数据，经过单向网闸，同步至另一个IoTDB的场景，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，需要使用 connector 任务中的iotdb-air-gap-connector 插件（目前支持部分型号网闸，具体型号请联系天谋科技工作人员确认），配置网闸后，在 A IoTDB 上执行下列语句，其中ip和port填写网闸信息，详细语句如下：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>create pipe A2B
with connector (
  &#39;connector&#39;=&#39;iotdb-air-gap-connector&#39;,
  &#39;connector.ip&#39;=&#39;10.53.53.53&#39;,
  &#39;connector.port&#39;=&#39;9780&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考-注意事项" tabindex="-1"><a class="header-anchor" href="#参考-注意事项" aria-hidden="true">#</a> 参考：注意事项</h2><p>可通过修改 IoTDB 配置文件（iotdb-common.properties）以调整数据同步的参数，如同步数据存储目录等。完整配置如下：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>####################
### Pipe Configuration
####################

# Uncomment the following field to configure the pipe lib directory.
# For Windows platform
# If its prefix is a drive specifier followed by &quot;\\\\&quot;, or if its prefix is &quot;\\\\\\\\&quot;, then the path is
# absolute. Otherwise, it is relative.
# pipe_lib_dir=ext\\\\pipe
# For Linux platform
# If its prefix is &quot;/&quot;, then the path is absolute. Otherwise, it is relative.
# pipe_lib_dir=ext/pipe

# The maximum number of threads that can be used to execute the pipe subtasks in PipeSubtaskExecutor.
# The actual value will be min(pipe_subtask_executor_max_thread_num, max(1, CPU core number / 2)).
# pipe_subtask_executor_max_thread_num=5

# The connection timeout (in milliseconds) for the thrift client.
# pipe_connector_timeout_ms=900000

# The maximum number of selectors that can be used in the async connector.
# pipe_async_connector_selector_number=1

# The core number of clients that can be used in the async connector.
# pipe_async_connector_core_client_number=8

# The maximum number of clients that can be used in the async connector.
# pipe_async_connector_max_client_number=16

# Whether to enable receiving pipe data through air gap.
# The receiver can only return 0 or 1 in tcp mode to indicate whether the data is received successfully.
# pipe_air_gap_receiver_enabled=false

# The port for the server to receive pipe data through air gap.
# pipe_air_gap_receiver_port=9780
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考-参数说明" tabindex="-1"><a class="header-anchor" href="#参考-参数说明" aria-hidden="true">#</a> 参考：参数说明</h2><h3 id="extractor-参数" tabindex="-1"><a class="header-anchor" href="#extractor-参数" aria-hidden="true">#</a> extractor 参数</h3><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>extractor</td><td>iotdb-extractor</td><td>String: iotdb-extractor</td><td>必填</td><td>-</td></tr><tr><td>extractor.pattern</td><td>用于筛选时间序列的路径前缀</td><td>String: 任意的时间序列前缀</td><td>选填</td><td>root</td></tr><tr><td>extractor.history.enable</td><td>是否同步历史数据</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>extractor.history.start-time</td><td>同步历史数据的开始 event time，包含 start-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MIN_VALUE</td></tr><tr><td>extractor.history.end-time</td><td>同步历史数据的结束 event time，包含 end-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MAX_VALUE</td></tr><tr><td>extractor.realtime.enable</td><td>是否同步实时数据</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>extractor.realtime.mode</td><td>实时数据的抽取模式</td><td>String: hybrid, log, file</td><td>选填</td><td>hybrid</td></tr><tr><td>extractor.forwarding-pipe-requests</td><td>是否转发由其他 Pipe （通常是数据同步）写入的数据</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr></tbody></table><blockquote><p>💎 <strong>说明：历史数据与实时数据的差异</strong></p><ul><li><strong>历史数据</strong>：所有 arrival time &lt; 创建 pipe 时当前系统时间的数据称为历史数据</li><li><strong>实时数据</strong>：所有 arrival time &gt;= 创建 pipe 时当前系统时间的数据称为实时数据</li><li><strong>全量数据</strong>: 全量数据 = 历史数据 + 实时数据</li></ul></blockquote><blockquote><p>💎 ​<strong>说明：数据抽取模式hybrid, log和file的差异</strong></p><ul><li><strong>hybrid（推荐）</strong>：该模式下，任务将优先对数据进行实时处理、发送，当数据产生积压时自动切换至批量发送模式，其特点是平衡了数据同步的时效性和吞吐量</li><li><strong>​log</strong>：该模式下，任务将对数据进行实时处理、发送，其特点是高时效、低吞吐</li><li><strong>file</strong>：该模式下，任务将对数据进行批量（按底层数据文件）处理、发送，其特点是低时效、高吞吐</li></ul></blockquote><h3 id="connector-参数" tabindex="-1"><a class="header-anchor" href="#connector-参数" aria-hidden="true">#</a> connector 参数</h3><h4 id="iotdb-thrift-connector" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-connector" aria-hidden="true">#</a> iotdb-thrift-connector</h4><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>connector</td><td>iotdb-thrift-connector 或 iotdb-thrift-sync-connector</td><td>String: iotdb-thrift-connector 或 iotdb-thrift-sync-connector</td><td>必填</td><td></td></tr><tr><td>connector.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip（请注意同步任务不支持向自身服务进行转发）</td><td>String</td><td>选填</td><td>与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port（请注意同步任务不支持向自身服务进行转发）</td><td>Integer</td><td>选填</td><td>与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url（请注意同步任务不支持向自身服务进行转发）</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>选填</td><td>与 connector.ip:connector.port 任选其一填写</td></tr><tr><td>connector.batch.enable</td><td>是否开启日志攒批发送模式，用于提高传输吞吐，降低 IOPS</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>connector.batch.max-delay-seconds</td><td>在开启日志攒批发送模式时生效，表示一批数据在发送前的最长等待时间（单位：s）</td><td>Integer</td><td>选填</td><td>1</td></tr><tr><td>connector.batch.size-bytes</td><td>在开启日志攒批发送模式时生效，表示一批数据最大的攒批大小（单位：byte）</td><td>Long</td><td>选填</td><td></td></tr></tbody></table><h4 id="iotdb-air-gap-connector" tabindex="-1"><a class="header-anchor" href="#iotdb-air-gap-connector" aria-hidden="true">#</a> iotdb-air-gap-connector</h4><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>connector</td><td>iotdb-air-gap-connector</td><td>String: iotdb-air-gap-connector</td><td>必填</td><td></td></tr><tr><td>connector.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</td><td>String</td><td>选填</td><td>与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</td><td>Integer</td><td>选填</td><td>与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>选填</td><td>与 connector.ip:connector.port 任选其一填写</td></tr><tr><td>connector.air-gap.handshake-timeout-ms</td><td>发送端与接收端在首次尝试建立连接时握手请求的超时时长，单位：毫秒</td><td>Integer</td><td>选填</td><td>5000</td></tr></tbody></table>`,92);function o(c,s){return t(),i("div",null,[n(`

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

`),a])}const u=e(r,[["render",o],["__file","Data-Sync_timecho.html.vue"]]);export{u as default};
