import{_ as e,o as i,c as t,e as n}from"./app-C75uWLJT.js";const d={},s=n(`<h1 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步"><span>数据同步</span></a></h1><p>数据同步是工业物联网的典型需求，通过数据同步机制，可实现 IoTDB 之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。</p><h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍"><span>功能介绍</span></a></h2><h3 id="同步任务概述" tabindex="-1"><a class="header-anchor" href="#同步任务概述"><span>同步任务概述</span></a></h3><p>一个数据同步任务包含2个阶段：</p><ul><li>抽取（Source）阶段：该部分用于从源 IoTDB 抽取数据，在 SQL 语句中的 source 部分定义</li><li>发送（Sink）阶段：该部分用于向目标 IoTDB 发送数据，在 SQL 语句中的 sink 部分定义</li></ul><p>通过 SQL 语句声明式地配置2个部分的具体内容，可实现灵活的数据同步能力。</p><h3 id="同步任务-创建" tabindex="-1"><a class="header-anchor" href="#同步任务-创建"><span>同步任务 - 创建</span></a></h3><p>使用 <code>CREATE PIPE</code> 语句来创建一条数据同步任务，下列属性中<code>PipeId</code>和<code>sink</code>为必填项，<code>source</code>和<code>processor</code>为选填项，输入SQL时注意 <code>SOURCE </code>与 <code>SINK</code> 插件顺序不能替换。</p><p>SQL 示例如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>CREATE PIPE &lt;PipeId&gt; -- PipeId 是能够唯一标定任务任务的名字
-- 数据抽取插件，必填插件
WITH SOURCE (
  [&lt;parameter&gt; = &lt;value&gt;,],
-- 数据连接插件，必填插件
WITH SINK (
  [&lt;parameter&gt; = &lt;value&gt;,],
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>📌 注：使用数据同步功能，请保证接收端开启自动创建元数据</p></blockquote><h3 id="同步任务-管理" tabindex="-1"><a class="header-anchor" href="#同步任务-管理"><span>同步任务 - 管理</span></a></h3><p>数据同步任务有三种状态：RUNNING、STOPPED和DROPPED。任务状态转换如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/状态迁移图.png" alt="状态迁移图" tabindex="0" loading="lazy"><figcaption>状态迁移图</figcaption></figure><p>一个数据同步任务在生命周期中会经过多种状态：</p><ul><li>RUNNING： 运行状态。 <ul><li>说明1：任务的初始状态为运行状态(V1.3.1 及以上)</li></ul></li><li>STOPPED： 停止状态。 <ul><li>说明1：任务的初始状态为停止状态(V1.3.0)，需要使用SQL语句启动任务</li><li>说明2：用户也可以使用SQL语句手动将一个处于运行状态的任务停止，此时状态会从 RUNNING 变为 STOPPED</li><li>说明3：当一个任务出现无法恢复的错误时，其状态会自动从 RUNNING 变为 STOPPED</li></ul></li><li>DROPPED：删除状态。</li></ul><p>我们提供以下SQL语句对同步任务进行状态管理。</p><h4 id="启动任务" tabindex="-1"><a class="header-anchor" href="#启动任务"><span>启动任务</span></a></h4><p>创建之后，任务不会立即被处理，需要启动任务。使用<code>START PIPE</code>语句来启动任务，从而开始处理数据：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>START PIPE&lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="停止任务" tabindex="-1"><a class="header-anchor" href="#停止任务"><span>停止任务</span></a></h4><p>停止处理数据：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>STOP PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除任务" tabindex="-1"><a class="header-anchor" href="#删除任务"><span>删除任务</span></a></h4><p>删除指定任务：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>DROP PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除任务不需要先停止同步任务。</p><h4 id="查看任务" tabindex="-1"><a class="header-anchor" href="#查看任务"><span>查看任务</span></a></h4><p>查看全部任务：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>SHOW PIPES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看指定任务：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>SHOW PIPE &lt;PipeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h3><p>为了使得整体架构更加灵活以匹配不同的同步场景需求，在上述同步任务框架中 IoTDB 支持进行插件组装。系统为您预置了一些常用插件可直接使用，同时您也可以自定义 Sink 插件，并加载至 IoTDB 系统进行使用。</p><table><thead><tr><th>模块</th><th>插件</th><th>预置插件</th><th>自定义插件</th></tr></thead><tbody><tr><td>抽取（Source）</td><td>Source 插件</td><td>iotdb-source</td><td>不支持</td></tr><tr><td>发送（Sink）</td><td>Sink 插件</td><td>iotdb-thrift-sink、iotdb-air-gap-sink</td><td>支持</td></tr></tbody></table><h4 id="预置插件" tabindex="-1"><a class="header-anchor" href="#预置插件"><span>预置插件</span></a></h4><p>预置插件如下：</p><table><thead><tr><th>插件名称</th><th>类型</th><th>介绍</th><th>适用版本</th></tr></thead><tbody><tr><td>iotdb-source</td><td>source 插件</td><td>默认的 source 插件，用于抽取 IoTDB 历史或实时数据</td><td>1.2.x</td></tr><tr><td>iotdb-thrift-sink</td><td>sink 插件</td><td>用于 IoTDB（v1.2.0及以上）与 IoTDB（v1.2.0及以上）之间的数据传输。使用 Thrift RPC 框架传输数据，多线程 async non-blocking IO 模型，传输性能高，尤其适用于目标端为分布式时的场景</td><td>1.2.x</td></tr><tr><td>iotdb-air-gap-sink</td><td>sink 插件</td><td>用于 IoTDB（v1.2.2+）向 IoTDB（v1.2.2+）跨单向数据网闸的数据同步。支持的网闸型号包括南瑞 Syskeeper 2000 等</td><td>1.2.2 及以上</td></tr><tr><td>iotdb-thrift-ssl-sink</td><td>sink plugin</td><td>用于 IoTDB（v1.3.1及以上）与 IoTDB（v1.2.0及以上）之间的数据传输。使用 Thrift RPC 框架传输数据，单线程 sync blocking IO 模型，适用于安全需求较高的场景</td><td>1.3.1 及以上</td></tr></tbody></table><p>每个插件的详细参数可参考本文<a href="#sink-%E5%8F%82%E6%95%B0">参数说明</a>章节。</p><h4 id="查看插件" tabindex="-1"><a class="header-anchor" href="#查看插件"><span>查看插件</span></a></h4><p>查看系统中的插件（含自定义与内置插件）可以用以下语句：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>SHOW PIPEPLUGINS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回结果如下：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>IoTDB&gt; show pipeplugins
+------------------------------+----------+---------------------------------------------------------------------------------+---------+
|                    PluginName|PluginType|                                                                        ClassName|PluginJar|
+------------------------------+--------------------------------------------------------------------------------------------+---------+
|          DO-NOTHING-PROCESSOR|   Builtin|        org.apache.iotdb.commons.pipe.plugin.builtin.processor.DoNothingProcessor|         |
|               DO-NOTHING-SINK|   Builtin|                  org.apache.iotdb.commons.pipe.plugin.builtin.sink.DoNothingSink|         |
|            IOTDB-AIR-GAP-SINK|   Builtin|                org.apache.iotdb.commons.pipe.plugin.builtin.sink.IoTDBAirGapSink|         |
|                  IOTDB-SOURCE|   Builtin|                  org.apache.iotdb.commons.pipe.plugin.builtin.source.IoTDBSOURCE|         |
|             IOTDB-THRIFT-SINK|   Builtin|                org.apache.iotdb.commons.pipe.plugin.builtin.sink.IoTDBThriftSink|         |
|IOTDB-THRIFT-SSL-SINK(V1.3.1+)|   Builtin|org.apache.iotdb.commons.pipe.plugin.builtin.sink.iotdb.thrift.IoTDBThriftSslSink|         |
+------------------------------+----------+---------------------------------------------------------------------------------+---------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><h3 id="全量数据同步" tabindex="-1"><a class="header-anchor" href="#全量数据同步"><span>全量数据同步</span></a></h3><p>本例子用来演示将一个 IoTDB 的所有数据同步至另一个 IoTDB，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，我们可以创建一个名为 A2B 的同步任务，用来同步 A IoTDB 到 B IoTDB 间的全量数据，这里需要用到用到 sink 的 iotdb-thrift-sink 插件（内置插件），需指定接收端地址，这个例子中指定了&#39;sink.ip&#39;和&#39;sink.port&#39;，也可指定&#39;sink.node-urls&#39;，如下面的示例语句：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="历史数据同步" tabindex="-1"><a class="header-anchor" href="#历史数据同步"><span>历史数据同步</span></a></h3><p>本例子用来演示同步某个历史时间范围（ 2023 年 8 月 23 日 8 点到 2023 年 10 月 23 日 8 点）的数据至另一个 IoTDB，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，我们可以创建一个名为 A2B 的同步任务。首先我们需要在 source 中定义传输数据的范围，由于传输的是历史数据（历史数据是指同步任务创建之前存在的数据），所以需要将 source.realtime.enable 参数配置为 false；同时需要配置数据的起止时间 start-time 和 end-time 以及传输的模式 mode，此处推荐 mode 设置为 hybrid 模式（hybrid 模式为混合传输，在无数据积压时采用实时传输方式，有数据积压时采用批量传输方式，并根据系统内部情况自动切换）。</p><p>详细语句如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>create pipe A2B
WITH SOURCE (
  &#39;source&#39;= &#39;iotdb-source&#39;,
  &#39;source.start-time&#39; = &#39;2023.08.23T08:00:00+00:00&#39;,
  &#39;source.end-time&#39; = &#39;2023.10.23T08:00:00+00:00&#39;
) 
with SINK (
  &#39;sink&#39;=&#39;iotdb-thrift-async-sink&#39;,
  &#39;sink.node-urls&#39;=&#39;xxxx:6668&#39;,
  &#39;sink.batch.enable&#39;=&#39;false&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向数据传输" tabindex="-1"><a class="header-anchor" href="#双向数据传输"><span>双向数据传输</span></a></h3><p>本例子用来演示两个 IoTDB 之间互为双活的场景，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/1706698592139.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，为了避免数据无限循环，需要将 A 和 B 上的参数<code>source.forwarding-pipe-requests</code> 均设置为 <code>false</code>，表示不转发从另一pipe传输而来的数据。</p><p>详细语句如下：</p><p>在 A IoTDB 上执行下列语句：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>create pipe AB
with source (
  &#39;source.forwarding-pipe-requests&#39; = &#39;false&#39;
)
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 B IoTDB 上执行下列语句：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>create pipe BA
with source (
  &#39;source.forwarding-pipe-requests&#39; = &#39;false&#39;
)
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6667&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="级联数据传输" tabindex="-1"><a class="header-anchor" href="#级联数据传输"><span>级联数据传输</span></a></h3><p>本例子用来演示多个 IoTDB 之间级联传输数据的场景，数据由 A 集群同步至 B 集群，再同步至 C 集群，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/1706698610134.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，为了将 A 集群的数据同步至 C，在 BC 之间的 pipe 需要将 <code>source.forwarding-pipe-requests</code> 配置为<code>true</code>，详细语句如下：</p><p>在 A IoTDB 上执行下列语句，将 A 中数据同步至 B：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>create pipe AB
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6668&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 B IoTDB 上执行下列语句，将 B 中数据同步至 C：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>create pipe BC
with source (
  &#39;source.forwarding-pipe-requests&#39; = &#39;true&#39;
)
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6669&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨网闸数据传输" tabindex="-1"><a class="header-anchor" href="#跨网闸数据传输"><span>跨网闸数据传输</span></a></h3><p>本例子用来演示将一个 IoTDB 的数据，经过单向网闸，同步至另一个 IoTDB 的场景，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/w5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，需要使用 sink 任务中的 iotdb-air-gap-sink 插件（目前支持部分型号网闸，具体型号请联系天谋科技工作人员确认），配置网闸后，在 A IoTDB 上执行下列语句，其中 ip 和 port 填写网闸配置的虚拟 ip 和相关 port，详细语句如下：</p><div class="language-Sql line-numbers-mode" data-ext="Sql" data-title="Sql"><pre class="language-Sql"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-air-gap-sink&#39;,
  &#39;sink.ip&#39;=&#39;10.53.53.53&#39;,
  &#39;sink.port&#39;=&#39;9780&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssl协议数据传输" tabindex="-1"><a class="header-anchor" href="#ssl协议数据传输"><span>SSL协议数据传输</span></a></h3><p>本例子演示了使用 SSL 协议配置 IoTDB 单向数据同步的场景，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/1706696754380.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在该场景下，需要使用 IoTDB 的 iotdb-thrift-ssl-sink 插件。我们可以创建一个名为 A2B 的同步任务，并配置自身证书的密码和地址，详细语句如下：</p><div class="language-Sql line-numbers-mode" data-ext="Sql" data-title="Sql"><pre class="language-Sql"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-thrift-ssl-sink&#39;,
  &#39;sink.ip&#39;=&#39;127.0.0.1&#39;,
  &#39;sink.port&#39;=&#39;6669&#39;,
  &#39;ssl.trust-store-path&#39;=&#39;pki/trusted&#39;
  &#39;ssl.trust-store-pwd&#39;=&#39;root&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考-注意事项" tabindex="-1"><a class="header-anchor" href="#参考-注意事项"><span>参考：注意事项</span></a></h2><p>可通过修改 IoTDB 配置文件（iotdb-system.properties）以调整数据同步的参数，如同步数据存储目录等。完整配置如下：</p><p>V1.3.0+:</p><div class="language-Properties line-numbers-mode" data-ext="Properties" data-title="Properties"><pre class="language-Properties"><code>####################
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>V1.3.1+:</p><div class="language-Properties line-numbers-mode" data-ext="Properties" data-title="Properties"><pre class="language-Properties"><code># Uncomment the following field to configure the pipe lib directory.
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
# pipe_sink_timeout_ms=900000

# The maximum number of selectors that can be used in the sink.
# Recommend to set this value to less than or equal to pipe_sink_max_client_number.
# pipe_sink_selector_number=4

# The maximum number of clients that can be used in the sink.
# pipe_sink_max_client_number=16

# Whether to enable receiving pipe data through air gap.
# The receiver can only return 0 or 1 in tcp mode to indicate whether the data is received successfully.
# pipe_air_gap_receiver_enabled=false

# The port for the server to receive pipe data through air gap.
# pipe_air_gap_receiver_port=9780
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考-参数说明" tabindex="-1"><a class="header-anchor" href="#参考-参数说明"><span>参考：参数说明</span></a></h2><p>📌 说明：在 1.3.1 及以上的版本中，除 source、processor、sink 本身外，各项参数不再需要额外增加 source、processor、sink 前缀。例如：</p><div class="language-Sql line-numbers-mode" data-ext="Sql" data-title="Sql"><pre class="language-Sql"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-air-gap-sink&#39;,
  &#39;sink.ip&#39;=&#39;10.53.53.53&#39;,
  &#39;sink.port&#39;=&#39;9780&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以写作</p><div class="language-Sql line-numbers-mode" data-ext="Sql" data-title="Sql"><pre class="language-Sql"><code>create pipe A2B
with sink (
  &#39;sink&#39;=&#39;iotdb-air-gap-sink&#39;,
  &#39;ip&#39;=&#39;10.53.53.53&#39;,
  &#39;port&#39;=&#39;9780&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="source-参数" tabindex="-1"><a class="header-anchor" href="#source-参数"><span>source 参数</span></a></h3><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>source</td><td>iotdb-source</td><td>String: iotdb-source</td><td>必填</td><td>-</td></tr><tr><td>source.pattern</td><td>用于筛选时间序列的路径前缀</td><td>String: 任意的时间序列前缀</td><td>选填</td><td>root</td></tr><tr><td>source.history.start-time</td><td>同步历史数据的开始 event time，包含 start-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MIN_VALUE</td></tr><tr><td>source.history.end-time</td><td>同步历史数据的结束 event time，包含 end-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MAX_VALUE</td></tr><tr><td>start-time(V1.3.1+)</td><td>同步所有数据的开始 event time，包含 start-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MIN_VALUE</td></tr><tr><td>end-time(V1.3.1+)</td><td>同步所有数据的结束 event time，包含 end-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MAX_VALUE</td></tr><tr><td>source.realtime.mode</td><td>实时数据的抽取模式</td><td>String: hybrid, stream, batch</td><td>选填</td><td>hybrid</td></tr><tr><td>source.forwarding-pipe-requests</td><td>是否转发由其他 Pipe （通常是数据同步）写入的数据</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr></tbody></table><blockquote><p>💎 <strong>说明：历史数据与实时数据的差异</strong></p><ul><li><strong>历史数据</strong>：所有 arrival time &lt; 创建 pipe 时当前系统时间的数据称为历史数据</li><li><strong>实时数据</strong>：所有 arrival time &gt;= 创建 pipe 时当前系统时间的数据称为实时数据</li><li><strong>全量数据</strong>: 全量数据 = 历史数据 + 实时数据</li></ul></blockquote><blockquote><p>💎 ​<strong>说明：数据抽取模式hybrid, stream和batch的差异</strong></p><ul><li><strong>hybrid（推荐）</strong>：该模式下，任务将优先对数据进行实时处理、发送，当数据产生积压时自动切换至批量发送模式，其特点是平衡了数据同步的时效性和吞吐量</li><li><strong>stream</strong>：该模式下，任务将对数据进行实时处理、发送，其特点是高时效、低吞吐</li><li><strong>batch</strong>：该模式下，任务将对数据进行批量（按底层数据文件）处理、发送，其特点是低时效、高吞吐</li></ul></blockquote><h3 id="sink-参数" tabindex="-1"><a class="header-anchor" href="#sink-参数"><span>sink 参数</span></a></h3><h4 id="iotdb-thrift-sink" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-sink"><span>iotdb-thrift-sink</span></a></h4><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-thrift-sink 或 iotdb-thrift-async-sink</td><td>String: iotdb-thrift-sink 或 iotdb-thrift-async-sink</td><td>必填</td><td></td></tr><tr><td>sink.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip（请注意同步任务不支持向自身服务进行转发）</td><td>String</td><td>选填</td><td>与 sink.node-urls 任选其一填写</td></tr><tr><td>sink.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port（请注意同步任务不支持向自身服务进行转发）</td><td>Integer</td><td>选填</td><td>与 sink.node-urls 任选其一填写</td></tr><tr><td>sink.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url（请注意同步任务不支持向自身服务进行转发）</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>选填</td><td>与 sink.ip:sink.port 任选其一填写</td></tr><tr><td>sink.batch.enable</td><td>是否开启日志攒批发送模式，用于提高传输吞吐，降低 IOPS</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>sink.batch.max-delay-seconds</td><td>在开启日志攒批发送模式时生效，表示一批数据在发送前的最长等待时间（单位：s）</td><td>Integer</td><td>选填</td><td>1</td></tr><tr><td>sink.batch.size-bytes</td><td>在开启日志攒批发送模式时生效，表示一批数据最大的攒批大小（单位：byte）</td><td>Long</td><td>选填</td><td></td></tr></tbody></table><h4 id="iotdb-air-gap-sink" tabindex="-1"><a class="header-anchor" href="#iotdb-air-gap-sink"><span>iotdb-air-gap-sink</span></a></h4><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-air-gap-sink</td><td>String: iotdb-air-gap-sink</td><td>必填</td><td></td></tr><tr><td>sink.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</td><td>String</td><td>选填</td><td>与 sink.node-urls 任选其一填写</td></tr><tr><td>sink.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</td><td>Integer</td><td>选填</td><td>与 sink.node-urls 任选其一填写</td></tr><tr><td>sink.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>选填</td><td>与 sink.ip:sink.port 任选其一填写</td></tr><tr><td>sink.air-gap.handshake-timeout-ms</td><td>发送端与接收端在首次尝试建立连接时握手请求的超时时长，单位：毫秒</td><td>Integer</td><td>选填</td><td>5000</td></tr></tbody></table><h4 id="iotdb-thrift-ssl-sink-v1-3-1" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-ssl-sink-v1-3-1"><span>iotdb-thrift-ssl-sink(V1.3.1+)</span></a></h4><table><thead><tr><th>key</th><th>value</th><th>value range</th><th>required or not</th><th>default value</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-thrift-ssl-sink</td><td>String: iotdb-thrift-ssl-sink</td><td>必填</td><td></td></tr><tr><td>sink.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip（请注意同步任务不支持向自身服务进行转发）</td><td>String</td><td>选填</td><td>与 sink.node-urls 任选其一填写</td></tr><tr><td>sink.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port（请注意同步任务不支持向自身服务进行转发）</td><td>Integer</td><td>选填</td><td>与 sink.node-urls 任选其一填写</td></tr><tr><td>sink.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url（请注意同步任务不支持向自身服务进行转发）</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>选填</td><td>与 sink.ip:sink.port 任选其一填写</td></tr><tr><td>sink.batch.enable</td><td>是否开启日志攒批发送模式，用于提高传输吞吐，降低 IOPS</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>sink.batch.max-delay-seconds</td><td>在开启日志攒批发送模式时生效，表示一批数据在发送前的最长等待时间（单位：s）</td><td>Integer</td><td>选填</td><td>1</td></tr><tr><td>sink.batch.size-bytes</td><td>在开启日志攒批发送模式时生效，表示一批数据最大的攒批大小（单位：byte）</td><td>Long</td><td>选填</td><td></td></tr><tr><td>ssl.trust-store-path</td><td>连接目标端 DataNode 所需的 trust store 证书路径</td><td>String.Example: &#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>Optional</td><td>Fill in either sink.ip:sink.port</td></tr><tr><td>ssl.trust-store-pwd</td><td>连接目标端 DataNode 所需的 trust store 证书密码</td><td>Integer</td><td>Optional</td><td>5000</td></tr></tbody></table>`,106),a=[s];function r(l,o){return i(),t("div",null,a)}const u=e(d,[["render",r],["__file","Data-Sync_timecho.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/Data-Sync_timecho.html","title":"数据同步","lang":"zh-CN","frontmatter":{"description":"数据同步 数据同步是工业物联网的典型需求，通过数据同步机制，可实现 IoTDB 之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。 功能介绍 同步任务概述 一个数据同步任务包含2个阶段： 抽取（Source）阶段：该部分用于从源 IoTDB 抽取数据，在 SQL 语句中的 source 部分定义 发送（Si...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Data-Sync_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Data-Sync_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据同步"}],["meta",{"property":"og:description","content":"数据同步 数据同步是工业物联网的典型需求，通过数据同步机制，可实现 IoTDB 之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。 功能介绍 同步任务概述 一个数据同步任务包含2个阶段： 抽取（Source）阶段：该部分用于从源 IoTDB 抽取数据，在 SQL 语句中的 source 部分定义 发送（Si..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E7%8A%B6%E6%80%81%E8%BF%81%E7%A7%BB%E5%9B%BE.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-19T09:58:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T09:58:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据同步\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E7%8A%B6%E6%80%81%E8%BF%81%E7%A7%BB%E5%9B%BE.png\\",\\"https://alioss.timecho.com/docs/img/w1.png\\",\\"https://alioss.timecho.com/docs/img/w2.png\\",\\"https://alioss.timecho.com/docs/img/1706698592139.jpg\\",\\"https://alioss.timecho.com/docs/img/1706698610134.jpg\\",\\"https://alioss.timecho.com/docs/img/w5.png\\",\\"https://alioss.timecho.com/docs/img/1706696754380.jpg\\"],\\"dateModified\\":\\"2024-07-19T09:58:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"功能介绍","slug":"功能介绍","link":"#功能介绍","children":[{"level":3,"title":"同步任务概述","slug":"同步任务概述","link":"#同步任务概述","children":[]},{"level":3,"title":"同步任务 - 创建","slug":"同步任务-创建","link":"#同步任务-创建","children":[]},{"level":3,"title":"同步任务 - 管理","slug":"同步任务-管理","link":"#同步任务-管理","children":[]},{"level":3,"title":"插件","slug":"插件","link":"#插件","children":[]}]},{"level":2,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[{"level":3,"title":"全量数据同步","slug":"全量数据同步","link":"#全量数据同步","children":[]},{"level":3,"title":"历史数据同步","slug":"历史数据同步","link":"#历史数据同步","children":[]},{"level":3,"title":"双向数据传输","slug":"双向数据传输","link":"#双向数据传输","children":[]},{"level":3,"title":"级联数据传输","slug":"级联数据传输","link":"#级联数据传输","children":[]},{"level":3,"title":"跨网闸数据传输","slug":"跨网闸数据传输","link":"#跨网闸数据传输","children":[]},{"level":3,"title":"SSL协议数据传输","slug":"ssl协议数据传输","link":"#ssl协议数据传输","children":[]}]},{"level":2,"title":"参考：注意事项","slug":"参考-注意事项","link":"#参考-注意事项","children":[]},{"level":2,"title":"参考：参数说明","slug":"参考-参数说明","link":"#参考-参数说明","children":[{"level":3,"title":"source  参数","slug":"source-参数","link":"#source-参数","children":[]},{"level":3,"title":"sink 参数","slug":"sink-参数","link":"#sink-参数","children":[]}]}],"git":{"createdTime":1702027758000,"updatedTime":1721383100000,"contributors":[{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.22,"words":3965},"filePathRelative":"zh/UserGuide/latest/User-Manual/Data-Sync_timecho.md","localizedDate":"2023年12月8日","autoDesc":true}');export{u as comp,p as data};
