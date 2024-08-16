import{_ as e,o as s,c as n,e as a}from"./app-CIPkfidu.js";const i={},l=a(`<h2 id="go-native-api" tabindex="-1"><a class="header-anchor" href="#go-native-api"><span>Go Native API</span></a></h2><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies</span></a></h3><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.13.x</li><li>Linux、Macos or other unix-like systems</li><li>Windows+bash (WSL、cygwin、Git Bash)</li></ul><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h3><ul><li>go mod</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-use-the-sessionpool" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-sessionpool"><span>How to Use the SessionPool</span></a></h3><p>SessionPool is a wrapper of a Session Set. Using SessionPool, the user do not need to consider how to reuse a session connection.<br> If there is no available connections and the pool reaches its max size, the all methods will hang until there is a available connection.<br> The PutBack method must be called after use</p><h4 id="new-sessionpool" tabindex="-1"><a class="header-anchor" href="#new-sessionpool"><span>New sessionPool</span></a></h4><div class="language-golang line-numbers-mode" data-ext="golang" data-title="golang"><pre class="language-golang"><code>config := &amp;client.PoolConfig{
    Host:     host,
    Port:     port,
    UserName: user,
    Password: password,
}
sessionPool = client.NewSessionPool(config, 3, 60000, 60000, false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-session-through-sessionpool-putback-after-use" tabindex="-1"><a class="header-anchor" href="#get-session-through-sessionpool-putback-after-use"><span>Get session through sessionPool, putback after use</span></a></h4><p>set storage group</p><div class="language-golang line-numbers-mode" data-ext="golang" data-title="golang"><pre class="language-golang"><code>session, err := sessionPool.GetSession()
defer sessionPool.PutBack(session)
if err == nil {
    session.SetStorageGroup(sg)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>query statement</p><div class="language-golang line-numbers-mode" data-ext="golang" data-title="golang"><pre class="language-golang"><code>var timeout int64 = 1000
session, err := sessionPool.GetSession()
defer sessionPool.PutBack(session)
if err != nil {
    log.Print(err)
    return
}
sessionDataSet, err := session.ExecuteQueryStatement(sql, &amp;timeout)
if err == nil {
    defer sessionDataSet.Close()
    printDataSet1(sessionDataSet)
} else {
    log.Println(err)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[l];function t(r,d){return s(),n("div",null,o)}const p=e(i,[["render",t],["__file","Programming-Go-Native-API.html.vue"]]),m=JSON.parse('{"path":"/UserGuide/V0.13.x/API/Programming-Go-Native-API.html","title":"","lang":"en-US","frontmatter":{"description":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.13.x Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Go Native API Dependencies golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.13.x Linux、Macos or other unix-like systems Windows+bash (WSL、cygwin、Git Bash) Installation go mod G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Go Native API","slug":"go-native-api","link":"#go-native-api","children":[{"level":3,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":3,"title":"How to Use the SessionPool","slug":"how-to-use-the-sessionpool","link":"#how-to-use-the-sessionpool","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"UserGuide/V0.13.x/API/Programming-Go-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,m as data};
