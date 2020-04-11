(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1089:function(e,t,s){"use strict";s.r(t);var a=s(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("Users can use "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("UPDATE statements")]),e._v(" to update data over a period of time in a specified timeseries. When updating data, users can select a timeseries to be updated (version 0.8.2 does not support multiple timeseries updates) and specify a time point or period to be updated (version 0.8.0 must have time filtering conditions).")],1),e._v(" "),s("p",[e._v("In a JAVA programming environment, you can use the "),s("router-link",{attrs:{to:"./../6-JDBC API/1-JDBC API.html"}},[e._v("Java JDBC")]),e._v(" to execute single or batch UPDATE statements.")],1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("Taking the power supply status of ln group wf02 plant wt02 device as an example, there exists such a usage scenario:")]),e._v(" "),s("p",[e._v("After data access and analysis, it is found that the power supply status from 2017-11-01 15:54:00 to 2017-11-01 16:00:00 is true, but the actual power supply status is abnormal. You need to update the status to false during this period. The SQL statement for this operation is:")]),e._v(" "),e._m(3),s("p",[e._v("It should be noted that when the updated data type does not match the actual data type, IoTDB will give the corresponding error prompt as shown below:")]),e._v(" "),e._m(4),s("p",[e._v("When the updated path does not exist, IoTDB will give the corresponding error prompt as shown below:")]),e._v(" "),e._m(5),e._m(6),e._v(" "),s("p",[e._v("Users can delete data that meet the deletion condition in the specified timeseries by using the "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("DELETE statement")]),e._v(". When deleting data, users can select one or more timeseries paths, prefix paths, or paths with star  to delete data before a certain time (version 0.8.2 does not support the deletion of data within a closed time interval).")],1),e._v(" "),s("p",[e._v("In a JAVA programming environment, you can use the "),s("router-link",{attrs:{to:"./../6-JDBC API/1-JDBC API.html"}},[e._v("Java JDBC")]),e._v(" to execute single or batch UPDATE statements.")],1),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("Taking ln Group as an example, there exists such a usage scenario:")]),e._v(" "),s("p",[e._v("The wf02 plant's wt02 device has many segments of errors in its power supply status before 2017-11-01 16:26:00, and the data cannot be analyzed correctly. The erroneous data affected the correlation analysis with other devices. At this point, the data before this time point needs to be deleted. The SQL statement for this operation is")]),e._v(" "),e._m(8),e._m(9),e._v(" "),s("p",[e._v("When both the power supply status and hardware version of the ln group wf02 plant wt02 device before 2017-11-01 16:26:00 need to be deleted, "),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology.html"}},[e._v("the prefix path with broader meaning or the path with star")]),e._v(" can be used to delete the data. The SQL statement for this operation is:")],1),e._v(" "),e._m(10),s("p",[e._v("or")]),e._v(" "),e._m(11),s("p",[e._v("It should be noted that when the deleted path does not exist, IoTDB will give the corresponding error prompt as shown below:")]),e._v(" "),e._m(12)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"data-maintenance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-maintenance"}},[this._v("#")]),this._v(" Data Maintenance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-update"}},[this._v("#")]),this._v(" Data Update")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"update-single-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-single-timeseries"}},[this._v("#")]),this._v(" Update Single Timeseries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("update root.ln.wf02 SET wt02.status = false where time <=2017-11-01T16:00:00 and time >= 2017-11-01T15:54:00\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> update root.ln.wf02 set wt02.status = 1205 where time < now()\nerror: The BOOLEAN data type should be true/TRUE or false/FALSE\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> update root.ln.wf02 set wt02.sta = false where time < now()\nMsg: do not select any existing series\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-deletion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-deletion"}},[this._v("#")]),this._v(" Data Deletion")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-single-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-single-timeseries"}},[this._v("#")]),this._v(" Delete Single Timeseries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("delete from root.ln.wf02.wt02.status where time<=2017-11-01T16:26:00;\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-multiple-timeseries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-multiple-timeseries"}},[this._v("#")]),this._v(" Delete Multiple Timeseries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("delete from root.ln.wf02.wt02 where time <= 2017-11-01T16:26:00;\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("delete from root.ln.wf02.wt02.* where time <= 2017-11-01T16:26:00;\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> delete from root.ln.wf03.wt02.status where time < now()\nMsg: TimeSeries does not exist and its data cannot be deleted\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])}],!1,null,null,null);t.default=i.exports}}]);