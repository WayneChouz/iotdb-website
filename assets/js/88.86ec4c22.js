(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{711:function(e,t,s){"use strict";s.r(t);var a=s(83),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"performance-tracing-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-tracing-tool"}},[e._v("#")]),e._v(" Performance Tracing Tool")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: TRACING ON/OFF hasn't been supported yet.")])]),e._v(" "),s("p",[e._v("IoTDB supports the use of the "),s("code",[e._v("TRACING")]),e._v(" clause to enable performance tracing of executed statements. Users can use the performance tracing tool to analyze potential performance problems in some statements.")]),e._v(" "),s("p",[e._v("Traceable statement: "),s("code",[e._v("SELECT")]),e._v(" only.")]),e._v(" "),s("p",[e._v("The current performance analysis includes the following contents:")]),e._v(" "),s("ol",[s("li",[e._v("The elapsed time of each stage of the execution process.")]),e._v(" "),s("li",[e._v("Statistics related to performance analysis. For query statements, it includes the number of time series queried, the number of Tsfile files accessed, the total number of chunks to be scanned, and the average number of data points contained in the chunk, the total number of pages read, and the number of overlapped pages.")])]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("For example, execute "),s("code",[e._v("tracing select * from root")]),e._v(", will display the following contents:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Tracing Activties:\n+------------------------------------------------------+------------+\n|                                              Activity|Elapsed Time|\n+------------------------------------------------------+------------+\n|Start to execute statement: tracing select * from root|           0|\n|                            Parse SQL to physical plan|           4|\n|                              Create and cache dataset|          16|\n|                              * Num of series paths: 3|            |\n|                       * Num of sequence files read: 2|            |\n|                     * Num of unsequence files read: 1|            |\n|        * Num of sequence chunks: 6, avg points: 100.0|            |\n|      * Num of unsequence chunks: 3, avg points: 100.0|            |\n|         * Num of Pages: 9, overlapped pages: 0 (0.0%)|            |\n|                                      Request complete|          20|\n+------------------------------------------------------+------------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);