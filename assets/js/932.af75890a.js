(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1338:function(t,r,a){"use strict";a.r(r);var s=a(19),e=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"虚拟存储组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟存储组"}},[t._v("#")]),t._v(" 虚拟存储组")]),t._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),r("p",[t._v('存储组由用户显示指定，使用语句"SET STORAGE GROUP TO"来指定存储组，每一个存储组有一个对应的 StorageGroupProcessor')]),t._v(" "),r("p",[t._v("为了确保最终一致性，每一个存储组有一个数据插入锁（排它锁）来同步每一次插入操作。\n所以服务端数据写入的并行度为存储组的数量。")]),t._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("p",[t._v("从背景中可知，IoTDB数据写入的并行度为 max(客户端数量，服务端数据写入的并行度)，也就是max(客户端数量，存储组数量)")]),t._v(" "),r("p",[t._v("在生产实践中，存储组的概念往往与特定真实世界实体相关（例如工厂，地点，国家等）。\n因此存储组的数量可能会比较小，这会导致IoTDB写入并行度不足。即使我们开再多的客户端写入线程，也无法走出这种困境。")]),t._v(" "),r("h2",{attrs:{id:"解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),r("p",[t._v("我们的方案是将一个存储组下的设备分为若干个设备组（称为虚拟存储组），将同步粒度从存储组级别改为虚拟存储组粒度。")]),t._v(" "),r("p",[t._v('更具体的，我们使用哈希将设备分到不同的虚拟存储组下，例如：\n对于一个名为"root.sg.d"的设备（假设其存储组为"root.sg"），它属于的虚拟存储组为"root.sg.[hash("root.sg.d") mod num_of_virtual_storage_group]"')]),t._v(" "),r("h2",{attrs:{id:"使用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),r("p",[t._v("通过改变如下配置来设置每一个存储组下虚拟存储组的数量：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("virtual_storage_group_num\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("推荐值为[virtual storage group number] = [CPU core number] / [user-defined storage group number]")]),t._v(" "),r("p",[t._v("参考"),r("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"}},[t._v("配置手册")]),t._v("以获取更多信息。")],1)])}),[],!1,null,null,null);r.default=e.exports}}]);