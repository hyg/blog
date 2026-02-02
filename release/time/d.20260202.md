# 2026.02.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	learn: [openclaw](#20260202074500)
- 19:00~19:59	check: [零散笔记](#20260202190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 735 | 12795 | 7815 |
| PSMD | 4000 | 90 | 3910 | 495 |
| ego | 2530 | 0 | 2530 | 1185 |
| infra | 2000 | 195 | 1805 | 90 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 195 | 805 | 150 |
| learn | 2000 | 195 | 1805 | 4425 |
| js | 1000 | 60 | 940 | 1470 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - learn的第2号事项：Common Logic (ISO/IEC 24707)
  - PSMD的第4号事项：整理闫岸家政能力讨论
  - js的第10号事项：passportjs

- 60分钟时间片：
  - raw的第1号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - ego的第3号事项：entry的按月归并
  - learn的第3号事项：lanceDB sample
  - learn的第4号事项：Farcaster

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - js的第1号事项：node.js

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第4号事项：新版ego, instance or model, any manifest
  - learn的第28号事项：Julia
  - learn的第42号事项：MCP in nodejs

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.02.[openclaw]任务&body=日期: 2026.02.02.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260202.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260202074500"></a>
## 07:45 ~ 10:59
## learn: [openclaw]

- curl -fsSL https://openclaw.ai/install.sh | bash
- openclaw plugins install @openclaw/nostr
	- npm pack failed: npm error code E404
	- npm error 404 Not Found - GET https://cdn.npmmirror.com/packages/%40openclaw/nostr/2026.1.29/nostr-2026.1.29.tgz
- openclaw plugins install @m1heng-clawd/feishu
	- cd /home/huangyg/.openclaw/extensions/feishu/src/
	- npm i @larksuiteoapi/node-sdk
		- openclaw plugins doctor
	- cd ~
	- openclaw config set channels.feishu.appId xxx
	- openclaw config set channels.feishu.appSecret yyy
	- openclaw config set channels.feishu.enabled true
	- openclaw config set channels.feishu.connectionMode websocket
	- openclaw config set channels.feishu.dmPolicy pairing
	- openclaw config set channels.feishu.groupPolicy allowlist
	- openclaw config set channels.feishu.requireMention true
	- openclaw gateway restart
	- .openclaw\openclaw.json中gateway的bind初始值为loopback。改为lan。（有效的值是："auto"、"lan"、"loopback"、"custom"、"tailnet"）
		- 应该不改也可以。别的机器可以用ssh转：ssh -N -L 18789:127.0.0.1:18789 huangyg@192.168.3.69
- https://open.feishu.cn
	- 创建应用
	- 添加应用能力：机器人
	- 增加权限：
		- 搜索"im:"出来的几十项都选择授权。
		- 可以根据应用需要再增加一些其它的。
```
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "drive:drive:readonly",
      "im:app_feed_card:write",
      "im:biz_entity_tag_relation:read",
      "im:biz_entity_tag_relation:write",
      "im:chat",
      "im:chat.access_event.bot_p2p_chat:read",
      "im:chat.announcement:read",
      "im:chat.announcement:write_only",
      "im:chat.chat_pins:read",
      "im:chat.chat_pins:write_only",
      "im:chat.collab_plugins:read",
      "im:chat.collab_plugins:write_only",
      "im:chat.managers:write_only",
      "im:chat.members:bot_access",
      "im:chat.members:read",
      "im:chat.members:write_only",
      "im:chat.menu_tree:read",
      "im:chat.menu_tree:write_only",
      "im:chat.moderation:read",
      "im:chat.tabs:read",
      "im:chat.tabs:write_only",
      "im:chat.top_notice:write_only",
      "im:chat.widgets:read",
      "im:chat.widgets:write_only",
      "im:chat:create",
      "im:chat:delete",
      "im:chat:moderation:write_only",
      "im:chat:operate_as_owner",
      "im:chat:read",
      "im:chat:readonly",
      "im:chat:update",
      "im:datasync.feed_card.time_sensitive:write",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message.urgent",
      "im:message.urgent.status:write",
      "im:message.urgent:phone",
      "im:message.urgent:sms",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_depts",
      "im:message:send_multi_users",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "im:tag:read",
      "im:tag:write",
      "im:url_preview.update",
      "im:user_agent:read"
    ],
    "user": []
  }
}
```
	- 在安装openclaw的机器上：事件与回调-长连接，添加事件：im.message.receive_v1
		- 在其它机器上完成这步，最后也可以用。
	- nano ~/.bashrc
		- sed -i '/^\[plugins\]/d' $_temp_completion 改为 sed -i '/\[plugins\]/d' $_temp_completion
		- 去掉了开头的 ^ 符号。 
			- ^\[plugins\] 的意思是“匹配以 [plugins] 开头的行”。
		    - \[plugins\] 的意思是“匹配包含 [plugins] 的行”。这样无论它前面有什么内容，都能被找到并删除。
		               
```
# OpenClaw Completion
_temp_completion=$(mktemp)
openclaw completion --shell bash > $_temp_completion 2>&1
sed -i '/^\[plugins\]/d' $_temp_completion
source $_temp_completion
rm $_temp_completion
```
		- 也可以把sed和source两行合并改为：source <(grep -v '\[plugins\]' $_temp_completion)
		- 如果不使用 OpenClaw 的命令行补全功能，最简单的方法就是直接禁用这段代码。在每一行的前面加上 #，将它们变成注释。
	- nano ~/.zshrc
		- 同样修改。

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.02.[无名任务]任务&body=日期: 2026.02.02.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260202.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260202190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 将来分工应该是：
1. 模型可以实时、自主完成的功能：分发skill.md，不再需要人工编程。
2. 模型可以自主完成的功能，需要较长等待时间：人工写到需求文档，定期分批给AI生成代码、生成配套的skill.md。
3. 模型需要人工介入才能完成的工作。

- moltbook案例：
1. agent参与社区聊天的规范，统统不再需要开发，分发skill.md就行。
2. moltbook服务器，好像是自动生成的代码（包括skill.md？），但不是实时的，可能几个小时。
3. 这个案例里好像没有。
