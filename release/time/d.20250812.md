# 2025.08.12.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250812190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8896 | 4634 | 9630 |
| PSMD | 4000 | 1760 | 2240 | 1170 |
| ego | 2530 | 1460 | 1070 | 1425 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4475 | -2475 | 3990 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第1号事项：LegalRuleML（Legal Rule Markup Language）
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：Tauri + Rust

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
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.12.[无名任务]任务&body=日期: 2025.08.12.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250812.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250812190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- sigstore
- https://www.npmjs.com/package/sigstore
- https://www.npmjs.com/package/@sigstore/verify

- wasmcloud

- 借助qwencode再次试试helia
- dapp：D:\huangyg\git\js.sample\helia\dapp
	- 可以运行，功能很简单：在本地浏览器建立一个ipfs节点，存储CID。
	- 外网无法访问这个节点。
	- 一旦浏览器关闭就不再能访问内容。

```
Tauri + Rust 和 WebAssembly + JS 学习计划 

假设您已有 Node.js 或 Python 等编程基础。 
学习计划一：Tauri + Rust 

目标：构建一个安全、轻量、跨平台的桌面应用。 

阶段 1: Rust 基础 (1-2 周) 

    资源：官方书籍《The Rust Programming Language》(The Book)。
    重点：所有权 (Ownership)、借用 (Borrowing)、生命周期 (Lifetimes)、模式匹配 (Pattern Matching)、错误处理 (Result/Option)。
    实践：用 Rust 重写一些简单的 Node.js 工具（如文件操作、CLI 工具）。
     

阶段 2: Tauri 框架 (1 周) 

    资源：Tauri 官方文档 (https://tauri.app)。 
    重点：
        项目结构：理解 src-tauri 目录。
        前后端通信：学习 invoke 和 emit。
        系统 API：调用文件系统、通知等。
         
    实践：创建一个“Hello World”应用，然后添加一个按钮，点击后调用 Rust 代码读取一个本地文件并显示内容。
     

阶段 3: 集成您的项目 (2-3 周) 

    将您的 Node.js 逻辑迁移到 Tauri 的 Rust 后端。
    使用前端（HTML/JS）作为 UI 层。
    实现更新器功能。
     

学习计划二：WebAssembly + JS 

目标：构建一个可在浏览器内安全运行的高性能应用。 

阶段 1: WebAssembly 基础 (1 周) 

    资源：MDN WebAssembly 文档。
    重点：理解 WASM 是什么，它是如何在浏览器中运行的。
    实践：编写一个简单的 C/Rust 函数，编译成 WASM，并在 JS 中调用。
     

阶段 2: Rust + WASM (2 周) 

    资源：wasm-pack 官方教程。
    重点：
        使用 wasm-pack 将 Rust 库编译为 WASM。
        在 JavaScript 中导入和使用 WASM 模块。
        处理 JS 和 WASM 之间的数据交换（字符串、数组）。
         
    实践：将一个计算密集型的 JS 函数（如加密、数据处理）用 Rust 重写并编译为 WASM。
     

阶段 3: 构建应用 (2 周) 

    将您的核心逻辑（如更新器、验证器）用 Rust 编写并编译为 WASM。
    用 JavaScript/HTML 构建用户界面。
    通过 fetch 从 IPFS 加载 WASM 模块。
     

对比： 

    Tauri：更适合需要访问系统资源的桌面应用，最终产品是原生应用。
    WASM + JS：更适合Web 应用，用户无需安装，直接在浏览器运行，但权限受限。
```

# qwen小结：XMTP + 去中心化软件分发系统开发小结（2025年8月11日）

## 一、项目背景与核心目标

今日的讨论始于一个具体的技术实践：为基于 Node.js 的 AI 聊天机器人集成 XMTP SDK，以实现去中心化通信。然而，这一看似简单的任务迅速演变为对整个开源软件供应链安全的深度探索。我们的核心目标也随之明确：构建一个**安全、去中心化、可验证且可自动更新**的软件分发与通信系统。

该系统的核心需求包括：
1.  **去中心化通信**：使用区块链钱包作为身份，通过 XMTP 协议进行端到端加密的消息传递。
2.  **安全分发**：软件包通过 IPFS 进行内容寻址分发，确保内容完整性。
3.  **来源验证**：利用 Sigstore 对软件包进行签名和验证，确保其来源可信。
4.  **自动化更新**：旧版本软件能自动发现、验证并更新到新版本，整个过程对用户透明。
5.  **可审计性**：系统设计应允许第三方对源代码和二进制文件的一致性进行审计。

## 二、技术挑战与解决方案

### 1. XMTP SDK 的安装困境

