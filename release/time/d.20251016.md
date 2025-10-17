# 2025.10.16.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	learn: [XACML 4.0 / ODRL 2.2](#20251016140000)
- 14:30~14:59	learn: [RuleML,结构化规则语言（如RuleML的核心子集）](#20251016143000)
- 16:00~16:59	learn: [Tauri + Rust](#20251016160000)
- 19:00~19:59	check: [零散笔记](#20251016190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1010 | 12520 | 9420 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 195 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 830 | 1170 | 4125 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第5号事项：CloudEvent（JSON 格式，spec 1.0+）
  - learn的第6号事项：Semantic Version + Content-Addressable Storage（如 OCI Artifacts 存 DMN/Regos）
  - learn的第7号事项：Ontology + SWRL（Semantic Web Rule Language）
  - learn的第8号事项：Common Logic (ISO/IEC 24707)

- 60分钟时间片：
  - learn的第1号事项：Zapier
  - js的第1号事项：LangChain.js
  - learn的第2号事项：OutSystems, Mendix,
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

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
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.16.[XACML 4.0 / ODRL 2.2]任务&body=日期: 2025.10.16.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251016.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251016140000"></a>
## 14:00 ~ 14:29
## learn: [XACML 4.0 / ODRL 2.2]

- AI:介绍一下 XACML 4.0 / ODRL 2.2 ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- XACML 4.0 (eXtensible Access Control Markup Language) 一句话概括： XACML 是一个用于实现 属性基访问控制（ABAC） 的 OASIS 标准，它定义了一种通用的语言和架构，用于描述和执行细粒度的访问控制策略。 

	- 关于ABAC:(20251004.01.md )这四个方案都不能满足层级化的修订链。了解一下概念就可以了。PSMD的需求要规则引擎与热代码，或者自己编码实现(vm)。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.16.[RuleML,结构化规则语言（如RuleML的核心子集）]任务&body=日期: 2025.10.16.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251016.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251016143000"></a>
## 14:30 ~ 14:59
## learn: [RuleML,结构化规则语言（如RuleML的核心子集）]


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.16.[Tauri + Rust]任务&body=日期: 2025.10.16.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20251016.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251016160000"></a>
## 16:00 ~ 16:59
## learn: [Tauri + Rust]

### read ../../draft/2025/20251004.02.md

#### learn: [Tauri + Rust]

- https://v2.tauri.org.cn/start/
- d:\huangyg\git\sample\tauri\
	- cargo install create-tauri-app --locked
	- cargo create-tauri-app
- try js
```
D:\huangyg\git\sample\tauri>cargo create-tauri-app
✔ Project name · boot
✔ Identifier · com.PSMD.boot
✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm, deno, bun)
✔ Choose your package manager · bun
✔ Choose your UI template · Vanilla
✔ Choose your UI flavor · JavaScript
```
- d:\huangyg\git\sample\tauri\boot\
	- bun install
	- bun tauri dev
- 下个时间片继续：https://v2.tauri.org.cn/start/project-structure/


### read ../../draft/2025/20251006.03.md

#### learn: [Tauri + Rust]

- 复习tauri、wasm3.0和前端框架。选择vite继续学习。
- 环境变量：
	- TAURI_ENV_PLATFORM = windows
	- TAURI_ENV_DEBUG = true
- PSMD前端只是简单界面，IPC通信先用默认的 Brownfield，以后根据情况转到 Isolation。
- 下个时间继续：https://tauri.app/zh-cn/security/


### read ../../draft/2025/20251015.03.md

#### learn: [Tauri + Rust]

- 先学习vite？
- AI: tauri、vite、vue之间是什么关系。
	- Tauri 是“桌面壳”+ Rust 后端；Vue 是“UI 层”框架；Vite 是“构建工具”。
	- 三者通过 Vite 插件（vite-plugin-tauri） 粘合：开发阶段由 Vite 提供热更新与极速构建，Tauri 把 Vue 产物封装成跨平台原生窗口，最终产出体积远小于 Electron 的桌面安装包。
	- Vue 负责 UI，Vite 负责构建与热更新，Tauri 负责把 Web 产物封装成跨平台桌面应用；
	- 通过 vite-plugin-tauri 插件实现无缝集成，开发体验与纯 Web 项目几乎一致，产出体积却比 Electron 小一个数量级——这就是 2025 年桌面开发最受欢迎的“TVV”技术栈。
- vite支持哪些框架，包括Vanilla吗，对比所有这些框架的特性和适用场景。
	- Vue / React 正与 Vite 团队协作“细粒度 HMR + 服务器组件”原生实现，2026 前进入稳定
	- Svelte / Solid / Qwik 凭借“零 or 超小运行时”优势，在桌面端（Tauri）与边缘函数（Deno Deploy）场景增长最快
	- Vanilla JS 因“无构建、无运行时”成为低代码平台与组件库首选基座
- 在开始商业产品前，需要全部学习以上框架再选型吗。
	- 是否对包体积极度敏感？（IoT/营销页/嵌入式）Svelte/Vanilla
	- 是否需要 SEO 极致 + 首屏零 JS？（内容电商、文档站）Qwik
	- 当前框架遇到性能天花板（首屏 > 1.5 s、包 > 200 KB）且优化无效	评估 Solid/Qwik
	- 需要原生 Web Components输出给第三方嵌入	1 周内上手 Lit
	- 如果要开发一个包括会议、文档、工作流程的办公自动化系统（OA），最适合哪个框架。
		- Vue 3 + Vite + Element Plus 仍是 2025 年“会议-文档-流程”三合一 OA 的最平衡方案：轮子全、体积适中、上手快、案例多；
		- 只有当首屏体积 < 50 KB 或团队 React 背景极强时才考虑 Svelte 或 React + Ant Design Pro。
- 介绍一下 Vanilla JS ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- 作为浏览器原生支持的组件化标准，Web Components使得用Vanilla JS编写的组件可以被任何框架（React, Vue, Angular）无缝使用。它将成为跨框架共享组件的“通用语言”，极大地提升了Vanilla JS的生态价值。
	- 简单页面/库/性能关键应用：直接使用现代Vanilla JS + Web Components。
	- 复杂SPA：使用React/Vue等现代框架。
	- 追求极致性能和开发体验的平衡：选择Svelte/Solid等编译时框架。
	- 无论如何，Vanilla JS作为Web开发的基石，其地位将永远无法动摇，并且其重要性会随着技术的发展而愈发凸显。 
- d:\huangyg\git\sample\vite\
	- pnpm create vite
	- 一路默认，选择vite+Vanilla js
	- 看过简单的counter示范。

- AI：介绍一下 tauri ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。

- 下个时间片回到tauri+vite+Vanilla，做个最小范例。rust作为后端访问本地环境还是需要的。



---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.16.[无名任务]任务&body=日期: 2025.10.16.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251016.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251016190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 使用CEV（Contract Expression Language）/Marlowe分别表达以下规章：规章一{1406}、规章二{boot}
	- 
- https://arxiv.org/abs/2505.00018
	- 各章节基于对不同局部案例的观察，(除非明确引用)并不是基于前面章节的深入。
	- 2.1.提到人类的一些特性，2.2.提到其它定义不能适应的实例，部分内容没有在2.3.纳入模型中。
```
仔细读过之后，发现大部分问题是对话上下文差异造成的。我们分两部分：

第一部分使用微信群话题作为上下文：
这个话题是从程序员就业谈起：怎么避免成为AI时代的“纺织女工”。
先谈到要给专业人员设计业务类agent，帮助或代替他们的收费工作(出路一)。
后来一篇公众号文章提到数字伴生类agent，如果把功能分两类：
1. 在用户认知范围内提供辅助；
2. 帮助用户认识自己、突破自己(出路二)。
第1类仍然可能是低利润甚至免费的、或者回到传统软件，第2类agent更能保障程序员的利润。
在进一步分解第2类agent时，谈到要识别用户隐含的假设、前提。
这里不是指用户遗忘的、本身愿意显性使用的(属于第1类)；而是用户下意识逃避的，很可能是不成立的隐含信息。

放在学校环境里，案例之一是学生入学时达成框架性的约定，基于将来生活的预期接受学校的短期管理(包括入学后不断修订的内容)。
然后学校环境运用框架性约定不断推动学生克服困难。
但现实中也有硬件和仪式上非常相像，效果差异却很大的成功、失败案例。

有哪些产品案例超越了已知的人工失败案例(或其它价值不足以收费的情况)，在agent产品上复制成功案例或者探索原创策略，可以容纳多少就业人数？
基于这样的上下文，我们提到这篇论文中seci模型的对tacit knowledge的运用。
所以我选择论文中设计比较清晰的部分(已完成概要设计)，结合现实判断它是明显区别于数字伴生第2.类的失败案例，还是泛泛地涵盖所有情形。

不过微信群的聊天方式原本就更适合简单地交换信息，不适合持续的主题讨论，每个人隐含的上下文不同很正常。


第二部分跳出微信群，仅仅看论文本身：
主要的障碍是各部分之间的关系。
比如从标题看，2.1和2.2是背景情况，2.3提出单个agent模型和定义，2.4是multi agent，2.4.3~2.5是HAACS(Human–AI Agents)，2.6s似乎回到单个agent。
按正常理解，后面章节是基于前面章节内容的。在这里却有些例外，比如：
- 2.3明确agent的升级和重构必须基于本agent签名；2.4以后提到meta level重构agent level，按上次回答是深入agent内部的。
- 2.3明确agent的定义(比如基于边界)；2.4以后的多层petri网模型适用范围广得多，也讨论了其它agent定义的案例(比如ANP)。
- 2.5把meta-cognition放在Execution-Level，和1.1.2、2.6的内容也有明显差距。
因为各部分使用不同定义，隐含的排列组合太多了。其它细节问题比如一段话是严格定义还是举例，例子覆盖范围以外的情况怎么定性...现在都没有必要展开讨论。
如果能在每处定义切换的位置明确声明，以后阅读起来就方便得多。

这篇论文中对petri网的运用给我很重要的启发，引入类似工具应该能解决一个老瓶颈问题。


```

```
关于你的疑惑，简要解答下：

1, 对于“2.3.(Figure 4)提出的架构只是一种局部情况的观察，还有许多其它情况(比如从sensor进来的信息就被另一个AI或人类控制...)”
Sec 2.3中，基于HA Simon和Wiener的启发而给出了Agent的准确定义及统一概念模型：boundary-centric, goal-seeking adaptive system; 其中的essential/optional components来自控制论(cybernetics)范式，进而对Agenthood作了概念定义, Table 3-4可见当前包括CoT, ReAct在内的agentic system如何映射到该统一模型中，进而启发了Sec 2.4-2.5对human-AI agents collaboration systems (HAACS) 的基于interpreted Petri-net的hierarchical formalism (Meta-Agent-Execution levels)；而Fig. 4是对该模型的high-level刻画；你所提到的“还有许多其它情况(比如从sensor进来的信息就被另一个AI或人类控制...)”，恰恰包含在了Sec 2.1-2.2对agenthood边界情况的讨论中，这些讨论启发Sec 2.3对agent概念的统一定义；回到你所疑问的情况：某个Agent的Sensor的信息的确可以通过Agent的interface/boundary(Sec 2.2-2.3)流向another Agent或Human，这种跨Agent交互被描述/建模为boundary/collaboration transitions(Sec 2.4)；而更generalized的交互(Orchestration & Governance-Coordination, Communication & Interfaces-Skills & Operations)在Sec 2.5中由three-layered PN formalism刻画(meta-agent-execution).

2, 对于“提出的架构还远远不能描述常见的人、智能体和混编的情况(显然，一方定义和修改另一方的架构就很常见)。”
该架构对代表性（限于篇幅）常见情况（empirical studies/implementations）的描述及包含覆盖可略见Table 3-4, 6-7; 该架构的便于理解的high-level diagram参见Fig. 9 。对于“显然，一方定义和修改另一方的架构就很常见)”，这种情况发生在Meta-level (Sec. 2.5) ("From an organization-theory perspective, the meta-level can “load” and “unload” agent-level modules or flip policy switches, while agent sub-nets proceed with day-to-day concurrency.")。

3, 对于“- 定义中使用了有依赖关系的同义词，造成循环定义(比如定义身份时使用并行、克隆这些概念)”
“并行”及“克隆”有依赖关系？你所疑惑的关于Identity的文字(Sec. 2.3.3)应为“Identity. Each agent is uniquely specified by its boundary, i.e., the totality of sensor/actuator channels interfacing with the environment, humans, and other AI agents, and by a cryptographically chained, monotonically time-stamped event log that serializes all input/output (I/O) and internal mutations......”，该讨论清晰指出了Agent维持同一Identity的条件，并指出了在原Agent基础上产生新Identity的情况(比如clone)
```
```
4, 对于 “层次化perti网的三层(Sense-Plan-Act loops)和并不是按元认知分层，是另一种局部情况的观察。”
层次化的三层为Meta-Agent-Execution (Sec 2.5)；该架构通过meta-agent-execution levels的配合，可以刻画Sec 1.1.2 讨论的认知(cognition)及元认知(meta-cognition)能力；Sense-Plan-Act loops只是构成Agent的最基本的工作流， 并作为例子在Sec 2.6讨论

5, 对于“读下来感觉是外包给不同的人，各自拿其它任务的成果改改，收上来几部分拼凑一下就发了。而且很多是总结性的观察，而不是原创设计。所以在业界看来是滞后的。”
这种“literature review (对前人工作的观察的总结)->theoretical framework”的范式也见于Shunyu Yao的针对single Agent的COALA(Cognitive Architectures for Language Agents)，该工作同样是将纷繁复杂的基于不同场景及要求的empirical studies/implementation纳入一个统一的theoretical framework。COALA和本文章的HE2-NET都在ontological和functional层面起到了承前启后的理论作用。读者可参考Intro的Sec 1.3对这篇文章的各个Section“层层递进又相互紧密联系”的逻辑/叙事流有个宏观的认识

6，对于“- 可能会使用SECI and Ba，但需要结合权责，而不能像这篇论文那样只是无约束对话的主题(类似于军官vs文工团的差异)。”
关于基于Pask's conversation theory+SECI的Human-AI agent collaborative learning arch. 参考Sec 3.4及参见Fig. 5。至于“结合权责”，有无“约束对话的主题”，等具体细节，可由未来的empirical studies/implementation根据具体场景及要求将该架构实例化实现。

7，对于“如果基于这篇文章2.3.的架构：1. 增加部件（Sensor 、Comparator ...），用自由定义它们的连接；1. 扩展到每一个或多个部件被boundary框住，由更深层的另一个AI或人控制。
应该可以覆盖更多情况，也符合现实中有效突破认知的情况。这种情况在学校里可能不常见，企业里比如一个部门规定另一个部门的工作原语、设置另一个部门的编制，人类的一个器官控制另一个器官的输入...这些很常见。也可能是时间不够吧，如果能展开就好多了。”
这些情况其实都包含在Section 2的层层讨论及定义中(formal def of agent -> hierarchical formalism of HAACS)，哪个地方不太明白，可具体指出？

谢谢提问，如有其他疑问，有空作答
```