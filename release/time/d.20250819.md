# 2025.08.19.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250819190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8956 | 4574 | 9855 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 660 |
| raw | 1000 | 70 | 930 | 330 |
| learn | 2000 | 4475 | -2475 | 4275 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第1号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：LegalRuleML（Legal Rule Markup Language）

- 60分钟时间片：
  - raw的第1号事项：熟悉内脏之间的关系
  - xuemen的第1号事项：月度事务
  - raw的第2号事项：新版营养成分详情，允许多种营养成分。
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
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.19.[无名任务]任务&body=日期: 2025.08.19.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250819.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250819190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 在两台机器联调rust的p2p
    - 台式机使用宽带
    - 笔记本用手机热点
    - 两边登录qwen-code相同账号，代码用git同步
    - 可以从stun服务器拿到自己外网地址，没有发现对方节点，还没有带NAT穿透测试。
- 

## kimi 对话提要

### 1. 技术选型
- **CLI & RESTful API 语言对比**：Rust 单文件、极快、GC-free；Go 上手快、生态大、镜像稍大。  
- **中国网络**：GitHub 被限速用镜像或合规 VPN 即可；Go 模块用 `goproxy.cn` 一次性解决。  

### 2. 智能合约
- **活跃链**：Ethereum、BSC、Solana、Polygon、Avalanche、Polkadot、Cardano、TRON。  
- **选型口诀**：生态选 ETH、性能选 Solana、EVM 兼容选 BSC、子链选 Avalanche、学术选 Cardano。  

### 3. 云原生语言
- **定义**：默认跑在容器/微服务/Serverless 环境；静态单文件、冷启动 <100 ms、可观测。  
- **Rust vs Go**：Rust 零运行时、镜像 <10 MB、内存省 40 %；Go 生态 10 年、编译秒级、CRD 生成一行命令。

### 4. 元编程
- **解释型**：运行时 eval/反射。  
- **编译型**：模板、宏、过程宏，全部在编译期完成，零运行时开销。  
- **Nim**：宏即编译期函数，可内嵌 SQL DSL。  
- **Swift**：宏即编译器插件，支持链式 AutoLayout DSL。

### 5. 元编程能否做 Agent？
- **结论**：Agent 的动态任务分解、模型选择、代码执行必须运行时完成；编译期只能做模板/性能优化。

### 6. 过程宏（Rust）
- 生命周期：TokenStream → AST → TokenStream。  
- 三类：derive、attribute、function-like。  
- 实战：25 行写 Builder 派生宏，零运行时开销。

---

## 资源速查表（YAML）

```yaml
# 开发工具
go:
  summary: 静态单文件、云原生默认语言，生态十年沉淀。
  url: https://golang.org

rust:
  summary: 零运行时、内存安全、冷启动 30 ms，适合系统/代理。
  url: https://rust-lang.org

nim:
  summary: 宏即编译期函数，可写内嵌 DSL，同像性语法。
  url: https://nim-lang.org

swift:
  summary: 宏是编译器插件，支持链式 DSL，零开销机器码。
  url: https://swift.org

# 框架 & 库
tokio:
  summary: Rust 异步运行时，百万级任务调度。
  url: https://tokio.rs

syn:
  summary: Rust AST 解析库，写过程宏必备。
  url: https://docs.rs/syn

quote:
  summary: Rust TokenStream 生成库，配合 syn 使用。
  url: https://docs.rs/quote

cargo-expand:
  summary: 展开 Rust 宏查看生成代码。
  url: https://github.com/dtolnay/cargo-expand

# 云原生
kubernetes:
  summary: 容器编排事实标准，Go 原生生态。
  url: https://kubernetes.io

kube-rs:
  summary: Rust 官方 Kubernetes 客户端。
  url: https://kube.rs

# 智能合约
ethereum:
  summary: 最成熟公链，Solidity/Vyper 开发。
  url: https://ethereum.org

solana:
  summary: 高性能链，Rust/C 开发，TPS 3k-5k。
  url: https://solana.com

binance_smart_chain:
  summary: EVM 兼容、低 Gas、币安流量。
  url: https://www.bnbchain.org

# 镜像 & 网络
goproxy_cn:
  summary: Go 模块国内镜像，解决 GitHub 拉取慢。
  url: https://goproxy.cn

kkgithub:
  summary: GitHub 社区镜像，只读 clone。
  url: https://kkgithub.com

# 过程宏示例仓库
builder_derive_example:
  summary: 25 行 Rust Builder 派生宏完整示例。
  url: https://github.com/yourname/builder_derive
```