我们首先遭遇了 `npm install @xmtp/xmtp-js` 的全面失败。所有版本均被标记为“deprecated”，且出现 `proto_1.xmtpEnvelope` 等运行时错误。这并非偶然，而是反映了开源生态的严峻现实：**中心化包管理器（如 npm）上的包可能因项目迁移、维护者变更或恶意劫持而变得不可信**。

我们尝试了 `@xmtp/node-sdk` 和 `@xmtp/browser-sdk`，但分别遇到了平台兼容性问题和浏览器 API 依赖问题。这凸显了依赖预编译包的风险。

**最终解决方案**：放弃 npm，直接从 [XMTP 官方 GitHub 仓库](https://github.com/xmtp/xmtp-js) 克隆源码，使用 `yarn build` 本地构建 SDK。这确保了我们使用的是最新、最纯净的官方代码，绕过了所有中心化包管理的陷阱。同时，我们解决了 `identifierKind` 类型错误（需用数字 `0` 代表 Ethereum）和 ESM 模块导入问题。

### 2. 去中心化发布与自动更新机制

我们设计了一个融合多种技术的创新方案：
*   **通信与发现**：使用 XMTP 作为“信使”。旧版本软件通过 XMTP 向发布者的 `inboxId` 发送更新查询请求，获取新版本的元数据（IPFS CID 和 Rekor ID）。
*   **内容分发**：软件包本身存储在 IPFS 上，通过 CID 进行寻址，确保下载的内容与发布时完全一致。
*   **来源验证**：采用 Sigstore 机制。发布者使用其私钥对软件包进行签名，签名证明被记录在 Rekor 透明日志中。更新器在安装前，会验证签名的有效性，确保软件包确实来自可信发布者且未被篡改。
*   **P2P 更新网络**：为实现“发布者下线后仍能更新”，我们设计了基于信任网络的 P2P 机制。已更新的用户可以作为“更新源”，向仍在使用旧版本的用户广播元数据。**关键在于，用户只传递元数据，真正的软件包仍从 IPFS 下载，并通过 Sigstore 验证**，确保了安全性。

### 3. 技术栈选型与可审计性

我们探讨了 Node.js、Go、Rust 等技术栈。Node.js 适合构建主应用的轻量级界面，但其在系统级操作上的局限性（如 `glibc` 依赖）使其不适合做更新器。因此，我们推荐使用 **Go 或 Rust** 编写更新器，它们能编译成静态链接的单文件，跨平台且易于审计。

可审计性的核心是**可重现构建**。发布者必须公开源代码、精确的构建脚本（如 Dockerfile）和环境。第三方审计员可以使用相同的输入，构建出二进制文件，并与发布者分发的文件进行哈希比对。如果一致，则证明二进制文件中没有后门。

### 4. Sigstore 与 OpenPGP 的安全性对比

我们深入分析了 Sigstore 的安全性。虽然它依赖 Linux 基金会托管的 Fulcio 和 Rekor 服务，存在中心化风险，但其通过“透明日志”实现了“信任 via transparency”，远胜于 OpenPGP 的“信任网络”。即使攻击者短暂控制了发布者，其恶意签名也会被永久记录在 Rekor 中，社区可立即发现。这是一种革命性的安全范式。

### 5. IPFS/IPNS 与 XMTP 的对比

我们比较了使用 IPNS 和 XMTP 进行元数据分发的优劣。IPNS 完全去中心化但更新慢；XMTP 实时交互性强但依赖中继节点。最终结论是两者互补：XMTP 用于快速通知，IPNS 作为最终的、抗审查的元数据源，实现高可用。

## 三、总结与展望

今日的探索揭示了一个真理：真正的去中心化系统不能依赖单一技术。我们构建的 XMTP + IPFS + Sigstore + (Go/Rust) 更新器的架构，是一个多层次、多技术融合的解决方案。它利用了每种技术的优势，规避了各自的弱点。

这个系统不仅解决了通信和更新问题，更建立了一套全新的信任模型：从“信任发布者”转变为“信任可验证的系统”。用户不再需要盲目相信一个中心化服务器或一个开发者的承诺，而是可以通过密码学和透明日志来自主验证。

未来，我们将实现这个设计，并探索将其应用于更广泛的场景，如 DAO 的治理软件分发、去中心化应用的自动升级等。这不仅仅是一个技术项目，更是对一个更安全、更开放的软件未来的实践。

```json
{
  "items": [
    {
      "name": "XMTP",
      "description": "XMTP（eXtensible Message Transport Protocol）是一个基于区块链身份的去中心化消息协议。它允许使用钱包地址（如 Ethereum）作为身份标识，在去中心化网络中进行端到端加密的通信。XMTP 的核心是构建一个无需中心服务器的即时通讯系统，支持一对一聊天、群组和 AI 机器人。其最新版本 V3 引入了 inboxId 作为核心标识符，并依赖 XMTP Relay Nodes 进行消息中继。",
      "url": "https://xmtp.org"
    },
    {
      "name": "Sigstore",
      "description": "Sigstore 是一个由 Linux 基金会支持的开源项目，旨在让软件供应链安全变得简单、免费且自动化。它通过结合三个核心组件实现可验证发布：Fulcio（一个基于 OIDC 身份的证书颁发机构）、Rekor（一个透明的、不可篡改的签名日志）和 Cosign（用于签名和验证的工具）。Sigstore 允许开发者使用其 GitHub 等身份自动为代码或容器签名，任何人都可以验证签名的有效性，从而确保软件来源可信。",
      "url": "https://sigstore.dev"
    },
    {
      "name": "IPFS",
      "description": "IPFS（InterPlanetary File System）是一个点对点的超媒体协议，旨在创建一个去中心化、持久且全球分布的存储网络。它使用内容的哈希值（CID）来寻址文件，而不是服务器位置，实现了内容寻址。这意味着文件一旦发布，其内容就不可变，且可以从网络中的任何节点获取。IPFS 是 Web3 基础设施的基石，被广泛用于存储网站、NFT 元数据等。",
      "url": "https://ipfs.tech"
    },
    {
      "name": "IPNS",
      "description": "IPNS（InterPlanetary Name System）是 IPFS 生态中的命名系统，用于解决 IPFS 内容不可变的特性。它允许一个可变的名称（通常是用户的公钥）指向一个不断变化的 IPFS CID。通过更新 IPNS 记录，可以实现类似 DNS 的功能，让用户通过一个固定的名称（如 /ipns/k51...）来访问最新版本的内容，是实现去中心化网站更新的关键。",
      "url": "https://docs.ipfs.tech/concepts/ipns/"
    },
    {
      "name": "Qwen",
      "description": "通义千问（Qwen）是阿里云推出的一系列超大规模语言模型。它支持多轮对话、知识问答、代码生成等多种能力。在本项目中，Qwen 被用作 AI 聊天机器人的大脑，接收 XMTP 消息，生成智能回复。开发者可以通过阿里云的 DashScope API 或在本地使用 Ollama 运行 Qwen 模型来集成。",
      "url": "https://qwen.ai"
    },
    {
      "name": "Ollama",
      "description": "Ollama 是一个开源工具，允许用户在本地计算机上轻松下载和运行大型语言模型（LLM），如 Llama、Mistral 和 Qwen。它提供了一个简单的命令行接口和 API，使得开发者可以在没有云服务的情况下，将强大的 AI 能力集成到自己的应用中。在本项目中，Ollama 被用作 Qwen 模型的本地运行环境。",
      "url": "https://ollama.com"
    },
    {
      "name": "Tauri",
      "description": "Tauri 是一个开源的框架，用于构建安全、轻量且跨平台的桌面应用。它使用 Rust 作为后端，负责与操作系统交互（如文件系统、系统通知），而前端界面则使用标准的 Web 技术（HTML、CSS、JavaScript）构建。Tauri 应用的二进制文件非常小，因为它不包含整个 Chromium 浏览器引擎，是 Electron 的一个现代替代品。",
      "url": "https://tauri.app"
    },
    {
      "name": "Protocol Labs",
      "description": "Protocol Labs（协议实验室）是一家致力于构建去中心化网络协议的研究与开发实验室，由 Juan Benet 创立。该团队是 IPFS、Filecoin、libp2p 和 IPLD 等关键 Web3 基础设施的主要创建者和维护者。Protocol Labs 拥有雄厚的资金支持和强大的技术实力，其项目在去中心化存储和网络领域具有深远的影响力。",
      "url": "https://protocol.ai"
    },
    {
      "name": "Linux Foundation",
      "description": "Linux 基金会是一个非营利性组织，致力于促进开源技术的发展和采用。它为许多关键的开源项目提供中立的治理、财务支持和基础设施，包括 Linux 内核、Node.js、CNCF（云原生计算基金会）以及 Sigstore。Linux 基金会通过其庞大的生态系统，确保了这些核心开源项目的长期稳定和健康发展。",
      "url": "https://www.linuxfoundation.org"
    },
    {
      "name": "ethers.js",
      "description": "ethers.js 是一个功能齐全、轻量级的 JavaScript 库，用于与以太坊区块链进行交互。它提供了创建钱包、发送交易、读取区块链数据、与智能合约交互等全套功能。在本项目中，ethers.js 被用于生成和管理用于 XMTP 身份的钱包，是连接 Web3 应用与区块链的桥梁。",
      "url": "https://docs.ethers.org"
    }
  ]
}
```
