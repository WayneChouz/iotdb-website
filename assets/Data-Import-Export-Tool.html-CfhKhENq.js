import{_ as l,c as i,d as t,e as a,a as n,w as d,b as o,r,o as p}from"./app-B280G6gL.js";const c={};function m(u,e){const s=r("RouteLink");return p(),i("div",null,[e[3]||(e[3]=t("h1",{id:"data-import-export-script",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#data-import-export-script"},[t("span",null,"Data Import Export Script")])],-1)),t("p",null,[e[1]||(e[1]=a("IoTDB provides data import and export scripts (tools/export-data, tools/import-data, supported in versions 1.3.2 and above; for historical versions, tools/export-csv, tools/import-csv scripts can be used, see the reference link for usage ")),n(s,{to:"/UserGuide/latest/Tools-System/TsFile-Import-Export-Tool.html"},{default:d(()=>e[0]||(e[0]=[a("Document")])),_:1}),e[2]||(e[2]=a(" ), which are used to facilitate the interaction between IoTDB internal data and external files, suitable for batch operations of single files or directories."))]),e[4]||(e[4]=o(`<h2 id="supported-data-formats" tabindex="-1"><a class="header-anchor" href="#supported-data-formats"><span>Supported Data Formats</span></a></h2><ul><li><strong>CSV</strong> : Plain text format for storing formatted data, which must be constructed according to the specified CSV format below.</li><li><strong>SQL</strong> : Files containing custom SQL statements.</li></ul><h2 id="export-data-script-data-export" tabindex="-1"><a class="header-anchor" href="#export-data-script-data-export"><span>export-data Script (Data Export)</span></a></h2><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command"><span>Command</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh  -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -t &lt;directory&gt; [-tf &lt;time-format&gt; -datatype &lt;true/false&gt; -q &lt;query command&gt; -s &lt;source sql file&gt; -tfn &lt;target file name&gt; -lpf &lt;int&gt; -type &lt;export type&gt; -aligned &lt;true/false&gt;]</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt;tools\\export-data.bat -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -t &lt;directory&gt; [-tf &lt;time-format&gt; -datatype &lt;true/false&gt; -q &lt;query command&gt; -s &lt;source sql file&gt; -tfn &lt;target file name&gt; -lpf &lt;int&gt; -type &lt;export type&gt; -aligned &lt;true/false&gt;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameter Introduction:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Definition</th><th style="text-align:left;">Required</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">-h</td><td style="text-align:left;">Database IP address</td><td style="text-align:left;">No</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">Database port</td><td style="text-align:left;">No</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;">Database connection username</td><td style="text-align:left;">No</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-pw</td><td style="text-align:left;">Database connection password</td><td style="text-align:left;">No</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-t</td><td style="text-align:left;">Output path for the exported CSV or SQL file(The parameter for V1.3.2 is <code>-td</code>)</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-datatype</td><td style="text-align:left;">Whether to print the corresponding data type behind the time series in the CSV file header, options are true or false</td><td style="text-align:left;">No</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">-q</td><td style="text-align:left;">Directly specify the query statement to be executed in the command (currently only supports some statements, see the table below for details). <br>Note: -q and -s parameters must be filled in one, and -q takes effect if both are filled. For detailed examples of supported SQL statements, please refer to the &quot;SQL Statement Support Details&quot; below.</td><td style="text-align:left;">No</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-s</td><td style="text-align:left;">Specify an SQL file, which may contain one or more SQL statements. If there are multiple SQL statements, they should be separated by newlines (returns). Each SQL statement corresponds to one or more output CSV or SQL files. <br>Note: -q and -s parameters must be filled in one, and -q takes effect if both are filled. For detailed examples of supported SQL statements, please refer to the &quot;SQL Statement Support Details&quot; below.</td><td style="text-align:left;">No</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-type</td><td style="text-align:left;">Specify the type of exported file, options are csv or sql</td><td style="text-align:left;">No</td><td style="text-align:left;">csv</td></tr><tr><td style="text-align:left;">-tf</td><td style="text-align:left;">Specify the time format. The time format must comply with the <a href="https://calendars.wikia.org/wiki/ISO_8601" target="_blank" rel="noopener noreferrer">ISO 8601</a> standard or timestamp. <br>Note: Only effective when -type is csv</td><td style="text-align:left;">No</td><td style="text-align:left;">yyyy-MM-dd HH:mm:ss.SSSz</td></tr><tr><td style="text-align:left;">-lpf</td><td style="text-align:left;">Specify the maximum number of lines for the exported dump file(The parameter for V1.3.2 is <code>-linesPerFile</code>)</td><td style="text-align:left;">No</td><td style="text-align:left;">10000</td></tr><tr><td style="text-align:left;">-timeout</td><td style="text-align:left;">Specify the timeout time for session queries in milliseconds</td><td style="text-align:left;">No</td><td style="text-align:left;">-1</td></tr></tbody></table><p>SQL Statement Support Rules:</p><ol><li>Only query statements are supported; non-query statements (such as metadata management, system management, etc.) are not supported. For unsupported SQL, the program will automatically skip and output an error message.</li><li>In the current version of query statements, only the export of raw data is supported. If there are group by, aggregate functions, UDFs, or operational operators, they are not supported for export as SQL. When exporting raw data, please note that if exporting data from multiple devices, please use the align by device statement. Detailed examples are as follows:</li></ol><table><thead><tr><th></th><th>Supported for Export</th><th>Example</th></tr></thead><tbody><tr><td>Raw data single device query</td><td>Supported</td><td>select * from root.s_0.d_0</td></tr><tr><td>Raw data multi-device query (align by device)</td><td>Supported</td><td>select * from root.** align by device</td></tr><tr><td>Raw data multi-device query (without align by device)</td><td>Unsupported</td><td>select * from root.**<br>select * from root.s_0.*</td></tr></tbody></table><h3 id="running-examples" tabindex="-1"><a class="header-anchor" href="#running-examples"><span>Running Examples</span></a></h3><ul><li>Export all data within a certain SQL execution range to a CSV file.</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">  # Unix/OS X</span>
<span class="line">  &gt;tools/export-data.sh -t ./data/ -q &#39;select * from root.stock.**&#39;</span>
<span class="line">  # Windows</span>
<span class="line">  &gt;tools/export-data.bat -t ./data/ -q &#39;select * from root.stock.**&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Export Results</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.stock.Legacy.0700HK.L1_BidPrice,root.stock.Legacy.0700HK.Type,root.stock.Legacy.0700HK.L1_BidSize,root.stock.Legacy.0700HK.Domain,root.stock.Legacy.0700HK.L1_BuyNo,root.stock.Legacy.0700HK.L1_AskPrice</span>
<span class="line">2024-07-29T18:37:18.700+08:00,0.9666617,3.0,0.021367407654674264,-6.0,false,0.8926191</span>
<span class="line">2024-07-29T18:37:19.701+08:00,0.3057328,3.0,0.9965377284981661,-5.0,false,0.15167356</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>All data within the scope of all SQL statements in the SQL file is exported to CSV files.</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -t ./data/ -s export.sql</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -t ./data/ -s export.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Contents of export.sql File (Pointed to by -s Parameter)</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select * from root.stock.** limit 100</span>
<span class="line">select * from root.db.** limit 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Export Result File 1</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.stock.Legacy.0700HK.L1_BidPrice,root.stock.Legacy.0700HK.Type,root.stock.Legacy.0700HK.L1_BidSize,root.stock.Legacy.0700HK.Domain,root.stock.Legacy.0700HK.L1_BuyNo,root.stock.Legacy.0700HK.L1_AskPrice</span>
<span class="line">2024-07-29T18:37:18.700+08:00,0.9666617,3.0,0.021367407654674264,-6.0,false,0.8926191</span>
<span class="line">2024-07-29T18:37:19.701+08:00,0.3057328,3.0,0.9965377284981661,-5.0,false,0.15167356</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Export Result File 2</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.db.Random.RandomBoolean</span>
<span class="line">2024-07-22T17:16:05.820+08:00,true</span>
<span class="line">2024-07-22T17:16:02.597+08:00,false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Export Data in SQL File to SQL Statements with Aligned Format</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -h 127.0.0.1 -p 6667 -u root -p root -t ./data/ -s export.sql -type sql -aligned true</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -h 127.0.0.1 -p 6667 -u root -p root -t ./data/ -s export.sql -type sql -aligned true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Export Results</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) ALIGNED VALUES (1722249629831,0.62308747,2.0,0.012206747854849653,-6.0,false,0.14164352);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) ALIGNED VALUES (1722249630834,0.7520042,3.0,0.22760657101910464,-5.0,true,0.089064896);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) ALIGNED VALUES (1722249631835,0.3981064,3.0,0.6254559288663467,-6.0,false,0.9767922);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Export Data in a Certain SQL Execution Range to a CSV File with Specified Time Format and Data Types</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/export-data.sh -t ./data/ -tf &#39;yyyy-MM-dd HH:mm:ss&#39; -datatype true -q &quot;select * from root.stock.**&quot; -type csv</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/export-data.bat -t ./data/ -tf &#39;yyyy-MM-dd HH:mm:ss&#39; -datatype true -q &quot;select * from root.stock.**&quot; -type csv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Export Results</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">Time,root.stock.Legacy.0700HK.L1_BidPrice(DOUBLE),root.stock.Legacy.0700HK.Type(DOUBLE),root.stock.Legacy.0700HK.L1_BidSize(DOUBLE),root.stock.Legacy.0700HK.Domain(DOUBLE),root.stock.Legacy.0700HK.L1_BuyNo(BOOLEAN),root.stock.Legacy.0700HK.L1_AskPrice(DOUBLE)</span>
<span class="line">2024-07-30 10:33:55,0.44574088,3.0,0.21476832811611501,-4.0,true,0.5951748</span>
<span class="line">2024-07-30 10:33:56,0.6880933,3.0,0.6289119476165305,-5.0,false,0.114634395</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="import-data-script-data-import" tabindex="-1"><a class="header-anchor" href="#import-data-script-data-import"><span>import-data Script (Data Import)</span></a></h2><h3 id="import-file-examples" tabindex="-1"><a class="header-anchor" href="#import-file-examples"><span>Import File Examples</span></a></h3><h4 id="csv-file-example" tabindex="-1"><a class="header-anchor" href="#csv-file-example"><span>CSV File Example</span></a></h4><p>Note that before importing CSV data, special characters need to be handled as follows:</p><ol><li>If the text type field contains special characters such as <code>,</code>, it should be escaped with <code>\\</code>.</li><li>You can import times in formats like <code>yyyy-MM-dd&#39;T&#39;HH:mm:ss</code>, <code>yyyy-MM-dd HH:mm:ss</code>, or <code>yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ</code>.</li><li>The time column <code>Time</code> should always be in the first column.</li></ol><p>Example 1: Time Aligned, No Data Types in Header</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,root.test.t1.str,root.test.t2.str,root.test.t2.var</span>
<span class="line">1970-01-01T08:00:00.001+08:00,&quot;123hello world&quot;,&quot;123\\,abc&quot;,100</span>
<span class="line">1970-01-01T08:00:00.002+08:00,&quot;123&quot;,,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example 2: Time Aligned, Data Types in Header(Text type data supports double quotation marks and non double quotation marks)</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,root.test.t1.str(TEXT),root.test.t2.str(TEXT),root.test.t2.var(INT32)</span>
<span class="line">1970-01-01T08:00:00.001+08:00,&quot;123hello world&quot;,&quot;123\\,abc&quot;,100</span>
<span class="line">1970-01-01T08:00:00.002+08:00,123,hello world,123</span>
<span class="line">1970-01-01T08:00:00.003+08:00,&quot;123&quot;,,</span>
<span class="line">1970-01-01T08:00:00.004+08:00,123,,12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example 3: Device Aligned, No Data Types in Header</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,Device,str,var</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t1,&quot;123hello world&quot;,</span>
<span class="line">1970-01-01T08:00:00.002+08:00,root.test.t1,&quot;123&quot;,</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t2,&quot;123\\,abc&quot;,100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example 4: Device Aligned, Data Types in Header (Text type data supports double quotation marks and non double quotation marks)</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">Time,Device,str(TEXT),var(INT32)</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t1,&quot;123hello world&quot;,</span>
<span class="line">1970-01-01T08:00:00.002+08:00,root.test.t1,&quot;123&quot;,</span>
<span class="line">1970-01-01T08:00:00.001+08:00,root.test.t2,&quot;123\\,abc&quot;,100</span>
<span class="line">1970-01-01T08:00:00.002+08:00,root.test.t1,hello world,123</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sql-file-example" tabindex="-1"><a class="header-anchor" href="#sql-file-example"><span>SQL File Example</span></a></h4><blockquote><p>For unsupported SQL, illegal SQL, or failed SQL executions, they will be placed in the failed directory under the failed file (default to filename.failed).</p></blockquote><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728578812,0.21911979,4.0,0.7129878488375604,-5.0,false,0.65362453);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728579812,0.35814416,3.0,0.04674720094979623,-5.0,false,0.9365247);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728580813,0.20012152,3.0,0.9910098187911393,-4.0,true,0.70040536);</span>
<span class="line">INSERT INTO root.stock.Legacy.0700HK(TIMESTAMP,L1_BidPrice,Type,L1_BidSize,Domain,L1_BuyNo,L1_AskPrice) VALUES (1721728581814,0.034122765,4.0,0.9313345284181858,-4.0,true,0.9945297);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command-1" tabindex="-1"><a class="header-anchor" href="#command-1"><span>Command</span></a></h3><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;xxx.csv/sql&gt; [-fd &lt;./failedDirectory&gt; -aligned &lt;true/false&gt; -batch &lt;int&gt; -tp &lt;ms/ns/us&gt; -typeInfer &lt;boolean=text,float=double...&gt; -lpf &lt;int&gt;]</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">&gt;tools\\import-data.bat -h &lt;ip&gt; -p &lt;port&gt; -u &lt;username&gt; -pw &lt;password&gt; -s &lt;xxx.csv/sql&gt; [-fd &lt;./failedDirectory&gt; -aligned &lt;true/false&gt; -batch &lt;int&gt; -tp &lt;ms/ns/us&gt; -typeInfer &lt;boolean=text,float=double...&gt; -lpf &lt;int&gt;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Although IoTDB has the ability to infer types, it is still recommended to create metadata before importing data to avoid unnecessary type conversion errors. For example:</p></blockquote><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE DATABASE root.fit.d1;</span>
<span class="line">CREATE DATABASE root.fit.d2;</span>
<span class="line">CREATE DATABASE root.fit.p;</span>
<span class="line">CREATE TIMESERIES root.fit.d1.s1 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.fit.d1.s2 WITH DATATYPE=TEXT,ENCODING=PLAIN;</span>
<span class="line">CREATE TIMESERIES root.fit.d2.s1 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.fit.d2.s3 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.fit.p.s1 WITH DATATYPE=INT32,ENCODING=RLE;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameter Introduction:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Definition</th><th style="text-align:left;">Required</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">-h</td><td style="text-align:left;">Database IP address</td><td style="text-align:left;">No</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">Database port</td><td style="text-align:left;">No</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:left;">-u</td><td style="text-align:left;">Database connection username</td><td style="text-align:left;">No</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-pw</td><td style="text-align:left;">Database connection password</td><td style="text-align:left;">No</td><td style="text-align:left;">root</td></tr><tr><td style="text-align:left;">-s</td><td style="text-align:left;">Specify the data you want to import, here you can specify a file or folder. If a folder is specified, all files with the suffix CSV or SQL in the folder will be imported in bulk.(The parameter for V1.3.2 is <code>-f</code>)</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-fd</td><td style="text-align:left;">Specify the directory to store the failed SQL files. If this parameter is not specified, the failed files will be saved to the directory of the source data. <br>Note: For unsupported SQL, illegal SQL, and failed SQL, they will be placed in the failed file in the failed directory (default file name is. failed)</td><td style="text-align:left;">No</td><td style="text-align:left;">Add the suffix &#39;. failed&#39; to the source file name</td></tr><tr><td style="text-align:left;">-aligned</td><td style="text-align:left;">Specify whether to use the &#39;aligned&#39; interface, with options of true or false. This parameter only takes effect when the imported file is a CSV file</td><td style="text-align:left;">No</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">-batch</td><td style="text-align:left;">Used to specify the number of points to be inserted for each batch of data (minimum value is 1, maximum value is Integer.MAX_VALUE). If the program reports&#39; org.apache.hrift.transport &#39; If TTransportException: Frame size larger than protect max size is incorrect, you can adjust this parameter appropriately.</td><td style="text-align:left;">No</td><td style="text-align:left;"><code>100000</code></td></tr><tr><td style="text-align:left;">-tp</td><td style="text-align:left;">Specify time precision, optional values include &#39;ms&#39; (milliseconds),&#39; ns&#39; (nanoseconds), &#39;us&#39; (microseconds)</td><td style="text-align:left;">No</td><td style="text-align:left;"><code>ms</code></td></tr><tr><td style="text-align:left;">-lpf</td><td style="text-align:left;">Specify the number of lines to write data to each failed import file(The parameter for V1.3.2 is <code>-linesPerFailedFile</code>)</td><td style="text-align:left;">No</td><td style="text-align:left;">10000</td></tr><tr><td style="text-align:left;">-typeInfer</td><td style="text-align:left;">Used to specify type inference rules. For Example:&lt;srcTsDataType1=dstTsDataType1,srcTsDataType2=dstTsDataType2,...&gt;.<br>Note: Used to specify type inference rules.<code>srcTsDataType</code> include <code>boolean</code>,<code>int</code>,<code>long</code>,<code>float</code>,<code>double</code>,<code>NaN</code>.<code>dstTsDataType</code> include <code>boolean</code>,<code>int</code>,<code>long</code>,<code>float</code>,<code>double</code>,<code>text</code>.when<code>srcTsDataType</code>is<code>boolean</code>, <code>dstTsDataType</code>can only be<code>boolean</code>or<code>text</code>.when<code>srcTsDataType</code>is<code>NaN</code>, <code>dstTsDataType</code>can only be<code>float</code>, <code>double</code>or<code>text</code>.when<code>srcTsDataType</code>is numeric, the precision of <code>dstTsDataType</code>needs to be higher than that of <code>srcTsDataType</code>.For example:<code>-typeInfer boolean=text,float=double</code></td><td style="text-align:left;">No</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="running-examples-1" tabindex="-1"><a class="header-anchor" href="#running-examples-1"><span>Running Examples</span></a></h3><ul><li>Import the <code>dump0_0.sql</code> data in the current data directory into the local IoTDB database.</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -s ./data/dump0_0.sql</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -s ./data/dump0_0.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Import all data in the current data directory in an aligned manner into the local IoTDB database.</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -s ./data/ -fd ./failed/ -aligned true</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -s ./data/ -fd ./failed/ -aligned true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Import the <code>dump0_0.csv</code> data in the current data directory into the local IoTDB database.</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -s ./data/dump0_0.csv -fd ./failed/</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -s ./data/dump0_0.csv -fd ./failed/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Import the <code>dump0_0.csv</code> data in the current data directory in an aligned manner, batch import 100,000 records into the IoTDB database on the host with IP <code>192.168.100.1</code>, record failures in the current <code>failed</code> directory, and limit each file to 1,000 records.</li></ul><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Unix/OS X</span>
<span class="line">&gt;tools/import-data.sh -h 192.168.100.1 -p 6667 -u root -pw root -s ./data/dump0_0.csv -fd ./failed/ -aligned true -batch 100000 -tp ms -typeInfer boolean=text,float=double -lpf 1000</span>
<span class="line"># Windows</span>
<span class="line">&gt;tools/import-data.bat -h 192.168.100.1 -p 6667 -u root -pw root -s ./data/dump0_0.csv -fd ./failed/ -aligned true -batch 100000 -tp ms -typeInfer boolean=text,float=double -lpf 1000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45))])}const g=l(c,[["render",m],["__file","Data-Import-Export-Tool.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html","title":"Data Import Export Script","lang":"en-US","frontmatter":{"description":"Data Import Export Script IoTDB provides data import and export scripts (tools/export-data, tools/import-data, supported in versions 1.3.2 and above; for historical versions, to...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Import Export Script"}],["meta",{"property":"og:description","content":"Data Import Export Script IoTDB provides data import and export scripts (tools/export-data, tools/import-data, supported in versions 1.3.2 and above; for historical versions, to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Import Export Script\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Supported Data Formats","slug":"supported-data-formats","link":"#supported-data-formats","children":[]},{"level":2,"title":"export-data Script (Data Export)","slug":"export-data-script-data-export","link":"#export-data-script-data-export","children":[{"level":3,"title":"Command","slug":"command","link":"#command","children":[]},{"level":3,"title":"Running Examples","slug":"running-examples","link":"#running-examples","children":[]}]},{"level":2,"title":"import-data Script (Data Import)","slug":"import-data-script-data-import","link":"#import-data-script-data-import","children":[{"level":3,"title":"Import File Examples","slug":"import-file-examples","link":"#import-file-examples","children":[]},{"level":3,"title":"Command","slug":"command-1","link":"#command-1","children":[]},{"level":3,"title":"Running Examples","slug":"running-examples-1","link":"#running-examples-1","children":[]}]}],"git":{"createdTime":1722591279000,"updatedTime":1731322876000,"contributors":[{"name":"Summer","email":"43237967+2b3c511@users.noreply.github.com","commits":3},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.29,"words":2187},"filePathRelative":"UserGuide/latest/Tools-System/Data-Import-Export-Tool.md","localizedDate":"August 2, 2024","autoDesc":true}');export{g as comp,f as data};
