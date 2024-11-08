import{_ as t,c as a,b as n,o as r}from"./app-Cy-L1ril.js";const i={};function s(o,e){return r(),a("div",null,e[0]||(e[0]=[n('<h1 id="tsdb-comparison" tabindex="-1"><a class="header-anchor" href="#tsdb-comparison"><span>TSDB Comparison</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><figure><img src="https://alioss.timecho.com/docs/img/github/119833923-182ffc00-bf32-11eb-8b3f-9f95d3729ad2.png" alt="TSDB Comparison" tabindex="0" loading="lazy"><figcaption>TSDB Comparison</figcaption></figure><p>*<em>The table format is inspired by <a href="https://towardsdatascience.com/how-to-select-time-series-db-123b0eb4ab82" target="_blank" rel="noopener noreferrer">Andriy Zabavskyy: How to Select Time Series DB</a>.</em></p><h2 id="known-time-series-database" tabindex="-1"><a class="header-anchor" href="#known-time-series-database"><span>Known Time Series Database</span></a></h2><p>As the time series data becomes more and more important,<br> several open sourced time series databases are introduced to the world.<br> However, few of them are developed for IoT or IIoT (Industrial IoT) scenario in particular.</p><p>3 kinds of TSDBs are compared here.</p><ul><li><p>InfluxDB - Native Time series database</p><p>InfluxDB is one of the most popular TSDBs.</p><p>Interface: InfluxQL and HTTP API</p></li><li><p>OpenTSDB and KairosDB - Time series database based on NoSQL</p><p>These two DBs are similar, while the first is based on HBase and the second is based on Cassandra.<br> Both of them provides RESTful style API.</p><p>Interface: Restful API</p></li><li><p>TimescaleDB - Time series database based on Relational Database</p><p>Interface: SQL</p></li></ul><p>Prometheus and Druid are also famous for time series data management.<br> However, Prometheus focuses data collection, data visualization and alert warnings.<br> Druid focuses on data analysis with OLAP workload. We omit them here.</p><h2 id="comparison" tabindex="-1"><a class="header-anchor" href="#comparison"><span>Comparison</span></a></h2><p>The above time series databases are compared from two aspects: the feature comparison and the performance<br> comparison.</p><h3 id="feature-comparison" tabindex="-1"><a class="header-anchor" href="#feature-comparison"><span>Feature Comparison</span></a></h3><p>I list the basic features comparison of these databases.</p><p>Legend:</p><ul><li><code>++</code>: big support greatly</li><li><code>+</code>: support</li><li><code>+-</code>: support but not very good</li><li><code>-</code>: not support</li><li><code>?</code>: unknown</li></ul><h4 id="basic-features" tabindex="-1"><a class="header-anchor" href="#basic-features"><span>Basic Features</span></a></h4><table><thead><tr><th>TSDB</th><th style="text-align:center;">IoTDB</th><th style="text-align:center;">InfluxDB</th><th style="text-align:center;">OpenTSDB</th><th style="text-align:center;">KairosDB</th><th style="text-align:center;">TimescaleDB</th></tr></thead><tbody><tr><td><em>OpenSource</em></td><td style="text-align:center;"><strong>+</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;"><strong>+</strong></td><td style="text-align:center;">+</td></tr><tr><td><em>SQL-like</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;"><strong>++</strong></td></tr><tr><td><em>Schema</em></td><td style="text-align:center;">tree-based, tag-based</td><td style="text-align:center;">tag-based</td><td style="text-align:center;">tag-based</td><td style="text-align:center;">tag-based</td><td style="text-align:center;">relational</td></tr><tr><td><em>Writing out-of-order data</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Schema-less</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Batch insertion</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Time range filter</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Order by time</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">+</td></tr><tr><td><em>Value filter</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">+</td></tr><tr><td><em>Downsampling</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Fill</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">+</td></tr><tr><td><em>LIMIT</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>SLIMIT</em></td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">?</td></tr><tr><td><em>Latest value</em></td><td style="text-align:center;">++</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">+</td></tr></tbody></table><p><strong>Details</strong></p><ul><li><p>OpenSource:</p><ul><li>IoTDB uses Apache License 2.0.</li><li>InfluxDB uses MIT license. However, <strong>the cluster version is not open sourced</strong>.</li><li>OpenTSDB uses LGPL2.1, which <strong>is not compatible with Apache License</strong>.</li><li>KairosDB uses Apache License 2.0.</li><li>TimescaleDB uses Timescale License, which is not free for enterprise.</li></ul></li><li><p>SQL like:</p><ul><li>IoTDB and InfluxDB support SQL like language. In addition, the integration of IoTDB and Calcite is almost done (a PR has been submitted), which means IoTDB will support Standard SQL soon.</li><li>OpenTSDB and KairosDB only support Rest API, while IoTDB also supports Rest API (a PR has been submitted).</li><li>TimescaleDB uses the SQL the same as PG.</li></ul></li><li><p>Schema:</p><ul><li><p>IoTDB: IoTDB proposes a <a href="http://iotdb.apache.org/UserGuide/Master/Data-Concept/Data-Model-and-Terminology.html" target="_blank" rel="noopener noreferrer">Tree based schema</a>.<br> It is quite different from other TSDBs. However, the kind of schema has the following advantages:</p><ul><li><p>In many industrial scenarios, the management of devices are hierarchical, rather than flat.<br> That is why we think a tree based schema is better than tag-value based schema.</p></li><li><p>In many real world applications, tag names are constant. For example, a wind turbine manufacturer<br> always identify their wind turbines by which country it locates, the farm name it belongs to, and its ID in the farm.<br> So, a 4-depth tree (&quot;root.the-country-name.the-farm-name.the-id&quot;) is fine.<br> You do not need to repeat to tell IoTDB the 2nd level of the tree is for country name,<br> the 3rd level is for farm id, etc.</p></li><li><p>A path based time series ID definition also supports flexible queries, like &quot;root.*.a.b.*&quot;, where * is wildcard character.</p></li></ul></li><li><p>InfluxDB, KairosDB, OpenTSDB are tag-value based, which is more popular currently.</p></li><li><p>TimescaleDB uses relational table.</p></li></ul></li><li><p>Order by time:</p><p>Order by time seems quite trivial for time series database. But... if we consider another feature, called align by time,<br> something becomes interesting. And, that is why we mark OpenTSDB and KairosDB unsupported.</p><p>Actually, in each time series, all these TSDBs support order data by timestamps.</p><p>However, OpenTSDB and KairosDB do not support order data from different timeseries in the time order.</p><p>Ok, consider a new case: I have two time series, one is for the wind speed in wind farm1,<br> another is for the generated energy of wind turbine1 in farm1. If we want to analyze the relation between the<br> wind speed and the generated energy, we have to know the values of both at the same time.<br> That is to say, we have to align the two time series in the time dimension.</p><p>So, the result should be:</p><table><thead><tr><th>timestamp</th><th>wind speed</th><th>generated energy</th></tr></thead><tbody><tr><td>1</td><td>5.0</td><td>13.1</td></tr><tr><td>2</td><td>6.0</td><td>13.3</td></tr><tr><td>3</td><td>null</td><td>13.1</td></tr></tbody></table><p>or,</p><table><thead><tr><th>timestamp</th><th>series name</th><th>value</th></tr></thead><tbody><tr><td>1</td><td>wind speed</td><td>5.0</td></tr><tr><td>1</td><td>generated energy</td><td>13.1</td></tr><tr><td>2</td><td>wind speed</td><td>6.0</td></tr><tr><td>2</td><td>generated energy</td><td>13.3</td></tr><tr><td>3</td><td>generated energy</td><td>13.1</td></tr></tbody></table></li></ul><p>Though the second table format does not align data by the time dimension, it is easy to be implemented in the client-side,<br> by just scanning data row by row.</p><p>IoTDB supports the first table format (called align by time), InfluxDB supports the second table format.</p><ul><li><p>Downsampling:</p><p>Downsampling is for changing the granularity of timeseries, e.g., from 10Hz to 1Hz, or 1 point per day.</p><p>Different from other systems, IoTDB downsamples data in real time, while others serialized downsampled data on disk.<br> That is to say,</p><ul><li><p>IoTDB supports <strong>adhoc</strong> downsampling data in <strong>arbitrary time</strong>.<br> e.g., a SQL returns 1 point per 5 minutes and start with 2020-04-27 08:00:00 while another SQL returns 1 point per 5 minutes + 10 seconds and start with 2020-04-27 08:00:01.<br> （InfluxDB also supports adhoc downsampling but the performance is ..... hm)</p></li><li><p>There is no disk loss for IoTDB.</p></li></ul></li><li><p>Fill:</p><p>Sometimes we thought the data is collected in some fixed frequency, e.g., 1Hz (1 point per second).<br> But usually, we may lost some data points, because the network is unstable, the machine is busy, or the machine is down for several minutes.</p><p>In this case, filling these holes is important. Data scientists can avoid many so called dirty work, e.g., data clean.</p><p>InfluxDB and OpenTSDB only support using fill in a group by statement, while IoTDB supports to fill data when just given a particular timestamp.<br> Besides, IoTDB supports several strategies for filling data.</p></li><li><p>Slimit:</p><p>Slimit means return limited number of measurements (or, fields in InfluxDB).<br> For example, a wind turbine may have 1000 measurements (speed, voltage, etc..), using slimit and soffset can just return a part of them.</p></li><li><p>Latest value:</p><p>As one of the most basic timeseries based applications is monitoring the latest data.<br> Therefore, a query to return the latest value of a time series is very important.<br> IoTDB and OpenTSDB support that with a special SQL or API,<br> while InfluxDB supports that using an aggregation function.<br> (the reason why IoTDB provides a special SQL is IoTDB optimizes the query expressly.)</p></li></ul><p><strong>Conclusion</strong>:</p><p>Well, if we compare the basic features, we can find that OpenTSDB and KairosDB somehow lack some important query features.<br> TimescaleDB can not be freely used in business.<br> IoTDB and InfluxDB can meet most requirements of time series data management, while they have some difference.</p><h4 id="advanced-features" tabindex="-1"><a class="header-anchor" href="#advanced-features"><span>Advanced Features</span></a></h4><p>I listed some interesting features that these systems may differ.</p><table><thead><tr><th>TSDB</th><th style="text-align:center;">IoTDB</th><th style="text-align:center;">InfluxDB</th><th style="text-align:center;">OpenTSDB</th><th style="text-align:center;">KairosDB</th><th style="text-align:center;">TimescaleDB</th></tr></thead><tbody><tr><td><em>Align by time</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">+</td></tr><tr><td><em>Compression</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+-</td><td style="text-align:center;">+-</td><td style="text-align:center;">+-</td><td style="text-align:center;">+-</td></tr><tr><td><em>MQTT support</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">+-</td></tr><tr><td><em>Run on Edge-side Device</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">+-</td><td style="text-align:center;">+</td></tr><tr><td><em>Multi-instance Sync</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td><em>JDBC Driver</em></td><td style="text-align:center;"><strong>+</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">++</td></tr><tr><td><em>Standard SQL</em></td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;"><strong>++</strong></td></tr><tr><td><em>Spark integration</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td><em>Hive integration</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td><em>Writing data to NFS (HDFS)</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">+</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td><em>Flink integration</em></td><td style="text-align:center;"><strong>++</strong></td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><ul><li><p>Align by time: have been introduced. Let&#39;s skip it..</p></li><li><p>Compression:</p><ul><li>IoTDB supports many encoding and compression for time series, like RLE, 2DIFF, Gorilla, etc.. and Snappy compression.<br> In IoTDB, you can choose which encoding method you want, according to the data distribution. For more info, see <a href="http://iotdb.apache.org/UserGuide/Master/Data-Concept/Encoding.html" target="_blank" rel="noopener noreferrer">here</a>.</li><li>InfluxDB also supports encoding and compression, but you can not define which encoding method you want.<br> It just depends on the data type. For more info, see <a href="https://docs.influxdata.com/influxdb/v1.7/concepts/storage_engine/" target="_blank" rel="noopener noreferrer">here</a>.</li><li>OpenTSDB and KairosDB use HBase and Cassandra in backend, and have no special encoding for time series.</li></ul></li><li><p>MQTT protocol support:</p><p>MQTT protocol is an international standard and widely known in industrial users. Only IoTDB and InfluxDB support user using MQTT client to write data.</p></li><li><p>Running on Edge-side Device:</p><p>Nowdays, edge computing is more and more popular, which means the edge device has more powerful computational resources.<br> Deploying a TSDB on the edge side is useful for managing data on the edge side and serve for edge computing.<br> As OpenTSDB and KairosDB rely another DB, the architecture is heavy. Especially, it is hard to run Hadoop on the edge side.</p></li><li><p>Multi-instance Sync:</p><p>Ok, now we have many TSDB instances on the edge-side. Then, how to upload their data to the data center, to form a ... data lake (or ocean, river,..., whatever).<br> One solution is to read data from these instances and write the data point by point to the data center instance.<br> IoTDB provides another choice, which is just uploading the data file into the data center incrementally, then the data center can support service on the data.</p></li><li><p>JDBC driver:</p><p>Now only IoTDB supports a JDBC driver (though not all interfaces are implemented), and makes it possible to integrate many other JDBC driver based softwares.</p></li><li><p>Standard SQL:</p><p>As mentioned before, the integration of IoTDB and Calcite is almost done (a PR has been submitted), which means IoTDB will support Standard SQL.</p></li><li><p>Spark and Hive integration:</p><p>It is very important that letting big data analysis software to access the data in database for more complex data analysis.<br> IoTDB supports Hive-connector and Spark connector for better integration.</p></li><li><p>Writing data to NFS (HDFS):<br> Sharing nothing architecture is good, but sometimes you have to add new servers even your CPU and memory is idle but the disk is full...<br> Besides, if we can save the data file directly to HDFS, it will be more easy to use Spark and other softwares to analyze data, without ETL.</p></li><li><p>IoTDB supports writing data locally or on HDFS directly. IoTDB also allows user to extend to store data on other NFS.</p></li><li><p>InfluxDB, KairosDB have to write data locally.</p></li><li><p>OpenTSDB has to write data on HDFS.</p></li></ul><p><strong>Conclusion</strong>:</p><p>We can find that IoTDB has many powerful features that other TSDBs do not support.</p><h3 id="performance-comparison" tabindex="-1"><a class="header-anchor" href="#performance-comparison"><span>Performance Comparison</span></a></h3><p>Ok... If you say, &quot;well, I just want the basic features. IoTDB has little difference from others.&quot;.<br> It is somehow right. But, if you consider the performance, you may change your mind.</p><h4 id="quick-review" tabindex="-1"><a class="header-anchor" href="#quick-review"><span>quick review</span></a></h4><table><thead><tr><th>TSDB</th><th style="text-align:center;">IoTDB</th><th style="text-align:center;">InfluxDB</th><th style="text-align:center;">KairosDB</th><th style="text-align:center;">TimescaleDB</th></tr></thead><tbody><tr><td><em>Scalable Writes</em></td><td style="text-align:center;">++</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Raw Data Query</em></td><td style="text-align:center;">++</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Aggregation Query</em></td><td style="text-align:center;">++</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td><td style="text-align:center;">+</td></tr><tr><td><em>Downsampling Query</em></td><td style="text-align:center;">++</td><td style="text-align:center;">+</td><td style="text-align:center;">+-</td><td style="text-align:center;">+-</td></tr><tr><td><em>Latest Query</em></td><td style="text-align:center;">++</td><td style="text-align:center;">+</td><td style="text-align:center;">+-</td><td style="text-align:center;">+</td></tr></tbody></table><ul><li>Write:</li></ul><p>We test the performance of writing from two aspects: <em>batch size</em> and <em>client num</em>. The number of storage group is 10. There are 1000 devices and each device has 100 measurements(i.e.,, 100K time series total).</p><ul><li>Read:</li></ul><p>10 clients read data concurrently. The number of storage group is 10. There are 10 devices and each device has 10 measurements (i.e.,, 100 time series total).<br> The data type is <em>double</em>, encoding type is <em>GORILLA</em></p><ul><li>Compression:</li></ul><p>We test and compare file sizes of TsFile(the file format of IoTDB) and some others famous dataset formats, which are Parquet, ORC and Csv, after the same datasets are written.</p><p>The IoTDB version is v0.11.1.</p><p><strong>Write performance</strong>:</p><ul><li>batch size:</li></ul><p>10 clients write data concurrently.<br> IoTDB uses batch insertion API and the batch size is distributed from 0 to 6000 (write N data points per write API call).</p><p>The write throughput (points/second) is:</p><p><img src="https://alioss.timecho.com/docs/img/github/106251391-df1b9f80-624f-11eb-9f1f-66823839acba.png" alt="Batch Size with Write Throughput (points/second)" loading="lazy"><br><span id="exp1"><center>Figure 1. Batch Size with Write throughput (points/second) IoTDB v0.11.1</center></span></p><ul><li>client num:</li></ul><p>The client num is distributed from 1 to 50.<br> IoTDB uses batch insertion API and the batch size is 100 (write 100 data points per write API call).</p><p>The write throughput (points/second) is:</p><figure><img src="https://alioss.timecho.com/docs/img/github/106251411-e5aa1700-624f-11eb-8ca8-00c0627b1e96.png" alt="Client Num with Write Throughput (points/second) (ms)" tabindex="0" loading="lazy"><figcaption>Client Num with Write Throughput (points/second) (ms)</figcaption></figure><center>Figure 3. Client Num with Write Throughput (points/second) IoTDB v0.11.1</center><p><strong>Query performance</strong></p><figure><img src="https://alioss.timecho.com/docs/img/github/106251377-daef8200-624f-11eb-9678-b1d5440be2de.png" alt="Raw data query 1 col" tabindex="0" loading="lazy"><figcaption>Raw data query 1 col</figcaption></figure><center>Figure 4. Raw data query 1 col time cost(ms) IoTDB v0.11.1</center><figure><img src="https://alioss.timecho.com/docs/img/github/106251336-cf03c000-624f-11eb-8395-de5e349f47b5.png" alt="Aggregation query" tabindex="0" loading="lazy"><figcaption>Aggregation query</figcaption></figure><center>Figure 5. Aggregation query time cost(ms) IoTDB v0.11.1</center><figure><img src="https://alioss.timecho.com/docs/img/github/106251353-d32fdd80-624f-11eb-80c1-fdb4197939fe.png" alt="Downsampling query" tabindex="0" loading="lazy"><figcaption>Downsampling query</figcaption></figure><center>Figure 6. Downsampling query time cost(ms) IoTDB v0.11.1</center><figure><img src="https://alioss.timecho.com/docs/img/github/106251369-d7f49180-624f-11eb-9d19-fc7341582b90.png" alt="Latest query" tabindex="0" loading="lazy"><figcaption>Latest query</figcaption></figure><center>Figure 7. Latest query time cost(ms) IoTDB v0.11.1</center><figure><img src="https://alioss.timecho.com/docs/img/github/118790229-23e34900-b8c8-11eb-87da-ac01dd117f28.png" alt="Data compression" tabindex="0" loading="lazy"><figcaption>Data compression</figcaption></figure><center>Figure 8. Data compression IoTDB v0.11.1</center><p>We can see that IoTDB outperforms others.</p><h4 id="more-details" tabindex="-1"><a class="header-anchor" href="#more-details"><span>More details</span></a></h4><p>We provide a benchmarking tool, called IoTDB-benchamrk (<a href="https://github.com/thulab/iotdb-benchmark" target="_blank" rel="noopener noreferrer">https://github.com/thulab/iotdb-benchmark</a>, you may have to use the dev branch to compile it),<br> it supports IoTDB, InfluxDB, KairosDB, TimescaleDB, OpenTSDB. We have an <a href="https://arxiv.org/abs/1901.08304" target="_blank" rel="noopener noreferrer">article</a> for comparing these systems using the benchmark tool.<br> When we publish the article, IoTDB just entered Apache incubator, so we deleted the performance of IoTDB in that article. But after comparison, some results are presented here.</p><ul><li><p>For InfluxDB, we set the cache-max-memory-size and the max-series-perbase as unlimited (otherwise it will be timeout quickly).</p></li><li><p>For KairosDB, we set Cassandra&#39;s read_repair_chance as 0.1 (However it has no effect because we just have one node).</p></li><li><p>For TimescaleDB, we use PGTune tool to optimize PostgreSQL.</p></li></ul><p>All TSDBs run on a server with Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz，(8 cores 16 threads), 32GB memory , 256G SSD and 10T HDD.<br> The OS is Ubuntu 16.04.7 LTS, 64bits.</p><p>All clients run on a server with Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz，(6 cores 12 threads), 16GB memory , 256G SSD.<br> The OS is Ubuntu 16.04.7 LTS, 64bits.</p><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2><p>From all above experiments, we can see that IoTDB outperforms others hugely.<br> IoTDB has the minimal write latency. The larger the batch size, the higher the write throughput of IoTDB. This indicates that IoTDB is most suitable for batch data writing scenarios.<br> In high concurrency scenarios, IoTDB can also maintain a steady growth in throughput. (12 million points per second may have reached the limit of gigabit network card)<br> In raw data query, as the query scope increases, the advantages of IoTDB begin to manifest. Because the granularity of data blocks is larger and the advantages of columnar storage are used, column-based compression and columnar iterators will both accelerate the query.<br> In aggregation query, we use the statistics of the file layer and cache the statistics. Therefore, multiple queries only need to perform memory calculations (do not need to traverse the original data points, and do not need to access the disk), so the aggregation performance advantage is obvious.<br> Downsampling query scenarios is more interesting, as the time partition becomes larger and larger, the query performance of IoTDB increases gradually. Probably it has risen twice, which corresponds to the pre-calculated information of 2 granularities(3 hours and 4.5 days). Therefore, the queries in the range of 1 day and 1 week are accelerated respectively. The other databases only rose once, indicating that they only have one granular statistics.</p><p>If you are considering a TSDB for your IIoT application, Apache IoTDB, a new time series database, is your best choice.</p><p>We will update this page once we release new version and finish the experiments.<br> We also welcome more contributors correct this article and contribute IoTDB and reproduce experiments.</p>',72)]))}const d=t(i,[["render",s],["__file","TSDB-Comparison.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Reference/TSDB-Comparison.html","title":"TSDB Comparison","lang":"en-US","frontmatter":{"description":"TSDB Comparison Overview TSDB ComparisonTSDB Comparison *The table format is inspired by Andriy Zabavskyy: How to Select Time Series DB. Known Time Series Database As the time s...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Reference/TSDB-Comparison.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Reference/TSDB-Comparison.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TSDB Comparison"}],["meta",{"property":"og:description","content":"TSDB Comparison Overview TSDB ComparisonTSDB Comparison *The table format is inspired by Andriy Zabavskyy: How to Select Time Series DB. Known Time Series Database As the time s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/github/119833923-182ffc00-bf32-11eb-8b3f-9f95d3729ad2.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TSDB Comparison\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/github/119833923-182ffc00-bf32-11eb-8b3f-9f95d3729ad2.png\\",\\"https://alioss.timecho.com/docs/img/github/106251391-df1b9f80-624f-11eb-9f1f-66823839acba.png\\",\\"https://alioss.timecho.com/docs/img/github/106251411-e5aa1700-624f-11eb-8ca8-00c0627b1e96.png\\",\\"https://alioss.timecho.com/docs/img/github/106251377-daef8200-624f-11eb-9678-b1d5440be2de.png\\",\\"https://alioss.timecho.com/docs/img/github/106251336-cf03c000-624f-11eb-8395-de5e349f47b5.png\\",\\"https://alioss.timecho.com/docs/img/github/106251353-d32fdd80-624f-11eb-80c1-fdb4197939fe.png\\",\\"https://alioss.timecho.com/docs/img/github/106251369-d7f49180-624f-11eb-9d19-fc7341582b90.png\\",\\"https://alioss.timecho.com/docs/img/github/118790229-23e34900-b8c8-11eb-87da-ac01dd117f28.png\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Known Time Series Database","slug":"known-time-series-database","link":"#known-time-series-database","children":[]},{"level":2,"title":"Comparison","slug":"comparison","link":"#comparison","children":[{"level":3,"title":"Feature Comparison","slug":"feature-comparison","link":"#feature-comparison","children":[]},{"level":3,"title":"Performance Comparison","slug":"performance-comparison","link":"#performance-comparison","children":[]}]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":8.78,"words":2634},"filePathRelative":"UserGuide/V0.13.x/Reference/TSDB-Comparison.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,c as data};
