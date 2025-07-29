# 2025.07.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 11:05~14:08	learn: [业务规则引擎](#20250729110500)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6270 | 7260 | 8790 |
| PSMD | 4000 | 1100 | 2900 | 1230 |
| ego | 2530 | 720 | 1810 | 1335 |
| infra | 2000 | 425 | 1575 | 405 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 3495 | -1495 | 3120 |
| js | 1000 | 370 | 630 | 1710 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：graphviz
  - js的第2号事项：a2a-js
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
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.29.[业务规则引擎]任务&body=日期: 2025.07.29.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250729.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250729110500"></a>
## 11:05 ~ 14:08
## learn: [业务规则引擎]

- dmn更适合业务人员理解，但是无状态、无递归，不能表达复杂逻辑。
- drl适合开发人员理解，能表达复杂逻辑，有rete算法保证吞吐量。
- 工具链比较齐全，但是依赖java环境。不适合非IT人员。
- LLM prompt
    - 自然语言->drl：你是一位规则建模专家。请把下面这段会议记录拆成“规则原子”，输出一份严格遵守以下 JSON Schema 的中间结构，不要解释，不要加 Markdown 代码块，只返回纯 JSON。
    - DRL → 动议：“把下列 DRL 文件翻译成不超过 80 字的董事会动议，只保留业务含义，删掉技术关键词。”
    - DMN → 动议：“把下列 DMN decisionTable 翻译成 80 字以内的董事会动议，用中文‘如果…那么…’句式。”
    - 合并 DRL：“把下列两份 DRL 合并为一个 package，重命名冲突 rule，保留 salience”
    - 合并 DMN：“把两份 DMN XML 合并为一份，保留所有 decisionTable，重命名重复 ID”
    - 分拆 DRL：“根据注释 @scope=A，抽取相关规则，其余删除”
    - 分拆 DMN：“保留 dmndi:DMNDiagram name=A 的节点，其余删除”
    - LLM ↔ DRL 转换的 JSON Schema：你是一名规则工程师，请把下列会议纪要转成严格符合上方 JSON Schema 的数组，不要解释，只返回 JSON。
会议纪要：{{text}}
- PSMD：要能输出drl和dmn，以便大客户使用。但是业务部门系统选型、二次开发、股董监高学习接口语言、雇佣专业顾问...等等，都需要他们自己负担。
- ego：要保持自己的规则语法，根据需求迭代升级。可以吸收drl、dmn等语法的设计经验。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.29.[无名任务]任务&body=日期: 2025.07.29.%0D%0A序号: 11%0D%0A手稿:../../draft/2025/20250729.b.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250729211000"></a>
## 21:10 ~ 22:09
## check: [日小结]

### kimi

【2000 字以内提要】

1. 基础概念  
   • DRL（Drools Rule Language）是面向开发者的类 Java 规则脚本，擅长复杂逻辑；DMN（Decision Model and Notation）是 OMG 标准的图形化决策表，面向业务人员。二者互补而非替代。  
   • 公司合并时，DMN 的 XML 结构可直接 Git 合并，DRL 需 AST 级检查；分立时同理。  

2. 场景选择  
   • 董事会修订规章 → 选 DMN，低代码、易审计。  
   • 部门级业务系统（会计、库存、CRM）→ DMN 决策表实时生效，通过 REST 调用。  

3. 自动化合并 / 拆分技术  
   • 统一用 Git 版本化 + 元数据（YAML Front-Matter 或 DMN 注释）标记法人/产品线。  
   • DMN：XPath/XSLT 合并、拆分即可；DRL：先用 Drools Parser 提 AST，再脚本合并。  
   • CI 校验：dmn-tck-runner 或 KieBuilder 确保合并后无冲突。  

4. LLM 与规则的双向转换  
   • 会议记录 → 规则：先让 LLM 生成中间 JSON Schema（字段、条件、动作），再模板渲染为 DRL 或 DMN XML；DMN 成功率高。  
   • 规则 → 动议：DMN 行列清晰，LLM 直接输出“如果…那么…”中文；DRL 需二次润色。  

5. 8 周零基础落地计划  
   • 周 1-2：装 IntelliJ IDEA + Drools，跑通 5 个 DRL 示例。  
   • 周 3：设计 JSON Schema，用 GPT-4o/千问 API 完成纪要→JSON→DRL/DMN 脚本。  
   • 周 4：GitHub Action 加 RSA 数字签名，推送到阿里云函数计算。  
   • 周 5-7：对接用友 OpenAPI，库存/客户单点击按钮即调用规则服务并回写结果。  
   • 周 8：写 README、录屏、交付。  

