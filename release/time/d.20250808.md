# 2025.08.08.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	learn: [Agent Protocol https://agentprotocol.ai/](#20250808140000)
- 14:30~14:59	learn: [claude code + kimi K2 @ bailian](#20250808143000)
- 16:00~16:59	infra: [动态菜单设计。](#20250808160000)
- 19:00~19:59	check: [零散笔记](#20250808190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8696 | 4834 | 8550 |
| PSMD | 4000 | 1670 | 2330 | 1170 |
| ego | 2530 | 1350 | 1180 | 1425 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4475 | -2475 | 2970 |
| js | 1000 | 496 | 504 | 1710 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第3号事项：NER（命名实体识别）RE（关系抽取）
  - learn的第4号事项：Rete/Phreak算法
  - js的第10号事项：copilot

- 60分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - learn的第1号事项：ANP（Agent Network Protocol）

- 90分钟时间片：
  - PSMD的第1号事项：筹备会议 by role+prompt
  - infra的第1号事项：schema立项。
  - ego的第2号事项：整理task及其相互关系
  - PSMD的第3号事项：子1609:基于公司、合同

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.08.[Agent Protocol https://agentprotocol.ai/]任务&body=日期: 2025.08.08.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250808.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250808140000"></a>
## 14:00 ~ 14:29
## learn: [Agent Protocol https://agentprotocol.ai/]

- D:\huangyg\git\js.sample\agent-protocol>
- npm install agent-protocol
```
file:///D:/huangyg/git/js.sample/agent-protocol/agent.ts:21
  Agent.handleTask(taskHandler).start()
        ^

TypeError: Agent.handleTask is not a function
    at file:///D:/huangyg/git/js.sample/agent-protocol/agent.ts:21:9
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:647:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

Node.js v22.18.0
```
- 官网代码还不成熟，从构想看是建立REST接口规范。可以借鉴，观察大厂用不用再说。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.08.[claude code + kimi K2 @ bailian]任务&body=日期: 2025.08.08.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250808.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250808143000"></a>
## 14:30 ~ 14:59
## learn: [claude code + kimi K2 @ bailian]

- deepseek-r1-distill-qwen-7b
- 使用proxy接口:
```
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxx"
  },
  "model": "deepseek-r1-distill-qwen-7b",
}
```
- 报错400:
```
> ping
  ⎿ API Error: 400 Error code: 400 - {'error': {'code': 'invalid_parameter_error', 'param': None, 'message': '<400> InternalError.Algo.InvalidParameter: The
    tool call is not supported.', 'type': 'invalid_request_error'}, 'id': 'chatcmpl-ca5a09af-4ba5-93ea-8148-a8f0347c9ad6', 'request_id':
    'ca5a09af-4ba5-93ea-8148-a8f0347c9ad6'}
```

- 使用常规chat接口：
```
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://dashscope.aliyuncs.com/compatible-mode/v1",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxx"
  },
  "model": "deepseek-r1-distill-qwen-7b"
}
```
- 报错404：
```
> ping
  ⎿  API Error: 404 status code (no body)
```
- 结合ccproxy截获的详细数据，claude code往后台发送了大量自定义的数据结构。没有经过专门定制的后台接口无法对接。
- 不再研究这个配套，用完token可以直接在网页聊天模式提出编程问题。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.08.[动态菜单设计。]任务&body=日期: 2025.08.08.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250808.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250808160000"></a>
## 16:00 ~ 16:59
## infra: [动态菜单设计。]

- d:\huangyg\git\js.sample\jsterms\doubao\
- npm install
- npm start
- UI很丑但基本可以使用。下一个时间片仔细分析代码。
- d:\huangyg\git\js.sample\jsterms\kimi\
	- 聊天界面的编程体验很不好。频繁用diff语法修改代码。bug也多。
	- 最后干脆耍赖，直接输出////填充的文件。
- 下面时间借鉴豆包的代码框架和文档，自己实现剩下的功能。

# 有限状态机任务与职权管理系统需求文档  
## 一、项目概述  
本项目旨在开发一款基于有限状态机（FSM）的任务与职权管理系统，支持网页和CLI双界面交互。系统核心通过动态配置的状态机管理“待完成任务”“允许的职权”“禁止的职权”三个清单，实现状态随事件（用户操作、系统事件、外部事件）实时转换，且状态机定义与代码解耦，支持动态修订与即时生效。  


## 二、核心功能需求  
### 2.1 有限状态机管理  
1. **清单管理**：系统需维护三个动态更新的清单，且清单内容随状态机转换自动调整：  
   - 待完成任务（Tasks to complete）：记录用户需执行的任务列表；  
   - 允许的职权（Allowed permissions）：记录用户当前可执行的权限；  
   - 禁止的职权（Forbidden permissions）：记录用户当前被限制的权限。  

2. **状态转换规则**：  
   - 状态机需定义初始状态（如“未登录”）及多个中间状态（如“已登录用户”“管理员”）；  
   - 状态转换由事件触发，支持三类事件：  
     - 用户操作事件（如“登录”“晋升管理员”“添加任务”“添加权限”等）；  
     - 系统事件（预留扩展，如定时任务、文件变化触发的状态转换）；  
     - 外部事件（预留扩展，如其他用户操作同步触发的状态转换）。  

3. **动态配置支持**：  
   - 状态机定义（含状态、事件、转换规则、动作）需通过独立JSON文件配置，与代码完全解耦；  
   - 修改JSON配置后无需重启系统，状态机引擎可实时加载新规则并生效。  


### 2.2 双界面交互  
系统需同时提供网页和CLI两种界面，支持用户操作与清单展示，且双界面数据实时同步。  

#### 2.2.1 网页界面  
1. **菜单结构**：  
   - 顶部导航栏显示系统名称及当前状态（状态文字背景色随状态区分，如“未登录”为灰色、“已登录”为绿色、“管理员”为蓝色）；  
   - 主要内容区分为两个可切换的菜单：  
     - “任务”菜单：展示“可添加的任务”按钮（点击触发任务添加事件）和“已添加任务”列表；  
     - “职权”菜单：合并展示“允许的职权”（可点击添加）和“禁止的职权”（灰色不可点击），下方提供“可添加的职权”按钮。  

2. **系统事件区域**：  
   - 位于页面底部，包含“系统事件”按钮（如登录、晋升、登出等基础操作）和事件记录区；  
   - 事件触发时需显示显眼提示（如蓝色脉冲动画），事件记录按时间倒序展示（含时间戳）。  

3. **交互规则**：  
   - 允许的职权按钮可点击，触发对应权限添加事件；  
   - 禁止的职权以灰色显示，不可点击；  
   - 菜单切换、状态更新需有平滑过渡动画（如淡入效果）。  


#### 2.2.2 CLI界面  
1. **信息展示**：  
   - 清晰展示当前状态、待完成任务、允许的职权、禁止的职权；  
   - 按类型分组显示可用事件（如“系统事件”“任务操作”“权限操作”）。  

2. **操作支持**：  
   - 用户可通过输入事件名称（如“userLogin”“reviewDocuments”）触发状态转换；  
   - 操作后实时刷新清单内容及当前状态。  


### 2.3 事件与动作绑定  
1. **事件与清单联动**：状态机转换时需执行预设动作，直接更新清单内容：  
   - 如“登录”事件触发后，自动添加“viewDashboard”“viewProfile”到允许的职权；  
   - 如“晋升管理员”事件触发后，自动将“approveRequests”“manageUsers”从禁止职权移至允许职权；  
   - 如“添加任务”事件触发后，将任务名称（如“reviewDocuments”）添加至待完成任务列表。  

2. **防重复操作**：动作执行时需校验清单内容，避免重复添加（如任务已存在则不重复加入）。  


## 三、非功能需求  
1. **跨平台支持**：基于Node.js开发，支持在Windows、Ubuntu等操作系统运行。  
2. **离线可用**：系统可完全离线运行，依赖本地文件存储状态机配置及清单数据。  
3. **稳定性**：状态机转换需无错误提示，所有合规用户操作（如点击允许的职权按钮）需正常触发事件，无“状态不支持事件”报错。  
4. **易用性**：  
   - 网页界面按钮、菜单交互直观，状态与清单变化可视化；  
   - CLI界面指令简洁，事件分组清晰，操作结果即时反馈。  


## 四、技术约束  
1. **状态机配置格式**：状态机定义文件（`fsm-definition.json`）需为纯JSON格式，禁止包含注释（避免解析错误），结构需包含：  
   - 状态列表（含每个状态的描述、转换规则）；  
   - 转换规则（含触发事件、目标状态、执行动作）；  
   - 全局事件清单（供界面动态生成可操作事件）。  

2. **技术栈要求**：  
   - 后端核心：Node.js（状态机引擎、事件处理）；  
   - 网页界面：Express（服务）+ Socket.IO（实时通信）+ HTML/CSS（前端渲染）；  
   - CLI界面：Node.js `readline` 模块 + `chalk`（终端样式）；  
   - 依赖库：`chokidar`（预留文件事件监控）、`socket.io`（实时同步）等。  


## 五、界面原型关键说明  
### 5.1 网页界面核心原型  
| 区域          | 功能描述                                                                 |  
|---------------|--------------------------------------------------------------------------|  
| 顶部导航栏    | 显示“有限状态机清单系统”标题及当前状态（如“Initial”“Authenticated”“Manager”），状态文字背景色随状态区分。 |  
| 菜单切换区    | 包含“任务”和“职权”两个菜单按钮，点击切换对应内容区域，当前菜单高亮显示。 |  
| 任务菜单内容  | 展示“可添加的任务”按钮（如“reviewDocuments”“prepareReport”）和“已添加任务”列表，提供“清空所有任务”功能。 |  
| 职权菜单内容  | 双列布局展示“允许的职权”（绿色背景，可点击添加）和“禁止的职权”（灰色背景，不可点击），下方提供“可添加的职权”按钮。 |  
| 底部系统事件区 | 展示系统事件按钮（如“userLogin”“promoteToManager”）和事件记录（含时间戳），事件触发时有脉冲动画提示。 |  


### 5.2 CLI界面核心原型  
```  
=== 当前状态 ===  
Current State: Authenticated  

=== 系统事件 ===  
userLogin | userLogout | promoteToManager | demoteToUser  

=== 待完成任务（输入名称添加） ===  
可用任务: reviewDocuments | prepareReport | approveBudgets | clearAllTasks  
已添加任务: reviewDocuments  

=== 允许的职权（输入名称添加） ===  
可用权限: viewDashboard | viewProfile | exportData  
已拥有权限: viewDashboard, viewProfile  

=== 禁止的职权 ===  
approveRequests | manageUsers  
>  
```  


## 六、验收标准  
1. 状态机定义修改后，系统无需重启即可加载新规则，状态转换正常；  
2. 网页和CLI界面均可触发事件，且清单内容实时同步更新；  
3. 允许的职权按钮点击后无“状态不支持事件”报错，清单正确添加；  
4. 禁止的职权以灰色不可点击样式展示，无法触发操作；  
5. 系统事件触发时有明显提示（网页端脉冲动画、CLI端日志记录）。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.08.[无名任务]任务&body=日期: 2025.08.08.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250808.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250808190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 试一下gpt-5
	- 拖拉机：正确
	- 三步三元组：表面工作做了，理解深度有限。和gpt-oss没有拉开差距。
	- p2p node：d:\huangyg\git\js.sample\p2p\gpt-5\
		- 选择hyprtcore系列的库。
		- 大半小时后才连接上。
- 试一下gemini pro 2.5
	- p2p node：D:\huangyg\git\js.sample\p2p\geminipro>
		- 一次成功，很快就连接上并且可以对话。
- 对比一下Claudiatron和Claudia。
	- 前者是后者团队分离出来的，功能更复杂详细。
	- 可以看到一些历史对话。添加mcp出错。
- 请ai推荐simplenote的替代方案：
	- 本地：Obsidian、Joplin、qownnotes
	- 外网：onedriver、Nextcloud、ownCloud、github/gitee、Cloudflare R2
		- Cloudflare R2提示：“提供您的银行卡信息，即表示您允许 Cloudflare, Inc. 按照他们的条款从您的银行卡收取未来款项。”
		- Tab.Digital
			- Nextcloud：选中文件→...→文件详情→设置共享外链。
			- webDAV：左下角文件设置→webDAV→
			- https://kai.nl.tab.digital/remote.php/dav 
- d:\huangyg\git\js.sample\chokidar\
- npm init -y
- npm i chokidar webdav axios dotenv
- 功能正常：
```
D:\huangyg\git\js.sample\chokidar>node sync
[dotenv@17.2.1] injecting env (5) from .env -- tip: ⚙️  load multiple .env files with { path: ['.env.local', '.env'] }
(node:56232) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///D:/huangyg/git/js.sample/chokidar/sync.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to D:\huangyg\git\js.sample\chokidar\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
↑ test.md
�� 监控开始： d:\src
↑ test.md
↑ test.md
```
- 监控单独文件而不是整个文件夹。
```
D:\huangyg\git\js.sample\chokidar>node sync-single.js
[dotenv@17.2.1] injecting env (6) from .env -- tip: ��️  run anywhere with `dotenvx run -- yourcommand`
(node:54612) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///D:/huangyg/git/js.sample/chokidar/sync-single.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to D:\huangyg\git\js.sample\chokidar\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
↑ 20250808.04.md 18:30:01
�� 监控单个文件： d:\huangyg\git\draft\2025\20250808.04.md
↑ 20250808.04.md 18:30:17
```
- d:\huangyg\git\js.sample\caldav\
- npm init -y
- npm i axios dotenv uuid
```
D:\huangyg\git\js.sample\caldav>node addtask.js
[dotenv@17.2.1] injecting env (4) from .env -- tip: �� observe env with Radar: https://dotenvx.com/radar
(node:44132) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///D:/huangyg/git/js.sample/caldav/addtask.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to D:\huangyg\git\js.sample\caldav\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✅ 事件已写入 https://kai.nl.tab.digital/remote.php/dav/calendars/hyg/personal/event-eb758ffc-eb92-4026-93cf-bbaf34a39bae.ics
``` 
- winget install pbek.QOwnNotes
- 增加todo项，准备弃用simplenote。
