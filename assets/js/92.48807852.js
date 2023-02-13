(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{498:function(a,s,e){"use strict";e.r(s);var t=e(19),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"database-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-management"}},[a._v("#")]),a._v(" Database Management")]),a._v(" "),s("h2",{attrs:{id:"create-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-database"}},[a._v("#")]),a._v(" Create Database")]),a._v(" "),s("p",[a._v("According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("IoTDB > create database root.ln\nIoTDB > create database root.sgcc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("We can thus create two databases using the above two SQL statements.")]),a._v(" "),s("p",[a._v("It is worth noting that when the path itself or the parent/child layer of the path is already created as database, the path is then not allowed to be created as database. For example, it is not feasible to create "),s("code",[a._v("root.ln.wf01")]),a._v(" as database when two databases "),s("code",[a._v("root.ln")]),a._v(" and "),s("code",[a._v("root.sgcc")]),a._v(" exist. The system gives the corresponding error prompt as shown below:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("IoTDB> CREATE DATABASE root.ln.wf01\nMsg: 300: root.ln has already been created as database.\nIoTDB> create database root.ln.wf01\nMsg: 300: root.ln has already been created as database.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("The LayerName of database can only be characters, numbers, underscores. If you want to set it to pure numbers or contain other characters, you need to enclose the database name with backticks (``).")]),a._v(" "),s("p",[a._v("Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it's not allowed to create databases "),s("code",[a._v("root.ln")]),a._v(" and "),s("code",[a._v("root.LN")]),a._v(" at the same time.")]),a._v(" "),s("h2",{attrs:{id:"show-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-databases"}},[a._v("#")]),a._v(" Show Databases")]),a._v(" "),s("p",[a._v("After creating the database, we can use the "),s("RouterLink",{attrs:{to:"/UserGuide/Master/Reference/SQL-Reference.html"}},[a._v("SHOW DATABASES")]),a._v(" statement and "),s("RouterLink",{attrs:{to:"/UserGuide/Master/Reference/SQL-Reference.html"}},[a._v("SHOW DATABASES <PathPattern>")]),a._v(" to view the databases. The SQL statements are as follows:")],1),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("IoTDB> SHOW DATABASES\nIoTDB> SHOW DATABASES root.**\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("The result is as follows:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-------------+----+-------------------------+-----------------------+-----------------------+\n|database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|\n+-------------+----+-------------------------+-----------------------+-----------------------+\n|    root.sgcc|null|                        2|                      2|                 604800|\n|      root.ln|null|                        2|                      2|                 604800|\n+-------------+----+-------------------------+-----------------------+-----------------------+\nTotal line number = 2\nIt costs 0.060s\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"delete-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-database"}},[a._v("#")]),a._v(" Delete Database")]),a._v(" "),s("p",[a._v("User can use the "),s("code",[a._v("DELETE DATABASE <PathPattern>")]),a._v(" statement to delete all databases matching the pathPattern. Please note the data in the database will also be deleted.")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("IoTDB > DELETE DATABASE root.ln\nIoTDB > DELETE DATABASE root.sgcc\n// delete all data, all timeseries and all databases\nIoTDB > DELETE DATABASE root.**\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"count-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-databases"}},[a._v("#")]),a._v(" Count Databases")]),a._v(" "),s("p",[a._v("User can use the "),s("code",[a._v("COUNT DATABASE <PathPattern>")]),a._v(" statement to count the number of databases. It is allowed to specify "),s("code",[a._v("PathPattern")]),a._v(" to count the number of databases matching the "),s("code",[a._v("PathPattern")]),a._v(".")]),a._v(" "),s("p",[a._v("SQL statement is as follows:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("IoTDB> count databases\nIoTDB> count databases root.*\nIoTDB> count databases root.sgcc.*\nIoTDB> count databases root.sgcc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("The result is as follows:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-------------+\n|     database|\n+-------------+\n|    root.sgcc|\n| root.turbine|\n|      root.ln|\n+-------------+\nTotal line number = 3\nIt costs 0.003s\n\n+-------------+\n|     database|\n+-------------+\n|            3|\n+-------------+\nTotal line number = 1\nIt costs 0.003s\n\n+-------------+\n|     database|\n+-------------+\n|            3|\n+-------------+\nTotal line number = 1\nIt costs 0.002s\n\n+-------------+\n|     database|\n+-------------+\n|            0|\n+-------------+\nTotal line number = 1\nIt costs 0.002s\n\n+-------------+\n|     database|\n+-------------+\n|            1|\n+-------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);