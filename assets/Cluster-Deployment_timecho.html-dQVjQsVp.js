import{_ as i,r as o,o as s,c as l,b as t,d as e,a,e as n}from"./app-DJKa25Tg.js";const r={},c=n('<h1 id="集群版安装部署" tabindex="-1"><a class="header-anchor" href="#集群版安装部署"><span>集群版安装部署</span></a></h1><p>本小节描述如何手动部署包括3个ConfigNode和3个DataNode的实例，即通常所说的3C3D集群。</p><div align="center"><img src="https://alioss.timecho.com/docs/img/集群部署.png" alt="" style="width:60%;"></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>',4),h=n(`<li><p>部署时推荐优先使用<code>hostname</code>进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostname配置IoTDB的<code>cn_internal_address</code>、<code>dn_internal_address</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>有些参数首次启动后不能修改，请参考下方的&quot;参数配置&quot;章节来进行设置。</p></li>`,2),p={href:"https://timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/Monitoring-panel-deployment.html",target:"_blank",rel:"noopener noreferrer"},g=t("h2",{id:"准备步骤",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#准备步骤"},[t("span",null,"准备步骤")])],-1),m={href:"https://www.timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package_timecho.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html",target:"_blank",rel:"noopener noreferrer"},x=n(`<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><p>假设现在有3台linux服务器，IP地址和服务角色分配如下：</p><table><thead><tr><th>节点ip</th><th>主机名</th><th>服务</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><h3 id="_1-设置主机名" tabindex="-1"><a class="header-anchor" href="#_1-设置主机名"><span>1. 设置主机名</span></a></h3><p>在3台机器上分别配置主机名，设置主机名需要在目标服务器上配置<code>/etc/hosts</code>，使用如下命令：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-参数配置" tabindex="-1"><a class="header-anchor" href="#_2-参数配置"><span>2. 参数配置</span></a></h3><p>解压安装包并进入安装目录</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>unzip  iotdb-enterprise-{version}-bin.zip
cd  iotdb-enterprise-{version}-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="环境脚本配置" tabindex="-1"><a class="header-anchor" href="#环境脚本配置"><span>环境脚本配置</span></a></h4><ul><li><p><code>./conf/confignode-env.sh</code>配置</p><table><thead><tr><th style="text-align:left;"><strong>配置项</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>默认值</strong></th><th style="text-align:left;"><strong>推荐值</strong></th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">IoTDB ConfigNode节点可以使用的内存总量</td><td style="text-align:left;">空</td><td style="text-align:left;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table></li><li><p><code>./conf/datanode-env.sh</code>配置</p><table><thead><tr><th style="text-align:left;"><strong>配置项</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>默认值</strong></th><th style="text-align:left;"><strong>推荐值</strong></th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">IoTDB DataNode节点可以使用的内存总量</td><td style="text-align:left;">空</td><td style="text-align:left;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table></li></ul><h4 id="通用配置" tabindex="-1"><a class="header-anchor" href="#通用配置"><span>通用配置</span></a></h4><p>打开通用配置文件<code>./conf/iotdb-system.properties</code>，可根据部署方式设置以下参数：</p><table><thead><tr><th>配置项</th><th>说明</th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th></tr></thead><tbody><tr><td>cluster_name</td><td>集群名称</td><td>defaultCluster</td><td>defaultCluster</td><td>defaultCluster</td></tr><tr><td>schema_replication_factor</td><td>元数据副本数，DataNode数量不应少于此数目</td><td>3</td><td>3</td><td>3</td></tr><tr><td>data_replication_factor</td><td>数据副本数，DataNode数量不应少于此数目</td><td>2</td><td>2</td><td>2</td></tr></tbody></table><h4 id="confignode-配置" tabindex="-1"><a class="header-anchor" href="#confignode-配置"><span>ConfigNode 配置</span></a></h4><p>打开ConfigNode配置文件<code>./conf/iotdb-system.properties</code>，设置以下参数</p><table><thead><tr><th>配置项</th><th>说明</th><th>默认</th><th>推荐值</th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>备注</th></tr></thead><tbody><tr><td>cn_internal_address</td><td>ConfigNode在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>所在服务器的IPV4地址或hostname，推荐使用hostname</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>首次启动后不能修改</td></tr><tr><td>cn_internal_port</td><td>ConfigNode在集群内部通讯使用的端口</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>首次启动后不能修改</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode副本组共识协议通信使用的端口</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>首次启动后不能修改</td></tr><tr><td>cn_seed_config_node</td><td>节点注册加入集群时连接的ConfigNode 的地址，cn_internal_address:cn_internal_port</td><td>127.0.0.1:10710</td><td>第一个CongfigNode的cn_internal_address:cn_internal_port</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>首次启动后不能修改</td></tr></tbody></table><h4 id="datanode-配置" tabindex="-1"><a class="header-anchor" href="#datanode-配置"><span>DataNode 配置</span></a></h4><p>打开DataNode配置文件 <code>./conf/iotdb-system.properties</code>，设置以下参数：</p><table><thead><tr><th>配置项</th><th>说明</th><th>默认</th><th>推荐值</th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>备注</th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>客户端 RPC 服务的地址</td><td>0.0.0.0</td><td>0.0.0.0</td><td>0.0.0.0</td><td>0.0.0.0</td><td>0.0.0.0</td><td>重启服务生效</td></tr><tr><td>dn_rpc_port</td><td>客户端 RPC 服务的端口</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>重启服务生效</td></tr><tr><td>dn_internal_address</td><td>DataNode在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>所在服务器的IPV4地址或hostname，推荐使用hostname</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>首次启动后不能修改</td></tr><tr><td>dn_internal_port</td><td>DataNode在集群内部通信使用的端口</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>首次启动后不能修改</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>DataNode用于接收数据流使用的端口</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>首次启动后不能修改</td></tr><tr><td>dn_data_region_consensus_port</td><td>DataNode用于数据副本共识协议通信使用的端口</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>首次启动后不能修改</td></tr><tr><td>dn_schema_region_consensus_port</td><td>DataNode用于元数据副本共识协议通信使用的端口</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>首次启动后不能修改</td></tr><tr><td>dn_seed_config_node</td><td>节点注册加入集群时连接的ConfigNode地址,即cn_internal_address:cn_internal_port</td><td>127.0.0.1:10710</td><td>第一个CongfigNode的cn_internal_address:cn_internal_port</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>首次启动后不能修改</td></tr></tbody></table><h3 id="_3-启动confignode节点" tabindex="-1"><a class="header-anchor" href="#_3-启动confignode节点"><span>3. 启动ConfigNode节点</span></a></h3><p>先启动第一个iotdb-1的confignode, 保证种子confignode节点先启动，然后依次启动第2和第3个confignode节点</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd sbin
./start-confignode.sh    -d      #“-d”参数将在后台进行启动 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-激活数据库" tabindex="-1"><a class="header-anchor" href="#_4-激活数据库"><span>4. 激活数据库</span></a></h3><h4 id="方式一-激活文件拷贝激活" tabindex="-1"><a class="header-anchor" href="#方式一-激活文件拷贝激活"><span>方式一：激活文件拷贝激活</span></a></h4><ul><li>依次启动3个confignode节点后，每台机器各自的<code>activation</code>文件夹, 分别拷贝每台机器的<code>system_info</code>文件给天谋工作人员;</li><li>工作人员将返回每个ConfigNode节点的license文件，这里会返回3个license文件；</li><li>将3个license文件分别放入对应的ConfigNode节点的<code>activation</code>文件夹下；</li></ul><h4 id="方式二-激活脚本激活" tabindex="-1"><a class="header-anchor" href="#方式二-激活脚本激活"><span>方式二：激活脚本激活</span></a></h4><ul><li><p>依次获取3台机器的机器码，分别进入安装目录的<code>sbin</code>目录，执行激活脚本<code>start-activate.sh</code>:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd sbin
./start-activate.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示如下信息，这里显示的是1台机器的机器码 ：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>Please copy the system_info&#39;s content and send it to Timecho:
Y17hFA0xRCE1TmkVxILuxxxxxxxxxxxxxxxxxxxxxxxxxxxxW5P52KCccFMVeHTc=
Please enter license:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他2个节点依次执行激活脚本<code>start-activate.sh</code>，然后将获取的3台机器的机器码都复制给天谋工作人员</p></li><li><p>工作人员会返回3段激活码，正常是与提供的3个机器码的顺序对应的，请分别将各自的激活码粘贴到上一步的命令行提示处 <code>Please enter license:</code>，如下提示：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>Please enter license:
Jw+MmF+Atxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx5bAOXNeob5l+HO5fEMgzrW8OJPh26Vl6ljKUpCvpTiw==
License has been stored to sbin/../activation/license
Import completed. Please start cluster and excute &#39;show cluster&#39; to verify activation status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_5-启动datanode-节点" tabindex="-1"><a class="header-anchor" href="#_5-启动datanode-节点"><span>5. 启动DataNode 节点</span></a></h3><p>分别进入iotdb的<code>sbin</code>目录下，依次启动3个datanode节点：</p><div class="language-Go line-numbers-mode" data-ext="Go" data-title="Go"><pre class="language-Go"><code>cd sbin
./start-datanode.sh   -d   #-d参数将在后台进行启动 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-验证部署" tabindex="-1"><a class="header-anchor" href="#_6-验证部署"><span>6. 验证部署</span></a></h3><p>可直接执行<code>./sbin</code>目录下的Cli启动脚本：</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>./start-cli.sh  -h  ip(本机ip或域名)  -p  端口号(6667)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功启动后，出现如下界面显示IOTDB安装成功。</p><figure><img src="https://alioss.timecho.com/docs/img/企业版成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>出现安装成功界面后，继续看下是否激活成功，使用 <code>show cluster</code>命令</p><p>当看到最右侧显示<code>ACTIVATED</code>表示激活成功</p><figure><img src="https://alioss.timecho.com/docs/img/企业版激活.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>出现<code>ACTIVATED(W)</code>为被动激活，表示此ConfigNode没有license文件（或没有签发时间戳最新的license文件），其激活依赖于集群中其它Activate状态的ConfigNode。此时建议检查license文件是否已放入license文件夹，没有请放入license文件，若已存在license文件，可能是此节点license文件与其他节点信息不一致导致，请联系天谋工作人员重新申请.</p></blockquote>`,40);function b(_,f){const d=o("ExternalLinkIcon");return s(),l("div",null,[c,t("ol",null,[h,t("li",null,[t("p",null,[e("推荐部署监控面板，可以对重要运行指标进行监控，随时掌握数据库运行状态，监控面板可以联系商务获取,部署监控面板步骤可以参考："),t("a",p,[e("监控面板部署"),a(d)])])])]),g,t("ol",null,[t("li",null,[e("准备IoTDB数据库安装包 ：iotdb-enterprise-{version}-bin.zip（安装包获取见："),t("a",m,[e("链接"),a(d)]),e("）")]),t("li",null,[e("按环境要求配置好操作系统环境（系统环境配置见："),t("a",u,[e("链接"),a(d)]),e("）")])]),x])}const y=i(r,[["render",b],["__file","Cluster-Deployment_timecho.html.vue"]]),C=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_timecho.html","title":"集群版安装部署","lang":"zh-CN","frontmatter":{"description":"集群版安装部署 本小节描述如何手动部署包括3个ConfigNode和3个DataNode的实例，即通常所说的3C3D集群。 注意事项 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iot...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集群版安装部署"}],["meta",{"property":"og:description","content":"集群版安装部署 本小节描述如何手动部署包括3个ConfigNode和3个DataNode的实例，即通常所说的3C3D集群。 注意事项 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iot..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E4%BC%81%E4%B8%9A%E7%89%88%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-02T11:07:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T11:07:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群版安装部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E4%BC%81%E4%B8%9A%E7%89%88%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E4%BC%81%E4%B8%9A%E7%89%88%E6%BF%80%E6%B4%BB.png\\"],\\"dateModified\\":\\"2024-08-02T11:07:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"准备步骤","slug":"准备步骤","link":"#准备步骤","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"1. 设置主机名","slug":"_1-设置主机名","link":"#_1-设置主机名","children":[]},{"level":3,"title":"2. 参数配置","slug":"_2-参数配置","link":"#_2-参数配置","children":[]},{"level":3,"title":"3. 启动ConfigNode节点","slug":"_3-启动confignode节点","link":"#_3-启动confignode节点","children":[]},{"level":3,"title":"4. 激活数据库","slug":"_4-激活数据库","link":"#_4-激活数据库","children":[]},{"level":3,"title":"5. 启动DataNode 节点","slug":"_5-启动datanode-节点","link":"#_5-启动datanode-节点","children":[]},{"level":3,"title":"6. 验证部署","slug":"_6-验证部署","link":"#_6-验证部署","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1722596866000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":5},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.38,"words":1914},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_timecho.md","localizedDate":"2023年7月10日","autoDesc":true}');export{y as comp,C as data};
