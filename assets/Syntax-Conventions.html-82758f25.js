import{_ as i,r as c,o as r,c as l,a as p,d as a,e as s,b as t,w as o,f as e}from"./app-e51629e5.js";const d={},u=e(`<h1 id="syntax-conventions" tabindex="-1"><a class="header-anchor" href="#syntax-conventions" aria-hidden="true">#</a> Syntax Conventions</h1><h2 id="literal-values" tabindex="-1"><a class="header-anchor" href="#literal-values" aria-hidden="true">#</a> Literal Values</h2><p>This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL.</p><h3 id="string-literals" tabindex="-1"><a class="header-anchor" href="#string-literals" aria-hidden="true">#</a> String Literals</h3><p>A string is a sequence of characters, enclosed within either single quote (<code>&#39;</code>) or double quote (<code>&quot;</code>) characters. Examples:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;a string&#39;</span>
<span class="token string">&quot;another string&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Usages of string literals:</p><ul><li>Values of <code>TEXT</code> type data in <code>INSERT</code> or <code>SELECT</code> statements</li><li>Full Java class names in UDF and trigger management statements</li><li>Attribute fields (including attribute keys and attribute values) in UDF / trigger execution or management statements</li><li>File paths in <code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> statements</li><li>Password fields in user management statements</li></ul><p>There are several ways to include quote characters within a string:</p><ul><li>Precede the quote character by an escape character (\\).</li><li><code>&#39;</code> inside a string quoted with <code>&quot;</code> needs no special treatment and need not be doubled or escaped. In the same way, <code>&quot;</code> inside a string quoted with <code>&#39;</code> needs no special treatment.</li></ul><p>The following examples demonstrate how quoting and escaping work:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;string&#39;</span>  <span class="token comment">// string</span>
<span class="token string">&#39;&quot;string&quot;&#39;</span>  <span class="token comment">// &quot;string&quot;</span>
<span class="token string">&#39;&quot;&quot;string&quot;&quot;&#39;</span>  <span class="token comment">// &quot;&quot;string&quot;&quot;</span>
<span class="token string">&#39;str\\&#39;ing&#39;</span>  <span class="token comment">// str&#39;ing</span>
<span class="token string">&#39;\\&#39;string&#39;</span>  <span class="token comment">// &#39;string</span>
<span class="token string">&quot;string&quot;</span> <span class="token comment">// string</span>
<span class="token string">&quot;&#39;string&#39;&quot;</span>  <span class="token comment">// &#39;string&#39;</span>
<span class="token string">&quot;&#39;&#39;string&#39;&#39;&quot;</span>  <span class="token comment">// &#39;&#39;string&#39;&#39;</span>
<span class="token string">&quot;str\\&quot;ing&quot;</span>  <span class="token comment">// str&quot;ing</span>
<span class="token string">&quot;\\&quot;string&quot;</span>  <span class="token comment">// &quot;string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="numeric-literals" tabindex="-1"><a class="header-anchor" href="#numeric-literals" aria-hidden="true">#</a> Numeric Literals</h3><p>Number literals include integer (exact-value) literals and floating-point (approximate-value) literals.</p><p>Integers are represented as a sequence of digits. Numbers may be preceded by <code>-</code> or <code>+</code> to indicate a negative or positive value, respectively. Examples: <code>1</code>, <code>-1</code>.</p><p>Numbers with fractional part or represented in scientific notation with a mantissa and exponent are approximate-value numbers. Examples: <code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>.</p><p>The <code>INT32</code> and <code>INT64</code> data types are integer types and calculations are exact.</p><p>The <code>FLOAT</code> and <code>DOUBLE</code> data types are floating-point types and calculations are approximate.</p><p>An integer may be used in floating-point context; it is interpreted as the equivalent floating-point number.</p><h3 id="timestamp-literals" tabindex="-1"><a class="header-anchor" href="#timestamp-literals" aria-hidden="true">#</a> Timestamp Literals</h3>`,20),m=e(`<p>Specially, <code>NOW()</code> represents a constant timestamp that indicates the system time at which the statement began to execute.</p><h3 id="boolean-literals" tabindex="-1"><a class="header-anchor" href="#boolean-literals" aria-hidden="true">#</a> Boolean Literals</h3><p>The constants <code>TRUE</code> and <code>FALSE</code> evaluate to 1 and 0, respectively. The constant names can be written in any lettercase.</p><h3 id="null-values" tabindex="-1"><a class="header-anchor" href="#null-values" aria-hidden="true">#</a> NULL Values</h3><p>The <code>NULL</code> value means “no data.” <code>NULL</code> can be written in any lettercase.</p><h2 id="identifiers" tabindex="-1"><a class="header-anchor" href="#identifiers" aria-hidden="true">#</a> Identifiers</h2><p>Certain objects within IoTDB, including <code>TRIGGER</code>, <code>FUNCTION</code>(UDF), <code>CONTINUOUS QUERY</code>, <code>SCHEMA TEMPLATE</code>, <code>USER</code>, <code>ROLE</code> and other object names are known as identifiers.</p><p>What you need to know about identifiers:</p><ul><li>Permitted characters in unquoted identifiers: <ul><li>[0-9 a-z A-Z _ : @ # $ { }] (letters, digits, some special characters)</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] (UNICODE Chinese characters)</li></ul></li><li>Identifiers may begin with a digit and consist solely of digits, <strong>which is not recommended!</strong></li><li>Identifiers are case sensitive.</li><li>Note: User and role names are not case-sensitive, and special characters are not allowed to be escaped.</li></ul><p>If an identifier contains special characters or is a keyword, you must quote it whenever you refer to it.<br> The identifier quote character is the backtick (\`):</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>id  <span class="token comment">// parsed as id</span>
ID  <span class="token comment">// parsed as ID</span>
id0  <span class="token comment">// parsed as id0</span>
_id  <span class="token comment">// parsed as _id</span>
<span class="token number">0</span>id  <span class="token comment">// parsed as 0id</span>
<span class="token number">233</span>  <span class="token comment">// parsed as 233 (not recommended!)</span>
ab<span class="token operator">!</span>  <span class="token comment">// invalid</span>
<span class="token identifier"><span class="token punctuation">\`</span>ab!<span class="token punctuation">\`</span></span>  <span class="token comment">// parsed as ab!</span>
<span class="token identifier"><span class="token punctuation">\`</span>&quot;ab&quot;<span class="token punctuation">\`</span></span>  <span class="token comment">// parsed as &quot;ab&quot;</span>
<span class="token identifier"><span class="token punctuation">\`</span>a<span class="token punctuation">\`</span></span>b<span class="token identifier"><span class="token punctuation">\`</span>  // invalid
<span class="token punctuation">\`</span></span>a\\<span class="token punctuation">\`</span>b<span class="token identifier"><span class="token punctuation">\`</span>  // parsed as a<span class="token punctuation">\`</span></span>b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-names-in-path" tabindex="-1"><a class="header-anchor" href="#node-names-in-path" aria-hidden="true">#</a> Node Names in Path</h2><p>We call the part of a path divided by <code>.</code> as a <code>node</code>.</p><p>The constraints of node names are almost the same as the identifiers, but you should note the following points:</p><ul><li><code>root</code> is a reserved word, and it is only allowed to appear at the beginning layer of the time series. If <code>root</code> appears in other layers, it cannot be parsed and an error will be reported.</li><li>Character <code>.</code> is not permitted in unquoted or quoted node names. If you must do it (even if it is not recommended), you can enclose it within either single quote (<code>&#39;</code>) or double quote (<code>&quot;</code>). In this case, quotes are recognized as part of the node name to avoid ambiguity.</li><li>Among the node name enclosed in the reverse quota, single quotes and double quotes need to use a backslash to escape.</li><li>In particular, if the system is deployed on a Windows machine, the storage group layer name will be <strong>case-insensitive</strong>. For example, creating both <code>root.ln</code> and <code>root.LN</code> at the same time is not allowed.</li></ul><p>Examples:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>s1<span class="token operator">+</span>s2<span class="token operator">/</span>s3<span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// invalid!</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1+s2/s3<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.\`s1+s2/s3\`.c will be parsed as Path[root, a, b, s1+s2/s3, c]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token keyword">select</span> <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// invalid!</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>select<span class="token punctuation">\`</span></span> <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.\`select\` will be parsed as Path[root, a, b, \`select\`]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1.s2<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// invalid!</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token string">&quot;s1.s2&quot;</span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.&quot;s1.s2&quot;.c will be parsed as Path[root, a, b, &quot;s1.s2&quot;, c]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1&quot;s2<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// invalid!</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1\\&quot;s2<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.\`s1\\&quot;s2\`.c be parsed as Path[root, a, b, s1\\&quot;s2, c]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keywords-and-reserved-words" tabindex="-1"><a class="header-anchor" href="#keywords-and-reserved-words" aria-hidden="true">#</a> Keywords and Reserved Words</h2><p>Keywords are words that have significance in SQL require special treatment for use as identifiers and node names, and need to be escaped with backticks.<br> Certain keywords, such as TIME and ROOT, are reserved and cannot use as identifiers and node names (even after escaping).</p>`,22),h=e('<h2 id="expressions" tabindex="-1"><a class="header-anchor" href="#expressions" aria-hidden="true">#</a> Expressions</h2><p>IoTDB supports the execution of arbitrary nested expressions consisting of numbers, time series, arithmetic expressions, and time series generating functions (including user-defined functions) in the <code>select</code> clause.</p><p>Note: Node names that consist solely of digits, <code>&#39;</code> and <code>&quot;</code> in an expression must be enclosed in backticks (`).</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- There exists timeseries: root.sg.d.0, root.sg.d.&#39;a&#39; and root.sg.&quot;d&quot;.b</span>\n<span class="token keyword">select</span> <span class="token number">0</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d  <span class="token comment">-- ambiguity exists, parsing failed</span>\n<span class="token keyword">select</span> <span class="token string">&#39;a&#39;</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d <span class="token comment">-- ambiguity exists, parsing failed</span>\n<span class="token keyword">select</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">.</span>b <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg <span class="token comment">-- ambiguity exists, parsing failed</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>0<span class="token punctuation">`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d  <span class="token comment">-- query from root.sg.d.0</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>0<span class="token punctuation">`</span></span> <span class="token operator">+</span> <span class="token number">0</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d <span class="token comment">-- valid expression, add number 0 to each point of root.sg.d.0</span>\n<span class="token keyword">select</span> myudf<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>&#39;a&#39;<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d <span class="token comment">-- valid expression, call function myudf with timeseries root.sg.d.&#39;a&#39; as the 1st parameter, and a string constant &#39;x&#39; as the 2nd parameter</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quote-symbol" tabindex="-1"><a class="header-anchor" href="#quote-symbol" aria-hidden="true">#</a> Quote Symbol</h2><h3 id="double-quotes-single-quotes" tabindex="-1"><a class="header-anchor" href="#double-quotes-single-quotes" aria-hidden="true">#</a> Double quotes (&quot;), single quotes (&#39;)</h3><p>Double quotes and single quotes are used in the following scenarios:</p><ol><li>String literals are represented by strings enclosed in single or double quotes.</li><li>If you want to use the path separator (<code>.</code>) in the path node name, you need to enclose the node name in single or double quotes. In this case, to avoid ambiguity, the quotes are treated as part of the node name by the system.</li></ol><h3 id="backticks" tabindex="-1"><a class="header-anchor" href="#backticks" aria-hidden="true">#</a> Backticks (`)</h3><p>Backticks are used in the following scenarios:</p><ol><li>When using special characters in an identifier, the identifier needs to be enclosed in backticks.</li><li>When using special characters other than path separators in the path node name, the path node name needs to be enclosed in backticks. In this case, the backticks are not considered part of the node name by the system.</li></ol><h3 id="backslash" tabindex="-1"><a class="header-anchor" href="#backslash" aria-hidden="true">#</a> Backslash (\\)</h3><p>backslashes are used in the following scenarios:</p><ul><li>In string literals, double or single quote should be escaped with a backslash. <ul><li>e.g. &quot;str\\&quot;ing&quot; is parsed as str&quot;ing, &#39;str\\&#39;ing&#39; is parsed as str&#39;ing.</li></ul></li><li>In an identifier, backtick should be escaped with a backslash. <ul><li>e.g. `na\\`me` is parsed as na`me.</li></ul></li><li>In path node names, double or single quote should be escaped with a backslash. To avoid ambiguity, backslashes are recognized as part of the node name. <ul><li>e.g. root.sg1.d1.&quot;a\\&quot;b&quot; is parsed as Path[root, sg1, d1, &quot;a\\&quot;b&quot;], root.sg1.d1.&#39;a\\&#39;b&#39; is parsed as Path[ root, sg1, d1, &#39;a\\&#39;b&#39;], root.sg1.d1.`a\\&quot;b` is parsed as Path[root, sg1, d1, a\\&quot;b], root.sg1.d1.`a\\&#39;b` is parsed as Path[root, sg1, d1, a\\&#39;b].</li></ul></li></ul><h2 id="learn-more" tabindex="-1"><a class="header-anchor" href="#learn-more" aria-hidden="true">#</a> Learn More</h2><p>Please read the lexical and grammar description files in our code repository:</p><p>Lexical file: <code>antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4</code></p><p>Grammer file: <code>antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4</code></p>',18);function k(b,g){const n=c("RouterLink");return r(),l("div",null,[p(`

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

`),u,a("p",null,[s("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps in IoTDB. For information about timestamp support in IoTDB, see "),t(n,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:o(()=>[s("Data Type Doc")]),_:1}),s(".")]),m,a("p",null,[t(n,{to:"/UserGuide/V0.13.x/Reference/Keywords.html"},{default:o(()=>[s("Keywords and Reserved Words")]),_:1}),s(" shows the keywords and reserved words in IoTDB 0.13.")]),h])}const q=i(d,[["render",k],["__file","Syntax-Conventions.html.vue"]]);export{q as default};
