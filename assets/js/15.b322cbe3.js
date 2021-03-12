(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{353:function(s,t,a){"use strict";a.r(t);var e=a(9),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("Mosh 最大的特点是基于 UDP 方式传输，一个支持漫游的远程终端程序")])]),s._v(" "),a("h3",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://mosh.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mosh"),a("OutboundLink")],1),s._v("（mobile shell）是一款基于 UDP 的远程终端软件，包含客户端和服务器两部分，用于代替 SSH。因为 mosh 基于 UDP，所以它可以提供不间断的连接，非常适用于在网络状况不好或时延较大的网络中进行远程终端访问。")]),s._v(" "),a("p",[a("strong",[s._v("mosh 支持方式")])]),s._v(" "),a("ul",[a("li",[s._v("创建一个临时的 Key 供客户端一次性连接，退出后失效")]),s._v(" "),a("li",[s._v("通过 SSH 的配置进行认证，但数据传输本身还是自身的 UDP 方式")])]),s._v(" "),a("h3",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),a("p",[s._v("本文使用 ssh 的配置进行连接目标服务器")]),s._v(" "),a("ul",[a("li",[s._v("服务器系统：ubuntu 18.04 TLS")]),s._v(" "),a("li",[s._v("客户端系统：mac 10.14.5")])]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("客户端和服务器上都需要安装 mosh")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("ubuntu下安装 mosh 服务器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mosh\n")])])])]),s._v(" "),a("li",[a("p",[s._v("mac 下安装 mosh 服务器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mosh\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"端口开放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口开放"}},[s._v("#")]),s._v(" 端口开放")]),s._v(" "),a("p",[s._v("开放 "),a("code",[s._v("60000-61000")]),s._v(" 的 UDP 端口，或者关闭服务器防火墙服务"),a("br"),s._v(" "),a("strong",[s._v("(如果是云服务器，调整安全组策略即可)")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("iptables")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -I INPUT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -p udp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),s._v(":61000 -j ACCEPT\n")])])])]),s._v(" "),a("li",[a("p",[s._v("ufw")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60000")]),s._v(":61000/udp\n")])])])]),s._v(" "),a("li",[a("p",[s._v("firewalld")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先确定活动区域")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@one ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# firewall-cmd --get-active-zones")]),s._v("\npublic\n  interfaces: eth0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑防火墙规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@one ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# firewall-cmd --permanent --zone=public   --add-port=60000-61000/udp")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让防火墙生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@one ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# firewall-cmd --reload")]),s._v("\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),a("p",[s._v("连接 "),a("code",[s._v("fat1")]),s._v(" 服务器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac 终端")]),s._v("\n~ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mosh fat1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接至 fat1 中")]),s._v("\nubuntu@ip-10-0-11-99:~$\n")])])]),a("p",[s._v("可以看出 "),a("code",[s._v("fat1")]),s._v(" 中有 mosh 进程且占用默认分配的 60001 端口")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("root@ip-10-0-11-99:/home/ubuntu"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef|grep mosh")]),s._v("\nubuntu   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25096")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 02:47 ?        00:00:00 mosh-server new -c   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" -s -l "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh_CN.UTF-8\nroot     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25787")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10928")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 02:49 pts/0    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto   mosh\n\nroot@ip-10-0-11-99:/home/ubuntu"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat -anp|grep 25096")]),s._v("\nudp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".11.99:60001        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*                           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25096")]),s._v("/mosh-server\n")])])]),a("h3",{attrs:{id:"link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[s._v("#")]),s._v(" link")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mobile-shell/mosh",target:"_blank",rel:"noopener noreferrer"}},[s._v("mosh-github"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://git.wokoworks.com:4430/Devops/Operation/src/master/tips/proxy/mac_ssh_proxy.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("mac ssh 使用 key 登录服务器"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);