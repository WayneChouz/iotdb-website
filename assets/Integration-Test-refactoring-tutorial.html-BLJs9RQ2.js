import{_ as n,o as s,c as a,e as t}from"./app-DrPcRZG6.js";const e={},o=t(`<h1 id="集成测试" tabindex="-1"><a class="header-anchor" href="#集成测试"><span>集成测试</span></a></h1><h2 id="iotdb社区integration-test改造说明" tabindex="-1"><a class="header-anchor" href="#iotdb社区integration-test改造说明"><span>IoTDB社区Integration Test改造说明</span></a></h2><ul><li><p>步骤0. 前提须知</p><ul><li><strong>位置已移动</strong>；所有的Integration Test已被移动至单独的integration模块。</li><li><strong>测试用例必须打分类标签</strong>； <code>Category</code> 即测试分类标签，决定了该测试用例在哪套测试环境或流程中被测试。</li><li><strong>涉及测试环境的代码可能要重构</strong>；决定了该测试用例是否能被当前测试环境正确测试，需要根据相应的环境重构相应的代码。</li></ul></li><li><p>步骤1. 测试用例打标签</p><ul><li><p>在测试用例类或者测试用例方法前加上合适的<code>Category</code>，可以是任意期望的测试分类标签的集合。</p></li><li><p>真实样例，下面三个测试类的<code>Category</code>都是真实有效的，</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBAliasIT</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBAlignByDeviceIT</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBArithmeticIT</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>甚至，你还可以在测试方法级别加<code>Category</code>。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBExampleIT</span> <span class="token punctuation">{</span>

 <span class="token comment">// This case can ONLY test in environment of local.</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">theStandaloneCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// This case can test in environment of local, cluster and remote.</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">theAllEnvCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目前，所有测试用例至少要加上单机测试的测试分类，即<code>LocalStandaloneTest.class</code>。</p></li></ul></li><li><p>步骤2. 环境代码重构</p><ul><li><p>如果测试用例需要在Cluster或者Remote环境下被测试，那么必须对环境相关的代码作相应重构，如果是仅在LocalStandalone环境下测试，则只推荐修改。（不是所有的测试用例可以在Cluster或者Remote环境下被测试，因为受限于部分功能的语句比如本地文件操作，这些代码不能被重构。）</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">LocalStandalone</th><th style="text-align:center;">Cluster</th><th style="text-align:center;">Remote</th></tr></thead><tbody><tr><td style="text-align:left;">setUp and tearDown</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">getConnection</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">change config</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local file operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local descriptor operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">restart operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr></tbody></table></li><li><p><code>setUp</code> 和<code>tearDown</code> 方法内的重构，在Cluster和Remote环境下是必须更改的</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBAliasIT</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@BeforeClass</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// EnvironmentUtils.closeStatMonitor(); // orginal setup code</span>
    <span class="token comment">// EnvironmentUtils.envSetUp(); // orginal setup code</span>
    <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initBeforeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new initBeforeClass code</span>

    <span class="token function">insertData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@AfterClass</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// EnvironmentUtils.cleanEnv(); // orginal code</span>
    <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cleanAfterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new cleanAfterClass code</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>getConnection</code> 的重构，在Cluster和Remote环境下是必须更改</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">insertData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
    <span class="token comment">// Class.forName(Config.JDBC_DRIVER_NAME); // orginal connection code</span>
    <span class="token comment">// try (Connection connection =  </span>
    <span class="token comment">//         DriverManager.getConnection( </span>
    <span class="token comment">//             Config.IOTDB_URL_PREFIX + &quot;127.0.0.1:6667/&quot;, &quot;root&quot;, &quot;root&quot;);</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new code</span>
        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> sql <span class="token operator">:</span> sqls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更改配置的方法，在Cluster环境下是必须重构的。（由于目前Remote环境无法远程更改配置，更改配置的测试用例将不支持Remote环境下测试）</p><ul><li>在Cluster环境下，由于无法动态更改配置，只有环境init前的配置更改才有效。</li><li>重构已包含了大部分的配置更改，通过<code>ConfigFactory.getConfig()</code> 的方法可以进行链式更改。</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IoTDBCompleteIT</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> prevVirtualStorageGroupNum<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Before</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prevVirtualStorageGroupNum <span class="token operator">=</span>
        <span class="token class-name">IoTDBDescriptor</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getVirtualStorageGroupNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// IoTDBDescriptor.getInstance().getConfig().setVirtualStorageGroupNum(16); // orginal code</span>
    <span class="token class-name">ConfigFactory</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setVirtualStorageGroupNum</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new code</span>
    <span class="token class-name">EnvFactory</span><span class="token punctuation">.</span><span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initBeforeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>若配置项尚未在<code>ConfigFactory.getConfig()</code> 的方法中包含，需要在BaseConfig.java接口文件中定义，在StandaloneEnvConfig.java和ClusterEnvConfig.java中分别实现，这部分不是很常用，具体方法可以参考已实现的部分，目前暂不列出。</li></ul></li></ul></li></ul>`,3),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","Integration-Test-refactoring-tutorial.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html","title":"集成测试","lang":"zh-CN","frontmatter":{"description":"集成测试 IoTDB社区Integration Test改造说明 步骤0. 前提须知 位置已移动；所有的Integration Test已被移动至单独的integration模块。 测试用例必须打分类标签； Category 即测试分类标签，决定了该测试用例在哪套测试环境或流程中被测试。 涉及测试环境的代码可能要重构；决定了该测试用例是否能被当前测试环...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集成测试"}],["meta",{"property":"og:description","content":"集成测试 IoTDB社区Integration Test改造说明 步骤0. 前提须知 位置已移动；所有的Integration Test已被移动至单独的integration模块。 测试用例必须打分类标签； Category 即测试分类标签，决定了该测试用例在哪套测试环境或流程中被测试。 涉及测试环境的代码可能要重构；决定了该测试用例是否能被当前测试环..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集成测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"IoTDB社区Integration Test改造说明","slug":"iotdb社区integration-test改造说明","link":"#iotdb社区integration-test改造说明","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.07,"words":921},"filePathRelative":"zh/UserGuide/V0.13.x/Integration-Test/Integration-Test-refactoring-tutorial.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,d as data};
