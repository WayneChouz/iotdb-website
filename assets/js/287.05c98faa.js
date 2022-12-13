(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{689:function(e,t,n){"use strict";n.r(t);var i=n(19),a=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",[e._v("To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports the following encoding methods for different data types:")]),e._v(" "),t("ul",[t("li",[e._v("PLAIN")])]),e._v(" "),t("p",[e._v("PLAIN encoding, the default encoding mode, i.e, no encoding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.")]),e._v(" "),t("ul",[t("li",[e._v("TS_2DIFF")])]),e._v(" "),t("p",[e._v("Second-order differential encoding is more suitable for encoding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.")]),e._v(" "),t("ul",[t("li",[e._v("RLE")])]),e._v(" "),t("p",[e._v("Run-length encoding is suitable for storing sequence with continuous integer values, and is not recommended for sequence data with most of the time different values.")]),e._v(" "),t("p",[e._v("Run-length encoding can also be used to encode floating-point numbers, while it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER) when creating time series. It is more suitable to store sequence data where floating-point values appear continuously, monotonously increasing or decreasing, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.")]),e._v(" "),t("blockquote",[t("p",[e._v("TS_2DIFF and RLE have precision limit for data type of float and double. By default, two decimal places are reserved. GORILLA is recommended.")])]),e._v(" "),t("ul",[t("li",[e._v("GORILLA")])]),e._v(" "),t("p",[e._v("GORILLA encoding is lossless. It is more suitable for numerical sequence with similar values and is not recommended for sequence data with large fluctuations.")]),e._v(" "),t("p",[e._v("Currently, there are two versions of GORILLA encoding implementation, it is recommended to use "),t("code",[e._v("GORILLA")]),e._v(" instead of "),t("code",[e._v("GORILLA_V1")]),e._v(" (deprecated).")]),e._v(" "),t("p",[e._v("Usage restrictions: When using GORILLA to encode INT32 data, you need to ensure that there is no data point with the value "),t("code",[e._v("Integer.MIN_VALUE")]),e._v(" in the sequence. When using GORILLA to encode INT64 data, you need to ensure that there is no data point with the value "),t("code",[e._v("Long.MIN_VALUE")]),e._v(" in the sequence.")]),e._v(" "),t("h3",{attrs:{id:"correspondence-between-data-type-and-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correspondence-between-data-type-and-encoding"}},[e._v("#")]),e._v(" Correspondence between data type and encoding")]),e._v(" "),t("p",[e._v("The four encodings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly. The correspondence between the data type and its supported encodings is summarized in the Table below.")]),e._v(" "),t("center",[e._v(" **The correspondence between the data type and its supported encodings**\n"),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("Data Type")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("Supported Encoding")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("BOOLEAN")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("INT32")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("INT64")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("FLOAT")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("DOUBLE")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("TEXT")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("PLAIN")])])])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);