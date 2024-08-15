import{_ as e,o as n,c as s,e as a}from"./app-CHHFxD1F.js";const i={},l=a(`<h2 id="go-原生接口" tabindex="-1"><a class="header-anchor" href="#go-原生接口"><span>Go 原生接口</span></a></h2><h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h3><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.13.x</li><li>Linux、Macos 或其他类 unix 系统</li><li>Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可)</li></ul><h3 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h3><ul><li>通过 go mod</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 切换到 GOPATH 的 HOME 路径，启用 Go Modules 功能</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on

<span class="token comment"># 配置 GOPROXY 环境变量</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io

<span class="token comment"># 创建命名的文件夹或目录，并切换当前目录</span>
<span class="token function">mkdir</span> session_example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> session_example

<span class="token comment"># 保存文件，自动跳转到新的地址</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go

<span class="token comment"># 初始化 go module 环境</span>
go mod init session_example

<span class="token comment"># 下载依赖包</span>
go mod tidy

<span class="token comment"># 编译并运行程序</span>
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过 GOPATH</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># get thrift 0.13.0</span>
go get github.com/apache/thrift@0.13.0

<span class="token comment"># 递归创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example

<span class="token comment"># 切换到当前目录</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example

<span class="token comment"># 保存文件，自动跳转到新的地址</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go

<span class="token comment"># 初始化 go module 环境</span>
go mod init

<span class="token comment"># 下载依赖包</span>
go mod tidy

<span class="token comment"># 编译并运行程序</span>
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[l];function o(c,r){return n(),s("div",null,t)}const m=e(i,[["render",o],["__file","Programming-Go-Native-API.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/API/Programming-Go-Native-API.html","title":"","lang":"zh-CN","frontmatter":{"description":"Go 原生接口 依赖 golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.13.x Linux、Macos 或其他类 unix 系统 Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可) 安装方法 通过 go m...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Go 原生接口 依赖 golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.13.x Linux、Macos 或其他类 unix 系统 Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可) 安装方法 通过 go m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Go 原生接口","slug":"go-原生接口","link":"#go-原生接口","children":[{"level":3,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":3,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.18,"words":354},"filePathRelative":"zh/UserGuide/V1.1.x/API/Programming-Go-Native-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,p as data};
