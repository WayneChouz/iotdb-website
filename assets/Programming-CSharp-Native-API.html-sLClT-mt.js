import{_ as n,c as t,b as e,o as a}from"./app-i6u37es5.js";const o={};function p(i,s){return a(),t("div",null,s[0]||(s[0]=[e(`<h1 id="c-native-api" tabindex="-1"><a class="header-anchor" href="#c-native-api"><span>C# Native API</span></a></h1><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><h3 id="install-from-nuget-package" tabindex="-1"><a class="header-anchor" href="#install-from-nuget-package"><span>Install from NuGet Package</span></a></h3><p>We have prepared Nuget Package for C# users. Users can directly install the client through .NET CLI. <a href="https://www.nuget.org/packages/Apache.IoTDB/" target="_blank" rel="noopener noreferrer">The link of our NuGet Package is here</a>. Run the following command in the command line to complete installation</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">dotnet <span class="token function">add</span> package Apache.IoTDB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Note that the <code>Apache.IoTDB</code> package only supports versions greater than <code>.net framework 4.6.1</code>.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><pre><code>.NET SDK Version &gt;= 5.0 
.NET Framework &gt;= 4.6.1
</code></pre><h2 id="how-to-use-the-client-quick-start" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-client-quick-start"><span>How to Use the Client (Quick Start)</span></a></h2><p>Users can quickly get started by referring to the use cases under the Apache-IoTDB-Client-CSharp-UserCase directory. These use cases serve as a useful resource for getting familiar with the client&#39;s functionality and capabilities.</p><p>For those who wish to delve deeper into the client&#39;s usage and explore more advanced features, the samples directory contains additional code samples.</p><h2 id="developer-environment-requirements-for-iotdb-client-csharp" tabindex="-1"><a class="header-anchor" href="#developer-environment-requirements-for-iotdb-client-csharp"><span>Developer environment requirements for iotdb-client-csharp</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.NET SDK Version &gt;= 5.0</span>
<span class="line">.NET Framework &gt;= 4.6.1</span>
<span class="line">ApacheThrift &gt;= 0.14.1</span>
<span class="line">NLog &gt;= 4.7.9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os" tabindex="-1"><a class="header-anchor" href="#os"><span>OS</span></a></h3><ul><li>Linux, Macos or other unix-like OS</li><li>Windows+bash(WSL, cygwin, Git Bash)</li></ul><h3 id="command-line-tools" tabindex="-1"><a class="header-anchor" href="#command-line-tools"><span>Command Line Tools</span></a></h3><ul><li>dotnet CLI</li><li>Thrift</li></ul><h2 id="basic-interface-description" tabindex="-1"><a class="header-anchor" href="#basic-interface-description"><span>Basic interface description</span></a></h2><p>The Session interface is semantically identical to other language clients</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token comment">// Parameters</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">string</span></span> host <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span></span> port <span class="token operator">=</span> <span class="token number">6667</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span></span> pool_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Init Session</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> session_pool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SessionPool</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> pool_size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Open Session</span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create TimeSeries </span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">CreateTimeSeries</span><span class="token punctuation">(</span><span class="token string">&quot;root.test_group.test_device.ts1&quot;</span><span class="token punctuation">,</span> TSDataType<span class="token punctuation">.</span>TEXT<span class="token punctuation">,</span> TSEncoding<span class="token punctuation">.</span>PLAIN<span class="token punctuation">,</span> Compressor<span class="token punctuation">.</span>UNCOMPRESSED<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">CreateTimeSeries</span><span class="token punctuation">(</span><span class="token string">&quot;root.test_group.test_device.ts2&quot;</span><span class="token punctuation">,</span> TSDataType<span class="token punctuation">.</span>BOOLEAN<span class="token punctuation">,</span> TSEncoding<span class="token punctuation">.</span>PLAIN<span class="token punctuation">,</span> Compressor<span class="token punctuation">.</span>UNCOMPRESSED<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">CreateTimeSeries</span><span class="token punctuation">(</span><span class="token string">&quot;root.test_group.test_device.ts3&quot;</span><span class="token punctuation">,</span> TSDataType<span class="token punctuation">.</span>INT32<span class="token punctuation">,</span> TSEncoding<span class="token punctuation">.</span>PLAIN<span class="token punctuation">,</span> Compressor<span class="token punctuation">.</span>UNCOMPRESSED<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Insert Record</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> measures <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token string">&quot;ts1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ts2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ts3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> values <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;test_text&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> timestamp <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> rowRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RowRecord</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">,</span> values<span class="token punctuation">,</span> measures<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">InsertRecordAsync</span><span class="token punctuation">(</span><span class="token string">&quot;root.test_group.test_device&quot;</span><span class="token punctuation">,</span> rowRecord<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Insert Tablet</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> timestamp_lst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span> timestamp <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> value_lst <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token string">&quot;iotdb&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> tablet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Tablet</span><span class="token punctuation">(</span><span class="token string">&quot;root.test_group.test_device&quot;</span><span class="token punctuation">,</span> measures<span class="token punctuation">,</span> value_lst<span class="token punctuation">,</span> timestamp_ls<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">InsertTabletAsync</span><span class="token punctuation">(</span>tablet<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Close Session</span></span>
<span class="line"><span class="token keyword">await</span> session_pool<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="row-record" tabindex="-1"><a class="header-anchor" href="#row-record"><span><strong>Row Record</strong></span></a></h2><ul><li><p>Encapsulate and abstract the <code>record</code> data in <strong>IoTDB</strong></p></li><li><p>e.g.</p><table><thead><tr><th>timestamp</th><th>status</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>20</td></tr></tbody></table></li><li><p>Construction：</p></li></ul><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> rowRecord <span class="token operator">=</span> </span>
<span class="line">  <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RowRecord</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> timestamps<span class="token punctuation">,</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> values<span class="token punctuation">,</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> measurements<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tablet" tabindex="-1"><a class="header-anchor" href="#tablet"><span><strong>Tablet</strong></span></a></h3><ul><li><p>A data structure similar to a table, containing several non empty data blocks of a device&#39;s rows。</p></li><li><p>e.g.</p><table><thead><tr><th>time</th><th>status</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>20</td></tr><tr><td>2</td><td>0</td><td>20</td></tr><tr><td>3</td><td>3</td><td>21</td></tr></tbody></table></li><li><p>Construction：</p></li></ul><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> tablet <span class="token operator">=</span> </span>
<span class="line">  <span class="token function">Tablet</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> deviceId<span class="token punctuation">,</span>  <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> measurements<span class="token punctuation">,</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> values<span class="token punctuation">,</span> <span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">long</span><span class="token punctuation">&gt;</span></span> timestamps<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span><strong>API</strong></span></a></h2><h3 id="basic-api" tabindex="-1"><a class="header-anchor" href="#basic-api"><span><strong>Basic API</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>Open</td><td>bool</td><td>open session</td><td>session_pool.Open(false)</td></tr><tr><td>Close</td><td>null</td><td>close session</td><td>session_pool.Close()</td></tr><tr><td>IsOpen</td><td>null</td><td>check if session is open</td><td>session_pool.IsOpen()</td></tr><tr><td>OpenDebugMode</td><td>LoggingConfiguration=null</td><td>open debug mode</td><td>session_pool.OpenDebugMode()</td></tr><tr><td>CloseDebugMode</td><td>null</td><td>close debug mode</td><td>session_pool.CloseDebugMode()</td></tr><tr><td>SetTimeZone</td><td>string</td><td>set time zone</td><td>session_pool.GetTimeZone()</td></tr><tr><td>GetTimeZone</td><td>null</td><td>get time zone</td><td>session_pool.GetTimeZone()</td></tr></tbody></table><h3 id="record-api" tabindex="-1"><a class="header-anchor" href="#record-api"><span><strong>Record API</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>InsertRecordAsync</td><td>string, RowRecord</td><td>insert single record</td><td>session_pool.InsertRecordAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE&quot;, new RowRecord(1, values, measures));</td></tr><tr><td>InsertRecordsAsync</td><td>List&lt;string&gt;, List&lt;RowRecord&gt;</td><td>insert records</td><td>session_pool.InsertRecordsAsync(device_id, rowRecords)</td></tr><tr><td>InsertRecordsOfOneDeviceAsync</td><td>string, List&lt;RowRecord&gt;</td><td>insert records of one device</td><td>session_pool.InsertRecordsOfOneDeviceAsync(device_id, rowRecords)</td></tr><tr><td>InsertRecordsOfOneDeviceSortedAsync</td><td>string, List&lt;RowRecord&gt;</td><td>insert sorted records of one device</td><td>InsertRecordsOfOneDeviceSortedAsync(deviceId, sortedRowRecords);</td></tr><tr><td>TestInsertRecordAsync</td><td>string, RowRecord</td><td>test insert record</td><td>session_pool.TestInsertRecordAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE&quot;, rowRecord)</td></tr><tr><td>TestInsertRecordsAsync</td><td>List&lt;string&gt;, List&lt;RowRecord&gt;</td><td>test insert record</td><td>session_pool.TestInsertRecordsAsync(device_id, rowRecords)</td></tr></tbody></table><h3 id="tablet-api" tabindex="-1"><a class="header-anchor" href="#tablet-api"><span><strong>Tablet API</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>InsertTabletAsync</td><td>Tablet</td><td>insert single tablet</td><td>session_pool.InsertTabletAsync(tablet)</td></tr><tr><td>InsertTabletsAsync</td><td>List&lt;Tablet&gt;</td><td>insert tablets</td><td>session_pool.InsertTabletsAsync(tablets)</td></tr><tr><td>TestInsertTabletAsync</td><td>Tablet</td><td>test insert tablet</td><td>session_pool.TestInsertTabletAsync(tablet)</td></tr><tr><td>TestInsertTabletsAsync</td><td>List&lt;Tablet&gt;</td><td>test insert tablets</td><td>session_pool.TestInsertTabletsAsync(tablets)</td></tr></tbody></table><h3 id="sql-api" tabindex="-1"><a class="header-anchor" href="#sql-api"><span><strong>SQL API</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>ExecuteQueryStatementAsync</td><td>string</td><td>execute sql query statement</td><td>session_pool.ExecuteQueryStatementAsync(&quot;select * from root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE where time&lt;15&quot;);</td></tr><tr><td>ExecuteNonQueryStatementAsync</td><td>string</td><td>execute sql nonquery statement</td><td>session_pool.ExecuteNonQueryStatementAsync( &quot;create timeseries root.97209_TEST_CSHARP_CLIENT_GROUP.TEST_CSHARP_CLIENT_DEVICE.status with datatype=BOOLEAN,encoding=PLAIN&quot;)</td></tr></tbody></table><h3 id="scheam-api" tabindex="-1"><a class="header-anchor" href="#scheam-api"><span><strong>Scheam API</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>SetStorageGroup</td><td>string</td><td>set storage group</td><td>session_pool.SetStorageGroup(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP_01&quot;)</td></tr><tr><td>CreateTimeSeries</td><td>string, TSDataType, TSEncoding, Compressor</td><td>create time series</td><td>session_pool.InsertTabletsAsync(tablets)</td></tr><tr><td>DeleteStorageGroupAsync</td><td>string</td><td>delete single storage group</td><td>session_pool.DeleteStorageGroupAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP_01&quot;)</td></tr><tr><td>DeleteStorageGroupsAsync</td><td>List&lt;string&gt;</td><td>delete storage group</td><td>session_pool.DeleteStorageGroupAsync(&quot;root.97209_TEST_CSHARP_CLIENT_GROUP&quot;)</td></tr><tr><td>CreateMultiTimeSeriesAsync</td><td>List&lt;string&gt;, List&lt;TSDataType&gt; , List&lt;TSEncoding&gt; , List&lt;Compressor&gt;</td><td>create multi time series</td><td>session_pool.CreateMultiTimeSeriesAsync(ts_path_lst, data_type_lst, encoding_lst, compressor_lst);</td></tr><tr><td>DeleteTimeSeriesAsync</td><td>List&lt;string&gt;</td><td>delete time series</td><td></td></tr><tr><td>DeleteTimeSeriesAsync</td><td>string</td><td>delete time series</td><td></td></tr><tr><td>DeleteDataAsync</td><td>List&lt;string&gt;, long, long</td><td>delete data</td><td>session_pool.DeleteDataAsync(ts_path_lst, 2, 3)</td></tr></tbody></table><h3 id="other-api" tabindex="-1"><a class="header-anchor" href="#other-api"><span><strong>Other API</strong></span></a></h3><table><thead><tr><th>api name</th><th>parameters</th><th>notes</th><th>use example</th></tr></thead><tbody><tr><td>CheckTimeSeriesExistsAsync</td><td>string</td><td>check if time series exists</td><td>session_pool.CheckTimeSeriesExistsAsync(time series)</td></tr></tbody></table><p><a href="https://github.com/apache/iotdb-client-csharp/tree/main/samples/Apache.IoTDB.Samples" target="_blank" rel="noopener noreferrer">e.g.</a></p><h2 id="sessionpool" tabindex="-1"><a class="header-anchor" href="#sessionpool"><span>SessionPool</span></a></h2><p>To implement concurrent client requests, we provide a <code>SessionPool</code> for the native interface. Since <code>SessionPool</code> itself is a superset of <code>Session</code>, when <code>SessionPool</code> is a When the <code>pool_size</code> parameter is set to 1, it reverts to the original <code>Session</code></p><p>We use the <code>ConcurrentQueue</code> data structure to encapsulate a client queue to maintain multiple connections with the server. When the <code>Open()</code> interface is called, a specified number of clients are created in the queue, and synchronous access to the queue is achieved through the <code>System.Threading.Monitor</code> class.</p><p>When a request occurs, it will try to find an idle client connection from the Connection pool. If there is no idle connection, the program will need to wait until there is an idle connection</p><p>When a connection is used up, it will automatically return to the pool and wait for the next time it is used up</p>`,45)]))}const c=n(o,[["render",p],["__file","Programming-CSharp-Native-API.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V2.0.1/Tree/API/Programming-CSharp-Native-API.html","title":"C# Native API","lang":"en-US","frontmatter":{"description":"C# Native API Installation Install from NuGet Package We have prepared Nuget Package for C# users. Users can directly install the client through .NET CLI. The link of our NuGet ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V2.0.1/Tree/API/Programming-CSharp-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V2.0.1/Tree/API/Programming-CSharp-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"C# Native API"}],["meta",{"property":"og:description","content":"C# Native API Installation Install from NuGet Package We have prepared Nuget Package for C# users. Users can directly install the client through .NET CLI. The link of our NuGet ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-13T04:33:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-13T04:33:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C# Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T04:33:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[{"level":3,"title":"Install from NuGet Package","slug":"install-from-nuget-package","link":"#install-from-nuget-package","children":[]}]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"How to Use the Client (Quick Start)","slug":"how-to-use-the-client-quick-start","link":"#how-to-use-the-client-quick-start","children":[]},{"level":2,"title":"Developer environment requirements for iotdb-client-csharp","slug":"developer-environment-requirements-for-iotdb-client-csharp","link":"#developer-environment-requirements-for-iotdb-client-csharp","children":[{"level":3,"title":"OS","slug":"os","link":"#os","children":[]},{"level":3,"title":"Command Line Tools","slug":"command-line-tools","link":"#command-line-tools","children":[]}]},{"level":2,"title":"Basic interface description","slug":"basic-interface-description","link":"#basic-interface-description","children":[]},{"level":2,"title":"Row Record","slug":"row-record","link":"#row-record","children":[{"level":3,"title":"Tablet","slug":"tablet","link":"#tablet","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Basic API","slug":"basic-api","link":"#basic-api","children":[]},{"level":3,"title":"Record API","slug":"record-api","link":"#record-api","children":[]},{"level":3,"title":"Tablet API","slug":"tablet-api","link":"#tablet-api","children":[]},{"level":3,"title":"SQL API","slug":"sql-api","link":"#sql-api","children":[]},{"level":3,"title":"Scheam API","slug":"scheam-api","link":"#scheam-api","children":[]},{"level":3,"title":"Other API","slug":"other-api","link":"#other-api","children":[]}]},{"level":2,"title":"SessionPool","slug":"sessionpool","link":"#sessionpool","children":[]}],"git":{"createdTime":1691485974000,"updatedTime":1734064398000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.18,"words":955},"filePathRelative":"UserGuide/V2.0.1/Tree/API/Programming-CSharp-Native-API.md","localizedDate":"August 8, 2023","autoDesc":true}');export{c as comp,r as data};