6. 技术栈总览  
   • 规则引擎：Drools / Kogito / Camunda / Flowable。  
   • 运行：OpenJDK 17 + kie-server（或 Docker 镜像）。  
   • 部署：GitHub Actions + 阿里云函数计算（HTTPS 触发）。  
   • 通知：企业微信机器人，规则生效即推送。  
   • Node.js 集成：node-java（JNI）、child_process（java -jar）、axios（HTTP）。  

7. 资源速查  
   见下 YAML。

【资源 YAML】  
```yaml
intellij-idea-community: "JetBrains 免费 IDE，DRL 语法高亮，零配置即写即跑。"
drools: "Red Hat 开源规则引擎，支持 DRL 与 DMN，Maven 一行依赖。"
openjdk17: "Drools/Kogito 官方推荐 LTS JDK。"
camunda-modeler: "绿色 DMN/BPMN 图形建模器，15 分钟完成决策表。"
kie-server: "Drools 自带 REST 规则服务，可热加载 DRL/DMN。"
dmn-tck-runner: "CLI 工具，离线批量校验 DMN XML 合法性。"
kogito-swf-devmode: "浏览器沙盒，在线拖拖拽拽生成 DMN 文件。"
github-actions: "CI/CD 流水线，代码合并、签名、容器部署一键完成。"
aliyun-function-compute: "Serverless 运行环境，规则服务秒级 HTTPS 化。"
yonyou-openapi: "用友官方开放接口，支持库存、客户档案实时读写。"
node-java: "npm 包，Node.js 通过 JNI 直接调用 Drools JAR。"
child_process: "Node.js 内置模块，启动 java -jar 子进程零依赖。"
axios: "npm HTTP 客户端，业务系统向规则服务发请求的标准工具。"
```

### deepseek

以下为对话核心提要及资源清单：

---

### **对话提要（498字）**  
1. **规则引擎选型**：  
   - **DRL**：适用于超复杂规则（如金融风控），支持Rete算法高性能推理，但开发门槛高。  
   - **DMN**：业务友好型决策表，适合结构化规则（如保费计算），性能依赖引擎实现（非Rete），千行级决策约10-100ms。  
   - **YAML**：轻量级配置化方案，适合FSM/DAG流程（如订单状态机），需自研解析引擎。  
2. **混合引擎开发**：  
   - 结合 **DMN（简单规则）** 与 **Rete（复杂逻辑）**，通过 **LLM（GPT-4/Claude）** 将自然语言决议转为结构化规则，数字签名生效后实时推送至业务系统（如用友ERP）。  
3. **长安链技术**：  
   - 国产自主可控区块链，软硬一体设计（96核加速芯片+WASM合约引擎），支持10万TPS及隐私计算，应用于政务、金融（如北京目录链、建行供应链）。  
   - 团队由**微芯研究院**牵头，联合清华/腾讯等机构，生态覆盖国家电网、中粮等50家单位。  

---

### **资源清单（YAML格式）**  
```yaml
# 规则引擎与开发框架
- name: "Drools"
  type: "规则引擎"
  desc: "基于Rete算法的Java规则引擎，支持复杂逻辑推理。"
- name: "Camunda BPM"
  type: "流程引擎"
  desc: "集成DMN的BPMN流程引擎，支持决策表动态调用。"
- name: "JVS规则引擎"
  type: "开源工具"
  desc: "国产低代码规则引擎，可视化配置DRL规则。"

# LLM与工具链
- name: "GPT-4 API"
  type: "AI服务"
  desc: "OpenAI大模型接口，用于自然语言转规则。"
- name: "Semantic Kernel SDK"
  type: "开发框架"
  desc: "微软多步骤任务编排工具，连接LLM与业务逻辑。"
- name: "MCP协议"
  type: "语义标准"
  desc: "Anthropic的自然语言到API的转换规范。"

# 企业集成
- name: "用友UAPI SDK"
  type: "企业接口"
  desc: "用友NC/OA系统的官方集成开发套件。"

# 区块链
- name: "长安链(ChainMaker)"
  type: "区块链平台"
  desc: "微芯研究院的国产高性能区块链，支持WASM合约。"
- name: "北京市目录链"
  type: "应用案例"
  desc: "长安链的政务落地项目，支撑609项秒批服务。"

# 安全与基础设施
- name: "Javax Crypto API"
  type: "安全库"
  desc: "Java加密服务接口，实现规则数字签名。"
- name: "Prometheus + Grafana"
  type: "监控工具"
  desc: "规则引擎执行性能监控与可视化方案。"
```

