# 2026.01.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260101190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 9165 |
| PSMD | 4000 | 0 | 4000 | 1080 |
| ego | 2530 | 0 | 2530 | 1275 |
| infra | 2000 | 0 | 2000 | 450 |
| xuemen | 1000 | 0 | 1000 | 255 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 0 | 2000 | 4425 |
| js | 1000 | 0 | 1000 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：Common Logic (ISO/IEC 24707)
  - learn的第2号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - PSMD的第10号事项：整理闫岸家政能力讨论
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - PSMD的第1号事项：整理default模型
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - xuemen的第2号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - ego的第1号事项：整理task及其相互关系
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - PSMD的第2号事项：子1609:基于公司、合同

- 195分钟时间片：
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model
  - infra的第3号事项：Rete/Phreak算法的自主实现

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.01.01.[无名任务]任务&body=日期: 2026.01.01.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260101.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260101190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 升级/draft/draft.bat,取代/draft/2025/draft.bat。
- 升级boot.23h2.bat，修改/data/voucher/2026、/draft等路径,升级取日期的方式。
- 一些去中心化存储方案的对比：

| 特性 | **GunDB** | **IPFS** | **OrbitDB** | **Hypercore Protocol** | **Firebase / Supabase** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心功能** | **实时同步的分布式数据库** | **分布式文件系统（内容寻址）** | **分布式数据库（构建于IPFS之上）** | **分布式不可变数据流** | **中心化的实时数据库** |
| **数据模型** | **图数据库** | 文件/对象 | 多种（KV, Log, Doc, Feed等） | 不可变日志 | 文档型 (NoSQL) |
| **数据更新** | **可变、实时** | **不可变（内容哈希不变）** | **可变（通过IPFS日志）** | **只能追加** | **可变、实时** |
| **冲突解决** | **内置HAM算法，自动合并** | N/A (基于内容哈希，无冲突) | 基于CRDTs，自动合并 | N/A (不可变) | **由服务器中心化处理** |
| **去中心化程度** | **高** | **高** | **高** | **高** | **无** |
| **优点** | 1. 实时性极佳<br>2. 离线优先<br>3. 真正的无服务器架构<br>4. 自动冲突解决 | 1. 内容寻址，防篡改<br>2. 非常适合存储大文件<br>3. 生态成熟 | 1. 模型选择多<br>2. 基于IPFS，数据持久化强 | 1. 数据可验证<br>2. 高效的P2P分发<br>3. 适合流媒体、版本控制 | 1. 开发极其简单<br>2. 性能稳定可靠<br>3. 生态系统强大 |
| **缺点** | 1. 学习曲线陡峭<br>2. 社区相对较小<br>3. 文档有时不够清晰 | 1. **不是数据库**，不适合实时查询<br>2. 删除数据困难 | 1. 性能依赖IPFS节点<br>2. 同步延迟可能较高 | 1. **不是数据库**，是底层协议<br>2. 需要自己构建应用层逻辑 | 1. 存在厂商锁定<br>2. 需要付费<br>3. 数据隐私和主权问题 |

- 正式生产环境中，cybercore也需要搭建自己的中继服务器：
```
如何为 Hypercore 搭建“服务器” 
    租用一个云服务器。 
    在服务器上运行一个中继服务。这通常通过 hyperswarm 或更上层的 hyperspace 守护进程来完成。

bash
# 安装 hyperspace
npm i -g hyperspace
# 在服务器上启动 hyperspace 守护进程，它会自动运行一个中继
hyperspaced
 
在团队所有成员的客户端代码中，配置连接到你自己的中继。

javascript
    const Hyperswarm = require('hyperswarm');
    const swarm = new Hyperswarm({
        // 连接到你自己的中继
        relay: ['wss://your-server.com:49444'] // 假设你的中继在 49444 端口
    });

结论：对于 Hypercore Protocol，你需要一个公网上的 Hyperswarm/Hyperspace 中继节点，它同样扮演了“网络协调者”的角色，帮助节点穿透 NAT 并建立连接。 
```
- 正式生产环境中，OrbitDB搭建自己的中继服务器：
```
如何为 OrbitDB 搭建“服务器” 

    租用一个云服务器。 
    在服务器上安装并运行一个 IPFS 守护进程：ipfs daemon。 
    获取这个服务器的公网 IP 和 IPFS 端口（默认是 4001）。 
    在团队所有成员的 IPFS 配置中，移除默认的公共引导节点，只添加你自己的服务器地址：ipfs bootstrap add /ip4/<YOUR_SERVER_IP>/tcp/4001/p2p/<YOUR_SERVER_PEER_ID>。 
    现在，所有团队成员的 OrbitDB（通过底层的 IPFS）都会连接到你的服务器，并由此发现彼此，形成一个私密的 P2P 网络。 

结论：对于 OrbitDB，你需要一个公网上的 IPFS 节点 来充当引导节点和中继，它扮演了和 GunDB 的 server.js 类似的“网络协调者”角色。 
```

- 增加年份参数：ego asset entry [year]

- GunDB https://zwhitchcox.github.io/gun/getting-started.html
