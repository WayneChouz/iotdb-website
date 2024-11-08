import{_ as a,c as n,b as s,o as i}from"./app-Cy-L1ril.js";const t={};function d(o,e){return i(),n("div",null,e[0]||(e[0]=[s(`<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h1><h2 id="一般问题" tabindex="-1"><a class="header-anchor" href="#一般问题"><span>一般问题</span></a></h2><h3 id="如何查询我的iotdb版本" tabindex="-1"><a class="header-anchor" href="#如何查询我的iotdb版本"><span>如何查询我的IoTDB版本？</span></a></h3><p>有几种方法可以识别您使用的 IoTDB 版本：</p><ul><li>启动 IoTDB 的命令行界面：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost</span>
<span class="line"> _____       _________  ______   ______    </span>
<span class="line">|_   _|     |  _   _  ||_   _ \`.|_   _ \\   </span>
<span class="line">  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  </span>
<span class="line">  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  </span>
<span class="line"> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | </span>
<span class="line">|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查 pom.xml 文件：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;version&gt;x.x.x&lt;/version&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用 JDBC API:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用命令行接口：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show version</span>
<span class="line">show version</span>
<span class="line">+---------------+</span>
<span class="line">|version        |</span>
<span class="line">+---------------+</span>
<span class="line">|x.x.x          |</span>
<span class="line">+---------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.241s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在哪里可以找到iotdb的日志" tabindex="-1"><a class="header-anchor" href="#在哪里可以找到iotdb的日志"><span>在哪里可以找到IoTDB的日志？</span></a></h3><p>假设您的根目录是：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token builtin class-name">pwd</span></span>
<span class="line">/workspace/iotdb</span>
<span class="line"></span>
<span class="line">$ <span class="token function">ls</span> <span class="token parameter variable">-l</span></span>
<span class="line">server/</span>
<span class="line">cli/</span>
<span class="line">pom.xml</span>
<span class="line">Readme.md</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如 <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>假如 <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>在默认的设置里，logs 文件夹会被存储在<code>IOTDB_HOME/logs</code>。您可以在<code>IOTDB_HOME/conf</code>目录下的<code>logback.xml</code>文件中修改日志的级别和日志的存储路径。</p><h3 id="在哪里可以找到iotdb的数据文件" tabindex="-1"><a class="header-anchor" href="#在哪里可以找到iotdb的数据文件"><span>在哪里可以找到IoTDB的数据文件？</span></a></h3><p>在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在<code>IOTDB_HOME/data/dtanode</code>文件夹。</p><h3 id="如何知道iotdb中存储了多少时间序列" tabindex="-1"><a class="header-anchor" href="#如何知道iotdb中存储了多少时间序列"><span>如何知道IoTDB中存储了多少时间序列？</span></a></h3><p>使用 IoTDB 的命令行接口：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在返回的结果里，会展示<code>Total timeseries number</code>，这个数据就是 IoTDB 中 timeseries 的数量。<br> a<br> 在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; count timeseries</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l</span>
<span class="line">&gt;   6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可以使用hadoop和spark读取iotdb中的tsfile吗" tabindex="-1"><a class="header-anchor" href="#可以使用hadoop和spark读取iotdb中的tsfile吗"><span>可以使用Hadoop和Spark读取IoTDB中的TsFile吗？</span></a></h3><p>是的。IoTDB 与开源生态紧密结合。IoTDB 支持 <a href="https://github.com/apache/iotdb-extras/tree/master/connectors/hadoop" target="_blank" rel="noopener noreferrer">Hadoop</a>, <a href="https://github.com/apache/iotdb-extras/tree/master/connectors/spark-iotdb-connector" target="_blank" rel="noopener noreferrer">Spark</a> 和 <a href="https://github.com/apache/iotdb-extras/tree/master/connectors/grafana-connector" target="_blank" rel="noopener noreferrer">Grafana</a> 可视化工具。</p><h3 id="iotdb如何处理重复的数据点" tabindex="-1"><a class="header-anchor" href="#iotdb如何处理重复的数据点"><span>IoTDB如何处理重复的数据点？</span></a></h3><p>一个数据点是由一个完整的时间序列路径（例如：<code>root.vehicle.d0.s0</code>) 和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么 IoTDB 将更新这个点的值，而不是插入一个新点。</p><h3 id="我如何知道具体的timeseries的类型" tabindex="-1"><a class="header-anchor" href="#我如何知道具体的timeseries的类型"><span>我如何知道具体的timeseries的类型？</span></a></h3><p>在 IoTDB 的命令行接口中使用 SQL <code>SHOW TIMESERIES &lt;timeseries path&gt;</code>:</p><p>例如：如果您想知道所有 timeseries 的类型 &lt;timeseries path&gt; 应该为 <code>root.**</code>。上面的 SQL 应该修改为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您想查询一个指定的时间序列，您可以修改 &lt;timeseries path&gt; 为时间序列的完整路径。比如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.s1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您还可以在 timeseries 路径中使用通配符：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="如何更改iotdb的客户端时间显示格式" tabindex="-1"><a class="header-anchor" href="#如何更改iotdb的客户端时间显示格式"><span>如何更改IoTDB的客户端时间显示格式？</span></a></h3><p>IoTDB 客户端默认显示的时间是人类可读的（比如：<code>1970-01-01T08:00:00.001</code>)，如果您想显示是时间戳或者其他可读格式，请在启动命令上添加参数<code>-disableISO8601</code>:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="怎么处理来自org-apache-ratis-grpc-server-grpclogappender的indexoutofboundsexception" tabindex="-1"><a class="header-anchor" href="#怎么处理来自org-apache-ratis-grpc-server-grpclogappender的indexoutofboundsexception"><span>怎么处理来自<code>org.apache.ratis.grpc.server.GrpcLogAppender</code>的<code>IndexOutOfBoundsException</code>？</span></a></h3><p>这是我们的依赖Ratis 2.4.1的一个内部错误日志，不会对数据写入和读取造成任何影响。<br> 已经报告给Ratis社区，并会在未来的版本中修复。</p><h3 id="预估内存不足报错如何处理" tabindex="-1"><a class="header-anchor" href="#预估内存不足报错如何处理"><span>预估内存不足报错如何处理？</span></a></h3><p>报错信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">301: There is not enough memory to execute current fragment instance, current remaining free memory is 86762854, estimated memory usage for current fragment instance is 270139392</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>报错分析：<br> datanode_memory_proportion参数控制分给查询的内存，chunk_timeseriesmeta_free_memory_proportion参数控制查询执行可用的内存。<br> 默认情况下分给查询的内存为堆内存*30%，查询执行可用的内存为查询内存的20%。<br> 报错显示当前剩余查询执行可用内存为86762854B=82.74MB，该查询预估使用执行内存270139392B=257.6MB。</p><p>一些可能的改进项：</p><ul><li>在不改变默认参数的前提下，调大IoTDB的堆内存大于 4.2G（4.2G * 1024MB=4300MB），4300M*30%*20%=258M&gt;257.6M，可以满足要求。</li><li>更改 datanode_memory_proportion 等参数，使查询执行可用内存&gt;257.6MB。</li><li>减少导出的时间序列数量。</li><li>给查询语句添加 slimit 限制，也是减少查询时间序列的一种方案。</li><li>添加 align by device，会按照device顺序进行输出，内存占用会降低至单device级别。</li></ul><h2 id="分布式部署-faq" tabindex="-1"><a class="header-anchor" href="#分布式部署-faq"><span>分布式部署 FAQ</span></a></h2><h3 id="集群启停" tabindex="-1"><a class="header-anchor" href="#集群启停"><span>集群启停</span></a></h3><h4 id="confignode初次启动失败-如何排查原因" tabindex="-1"><a class="header-anchor" href="#confignode初次启动失败-如何排查原因"><span>ConfigNode初次启动失败，如何排查原因？</span></a></h4><ul><li>ConfigNode初次启动时确保已清空data/confignode目录</li><li>确保该ConfigNode使用到的&lt;IP+端口&gt;没有被占用，没有与已启动的ConfigNode使用到的&lt;IP+端口&gt;冲突</li><li>确保该ConfigNode的cn_seed_config_node（指向存活的ConfigNode；如果该ConfigNode是启动的第一个ConfigNode，该值指向自身）配置正确</li><li>确保该ConfigNode的配置项（共识协议、副本数等）等与cn_seed_config_node对应的ConfigNode集群一致</li></ul><h4 id="confignode初次启动成功-show-cluster的结果里为何没有该节点" tabindex="-1"><a class="header-anchor" href="#confignode初次启动成功-show-cluster的结果里为何没有该节点"><span>ConfigNode初次启动成功，show cluster的结果里为何没有该节点？</span></a></h4><ul><li>检查cn_seed_config_node是否正确指向了正确的地址； 如果cn_seed_config_node指向了自身，则会启动一个新的ConfigNode集群</li></ul><h4 id="datanode初次启动失败-如何排查原因" tabindex="-1"><a class="header-anchor" href="#datanode初次启动失败-如何排查原因"><span>DataNode初次启动失败，如何排查原因？</span></a></h4><ul><li>DataNode初次启动时确保已清空data/datanode目录。 如果启动结果为“Reject DataNode restart.”则表示启动时可能没有清空data/datanode目录</li><li>确保该DataNode使用到的&lt;IP+端口&gt;没有被占用，没有与已启动的DataNode使用到的&lt;IP+端口&gt;冲突</li><li>确保该DataNode的dn_seed_config_node指向存活的ConfigNode</li></ul><h4 id="移除datanode执行失败-如何排查" tabindex="-1"><a class="header-anchor" href="#移除datanode执行失败-如何排查"><span>移除DataNode执行失败，如何排查？</span></a></h4><ul><li>检查<code>remove-datanode</code>脚本的参数是否正确，是否传入了正确的ip:port或正确的dataNodeId</li><li>只有集群可用节点数量 &gt; max(元数据副本数量, 数据副本数量)时，移除操作才允许被执行</li><li>执行移除DataNode的过程会将该DataNode上的数据迁移到其他存活的DataNode，数据迁移以Region为粒度，如果某个Region迁移失败，则被移除的DataNode会一直处于Removing状态</li><li>补充：处于Removing状态的节点，其节点上的Region也是Removing或Unknown状态，即不可用状态。 该Remvoing状态的节点也不会接受客户端的请求。如果要使Removing状态的节点变为可用，用户可以使用set system status to running 命令将该节点设置为Running状态；如果要使迁移失败的Region处于可用状态，可以使用migrate region from datanodeId1 to datanodeId2 命令将该不可用的Region迁移到其他存活的节点。另外IoTDB后续也会提供<code>remove-datanode.sh -f</code>命令，来强制移除节点（迁移失败的Region会直接丢弃）</li></ul><h4 id="挂掉的datanode是否支持移除" tabindex="-1"><a class="header-anchor" href="#挂掉的datanode是否支持移除"><span>挂掉的DataNode是否支持移除？</span></a></h4><ul><li>当前集群副本数量大于1时可以移除。 如果集群副本数量等于1，则不支持移除。 在下个版本会推出强制移除的命令</li></ul><h4 id="从0-13升级到1-0需要注意什么" tabindex="-1"><a class="header-anchor" href="#从0-13升级到1-0需要注意什么"><span>从0.13升级到1.0需要注意什么？</span></a></h4><ul><li>0.13版本与1.0版本的文件目录结构是不同的，不能将0.13的data目录直接拷贝到1.0集群使用。如果需要将0.13的数据导入至1.0，可以使用LOAD功能</li><li>0.13版本的默认RPC地址是0.0.0.0，1.0版本的默认RPC地址是127.0.0.1</li></ul><h3 id="集群重启" tabindex="-1"><a class="header-anchor" href="#集群重启"><span>集群重启</span></a></h3><h4 id="如何重启集群中的某个confignode" tabindex="-1"><a class="header-anchor" href="#如何重启集群中的某个confignode"><span>如何重启集群中的某个ConfigNode？</span></a></h4><ul><li>第一步：通过<code>stop-confignode.sh</code>或kill进程方式关闭ConfigNode进程</li><li>第二步：通过执行<code>start-confignode.sh</code>启动ConfigNode进程实现重启</li><li>下个版本IoTDB会提供一键重启的操作</li></ul><h4 id="如何重启集群中的某个datanode" tabindex="-1"><a class="header-anchor" href="#如何重启集群中的某个datanode"><span>如何重启集群中的某个DataNode？</span></a></h4><ul><li>第一步：通过<code>stop-datanode.sh</code>或kill进程方式关闭DataNode进程</li><li>第二步：通过执行<code>start-datanode.sh</code>启动DataNode进程实现重启</li><li>下个版本IoTDB会提供一键重启的操作</li></ul><h4 id="将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启" tabindex="-1"><a class="header-anchor" href="#将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启"><span>将某个ConfigNode移除后（remove-confignode），能否再利用该ConfigNode的data目录重启？</span></a></h4><ul><li>不能。会报错：Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster.</li></ul><h4 id="将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启" tabindex="-1"><a class="header-anchor" href="#将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启"><span>将某个DataNode移除后（remove-datanode），能否再利用该DataNode的data目录重启？</span></a></h4><ul><li>不能正常重启，启动结果为“Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...”</li></ul><h4 id="用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗" tabindex="-1"><a class="header-anchor" href="#用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗"><span>用户看到某个ConfigNode/DataNode变成了Unknown状态，在没有kill对应进程的情况下，直接删除掉ConfigNode/DataNode对应的data目录，然后执行<code>start-confignode.sh</code>/<code>start-datanode.sh</code>，这种情况下能成功吗?</span></a></h4><ul><li>无法启动成功，会报错端口已被占用</li></ul><h3 id="集群运维" tabindex="-1"><a class="header-anchor" href="#集群运维"><span>集群运维</span></a></h3><h4 id="show-cluster执行失败-显示-please-check-server-status-如何排查" tabindex="-1"><a class="header-anchor" href="#show-cluster执行失败-显示-please-check-server-status-如何排查"><span>Show cluster执行失败，显示“please check server status”，如何排查?</span></a></h4><ul><li>确保ConfigNode集群一半以上的节点处于存活状态</li><li>确保客户端连接的DataNode处于存活状态</li></ul><h4 id="某一datanode节点的磁盘文件损坏-如何修复这个节点" tabindex="-1"><a class="header-anchor" href="#某一datanode节点的磁盘文件损坏-如何修复这个节点"><span>某一DataNode节点的磁盘文件损坏，如何修复这个节点?</span></a></h4><ul><li>当前只能通过remove-datanode的方式进行实现。remove-datanode执行的过程中会将该DataNode上的数据迁移至其他存活的DataNode节点（前提是集群设置的副本数大于1）</li><li>下个版本IoTDB会提供一键修复节点的功能</li></ul><h4 id="如何降低confignode、datanode使用的内存" tabindex="-1"><a class="header-anchor" href="#如何降低confignode、datanode使用的内存"><span>如何降低ConfigNode、DataNode使用的内存？</span></a></h4><ul><li>在<code>conf/confignode-env.sh</code>、<code>conf/datanode-env.sh</code>文件可通过调整ON_HEAP_MEMORY、OFF_HEAP_MEMORY等选项可以调整ConfigNode、DataNode使用的最大堆内、堆外内存</li></ul>`,82)]))}const r=a(t,[["render",d],["__file","Frequently-asked-questions.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/latest/FAQ/Frequently-asked-questions.html","title":"常见问题","lang":"zh-CN","frontmatter":{"description":"常见问题 一般问题 如何查询我的IoTDB版本？ 有几种方法可以识别您使用的 IoTDB 版本： 启动 IoTDB 的命令行界面： 检查 pom.xml 文件： 使用 JDBC API: 使用命令行接口： 在哪里可以找到IoTDB的日志？ 假设您的根目录是： 假如 $IOTDB_HOME = /workspace/iotdb/server/target...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"常见问题"}],["meta",{"property":"og:description","content":"常见问题 一般问题 如何查询我的IoTDB版本？ 有几种方法可以识别您使用的 IoTDB 版本： 启动 IoTDB 的命令行界面： 检查 pom.xml 文件： 使用 JDBC API: 使用命令行接口： 在哪里可以找到IoTDB的日志？ 假设您的根目录是： 假如 $IOTDB_HOME = /workspace/iotdb/server/target..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-15T06:41:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T06:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-15T06:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一般问题","slug":"一般问题","link":"#一般问题","children":[{"level":3,"title":"如何查询我的IoTDB版本？","slug":"如何查询我的iotdb版本","link":"#如何查询我的iotdb版本","children":[]},{"level":3,"title":"在哪里可以找到IoTDB的日志？","slug":"在哪里可以找到iotdb的日志","link":"#在哪里可以找到iotdb的日志","children":[]},{"level":3,"title":"在哪里可以找到IoTDB的数据文件？","slug":"在哪里可以找到iotdb的数据文件","link":"#在哪里可以找到iotdb的数据文件","children":[]},{"level":3,"title":"如何知道IoTDB中存储了多少时间序列？","slug":"如何知道iotdb中存储了多少时间序列","link":"#如何知道iotdb中存储了多少时间序列","children":[]},{"level":3,"title":"可以使用Hadoop和Spark读取IoTDB中的TsFile吗？","slug":"可以使用hadoop和spark读取iotdb中的tsfile吗","link":"#可以使用hadoop和spark读取iotdb中的tsfile吗","children":[]},{"level":3,"title":"IoTDB如何处理重复的数据点？","slug":"iotdb如何处理重复的数据点","link":"#iotdb如何处理重复的数据点","children":[]},{"level":3,"title":"我如何知道具体的timeseries的类型？","slug":"我如何知道具体的timeseries的类型","link":"#我如何知道具体的timeseries的类型","children":[]},{"level":3,"title":"如何更改IoTDB的客户端时间显示格式？","slug":"如何更改iotdb的客户端时间显示格式","link":"#如何更改iotdb的客户端时间显示格式","children":[]},{"level":3,"title":"怎么处理来自org.apache.ratis.grpc.server.GrpcLogAppender的IndexOutOfBoundsException？","slug":"怎么处理来自org-apache-ratis-grpc-server-grpclogappender的indexoutofboundsexception","link":"#怎么处理来自org-apache-ratis-grpc-server-grpclogappender的indexoutofboundsexception","children":[]},{"level":3,"title":"预估内存不足报错如何处理？","slug":"预估内存不足报错如何处理","link":"#预估内存不足报错如何处理","children":[]}]},{"level":2,"title":"分布式部署 FAQ","slug":"分布式部署-faq","link":"#分布式部署-faq","children":[{"level":3,"title":"集群启停","slug":"集群启停","link":"#集群启停","children":[]},{"level":3,"title":"集群重启","slug":"集群重启","link":"#集群重启","children":[]},{"level":3,"title":"集群运维","slug":"集群运维","link":"#集群运维","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1723704118000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":4},{"name":"CritasWang","email":"critas@outlook.com","commits":2},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.8,"words":2339},"filePathRelative":"zh/UserGuide/latest/FAQ/Frequently-asked-questions.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,c as data};
