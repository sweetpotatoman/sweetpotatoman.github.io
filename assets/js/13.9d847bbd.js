(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{351:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("gacp: git-add-commit-push")])]),s._v(" "),a("h3",{attrs:{id:"一个简单的-gacp-mac-终端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的-gacp-mac-终端"}},[s._v("#")]),s._v(" 一个简单的 gacp "),a("code",[s._v("(Mac 终端)")])]),s._v(" "),a("ul",[a("li",[s._v("在 Public 目录下创建一个 gacp.sh 脚本并添加以下内容")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -x  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output executed commands")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Make script fail as soon as one command fails")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" MESSAGE\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MESSAGE")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])])]),a("ul",[a("li",[s._v("修改 .zshrc 文件，添加 alias")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gacp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sh ~/Public/gacp.sh'")]),s._v("\n")])])]),a("ul",[a("li",[s._v("在某个项目下使用 gacp")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("~/Work"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" gacp\n+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n+ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" MESSAGE\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" gacp  // 输入你这次的 commit 信息\n+ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n+ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test gacp'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master e31f913"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" gacp\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n+ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\nEnumerating objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(", done.\nCounting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nDelta compression using up to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" threads\nCompressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("283")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("283.00")]),s._v(" KiB/s, done.\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nremote: Resolving deltas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", completed with "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" objects.\nTo github.com:sweetpotatoman/Work.git\n   8f6a5ca"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("e31f913  master -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master\n")])])]),a("h3",{attrs:{id:"更强的-gacp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更强的-gacp"}},[s._v("#")]),s._v(" 更强的 gacp")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vivaxy/gacp",target:"_blank",rel:"noopener noreferrer"}},[s._v("gacp"),a("OutboundLink")],1),a("br"),s._v(" "),a("img",{attrs:{src:"/image/gacp.gif",alt:"gacp-gif"}})])])])}),[],!1,null,null,null);t.default=e.exports}}]);