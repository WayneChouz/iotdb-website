(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1029:function(s,a,n){"use strict";n.r(a);var e=n(19),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"给发布版本投票"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给发布版本投票"}},[s._v("#")]),s._v(" 给发布版本投票")]),s._v(" "),a("p",[s._v("For non-Chinese users, please read https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release")]),s._v(" "),a("h2",{attrs:{id:"下载投票的-版本-rc-下的所有内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载投票的-版本-rc-下的所有内容"}},[s._v("#")]),s._v(" 下载投票的 版本/rc 下的所有内容")]),s._v(" "),a("p",[s._v("https://dist.apache.org/repos/dist/dev/iotdb/")]),s._v(" "),a("h2",{attrs:{id:"导入发布经理的公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入发布经理的公钥"}},[s._v("#")]),s._v(" 导入发布经理的公钥")]),s._v(" "),a("p",[s._v("https://dist.apache.org/repos/dist/dev/iotdb/KEYS")]),s._v(" "),a("p",[s._v("最下边有 Release Manager (RM) 的公钥")]),s._v(" "),a("p",[s._v("安装 gpg2")]),s._v(" "),a("h3",{attrs:{id:"第一种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种方法"}},[s._v("#")]),s._v(" 第一种方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("公钥的开头是这种\npub   rsa4096 2019-10-15 [SC]\n      10F3B3F8A1201B79AA43F2E00FC7F131CAA00430\n      \n或这种\n\npub   rsa4096/28662AC6 2019-12-23 [SC]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("下载公钥")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 （或 28662AC6)\n\n或 （指定 keyserver) \ngpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 （或 28662AC6)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"第二种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种方法"}},[s._v("#")]),s._v(" 第二种方法")]),s._v(" "),a("p",[s._v("把下边这段复制到一个文本文件中，起个名叫 "),a("code",[s._v("key.asc")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2\n...\n-----END PGP PUBLIC KEY BLOCK-----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("导入 RM 的公钥到自己电脑")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gpg2 --import key.asc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"验证源码发布版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证源码发布版"}},[s._v("#")]),s._v(" 验证源码发布版")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("验证是否有 NOTICE、LICENSE，以及内容是否正确。")])]),s._v(" "),a("li",[a("p",[s._v("验证 README、RELEASE_NOTES")])]),s._v(" "),a("li",[a("p",[s._v("验证 header")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mvn -B apache-rat:check\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("验证签名和哈希值")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gpg2 --verify apache-iotdb-0.12.0-source-release.zip.asc apache-iotdb-0.12.0-source-release.zip\n\n出现 Good Singnature \n\nshasum -a512 apache-iotdb-0.12.0-source-release.zip\n\n和对应的 .sha512 对比，一样就可以。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("验证编译")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mvnw install\n\n应该最后全 SUCCESS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"验证二进制发布版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证二进制发布版"}},[s._v("#")]),s._v(" 验证二进制发布版")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("验证是否有 NOTICE、LICENSE，以及内容是否正确。")])]),s._v(" "),a("li",[a("p",[s._v("验证 README、RELEASE_NOTES")])]),s._v(" "),a("li",[a("p",[s._v("验证签名和哈希值")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gpg2 --verify apache-iotdb-0.12.0-bin.zip.asc apache-iotdb-0.12.0-bin.zip\n\n出现 Good Singnature \n\nshasum -a512 apache-iotdb-0.12.0-bin.zip\n\n和对应的 .sha512 对比，一样就可以。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("验证是否能启动以及示例语句是否正确执行")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nohup ./sbin/start-server.sh >/dev/null 2>&1 &\n\n./sbin/start-cli.sh\n\nCREATE DATABASE root.turbine;\nCREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;\ninsert into root.turbine.d1(timestamp,s0) values(1,1);\ninsert into root.turbine.d1(timestamp,s0) values(2,2);\ninsert into root.turbine.d1(timestamp,s0) values(3,3);\nselect * from root.**;\n\n打印如下内容：\n+-----------------------------------+------------------+\n|                               Time|root.turbine.d1.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|               1.0|\n|      1970-01-01T08:00:00.002+08:00|               2.0|\n|      1970-01-01T08:00:00.003+08:00|               3.0|\n+-----------------------------------+------------------+\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"示例邮件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例邮件"}},[s._v("#")]),s._v(" 示例邮件")]),s._v(" "),a("p",[s._v("验证通过之后可以发邮件了")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Hi,\n\n+1 (PMC could binding)\n\nThe source release:\nLICENSE and NOTICE [ok]\nsignatures and hashes [ok]\nAll files have ASF header [ok]\ncould compile from source: ./mvnw clean install [ok]\n\nThe binary distribution:\nLICENSE and NOTICE [ok]\nsignatures and hashes [ok]\nCould run with the following statements [ok]\n\nCREATE DATABASE root.turbine;\nCREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;\ninsert into root.turbine.d1(timestamp,s0) values(1,1);\ninsert into root.turbine.d1(timestamp,s0) values(2,2);\ninsert into root.turbine.d1(timestamp,s0) values(3,3);\nselect * from root.**;\n\nThanks,\nxxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"小工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小工具"}},[s._v("#")]),s._v(" 小工具")]),s._v(" "),a("ul",[a("li",[s._v("打印出包含某些字符的行（只看最上边的输出就可以，下边的文件不需要看）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('find . -type f -exec grep -i "copyright" {} \\; -print | sort -u\nfind **/src -type f -exec grep -i "copyright" {} \\; -print | sort -u\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);