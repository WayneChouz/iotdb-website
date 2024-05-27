import{_ as a,r as d,o as s,c as r,b as i,d as e,a as l,e as t}from"./app-D_cz5DM4.js";const o={},c=t('<h2 id="hive-tsfile" tabindex="-1"><a class="header-anchor" href="#hive-tsfile"><span>Hive-TsFile</span></a></h2><h3 id="什么是-tsfile-的-hive-连接器" tabindex="-1"><a class="header-anchor" href="#什么是-tsfile-的-hive-连接器"><span>什么是 TsFile 的 Hive 连接器</span></a></h3><p>TsFile 的 Hive 连接器实现了对 Hive 读取外部 Tsfile 类型的文件格式的支持，<br> 使用户能够通过 Hive 操作 Tsfile。</p><p>有了这个连接器，用户可以</p><ul><li>将单个 Tsfile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>将某个特定目录下的所有文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>使用 HQL 查询 tsfile</li><li>到现在为止，写操作在 hive-connector 中还没有被支持。所以，HQL 中的 insert 操作是不被允许的</li></ul><h3 id="系统环境要求" tabindex="-1"><a class="header-anchor" href="#系统环境要求"><span>系统环境要求</span></a></h3><table><thead><tr><th>Hadoop Version</th><th>Hive Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.7.3</code> or <code>3.2.1</code></td><td><code>2.3.6</code> or <code>3.1.2</code></td><td><code>1.8</code></td><td><code>1.0.0+</code></td></tr></tbody></table><h3 id="数据类型对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型对应关系"><span>数据类型对应关系</span></a></h3><table><thead><tr><th>TsFile 数据类型</th><th>Hive 数据类型</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>INT</td></tr><tr><td>INT64</td><td>BIGINT</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Double</td></tr><tr><td>TEXT</td><td>STRING</td></tr></tbody></table><h3 id="为-hive-添加依赖-jar-包" tabindex="-1"><a class="header-anchor" href="#为-hive-添加依赖-jar-包"><span>为 Hive 添加依赖 jar 包</span></a></h3><p>为了在 Hive 中使用 Tsfile 的 hive 连接器，我们需要把 hive 连接器的 jar 导入进 hive。</p>',11),v={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},h=i("code",null,"mvn clean package -pl hive-connector -am -Dmaven.test.skip=true -P get-jar-with-dependencies",-1),u=i("code",null,"hive-connector-X.X.X-SNAPSHOT-jar-with-dependencies.jar",-1),p=t(`<p>然后在 hive 的命令行中，使用<code>add jar XXX</code>命令添加依赖。例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hive<span class="token operator">&gt;</span> <span class="token function">add</span> jar /Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar<span class="token punctuation">;</span>

Added <span class="token punctuation">[</span>/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar<span class="token punctuation">]</span> to class path
Added resources: <span class="token punctuation">[</span>/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-tsfile-backed-的-hive-表" tabindex="-1"><a class="header-anchor" href="#创建-tsfile-backed-的-hive-表"><span>创建 Tsfile-backed 的 Hive 表</span></a></h3><p>为了创建一个 Tsfile-backed 的表，需要将<code>serde</code>指定为<code>org.apache.iotdb.hive.TsFileSerDe</code>，<br> 将<code>inputformat</code>指定为<code>org.apache.iotdb.hive.TSFHiveInputFormat</code>，<br> 将<code>outputformat</code>指定为<code>org.apache.iotdb.hive.TSFHiveOutputFormat</code>。</p><p>同时要提供一个只包含两个字段的 Schema，这两个字段分别是<code>time_stamp</code>和<code>sensor_id</code>。<br><code>time_stamp</code>代表的是时间序列的时间值，<code>sensor_id</code>是你想要从 tsfile 文件中提取出来分析的传感器名称，比如说<code>sensor_1</code>。<br> 表的名字可以是 hive 所支持的任何表名。</p><p>需要提供一个路径供 hive-connector 从其中拉取最新的数据。</p><p>这个路径必须是一个指定的文件夹，这个文件夹可以在你的本地文件系统上，也可以在 HDFS 上，如果你启动了 Hadoop 的话。<br> 如果是本地文件系统，要以这样的形式<code>file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/</code></p><p>最后需要在<code>TBLPROPERTIES</code>里指明<code>device_id</code></p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(
  time_stamp TIMESTAMP,
  sensor_1 BIGINT)
ROW FORMAT SERDE &#39;org.apache.iotdb.hive.TsFileSerDe&#39;
STORED AS
  INPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveInputFormat&#39;
  OUTPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveOutputFormat&#39;
LOCATION &#39;/data/data/sequence/root.baic2.WWS.leftfrontdoor/&#39;
TBLPROPERTIES (&#39;device_id&#39;=&#39;root.baic2.WWS.leftfrontdoor.plc1&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子里，我们从<code>/data/data/sequence/root.baic2.WWS.leftfrontdoor/</code>中拉取<code>root.baic2.WWS.leftfrontdoor.plc1.sensor_1</code>的数据。<br> 这个表可能产生如下描述：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; describe only_sensor_1;
OK
time_stamp          	timestamp              	from deserializer
sensor_1            	bigint              	from deserializer
Time taken: 0.053 seconds, Fetched: 2 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到目前为止，Tsfile-backed 的表已经可以像 hive 中其他表一样被操作了。</p><h3 id="从-tsfile-backed-的-hive-表中查询" tabindex="-1"><a class="header-anchor" href="#从-tsfile-backed-的-hive-表中查询"><span>从 Tsfile-backed 的 Hive 表中查询</span></a></h3><p>在做任何查询之前，我们需要通过如下命令，在 hive 中设置<code>hive.input.format</code>：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，我们已经在 hive 中有了一个名为<code>only_sensor_1</code>的外部表。<br> 我们可以使用 HQL 做任何查询来分析其中的数据。</p><p>例如：</p><h4 id="选择查询语句示例" tabindex="-1"><a class="header-anchor" href="#选择查询语句示例"><span>选择查询语句示例</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; select * from only_sensor_1 limit 10;
OK
1	1000000
2	1000001
3	1000002
4	1000003
5	1000004
6	1000005
7	1000006
8	1000007
9	1000008
10	1000009
Time taken: 1.464 seconds, Fetched: 10 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="聚合查询语句示例" tabindex="-1"><a class="header-anchor" href="#聚合查询语句示例"><span>聚合查询语句示例</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; select count(*) from only_sensor_1;
WARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.
Query ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6
Total jobs = 1
Launching Job 1 out of 1
Number of reduce tasks determined at compile time: 1
In order to change the average load for a reducer (in bytes):
  set hive.exec.reducers.bytes.per.reducer=&lt;number&gt;
In order to limit the maximum number of reducers:
  set hive.exec.reducers.max=&lt;number&gt;
In order to set a constant number of reducers:
  set mapreduce.job.reduces=&lt;number&gt;
Job running in-process (local Hadoop)
2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%
2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%
Ended Job = job_local867757288_0002
MapReduce Jobs Launched:
Stage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS
Total MapReduce CPU Time Spent: 0 msec
OK
1000000
Time taken: 11.334 seconds, Fetched: 1 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function m(b,g){const n=d("ExternalLinkIcon");return s(),r("div",null,[c,i("p",null,[e("从 "),i("a",v,[e("https://github.com/apache/iotdb"),l(n)]),e("下载完 iotdb 后，你可以使用 "),h,e("命令得到一个 "),u,e("。")]),p])}const T=a(o,[["render",m],["__file","Hive-TsFile.html.vue"]]),H=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html","title":"","lang":"zh-CN","frontmatter":{"description":"Hive-TsFile 什么是 TsFile 的 Hive 连接器 TsFile 的 Hive 连接器实现了对 Hive 读取外部 Tsfile 类型的文件格式的支持， 使用户能够通过 Hive 操作 Tsfile。 有了这个连接器，用户可以 将单个 Tsfile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中 将某个特定目录下...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Hive-TsFile 什么是 TsFile 的 Hive 连接器 TsFile 的 Hive 连接器实现了对 Hive 读取外部 Tsfile 类型的文件格式的支持， 使用户能够通过 Hive 操作 Tsfile。 有了这个连接器，用户可以 将单个 Tsfile 文件加载进 Hive，不论文件是存储在本地文件系统或者是 HDFS 中 将某个特定目录下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Hive-TsFile","slug":"hive-tsfile","link":"#hive-tsfile","children":[{"level":3,"title":"什么是 TsFile 的 Hive 连接器","slug":"什么是-tsfile-的-hive-连接器","link":"#什么是-tsfile-的-hive-连接器","children":[]},{"level":3,"title":"系统环境要求","slug":"系统环境要求","link":"#系统环境要求","children":[]},{"level":3,"title":"数据类型对应关系","slug":"数据类型对应关系","link":"#数据类型对应关系","children":[]},{"level":3,"title":"为 Hive 添加依赖 jar 包","slug":"为-hive-添加依赖-jar-包","link":"#为-hive-添加依赖-jar-包","children":[]},{"level":3,"title":"创建 Tsfile-backed 的 Hive 表","slug":"创建-tsfile-backed-的-hive-表","link":"#创建-tsfile-backed-的-hive-表","children":[]},{"level":3,"title":"从 Tsfile-backed 的 Hive 表中查询","slug":"从-tsfile-backed-的-hive-表中查询","link":"#从-tsfile-backed-的-hive-表中查询","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.56,"words":1068},"filePathRelative":"zh/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.md","localizedDate":"2023年7月10日","autoDesc":true}');export{T as comp,H as data};
