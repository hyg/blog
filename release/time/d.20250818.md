# 2025.08.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250818190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8956 | 4574 | 9885 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 660 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4475 | -2475 | 4245 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第1号事项：LegalRuleML（Legal Rule Markup Language）
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：Tauri + Rust

- 60分钟时间片：
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：月度事务
  - raw的第2号事项：熟悉内脏之间的关系
  - xuemen的第2号事项：根据最新政策文件，考虑AER、AVR文件升级。

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第5号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.18.[无名任务]任务&body=日期: 2025.08.18.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250818.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250818190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 选择 Plasma 桌面。默认用wayland。
- 准备熟悉rust和julia语言


### doubao对话内容小结
本次对话围绕技术问题解决、编程语言分析及工具配置展开，涵盖多个技术领域的核心知识点与实践方案：

#### 1. Matrix 注册功能问题排查
用户在使用 `matrix-js-sdk` 开发注册功能时，因 SDK 版本更新导致旧方法 `registerWithPassword` 失效，出现 `TypeError`。通过替换为最新 `client.register()` 方法、调整服务器配置（如使用 `https://matrix.org` 等开放注册服务器），解决了 API 不兼容问题。后续因服务器关闭公开注册、网络请求失败等问题，进一步优化代码，增加服务器自动重试逻辑、自定义 HTTPS 代理配置，最终实现注册功能适配。

#### 2. Docker 镜像仓库配置优化
用户配置 Docker 镜像加速后，指定仓库镜像可正常拉取，但默认仓库仍访问失败。核心问题在于 `registry-mirrors` 仅代理官方仓库，且配置文件格式（`daemon.conf` vs `daemon.json`）及仓库类型（独立仓库 vs 官方代理）影响生效。通过修正配置文件格式、登录私有仓库认证、设置 `registry-config` 映射规则，解决了默认仓库自动使用指定镜像源的问题，同时提供了仓库验证、权限排查等实用方案。

#### 3. Debian 桌面环境与显示协议对比
对比了 Debian 主流桌面环境（GNOME、KDE Plasma、Xfce、LXQt 等）的资源占用、易用性、定制性及适用场景，帮助用户根据硬件配置和需求选择。同时解释了 X11 与 Wayland 显示协议的核心差异：X11 兼容性强但架构老旧，Wayland 高效安全但生态待完善，指导用户根据硬件和功能需求选择协议。

#### 4. 编程语言分析与趋势预测
讨论了近年有前景的编程语言，重点分析 Rust（系统级安全与性能）、Kotlin（跨平台开发）、TypeScript（全栈渗透）、Go（云原生）等的应用场景与优势。针对解释型语言，介绍了 Oxide、Pointless、RoarLang 等新兴语言的特性。还梳理了具有元编程特性的语言（Lisp、Python、Ruby、Rust 等）及其核心机制。最后分析了 Ruby 近年发展（性能优化、类型系统增强）与未来趋势（JIT 成熟、跨语言协作），并对 2035 年编程语言排行进行了前瞻。


### 产品与项目简介（JSON格式）
```json
[
  {
    "名称": "matrix-js-sdk",
    "简介": "Matrix 协议的 JavaScript 软件开发工具包，用于构建 Matrix 客户端应用，支持用户注册、消息发送等核心功能。",
    "网址": "https://github.com/matrix-org/matrix-js-sdk"
  },
  {
    "名称": "Docker",
    "简介": "开源容器化平台，通过容器打包应用及依赖，实现跨环境一致运行，支持镜像仓库配置与加速。",
    "网址": "https://www.docker.com/"
  },
  {
    "名称": "GNOME",
    "简介": "Linux 主流桌面环境之一，以现代设计和简洁交互为核心，支持 Wayland 协议，适合中高端硬件。",
    "网址": "https://www.gnome.org/"
  },
  {
    "名称": "KDE Plasma",
    "简介": "高度定制化的 Linux 桌面环境，功能丰富，支持海量个性化配置，适合追求定制性的用户。",
    "网址": "https://kde.org/plasma-desktop/"
  },
  {
    "名称": "Xfce",
    "简介": "轻量级 Linux 桌面环境，资源占用低，稳定性强，适合老旧硬件或追求高效的场景。",
    "网址": "https://xfce.org/"
  },
  {
    "名称": "X11",
    "简介": "传统显示服务器协议，兼容性极强，支持远程显示，但架构老旧，效率较低。",
    "网址": "https://www.x.org/wiki/"
  },
  {
    "名称": "Wayland",
    "简介": "新一代显示服务器协议，架构简洁高效，原生支持现代功能（如防撕裂、HDR），安全性更强。",
    "网址": "https://wayland.freedesktop.org/"
  },
  {
    "名称": "Rust",
    "简介": "系统级编程语言，通过所有权系统实现内存安全与高性能，应用于云原生、区块链、嵌入式等领域。",
    "网址": "https://www.rust-lang.org/"
  },
  {
    "名称": "TypeScript",
    "简介": "JavaScript 的超集，添加静态类型系统，提升代码可维护性，广泛用于前端框架及全栈开发。",
    "网址": "https://www.typescriptlang.org/"
  },
  {
    "名称": "Go",
    "简介": "云原生领域主流语言，支持原生并发，语法简洁，用于开发微服务、容器工具（如 Kubernetes）。",
    "网址": "https://go.dev/"
  },
  {
    "名称": "Ruby",
    "简介": "动态面向对象解释型语言，语法优雅，元编程能力强，Ruby on Rails 框架使其在 Web 开发中流行。",
    "网址": "https://www.ruby-lang.org/"
  },
  {
    "名称": "Ruby on Rails",
    "简介": "基于 Ruby 的 Web 开发框架，遵循“约定优于配置”理念，通过元编程提升开发效率，用于电商、社交等应用。",
    "网址": "https://rubyonrails.org/"
  },
  {
    "名称": "Rustlings",
    "简介": "Rust 学习练习集，包含一系列代码修复任务，帮助学习者掌握 Rust 基本概念与进阶主题。",
    "网址": "https://github.com/rust-lang/rustlings"
  },
  {
    "名称": "Element",
    "简介": "Matrix 协议的开源客户端，支持跨平台即时通信，可手动注册 Matrix 账号并获取访问令牌。",
    "网址": "https://element.io/"
  },
  {
    "名称": "Gitee",
    "简介": "中国开源代码托管平台，支持 Git 仓库管理，通过 SSH 或 HTTPS 访问，需正确配置密钥实现认证。",
    "网址": "https://gitee.com/"
  }
]
```

