import{_ as p,r as o,o as l,c as i,b as s,d as n,a as t,e as a}from"./app-XaimuxhO.js";const u={},c=a(`<h2 id="restful-服务-不推荐" tabindex="-1"><a class="header-anchor" href="#restful-服务-不推荐"><span>RESTful 服务（不推荐）</span></a></h2><p>IoTDB 的 RESTful 服务可用于查询、写入和管理操作，它使用 OpenAPI 标准来定义接口并生成框架。</p><h3 id="开启restful-服务" tabindex="-1"><a class="header-anchor" href="#开启restful-服务"><span>开启RESTful 服务</span></a></h3><p>RESTful 服务默认情况是关闭的</p><ul><li><p>开发者</p><p>找到sever模块中<code>org.apache.iotdb.db.conf.rest</code> 下面的<code>IoTDBRestServiceConfig</code>类，修改<code>enableRestService=true</code>即可。</p></li><li><p>使用者</p><p>找到IoTDB安装目录下面的<code>conf/iotdb-common.properties</code>文件，将 <code>enable_rest_service</code> 设置为 <code>true</code> 以启用该模块。</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name"> enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权"><span>鉴权</span></a></h3><p>除了检活接口 <code>/ping</code>，RESTful 服务使用了基础（basic）鉴权，每次 URL 请求都需要在 header 中携带 <code>&#39;Authorization&#39;: &#39;Basic &#39; + base64.encode(username + &#39;:&#39; + password)</code>。</p><p>示例中使用的用户名为：<code>root</code>，密码为：<code>root</code>，对应的 Basic 鉴权 Header 格式为</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Authorization: Basic cm9vdDpyb2901
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>若用户名密码认证失败，则返回如下信息：</p><p>HTTP 状态码：<code>401</code></p><p>返回结构体如下</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WRONG_LOGIN_PASSWORD_ERROR&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>若未设置 <code>Authorization</code>，则返回如下信息：</p><p>HTTP 状态码：<code>401</code></p><p>返回结构体如下</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">603</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNINITIALIZED_AUTH_ERROR&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h3><h4 id="ping" tabindex="-1"><a class="header-anchor" href="#ping"><span>ping</span></a></h4><p>ping 接口可以用于线上服务检活。</p><p>请求方式：<code>GET</code></p>`,14),r={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>请求示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://127.0.0.1:18080/ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回的 HTTP 状态码：</p><ul><li><code>200</code>：当前服务工作正常，可以接收外部请求。</li><li><code>503</code>：当前服务出现异常，不能接收外部请求。</li></ul><p>响应参数：</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>状态码</td></tr><tr><td>message</td><td>string</td><td>信息提示</td></tr></tbody></table><p>响应示例：</p><ul><li><p>HTTP 状态码为 <code>200</code> 时：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS_STATUS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTTP 状态码为 <code>503</code> 时：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thrift service is unavailable&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p><code>/ping</code> 接口访问不需要鉴权。</p></blockquote><h4 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>query</span></a></h4><p>query 接口可以用于处理数据查询和元数据查询。</p><p>请求方式：<code>POST</code></p><p>请求头：<code>application/json</code></p>`,13),v={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>参数说明:</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>sql</td><td>string</td><td>是</td><td></td></tr><tr><td>rowLimit</td><td>integer</td><td>否</td><td>一次查询能返回的结果集的最大行数。<br>如果不设置该参数，将使用配置文件的 <code>rest_query_default_row_size_limit</code> 作为默认值。<br>当返回结果集的行数超出限制时，将返回状态码 <code>411</code>。</td></tr></tbody></table><p>响应参数:</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>expressions</td><td>array</td><td>用于数据查询时结果集列名的数组，用于元数据查询时为<code>null</code></td></tr><tr><td>columnNames</td><td>array</td><td>用于元数据查询结果集列名数组，用于数据查询时为<code>null</code></td></tr><tr><td>timestamps</td><td>array</td><td>时间戳列，用于元数据查询时为<code>null</code></td></tr><tr><td>values</td><td>array</td><td>二维数组，第一维与结果集列名数组的长度相同，第二维数组代表结果集的一列</td></tr></tbody></table><p>请求示例如下所示：</p><p>提示:为了避免OOM问题，不推荐使用select * from root.xx.** 这种查找方式。</p><p>请求示例 表达式查询:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select s3, s4, s3 + 1 from root.sg27 limit 2&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;root.sg27.s3&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;root.sg27.s4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;root.sg27.s3 + 1&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1635232143960</span><span class="token punctuation">,</span>
    <span class="token number">1635232153960</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">11</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">12.0</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show child paths:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show child paths root&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;child paths&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show child nodes:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show child nodes root&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;child nodes&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sg28&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show all ttl:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show all ttl&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ttl&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show ttl:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show ttl on root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;ttl&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show functions:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show functions&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;function name&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;function type&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;class name (UDF)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;ABS&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ACOS&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ASIN&quot;</span><span class="token punctuation">,</span>
      ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;built-in UDTF&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;built-in UDTF&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;built-in UDTF&quot;</span><span class="token punctuation">,</span>
      ...
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;org.apache.iotdb.db.query.udf.builtin.UDTFAbs&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;org.apache.iotdb.db.query.udf.builtin.UDTFAcos&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;org.apache.iotdb.db.query.udf.builtin.UDTFAsin&quot;</span><span class="token punctuation">,</span>
      ...
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show timeseries:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show timeseries&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;timeseries&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alias&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dataType&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;encoding&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;compression&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tags&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;attributes&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27.s3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27.s4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28.s3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28.s4&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BOOLEAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BOOLEAN&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show latest timeseries:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show latest timeseries&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;timeseries&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;alias&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dataType&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;encoding&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;compression&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tags&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;attributes&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg28.s4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27.s4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28.s3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27.s3&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg28&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg27&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;BOOLEAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BOOLEAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;INT32&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;RLE&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SNAPPY&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token null keyword">null</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 count timeseries:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;count timeseries root.**&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">4</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 count nodes:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;count nodes root.** level=2&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">4</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show devices:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show devices&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;devices&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;isAligned&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;false&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 show devices with database:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;show devices with database&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;devices&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;isAligned&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;root.sg28&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;false&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 list user:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;list user&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;user&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 原始聚合查询:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(*) from root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count(root.sg27.s3)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;count(root.sg27.s4)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">0</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">2</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 group by level:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(*) from root.** group by level = 1&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count(root.sg27.*)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;count(root.sg28.*)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">3</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">3</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 group by:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(*) from root.sg27 group by([1635232143960,1635232153960),1s)&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;count(root.sg27.s3)&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;count(root.sg27.s4)&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1635232143960</span><span class="token punctuation">,</span>
    <span class="token number">1635232144960</span><span class="token punctuation">,</span>
    <span class="token number">1635232145960</span><span class="token punctuation">,</span>
    <span class="token number">1635232146960</span><span class="token punctuation">,</span>
    <span class="token number">1635232147960</span><span class="token punctuation">,</span>
    <span class="token number">1635232148960</span><span class="token punctuation">,</span>
    <span class="token number">1635232149960</span><span class="token punctuation">,</span>
    <span class="token number">1635232150960</span><span class="token punctuation">,</span>
    <span class="token number">1635232151960</span><span class="token punctuation">,</span>
    <span class="token number">1635232152960</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token number">0</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 last:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span>  <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select last s3 from root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;expressions&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;columnNames&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;timeseries&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dataType&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1635232143960</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;root.sg27.s3&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;11&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;INT32&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 disable align:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select * from root.sg27 disable align&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">407</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disable align clauses are not supported.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 align by device:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select count(s3) from root.sg27 align by device&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">407</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;align by device clauses are not supported.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例 select into:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;select s3, s4 into root.sg29.s1, root.sg29.s2 from root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应示例:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">407</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;select into clauses are not supported.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nonquery" tabindex="-1"><a class="header-anchor" href="#nonquery"><span>nonQuery</span></a></h4><p>请求方式：<code>POST</code></p><p>请求头：<code>application/json</code></p>`,89),m={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>参数说明:</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>sql</td><td>string</td><td>是</td><td></td></tr></tbody></table><p>请求示例:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;sql&quot;:&quot;CREATE DATABASE root.ln&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/nonQuery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应参数:</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>状态码</td></tr><tr><td>message</td><td>string</td><td>信息提示</td></tr></tbody></table><p>响应示例：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS_STATUS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="inserttablet" tabindex="-1"><a class="header-anchor" href="#inserttablet"><span>insertTablet</span></a></h4><p>请求方式：<code>POST</code></p><p>请求头：<code>application/json</code></p>`,11),q={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>参数说明:</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>timestamps</td><td>array</td><td>是</td><td>时间列</td></tr><tr><td>measurements</td><td>array</td><td>是</td><td>测点名称</td></tr><tr><td>dataTypes</td><td>array</td><td>是</td><td>数据类型</td></tr><tr><td>values</td><td>array</td><td>是</td><td>值列，每一列中的值可以为 <code>null</code></td></tr><tr><td>isAligned</td><td>boolean</td><td>是</td><td>是否是对齐时间序列</td></tr><tr><td>deviceId</td><td>string</td><td>是</td><td>设备名称</td></tr></tbody></table><p>请求示例：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type:application/json&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Authorization:Basic cm9vdDpyb290&quot;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;timestamps&quot;:[1635232143960,1635232153960],&quot;measurements&quot;:[&quot;s3&quot;,&quot;s4&quot;],&quot;dataTypes&quot;:[&quot;INT32&quot;,&quot;BOOLEAN&quot;],&quot;values&quot;:[[11,null],[false,true]],&quot;isAligned&quot;:false,&quot;deviceId&quot;:&quot;root.sg27&quot;}&#39;</span> http://127.0.0.1:18080/rest/v1/insertTablet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应参数：</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>参数描述</th></tr></thead><tbody><tr><td>code</td><td>integer</td><td>状态码</td></tr><tr><td>message</td><td>string</td><td>信息提示</td></tr></tbody></table><p>响应示例：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS_STATUS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>配置位于 <code>iotdb-common.properties</code> 中。</p><ul><li>将 <code>enable_rest_service</code> 设置为 <code>true</code> 以启用该模块，而将 <code>false</code> 设置为禁用该模块。默认情况下，该值为 <code>false</code>。</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>仅在 <code>enable_rest_service=true</code> 时生效。将 <code>rest_service_port </code>设置为数字（1025~65535），以自定义REST服务套接字端口。默认情况下，值为 <code>18080</code>。</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将 &#39;enable_swagger&#39; 设置 &#39;true&#39; 启用swagger来展示rest接口信息, 而设置为 &#39;false&#39; 关闭该功能. 默认情况下，该值为 <code>false</code>。</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">enable_swagger</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>一次查询能返回的结果集最大行数。当返回结果集的行数超出参数限制时，您只会得到在行数范围内的结果集，且将得到状态码<code>411</code>。</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">rest_query_default_row_size_limit</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>缓存客户登录信息的过期时间（用于加速用户鉴权的速度，单位为秒，默认是8个小时）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">cache_expire</span><span class="token punctuation">=</span><span class="token value attr-value">28800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>缓存中存储的最大用户数量（默认是100）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">cache_max_num</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>缓存初始容量（默认是10）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">cache_init_num</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>REST Service 是否开启 SSL 配置，将 <code>enable_https</code> 设置为 <code>true</code> 以启用该模块，而将 <code>false</code> 设置为禁用该模块。默认情况下，该值为 <code>false</code>。</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">enable_https</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>keyStore 所在路径（非必填）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">key_store_path</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>keyStore 密码（非必填）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">key_store_pwd</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>trustStore 所在路径（非必填）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">trust_store_path</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>trustStore 密码（非必填）</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">trust_store_pwd</span><span class="token punctuation">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SSL 超时时间，单位为秒</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">idle_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36);function h(y,j){const e=o("ExternalLinkIcon");return l(),i("div",null,[c,s("p",null,[n("请求路径："),s("a",r,[n("http://ip"),t(e)]),n(":port/ping")]),d,s("p",null,[n("请求路径："),s("a",v,[n("http://ip"),t(e)]),n(":port/rest/v1/query")]),k,s("p",null,[n("请求路径："),s("a",m,[n("http://ip"),t(e)]),n(":port/rest/v1/nonQuery")]),b,s("p",null,[n("请求路径："),s("a",q,[n("http://ip"),t(e)]),n(":port/rest/v1/insertTablet")]),g])}const f=p(u,[["render",h],["__file","RestServiceV1.html.vue"]]),x=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/API/RestServiceV1.html","title":"","lang":"zh-CN","frontmatter":{"description":"RESTful 服务（不推荐） IoTDB 的 RESTful 服务可用于查询、写入和管理操作，它使用 OpenAPI 标准来定义接口并生成框架。 开启RESTful 服务 RESTful 服务默认情况是关闭的 开发者 找到sever模块中org.apache.iotdb.db.conf.rest 下面的IoTDBRestServiceConfig类，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/API/RestServiceV1.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/API/RestServiceV1.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"RESTful 服务（不推荐） IoTDB 的 RESTful 服务可用于查询、写入和管理操作，它使用 OpenAPI 标准来定义接口并生成框架。 开启RESTful 服务 RESTful 服务默认情况是关闭的 开发者 找到sever模块中org.apache.iotdb.db.conf.rest 下面的IoTDBRestServiceConfig类，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-12T04:20:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T04:20:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-12T04:20:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"RESTful 服务（不推荐）","slug":"restful-服务-不推荐","link":"#restful-服务-不推荐","children":[{"level":3,"title":"开启RESTful 服务","slug":"开启restful-服务","link":"#开启restful-服务","children":[]},{"level":3,"title":"鉴权","slug":"鉴权","link":"#鉴权","children":[]},{"level":3,"title":"接口","slug":"接口","link":"#接口","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1723436454000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.94,"words":2382},"filePathRelative":"zh/UserGuide/V1.1.x/API/RestServiceV1.md","localizedDate":"2023年7月10日","autoDesc":true}');export{f as comp,x as data};