### mistral

本次对话主要围绕使用Node.js开发一个运行在Windows上的节点软件，该软件能够在不同的局域网内运行，通过DHT进行节点发现和通信。讨论了如何使用bittorrent-dht库进行DHT节点发现，以及如何通过WebSocket进行通信。此外，还讨论了如何使用STUN服务器获取公共地址和端口，以便进行NAT穿透。在后续的讨论中，我们探讨了如何在相同的端口上同时进行DHT和WebSocket通信，并提供了一个简化的示例代码。最后，我们设计了一套学习和开发时间表，以掌握DMN和Rete算法，并最终开发一套软件，该软件能够使用LLM完成业务规则与会议决议的转换，并通过数字签名进行验证和实时使用。

resources:
  - name: "BBC News"
    url: "https://www.bbc.com/news"
    summary: "提供全球新闻和时事的综合资讯平台。"

  - name: "The New York Times"
    url: "https://www.nytimes.com/"
    summary: "国际知名的新闻媒体，提供深度报道和分析。"

  - name: "Harvard Business Review"
    url: "https://hbr.org/"
    summary: "提供商业管理和领导力方面的深度文章和研究。"

  - name: "McKinsey & Company"
    url: "https://www.mckinsey.com/"
    summary: "全球管理咨询公司，提供行业分析和商业战略。"

  - name: "Medium"
    url: "https://medium.com/"
    summary: "一个开放的平台，用户可以在这里阅读和撰写各种主题的文章。"

  - name: "TED Talks"
    url: "https://www.ted.com/talks"
    summary: "提供来自各领域专家的演讲视频，涵盖广泛的主题。"

  - name: "IEEE Xplore"
    url: "https://ieeexplore.ieee.org/Xplore/home.jsp"
    summary: "提供技术文献和会议论文的在线数据库。"

  - name: "arXiv"
    url: "https://arxiv.org/"
    summary: "一个开放获取的预印本平台，涵盖物理学、数学、计算机科学等领域。"

  - name: "CRDT.tech"
    url: "https://crdt.tech/"
    summary: "提供关于冲突免复制数据类型（CRDTs）的资源和社区支持。"

  - name: "D3.js"
    url: "https://d3js.org/"
    summary: "一个用于定制数据可视化的JavaScript库。"

  - name: "Prompting Guide"
    url: "https://www.promptingguide.ai/"
    summary: "提供关于如何优化提示以有效使用语言模型的指南。"

  - name: "Microsoft AutoGen"
    url: "https://github.com/microsoft/autogen"
    summary: "一个用于创建多智能体AI应用程序的框架。"

  - name: "Nools"
    url: "https://github.com/C2FO/nools"
    summary: "一个基于Rete算法的规则引擎，用于Node.js。"

  - name: "JSON Rules Engine"
    url: "https://github.com/CacheControl/json-rules-engine"
    summary: "一个轻量级的规则引擎，适用于Node.js。"

  - name: "Drools"
    url: "https://www.drools.org/"
    summary: "一个基于Java的规则引擎，使用改进的Rete算法。"

  - name: "Node-Rules"
    url: "https://github.com/mistermartian/node-rules"
    summary: "一个简单的规则引擎，适用于Node.js。"

  - name: "IBM Watsonx Governance"
    url: "https://www.ibm.com/products/watsonx-governance"
    summary: "提供AI治理解决方案，帮助企业管理AI模型。"

  - name: "World Economic Forum"
    url: "https://www.weforum.org/stories/2025/05/how-ai-agents-are-driving-the-administrative-revolution"
    summary: "讨论AI代理如何推动行政革命。"

  - name: "Seekr"
    url: "https://www.seekr.com/blog/understanding-ai-agents-the-next-step-in-enterprise-transformation"
    summary: "解释AI代理及其在企业转型中的作用。"

  - name: "DMN 1.3规范"
    url: "https://www.omg.org/spec/DMN/1.3/PDF"
    summary: "用于学习DMN的基础知识和规范。"

  - name: "Rete算法介绍"
    url: "https://en.wikipedia.org/wiki/Rete_algorithm"
    summary: "用于学习Rete算法的基础知识和应用场景。"

  - name: "Drools官方文档"
    url: "https://www.drools.org/learning/documentation.html"
    summary: "用于学习Drools的基本使用和规则引擎的配置。"

  - name: "Camunda官方文档"
    url: "https://docs.camunda.org/"
    summary: "用于学习Camunda的基本使用和流程引擎的配置。"

  - name: "Hugging Face模型库"
    url: "https://huggingface.co/models"
    summary: "用于学习和选择大型语言模型（LLM）。"

  - name: "NLTK官方文档"
    url: "https://www.nltk.org/"
    summary: "用于学习自然语言处理的基础知识和文本处理。"

  - name: "spaCy官方文档"
    url: "https://spacy.io/"
    summary: "用于学习自然语言处理的基础知识和语义分析。"

  - name: "OpenAI API"
    url: "https://beta.openai.com/docs/"
    summary: "用于设计使用LLM将业务规则转换为自然语言的方法。"

  - name: "OpenSSL官方文档"
    url: "https://www.openssl.org/docs/"
    summary: "用于设计使用数字签名来验证业务规则的方法。"

  - name: "用友软件官方文档"
    url: "http://www.yonyou.com/"
    summary: "用于学习用友软件的API和集成方法。"


