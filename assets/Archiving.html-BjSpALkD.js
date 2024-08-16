import{_ as a,o as s,c as e,e as n}from"./app-CIPkfidu.js";const t={},o=n(`<h1 id="数据归档" tabindex="-1"><a class="header-anchor" href="#数据归档"><span>数据归档</span></a></h1><p>数据归档功能提供 5 个 Cli 命令：包括查看、提交、取消、暂停和继续归档任务。<br> 用户可以创建归档任务，这些归档任务由用户指定的的启动时间，并归档过期数据到用户指定的目录。</p><h2 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句"><span>SQL 语句</span></a></h2><h3 id="查看数据归档任务" tabindex="-1"><a class="header-anchor" href="#查看数据归档任务"><span>查看数据归档任务</span></a></h3><p>显示数据归档任务。</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> ARCHIVING
<span class="token keyword">SHOW</span> <span class="token keyword">ALL</span> ARCHIVING
<span class="token keyword">SHOW</span> ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">ALL</span> ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;storage_group&gt;</code> 返回指定存储组上的任务参数以及状态。</li><li><code>all</code> 默认只返回处于 READY、RUNNING、PAUSED 状态的任务，可以通过添加 all 参数查看其他状态的任务</li></ul><h4 id="结果示例" tabindex="-1"><a class="header-anchor" href="#结果示例"><span>结果示例</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">-------+---------------------------+-------------+------+---------------------------+---------------+----------------+</span>
<span class="token operator">|</span>task id<span class="token operator">|</span>                submit <span class="token keyword">time</span><span class="token operator">|</span>storage <span class="token keyword">group</span><span class="token operator">|</span><span class="token keyword">status</span><span class="token operator">|</span>                 <span class="token keyword">start</span> <span class="token keyword">time</span><span class="token operator">|</span>expire <span class="token keyword">time</span><span class="token punctuation">(</span>ms<span class="token punctuation">)</span><span class="token operator">|</span>target directory<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------+---------------------------+-------------+------+---------------------------+---------------+----------------+</span>
<span class="token operator">|</span>      <span class="token number">0</span><span class="token operator">|</span><span class="token number">2022</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>      root<span class="token punctuation">.</span>ln<span class="token operator">|</span> READY<span class="token operator">|</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>         <span class="token number">360000</span><span class="token operator">|</span>            <span class="token operator">/</span>tmp<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------+---------------------------+-------------+------+---------------------------+---------------+----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交数据归档任务" tabindex="-1"><a class="header-anchor" href="#提交数据归档任务"><span>提交数据归档任务</span></a></h3><p>用户提交数据归档任务。</p><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>start_time<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ttl<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>target_dir<span class="token operator">&gt;</span>
<span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> storage_group<span class="token operator">=</span><span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span> start_time<span class="token operator">=</span><span class="token operator">&lt;</span>start_time<span class="token operator">&gt;</span> ttl<span class="token operator">=</span><span class="token operator">&lt;</span>ttl<span class="token operator">&gt;</span> target_dir<span class="token operator">=</span><span class="token operator">&lt;</span>target_dir<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;storage_group&gt;</code> 指定的归档的存储组。</li><li><code>&lt;start_time&gt;</code> 归档任务开始执行的时间。</li><li><code>&lt;ttl&gt;</code> 数据过期时长，当数据的时间辍 <code>timestamp &lt; now - ttl</code> 则为过期数据，单位为毫秒。</li><li><code>&lt;target_dir&gt;</code> 数据文件被归档存储的目标路径，使用字符串指定路径。</li></ul><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> storage_group<span class="token operator">=</span>root<span class="token punctuation">.</span>ln start_time<span class="token operator">=</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> ttl<span class="token operator">=</span><span class="token number">360000</span> target_dir<span class="token operator">=</span><span class="token string">&quot;/tmp&quot;</span>
<span class="token keyword">SET</span> ARCHIVING <span class="token keyword">TO</span> root<span class="token punctuation">.</span>ln <span class="token number">2023</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">360000</span> <span class="token string">&quot;/tmp&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h4><ul><li>指令中的 <code>A=</code> （比如 <code>storage_group=</code>）可以省略，省略后顺序必须和上述一致。</li><li>开始时间使用 ISO 8601 格式，因此可以省略时/分/秒等信息，省略后默认设成 0。</li><li>可以提交全部存储组的归档任务，使用类似 <code>root.ln.**</code>。</li></ul><h3 id="取消数据归档任务" tabindex="-1"><a class="header-anchor" href="#取消数据归档任务"><span>取消数据归档任务</span></a></h3><p>停止并取消数据归档任务。（注意：已经被归档的数据不会被放回数据库中）</p><h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>CANCEL ARCHIVING <span class="token operator">&lt;</span>task_id<span class="token operator">&gt;</span>
CANCEL ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;task_id&gt;</code> 归档任务的索引号。</li><li><code>&lt;storage_group&gt;</code> 取消归档任务的存储组，如果存在多个则取启动时间最早的任务。</li></ul><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>CANCEL ARCHIVING <span class="token number">0</span>
CANCEL ARCHIVING <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暂停数据归档任务" tabindex="-1"><a class="header-anchor" href="#暂停数据归档任务"><span>暂停数据归档任务</span></a></h3><p>将正在运行的数据归档任务挂起。</p><h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3"><span>语法</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>PAUSE ARCHIVING <span class="token operator">&lt;</span>task_id<span class="token operator">&gt;</span>
PAUSE ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;task_id&gt;</code> 归档任务的索引号。</li><li><code>&lt;storage_group&gt;</code> 暂停归档任务的存储组，如果存在多个则取启动时间最早的任务。</li></ul><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>PAUSE ARCHIVING <span class="token number">0</span>
PAUSE ARCHIVING <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继续数据归档任务" tabindex="-1"><a class="header-anchor" href="#继续数据归档任务"><span>继续数据归档任务</span></a></h3><p>让挂起的数据归档任务重新执行。</p><h4 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4"><span>语法</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>RESUME ARCHIVING <span class="token operator">&lt;</span>task_id<span class="token operator">&gt;</span>
RESUME ARCHIVING <span class="token keyword">ON</span> <span class="token operator">&lt;</span>storage_group<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>&lt;task_id&gt;</code> 归档任务的索引号。</li><li><code>&lt;storage_group&gt;</code> 继续归档任务的存储组，如果存在多个则取启动时间最早的任务。</li></ul><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>RESUME ARCHIVING <span class="token number">0</span>
RESUME ARCHIVING <span class="token keyword">ON</span> root<span class="token punctuation">.</span>ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统参数配置" tabindex="-1"><a class="header-anchor" href="#系统参数配置"><span>系统参数配置</span></a></h2><table><thead><tr><th style="text-align:left;">参数名</th><th>描述</th><th>数据类型</th><th>默认值</th></tr></thead><tbody><tr><td style="text-align:left;"><code>archiving_thread_num</code></td><td>数据归档任务使用的线程数</td><td>int</td><td>2</td></tr></tbody></table>`,42),l=[o];function r(p,c){return s(),e("div",null,l)}const d=a(t,[["render",r],["__file","Archiving.html.vue"]]),k=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Process-Data/Archiving.html","title":"数据归档","lang":"zh-CN","frontmatter":{"description":"数据归档 数据归档功能提供 5 个 Cli 命令：包括查看、提交、取消、暂停和继续归档任务。 用户可以创建归档任务，这些归档任务由用户指定的的启动时间，并归档过期数据到用户指定的目录。 SQL 语句 查看数据归档任务 显示数据归档任务。 语法 <storage_group> 返回指定存储组上的任务参数以及状态。 all 默认只返回处于 READY、RU...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Process-Data/Archiving.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Process-Data/Archiving.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据归档"}],["meta",{"property":"og:description","content":"数据归档 数据归档功能提供 5 个 Cli 命令：包括查看、提交、取消、暂停和继续归档任务。 用户可以创建归档任务，这些归档任务由用户指定的的启动时间，并归档过期数据到用户指定的目录。 SQL 语句 查看数据归档任务 显示数据归档任务。 语法 <storage_group> 返回指定存储组上的任务参数以及状态。 all 默认只返回处于 READY、RU..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据归档\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL 语句","slug":"sql-语句","link":"#sql-语句","children":[{"level":3,"title":"查看数据归档任务","slug":"查看数据归档任务","link":"#查看数据归档任务","children":[]},{"level":3,"title":"提交数据归档任务","slug":"提交数据归档任务","link":"#提交数据归档任务","children":[]},{"level":3,"title":"取消数据归档任务","slug":"取消数据归档任务","link":"#取消数据归档任务","children":[]},{"level":3,"title":"暂停数据归档任务","slug":"暂停数据归档任务","link":"#暂停数据归档任务","children":[]},{"level":3,"title":"继续数据归档任务","slug":"继续数据归档任务","link":"#继续数据归档任务","children":[]}]},{"level":2,"title":"系统参数配置","slug":"系统参数配置","link":"#系统参数配置","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.72,"words":817},"filePathRelative":"zh/UserGuide/V0.13.x/Process-Data/Archiving.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,k as data};
