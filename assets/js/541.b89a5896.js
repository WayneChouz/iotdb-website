(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{945:function(e,s,i){"use strict";i.r(s);var t=i(19),l=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"tsfile-split-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-split-tool"}},[e._v("#")]),e._v(" TsFile Split Tool")]),e._v(" "),s("p",[e._v("TsFile split tool is used to split a TsFile into multiple TsFiles. The location is tools/tsfile/split-tsfile-tool")]),e._v(" "),s("p",[e._v("How to use:")]),e._v(" "),s("p",[e._v("For Windows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\\split-tsfile-tool.bat <path of your TsFile> (-level <inner space compaction num in new file name, default is 10>) (-size <size of new files in byte, default is 1048576000>)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("For Linux or MacOs:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./split-tsfile-tool.sh <path of your TsFile> (-level <inner space compaction num in new file name, default is 10>) (-size <size of new files in byte, default is 1048576000>)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("blockquote",[s("p",[e._v("For example, if the new files size is 100MB, and the compaction num is 6, the command is "),s("code",[e._v("./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000")]),e._v(" (Linux or MacOs)")])]),e._v(" "),s("p",[e._v("Here are some more tips:")]),e._v(" "),s("ol",[s("li",[e._v("TsFile split tool is for one closed TsFile, need to ensure this TsFile is closed. If the TsFile is in IoTDB, a "),s("code",[e._v(".resource")]),e._v(" file represent it is closed.")]),e._v(" "),s("li",[e._v("When doing split, make sure the TsFile is not in a running IoTDB.")]),e._v(" "),s("li",[e._v("Currently, we do not resolve the corresponding mods file, if you wish to put the new files into the IoTDB data dir and be loaded by restarting, you need to copy the related mods file(if exist) and rename them, make sure each new file has one mods.")]),e._v(" "),s("li",[e._v("This tools do not support aligned timeseries currently.")])])])}),[],!1,null,null,null);s.default=l.exports}}]);