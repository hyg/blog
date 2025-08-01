# 2025.08.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250801190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7000 | 6530 | 8790 |
| PSMD | 4000 | 1610 | 2390 | 1230 |
| ego | 2530 | 940 | 1590 | 1335 |
| infra | 2000 | 425 | 1575 | 405 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 3495 | -1495 | 3120 |
| js | 1000 | 370 | 630 | 1710 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：a2a-js
  - js的第2号事项：graphviz
  - js的第3号事项：nodejs中调用jar
  - learn的第3号事项：Agent Protocol https://agentprotocol.ai/

- 60分钟时间片：
  - PSMD的第1号事项：PSMD agent AI的内部角色和功能
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。

- 90分钟时间片：
  - ego的第1号事项：整理task及其相互关系
  - learn的第1号事项：业务规则引擎
  - PSMD的第2号事项：筹备会议 by role+prompt
  - ego的第3号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：machines model
  - infra的第4号事项：Rete/Phreak算法的自主实现
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.01.[无名任务]任务&body=日期: 2025.08.01.%0D%0A序号: 11%0D%0A手稿:../../draft/2025/20250801.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250801190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

### 试用qwen code

- npm install -g @qwen-code/qwen-code
```
D:\huangyg\git\js.sample\qwencode>qwen --version
(node:5040) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
0.0.1-alpha.12
```
- 无论使用默认空间的API Key，还是claude code业务空间都提示；无论在环境变量、.env设置：
	- ✕ [API Error: OpenAI API error: 401 Incorrect API key provided. ]
- /docs指向qwen coder的文档。
- /auth提示回车设置，然后回到回话模式。
- 选择模型"qwen3-coder-plus-2025-07-22"，界面显示的是"qwen3-coder-plus".
- 相同配置在claude code都能用了，在qwen code却不行。
- 删掉了.env文件，通过环境变量设置，可以使用了。
- 对于claude code下调用子业务空间的apikey，会报出403错误。经过几个小时反复解释，售后工程师承认是百炼平台的问题，会进一步排查。

### 如何隔离“数据结构的变化”对“业务逻辑”的影响

- 收集了一些资料，还在消化。

### kimi

提要（≤1000字）
当数据结构频繁演变而业务代码需少动，关键是用“隔离层”把变化关在门外。最轻量的做法是把字段全包进类，只暴露 getter/setter；若还要向前兼容，就给数据加 version 字段并写 migrate 函数。数据结构稳定但操作常增，可用访问者模式把“操作”抽离成独立类。再大一点的系统，把状态变事件流（Event Sourcing），业务只订阅事件，升级时改事件适配器即可。想彻底放开 Schema，可用 Mongo/PostgreSQL JSONB 这类动态字段库，代价是失去静态检查。跨语言或需要强类型时，用 Protobuf／OpenAPI 先写 Schema，再自动生成代码，字段变动只需重跑生成器。最重的武器是 DDD 的防腐层：内部领域模型保持不变，外部任何格式都通过适配器转成领域对象。总结：先封装→再版本化→必要时事件化或防腐层，层层递进，把变化隔离得越远，核心业务改得越少。

资源清单（YAML）
```yaml
resources:
  - name: pydantic
    type: npm/python-package
    summary: 用类型注解自动校验与迁移 JSON/字典数据，轻松做版本兼容。

  - name: zod
    type: npm-package
    summary: TypeScript 的运行时模式校验库，可写 schema 并自动生成类型。

  - name: MongoDB
    type: database
    summary: 文档数据库，文档结构可动态扩展，适合快速迭代场景。

  - name: PostgreSQL-JSONB
    type: database-feature
    summary: 在关系库内直接存 JSONB，动态字段与 SQL 查询兼得。

  - name: Protocol-Buffers
    type: google-tool
    summary: 写 .proto 定义结构，跨语言生成强类型代码，Schema 演进内置兼容规则。

  - name: OpenAPI-Generator
    type: npm/cli
    summary: 根据 OpenAPI 规范一键生成客户端/服务端代码，减少手写胶水层。

  - name: Event-Sourcing
    type: architecture-pattern
    summary: 把每次状态变更存为不可变事件，回放或迁移只需改事件解释器。

  - name: CQRS
    type: architecture-pattern
    summary: 命令与查询分离，通过事件同步读写模型，降低数据结构升级影响。

  - name: Anti-Corruption-Layer
    type: ddd-pattern
    summary: 在领域模型与外部世界之间加翻译层，外部再变也只动适配器。
```

### deepseek

### 对话提要（1000字内）

