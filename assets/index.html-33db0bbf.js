import{_ as r,r as s,o as c,c as u,a as h,d as e,e as n,b as i,w as a,f as o}from"./app-e51629e5.js";const p={},v=o('<h1 id="发行版本" tabindex="-1"><a class="header-anchor" href="#发行版本" aria-hidden="true">#</a> 发行版本</h1><table><tr><th>版本</th><th colspan="3">IoTDB 二进制包</th><th colspan="3">IoTDB 源代码</th><th>发布说明</th></tr><tr><td rowspan="3">1.2.2</td><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-all-bin.zip">All-in-one</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-all-bin.zip.sha512">SHA512</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/1.2.2/apache-iotdb-1.2.2-all-bin.zip.asc">ASC</a></td><td rowspan="3"><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-source-release.zip">源代码</a></td><td rowspan="3"><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-source-release.zip.sha512">SHA512</a></td><td rowspan="3"><a href="https://www.apache.org/dyn/closer.cgi/1.2.2/apache-iotdb-1.2.2-source-release.zip.asc">ASC</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/1.2.2/RELEASE_NOTES.md">release notes</a></td></tr><tr><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-library-udf-bin.zip">UDF 库</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-library-udf-bin.zip.sha512">SHA512</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/1.2.2/apache-iotdb-1.2.2-library-udf-bin.zip.asc">ASC</a></td></tr><tr><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-grafana-plugin-bin.zip">Grafana 插件</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.2.2/apache-iotdb-1.2.2-grafana-plugin-bin.zip.sha512">SHA512</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/1.2.2/apache-iotdb-1.2.2-grafana-plugin-bin.zip.asc">ASC</a></td></tr><tr><td rowspan="3">0.13.4</td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-all-bin.zip">All-in-one</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-all-bin.zip.sha512">SHA512</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-all-bin.zip.asc">ASC</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-source-release.zip">源代码</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-source-release.zip.sha512">SHA512</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-source-release.zip.asc">ASC</a></td><td rowspan="3"><a href="https://archive.apache.org/dist/iotdb/0.13.4/RELEASE_NOTES.md">release notes</a></td></tr><tr><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-grafana-connector-bin.zip">Grafana 连接器</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-grafana-connector-bin.zip.sha512">SHA512</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-grafana-connector-bin.zip.asc">ASC</a></td></tr><tr><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/0.13.3/apache-iotdb-0.13.3-grafana-plugin-bin.zip">Grafana 插件</a></td><td><a href="https://downloads.apache.org/iotdb/0.13.3/apache-iotdb-0.13.3-grafana-plugin-bin.zip.sha512">SHA512</a></td><td><a href="https://downloads.apache.org/iotdb/0.13.3/apache-iotdb-0.13.3-grafana-plugin-bin.zip.asc">ASC</a></td></tr></table>',2),g={href:"https://archive.apache.org/dist/iotdb/",target:"_blank",rel:"noopener noreferrer"},b=o(`<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><ul><li>推荐修改的操作系统参数 <ul><li>将 somaxconn 设置为 65535 以避免系统在高负载时出现 &quot;connection reset&quot; 错误。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
&gt; sudo sysctl -w net.core.somaxconn=65535
 
# FreeBSD or Darwin
&gt; sudo sysctl -w kern.ipc.somaxconn=65535
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="关于-version-1-0" tabindex="-1"><a class="header-anchor" href="#关于-version-1-0" aria-hidden="true">#</a> 关于 Version 1.0</h2><ul><li><p>如何从 v0.13.x 升级到 v1.0.x?</p><ul><li><strong>1.0版本进行了 SQL 语法约定的改动（请参考用户手册语法约定章节）,不兼容之处可以参考下方1.0 版本不兼容的语法详细说明</strong>。</li><li>为了保证 UDF 相关 API 的稳定性，1.0 版本中 UDF 相关 API 被独立为一个单独的 module，不再依赖 tsfile 包，已经实现的 UDF 需要改写代码，将 <code>TsDataType</code> 替换为 <code>Type</code>，将 <code>org.apache.iotdb.tsfile.utils.Binary</code> 替换成 <code>org.apache.iotdb.udf.api.type.Binary</code>，并重新进行打包装载流程。</li></ul></li></ul><h3 id="_1-0-版本不兼容的语法详细说明" tabindex="-1"><a class="header-anchor" href="#_1-0-版本不兼容的语法详细说明" aria-hidden="true">#</a> 1.0 版本不兼容的语法详细说明</h3><p>在之前版本的语法约定中，为了保持兼容性，我们引入了一些会引起歧义的规定。为了避免歧义，我们设计了新的语法约定，本章将说明旧语法约定中存在的问题，以及我们做出改动的原因。</p><h4 id="标识符限制增强" tabindex="-1"><a class="header-anchor" href="#标识符限制增强" aria-hidden="true">#</a> 标识符限制增强</h4><p>在0.13及之前版本中，不使用反引号引用的标识符（包括路径结点）允许为实数（实数路径名在 <code>SELECT</code> 子句中需要用反引号括起），且允许包含部分特殊字符，<strong>在 1.0 版本中，不使用反引号引用的标识符不允许为实数，不使用反引号引用的标识符，只允许包含字母、中文字符、下划线。</strong></p><h4 id="路径名使用的相关问题" tabindex="-1"><a class="header-anchor" href="#路径名使用的相关问题" aria-hidden="true">#</a> 路径名使用的相关问题</h4><p>在旧语法约定中，什么时候需要给路径结点名添加引号，用单双引号还是反引号的规则较为复杂，在新的语法约定中我们做了统一，具体可以参考本文档的相关章节。</p><h5 id="单双引号和反引号的使用时机" tabindex="-1"><a class="header-anchor" href="#单双引号和反引号的使用时机" aria-hidden="true">#</a> 单双引号和反引号的使用时机</h5><p>在之前的语法约定中，路径结点名被定义成标识符，但是当需要在路径结点名中使用路径分隔符 . 时，需要使用单引号或者双引号引用。这与标识符使用反引号引用的规则相悖。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 在之前的语法约定中，如果需要创建时间序列 root.sg.\`www.baidu.com\`，需要使用下述语句：
create root.sg.&#39;www.baidu.com&#39; with datatype=BOOLEAN, encoding=PLAIN

# 该语句创建的时间序列实际为 root.sg.&#39;www.baidu.com&#39;，即引号一并存入,该时间序列的三个结点为{&quot;root&quot;,&quot;sg&quot;,&quot;&#39;www.baidu.com&#39;&quot;}

# 在查询语句中，如果希望查询该时间序列的数据，查询语句如下：
select &#39;www.baidu.com&#39; from root.sg;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>而在 1.0 版本的语法约定中，特殊路径结点名统一使用反引号引用：</strong></p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 在现有语法约定中，如果需要创建时间序列 root.sg.\`www.baidu.com\`，语法如下：
create root.sg.\`www.baidu.com\` with datatype = BOOLEAN, encoding = PLAIN

# 查询该时间序列可以通过如下语句：
select \`www.baidu.com\` from root.sg;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="路径结点名内部使用引号的问题" tabindex="-1"><a class="header-anchor" href="#路径结点名内部使用引号的问题" aria-hidden="true">#</a> 路径结点名内部使用引号的问题</h5><p>在旧语法约定中，在路径结点名中使用单引号 &#39; 和 双引号 &quot; 时，需要使用反斜杠 \\ 进行转义，且反斜杠会被视为路径结点名的一部分存入，而在使用其它标识符时没有这个限制，造成了不统一。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 创建时间序列 root.sg.\\&quot;a
create timeseries root.sg.\`\\&quot;a\` with datatype=TEXT,encoding=PLAIN;

# 查询时间序列 root.sg.\\&quot;a
select \`\\&quot;a\` from root.sg;
+-----------------------------+-----------+
|                         Time|root.sg.\\&quot;a|
+-----------------------------+-----------+
|1970-01-01T08:00:00.004+08:00|       test|
+-----------------------------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在新语法约定中，特殊路径结点名统一使用反引号进行引用</strong>，在路径结点名中使用单双引号无须添加反斜杠转义，使用反引号需要双写，具体可以参考新语法约定路径结点名章节。</p><h4 id="session-接口相关" tabindex="-1"><a class="header-anchor" href="#session-接口相关" aria-hidden="true">#</a> Session 接口相关</h4><h5 id="session-接口语法限制" tabindex="-1"><a class="header-anchor" href="#session-接口语法限制" aria-hidden="true">#</a> Session 接口语法限制</h5><p>在0.13版本中，对于非SQL接口中使用路径结点的限制如下：</p><ul><li>经参数传入的路径或路径前缀中的节点： <ul><li>在 SQL 语句中需要使用反引号（\`）进行转义的，此处均不需要进行转义。</li><li>使用单引号或双引号括起的节点，仍需要使用单引号或双引号括起，并且要针对 JAVA 字符串进行反转义。</li><li>对于 <code>checkTimeseriesExists</code> 接口，由于内部调用了 IoTDB-SQL 接口，因此需要和 SQL 语法规范保持一致，并且针对 JAVA 字符串进行反转义。</li></ul></li></ul><p><strong>1.0 版本中，对非SQL接口中使用路径结点的限制增强：</strong></p><ul><li><p><strong>经参数传入的路径或路径前缀中的节点： 在 SQL 语句中需要使用反引号（\`）进行转义的，均需要使用反引号进行转义。</strong></p></li><li><p><strong>语法说明相关代码示例可以参考：</strong><code>example/session/src/main/java/org/apache/iotdb/SyntaxConventionRelatedExample.java</code></p></li></ul><h5 id="sql和session接口对字符串反转义处理不一致" tabindex="-1"><a class="header-anchor" href="#sql和session接口对字符串反转义处理不一致" aria-hidden="true">#</a> SQL和Session接口对字符串反转义处理不一致</h5><p><strong>在之前版本中，使用字符串时，SQL 和 Session 接口存在不一致的情况</strong>。比如使用 SQL 插入 Text 类型数据时，会对字符串进行反转义处理，而使用 Session 接口时不会进行这样的处理，存在不一致。<strong>在新的语法约定中，我们统一不对字符串做反转义处理，存入什么内容，在查询时就会得到什么内容(字符串内部使用单双引号的规则可以参考本文档字符串常量章节)。</strong></p><p><strong>下面是旧语法约定中不一致的例子：</strong></p><p>使用 Session 的 insertRecord 方法向时序 root.sg.a 中插入数据</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// session 插入
String deviceId = &quot;root.sg&quot;;
List&lt;String&gt; measurements = new ArrayList&lt;&gt;();
measurements.add(&quot;a&quot;);
String[] values = new String[]{&quot;\\\\\\\\&quot;, &quot;\\\\t&quot;, &quot;\\\\\\&quot;&quot;, &quot;\\\\u96d5&quot;};
for(int i = 0; i &lt;= values.length; i++){
  List&lt;String&gt; valueList = new ArrayList&lt;&gt;();
  valueList.add(values[i]);
  session.insertRecord(deviceId, i + 1, measurements, valueList);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 root.sg.a 的数据，可以看到没有做反转义处理：</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>// 查询结果
+-----------------------------+---------+
|                         Time|root.sg.a|
+-----------------------------+---------+
|1970-01-01T08:00:00.001+08:00|       \\\\|
|1970-01-01T08:00:00.002+08:00|       \\t|
|1970-01-01T08:00:00.003+08:00|       \\&quot;|
|1970-01-01T08:00:00.004+08:00|   \\u96d5|
+-----------------------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而使用 SQL 向 root.sg.a 中插入数据</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># SQL 插入
insert into root.sg(time, a) values(1, &quot;\\\\&quot;)
insert into root.sg(time, a) values(2, &quot;\\t&quot;)
insert into root.sg(time, a) values(3, &quot;\\&quot;&quot;)
insert into root.sg(time, a) values(4, &quot;\\u96d5&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 root.sg.a 的数据，可以看到字符串进行了反转义：</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>// 查询结果
+-----------------------------+---------+
|                         Time|root.sg.a|
+-----------------------------+---------+
|1970-01-01T08:00:00.001+08:00|        \\|
|1970-01-01T08:00:00.002+08:00|         |
|1970-01-01T08:00:00.003+08:00|        &quot;|
|1970-01-01T08:00:00.004+08:00|       雕|
+-----------------------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="如何升级" tabindex="-1"><a class="header-anchor" href="#如何升级" aria-hidden="true">#</a> 如何升级</h1>`,37),m=e("li",null,[e("p",null,"如何升级小版本 （例如，从 v0.12.4 to v0.12.5)?"),e("ul",null,[e("li",null,"同一个大版本下的多个小版本是互相兼容的。"),e("li",null,"只需要下载新的小版本， 然后修改其配置文件，使其与原有版本的设置一致。"),e("li",null,"停掉旧版本进程，启动新版本即可。")])],-1),_=e("p",null,"如何从 v0.13.x 升级到 v1.0.x？",-1),f=e("li",null,[e("strong",null,"0.13版本的默认RPC地址是0.0.0.0，1.0版本的默认RPC地址是127.0.0.1")],-1),w=e("li",null,[e("p",null,"如何从 v1.0.0 升级到 v1.x.0？"),e("ul",null,[e("li",null,"停止写入，下载新版本文件，将lib文件夹全部替换，重启即可")])],-1),S=e("p",null,"如何从 v0.12.x 升级到 v0.13.x?",-1),x=e("li",null,"0.12 与 0.13 的数据文件格式兼容，但写前日志等格式不兼容，因此需要进行升级（但速度很快）：",-1),L=e("code",null,"SET SYSTEM TO READONLY",-1),T=e("li",null,[n("在 CLI 执行 "),e("code",null,"flush"),n(" 命令，确保关闭所有的 TsFile 文件。")],-1),A=e("li",null,"我们推荐提前备份整个 data 目录，以备回滚。",-1),q=e("li",null,"停止 v0.12 的实例，启动 v0.13 的实例。",-1),y=e("code",null,"data/system/schema/system.properties",-1),I=e("code",null,"iotdb_version",-1),E=e("code",null,"0.13.x",-1),z=e("br",null,null,-1),C=e("code",null,"0.13.x",-1),Q=e("li",null,[e("strong",null,"注意：0.13 的配置文件进行了较大改动，因此不要直接将 0.12 的配置文件用于 0.13")],-1),N=e("li",null,[e("strong",null,"0.13 进行了 SQL 语法的改动，不使用反引号括起的标识符中仅能包含如下字符，否则需要使用反引号括起。"),e("ul",null,[e("li",null,[e("strong",null,"[0-9 a-z A-Z _ : @ # $ { }] （字母，数字，部分特殊字符）")]),e("li",null,[e("strong",null,"['\\u2E80'..'\\u9FFF'] （UNICODE 中文字符）")])])],-1),D=e("code",null,"SELECT",-1),B={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},F={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},k={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"如何从 v0.11.x 或 v0.10.x 升级到 v0.12.x?",-1),P=e("li",null,"从 0.11 或 0.10 升级到 0.12 的过程与 v0.9 升级到 v0.10 类似，升级工具会自动进行数据文件的升级。",-1),R=o("<li>用 CLI 调用<code>flush</code>，确保关闭所有的 TsFile 文件。</li><li>我们推荐提前备份数据文件（以及写前日志和 mlog 文件），以备回滚。</li><li>下载最新版，解压并修改配置文件。将各数据目录都指向备份的或者 v0.11 或 0.10 原来使用的数据目录。 把 0.11 中的其他修改都放到 0.12 中。</li><li>停止旧版本 IoTDB 的实例，启动 v0.12 的实例。IoTDB 将后台自动升级数据文件格式。在升级过程中数据可以进行查询和写入。 <ul><li>当日志中显示<code>All files upgraded successfully! </code> 后代表升级成功。</li><li><strong>注意 1：0.12 的配置文件进行了较大改动，因此不要直接将原本的配置文件用于 0.12</strong></li><li><strong>注意 2: 由于 0.12 不支持从 0.9 或者更低版本升级，如果需要升级，请先升级到 0.10 版本</strong></li><li><strong>注意 3: 在文件升级完成前，最好不要进行 delete 操作。如果删除某个 database 内的数据且该 database 内存在待升级文件，删除会失败。</strong></li></ul></li>",4),H=e("p",null,"如何从 v0.10.x 升级到 v0.11.x?",-1),V=e("li",null,"0.10 与 0.11 的数据文件格式兼容，但写前日志等格式不兼容，因此需要进行升级（但速度很快）：",-1),U=e("li",null,[n("用 CLI 调用"),e("code",null,"flush"),n("，确保关闭所有的 TsFile 文件。")],-1),Y=e("li",null,"我们推荐提前备份写前日志和 mlog 文件，以备回滚。",-1),J=e("li",null,"下载最新版，解压并修改配置文件。将各数据目录都指向备份的或者 v0.10 原来使用的数据目录。",-1),G=e("li",null,"停止 v0.10 的实例，启动 v0.11 的实例。IoTDB 将自动升级不兼容的文件格式。",-1),K=e("li",null,[e("strong",null,"注意：0.11 的配置文件进行了较大改动，因此不要直接将 0.10 的配置文件用于 0.11")],-1),j=e("p",null,"如何从 v0.9.x 升级到 v0.10.x?",-1),M=e("li",null,[n("用 CLI 调用"),e("code",null,"flush"),n("，确保关闭所有的 TsFile 文件。")],-1),W=e("li",null,"我们推荐提前备份数据文件（以及写前日志和 mlog 文件），以备回滚。",-1),X=e("li",null,"下载最新版，解压并修改配置文件。将各数据目录都指向备份的或者 v0.9 原来使用的数据目录。",-1),Z=e("li",null,"停止 v0.9 的实例，启动 v0.10 的实例。IoTDB 将自动升级数据文件格式。",-1),$=e("li",null,[e("p",null,"如何从 0.8.x 升级到 v0.9.x?"),e("ul",null,[e("li",null,"我们推荐提前备份数据文件（以及写前日志和 mlog 文件），以备回滚。"),e("li",null,"下载最新版，解压并修改配置文件。将各数据目录都指向备份的或者 v0.8 原来使用的数据目录。"),e("li",null,"停止 v0.8 的实例，启动 v0.9.x 的实例。IoTDB 将自动升级数据文件格式。")])],-1),ee=e("h1",{id:"所有版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#所有版本","aria-hidden":"true"},"#"),n(" 所有版本")],-1),ne={href:"https://archive.apache.org/dist/iotdb/",target:"_blank",rel:"noopener noreferrer"},ie=e("h1",{id:"验证哈希和签名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#验证哈希和签名","aria-hidden":"true"},"#"),n(" 验证哈希和签名")],-1),ae={href:"http://www.apache.org/info/verification.html",target:"_blank",rel:"noopener noreferrer"},te={href:"https://downloads.apache.org/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"};function le(se,oe){const t=s("ExternalLinkIcon"),l=s("font"),d=s("RouterLink");return c(),u("div",null,[h(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),v,e("p",null,[n("历史版本下载："),e("a",g,[n("https://archive.apache.org/dist/iotdb/"),i(t)])]),b,e("ul",null,[m,e("li",null,[_,e("ul",null,[e("li",null,[n("0.13版本与1.0版本的文件目录结构不同，"),e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("不能将0.13的data目录直接拷贝到1.0集群使用")]),_:1})]),n("。如果需要将0.13的数据导入至1.0，可以使用"),i(d,{to:"/zh/UserGuide/Maintenance-Tools/Load-Tsfile.html"},{default:a(()=>[n("LOAD")]),_:1}),n("功能;")]),f])]),w,e("li",null,[S,e("ul",null,[x,e("li",null,[e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("在 0.12 的 CLI 中执行 "),L,n(" 命令，并停止新数据的写入。")]),_:1})])]),T,A,e("li",null,[n("下载最新 0.13 版本，解压并修改配置文件，尤其是 "),e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("时间戳精度等首次启动后不可修改的配置参数 ")]),_:1})]),n("。并将各数据目录都指向备份的或者 v0.12 原来使用的数据目录。")]),q,e("li",null,[e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("执行上述步骤后, 请确认"),y,n("文件中的 "),I,n(" 是 "),E,n("."),z,n(" 如果不是，请手动修改为"),C,n("。")]),_:1})])]),Q,N,e("li",null,[e("strong",null,[n("0.13 中 "),D,n(' 子句中路径结点名如果是实数，需要使用反引号引起，用于与表达式中的常数区分。如语句 "select 123 + `123` from '),e("a",B,[n("root.sg"),i(t)]),n('"，前一个123表示常数，后一个 `123`会和 '),e("a",F,[n("root.sg"),i(t)]),n(" 拼接，表示路径 "),e("a",k,[n("root.sg"),i(t)]),n(".`123`。")])])])]),e("li",null,[O,e("ul",null,[P,e("li",null,[e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("停掉旧版本新数据写入。")]),_:1})])]),R])]),e("li",null,[H,e("ul",null,[V,e("li",null,[e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("停掉 0.10 的新数据写入。")]),_:1})])]),U,Y,J,G,K])]),e("li",null,[j,e("ul",null,[e("li",null,[e("strong",null,[i(l,{color:"red"},{default:a(()=>[n("停掉旧版本新数据写入。")]),_:1})])]),M,W,X,Z])]),$]),ee,e("p",null,[n("在 "),e("a",ne,[n("Archive repository"),i(t)]),n(" 查看所有版本")]),ie,e("p",null,[n("除了我们的发行版，我们还在 *.sha512 文件中提供了 sha512 散列，并在 *.asc 文件中提供了加密签名。 Apache Software Foundation 提供了广泛的教程来 "),e("a",ae,[n("验证哈希和签名"),i(t)]),n("，您可以使用任何这些发布签名的 "),e("a",te,[n("KEYS"),i(t)]),n(" 来遵循这些哈希和签名。")])])}const re=r(p,[["render",le],["__file","index.html.vue"]]);export{re as default};
