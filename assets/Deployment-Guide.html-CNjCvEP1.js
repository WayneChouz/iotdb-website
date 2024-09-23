import{_ as l,c as o,b as s,d as t,e,a as d,w as i,r,o as p}from"./app-CYbL30xh.js";const c={};function g(u,n){const a=r("RouteLink");return p(),o("div",null,[n[31]||(n[31]=s('<h1 id="部署指导" tabindex="-1"><a class="header-anchor" href="#部署指导"><span>部署指导</span></a></h1><p>IoTDB 提供单机版、集群版共 2 种部署形态。本章节将详细介绍每一种部署形态的具体部署步骤。</p><h2 id="预备知识" tabindex="-1"><a class="header-anchor" href="#预备知识"><span>预备知识</span></a></h2><p>在开始部署前，您需要充分了解下面的预备知识。</p><h3 id="安装包结构" tabindex="-1"><a class="header-anchor" href="#安装包结构"><span>安装包结构</span></a></h3><p>首先，需要获取安装包，名字为 <code>apache-iotdb-{version}-all-bin</code> 的安装包包含 ConfigNode 和 DataNode 的可执行程序，请将安装包部署于目标集群的所有机器上，推荐将安装包部署于所有服务器的相同目录下。</p><p><strong>之后，需要对 IoTDB 安装包的结构有了解。IoTDB 安装包目录结构如下：</strong></p><table><thead><tr><th><strong>目录</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>conf</td><td>配置文件目录，包含 ConfigNode、DataNode、JMX 和 logback 等配置文件</td></tr><tr><td>data</td><td>数据文件目录，包含 ConfigNode 和 DataNode 的数据文件</td></tr><tr><td>lib</td><td>库文件目录</td></tr><tr><td>logs</td><td>日志文件目录，包含 ConfigNode 和 DataNode 的日志文件</td></tr><tr><td>sbin</td><td>脚本目录，包含 ConfigNode 和 DataNode 的启停移除脚本，以及 Cli 的启动脚本等</td></tr><tr><td>tools</td><td>系统工具目录</td></tr></tbody></table><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><p><strong>必要情况下，您需要根据业务需求，修改每个服务器上的配置文件。登录服务器，并将工作路径切换至 <code>apache-iotdb-{version}-all-bin</code>，配置文件在 <code>./conf</code> 目录内。</strong></p><ul><li>对于所有部署 ConfigNode 的服务器，需要修改 <strong>通用配置</strong> 和 <strong>ConfigNode 配置</strong> 。</li><li>对于所有部署 DataNode 的服务器，需要修改 <strong>通用配置</strong> 和 <strong>DataNode 配置</strong> 。</li></ul><h4 id="通用配置" tabindex="-1"><a class="header-anchor" href="#通用配置"><span>通用配置</span></a></h4>',12)),t("p",null,[n[1]||(n[1]=e("打开通用配置文件 ./conf/iotdb-common.properties，可根据 ")),d(a,{to:"/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Recommendation.html"},{default:i(()=>n[0]||(n[0]=[e("部署推荐")])),_:1}),n[2]||(n[2]=e("设置以下参数："))]),n[32]||(n[32]=s('<table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>节点希望加入的集群的名称</td><td>defaultCluster</td></tr><tr><td>config_node_consensus_protocol_class</td><td>ConfigNode 使用的共识协议</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>schema_replication_factor</td><td>元数据副本数，DataNode 数量不应少于此数目</td><td>1</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>元数据副本组的共识协议</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>data_replication_factor</td><td>数据副本数，DataNode 数量不应少于此数目</td><td>1</td></tr><tr><td>data_region_consensus_protocol_class</td><td>数据副本组的共识协议。注：RatisConsensus 目前不支持多数据目录</td><td>org.apache.iotdb.consensus.iot.IoTConsensus</td></tr></tbody></table><p><strong>注意：上述配置项在集群启动后即不可更改，且务必保证所有节点的通用配置完全一致，否则节点无法启动。</strong></p><h4 id="confignode-配置" tabindex="-1"><a class="header-anchor" href="#confignode-配置"><span>ConfigNode 配置</span></a></h4><p>打开 ConfigNode 配置文件 ./conf/iotdb-confignode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th><th><strong>用法</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>ConfigNode 在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>ConfigNode 在集群内部通讯使用的端口</td><td>10710</td><td>设置为任意未占用端口</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode 副本组共识协议通信使用的端口</td><td>10720</td><td>设置为任意未占用端口</td></tr><tr><td>cn_target_config_node_list</td><td>节点注册加入集群时连接的 ConfigNode 的地址。注：只能配置一个</td><td>127.0.0.1:10710</td><td>对于 Seed-ConfigNode，设置为自己的 cn_internal_address:cn_internal_port；对于其它 ConfigNode，设置为另一个正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port</td></tr></tbody></table><p><strong>注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。</strong></p><h4 id="datanode-配置" tabindex="-1"><a class="header-anchor" href="#datanode-配置"><span>DataNode 配置</span></a></h4><p>打开 DataNode 配置文件 ./conf/iotdb-datanode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th><th><strong>用法</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>客户端 RPC 服务的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_rpc_port</td><td>客户端 RPC 服务的端口</td><td>6667</td><td>设置为任意未占用端口</td></tr><tr><td>dn_internal_address</td><td>DataNode 在集群内部接收控制流使用的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_internal_port</td><td>DataNode 在集群内部接收控制流使用的端口</td><td>10730</td><td>设置为任意未占用端口</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>DataNode 在集群内部接收数据流使用的端口</td><td>10740</td><td>设置为任意未占用端口</td></tr><tr><td>dn_data_region_consensus_port</td><td>DataNode 的数据副本间共识协议通信的端口</td><td>10750</td><td>设置为任意未占用端口</td></tr><tr><td>dn_schema_region_consensus_port</td><td>DataNode 的元数据副本间共识协议通信的端口</td><td>10760</td><td>设置为任意未占用端口</td></tr><tr><td>dn_target_config_node_list</td><td>集群中正在运行的 ConfigNode 地址</td><td>127.0.0.1:10710</td><td>设置为任意正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port，可设置多个，用逗号（&quot;,&quot;）隔开</td></tr></tbody></table><p><strong>注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。</strong></p><h3 id="环境检查" tabindex="-1"><a class="header-anchor" href="#环境检查"><span>环境检查</span></a></h3><p><strong>最后，在正式部署前，还需要对下列项目进行检查：</strong></p><ol><li>JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</li><li>设置最大文件打开数为 65535。</li><li>关闭交换内存。</li><li>首次启动 ConfigNode 节点时，确保已清空 ConfigNode 节点的 data/confignode 目录；首次启动 DataNode 节点时，确保已清空 DataNode 节点的 data/datanode 目录。</li><li>如果整个集群处在可信环境下，可以关闭机器上的防火墙选项。</li><li>在集群默认配置中，ConfigNode 会占用端口 10710 和 10720，DataNode 会占用端口 6667、10730、10740、10750 和 10760，请确保这些端口未被占用，或者手动修改配置文件中的端口配置。</li></ol><h3 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h3>',14)),t("p",null,[n[4]||(n[4]=e("在部署集群过程中有任何问题，请参考 ")),d(a,{to:"/zh/UserGuide/V1.2.x/FAQ/Frequently-asked-questions.html"},{default:i(()=>n[3]||(n[3]=[e("分布式部署FAQ")])),_:1}),n[5]||(n[5]=e(" 。"))]),n[33]||(n[33]=s(`<h2 id="单机版部署" tabindex="-1"><a class="header-anchor" href="#单机版部署"><span>单机版部署</span></a></h2><p>本小节描述如何启动包括 1 个 ConfigNode 和 1 个 DataNode 的实例。</p><h3 id="启动流程" tabindex="-1"><a class="header-anchor" href="#启动流程"><span>启动流程</span></a></h3><p>在完成配置文件的修改后（一般仅需要修改 IP 等信息） ，用户可以使用 sbin 文件夹下的 start-standalone 脚本启动 IoTDB。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; bash sbin/start-standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; sbin\\start-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意：目前，要使用单机模式，你需要保证所有的地址设置为 127.0.0.1，如果需要从非 IoTDB 所在的机器访问此IoTDB，请将配置项 <code>dn_rpc_address</code> 修改为 IoTDB 所在的机器 IP。</p><h3 id="验证部署" tabindex="-1"><a class="header-anchor" href="#验证部署"><span>验证部署</span></a></h3><p>若搭建的集群仅用于本地调试，可直接执行 ./sbin 目录下的 Cli 启动脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/start-cli.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-cli.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)),t("p",null,[n[7]||(n[7]=e("若希望通过 Cli 连接生产环境的集群，")),n[8]||(n[8]=t("br",null,null,-1)),n[9]||(n[9]=e(" 请阅读 ")),d(a,{to:"/zh/UserGuide/V1.2.x/Tools-System/CLI.html"},{default:i(()=>n[6]||(n[6]=[e("Cli 使用手册")])),_:1}),n[10]||(n[10]=e(" 。"))]),n[34]||(n[34]=s(`<p>成功启动集群后，在 Cli 执行 <code>show cluster details</code>：</p><ul><li>若所有节点的状态均为 <strong>Running</strong>，则说明集群部署成功；</li><li>否则，请阅读启动失败节点的运行日志，并检查对应的配置参数。</li></ul><h3 id="停止流程" tabindex="-1"><a class="header-anchor" href="#停止流程"><span>停止流程</span></a></h3><p>Linux 系统与 MacOS 系统停止命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; bash sbin/stop-standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows 系统停止命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; sbin\\stop-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="集群版部署" tabindex="-1"><a class="header-anchor" href="#集群版部署"><span>集群版部署</span></a></h2><h3 id="启动流程-1" tabindex="-1"><a class="header-anchor" href="#启动流程-1"><span>启动流程</span></a></h3><p>本小节描述如何启动包括若干 ConfigNode 和 DataNode 的集群。<br> 集群可以提供服务的标准是至少启动一个 ConfigNode 且启动不小于（数据/元数据）副本个数的 DataNode。</p><p>总体启动流程分为三步：</p><ol><li>启动种子 ConfigNode</li><li>增加 ConfigNode（可选）</li><li>增加 DataNode</li></ol><h4 id="启动-seed-confignode" tabindex="-1"><a class="header-anchor" href="#启动-seed-confignode"><span>启动 Seed-ConfigNode</span></a></h4><p><strong>集群第一个启动的节点必须是 ConfigNode，第一个启动的 ConfigNode 必须遵循本小节教程。</strong></p><p>第一个启动的 ConfigNode 是 Seed-ConfigNode，标志着新集群的创建。<br> 在启动 Seed-ConfigNode 前，请打开通用配置文件 ./conf/iotdb-common.properties，并检查如下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>已设置为期望的集群名称</td></tr><tr><td>config_node_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr><tr><td>schema_replication_factor</td><td>已设置为期望的元数据副本数</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr><tr><td>data_replication_factor</td><td>已设置为期望的数据副本数</td></tr><tr><td>data_region_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr></tbody></table>`,16)),t("p",null,[n[12]||(n[12]=t("strong",null,"注意：",-1)),n[13]||(n[13]=e(" 请根据")),d(a,{to:"/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Recommendation.html"},{default:i(()=>n[11]||(n[11]=[e("部署推荐")])),_:1}),n[14]||(n[14]=e("配置合适的通用参数，这些参数在首次配置后即不可修改。"))]),n[35]||(n[35]=s(`<p>接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查如下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>该端口未被占用</td></tr><tr><td>cn_consensus_port</td><td>该端口未被占用</td></tr><tr><td>cn_target_config_node_list</td><td>已设置为自己的内部通讯地址，即 cn_internal_address:cn_internal_port</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux 前台启动</span>
<span class="line">bash ./sbin/start-confignode.sh</span>
<span class="line"></span>
<span class="line"># Linux 后台启动</span>
<span class="line">nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),t("p",null,[n[16]||(n[16]=e("ConfigNode 的其它配置参数可参考")),n[17]||(n[17]=t("br",null,null,-1)),d(a,{to:"/zh/UserGuide/V1.2.x/Reference/ConfigNode-Config-Manual.html"},{default:i(()=>n[15]||(n[15]=[e("ConfigNode 配置参数")])),_:1}),n[18]||(n[18]=e(" 。"))]),n[36]||(n[36]=s(`<h4 id="增加更多-confignode-可选" tabindex="-1"><a class="header-anchor" href="#增加更多-confignode-可选"><span>增加更多 ConfigNode（可选）</span></a></h4><p><strong>只要不是第一个启动的 ConfigNode 就必须遵循本小节教程。</strong></p><p>可向集群添加更多 ConfigNode，以保证 ConfigNode 的高可用。常用的配置为额外增加两个 ConfigNode，使集群共有三个 ConfigNode。</p><p>新增的 ConfigNode 需要保证 ./conf/iotdb-common.properites 中的所有配置参数与 Seed-ConfigNode 完全一致，否则可能启动失败或产生运行时错误。<br> 因此，请着重检查通用配置文件中的以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>config_node_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>schema_replication_factor</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>data_replication_factor</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>data_region_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr></tbody></table><p>接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>该端口未被占用</td></tr><tr><td>cn_consensus_port</td><td>该端口未被占用</td></tr><tr><td>cn_target_config_node_list</td><td>已设置为另一个正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux 前台启动</span>
<span class="line">bash ./sbin/start-confignode.sh</span>
<span class="line"></span>
<span class="line"># Linux 后台启动</span>
<span class="line">nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)),t("p",null,[n[20]||(n[20]=e("ConfigNode 的其它配置参数可参考")),n[21]||(n[21]=t("br",null,null,-1)),d(a,{to:"/zh/UserGuide/V1.2.x/Reference/ConfigNode-Config-Manual.html"},{default:i(()=>n[19]||(n[19]=[e("ConfigNode配置参数")])),_:1})]),n[37]||(n[37]=s(`<h4 id="增加-datanode" tabindex="-1"><a class="header-anchor" href="#增加-datanode"><span>增加 DataNode</span></a></h4><p><strong>确保集群已有正在运行的 ConfigNode 后，才能开始增加 DataNode。</strong></p><p>可以向集群中添加任意个 DataNode。<br> 在添加新的 DataNode 前，请先打开通用配置文件 ./conf/iotdb-common.properties 并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>与 Seed-ConfigNode 保持一致</td></tr></tbody></table><p>接着打开它的配置文件 ./conf/iotdb-datanode.properties 并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_rpc_port</td><td>该端口未被占用</td></tr><tr><td>dn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_internal_port</td><td>该端口未被占用</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>该端口未被占用</td></tr><tr><td>dn_data_region_consensus_port</td><td>该端口未被占用</td></tr><tr><td>dn_schema_region_consensus_port</td><td>该端口未被占用</td></tr><tr><td>dn_target_config_node_list</td><td>已设置为正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux 前台启动</span>
<span class="line">bash ./sbin/start-datanode.sh</span>
<span class="line"></span>
<span class="line"># Linux 后台启动</span>
<span class="line">nohup bash ./sbin/start-datanode.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-datanode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),t("p",null,[n[23]||(n[23]=e("DataNode 的其它配置参数可参考")),n[24]||(n[24]=t("br",null,null,-1)),d(a,{to:"/zh/UserGuide/V1.2.x/Reference/DataNode-Config-Manual.html"},{default:i(()=>n[22]||(n[22]=[e("DataNode配置参数")])),_:1}),n[25]||(n[25]=e(" 。"))]),n[38]||(n[38]=s(`<p><strong>注意：当且仅当集群拥有不少于副本个数（max{schema_replication_factor, data_replication_factor}）的 DataNode 后，集群才可以提供服务</strong></p><h3 id="验证部署-1" tabindex="-1"><a class="header-anchor" href="#验证部署-1"><span>验证部署</span></a></h3><p>若搭建的集群仅用于本地调试，可直接执行 ./sbin 目录下的 Cli 启动脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/start-cli.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-cli.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),t("p",null,[n[27]||(n[27]=e("若希望通过 Cli 连接生产环境的集群，")),n[28]||(n[28]=t("br",null,null,-1)),n[29]||(n[29]=e(" 请阅读 ")),d(a,{to:"/zh/UserGuide/V1.2.x/Tools-System/CLI.html"},{default:i(()=>n[26]||(n[26]=[e("Cli 使用手册")])),_:1}),n[30]||(n[30]=e(" 。"))]),n[39]||(n[39]=s(`<p>以在6台服务器上启动的3C3D（3个ConfigNode 和 3个DataNode）集群为例，<br> 这里假设3个ConfigNode的IP地址依次为192.168.1.10、192.168.1.11、192.168.1.12，且3个ConfigNode启动时均使用了默认的端口10710与10720；<br> 3个DataNode的IP地址依次为192.168.1.20、192.168.1.21、192.168.1.22，且3个DataNode启动时均使用了默认的端口6667、10730、10740、10750与10760。</p><p>成功启动集群后，在 Cli 执行 <code>show cluster details</code>，看到的结果应当如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster details</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+</span>
<span class="line">|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|  RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+</span>
<span class="line">|     0|ConfigNode|Running|   192.168.1.10|       10710|              10720|            |       |       |                   |                 |</span>
<span class="line">|     2|ConfigNode|Running|   192.168.1.11|       10710|              10720|            |       |       |                   |                 |</span>
<span class="line">|     3|ConfigNode|Running|   192.168.1.12|       10710|              10720|            |       |       |                   |                 |</span>
<span class="line">|     1|  DataNode|Running|   192.168.1.20|       10730|                   |192.168.1.20|   6667|  10740|              10750|            10760|</span>
<span class="line">|     4|  DataNode|Running|   192.168.1.21|       10730|                   |192.168.1.21|   6667|  10740|              10750|            10760|</span>
<span class="line">|     5|  DataNode|Running|   192.168.1.22|       10730|                   |192.168.1.22|   6667|  10740|              10750|            10760|</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若所有节点的状态均为 <strong>Running</strong>，则说明集群部署成功；<br> 否则，请阅读启动失败节点的运行日志，并检查对应的配置参数。</p><h3 id="停止流程-1" tabindex="-1"><a class="header-anchor" href="#停止流程-1"><span>停止流程</span></a></h3><p>本小节描述如何手动关闭 IoTDB 的 ConfigNode 或 DataNode 进程。</p><h4 id="使用脚本停止-confignode" tabindex="-1"><a class="header-anchor" href="#使用脚本停止-confignode"><span>使用脚本停止 ConfigNode</span></a></h4><p>执行停止 ConfigNode 脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/stop-confignode.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\stop-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用脚本停止-datanode" tabindex="-1"><a class="header-anchor" href="#使用脚本停止-datanode"><span>使用脚本停止 DataNode</span></a></h4><p>执行停止 DataNode 脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/stop-datanode.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\stop-datanode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="停止节点进程" tabindex="-1"><a class="header-anchor" href="#停止节点进程"><span>停止节点进程</span></a></h4><p>首先获取节点的进程号：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">jps</span>
<span class="line"></span>
<span class="line"># 或</span>
<span class="line"></span>
<span class="line">ps aux | grep iotdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结束进程：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">kill -9 &lt;pid&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>注意：有些端口的信息需要 root 权限才能获取，在此情况下请使用 sudo</strong></p><h3 id="集群缩容" tabindex="-1"><a class="header-anchor" href="#集群缩容"><span>集群缩容</span></a></h3><p>本小节描述如何将 ConfigNode 或 DataNode 移出集群。</p><h4 id="移除-confignode" tabindex="-1"><a class="header-anchor" href="#移除-confignode"><span>移除 ConfigNode</span></a></h4><p>在移除 ConfigNode 前，请确保移除后集群至少还有一个活跃的 ConfigNode。<br> 在活跃的 ConfigNode 上执行 remove-confignode 脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">## 根据 confignode_id 移除节点</span>
<span class="line">./sbin/remove-confignode.sh &lt;confignode_id&gt;</span>
<span class="line"></span>
<span class="line">## 根据 ConfigNode 内部通讯地址和端口移除节点</span>
<span class="line">./sbin/remove-confignode.sh &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">## 根据 confignode_id 移除节点</span>
<span class="line">.\\sbin\\remove-confignode.bat &lt;confignode_id&gt;</span>
<span class="line"></span>
<span class="line">## 根据 ConfigNode 内部通讯地址和端口移除节点</span>
<span class="line">.\\sbin\\remove-confignode.bat &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="移除-datanode" tabindex="-1"><a class="header-anchor" href="#移除-datanode"><span>移除 DataNode</span></a></h4><p>在移除 DataNode 前，请确保移除后集群至少还有不少于（数据/元数据）副本个数的 DataNode。<br> 在活跃的 DataNode 上执行 remove-datanode 脚本：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">## 根据 datanode_id 移除节点</span>
<span class="line">./sbin/remove-datanode.sh &lt;datanode_id&gt;</span>
<span class="line"></span>
<span class="line">## 根据 DataNode RPC 服务地址和端口移除节点</span>
<span class="line">./sbin/remove-datanode.sh &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">## 根据 datanode_id 移除节点</span>
<span class="line">.\\sbin\\remove-datanode.bat &lt;datanode_id&gt;</span>
<span class="line"></span>
<span class="line">## 根据 DataNode RPC 服务地址和端口移除节点</span>
<span class="line">.\\sbin\\remove-datanode.bat &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26))])}const h=l(c,[["render",g],["__file","Deployment-Guide.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Guide.html","title":"部署指导","lang":"zh-CN","frontmatter":{"description":"部署指导 IoTDB 提供单机版、集群版共 2 种部署形态。本章节将详细介绍每一种部署形态的具体部署步骤。 预备知识 在开始部署前，您需要充分了解下面的预备知识。 安装包结构 首先，需要获取安装包，名字为 apache-iotdb-{version}-all-bin 的安装包包含 ConfigNode 和 DataNode 的可执行程序，请将安装包部署...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Guide.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Guide.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"部署指导"}],["meta",{"property":"og:description","content":"部署指导 IoTDB 提供单机版、集群版共 2 种部署形态。本章节将详细介绍每一种部署形态的具体部署步骤。 预备知识 在开始部署前，您需要充分了解下面的预备知识。 安装包结构 首先，需要获取安装包，名字为 apache-iotdb-{version}-all-bin 的安装包包含 ConfigNode 和 DataNode 的可执行程序，请将安装包部署..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-14T10:50:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T10:50:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署指导\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-14T10:50:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"预备知识","slug":"预备知识","link":"#预备知识","children":[{"level":3,"title":"安装包结构","slug":"安装包结构","link":"#安装包结构","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"环境检查","slug":"环境检查","link":"#环境检查","children":[]},{"level":3,"title":"FAQ","slug":"faq","link":"#faq","children":[]}]},{"level":2,"title":"单机版部署","slug":"单机版部署","link":"#单机版部署","children":[{"level":3,"title":"启动流程","slug":"启动流程","link":"#启动流程","children":[]},{"level":3,"title":"验证部署","slug":"验证部署","link":"#验证部署","children":[]},{"level":3,"title":"停止流程","slug":"停止流程","link":"#停止流程","children":[]}]},{"level":2,"title":"集群版部署","slug":"集群版部署","link":"#集群版部署","children":[{"level":3,"title":"启动流程","slug":"启动流程-1","link":"#启动流程-1","children":[]},{"level":3,"title":"验证部署","slug":"验证部署-1","link":"#验证部署-1","children":[]},{"level":3,"title":"停止流程","slug":"停止流程-1","link":"#停止流程-1","children":[]},{"level":3,"title":"集群缩容","slug":"集群缩容","link":"#集群缩容","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1702551046000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":2},{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":11.87,"words":3562},"filePathRelative":"zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Deployment-Guide.md","localizedDate":"2023年7月10日","autoDesc":true}');export{h as comp,m as data};
