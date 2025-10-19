# 2025.10.19.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:54	learn: [https://www.pnml.org/](#20251019140000)
- 15:56~16:15	learn: [RuleML,结构化规则语言（如RuleML的核心子集）](#20251019155600)
- 16:18~17:24	learn: [Tauri + Rust](#20251019161800)
- 19:00~19:59	check: [零散笔记](#20251019190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1212 | 12318 | 9825 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 390 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1032 | 968 | 4335 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：SCXML (State Chart XML)
  - learn的第3号事项：UML State Machine XMI | Harel Statecharts
  - learn的第4号事项：TLA+
  - learn的第5号事项：Alloy

- 60分钟时间片：
  - learn的第1号事项：Tauri + Rust
  - js的第1号事项：LangChain.js
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：ai-sdk + moonshot

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - infra的第1号事项：petri引擎设计
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：Rete/Phreak算法的自主实现

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.19.[https://www.pnml.org/]任务&body=日期: 2025.10.19.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251019.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251019140000"></a>
## 14:00 ~ 15:54
## learn: [https://www.pnml.org/]

- 介绍一下 PNML，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- PNML、BPMN 和 UML 并非简单的“你死我活”的竞争关系，更像是面向不同问题域、不同用户群体的专业工具。PNML 追求数学上的严谨，BPMN 追求业务上的共识，UML 追求软件工程上的全面。理解它们的定位，才能在合适的场景下选择最合适的工具。
	- PNPRO（CPN Tools 专有）	高级 Petri 网格式	支持颜色 Petri 网、分析功能强	专有格式、互操作性差	教学、复杂系统建模
	- TINA .net 格式进行交换工具专用格式	支持时间 Petri 网、验证能力强	封闭格式、社区小	实时系统验证
	1. “形式化验证”是指什么？
	2. 除了petri，其它形式化工具比如FSM、Statecharts等等有自己的通用语法吗。
		- SCXML (State Chart XML): 这是 W3C 制定的一个标准，专门用于描述有限状态机。它是一种基于 XML 的语言，可以看作是 FSM 领域的“PNML”。它定义了状态、转移、事件、条件等所有核心元素。
		- UML State Machine XMI: UML 中的状态机图本质上是 Harel Statecharts（一种增强的FSM）的实现。它的模型数据可以通过 XMI (XML Metadata Interchange) 格式进行交换。因此，任何支持 UML XMI 的工具都可以交换状态机模型。
		- PNML 是一个特例。 它为一个特定的、理论性很强的形式化模型（Petri 网）创建了一个独立的、国际公认的标准。这反映了其在学术和特定工业领域的深度和共识。
		- FSM 的标准化 (SCXML) 体现了其实用性。 FSM 是构建用户界面、通信协议等交互式系统的基础，W3C 将其标准化为 SCXML，极大地促进了其在 Web 和语音应用等领域的互操作性。
		- Statecharts 的“被整合”体现了其影响力。 Statecharts 的思想太强大了，以至于它没有成为一个独立标准，而是被“吸收”成了更庞大的 UML 建模框架的一部分。通过 UML 的 XMI，它获得了最广泛的工具支持。
		- Z/TLA+/Alloy 的“无标准”体现了其哲学。 这些方法更侧重于规约语言的表达能力和分析引擎的强大，而不是模型在不同工具间的“搬运”。它们的价值在于思考和分析的过程本身，而不是最终的模型文件。
- stepify是代码并行的工具，其实和petri关系不是很明朗。
- petri-js是petri仿真工具，有自己简单语法，基于经典petri没有太多扩展语义。不是PNML。
- 工具：
	- https://pipe2.sourceforge.net/ PIPE2 (Platform Independent Petri Net Editor): 
		- 定位: 通用 Petri 网研究与形式化验证。它是一个更“纯粹”的学术工具，旨在为各种 Petri 网的研究提供强大的建模和分析能力。
	    - 目标用户: 计算机科学专业的学生、研究人员、形式化方法工程师。它更偏向于理论和底层验证。
	- https://github.com/woped/WoPeD  (Workflow Petri Net Designer): 
		- 定位: 工作流分析与教学。它的名字就表明了其核心——专注于将 Petri 网作为理解和分析业务工作流的工具。
	    - 目标用户: 业务分析师、流程工程师、学习工作流理论的学生和教师。它更偏向于应用层。
- 如果要基于PNML开发工作流引擎，和基于BPMN的工作流引擎共同服务于应用层软件，工作流引擎和应用层的接口有哪些规范。	
	- 可以借鉴现代 BPMN 工作流引擎（如 Camunda, Flowable, Zeebe）与应用层之间的接口。
- nodejs+windows环境有没有基于PNML的工作流引擎，可以直接使用的。
	- 路径一：自己动手，丰衣足食（DIY）可以参考的库： 
		- petri-net-js: 一个非常轻量级的库，提供了 Petri 网的基本数据结构和简单的执行逻辑。它不是一个完整的工作流引擎，但可以作为你构建的起点。
	    - bpmn-engine: 虽然它是为 BPMN 设计的，但其源代码架构（任务、执行器、持久化）非常有参考价值，你可以借鉴它的设计模式来构建 PNML 引擎。
	- 路径二：移花接木，适配 BPMN 引擎（推荐用于生产环境）核心思想是：利用一个成熟的 Node.js BPMN 引擎作为执行器，将 PNML 模型转换成 BPMN 模型。
		- 选择一个 BPMN 引擎： 
			- bpmn-engine: 一个轻量级、纯 JavaScript 的 BPMN 2.0 引擎，易于嵌入和使用。
		    - camunda-external-task-client-nodejs: 如果你想使用业界顶级的 Camunda 平台，可以用这个客户端库来连接 Camunda 的外部任务。
		- 创建 PNML 到 BPMN 的转换器。映射规则：
			- PNML Place -> BPMN Event:
			- PNML Transition -> BPMN Task:
			- PNML Arc -> BPMN Sequence Flow: 直接连接对应的 Event 和 Task。
			- 并发分支/汇合: PNML 中一个变迁有多个输出弧，或多个变迁指向同一个库所，这天然对应 BPMN 中的 Parallel Gateway。
			- 执行 BPMN，将转换后的 BPMN XML 部署到你选择的 BPMN 引擎中。
				- 应用层通过调用 BPMN 引擎的标准 API 来启动流程、完成任务等，与引擎的交互完全基于 BPMN 的世界。
		- 这个方案的局限性： 
			- 语义损失： 这种映射不是 100% 完美的。BPMN 的流程令牌是单线程的，而 PNML 的令牌是真正并发的。虽然可以用 Parallel Gateway 模拟，但在某些复杂的并发场景下，语义可能无法完全对等。
		    - 转换复杂性： 对于复杂的 PNML（如着色网），转换器会变得非常难写。
- 在infra项目DIY petri引擎，在ego模型开始应用。从基础模型开始一点一点升级，参照商业工作流引擎对应用层接口。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.19.[RuleML,结构化规则语言（如RuleML的核心子集）]任务&body=日期: 2025.10.19.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251019.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251019155600"></a>
## 15:56 ~ 16:15
## learn: [RuleML,结构化规则语言（如RuleML的核心子集）]

- http://ruleml.org
- https://github.com/ruleml
- 介绍一下 RuleML,结构化规则语言，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- 若追求「标准化、存档、跨引擎」→ RuleML/SWRL/RIF；
	- 若追求「生产级、性能、可视化」→ Drools DRL；
	- 若追求「AI 教学、产生式经典」→ CLIPS/JESS；
	- 若追求「反应规则 + ESB」→ Prova。
	- RuleML vs. Drools: RuleML 是“宪法”，定义了规则应该长什么样；Drools 是“政府”，提供了一套强大的规则执行体系。RuleML 追求普适和交换，Drools 追求高性能和易用性。
	- RuleML vs. DMN: RuleML 面向技术专家和系统，关注逻辑的精确表达；DMN 面向业务分析师，关注决策的可视化和可理解性。两者可以互补：用 DMN 建模，然后转换成 RuleML 或其他格式执行。
	- RuleML vs. SWRL: 两者都是语义网阵营的规则语言，关系密切。RuleML 是一个更通用的家族，而 SWRL 专门为 OWL 设计。可以说 SWRL 是 RuleML 思想在 OWL 领域的一个具体实现。
- 预判结论： 
	- RuleML 本身作为一种需要手写的 XML 语言，不会成为主流开发者的日常选择。它将继续保持其作为学术标准和理论基石的地位。 
	- 它的未来更多地体现在其 “基因”的传承 上： 
		- 在需要最高级别互操作性的利基市场中继续发挥作用。
        - 其设计原则和语义模型将被新的、更易用的规则交换格式所借鉴和吸收。
        - 它会像关系代数之于 SQL 一样，成为规则领域一个虽不常被直接使用，但无处不在的底层理论支撑。
	- 总而言之，RuleML 是一项重要且深刻的技术，它的成功不在于被多少人直接使用，而在于它为整个规则技术领域树立了标准化的标杆。 
- 只想「跑规则」→ 直接学 Drools DRL + Kogito，RuleML 仅需了解「导入/导出」按钮即可。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.19.[Tauri + Rust]任务&body=日期: 2025.10.19.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251019.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251019161800"></a>
## 16:18 ~ 17:24
## learn: [Tauri + Rust]

- 重装机器后需要rust环境：
	- winget install --id Rustlang.Rustup
	- winget install --id Microsoft.VisualStudio.2022.BuildTools --override "--wait --add Microsoft.VisualStudio.Workload.VCTools"
    	- 也可以去 https://visualstudio.microsoft.com/zh-hans/downloads/
        - 勾选组件：https://rust-lang.github.io/rustup/installation/windows-msvc.html
        - 加入PATH环境变量：C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Tools\MSVC\14.44.35207\bin\Hostx64\x64\
- pnpm tauri dev
- 启动正常，下个时间片做个简单demo。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.19.[无名任务]任务&body=日期: 2025.10.19.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20251019.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251019190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- ego构思之一：两层petri网络
- 每天根据身心状态，生成时间令牌：有外部合同的，按期限倒推时间节点。其余时间分配到深层级。
	- 具体设计待定。	
- [层级+时间片长度]对应transition：fire的时候去下一层级排序task，按顺序取task执行。
	- 输入：
		- 任务令牌：[层级]place
		- 时间令牌：[时间片长度]place
	- 输出：
		- 资产输出到[任务+资产种类]专户place；
		- 每种父任务的任务令牌：输出到[(任务)层次]place，如果有环就[(环)层次]place。
