import{_ as o,r as s,o as d,c as n,b as e,d as t,a,e as i}from"./app-CIPkfidu.js";const h={},l=i('<h1 id="benchmark-tool" tabindex="-1"><a class="header-anchor" href="#benchmark-tool"><span>Benchmark Tool</span></a></h1><p>IoT-benchmark is a time-series database benchmarking tool based on Java and big data environment, developed and open sourced by School of Software Tsinghua University. It is easy to use, supports multiple writing and query methods, supports storing test information and results for further query or analysis, and supports integration with Tableau to visualize test results.</p><p>Figure 1-1 below includes the test benchmark process and other extended functions. These processes can be unified by IoT-benchmark. IoT Benchmark supports a variety of workloads, including <strong>pure write, pure query, write query mixed</strong>, etc., supports <strong>software and hardware system monitoring, test metric measurement</strong> and other monitoring functions, and also realizes <strong>initializing the database automatically, test data analysis and system parameter optimization</strong> functions.</p><figure><img src="https://alioss.timecho.com/docs/img/benchmark-English1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Figure 1-1</p><p>Referring to the YCSB test tool&#39;s design idea of separating the three components of workload generation, performance metric measurement and database interface, the modular design of IoT-benchmark is shown in Figure 1-2. Different from the YCSB-based test tool system, IoT-benchmark adds a system monitoring module to support the persistence of test data and system monitoring data. In addition, some special load testing functions especially designed for time series data scenarios have been added, such as supporting batch writing and multiple out-of-sequence data writing modes for IoT scenarios.</p><figure><img src="https://alioss.timecho.com/docs/img/benchmark- English2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Figure 1-2</p><p>Currently IoT-benchmark supports the following time series databases, versions and connection methods:</p><table><thead><tr><th>Database</th><th>Version</th><th>Connection mmethod</th></tr></thead><tbody><tr><td>InfluxDB</td><td>v1.x <br> v2.0</td><td>SDK</td></tr><tr><td>TimescaleDB</td><td>--</td><td>jdbc</td></tr><tr><td>OpenTSDB</td><td>--</td><td>Http Request</td></tr><tr><td>QuestDB</td><td>v6.0.7</td><td>jdbc</td></tr><tr><td>TDengine</td><td>v2.2.0.2</td><td>jdbc</td></tr><tr><td>VictoriaMetrics</td><td>v1.64.0</td><td>Http Request</td></tr><tr><td>KairosDB</td><td>--</td><td>Http Request</td></tr><tr><td>IoTDB</td><td>v1.x <br> v0.13</td><td>jdbc、sessionByTablet、sessionByRecord、sessionByRecords</td></tr></tbody></table><p>Table 1-1 Comparison of big data test benchmarks</p><h2 id="software-installation-and-environment-setup" tabindex="-1"><a class="header-anchor" href="#software-installation-and-environment-setup"><span>Software Installation and Environment Setup</span></a></h2><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h3><ol><li>Java 8</li><li>Maven 3.6+</li><li>The corresponding appropriate version of the database, such as Apache IoTDB 1.0</li></ol><h3 id="how-to-get-iot-benchmark" tabindex="-1"><a class="header-anchor" href="#how-to-get-iot-benchmark"><span>How to Get IoT Benchmark</span></a></h3>',15),c=e("strong",null,"Get the binary package",-1),m={href:"https://github.com/thulab/iot-benchmark/releases",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/apache/iotdb/tree/rel/1.0",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"mvn clean package install -pl session -am -DskipTests",-1),g={href:"https://github.com/thulab/iot-benchmark",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"mvn clean package install -pl iotdb-1.0 -am -DskipTests",-1),b=e("code",null,"./iotdb-1.0/target/iotdb-1.0-0.0.1/iotdb-1.0-0.0.1",-1),T=i('<h3 id="iot-benchmark-s-test-package-structure" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-s-test-package-structure"><span>IoT Benchmark&#39;s Test Package Structure</span></a></h3><p>The directory structure of the test package is shown in Figure 1-3 below. The test configuration file is conf/config.properties, and the test startup scripts are benchmark.sh (Linux &amp; MacOS) and benchmark.bat (Windows). The detailed usage of the files is shown in Table 1-2.</p><figure><img src="https://alioss.timecho.com/docs/img/bm3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Figure 1-3 List of files and folders</p><table><thead><tr><th>Name</th><th>File</th><th>Usage</th></tr></thead><tbody><tr><td>benchmark.bat</td><td>-</td><td>Startup script on Windows</td></tr><tr><td>benchmark.sh</td><td>-</td><td>Startup script on Linux/Mac</td></tr><tr><td>conf</td><td>config.properties</td><td>Test scenario configuration file</td></tr><tr><td>logback.xml</td><td>-</td><td>Log output configuration file</td></tr><tr><td>lib</td><td>-</td><td>Dependency library</td></tr><tr><td>LICENSE</td><td>-</td><td>License file</td></tr><tr><td>bin</td><td>startup.sh</td><td>Init script folder</td></tr><tr><td>ser-benchmark.sh</td><td>-</td><td>Monitor mode startup script</td></tr></tbody></table><p>Table 1-2 Usage list of files and folders</p><h3 id="iot-benchmark-execution-test" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-execution-test"><span>IoT Benchmark Execution Test</span></a></h3><ol><li>Modify the configuration file according to the test requirements. For the main parameters, see next chapter. The corresponding configuration file is conf/config.properties. For example, to test Apache IoTDB 1.0, you need to modify DB_SWITCH=IoTDB-100-SESSION_BY_TABLET.</li><li>Start the time series database under test.</li><li>Running.</li><li>Start IoT-benchmark to execute the test. Observe the status of the time series database and IoT-benchmark under test during execution, and view the results and analyze the test process after execution.</li></ol><h3 id="iot-benchmark-results-interpretation" tabindex="-1"><a class="header-anchor" href="#iot-benchmark-results-interpretation"><span>IoT Benchmark Results Interpretation</span></a></h3><p>All the log files of the test are stored in the logs folder, and the test results are stored in the data/csvOutput folder after the test is completed. For example, after the test, we get the following result matrix:</p><figure><img src="https://alioss.timecho.com/docs/img/bm4.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>Result Matrix <ul><li>OkOperation: successful operations</li><li>OkPoint: For write operations, it is the number of points successfully written; for query operations, it is the number of points successfully queried.</li><li>FailOperation: failed operations</li><li>FailPoint: For write operations, it is the number of write failure points</li></ul></li><li>Latency(mx) Matrix <ul><li>AVG: average operation time</li><li>MIN: minimum operation time</li><li>Pn: the quantile value of the overall distribution of operations, for example, P25 is the lower quartile.</li></ul></li></ul><h2 id="main-parameters" tabindex="-1"><a class="header-anchor" href="#main-parameters"><span>Main Parameters</span></a></h2><p>This chapter mainly explains the purpose and configuration method of the main parameters.</p><h3 id="working-mode-and-operation-proportion" tabindex="-1"><a class="header-anchor" href="#working-mode-and-operation-proportion"><span>Working Mode and Operation Proportion</span></a></h3><ul><li><p>The working mode parameter &quot;BENCHMARK_WORK_MODE&quot; can be selected as &quot;default mode&quot; and &quot;server monitoring&quot;; the &quot;server monitoring&quot; mode can be started directly by executing the ser-benchmark.sh script, and the script will automatically modify this parameter. &quot;Default mode&quot; is a commonly used test mode, combined with the configuration of the OPERATION_PROPORTION parameter to achieve the definition of test operation proportions of &quot;pure write&quot;, &quot;pure query&quot; and &quot;read-write mix&quot;.</p></li><li><p>When running ServerMode to monitor the operating environment of the time series database under test, IoT-benchmark relies on sysstat software related commands; if MySQL or IoTDB is selected for persistent test process data, this type of database needs to be installed; the recording mode of ServerMode and CSV can only be used in the Linux system to record relevant system information during the test. Therefore, we recommend using MacOs or Linux system. This article uses Linux (Centos7) system as an example. If you use Windows system, you can use the benchmark.bat script in the conf folder to start IoT-benchmark.</p></li></ul><p>Table 1-3 Test mode</p><table><thead><tr><th>Mode Name</th><th>BENCHMARK_WORK_MODE</th><th>Description</th></tr></thead><tbody><tr><td>default mode</td><td>testWithDefaultPath</td><td>Supports mixed workloads with multiple read and write operations</td></tr><tr><td>server mode</td><td>serverMODE</td><td>Server resource usage monitoring mode (running in this mode is started by the ser-benchmark.sh script, no need to manually configure this parameter)</td></tr></tbody></table><h3 id="server-connection-information" tabindex="-1"><a class="header-anchor" href="#server-connection-information"><span>Server Connection Information</span></a></h3><p>After the working mode is specified, how to inform IoT-benchmark of the information of the time series database under test? Currently, the type of the time-series database under test is informed through &quot;DB_SWITCH&quot;; the network address of the time-series database under test is informed through &quot;HOST&quot;; the network port of the time-series database under test is informed through &quot;PORT&quot;; the login user name of the time-series database under test is informed through &quot;USERNAME&quot;; &quot;PASSWORD&quot; informs the password of the login user of the time series database under test; informs the name of the time series database under test through &quot;DB_NAME&quot;; informs the connection authentication token of the time series database under test through &quot;TOKEN&quot; (used by InfluxDB 2.0).</p><h3 id="write-scene-setup-parameters" tabindex="-1"><a class="header-anchor" href="#write-scene-setup-parameters"><span>Write Scene Setup Parameters</span></a></h3><p>Table 1-4 Write scene setup parameters</p><table><thead><tr><th>Parameter Name</th><th>Type</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td>CLIENT_NUMBER</td><td>Integer</td><td>100</td><td>Total number of clients</td></tr><tr><td>GROUP_NUMBER</td><td>Integer</td><td>20</td><td>Number of storage groups; only for IoTDB.</td></tr><tr><td>DEVICE_NUMBER</td><td>Integer</td><td>100</td><td>Total number of devices</td></tr><tr><td>SENSOR_NUMBER</td><td>Integer</td><td>300</td><td>Total number of sensors per device</td></tr><tr><td>INSERT_DATATYPE_PROPORTION</td><td>String</td><td>1:1:1:1:1:1</td><td>the data type proportion of the device, BOOLEAN:INT32:INT64:FLOAT:DOUBLE:TEXT</td></tr><tr><td>POINT_STEP</td><td>Integer</td><td>1000</td><td>Timestamp interval, that is, the fixed length between two timestamps of generated data.</td></tr><tr><td>OP_MIN_INTERVAL</td><td>Integer</td><td>0</td><td>Minimum operation execution interval: if the operation time is greater than this value, execute the next one immediately, otherwise wait (OP_MIN_INTERVAL-actual execution time) ms; if it is 0, the parameter will not take effect; if it is -1, its value is consistent with POINT_STEP.</td></tr><tr><td>IS_OUT_OF_ORDER</td><td>Boolean</td><td>false</td><td>Whether to write out of order</td></tr><tr><td>OUT_OF_ORDER_RATIO</td><td>Float</td><td>0.3</td><td>Ratio of data written out of order</td></tr><tr><td>BATCH_SIZE_PER_WRITE</td><td>Integer</td><td>1</td><td>Number of data rows written in batches (how many rows of data are written at a time)</td></tr><tr><td>START_TIME</td><td>Timestamp</td><td>2022-10-30T00:00:00+08:00</td><td>The start timestamp of writing data; use this timestamp as the starting point to start the simulation to create the data timestamp.</td></tr><tr><td>LOOP</td><td>Integer</td><td>86400</td><td>Total number of operations: Each type of operation will be divided according to the ratio defined by OPERATION_PROPORTION</td></tr><tr><td>OPERATION_PROPORTION</td><td>String</td><td>1:0:0:0:0:0:0:0:0:0:0</td><td>The ratio of each operation. Write:Q1:Q2:Q3:Q4:Q5:Q6:Q7:Q8:Q9:Q10, please note the use of English colons. Each term in the scale is an integer.</td></tr></tbody></table><p>According to the configuration parameters in Table 1-4, the test scenario can be described as follows: write 30,000 (100 devices, 300 sensors for each device) time series sequential data for a day on October 30, 2022 to the time series database under test, in total 2.592 billion data points. The 300 sensor data types of each device are 50 Booleans, 50 integers, 50 long integers, 50 floats, 50 doubles, and 50 characters. If we change the value of IS_OUT_OF_ORDER in the table to true, then the scenario is: write 30,000 time series data on October 30, 2022 to the measured time series database, and there are 30% out of order data ( arrives in the time series database later than other data points whose generation time is later than itself).</p><h3 id="query-scene-setup-parameters" tabindex="-1"><a class="header-anchor" href="#query-scene-setup-parameters"><span>Query Scene Setup Parameters</span></a></h3><p>Table 1-5 Query scene setup parameters</p><table><thead><tr><th>Parameter Name</th><th>Type</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td>QUERY_DEVICE_NUM</td><td>Integer</td><td>2</td><td>The number of devices involved in the query in each query statement.</td></tr><tr><td>QUERY_SENSOR_NUM</td><td>Integer</td><td>2</td><td>The number of sensors involved in the query in each query statement.</td></tr><tr><td>QUERY_AGGREGATE_FUN</td><td>String</td><td>count</td><td>Aggregate functions used in aggregate queries, such as count, avg, sum, max_time, etc.</td></tr><tr><td>STEP_SIZE</td><td>Integer</td><td>1</td><td>The change step of the starting time point of the time filter condition, if set to 0, the time filter condition of each query is the same, unit: POINT_STEP.</td></tr><tr><td>QUERY_INTERVAL</td><td>Integer</td><td>250000</td><td>The time interval between the start time and the end time in the start and end time query, and the time interval in Group By.</td></tr><tr><td>QUERY_LOWER_VALUE</td><td>Integer</td><td>-5</td><td>Parameters for conditional query clauses, where xxx &gt; QUERY_LOWER_VALUE.</td></tr><tr><td>GROUP_BY_TIME_UNIT</td><td>Integer</td><td>20000</td><td>The size of the group in the Group By statement.</td></tr><tr><td>LOOP</td><td>Integer</td><td>10</td><td>Total number of operations. Each type of operation will be divided according to the ratio defined by OPERATION_PROPORTION.</td></tr><tr><td>OPERATION_PROPORTION</td><td>String</td><td>0:0:0:0:0:0:0:0:0:0:1</td><td>Write:Q1:Q2:Q3:Q4:Q5:Q6:Q7:Q8:Q9:Q10</td></tr></tbody></table><p>Table 1-6 Query types and example SQL</p><table><thead><tr><th>Id</th><th>Query Type</th><th>IoTDB Example SQL</th></tr></thead><tbody><tr><td>Q1</td><td>exact point query</td><td>select v1 from root.db.d1 where time = ?</td></tr><tr><td>Q2</td><td>time range query</td><td>select v1 from root.db.d1 where time &gt; ? and time &lt; ?</td></tr><tr><td>Q3</td><td>time range query with value filtering</td><td>select v1 from root.db.d1 where time &gt; ? and time &lt; ? and v1 &gt; ?</td></tr><tr><td>Q4</td><td>time range aggregation query</td><td>select count(v1) from root.db.d1 where and time &gt; ? and time &lt; ?</td></tr><tr><td>Q5</td><td>full time range aggregate query with value filtering</td><td>select count(v1) from root.db.d1 where v1 &gt; ?</td></tr><tr><td>Q6</td><td>time range aggregation query with value filtering</td><td>select count(v1) from root.db.d1 where v1 &gt; ? and time &gt; ? and time &lt; ?</td></tr><tr><td>Q7</td><td>time grouping aggregation query</td><td>select count(v1) from root.db.d1 group by ([?, ?), ?, ?)</td></tr><tr><td>Q8</td><td>latest point query</td><td>select last v1 from root.db.d1</td></tr><tr><td>Q9</td><td>reverse order time range query</td><td>select v1 from root.sg.d1 where time &gt; ? and time &lt; ? order by time desc</td></tr><tr><td>Q10</td><td>reverse order time range query with value filtering</td><td>select v1 from root.sg.d1 where time &gt; ? and time &lt; ? and v1 &gt; ? order by time desc</td></tr></tbody></table><p>According to the configuration parameters in Table 1-5, the test scenario can be described as follows: Execute 10 reverse order time range queries with value filtering for 2 devices and 2 sensors from the time series database under test. The SQL statement is: <code>select s_0,s_31from data where time &gt;2022-10-30T00:00:00+08:00 and time &lt; 2022-10-30T00:04:10+08:00 and s_0 &gt; -5 and device in d_21,d_46 order by time desc</code>.</p><h3 id="persistence-of-test-process-and-test-results" tabindex="-1"><a class="header-anchor" href="#persistence-of-test-process-and-test-results"><span>Persistence of Test Process and Test Results</span></a></h3><p>IoT-benchmark currently supports persisting the test process and test results to IoTDB, MySQL, and CSV through the configuration parameter &quot;TEST_DATA_PERSISTENCE&quot;; writing to MySQL and CSV can define the upper limit of the number of rows in the sub-database and sub-table, such as &quot;RECORD_SPLIT=true, RECORD_SPLIT_MAX_LINE=10000000&quot; means that each database table or CSV file is divided and stored according to the total number of 10 million rows; if the records are recorded to MySQL or IoTDB, database link information needs to be provided, including &quot;TEST_DATA_STORE_IP&quot; the IP address of the database, &quot;TEST_DATA_STORE_PORT&quot; the port number of the database, &quot;TEST_DATA_STORE_DB&quot; the name of the database, &quot;TEST_DATA_STORE_USER&quot; the database user name, and &quot;TEST_DATA_STORE_PW&quot; the database user password.</p><p>If we set &quot;TEST_DATA_PERSISTENCE=CSV&quot;, we can see the newly generated data folder under the IoT-benchmark root directory during and after the test execution, which contains the csv folder to record the test process; the csvOutput folder to record the test results . If we set &quot;TEST_DATA_PERSISTENCE=MySQL&quot;, it will create a data table named &quot;testWithDefaultPath_tested database name_remarks_test start time&quot; in the specified MySQL database before the test starts to record the test process; it will record the test process in the &quot;CONFIG&quot; data table (create the table if it does not exist), write the configuration information of this test; when the test is completed, the result of this test will be written in the data table named &quot;FINAL_RESULT&quot; (create the table if it does not exist).</p><h2 id="use-case" tabindex="-1"><a class="header-anchor" href="#use-case"><span>Use Case</span></a></h2><p>We take the application of CRRC Qingdao Sifang Vehicle Research Institute Co., Ltd. as an example, and refer to the scene described in &quot;Apache IoTDB in Intelligent Operation and Maintenance Platform Storage&quot; for practical operation instructions.</p><p>Test objective: Simulate the actual needs of switching time series databases in the scene of CRRC Qingdao Sifang Institute, and compare the performance of the expected IoTDB and KairosDB used by the original system.</p><p>Test environment: In order to ensure that the impact of other irrelevant services and processes on database performance and the mutual influence between different databases are eliminated during the experiment, the local databases in this experiment are deployed and run on multiple independent virtual servers with the same resource configuration. Therefore, this experiment set up 4 Linux (CentOS7 /x86) virtual machines, and deployed IoT-benchmark, IoTDB database, KairosDB database, and MySQL database on them respectively. The specific resource configuration of each virtual machine is shown in Table 2-1. The specific usage of each virtual machine is shown in Table 2-2.</p><p>Table 2-1 Virtual machine configuration information</p><table><thead><tr><th>Hardware Configuration Information</th><th>Value</th></tr></thead><tbody><tr><td>OS system</td><td>CentOS7</td></tr><tr><td>number of CPU cores</td><td>16</td></tr><tr><td>memory</td><td>32G</td></tr><tr><td>hard disk</td><td>200G</td></tr><tr><td>network</td><td>Gigabit</td></tr></tbody></table><p>Table 2-2 Virtual machine usage</p><table><thead><tr><th>IP</th><th>Usage</th></tr></thead><tbody><tr><td>172.21.4.2</td><td>IoT-benchmark</td></tr><tr><td>172.21.4.3</td><td>Apache-iotdb</td></tr><tr><td>172.21.4.4</td><td>KaiosDB</td></tr><tr><td>172.21.4.5</td><td>MySQL</td></tr></tbody></table><h3 id="write-test" tabindex="-1"><a class="header-anchor" href="#write-test"><span>Write Test</span></a></h3><p>Scenario description: Create 100 clients to simulate 100 trains, each train has 3000 sensors, the data type is DOUBLE, the data time interval is 500ms (2Hz), and they are sent sequentially. Referring to the above requirements, we need to modify the IoT-benchmark configuration parameters as listed in Table 2-3.</p><p>Table 2-3 Configuration parameter information</p><table><thead><tr><th>Parameter Name</th><th>IoTDB Value</th><th>KairosDB Value</th></tr></thead><tbody><tr><td>DB_SWITCH</td><td>IoTDB-013-SESSION_BY_TABLET</td><td>KairosDB</td></tr><tr><td>HOST</td><td>172.21.4.3</td><td>172.21.4.4</td></tr><tr><td>PORT</td><td>6667</td><td>8080</td></tr><tr><td>BENCHMARK_WORK_MODE</td><td>testWithDefaultPath</td><td></td></tr><tr><td>OPERATION_PROPORTION</td><td>1:0:0:0:0:0:0:0:0:0:0</td><td></td></tr><tr><td>CLIENT_NUMBER</td><td>100</td><td></td></tr><tr><td>GROUP_NUMBER</td><td>10</td><td></td></tr><tr><td>DEVICE_NUMBER</td><td>100</td><td></td></tr><tr><td>SENSOR_NUMBER</td><td>3000</td><td></td></tr><tr><td>INSERT_DATATYPE_PROPORTION</td><td>0:0:0:0:1:0</td><td></td></tr><tr><td>POINT_STEP</td><td>500</td><td></td></tr><tr><td>OP_MIN_INTERVAL</td><td>0</td><td></td></tr><tr><td>IS_OUT_OF_ORDER</td><td>false</td><td></td></tr><tr><td>BATCH_SIZE_PER_WRITE</td><td>1</td><td></td></tr><tr><td>LOOP</td><td>10000</td><td></td></tr><tr><td>TEST_DATA_PERSISTENCE</td><td>MySQL</td><td></td></tr><tr><td>TEST_DATA_STORE_IP</td><td>172.21.4.5</td><td></td></tr><tr><td>TEST_DATA_STORE_PORT</td><td>3306</td><td></td></tr><tr><td>TEST_DATA_STORE_DB</td><td>demo</td><td></td></tr><tr><td>TEST_DATA_STORE_USER</td><td>root</td><td></td></tr><tr><td>TEST_DATA_STORE_PW</td><td>admin</td><td></td></tr><tr><td>REMARK</td><td>demo</td><td></td></tr></tbody></table><p>First, start the tested time series databases Apache-IoTDB and KairosDB on 172.21.4.3 and 172.21.4.4 respectively, and then start server resource monitoring through the ser-benchamrk.sh script on 172.21.4.2, 172.21.4.3 and 172.21.4.4 (Figure 2-1). Then modify the conf/config.properties files in the iotdb-0.13-0.0.1 and kairosdb-0.0.1 folders in 172.21.4.2 according to Table 2-3 to meet the test requirements. Use benchmark.sh to start the writing test of Apache-IoTDB and KairosDB successively.</p><figure><img src="https://alioss.timecho.com/docs/img/bm5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Figure 2-1 Server monitoring tasks</p><p>For example, if we first start the test on KairosDB, IoT-benchmark will create a CONFIG data table in the MySQL database to store the configuration information of this test (Figure 2-2), and there will be a log output of the current test progress during the test execution (Figure 2-3) . When the test is completed, the test result will be output (Figure 2-3), and the result will be written into the FINAL_RESULT data table (Figure 2-4).</p><figure><img src="https://alioss.timecho.com/docs/img/bm6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Figure 2-2 Test configuration information table</p><p><img src="https://alioss.timecho.com/docs/img/bm7.png" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/bm8.png" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/bm9.png" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/bm10.png" alt="" loading="lazy"></p><p>Figure 2-3 Test progress and results</p><figure><img src="https://alioss.timecho.com/docs/img/bm11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Figure 2-4 Test result table</p><p>Afterwards, we will start the test on Apache-IoTDB. The same IoT-benchmark will write the test configuration information in the MySQL database CONFIG data table. During the test execution, there will be a log to output the current test progress. When the test is completed, the test result will be output, and the result will be written into the FINAL_RESULT data table.</p><p>According to the test result information, we know that under the same configuration the write delay times of Apache-IoTDB and KairosDB are 55.98ms and 1324.45ms respectively; the write throughputs are 5,125,600.86 points/second and 224,819.01 points/second respectively; the tests were executed respectively 585.30 seconds and 11777.99 seconds. And KairosDB has a write failure. After investigation, it is found that the data disk usage has reached 100%, and there is no disk space to continue receiving data. However, Apache-IoTDB has no write failure, and the disk space occupied after all data is written is only 4.7G (as shown in Figure 2-5); Apache-IoTDB is better than KairosDB in terms of write throughput and disk occupation. Of course, there will be other tests in the follow-up to observe and compare from various aspects, such as query performance, file compression ratio, data security, etc.</p><figure><img src="https://alioss.timecho.com/docs/img/bm12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Figure 2-5 Disk usage</p><p>So what is the resource usage of each server during the test? What is the specific performance of each write operation? At this time, we can visualize the data in the server monitoring table and test process recording table by installing and using Tableau. The use of Tableau will not be introduced in this article. After connecting to the data table for test data persistence, the specific results are as follows (taking Apache-IoTDB as an example):</p><p><img src="https://alioss.timecho.com/docs/img/bm13.png" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/bm14.png" alt="" loading="lazy"></p><p>Figure 2-6 Visualization of testing process in Tableau</p><h3 id="query-test" tabindex="-1"><a class="header-anchor" href="#query-test"><span>Query Test</span></a></h3><p>Scenario description: In the writing test scenario, 10 clients are simulated to perform all types of query tasks on the data stored in the time series database Apache-IoTDB. The configuration is as follows.</p><p>Table 2-4 Configuration parameter information</p><table><thead><tr><th>Parameter Name</th><th>Example</th></tr></thead><tbody><tr><td>CLIENT_NUMBER</td><td>100</td></tr><tr><td>QUERY_DEVICE_NUM</td><td>2</td></tr><tr><td>QUERY_SENSOR_NUM</td><td>2</td></tr><tr><td>QUERY_AGGREGATE_FUN</td><td>count</td></tr><tr><td>STEP_SIZE</td><td>1</td></tr><tr><td>QUERY_INTERVAL</td><td>250000</td></tr><tr><td>QUERY_LOWER_VALUE</td><td>-5</td></tr><tr><td>GROUP_BY_TIME_UNIT</td><td>20000</td></tr><tr><td>LOOP</td><td>30</td></tr><tr><td>OPERATION_PROPORTION</td><td>0:1:1:1:1:1:1:1:1:1:1</td></tr></tbody></table><p>Results:</p><figure><img src="https://alioss.timecho.com/docs/img/bm15.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Figure 2-7 Query test results</p><h3 id="description-of-other-parameters" tabindex="-1"><a class="header-anchor" href="#description-of-other-parameters"><span>Description of Other Parameters</span></a></h3><p>In the previous chapters, the write performance comparison between Apache-IoTDB and KairosDB was performed, but if the user wants to perform a simulated real write rate test, how to configure it? How to control if the test time is too long? Are there any regularities in the generated simulated data? If the IoT-Benchmark server configuration is low, can multiple machines be used to simulate pressure output?</p><p>Table 2-5 Configuration parameter information</p><table><thead><tr><th>Scenario</th><th>Parameter</th><th>Value</th><th>Notes</th></tr></thead><tbody><tr><td>Simulate real write rate</td><td>OP_INTERVAL</td><td>-1</td><td>You can also enter an integer to control the operation interval.</td></tr><tr><td>Specify test duration (1 hour)</td><td>TEST_MAX_TIME</td><td>3600000</td><td>The unit is ms; the LOOP execution time needs to be greater than this value.</td></tr><tr><td>Define the law of simulated data: support all data types, and the number is evenly classified; support five data distributions, and the number is evenly distributed; the length of the string is 10; the number of decimal places is 2.</td><td>INSERT_DATATYPE_PROPORTION</td><td>1:1:1:1:1:1</td><td>Data type distribution proportion</td></tr><tr><td>LINE_RATIO</td><td>1</td><td>linear</td><td></td></tr><tr><td>SIN_RATIO</td><td>1</td><td>Fourier function</td><td></td></tr><tr><td>SQUARE_RATIO</td><td>1</td><td>Square wave</td><td></td></tr><tr><td>RANDOM_RATIO</td><td>1</td><td>Random number</td><td></td></tr><tr><td>CONSTANT_RATIO</td><td>1</td><td>Constant</td><td></td></tr><tr><td>STRING_LENGTH</td><td>10</td><td>String length</td><td></td></tr><tr><td>DOUBLE_LENGTH</td><td>2</td><td>Decimal places</td><td></td></tr><tr><td>Three machines simulate data writing of 300 devices</td><td>BENCHMARK_CLUSTER</td><td>true</td><td>Enable multi-benchmark mode</td></tr><tr><td>BENCHMARK_INDEX</td><td>0, 1, 3</td><td>Take the writing parameters in the previous chapter as an example: No. 0 is responsible for writing data of device numbers 0-99; No. 1 is responsible for writing data of device numbers 100-199; No. 2 is responsible for writing data of device numbers 200-299.</td><td></td></tr></tbody></table>',73);function y(_,w){const r=s("ExternalLinkIcon");return d(),n("div",null,[l,e("ul",null,[e("li",null,[c,t(": Enter "),e("a",m,[t("https://github.com/thulab/iot-benchmark/releases"),a(r)]),t(" to download the required installation package. Download it as a compressed file, select a folder to decompress and use it.")]),e("li",null,[t("Compiled from source (can be tested with Apache IoTDB 1.0): "),e("ul",null,[e("li",null,[t("The first step (compile the latest IoTDB Session package): Enter the official website "),e("a",p,[t("https://github.com/apache/iotdb/tree/rel/1.0"),a(r)]),t(" to download the IoTDB source code, and run the command "),u,t(" in the root directory to compiles the latest package for IoTDB Session.")]),e("li",null,[t("The second step (compile the IoTDB Benchmark test package): Enter the official website "),e("a",g,[t("https://github.com/thulab/iot-benchmark"),a(r)]),t(" to download the source code, run "),f,t(" in the root directory to compile Apache IoTDB version 1.0 test package. The relative path between the test package and the root directory is "),b,t(".")])])])]),T])}const E=o(h,[["render",y],["__file","Benchmark.html.vue"]]),S=JSON.parse(`{"path":"/UserGuide/V1.2.x/Tools-System/Benchmark.html","title":"Benchmark Tool","lang":"en-US","frontmatter":{"description":"Benchmark Tool IoT-benchmark is a time-series database benchmarking tool based on Java and big data environment, developed and open sourced by School of Software Tsinghua Univer...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Tools-System/Benchmark.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Tools-System/Benchmark.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Benchmark Tool"}],["meta",{"property":"og:description","content":"Benchmark Tool IoT-benchmark is a time-series database benchmarking tool based on Java and big data environment, developed and open sourced by School of Software Tsinghua Univer..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/benchmark-English1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-15T11:38:36.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T11:38:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Benchmark Tool\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/benchmark-English1.png\\",\\"https://alioss.timecho.com/docs/img/benchmark-%20English2.png\\",\\"https://alioss.timecho.com/docs/img/bm3.png\\",\\"https://alioss.timecho.com/docs/img/bm4.png\\",\\"https://alioss.timecho.com/docs/img/bm5.png\\",\\"https://alioss.timecho.com/docs/img/bm6.png\\",\\"https://alioss.timecho.com/docs/img/bm7.png\\",\\"https://alioss.timecho.com/docs/img/bm8.png\\",\\"https://alioss.timecho.com/docs/img/bm9.png\\",\\"https://alioss.timecho.com/docs/img/bm10.png\\",\\"https://alioss.timecho.com/docs/img/bm11.png\\",\\"https://alioss.timecho.com/docs/img/bm12.png\\",\\"https://alioss.timecho.com/docs/img/bm13.png\\",\\"https://alioss.timecho.com/docs/img/bm14.png\\",\\"https://alioss.timecho.com/docs/img/bm15.png\\"],\\"dateModified\\":\\"2024-08-15T11:38:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Software Installation and Environment Setup","slug":"software-installation-and-environment-setup","link":"#software-installation-and-environment-setup","children":[{"level":3,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":3,"title":"How to Get IoT Benchmark","slug":"how-to-get-iot-benchmark","link":"#how-to-get-iot-benchmark","children":[]},{"level":3,"title":"IoT Benchmark's Test Package Structure","slug":"iot-benchmark-s-test-package-structure","link":"#iot-benchmark-s-test-package-structure","children":[]},{"level":3,"title":"IoT Benchmark Execution Test","slug":"iot-benchmark-execution-test","link":"#iot-benchmark-execution-test","children":[]},{"level":3,"title":"IoT Benchmark Results Interpretation","slug":"iot-benchmark-results-interpretation","link":"#iot-benchmark-results-interpretation","children":[]}]},{"level":2,"title":"Main Parameters","slug":"main-parameters","link":"#main-parameters","children":[{"level":3,"title":"Working Mode and Operation Proportion","slug":"working-mode-and-operation-proportion","link":"#working-mode-and-operation-proportion","children":[]},{"level":3,"title":"Server Connection Information","slug":"server-connection-information","link":"#server-connection-information","children":[]},{"level":3,"title":"Write Scene Setup Parameters","slug":"write-scene-setup-parameters","link":"#write-scene-setup-parameters","children":[]},{"level":3,"title":"Query Scene Setup Parameters","slug":"query-scene-setup-parameters","link":"#query-scene-setup-parameters","children":[]},{"level":3,"title":"Persistence of Test Process and Test Results","slug":"persistence-of-test-process-and-test-results","link":"#persistence-of-test-process-and-test-results","children":[]}]},{"level":2,"title":"Use Case","slug":"use-case","link":"#use-case","children":[{"level":3,"title":"Write Test","slug":"write-test","link":"#write-test","children":[]},{"level":3,"title":"Query Test","slug":"query-test","link":"#query-test","children":[]},{"level":3,"title":"Description of Other Parameters","slug":"description-of-other-parameters","link":"#description-of-other-parameters","children":[]}]}],"git":{"createdTime":1690869728000,"updatedTime":1723721916000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":2},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":11.85,"words":3555},"filePathRelative":"UserGuide/V1.2.x/Tools-System/Benchmark.md","localizedDate":"August 1, 2023","autoDesc":true}`);export{E as comp,S as data};