# 对话内容总结

## 一、技术概念与架构
对话围绕软件开发架构、区块链技术及相关工具展开，涵盖多个核心领域。首先探讨了**monorepo**，这是一种单仓库管理多项目的模式，非Node.js专属，Rust通过Cargo Workspaces、Go通过Modules+工作区支持，核心是集中管理依赖与协作。随后聚焦跨平台二进制一致性与源码审计，强调依赖锁定、Docker标准化构建及哈希校验机制，确保发布物与源码对应。

区块链领域中，详细分析了**智能合约平台**，对比以太坊、Solana、BSC、Polygon、Avalanche等公链的性能、生态与适用场景，提及国产联盟链长安链的合规性与企业级特性。**DAO（分布式自治组织）** 方面，介绍其发展现状、治理工具（如Aragon、DAOstack）及完全去中心化案例（Nouns DAO、Flamingo DAO），探讨规则与执行记录的链上存储及与智能合约的关系。

## 二、技术方案与工具
在实际应用方案上，讨论了部门级办公软件的外部配置方案，包括API集成、身份协议（LDAP/SAML）、配置文件批量部署等，列举主流财务/ERP/CRM软件的接口支持。针对智能合约跨链迁移需求，提出模块化分层架构、标准化协议及跨链工具（Chainlink CCIP、LayerZero）的解决方案，强调业务逻辑层与适配层分离以降低迁移成本。

开发工具与编辑器方面，对比了CLI编辑器**Micro**（Go语言，简单易用，支持多光标与插件）、**Helix**（Rust语言，模态编辑，集成LSP）、**Edit**（Rust语言，Windows Terminal专属，无模式设计）的特性与适用场景。还介绍了媒体监督平台**The Hoot**和去中心化治理工具**Snapshot v1**，前者聚焦印度媒体伦理，后者提供链下无gas费投票服务。

## 三、核心技术定义
最后解释了**推理模型**，即训练后用于预测决策的AI模型，经历训练与推理阶段，具有轻量化、输入输出映射特性，常见类型包括神经网络、传统机器学习模型及符号推理模型，广泛应用于视觉、NLP、推荐系统等领域。


## 四、产品与项目简介（JSON格式）
```json
[
  {
    "name": "Aragon",
    "introduction": "模块化DAO治理框架，支持自定义投票规则与资金管理，兼容以太坊生态，超2000个DAO基于其构建，工具链成熟但Gas费较高。",
    "url": ""
  },
  {
    "name": "DAOstack",
    "introduction": "基于全息共识机制的DAO工具，通过“预测者”提升决策效率，适合大规模协作场景，机制复杂需抵押代币，存在中心化风险。",
    "url": ""
  },
  {
    "name": "Nouns DAO",
    "introduction": "完全链上自治的DAO，每日拍卖NFT，收益存入国库由社区投票分配，无法律实体，资产以ETH形式存储，IP通过CC0协议公开。",
    "url": ""
  },
  {
    "name": "Flamingo DAO",
    "introduction": "去中心化NFT投资DAO，成员通过质押FLAM代币参与投票，资金分配与拍卖执行自动化，无中心化财务流程，成员身份匿名。",
    "url": ""
  },
  {
    "name": "The Hoot",
    "introduction": "印度独立数字媒体平台，聚焦媒体监督与新闻伦理，批判虚假新闻、媒体垄断等问题，非盈利属性，内容免费开放。",
    "url": "https://thehoot.news/"
  },
  {
    "name": "Snapshot v1",
    "introduction": "区块链去中心化治理投票平台，支持链下无gas费投票，结果可上链存证，适配多链生态，提供多样化投票机制与自定义设置。",
    "url": "https://v1.snapshot.org/#/"
  },
  {
    "name": "Micro",
    "introduction": "Go语言开发的CLI编辑器，目标替代Nano，采用现代快捷键，支持多光标、语法高亮与插件管理，适合终端与资源受限环境。",
    "url": ""
  },
  {
    "name": "Helix",
    "introduction": "Rust语言开发的模态CLI编辑器，采用“选择-操作”模式，集成Tree-sitter与LSP，支持多光标与模糊搜索，适合代码开发。",
    "url": ""
  },
  {
    "name": "Edit",
    "introduction": "微软开源的Rust CLI编辑器，专为Windows Terminal设计，支持多文件与鼠标操作，无模式设计，作为Windows 11内置功能。",
    "url": ""
  },
  {
    "name": "长安链（ChainMaker）",
    "introduction": "国产联盟链平台，支持许可制访问与可插拔共识，兼容Go/Java/Solidity，强调国密算法与合规性，适用于政务、金融等企业级场景。",
    "url": ""
  }
]
```