### 豆包

提要：对话围绕时间管理中工作资料分配展开，核心涉及“整理task及其相互关系”“PSMD agent AI内部角色和功能”两大主题，探讨了两者逻辑关联与交叉补充。技术上提及CRDT、D3.js、AutoGen等工具，分析了FSM和DAG的文本格式，解决了Java版本兼容问题，讨论了智能合约国内开发方案、AI Agent托管方案及Replit竞争对手对比，涵盖技术选型、工具特性与合规性等内容。

```yaml
- name: crdt.tech
  summary: 提供无冲突复制数据类型（CRDT）相关优质资料索引，是了解CRDT的重要资源。
- name: d3js.org
  summary: D3.js官方网站，提供文档、示例及社区资源，是学习使用D3.js进行数据可视化的核心站点。
- name: plato.stanford.edu/entries/logic-ai/#SysIntAge
  summary: 斯坦福哲学百科页面，探讨基于逻辑的人工智能，涉及非单调逻辑等主题。
- name: promptingguide.ai
  summary: 提供提示工程指南，含优化提示技巧，帮助提升大语言模型使用效果。
- name: github.com/microsoft/autogen
  summary: 微软开源的AI agent框架AutoGen的GitHub仓库，助力构建基于大语言模型的复杂应用。
- name: Integration of Artificial Intelligence (AI) in Task Management Systems
  summary: 研究人工智能在任务管理系统中集成的论文，探讨AI对任务管理的变革。
- name: ibm.com/think/insights/ai-agent-governance
  summary: IBM关于AI代理治理的页面，介绍Watson X治理工具包，支持AI端到端治理。
- name: weforum.org/stories/2025/05/how-ai-agents-are-driving-the-administrative-revolution
  summary: 世界经济论坛文章页面，分析AI代理对企业行政工作的变革作用。
- name: seekr.com/blog/understanding-ai-agents-the-next-step-in-enterprise-transformation
  summary: Seekr博客文章，解析AI代理及其对企业转型的影响，提供部署原则。
- name: arxiv.org/abs/2311.09576
  summary: arXiv预印本论文，提出以工作状态为中心的AI智能体模型，提升任务执行效率。
- name: arxiv.org/abs/2503.15490
  summary: arXiv预印本论文，引入人机任务张量框架，助力理解生成式AI对人类工作的影响。
- name: AdoptOpenJDK
  summary: 开源JDK发行版，提供多个版本（如11、17等），支持跨平台开发。
- name: Hyperledger Fabric
  summary: 许可制联盟链平台，支持隐私保护与模块化架构，适合企业级智能合约应用。
- name: 蚂蚁链（AntChain）
  summary: 阿里云联盟链平台，兼容EVM，提供企业级服务，适合政务、供应链等场景。
- name: 腾讯云TBaaS
  summary: 腾讯云区块链即服务，支持多底层框架，简化企业级区块链应用部署。
- name: Replit
  summary: 在线IDE与部署平台，支持快速开发与原型验证，适合初学者和小型项目。
- name: GitHub Codespaces
  summary: 与GitHub集成的云端开发环境，性能高，适合团队协作，但依赖GitHub生态。
- name: CodeSandbox
  summary: 专注Web开发的在线环境，支持多框架，社区功能强，免费版有资源限制。
```