### deepseek

# 对话提要

本文总结了关于部门级软件选择、编程语言趋势以及业务流程自动化技术的对话内容，旨在为企业技术选型和未来规划提供参考。

## 一、部门级软件选型与权限管理
在财务、ERP、CRM等部门级软件选型中，需结合企业规模、行业特性及核心需求。主流产品包括深度融合企业微信的**微伴助手**（适合营销互动）、全链路自动化的**销售易**（适配高互动频率行业）、高度自定义的**超兔CRM**（工贸企业适用）以及智能外呼的**励销云**（B2B销售驱动）。ERP方面，**仁和云ERP**性价比高且部署快，**鼎捷数智**深度适配制造业，**金蝶云·星空**AI与排程功能强大，**简道云ERP**则支持零代码自定义。财务软件中**金蝶云**和**用友网络**较为常见，后者尤适合集团企业。

权限管理是保障数据安全的核心。技术方案上，**基于角色的访问控制（RBAC）** 管理高效；**基于属性/条件的访问控制（ABAC/CBAC）** 灵活性高，支持动态策略；**组织架构层级权限模型**符合传统行政管理模式；**行级权限/数据过滤**则控制特定数据行的访问。集成时需关注平台的API接口（如RESTful API、SDK、Webhook）及权限模型的匹配度，同时注意数据同步与系统兼容性，并做好变更管理与员工培训。

## 二、编程语言发展趋势与预测
至2035年，编程语言发展将深受AI、量子计算及硬件变革影响。当前（2025年8月）TIOBE榜单显示，**Python**以26.14%的占比稳居第一，其在AI、数据科学领域的统治地位得益于丰富的库和社区；**JavaScript/TypeScript**凭借在Web开发中的不可替代性持续重要；**Rust**因内存安全和性能，在系统编程中势头上升；**Go**则以其并发模型在云原生领域表现出色；**Kotlin**和**Swift**分别主导Android和iOS开发；**Julia**作为科学计算新贵，在金融机构量化模型中受到青睐。

未来可能出现的新语言特性包括：1) **AI原生语言**：深度集成自然语言接口、概率编程原语及AI驱动的内存管理，以降低复杂AI应用开发门槛；2) **量子编程语言**：原生支持量子比特操作和混合编程模型，适配量子计算范式；3) **安全优先语言**：内建形式化验证和抗量子加密原语，应对严峻网络安全挑战；4) **无服务器与边缘计算优先语言**：针对极速冷启动和高效资源利用等场景优化。

## 三、业务流程自动化：DSL与低代码/无代码平台
业务流程自动化中，**领域特定语言（DSL）** 和**低代码/无代码（LCAP/NCAP）平台**通过提升开发效率、降低技术门槛，成为企业数字化转型的核心引擎。

**低代码/无代码平台**现状呈现“一超多强”格局。**奥哲云枢**以全链路数智化和AI深度融合服务大型集团；**简道云**以零代码和轻量集成成为中小企业首选，拖拽式表单设计易用性突出；**得帆云DeCode**以“低代码+APaaS”双引擎驱动，支持复杂业务场景和国产化需求；**金蝶云·苍穹**作为集团级数字化转型基座，深度整合财务与供应链管理；**活字格**则专注于制造业，具备工业物联网集成能力。AI与平台的深度融合是显著趋势，如**奥哲云枢**的AI助手能自动识别业务逻辑生成流程模型，**金蝶云·苍穹**也提供AI编程助手，自然语言生成DSL或应用（NL2DSL）技术也在探索中。

**DSL**在业务流程自动化中应用深化，例如在权限管理中用于定义动态条件规则，或在系统架构自动化设计、程序化生成中发挥作用。其发展也推动了模型驱动架构（MDA）的实践，提高了解决方案的可移植性和复用性。

然而，DSL和低代码平台也面临处理高度复杂业务逻辑的挑战、平台锁定风险、大型项目性能与可维护性、安全合规性以及人员技能与组织变革等挑战。选型时需明确核心需求、评估集成扩展能力、考虑AI功能、验证实际性能案例并规划治理培训体系。

## 四、总结
技术选型需紧密结合业务实际。部门级软件要考虑行业特性和权限管控；编程语言学习应关注AI赋能生态和未来技术风口；业务流程自动化工具则要平衡灵活性、复杂度与开发效率。持续关注AI深度融合、行业化解决方案及安全可信执行等趋势，将有助于构建面向未来的技术战略。

