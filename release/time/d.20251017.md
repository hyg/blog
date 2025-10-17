# 2025.10.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20251017190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1010 | 12520 | 9510 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 195 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 830 | 1170 | 4215 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：RuleML,结构化规则语言（如RuleML的核心子集）
  - learn的第7号事项：CloudEvent（JSON 格式，spec 1.0+）
  - learn的第8号事项：Semantic Version + Content-Addressable Storage（如 OCI Artifacts 存 DMN/Regos）
  - js的第8号事项：copilot

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
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.17.[无名任务]任务&body=日期: 2025.10.17.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251017.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251017190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 介绍一下 FSM、并发状态机（Concurrent State Machines, CSM / Statecharts）、代数进程演算（CCS, CSP, π-calculus）、马尔可夫决策过程（MDP & 层次 MDP）、同步积网络（Synchronous Product Networks, SPN）、Petri 网（包括颜色/解释 Petri 网 CPN / IPN）、行为树（Behavior Trees, BT）、Statecharts、进程演算等各种形式化方法，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- “低代码+形式化”  将成为主流：图形化  Statecharts/BT  负责“业务编排”，底层自动生成  CSP/Petri/MDP  模型→模型检测→强化学习微调→一键部署。谁能把“数学正确性”封装成“拖拉拽”，谁就能占领下一代工业  &  游戏  &  机器人平台。
	- 状态图（Statecharts）由David Harel提出，是对传统FSM的重要扩展，引入了分层嵌套状态（这就是为什么状态图也称为分层状态机或HSM） 、并发状态（由并发状态构成的组合状态被分成不同区域，每个区域包含不同的状态机，各区域内的状态机分别运行） 和广播通信机制。
- 用来定义企业章程、SOP（Standard Operating Procedure，“标准作业程序）使用哪几种方法比较适合。
	- deepseek
		- 行为树（Behavior Trees, BT）—— 用于顶层流程编排与异常处理
		- BPMN / Statecharts（并发状态机）—— 用于核心业务对象的状态生命周期
		- 进程演算（CSP尤为突出）—— 用于部门/系统间的交互协议
		- Petri网—— 用于资源管理和关键路径分析
		- 总而言之，对于企业章程和SOP，推荐以“行为树（BT）为核心流程骨架，Statecharts/BPMN为状态细节补充，进程演算（CSP）为关键交互契约”的组合拳方式推进。这种方式既能保证逻辑的严谨性，又具备了足够的可读性和可操作性，能够在技术严谨性与管理实用性之间取得完美的平衡。
	- GLM:对于定义企业章程和SOP，最推荐的方法是： 
		- Statecharts (状态图)：作为首选和核心工具，因为它在表达能力、直观性和严谨性之间取得了最佳平衡，能完美处理层级、并发和流程。
	    - Petri Nets (特别是CPN)：作为深度分析和优化的辅助工具，尤其适用于对资源敏感、流程复杂的SOP进行建模和分析。
	- kimi
		- 治理层：企业章程/董事会授权矩阵
			- 代数进程演算 CSP / π-calculus ★★★
			- 颜色 Petri 网（CPN）★★
			- TLA+（虽不在你列表，但同族）★★
			- 不推荐：
				- FSM/Behavior Tree——状态爆炸且难以表达“多角色并行审批”；
				- MDP——章程里通常不需要概率优化。
		- 操作层：SOP（Standard Operating Procedure）
			- 离散型流水线（车间、仓库拣货、餐饮后厨）
				- 首选：颜色 Petri 网 CPN ★★★ 
				- 次选：行为树 BT ★★
			- 文档型审批链（财务报销、采购下单）
				- 首选：Statecharts ★★★
			- 高并发、多资源竞争（医院急诊、机场地服）
				- 首选：颜色 Petri 网 + 时间扩展（CPN-Time）★★★
				- 次选：CSP ★★
			- 带概率/成本优化的 SOP（呼叫中心排班、物流动态路由）
				- 首选：MDP / Hierarchical MDP ★★★
		- “章程用 CSP（π）保合规，SOP 用 CPN/BT/Statecharts 保执行，带随机成本用 MDP 保最优。”
- 设计一套通用框架，把以上所有形式化工具都可以对接，以便具体问题使用具体工具，而且可以热插拔。
	- 回答都比较平庸。估计要自己设计。
			
- 根据这份论文内容：https://arxiv.org/html/2505.00018v2 section2.5把meta-cognition放在Execution-Level，和1.1.2、2.6的内容是否一直。在section3、section4的内容，对应的这部分实例是怎么实现的。
	1. 这看起来是适应LLM服务商目前的接口、定价和算力分配，为微观操作上及时抑制错误而设计的短期折中方案。
	2. 是不是还有其它meta-cognition的需求，必须放在agent-level甚至meta-level，完全无法在Execution-Level实现。
	3. section2.5的内容，是案例还是永久的模型。在这里进行限定是否意味着放弃第2.个问题引出的其它情况。
	- 假如LLM实现AGI，并且部署在医院局域网内、成本可以忽略。那时候的论文中section2会有哪些部分修改，简要介绍修改后的内容。
