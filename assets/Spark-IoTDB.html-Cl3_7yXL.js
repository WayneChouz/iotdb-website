import{_ as n,o as t,c as a,e as s}from"./app-DJKa25Tg.js";const e={},o=s(`<h1 id="spark-iotdb-user-guide" tabindex="-1"><a class="header-anchor" href="#spark-iotdb-user-guide"><span>Spark-IoTDB User Guide</span></a></h1><h2 id="supported-versions" tabindex="-1"><a class="header-anchor" href="#supported-versions"><span>Supported Versions</span></a></h2><p>Supported versions of Spark and Scala are as follows:</p><table><thead><tr><th>Spark Version</th><th>Scala Version</th></tr></thead><tbody><tr><td><code>2.4.0-latest</code></td><td><code>2.11, 2.12</code></td></tr></tbody></table><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span>Precautions</span></a></h2><ol><li>The current version of <code>spark-iotdb-connector</code> supports Scala <code>2.11</code> and <code>2.12</code>, but not <code>2.13</code>.</li><li><code>spark-iotdb-connector</code> supports usage in Spark for both Java, Scala, and PySpark.</li></ol><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h2><p><code>spark-iotdb-connector</code> has two use cases: IDE development and <code>spark-shell</code> debugging.</p><h3 id="ide-development" tabindex="-1"><a class="header-anchor" href="#ide-development"><span>IDE Development</span></a></h3><p>For IDE development, simply add the following dependency to the <code>pom.xml</code> file:</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- spark-iotdb-connector_2.11 or spark-iotdb-connector_2.13 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spark-iotdb-connector_2.12.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${iotdb.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spark-shell-debugging" tabindex="-1"><a class="header-anchor" href="#spark-shell-debugging"><span><code>spark-shell</code> Debugging</span></a></h3><p>To use <code>spark-iotdb-connector</code> in <code>spark-shell</code>, you need to download the <code>with-dependencies</code> version of the jar package<br> from the official website. After that, copy the jar package to the <code>\${SPARK_HOME}/jars</code> directory.<br> Simply execute the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> spark-iotdb-connector_2.12.10-<span class="token variable">\${iotdb.version}</span>.jar <span class="token variable">$SPARK_HOME</span>/jars/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Default Value</th><th>Scope</th><th>Can be Empty</th></tr></thead><tbody><tr><td>url</td><td>Specifies the JDBC URL of IoTDB</td><td>null</td><td>read, write</td><td>false</td></tr><tr><td>user</td><td>The username of IoTDB</td><td>root</td><td>read, write</td><td>true</td></tr><tr><td>password</td><td>The password of IoTDB</td><td>root</td><td>read, write</td><td>true</td></tr><tr><td>sql</td><td>Specifies the SQL statement for querying</td><td>null</td><td>read</td><td>true</td></tr><tr><td>numPartition</td><td>Specifies the partition number of the DataFrame when in read, and the write concurrency number when in write</td><td>1</td><td>read, write</td><td>true</td></tr><tr><td>lowerBound</td><td>The start timestamp of the query (inclusive)</td><td>0</td><td>read</td><td>true</td></tr><tr><td>upperBound</td><td>The end timestamp of the query (inclusive)</td><td>0</td><td>read</td><td>true</td></tr></tbody></table><h3 id="reading-data-from-iotdb" tabindex="-1"><a class="header-anchor" href="#reading-data-from-iotdb"><span>Reading Data from IoTDB</span></a></h3><p>Here is an example that demonstrates how to read data from IoTDB into a DataFrame:</p><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select ** from root&quot;</span><span class="token punctuation">)</span> <span class="token comment">// query SQL</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;lowerBound&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> <span class="token comment">// lower timestamp bound</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;upperBound&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100000000&quot;</span><span class="token punctuation">)</span> <span class="token comment">// upper timestamp bound</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span> <span class="token comment">// number of partitions</span>
  <span class="token punctuation">.</span>load

df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>

df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="writing-data-to-iotdb" tabindex="-1"><a class="header-anchor" href="#writing-data-to-iotdb"><span>Writing Data to IoTDB</span></a></h3><p>Here is an example that demonstrates how to write data to IoTDB:</p><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token comment">// Construct narrow table data</span>
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Device&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s0&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s3&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s4&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s5&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// Write narrow table data</span>
dfWithColumn
  <span class="token punctuation">.</span>write
  <span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>save

<span class="token comment">// Construct wide table data</span>
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s0&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s1&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s2&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s3&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s4&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s5&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// Write wide table data</span>
dfWithColumn<span class="token punctuation">.</span>write<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wide-and-narrow-table-conversion" tabindex="-1"><a class="header-anchor" href="#wide-and-narrow-table-conversion"><span>Wide and Narrow Table Conversion</span></a></h3><p>Here are examples of how to convert between wide and narrow tables:</p><ul><li>From wide to narrow</li></ul><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> wide_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select * from root.** where time &lt; 1100 and time &gt; 1000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load
<span class="token keyword">val</span> narrow_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toNarrowForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> wide_df<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>From narrow to wide</li></ul><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> wide_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toWideForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> narrow_df<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wide-and-narrow-tables" tabindex="-1"><a class="header-anchor" href="#wide-and-narrow-tables"><span>Wide and Narrow Tables</span></a></h2><p>Using the TsFile structure as an example: there are three measurements in the TsFile pattern,<br> namely <code>Status</code>, <code>Temperature</code>, and <code>Hardware</code>. The basic information for each of these three measurements is as<br> follows:</p><table><thead><tr><th>Name</th><th>Type</th><th>Encoding</th></tr></thead><tbody><tr><td>Status</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>Temperature</td><td>Float</td><td>RLE</td></tr><tr><td>Hardware</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>The existing data in the TsFile is as follows:</p><ul><li><code>d1:root.ln.wf01.wt01</code></li><li><code>d2:root.ln.wf02.wt02</code></li></ul><table><thead><tr><th>time</th><th>d1.status</th><th>time</th><th>d1.temperature</th><th>time</th><th>d2.hardware</th><th>time</th><th>d2.status</th></tr></thead><tbody><tr><td>1</td><td>True</td><td>1</td><td>2.2</td><td>2</td><td>&quot;aaa&quot;</td><td>1</td><td>True</td></tr><tr><td>3</td><td>True</td><td>2</td><td>2.2</td><td>4</td><td>&quot;bbb&quot;</td><td>2</td><td>False</td></tr><tr><td>5</td><td>False</td><td>3</td><td>2.1</td><td>6</td><td>&quot;ccc&quot;</td><td>4</td><td>True</td></tr></tbody></table><p>The wide (default) table form is as follows:</p><table><thead><tr><th>Time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>You can also use the narrow table format as shown below:</p><table><thead><tr><th>Time</th><th>Device</th><th>status</th><th>hardware</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table>`,39),p=[o];function l(c,i){return t(),a("div",null,p)}const d=n(e,[["render",l],["__file","Spark-IoTDB.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V1.2.x/Ecosystem-Integration/Spark-IoTDB.html","title":"Spark-IoTDB User Guide","lang":"en-US","frontmatter":{"description":"Spark-IoTDB User Guide Supported Versions Supported versions of Spark and Scala are as follows: Precautions The current version of spark-iotdb-connector supports Scala 2.11 and ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Spark-IoTDB User Guide"}],["meta",{"property":"og:description","content":"Spark-IoTDB User Guide Supported Versions Supported versions of Spark and Scala are as follows: Precautions The current version of spark-iotdb-connector supports Scala 2.11 and ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T06:02:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T06:02:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spark-IoTDB User Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T06:02:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Supported Versions","slug":"supported-versions","link":"#supported-versions","children":[]},{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]},{"level":2,"title":"Deployment","slug":"deployment","link":"#deployment","children":[{"level":3,"title":"IDE Development","slug":"ide-development","link":"#ide-development","children":[]},{"level":3,"title":"spark-shell Debugging","slug":"spark-shell-debugging","link":"#spark-shell-debugging","children":[]}]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Reading Data from IoTDB","slug":"reading-data-from-iotdb","link":"#reading-data-from-iotdb","children":[]},{"level":3,"title":"Writing Data to IoTDB","slug":"writing-data-to-iotdb","link":"#writing-data-to-iotdb","children":[]},{"level":3,"title":"Wide and Narrow Table Conversion","slug":"wide-and-narrow-table-conversion","link":"#wide-and-narrow-table-conversion","children":[]}]},{"level":2,"title":"Wide and Narrow Tables","slug":"wide-and-narrow-tables","link":"#wide-and-narrow-tables","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1690869728000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.83,"words":850},"filePathRelative":"UserGuide/V1.2.x/Ecosystem-Integration/Spark-IoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,r as data};
