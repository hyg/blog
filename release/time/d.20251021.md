# 2025.10.21.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~17:29	ego: [细化ego对task的资源分配](#20251021160000)
- 19:30~20:29	check: [零散笔记](#20251021193000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1492 | 12038 | 10065 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 90 | 2440 | 1485 |
| infra | 2000 | 30 | 1970 | 480 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1222 | 778 | 4425 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：XSTATE https://xstate.js.org/
  - learn的第3号事项：TLA+
  - learn的第4号事项：Alloy
  - learn的第5号事项：VDM (Vienna Development Method)

- 60分钟时间片：
  - ego的第1号事项：细化ego对task的资源分配
  - js的第1号事项：LangChain.js
  - learn的第1号事项：按petri网定义设计几个实例
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.21.[细化ego对task的资源分配]任务&body=日期: 2025.10.21.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251021.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251021160000"></a>
## 16:00 ~ 17:29
## ego: [细化ego对task的资源分配]

- AI：针对在有限资源和时间内，在开放、复杂、持续变化的外部环境下，动态分配内部任务（包括对外提出、签订、修订契约的任务）的需求，介绍一下 现有的技术方案 ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点、nodejs+windows技术栈的相关工具集。分析社区和团队、使用人群及其活跃度，预判今后的发展。
- glm
	- 方法：
		- GTD (Getting Things Done)
		- PARA 方法
		- 个人看板
	- 工具：
		- Notion：极其灵活，可以集笔记、数据库、看板、日历于一体。
		- ClickUp：功能更偏向项目管理，但同样具备文档、列表、看板等多种视图。
		- Obsidian：基于本地Markdown文件的知识管理工具，核心是“双向链接”。
		- Logseq：与Obsidian类似，但以大纲为组织形式。
		- Todoist：以其简洁的自然语言输入和跨平台同步著称。
	- DIY tool
		- Obsidian, Notion (桌面端), VS Code, Slack, Discord 等大量现代桌面应用都使用 Electron 框架构建，而Electron的核心就是 Node.js。
		- https://www.npmjs.com/package/yargs
		- API自动化：大多数工具（Notion, Todoist, Trello）都有REST API。你可以用 axios 或 node-fetch 编写Node.js脚本
		- 本地数据看板：使用 express.js 搭建一个简单的本地Web服务器，读取你的任务数据（JSON/SQLite），并用前端框架（如Vue, React）渲染成一个个人专属的实时任务仪表盘。
- kimi
	- 间歇式日记 + 四象限双循环： 用「晨间 3 行目标-午间 1 行修订-晚间 5 行复盘」把外部契约变化压缩到 24h 内闭环；四象限只做「紧急-重要」快速筛选，不陷入过度分类。
	- 看板 + WIP 限额 +「契约池」泳道：	
		- 理念：把「对外合同 / 需求」单拆一条泳道，设置 WIP=1，强制「新契约必须先修订/关闭旧契约」；个人版 WIP 建议 3-5。
		- 工具：Trello/板栗看板 + Node-RED 自动化
	- GTD-CoDe 混合模型（适合契约多、上下文切换频繁者）
		- 理念：把「收件箱-厘清-组织-回顾」四步拆成 24h 微迭代；「组织」阶段用「Context-Outcome-Deadline」三字段给每条任务绑定契约上下文。
		- 工具：TickTick「摘要」字段 + 标签 #契约名；或自托管 Trilium Notes。
| 名称                      | 场景        | 技术栈                   | 契约友好度 | 优缺点                              | 社区活跃度                         |
| ----------------------- | --------- | --------------------- | ----- | -------------------------------- | ----------------------------- |
| Taskcafe                | 个人/小团队看板  | Node+React+PostgreSQL | ★★★☆  | 优点：轻量、可二次开发；缺：无自动化、英文界面          | GitHub 3.1k star，最近提交 2025-08 |
| Focalboard (Mattermost) | 看板+日历     | Node+Go(后端)+React     | ★★★☆  | 优点：插件市场、Win 安装包；缺：占用内存高          | 8.8k star，官方 Discord 日活 500+  |
| Node-RED                | 自动化流      | 纯 Node，原生 Win 安装      | ★★★★★ | 优点：拖拽式集成 Trello/邮件/钉钉；缺：前端 UI 简陋 | 14k star，npm 周下载 60k          |
| Trilium Notes           | 知识+任务     | Node+SQLite，单文件绿色版    | ★★★★  | 优点：离线、脚本 API；缺：界面老旧              | 6.2k star，中文 QQ 群 2000+       |
| Hammerflow (国人在研)       | 契约看板+签署提醒 | Node+Vue+SQLite       | ★★★★☆ | 优点：自带「合同到期提醒」插件；缺：刚开源，文档少        | Gitee 1.2k star，周 Issue 30+   |

- node-red： https://www.node-red.dev/zh-CN/docs/
	- 低代码的流程工具。适合非IT人员。
- 已有方法都比较泛泛，需要自定义。
- 继续斟酌：每个machine部署到engine之后作为一种entity，具有平等而完整的接口。可以选择一个接口签订protocol之后，通过互动获得经验。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.21.[无名任务]任务&body=日期: 2025.10.21.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251021.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251021193000"></a>
## 19:30 ~ 20:29
## check: [零散笔记]

- 营养成分MCP：
	- USDA Nutrition Mcp Server 
		- https://mcp.so/zh/server/usda-nutrition-mcp-server
		- https://lobehub.com/zh/mcp/zen-apps-mcp-nutrition-tools
	- Openfoodfacts MCP https://mcp.aibase.com/zh/server/1917153560414056449
	- Nutritionix MCP Server https://github.com/MCP-Forge/nutritionix-mcp-server
		- 需要ID、Key  developer.nutritionix.com
