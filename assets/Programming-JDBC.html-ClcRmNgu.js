import{_ as t,r as e,o as p,c as o,b as n,d as s,a as c,e as l}from"./app-DrPcRZG6.js";const u={},i=n("h2",{id:"jdbc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jdbc"},[n("span",null,"JDBC")])],-1),k=n("br",null,null,-1),r={href:"https://iotdb.apache.org/zh/UserGuide/Master/API/Programming-Java-Native-API.html",target:"_blank",rel:"noopener noreferrer"},d=l(`<h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h3><ul><li>JDK &gt;= 1.8</li><li>Maven &gt;= 3.6</li></ul><h3 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h3><p>在根目录下执行下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn clean <span class="token function">install</span> <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="在-maven-中使用-iotdb-jdbc" tabindex="-1"><a class="header-anchor" href="#在-maven-中使用-iotdb-jdbc"><span>在 MAVEN 中使用 IoTDB JDBC</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h4><p>本章提供了如何建立数据库连接、执行 SQL 和显示查询结果的示例。</p><p>要求您已经在工程中包含了数据库编程所需引入的包和 JDBC class.</p><p><strong>注意：为了更快地插入，建议使用 executeBatch()</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">IoTDBSQLException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCExample</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Before executing a SQL statement with a Statement object, you need to create a Statement object using the createStatement() method of the Connection object.
   * After creating a Statement object, you can use its execute() method to execute a SQL statement
   * Finally, remember to close the &#39;statement&#39; and &#39;connection&#39; objects by using their close() method
   * For statements with query results, we can use the getResultSet() method of the Statement object to get the result set.
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;get connection defeat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Create database</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;CREATE DATABASE root.demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IoTDBSQLException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//SHOW DATABASES</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;SHOW DATABASES&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Create time series</span>
    <span class="token comment">//Different data type has different encoding methods. Here use INT32 as an example</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;CREATE TIMESERIES root.demo.s0 WITH DATATYPE=INT32,ENCODING=RLE;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IoTDBSQLException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//Show time series</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;SHOW TIMESERIES root.demo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Show devices</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;SHOW DEVICES&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Count time series</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;COUNT TIMESERIES root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Count nodes at the given level</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;COUNT NODES root LEVEL=3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Count timeseries group by each node at the given level</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;COUNT TIMESERIES root GROUP BY LEVEL=3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>statement<span class="token punctuation">.</span><span class="token function">getResultSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    

    <span class="token comment">//Execute insert statements in batch</span>
    statement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token string">&quot;insert into root.demo(timestamp,s0) values(1,1);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token string">&quot;insert into root.demo(timestamp,s0) values(2,15);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token string">&quot;insert into root.demo(timestamp,s0) values(2,17);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token string">&quot;insert into root.demo(timestamp,s0) values(4,12);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">executeBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">clearBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Full query statement</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from root.demo&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sql: &quot;</span> <span class="token operator">+</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Exact query statement</span>
    sql <span class="token operator">=</span> <span class="token string">&quot;select s0 from root.demo where time = 4;&quot;</span><span class="token punctuation">;</span>
    resultSet<span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sql: &quot;</span> <span class="token operator">+</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Time range query</span>
    sql <span class="token operator">=</span> <span class="token string">&quot;select s0 from root.demo where time &gt;= 2 and time &lt; 5;&quot;</span><span class="token punctuation">;</span>
    resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sql: &quot;</span> <span class="token operator">+</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Aggregate query</span>
    sql <span class="token operator">=</span> <span class="token string">&quot;select count(s0) from root.demo;&quot;</span><span class="token punctuation">;</span>
    resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sql: &quot;</span> <span class="token operator">+</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">outputResult</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Delete time series</span>
    statement<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token string">&quot;delete timeseries root.demo.s0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//close connection</span>
    statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// JDBC driver name and database URL</span>
    <span class="token class-name">String</span> driver <span class="token operator">=</span> <span class="token string">&quot;org.apache.iotdb.jdbc.IoTDBDriver&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">// set rpc compress mode</span>
    <span class="token comment">// String url = &quot;jdbc:iotdb://127.0.0.1:6667?rpc_compress=true&quot;;</span>

    <span class="token comment">// Database credentials</span>
    <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>

    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
      connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> connection<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * This is an example of outputting the results in the ResultSet
   */</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">outputResult</span><span class="token punctuation">(</span><span class="token class-name">ResultSet</span> resultSet<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">final</span> <span class="token class-name">ResultSetMetaData</span> metaData <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">final</span> <span class="token keyword">int</span> columnCount <span class="token operator">=</span> metaData<span class="token punctuation">.</span><span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>metaData<span class="token punctuation">.</span><span class="token function">getColumnLabel</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> columnCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在 url 中指定 version 参数：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667?version=V_1_0&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>version 表示客户端使用的 SQL 语义版本，用于升级 0.13 时兼容 0.12 的 SQL 语义，可能取值有：<code>V_0_12</code>、<code>V_0_13</code>、<code>V_1_0</code>。</p>`,15);function m(v,b){const a=e("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("em",null,[s("注意: 目前的JDBC实现仅是为与第三方工具连接使用的。使用JDBC（尤其是执行插入语句时）无法提供高性能吞吐。"),k,s(" 对于Java应用，我们推荐使用"),n("a",r,[s("JAVA NATIVE API"),c(a)])])]),d])}const h=t(u,[["render",m],["__file","Programming-JDBC.html.vue"]]),f=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/API/Programming-JDBC.html","title":"","lang":"zh-CN","frontmatter":{"description":"JDBC 注意: 目前的JDBC实现仅是为与第三方工具连接使用的。使用JDBC（尤其是执行插入语句时）无法提供高性能吞吐。 对于Java应用，我们推荐使用JAVA NATIVE API 依赖 JDK >= 1.8 Maven >= 3.6 安装方法 在根目录下执行下面的命令： 在 MAVEN 中使用 IoTDB JDBC 示例代码 本章提供了如何建立数...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/API/Programming-JDBC.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/API/Programming-JDBC.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"JDBC 注意: 目前的JDBC实现仅是为与第三方工具连接使用的。使用JDBC（尤其是执行插入语句时）无法提供高性能吞吐。 对于Java应用，我们推荐使用JAVA NATIVE API 依赖 JDK >= 1.8 Maven >= 3.6 安装方法 在根目录下执行下面的命令： 在 MAVEN 中使用 IoTDB JDBC 示例代码 本章提供了如何建立数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JDBC","slug":"jdbc","link":"#jdbc","children":[{"level":3,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":3,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"zh/UserGuide/V1.0.x/API/Programming-JDBC.md","localizedDate":"2023年7月10日","autoDesc":true}');export{h as comp,f as data};
