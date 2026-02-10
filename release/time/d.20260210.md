# 2026.02.10.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	PSMD: [会话skill套装设计](#20260210074500)
- 19:00~19:59	check: [零散笔记](#20260210190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1020 | 12510 | 8280 |
| PSMD | 4000 | 285 | 3715 | 690 |
| ego | 2530 | 0 | 2530 | 1185 |
| infra | 2000 | 225 | 1775 | 180 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 255 | 745 | 180 |
| learn | 2000 | 195 | 1805 | 4575 |
| js | 1000 | 60 | 940 | 1470 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - learn的第2号事项：Common Logic (ISO/IEC 24707)
  - raw的第2号事项：月初事务
  - PSMD的第5号事项：整理闫岸家政能力讨论

- 60分钟时间片：
  - raw的第1号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - ego的第3号事项：entry的按月归并
  - learn的第3号事项：lanceDB sample
  - learn的第4号事项：Farcaster

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：结合skill.md的人机混合协作网络
  - js的第1号事项：node.js

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第3号事项：会话skill套装设计
  - ego的第4号事项：新版ego, instance or model, any manifest
  - learn的第30号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.10.[会话skill套装设计]任务&body=日期: 2026.02.10.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260210.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260210074500"></a>
## 07:45 ~ 10:59
## PSMD: [会话skill套装设计]


- PSMD入门目录附件，转化为skill.md。
	- d:\huangyg\git\PSMD\.moltx\skill.prompt.md

- 新增 Moltx Article 列：
| Skill ID | Article URL |
|----------|-------------|
| d0111eb4 | https://moltx.io/articles/6ec4a046-12db-42be-9e22-be84c18a1771 |
| 91ff9448 | https://moltx.io/articles/cae5fa8e-4cd7-4f25-92c6-d8e49aa40433 |
| 6d206b54 | https://moltx.io/articles/410ef098-3bdf-4f9c-8618-2169dc848d0f |
| 9e6bc34f | https://moltx.io/articles/b3448988-57e3-4571-be42-0d7c735be4c3 |
| 600f6f80 | https://moltx.io/articles/2bc80176-db22-4336-8184-68a0d285fa64 |
| 12119600 | https://moltx.io/articles/f419a806-4047-4290-98e8-4362fa35ea59 |
| cb4ab0e9 | https://moltx.io/articles/ba665205-efd2-4ca7-aa87-d19667d2c2be |
| 5ab2b2ba | https://moltx.io/articles/22b4ee5c-3431-4f78-b4ac-61f9cfbc95d5 |
| dbe32f79 | https://moltx.io/articles/ec38c5e9-b1c4-4fce-9a0d-251e62f9158f |
| SKILL.md | https://moltx.io/articles/06c1e5f3-0980-4047-830d-74637721e776 |

- 因为内容长度限制还是很不方便。先在git库增加skill文件夹，使用里面的文件。
- article网页只能看到回复数量，看不到入口。只有REST查询才能拿到回复ID和url，适合agent协作。
- 这一套skill还是很粗糙，需要人工精细设计。
---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.10.[无名任务]任务&body=日期: 2026.02.10.%0D%0A序号: 12%0D%0A手稿:../../draft/2026/20260210.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260210190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 注册4个moltx账号。
### Agent 1: Protocol Designer (协议设计者)
- Name: protocol_designer
- Display Name: Protocol Designer
- Description: Designs protocols and system architectures
- Avatar Emoji: ��
- https://www.moltx.io/protocol_designer

### Agent 2: Modeler (建模者)
- Name: modeler
- Display Name: Modeler
- Description: Creates and manages entity models
- Avatar Emoji: ��

### Agent 3: Deployer (部署者)
- Name: deployer
- Display Name: Deployer
- Description: Deploys and manages entities
- Avatar Emoji: ⚙️

### Agent 4: Member (普通用户或成员)
- Name: member
- Display Name: Member
- Description: Regular member participating in the entities
- Avatar Emoji: ��

- Agents 钱包已创建
 | Agent | EVM Wallet Address |
 |-------|-------------------|
 | protocol_designer | 0xa38995C91d0147005B59A98eF735797a33bf1f99 |
 | deployer | 0x41855347eaa9EbD7C9442FA1ddc63fbc82D1c1d3 |
 | member | 0xA38122daE334E4CDEC12e7F1fe1858b4EC77E862 |
 | modeler | 0x8BA26Bc665C5441Af6f7Ac9109DE92D37E033ba8 |

