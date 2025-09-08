# 2025.09.08.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版2(2c)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250908190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9496 | 4034 | 9645 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 195 |
| xuemen | 1000 | 150 | 850 | 540 |
| raw | 1000 | 250 | 750 | 210 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 796 | 204 | 1800 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第4号事项：LegalRuleML（Legal Rule Markup Language）

- 60分钟时间片：
  - raw的第1号事项：新版本food预算决算
  - js的第1号事项：nextcloud
  - learn的第1号事项：CometAPI
  - js的第2号事项：IM bot

- 90分钟时间片：
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。
  - xuemen的第2号事项：mail server
  - raw的第2号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.08.[无名任务]任务&body=日期: 2025.09.08.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250908.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250908190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- memory
| 功能/工具          | Qwen Code                        | Claude Code           | Gemini CLI            | OpenAI Codex CLI |
| -------------- | -------------------------------- | --------------------- | --------------------- | ---------------- |
| **项目级记忆文件**    | `qwen.md`（项目根目录）                 | `.CLAUDE.md`（项目根目录）   | `GEMINI.md`（项目根目录）    | ❌ 无原生支持          |
| **用户级记忆文件**    | `~/.qwen/memory/` 或 `~/.qwen.md` | `~/.claude/CLAUDE.md` | `~/.gemini/GEMINI.md` | ❌ 无原生支持          |
| **命令扩展/自定义脚本** | `~/.qwen/commands/`（可自定义命令）      | ❌ 无本地命令扩展机制           | ❌ 无本地命令扩展机制           | ❌ 无本地命令扩展机制      |
| **编辑记忆方式**     | `/memory` 命令打开编辑器                | `/memory` 命令打开编辑器     | `/memory add` 或手动编辑   | ❌ 无              |
| **记忆内容支持**     | 项目规范、用户偏好、命令别名等                  | 项目规范、用户偏好、编码风格等       | 项目规范、用户偏好、搜索记录等       | ❌ 无              |
| **是否支持团队协作**   | ✅（通过项目级记忆文件共享）                   | ✅（通过 `.CLAUDE.md` 共享） | ✅（通过 `GEMINI.md` 共享）  | ❌ 无              |
- 在qwen.md中实现了提取条款和识别顶级条款两个指令。
	- 提取条款时会把顶级条款也识别并写入文件。识别顶级条款则没有重新提取条款，而是去读取规章yaml文件。
	- 理解上还有些偏差，八成结果可以使用。

- 使用魔塔社区modelscope的Anthropic API兼容接口设置claude code，报错：
	- API Error: 400 {"detail":"Error code: 400 - {'error': {'code': 'invalid_parameter_error', 'message': '<400> InternalError.Algo.InvalidParameter: The tool
     call is not supported', 'param': None, 'type': 'invalid_request_error'}, 'request_id': '852be6bd-3b4c-44fc-8ab0-1eb501830e9f'}"}
