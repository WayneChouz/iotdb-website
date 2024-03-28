import{_ as n,o as s,c as a,a as t,f as e}from"./app-dNeAgOFp.js";const o={},c=e(`<h1 id="integration-test-refactoring-tutorial" tabindex="-1"><a class="header-anchor" href="#integration-test-refactoring-tutorial" aria-hidden="true">#</a> Integration Test refactoring tutorial</h1><ul><li><p>Step 0. Prerequisites</p><ul><li><strong>IT Location has been moved</strong>; all Integration Tests have been moved to the integration module.</li><li><strong>Test case MUST label</strong>; the test classification label is the junit&#39;s <code>category</code>, which determines the test environment or process in which the test case is tested.</li><li><strong>Code related to the test environment MAY need to be refactored</strong>; this determines whether the current test environment can correctly test the test case. The corresponding statement needs to be refactored.</li></ul></li><li><p>Step 1. Labeling test cases</p><ul><li><p>Add the appropriate <code>Category</code> before the test case class or test case method, which can collect any desired test category labels.</p></li><li><p>The <code>Category</code> of the following three test categories are all real and effective,</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can also add <code>Category</code> at the test method level.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>At present, all test cases must at least add the <code>Category</code> of the stand-alone test, namely <code>LocalStandaloneTest.class</code>.</p></li></ul></li><li><p>Step 2. Environmental code refactoring</p><ul><li><p>If the test case needs to be tested in the Cluster or Remote environment, the environment-related code MUST be refactored accordingly. If it is only tested in the LocalStandalone environment, modifications are only recommended. (Not all test cases can be tested in the Cluster or Remote environment because statements that are limited by some functions, such as local file operations, cannot be refactored.)</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">LocalStandalone</th><th style="text-align:center;">Cluster</th><th style="text-align:center;">Remote</th></tr></thead><tbody><tr><td style="text-align:left;">setUp and tearDown</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">getConnection</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Must</td></tr><tr><td style="text-align:left;">change config</td><td style="text-align:center;">Recommend</td><td style="text-align:center;">Must</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local file operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">Local descriptor operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr><tr><td style="text-align:left;">restart operation</td><td style="text-align:center;">Won&#39;t change</td><td style="text-align:center;">Not support</td><td style="text-align:center;">Not support</td></tr></tbody></table></li><li><p>The <code>setUp</code> and <code>tearDown</code> methods must be refactored in the Cluster and Remote environment</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">RemoteTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The <code>getConnection</code> must be refactored in Cluster and Remote environments</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">insertData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The method of changing the IoTDB configuration must be refactored in the Cluster environment. (As the remote environment cannot change the configuration remotely at present, the test cases that change the configuration will not support testing in the remote environment)</p><ul><li>In the Cluster environment, as the configuration cannot be changed dynamically, only the configuration changes before the environment init are effective.</li><li>The refactoring has included most of the configuration changes, which can be changed through the method of <code>ConfigFactory.getConfig()</code>.</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Category</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">LocalStandaloneTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ClusterTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If the configuration item has not been included in the method of <code>ConfigFactory.getConfig()</code>, it needs to be defined in the BaseConfig.java interface file and implemented in StandaloneEnvConfig.java and ClusterEnvConfig.java, respectively. This part is not very common. For specific, please refer to the realized part.</li></ul></li></ul></li></ul>`,2);function p(i,l){return s(),a("div",null,[t(`

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

`),c])}const r=n(o,[["render",p],["__file","Integration-Test-refactoring-tutorial.html.vue"]]);export{r as default};
