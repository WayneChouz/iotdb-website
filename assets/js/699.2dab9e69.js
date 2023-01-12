(window.webpackJsonp=window.webpackJsonp||[]).push([[699],{1102:function(s,t,e){"use strict";e.r(t);var n=e(19),a=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"时间序列管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间序列管理"}},[s._v("#")]),s._v(" 时间序列管理")]),s._v(" "),t("h2",{attrs:{id:"创建时间序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建时间序列"}},[s._v("#")]),s._v(" 创建时间序列")]),s._v(" "),t("p",[s._v("根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的 SQL 语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("从 v0.13 起，可以使用简化版的 SQL 语句创建时间序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB > create timeseries root.ln.wf01.wt01.status BOOLEAN encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature FLOAT encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware TEXT encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status BOOLEAN encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status BOOLEAN encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature FLOAT encoding=RLE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("详细的数据类型与编码方式的对应列表请参见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Data-Concept/Encoding.html"}},[s._v("编码方式")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"创建对齐时间序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建对齐时间序列"}},[s._v("#")]),s._v(" 创建对齐时间序列")]),s._v(" "),t("p",[s._v("创建一组对齐时间序列的SQL语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY) \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("一组对齐序列中的序列可以有不同的数据类型、编码方式以及压缩方式。")]),s._v(" "),t("p",[s._v("对齐的时间序列也支持设置别名、标签、属性。")]),s._v(" "),t("h2",{attrs:{id:"删除时间序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除时间序列"}},[s._v("#")]),s._v(" 删除时间序列")]),s._v(" "),t("p",[s._v("我们可以使用"),t("code",[s._v("(DELETE | DROP) TimeSeries <PathPattern>")]),s._v("语句来删除我们之前创建的时间序列。SQL 语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\nIoTDB> drop timeseries root.ln.wf02.*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"查看时间序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看时间序列"}},[s._v("#")]),s._v(" 查看时间序列")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?")]),s._v(" "),t("p",[s._v("SHOW TIMESERIES 中可以有四种可选的子句，查询结果为这些时间序列的所有信息")])])]),s._v(" "),t("p",[s._v("时间序列信息具体包括：时间序列路径名，database，Measurement 别名，数据类型，编码方式，压缩方式，属性和标签。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("SHOW TIMESERIES")]),s._v(" "),t("p",[s._v("展示系统中所有的时间序列信息")])]),s._v(" "),t("li",[t("p",[s._v("SHOW TIMESERIES <"),t("code",[s._v("Path")]),s._v(">")]),s._v(" "),t("p",[s._v("返回给定路径的下的所有时间序列信息。其中 "),t("code",[s._v("Path")]),s._v(" 需要为一个时间序列路径或路径模式。例如，分别查看"),t("code",[s._v("root")]),s._v("路径和"),t("code",[s._v("root.ln")]),s._v("路径下的时间序列，SQL 语句如下所示：")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> show timeseries root.**\nIoTDB> show timeseries root.ln.**\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("执行结果分别为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{"newTag1":"newV1","tag4":"v4","tag3":"v3"}|{"attr2":"v2","attr1":"newV1","attr4":"v4","attr3":"v3"}|    null|               null|\n|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\nTotal line number = 7\nIt costs 0.016s\n\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+\n|                   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|deadband|deadband parameters|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+\n|   root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|null|      null|    null|               null|\n|     root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|\n|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|    null|               null|\n|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+\nTotal line number = 4\nIt costs 0.004s\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("SHOW TIMESERIES LIMIT INT OFFSET INT")]),s._v(" "),t("p",[s._v("只返回从指定下标开始的结果，最大返回条数被 LIMIT 限制，用于分页查询。例如：")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("show timeseries root.ln.** limit 10 offset 10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("SHOW LATEST TIMESERIES")]),s._v(" "),t("p",[s._v("表示查询出的时间序列需要按照最近插入时间戳降序排列")])])]),s._v(" "),t("p",[s._v("需要注意的是，当查询路径不存在时，系统会返回 0 条时间序列。")]),s._v(" "),t("h2",{attrs:{id:"统计时间序列总数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统计时间序列总数"}},[s._v("#")]),s._v(" 统计时间序列总数")]),s._v(" "),t("p",[s._v("IoTDB 支持使用"),t("code",[s._v("COUNT TIMESERIES<Path>")]),s._v("来统计一条路径中的时间序列个数。SQL 语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB > COUNT TIMESERIES root.**\nIoTDB > COUNT TIMESERIES root.ln.**\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("除此之外，还可以通过定义"),t("code",[s._v("LEVEL")]),s._v("来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为："),t("code",[s._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),s._v("。")]),s._v(" "),t("p",[s._v("例如有如下时间序列（可以使用"),t("code",[s._v("show timeseries")]),s._v("展示所有时间序列）：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{"newTag1":"newV1","tag4":"v4","tag3":"v3"}|{"attr2":"v2","attr1":"newV1","attr4":"v4","attr3":"v3"}|    null|               null|\n|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                               {"unit":"c"}|                                                    null|    null|               null|\n|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                    {"description":"test1"}|                                                    null|    null|               null|\n|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\nTotal line number = 7\nIt costs 0.004s\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("那么 Metadata Tree 如下所示：")]),s._v(" "),t("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}}),s._v(" "),t("p",[s._v("可以看到，"),t("code",[s._v("root")]),s._v("被定义为"),t("code",[s._v("LEVEL=0")]),s._v("。那么当你输入如下语句时：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB > COUNT TIMESERIES root.** GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("你将得到以下结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> COUNT TIMESERIES root.** GROUP BY LEVEL=1\n+------------+-----------------+\n|      column|count(timeseries)|\n+------------+-----------------+\n|   root.sgcc|                2|\n|root.turbine|                1|\n|     root.ln|                4|\n+------------+-----------------+\nTotal line number = 3\nIt costs 0.002s\n\nIoTDB > COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2\n+------------+-----------------+\n|      column|count(timeseries)|\n+------------+-----------------+\n|root.ln.wf02|                2|\n|root.ln.wf01|                2|\n+------------+-----------------+\nTotal line number = 2\nIt costs 0.002s\n\nIoTDB > COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2\n+------------+-----------------+\n|      column|count(timeseries)|\n+------------+-----------------+\n|root.ln.wf01|                2|\n+------------+-----------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：时间序列的路径只是过滤条件，与 level 的定义无关。")])]),s._v(" "),t("h2",{attrs:{id:"标签点管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标签点管理"}},[s._v("#")]),s._v(" 标签点管理")]),s._v(" "),t("p",[s._v("我们可以在创建时间序列的时候，为它添加别名和额外的标签和属性信息。")]),s._v(" "),t("p",[s._v("标签和属性的区别在于：")]),s._v(" "),t("ul",[t("li",[s._v("标签可以用来查询时间序列路径，会在内存中维护标点到时间序列路径的倒排索引：标签 -> 时间序列路径")]),s._v(" "),t("li",[s._v("属性只能用时间序列路径来查询：时间序列路径 -> 属性")])]),s._v(" "),t("p",[s._v("所用到的扩展的创建时间序列的 SQL 语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("括号里的"),t("code",[s._v("temprature")]),s._v("是"),t("code",[s._v("s1")]),s._v("这个传感器的别名。\n我们可以在任何用到"),t("code",[s._v("s1")]),s._v("的地方，将其用"),t("code",[s._v("temprature")]),s._v("代替，这两者是等价的。")]),s._v(" "),t("blockquote",[t("p",[s._v("IoTDB 同时支持在查询语句中 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/DML-Data-Manipulation Language.html"}},[s._v("使用 AS 函数")]),s._v(" 设置别名。二者的区别在于：AS 函数设置的别名用于替代整条时间序列名，且是临时的，不与时间序列绑定；而上文中的别名只作为传感器的别名，与其绑定且可与原传感器名等价使用。")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("注意：额外的标签和属性信息总的大小不能超过"),t("code",[s._v("tag_attribute_total_size")]),s._v(".")])]),s._v(" "),t("ul",[t("li",[s._v("标签点属性更新\n创建时间序列后，我们也可以对其原有的标签点属性进行更新，主要有以下六种更新方式：")]),s._v(" "),t("li",[s._v("重命名标签或属性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("重新设置标签或属性的值")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("删除已经存在的标签或属性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("添加新的标签")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("添加新的属性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("更新插入别名，标签和属性")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果该别名，标签或属性原来不存在，则插入，否则，用新值更新原来的旧值")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("使用标签作为过滤条件查询时间序列")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SHOW TIMESERIES (<`PathPattern`>)? WhereClause\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回给定路径的下的所有满足条件的时间序列信息，SQL 语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c\nALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1\nshow timeseries root.ln.** where unit=c\nshow timeseries root.ln.** where description contains 'test1'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("执行结果分别为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+\n|                timeseries|alias|     database|dataType|encoding|compression|        tags|attributes|deadband|deadband parameters|\n+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+\n|root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|{"unit":"c"}|      null|    null|               null|\n+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+\nTotal line number = 1\nIt costs 0.005s\n\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+\n|              timeseries|alias|     database|dataType|encoding|compression|                   tags|attributes|deadband|deadband parameters|\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+\n|root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|{"description":"test1"}|      null|    null|               null|\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+\nTotal line number = 1\nIt costs 0.004s\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ul",[t("li",[s._v("使用标签作为过滤条件统计时间序列数量")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("COUNT TIMESERIES (<`PathPattern`>)? WhereClause\nCOUNT TIMESERIES (<`PathPattern`>)? WhereClause GROUP BY LEVEL=<INTEGER>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("返回给定路径的下的所有满足条件的时间序列的数量，SQL 语句如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("count timeseries\ncount timeseries root.** where unit = c\ncount timeseries root.** where unit = c group by level = 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行结果分别为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> count timeseries\n+-----------------+\n|count(timeseries)|\n+-----------------+\n|                6|\n+-----------------+\nTotal line number = 1\nIt costs 0.019s\nIoTDB> count timeseries root.** where unit = c\n+-----------------+\n|count(timeseries)|\n+-----------------+\n|                2|\n+-----------------+\nTotal line number = 1\nIt costs 0.020s\nIoTDB> count timeseries root.** where unit = c group by level = 2\n+--------------+-----------------+\n|        column|count(timeseries)|\n+--------------+-----------------+\n|  root.ln.wf02|                2|\n|  root.ln.wf01|                0|\n|root.sgcc.wf03|                0|\n+--------------+-----------------+\nTotal line number = 3\nIt costs 0.011s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("blockquote",[t("p",[s._v("注意，现在我们只支持一个查询条件，要么是等值条件查询，要么是包含条件查询。当然 where 子句中涉及的必须是标签值，而不能是属性值。")])]),s._v(" "),t("p",[s._v("创建对齐时间序列")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("create aligned timeseries root.sg1.d1(s1 INT32 tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2), s2 DOUBLE tags(tag3=v3, tag4=v4) attributes(attr3=v3, attr4=v4))\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('IoTDB> show timeseries\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{"tag1":"v1","tag2":"v2"}|{"attr2":"v2","attr1":"v1"}|    null|               null|\n|root.sg1.d1.s2| null|     root.sg1|  DOUBLE| GORILLA|     SNAPPY|{"tag4":"v4","tag3":"v3"}|{"attr4":"v4","attr3":"v3"}|    null|               null|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("支持查询：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('IoTDB> show timeseries where tag1=\'v1\'\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{"tag1":"v1","tag2":"v2"}|{"attr2":"v2","attr1":"v1"}|    null|               null|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("上述对时间序列标签、属性的更新等操作都支持。")])])}),[],!1,null,null,null);t.default=a.exports}}]);