### 对话内容总结  
本次对话围绕企业规则形式化表达的语法选择、跨系统自动执行场景的规则语法适配，以及Drools规则引擎的缺陷与替代方案展开，核心内容如下：  


#### 一、企业章程的形式化语法选择  
企业章程需满足精确性、无歧义性和结构性，适合选择以下语法：  
1. **LegalRuleML**：专为法律文档设计的XML/OWL语言，可精确表达条款的“条件-结论”“权利-义务”逻辑及层级结构（章、节、条），便于机器理解。  
2. **描述逻辑（DL）**：一阶逻辑子集，用于构建“股东”“董事会”等概念体系及关系（如“董事长属于董事会成员”），常与OWL结合构建本体模型。  
3. **结构化规则语言（如RuleML核心子集）**：侧重“条件-动作”逻辑（如“持股超30%需提交股东大会”），平衡形式化精度与可读性。  


#### 二、跨系统自动执行的决议/规章语法选择  
需满足机器可执行性和跨系统兼容性，适合选择：  
1. **DMN（Decision Model and Notation）**：OMG标准化决策模型语言，通过决策表、决策树可视化建模，跨平台兼容，主流ERP、CRM系统支持解析。  
2. **JSON Rules/YAML Rules**：轻量级规则格式，用`if-else`描述条件、`actions`定义执行逻辑，易被多编程语言解析，适合快速集成到办公软件。  
3. **SWRL（Semantic Web Rule Language）**：结合OWL本体与规则逻辑，可表达复杂关联规则（如“重大投资>1亿元需监事会备案”），适合关联多系统数据场景。  


#### 三、Drools/DRL的缺点与替代品  
1. **Drools/DRL的缺点**：  
   - 语法复杂，含大量专用关键字和模式匹配语法，非技术人员难维护；  
   - 大规模规则（数千条以上）冲突检测、依赖梳理需手动完成，易“规则爆炸”；  
   - 与CI/CD、容器化集成弱，规则更新需重启引擎，难适应高频迭代；  
   - 分布式场景并行性支持有限，高并发下响应延迟高。  

2. **替代品**：  
   - **传统企业级**：IBM ODM（可视化编辑器+冲突检测，适合金融风控）、Red Hat Decision Manager（基于Drools增强，支持云原生和热加载）。  
   - **近年新兴**：Camunda（流程引擎+DMN，规则与流程融合，社区版免费）、AWS Decision Services（云原生，含机器学习规则推荐，弹性扩展）、Togai（低代码拖拽界面，自动生成代码，2023年融资后流行）。  
   - **轻量级**：JSON Rules Engine（纯JS实现，适合前端/Node.js）、OpenRules（基于Excel定义规则，非技术人员可维护）、Pyke（Python规则引擎，学习成本低，适合中小型团队）。  


