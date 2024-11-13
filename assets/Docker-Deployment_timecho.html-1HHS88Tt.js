import{_ as s,c as n,b as i,o as a}from"./app-B280G6gL.js";const d={};function l(o,e){return a(),n("div",null,e[0]||(e[0]=[i(`<h1 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署"><span>Docker部署</span></a></h1><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>Docker安装</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">#以ubuntu为例，其他操作系统可以自行搜索安装方法</span>
<span class="line">#step1: 安装一些必要的系统工具</span>
<span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common</span>
<span class="line">#step2: 安装GPG证书</span>
<span class="line">curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -</span>
<span class="line">#step3: 写入软件源信息</span>
<span class="line">sudo add-apt-repository &quot;deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;</span>
<span class="line">#step4: 更新并安装Docker-CE</span>
<span class="line">sudo apt-get -y update</span>
<span class="line">sudo apt-get -y install docker-ce</span>
<span class="line">#step5: 设置docker开机自启动</span>
<span class="line">sudo systemctl enable docker</span>
<span class="line">#step6： 验证docker是否安装成功</span>
<span class="line">docker --version  #显示版本信息，即安装成功</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose安装" tabindex="-1"><a class="header-anchor" href="#docker-compose安装"><span>docker-compose安装</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">#安装命令</span>
<span class="line">curl -L &quot;https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose</span>
<span class="line">chmod +x /usr/local/bin/docker-compose</span>
<span class="line">ln -s  /usr/local/bin/docker-compose  /usr/bin/docker-compose</span>
<span class="line">#验证是否安装成功</span>
<span class="line">docker-compose --version  #显示版本信息即安装成功</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装dmidecode插件" tabindex="-1"><a class="header-anchor" href="#安装dmidecode插件"><span>安装dmidecode插件</span></a></h3><p>默认情况下，linux服务器应该都已安装，如果没有安装的话，可以使用下面的命令安装。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">sudo apt-get install dmidecode </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>dmidecode 安装后，查找安装路径：<code>whereis dmidecode</code>，这里假设结果为<code>/usr/sbin/dmidecode</code>，记住该路径，后面的docker-compose的yml文件会用到。</p><h3 id="获取iotdb的容器镜像" tabindex="-1"><a class="header-anchor" href="#获取iotdb的容器镜像"><span>获取IoTDB的容器镜像</span></a></h3><p>关于IoTDB企业版的容器镜像您可联系商务或技术支持获取。</p><h2 id="单机版部署" tabindex="-1"><a class="header-anchor" href="#单机版部署"><span>单机版部署</span></a></h2><p>本节演示如何部署1C1D的docker单机版。</p><h3 id="load-镜像文件" tabindex="-1"><a class="header-anchor" href="#load-镜像文件"><span>load 镜像文件</span></a></h3><p>比如这里获取的IoTDB的容器镜像文件名是：<code>iotdb-enterprise-1.3.2.3-standalone-docker.tar.gz</code></p><p>load镜像：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker load -i iotdb-enterprise-1.3.2.3-standalone-docker.tar.gz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看镜像：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker images</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/单机-查看镜像.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="创建docker-bridge网络" tabindex="-1"><a class="header-anchor" href="#创建docker-bridge网络"><span>创建docker bridge网络</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker network create --driver=bridge --subnet=172.18.0.0/16 --gateway=172.18.0.1  iotdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="编写docker-compose的yml文件" tabindex="-1"><a class="header-anchor" href="#编写docker-compose的yml文件"><span>编写docker-compose的yml文件</span></a></h3><p>这里我们以把IoTDB安装目录和yml文件统一放在<code>/docker-iotdb</code> 文件夹下为例：</p><p>文件目录结构为：<code>/docker-iotdb/iotdb</code>, <code>/docker-iotdb/docker-compose-standalone.yml </code></p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker-iotdb：</span>
<span class="line">├── iotdb  #iotdb安装目录</span>
<span class="line">│── docker-compose-standalone.yml #单机版docker-compose的yml文件</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的<code>docker-compose-standalone.yml</code>内容如下：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">version: &quot;3&quot;</span>
<span class="line">services:</span>
<span class="line">  iotdb-service:</span>
<span class="line">    image: iotdb-enterprise:1.3.2.3-standalone #使用的镜像</span>
<span class="line">    hostname: iotdb</span>
<span class="line">    container_name: iotdb</span>
<span class="line">    restart: always       </span>
<span class="line">    ports:</span>
<span class="line">      - &quot;6667:6667&quot;</span>
<span class="line">    environment:</span>
<span class="line">      - cn_internal_address=iotdb</span>
<span class="line">      - cn_internal_port=10710</span>
<span class="line">      - cn_consensus_port=10720</span>
<span class="line">      - cn_seed_config_node=iotdb:10710</span>
<span class="line">      - dn_rpc_address=iotdb</span>
<span class="line">      - dn_internal_address=iotdb</span>
<span class="line">      - dn_rpc_port=6667</span>
<span class="line">      - dn_internal_port=10730</span>
<span class="line">      - dn_mpp_data_exchange_port=10740</span>
<span class="line">      - dn_schema_region_consensus_port=10750</span>
<span class="line">      - dn_data_region_consensus_port=10760</span>
<span class="line">      - dn_seed_config_node=iotdb:10710</span>
<span class="line">    privileged: true</span>
<span class="line">    volumes:</span>
<span class="line">        - ./iotdb/activation:/iotdb/activation</span>
<span class="line">        - ./iotdb/data:/iotdb/data</span>
<span class="line">        - ./iotdb/logs:/iotdb/logs</span>
<span class="line">        - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro</span>
<span class="line">        - /dev/mem:/dev/mem:ro</span>
<span class="line">    networks:</span>
<span class="line">      iotdb:</span>
<span class="line">        ipv4_address: 172.18.0.6</span>
<span class="line">networks:</span>
<span class="line">  iotdb:</span>
<span class="line">    external: true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首次启动" tabindex="-1"><a class="header-anchor" href="#首次启动"><span>首次启动</span></a></h3><p>使用下面的命令启动：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd　/docker-iotdb</span>
<span class="line">docker-compose -f docker-compose-standalone.yml up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于没有激活，首次启动时会直接退出，属于正常现象，首次启动是为了获取机器码文件，用于后面的激活流程。</p><figure><img src="https://alioss.timecho.com/docs/img/单机-激活.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="申请激活" tabindex="-1"><a class="header-anchor" href="#申请激活"><span>申请激活</span></a></h3><ul><li><p>首次启动后，在物理机目录<code>/docker-iotdb/iotdb/activation</code>下会生成一个 <code>system_info</code>文件，将这个文件拷贝给天谋工作人员。</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>收到工作人员返回的license文件，将license文件拷贝到<code>/docker-iotdb/iotdb/activation</code>文件夹下。</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="再次启动iotdb" tabindex="-1"><a class="header-anchor" href="#再次启动iotdb"><span>再次启动IoTDB</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker-compose -f docker-compose-standalone.yml up  -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/启动iotdb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="验证部署" tabindex="-1"><a class="header-anchor" href="#验证部署"><span>验证部署</span></a></h3><ul><li>查看日志，有如下字样，表示启动成功</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker logs -f iotdb-datanode #查看日志命令</span>
<span class="line">2024-07-19 12:02:32,608 [main] INFO  o.a.i.db.service.DataNode:231 - Congratulations, IoTDB DataNode is set up successfully. Now, enjoy yourself!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/单机-验证部署1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>进入容器，查看服务运行状态及激活信息</p><p>查看启动的容器</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker ps</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/单机-验证部署2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入容器, 通过cli登录数据库, 使用show cluster命令查看服务状态及激活状态</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker exec -it iotdb   /bin/bash        #进入容器</span>
<span class="line">./start-cli.sh -h iotdb                  #登录数据库</span>
<span class="line">IoTDB&gt; show cluster                      #查看状态</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到服务都是running,激活状态显示已激活。</p><figure><img src="https://alioss.timecho.com/docs/img/单机-验证部署3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="映射-conf目录-可选" tabindex="-1"><a class="header-anchor" href="#映射-conf目录-可选"><span>映射/conf目录(可选)</span></a></h3><p>后续如果想在物理机中直接修改配置文件，可以把容器中的/conf文件夹映射出来，分三步：</p><p>步骤一：拷贝容器中的/conf目录到<code>/docker-iotdb/iotdb/conf</code></p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker cp iotdb:/iotdb/conf /docker-iotdb/iotdb/conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>步骤二：在docker-compose-standalone.yml中添加映射</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">    volumes:</span>
<span class="line">        - ./iotdb/conf:/iotdb/conf   #增加这个/conf文件夹的映射</span>
<span class="line">        - ./iotdb/activation:/iotdb/activation</span>
<span class="line">        - ./iotdb/data:/iotdb/data</span>
<span class="line">        - ./iotdb/logs:/iotdb/logs</span>
<span class="line">        - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro</span>
<span class="line">        - /dev/mem:/dev/mem:ro</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三：重新启动IoTDB</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker-compose  -f docker-compose-standalone.yml  up  -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="集群版部署" tabindex="-1"><a class="header-anchor" href="#集群版部署"><span>集群版部署</span></a></h2><p>本小节描述如何手动部署包括3个ConfigNode和3个DataNode的实例，即通常所说的3C3D集群。</p><div align="center"><img src="https://alioss.timecho.com/docs/img/集群部署.png" alt="" style="width:60%;"></div><p><strong>注意：集群版目前只支持host网络和overlay 网络，不支持bridge网络。</strong></p><p>下面以host网络为例演示如何部署3C3D集群。</p><h3 id="设置主机名" tabindex="-1"><a class="header-anchor" href="#设置主机名"><span>设置主机名</span></a></h3><p>假设现在有3台linux服务器，IP地址和服务角色分配如下：</p><table><thead><tr><th>节点ip</th><th>主机名</th><th>服务</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><p>在3台机器上分别配置主机名，设置主机名需要在目标服务器上配置/etc/hosts，使用如下命令：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts</span>
<span class="line">echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts</span>
<span class="line">echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="load镜像文件" tabindex="-1"><a class="header-anchor" href="#load镜像文件"><span>load镜像文件</span></a></h3><p>比如获取的IoTDB的容器镜像文件名是：<code>iotdb-enterprise-1.3.2.3-standalone-docker.tar.gz</code></p><p>在3台服务器上分别执行load镜像命令：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker load -i iotdb-enterprise-1.3.2.3-standalone-docker.tar.gz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看镜像：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker images</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/镜像加载.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编写docker-compose的yml文件-1" tabindex="-1"><a class="header-anchor" href="#编写docker-compose的yml文件-1"><span>编写docker-compose的yml文件</span></a></h3><p>这里我们以把IoTDB安装目录和yml文件统一放在/docker-iotdb文件夹下为例：</p><p>文件目录结构为：<code>/docker-iotdb/iotdb</code>，<code>/docker-iotdb/confignode.yml</code>，<code>/docker-iotdb/datanode.yml</code></p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker-iotdb：</span>
<span class="line">├── confignode.yml #confignode的yml文件</span>
<span class="line">├── datanode.yml   #datanode的yml文件</span>
<span class="line">└── iotdb          #IoTDB安装目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在每台服务器上都要编写2个yml文件，即<code>confignode.yml</code>和<code>datanode.yml</code>，yml示例如下：</p><p><strong>confignode.yml：</strong></p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">#confignode.yml</span>
<span class="line">version: &quot;3&quot;</span>
<span class="line">services:</span>
<span class="line">  iotdb-confignode:</span>
<span class="line">    image: iotdb-enterprise:1.3.2.3-standalone #使用的镜像</span>
<span class="line">    hostname: iotdb-1|iotdb-2|iotdb-3 #根据实际情况选择，三选一</span>
<span class="line">    container_name: iotdb-confignode</span>
<span class="line">    command: [&quot;bash&quot;, &quot;-c&quot;, &quot;entrypoint.sh confignode&quot;]</span>
<span class="line">    restart: always</span>
<span class="line">    environment:</span>
<span class="line">      - cn_internal_address=iotdb-1|iotdb-2|iotdb-3 #根据实际情况选择，三选一</span>
<span class="line">      - cn_internal_port=10710</span>
<span class="line">      - cn_consensus_port=10720</span>
<span class="line">      - cn_seed_config_node=iotdb-1:10710   #默认第一台为seed节点</span>
<span class="line">      - schema_replication_factor=3         #元数据副本数</span>
<span class="line">      - data_replication_factor=2           #数据副本数</span>
<span class="line">    privileged: true</span>
<span class="line">    volumes:</span>
<span class="line">      - ./iotdb/activation:/iotdb/activation</span>
<span class="line">      - ./iotdb/data:/iotdb/data</span>
<span class="line">      - ./iotdb/logs:/iotdb/logs</span>
<span class="line">      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro</span>
<span class="line">      - /dev/mem:/dev/mem:ro</span>
<span class="line">    network_mode: &quot;host&quot;    #使用host网络</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>datanode.yml：</strong></p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">#datanode.yml</span>
<span class="line">version: &quot;3&quot;</span>
<span class="line">services:</span>
<span class="line">  iotdb-datanode:</span>
<span class="line">    image: iotdb-enterprise:1.3.2.3-standalone #使用的镜像</span>
<span class="line">    hostname: iotdb-1|iotdb-2|iotdb-3 #根据实际情况选择，三选一</span>
<span class="line">    container_name: iotdb-datanode</span>
<span class="line">    command: [&quot;bash&quot;, &quot;-c&quot;, &quot;entrypoint.sh datanode&quot;]</span>
<span class="line">    restart: always</span>
<span class="line">    ports:</span>
<span class="line">      - &quot;6667:6667&quot;</span>
<span class="line">    privileged: true</span>
<span class="line">    environment:</span>
<span class="line">      - dn_rpc_address=iotdb-1|iotdb-2|iotdb-3 #根据实际情况选择，三选一</span>
<span class="line">      - dn_internal_address=iotdb-1|iotdb-2|iotdb-3 #根据实际情况选择，三选一</span>
<span class="line">      - dn_seed_config_node=iotdb-1:10710      #默认第1台为seed节点</span>
<span class="line">      - dn_rpc_port=6667</span>
<span class="line">      - dn_internal_port=10730</span>
<span class="line">      - dn_mpp_data_exchange_port=10740</span>
<span class="line">      - dn_schema_region_consensus_port=10750</span>
<span class="line">      - dn_data_region_consensus_port=10760</span>
<span class="line">      - schema_replication_factor=3         #元数据副本数</span>
<span class="line">      - data_replication_factor=2           #数据副本数</span>
<span class="line">    volumes:</span>
<span class="line">      - ./iotdb/activation:/iotdb/activation</span>
<span class="line">      - ./iotdb/data:/iotdb/data</span>
<span class="line">      - ./iotdb/logs:/iotdb/logs</span>
<span class="line">      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro</span>
<span class="line">      - /dev/mem:/dev/mem:ro</span>
<span class="line">    network_mode: &quot;host&quot;   #使用host网络</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首次启动confignode" tabindex="-1"><a class="header-anchor" href="#首次启动confignode"><span>首次启动confignode</span></a></h3><p>先在3台服务器上分别启动confignode, 用来获取机器码，注意启动顺序，先启动第1台iotdb-1,再启动iotdb-2和iotdb-3。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd　/docker-iotdb</span>
<span class="line">docker-compose -f confignode.yml up  -d #后台启动</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="申请激活-1" tabindex="-1"><a class="header-anchor" href="#申请激活-1"><span>申请激活</span></a></h3><ul><li><p>首次启动3个confignode后，在每个物理机目录<code>/docker-iotdb/iotdb/activation</code>下都会生成一个<code>system_info</code>文件，将3个服务器的<code>system_info</code>文件拷贝给天谋工作人员；</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>将3个license文件分别放入对应的ConfigNode节点的<code>/docker-iotdb/iotdb/activation</code>文件夹下；</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>license放入对应的activation文件夹后，confignode会自动激活，不用重启confignode</p></li></ul><h3 id="启动datanode" tabindex="-1"><a class="header-anchor" href="#启动datanode"><span>启动datanode</span></a></h3><p>在3台服务器上分别启动datanode</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd /docker-iotdb</span>
<span class="line">docker-compose  -f  datanode.yml  up -d #后台启动</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/集群版-dn启动.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="验证部署-1" tabindex="-1"><a class="header-anchor" href="#验证部署-1"><span>验证部署</span></a></h3><ul><li><p>查看日志，有如下字样，表示datanode启动成功</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker logs -f iotdb-datanode #查看日志命令</span>
<span class="line">2024-07-20 16:50:48,937 [main] INFO  o.a.i.db.service.DataNode:231 - Congratulations, IoTDB DataNode is set up successfully. Now, enjoy yourself!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/dn启动.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>进入任意一个容器，查看服务运行状态及激活信息</p><p>查看启动的容器</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker ps</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/查看容器.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入容器,通过cli登录数据库,使用<code>show cluster</code>命令查看服务状态及激活状态</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker exec -it iotdb-datanode /bin/bash #进入容器</span>
<span class="line">./start-cli.sh -h iotdb-1                #登录数据库</span>
<span class="line">IoTDB&gt; show cluster                      #查看状态</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到服务都是running,激活状态显示已激活。</p><figure><img src="https://alioss.timecho.com/docs/img/集群-激活.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="映射-conf目录-可选-1" tabindex="-1"><a class="header-anchor" href="#映射-conf目录-可选-1"><span>映射/conf目录(可选)</span></a></h3><p>后续如果想在物理机中直接修改配置文件，可以把容器中的/conf文件夹映射出来，分三步：</p><p>步骤一：在3台服务器中分别拷贝容器中的/conf目录到<code>/docker-iotdb/iotdb/conf</code></p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">docker cp iotdb-confignode:/iotdb/conf /docker-iotdb/iotdb/conf</span>
<span class="line">或者</span>
<span class="line">docker cp iotdb-datanode:/iotdb/conf   /docker-iotdb/iotdb/conf </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤二：在3台服务器的<code>confignode.yml</code>和<code>datanode.yml</code>中添加/conf目录映射</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">#confignode.yml</span>
<span class="line">    volumes:</span>
<span class="line">      - ./iotdb/conf:/iotdb/conf  #增加这个/conf文件夹的映射</span>
<span class="line">      - ./iotdb/activation:/iotdb/activation</span>
<span class="line">      - ./iotdb/data:/iotdb/data</span>
<span class="line">      - ./iotdb/logs:/iotdb/logs</span>
<span class="line">      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro</span>
<span class="line">      - /dev/mem:/dev/mem:ro</span>
<span class="line"></span>
<span class="line">#datanode.yml</span>
<span class="line">    volumes:</span>
<span class="line">      - ./iotdb/conf:/iotdb/conf   #增加这个/conf文件夹的映射</span>
<span class="line">      - ./iotdb/activation:/iotdb/activation</span>
<span class="line">      - ./iotdb/data:/iotdb/data</span>
<span class="line">      - ./iotdb/logs:/iotdb/logs</span>
<span class="line">      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro</span>
<span class="line">      - /dev/mem:/dev/mem:ro</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三：在3台服务器上重新启动IoTDB</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd /docker-iotdb</span>
<span class="line">docker-compose  -f confignode.yml  up  -d</span>
<span class="line">docker-compose  -f datanode.yml    up  -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,97)]))}const t=s(d,[["render",l],["__file","Docker-Deployment_timecho.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Docker-Deployment_timecho.html","title":"Docker部署","lang":"zh-CN","frontmatter":{"description":"Docker部署 环境准备 Docker安装 docker-compose安装 安装dmidecode插件 默认情况下，linux服务器应该都已安装，如果没有安装的话，可以使用下面的命令安装。 dmidecode 安装后，查找安装路径：whereis dmidecode，这里假设结果为/usr/sbin/dmidecode，记住该路径，后面的docke...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Docker-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Docker-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Docker部署"}],["meta",{"property":"og:description","content":"Docker部署 环境准备 Docker安装 docker-compose安装 安装dmidecode插件 默认情况下，linux服务器应该都已安装，如果没有安装的话，可以使用下面的命令安装。 dmidecode 安装后，查找安装路径：whereis dmidecode，这里假设结果为/usr/sbin/dmidecode，记住该路径，后面的docke..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E6%9F%A5%E7%9C%8B%E9%95%9C%E5%83%8F.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E6%9F%A5%E7%9C%8B%E9%95%9C%E5%83%8F.PNG\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E6%BF%80%E6%B4%BB.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB1.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB2.png\\",\\"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8iotdb.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B21.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B22.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B23.png\\",\\"https://alioss.timecho.com/docs/img/%E9%95%9C%E5%83%8F%E5%8A%A0%E8%BD%BD.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB1.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB2.png\\",\\"https://alioss.timecho.com/docs/img/%E9%9B%86%E7%BE%A4%E7%89%88-dn%E5%90%AF%E5%8A%A8.png\\",\\"https://alioss.timecho.com/docs/img/dn%E5%90%AF%E5%8A%A8.png\\",\\"https://alioss.timecho.com/docs/img/%E6%9F%A5%E7%9C%8B%E5%AE%B9%E5%99%A8.png\\",\\"https://alioss.timecho.com/docs/img/%E9%9B%86%E7%BE%A4-%E6%BF%80%E6%B4%BB.png\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"Docker安装","slug":"docker安装","link":"#docker安装","children":[]},{"level":3,"title":"docker-compose安装","slug":"docker-compose安装","link":"#docker-compose安装","children":[]},{"level":3,"title":"安装dmidecode插件","slug":"安装dmidecode插件","link":"#安装dmidecode插件","children":[]},{"level":3,"title":"获取IoTDB的容器镜像","slug":"获取iotdb的容器镜像","link":"#获取iotdb的容器镜像","children":[]}]},{"level":2,"title":"单机版部署","slug":"单机版部署","link":"#单机版部署","children":[{"level":3,"title":"load 镜像文件","slug":"load-镜像文件","link":"#load-镜像文件","children":[]},{"level":3,"title":"创建docker bridge网络","slug":"创建docker-bridge网络","link":"#创建docker-bridge网络","children":[]},{"level":3,"title":"编写docker-compose的yml文件","slug":"编写docker-compose的yml文件","link":"#编写docker-compose的yml文件","children":[]},{"level":3,"title":"首次启动","slug":"首次启动","link":"#首次启动","children":[]},{"level":3,"title":"申请激活","slug":"申请激活","link":"#申请激活","children":[]},{"level":3,"title":"再次启动IoTDB","slug":"再次启动iotdb","link":"#再次启动iotdb","children":[]},{"level":3,"title":"验证部署","slug":"验证部署","link":"#验证部署","children":[]},{"level":3,"title":"映射/conf目录(可选)","slug":"映射-conf目录-可选","link":"#映射-conf目录-可选","children":[]}]},{"level":2,"title":"集群版部署","slug":"集群版部署","link":"#集群版部署","children":[{"level":3,"title":"设置主机名","slug":"设置主机名","link":"#设置主机名","children":[]},{"level":3,"title":"load镜像文件","slug":"load镜像文件","link":"#load镜像文件","children":[]},{"level":3,"title":"编写docker-compose的yml文件","slug":"编写docker-compose的yml文件-1","link":"#编写docker-compose的yml文件-1","children":[]},{"level":3,"title":"首次启动confignode","slug":"首次启动confignode","link":"#首次启动confignode","children":[]},{"level":3,"title":"申请激活","slug":"申请激活-1","link":"#申请激活-1","children":[]},{"level":3,"title":"启动datanode","slug":"启动datanode","link":"#启动datanode","children":[]},{"level":3,"title":"验证部署","slug":"验证部署-1","link":"#验证部署-1","children":[]},{"level":3,"title":"映射/conf目录(可选)","slug":"映射-conf目录-可选-1","link":"#映射-conf目录-可选-1","children":[]}]}],"git":{"createdTime":1723190680000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.33,"words":2498},"filePathRelative":"zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Docker-Deployment_timecho.md","localizedDate":"2024年8月9日","autoDesc":true}');export{t as comp,r as data};
