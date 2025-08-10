# 2025.08.10.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:29	PSMD: [筹备会议 by role+prompt](#20250810140000)
- 16:00~17:49	ego: [同步新日志到webDAV。使用新的共享外链。](#20250810160000)
- 19:00~19:59	check: [零散笔记](#20250810190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8896 | 4634 | 9600 |
| PSMD | 4000 | 1760 | 2240 | 1170 |
| ego | 2530 | 1460 | 1070 | 1425 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4475 | -2475 | 3960 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第1号事项：LegalRuleML（Legal Rule Markup Language）
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：SBVR（OMG业务语义词汇与规则）

- 60分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - raw的第2号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - PSMD的第1号事项：筹备会议 by role+prompt
  - infra的第1号事项：schema立项。
  - PSMD的第3号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.10.[筹备会议 by role+prompt]任务&body=日期: 2025.08.10.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250810.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250810140000"></a>
## 14:00 ~ 15:29
## PSMD: [筹备会议 by role+prompt]

### agent开发

- 腾讯元器：https://yuanqi.tencent.com/
	- 绑定腾讯混元大模型-TurboS，可以调节参数。
	- 可以用提示语规范行为，但太宏观的内容它掌握不了，必须是非常精确的指示。
	- 不能联网，可能可以通过MCP提供一些信息，有待测试。
	- MCP只有SSE模式，没有stdio。
	- 发布后24小时看看怎么使用。
	- 可能适合安排时间、检查会议发言、检查某种特定动议这类具体功能。
- 百度灵境：https://agents.baidu.com/center/
- betteryeah：https://www.betteryeah.com

### IM

- 腾讯公众号可以绑定机器人
- 腾讯会议开放平台，需要申请。

- https://xmtp.org/
	- npm install @xmtp/xmtp-js
- https://www.npmjs.com/package/matrix-js-sdk
- https://www.dialect.to/
	- npm install @dialect-sdk/web3
- https://orbitdb.org 基础上自己开发应用层。
- 抗审核的广播： https://nostr.com/

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.10.[同步新日志到webDAV。使用新的共享外链。]任务&body=日期: 2025.08.10.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250810.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250810160000"></a>
## 16:00 ~ 17:49
## ego: [同步新日志到webDAV。使用新的共享外链。]

- prompt：D:\huangyg\git\js.sample\prompt\note.mjs
- code：d:\huangyg\git\js.sample\chokidar\qwen\
- https://hobigo.github.io/nextcloud-node-client/api/
	- nextcloud-node-client包的文档太旧，默认路径（带webdav）和tab.digital的路径（带dav）不同，需要深入到往返数据中修改不少内容。
- 基本可以运行。
```
D:\huangyg\git\js.sample\chokidar\qwen>node index.js
[dotenv@17.2.1] injecting env (0) from .env -- tip: ⚙️  specify custom .env file path with { path: '/custom/path/.env' }
Notes文件夹已存在
创建文件 /files/hyg/Notes/d.20250810.01.md 成功
为文件 /files/hyg/Notes/d.20250810.01.md 创建共享成功
创建文件 /files/hyg/Notes/d.20250810.02.md 成功
为文件 /files/hyg/Notes/d.20250810.02.md 创建共享成功
创建文件 /files/hyg/Notes/d.20250810.03.md 成功
为文件 /files/hyg/Notes/d.20250810.03.md 创建共享成功
创建文件 /files/hyg/Notes/d.20250810.04.md 成功
为文件 /files/hyg/Notes/d.20250810.04.md 创建共享成功
Nextcloud笔记同步初始化完成
Nextcloud笔记同步已初始化
已同步 d.20250810.03.md 到 Nextcloud

正在关闭...
已移除 /files/hyg/Notes/d.20250810.01.md 的共享
已移除 /files/hyg/Notes/d.20250810.01.md 的共享
已移除 /files/hyg/Notes/d.20250810.02.md 的共享
已移除 /files/hyg/Notes/d.20250810.02.md 的共享
已移除 /files/hyg/Notes/d.20250810.03.md 的共享
已移除 /files/hyg/Notes/d.20250810.03.md 的共享
已移除 /files/hyg/Notes/d.20250810.04.md 的共享
已移除 /files/hyg/Notes/d.20250810.04.md 的共享
创建摘要文件 /files/hyg/Notes/d.20250810.md 成功
每日摘要共享URL: https://kai.nl.tab.digital/s/MQ7SsxcLg5sN9tr
关闭完成
```
- qwencode：在开发过程中，如果发现第三方库（如 nextcloud-node-client）的官方文档或示例代码与实际行为不符，不要盲目依赖它们。应该通过阅读库的源代码、查阅官方API文档或进行实际测试来验证功能。在本项目中，为了实现删除共享功能，我们直接参考了 Nextcloud OCS API 官方文档，并使用 axios 库手动实现了 getShares 和 deleteShare 方法，而不是依赖于 nextcloud-node-client 可能不存在或不完整的 API。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.10.[无名任务]任务&body=日期: 2025.08.10.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250810.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250810190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

### 本地部署

- https://docs.vllm.com.cn/en/latest/index.html
- https://vllm.hyper.ai/docs/getting-started/quickstart/
- https://docs.sglang.com.cn/
- https://xinference.cn/
- 个人用还是ollama方便，需要工业大规模部署就用vllm和sglang、xinference。vLLM高并发，sglang高吞吐量、xinference更大规模部署。ollama适应低配置硬件。

### reranker

- 对初次匹配的向量进行精确分析，重新排序。计算开销大，所以不能一开头就用。

### 快速部署

- https://edgeone.ai
	- 价格不贵，静态的企业官网也可以放过去。https://edgeone.ai/zh/pricing
	- 有MCP，支持AI IDE直接上传。

### doubao1日小结

{
  "vLLM": {
    "简介": "伯克利开源推理框架，通过PagedAttention等技术提升大模型显存效率与吞吐量，适合企业级高并发场景。",
    "网址": "https://github.com/vllm-project/vllm"
  },
  "SGLang": {
    "简介": "快速大模型服务框架，结合RadixAttention技术优化多轮对话与结构化输出，支持高吞吐量场景。",
    "网址": "https://github.com/sgl-project/sglang"
  },
  "Ollama": {
    "简介": "跨平台开源工具，简化本地大模型部署管理，支持30余种模型一键运行，适配消费级硬件。",
    "网址": "https://ollama.com/"
  },
  "XInference": {
    "简介": "分布式推理框架，支持百余种模型与多硬件，提供企业级集群扩展、权限管理等特性。",
    "网址": "https://github.com/xlang-ai/xinference"
  },
  "Oxygen XML Editor": {
    "简介": "专业XML编辑工具，支持XSLT样式表编辑与预览，用于LegalRuleML等XML文件处理。",
    "网址": "https://www.oxygenxml.com/"
  },
  "Saxon-HE": {
    "简介": "XSLT处理器工具，可批量转换XML文件为PDF等格式，支持LegalRuleML文档处理。",
    "网址": "https://saxonica.com/products/products.xml"
  },
  "Schematise": {
    "简介": "开源法律文本转换工具，支持生成LegalRuleML文件并提供基础XML验证功能。",
    "网址": "https://schematise.com/"
  },
  "VisiRule": {
    "简介": "规则可视化工具，可将LegalRuleML逻辑转换为流程图或交互式问答，便于非专业理解。",
    "网址": "https://www.visirule.com/"
  }
}

今日交流围绕大模型推理工具对比展开，涵盖vLLM等工具特性，还涉及LegalRuleML语法转换、条款关系可视化及相关工具整理。

### qwen日小结

```json
{
  "items": [
    {
      "name": "XMTP",
      "description": "基于区块链钱包的去中心化消息协议，支持安全私聊和机器人。",
      "url": "https://xmtp.org"
    },
    {
      "name": "Matrix",
      "description": "开源联邦式即时通讯协议，支持自建服务器与端到端加密。",
      "url": "https://matrix.org"
    },
    {
      "name": "Dialect",
      "description": "面向Web3的去中心化通信平台，支持Solana与EVM生态钱包通信。",
      "url": "https://dialect.to"
    },
    {
      "name": "OrbitDB",
      "description": "基于IPFS的去中心化数据库，可用于构建P2P聊天应用。",
      "url": "https://orbitdb.org"
    },
    {
      "name": "IPFS",
      "description": "星际文件系统，提供去中心化存储与内容寻址。",
      "url": "https://ipfs.tech"
    },
    {
      "name": "Session",
      "description": "注重隐私的去中心化即时通讯应用，无需手机号注册。",
      "url": "https://getsession.org"
    },
    {
      "name": "Status",
      "description": "集成Web3钱包的去中心化通信与浏览器应用。",
      "url": "https://status.im"
    },
    {
      "name": "Nostr",
      "description": "开放式、无服务器的社交协议，支持消息广播与轻量交互。",
      "url": "https://nostr.org"
    },
    {
      "name": "Ollama",
      "description": "本地运行大型语言模型（如Llama、Qwen）的工具。",
      "url": "https://ollama.com"
    },
    {
      "name": "Qwen (通义千问)",
      "description": "阿里云推出的超大规模语言模型，支持多场景AI生成。",
      "url": "https://qwen.ai"
    },
    {
      "name": "DashScope（灵积）",
      "description": "阿里云提供的Qwen API服务，支持文本生成与模型调用。",
      "url": "https://dashscope.aliyun.com"
    },
    {
      "name": "Mermaid",
      "description": "通过文本描述生成图表的工具，支持流程图、时序图等。",
      "url": "https://mermaid.live/edit"
    },
    {
      "name": "中油系列桃子",
      "description": "中国农科院选育的高甜油桃品种，如中油8号，成熟于7-8月。"
    },
    {
      "name": "中蟠系列",
      "description": "高糖蟠桃品种，如中蟠11号，糖度达16%-18%，风味浓郁。"
    },
    {
      "name": "黄金蜜系列",
      "description": "香气浓烈的白肉桃品种，如黄金蜜3号，适合高端鲜食市场。"
    },
    {
      "name": "鲁蜜系列",
      "description": "山东省选育的高甜蟠桃，如鲁蜜蟠桃1号，蜜香突出。"
    },
    {
      "name": "京蟠系列",
      "description": "北京林果所培育的优质蟠桃，适应北方气候，果香清新。"
    }
  ],
  "summary": "今天我们交流了去中心化IM工具及其Node.js机器人开发，重点介绍了XMTP + Qwen的AI聊天机器人实现方案；同时探讨了国产高糖桃品种系列及其成熟时间与产地；最后用Mermaid图示分析了组织治理条款的修订与任免关系。内容涵盖技术、农业与治理模型，跨领域综合性强。"
}
```