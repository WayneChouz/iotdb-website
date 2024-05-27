import{_ as a,r as t,o,c as i,b as l,d as s,a as p,w as r,e as n}from"./app-D_cz5DM4.js";const c={},d=n(`<h1 id="literal-values" tabindex="-1"><a class="header-anchor" href="#literal-values"><span>Literal Values</span></a></h1><p>This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL.</p><h2 id="string-literals" tabindex="-1"><a class="header-anchor" href="#string-literals"><span>String Literals</span></a></h2><p>in IoTDB, <strong>A string is a sequence of bytes or characters, enclosed within either single quote (<code>&#39;</code>) or double quote (<code>&quot;</code>) characters.</strong> Examples：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&#39;a string&#39;</span>
<span class="token string">&quot;another string&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage-scenarios" tabindex="-1"><a class="header-anchor" href="#usage-scenarios"><span>Usage Scenarios</span></a></h3><p>Usages of string literals:</p><ul><li><p>Values of <code>TEXT</code> type data in <code>INSERT</code> or <code>SELECT</code> statements</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># insert</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;\\\\&#39;</span><span class="token punctuation">)</span>

<span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>                        v1<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.002</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>                        \\\\<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+--------------------------+</span>

<span class="token comment"># select</span>
<span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;string1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;string2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Used in<code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> instructions to represent file path.</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># load</span>
<span class="token keyword">LOAD</span> <span class="token string">&#39;examplePath&#39;</span>

<span class="token comment"># remove</span>
REMOVE <span class="token string">&#39;examplePath&#39;</span>

<span class="token comment"># SETTLE</span>
SETTLE <span class="token string">&#39;examplePath&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Password fields in user management statements</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># write_pwd is the password</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> ln_write_user <span class="token string">&#39;write_pwd&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Full Java class names in UDF and trigger management statements</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># Trigger example. Full java class names after &#39;AS&#39; should be string literals.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert-listener-sg1d1s1<span class="token punctuation">\`</span></span>
<span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span>
<span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1
<span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span>
<span class="token punctuation">)</span>

<span class="token comment"># UDF example. Full java class names after &#39;AS&#39; should be string literals.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> example <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>AS</code> function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> <span class="token string">&#39;temperature&#39;</span><span class="token punctuation">,</span> s2 <span class="token keyword">as</span> <span class="token string">&#39;speed&#39;</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>

<span class="token comment"># Header of dataset</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>temperature<span class="token operator">|</span>speed<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-----------|-----+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The key/value of an attribute can be String Literal and identifier, more details can be found at <strong>key-value pair</strong> part.</p></li></ul><h3 id="how-to-use-quotation-marks-in-string-literals" tabindex="-1"><a class="header-anchor" href="#how-to-use-quotation-marks-in-string-literals"><span>How to use quotation marks in String Literals</span></a></h3><p>There are several ways to include quote characters within a string:</p><ul><li><code>&#39;</code> inside a string quoted with <code>&quot;</code> needs no special treatment and need not be doubled or escaped. In the same way, <code>&quot;</code> inside a string quoted with <code>&#39;</code> needs no special treatment.</li><li>A <code>&#39;</code> inside a string quoted with <code>&#39;</code> may be written as <code>&#39;&#39;</code>.</li><li>A <code>&quot;</code> inside a string quoted with <code>&quot;</code> may be written as <code>&quot;&quot;</code>.</li></ul><p>The following examples demonstrate how quoting and escaping work:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&#39;string&#39;</span>  <span class="token comment">// string</span>
<span class="token string">&#39;&quot;string&quot;&#39;</span>  <span class="token comment">// &quot;string&quot;</span>
<span class="token string">&#39;&quot;&quot;string&quot;&quot;&#39;</span>  <span class="token comment">// &quot;&quot;string&quot;&quot;</span>
<span class="token string">&#39;&#39;</span><span class="token string">&#39;string&#39;</span>  <span class="token comment">// &#39;string</span>

<span class="token string">&quot;string&quot;</span> <span class="token comment">// string</span>
<span class="token string">&quot;&#39;string&#39;&quot;</span>  <span class="token comment">// &#39;string&#39;</span>
<span class="token string">&quot;&#39;&#39;string&#39;&#39;&quot;</span>  <span class="token comment">// &#39;&#39;string&#39;&#39;</span>
<span class="token string">&quot;&quot;</span><span class="token string">&quot;string&quot;</span>  <span class="token comment">// &quot;string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="numeric-literals" tabindex="-1"><a class="header-anchor" href="#numeric-literals"><span>Numeric Literals</span></a></h2><p>Number literals include integer (exact-value) literals and floating-point (approximate-value) literals.</p><p>Integers are represented as a sequence of digits. Numbers may be preceded by <code>-</code> or <code>+</code> to indicate a negative or positive value, respectively. Examples: <code>1</code>, <code>-1</code>.</p><p>Numbers with fractional part or represented in scientific notation with a mantissa and exponent are approximate-value numbers. Examples: <code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>.</p><p>The <code>INT32</code> and <code>INT64</code> data types are integer types and calculations are exact.</p><p>The <code>FLOAT</code> and <code>DOUBLE</code> data types are floating-point types and calculations are approximate.</p><p>An integer may be used in floating-point context; it is interpreted as the equivalent floating-point number.</p><h2 id="timestamp-literals" tabindex="-1"><a class="header-anchor" href="#timestamp-literals"><span>Timestamp Literals</span></a></h2>`,21),u=n('<p>Specially, <code>NOW()</code> represents a constant timestamp that indicates the system time at which the statement began to execute.</p><h2 id="boolean-literals" tabindex="-1"><a class="header-anchor" href="#boolean-literals"><span>Boolean Literals</span></a></h2><p>The constants <code>TRUE</code> and <code>FALSE</code> evaluate to 1 and 0, respectively. The constant names can be written in any lettercase.</p><h2 id="null-values" tabindex="-1"><a class="header-anchor" href="#null-values"><span>NULL Values</span></a></h2><p>The <code>NULL</code> value means “no data.” <code>NULL</code> can be written in any lettercase.</p>',5);function m(k,v){const e=t("RouteLink");return o(),i("div",null,[d,l("p",null,[s("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps in IoTDB. For information about timestamp support in IoTDB, see "),p(e,{to:"/UserGuide/V1.1.x/Data-Concept/Data-Type.html"},{default:r(()=>[s("Data Type Doc")]),_:1}),s(".")]),u])}const h=a(c,[["render",m],["__file","Literal-Values.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V1.1.x/Syntax-Conventions/Literal-Values.html","title":"Literal Values","lang":"en-US","frontmatter":{"description":"Literal Values This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL. String Literals in IoTDB,...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Syntax-Conventions/Literal-Values.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Syntax-Conventions/Literal-Values.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Literal Values"}],["meta",{"property":"og:description","content":"Literal Values This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL. String Literals in IoTDB,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Literal Values\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"String Literals","slug":"string-literals","link":"#string-literals","children":[{"level":3,"title":"Usage Scenarios","slug":"usage-scenarios","link":"#usage-scenarios","children":[]},{"level":3,"title":"How to use quotation marks in String Literals","slug":"how-to-use-quotation-marks-in-string-literals","link":"#how-to-use-quotation-marks-in-string-literals","children":[]}]},{"level":2,"title":"Numeric Literals","slug":"numeric-literals","link":"#numeric-literals","children":[]},{"level":2,"title":"Timestamp Literals","slug":"timestamp-literals","link":"#timestamp-literals","children":[]},{"level":2,"title":"Boolean Literals","slug":"boolean-literals","link":"#boolean-literals","children":[]},{"level":2,"title":"NULL Values","slug":"null-values","link":"#null-values","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.3,"words":689},"filePathRelative":"UserGuide/V1.1.x/Syntax-Conventions/Literal-Values.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,b as data};
