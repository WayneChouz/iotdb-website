(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1266:function(t,e,s){"use strict";s.r(e);var a=s(19),l=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[t._v("#")]),t._v(" 权限管理")]),t._v(" "),e("p",[t._v("IoTDB为用户提供了权限管理操作，从而为用户提供对于数据的权限管理功能，保障数据的安全。")]),t._v(" "),e("p",[t._v("我们将通过以下几个具体的例子为您示范基本的用户权限操作，详细的SQL语句及使用方式详情请参见本文"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/Data-Concept/Data-Model-and-Terminology.html"}},[t._v("数据模式与概念章节")]),t._v("。同时，在JAVA编程环境中，您可以使用"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/API/Programming-JDBC.html"}},[t._v("JDBC API")]),t._v("单条或批量执行权限管理类语句。")],1),t._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),e("h3",{attrs:{id:"用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[t._v("#")]),t._v(" 用户")]),t._v(" "),e("p",[t._v("用户即数据库的合法使用者。一个用户与一个唯一的用户名相对应，并且拥有密码作为身份验证的手段。一个人在使用数据库之前，必须先提供合法的（即存于数据库中的）用户名与密码，使得自己成为用户。")]),t._v(" "),e("h3",{attrs:{id:"权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),e("p",[t._v("数据库提供多种操作，并不是所有的用户都能执行所有操作。如果一个用户可以执行某项操作，则称该用户有执行该操作的权限。权限可分为数据管理权限（如对数据进行增删改查）以及权限管理权限（用户、角色的创建与删除，权限的赋予与撤销等）。数据管理权限往往需要一个路径来限定其生效范围，它的生效范围是以该路径对应的节点为根的一颗子树（具体请参考IoTDB的数据组织）。")]),t._v(" "),e("h3",{attrs:{id:"角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[t._v("#")]),t._v(" 角色")]),t._v(" "),e("p",[t._v("角色是若干权限的集合，并且有一个唯一的角色名作为标识符。用户通常和一个现实身份相对应（例如交通调度员），而一个现实身份可能对应着多个用户。这些具有相同现实身份的用户往往具有相同的一些权限。角色就是为了能对这样的权限进行统一的管理的抽象。")]),t._v(" "),e("h3",{attrs:{id:"默认用户及其具有的角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认用户及其具有的角色"}},[t._v("#")]),t._v(" 默认用户及其具有的角色")]),t._v(" "),e("p",[t._v("初始安装后的IoTDB中有一个默认用户：root，默认密码为root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除。")]),t._v(" "),e("h2",{attrs:{id:"权限操作示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限操作示例"}},[t._v("#")]),t._v(" 权限操作示例")]),t._v(" "),e("p",[t._v("根据本文中描述的"),e("a",{attrs:{href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("样例数据"),e("OutboundLink")],1),t._v("内容，IoTDB的样例数据可能同时属于ln, sgcc等不同发电集团，不同的发电集团不希望其他发电集团获取自己的数据库数据，因此我们需要将不同的数据在集团层进行权限隔离。")]),t._v(" "),e("h3",{attrs:{id:"创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[t._v("#")]),t._v(" 创建用户")]),t._v(" "),e("p",[t._v("我们可以为ln和sgcc集团创建两个用户角色，名为ln_write_user, sgcc_write_user，密码均为write_pwd。SQL语句为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("CREATE USER ln_write_user 'write_pwd'\nCREATE USER sgcc_write_user 'write_pwd'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("此时使用展示用户的SQL语句：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("LIST USER\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("我们可以看到这两个已经被创建的用户，结果如下：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> CREATE USER ln_write_user 'write_pwd'\nMsg: The statement is executed successfully.\nIoTDB> CREATE USER sgcc_write_user 'write_pwd'\nMsg: The statement is executed successfully.\nIoTDB> LIST USER\n+---------------+\n|           user|\n+---------------+\n|  ln_write_user|\n|           root|\n|sgcc_write_user|\n+---------------+\nTotal line number = 3\nIt costs 0.157s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h3",{attrs:{id:"赋予用户权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#赋予用户权限"}},[t._v("#")]),t._v(" 赋予用户权限")]),t._v(" "),e("p",[t._v("此时，虽然两个用户已经创建，但是他们不具有任何权限，因此他们并不能对数据库进行操作，例如我们使用ln_write_user用户对数据库中的数据进行写入，SQL语句为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("此时，系统不允许用户进行此操作，会提示错误：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)\nINSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)\nMsg: 602: No permissions for this operation INSERT\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("现在，我们分别赋予他们向对应存储组数据的写入权限，并再次尝试向对应的存储组进行数据写入。SQL语句为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GRANT USER ln_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.ln\nGRANT USER sgcc_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.sgcc\nINSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("执行状态如下所示：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> GRANT USER ln_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.ln\nMsg: The statement is executed successfully.\nIoTDB> GRANT USER sgcc_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.sgcc\nMsg: The statement is executed successfully.\nIoTDB> INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)\nMsg: The statement is executed successfully.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h2",{attrs:{id:"其他说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他说明"}},[t._v("#")]),t._v(" 其他说明")]),t._v(" "),e("h3",{attrs:{id:"用户、权限与角色的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户、权限与角色的关系"}},[t._v("#")]),t._v(" 用户、权限与角色的关系")]),t._v(" "),e("p",[t._v("角色是权限的集合，而权限和角色都是用户的一种属性。即一个角色可以拥有若干权限。一个用户可以拥有若干角色与权限（称为用户自身权限）。")]),t._v(" "),e("p",[t._v("目前在IoTDB中并不存在相互冲突的权限，因此一个用户真正具有的权限是用户自身权限与其所有的角色的权限的并集。即要判定用户是否能执行某一项操作，就要看用户自身权限或用户的角色的所有权限中是否有一条允许了该操作。用户自身权限与其角色权限，他的多个角色的权限之间可能存在相同的权限，但这并不会产生影响。")]),t._v(" "),e("p",[t._v("需要注意的是：如果一个用户自身有某种权限（对应操作A），而他的某个角色有相同的权限。那么如果仅从该用户撤销该权限无法达到禁止该用户执行操作A的目的，还需要从这个角色中也撤销对应的权限，或者从这个用户将该角色撤销。同样，如果仅从上述角色将权限撤销，也不能禁止该用户执行操作A。")]),t._v(" "),e("p",[t._v("同时，对角色的修改会立即反映到所有拥有该角色的用户上，例如对角色增加某种权限将立即使所有拥有该角色的用户都拥有对应权限，删除某种权限也将使对应用户失去该权限（除非用户本身有该权限）。")]),t._v(" "),e("h3",{attrs:{id:"系统所含权限列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统所含权限列表"}},[t._v("#")]),t._v(" 系统所含权限列表")]),t._v(" "),e("p",[e("strong",[t._v("系统所含权限列表")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("权限名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SET_STORAGE_GROUP")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建存储组。包含设置存储组的权限。路径相关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE_TIMESERIES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建时间序列。路径相关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("INSERT_TIMESERIES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("插入数据。路径相关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("READ_TIMESERIES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("查询数据。路径相关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE_TIMESERIES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除数据或时间序列。路径相关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE_USER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建用户。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE_USER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除用户。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MODIFY_PASSWORD")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("修改所有用户的密码。路径无关。(没有该权限者仍然能够修改自己的密码。)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("LIST_USER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有用户，列出某用户权限，列出某用户具有的角色三种操作的权限。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GRANT_USER_PRIVILEGE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("赋予用户权限。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("REVOKE_USER_PRIVILEGE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("撤销用户权限。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GRANT_USER_ROLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("赋予用户角色。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("REVOKE_USER_ROLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("撤销用户角色。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE_ROLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建角色。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE_ROLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除角色。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("LIST_ROLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("列出所有角色，列出某角色拥有的权限，列出拥有某角色的所有用户三种操作的权限。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GRANT_ROLE_PRIVILEGE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("赋予角色权限。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("REVOKE_ROLE_PRIVILEGE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("撤销角色权限。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE_FUNCTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("注册UDF。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DROP_FUNCTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("卸载UDF。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CREATE_TRIGGER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("创建触发器。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DROP_TRIGGER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("卸载触发器。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("START_TRIGGER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("启动触发器。路径无关")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("STOP_TRIGGER")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("停止触发器。路径无关")])])])]),t._v(" "),e("h3",{attrs:{id:"用户名限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户名限制"}},[t._v("#")]),t._v(" 用户名限制")]),t._v(" "),e("p",[t._v("IoTDB规定用户名的字符长度不小于4，其中用户名不能包含空格。")]),t._v(" "),e("h3",{attrs:{id:"密码限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#密码限制"}},[t._v("#")]),t._v(" 密码限制")]),t._v(" "),e("p",[t._v("IoTDB规定密码的字符长度不小于4，其中密码不能包含空格，密码采用MD5进行加密。")]),t._v(" "),e("h3",{attrs:{id:"角色名限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角色名限制"}},[t._v("#")]),t._v(" 角色名限制")]),t._v(" "),e("p",[t._v("IoTDB规定角色名的字符长度不小于4，其中角色名不能包含空格。")])])}),[],!1,null,null,null);e.default=l.exports}}]);