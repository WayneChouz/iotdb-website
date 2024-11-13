import{_ as a,c as e,b as s,o as l}from"./app-B280G6gL.js";const i={};function t(p,n){return l(),e("div",null,n[0]||(n[0]=[s(`<h1 id="运维语句" tabindex="-1"><a class="header-anchor" href="#运维语句"><span>运维语句</span></a></h1><h2 id="explain-explain-analyze-语句" tabindex="-1"><a class="header-anchor" href="#explain-explain-analyze-语句"><span>Explain/Explain Analyze 语句</span></a></h2><p>查询分析的意义在于帮助用户理解查询的执行机制和性能瓶颈，从而实现查询优化和性能提升。这不仅关乎到查询的执行效率，也直接影响到应用的用户体验和资源的有效利用。为了进行有效的查询分析，<strong>IoTDB</strong> <strong>V1.3.2及以上版本</strong>提供了查询分析语句：Explain 和 Explain Analyze。</p><ul><li>Explain 语句：允许用户预览查询 SQL 的执行计划，包括 IoTDB 如何组织数据检索和处理。</li><li>Explain Analyze 语句：在 Explain 语句基础上增加了性能分析，完整执行SQL并展示查询执行过程中的时间和资源消耗。为IoTDB用户深入理解查询详情以及进行查询优化提供了详细的相关信息。与其他常用的 IoTDB 排查手段相比，Explain Analyze 没有部署负担，同时能够针对单条 sql 进行分析，能够更好定位问题。各类方法对比如下：</li></ul><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">安装难度</th><th style="text-align:left;">业务影响</th><th style="text-align:left;">功能范围</th></tr></thead><tbody><tr><td style="text-align:left;">Explain Analyze语句</td><td style="text-align:left;">低。无需安装额外组件，为IoTDB内置SQL语句</td><td style="text-align:left;">低。只会影响当前分析的单条查询，对线上其他负载无影响</td><td style="text-align:left;">支持分布式，可支持对单条SQL进行追踪</td></tr><tr><td style="text-align:left;">监控面板</td><td style="text-align:left;">中。需要安装IoTDB监控面板工具（企业版工具），并开启IoTDB监控服务</td><td style="text-align:left;">中。IoTDB监控服务记录指标会带来额外耗时</td><td style="text-align:left;">支持分布式，仅支持对数据库整体查询负载和耗时进行分析</td></tr><tr><td style="text-align:left;">Arthas抽样</td><td style="text-align:left;">中。需要安装Java Arthas工具（部分内网无法直接安装Arthas，且安装后，有时需要重启应用）</td><td style="text-align:left;">高。CPU 抽样可能会影响线上业务的响应速度</td><td style="text-align:left;">不支持分布式，仅支持对数据库整体查询负载和耗时进行分析</td></tr></tbody></table><h3 id="explain-语句" tabindex="-1"><a class="header-anchor" href="#explain-语句"><span>Explain 语句</span></a></h3><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><p>Explain命令允许用户查看SQL查询的执行计划。执行计划以算子的形式展示，描述了IoTDB会如何执行查询。其语法如下，其中SELECT_STATEMENT是查询相关的SQL语句：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">EXPLAIN &lt;SELECT_STATEMENT&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Explain的返回结果包括了数据访问策略、过滤条件是否下推以及查询计划在不同节点的分配等信息，为用户提供了一种手段，以可视化查询的内部执行逻辑。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 插入数据</span>
<span class="line">insert into root.explain.data(timestamp, column1, column2) values(1710494762, &quot;hello&quot;, &quot;explain&quot;)</span>
<span class="line"></span>
<span class="line"># 执行explain语句</span>
<span class="line">explain select * from root.explain.data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上方SQL，会得到如下结果。不难看出，IoTDB分别通过两个SeriesScan节点去获取column1和column2的数据，最后通过fullOuterTimeJoin将其连接。</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">+-----------------------------------------------------------------------+</span>
<span class="line">|                                                      distribution plan|</span>
<span class="line">+-----------------------------------------------------------------------+</span>
<span class="line">|                         ┌───────────────────┐                         |</span>
<span class="line">|                         │FullOuterTimeJoin-3│                         |</span>
<span class="line">|                         │Order: ASC         │                         |</span>
<span class="line">|                         └───────────────────┘                         |</span>
<span class="line">|                 ┌─────────────────┴─────────────────┐                 |</span>
<span class="line">|                 │                                   │                 |</span>
<span class="line">|┌─────────────────────────────────┐ ┌─────────────────────────────────┐|</span>
<span class="line">|│SeriesScan-4                     │ │SeriesScan-5                     │|</span>
<span class="line">|│Series: root.explain.data.column1│ │Series: root.explain.data.column2│|</span>
<span class="line">|│Partition: 3                     │ │Partition: 3                     │|</span>
<span class="line">|└─────────────────────────────────┘ └─────────────────────────────────┘|</span>
<span class="line">+-----------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explain-analyze-语句" tabindex="-1"><a class="header-anchor" href="#explain-analyze-语句"><span>Explain Analyze 语句</span></a></h3><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4><p>Explain Analyze 是 IOTDB 查询引擎自带的性能分析 SQL，与 Explain 不同，它会执行对应的查询计划并统计执行信息，可以用于追踪一条查询的具体性能分布，用于对资源进行观察，进行性能调优与异常分析。其语法如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">EXPLAIN ANALYZE [VERBOSE] &lt;SELECT_STATEMENT&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中SELECT_STATEMENT对应需要分析的查询语句；VERBOSE为打印详细分析结果，不填写VERBOSE时EXPLAIN ANALYZE将会省略部分信息。</p><p>在EXPLAIN ANALYZE的结果集中，会包含如下信息：</p><figure><img src="https://alioss.timecho.com/upload/explain-analyze-1.png" alt="explain-analyze-1.png" tabindex="0" loading="lazy"><figcaption>explain-analyze-1.png</figcaption></figure><p>其中：</p><ul><li>QueryStatistics包含查询层面进的统计信息，主要包含规划解析阶段耗时，Fragment元数据等信息。</li><li>FragmentInstance是IoTDB在一个节点上查询计划的封装，每一个节点都会在结果集中输出一份Fragment信息，主要包含FragmentStatistics和算子信息。FragmentStastistics包含Fragment的统计信息，包括总实际耗时（墙上时间），所涉及到的TsFile，调度信息等情况。在一个Fragment的信息输出同时会以节点树层级的方式展示该Fragment下计划节点的统计信息，主要包括：CPU运行时间、输出的数据行数、指定接口被调用的次数、所占用的内存、节点专属的定制信息。</li></ul><h4 id="特别说明" tabindex="-1"><a class="header-anchor" href="#特别说明"><span>特别说明</span></a></h4><ol><li>Explain Analyze 语句的结果简化</li></ol><p>由于在 Fragment 中会输出当前节点中执行的所有节点信息，当一次查询涉及的序列过多时，每个节点都被输出，会导致 Explain Analyze 返回的结果集过大，因此当相同类型的节点超过 10 个时，系统会自动合并当前 Fragment 下所有相同类型的节点，合并后统计信息也被累积，对于一些无法合并的定制信息会直接丢弃（如下图）。</p><figure><img src="https://alioss.timecho.com/upload/explain-analyze-2.png" alt="explain-analyze-2.png" tabindex="0" loading="lazy"><figcaption>explain-analyze-2.png</figcaption></figure><p>用户也可以自行修改 iotdb-common.properties 中的配置项<code>merge_threshold_of_explain_analyze</code>来设置触发合并的节点阈值，该参数支持热加载。</p><ol start="2"><li>查询超时场景使用 Explain Analyze 语句</li></ol><p>Explain Analyze 本身是一种特殊的查询，当执行超时的时候，无法使用Explain Analyze语句进行分析。为了在查询超时的情况下也可以通过分析结果排查超时原因，Explain Analyze还提供了<strong>定时日志</strong>机制（无需用户配置），每经过一定的时间间隔会将 Explain Analyze 的当前结果以文本的形式输出到专门的日志中。当查询超时时，用户可以前往logs/log_explain_analyze.log中查看对应的日志进行排查。</p><p>日志的时间间隔基于查询的超时时间进行计算，可以保证在超时的情况下至少会有两次的结果记录。</p><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h4><p>下面是Explain Analyze的一个例子:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 插入数据</span>
<span class="line">insert into root.explain.analyze.data(timestamp, column1, column2, column3) values(1710494762, &quot;hello&quot;, &quot;explain&quot;, &quot;analyze&quot;)</span>
<span class="line">insert into root.explain.analyze.data(timestamp, column1, column2, column3) values(1710494862, &quot;hello2&quot;, &quot;explain2&quot;, &quot;analyze2&quot;)</span>
<span class="line">insert into root.explain.analyze.data(timestamp, column1, column2, column3) values(1710494962, &quot;hello3&quot;, &quot;explain3&quot;, &quot;analyze3&quot;)</span>
<span class="line"></span>
<span class="line"># 执行explain analyze语句</span>
<span class="line">explain analyze select column2 from root.explain.analyze.data order by column1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到输出如下：</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">+-------------------------------------------------------------------------------------------------+</span>
<span class="line">|                                                                                  Explain Analyze|</span>
<span class="line">+-------------------------------------------------------------------------------------------------+</span>
<span class="line">|Analyze Cost: 1.739 ms                                                                           |</span>
<span class="line">|Fetch Partition Cost: 0.940 ms                                                                   |</span>
<span class="line">|Fetch Schema Cost: 0.066 ms                                                                      |</span>
<span class="line">|Logical Plan Cost: 0.000 ms                                                                      |</span>
<span class="line">|Logical Optimization Cost: 0.000 ms                                                              |</span>
<span class="line">|Distribution Plan Cost: 0.000 ms                                                                 |</span>
<span class="line">|Fragment Instances Count: 1                                                                      |</span>
<span class="line">|                                                                                                 |</span>
<span class="line">|FRAGMENT-INSTANCE[Id: 20240315_115800_00030_1.2.0][IP: 127.0.0.1][DataRegion: 4][State: FINISHED]|</span>
<span class="line">|  Total Wall Time: 25 ms                                                                         |</span>
<span class="line">|  Cost of initDataQuerySource: 0.175 ms                                                          |</span>
<span class="line">|  Seq File(unclosed): 0, Seq File(closed): 1                                                     |</span>
<span class="line">|  UnSeq File(unclosed): 0, UnSeq File(closed): 0                                                 |</span>
<span class="line">|  ready queued time: 0.280 ms, blocked queued time: 2.456 ms                                     |</span>
<span class="line">|    [PlanNodeId 10]: IdentitySinkNode(IdentitySinkOperator)                                      |</span>
<span class="line">|        CPU Time: 0.780 ms                                                                       |</span>
<span class="line">|        output: 1 rows                                                                           |</span>
<span class="line">|        HasNext() Called Count: 3                                                                |</span>
<span class="line">|        Next() Called Count: 2                                                                   |</span>
<span class="line">|        Estimated Memory Size: : 1245184                                                         |</span>
<span class="line">|      [PlanNodeId 5]: TransformNode(TransformOperator)                                           |</span>
<span class="line">|          CPU Time: 0.764 ms                                                                     |</span>
<span class="line">|          output: 1 rows                                                                         |</span>
<span class="line">|          HasNext() Called Count: 3                                                              |</span>
<span class="line">|          Next() Called Count: 2                                                                 |</span>
<span class="line">|          Estimated Memory Size: : 1245184                                                       |</span>
<span class="line">|        [PlanNodeId 4]: SortNode(SortOperator)                                                   |</span>
<span class="line">|            CPU Time: 0.721 ms                                                                   |</span>
<span class="line">|            output: 1 rows                                                                       |</span>
<span class="line">|            HasNext() Called Count: 3                                                            |</span>
<span class="line">|            Next() Called Count: 2                                                               |</span>
<span class="line">|            sortCost/ns: 1125                                                                    |</span>
<span class="line">|            sortedDataSize: 272                                                                  |</span>
<span class="line">|            prepareCost/ns: 610834                                                               |</span>
<span class="line">|          [PlanNodeId 3]: FullOuterTimeJoinNode(FullOuterTimeJoinOperator)                       |</span>
<span class="line">|              CPU Time: 0.706 ms                                                                 |</span>
<span class="line">|              output: 1 rows                                                                     |</span>
<span class="line">|              HasNext() Called Count: 5                                                          |</span>
<span class="line">|              Next() Called Count: 1                                                             |</span>
<span class="line">|            [PlanNodeId 7]: SeriesScanNode(SeriesScanOperator)                                   |</span>
<span class="line">|                CPU Time: 1.085 ms                                                               |</span>
<span class="line">|                output: 1 rows                                                                   |</span>
<span class="line">|                HasNext() Called Count: 2                                                        |</span>
<span class="line">|                Next() Called Count: 1                                                           |</span>
<span class="line">|                SeriesPath: root.explain.analyze.data.column2                                    |</span>
<span class="line">|            [PlanNodeId 8]: SeriesScanNode(SeriesScanOperator)                                   |</span>
<span class="line">|                CPU Time: 1.091 ms                                                               |</span>
<span class="line">|                output: 1 rows                                                                   |</span>
<span class="line">|                HasNext() Called Count: 2                                                        |</span>
<span class="line">|                Next() Called Count: 1                                                           |</span>
<span class="line">|                SeriesPath: root.explain.analyze.data.column1                                    |</span>
<span class="line">+-------------------------------------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>触发合并后的部分结果示例如下：</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">Analyze Cost: 143.679 ms                                                              </span>
<span class="line">Fetch Partition Cost: 22.023 ms                                                       </span>
<span class="line">Fetch Schema Cost: 63.086 ms                                                          </span>
<span class="line">Logical Plan Cost: 0.000 ms                                                           </span>
<span class="line">Logical Optimization Cost: 0.000 ms                                                   </span>
<span class="line">Distribution Plan Cost: 0.000 ms                                                      </span>
<span class="line">Fragment Instances Count: 2                                                          </span>
<span class="line">                                                                                      </span>
<span class="line">FRAGMENT-INSTANCE[Id: 20240311_041502_00001_1.2.0][IP: 192.168.130.9][DataRegion: 14] </span>
<span class="line">  Total Wall Time: 39964 ms                                                           </span>
<span class="line">  Cost of initDataQuerySource: 1.834 ms                                               </span>
<span class="line">  Seq File(unclosed): 0, Seq File(closed): 3                                          </span>
<span class="line">  UnSeq File(unclosed): 0, UnSeq File(closed): 0                                      </span>
<span class="line">  ready queued time: 504.334 ms, blocked queued time: 25356.419 ms                    </span>
<span class="line">    [PlanNodeId 20793]: IdentitySinkNode(IdentitySinkOperator) Count: * 1             </span>
<span class="line">        CPU Time: 24440.724 ms                                                        </span>
<span class="line">        input: 71216 rows                                                             </span>
<span class="line">        HasNext() Called Count: 35963                                                 </span>
<span class="line">        Next() Called Count: 35962                                                    </span>
<span class="line">        Estimated Memory Size: : 33882112                                             </span>
<span class="line">      [PlanNodeId 10385]: FullOuterTimeJoinNode(FullOuterTimeJoinOperator) Count: * 8 </span>
<span class="line">          CPU Time: 41437.708 ms                                                      </span>
<span class="line">          input: 243011 rows                                                          </span>
<span class="line">          HasNext() Called Count: 41965                                               </span>
<span class="line">          Next() Called Count: 41958                                                  </span>
<span class="line">          Estimated Memory Size: : 33882112                                           </span>
<span class="line">        [PlanNodeId 11569]: SeriesScanNode(SeriesScanOperator) Count: * 1340          </span>
<span class="line">            CPU Time: 1397.822 ms                                                     </span>
<span class="line">            input: 134000 rows                                                        </span>
<span class="line">            HasNext() Called Count: 2353                                              </span>
<span class="line">            Next() Called Count: 1340                                                 </span>
<span class="line">            Estimated Memory Size: : 32833536                                         </span>
<span class="line">        [PlanNodeId 20778]: ExchangeNode(ExchangeOperator) Count: * 7                 </span>
<span class="line">            CPU Time: 109.245 ms                                                      </span>
<span class="line">            input: 71891 rows                                                         </span>
<span class="line">            HasNext() Called Count: 1431                                              </span>
<span class="line">            Next() Called Count: 1431                                                 </span>
<span class="line">                                                                                      </span>
<span class="line">FRAGMENT-INSTANCE[Id: 20240311_041502_00001_1.3.0][IP: 192.168.130.9][DataRegion: 11] </span>
<span class="line">  Total Wall Time: 39912 ms                                                           </span>
<span class="line">  Cost of initDataQuerySource: 15.439 ms                                              </span>
<span class="line">  Seq File(unclosed): 0, Seq File(closed): 2                                          </span>
<span class="line">  UnSeq File(unclosed): 0, UnSeq File(closed): 0                                      </span>
<span class="line">  ready queued time: 152.988 ms, blocked queued time: 37775.356 ms                    </span>
<span class="line">    [PlanNodeId 20786]: IdentitySinkNode(IdentitySinkOperator) Count: * 1             </span>
<span class="line">        CPU Time: 2020.258 ms                                                         </span>
<span class="line">        input: 48800 rows                                                             </span>
<span class="line">        HasNext() Called Count: 978                                                   </span>
<span class="line">        Next() Called Count: 978                                                      </span>
<span class="line">        Estimated Memory Size: : 42336256                                             </span>
<span class="line">      [PlanNodeId 20771]: FullOuterTimeJoinNode(FullOuterTimeJoinOperator) Count: * 8 </span>
<span class="line">          CPU Time: 5255.307 ms                                                       </span>
<span class="line">          input: 195800 rows                                                          </span>
<span class="line">          HasNext() Called Count: 2455                                                </span>
<span class="line">          Next() Called Count: 2448                                                   </span>
<span class="line">          Estimated Memory Size: : 42336256                                           </span>
<span class="line">        [PlanNodeId 11867]: SeriesScanNode(SeriesScanOperator) Count: * 1680          </span>
<span class="line">            CPU Time: 1248.080 ms                                                     </span>
<span class="line">            input: 168000 rows                                                        </span>
<span class="line">            HasNext() Called Count: 3198                                              </span>
<span class="line">            Next() Called Count: 1680                                                 </span>
<span class="line">            Estimated Memory Size: : 41287680  </span>
<span class="line"></span>
<span class="line">......</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><h4 id="wall-time-墙上时间-和-cpu-time-cpu时间-的区别" tabindex="-1"><a class="header-anchor" href="#wall-time-墙上时间-和-cpu-time-cpu时间-的区别"><span>WALL TIME（墙上时间）和 CPU TIME（CPU时间）的区别？</span></a></h4><p>CPU 时间也称为处理器时间或处理器使用时间，指的是程序在执行过程中实际占用 CPU 进行计算的时间，显示的是程序实际消耗的处理器资源。</p><p>墙上时间也称为实际时间或物理时间，指的是从程序开始执行到程序结束的总时间，包括了所有等待时间。</p><ol><li>WALL TIME &lt; CPU TIME 的场景：比如一个查询分片最后被调度器使用两个线程并行执行，真实物理世界上是 10s 过去了，但两个线程，可能一直占了两个 cpu 核跑了 10s，那 cpu time 就是 20s，wall time就是 10s</li><li>WALL TIME &gt; CPU TIME 的场景：因为系统内可能会存在多个查询并行执行，但查询的执行线程数和内存是固定的， <ol><li>所以当查询分片被某些资源阻塞住时（比如没有足够的内存进行数据传输、或等待上游数据）就会放入Blocked Queue，此时查询分片并不会占用 CPU TIME，但WALL TIME（真实物理时间的时间）是在向前流逝的</li><li>或者当查询线程资源不足时，比如当前共有16个查询线程，但系统内并发有20个查询分片，即使所有查询都没有被阻塞，也只会同时并行运行16个查询分片，另外四个会被放入 READY QUEUE，等待被调度执行，此时查询分片并不会占用 CPU TIME，但WALL TIME（真实物理时间的时间）是在向前流逝的</li></ol></li></ol><h4 id="explain-analyze-是否有额外开销-测出的耗时是否与查询真实执行时有差别" tabindex="-1"><a class="header-anchor" href="#explain-analyze-是否有额外开销-测出的耗时是否与查询真实执行时有差别"><span>Explain Analyze 是否有额外开销，测出的耗时是否与查询真实执行时有差别？</span></a></h4><p>几乎没有，因为 explain analyze operator 是单独的线程执行，收集原查询的统计信息，且这些统计信息，即使不explain analyze，原来的查询也会生成，只是没有人去取。并且 explain analyze 是纯 next 遍历结果集，不会打印，所以与原来查询真实执行时的耗时不会有显著差别。</p><h4 id="io-耗时主要关注几个指标" tabindex="-1"><a class="header-anchor" href="#io-耗时主要关注几个指标"><span>IO 耗时主要关注几个指标？</span></a></h4><p>可能涉及 IO 耗时的主要有个指标，loadTimeSeriesMetadataDiskSeqTime, loadTimeSeriesMetadataDiskUnSeqTime 以及 construct[NonAligned/Aligned]ChunkReadersDiskTime</p><p>TimeSeriesMetadata 的加载分别统计了顺序和乱序文件，但 Chunk 的读取暂时未分开统计，但顺乱序比例可以通过TimeseriesMetadata 顺乱序的比例计算出来。</p><h4 id="乱序数据对查询性能的影响能否有一些指标展示出来" tabindex="-1"><a class="header-anchor" href="#乱序数据对查询性能的影响能否有一些指标展示出来"><span>乱序数据对查询性能的影响能否有一些指标展示出来？</span></a></h4><p>乱序数据产生的影响主要有两个：</p><ol><li>需要在内存中多做一个归并排序（一般认为这个耗时是比较短的，毕竟是纯内存的 cpu 操作）</li><li>乱序数据会产生数据块间的时间范围重叠，导致统计信息无法使用 <ol><li>无法利用统计信息直接 skip 掉整个不满足值过滤要求的 chunk <ol><li>一般用户的查询都是只包含时间过滤条件，则不会有影响</li></ol></li><li>无法利用统计信息直接计算出聚合值，无需读取数据</li></ol></li></ol><p>单独对于乱序数据的性能影响，目前并没有有效的观测手段，除非就是在有乱序数据的时候，执行一遍查询耗时，然后等乱序合完了，再执行一遍，才能对比出来。</p><p>因为即使乱序这部分数据进了顺序，也是需要 IO、加压缩、decode，这个耗时少不了，不会因为乱序数据被合并进乱序了，就减少了。</p><h4 id="执行-explain-analyze-时-查询超时后-为什么结果没有输出在-log-explain-analyze-log-中" tabindex="-1"><a class="header-anchor" href="#执行-explain-analyze-时-查询超时后-为什么结果没有输出在-log-explain-analyze-log-中"><span>执行 explain analyze 时，查询超时后，为什么结果没有输出在 log_explain_analyze.log 中？</span></a></h4><p>升级时，只替换了 lib 包，没有替换 conf/logback-datanode.xml，需要替换一下 conf/logback-datanode.xml，然后不需要重启（该文件内容可以被热加载），大约等待 1 分钟后，重新执行 explain analyze verbose。</p><h3 id="实战案例" tabindex="-1"><a class="header-anchor" href="#实战案例"><span>实战案例</span></a></h3><h4 id="案例一-查询涉及文件数量过多-磁盘io成为瓶颈-导致查询速度变慢" tabindex="-1"><a class="header-anchor" href="#案例一-查询涉及文件数量过多-磁盘io成为瓶颈-导致查询速度变慢"><span>案例一：查询涉及文件数量过多，磁盘IO成为瓶颈，导致查询速度变慢</span></a></h4><figure><img src="https://alioss.timecho.com/upload/explain-analyze-3.png" alt="explain-analyze-3.png" tabindex="0" loading="lazy"><figcaption>explain-analyze-3.png</figcaption></figure><p>查询总耗时为 938 ms，其中从文件中读取索引区和数据区的耗时占据 918 ms，涉及了总共 289 个文件，假设查询涉及 N 个 TsFile，磁盘单次 seek 耗时为 t_seek，读取文件尾部索引的耗时为 t_index，读取文件的数据块的耗时为 t_chunk，则首次查询（未命中缓存）的理论耗时为 <code>cost = N * (t_seek + t_index + t_seek + t_chunk)</code>，按经验值，HDD 磁盘的一次 seek 耗时约为 5-10ms，所以查询涉及的文件数越多，查询延迟会越大。</p><p>最终优化方案为：</p><ol><li>调整合并参数，降低文件数量</li><li>更换 HDD 为 SSD，降低磁盘单次 IO 的延迟</li></ol><h4 id="案例二-like-谓词执行慢导致查询超时" tabindex="-1"><a class="header-anchor" href="#案例二-like-谓词执行慢导致查询超时"><span>案例二：like 谓词执行慢导致查询超时</span></a></h4><p>执行如下 sql 时，查询超时（默认超时时间为 60s）</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select count(s1) as total from root.db.d1 where s1 like &#39;%XXXXXXXX%&#39; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行 explain analyze verbose 时，即使查询超时，也会每隔 15s，将阶段性的采集结果输出到 log_explain_analyze.log 中，从 log_explain_analyze.log 中得到最后两次的输出结果如下：</p><figure><img src="https://alioss.timecho.com/upload/explain-analyze-4.png" alt="explain-analyze-4.png" tabindex="0" loading="lazy"><figcaption>explain-analyze-4.png</figcaption></figure><figure><img src="https://alioss.timecho.com/upload/explain-analyze-5.png" alt="explain-analyze-5.png" tabindex="0" loading="lazy"><figcaption>explain-analyze-5.png</figcaption></figure><p>观察结果，我们发现是因为查询未加时间条件，涉及的数据太多 constructAlignedChunkReadersDiskTime 和 pageReadersDecodeAlignedDiskTime的耗时一直在涨，意味着一直在读新的 chunk。但 AlignedSeriesScanNode 的输出信息一直是 0，这是因为算子只有在输出至少一行满足条件的数据时，才会让出时间片，并更新信息。从总的读取耗时（loadTimeSeriesMetadataAlignedDiskSeqTime + loadTimeSeriesMetadataAlignedDiskUnSeqTime + constructAlignedChunkReadersDiskTime + pageReadersDecodeAlignedDiskTime=约13.4秒）来看，其他耗时（60s - 13.4 = 46.6）应该都是在执行过滤条件上（like 谓词的执行很耗时）。</p><p>最终优化方案为：增加时间过滤条件，避免全表扫描</p><h2 id="start-stop-repair-data-语句" tabindex="-1"><a class="header-anchor" href="#start-stop-repair-data-语句"><span>Start/Stop Repair Data 语句</span></a></h2><p>用于修复由于系统 bug 导致的乱序（1.3.1 以上版本支持此命令）</p><h3 id="start-repair-data" tabindex="-1"><a class="header-anchor" href="#start-repair-data"><span>START REPAIR DATA</span></a></h3><p>启动一个数据修复任务，扫描创建修复任务的时间之前产生的 tsfile 文件并修复有乱序错误的文件。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">START</span> REPAIR <span class="token keyword">DATA</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">START</span> REPAIR <span class="token keyword">DATA</span> <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">START</span> REPAIR <span class="token keyword">DATA</span> <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stop-repair-data" tabindex="-1"><a class="header-anchor" href="#stop-repair-data"><span>STOP REPAIR DATA</span></a></h3><p>停止一个进行中的修复任务。如果需要再次恢复一个已停止的数据修复任务的进度，可以重新执行 <code>START REPAIR DATA</code>.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> STOP REPAIR <span class="token keyword">DATA</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> STOP REPAIR <span class="token keyword">DATA</span> <span class="token keyword">ON</span> <span class="token keyword">LOCAL</span></span>
<span class="line">IoTDB<span class="token operator">&gt;</span> STOP REPAIR <span class="token keyword">DATA</span> <span class="token keyword">ON</span> CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77)]))}const r=a(i,[["render",t],["__file","Maintennance.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/User-Manual/Maintennance.html","title":"运维语句","lang":"zh-CN","frontmatter":{"description":"运维语句 Explain/Explain Analyze 语句 查询分析的意义在于帮助用户理解查询的执行机制和性能瓶颈，从而实现查询优化和性能提升。这不仅关乎到查询的执行效率，也直接影响到应用的用户体验和资源的有效利用。为了进行有效的查询分析，IoTDB V1.3.2及以上版本提供了查询分析语句：Explain 和 Explain Analyze。 E...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/User-Manual/Maintennance.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/User-Manual/Maintennance.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"运维语句"}],["meta",{"property":"og:description","content":"运维语句 Explain/Explain Analyze 语句 查询分析的意义在于帮助用户理解查询的执行机制和性能瓶颈，从而实现查询优化和性能提升。这不仅关乎到查询的执行效率，也直接影响到应用的用户体验和资源的有效利用。为了进行有效的查询分析，IoTDB V1.3.2及以上版本提供了查询分析语句：Explain 和 Explain Analyze。 E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/upload/explain-analyze-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运维语句\\",\\"image\\":[\\"https://alioss.timecho.com/upload/explain-analyze-1.png\\",\\"https://alioss.timecho.com/upload/explain-analyze-2.png\\",\\"https://alioss.timecho.com/upload/explain-analyze-3.png\\",\\"https://alioss.timecho.com/upload/explain-analyze-4.png\\",\\"https://alioss.timecho.com/upload/explain-analyze-5.png\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Explain/Explain Analyze 语句","slug":"explain-explain-analyze-语句","link":"#explain-explain-analyze-语句","children":[{"level":3,"title":"Explain 语句","slug":"explain-语句","link":"#explain-语句","children":[]},{"level":3,"title":"Explain Analyze 语句","slug":"explain-analyze-语句","link":"#explain-analyze-语句","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]},{"level":3,"title":"实战案例","slug":"实战案例","link":"#实战案例","children":[]}]},{"level":2,"title":"Start/Stop Repair Data 语句","slug":"start-stop-repair-data-语句","link":"#start-stop-repair-data-语句","children":[{"level":3,"title":"START REPAIR DATA","slug":"start-repair-data","link":"#start-repair-data","children":[]},{"level":3,"title":"STOP REPAIR DATA","slug":"stop-repair-data","link":"#stop-repair-data","children":[]}]}],"git":{"createdTime":1711953645000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":12.53,"words":3758},"filePathRelative":"zh/UserGuide/V1.3.0-2/User-Manual/Maintennance.md","localizedDate":"2024年4月1日","autoDesc":true}');export{r as comp,c as data};
