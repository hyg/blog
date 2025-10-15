# 2025.10.15.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:44	learn: [描述逻辑（Description Logic, DL）](#20251015140000)
- 14:30~15:09	learn: [CEV（Contract Expression Language）](#20251015143000)
- 16:00~16:59	learn: [Tauri + Rust](#20251015160000)
- 19:00~19:59	check: [零散笔记](#20251015190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 890 | 12640 | 9540 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 195 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 710 | 1290 | 4245 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第6号事项：XACML 4.0 / ODRL 2.2
  - learn的第7号事项：RuleML,结构化规则语言（如RuleML的核心子集）
  - learn的第8号事项：CloudEvent（JSON 格式，spec 1.0+）
  - js的第8号事项：copilot

- 60分钟时间片：
  - learn的第1号事项：Tauri + Rust
  - js的第1号事项：LangChain.js
  - learn的第2号事项：Zapier
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
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.15.[描述逻辑（Description Logic, DL）]任务&body=日期: 2025.10.15.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251015.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251015140000"></a>
## 14:00 ~ 14:44
## learn: [描述逻辑（Description Logic, DL）]


- AI：介绍一下 描述逻辑（Description Logic, DL） ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	1. DL有哪些工具可以使用，尤其是nodejs+windows环境。
		- 主流的、功能完备的DL推理机几乎全部基于Java构建。
			- 有一些小型的学术项目或OWL解析器（如 rdf.js），但它们不具备完整的DL推理能力（如基于Tableau算法的分类）。因此，对于严肃的DL应用，目前还必须依赖基于Java的工具。
		- DL推理机 (后端): HermiT 或 Pellet。
		- Web服务框架 (后端): Spark Java 或 Spring Boot。
		- 你的应用 (前端): Node.js + Express。
	2. “LLM从海量文献中提取实体和关系，自动生成DL的TBox和ABox”有实例吗，或者把技术方案细化陈述一下。
		- 提取文献中的(主语, 谓语, 宾语)三元组然后清洗：实体消歧与链接、关系规范化、冲突解决、...
		- 本体构建（生成TBox（术语库））：概念归纳、公理生成、...
		- 知识库填充（生成ABox（断言库））：将阶段三中清洗过的、标准化的三元组直接转换为ABox断言。
		- 序列化与验证
		- OntoGPT
	1. DL适合表达基础物理、数学方面的知识吗，如果适合有哪些实例。
		- DL非常适合表达科学知识中的分类、层级、属性和约束关系，这是科学体系的骨架。但它不擅长表达涉及连续数值计算、复杂方程和动态过程的知识。
		- Gene Ontology (GO) - 生物学的皇冠明珠
		- SWEET (Semantic Web for Earth and Environmental Terminology) - 地球科学
		- 有多个研究项目尝试用DL来形式化数学知识，例如构建一个包含群、环、域、拓扑空间等概念及其关系的本体。
	2. DL和CEV之间的关系是什么。
		- CEV是DL的设计哲学在智能合约领域的“特化应用”和“工程实现”。
		- 它们不是父子关系，而是 “思想与方法论”的继承与适配关系 。
		
- 可以用于深层知识的表达。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.15.[CEV（Contract Expression Language）]任务&body=日期: 2025.10.15.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251015.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251015143000"></a>
## 14:30 ~ 15:09
## learn: [CEV（Contract Expression Language）]

- AI：介绍一下 描述逻辑CEV（Contract Expression Language），推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点，分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- 一个CEV合约本质上是一个有限状态机，定义了从一个状态到另一个状态的所有合法转换。
		- CEV/Marlowe代表了一条与主流智能合约发展截然不同的道路——通过限制来获得安全。
	- 著名实现：Marlowe。CEV更多是一个理论模型。在Cardano生态中，它的最著名和最实用的实现是 Marlowe。
		- 由于CEV/Marlowe与Cardano生态紧密绑定，其资料主要集中在IOHK（Input Output Global，Cardano的开发公司）的官方产出。
	- “竞品”主要指其他用于编写智能合约的语言或平台。Solidity等等
		- Marlowe不会取代Solidity成为主流的通用智能合约语言。它的成功在于占领高价值的金融合约细分市场。就像SQL没有取代C语言，但在数据操作领域不可或缺一样，Marlowe有望成为“智能合约领域的SQL”。
	- 目标用户：希望构建高价值、高风险金融合约的个人或机构。例如，去中心化金融的衍生品、贸易金融、债券发行、数字资产托管等。
- 适合利益分配部分的表达。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.15.[Tauri + Rust]任务&body=日期: 2025.10.15.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20251015.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251015160000"></a>
## 16:00 ~ 16:59
## learn: [Tauri + Rust]

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
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.15.[无名任务]任务&body=日期: 2025.10.15.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251015.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251015190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 整理思路：内部资源分配绑定给谁：
	1. vat：一组假设、公理、前提；
	1. entity：一份章程，一组自我行为的约束；
	1. level：可扩展定义的层级
		1. 为浅层提供vat(创造、维护)
		1. 自动化完成浅层的工作
		1. 为浅层提供SOP(创造、维护)
- https://arxiv.org/abs/2505.00018
	- 这篇内容有些问题：
	- 2.3.(Figure 4)提出的架构只是一种局部情况的观察，还有许多其它情况(比如从sensor进来的信息就被另一个AI或人类控制...)
	- 提出的架构还远远不能描述常见的人、智能体和混编的情况(显然，一方定义和修改另一方的架构就很常见)。
	- 定义中使用了有依赖关系的同义词，造成循环定义(比如定义身份时使用并行、克隆这些概念)
	- 层次化perti网的三层(Sense-Plan-Act loops)和并不是按元认知分层，是另一种局部情况的观察。
	...
	读下来感觉是外包给不同的人，各自拿其它任务的成果改改，收上来几部分拼凑一下就发了。
	而且很多是总结性的观察，而不是原创设计。所以在业界看来是滞后的。

	- 如果基于这篇文章2.3.的架构：
		1. 增加部件（Sensor 、Comparator ...），用自由定义它们的连接；
		2. 扩展到每一个或多个部件被boundary框住，由更深层的另一个AI或人控制。
	应该可以覆盖更多情况，也符合现实中有效突破认知的情况。

### AI chat

- 有限自动机FSM和petri网的使用场景有什么不同，除了这两种还有哪些类似的数学模型，对比它们的优缺点和适用场景。
- 使用FSM和petri分别表达以下规章：规章一{1406动议}、规章二{boot}
    - 规章一以“顺序-截止”为主→FSM 足够；若未来要“多事项并行审议”，再迁到 Petri 不迟。
    - 规章二存在竞聘循环+资源竞争+多出口→Petri 网更简洁，可直接用于工作流引擎或智能合约原型；FSM 会陷入“历史状态+乘积爆炸”泥潭。
- Petri 有可以使用的IT工具或底层库，尤其是nodejs+windows环境。
	1. 介绍一下：颜色网/时间网高级特性、高层封装的有色网、子网嵌套，就这几方面深入对比pnjs、petri-net、stepify、petri-js这几个产品。
		- stepify最全，petri-js支持时间网以外的特性（2025 roadmap 已列出 时间区间+PNML 导入/导出，有望成长为“Node 版 CPN Tools”）。
		- pnjs / petri-net：停留在“P/T 网教学级”，无颜色、无时间、无层级；
		- stepify：把工作流“任务-状态”直接映射成有色+时间+子网的 Petri 语义，API 高层，适合业务编排；
		- petri-js：最接近学术级 CPN，颜色、弧函数、宏子网俱全，但无时间区间，适合建模-验证-代码生成链路。
	2. 对比上面提到的pnjs、petri-net、stepify、petri-js几个nodejs包的适用场景，团队和社区情况。
		- 担心维护风险→ 避开已停滞的 pnjs / petri-net，优先 stepify（业务持续）或 petri-js（学术持续）。
		- “颜色+时间+子网”三件套：stepify 让你一周落地工作流，petri-js 让你逼近学术级 CPN；想稳、想教学——用 pnjs/petri-net；想远、想复杂——跟 petri-js 走，2026 前会补齐时间网+PNML，成为 Node 生态最像 CPN Tools 的存在。
	
