(window.webpackJsonp=window.webpackJsonp||[]).push([[1661],{1982:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("我们可以根据存储模型建立相应的存储组。创建存储组的SQL语句如下所示：")]),t._v(" "),t._m(2),s("p",[t._v("根据以上两条SQL语句，我们可以创建出两个存储组。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("在存储组创建后，我们可以使用"),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("SHOW STORAGE GROUP")]),t._v("语句来查看所有的存储组，SQL语句如下所示：")],1),t._v(" "),t._m(6),s("p",[t._v("执行结果为：\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的SQL语句如下所示：")]),t._v(" "),t._m(8),s("p",[t._v("需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：")]),t._v(" "),t._m(9),s("p",[t._v("详细的数据类型与编码方式的对应列表请参见"),s("router-link",{attrs:{to:"./../2-Concept/3-Encoding.html"}},[t._v("编码方式")]),t._v("。")],1),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("目前，IoTDB支持两种查看时间序列的方式：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),s("p",[t._v("执行结果分别为：")]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),t._v(" "),s("p",[t._v("需要注意的是，当查询路径不存在时，系统会返回0条时间序列。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792072-cdc8a480-1200-11ea-8cec-321fef618a12.png"}})]),t._v(" "),s("p",[t._v("那么Metadata Tree如下所示：")]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})]),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("你将得到以下结果：\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"}})])],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),s("p",[t._v("对于上面提到的例子和Metadata Tree，你可以获得如下结果：\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792060-c73a2d00-1200-11ea-8ec4-be7145fd6c8c.png"}})])],1),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("SQL语句如下所示：")]),t._v(" "),t._m(31),t._m(32),t._v(" "),s("p",[t._v("IoTDB支持对存储组级别设置数据存活时间（TTL），这使得IoTDB可以定期、自动地删除一定时间之前的数据。合理使用TTL\n可以帮助您控制IoTDB占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降,\n内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。")]),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("设置TTL的SQL语句如下所示：")]),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ddl-数据定义语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ddl-数据定义语言"}},[this._v("#")]),this._v(" DDL (数据定义语言)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"创建存储组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建存储组"}},[this._v("#")]),this._v(" 创建存储组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("需要注意的是，当系统中已经存在某个存储组或存储组的父亲节点或者孩子节点被设置为存储组的情况下，用户不可创建存储组。例如在已经有"),e("code",[this._v("root.ln")]),this._v("和"),e("code",[this._v("root.sgcc")]),this._v("这两个存储组的情况下，创建"),e("code",[this._v("root.ln.wf01")]),this._v("存储组是不可行的。系统将给出相应的错误提示，如下所示：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"查看存储组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看存储组"}},[this._v("#")]),this._v(" 查看存储组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> show storage group\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"创建时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建时间序列"}},[this._v("#")]),this._v(" 创建时间序列")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"查看时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看时间序列"}},[this._v("#")]),this._v(" 查看时间序列")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("SHOW TIMESERIES语句以JSON形式展示系统中所有的时间序列信息")])]),t._v(" "),s("li",[s("p",[t._v("SHOW TIMESERIES <"),s("code",[t._v("Path")]),t._v(">语句以表格的形式返回给定路径的下的所有时间序列信息及时间序列总数。时间序列信息具体包括：时间序列路径名，数据类型，编码类型。其中，"),s("code",[t._v("Path")]),t._v("需要为一个前缀路径、带星路径或时间序列路径。例如，分别查看"),s("code",[t._v("root")]),t._v("路径和"),s("code",[t._v("root.ln")]),t._v("路径下的时间序列，SQL语句如下所示：")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"统计时间序列总数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计时间序列总数"}},[this._v("#")]),this._v(" 统计时间序列总数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("IoTDB支持使用"),e("code",[this._v("COUNT TIMESERIES <Path>")]),this._v("来统计一条路径中的时间序列个数。SQL语句如下所示：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > COUNT TIMESERIES root\nIoTDB > COUNT TIMESERIES root.ln\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("除此之外，还可以通过定义"),e("code",[this._v("LEVEL")]),this._v("来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为："),e("code",[this._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("例如有如下时间序列（可以使用"),e("code",[this._v("show timeseries")]),this._v("展示所有时间序列）：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以看到，"),e("code",[this._v("root")]),this._v("被定义为"),e("code",[this._v("LEVEL=0")]),this._v("。那么当你输入如下语句时：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"统计节点数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计节点数"}},[this._v("#")]),this._v(" 统计节点数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("IoTDB支持使用"),e("code",[this._v("COUNT NODES <Path> LEVEL=<INTEGER>")]),this._v("来统计当前Metadata树下指定层级的节点个数，这条语句可以用来统计设备数。例如：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > COUNT NODES root LEVEL=2\nIoTDB > COUNT NODES root.ln LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01 LEVEL=3\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"删除时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除时间序列"}},[this._v("#")]),this._v(" 删除时间序列")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们可以使用"),e("code",[this._v("DELETE TimeSeries <PrefixPath>")]),this._v("语句来删除我们之前创建的时间序列。SQL语句如下所示：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"查看设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看设备"}},[this._v("#")]),this._v(" 查看设备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("与 "),e("code",[this._v("Show Timeseries")]),this._v(" 相似，IoTDB 目前也支持两种方式查看设备。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("SHOW DEVICES")]),t._v(" 语句显示当前所有的设备信息，等价于 "),s("code",[t._v("SHOW DEVICES root")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("SHOW DEVICES <PrefixPath>")]),t._v(" 语句规定了 "),s("code",[t._v("PrefixPath")]),t._v("，返回在给定的前缀路径下的设备信息。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> show devices\nIoTDB> show devices root.ln\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[this._v("#")]),this._v(" TTL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"设置-ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-ttl"}},[this._v("#")]),this._v(" 设置 TTL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> set ttl to root.ln 3600000\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这个例子表示在"),e("code",[this._v("root.ln")]),this._v("存储组中，只有最近一个小时的数据将会保存，旧数据会被移除或不可见。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"取消-ttl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消-ttl"}},[this._v("#")]),this._v(" 取消 TTL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> set ttl to root.ln 3600000。\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=r.exports}}]);