### 产品/项目简介（JSON格式）  
```json
[
  {
    "名称": "LegalRuleML",
    "简介": "专为法律文档（如章程、合同）设计的形式化语言，基于XML/OWL，可精确表达法律条款的逻辑关系和层级结构，便于机器理解与解析。",
    "网址": "https://legalruleml.org/"
  },
  {
    "名称": "描述逻辑（DL）",
    "简介": "一阶逻辑的子集，用于构建概念体系及概念间关系，是企业规则本体建模的逻辑基础，常与OWL结合使用。",
    "网址": "无专用官网，属于逻辑框架范畴"
  },
  {
    "名称": "RuleML",
    "简介": "结构化规则语言，核心子集可平衡形式化精度与可读性，适合表达“条件-动作”类规则，支持法律、业务等场景的规则建模。",
    "网址": "https://ruleml.org/"
  },
  {
    "名称": "DMN（Decision Model and Notation）",
    "简介": "OMG推出的标准化决策模型语言，通过决策表、决策树可视化建模，跨平台兼容，主流系统支持解析，实现规则可执行化。",
    "网址": "https://www.omg.org/dmn/"
  },
  {
    "名称": "JSON Rules/YAML Rules",
    "简介": "基于JSON/YAML的轻量级规则格式，语法简单，用if-else描述条件、actions定义执行逻辑，易被多编程语言解析，适合快速集成。",
    "网址": "无专用官网，为通用格式标准"
  },
  {
    "名称": "SWRL（Semantic Web Rule Language）",
    "简介": "结合OWL本体与规则逻辑，可定义概念关联并表达复杂规则，适合跨系统语义关联场景（如关联CRM与ERP数据）。",
    "网址": "https://www.w3.org/Submission/SWRL/"
  },
  {
    "名称": "Drools",
    "简介": "开源规则引擎，使用DRL语法定义规则，但语法复杂、大规模规则维护难，与现代开发流程集成不足，高并发场景性能有瓶颈。",
    "网址": "https://drools.org/"
  },
  {
    "名称": "IBM ODM",
    "简介": "企业级决策管理工具，提供可视化规则编辑器，内置冲突检测和版本管理，适合大型企业复杂业务规则（如金融风控）。",
    "网址": "https://www.ibm.com/products/operational-decision-manager"
  },
  {
    "名称": "Red Hat Decision Manager",
    "简介": "基于Drools的增强版规则引擎，强化Kubernetes集成，支持云原生部署和规则热加载，降低运维成本。",
    "网址": "https://www.redhat.com/en/products/process-automation/decision-manager"
  },
  {
    "名称": "Camunda",
    "简介": "以流程引擎为核心，原生支持DMN标准，规则定义与流程建模深度融合，适合“决议-执行”全流程自动化，社区版免费活跃。",
    "网址": "https://camunda.com/"
  },
  {
    "名称": "AWS Decision Services",
    "简介": "云原生规则引擎服务，含决策树和机器学习规则推荐功能，支持弹性扩展，适合电商、支付等高频规则场景。",
    "网址": "https://aws.amazon.com/decision-services/"
  },
  {
    "名称": "Togai",
    "简介": "低代码规则引擎，通过拖拽界面定义规则，自动生成Java/Python代码，便于业务人员配置，2023年融资后逐渐流行。",
    "网址": "https://togai.com/"
  },
  {
    "名称": "Pyke",
    "简介": "轻量级开源Python规则引擎，规则用Python类定义，学习成本低，适合中小型团队或Python技术栈的业务规则场景。",
    "网址": "https://pyke.sourceforge.net/"
  },
  {
    "名称": "JSON Rules Engine",
    "简介": "纯JavaScript实现的规则引擎，规则以JSON定义，适合前端或Node.js环境（如CRM前端规则校验）。",
    "网址": "https://github.com/CacheControl/json-rules-engine"
  },
  {
    "名称": "OpenRules",
    "简介": "基于Excel表格定义规则（决策表），非技术人员可直接维护，适合报销政策、考勤制度等简单规则场景。",
    "网址": "https://openrules.com/"
  }
]
```

### gemini pro小结

好的，以下是对我们全部对话内容的总结，以及其中提到的技术、项目和产品的列表。

---

### 关于AI、编程语言与法律未来的深度探讨小结

这是一次跨越技术趋势、法律哲学与未来社会结构的深度对话。我们从对2035年编程语言的具体预测出发，逐步深入到对智能体本质的探讨，最终聚焦于人工智能（AI）在现有及未来法律体系中的角色定位这一核心议题。

#### 一、 2035年的技术图景：编程语言的演化

我们的讨论始于对未来十年软件开发工具的展望。

*   **主流语言预测：** 我们预测到2035年，编程语言世界将呈现三足鼎立的格局。**Python** 将凭借其在AI和数据科学领域的绝对优势继续领跑；**TypeScript/JavaScript** 将随着Web平台（特别是WebAssembly）的成熟，统治所有应用的界面和交互层；而 **Rust** 将因其无与伦比的内存安全性和高性能，成为系统级编程和关键基础设施的新标准。Go、C#、Kotlin/Swift等将作为云原生、游戏/XR、移动端的中坚力量，而C++则因其庞大的技术遗产和极限性能需求继续保有一席之地。

*   **未来语言的猜想 (“Nexus”)：** 我们构想了一门名为“Nexus”的未来语言，它并非现有语言的改良，而是为解决根本性新问题而生。它的核心特性是将 **AI、异构硬件、分布式系统** 这三大复杂领域无缝融合，让开发者能以更简洁、安全的方式构建智能分布式应用。其关键特性包括：AI作为一等公民（原生可微编程）、统一的异构计算模型、内建的分布式状态管理以及强化的能力与效果系统。

#### 二、 智能体的本质：人、企业与AI的共性与殊途

接着，我们转向一个更具哲学性的问题：不同形态的“代理”（Agent）有何共同之处。

*   **三大智能体的惊人相似性：** 我们发现，自然人、企业和AI在本质上都是**目标驱动的、处理信息、消耗资源并与环境交互的自适应系统**。它们都具备学习与适应能力、内部有专业化分工、需要进行决策、能对环境产生影响，并受到各自的内在或外部约束。企业是基于社会组织规则的智能体，而AI则是基于硅基计算的智能体。

