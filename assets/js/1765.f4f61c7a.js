(window.webpackJsonp=window.webpackJsonp||[]).push([[1765],{2086:function(t,e,r){"use strict";r.r(e);var n=r(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("IoTDB支持:")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("一共六种数据类型。")]),t._v(" "),r("p",[t._v("其中"),r("strong",[t._v("FLOAT")]),t._v("与"),r("strong",[t._v("DOUBLE")]),t._v("类型的序列，如果编码方式采用"),r("router-link",{attrs:{to:"./../2-Concept/3-Encoding.html"}},[t._v("RLE")]),t._v("或"),r("router-link",{attrs:{to:"./../2-Concept/3-Encoding.html"}},[t._v("TS_2DIFF")]),t._v("可以指定MAX_POINT_NUMBER，该项为浮点数的小数点后位数，具体指定方式请参见本文"),r("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("第5.4节")]),t._v("，若不指定则系统会根据配置文件"),r("code",[t._v("tsfile-format.properties")]),t._v("文件中的"),r("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("float_precision项")]),t._v("配置。")],1),t._v(" "),r("p",[t._v("当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分不支持布尔类型的编码：")]),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[this._v("#")]),this._v(" 数据类型")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("BOOLEAN（布尔值）")]),t._v(" "),r("li",[t._v("INT32（整型）")]),t._v(" "),r("li",[t._v("INT64（长整型）")]),t._v(" "),r("li",[t._v("FLOAT（单精度浮点数）")]),t._v(" "),r("li",[t._v("DOUBLE（双精度浮点数）")]),t._v(" "),r("li",[t._v("TEXT（字符串）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])}],!1,null,null,null);e.default=s.exports}}]);