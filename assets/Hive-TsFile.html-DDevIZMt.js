import{_ as s,r as o,o as d,c as r,b as t,d as e,a as n,e as i}from"./app-CIPkfidu.js";const l={},c=i('<h2 id="hive-tsfile" tabindex="-1"><a class="header-anchor" href="#hive-tsfile"><span>Hive-TsFile</span></a></h2><h3 id="about-hive-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-hive-tsfile-connector"><span>About Hive-TsFile-Connector</span></a></h3><p>Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hive.</p><p>With this connector, you can</p><ul><li>Load a single TsFile, from either the local file system or hdfs, into hive</li><li>Load all files in a specific directory, from either the local file system or hdfs, into hive</li><li>Query the tsfile through HQL.</li><li>As of now, the write operation is not supported in hive-connector. So, insert operation in HQL is not allowed while operating tsfile through hive.</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h3><table><thead><tr><th>Hadoop Version</th><th>Hive Version</th><th>Java Version</th><th>TsFile</th></tr></thead><tbody><tr><td><code>2.7.3</code> or <code>3.2.1</code></td><td><code>2.3.6</code> or <code>3.1.2</code></td><td><code>1.8</code></td><td><code>1.0.0</code></td></tr></tbody></table>',7),h={href:"https://github.com/apache/iotdb/tree/master/tsfile",target:"_blank",rel:"noopener noreferrer"},v=i('<h3 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence"><span>Data Type Correspondence</span></a></h3><table><thead><tr><th>TsFile data type</th><th>Hive field type</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>INT</td></tr><tr><td>INT64</td><td>BIGINT</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Double</td></tr><tr><td>TEXT</td><td>STRING</td></tr></tbody></table><h3 id="add-dependency-for-hive" tabindex="-1"><a class="header-anchor" href="#add-dependency-for-hive"><span>Add Dependency For Hive</span></a></h3><p>To use hive-connector in hive, we should add the hive-connector jar into hive.</p>',4),u={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"mvn clean package -pl hive-connector -am -Dmaven.test.skip=true -P get-jar-with-dependencies",-1),p=t("code",null,"hive-connector-X.X.X-jar-with-dependencies.jar",-1),b=i(`<p>Then in hive, use the command of <code>add jar XXX</code> to add the dependency. For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; add jar /Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar;

Added [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar] to class path
Added resources: [/Users/hive/iotdb/hive-connector/target/hive-connector-1.0.0-jar-with-dependencies.jar]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#create-tsfile-backed-hive-tables"><span>Create Tsfile-backed Hive tables</span></a></h3><p>To create a Tsfile-backed table, specify the <code>serde</code> as <code>org.apache.iotdb.hive.TsFileSerDe</code>,<br> specify the <code>inputformat</code> as <code>org.apache.iotdb.hive.TSFHiveInputFormat</code>,<br> and the <code>outputformat</code> as <code>org.apache.iotdb.hive.TSFHiveOutputFormat</code>.</p><p>Also provide a schema which only contains two fields: <code>time_stamp</code> and <code>sensor_id</code> for the table.<br><code>time_stamp</code> is the time value of the time series<br> and <code>sensor_id</code> is the sensor name to extract from the tsfile to hive such as <code>sensor_1</code>.<br> The name of the table can be any valid table names in hive.</p><p>Also a location provided for hive-connector to pull the most current data for the table.</p><p>The location should be a specific directory on your local file system or HDFS to set up Hadoop.<br> If it is in your local file system, the location should look like <code>file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/</code></p><p>Last, set the <code>device_id</code> in <code>TBLPROPERTIES</code> to the device name you want to analyze.</p><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(
  time_stamp TIMESTAMP,
  sensor_1 BIGINT)
ROW FORMAT SERDE &#39;org.apache.iotdb.hive.TsFileSerDe&#39;
STORED AS
  INPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveInputFormat&#39;
  OUTPUTFORMAT &#39;org.apache.iotdb.hive.TSFHiveOutputFormat&#39;
LOCATION &#39;/data/data/sequence/root.baic2.WWS.leftfrontdoor/&#39;
TBLPROPERTIES (&#39;device_id&#39;=&#39;root.baic2.WWS.leftfrontdoor.plc1&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the data of <code>root.baic2.WWS.leftfrontdoor.plc1.sensor_1</code> is pulled from the directory of <code>/data/data/sequence/root.baic2.WWS.leftfrontdoor/</code>.<br> This table results in a description as below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; describe only_sensor_1;
OK
time_stamp          	timestamp              	from deserializer
sensor_1            	bigint              	from deserializer
Time taken: 0.053 seconds, Fetched: 2 row(s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this point, the Tsfile-backed table can be worked with in Hive like any other table.</p><h3 id="query-from-tsfile-backed-hive-tables" tabindex="-1"><a class="header-anchor" href="#query-from-tsfile-backed-hive-tables"><span>Query from TsFile-backed Hive tables</span></a></h3><p>Before we do any queries, we should set the <code>hive.input.format</code> in hive by executing the following command.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, we already have an external table named <code>only_sensor_1</code> in hive.<br> We can use any query operations through HQL to analyse it.</p><p>For example:</p><h4 id="select-clause-example" tabindex="-1"><a class="header-anchor" href="#select-clause-example"><span>Select Clause Example</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; select * from only_sensor_1 limit 10;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aggregate-clause-example" tabindex="-1"><a class="header-anchor" href="#aggregate-clause-example"><span>Aggregate Clause Example</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hive&gt; select count(*) from only_sensor_1;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function f(g,T){const a=o("ExternalLinkIcon");return d(),r("div",null,[c,t("blockquote",null,[t("p",null,[e("Note: For more information about how to download and use TsFile, please see the following link: "),t("a",h,[e("https://github.com/apache/iotdb/tree/master/tsfile"),n(a)]),e(".")])]),v,t("p",null,[e("After downloading the code of iotdb from "),t("a",u,[e("https://github.com/apache/iotdb"),n(a)]),e(", you can use the command of "),m,e(" to get a "),p,e(".")]),b])}const x=s(l,[["render",f],["__file","Hive-TsFile.html.vue"]]),_=JSON.parse('{"path":"/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html","title":"","lang":"en-US","frontmatter":{"description":"Hive-TsFile About Hive-TsFile-Connector Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Hive-TsFile About Hive-TsFile-Connector Hive-TsFile-Connector implements the support of Hive for external data sources of Tsfile type. This enables users to operate TsFile by Hi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Hive-TsFile","slug":"hive-tsfile","link":"#hive-tsfile","children":[{"level":3,"title":"About Hive-TsFile-Connector","slug":"about-hive-tsfile-connector","link":"#about-hive-tsfile-connector","children":[]},{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":3,"title":"Data Type Correspondence","slug":"data-type-correspondence","link":"#data-type-correspondence","children":[]},{"level":3,"title":"Add Dependency For Hive","slug":"add-dependency-for-hive","link":"#add-dependency-for-hive","children":[]},{"level":3,"title":"Create Tsfile-backed Hive tables","slug":"create-tsfile-backed-hive-tables","link":"#create-tsfile-backed-hive-tables","children":[]},{"level":3,"title":"Query from TsFile-backed Hive tables","slug":"query-from-tsfile-backed-hive-tables","link":"#query-from-tsfile-backed-hive-tables","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.86,"words":859},"filePathRelative":"UserGuide/V1.0.x/Ecosystem-Integration/Hive-TsFile.md","localizedDate":"July 10, 2023","autoDesc":true}');export{x as comp,_ as data};
