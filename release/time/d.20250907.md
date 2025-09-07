# 2025.09.07.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	raw: [新版营养成分详情，允许多种营养成分。](#20250907160000)
- 19:00~19:59	check: [零散笔记](#20250907190000)

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
  - js的第1号事项：nextcloud
  - learn的第1号事项：CometAPI
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：IM bot

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.07.[新版营养成分详情，允许多种营养成分。]任务&body=日期: 2025.09.07.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250907.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250907160000"></a>
## 16:00 ~ 16:59
## raw: [新版营养成分详情，允许多种营养成分。]

- 现状是：手工修改raw.js中注释，在统计时顺便统计某种营养成分的详情。
- 需求是：可以同时统计多种营养成分详情。

### 升级方案

- Keyelement从string变量，升级为：
	- 一个string数组
	- 一个object数组，object是string:bool（营养成分：是否统计详情）。
- Keyelement控制统计 vs 显示
- 全部统计，控制显示。
- Detailtable从array[object]，升级为string:array[object]
	- string是营养成分名称
	- object是营养成分摄入项：string:object
		- object是摄入细节：食材名称、数量、含量、累计、累计nrv，全部都是string。
- 测试ok。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.07.[无名任务]任务&body=日期: 2025.09.07.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250907.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250907190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- MCP server判断client的功能：
	- kimi: test.ts
	- deepseek: test.js
- stderr被重定向了，写入文件：mcp-server.log， 依次是cc、qwen-code、codex。
```
2025-09-07T13:21:39.301Z: 客户端能力: {"roots":{}}
2025-09-07T13:24:48.037Z: 客户端能力: {"roots":{}}
2025-09-07T13:25:43.677Z: params: {"protocolVersion":"2025-06-18","capabilities":{"roots":{}},"clientInfo":{"name":"claude-code","version":"1.0.89"}}
2025-09-07T13:25:43.678Z: 客户端能力: {"roots":{}}
2025-09-07T13:26:17.059Z: params: {"protocolVersion":"2025-06-18","capabilities":{"roots":{}},"clientInfo":{"name":"gemini-cli-mcp-client-PSMD","version":"0.0.1"}}
2025-09-07T13:26:17.060Z: 客户端能力: {"roots":{}}
2025-09-07T13:26:51.144Z: params: {"protocolVersion":"2025-06-18","capabilities":{"elicitation":{}},"clientInfo":{"name":"codex-mcp-client","title":"Codex","version":"0.29.0"}}
2025-09-07T13:26:51.146Z: 客户端能力: {"elicitation":{}}
```