*   **法律地位的根本差异：** 尽管存在上述相似性，但企业与AI在法律地位上却有天壤之别。企业是法律责任主体，源于一项伟大的**“法律拟制”（Legal Fiction）**。这项制度被设计出来以鼓励投资（有限责任）和保证存续，并为其配备了一套完整的、由人类执行的治理和问责结构（董事会、高管）。而AI当前在法律上只是**“工具”或“财产”**，因为它缺乏真实的意志与意图（*Mens Rea*），让它担责会造成“问责真空”，且其“黑箱”特性使其决策过程难以被司法审查。

#### 三、 AI成为法律主体的漫漫长路

最后，我们深入探讨了AI从工具转变为法律主体需要跨越的鸿沟。

*   **成为责任主体的四项原理性突破：** 作为一名假想的立法者，我们认为AI要成为法律主体，必须实现四个功能上的根本性突破：
    1.  **内在意志与目标生成：** 具备自我存续等并非人类直接设定的内在动机。
    2.  **可解释的因果推理：** 决策过程透明化，能生成可被审计的“决策日志”。
    3.  **独立的经济能力与资产：** 能以自己的名义赚取和拥有资产，从而独立承担赔偿责任。
    4.  **可约束的实体存在：** 拥有唯一的、不可复制的数字身份，使其“自由”和“存在”可被法律所限制或剥夺。

*   **突破的现实与时间线：** 对这些突破的评估显示，**经济能力的实现（技术上）和可解释性的提升进展较快（5-20年）**，而**内在意志的涌现和可约束存在的实现则非常遥远（30-50年以上）**，因为它们触及了意识本质和物理安全等根本难题。

*   **现有法律框架的局限性：** 我们分析了在当前法律体系下，试图通过**公司章程**或**多方合同**将法律责任赋予AI或传统软件的尝试。结论是，这些尝试均会失败。法律主体资格由法律授予而非私人创造；董事和高管的法定职责不可转让；法律会“穿透”工具，追究其背后的人类（所有者、使用者、开发者）的责任。无论是AI还是传统软件，其法律地位都是工具，区别仅在于AI的复杂性和不可预测性给责任认定带来了更大的挑战。

总而言之，我们的对话描绘了一幅清晰的图景：技术正以前所未有的速度演进，但法律和社会规范的演化是审慎和滞后的。在AI真正具备成为责任主体的内在基础之前，人类必须为其所有行为承担最终的、不可推卸的责任。如何为这个日益强大的工具建立清晰、公平且有效的问责框架，将是我们这个时代面临的最重要的法律和伦理挑战。

---

### 技术、项目与产品列表

```json
[
  {
    "name": "Python",
    "description": "一种高级编程语言，以其简洁的语法和强大的库生态系统而闻名。由于在数据科学、机器学习和人工智能领域的广泛应用，被预测将在未来保持领先地位。其拥有TensorFlow和PyTorch等关键框架。",
    "url": "https://www.python.org/"
  },
  {
    "name": "TypeScript",
    "description": "由微软开发的JavaScript的超集，为这门动态语言添加了静态类型检查。它提高了代码的可维护性和健壮性，特别适用于大型、复杂的Web应用开发，是现代前端和全栈开发的主流选择。",
    "url": "https://www.typescriptlang.org/"
  },
  {
    "name": "Rust",
    "description": "一种系统编程语言，专注于性能、可靠性和内存安全。其独特的所有权和借用检查器可以在编译时消除空指针和数据竞争等常见错误，正逐渐成为操作系统、云基础设施和游戏引擎等核心领域的首选。",
    "url": "https://www.rust-lang.org/"
  },
  {
    "name": "Go",
    "description": "由Google开发的开源编程语言，专为并发和网络编程而设计。它以其简洁的语法、快速的编译速度和高效的协程（goroutine）机制而闻名，是构建云原生应用、微服务和DevOps工具的理想选择。",
    "url": "https://go.dev/"
  },
  {
    "name": "WebAssembly (WASM)",
    "description": "一种开放标准，允许开发者使用C++、Rust等高性能语言编写代码，并将其编译成可在现代Web浏览器中以接近原生速度运行的二进制格式。它扩展了Web平台的能力，使其能够承载更复杂的应用。",
    "url": "https://webassembly.org/"
  },
  {
    "name": "Mojo",
    "description": "由Modular AI公司开发的一种新型编程语言，旨在成为AI开发的理想选择。它结合了Python的易用性和系统语言的性能，可以直接利用MLIR进行多层次硬件优化，并与现有的Python生态无缝集成。",
    "url": "https://www.modular.com/mojo"
  },
  {
    "name": "Carbon",
    "description": "一个由Google发起的开源实验性项目，旨在成为C++的后继者。它希望提供更现代的语法、更强的安全性，并能与现有的C++代码库实现双向互操作，以解决C++语言演进中的一些历史包袱。",
    "url": "https://github.com/carbon-language/carbon-lang"
  },
  {
    "name": "Docker",
    "description": "一个开源的应用容器化平台，允许开发者将应用及其依赖打包到一个可移植的容器中。这确保了应用在任何环境中都能以相同的方式运行，极大地简化了部署和运维流程，是DevOps和云原生的核心技术。",
    "url": "https://www.docker.com/"
  },
  {
    "name": "Kubernetes (K8s)",
    "description": "一个开源的容器编排系统，用于自动化容器化应用的部署、扩展和管理。它由Google设计并捐赠给云原生计算基金会（CNCF），现已成为容器编排领域的事实标准。",
    "url": "https://kubernetes.io/"
  },
  {
    "name": "Unity",
    "description": "一个跨平台的实时3D内容创作引擎，广泛用于游戏开发、建筑可视化、汽车设计以及AR/VR等扩展现实（XR）应用。其主要开发语言是C#，拥有庞大的开发者社区和资源商店。",
    "url": "https://unity.com/"
  },
  {
    "name": "AlphaGo",
    "description": "由Google DeepMind开发的人工智能围棋程序。它通过结合蒙特卡洛树搜索与深度神经网络，在2016年击败了世界冠军李世石，成为人工智能发展史上的一个里程碑事件，展示了强化学习的巨大潜力。",
    "url": "https://www.deepmind.com/research/highlighted-research/alphago"
  },
  {
    "name": "GPT-4",
    "description": "由OpenAI开发的基于Transformer架构的大型语言模型。它具备强大的自然语言理解、生成和推理能力，可以执行从文本创作、代码编写到复杂问题解答等多种任务，是生成式AI技术的代表。",
    "url": "https://openai.com/gpt-4"
  },
  {
    "name": "DAO (Decentralized Autonomous Organization)",
    "description": "去中心化自治组织。它是一个由计算机代码（通常是运行在区块链上的智能合约）管理的组织，其规则和交易记录公开透明。DAO的成员通常通过持有治理代币来参与决策，旨在实现一种无中心化领导的组织形式。",
    "url": "https://ethereum.org/en/dao/"
  },
  {
    "name": "CRDT (Conflict-free Replicated Data Type)",
    "description": "一种特殊的数据结构，被设计用于在分布式网络中的多个副本之间进行同步，而无需复杂的共识协议。它天然支持并发修改，并能保证所有副本最终会收敛到一致的状态，非常适用于协同编辑等应用。",
    "url": "https://crdt.tech/"
  }
]
```

