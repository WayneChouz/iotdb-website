import{_ as n,r,o as s,c as d,a as l,d as e,e as i,b as a,f as o}from"./app-e51629e5.js";const c={},g=e("h1",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb","aria-hidden":"true"},"#"),i(" DBeaver-IoTDB")],-1),h=e("p",null,"DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。",-1),p=e("h2",{id:"dbeaver-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-安装","aria-hidden":"true"},"#"),i(" DBeaver 安装")],-1),u={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"iotdb-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-安装","aria-hidden":"true"},"#"),i(" IoTDB 安装")],-1),b={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"版本 >= 0.13.0",-1),v={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"连接-iotdb-与-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#连接-iotdb-与-dbeaver","aria-hidden":"true"},"#"),i(" 连接 IoTDB 与 DBeaver")],-1),D=o(`<li><p>启动 IoTDB 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动 DBeaver</p></li><li><p>打开 Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>为 IoTDB 新建一个驱动类型</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),B={href:"https://maven.proxy.ustclug.org/maven2/org/apache/iotdb/iotdb-jdbc/1.2.1/iotdb-jdbc-1.2.1-jar-with-dependencies.jar",target:"_blank",rel:"noopener noreferrer"},I={href:"https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/1.2.1/iotdb-jdbc-1.2.1-jar-with-dependencies.jar",target:"_blank",rel:"noopener noreferrer"},x=o('<li><p>添加刚刚下载的驱动包，点击 Find Class。</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑驱动设置</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>新建 DataBase Connection， 选择 iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑 JDBC 连接设置</p></li>',4),y=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>测试连接</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>可以开始通过 DBeaver 使用 IoTDB</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function w(T,E){const t=r("ExternalLinkIcon");return s(),d("div",null,[l(`

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

`),g,h,p,e("ul",null,[e("li",null,[i("DBeaver 下载地址："),e("a",u,[i("https://dbeaver.io/download/"),a(t)])])]),m,e("ul",null,[e("li",null,[i("下载 IoTDB 二进制版本 "),e("ul",null,[e("li",null,[i("IoTDB 下载地址："),e("a",b,[i("https://iotdb.apache.org/Download/"),a(t)])]),f])]),e("li",null,[i("或者从源代码中编译 "),e("ul",null,[e("li",null,[i("参考 "),e("a",v,[i("https://github.com/apache/iotdb"),a(t)])])])])]),_,e("ol",null,[D,e("li",null,[e("p",null,[i("下载 jdbc 驱动， 可点击下载 "),e("a",B,[i("地址1"),a(t)]),i(" 或 "),e("a",I,[i("地址2"),a(t)]),i("。")])]),x]),y])}const L=n(c,[["render",w],["__file","DBeaver.html.vue"]]);export{L as default};
