(window.webpackJsonp=window.webpackJsonp||[]).push([[965],{1369:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"mlog-加载工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mlog-加载工具"}},[t._v("#")]),t._v(" Mlog 加载工具")]),t._v(" "),a("h3",{attrs:{id:"工具介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具介绍"}},[t._v("#")]),t._v(" 工具介绍")]),t._v(" "),a("p",[t._v("MLogLoad 工具用于将重放 "),a("code",[t._v("mlog.bin")]),t._v(" 中和 "),a("code",[t._v("tlog.txt")]),t._v("   中的元数据操作，将元数据信息加载到正在运行的 IoTDB 中。\n与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。")]),t._v(" "),a("p",[t._v("若正在运行的 IoTDB 中已有元数据，为避免重放删除操作影响元数据，建议使用\n"),a("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Export-Schema.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("导出元数据操作"),a("OutboundLink")],1),t._v(" 归档得到的 "),a("code",[t._v("mlog.bin")]),t._v(" 和 "),a("code",[t._v("tlog.txt")]),t._v(" 进行增量加载。")]),t._v(" "),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("p",[t._v("Linux/MacOS")]),t._v(" "),a("blockquote",[a("p",[t._v("./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root")])]),t._v(" "),a("p",[t._v("Windows")]),t._v(" "),a("blockquote",[a("p",[t._v("./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("usage: MLogLoad -mlog <mlog file> [-tlog <tlog file>] [-h <receiver host>]\n       [-p <receiver port>] [-u <user>] [-pw <password>] [-help]\n -mlog <mlog file>    Need to specify a binary mlog.bin file to parse\n                      (required)\n -tlog <tlog file>    Could specify a binary tlog.txt file to parse. Tags\n                      and attributes will be ignored if not specified\n                      (optional)\n -h <receiver host>   Could specify a specify the receiver host, default\n                      is 127.0.0.1 (optional)\n -p <receiver port>   Could specify a specify the receiver port, default\n                      is 6667 (optional)\n -u <user>            Could specify the user name, default is root\n                      (optional)\n -pw <password>       Could specify the password, default is root\n                      (optional)\n -help,--help         Display help information\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("注意：当 tlog 未指定时，Mlog 加载工具会跳过标签点管理相关的元数据操作。")]),t._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("假定服务器 192.168.0.101:6667 上运行一个 IoTDB 实例，想从将本地的元数据文件 "),a("code",[t._v("/yourpath/mlog.bin")]),t._v(" 加载进此IoTDB实例。")]),t._v(" "),a("p",[t._v("进入到 mLogLoad.sh 所在文件夹中，执行如下语句：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('./mLogLoad.sh -f "/yourpath/mlog.bin" -h 192.168.0.101 -p 6667 -u root -pw root\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("等待脚本执行完成之后，可以检查 IoTDB 实例中元数据已经被正确加载。")]),t._v(" "),a("h3",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ul",[a("li",[t._v("找不到或无法加载主类 MLogLoader\n"),a("ul",[a("li",[t._v("可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);