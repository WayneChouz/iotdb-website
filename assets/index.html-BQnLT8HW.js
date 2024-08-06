import{_ as l,r,o as d,c,b as e,d as t,a as n,w as i,e as s}from"./app-DJKa25Tg.js";const u={},h=s('<h1 id="release-version" tabindex="-1"><a class="header-anchor" href="#release-version"><span>Release version</span></a></h1><table><tr><th>Version</th><th colspan="3">IoTDB Binaries</th><th colspan="3">IoTDB Sources</th><th>release notes</th></tr><tr><td rowspan="1">1.3.2</td><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.3.2/apache-iotdb-1.3.2-all-bin.zip">All-in-one</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.3.2/apache-iotdb-1.3.2-all-bin.zip.sha512">SHA512</a></td><td><a href="https://www.apache.org/dyn/closer.cgi/1.3.2/apache-iotdb-1.3.2-all-bin.zip.asc">ASC</a></td><td rowspan="1"><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.3.2/apache-iotdb-1.3.2-source-release.zip">Sources</a></td><td rowspan="1"><a href="https://www.apache.org/dyn/closer.cgi/iotdb/1.3.2/apache-iotdb-1.3.2-source-release.zip.sha512">SHA512</a></td><td rowspan="1"><a href="https://www.apache.org/dyn/closer.cgi/1.3.2/apache-iotdb-1.3.2-source-release.zip.asc">ASC</a></td><td rowspan="1"><a href="https://raw.githubusercontent.com/apache/iotdb/rc/1.3.2/RELEASE_NOTES.md">release notes</a></td></tr><tr><td rowspan="3">0.13.4</td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-all-bin.zip">All-in-one</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-all-bin.zip.sha512">SHA512</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-all-bin.zip.asc">ASC</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-source-release.zip">Sources</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-source-release.zip.sha512">SHA512</a></td><td rowspan="3"><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-source-release.zip.asc">ASC</a></td><td rowspan="3"><a href="https://archive.apache.org/dist/iotdb/0.13.4/RELEASE_NOTES.md">release notes</a></td></tr><tr><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-grafana-connector-bin.zip">Grafana-connector</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-grafana-connector-bin.zip.sha512">SHA512</a></td><td><a href="https://dlcdn.apache.org/iotdb/0.13.4/apache-iotdb-0.13.4-grafana-connector-bin.zip.asc">ASC</a></td></tr><tr><td><a href="https://www.apache.org/dyn/closer.cgi/iotdb/0.13.3/apache-iotdb-0.13.3-grafana-plugin-bin.zip">Grafana-plugin</a></td><td><a href="https://downloads.apache.org/iotdb/0.13.3/apache-iotdb-0.13.3-grafana-plugin-bin.zip.sha512">SHA512</a></td><td><a href="https://downloads.apache.org/iotdb/0.13.3/apache-iotdb-0.13.3-grafana-plugin-bin.zip.asc">ASC</a></td></tr></table>',2),p={href:"https://archive.apache.org/dist/iotdb/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h2><ul><li>Recommended OS parameters <ul><li>Set the somaxconn as 65535 to avoid &quot;connection reset&quot; error when the system is under high load.<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Linux
&gt; sudo sysctl -w net.core.somaxconn=65535
 
# FreeBSD or Darwin
&gt; sudo sysctl -w kern.ipc.somaxconn=65535
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="about-version-1-0" tabindex="-1"><a class="header-anchor" href="#about-version-1-0"><span>About Version 1.0</span></a></h2><p><strong>After we release version 1.0, how to upgrade from v0.13.x to v1.0.x?</strong></p><ul><li><strong>Version 1.0 has changed the SQL syntax conventions (please refer to the syntax conventions section of the user manual)</strong>.</li><li>In order to ensure the stability of UDF-related APIs, in version 1.0, UDF-related APIs are seperated into an independent module and no longer depend on the tsfile package. The implemented UDFs need to rewrite the code, replace <code>TsDataType</code> with <code>Type</code>, and replace <code>org .apache.iotdb.tsfile.utils.Binary</code> with <code>org.apache.iotdb.udf.api.type.Binary</code>, then redo the packaging and loading process.</li></ul><h3 id="detailed-description-of-syntax-conventions-in-version-1-0-that-are-different-from-older-versions" tabindex="-1"><a class="header-anchor" href="#detailed-description-of-syntax-conventions-in-version-1-0-that-are-different-from-older-versions"><span>Detailed description of Syntax Conventions in version 1.0 that are different from older versions</span></a></h3><p>In previous versions of syntax conventions, we introduced some ambiguity to maintain compatibility. To avoid ambiguity, we have designed new syntax conventions, and this chapter will explain the issues with the old syntax conventions and why we made the change.</p><h4 id="issues-related-to-identifier" tabindex="-1"><a class="header-anchor" href="#issues-related-to-identifier"><span>Issues related to identifier</span></a></h4><p>In version 0.13 and earlier, identifiers (including path node names) that are not quoted with backquotes are allowed to be pure numbers(Pure numeric path node names need to be enclosed in backquotes in the <code>SELECT</code> clause), and are allowed to contain some special characters. <strong>In version 1.0, identifiers that are not quoted with backquotes are not allowed to be pure numbers and only allowed to contain letters, Chinese characters, and underscores.</strong></p><h4 id="issues-related-to-node-name" tabindex="-1"><a class="header-anchor" href="#issues-related-to-node-name"><span>Issues related to node name</span></a></h4><p>In previous versions of syntax conventions, when do you need to add quotation marks to the node name, and the rules for using single and double quotation marks or backquotes are complicated. We have unified usage of quotation marks in the new syntax conventions. For details, please refer to the relevant chapters of this document.</p><h5 id="when-to-use-single-and-double-quotes-and-backquotes" tabindex="-1"><a class="header-anchor" href="#when-to-use-single-and-double-quotes-and-backquotes"><span>When to use single and double quotes and backquotes</span></a></h5><p>In previous versions of syntax conventions, path node names were defined as identifiers, but when the path separator . was required in the path node name, single or double quotes were required. This goes against the rule that identifiers are quoted using backquotes.</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># In the previous syntax convention, if you need to create a time series root.sg.\`www.baidu.com\`, you need to use the following statement:
create root.sg.&#39;www.baidu.com&#39; with datatype=BOOLEAN, encoding=PLAIN

# The time series created by this statement is actually root.sg.&#39;www.baidu.com&#39;, that is, the quotation marks are stored together. The three nodes of the time series are {&quot;root&quot;,&quot;sg&quot;,&quot;&#39;www.baidu.com&#39;&quot;}.

# In the query statement, if you want to query the data of the time series, the query statement is as follows:
select &#39;www.baidu.com&#39; from root.sg;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>In the 1.0 syntax conventions, special node names are uniformly quoted using backquotes:</strong></p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># In the new syntax convention, if you need to create a time series root.sg.\`www.baidu.com\`, the syntax is as follows:
create root.sg.\`www.baidu.com\` with &#39;datatype&#39; = &#39;BOOLEAN&#39;, &#39;encoding&#39; = &#39;PLAIN&#39;

#To query the time series, you can use the following statement:
select \`www.baidu.com\` from root.sg;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="the-issues-of-using-quotation-marks-inside-node-names" tabindex="-1"><a class="header-anchor" href="#the-issues-of-using-quotation-marks-inside-node-names"><span>The issues of using quotation marks inside node names</span></a></h5><p>In previous versions of syntax conventions, when single quotes &#39; and double quotes &quot; are used in path node names, they need to be escaped with a backslash , and the backslashes will be stored as part of the path node name. Other identifiers do not have this restriction, causing inconsistency.</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># Create time series root.sg.\\&quot;a
create timeseries root.sg.\`\\&quot;a\` with datatype=TEXT,encoding=PLAIN;

# Query time series root.sg.\\&quot;a
select \`\\&quot;a\` from root.sg;
+-----------------------------+-----------+
|                         Time|root.sg.\\&quot;a|
+-----------------------------+-----------+
|1970-01-01T08:00:00.004+08:00|       test|
+-----------------------------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>In the 1.0 syntax convention, special path node names are uniformly referenced with backquotes.</strong> When single and double quotes are used in path node names, there is no need to add backslashes to escape, and backquotes need to be double-written. For details, please refer to the relevant chapters of the new syntax conventions.</p><h4 id="issues-related-to-session-api" tabindex="-1"><a class="header-anchor" href="#issues-related-to-session-api"><span>Issues related to session API</span></a></h4><h5 id="session-api-syntax-restrictions" tabindex="-1"><a class="header-anchor" href="#session-api-syntax-restrictions"><span>Session API syntax restrictions</span></a></h5><p>In version 0.13, the restrictions on using path nodes in non-SQL interfaces are as follows:</p><ul><li>The node names in path or path prefix as parameter: <ul><li>The node names which should be escaped by backticks (\`) in the SQL statement, and escaping is not required here.</li><li>The node names enclosed in single or double quotes still need to be enclosed in single or double quotes and must be escaped for JAVA strings.</li><li>For the <code>checkTimeseriesExists</code> interface, since the IoTDB-SQL interface is called internally, the time-series pathname must be consistent with the SQL syntax conventions and be escaped for JAVA strings.</li></ul></li></ul><p><strong>In version 1.0, restrictions on using path nodes in non-SQL interfaces were enhanced:</strong></p><ul><li><strong>The node names in path or path prefix as parameter: The node names which should be escaped by backticks (\`) in the SQL statement, escaping is required here.</strong></li><li><strong>Code example for syntax convention could be found at:</strong> <code>example/session/src/main/java/org/apache/iotdb/SyntaxConventionRelatedExample.java</code></li></ul><h5 id="inconsistent-handling-of-string-escaping-between-sql-and-session-interfaces" tabindex="-1"><a class="header-anchor" href="#inconsistent-handling-of-string-escaping-between-sql-and-session-interfaces"><span>Inconsistent handling of string escaping between SQL and Session interfaces</span></a></h5><p><strong>In previous releases, there was an inconsistency between the SQL and Session interfaces when using strings.</strong> For example, when using SQL to insert Text type data, the string will be unescaped, but not when using the Session interface, which is inconsistent. <strong>In the new syntax convention, we do not unescape the strings. What you store is what will be obtained when querying (for the rules of using single and double quotation marks inside strings, please refer to this document for string literal chapter).</strong></p><p>The following are examples of inconsistencies in the old syntax conventions:</p><p>Use Session&#39;s insertRecord method to insert data into the time series root.sg.a</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>// session insert
String deviceId = &quot;root.sg&quot;;
List&lt;String&gt; measurements = new ArrayList&lt;&gt;();
measurements.add(&quot;a&quot;);
String[] values = new String[]{&quot;\\\\\\\\&quot;, &quot;\\\\t&quot;, &quot;\\\\\\&quot;&quot;, &quot;\\\\u96d5&quot;};
for(int i = 0; i &lt;= values.length; i++){
  List&lt;String&gt; valueList = new ArrayList&lt;&gt;();
  valueList.add(values[i]);
  session.insertRecord(deviceId, i + 1, measurements, valueList);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Query the data of root.sg.a, you can see that there is no unescaping:</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text" data-title="Plain%20Text"><pre class="language-Plain%20Text"><code>// query result
+-----------------------------+---------+
|                         Time|root.sg.a|
+-----------------------------+---------+
|1970-01-01T08:00:00.001+08:00|       \\\\|
|1970-01-01T08:00:00.002+08:00|       \\t|
|1970-01-01T08:00:00.003+08:00|       \\&quot;|
|1970-01-01T08:00:00.004+08:00|   \\u96d5|
+-----------------------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instead use SQL to insert data into root.sg.a:</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code># SQL insert
insert into root.sg(time, a) values(1, &quot;\\\\&quot;)
insert into root.sg(time, a) values(2, &quot;\\t&quot;)
insert into root.sg(time, a) values(3, &quot;\\&quot;&quot;)
insert into root.sg(time, a) values(4, &quot;\\u96d5&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Query the data of root.sg.a, you can see that the string is unescaped:</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text" data-title="Plain%20Text"><pre class="language-Plain%20Text"><code>// query result
+-----------------------------+---------+
|                         Time|root.sg.a|
+-----------------------------+---------+
|1970-01-01T08:00:00.001+08:00|        \\|
|1970-01-01T08:00:00.002+08:00|         |
|1970-01-01T08:00:00.003+08:00|        &quot;|
|1970-01-01T08:00:00.004+08:00|       雕|
+-----------------------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-upgrade" tabindex="-1"><a class="header-anchor" href="#how-to-upgrade"><span>How to Upgrade</span></a></h2>`,38),m=e("li",null,[e("p",null,"How to upgrade a minor version (e.g., from v0.12.3 to v0.12.5)?"),e("ul",null,[e("li",null,"versions which have the same major version are compatible."),e("li",null,[t("Just download and unzip the new version. Then modify the configuration files to keep consistent"),e("br"),t(" with what you set in the old version.")]),e("li",null,"stop the old version instance, and start the new one.")])],-1),v=e("p",null,"How to upgrade from v0.12.x to v0.13.x?",-1),b=e("li",null,[t("The data format (i.e., TsFile data) of v0.12.x and v0.13.x are compatible, but the WAL file is"),e("br"),t(" incompatible. So, you can follow the steps:")],-1),f=e("code",null,"SET SYSTEM TO READONLY",-1),w=e("li",null,[t("Execute "),e("code",null,"flush"),t(" command to close all TsFiles.")],-1),y=e("li",null,"We recommend to back up all data files before upgrading for rolling back.",-1),x=e("br",null,null,-1),_=e("br",null,null,-1),S=e("li",null,"Stop IoTDB v0.12.x instance, and then start v0.13.x.",-1),q=e("code",null,"iotdb_version",-1),T=e("code",null,"data/system/schema/system.properties",-1),k=e("code",null,"0.13.x",-1),I=e("br",null,null,-1),L=e("code",null,"0.13.x",-1),A=e("li",null,[e("strong",null,[t("NOTICE: V0.13 changes many settings in conf/iotdb-engine.properties, so do not use v0.12's"),e("br"),t(" configuration file directly.")])],-1),E=e("li",null,[e("strong",null,"In 0.13, the SQL syntax has been changed. The identifiers not enclosed in backquotes can only contain the following characters, otherwise they need to be enclosed in backquotes."),e("ul",null,[e("li",null,[e("strong",null,"[0-9 a-z A-Z _ : @ # $ { }] (letters, digits, some special characters)")]),e("li",null,[e("strong",null,"['\\u2E80'..'\\u9FFF'] (UNICODE Chinese characters)")])])],-1),z=e("code",null,"SELECT",-1),C={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},Q={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},D={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"How to upgrade from v0.11.x or v0.10.x to v0.12.x?",-1),F=e("li",null,"Upgrading from v0.11 or v0.10 to v0.12 is similar as v0.9 to v0.10. The upgrade tool will rewrite the data files automatically.",-1),N=s("<li>Call <code>flush</code> command using sbin/start-cli.sh in original version to close all TsFiles.</li><li>We recommend to backup the data file (also the wal files and mlog.txt) before upgrading for rolling back.</li><li>Just download, unzip v0.12.x.zip, and modify conf/iotdb-engine.proeprties to let all the<br> directories point to the folders set in previous version (or the backup folder).<br> You can also modify other settings if you want. Any other config changes in v0.11 should be moved to v0.12.</li><li>Stop IoTDB v0.11 or v0.10 instance, and start v0.12.x, then the IoTDB will upgrade data file format automatically. It is ok to read and write data when the upgrading process works.</li><li>After a log <code>All files upgraded successfully!</code> printed, the upgrading completes.</li><li><strong>NOTICE 1: V0.12 changes many settings in conf/iotdb-engine.properties, so do not use previous<br> configuration file directly.</strong></li><li><strong>NOTICE 2: V0.12 doesn&#39;t support upgrade from v0.9 or lower version, please upgrade to v0.10 first if needed.</strong></li><li><strong>NOTICE 3: We don&#39;t recommend deleting data before the upgrading finished. The deletion will fail if you try to delete data in the database with upgrading files.</strong></li>",8),O=e("p",null,"How to upgrade from v0.10.x to v0.11.x?",-1),P=e("li",null,[t("The data format (i.e., TsFile data) of v0.10.x and v0.11 are compatible, but the WAL file is"),e("br"),t(" incompatible. So, you can follow the steps:")],-1),R=s("<li>Call <code>flush</code> command using <code>sbin/start-cli.sh</code> in v0.10.x to close all TsFiles.</li><li>We recommend to backup the wal files and mlog.txt before upgrading for rolling back.</li><li>Just download, unzip v0.11.x.zip, and modify conf/iotdb-engine.properties to let all the<br> directories point to the data folder set in v0.10.x (or the backup folder). You can also modify<br> other settings if you want.</li><li>Stop IoTDB v0.10.x instance, and start v0.11.x, then the IoTDB will upgrade data file format<br> automatically.</li><li><strong>NOTICE: V0.11 changes many settings in conf/iotdb-engine.properties, so do not use v0.10&#39;s<br> configuration file directly.</strong></li>",5),H=e("p",null,"How to upgrade from v0.9.x to v0.10.x?",-1),J=e("li",null,"Upgrading from v0.9 to v0.10 is more complex than v0.8 to v0.9.",-1),V=e("li",null,[t("Call "),e("code",null,"flush"),t(" command using sbin/start-client.sh in v0.9 to close all TsFiles.")],-1),W=e("li",null,"We recommend to backup the data file (also the wal files and mlog.txt) before upgrading for rolling back.",-1),U=e("li",null,[t("Just download, unzip v0.10.x.zip, and modify conf/iotdb-engine.proeprties to let all the"),e("br"),t(" directories point to the folders set in v0.9.x (or the backup folder)."),e("br"),t(" You can also modify other settings if you want.")],-1),Y=e("li",null,"Stop IoTDB v0.9 instance, and start v0.10.x, then the IoTDB will upgrade data file format automatically.",-1),j=e("li",null,[e("p",null,"How to upgrade from 0.8.x to v0.9.x?"),e("ul",null,[e("li",null,"We recommend to backup the data file (also the wal files and mlog.txt) before upgrading for rolling back."),e("li",null,[t("Just download, unzip v0.9.x.zip, and modify conf/iotdb-engine.properties to let all the"),e("br"),t(" directories point to the folders set in v0.8.x (or the backup folder)."),e("br"),t(" You can also modify other settings if you want.")]),e("li",null,"Stop IoTDB v0.8 instance, and start v0.9.x, then the IoTDB will upgrade data file format automatically.")])],-1),M=e("p",null,"​",-1),Z=e("h1",{id:"all-releases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#all-releases"},[e("span",null,"All releases")])],-1),G={href:"https://archive.apache.org/dist/iotdb/",target:"_blank",rel:"noopener noreferrer"},K=e("h1",{id:"verifying-hashes-and-signatures",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#verifying-hashes-and-signatures"},[e("span",null,"Verifying Hashes and Signatures")])],-1),X={href:"http://www.apache.org/info/verification.html",target:"_blank",rel:"noopener noreferrer"},$={href:"https://downloads.apache.org/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"};function ee(te,ne){const a=r("ExternalLinkIcon"),o=r("font");return d(),c("div",null,[h,e("p",null,[t("Legacy version are available here: "),e("a",p,[t("https://archive.apache.org/dist/iotdb/"),n(a)])]),g,e("ul",null,[m,e("li",null,[v,e("ul",null,[b,e("li",null,[e("strong",null,[n(o,{color:"red"},{default:i(()=>[t(" Execute "),f,t(" command in CLI. ")]),_:1})])]),e("li",null,[e("strong",null,[n(o,{color:"red"},{default:i(()=>[t(" Stop writing new data.")]),_:1})])]),w,y,e("li",null,[t("Just download, unzip v0.13.x.zip, and modify conf/iotdb-engine.properties, "),e("strong",null,[n(o,{color:"red"},{default:i(()=>[t(" especially the unchangeable configurations like timestamp precision")]),_:1})]),t(". Let all the"),x,t(" directories point to the data folder set in v0.12.x (or the backup folder). You can also modify"),_,t(" other settings if you want.")]),S,e("li",null,[e("strong",null,[n(o,{color:"red"},{default:i(()=>[t("After the steps above, please make sure the "),q,t(" in "),T,t(" file is "),k,t("."),I,t(" If not, please change it to "),L,t(" manually.")]),_:1})])]),A,E,e("li",null,[e("strong",null,[t("In 0.13, if the path node name in the "),z,t(' clause consists of pure numbers, it needs to be enclosed in backquotes to distinguish it from the constant in the expression. For example, in the statement "select 123 + `123` from '),e("a",C,[t("root.sg"),n(a)]),t('", the former 123 represents a constant, and the latter `123` will be spliced with '),e("a",Q,[t("root.sg"),n(a)]),t(", indicating the path "),e("a",D,[t("root.sg"),n(a)]),t(".`123`.")])])])]),e("li",null,[B,e("ul",null,[F,e("li",null,[e("strong",null,[n(o,{color:"red"},{default:i(()=>[t("Stop writing new data.")]),_:1})])]),N])]),e("li",null,[O,e("ul",null,[P,e("li",null,[e("strong",null,[n(o,{color:"red"},{default:i(()=>[t("Stop writing new data.")]),_:1})])]),R])]),e("li",null,[H,e("ul",null,[J,e("li",null,[e("strong",null,[n(o,{color:"red"},{default:i(()=>[t("Stop writing new data.")]),_:1})])]),V,W,U,Y])]),j]),M,Z,e("p",null,[t("Find all releases in the "),e("a",G,[t("Archive repository"),n(a)]),t(".")]),K,e("p",null,[t("Along with our releases, we also provide sha512 hashes in *.sha512 files and cryptographic signatures in *.asc files. The Apache Software Foundation has an extensive tutorial to "),e("a",X,[t("verify hashes and signatures "),n(a)]),t("which you can follow by using any of these release-signing "),e("a",$,[t("KEYS "),n(a)]),t(".")])])}const oe=l(u,[["render",ee],["__file","index.html.vue"]]),ie=JSON.parse('{"path":"/Download/","title":"Release version","lang":"en-US","frontmatter":{"description":"Release version Legacy version are available here: https://archive.apache.org/dist/iotdb/ Configurations Recommended OS parameters Set the somaxconn as 65535 to avoid \\"connectio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/Download/"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/Download/"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Release version"}],["meta",{"property":"og:description","content":"Release version Legacy version are available here: https://archive.apache.org/dist/iotdb/ Configurations Recommended OS parameters Set the somaxconn as 65535 to avoid \\"connectio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T02:51:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T02:51:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Release version\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-01T02:51:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configurations","slug":"configurations","link":"#configurations","children":[]},{"level":2,"title":"About Version 1.0","slug":"about-version-1-0","link":"#about-version-1-0","children":[{"level":3,"title":"Detailed description of Syntax Conventions in version 1.0 that are different from older versions","slug":"detailed-description-of-syntax-conventions-in-version-1-0-that-are-different-from-older-versions","link":"#detailed-description-of-syntax-conventions-in-version-1-0-that-are-different-from-older-versions","children":[]}]},{"level":2,"title":"How to Upgrade","slug":"how-to-upgrade","link":"#how-to-upgrade","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1719802290000,"contributors":[{"name":"Haonan","email":"hhaonan@outlook.com","commits":9},{"name":"CritasWang","email":"critas@outlook.com","commits":2},{"name":"Itami Sho","email":"42286868+MiniSho@users.noreply.github.com","commits":1},{"name":"Jialin Qiao","email":"jialin.qiao@timecho.com","commits":1}]},"readingTime":{"minutes":8.27,"words":2480},"filePathRelative":"Download/README.md","localizedDate":"July 10, 2023","autoDesc":true}');export{oe as comp,ie as data};
