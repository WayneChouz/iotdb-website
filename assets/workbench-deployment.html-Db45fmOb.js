import{_ as l,r as a,o,c as d,b as t,d as e,a as s,e as i}from"./app-CHHFxD1F.js";const r={},c=i('<h1 id="可视化控制台部署" tabindex="-1"><a class="header-anchor" href="#可视化控制台部署"><span>可视化控制台部署</span></a></h1><p>可视化控制台是IoTDB配套工具之一。它用于数据库部署实施、运维管理、应用开发各阶段的官方应用工具体系，让数据库的使用、运维和管理更加简单、高效，真正实现数据库低成本的管理和运维。本文档将帮助您安装Workbench。</p><div style="display:flex;justify-content:space-between;"><img src="https://alioss.timecho.com/docs/img/首页.PNG" alt=" " style="width:50%;"><img src="https://alioss.timecho.com/docs/img/测点列表.PNG" alt="" style="width:50%;"></div><h2 id="安装准备" tabindex="-1"><a class="header-anchor" href="#安装准备"><span>安装准备</span></a></h2>',4),p=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"准备内容"),t("th",{style:{"text-align":"center"}},"名称"),t("th",{style:{"text-align":"center"}},"版本要求"),t("th",{style:{"text-align":"center"}},"官方链接")])],-1),h=t("tr",null,[t("td",{style:{"text-align":"center"}},"操作系统"),t("td",{style:{"text-align":"center"}},"Windows或Linux"),t("td",{style:{"text-align":"center"}},"-"),t("td",{style:{"text-align":"center"}},"-")],-1),g=t("td",{style:{"text-align":"center"}},"安装环境",-1),m=t("td",{style:{"text-align":"center"}},"JDK",-1),u=t("td",{style:{"text-align":"center"}},"需要 >= V1.8.0_162（推荐使用 11 或者 17，下载时请根据机器配置选择ARM或x64安装包）",-1),b={style:{"text-align":"center"}},y={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},_=t("td",{style:{"text-align":"center"}},"相关软件",-1),x=t("td",{style:{"text-align":"center"}},"Prometheus",-1),v=t("td",{style:{"text-align":"center"}},"需要 >=V2.30.3",-1),f={style:{"text-align":"center"}},k={href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"},w=t("tr",null,[t("td",{style:{"text-align":"center"}},"数据库"),t("td",{style:{"text-align":"center"}},"IoTDB"),t("td",{style:{"text-align":"center"}},"需要>=V1.2.0企业版"),t("td",{style:{"text-align":"center"}},"您可联系商务或技术支持获取")],-1),T=t("tr",null,[t("td",{style:{"text-align":"center"}},"控制台"),t("td",{style:{"text-align":"center"}},[e("IoTDB-Workbench-"),t("code",null,"<version>")]),t("td",{style:{"text-align":"center"}},"-"),t("td",{style:{"text-align":"center"}},"您可根据附录版本对照表进行选择后联系商务或技术支持获取")],-1),B=i(`<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><h3 id="步骤一-iotdb-开启监控指标采集" tabindex="-1"><a class="header-anchor" href="#步骤一-iotdb-开启监控指标采集"><span>步骤一：IoTDB 开启监控指标采集</span></a></h3><ol><li><p>打开监控配置项。IoTDB中监控有关的配置项默认是关闭的，在部署监控面板前，您需要打开相关配置项（注意开启监控配置后需要重启服务）。</p><table><tr><th>配置项</th><th>所在配置文件</th><th>配置说明</th></tr><tr><td>cn_metric_reporter_list</td><td rowspan="3">conf/iotdb-confignode.properties</td><td>将配置项取消注释，值设置为PROMETHEUS</td></tr><tr><td>cn_metric_level</td><td>将配置项取消注释，值设置为IMPORTANT</td></tr><tr><td>cn_metric_prometheus_reporter_port</td><td>将配置项取消注释，可保持默认设置9091，如设置其他端口，不与其他端口冲突即可</td></tr><tr><td>dn_metric_reporter_list</td><td rowspan="4">conf/iotdb-datanode.properties</td><td>将配置项取消注释，值设置为PROMETHEUS</td></tr><tr><td>dn_metric_level</td><td>将配置项取消注释，值设置为IMPORTANT</td></tr><tr><td>dn_metric_prometheus_reporter_port</td><td>将配置项取消注释，可保持默认设置9092，如设置其他端口，不与其他端口冲突即可</td></tr><tr><td>dn_metric_internal_reporter_type</td><td>将配置项取消注释，值设置为IOTDB</td></tr><tr><td>enable_audit_log</td><td rowspan="3">conf/iotdb-common.properties</td><td>将配置项取消注释，值设置为true</td></tr><tr><td>audit_log_storage</td><td>将配置项取消注释</td></tr><tr><td>audit_log_operation</td><td>将配置项取消注释</td></tr></table></li><li><p>重启所有节点。修改3个节点的监控指标配置后，可重新启动所有节点的confignode和datanode服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sbin/stop-standalone.sh      <span class="token comment">#先停止confignode和datanode</span>
./sbin/start-confignode.sh  <span class="token parameter variable">-d</span> <span class="token comment">#启动confignode</span>
./sbin/start-datanode.sh  <span class="token parameter variable">-d</span>   <span class="token comment">#启动datanode </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启后，通过客户端确认各节点的运行状态，若状态都为Running，则为配置成功：</p><figure><img src="https://alioss.timecho.com/docs/img/启动.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h3 id="步骤二-安装、配置prometheus监控" tabindex="-1"><a class="header-anchor" href="#步骤二-安装、配置prometheus监控"><span>步骤二：安装、配置Prometheus监控</span></a></h3>`,4),I={href:"https://prometheus.io/docs/introduction/first_steps/%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},D=i(`<li><p>解压安装包，进入解压后的文件夹：</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>tar xvfz prometheus-*.tar.gz
cd prometheus-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改配置。修改配置文件prometheus.yml如下</p><ol><li>新增confignode任务收集ConfigNode的监控数据</li><li>新增datanode任务收集DataNode的监控数据</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>global:
  scrape_interval: 15s 
  evaluation_interval: 15s 
scrape_configs:
  - job_name: <span class="token string">&quot;prometheus&quot;</span>
    static_configs:
      - targets: <span class="token punctuation">[</span><span class="token string">&quot;localhost:9090&quot;</span><span class="token punctuation">]</span>
  - job_name: <span class="token string">&quot;confignode&quot;</span>
    static_configs:
      - targets: <span class="token punctuation">[</span><span class="token string">&quot;iotdb-1:9091&quot;</span>,<span class="token string">&quot;iotdb-2:9091&quot;</span>,<span class="token string">&quot;iotdb-3:9091&quot;</span><span class="token punctuation">]</span>
    honor_labels: <span class="token boolean">true</span>
  - job_name: <span class="token string">&quot;datanode&quot;</span>
    static_configs:
      - targets: <span class="token punctuation">[</span><span class="token string">&quot;iotdb-1:9092&quot;</span>,<span class="token string">&quot;iotdb-2:9092&quot;</span>,<span class="token string">&quot;iotdb-3:9092&quot;</span><span class="token punctuation">]</span>
    honor_labels: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动Prometheus。Prometheus 监控数据的默认过期时间为15天，在生产环境中，建议将其调整为180天以上，以对更长时间的历史监控数据进行追踪，启动命令如下所示：</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>./prometheus --config.file=prometheus.yml --storage.tsdb.retention.time=180d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),E={href:"http://IP",target:"_blank",rel:"noopener noreferrer"},P=t("div",{style:{display:"flex","justify-content":"space-between"}},[t("img",{src:"https://alioss.timecho.com/docs/img/启动_1.png",alt:"",style:{width:"50%"}}),t("img",{src:"https://alioss.timecho.com/docs/img/启动_2.png",alt:"",style:{width:"48%"}})],-1),V=t("h3",{id:"步骤三-安装workbench",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#步骤三-安装workbench"},[t("span",null,"步骤三：安装Workbench")])],-1),q=t("h4",{id:"windows版",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#windows版"},[t("span",null,"Windows版：")])],-1),W=i(`<li><p>进入iotdb-Workbench-<code>&lt;version&gt;</code>的config目录</p></li><li><p>修改Workbench配置文件：进入<code>config</code>文件夹下修改配置文件<code>application-prod.properties</code>。若您是在本机安装则无需修改，若是部署在服务器上则需修改IP地址</p><table><thead><tr><th>配置项</th><th>修改前</th><th>修改后</th></tr></thead><tbody><tr><td>pipe.callbackUrl</td><td>pipe.callbackUrl=<code>http://127.0.0.1</code></td><td>pipe.callbackUrl=<code>http://&lt;部署Workbench的IP地址&gt;</code></td></tr></tbody></table><figure><img src="https://alioss.timecho.com/docs/img/windows.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>启动程序：请在IoTDB-Workbench-<code>&lt;version&gt;</code>的sbin文件夹下执行启动命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动Workbench</span>
start.bat <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可以通过<code>jps</code>命令进行启动是否成功，如图所示即为启动成功：</p><figure><img src="https://alioss.timecho.com/docs/img/windows-jps.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),z={href:"http://xn--ip-fr5c86lx7z",target:"_blank",rel:"noopener noreferrer"},A={href:"http://127.0.0.1:9190",target:"_blank",rel:"noopener noreferrer"},N=t("figure",null,[t("img",{src:"https://alioss.timecho.com/docs/img/workbench.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),j=t("h4",{id:"linux版",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#linux版"},[t("span",null,"Linux版：")])],-1),S=i(`<li><p>进入IoTDB-Workbench-<code>&lt;version&gt;</code>目录</p></li><li><p>修改Workbench配置：进入<code>config</code>文件夹下修改配置文件<code>application-prod.properties</code>。若您是在本机安装则无需修改，若是部署在服务器上则需修改IP地址</p><table><thead><tr><th>配置项</th><th>修改前</th><th>修改后</th></tr></thead><tbody><tr><td>pipe.callbackUrl</td><td>pipe.callbackUrl=<code>http://127.0.0.1</code></td><td>pipe.callbackUrl=<code>http://&lt;部署Workbench的IP地址&gt;</code></td></tr></tbody></table><figure><img src="https://alioss.timecho.com/docs/img/linux.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>启动程序：请在IoTDB-Workbench-<code>&lt;version&gt;</code>的sbin文件夹下执行启动命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动Workbench</span>
./start.sh <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可以通过<code>jps</code>命令进行启动是否成功,如图所示即为启动成功：</p><figure><img src="https://alioss.timecho.com/docs/img/linux-jps.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),U={href:"http://xn--ip-fr5c86lx7z",target:"_blank",rel:"noopener noreferrer"},M={href:"http://127.0.0.1:9190",target:"_blank",rel:"noopener noreferrer"},G=t("figure",null,[t("img",{src:"https://alioss.timecho.com/docs/img/workbench.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),F=i('<h3 id="步骤四-配置实例信息" tabindex="-1"><a class="header-anchor" href="#步骤四-配置实例信息"><span>步骤四：配置实例信息</span></a></h3><ol><li>配置实例信息：您只需要填写以下信息即可连接到实例</li></ol><figure><img src="https://alioss.timecho.com/docs/img/实例信息.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th style="text-align:center;">字段名称</th><th style="text-align:center;">是否为必填项</th><th style="text-align:center;">字段含义</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">连接类型</td><td style="text-align:center;">是</td><td style="text-align:center;">不同连接类型连接所填内容不同，支持选择“单机、集群、双活”</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">实例名称</td><td style="text-align:center;">是</td><td style="text-align:center;">您可根据名称对不同实例进行区分，最多输入 50 个字符</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">实例信息</td><td style="text-align:center;">是</td><td style="text-align:center;">填写数据库的地址（iotdb/conf/iotdb-datanode.properties 文件中 dn_rpc_address 字段）以及端口号（dn_rpc_port字段）注：对于集群和双活点击“+”支持输入多个实例信息</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">Prometheus 信息</td><td style="text-align:center;">否</td><td style="text-align:center;">填写“http://&lt;Prometheus的IP地址&gt;:&lt;Prometheus的端口号&gt;/api/v1/query”即可通过首页查看部分监控信息，推荐您进行配置使用</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">用户名</td><td style="text-align:center;">是</td><td style="text-align:center;">填写IoTDB的用户名，支持输入 4～32 个字符，可使用英文大小写字母、数字、特殊字符（!@#$%^&amp;*()_+-=）</td><td style="text-align:center;">root</td></tr><tr><td style="text-align:center;">密码</td><td style="text-align:center;">否</td><td style="text-align:center;">填写IoTDB的密码，为了保证数据库的安全我们不会对密码进行保存，请您在每次连接实例或测试时自行填写</td><td style="text-align:center;">root</td></tr></tbody></table><ol start="2"><li>测试所填信息的准确性：您可以通过点击“测试”按钮对实例信息进行连接测试</li></ol><figure><img src="https://alioss.timecho.com/docs/img/实例信息-测试.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="附录-iotdb与控制台版本对照表" tabindex="-1"><a class="header-anchor" href="#附录-iotdb与控制台版本对照表"><span>附录：IoTDB与控制台版本对照表</span></a></h2><table><thead><tr><th style="text-align:center;">控制台版本号</th><th style="text-align:center;">版本说明</th><th style="text-align:center;">可支持IoTDB版本</th></tr></thead><tbody><tr><td style="text-align:center;">V1.3.1</td><td style="text-align:center;">分析功能新增分析方式，优化导入模版等功能</td><td style="text-align:center;">V1.3.2及以上版本</td></tr><tr><td style="text-align:center;">V1.3.0</td><td style="text-align:center;">新增数据库配置功能，优化部分版本细节</td><td style="text-align:center;">V1.3.2及以上版本</td></tr><tr><td style="text-align:center;">V1.2.6</td><td style="text-align:center;">优化各模块权限控制功能</td><td style="text-align:center;">V1.3.1及以上版本</td></tr><tr><td style="text-align:center;">V1.2.5</td><td style="text-align:center;">可视化功能新增“常用模版”概念，所有界面优化补充页面缓存等功能</td><td style="text-align:center;">V1.3.0及以上版本</td></tr><tr><td style="text-align:center;">V1.2.4</td><td style="text-align:center;">计算功能新增“导入、导出”功能，测点列表新增“时间对齐”字段</td><td style="text-align:center;">V1.2.2及以上版本</td></tr><tr><td style="text-align:center;">V1.2.3</td><td style="text-align:center;">首页新增“激活详情”，新增分析等功能</td><td style="text-align:center;">V1.2.2及以上版本</td></tr><tr><td style="text-align:center;">V1.2.2</td><td style="text-align:center;">优化“测点描述”展示内容等功能</td><td style="text-align:center;">V1.2.2及以上版本</td></tr><tr><td style="text-align:center;">V1.2.1</td><td style="text-align:center;">数据同步界面新增“监控面板”，优化Prometheus提示信息</td><td style="text-align:center;">V1.2.2及以上版本</td></tr><tr><td style="text-align:center;">V1.2.0</td><td style="text-align:center;">全新Workbench版本升级</td><td style="text-align:center;">V1.2.0及以上版本</td></tr></tbody></table>',8);function R(O,C){const n=a("ExternalLinkIcon");return o(),d("div",null,[c,t("table",null,[p,t("tbody",null,[h,t("tr",null,[g,m,u,t("td",b,[t("a",y,[e("https://www.oracle.com/java/technologies/downloads/"),s(n)])])]),t("tr",null,[_,x,v,t("td",f,[t("a",k,[e("https://prometheus.io/download/"),s(n)])])]),w,T])]),B,t("ol",null,[t("li",null,[t("p",null,[e("确保Prometheus安装完成（官方安装说明可参考："),t("a",I,[e("https://prometheus.io/docs/introduction/first_steps/）"),s(n)])])]),D,t("li",null,[t("p",null,[e("确认启动成功。在浏览器中输入 "),t("a",E,[e("http://IP"),s(n)]),e(":port，进入Prometheus，点击进入Status下的Target界面，当看到State均为Up时表示配置成功并已经联通。")]),P])]),V,q,t("ol",null,[W,t("li",null,[t("p",null,[e('验证是否成功：浏览器中打开:"'),t("a",z,[e("http://服务器ip"),s(n)]),e(':配置文件中端口"进行访问，例如:"'),t("a",A,[e("http://127.0.0.1:9190"),s(n)]),e('"，当出现登录界面时即为成功')]),N])]),j,t("ol",null,[S,t("li",null,[t("p",null,[e('验证是否成功：浏览器中打开 "'),t("a",U,[e("http://服务器ip"),s(n)]),e(':配置文件中端口"进行访问，例如:"'),t("a",M,[e("http://127.0.0.1:9190"),s(n)]),e('"，当出现登录界面时即为成功')]),G])]),F])}const Z=l(r,[["render",R],["__file","workbench-deployment.html.vue"]]),H=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.html","title":"可视化控制台部署","lang":"zh-CN","frontmatter":{"description":"可视化控制台部署 可视化控制台是IoTDB配套工具之一。它用于数据库部署实施、运维管理、应用开发各阶段的官方应用工具体系，让数据库的使用、运维和管理更加简单、高效，真正实现数据库低成本的管理和运维。本文档将帮助您安装Workbench。 安装准备 安装步骤 步骤一：IoTDB 开启监控指标采集 打开监控配置项。IoTDB中监控有关的配置项默认是关闭的，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"可视化控制台部署"}],["meta",{"property":"og:description","content":"可视化控制台部署 可视化控制台是IoTDB配套工具之一。它用于数据库部署实施、运维管理、应用开发各阶段的官方应用工具体系，让数据库的使用、运维和管理更加简单、高效，真正实现数据库低成本的管理和运维。本文档将帮助您安装Workbench。 安装准备 安装步骤 步骤一：IoTDB 开启监控指标采集 打开监控配置项。IoTDB中监控有关的配置项默认是关闭的，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-13T01:53:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-13T01:53:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"可视化控制台部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8.PNG\\",\\"https://alioss.timecho.com/docs/img/windows.png\\",\\"https://alioss.timecho.com/docs/img/windows-jps.png\\",\\"https://alioss.timecho.com/docs/img/workbench.png\\",\\"https://alioss.timecho.com/docs/img/linux.png\\",\\"https://alioss.timecho.com/docs/img/linux-jps.png\\",\\"https://alioss.timecho.com/docs/img/workbench.png\\",\\"https://alioss.timecho.com/docs/img/%E5%AE%9E%E4%BE%8B%E4%BF%A1%E6%81%AF.png\\",\\"https://alioss.timecho.com/docs/img/%E5%AE%9E%E4%BE%8B%E4%BF%A1%E6%81%AF-%E6%B5%8B%E8%AF%95.png\\"],\\"dateModified\\":\\"2024-08-13T01:53:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装准备","slug":"安装准备","link":"#安装准备","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"步骤一：IoTDB 开启监控指标采集","slug":"步骤一-iotdb-开启监控指标采集","link":"#步骤一-iotdb-开启监控指标采集","children":[]},{"level":3,"title":"步骤二：安装、配置Prometheus监控","slug":"步骤二-安装、配置prometheus监控","link":"#步骤二-安装、配置prometheus监控","children":[]},{"level":3,"title":"步骤三：安装Workbench","slug":"步骤三-安装workbench","link":"#步骤三-安装workbench","children":[]},{"level":3,"title":"步骤四：配置实例信息","slug":"步骤四-配置实例信息","link":"#步骤四-配置实例信息","children":[]}]},{"level":2,"title":"附录：IoTDB与控制台版本对照表","slug":"附录-iotdb与控制台版本对照表","link":"#附录-iotdb与控制台版本对照表","children":[]}],"git":{"createdTime":1719826062000,"updatedTime":1723514038000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.02,"words":2105},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.md","localizedDate":"2024年7月1日","autoDesc":true}');export{Z as comp,H as data};
