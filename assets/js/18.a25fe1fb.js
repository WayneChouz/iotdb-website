(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{425:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"howto-submit-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#howto-submit-code"}},[e._v("#")]),e._v(" Howto Submit Code")]),e._v(" "),t("h2",{attrs:{id:"contribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[e._v("#")]),e._v(" Contribution")]),e._v(" "),t("p",[e._v("IoTDB invites developers to participate in the construction of open source projects")]),e._v(" "),t("p",[e._v("You can check "),t("a",{attrs:{href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),t("OutboundLink")],1),e._v(" and participate in the resolution, or make other improvements.")]),e._v(" "),t("p",[e._v("After submitting the pr, after passing the Travis-CI test and Sonar code quality inspection, at least one Committer agrees and the code does not conflict, you can merge")]),e._v(" "),t("h2",{attrs:{id:"pr-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pr-guide"}},[e._v("#")]),e._v(" PR guide")]),e._v(" "),t("p",[e._v("You can easily submit "),t("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request (PR)"),t("OutboundLink")],1),e._v(" on Github, the following will use this website project "),t("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("apache/iotdb"),t("OutboundLink")],1),e._v(" as an example (if it is another project, please replace the project name iotdb)")]),e._v(" "),t("h3",{attrs:{id:"fork-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fork-repository"}},[e._v("#")]),e._v(" Fork repository")]),e._v(" "),t("p",[e._v("Visit the apache/iotdb project’s "),t("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("github page"),t("OutboundLink")],1),e._v(", click "),t("code",[e._v("Fork")]),e._v(" button on the right left cornor.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/37333508/79351839-bd288900-7f6b-11ea-8d12-feb18c35adad.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"setup-local-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-local-repository"}},[e._v("#")]),e._v(" Setup local repository")]),e._v(" "),t("ul",[t("li",[e._v("Clone the source code to local machine:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/<your_github_name>/iotdb.git\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("Note: substitute <your_github_name> with your github username.")])]),e._v(" "),t("p",[e._v("After the clone is done, the origin remote will point to the default branch of the cloned repository.")]),e._v(" "),t("ul",[t("li",[e._v("add apache/iotdb as upstream remote:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd  iotdb\ngit remote add upstream https://github.com/apache/iotdb.git\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("Check the local repository’s remotes")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git remote -v\norigin https://github.com/<your_github_name>/iotdb.git (fetch)\norigin    https://github.com/<your_github_name>/iotdb.git(push)\nupstream  https://github.com/apache/iotdb.git (fetch)\nupstream  https://github.com/apache/iotdb.git (push)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("ul",[t("li",[e._v("Create a new branch to start working：(e.g. fix)")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git checkout -b fix\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("You can make code changes after creation.")]),e._v(" "),t("ul",[t("li",[e._v("Push the changes to a remote repository：(e.g. fix)")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('git commit -a -m "<you_commit_message>"\ngit push origin fix\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("For more on git usages, please visit"),t("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git tutorial"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"submission-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submission-considerations"}},[e._v("#")]),e._v(" Submission Considerations")]),e._v(" "),t("p",[e._v("When submitting code on git, you should pay attention to:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Keep the repository clean:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Do not submit binary files, so that the size of the repository only increases due to changes in the code.")])]),e._v(" "),t("li",[t("p",[e._v("Do not submit generated code.")])])])]),e._v(" "),t("li",[t("p",[e._v("The log should have meaning:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Title is jira numbered: [IOTDB-jira number]")])]),e._v(" "),t("li",[t("p",[e._v("Title is the issue number of GitHub: [ISSUE-issue number]")]),e._v(" "),t("ul",[t("li",[e._v("Write #XXXX in the content for association.")])])])])])]),e._v(" "),t("h3",{attrs:{id:"create-pr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-pr"}},[e._v("#")]),e._v(" Create PR")]),e._v(" "),t("p",[e._v("Goto your github page, find the apache/servicecomb-website project, swich to the branch you just pushed, click on "),t("code",[e._v("New pull request")]),e._v(" and then "),t("code",[e._v("Create pull request")]),e._v(", see the image below:If you solve the "),t("a",{attrs:{href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),t("OutboundLink")],1),e._v(", you need to add [IOTDB-xxx] at the beginning，see the image below:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/37333508/79414865-5f815480-7fde-11ea-800c-47c7dbad7648.png",alt:""}})]),e._v(" "),t("p",[e._v("Congrautulations, now you have succesfully submitted a PR. For more on PR, please read "),t("a",{attrs:{href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("collaborating-with-issues-and-pull-requests"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"resolve-conflicts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resolve-conflicts"}},[e._v("#")]),e._v(" Resolve conflicts")]),e._v(" "),t("p",[e._v("When a same piece of file is edited by multiple person simultaneously, conflicts can occur. It can be resolved as follow:")]),e._v(" "),t("p",[e._v("1：Switch to the master branch")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git checkout master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("2：Pull the upstream’s master branch")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git pull upstream master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("3：Switch back to the branch we are working on(e.g. fix)")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git checkout fix\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("4：Rebase the working branch onto the master branch")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git rebase -i master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("A list of commits will be listed on your text editor. Normally we can just save and exit. Git will now apply the commits one by one onto the master branch until it encounters a conflict. When this happens, the rebase process is paused. We need to resolve the conflicts, then execute")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git add .\ngit rebase --continue\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Repeat this process until all commits are successfully applied. And finally run")]),e._v(" "),t("p",[e._v("5：to push the resolved branch to remote origin")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git push -f origin fix\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The code of conduct is derived from"),t("a",{attrs:{href:"http://servicecomb.apache.org/developers/submit-codes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ServiceComb"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);