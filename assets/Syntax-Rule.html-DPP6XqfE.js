import{_ as p,c as o,b as t,d as n,e as a,a as i,w as l,r,o as c}from"./app-i6u37es5.js";const d={};function u(m,s){const e=r("RouteLink");return c(),o("div",null,[s[5]||(s[5]=t(`<h1 id="syntax-rule" tabindex="-1"><a class="header-anchor" href="#syntax-rule"><span>Syntax Rule</span></a></h1><h2 id="literal-values" tabindex="-1"><a class="header-anchor" href="#literal-values"><span>Literal Values</span></a></h2><p>This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL.</p><h3 id="string-literals" tabindex="-1"><a class="header-anchor" href="#string-literals"><span>String Literals</span></a></h3><p>in IoTDB, <strong>A string is a sequence of bytes or characters, enclosed within either single quote (<code>&#39;</code>) or double quote (<code>&quot;</code>) characters.</strong> Examples：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&#39;a string&#39;</span></span>
<span class="line"><span class="token string">&quot;another string&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usage-scenarios" tabindex="-1"><a class="header-anchor" href="#usage-scenarios"><span>Usage Scenarios</span></a></h4><p>Usages of string literals:</p><ul><li><p>Values of <code>TEXT</code> type data in <code>INSERT</code> or <code>SELECT</code> statements</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># insert</span></span>
<span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span></span>
<span class="line"><span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span></span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>                        v1<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span></span>
<span class="line"><span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.002</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>                        \\\\<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># select</span></span>
<span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;string1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;string2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Used in<code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> instructions to represent file path.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># load</span></span>
<span class="line"><span class="token keyword">LOAD</span> <span class="token string">&#39;examplePath&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># remove</span></span>
<span class="line">REMOVE <span class="token string">&#39;examplePath&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># SETTLE</span></span>
<span class="line">SETTLE <span class="token string">&#39;examplePath&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Password fields in user management statements</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># write_pwd is the password</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> ln_write_user <span class="token string">&#39;write_pwd&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Full Java class names in UDF and trigger management statements</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># Trigger example. Full java class names after &#39;AS&#39; should be string literals.</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert-listener-sg1d1s1<span class="token punctuation">\`</span></span></span>
<span class="line"><span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span></span>
<span class="line"><span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1</span>
<span class="line"><span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># UDF example. Full java class names after &#39;AS&#39; should be string literals.</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> example <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>AS</code> function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">as</span> <span class="token string">&#39;temperature&#39;</span><span class="token punctuation">,</span> s2 <span class="token keyword">as</span> <span class="token string">&#39;speed&#39;</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Header of dataset</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span></span>
<span class="line"><span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>temperature<span class="token operator">|</span>speed<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The key/value of an attribute can be String Literal and identifier, more details can be found at <strong>key-value pair</strong> part.</p></li></ul><h4 id="how-to-use-quotation-marks-in-string-literals" tabindex="-1"><a class="header-anchor" href="#how-to-use-quotation-marks-in-string-literals"><span>How to use quotation marks in String Literals</span></a></h4><p>There are several ways to include quote characters within a string:</p><ul><li><code>&#39;</code> inside a string quoted with <code>&quot;</code> needs no special treatment and need not be doubled or escaped. In the same way, <code>&quot;</code> inside a string quoted with <code>&#39;</code> needs no special treatment.</li><li>A <code>&#39;</code> inside a string quoted with <code>&#39;</code> may be written as <code>&#39;&#39;</code>.</li><li>A <code>&quot;</code> inside a string quoted with <code>&quot;</code> may be written as <code>&quot;&quot;</code>.</li></ul><p>The following examples demonstrate how quoting and escaping work:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&#39;string&#39;</span>  <span class="token comment">// string</span></span>
<span class="line"><span class="token string">&#39;&quot;string&quot;&#39;</span>  <span class="token comment">// &quot;string&quot;</span></span>
<span class="line"><span class="token string">&#39;&quot;&quot;string&quot;&quot;&#39;</span>  <span class="token comment">// &quot;&quot;string&quot;&quot;</span></span>
<span class="line"><span class="token string">&#39;&#39;</span><span class="token string">&#39;string&#39;</span>  <span class="token comment">// &#39;string</span></span>
<span class="line"></span>
<span class="line"><span class="token string">&quot;string&quot;</span> <span class="token comment">// string</span></span>
<span class="line"><span class="token string">&quot;&#39;string&#39;&quot;</span>  <span class="token comment">// &#39;string&#39;</span></span>
<span class="line"><span class="token string">&quot;&#39;&#39;string&#39;&#39;&quot;</span>  <span class="token comment">// &#39;&#39;string&#39;&#39;</span></span>
<span class="line"><span class="token string">&quot;&quot;</span><span class="token string">&quot;string&quot;</span>  <span class="token comment">// &quot;string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="numeric-literals" tabindex="-1"><a class="header-anchor" href="#numeric-literals"><span>Numeric Literals</span></a></h3><p>Number literals include integer (exact-value) literals and floating-point (approximate-value) literals.</p><p>Integers are represented as a sequence of digits. Numbers may be preceded by <code>-</code> or <code>+</code> to indicate a negative or positive value, respectively. Examples: <code>1</code>, <code>-1</code>.</p><p>Numbers with fractional part or represented in scientific notation with a mantissa and exponent are approximate-value numbers. Examples: <code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>.</p><p>The <code>INT32</code> and <code>INT64</code> data types are integer types and calculations are exact.</p><p>The <code>FLOAT</code> and <code>DOUBLE</code> data types are floating-point types and calculations are approximate.</p><p>An integer may be used in floating-point context; it is interpreted as the equivalent floating-point number.</p><h3 id="timestamp-literals" tabindex="-1"><a class="header-anchor" href="#timestamp-literals"><span>Timestamp Literals</span></a></h3>`,22)),n("p",null,[s[1]||(s[1]=a("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps in IoTDB. For information about timestamp support in IoTDB, see ")),i(e,{to:"/UserGuide/V1.2.x/Basic-Concept/Data-Type.html"},{default:l(()=>s[0]||(s[0]=[a("Data Type Doc")])),_:1}),s[2]||(s[2]=a("."))]),s[6]||(s[6]=t(`<p>Specially, <code>NOW()</code> represents a constant timestamp that indicates the system time at which the statement began to execute.</p><h3 id="boolean-literals" tabindex="-1"><a class="header-anchor" href="#boolean-literals"><span>Boolean Literals</span></a></h3><p>The constants <code>TRUE</code> and <code>FALSE</code> evaluate to 1 and 0, respectively. The constant names can be written in any lettercase.</p><h3 id="null-values" tabindex="-1"><a class="header-anchor" href="#null-values"><span>NULL Values</span></a></h3><p>The <code>NULL</code> value means “no data.” <code>NULL</code> can be written in any lettercase.</p><h2 id="identifier" tabindex="-1"><a class="header-anchor" href="#identifier"><span>Identifier</span></a></h2><h3 id="usage-scenarios-1" tabindex="-1"><a class="header-anchor" href="#usage-scenarios-1"><span>Usage scenarios</span></a></h3><p>Certain objects within IoTDB, including <code>TRIGGER</code>, <code>FUNCTION</code>(UDF), <code>CONTINUOUS QUERY</code>, <code>SCHEMA TEMPLATE</code>, <code>USER</code>, <code>ROLE</code>,<code>Pipe</code>,<code>PipeSink</code>,<code>alias</code> and other object names are known as identifiers.</p><h3 id="constraints" tabindex="-1"><a class="header-anchor" href="#constraints"><span>Constraints</span></a></h3><p>Below are basic constraints of identifiers, specific identifiers may have other constraints, for example, <code>user</code> should consists of more than 4 characters.</p><ul><li>Permitted characters in unquoted identifiers: <ul><li>[0-9 a-z A-Z _ ] (letters, digits and underscore)</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] (UNICODE Chinese characters)</li></ul></li><li>Identifiers may begin with a digit, unquoted identifiers can not be a real number.</li><li>Identifiers are case sensitive.</li><li>Key words can be used as an identifier.</li></ul><p><strong>You need to quote the identifier with back quote(\`) in the following cases:</strong></p><ul><li>Identifier contains special characters.</li><li>Identifier that is a real number.</li></ul><h3 id="how-to-use-quotations-marks-in-quoted-identifiers" tabindex="-1"><a class="header-anchor" href="#how-to-use-quotations-marks-in-quoted-identifiers"><span>How to use quotations marks in quoted identifiers</span></a></h3><p><code>&#39;</code> and <code>&quot;</code> can be used directly in quoted identifiers.</p><p>\` may be written as \`\` in quoted identifiers. See the example below:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create template t1&#39;t&quot;t</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>t1&#39;t&quot;t<span class="token punctuation">\`</span></span> </span>
<span class="line"><span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># create template t1\`t</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>t1\`\`t<span class="token punctuation">\`</span></span> </span>
<span class="line"><span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><p>Examples of case in which quoted identifier is used ：</p><ul><li><p>Trigger name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create trigger named alert.\`listener-sg1d1s1</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert.\`\`listener-sg1d1s1<span class="token punctuation">\`</span></span></span>
<span class="line"><span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span></span>
<span class="line"><span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1</span>
<span class="line"><span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.storageengine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UDF name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create a funciton named 111, 111 is a real number.</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Template name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create a template named 111, 111 is a real number.</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> </span>
<span class="line"><span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>User and Role name should be quoted in cases described above, blank space is not allow in User and Role name whether quoted or not ：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create user special\`user.</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token identifier"><span class="token punctuation">\`</span>special\`\`user.<span class="token punctuation">\`</span></span> <span class="token string">&#39;write_pwd&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># create role 111</span></span>
<span class="line"><span class="token keyword">CREATE</span> ROLE <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Continuous query name should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create continuous query test.cq</span></span>
<span class="line"><span class="token keyword">CREATE</span> CONTINUOUS QUERY <span class="token identifier"><span class="token punctuation">\`</span>test.cq<span class="token punctuation">\`</span></span> </span>
<span class="line"><span class="token keyword">BEGIN</span> </span>
<span class="line">  <span class="token keyword">SELECT</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">INTO</span> temperature_max </span>
<span class="line">  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> </span>
<span class="line">  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">END</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pipe、PipeSink should be quoted in cases described above ：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># create PipeSink test.*1</span></span>
<span class="line"><span class="token keyword">CREATE</span> PIPESINK <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> IoTDB <span class="token punctuation">(</span><span class="token string">&#39;ip&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;输入你的IP&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># create Pipe test.*2</span></span>
<span class="line"><span class="token keyword">CREATE</span> PIPE <span class="token identifier"><span class="token punctuation">\`</span>test.*2<span class="token punctuation">\`</span></span> <span class="token keyword">TO</span> <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">FROM</span> </span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">from</span> root <span class="token keyword">WHERE</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span>yyyy<span class="token operator">-</span>mm<span class="token operator">-</span>dd HH:MM:SS<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token string">&#39;SyncDelOp&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>AS</code> function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">as</span> temperature<span class="token punctuation">,</span> s2 <span class="token keyword">as</span> speed <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Header of result dataset</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span></span>
<span class="line"><span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>temperature<span class="token operator">|</span>speed<span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The key/value of an attribute can be String Literal and identifier, more details can be found at <strong>key-value pair</strong> part.</p></li></ul><h2 id="keywords-words" tabindex="-1"><a class="header-anchor" href="#keywords-words"><span>KeyWords Words</span></a></h2><p>Keywords are words that have significance in SQL. Keywords can be used as an identifier. Certain keywords, such as TIME/TIMESTAMP and ROOT, are reserved and cannot use as identifiers.</p>`,22)),n("p",null,[i(e,{to:"/UserGuide/V1.2.x/Reference/Keywords.html"},{default:l(()=>s[3]||(s[3]=[a("Keywords")])),_:1}),s[4]||(s[4]=a(" shows the keywords in IoTDB."))]),s[7]||(s[7]=n("h2",{id:"detailed-definitions-of-lexical-and-grammar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#detailed-definitions-of-lexical-and-grammar"},[n("span",null,"Detailed Definitions of Lexical and Grammar")])],-1)),s[8]||(s[8]=n("p",null,"Please read the lexical and grammar description files in our code repository:",-1)),s[9]||(s[9]=n("p",null,[a("Lexical file: "),n("code",null,"antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4")],-1)),s[10]||(s[10]=n("p",null,[a("Grammer file: "),n("code",null,"antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4")],-1))])}const v=p(d,[["render",u],["__file","Syntax-Rule.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V1.2.x/User-Manual/Syntax-Rule.html","title":"Syntax Rule","lang":"en-US","frontmatter":{"description":"Syntax Rule Literal Values This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL. String Litera...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/User-Manual/Syntax-Rule.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/User-Manual/Syntax-Rule.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Syntax Rule"}],["meta",{"property":"og:description","content":"Syntax Rule Literal Values This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL. String Litera..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T06:02:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T06:02:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Syntax Rule\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T06:02:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Literal Values","slug":"literal-values","link":"#literal-values","children":[{"level":3,"title":"String Literals","slug":"string-literals","link":"#string-literals","children":[]},{"level":3,"title":"Numeric Literals","slug":"numeric-literals","link":"#numeric-literals","children":[]},{"level":3,"title":"Timestamp Literals","slug":"timestamp-literals","link":"#timestamp-literals","children":[]},{"level":3,"title":"Boolean Literals","slug":"boolean-literals","link":"#boolean-literals","children":[]},{"level":3,"title":"NULL Values","slug":"null-values","link":"#null-values","children":[]}]},{"level":2,"title":"Identifier","slug":"identifier","link":"#identifier","children":[{"level":3,"title":"Usage scenarios","slug":"usage-scenarios-1","link":"#usage-scenarios-1","children":[]},{"level":3,"title":"Constraints","slug":"constraints","link":"#constraints","children":[]},{"level":3,"title":"How to use quotations marks in quoted identifiers","slug":"how-to-use-quotations-marks-in-quoted-identifiers","link":"#how-to-use-quotations-marks-in-quoted-identifiers","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"KeyWords Words","slug":"keywords-words","link":"#keywords-words","children":[]},{"level":2,"title":"Detailed Definitions of Lexical and Grammar","slug":"detailed-definitions-of-lexical-and-grammar","link":"#detailed-definitions-of-lexical-and-grammar","children":[]}],"git":{"createdTime":1690869728000,"updatedTime":1690869728000,"contributors":[{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1231},"filePathRelative":"UserGuide/V1.2.x/User-Manual/Syntax-Rule.md","localizedDate":"August 1, 2023","autoDesc":true}');export{v as comp,b as data};
