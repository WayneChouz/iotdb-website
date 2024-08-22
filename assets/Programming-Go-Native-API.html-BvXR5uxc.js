import{_ as e,o as a,c as n,e as s}from"./app-BZ7vU6A9.js";const i={},t=s(`<h1 id="go-native-api" tabindex="-1"><a class="header-anchor" href="#go-native-api"><span>Go Native API</span></a></h1><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies</span></a></h2><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.13.x</li><li>Linux、Macos or other unix-like systems</li><li>Windows+bash (WSL、cygwin、Git Bash)</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><ul><li>go mod</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io

<span class="token function">mkdir</span> session_example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> session_example

<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go

go mod init session_example
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>GOPATH</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># get thrift 0.13.0</span>
go get github.com/apache/thrift
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/apache/thrift
<span class="token function">git</span> checkout <span class="token number">0.13</span>.0

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example
<span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go
go run session_example.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[t];function o(r,c){return a(),n("div",null,l)}const d=e(i,[["render",o],["__file","Programming-Go-Native-API.html.vue"]]),m=JSON.parse('{"path":"/UserGuide/V1.2.x/API/Programming-Go-Native-API.html","title":"Go Native API","lang":"en-US","frontmatter":{"description":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.13.x Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Go Native API"}],["meta",{"property":"og:description","content":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.13.x Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-01T06:02:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T06:02:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T06:02:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1690869728000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"UserGuide/V1.2.x/API/Programming-Go-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,m as data};
