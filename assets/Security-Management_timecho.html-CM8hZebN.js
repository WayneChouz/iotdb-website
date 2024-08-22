import{_ as e,o as i,c as t,e as a}from"./app-BZ7vU6A9.js";const n={},s=a(`<h1 id="安全控制" tabindex="-1"><a class="header-anchor" href="#安全控制"><span>安全控制</span></a></h1><h2 id="白名单" tabindex="-1"><a class="header-anchor" href="#白名单"><span>白名单</span></a></h2><p><strong>功能描述</strong></p><p>允许哪些客户端地址能连接 IoTDB</p><p><strong>配置文件</strong></p><p>conf/iotdb-system.properties</p><p>conf/white.list</p><p><strong>配置项</strong></p><p>iotdb-system.properties:</p><p>决定是否开启白名单功能</p><div class="language-YAML line-numbers-mode" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code># 是否开启白名单功能
enable_white_list=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>white.list:</p><p>决定哪些IP地址能够连接IoTDB</p><div class="language-YAML line-numbers-mode" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code># 支持注释
# 支持精确匹配，每行一个ip
10.2.3.4

# 支持*通配符，每行一个ip
10.*.1.3
10.100.0.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong></p><ol><li>如果通过session客户端取消本身的白名单，当前连接并不会立即断开。在下次创建连接的时候拒绝。</li><li>如果直接修改white.list，一分钟内生效。如果通过session客户端修改，立即生效，更新内存中的值和white.list磁盘文件</li><li>开启白名单功能，没有white.list 文件，启动DB服务成功，但是，拒绝所有连接。</li><li>DB服务运行中，删除 white.list 文件，至多一分钟后，拒绝所有连接。</li><li>是否开启白名单功能的配置，可以热加载。</li><li>使用Java 原生接口修改白名单，必须是root用户才能修改，拒绝非root用户修改；修改内容必须合法，否则会抛出StatementExecutionException异常。</li></ol><figure><img src="https://alioss.timecho.com/docs/img/白名单.PNG" alt="白名单" tabindex="0" loading="lazy"><figcaption>白名单</figcaption></figure><h2 id="审计日志" tabindex="-1"><a class="header-anchor" href="#审计日志"><span>审计日志</span></a></h2><h3 id="功能背景" tabindex="-1"><a class="header-anchor" href="#功能背景"><span>功能背景</span></a></h3><p>审计日志是数据库的记录凭证，通过审计日志功能可以查询到用户在数据库中增删改查等各项操作，以保证信息安全。关于IoTDB的审计日志功能可以实现以下场景的需求：</p><ul><li>可以按链接来源（是否人为操作）决定是否记录审计日志，如：非人为操作如硬件采集器写入的数据不需要记录审计日志，人为操作如普通用户通过cli、workbench等工具操作的数据需要记录审计日志。</li><li>过滤掉系统级别的写入操作，如IoTDB监控体系本身记录的写入操作等。</li></ul><h4 id="场景说明" tabindex="-1"><a class="header-anchor" href="#场景说明"><span>场景说明</span></a></h4><h5 id="对所有用户的所有操作-增、删、改、查-进行记录" tabindex="-1"><a class="header-anchor" href="#对所有用户的所有操作-增、删、改、查-进行记录"><span>对所有用户的所有操作（增、删、改、查）进行记录</span></a></h5><p>通过审计日志功能追踪到所有用户在数据中的各项操作。其中所记录的信息要包含数据操作（新增、删除、查询）及元数据操作（新增、修改、删除、查询）、客户端登录信息（用户名、ip地址）。</p><p>客户端的来源</p><ul><li>Cli、workbench、Zeppelin、Grafana、通过 Session/JDBC/MQTT 等协议传入的请求</li></ul><figure><img src="https://alioss.timecho.com/docs/img/审计日志.PNG" alt="审计日志" tabindex="0" loading="lazy"><figcaption>审计日志</figcaption></figure><h5 id="可关闭部分用户连接的审计日志" tabindex="-1"><a class="header-anchor" href="#可关闭部分用户连接的审计日志"><span>可关闭部分用户连接的审计日志</span></a></h5><p>如非人为操作，硬件采集器通过 Session/JDBC/MQTT 写入的数据不需要记录审计日志</p><h3 id="功能定义" tabindex="-1"><a class="header-anchor" href="#功能定义"><span>功能定义</span></a></h3><p>通过配置可以实现：</p><ul><li>决定是否开启审计功能</li><li>决定审计日志的输出位置，支持输出至一项或多项 <ol><li>日志文件</li><li>IoTDB存储</li></ol></li><li>决定是否屏蔽原生接口的写入，防止记录审计日志过多影响性能</li><li>决定审计日志内容类别，支持记录一项或多项 <ol><li>数据的新增、删除操作</li><li>数据和元数据的查询操作</li><li>元数据类的新增、修改、删除操作</li></ol></li></ul><h4 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h4><p>在 iotdb-system.properties中修改以下几项配置</p><div class="language-YAML line-numbers-mode" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code>####################
### Audit log Configuration
####################

# whether to enable the audit log.
# Datatype: Boolean
# enable_audit_log=false

# Output location of audit logs
# Datatype: String
# IOTDB: the stored time series is: root.__system.audit._{user}
# LOGGER: log_audit.log in the log directory
# audit_log_storage=IOTDB,LOGGER

# whether enable audit log for DML operation of data
# whether enable audit log for DDL operation of schema
# whether enable audit log for QUERY operation of data and schema
# Datatype: String
# audit_log_operation=DML,DDL,QUERY

# whether the local write api records audit logs
# Datatype: Boolean
# This contains Session insert api: insertRecord(s), insertTablet(s),insertRecordsOfOneDevice
# MQTT insert api
# RestAPI insert api
# This parameter will cover the DML in audit_log_operation
# enable_audit_log_for_native_insert_api=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),l=[s];function o(r,d){return i(),t("div",null,l)}const p=e(n,[["render",o],["__file","Security-Management_timecho.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/Security-Management_timecho.html","title":"安全控制","lang":"zh-CN","frontmatter":{"description":"安全控制 白名单 功能描述 允许哪些客户端地址能连接 IoTDB 配置文件 conf/iotdb-system.properties conf/white.list 配置项 iotdb-system.properties: 决定是否开启白名单功能 white.list: 决定哪些IP地址能够连接IoTDB 注意事项 如果通过session客户端取消本身...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Security-Management_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Security-Management_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"安全控制"}],["meta",{"property":"og:description","content":"安全控制 白名单 功能描述 允许哪些客户端地址能连接 IoTDB 配置文件 conf/iotdb-system.properties conf/white.list 配置项 iotdb-system.properties: 决定是否开启白名单功能 white.list: 决定哪些IP地址能够连接IoTDB 注意事项 如果通过session客户端取消本身..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E7%99%BD%E5%90%8D%E5%8D%95.PNG"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-19T09:58:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T09:58:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全控制\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E7%99%BD%E5%90%8D%E5%8D%95.PNG\\",\\"https://alioss.timecho.com/docs/img/%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97.PNG\\"],\\"dateModified\\":\\"2024-07-19T09:58:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"白名单","slug":"白名单","link":"#白名单","children":[]},{"level":2,"title":"审计日志","slug":"审计日志","link":"#审计日志","children":[{"level":3,"title":"功能背景","slug":"功能背景","link":"#功能背景","children":[]},{"level":3,"title":"功能定义","slug":"功能定义","link":"#功能定义","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1721383100000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1049},"filePathRelative":"zh/UserGuide/latest/User-Manual/Security-Management_timecho.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,h as data};
