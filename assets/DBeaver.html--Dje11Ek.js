import{_ as a,r,o as s,c as d,a as l,d as e,e as i,b as n,f as o}from"./app-dNeAgOFp.js";const c={},h=e("h1",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb","aria-hidden":"true"},"#"),i(" DBeaver-IoTDB")],-1),g=e("p",null,"DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.",-1),p=e("h2",{id:"dbeaver-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-installation","aria-hidden":"true"},"#"),i(" DBeaver Installation")],-1),u={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"iotdb-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-installation","aria-hidden":"true"},"#"),i(" IoTDB Installation")],-1),b={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"Version >= 0.13.0",-1),v={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"connect-iotdb-and-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-iotdb-and-dbeaver","aria-hidden":"true"},"#"),i(" Connect IoTDB and DBeaver")],-1),D=o(`<li><p>Start IoTDB server</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start DBeaver</p></li><li><p>Open Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Create a new driver type for IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),B=e("code",null,"iotdb-jdbc",-1),I={href:"https://maven.proxy.ustclug.org/maven2/org/apache/iotdb/iotdb-jdbc/1.2.1/iotdb-jdbc-1.2.1-jar-with-dependencies.jar",target:"_blank",rel:"noopener noreferrer"},y={href:"https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/1.2.1/iotdb-jdbc-1.2.1-jar-with-dependencies.jar",target:"_blank",rel:"noopener noreferrer"},w=o('<li><p>Add the downloaded jar file， then select <code>Find Class</code>.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit the driver Settings</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Open New DataBase Connection and select iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit JDBC Connection Settings</p></li>',4),x=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>Test Connection</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Enjoy IoTDB with DBeaver</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function S(E,T){const t=r("ExternalLinkIcon");return s(),d("div",null,[l(`

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

`),h,g,p,e("ul",null,[e("li",null,[i("From DBeaver site: "),e("a",u,[i("https://dbeaver.io/download/"),n(t)])])]),m,e("ul",null,[e("li",null,[i("Download binary version "),e("ul",null,[e("li",null,[i("From IoTDB site: "),e("a",b,[i("https://iotdb.apache.org/Download/"),n(t)])]),f])]),e("li",null,[i("Or compile from source code "),e("ul",null,[e("li",null,[i("See "),e("a",v,[i("https://github.com/apache/iotdb"),n(t)])])])])]),_,e("ol",null,[D,e("li",null,[e("p",null,[i("Download "),B,i(" ， from "),e("a",I,[i("source1"),n(t)]),i(" or "),e("a",y,[i("source2"),n(t)]),i(".")])]),w]),x])}const L=a(c,[["render",S],["__file","DBeaver.html.vue"]]);export{L as default};
