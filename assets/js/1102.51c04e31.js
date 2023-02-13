(window.webpackJsonp=window.webpackJsonp||[]).push([[1102],{1508:function(t,a,e){"use strict";e.r(a);var v=e(19),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),a("p",[t._v("我们以风电场物联网场景为例，说明如何在 IoTDB 中创建一个正确的数据模型。")]),t._v(" "),a("p",[t._v("根据企业组织结构和设备实体层次结构，我们将其物联网数据模型表示为如下图所示的属性层级组织结构，即电力集团层-风电场层-实体层-物理量层。其中 ROOT 为根节点，物理量层的每一个节点为叶子节点。IoTDB 采用树形结构定义数据模式，以从 ROOT 节点到叶子节点的路径来命名一个时间序列，层次间以“.”连接。例如，下图最左侧路径对应的时间序列名称为"),a("code",[t._v("ROOT.ln.wf01.wt01.status")]),t._v("。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/123542457-5f511d00-d77c-11eb-8006-562d83069baa.png"}}),t._v(" "),a("p",[t._v("在上图所描述的实际场景中，有许多实体所采集的物理量相同，即具有相同的工况名称和类型，因此，可以声明一个"),a("strong",[t._v("元数据模板")]),t._v("来定义可采集的物理量集合。在实践中，元数据模板的使用可帮助减少元数据的资源占用，详细内容参见 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Data-Concept/Schema-Template.html"}},[t._v("元数据模板文档")]),t._v("。")],1),t._v(" "),a("p",[t._v("IoTDB 模型结构涉及的基本概念在下文将做详细叙述。")]),t._v(" "),a("h2",{attrs:{id:"物理量、实体、数据库、路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理量、实体、数据库、路径"}},[t._v("#")]),t._v(" 物理量、实体、数据库、路径")]),t._v(" "),a("h3",{attrs:{id:"物理量-measurement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理量-measurement"}},[t._v("#")]),t._v(" 物理量（Measurement）")]),t._v(" "),a("p",[a("strong",[t._v("物理量")]),t._v("，也称工况或字段（field），是在实际场景中检测装置所记录的测量信息，且可以按一定规律变换成为电信号或其他所需形式的信息输出并发送给 IoTDB。在 IoTDB 当中，存储的所有数据及路径，都是以物理量为单位进行组织。")]),t._v(" "),a("h3",{attrs:{id:"实体-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实体-entity"}},[t._v("#")]),t._v(" 实体（Entity）")]),t._v(" "),a("p",[a("strong",[t._v("一个物理实体")]),t._v("，也称设备（device），是在实际场景中拥有物理量的设备或装置。在 IoTDB 当中，所有的物理量都有其对应的归属实体。")]),t._v(" "),a("h3",{attrs:{id:"数据库-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库-database"}},[t._v("#")]),t._v(" 数据库（Database）")]),t._v(" "),a("p",[t._v("用户可以将任意前缀路径设置成数据库。如有 4 条时间序列"),a("code",[t._v("root.ln.wf01.wt01.status")]),t._v(", "),a("code",[t._v("root.ln.wf01.wt01.temperature")]),t._v(", "),a("code",[t._v("root.ln.wf02.wt02.hardware")]),t._v(", "),a("code",[t._v("root.ln.wf02.wt02.status")]),t._v("，路径"),a("code",[t._v("root.ln")]),t._v("下的两个实体 "),a("code",[t._v("wt01")]),t._v(", "),a("code",[t._v("wt02")]),t._v("可能属于同一个业主，或者同一个制造商，这时候就可以将前缀路径"),a("code",[t._v("root.ln")]),t._v("指定为一个数据库。未来"),a("code",[t._v("root.ln")]),t._v("下增加了新的实体，也将属于该数据库。")]),t._v(" "),a("p",[t._v("一个 database 中的所有数据会存储在同一批文件夹下，不同 database 的数据会存储在磁盘的不同文件夹下，从而实现物理隔离。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意 1：不允许将一个完整路径（如上例的"),a("code",[t._v("root.ln.wf01.wt01.status")]),t._v(") 设置成 database。")]),t._v(" "),a("p",[t._v("注意 2：一个时间序列其前缀必须属于某个 database。在创建时间序列之前，用户必须设定该序列属于哪个database。只有设置了 database 的时间序列才可以被持久化在磁盘上。")]),t._v(" "),a("p",[t._v("注意 3：被设置为数据库的路径总字符数不能超过64，包括路径开头的"),a("code",[t._v("root.")]),t._v("这5个字符。")])]),t._v(" "),a("p",[t._v("一个前缀路径一旦被设定成 database 后就不可以再更改这个 database 的设定。")]),t._v(" "),a("p",[t._v("一个 database 设定后，其对应的前缀路径的祖先层级与孩子及后裔层级也不允许再设置 database（如，"),a("code",[t._v("root.ln")]),t._v("设置 database 后，root 层级与"),a("code",[t._v("root.ln.wf01")]),t._v("不允许被设置为 database）。")]),t._v(" "),a("p",[t._v("Database 节点名只支持中英文字符、数字和下划线的组合。例如"),a("code",[t._v("root.数据库_1")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"路径-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径-path"}},[t._v("#")]),t._v(" 路径（Path）")]),t._v(" "),a("p",[t._v("路径（"),a("code",[t._v("path")]),t._v("）是指符合以下约束的表达式：")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("path       \n    : nodeName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v(" nodeName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \nnodeName\n    : wildcard? identifier wildcard?\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wildcard\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \nwildcard \n    : "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'**'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("我们称一个路径中由 "),a("code",[t._v("'.'")]),t._v(" 分割的部分叫做路径结点名（"),a("code",[t._v("nodeName")]),t._v("）。例如："),a("code",[t._v("root.a.b.c")]),t._v("为一个层级为 4 的路径。")]),t._v(" "),a("p",[t._v("下面是对路径结点名（"),a("code",[t._v("nodeName")]),t._v("）的约束：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("root")]),t._v(" 作为一个保留字符，它只允许出现在下文提到的时间序列的开头，若其他层级出现 "),a("code",[t._v("root")]),t._v("，则无法解析，提示报错。")]),t._v(" "),a("li",[t._v("除了时间序列的开头的层级（"),a("code",[t._v("root")]),t._v("）外，其他的层级支持的字符如下：\n"),a("ul",[a("li",[t._v("[ 0-9 a-z A-Z _ ] （字母，数字，下划线）")]),t._v(" "),a("li",[t._v("['\\u2E80'..'\\u9FFF'] （UNICODE 中文字符）")])])]),t._v(" "),a("li",[t._v("特别地，如果系统在 Windows 系统上部署，那么 database 路径结点名是大小写不敏感的。例如，同时创建"),a("code",[t._v("root.ln")]),t._v(" 和 "),a("code",[t._v("root.LN")]),t._v(" 是不被允许的。")]),t._v(" "),a("li",[t._v("如果需要在路径结点名中用特殊字符，可以用反引号引用路径结点名，具体使用方法可以参考"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Reference/Syntax-Conventions.html"}},[t._v("语法约定")]),t._v("。")],1)]),t._v(" "),a("h3",{attrs:{id:"路径模式-path-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径模式-path-pattern"}},[t._v("#")]),t._v(" 路径模式（Path Pattern）")]),t._v(" "),a("p",[t._v("为了使得在表达多个时间序列的时候更加方便快捷，IoTDB 为用户提供带通配符"),a("code",[t._v("*")]),t._v("或"),a("code",[t._v("**")]),t._v("的路径。用户可以利用两种通配符构造出期望的路径模式。通配符可以出现在路径中的任何层。")]),t._v(" "),a("p",[a("code",[t._v("*")]),t._v("在路径中表示一层。例如"),a("code",[t._v("root.vehicle.*.sensor1")]),t._v("代表的是以"),a("code",[t._v("root.vehicle")]),t._v("为前缀，以"),a("code",[t._v("sensor1")]),t._v("为后缀，层次等于 4 层的路径。")]),t._v(" "),a("p",[a("code",[t._v("**")]),t._v("在路径中表示是（"),a("code",[t._v("*")]),t._v("）+，即为一层或多层"),a("code",[t._v("*")]),t._v("。例如"),a("code",[t._v("root.vehicle.device1.**")]),t._v("代表的是"),a("code",[t._v("root.vehicle.device1.*")]),t._v(", "),a("code",[t._v("root.vehicle.device1.*.*")]),t._v(", "),a("code",[t._v("root.vehicle.device1.*.*.*")]),t._v("等所有以"),a("code",[t._v("root.vehicle.device1")]),t._v("为前缀路径的大于等于 4 层的路径；"),a("code",[t._v("root.vehicle.**.sensor1")]),t._v("代表的是以"),a("code",[t._v("root.vehicle")]),t._v("为前缀，以"),a("code",[t._v("sensor1")]),t._v("为后缀，层次大于等于 4 层的路径。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意："),a("code",[t._v("*")]),t._v("和"),a("code",[t._v("**")]),t._v("不能放在路径开头。")])]),t._v(" "),a("h2",{attrs:{id:"时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间序列"}},[t._v("#")]),t._v(" 时间序列")]),t._v(" "),a("h3",{attrs:{id:"时间戳-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间戳-timestamp"}},[t._v("#")]),t._v(" 时间戳 (Timestamp)")]),t._v(" "),a("p",[t._v("时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳，详细描述参见 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Data-Concept/Data-Type.html"}},[t._v("数据类型文档")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"数据点-data-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据点-data-point"}},[t._v("#")]),t._v(" 数据点（Data Point）")]),t._v(" "),a("p",[a("strong",[t._v("一个“时间戳-值”对")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"时间序列-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间序列-timeseries"}},[t._v("#")]),t._v(" 时间序列（Timeseries）")]),t._v(" "),a("p",[a("strong",[t._v("一个物理实体的某个物理量在时间轴上的记录")]),t._v("，是数据点的序列。")]),t._v(" "),a("p",[t._v("一个实体的一个物理量对应一个时间序列，即实体+物理量=时间序列。")]),t._v(" "),a("p",[t._v("时间序列也被称测点（meter）、时间线（timeline）。实时数据库中常被称作标签（tag）、参数（parameter）。")]),t._v(" "),a("p",[t._v("例如，ln 电力集团、wf01 风电场的实体 wt01 有名为 status 的物理量，则它的时间序列可以表示为："),a("code",[t._v("root.ln.wf01.wt01.status")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"对齐时间序列-aligned-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对齐时间序列-aligned-timeseries"}},[t._v("#")]),t._v(" 对齐时间序列（Aligned Timeseries）")]),t._v(" "),a("p",[t._v("在实际应用中，存在某些实体的多个物理量"),a("strong",[t._v("同时采样")]),t._v("，形成一组时间列相同的时间序列，这样的一组时间序列在Apache IoTDB中可以建模为对齐时间序列。")]),t._v(" "),a("p",[t._v("在插入数据时，一组对齐序列的时间戳列在内存和磁盘中仅需存储一次，而不是每个时间序列存储一次。")]),t._v(" "),a("p",[t._v("对齐的一组时间序列最好同时创建。")]),t._v(" "),a("p",[t._v("不可以在对齐序列所属的实体下创建非对齐的序列，不可以在非对齐序列所属的实体下创建对齐序列。")]),t._v(" "),a("p",[t._v("查询数据时，可以对于每一条时间序列单独查询。")]),t._v(" "),a("p",[t._v("插入数据时，对齐的时间序列中某列的某些行允许有空值。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/114125919-f4850800-9929-11eb-8211-81d4c04af1ec.png"}}),t._v(" "),a("p",[t._v("在后续数据定义语言、数据操作语言和 Java 原生接口章节，将对涉及到对齐时间序列的各种操作进行逐一介绍。")])])}),[],!1,null,null,null);a.default=s.exports}}]);