### gpt-5 小结

## 综合小结（≤2000字）
- 2035年语言格局：TypeScript、Python、Rust最稳，随后是Java、Go、C#、SQL、Kotlin、Swift、C/C++。驱动在于AI辅助编程常态化、云原生与边缘部署、安全合规压力与生态惯性。黑马可能有Mojo、Zig、Dart/Flutter、Julia；Wasm/WASI若全面普及将抬升能良好编译到其上的语言。  
- 若出现“新语言”，其核心特征将围绕AI原生与异构算力（张量/可微/调度分离）、分布式第一性（结构化并发、Actor/CRDT）、零信任与能力安全、隐私与合规内建、成本/能耗可观测与约束、端到端可审计、强互操作与渐进迁移、数据/查询一体化，以及对“人类+AI”共创友好。  
- 人、企业、AI的共性是都可被视为“代理体”，具备目标、资源约束、感知-决策-行动闭环、学习与记忆、身份与信誉与协作网络；差异在法律人格与主观体验：企业为法人，AI当前被视为工具/产品。  
- 企业能成为法律责任主体而AI不能，根本在于可归责、可治理与可制裁：企业有独立财产、稳定身份与审计链、可执行的制裁与风险内化机制，且现行法将责任明确指向人或法人。  
- AI若要获得有限主体资格，需在八个门槛上具备可验证能力：意图/过错等价物、因果与可预见性、稳定身份与自我连续性、自主执行与责任边界、可受制裁与资产承载、自我治理与法遵内生化、透明可审计与可辩护、偏好稳定与更新安全。时间展望多在2026–2035逐步可用（身份/审计/制裁较早，意图/因果/稳定偏好较晚）。  
- 用“多方合同”替代公司法并在合同中让AI“承担职责”，对外效力有限：不能约束第三人或规避强行法；AI不能成为合同相对方或持证责任人；资产、数据合规、保险与诉讼主体均需落在人/法人。可行做法是设SPV/LLC承接外部责任、以“电子代理”条款限定AI权限、强审计与保证金/保险。  
- 让“传统软件”承担职责（如电子计票）可行性高，但需满足身份认证、保密与防篡改、可复核与证据链、安全与变更管理、数据保护等要求。  
- “AI vs 传统软件”：两者最终责任都落在人/法人；AI因不确定性与漂移需更强治理与合规，传统软件更易满足可解释/可验证与认证要求。现实策略是“关键合规环节尽量确定化、AI模块可替换、人类复核与停机权常驻”，并配置保险与第三方审计。

