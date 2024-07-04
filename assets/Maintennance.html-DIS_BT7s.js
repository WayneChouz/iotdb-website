import{_ as e,o as n,c as a,e as s}from"./app-nVIpYHtH.js";const t={},i=s(`<h1 id="maintennance" tabindex="-1"><a class="header-anchor" href="#maintennance"><span>Maintennance</span></a></h1><h2 id="explain-tool" tabindex="-1"><a class="header-anchor" href="#explain-tool"><span>Explain tool</span></a></h2><h3 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h3><p>The significance of query analysis lies in assisting users to understand the execution mechanism and performance bottlenecks of queries, thereby achieving query optimization and performance improvement. This concerns not only the efficiency of query execution but also directly affects the user experience of applications and the effective use of resources. To conduct effective query analysis, IoTDB provides query analysis tools: Explain and Explain Analyze.</p><p>The Explain tool allows users to preview the execution plan of a query SQL, including how IoTDB organizes data retrieval and processing.</p><p>Explain Analyze goes further by adding performance analysis, fully executing the SQL and displaying the time and resources consumed during the execution of the query. It provides detailed information for IoTDB users to deeply understand query details and perform query optimization.</p><h4 id="explain" tabindex="-1"><a class="header-anchor" href="#explain"><span>Explain</span></a></h4><p>The Explain command allows users to view the execution plan of an SQL query. The execution plan is presented in the form of operators, describing how IoTDB will execute the query. The output of Explain includes information such as data access strategies, whether filter conditions are pushed down, and the distribution of the query plan across different nodes, providing users with a means to visualize the internal logic of the query execution. Its syntax is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">EXPLAIN</span> <span class="token operator">&lt;</span>SELECT_STATEMENT<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Where SELECT_STATEMENT is the SQL statement related to the query. An example of usage is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span><span class="token keyword">explain</span><span class="token punctuation">.</span><span class="token keyword">data</span><span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1710494762</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;explain&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token keyword">explain</span><span class="token punctuation">.</span><span class="token keyword">data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute the SQL and get the following result：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------------------------------------------------+
|                                                      distribution plan|
+-----------------------------------------------------------------------+
|                         ┌───────────────────┐                         |
|                         │FullOuterTimeJoin-3│                         |
|                         │Order: ASC         │                         |
|                         └───────────────────┘                         |
|                 ┌─────────────────┴─────────────────┐                 |
|                 │                                   │                 |
|┌─────────────────────────────────┐ ┌─────────────────────────────────┐|
|│SeriesScan-4                     │ │SeriesScan-5                     │|
|│Series: root.explain.data.column1│ │Series: root.explain.data.column2│|
|│Partition: 3                     │ │Partition: 3                     │|
|└─────────────────────────────────┘ └─────────────────────────────────┘|
+-----------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It can be seen that IoTDB retrieves the data for column1 and column2 through two separate SeriesScan nodes, and finally connects them using fullOuterTimeJoin.</p><h4 id="explain-analyze" tabindex="-1"><a class="header-anchor" href="#explain-analyze"><span>Explain Analyze</span></a></h4><p>Explain Analyze is a performance analysis SQL built into the IoTDB query engine. Unlike Explain, it executes the corresponding query plan and collects execution information. It can be used to track the specific performance distribution of a query, observe resources, and conduct performance tuning and anomaly analysis.</p><p>Compared to other analysis methods where can be attached in IoTDB, Explain Analyze does not require deployment effort and can analyze individual SQL statements, allowing for more precise problem identification:</p><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Installation Difficulty</th><th style="text-align:left;">Impact on Business</th><th style="text-align:left;">Supports Distributed System</th><th style="text-align:left;">Analysis of Individual SQL</th></tr></thead><tbody><tr><td style="text-align:left;">Arthas Sampling</td><td style="text-align:left;">Requires downloading and running files on the machine: some internal networks cannot directly install Arthas; and sometimes, it requires restarting the application after installation</td><td style="text-align:left;">CPU sampling may affect the response speed of online business</td><td style="text-align:left;">No</td><td style="text-align:left;">Online businesses usually have various query loads, and the overall monitoring metrics and sampling results can only reflect the overall load and response times of all queries, unable to analyze the response time of individual slow SQL</td></tr><tr><td style="text-align:left;">Monitor Tool</td><td style="text-align:left;">Requires enabling monitoring services or deploying Grafana, and open-source users do not have a monitoring dashboard</td><td style="text-align:left;">Recording metrics will bring additional response time</td><td style="text-align:left;">Yes</td><td style="text-align:left;">Same as Arthas</td></tr><tr><td style="text-align:left;">Explain Analyze</td><td style="text-align:left;">No installation required, available upon starting IoTDB</td><td style="text-align:left;">Only affects the single query being analyzed, with no impact on other online loads</td><td style="text-align:left;">Yes</td><td style="text-align:left;">Allows for tracking and analysis of individual SQL statements</td></tr></tbody></table><p>Its syntax is as following：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">EXPLAIN</span> <span class="token keyword">ANALYZE</span> <span class="token punctuation">[</span>VERBOSE<span class="token punctuation">]</span> <span class="token operator">&lt;</span>SELECT_STATEMENT<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In it, SELECT_STATEMENT corresponds to the query statement to be analyzed. By default, in order to simplify the results as much as possible, EXPLAIN ANALYZE will omit some information. Specifying VERBOSE can be used to output this information.</p><p>The result set of EXPLAIN ANALYZE will include the following information:</p><figure><img src="https://alioss.timecho.com/docs/img/image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>QueryStatistics contains the statistical information at the query level, primarily including the time consumed during the plan parsing phase, Fragment metadata, and other information.</p><p>FragmentInstance is IoTDB&#39;s encapsulation of a query plan on a node. Each node will output a Fragment information in the result set, mainly including FragmentStatistics and operator information.</p><p>FragmentStatistics includes the statistical information of a Fragment, such as the total actual duration (wall-clock time), the TsFiles involved, scheduling information, etc. The information of a Fragment is also displayed in a tree hierarchy of plan nodes within that Fragment, including:</p><ul><li>CPU runtime</li><li>Number of output rows</li><li>Number of times a specific interface is called</li><li>Memory usage</li><li>Node-specific custom information</li></ul><p>Below is an example of Explain Analyze:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span><span class="token keyword">explain</span><span class="token punctuation">.</span><span class="token keyword">analyze</span><span class="token punctuation">.</span><span class="token keyword">data</span><span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1710494762</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;explain&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;analyze&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span><span class="token keyword">explain</span><span class="token punctuation">.</span><span class="token keyword">analyze</span><span class="token punctuation">.</span><span class="token keyword">data</span><span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1710494862</span><span class="token punctuation">,</span> <span class="token string">&quot;hello2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;explain2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;analyze2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span><span class="token keyword">explain</span><span class="token punctuation">.</span><span class="token keyword">analyze</span><span class="token punctuation">.</span><span class="token keyword">data</span><span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> column1<span class="token punctuation">,</span> column2<span class="token punctuation">,</span> column3<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1710494962</span><span class="token punctuation">,</span> <span class="token string">&quot;hello3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;explain3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;analyze3&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">explain</span> <span class="token keyword">analyze</span> <span class="token keyword">select</span> column2 <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token keyword">explain</span><span class="token punctuation">.</span><span class="token keyword">analyze</span><span class="token punctuation">.</span><span class="token keyword">data</span> <span class="token keyword">order</span> <span class="token keyword">by</span> column1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get result following:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-------------------------------------------------------------------------------------------------+
|                                                                                  Explain Analyze|
+-------------------------------------------------------------------------------------------------+
|Analyze Cost: 1.739 ms                                                                           |
|Fetch Partition Cost: 0.940 ms                                                                   |
|Fetch Schema Cost: 0.066 ms                                                                      |
|Logical Plan Cost: 0.000 ms                                                                      |
|Logical Optimization Cost: 0.000 ms                                                              |
|Distribution Plan Cost: 0.000 ms                                                                 |
|Fragment Instances Count: 1                                                                      |
|                                                                                                 |
|FRAGMENT-INSTANCE[Id: 20240315_115800_00030_1.2.0][IP: 127.0.0.1][DataRegion: 4][State: FINISHED]|
|  Total Wall Time: 25 ms                                                                         |
|  Cost of initDataQuerySource: 0.175 ms                                                          |
|  Seq File(unclosed): 0, Seq File(closed): 1                                                     |
|  UnSeq File(unclosed): 0, UnSeq File(closed): 0                                                 |
|  ready queued time: 0.280 ms, blocked queued time: 2.456 ms                                     |
|    [PlanNodeId 10]: IdentitySinkNode(IdentitySinkOperator)                                      |
|        CPU Time: 0.780 ms                                                                       |
|        output: 1 rows                                                                           |
|        HasNext() Called Count: 3                                                                |
|        Next() Called Count: 2                                                                   |
|        Estimated Memory Size: : 1245184                                                         |
|      [PlanNodeId 5]: TransformNode(TransformOperator)                                           |
|          CPU Time: 0.764 ms                                                                     |
|          output: 1 rows                                                                         |
|          HasNext() Called Count: 3                                                              |
|          Next() Called Count: 2                                                                 |
|          Estimated Memory Size: : 1245184                                                       |
|        [PlanNodeId 4]: SortNode(SortOperator)                                                   |
|            CPU Time: 0.721 ms                                                                   |
|            output: 1 rows                                                                       |
|            HasNext() Called Count: 3                                                            |
|            Next() Called Count: 2                                                               |
|            sortCost/ns: 1125                                                                    |
|            sortedDataSize: 272                                                                  |
|            prepareCost/ns: 610834                                                               |
|          [PlanNodeId 3]: FullOuterTimeJoinNode(FullOuterTimeJoinOperator)                       |
|              CPU Time: 0.706 ms                                                                 |
|              output: 1 rows                                                                     |
|              HasNext() Called Count: 5                                                          |
|              Next() Called Count: 1                                                             |
|            [PlanNodeId 7]: SeriesScanNode(SeriesScanOperator)                                   |
|                CPU Time: 1.085 ms                                                               |
|                output: 1 rows                                                                   |
|                HasNext() Called Count: 2                                                        |
|                Next() Called Count: 1                                                           |
|                SeriesPath: root.explain.analyze.data.column2                                    |
|            [PlanNodeId 8]: SeriesScanNode(SeriesScanOperator)                                   |
|                CPU Time: 1.091 ms                                                               |
|                output: 1 rows                                                                   |
|                HasNext() Called Count: 2                                                        |
|                Next() Called Count: 1                                                           |
|                SeriesPath: root.explain.analyze.data.column1                                    |
+-------------------------------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="plannode-compaction-in-the-result-of-explain-analyze" tabindex="-1"><a class="header-anchor" href="#plannode-compaction-in-the-result-of-explain-analyze"><span>PlanNode Compaction in the Result Of EXPLAIN ANALYZE</span></a></h5><figure><img src="https://alioss.timecho.com/docs/img/image-cyxm.png" alt="image-cyxm.png" tabindex="0" loading="lazy"><figcaption>image-cyxm.png</figcaption></figure><p>In a Fragment, the information of all nodes executed in the current node will be output. However, when a query involves too many series, outputting each seriesScanNode can lead to an excessively large result set from Explain Analyze. Therefore, when the same type of nodes exceeds 10, all nodes of the same type under the current Fragment will be merged. The statistical information is also accumulated after the merge, and some customized information that cannot be merged will be directly discarded.</p><p>The threshold for triggering the merge of nodes can be set by modifying the configuration item <code>merge_threshold_of_explain_analyze</code> in iotdb-common.properties, and this parameter supports hot loading. Below is a part of the result example after triggering a merge:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Analyze Cost: 143.679 ms                                                              
Fetch Partition Cost: 22.023 ms                                                       
Fetch Schema Cost: 63.086 ms                                                          
Logical Plan Cost: 0.000 ms                                                           
Logical Optimization Cost: 0.000 ms                                                   
Distribution Plan Cost: 0.000 ms                                                      
Fragment Instances Count: 2                                                          
                                                                                      
FRAGMENT-INSTANCE[Id: 20240311_041502_00001_1.2.0][IP: 192.168.130.9][DataRegion: 14] 
  Total Wall Time: 39964 ms                                                           
  Cost of initDataQuerySource: 1.834 ms                                               
  Seq File(unclosed): 0, Seq File(closed): 3                                          
  UnSeq File(unclosed): 0, UnSeq File(closed): 0                                      
  ready queued time: 504.334 ms, blocked queued time: 25356.419 ms                    
    [PlanNodeId 20793]: IdentitySinkNode(IdentitySinkOperator) Count: * 1             
        CPU Time: 24440.724 ms                                                        
        input: 71216 rows                                                             
        HasNext() Called Count: 35963                                                 
        Next() Called Count: 35962                                                    
        Estimated Memory Size: : 33882112                                             
      [PlanNodeId 10385]: FullOuterTimeJoinNode(FullOuterTimeJoinOperator) Count: * 8 
          CPU Time: 41437.708 ms                                                      
          input: 243011 rows                                                          
          HasNext() Called Count: 41965                                               
          Next() Called Count: 41958                                                  
          Estimated Memory Size: : 33882112                                           
        [PlanNodeId 11569]: SeriesScanNode(SeriesScanOperator) Count: * 1340          
            CPU Time: 1397.822 ms                                                     
            input: 134000 rows                                                        
            HasNext() Called Count: 2353                                              
            Next() Called Count: 1340                                                 
            Estimated Memory Size: : 32833536                                         
        [PlanNodeId 20778]: ExchangeNode(ExchangeOperator) Count: * 7                 
            CPU Time: 109.245 ms                                                      
            input: 71891 rows                                                         
            HasNext() Called Count: 1431                                              
            Next() Called Count: 1431                                                 
                                                                                      
FRAGMENT-INSTANCE[Id: 20240311_041502_00001_1.3.0][IP: 192.168.130.9][DataRegion: 11] 
  Total Wall Time: 39912 ms                                                           
  Cost of initDataQuerySource: 15.439 ms                                              
  Seq File(unclosed): 0, Seq File(closed): 2                                          
  UnSeq File(unclosed): 0, UnSeq File(closed): 0                                      
  ready queued time: 152.988 ms, blocked queued time: 37775.356 ms                    
    [PlanNodeId 20786]: IdentitySinkNode(IdentitySinkOperator) Count: * 1             
        CPU Time: 2020.258 ms                                                         
        input: 48800 rows                                                             
        HasNext() Called Count: 978                                                   
        Next() Called Count: 978                                                      
        Estimated Memory Size: : 42336256                                             
      [PlanNodeId 20771]: FullOuterTimeJoinNode(FullOuterTimeJoinOperator) Count: * 8 
          CPU Time: 5255.307 ms                                                       
          input: 195800 rows                                                          
          HasNext() Called Count: 2455                                                
          Next() Called Count: 2448                                                   
          Estimated Memory Size: : 42336256                                           
        [PlanNodeId 11867]: SeriesScanNode(SeriesScanOperator) Count: * 1680          
            CPU Time: 1248.080 ms                                                     
            input: 168000 rows                                                        
            HasNext() Called Count: 3198                                              
            Next() Called Count: 1680                                                 
            Estimated Memory Size: : 41287680  

......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="query-timeout-handling" tabindex="-1"><a class="header-anchor" href="#query-timeout-handling"><span>Query Timeout Handling</span></a></h5><p>Explain Analyze is a unique type of query. When it times out, we are unable to obtain the analysis results from the return. To address this, allowing for the investigation of timeout reasons through analysis results even in cases of timeout, Explain Analyze offers a timed logging mechanism. After certain intervals, the current results of Explain Analyze are output in text form to a dedicated log file. This way, when a query times out, one can go to the logs to investigate the corresponding log for troubleshooting.</p><p>The logging interval is calculated based on the query&#39;s timeout setting, ensuring that there are at least two records of results in case of a timeout.</p>`,39),l=[i];function o(d,r){return n(),a("div",null,l)}const u=e(t,[["render",o],["__file","Maintennance.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/latest/User-Manual/Maintennance.html","title":"Maintennance","lang":"en-US","frontmatter":{"description":"Maintennance Explain tool Overview The significance of query analysis lies in assisting users to understand the execution mechanism and performance bottlenecks of queries, there...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Maintennance.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Maintennance.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Maintennance"}],["meta",{"property":"og:description","content":"Maintennance Explain tool Overview The significance of query analysis lies in assisting users to understand the execution mechanism and performance bottlenecks of queries, there..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/image.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T07:45:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T07:45:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maintennance\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/image.png\\",\\"https://alioss.timecho.com/docs/img/image-cyxm.png\\"],\\"dateModified\\":\\"2024-04-08T07:45:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Explain tool","slug":"explain-tool","link":"#explain-tool","children":[{"level":3,"title":"Overview","slug":"overview","link":"#overview","children":[]}]}],"git":{"createdTime":1711953645000,"updatedTime":1712562355000,"contributors":[{"name":"YangCaiyin","email":"ycycse@gmail.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.42,"words":1625},"filePathRelative":"UserGuide/latest/User-Manual/Maintennance.md","localizedDate":"April 1, 2024","autoDesc":true}');export{u as comp,p as data};
