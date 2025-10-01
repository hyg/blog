# 2025.10.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	infra: [封装新版密钥工具集](#20251001140000)
- 14:30~14:59	learn: [LegalRuleML（Legal Rule Markup Language）](#20251001143000)
- 16:00~16:59	js: [a2a-js](#20251001160000)
- 19:00~19:59	check: [零散笔记](#20251001190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 120 | 13410 | 9720 |
| PSMD | 4000 | 0 | 4000 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 195 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 30 | 1970 | 4425 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第5号事项：Tauri + Rust
  - learn的第6号事项：SBVR（OMG业务语义词汇与规则）
  - learn的第7号事项：Akoma Ntoso（结构化法务文档）

- 60分钟时间片：
  - learn的第1号事项：https://jsonlogic.com/
  - js的第1号事项：LangChain.js
  - learn的第2号事项：The Open Quantum Safe (OQS) project
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
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.01.[封装新版密钥工具集]任务&body=日期: 2025.10.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251001.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251001140000"></a>
## 14:00 ~ 14:29
## infra: [封装新版密钥工具集]


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.01.[LegalRuleML（Legal Rule Markup Language）]任务&body=日期: 2025.10.01.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251001.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251001143000"></a>
## 14:30 ~ 14:59
## learn: [LegalRuleML（Legal Rule Markup Language）]


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.01.[a2a-js]任务&body=日期: 2025.10.01.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20251001.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251001160000"></a>
## 16:00 ~ 16:59
## js: [a2a-js]

### https://a2aprotocol.ai/blog/a2a-javascript-sdk-zh

### https://agent2agent.info/zh-cn/docs/examples/javascript/

### read ../../draft/2025/20250726.01.md

#### js: [a2a-js]

- https://a2aprotocol.ai/blog/a2a-javascript-sdk-zh
- https://agent2agent.info/zh-cn/docs/examples/javascript/
- d:\huangyg\git\js.sample\a2a\
- 笔记本故障，工作先返回todo清单。


### read ../../draft/2025/20250805.02.md

#### js: [a2a-js]

- npm install @a2a-js/sdk
- 官网上的测试代码就报错。
```
D:\huangyg\git\js.sample\a2a>node -e "import('@a2a-js/sdk').then(m => console.log(Object.keys(m)))"
[]
```
- 经 z.ai 分析：
	- A2AClient需要从二级模块导入：import { A2AClient } from '@a2a-js/sdk/client';
	- AgentCard 在typescript中使用，不是js： import type { AgentCard } from '@a2a-js/sdk';
		- npx tsx test.ts
- 下面分配一个60分钟时间，实际写一下card、client、server。



---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.01.[无名任务]任务&body=日期: 2025.10.01.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251001.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251001190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 调整作息和饮食。
