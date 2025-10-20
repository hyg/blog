# 2025.10.20.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:49	learn: [SCXML (State Chart XML)](#20251020140000)
- 14:50~15:39	learn: [UML State Machine XMI | Harel Statecharts](#20251020145000)
- 16:00~17:29	learn: [Tauri + Rust](#20251020160000)
- 19:00~19:59	check: [零散笔记](#20251020190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1402 | 12128 | 10065 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1485 |
| infra | 2000 | 30 | 1970 | 480 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1222 | 778 | 4425 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：XSTATE https://xstate.js.org/
  - learn的第4号事项：TLA+
  - learn的第5号事项：Alloy
  - learn的第6号事项：VDM (Vienna Development Method)

- 60分钟时间片：
  - ego的第1号事项：细化ego对task的资源分配
  - js的第1号事项：LangChain.js
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：ai-sdk + moonshot

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - learn的第1号事项：Tauri + Rust

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.20.[SCXML (State Chart XML)]任务&body=日期: 2025.10.20.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251020.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251020140000"></a>
## 14:00 ~ 14:49
## learn: [SCXML (State Chart XML)]

- https://www.w3.org/TR/scxml/
	- SCXML 引擎的 Java 实现 --Apache Commons SCXML https://commons.apache.org/proper/commons-scxml/
	- js: https://github.com/jbeard4/SCION
	- BPMN 与 SCXML 混合建模（BPMN 做宏观流程，SCXML 做微观状态）在政务、电信招标中开始写进技术规范，预计 2027 成为国标。
- https://xstate.js.org/
	- https://lecepin.github.io/xstate-docs-cn/zh/

- 介绍一下 SCXML (State Chart XML) ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- SCXML  预判：“常青树”，但不会成为主流热点。
	- XState 预判：将成为 Web 端状态管理的“事实标准”。
	- Spring Statemachine 预判：与 Spring 生态共进退，保持稳定发展。
	- Stateless 预判：继续作为 .NET 生态中的“最佳轻量级选择”。
- 基于XState 开发产品。业务逻辑的描述文件可以导出为SCXML语法的文件吗。
	- 可以，但不是一键式、无损的导出，且需要解决一些关键问题。
		- 动作的实现：XState 的动作是强类型的、可被 IDE 分析的函数。SCXML 的动作是字符串，难以调试和静态分析。
		- invoke 的多样性：XState 的 invoke 可以非常灵活地调用 Promise、Callback、Observable、其他机器等。SCXML 的 <invoke> 虽然也强大，但其机制和目标类型不同，映射起来很复杂。
		- 上下文管理：XState 的 context 是一个纯粹的 JS 对象，操作非常直观。SCXML 的 <datamodel> 虽然也基于 ECMAScript，但语法和操作方式（如 <assign>）更为繁琐。
	- 工具链：Qt 与 Stately 已计划 2025 Q2 互导格式（*.scxml ↔ *.xstate），意味着“画一次图，两端代码”成为可能。	
	- Stately 团队 2025 Q1 发布的「离线 CLI」预览版（未 GA）命令 stately export --format scxml --projectId xxx 已能跑通自家模板仓库，但文档仍标 “alpha, expect breaking changes”。
	- XState 核心库从 4.0 起就内置了「序列化器」@xstate/scxml——注意它是单向的：
		- 能把 SCXML → XState JSON（官方测试套件里 400+ 条用例全过）；
	    - 但反过来 XState → SCXML 只有实验性支持，文档里明确写着 “serialization to SCXML is not feature-complete”
			- 也就是说，官方只提供了底层 API，没有 CLI、没有 UI、没有维护完整语义映射。
	- npm 包 xstate-to-scxml（2024 停更）
		- 支持 90% 常用语法：状态嵌套、并发 region、历史节点、guard 条件、entry/exit 动作。
	    - 不支持：
	    	- invoke/src 里直接写 async () => {}（SCXML 里只能挂 URL 或表达式）；
	        - 自定义 action 名以外的内联函数体；
	        - 赋值表达式（assign(...) 会被展开成 <script> 标签，但变量作用域可能错位）。
	- 对于绝大多数场景，直接进行 XState 到 SCXML 的转换是费力不讨好的。我强烈推荐以下替代方案： 
		- 推荐方案：事件驱动的架构 不要试图转换状态机本身，而是让两个独立的状态机通过事件进行通信。 
		- XState 端（前端）：你的 XState 机器正常运行。当它需要与外部系统交互时，它不直接调用函数，而是发送一个事件。
		- SCXML 端（后端/其他系统）：你的 SCXML 机器独立运行。它监听来自外部的事件，并根据这些事件进行状态转换。
- 对数据结构设计有借鉴价值。实际上和sample\FSM的设计已经高度一致，等思路完善后，就可以借助SCXML和XSTATE几十年的案例经验，推动ego项目。
- 先在项目中使用XSTATE，以后根据合作方技术栈扩展到SCXML和Spring。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.20.[UML State Machine XMI | Harel Statecharts]任务&body=日期: 2025.10.20.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251020.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251020145000"></a>
## 14:50 ~ 15:39
## learn: [UML State Machine XMI | Harel Statecharts]

- https://statecharts.dev/
- 介绍一下 UML State Machine XMI | Harel Statecharts ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点、nodejs+windows技术栈的相关工具集。，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- 层次化: 这是 Harel Statecharts 最核心的贡献。它允许状态包含子状态，形成状态树。这使得可以将复杂的行为分解为更小、更易于管理的模块。例如，一个“播放中”状态可以包含“快进”、“快退”、“正常播放”等子状态。
	- 并发: 允许一个状态机同时处于多个并发的状态。通过将一个状态用虚线分割成多个区域来实现。这对于描述需要同时处理多个独立任务的系统（如机器人一边移动一边感知环境）至关重要。
	- 广播通信: 状态机内部或不同状态机之间可以通过广播事件进行通信，一个状态的转换可以触发另一个状态的转换。
	- 历史状态: 记住一个组合状态上次退出时所处的子状态。当再次进入该组合状态时，可以直接恢复到上次的子状态，而不是默认的初始状态。分为浅历史（只记住上一级）和深历史（记住所有层级）。
	                    
	- UML State Machine 看作是 Harel Statecharts 的一个“工业标准版”。
	- UML 规范为其增加了一些更详细的语义，例如更明确的动作类型、更严格的语法规则等，使其更适合用于严谨的软件设计和文档。
- 对比statecharts和petri网家族的表达能力，选择至少三处关键差异，以实际案例帮助理解。
	- glm：对于绝大多数前端和 Node.js 开发者来说，Statecharts（尤其是以 XState 为代表的实现）是更实用、更符合直觉的选择。 因为我们通常在思考“这个 UI 组件现在处于什么状态？”、“这个用户会话进行到哪一步了？”。
	- glm：当你设计的系统核心是关于多个独立实体如何竞争有限的资源、或者需要严格分析流程中的死锁和同步问题时，Petri 网的思想（即使不直接使用 Petri 网工具）会提供巨大的价值。 例如，在设计一个分布式任务队列、一个数据库连接池或者一个复杂的微服务编排系统时，用 Petri 网的视角来建模会让你更早地发现潜在的竞争和瓶颈问题。
	- kimi：控制密集、事件驱动、需要清晰层次与并发同步的系统（UI、嵌入式控制器）用 Statecharts 更直观；数据流明显、需强调资源竞争/吞吐量分析的系统（工作流、性能模型）则 Petri 网家族更有优势。

- UML State Machine XMI和SCXML 有哪些差异，尽量用案例帮助理解。
	- XMI 是 OMG 为 所有 UML 图 定义的 通用交换格式（.uml 文件里的一堆 <xmi:XMI> 标签），重点是把图从工具 A 搬到工具 B，人类基本不手写。
	- SCXML 是 W3C 的 可执行状态机语言，自带解释器、DOM-API、事件队列，可直接跑在浏览器/Node/Qt 里，人类可直接编辑。
	- XMI 像「CAD 工程图纸」：工具之间搬模型用，厚重、精确，但没人直接敲。
	- SCXML 像「可执行源码」：轻量、标准化、能直接跑，建模=写程序，更适合持续集成与运行时热加载。
- 以下需求更适合使用哪个工具：
	1. 法律
	2. 企业章程
	3. SOP标准作业程序
	4. 合同
	5. 个人agent
	- glm：
| 需求 | 更适合的工具 | 核心原因 |
| :--- | :--- | :--- |
| **法律** | **Petri 网** | 关注规则、条件、多方流程和资源竞争，而非单一实体生命周期。 |
| **企业章程** | **Petri 网** | 核心是治理流程、决策同步和权力（资源）分配。 |
| **SOP** | **Statecharts** (定义) / **Petri 网** (分析) | Statecharts 直观易懂，适合描述工作项的生命周期；Petri 网擅长流程性能分析。 |
| **合同** | **Statecharts** | 具有非常清晰、事件驱动的生命周期，是典型的状态机应用场景。 |
| **个人 Agent** | **Statecharts** | 核心是复杂、分层、并发的自主行为，Statecharts 是为描述此类行为而设计的。 |
	- kimi：
| 需求            | 首选工具                          | 理由（一句话）                                                      |
| ------------- | ----------------------------- | ------------------------------------------------------------ |
| 1. 法律         | Petri 网家族（有色-时间-资源网）          | 法律=「多主体并行+资源竞争+时间截止」，Petri 天然能验证冲突、死锁、可达性。                   |
| 2. 企业章程       | 有色 Petri 网 → 后期可转 Statecharts | 章程先关注「权限-资源-表决」分布，用 Petri 做静态验证；执行层再落地为状态图。                  |
| 3. SOP 标准作业程序 | Statecharts                   | SOP=「步骤严格顺序+异常分支+人机并发」，Statecharts 的层次/正交/事件模型可直接生成作业指导书与代码。 |
| 4. 合同         | 时间-有色 Petri 网                 | 合同=「多角色并行义务+截止+违约冲突」，先用 Petri 验证「会不会陷入无法履约的死锁」，再自动生成监控代码。    |
| 5. 个人 agent   | Statecharts                   | 单实体、事件驱动、需快速迭代与可视化调试，Statecharts 工具链（XState、Stately）最成熟。     |
---
| 需求       | 多主体并行+资源冲突 | 单主体事件驱动 | 是否需要形式验证 | 推荐          |
| -------- | ---------- | ------- | -------- | ----------- |
| 法律       | ✔          | ✘       | 必须       | Petri 网     |
| 章程       | ✔          | ✘       | 必须       | Petri 网     |
| SOP      | ✘          | ✔       | 可选       | Statecharts |
| 合同       | ✔          | ✘       | 必须       | Petri 网     |
| 个人 agent | ✘          | ✔       | 可选       | Statecharts |

---
| 需求类型      | 推荐工具                  | 理由                               |
| --------- | --------------------- | -------------------------------- |
| 法律        | UML State Machine XMI | 需要严格的逻辑、可追溯性和标准化，适合长期保存和审计。      |
| 企业章程      | UML State Machine XMI | 结构化强，适合复杂规则和版本控制，便于法律合规。         |
| SOP标准作业程序 | SCXML                 | 需要执行和自动化，SCXML 的可执行性和交互性更适合。     |
| 合同        | UML State Machine XMI | 需要精确表达条款和条件，适合法律审查和版本管理。         |
| 个人agent   | SCXML                 | 需要实时交互和动态行为，SCXML 的事件驱动和可执行性更适合。 |

- 1. 项目管理上常用的甘特图，有没有通用的数据存储和交换文件 2. 甘特图与petri网家族、statecharts的表达能力有哪些差异。就主要差异举例帮助理解。

| 格式 | 类型 | 优点 | 缺点 | 适用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **MS Project XML** | 事实上的企业标准 | 功能全面，兼容性好 | 冗长，略带厂商烙印 | 企业级项目管理软件间的数据迁移 |
| **iCalendar (`.ics`)** | 真正的开放标准 | 通用性极强，与日历集成方便 | 表达能力弱，无法表达复杂依赖 | 简单任务和里程碑的同步与提醒 |
| **JSON (库特定)** | 现代Web标准 | 轻量，易读，与JS生态完美融合 | 缺乏统一标准，互操作性差 | Web应用中的甘特图数据存储与前后端交互 |


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.20.[Tauri + Rust]任务&body=日期: 2025.10.20.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20251020.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251020160000"></a>
## 16:00 ~ 17:29
## learn: [Tauri + Rust]

```
   按照以下选项创建一个tauri项目：
   ...
   ✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm, deno, bun)
   ✔ Choose your package manager · bun
   ✔ Choose your UI template · Vanilla
   ✔ Choose your UI flavor · JavaScript

   业务逻辑使用statecharts（XSTATE）结合petri网来实现，希望能对本地用户提供桌面UI，同时通过peerjs：
   1. 与远程用户提供自然语言交流（结合llm），
   2. 与远程用户运行的相同节点软件进行数据通信（纳入业务逻辑）。

   请完成概要设计。
```
- glm:
```
+--------------------------------------------------------------------------------+
|                                  Tauri Application                             |
|                                                                                |
|  +------------------------+      IPC (Tauri Commands)      +----------------+  |
|  |   Frontend (WebView)   | <----------------------------> |   Rust Backend |  |
|  |                        |                                 |                |  |
|  | +-------------------+  |                                 | +------------+ |  |
|  | | UI (Vanilla JS)   |  |                                 | | File System| |  |
|  | +-------------------+  |                                 | | OS APIs    | |  |
|  | | State Management  |  |                                 | | Secure Store| |  |
|  | | (XState Machine)  |  |                                 | +------------+ |  |
|  | +-------------------+  |                                 +----------------+  |
|  | | Business Logic    |  |                                                      |
|  | | (Petri Net Engine)|  |                                                      |
|  | +-------------------+  |                                                      |
|  | | Communication     |  |                                                      |
|  | | (PeerJS Client)   |  |                                                      |
|  | +-------------------+  |                                                      |
|  +------------------------+                                                      |
|                                    ^                                              |
|                                    | PeerJS Data Channel                           |
|                                    v                                              |
|                          +-----------------+                                       |
|                          |   Remote Peer   |                                       |
|                          | (Another Instance of this App)                        |
|                          +-----------------+                                       |
+--------------------------------------------------------------------------------+
```
- kimi:
```
┌─────────────────────────────────────────────────────────────┐
│                    Tauri Desktop App                        │
├─────────────────────┬───────────────────────────────────────┤
│    Frontend (Web)   │          Backend (Rust)               │
│  ┌───────────────┐  │  ┌─────────────────────────────────┐ │
│  │   Vanilla JS  │  │  │   Tauri Commands                │ │
│  │   UI Layer    │  │  │   - File I/O                    │ │
│  ├───────────────┤  │  │   - System Integration          │ │
│  │   XState      │  │  │   - Security                    │ │
│  │   Machines    │  │  │   - Performance                 │ │
│  ├───────────────┤  │  └─────────────────────────────────┘ │
│  │   Petri Net   │  │                                       │
│  │   Engine      │  │                                       │
│  ├───────────────┤  │                                       │
│  │   PeerJS      │  │                                       │
│  │   Client      │  │                                       │
│  └───────────────┘  │                                       │
└─────────────────────┴───────────────────────────────────────┘
                            │
                                                P2P Network (WebRTC)
                                                                            │
                                                                            ┌─────────────────────────────────────────────────────────────┐
                                                                            │              Remote Nodes (Same Architecture)              │
                                                                            └─────────────────────────────────────────────────────────────┘
```
```
tauri-distributed-app/
├── src/
│   ├── main.js                 # 应用入口
│   ├── components/
│   │   ├── PetriNetViewer.js   # Petri网可视化
│   │   ├── PeerList.js         # P2P节点列表
│   │   └── ChatInterface.js    # 自然语言界面
│   ├── services/
│   │   ├── DistributedStateManager.js
│   │   ├── P2PNodeManager.js
│   │   ├── LLMService.js
│   │   └── PetriNetEngine.js
│   ├── machines/
│   │   ├── appMachine.js       # 主应用状态机
│   │   ├── peerMachine.js      # P2P连接状态机
│   │   └── petriMachine.js     # Petri网状态机
│   ├── utils/
│   │   ├── crypto.js           # 加密工具
│   │   └── sync.js             # 同步算法
│   └── styles/
│       └── main.css
├── src-tauri/
│   ├── src/
│   │   └── main.rs             # Rust后端
│   └── Cargo.toml
├── petri-nets/
│   ├── templates/
│   └── examples/
├── tests/
│   ├── unit/
│   └── integration/
├── package.json
├── tsconfig.json
└── tauri.conf.json
```

```
以下需求分别需要创建、修改tauri项目的哪个文件：
1. 自定义一些yaml数据结构，让业务逻辑可以增删改查；
2. 显示一些统计报表；
3. 根据自定义的业务逻辑，处理数据并更新yaml文件。
```
- 需要熟悉rust之后才能驾驭tauri项目。
- Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
	- 大致了解增加指令的复杂度：需要熟悉rust语法，不能仅靠文档去编辑rs文件。
- 后撤这个任务的优先级。bind到rust学习之后。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.20.[无名任务]任务&body=日期: 2025.10.20.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251020.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251020190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 继续细化ego对task的资源分配。
- 再次设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
	- machine = model + engine
		- SOP machine: petri \ statecharts
		- COM machine: CEV
	- vat = primitive , event|action@machine
	- FAQ: DL \ Behavior Trees
- 先按petri网定义设计几个实例，然后再学习优秀的petri网设计案例。
