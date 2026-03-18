# 2026.03.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版2(2c)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260318190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1725 | 11805 | 7140 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4365 |
| js | 1000 | 210 | 790 | 1230 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：新版raw.js的子命令-营养成分详情
  - learn的第2号事项：学习优秀的petri网设计案例
  - js的第4号事项：新版raw.js的子命令-营养成分排序
  - learn的第11号事项：XACML（存量）

- 60分钟时间片：
  - learn的第1号事项：Zapier
  - learn的第5号事项：Polygon/Arbitrum
  - js的第5号事项：debug
  - ego的第6号事项：eventemitter sample

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - js的第2号事项：openpgp v6.1.1.
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第24号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.18.[无名任务]任务&body=日期: 2026.03.18.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260318.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260318190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- awiki移植项目
	- 完成module（util+lib）的测试，因为subagent执行的测试代码有死循环，好几层停滞、无法正常退出。
	- 开始skill项目。

- MQTT
	- 根据did:wba协议修改，要求：手工上传did.json，自动验证。这部分还没有通过。
	- 继续MQTT项目debug，并且设计了三层可插拔的子协议架构。
	- 三层架构协议管理器设计方案

    架构分析

    当前系统的三层结构

      1 ┌─────────────────────────────────────────────────────────────────┐
      2 │                        应用层 (Application)                      │
      3 │  - 明文聊天  - 密文聊天  - 群组聊天  - 文件传输  - 语音/视频    │
      4 │  协议：ANP-E2EE, Plain-Text, Group-Protocol, ...               │
      5 ├─────────────────────────────────────────────────────────────────┤
      6 │                        身份层 (Identity)                         │
      7 │  - DID 管理  - 密钥协商  - 签名验证  - DID 文档解析               │
      8 │  协议：did:key, did:ethr, did:wba, did:web, ...                │
      9 ├─────────────────────────────────────────────────────────────────┤
     10 │                        通信层 (Transport)                        │
     11 │  - 消息传输  - 发布/订阅  - P2P 连接  - 数据同步                   │
     12 │  协议：MQTT, PeerJS, Gun, WebSocket, ...                       │
     13 └─────────────────────────────────────────────────────────────────┘

    协议管理器设计方案

    方案对比


    ┌────────────────────┬───────────────────────────────────────┬────────────────────┬────────────────────────┐
    │ 方案               │ 描述                                  │ 优点               │ 缺点                   │
    ├────────────────────┼───────────────────────────────────────┼────────────────────┼────────────────────────┤
    │ 方案 A: 单一管理器 │ 一个 ProtocolManager 管理所有层的协议 │ 简单，统一接口     │ 耦合度高，难以独立扩展 │
    │ 方案 B: 分层管理器 │ 每层独立的 ProtocolManager            │ 解耦，独立扩展     │ 需要协调机制           │
    │ 方案 C: 混合模式   │ 分层管理 + 顶层协调器                 │ 平衡灵活性和协调性 │ 复杂度最高             │
    └────────────────────┴───────────────────────────────────────┴────────────────────┴────────────────────────┘


    推荐方案：方案 B（分层管理器）+ 轻量协调器

      1 ┌─────────────────────────────────────────────────────────────────┐
      2 │                    Protocol Coordinator                         │
      3 │              (轻量级协调器，非强制管理)                          │
      4 │  - 协议兼容性检查  - 跨层协议绑定  - 全局状态监控                │
      5 └─────────────────────────────────────────────────────────────────┘
      6                               │
      7         ┌─────────────────────┼─────────────────────┐
      8         ▼                     ▼                     ▼
      9 ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐
     10 │  Transport        │ │  Identity         │ │  Application      │
     11 │  ProtocolManager  │ │  ProtocolManager  │ │  ProtocolManager  │
     12 ├───────────────────┤ ├───────────────────┤ ├───────────────────┤
     13 │ - MQTT            │ │ - did:key         │ │ - Plain-Text      │
     14 │ - PeerJS         │ │ - did:ethr        │ │ - ANP-E2EE        │
     15 │ - Gun            │ │ - did:wba         │ │ - Group-Chat      │
     16 │ - WebSocket      │ │ - did:web         │ │ - File-Transfer   │
     17 │ - ...            │ │ - ...             │ │ - ...             │
     18 └───────────────────┘ └───────────────────┘ └───────────────────┘

    详细设计

    1. 通信层协议管理器

      1 /**
      2  * 通信层协议管理器
      3  * 负责管理所有传输协议
      4  */
      5 class TransportProtocolManager {
      6   private protocols: Map<string, ITransportProtocol> = new Map();
      7   private activeProtocol: ITransportProtocol | null = null;
      8
      9   // 协议注册
     10   registerProtocol(protocol: ITransportProtocol): void;
     11
     12   // 协议切换
     13   async switchProtocol(protocolId: string): Promise<boolean>;
     14
     15   // 自动协商
     16   async negotiate(): Promise<ITransportProtocol>;
     17
     18   // 发送消息
     19   async send(topic: string, message: any): Promise<SendResult>;
     20
     21   // 订阅
     22   async subscribe(topic: string, callback: MessageCallback): Promise<void>;
     23 }
     24
     25 // 协议接口
     26 interface ITransportProtocol {
     27   readonly protocolId: string;
     28   readonly protocolName: string;
     29   readonly priority: number;
     30
     31   connect(config: TransportConfig): Promise<ConnectionResult>;
     32   disconnect(): Promise<void>;
     33   send(topic: string, message: any): Promise<SendResult>;
     34   subscribe(topic: string, callback: MessageCallback): Promise<void>;
     35   getStatus(): ConnectionStatus;
     36   getCapabilities(): TransportCapabilities;
     37 }

    2. 身份层协议管理器

      1 /**
      2  * 身份层协议管理器
      3  * 负责管理所有 DID 方法和身份协议
      4  */
      5 class IdentityProtocolManager {
      6   private didMethods: Map<string, IDIDMethod> = new Map();
      7   private activeIdentities: Map<string, Identity> = new Map();
      8
      9   // DID 方法注册
     10   registerDIDMethod(method: IDIDMethod): void;
     11
     12   // 创建身份
     13   createIdentity(method: string, options: any): Promise<Identity>;
     14
     15   // 切换身份
     16   setActiveIdentity(did: string): void;
     17
     18   // 解析 DID
     19   resolveDID(did: string): Promise<DIDDocument>;
     20
     21   // 密钥协商
     22   deriveSharedSecret(myDid: string, theirDid: string): Promise<Uint8Array>;
     23
     24   // 签名
     25   sign(did: string, message: Uint8Array): Promise<Signature>;
     26
     27   // 验证
     28   verify(did: string, message: Uint8Array, signature: Signature): Promise<boolean>;
     29 }
     30
     31 // DID 方法接口
     32 interface IDIDMethod {
     33   readonly methodId: string;
     34   readonly methodName: string;
     35
     36   generate(options: any): Promise<Identity>;
     37   fromPrivateKey(privateKey: Uint8Array, options: any): Identity;
     38   resolve(did: string): Promise<DIDDocument>;
     39   getSharedSecret(myKey: Uint8Array, theirKey: Uint8Array): Uint8Array;
     40   sign(message: Uint8Array, privateKey: Uint8Array): Signature;
     41   verify(message: Uint8Array, signature: Signature, publicKey: Uint8Array): boolean;
     42 }

    3. 应用层协议管理器

      1 /**
      2  * 应用层协议管理器
      3  * 负责管理所有应用级协议（消息格式、加密方案等）
      4  */
      5 class ApplicationProtocolManager {
      6   private messageProtocols: Map<string, IMessageProtocol> = new Map();
      7   private encryptionProtocols: Map<string, IEncryptionProtocol> = new Map();
      8   private activeMessageProtocol: IMessageProtocol | null = null;
      9   private activeEncryptionProtocol: IEncryptionProtocol | null = null;
     10
     11   // 消息协议注册
     12   registerMessageProtocol(protocol: IMessageProtocol): void;
     13
     14   // 加密协议注册
     15   registerEncryptionProtocol(protocol: IEncryptionProtocol): void;
     16
     17   // 格式化消息
     18   formatMessage(type: string, content: any): FormattedMessage;
     19
     20   // 加密消息
     21   encryptMessage(message: FormattedMessage, sessionKey: Uint8Array): EncryptedMessage;
     22
     23   // 解密消息
     24   decryptMessage(encrypted: EncryptedMessage, sessionKey: Uint8Array): FormattedMessage;
     25 }
     26
     27 // 消息协议接口
     28 interface IMessageProtocol {
     29   readonly protocolId: string;
     30   readonly protocolName: string;
     31   readonly messageTypes: string[];
     32
     33   format(type: string, content: any): FormattedMessage;
     34   parse(raw: any): FormattedMessage;
     35   validate(message: FormattedMessage): boolean;
     36 }
     37
     38 // 加密协议接口
     39 interface IEncryptionProtocol {
     40   readonly protocolId: string;
     41   readonly protocolName: string;
     42   readonly keySize: number;
     43
     44   encrypt(plaintext: Uint8Array, key: Uint8Array, nonce: Uint8Array): Uint8Array;
     45   decrypt(ciphertext: Uint8Array, key: Uint8Array, nonce: Uint8Array): Uint8Array;
     46   generateKey(): Uint8Array;
     47   generateNonce(): Uint8Array;
     48 }

    4. 轻量协调器

      1 /**
      2  * 协议协调器
      3  * 轻量级，负责跨层协调
      4  */
      5 class ProtocolCoordinator {
      6   private transportManager: TransportProtocolManager;
      7   private identityManager: IdentityProtocolManager;
      8   private applicationManager: ApplicationProtocolManager;
      9
     10   constructor(
     11     transport: TransportProtocolManager,
     12     identity: IdentityProtocolManager,
     13     application: ApplicationProtocolManager
     14   ) {
     15     this.transportManager = transport;
     16     this.identityManager = identity;
     17     this.applicationManager = application;
     18   }
     19
     20   /**
     21    * 检查协议兼容性
     22    */
     23   checkCompatibility(): CompatibilityReport {
     24     const transport = this.transportManager.getActiveProtocol();
     25     const identity = this.identityManager.getActiveIdentities();
     26     const app = this.applicationManager.getActiveProtocols();
     27
     28     const report: CompatibilityReport = {
     29       compatible: true,
     30       warnings: [],
     31       errors: []
     32     };
     33
     34     // 检查传输协议是否支持应用层需求
     35     if (app.encryption.requiresEncryption && !transport.getCapabilities().supportsEncryption) {
     36       report.warnings.push('Transport does not support encryption, using application-layer encryption');
     37     }
     38
     39     // 检查 DID 方法是否与传输协议兼容
     40     identity.forEach(id => {
     41       if (id.method === 'did:wba' && !transport.getCapabilities().supportsHTTP) {
     42         report.errors.push('did:wba requires HTTP/HTTPS transport');
     43         report.compatible = false;
     44       }
     45     });
     46
     47     return report;
     48   }
     49
     50   /**
     51    * 获取全局状态
     52    */
     53   getGlobalState(): GlobalState {
     54     return {
     55       transport: {
     56         protocol: this.transportManager.getActiveProtocol()?.protocolId,
     57         status: this.transportManager.getActiveProtocol()?.getStatus()
     58       },
     59       identity: {
     60         methods: this.identityManager.getRegisteredMethods(),
     61         activeCount: this.identityManager.getActiveIdentities().size
     62       },
     63       application: {
     64         messageProtocol: this.applicationManager.getActiveMessageProtocol()?.protocolId,
     65         encryptionProtocol: this.applicationManager.getActiveEncryptionProtocol()?.protocolId
     66       }
     67     };
     68   }
     69
     70   /**
     71    * 推荐协议组合
     72    */
     73   recommendProtocolStack(context: UsageContext): ProtocolStack {
     74     // 根据使用场景推荐最优协议组合
     75     if (context.type === 'realtime-chat') {
     76       return {
     77         transport: 'mqtt',
     78         identity: 'did:key',
     79         message: 'anp-plain',
     80         encryption: 'hpke-aes128'
     81       };
     82     } else if (context.type === 'p2p-file-transfer') {
     83       return {
     84         transport: 'peerjs',
     85         identity: 'did:wba',
     86         message: 'anp-file',
     87         encryption: 'hpke-chacha20'
     88       };
     89     }
     90     // ...
     91   }
     92 }

    工作量评估

    阶段 1: 核心框架（2-3 周）


    ┌─────────────────────────────────┬────────┬────────┐
    │ 任务                            │ 工作量 │ 优先级 │
    ├─────────────────────────────────┼────────┼────────┤
    │ 定义三层协议接口                │ 2 天   │ P0     │
    │ 实现 TransportProtocolManager   │ 3 天   │ P0     │
    │ 实现 IdentityProtocolManager    │ 3 天   │ P0     │
    │ 实现 ApplicationProtocolManager │ 3 天   │ P0     │
    │ 实现 ProtocolCoordinator        │ 2 天   │ P1     │
    │ 单元测试                        │ 3 天   │ P0     │
    │ 小计                            │ 16 天  │        │
    └─────────────────────────────────┴────────┴────────┘


    阶段 2: 协议实现（4-6 周）

    通信层协议


    ┌───────────────────┬────────┬────────┐
    │ 协议              │ 工作量 │ 优先级 │
    ├───────────────────┼────────┼────────┤
    │ MQTT (已有，重构) │ 2 天   │ P0     │
    │ WebSocket         │ 3 天   │ P0     │
    │ PeerJS            │ 4 天   │ P1     │
    │ Gun               │ 4 天   │ P2     │
    │ 小计              │ 13 天  │        │
    └───────────────────┴────────┴────────┘


    身份层协议


    ┌───────────────────────┬────────┬────────┐
    │ 协议                  │ 工作量 │ 优先级 │
    ├───────────────────────┼────────┼────────┤
    │ did:key (已有，重构)  │ 2 天   │ P0     │
    │ did:ethr (已有，重构) │ 2 天   │ P0     │
    │ did:wba (已有，重构)  │ 2 天   │ P0     │
    │ did:web               │ 3 天   │ P1     │
    │ 小计                  │ 9 天   │        │
    └───────────────────────┴────────┴────────┘


    应用层协议


    ┌─────────────────────────┬────────┬────────┐
    │ 协议                    │ 工作量 │ 优先级 │
    ├─────────────────────────┼────────┼────────┤
    │ Plain-Text (已有，重构) │ 1 天   │ P0     │
    │ ANP-E2EE (已有，重构)   │ 3 天   │ P0     │
    │ Group-Chat              │ 5 天   │ P1     │
    │ File-Transfer           │ 4 天   │ P1     │
    │ 小计                    │ 13 天  │        │
    └─────────────────────────┴────────┴────────┘


    阶段 3: 集成与测试（2-3 周）


    ┌──────────────┬────────┬────────┐
    │ 任务         │ 工作量 │ 优先级 │
    ├──────────────┼────────┼────────┤
    │ 三层集成     │ 3 天   │ P0     │
    │ 协议切换测试 │ 3 天   │ P0     │
    │ 兼容性测试   │ 3 天   │ P0     │
    │ 性能测试     │ 2 天   │ P1     │
    │ 文档编写     │ 3 天   │ P1     │
    │ 小计         │ 14 天  │        │
    └──────────────┴────────┴────────┘


    总工作量


    ┌──────────────────┬────────┬─────────┐
    │ 阶段             │ 工作量 │ 时间    │
    ├──────────────────┼────────┼─────────┤
    │ 阶段 1: 核心框架 │ 16 天  │ 2-3 周  │
    │ 阶段 2: 协议实现 │ 35 天  │ 4-6 周  │
    │ 阶段 3: 集成测试 │ 14 天  │ 2-3 周  │
    │ 总计             │ 65 天  │ 8-12 周 │
    └──────────────────┴────────┴─────────┘


    风险评估

    高风险


    ┌──────────────────────┬──────┬──────┬──────────────────────────┐
    │ 风险                 │ 影响 │ 概率 │ 缓解措施                 │
    ├──────────────────────┼──────┼──────┼──────────────────────────┤
    │ 协议接口设计不合理   │ 高   │ 中   │ 充分评审，预留扩展点     │
    │ 跨层协调复杂度高     │ 高   │ 中   │ 保持协调器轻量，明确边界 │
    │ 协议切换导致消息丢失 │ 高   │ 中   │ 实现消息队列和重发机制   │
    └──────────────────────┴──────┴──────┴──────────────────────────┘


    中风险


    ┌────────────────┬──────┬──────┬────────────────────────┐
    │ 风险           │ 影响 │ 概率 │ 缓解措施               │
    ├────────────────┼──────┼──────┼────────────────────────┤
    │ 性能开销       │ 中   │ 中   │ 基准测试，优化热点路径 │
    │ 协议兼容性问题 │ 中   │ 中   │ 完善的兼容性检查       │
    │ 测试覆盖不足   │ 中   │ 高   │ 自动化测试，CI/CD      │
    └────────────────┴──────┴──────┴────────────────────────┘


    低风险


    ┌──────────────┬──────┬──────┬────────────────────┐
    │ 风险         │ 影响 │ 概率 │ 缓解措施           │
    ├──────────────┼──────┼──────┼────────────────────┤
    │ 文档滞后     │ 低   │ 高   │ 文档与代码同步更新 │
    │ 学习曲线陡峭 │ 低   │ 中   │ 示例代码，使用指南 │
    └──────────────┴──────┴──────┴────────────────────┘


    实施建议

    优先级排序

      1 P0 (必须实现):
      2 ├── 三层协议接口定义
      3 ├── TransportProtocolManager (MQTT, WebSocket)
      4 ├── IdentityProtocolManager (did:key, did:wba)
      5 ├── ApplicationProtocolManager (Plain-Text, ANP-E2EE)
      6 └── 基础单元测试
      7
      8 P1 (应该实现):
      9 ├── ProtocolCoordinator
     10 ├── PeerJS 协议
     11 ├── did:web
     12 ├── Group-Chat 协议
     13 └── 集成测试
     14
     15 P2 (可以实现):
     16 ├── Gun 协议
     17 ├── File-Transfer 协议
     18 ├── 性能优化
     19 └── 高级功能

    渐进式实施策略

      1 第 1 步: 保持现有功能
      2        └── 现有代码继续工作
      3
      4 第 2 步: 并行开发新框架
      5        └── 新框架与现有代码并行
      6
      7 第 3 步: 逐步迁移
      8        └── 先迁移通信层
      9        └── 再迁移身份层
     10        └── 最后迁移应用层
     11
     12 第 4 步: 废弃旧代码
     13        └── 确保所有功能已迁移
     14        └── 删除旧代码

    关键决策点

     1. 是否值得重构？
        - 当前代码已工作良好
        - 重构收益：可扩展性、可维护性
        - 重构成本：65 天工作量
        - 建议: 渐进式重构，不影响现有功能

     2. 协议管理器粒度？
        - 单一管理器：简单但耦合
        - 分层管理器：解耦但复杂
        - 建议: 分层管理器 + 轻量协调器

     3. 何时开始？
        - 如果近期有扩展需求：立即开始
        - 如果当前功能满足需求：可以延后
        - 建议: 先完成核心框架，协议实现按需进行

    总结


    ┌──────────┬──────────────────────────────┐
    │ 方面     │ 评估                         │
    ├──────────┼──────────────────────────────┤
    │ 架构方案 │ 分层管理器 + 轻量协调器      │
    │ 总工作量 │ 65 天 (8-12 周)              │
    │ 主要风险 │ 接口设计、跨层协调、消息丢失 │
    │ 实施策略 │ 渐进式，P0 优先              │
    │ 建议     │ 先完成核心框架，协议按需实现 │
    └──────────┴──────────────────────────────┘