面对频繁变更的数据需求和结构升级，核心解决思路是**隔离变化点**与**抽象稳定层**。通过分层架构（业务层/数据层分离）和面向接口编程，将易变的数据操作封装在独立模块中。关键实践包括：  
1. **抽象接口**：业务逻辑依赖稳定的`IDataRepository`接口而非具体实现  
2. **设计模式应用**：  
   - 适配器模式转换新旧数据结构  
   - 策略模式动态切换处理算法  
   - 装饰器模式无侵入扩展功能  
3. **配置驱动**：用YAML/JSON管理字段映射，避免硬编码  
4. **依赖注入**：通过DI容器（如Spring）实现零代码切换实现类  
5. **中间模型**：业务层使用稳定的DTO对象，数据层负责与Entity转换  
6. **版本化兼容**：数据添加`version`字段，多版本解析器并存  
7. **事件溯源**：存储状态变更事件而非最终状态，支持历史重建  

核心原则是将变化限制在数据访问层（DAL），通过接口/配置/模式使业务代码对底层变更无感知，最终达成**修改配置 > 新增类 > 修改类**的优先级控制。

---

### 资源清单（YAML格式）

```yaml
resources:
  # 开发框架
  - name: Spring Framework
    summary: Java依赖注入容器，支持声明式实现类切换和配置管理
  - name: Axon Framework
    summary: 事件溯源实现框架，提供事件存储和聚合重建支持
  
  # 配置管理
  - name: Jackson
    summary: Java JSON处理库，支持YAML/JSON配置动态解析
  - name: js-yaml
    summary: Node.js的YAML解析器，实现配置驱动字段映射

  # 设计模式实现
  - name: InversifyJS
    summary: TypeScript依赖注入工具，支持策略模式实现动态替换
  - name: Immer
    summary: 不可变数据装饰器库，实现装饰器模式的状态管理

  # 数据版本管理
  - name: Liquibase
    summary: 数据库版本控制工具，支持schema变更的渐进式迁移
  - name: EventStoreDB
    summary: 专用事件存储数据库，优化事件溯源架构的数据重建

  # 中间模型转换
  - name: MapStruct
    summary: Java DTO/Entity转换器，自动生成类型安全映射代码
  - name: class-transformer
    summary: TypeScript对象转换工具，支持DTO层数据净化
```

### gemini

好的，这是对我们所有对话内容的提要，以及相关资源的YAML格式清单。

---

### **对话提要**

本次对话从企业组织形式的对比分析入手，深入探讨了公司、合伙企业与合作社企业的法律地位、责任承担、决策机制及优缺点的差异。一个核心洞见是，虽然这些组织有固定的法律定义（如公司的有限责任、合伙企业的无限责任），但在现实中存在多种变体（如有限合股企业、S型公司）以适应不同的商业需求，这揭示了理论与实践的灵活性。

随后，我们转向技术实践，以一个经典的线性规划问题（拖拉机耕地）为例，预判了AI模型在解决此类问题时可能出现的错误，如单位混淆、忽略最优混合分配等，并提出了通过精确提问和要求详细步骤来规避这些问题的策略。

对话的核心部分聚焦于AI技术与软件工程的结合。我们对一系列AI相关的技术网站和研究论文进行了分析，内容涵盖了从底层协同技术（CRDT）、数据可视化（D3.js）、逻辑学根基（斯坦福哲学百科），到AI代理的开发框架（AutoGen）、应用前景（世界经济论坛）、治理风险（IBM）以及核心技术（AgentTuning）。这描绘出一幅围绕“AI代理”这一前沿领域，从理论、技术、应用到治理的全景图。

在此基础上，我们进入了更具体的软件开发议题。针对FSM（有限自动机）和DAG（有向无-环图）这类数据结构的存储，我们对比了DOT、JSON、YAML和Edge List等纯文本格式，强调了在可读性、可解析性和生态系统之间的权衡选择。DOT语言因其强大的可视化能力被推荐，而JSON则因其在程序化处理中的普适性而备受青睐。

接着，我们为一个复杂的项目——“智能决策管理平台”设计了详细的开发路线图。该项目旨在利用LLM将自然语言（会议决议）转换为DMN/Drools规则，并与用友等ERP系统集成。我们设计了该流程的中间JSON格式，作为LLM与规则引擎之间的稳定“契约”，并详细规划了与用友YonBIP平台通过Webhook和API进行集成的技术细节，强调了安全校验和数据模型适配的重要性。