```yaml
# 部门级软件 & 低代码/无代码平台
- 微伴助手:
    总结: "深度融合企业微信的CRM，擅长客户生命周期管理与会话存档。"
    适用: "零售、教育、金融等需高频微信互动的行业。"
    网址: "https://www.wecom360.com/ (示意)"

- 销售易:
    总结: "提供全链路销售自动化与AI语义分析，支持全球化业务。"
    适用: "快消、电商等高客户互动频率行业。"
    网址: "https://www.xiaoshouyi.com/"

- 超兔CRM:
    总结: "CRM与进销存、生产、财务一体化的云平台，支持低成本客制化。"
    适用: "工业、工贸类中小企业。"
    网址: "https://www.chaotu.cn/"

- 励销云:
    总结: "集成智能外呼系统，专注B2B销售全流程管理。"
    适用: "B2B销售驱动型企业，如工业品、ToB服务。"
    网址: "https://www.lixiaoyun.com/"

- 仁和云ERP:
    总结: "支持多语言、部署快速的ERP系统，性价比高。"
    适用: "全球离散制造环境的中小企业。"
    网址: "https://www.renheerp.com/ (示意)"

- 金蝶云·星空:
    总结: "AI功能丰富、排程强大的ERP系统，云服务成熟。"
    适用: "制造业（排程需求强）及一般企业。"
    网址: "https://www.kingdee.com/"

- 简道云:
    总结: "IDC认证零代码市场占有率第一平台，拖拽式表单设计易用性高。"
    适用: "中小企业OA、CRM、进销存等轻量化系统搭建。"
    网址: "https://www.jiandaoyun.com/"

- 奥哲云枢:
    总结: "全链路数智化低代码平台，AI深度融合，服务大量500强企业。"
    适用: "大型集团复杂系统构建、国产化替代。"
    网址: "https://www.authine.com/ (示意)"

- 得帆云DeCode:
    总结: "“低代码+APaaS”双引擎，支持微服务架构和复杂国产化改造。"
    适用: "大型企业ERP、MES等核心系统，跨国协同。"
    网址: "https://www.definesys.com/"

- 活字格:
    总结: "通过ISO 26262认证的工业级低代码平台，集成主流PLC设备。"
    适用: "智能工厂MES、设备运维、工业物联网应用。"
    网址: "https://www.grapecity.com.cn/"

# 编程语言
- Python:
    总结: "AI与数据科学领域统治级语言，生态丰富，AI助手助力开发效率提升。"
    趋势: "持续领先，AI驱动下加速扩张。"
    网址: "https://www.python.org/"

- Rust:
    总结: "系统级安全语言代表，内存安全与高性能兼备，受Linux内核等官方支持。"
    趋势: "系统编程、安全关键组件领域显著上升。"
    网址: "https://www.rust-lang.org/"

- Julia:
    总结: "科学计算新贵，兼顾高性能与易用性，金融机构量化模型新宠。"
    趋势: "科学计算、高性能数值分析领域潜力巨大。"
    网址: "https://julialang.org/"

- Go:
    总结: "云原生基础设施首选语言，简洁的语法和高效的并发模型是其特点。"
    趋势: "云原生、微服务、分布式系统领域显著上升。"
    网址: "https://go.dev/"

# 技术与概念
- RBAC (基于角色的访问控制):
    总结: "通过角色关联权限，用户通过角色间接获得权限，管理高效。"
    资源: "飞算AI可快速构建RBAC系统。"
    网址: "https://en.wikipedia.org/wiki/Role-based_access_control"

- ABAC/CBAC (基于属性/条件的访问控制):
    总结: "根据用户、资源、环境等多种属性动态计算权限，灵活性极高。"
    资源: "领码方案等阐述了其高级应用。"
    网址: "https://en.wikipedia.org/wiki/Attribute-based_access_control"

- DSL (领域特定语言):
    总结: "为特定应用领域设计的计算机语言，用于定义业务规则、流程，抽象度高。"
    资源: "用于权限条件、系统设计等。"
    网址: "https://en.wikipedia.org/wiki/Domain-specific_language"

- 低代码/无代码 (LCAP/NCAP):
    总结: "通过可视化界面、模型驱动等方式构建应用，降低开发门槛。"
    趋势: "与AI深度融合，从开发工具向数字生态基座演进。"
    网址: "https://www.gartner.com/en/information-technology/glossary/lcad-low-code-application-development"
```