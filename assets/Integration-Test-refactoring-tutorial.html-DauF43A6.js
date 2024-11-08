import{_ as s,c as a,b as t,o as p}from"./app-ED5DzO24.js";const e={};function c(o,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="集成测试开发者文档" tabindex="-1"><a class="header-anchor" href="#集成测试开发者文档"><span>集成测试开发者文档</span></a></h1><p><strong>集成测试</strong>是软件测试中的一个阶段。在该阶段中，各个软件模块被组合起来作为一个整体进行测试。进行集成测试是为了评估某系统或某组件是否符合指定的功能需求。</p><h2 id="apache-iotdb-集成测试规范" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-集成测试规范"><span>Apache IoTDB 集成测试规范</span></a></h2><h3 id="apache-iotdb-集成测试的环境" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-集成测试的环境"><span>Apache IoTDB 集成测试的环境</span></a></h3><p>Apache IoTDB 集成测试的环境一共有3种，分别为<strong>本地单机测试环境、本地集群测试环境和远程测试环境。</strong> Apache IOTDB 的集群测试需要在其中的1种或多种环境下完成。对于这三类环境的说明如下：</p><ol><li>本地单机测试环境：该环境用于完成本地的 Apache IoTDB 单机版的集成测试。若需要变更该环境的具体配置，需要在 IoTDB 实例启动前替换相应的配置文件，再启动 IoTDB 并进行测试。</li><li>本地集群测试环境：该环境用于完成本地的 Apache IoTDB 分布式版（伪分布式）的集成测试。若需要变更该环境的具体配置，需要在 IoTDB 集群启动前替换相应的配置文件，再启动 IoTDB 集群并进行测试。</li><li>远程测试环境：该环境用于测试远程 Apache IoTDB 的功能，连接的 IoTDB 实例可能是一个单机版的实例，也可以是远程集群的某一个节点。远程测试环境的具体配置的修改受到限制，暂不支持在测试时修改。<br> 集成测试开发者在编写测试程序时需要指定这三种环境的1种或多种。具体指定方法见后文。</li></ol><h3 id="黑盒测试" tabindex="-1"><a class="header-anchor" href="#黑盒测试"><span>黑盒测试</span></a></h3><p><strong>黑盒测试</strong> 是一种软件测试方法，它检验程序的功能，而不考虑其内部结构或工作方式。开发者不需要了解待测程序的内部逻辑即可完成测试。<strong>Apache IoTDB 的集成测试以黑盒测试的方式进行。通过 JDBC 或 Session API 的接口实现测试输入的用例即为黑盒测试用例。</strong> 因此，测试用例的输出验证也应该通过 JDBC 或 Session API 的返回结果实现。</p><h3 id="集成测试的步骤" tabindex="-1"><a class="header-anchor" href="#集成测试的步骤"><span>集成测试的步骤</span></a></h3><p>集成测试的步骤主要分为三步，即 (1) 构建测试类和标注测试环境、(2) 设置测试前的准备工作以及测试后的清理工作以及 (3) 实现集成测试逻辑。如果需要测试非默认环境下的 IoTDB，还需要修改 IoTDB 的配置，修改方法对应小结的第4部分。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/integration-test/pic/step.svg"><h4 id="_1-集成测试类和注解" tabindex="-1"><a class="header-anchor" href="#_1-集成测试类和注解"><span>1. 集成测试类和注解</span></a></h4><p>构建的集成测试类时，开发者需要在 Apache IoTDB 的 <a href="https://github.com/apache/iotdb/tree/master/integration-test" target="_blank" rel="noopener noreferrer">integration-test</a> 模块中创建测试类。类名应当能够精简准确地表述该集成测试的目的。除用于服务其他测试用例的类外，含集成测试用例用于测试 Apache IoTDB 功能的类，应当命名为“功能+IT”。例如，用于测试IoTDB自动注册元数据功能的集成测试命名为“<span style="color:green;">IoTDBAutoCreateSchema</span><span style="color:red;">IT</span>”。</p><ul><li>Category 注解：<strong>在构建集成测试类时，需要显式地通过引入<code>@Category</code>注明测试环境</strong> ，测试环境用<code>LocalStandaloneIT.class</code>、<code>ClusterIT.class</code> 和 <code>RemoteIT.class</code>来表示，分别与“Apache IoTDB 集成测试的环境”中的本地单机测试环境、本地集群测试环境和远程测试环境对应。标签内是测试环境的集合，可以包含多个元素，表示在多种环境下分别测试。<strong>一般情况下，标签<code>LocalStandaloneIT.class</code> 和 <code>ClusterIT.class</code> 是必须添加的。</strong> 当某些功能仅支持单机版 IoTDB 时可以只保留<code>LocalStandaloneIT.class</code>。</li><li>RunWith 注解： 每一个集成测试类上都需要添加 <code>@RunWith(IoTDBTestRunner.class)</code> 标签。</li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// 给 IoTDBAliasIT 测试类加标签，分别在本地单机测试环境、</span></span>
<span class="line"><span class="token comment">// 本地集群测试环境和远程测试环境完成测试。</span></span>
<span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">IoTDBTestRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBAliasIT</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 给 IoTDBAlignByDeviceIT 测试类加标签，分别在本地单机</span></span>
<span class="line"><span class="token comment">// 测试环境和本地集群测试环境完成测试。</span></span>
<span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">IoTDBTestRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBAlignByDeviceIT</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-设置测试前的准备工作以及测试后的清理工作" tabindex="-1"><a class="header-anchor" href="#_2-设置测试前的准备工作以及测试后的清理工作"><span>2. 设置测试前的准备工作以及测试后的清理工作</span></a></h4><p>测试前的准备工作包括启动 IoTDB（单机或集群）实例和测试用的数据准备。这些逻辑在setUp方法内实现。其中setUp方法前需要添加<code>@BeforeClass</code> 或 <code>@Before</code> 标签，前者表示该方法为当前集成测试执行的第 1 个方法，并且在集成测试运行时只执行 1 次，后者表示在运行当前集成测试的每 1 个测试方法前，该方法都会被执行 1 次。</p><ul><li>IoTDB 实例启动通过调用工厂类来实现，即<code>EnvFactory.getEnv().initBeforeClass()</code>。</li><li>测试用的数据准备包括按测试需要提前注册 database 、注册时间序列、写入时间序列数据等。建议在测试类内实现单独的方法来准备数据，如insertData()。若需要写入多条数据，请使用批量写入的接口（JDBC中的executeBatch接口，或Session API 中的 insertRecords、insertTablets 等接口）。</li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@BeforeClass</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 启动 IoTDB 实例</span></span>
<span class="line">  <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initBeforeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 准备数据</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试后需要清理相关的环境，其中需要断开还没有关闭的连接。这些逻辑在 tearDown 方法内实现。其中 tearDown 方法前需要添加<code>@AfterClass</code> 或 <code>@After</code> 标签，前者表示该方法为当前集成测试执行的最后一个方法，并且在集成测试运行时只执行 1 次，后者表示在运行当前集成测试的每一个测试方法后，该方法都会被执行 1 次。</p><ul><li>如果 IoTDB 连接以测试类成员变量的形式声明，并且在测试后没有断开连接，则需要在 tearDown 方法内显式断开。</li><li>IoTDB 环境的清理通过调用工厂类来实现，即<code>EnvFactory.getEnv().cleanAfterClass()</code>。</li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@AfterClass</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 断开连接等</span></span>
<span class="line">  <span class="token comment">// 清理 IoTDB 实例的环境</span></span>
<span class="line">  <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cleanAfterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-实现集成测试逻辑" tabindex="-1"><a class="header-anchor" href="#_3-实现集成测试逻辑"><span>3. 实现集成测试逻辑</span></a></h4><p>Apache IoTDB 的集成测试以黑盒测试的方式进行，测试方法的名称为“测试的功能点+Test”，例如“<span style="color:green;">selectWithAlias</span><span style="color:red;">Test</span>”。测试通过 JDBC 或 Session API 的接口来完成。</p><p>1、使用JDBC接口</p><p>使用JDBC接口时，建议将连接建立在 try 语句内，以这种方式建立的连接无需在 tearDown 方法内关闭。连接需要通过工厂类来建立，即<code>EnvFactory.getEnv().getConnection()</code>，不要指定具体的 ip 地址或端口号。示例代码如下所示。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@Test</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">someFunctionTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// 执行相应语句并做测试</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li><strong>查询操作必须使用<code>executeQuery()</code>方法，返回ResultSet；</strong> 对于<strong>更新数据库等无返回值的操作，必须使用<code>execute()</code>方法。</strong> 示例代码如下。</li></ul><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@Test</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exampleTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用 execute() 方法设置存储组</span></span>
<span class="line">    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;CREATE DATABASE root.sg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 使用 executeQuery() 方法查询存储组</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;show databases&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> storageGroupPath <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;root.sg&quot;</span><span class="token punctuation">,</span> storageGroupPath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&quot;This ResultSet is empty.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、使用 Session API</p><p>目前暂不支持使用 Session API 来做集成测试。</p><p>3、测试方法的环境标签<br> 对于测试方法，开发者也可以指定特定的测试环境，只需要在对应的测试方法前注明环境即可。值得注意的是，有额外测试环境标注的用例，不但会在所指定的环境中进行测试，还会在该用例隶属的测试类所对应的环境中进行测试。示例代码如下。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">IoTDBTestRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBExampleIT</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"> <span class="token comment">// 该用例只会在本地单机测试环境中进行测试</span></span>
<span class="line"> <span class="token annotation punctuation">@Test</span></span>
<span class="line"> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">theStandaloneCaseTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"> <span class="token comment">// 该用例会在本地单机测试环境、本地集群测试环境和远程测试环境中进行测试</span></span>
<span class="line"> <span class="token annotation punctuation">@Test</span></span>
<span class="line"> <span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ClusterIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">theAllEnvCaseTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-测试中-iotdb-配置参数的修改" tabindex="-1"><a class="header-anchor" href="#_4-测试中-iotdb-配置参数的修改"><span>4. 测试中 IoTDB 配置参数的修改</span></a></h4><p>有时，为了测试 IoTDB 在特定配置条件下的功能需要更改其配置。由于远程的机器配置无法修改，因此，需要更改配置的测试不支持远程测试环境，只支持本地单机测试环境和本地集群测试环境。配置文件的修改需要在setUp方法中实现，在<code>EnvFactory.getEnv().initBeforeClass()</code>之前执行，应当使用 ConfigFactory 提供的方法来实现。在 tearDown 方法内，需要将 IoTDB 的配置恢复到原默认设置，这一步在环境清理（<code>EnvFactory.getEnv().cleanAfterTest()</code>）后通过调用ConfigFactory提供的方法来执行。实例代码如下。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">IoTDBTestRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterIT</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBAlignedSeriesQueryIT</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> enableSeqSpaceCompaction<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> enableUnseqSpaceCompaction<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> enableCrossSpaceCompaction<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token annotation punctuation">@BeforeClass</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取默认配置</span></span>
<span class="line">    enableSeqSpaceCompaction <span class="token operator">=</span> <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEnableSeqSpaceCompaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    enableUnseqSpaceCompaction <span class="token operator">=</span> <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEnableUnseqSpaceCompaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    enableCrossSpaceCompaction <span class="token operator">=</span> <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEnableCrossSpaceCompaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 更新配置</span></span>
<span class="line">    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setEnableSeqSpaceCompaction</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setEnableUnseqSpaceCompaction</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setEnableCrossSpaceCompaction</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initBeforeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">AlignedWriteUtil</span><span class="token punctuation">.</span><span class="token function">insertData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token annotation punctuation">@AfterClass</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cleanAfterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 恢复为默认配置</span></span>
<span class="line">    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setEnableSeqSpaceCompaction</span><span class="token punctuation">(</span>enableSeqSpaceCompaction<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setEnableUnseqSpaceCompaction</span><span class="token punctuation">(</span>enableUnseqSpaceCompaction<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setEnableCrossSpaceCompaction</span><span class="token punctuation">(</span>enableCrossSpaceCompaction<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h2><h3 id="ci-出错后查看日志的方法" tabindex="-1"><a class="header-anchor" href="#ci-出错后查看日志的方法"><span>CI 出错后查看日志的方法</span></a></h3><p>1、点击出错的测试对应的 Details</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/integration-test/pic/details.png"><p>2、查看和下载日志</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/integration-test/pic/download1.png"><p>也可以点击左上角的 summary 然后查看和下载其他错误日志。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/integration-test/pic/download2.png"><h3 id="运行集成测试的命令" tabindex="-1"><a class="header-anchor" href="#运行集成测试的命令"><span>运行集成测试的命令</span></a></h3><p>请参考 <a href="https://github.com/apache/iotdb/blob/master/integration-test/README.md" target="_blank" rel="noopener noreferrer">《Integration Test For the MPP Architecture》</a> 文档。</p>`,47)]))}const i=s(e,[["render",c],["__file","Integration-Test-refactoring-tutorial.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Integration-Test/Integration-Test-refactoring-tutorial.html","title":"集成测试开发者文档","lang":"zh-CN","frontmatter":{"description":"集成测试开发者文档 集成测试是软件测试中的一个阶段。在该阶段中，各个软件模块被组合起来作为一个整体进行测试。进行集成测试是为了评估某系统或某组件是否符合指定的功能需求。 Apache IoTDB 集成测试规范 Apache IoTDB 集成测试的环境 Apache IoTDB 集成测试的环境一共有3种，分别为本地单机测试环境、本地集群测试环境和远程测试...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集成测试开发者文档"}],["meta",{"property":"og:description","content":"集成测试开发者文档 集成测试是软件测试中的一个阶段。在该阶段中，各个软件模块被组合起来作为一个整体进行测试。进行集成测试是为了评估某系统或某组件是否符合指定的功能需求。 Apache IoTDB 集成测试规范 Apache IoTDB 集成测试的环境 Apache IoTDB 集成测试的环境一共有3种，分别为本地单机测试环境、本地集群测试环境和远程测试..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集成测试开发者文档\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Apache IoTDB 集成测试规范","slug":"apache-iotdb-集成测试规范","link":"#apache-iotdb-集成测试规范","children":[{"level":3,"title":"Apache IoTDB 集成测试的环境","slug":"apache-iotdb-集成测试的环境","link":"#apache-iotdb-集成测试的环境","children":[]},{"level":3,"title":"黑盒测试","slug":"黑盒测试","link":"#黑盒测试","children":[]},{"level":3,"title":"集成测试的步骤","slug":"集成测试的步骤","link":"#集成测试的步骤","children":[]}]},{"level":2,"title":"Q&A","slug":"q-a","link":"#q-a","children":[{"level":3,"title":"CI 出错后查看日志的方法","slug":"ci-出错后查看日志的方法","link":"#ci-出错后查看日志的方法","children":[]},{"level":3,"title":"运行集成测试的命令","slug":"运行集成测试的命令","link":"#运行集成测试的命令","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":8.62,"words":2586},"filePathRelative":"zh/UserGuide/V1.1.x/Integration-Test/Integration-Test-refactoring-tutorial.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,u as data};