在讨论了去中心化存储生态后，我们对比了IPFS/Filecoin、Arweave、Sia和Storj四大主流方案。分析指出，IPFS凭借其庞大的生态系统成为通用标准，Arweave以“一次付费，永久存储”的模式占据独特生态位，Sia主打极致性价比，而Storj则通过S3兼容API成功吸引了Web2开发者，凸显了不同技术路线满足不同市场需求的现实。

之后，我们通过一个Node.js脚本实例，展示了如何从本地读取SimpleNote的笔记数据并导出为Markdown文件，这是一个结合文件系统操作、路径处理和JSON解析的实用编程任务。

最后，对话升华至软件工程的哲学层面。针对“数据结构不断升级，如何减少代码修改”这一核心痛点，我们提出了一个多层次的解决方案：在代码层面，通过**数据访问层（Repository Pattern）**和**稳定的内部模型（DTO）**建立隔离带；在数据层面，采用**灵活的JSON格式**或**支持演进的序列化协议（Protobuf）**；在架构层面，通过**微服务**和**API网关**将变化的影响半径限制在最小。其核心思想是**“拥抱变化”**，通过建立清晰的边界和稳定的“契约”，让系统的不同部分能够独立演化，从而实现真正的软件敏捷性和健壮性。

---

### **资源清单 (YAML格式)**

```yaml
products:
  - name: 公司 (Company/Corporation)
    summary: 以资本为核心，追求利润最大化的独立法人组织，股东承担有限责任。
  - name: 合伙企业 (Partnership)
    summary: 基于合伙人信任与协议的非法人组织，普通合伙人承担无限责任。
  - name: 合作社企业 (Cooperative)
    summary: 为社员共同利益服务的独立法人组织，实行“一人一票”民主管理。
  - name: 用友YonBIP
    summary: 用友网络推出的商业创新平台，提供开放API用于企业系统集成。
  - name: Camunda
    summary: 流行的开源工作流和决策自动化平台，支持BPMN和DMN标准。
  - name: Drools
    summary: 一个基于Java的业务规则管理系统（BRMS），使用Rete算法。
  - name: IPFS (InterPlanetary File System)
    summary: 一个点对点的分布式文件系统协议，通过内容哈希进行寻址。
  - name: Filecoin
    summary: 建立在IPFS之上的去中心化存储市场，为IPFS提供经济激励。
  - name: Arweave
    summary: 一个以“一次付费，永久存储”为核心理念的去中心化存储网络。
  - name: Sia
    summary: 一个追求极致性价比和隐私性的去中心化存储云市场。
  - name: Storj
    summary: 提供与AWS S3兼容API的去中心化云存储服务，对开发者友好。
  - name: SimpleNote
    summary: 一款轻量、跨平台的笔记应用程序。
  - name: FSM (有限自动机)
    summary: 一种计算模型，用于描述状态和转换，常用于解析、词法分析等。
  - name: DAG (有向无环图)
    summary: 一种没有有向环的图数据结构，广泛用于任务调度、依赖关系等。

websites_and_docs:
  - name: crdt.tech
    summary: 介绍CRDT（无冲突复制数据类型）的专业技术网站，是实时协同应用的核心。
  - name: d3js.org
    summary: D3.js的官方网站，一个用于数据驱动文档操作的JavaScript库，擅长数据可视化。
  - name: Stanford Encyclopedia of Philosophy (plato.stanford.edu)
    summary: 斯坦福哲学百科全书，提供了关于“逻辑与AI”等主题的深度学术文章。
  - name: promptingguide.ai
    summary: 一份全面的提示工程在线指南，教授如何高效地与大型语言模型交互。
  - name: researchgate.net
    summary: 一个面向科学研究人员的社交网络服务，可查找和分享学术论文。
  - name: ibm.com/think/insights
    summary: IBM的行业洞察平台，发布关于技术趋势（如AI治理）的分析报告。
  - name: weforum.org
    summary: 世界经济论坛官网，发布关于全球经济、技术和社会趋势的前瞻性文章。
  - name: seekr.com/blog
    summary: 一个提供AI相关技术和趋势科普文章的商业博客。
  - name: arxiv.org
    summary: 一个收集物理学、数学、计算机科学等领域预印本论文的在线平台。

libraries_and_packages:
  - name: Microsoft AutoGen
    summary: 微软开源的一个框架，用于简化和构建多AI代理（Multi-Agent）应用。
  - name: AgentTuning
    summary: 一篇论文中提出的技术，旨在高效地将大型语言模型微调成强大的AI代理。
  - name: streamlit-oauth
    summary: 一个为Streamlit应用添加OAuth2（如Google/Facebook登录）功能的NPM包。
  - name: Node.js
    summary: 一个基于Chrome V8引擎的JavaScript运行时，用于构建服务器端和网络应用。

```

