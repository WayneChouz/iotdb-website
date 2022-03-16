(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{698:function(e,t,s){"use strict";s.r(t);var a=s(83),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"tsfileselfcheck-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfileselfcheck-tool"}},[e._v("#")]),e._v(" TsFileSelfCheck Tool")]),e._v(" "),s("p",[e._v("IoTDB Server provides the TsFile self check tool. At present, the tool can check the basic format of the TsFile file, the correctness of TimeseriesMetadata, and the correctness and consistency of the Statistics stored in each part of the TsFile.")]),e._v(" "),s("h2",{attrs:{id:"use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" Use")]),e._v(" "),s("p",[e._v("Step 1：Create an object instance of TsFileSelfCheckTool class.")]),e._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TsFileSelfCheckTool")]),e._v(" tool "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TsFileSelfCheckTool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Step 2：Call the check method of the self check tool. The first parameter path is the path of the TsFile to be checked. The second parameter is whether to check only the Magic String and Version Number at the beginning and end of TsFile.")]),e._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[e._v("tool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("There are four return values of the check method.")]),e._v(" "),s("li",[e._v("The return value is 0, which means that the TsFile self check is error-free.")]),e._v(" "),s("li",[e._v("The return value is -1, which means that TsFile has inconsistencies in Statistics. There will be two specific exceptions, one is that the Statistics of TimeSeriesMetadata is inconsistent with the Statistics of the aggregated statistics of ChunkMetadata. The other is that the Statistics of ChunkMetadata is inconsistent with the Statistics of Page aggregation statistics in the Chunk indexed by it.")]),e._v(" "),s("li",[e._v("The return value is -2, which means that the TsFile version is not compatible.")]),e._v(" "),s("li",[e._v("The return value is -3, which means that the TsFile file does not exist in the given path.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);