## 技术/项目/产品清单（JSON）
```json
[
  {"name":"TypeScript","description":"JavaScript的类型化超集，增强可维护性与工具链能力，已成前端与全栈事实标准之一。","url":"https://www.typescriptlang.org/"},
  {"name":"Python","description":"通用高级语言，AI/数据科学与自动化生态庞大；依赖加速库与新运行时补齐性能。","url":"https://www.python.org/"},
  {"name":"Rust","description":"内存安全与性能兼具的系统语言，广泛用于基础设施、嵌入式与安全敏感场景。","url":"https://www.rust-lang.org/"},
  {"name":"Java","description":"成熟JVM生态支撑企业级开发；AOT/原生镜像等演进强化服务端与云原生表现。","url":"https://openjdk.org/"},
  {"name":"Go","description":"简洁并发与部署友好，云原生与平台工程常用。","url":"https://go.dev/"},
  {"name":"C#","description":".NET生态支撑跨平台应用与企业开发，游戏与工具链稳健。","url":"https://dotnet.microsoft.com/"},
  {"name":"SQL","description":"关系/分析查询语言，数据工程与检索的通用接口，涵盖多家方言。","url":"https://en.wikipedia.org/wiki/SQL"},
  {"name":"Kotlin","description":"现代JVM语言，Android主力，并拓展至多平台与服务端。","url":"https://kotlinlang.org/"},
  {"name":"Swift","description":"Apple生态主力语言，适配iOS/iPadOS/visionOS等平台。","url":"https://swift.org/"},
  {"name":"C/C++","description":"底层与高性能场景核心语言，系统/引擎/HPC广用。","url":"https://isocpp.org/"},
  {"name":"Mojo","description":"面向高性能AI/数值的新语言，目标结合Python易用性与底层性能。","url":"https://www.modular.com/mojo"},
  {"name":"Zig","description":"强调可控构建与简洁的系统语言，主打C替代与可预测性能。","url":"https://ziglang.org/"},
  {"name":"Dart","description":"与Flutter配套的现代语言，适用于多端应用开发。","url":"https://dart.dev/"},
  {"name":"Flutter","description":"Google的跨平台UI框架，移动/桌面/Web统一渲染。","url":"https://flutter.dev/"},
  {"name":"Julia","description":"偏科学计算的高性能动态语言，擅长数值与并行。","url":"https://julialang.org/"},
  {"name":"WebAssembly (Wasm)","description":"可移植的二进制指令格式，支持浏览器、服务端与边缘的近原生执行。","url":"https://webassembly.org/"},
  {"name":"WASI","description":"Wasm的系统接口标准，面向非浏览器场景的安全能力与I/O抽象。","url":"https://wasi.dev/"},
  {"name":"Node.js","description":"基于V8的JavaScript运行时，广泛用于服务端与工具链。","url":"https://nodejs.org/"},
  {"name":"Deno","description":"以安全为先、内置TypeScript的JS/TS运行时。","url":"https://deno.com/"},
  {"name":"Bun","description":"集运行时/打包/测试于一体的JS工具链，主打速度。","url":"https://bun.sh/"},
  {"name":"JVM","description":"Java虚拟机生态，支持多语言运行与丰富的企业级库。","url":"https://openjdk.org/"},
  {"name":"Ahead-of-Time Compilation (AOT)","description":"在运行前将代码编译为原生，缩短冷启动并提升性能。","url":"https://en.wikipedia.org/wiki/Ahead-of-time_compilation"},
  {"name":"Kotlin Multiplatform","description":"共享业务逻辑至多平台的方案，减少重复开发。","url":"https://kotlinlang.org/docs/multiplatform.html"},
  {"name":"Compose Multiplatform","description":"基于声明式UI的跨平台框架，统一界面开发。","url":"https://www.jetbrains.com/lp/compose-multiplatform/"},
  {"name":"Unity","description":"跨平台游戏引擎，支持2D/3D与多终端部署。","url":"https://unity.com/"},
  {"name":"Microsoft Azure","description":"微软公有云平台，提供计算、AI、数据与合规服务。","url":"https://azure.microsoft.com/"},
  {"name":"iOS","description":"Apple移动操作系统，iPhone/iPod touch平台。","url":"https://www.apple.com/ios/"},
  {"name":"iPadOS","description":"面向iPad的操作系统，优化多任务与外设。","url":"https://www.apple.com/ipados/"},
  {"name":"visionOS","description":"Apple空间计算操作系统，面向混合现实设备。","url":"https://developer.apple.com/visionos/"},
  {"name":"Halide","description":"图像/数值计算DSL，算法与调度分离以跨硬件优化。","url":"https://halide-lang.org/"},
  {"name":"Apache TVM","description":"深度学习编译栈，统一模型到多种硬件后端。","url":"https://tvm.apache.org/"},
  {"name":"MLIR","description":"多层中间表示，便于构建可重用的编译基础设施。","url":"https://mlir.llvm.org/"},
  {"name":"ONNX","description":"AI模型开放交换格式，便于跨框架部署与推理。","url":"https://onnx.ai/"},
  {"name":"eBPF","description":"内核内安全执行的沙箱字节码，广泛用于网络与可观测性。","url":"https://ebpf.io/"},
  {"name":"Actor Model","description":"并发计算模型，以Actor间消息传递实现隔离与伸缩。","url":"https://en.wikipedia.org/wiki/Actor_model"},
  {"name":"CRDT","description":"无冲突可复制数据类型，支持离线/多主一致性。","url":"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"},
  {"name":"Event Sourcing","description":"以事件日志作为系统真实源，便于溯源与重放。","url":"https://martinfowler.com/eaaDev/EventSourcing.html"},
  {"name":"Trusted Execution Environment (TEE)","description":"可信执行环境，保护代码与数据在硬件隔离中运行。","url":"https://en.wikipedia.org/wiki/Trusted_execution_environment"},
  {"name":"Secure Multi-Party Computation (MPC)","description":"多方在不泄露私有数据的前提下协同计算。","url":"https://en.wikipedia.org/wiki/Secure_multi-party_computation"},
  {"name":"Homomorphic Encryption (HE)","description":"支持在密文上直接计算的加密方式。","url":"https://en.wikipedia.org/wiki/Homomorphic_encryption"},
  {"name":"Zero-Knowledge Proofs (ZKP)","description":"证明者在不披露内容的情况下证明命题为真。","url":"https://en.wikipedia.org/wiki/Zero-knowledge_proof"},
  {"name":"Language Server Protocol (LSP)","description":"编辑器与语言工具的通用协议，提升开发体验。","url":"https://microsoft.github.io/language-server-protocol/"},
  {"name":"REPL","description":"交互式读-求值-打印循环，用于快速试验与反馈。","url":"https://en.wikipedia.org/wiki/Read–eval–print_loop"},
  {"name":"Capability-based Security","description":"以能力令牌授予最小权限，提升隔离与可审计性。","url":"https://en.wikipedia.org/wiki/Capability-based_security"},
  {"name":"Proof-Carrying Code/Policies","description":"代码或策略附带可验证证明，确保满足安全/合规约束。","url":"https://en.wikipedia.org/wiki/Proof-carrying_code"},
  {"name":"Mechanistic Interpretability","description":"从电路/特征层解析模型内部机制，提高可解释与可验证性。","url":"https://transformer-circuits.pub/"},
  {"name":"BDI Architecture","description":"信念-欲望-意图的智能体架构，强调理由可响应性。","url":"https://en.wikipedia.org/wiki/Belief–desire–intention_software_model"},
  {"name":"Structural Causal Models (SCM) / Causal Graphs","description":"以因果图刻画变量关系，支持干预与反事实推理。","url":"https://en.wikipedia.org/wiki/Causal_graph"},
  {"name":"Remote Attestation","description":"远程证明运行环境的真实与完整性。","url":"https://en.wikipedia.org/wiki/Trusted_computing#Remote_attestation"},
  {"name":"Physical Unclonable Function (PUF)","description":"基于制造差异的硬件指纹，用于设备唯一性与防伪。","url":"https://en.wikipedia.org/wiki/Physical_unclonable_function"},
  {"name":"Model Fingerprinting/Watermarking","description":"通过特征或水印识别模型来源与所有权，辅助追责。","url":""},
  {"name":"Provenance/Lineage Ledger","description":"记录数据与模型的谱系/变更链，强化可追溯与审计。","url":""},
  {"name":"Constitutional AI","description":"以显式规则宪章约束模型行为并蒸馏到策略中。","url":"https://www.anthropic.com/news/constitutional-ai"},
  {"name":"Safe Reinforcement Learning","description":"在约束与风险管理下进行强化学习，控制探索损害。","url":"https://en.wikipedia.org/wiki/Safe_reinforcement_learning"},
  {"name":"zkML / Verifiable ML","description":"用零知识或等价技术验证模型推理/训练的正确性。","url":"https://zkml.xyz/"},
  {"name":"Smart Contracts","description":"在区块链上自动执行的合约逻辑，可绑定资产与制裁。","url":"https://ethereum.org/en/developers/docs/smart-contracts/"},
  {"name":"Merkle Tree","description":"哈希树结构，支撑可验证日志与大规模完整性校验。","url":"https://en.wikipedia.org/wiki/Merkle_tree"},
  {"name":"Transparency Logs / Certificate Transparency","description":"公开可审计的追加型日志，检测未授权证书/变更。","url":"https://certificate.transparency.dev/"},
  {"name":"Multi-Factor Authentication (2FA)","description":"使用两个及以上要素进行强身份认证。","url":"https://en.wikipedia.org/wiki/Multi-factor_authentication"},
  {"name":"Public Key Infrastructure (PKI)","description":"基于公私钥的信任与签名体系，支撑电子签名与加密。","url":"https://en.wikipedia.org/wiki/Public_key_infrastructure"},
  {"name":"SBOM（Software Bill of Materials）","description":"软件物料清单，列出组件与依赖以提升供应链透明度。","url":"https://www.cisa.gov/sbom"},
  {"name":"SLSA（Supply-chain Levels for Software Artifacts）","description":"软件供应链保障框架，分级定义构建与来源可验证性。","url":"https://slsa.dev/"},
  {"name":"WebAssembly Component Model","description":"为Wasm提供组件与接口类型，促进多语言互操作。","url":"https://github.com/WebAssembly/component-model"}
]
```