### gpt

### 对话1000字提要

本次对话围绕企业组织形式、AI决策引擎、数据结构设计、分布式存储、Node.js工具开发、Web项目升级等主题展开。首先，详细比较了公司、合伙企业、合作社的法律结构、责任、决策机制和优缺点，并用NER/RE方法抽取三元组，分析哪些关系稳定、哪些可变。针对AI自动化决策场景，设计了DMN/DRL的中间JSON格式，并详细说明了如何与用友ERP系统API对接，包括Webhook、数据签名、同步/异步处理等细节。

在分布式存储领域，系统梳理了IPFS生态及其与Arweave、Storj、Sia、BTFS等Web3存储方案和传统云存储的对比，分析了各自的技术特点、优缺点和社区活跃度。针对Node.js开发需求，给出读取Simplenote本地笔记并导出为Markdown的完整代码。对于Web项目（如RedaHomes/Home003_0520），详细设计了用户注册（含Google/Facebook OAuth）、保存检索、邮件提醒等新功能的实现方案，逐步给出每处新代码，并提供自动化脚本。

最后，针对数据结构和需求频繁变化，提出了减少代码变动的设计原则，包括面向接口、数据驱动、解耦分层、插件机制、Schema驱动等，并给出具体技术和代码示例。整体建议以抽象、解耦和数据/配置驱动为核心，提升系统的可维护性和扩展性。

---

### 资源清单（yaml格式）

```yaml
products_and_websites:
  - crdt.tech: "CRDT技术文档，介绍无冲突复制数据类型，适合协同编辑场景。"
  - d3js.org: "D3.js数据可视化库官网，支持复杂交互式图表。"
  - plato.stanford.edu/entries/logic-ai: "斯坦福哲学百科，探讨逻辑与AI的关系。"
  - promptingguide.ai: "提示工程指南，系统讲解如何与大模型高效交互。"
  - github.com/microsoft/autogen: "微软AutoGen项目，多智能体AI应用开发框架。"
  - researchgate.net/publication/382156942: "论文，分析AI在任务管理系统中的集成。"
  - ibm.com/think/insights/ai-agent-governance: "IBM关于AI代理治理的行业洞察。"
  - weforum.org/stories/2025/05/how-ai-agents-are-driving-the-administrative-revolution: "世界经济论坛，AI代理推动行政革命的前瞻文章。"
  - seekr.com/blog/understanding-ai-agents-the-next-step-in-enterprise-transformation: "企业级AI代理科普文章。"
  - arxiv.org/abs/2311.09576: "AgentTuning论文，研究高效微调大模型为AI代理。"
  - arxiv.org/abs/2503.15490: "未来论文链接，目前无内容。"
  - ipfs.io: "IPFS官网，分布式内容寻址文件系统。"
  - filecoin.io: "Filecoin，IPFS的激励层，去中心化存储市场。"
  - arweave.org: "Arweave，永久存储区块链协议。"
  - storj.io: "Storj，分布式云存储平台，兼容S3。"
  - sia.tech: "Sia，去中心化云存储平台。"
  - bttc.network: "BTFS，BitTorrent团队的分布式文件系统。"
  - aws.amazon.com/s3: "Amazon S3，主流中心化云存储服务。"
  - ceph.io: "Ceph，开源分布式文件系统。"

npm_packages:
  - sqlite3: "Node.js的SQLite数据库驱动。"
  - fs-extra: "Node.js文件系统扩展库，支持Promise和递归操作。"
  - path: "Node.js内置路径处理模块。"
  - passport: "Node.js认证中间件，支持多种登录方式。"
  - passport-local: "Passport本地用户名密码认证策略。"
  - passport-google-oauth20: "Passport的Google OAuth 2.0认证策略。"
  - passport-facebook: "Passport的Facebook OAuth认证策略。"
  - dotenv: "环境变量加载工具。"
  - nodemailer: "Node.js邮件发送库。"
  - mongoose: "MongoDB对象建模工具。"
  - passport-local-mongoose: "为Mongoose用户模型集成Passport本地认证。"

tools_and_others:
  - draw.io: "在线流程图和决策表绘制工具。"
  - DB Browser for SQLite: "可视化SQLite数据库管理工具。"
  - Obsidian: "本地Markdown知识库管理工具。"
  - Everything/Spotlight: "本地文件快速搜索工具。"
```


