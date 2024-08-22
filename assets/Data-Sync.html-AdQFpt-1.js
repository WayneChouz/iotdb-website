import{_ as r,r as i,o as p,c,b as n,d as t,a as s,w as a,e as o}from"./app-BZ7vU6A9.js";const d={},u=n("h1",{id:"iotdb-数据同步",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#iotdb-数据同步"},[n("span",null,"IoTDB 数据同步")])],-1),h=o(`<p><strong>一个 Pipe 包含三个子任务（插件）：</strong></p><ul><li>抽取（Extract）</li><li>处理（Process）</li><li>发送（Connect）</li></ul><p><strong>Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。</strong> 在一个 Pipe 中，上述的子任务分别由三种插件执行实现，数据会依次经过这三个插件进行处理：Pipe Extractor 用于抽取数据，Pipe Processor 用于处理数据，Pipe Connector 用于发送数据，最终数据将被发至外部系统。</p><p><strong>Pipe 任务的模型如下：</strong></p><figure><img src="https://alioss.timecho.com/docs/img/流处理引擎.jpeg" alt="任务模型图" tabindex="0" loading="lazy"><figcaption>任务模型图</figcaption></figure><p>描述一个数据同步任务，本质就是描述 Pipe Extractor、Pipe Processor 和 Pipe Connector 插件的属性。用户可以通过 SQL 语句声明式地配置三个子任务的具体属性，通过组合不同的属性，实现灵活的数据 ETL 能力。</p><p>利用数据同步功能，可以搭建完整的数据链路来满足端<em>边云同步、异地灾备、读写负载分库</em>等需求。</p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><p><strong>🎯 目标：实现 IoTDB A -&gt; IoTDB B 的全量数据同步</strong></p><ul><li><p>启动两个 IoTDB，A（datanode -&gt; 127.0.0.1:6667） B（datanode -&gt; 127.0.0.1:6668）</p></li><li><p>创建 A -&gt; B 的 Pipe，在 A 上执行</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> pipe a2b
<span class="token keyword">with</span> connector <span class="token punctuation">(</span>
  <span class="token string">&#39;connector&#39;</span><span class="token operator">=</span><span class="token string">&#39;iotdb-thrift-connector&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;connector.ip&#39;</span><span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;connector.port&#39;</span><span class="token operator">=</span><span class="token string">&#39;6668&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动 A -&gt; B 的 Pipe，在 A 上执行</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">start</span> pipe a2b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>向 A 写入数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在 B 检查由 A 同步过来的数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">FROM</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><blockquote><p>❗️<strong>注：目前的 IoTDB -&gt; IoTDB 的数据同步实现并不支持 DDL 同步</strong></p><p>即：不支持 ttl，trigger，别名，模板，视图，创建/删除序列，创建/删除数据库等操作</p><p><strong>IoTDB -&gt; IoTDB 的数据同步要求目标端 IoTDB：</strong></p><ul><li>开启自动创建元数据：需要人工配置数据类型的编码和压缩与发送端保持一致</li><li>不开启自动创建元数据：手工创建与源端一致的元数据</li></ul></blockquote><h2 id="同步任务管理" tabindex="-1"><a class="header-anchor" href="#同步任务管理"><span>同步任务管理</span></a></h2><h3 id="创建同步任务" tabindex="-1"><a class="header-anchor" href="#创建同步任务"><span>创建同步任务</span></a></h3><p>可以使用 <code>CREATE PIPE</code> 语句来创建一条数据同步任务，示例 SQL 语句如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> PIPE <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span> <span class="token comment">-- PipeId 是能够唯一标定同步任务任务的名字</span>
<span class="token keyword">WITH</span> EXTRACTOR <span class="token punctuation">(</span>
  <span class="token comment">-- 默认的 IoTDB 数据抽取插件</span>
  <span class="token string">&#39;extractor&#39;</span>                    <span class="token operator">=</span> <span class="token string">&#39;iotdb-extractor&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 路径前缀，只有能够匹配该路径前缀的数据才会被抽取，用作后续的处理和发送</span>
  <span class="token string">&#39;extractor.pattern&#39;</span>            <span class="token operator">=</span> <span class="token string">&#39;root.timecho&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 是否抽取历史数据</span>
  <span class="token string">&#39;extractor.history.enable&#39;</span>     <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 描述被抽取的历史数据的时间范围，表示最早时间</span>
  <span class="token string">&#39;extractor.history.start-time&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;2011.12.03T10:15:30+01:00&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 描述被抽取的历史数据的时间范围，表示最晚时间</span>
  <span class="token string">&#39;extractor.history.end-time&#39;</span>   <span class="token operator">=</span> <span class="token string">&#39;2022.12.03T10:15:30+01:00&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 是否抽取实时数据</span>
  <span class="token string">&#39;extractor.realtime.enable&#39;</span>    <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">WITH</span> PROCESSOR <span class="token punctuation">(</span>
  <span class="token comment">-- 默认的数据处理插件，即不做任何处理</span>
  <span class="token string">&#39;processor&#39;</span>                    <span class="token operator">=</span> <span class="token string">&#39;do-nothing-processor&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">WITH</span> CONNECTOR <span class="token punctuation">(</span>
  <span class="token comment">-- IoTDB 数据发送插件，目标端为 IoTDB</span>
  <span class="token string">&#39;connector&#39;</span>                    <span class="token operator">=</span> <span class="token string">&#39;iotdb-thrift-connector&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</span>
  <span class="token string">&#39;connector.ip&#39;</span>                 <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</span>
  <span class="token string">&#39;connector.port&#39;</span>               <span class="token operator">=</span> <span class="token string">&#39;6667&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建同步任务时需要配置 PipeId 以及三个插件部分的参数：</strong></p>`,16),v=n("thead",null,[n("tr",null,[n("th",null,"配置项"),n("th",null,"说明"),n("th",null,"是否必填"),n("th",null,"默认实现"),n("th",null,"默认实现说明"),n("th",null,"是否允许自定义实现")])],-1),m=n("td",null,"PipeId",-1),k=n("td",null,"全局唯一标定一个同步任务的名称",-1),b=n("td",null,"-",-1),g=n("td",null,"-",-1),T=n("td",null,"-",-1),I=n("tr",null,[n("td",null,"extractor"),n("td",null,"Pipe Extractor 插件，负责在数据库底层抽取同步数据"),n("td",null,"选填"),n("td",null,"iotdb-extractor"),n("td",null,"将数据库的全量历史数据和后续到达的实时数据接入同步任务"),n("td",null,"否")],-1),P=n("td",null,"processor",-1),x=n("td",null,"Pipe Processor 插件，负责处理数据",-1),E=n("td",null,"选填",-1),f=n("td",null,"do-nothing-processor",-1),y=n("td",null,"对传入的数据不做任何处理",-1),_=n("td",null,"connector",-1),D=n("td",null,"Pipe Connector 插件，负责发送数据",-1),B=n("td",null,"-",-1),q=n("td",null,"-",-1),S=o(`<p>示例中，使用了 iotdb-extractor、do-nothing-processor 和 iotdb-thrift-connector 插件构建数据同步任务。IoTDB 还内置了其他的数据同步插件，<strong>请查看“系统预置数据同步插件”一节</strong>。</p><p><strong>一个最简的 CREATE PIPE 语句示例如下：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> PIPE <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span> <span class="token comment">-- PipeId 是能够唯一标定任务任务的名字</span>
<span class="token keyword">WITH</span> CONNECTOR <span class="token punctuation">(</span>
  <span class="token comment">-- IoTDB 数据发送插件，目标端为 IoTDB</span>
  <span class="token string">&#39;connector&#39;</span>      <span class="token operator">=</span> <span class="token string">&#39;iotdb-thrift-connector&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</span>
  <span class="token string">&#39;connector.ip&#39;</span>   <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">-- 目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</span>
  <span class="token string">&#39;connector.port&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;6667&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其表达的语义是：将本数据库实例中的全量历史数据和后续到达的实时数据，同步到目标为 127.0.0.1:6667 的 IoTDB 实例上。</p><p><strong>注意：</strong></p><ul><li><p>EXTRACTOR 和 PROCESSOR 为选填配置，若不填写配置参数，系统则会采用相应的默认实现</p></li><li><p>CONNECTOR 为必填配置，需要在 CREATE PIPE 语句中声明式配置</p></li><li><p>CONNECTOR 具备自复用能力。对于不同的任务，如果他们的 CONNECTOR 具备完全相同 KV 属性的（所有属性的 key 对应的 value 都相同），<strong>那么系统最终只会创建一个 CONNECTOR 实例</strong>，以实现对连接资源的复用。</p><ul><li>例如，有下面 pipe1, pipe2 两个任务的声明：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> PIPE pipe1
<span class="token keyword">WITH</span> CONNECTOR <span class="token punctuation">(</span>
  <span class="token string">&#39;connector&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;iotdb-thrift-connector&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;connector.thrift.host&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;connector.thrift.port&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;9999&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">CREATE</span> PIPE pipe2
<span class="token keyword">WITH</span> CONNECTOR <span class="token punctuation">(</span>
  <span class="token string">&#39;connector&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;iotdb-thrift-connector&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;connector.thrift.port&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;9999&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;connector.thrift.host&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>因为它们对 CONNECTOR 的声明完全相同（<strong>即使某些属性声明时的顺序不同</strong>），所以框架会自动对它们声明的 CONNECTOR 进行复用，最终 pipe1, pipe2 的CONNECTOR 将会是同一个实例。</li></ul></li><li><p>请不要构建出包含数据循环同步的应用场景（会导致无限循环）：</p><ul><li>IoTDB A -&gt; IoTDB B -&gt; IoTDB A</li><li>IoTDB A -&gt; IoTDB A</li></ul></li></ul><h3 id="启动任务" tabindex="-1"><a class="header-anchor" href="#启动任务"><span>启动任务</span></a></h3><p>CREATE PIPE 语句成功执行后，任务相关实例会被创建，但整个任务的运行状态会被置为 STOPPED，即任务不会立刻处理数据。</p><p>可以使用 START PIPE 语句使任务开始处理数据：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">START</span> PIPE <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="停止任务" tabindex="-1"><a class="header-anchor" href="#停止任务"><span>停止任务</span></a></h3><p>使用 STOP PIPE 语句使任务停止处理数据：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>STOP PIPE <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除任务" tabindex="-1"><a class="header-anchor" href="#删除任务"><span>删除任务</span></a></h3><p>使用 DROP PIPE 语句使任务停止处理数据（当任务状态为 RUNNING 时），然后删除整个任务同步任务：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> PIPE <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用户在删除任务前，不需要执行 STOP 操作。</p><h3 id="展示任务" tabindex="-1"><a class="header-anchor" href="#展示任务"><span>展示任务</span></a></h3><p>使用 SHOW PIPES 语句查看所有任务：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> PIPES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">-----------+-----------------------+-------+-------------+-------------+-------------+----------------+</span>
<span class="token operator">|</span>         ID<span class="token operator">|</span>          CreationTime <span class="token operator">|</span>  State<span class="token operator">|</span>PipeExtractor<span class="token operator">|</span>PipeProcessor<span class="token operator">|</span>PipeConnector<span class="token operator">|</span>ExceptionMessage<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+-----------------------+-------+-------------+-------------+-------------+----------------+</span>
<span class="token operator">|</span>iotdb<span class="token operator">-</span>kafka<span class="token operator">|</span><span class="token number">2022</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">30</span>T20:<span class="token number">58</span>:<span class="token number">30.689</span><span class="token operator">|</span>RUNNING<span class="token operator">|</span>          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span>          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span>          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span>            None<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+-----------------------+-------+-------------+-------------+-------------+----------------+</span>
<span class="token operator">|</span>iotdb<span class="token operator">-</span>iotdb<span class="token operator">|</span><span class="token number">2022</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">31</span>T12:<span class="token number">55</span>:<span class="token number">28.129</span><span class="token operator">|</span>STOPPED<span class="token operator">|</span>          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span>          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span>          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span> TException: <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------+-----------------------+-------+-------------+-------------+-------------+----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>&lt;PipeId&gt;</code> 指定想看的某个同步任务状态：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> PIPE <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您也可以通过 where 子句，判断某个 &lt;PipeId&gt; 使用的 Pipe Connector 被复用的情况。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> PIPES
<span class="token keyword">WHERE</span> CONNECTOR USED <span class="token keyword">BY</span> <span class="token operator">&lt;</span>PipeId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任务运行状态迁移" tabindex="-1"><a class="header-anchor" href="#任务运行状态迁移"><span>任务运行状态迁移</span></a></h3><p>一个数据同步 pipe 在其被管理的生命周期中会经过多种状态：</p><ul><li><strong>STOPPED：</strong> pipe 处于停止运行状态。当管道处于该状态时，有如下几种可能： <ul><li>当一个 pipe 被成功创建之后，其初始状态为暂停状态</li><li>用户手动将一个处于正常运行状态的 pipe 暂停，其状态会被动从 RUNNING 变为 STOPPED</li><li>当一个 pipe 运行过程中出现无法恢复的错误时，其状态会自动从 RUNNING 变为 STOPPED</li></ul></li><li><strong>RUNNING：</strong> pipe 正在正常工作</li><li><strong>DROPPED：</strong> pipe 任务被永久删除</li></ul><p>下图表明了所有状态以及状态的迁移：</p><figure><img src="https://alioss.timecho.com/docs/img/状态迁移图.png" alt="状态迁移图" tabindex="0" loading="lazy"><figcaption>状态迁移图</figcaption></figure><h2 id="系统预置数据同步插件" tabindex="-1"><a class="header-anchor" href="#系统预置数据同步插件"><span>系统预置数据同步插件</span></a></h2><h3 id="查看预置插件" tabindex="-1"><a class="header-anchor" href="#查看预置插件"><span>查看预置插件</span></a></h3><p>用户可以按需查看系统中的插件。查看插件的语句如图所示。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> PIPEPLUGINS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="预置-extractor-插件" tabindex="-1"><a class="header-anchor" href="#预置-extractor-插件"><span>预置 extractor 插件</span></a></h3><h4 id="iotdb-extractor" tabindex="-1"><a class="header-anchor" href="#iotdb-extractor"><span>iotdb-extractor</span></a></h4><p>作用：抽取 IoTDB 内部的历史或实时数据进入 pipe。</p><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>required or optional with default</th></tr></thead><tbody><tr><td>extractor</td><td>iotdb-extractor</td><td>String: iotdb-extractor</td><td>required</td></tr><tr><td>extractor.pattern</td><td>用于筛选时间序列的路径前缀</td><td>String: 任意的时间序列前缀</td><td>optional: root</td></tr><tr><td>extractor.history.enable</td><td>是否同步历史数据</td><td>Boolean: true, false</td><td>optional: true</td></tr><tr><td>extractor.history.start-time</td><td>同步历史数据的开始 event time，包含 start-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>optional: Long.MIN_VALUE</td></tr><tr><td>extractor.history.end-time</td><td>同步历史数据的结束 event time，包含 end-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>optional: Long.MAX_VALUE</td></tr><tr><td>extractor.realtime.enable</td><td>是否同步实时数据</td><td>Boolean: true, false</td><td>optional: true</td></tr></tbody></table>`,39),N=n("p",null,[t("🚫 "),n("strong",null,"extractor.pattern 参数说明")],-1),C={href:"https://iotdb.apache.org/zh/Download/#_1-0-%E7%89%88%E6%9C%AC%E4%B8%8D%E5%85%BC%E5%AE%B9%E7%9A%84%E8%AF%AD%E6%B3%95%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},O=o("<li><p>在底层实现中，当检测到 pattern 为 root（默认值）时，同步效率较高，其他任意格式都将降低性能</p></li><li><p>路径前缀不需要能够构成完整的路径。例如，当创建一个包含参数为 &#39;extractor.pattern&#39;=&#39;root.aligned.1&#39; 的 pipe 时：</p><ul><li>root.aligned.1TS</li><li>root.aligned.1TS.`1`</li><li>root.aligned.100TS</li></ul><p>的数据会被同步；</p><ul><li>root.aligned.`1`</li><li>root.aligned.`123`</li></ul><p>的数据不会被同步。</p></li>",2),R=o(`<blockquote><p>❗️<strong>extractor.history 的 start-time，end-time 参数说明</strong></p><ul><li>start-time，end-time 应为 ISO 格式，例如 2011-12-03T10:15:30 或 2011-12-03T10:15:30+01:00</li></ul></blockquote><blockquote><p>✅ <strong>一条数据从生产到落库 IoTDB，包含两个关键的时间概念</strong></p><ul><li><strong>event time：</strong> 数据实际生产时的时间（或者数据生产系统给数据赋予的生成时间，是数据点中的时间项），也称为事件时间。</li><li><strong>arrival time：</strong> 数据到达 IoTDB 系统内的时间。</li></ul><p>我们常说的乱序数据，指的是数据到达时，其 <strong>event time</strong> 远落后于当前系统时间（或者已经落库的最大 <strong>event time</strong>）的数据。另一方面，不论是乱序数据还是顺序数据，只要它们是新到达系统的，那它们的 <strong>arrival time</strong> 都是会随着数据到达 IoTDB 的顺序递增的。</p></blockquote><blockquote><p>💎 <strong>iotdb-extractor 的工作可以拆分成两个阶段</strong></p><ol><li>历史数据抽取：所有 <strong>arrival time</strong> &lt; 创建 pipe 时<strong>当前系统时间</strong>的数据称为历史数据</li><li>实时数据抽取：所有 <strong>arrival time</strong> &gt;= 创建 pipe 时<strong>当前系统时间</strong>的数据称为实时数据</li></ol><p>历史数据传输阶段和实时数据传输阶段，<strong>两阶段串行执行，只有当历史数据传输阶段完成后，才执行实时数据传输阶段。</strong></p><p>用户可以指定 iotdb-extractor 进行：</p><ul><li>历史数据抽取（<code>&#39;extractor.history.enable&#39; = &#39;true&#39;</code>, <code>&#39;extractor.realtime.enable&#39; = &#39;false&#39;</code> ）</li><li>实时数据抽取（<code>&#39;extractor.history.enable&#39; = &#39;false&#39;</code>, <code>&#39;extractor.realtime.enable&#39; = &#39;true&#39;</code> ）</li><li>全量数据抽取（<code>&#39;extractor.history.enable&#39; = &#39;true&#39;</code>, <code>&#39;extractor.realtime.enable&#39; = &#39;true&#39;</code> ）</li><li>禁止同时设置 <code>extractor.history.enable</code> 和 <code>extractor.realtime.enable</code> 为 <code>false</code></li></ul></blockquote><h3 id="预置-processor-插件" tabindex="-1"><a class="header-anchor" href="#预置-processor-插件"><span>预置 processor 插件</span></a></h3><h4 id="do-nothing-processor" tabindex="-1"><a class="header-anchor" href="#do-nothing-processor"><span>do-nothing-processor</span></a></h4><p>作用：不对 extractor 传入的事件做任何的处理。</p><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>required or optional with default</th></tr></thead><tbody><tr><td>processor</td><td>do-nothing-processor</td><td>String: do-nothing-processor</td><td>required</td></tr></tbody></table><h3 id="预置-connector-插件" tabindex="-1"><a class="header-anchor" href="#预置-connector-插件"><span>预置 connector 插件</span></a></h3><h4 id="iotdb-thrift-sync-connector-别名-iotdb-thrift-connector" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-sync-connector-别名-iotdb-thrift-connector"><span>iotdb-thrift-sync-connector（别名：iotdb-thrift-connector）</span></a></h4><p>作用：主要用于 IoTDB（v1.2.0+）与 IoTDB（v1.2.0+）之间的数据传输。<br> 使用 Thrift RPC 框架传输数据，单线程 blocking IO 模型。<br> 保证接收端 apply 数据的顺序与发送端接受写入请求的顺序一致。</p><p>限制：源端 IoTDB 与 目标端 IoTDB 版本都需要在 v1.2.0+。</p><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>required or optional with default</th></tr></thead><tbody><tr><td>connector</td><td>iotdb-thrift-connector 或 iotdb-thrift-sync-connector</td><td>String: iotdb-thrift-connector 或 iotdb-thrift-sync-connector</td><td>required</td></tr><tr><td>connector.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</td><td>String</td><td>optional: 与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</td><td>Integer</td><td>optional: 与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>optional: 与 connector.ip:connector.port 任选其一填写</td></tr></tbody></table><blockquote><p>📌 请确保接收端已经创建了发送端的所有时间序列，或是开启了自动创建元数据，否则将会导致 pipe 运行失败。</p></blockquote><h4 id="iotdb-thrift-async-connector" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-async-connector"><span>iotdb-thrift-async-connector</span></a></h4><p>作用：主要用于 IoTDB（v1.2.0+）与 IoTDB（v1.2.0+）之间的数据传输。<br> 使用 Thrift RPC 框架传输数据，多线程 async non-blocking IO 模型，传输性能高，尤其适用于目标端为分布式时的场景。<br> 不保证接收端 apply 数据的顺序与发送端接受写入请求的顺序一致，但是保证数据发送的完整性（at-least-once）。</p><p>限制：源端 IoTDB 与 目标端 IoTDB 版本都需要在 v1.2.0+。</p><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>required or optional with default</th></tr></thead><tbody><tr><td>connector</td><td>iotdb-thrift-async-connector</td><td>String: iotdb-thrift-async-connector</td><td>required</td></tr><tr><td>connector.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</td><td>String</td><td>optional: 与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</td><td>Integer</td><td>optional: 与 connector.node-urls 任选其一填写</td></tr><tr><td>connector.node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url</td><td>String。例：&#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>optional: 与 connector.ip:connector.port 任选其一填写</td></tr></tbody></table><blockquote><p>📌 请确保接收端已经创建了发送端的所有时间序列，或是开启了自动创建元数据，否则将会导致 pipe 运行失败。</p></blockquote><h4 id="iotdb-legacy-pipe-connector" tabindex="-1"><a class="header-anchor" href="#iotdb-legacy-pipe-connector"><span>iotdb-legacy-pipe-connector</span></a></h4><p>作用：主要用于 IoTDB（v1.2.0+）向更低版本的 IoTDB 传输数据，使用 v1.2.0 版本前的数据同步（Sync）协议。<br> 使用 Thrift RPC 框架传输数据。单线程 sync blocking IO 模型，传输性能较弱。</p><p>限制：源端 IoTDB 版本需要在 v1.2.0+，目标端 IoTDB 版本可以是 v1.2.0+、v1.1.x（更低版本的 IoTDB 理论上也支持，但是未经测试）。</p><p>注意：理论上 v1.2.0+ IoTDB 可作为 v1.2.0 版本前的任意版本的数据同步（Sync）接收端。</p><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>required or optional with default</th></tr></thead><tbody><tr><td>connector</td><td>iotdb-legacy-pipe-connector</td><td>String: iotdb-legacy-pipe-connector</td><td>required</td></tr><tr><td>connector.ip</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 ip</td><td>String</td><td>required</td></tr><tr><td>connector.port</td><td>目标端 IoTDB 其中一个 DataNode 节点的数据服务 port</td><td>Integer</td><td>required</td></tr><tr><td>connector.user</td><td>目标端 IoTDB 的用户名，注意该用户需要支持数据写入、TsFile Load 的权限</td><td>String</td><td>optional: root</td></tr><tr><td>connector.password</td><td>目标端 IoTDB 的密码，注意该用户需要支持数据写入、TsFile Load 的权限</td><td>String</td><td>optional: root</td></tr><tr><td>connector.version</td><td>目标端 IoTDB 的版本，用于伪装自身实际版本，绕过目标端的版本一致性检查</td><td>String</td><td>optional: 1.1</td></tr></tbody></table><blockquote><p>📌 请确保接收端已经创建了发送端的所有时间序列，或是开启了自动创建元数据，否则将会导致 pipe 运行失败。</p></blockquote><h4 id="do-nothing-connector" tabindex="-1"><a class="header-anchor" href="#do-nothing-connector"><span>do-nothing-connector</span></a></h4><p>作用：不对 processor 传入的事件做任何的处理。</p><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>required or optional with default</th></tr></thead><tbody><tr><td>connector</td><td>do-nothing-connector</td><td>String: do-nothing-connector</td><td>required</td></tr></tbody></table><h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理"><span>权限管理</span></a></h2><table><thead><tr><th>权限名称</th><th>描述</th></tr></thead><tbody><tr><td>CREATE_PIPE</td><td>注册任务。路径无关。</td></tr><tr><td>START_PIPE</td><td>开启任务。路径无关。</td></tr><tr><td>STOP_PIPE</td><td>停止任务。路径无关。</td></tr><tr><td>DROP_PIPE</td><td>卸载任务。路径无关。</td></tr><tr><td>SHOW_PIPES</td><td>查询任务。路径无关。</td></tr></tbody></table><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2><p>在 iotdb-common.properties 中：</p><div class="language-Properties line-numbers-mode" data-ext="Properties" data-title="Properties"><pre class="language-Properties"><code>####################
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性"><span>功能特性</span></a></h2><h3 id="最少一次语义保证-at-least-once" tabindex="-1"><a class="header-anchor" href="#最少一次语义保证-at-least-once"><span>最少一次语义保证 <strong>at-least-once</strong></span></a></h3><p>数据同步功能向外部系统传输数据时，提供 at-least-once 的传输语义。在大部分场景下，同步功能可提供 exactly-once 保证，即所有数据被恰好同步一次。</p><p>但是在以下场景中，可能存在部分数据被同步多次 <strong>（断点续传）</strong> 的情况：</p><ul><li>临时的网络故障：某次数据传输请求失败后，系统会进行重试发送，直至到达最大尝试次数</li><li>Pipe 插件逻辑实现异常：插件运行中抛出错误，系统会进行重试发送，直至到达最大尝试次数</li><li>数据节点宕机、重启等导致的数据分区切主：分区变更完成后，受影响的数据会被重新传输</li><li>集群不可用：集群可用后，受影响的数据会重新传输</li></ul><h3 id="源端-数据写入与-pipe-处理、发送数据异步解耦" tabindex="-1"><a class="header-anchor" href="#源端-数据写入与-pipe-处理、发送数据异步解耦"><span>源端：数据写入与 Pipe 处理、发送数据异步解耦</span></a></h3><p>数据同步功能中，数据传输采用的是异步复制模式。</p><p>数据同步与写入操作完全脱钩，不存在对写入关键路径的影响。该机制允许框架在保证持续数据同步的前提下，保持时序数据库的写入速度。</p><h3 id="源端-高可用集群部署时-pipe-服务高可用" tabindex="-1"><a class="header-anchor" href="#源端-高可用集群部署时-pipe-服务高可用"><span>源端：高可用集群部署时，Pipe 服务高可用</span></a></h3><p>当发送端 IoTDB 为高可用集群部署模式时，数据同步服务也将是高可用的。 数据同步框架将监控每个数据节点的数据同步进度，并定期做轻量级的分布式一致性快照以保存同步状态。</p><ul><li>当发送端集群某数据节点宕机时，数据同步框架可以利用一致性快照以及保存在副本上的数据快速恢复同步，以此实现数据同步服务的高可用。</li><li>当发送端集群整体宕机并重启时，数据同步框架也能使用快照恢复同步服务。</li></ul>`,43);function A(w,U){const e=i("font"),l=i("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("strong",null,[t("IoTDB 数据同步功能可以将 IoTDB 的数据传输到另一个数据平台，我们将"),s(e,{color:"RED"},{default:a(()=>[t("一个数据同步任务称为 Pipe")]),_:1}),t("。")])]),h,n("table",null,[v,n("tbody",null,[n("tr",null,[m,k,n("td",null,[s(e,{color:"red"},{default:a(()=>[t("必填")]),_:1})]),b,g,T]),I,n("tr",null,[P,x,E,f,y,n("td",null,[s(e,{color:"red"},{default:a(()=>[t("是")]),_:1})])]),n("tr",null,[_,D,n("td",null,[s(e,{color:"red"},{default:a(()=>[t("必填")]),_:1})]),B,q,n("td",null,[s(e,{color:"red"},{default:a(()=>[t("是")]),_:1})])])])]),S,n("blockquote",null,[N,n("ul",null,[n("li",null,[n("p",null,[t("Pattern 需用反引号修饰不合法字符或者是不合法路径节点，例如如果希望筛选 root.`a@b` 或者 root.`123`，应设置 pattern 为 root.`a@b` 或者 root.`123`（具体参考 "),n("a",C,[t("单双引号和反引号的使用时机"),s(l)]),t("）")])]),O])]),R])}const V=r(d,[["render",A],["__file","Data-Sync.html.vue"]]),W=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/User-Manual/Data-Sync.html","title":"IoTDB 数据同步","lang":"zh-CN","frontmatter":{"description":"IoTDB 数据同步 IoTDB 数据同步功能可以将 IoTDB 的数据传输到另一个数据平台，我们将。 一个 Pipe 包含三个子任务（插件）： 抽取（Extract） 处理（Process） 发送（Connect） Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。 在一个 Pipe 中，上述的子任务分别由三种插件执行实...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/User-Manual/Data-Sync.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/User-Manual/Data-Sync.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"IoTDB 数据同步"}],["meta",{"property":"og:description","content":"IoTDB 数据同步 IoTDB 数据同步功能可以将 IoTDB 的数据传输到另一个数据平台，我们将。 一个 Pipe 包含三个子任务（插件）： 抽取（Extract） 处理（Process） 发送（Connect） Pipe 允许用户自定义三个子任务的处理逻辑，通过类似 UDF 的方式处理数据。 在一个 Pipe 中，上述的子任务分别由三种插件执行实..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E6%B5%81%E5%A4%84%E7%90%86%E5%BC%95%E6%93%8E.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-08T07:45:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T07:45:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoTDB 数据同步\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E6%B5%81%E5%A4%84%E7%90%86%E5%BC%95%E6%93%8E.jpeg\\",\\"https://alioss.timecho.com/docs/img/%E7%8A%B6%E6%80%81%E8%BF%81%E7%A7%BB%E5%9B%BE.png\\"],\\"dateModified\\":\\"2024-04-08T07:45:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"同步任务管理","slug":"同步任务管理","link":"#同步任务管理","children":[{"level":3,"title":"创建同步任务","slug":"创建同步任务","link":"#创建同步任务","children":[]},{"level":3,"title":"启动任务","slug":"启动任务","link":"#启动任务","children":[]},{"level":3,"title":"停止任务","slug":"停止任务","link":"#停止任务","children":[]},{"level":3,"title":"删除任务","slug":"删除任务","link":"#删除任务","children":[]},{"level":3,"title":"展示任务","slug":"展示任务","link":"#展示任务","children":[]},{"level":3,"title":"任务运行状态迁移","slug":"任务运行状态迁移","link":"#任务运行状态迁移","children":[]}]},{"level":2,"title":"系统预置数据同步插件","slug":"系统预置数据同步插件","link":"#系统预置数据同步插件","children":[{"level":3,"title":"查看预置插件","slug":"查看预置插件","link":"#查看预置插件","children":[]},{"level":3,"title":"预置 extractor 插件","slug":"预置-extractor-插件","link":"#预置-extractor-插件","children":[]},{"level":3,"title":"预置 processor 插件","slug":"预置-processor-插件","link":"#预置-processor-插件","children":[]},{"level":3,"title":"预置 connector 插件","slug":"预置-connector-插件","link":"#预置-connector-插件","children":[]}]},{"level":2,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[]},{"level":2,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]},{"level":2,"title":"功能特性","slug":"功能特性","link":"#功能特性","children":[{"level":3,"title":"最少一次语义保证 at-least-once","slug":"最少一次语义保证-at-least-once","link":"#最少一次语义保证-at-least-once","children":[]},{"level":3,"title":"源端：数据写入与 Pipe 处理、发送数据异步解耦","slug":"源端-数据写入与-pipe-处理、发送数据异步解耦","link":"#源端-数据写入与-pipe-处理、发送数据异步解耦","children":[]},{"level":3,"title":"源端：高可用集群部署时，Pipe 服务高可用","slug":"源端-高可用集群部署时-pipe-服务高可用","link":"#源端-高可用集群部署时-pipe-服务高可用","children":[]}]}],"git":{"createdTime":1693918505000,"updatedTime":1712562344000,"contributors":[{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":2},{"name":"Steve Yurong Su","email":"rong@apache.org","commits":1}]},"readingTime":{"minutes":14.79,"words":4436},"filePathRelative":"zh/UserGuide/V1.2.x/User-Manual/Data-Sync.md","localizedDate":"2023年9月5日","autoDesc":true}');export{V as comp,W as data};
