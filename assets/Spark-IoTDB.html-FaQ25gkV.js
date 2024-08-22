import{_ as n,o as a,c as s,e as t}from"./app-BZ7vU6A9.js";const e={},o=t(`<h2 id="spark-iotdb" tabindex="-1"><a class="header-anchor" href="#spark-iotdb"><span>Spark-IoTDB</span></a></h2><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h3><p>The versions required for Spark and Java are as follow:</p><table><thead><tr><th style="text-align:center;">Spark Version</th><th style="text-align:center;">Scala Version</th><th style="text-align:center;">Java Version</th><th style="text-align:center;">TsFile</th></tr></thead><tbody><tr><td style="text-align:center;"><code>2.4.0-3.2.0</code></td><td style="text-align:center;"><code>2.12</code></td><td style="text-align:center;"><code>1.8</code></td><td style="text-align:center;"><code>0.13.0</code></td></tr></tbody></table><h3 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>Notice</span></a></h3><ol><li><code>Spark IoTDB Connector</code> only supports Spark <code>2.4.5</code> to <code>3.2.0</code> with <code>Scala 2.12</code>.<br> If you need to support other versions, you can modify the Scala version of the POM file in the module <code>spark-iotdb-connector</code> in the source code and then recompile it.</li><li>There is a conflict of thrift version between IoTDB and Spark.<br> Therefore, if you want to debug in spark-shell, you need to execute <code>rm -f $SPARK_HOME/jars/libthrift*</code> and <code>cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/</code> to resolve it.<br> Otherwise, you can only debug the code in IDE. If you want to run your task by <code>spark-submit</code>, you must package with dependency.</li></ol><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn clean scala:compile compile <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency"><span>Maven Dependency</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>    &lt;dependency&gt;
      &lt;groupId&gt;org.apache.iotdb&lt;/groupId&gt;
      &lt;artifactId&gt;spark-iotdb-connector&lt;/artifactId&gt;
      &lt;version&gt;0.13.0&lt;/version&gt;
    &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spark-shell-user-guide" tabindex="-1"><a class="header-anchor" href="#spark-shell-user-guide"><span>spark-shell user guide</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spark-shell --jars spark-iotdb-connector-0.13.0.jar,iotdb-jdbc-0.13.0-jar-with-dependencies.jar,iotdb-session-0.13.0-jar-with-dependencies.jar

import org.apache.iotdb.spark.db._

val df = spark.read.format(&quot;org.apache.iotdb.spark.db&quot;).option(&quot;url&quot;,&quot;jdbc:iotdb://127.0.0.1:6667/&quot;).option(&quot;sql&quot;,&quot;select * from root&quot;).load

df.printSchema()

df.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To partition rdd:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spark-shell --jars spark-iotdb-connector-0.13.0.jar,iotdb-jdbc-0.13.0-jar-with-dependencies.jar,iotdb-session-0.13.0-jar-with-dependencies.jar

import org.apache.iotdb.spark.db._

val df = spark.read.format(&quot;org.apache.iotdb.spark.db&quot;).option(&quot;url&quot;,&quot;jdbc:iotdb://127.0.0.1:6667/&quot;).option(&quot;sql&quot;,&quot;select * from root&quot;).
                        option(&quot;lowerBound&quot;, [lower bound of time that you want query(include)]).option(&quot;upperBound&quot;, [upper bound of time that you want query(include)]).
                        option(&quot;numPartition&quot;, [the partition number you want]).load

df.printSchema()

df.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="schema-inference" tabindex="-1"><a class="header-anchor" href="#schema-inference"><span>Schema Inference</span></a></h4><p>Take the following TsFile structure as an example: There are three Measurements in the TsFile schema: status, temperature, and hardware. The basic information of these three measurements is as follows:</p><table><thead><tr><th>Name</th><th>Type</th><th>Encode</th></tr></thead><tbody><tr><td>status</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>temperature</td><td>Float</td><td>RLE</td></tr><tr><td>hardware</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>The existing data in the TsFile is as follows:</p><img width="517" alt="SI " src="https://alioss.timecho.com/docs/img/github/98197835-99a64980-1f62-11eb-84af-8301b8a6aad5.png"><p>The wide(default) table form is as follows:</p><table><thead><tr><th>time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>You can also use narrow table form which as follows: (You can see part 4 about how to use narrow form)</p><table><thead><tr><th>time</th><th>device_name</th><th>status</th><th>hardware</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table><h4 id="transform-between-wide-and-narrow-table" tabindex="-1"><a class="header-anchor" href="#transform-between-wide-and-narrow-table"><span>Transform between wide and narrow table</span></a></h4><ul><li>from wide to narrow</li></ul><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> wide_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select * from root where time &lt; 1100 and time &gt; 1000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load
<span class="token keyword">val</span> narrow_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toNarrowForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> wide_df<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>from narrow to wide</li></ul><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_

<span class="token keyword">val</span> wide_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toWideForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> narrow_df<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="java-user-guide" tabindex="-1"><a class="header-anchor" href="#java-user-guide"><span>Java user guide</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Dataset</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Row</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SparkSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SparkSession</span> spark <span class="token operator">=</span> <span class="token class-name">SparkSession</span>
        <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">appName</span><span class="token punctuation">(</span><span class="token string">&quot;Build a DataFrame from Scratch&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">master</span><span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">getOrCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Dataset</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span><span class="token punctuation">&gt;</span></span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;select * from root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    df<span class="token punctuation">.</span><span class="token function">printSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    df<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token class-name">Dataset</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span><span class="token punctuation">&gt;</span></span> narrowTable <span class="token operator">=</span> <span class="token class-name">Transformer</span><span class="token punctuation">.</span><span class="token function">toNarrowForm</span><span class="token punctuation">(</span>spark<span class="token punctuation">,</span> df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    narrowTable<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="write-data-to-iotdb" tabindex="-1"><a class="header-anchor" href="#write-data-to-iotdb"><span>Write Data to IoTDB</span></a></h3><h4 id="user-guide" tabindex="-1"><a class="header-anchor" href="#user-guide"><span>User Guide</span></a></h4><div class="language-scala line-numbers-mode" data-ext="scala" data-title="scala"><pre class="language-scala"><code><span class="token comment">// import narrow table</span>
<span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;device_name&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s3&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s4&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s5&quot;</span><span class="token punctuation">)</span>
dfWithColumn
    <span class="token punctuation">.</span>write
    <span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>save
    
<span class="token comment">// import wide table</span>
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
dfWithColumn<span class="token punctuation">.</span>write<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h4><ol><li>You can directly write data to IoTDB whatever the dataframe contains a wide table or a narrow table.</li><li>The parameter <code>numPartition</code> is used to set the number of partitions. The dataframe that you want to save will be repartition based on this parameter before writing data. Each partition will open a session to write data to increase the number of concurrent requests.</li></ol>`,35),p=[o];function c(l,i){return a(),s("div",null,p)}const d=n(e,[["render",c],["__file","Spark-IoTDB.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.html","title":"","lang":"en-US","frontmatter":{"description":"Spark-IoTDB Version The versions required for Spark and Java are as follow: Notice Spark IoTDB Connector only supports Spark 2.4.5 to 3.2.0 with Scala 2.12. If you need to suppo...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Spark-IoTDB Version The versions required for Spark and Java are as follow: Notice Spark IoTDB Connector only supports Spark 2.4.5 to 3.2.0 with Scala 2.12. If you need to suppo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Spark-IoTDB","slug":"spark-iotdb","link":"#spark-iotdb","children":[{"level":3,"title":"Version","slug":"version","link":"#version","children":[]},{"level":3,"title":"Notice","slug":"notice","link":"#notice","children":[]},{"level":3,"title":"Install","slug":"install","link":"#install","children":[]},{"level":3,"title":"Write Data to IoTDB","slug":"write-data-to-iotdb","link":"#write-data-to-iotdb","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.92,"words":875},"filePathRelative":"UserGuide/V0.13.x/Ecosystem-Integration/Spark-IoTDB.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,r as data};
