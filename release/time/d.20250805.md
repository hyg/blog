# 2025.08.05.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	ego: [AI特殊监管区设想](#20250805140000)
- 14:30~14:59	js: [a2a-js](#20250805143000)
- 16:00~16:59	infra: [结合AI进展重新规划架构](#20250805160000)
- 19:00~19:59	check: [零散笔记](#20250805190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7960 | 5570 | 8610 |
| PSMD | 4000 | 1670 | 2330 | 1170 |
| ego | 2530 | 1350 | 1180 | 1335 |
| infra | 2000 | 485 | 1515 | 345 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 3895 | -1895 | 3030 |
| js | 1000 | 400 | 600 | 1740 |

---
waiting list:


- 30分钟时间片：
  - js的第2号事项：graphviz
  - learn的第2号事项：Agent Protocol https://agentprotocol.ai/
  - js的第3号事项：nodejs中调用jar
  - learn的第4号事项：claude code + kimi K2 @ bailian

- 60分钟时间片：
  - infra的第1号事项：动态菜单设计。
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - js的第1号事项：a2a-js

- 90分钟时间片：
  - PSMD的第1号事项：筹备会议 by role+prompt
  - ego的第1号事项：整理task及其相互关系
  - infra的第2号事项：schema立项。
  - PSMD的第3号事项：子1609:基于公司、合同

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - infra的第3号事项：Rete/Phreak算法的自主实现
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.05.[AI特殊监管区设想]任务&body=日期: 2025.08.05.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250805.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250805140000"></a>
## 14:00 ~ 14:29
## ego: [AI特殊监管区设想]

- 和去年8.28交流的结果对接： https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240928.md
- https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240902.md#default
	- 务实Q2：眼前立刻可以兑现的事项就全力跟进，沿着这个方向发现新的、可以立刻落地的机会。需要长期投入培植的方向尽量控制投入。
		- 应该收缩战线。可以提出宏大的构想，然后集中力量去承担适合的局部任务。
	- 务虚Q1：评估能看到自己和别人心里闪现的多少念头，能看到多少与所思考问题无关的干扰。
		- 可能已经被对手分析，有意识地推向表层，难以落地参与竞争。
	- 播客主要还是获客，可以根据这一年的需求积累提炼产品，圈定优势市场。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.05.[a2a-js]任务&body=日期: 2025.08.05.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250805.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250805143000"></a>
## 14:30 ~ 14:59
## js: [a2a-js]

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
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.05.[结合AI进展重新规划架构]任务&body=日期: 2025.08.05.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250805.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250805160000"></a>
## 16:00 ~ 16:59
## infra: [结合AI进展重新规划架构]

### user case

- manifest law 其实不止法律语言一种，改为术语层manifest term更准确。以前也曾交manifest doc？都可以。
- manifest free -> doc -> code 步骤，增加ai这种选择：还属于本层级的思维活动。
- manifest doc的功能和生命周期削弱了。
- ai coder的能力边界不断变化，主要影响速度。
- ai coder的极限，仍然是局部模块的manifest free -> doc -> code，仍然是人工启动、结束的任务，暂时不开自动挡。

- 完整用例：
	- free层用自然语言协作
		- ai以自然语言代替人进行协作
			- 设计prompt，开发agent。
			- 在线chat产生对话内容。
	- doc层用专业术语协作
		- ai以专业术语代替人进行协作
			- 设计prompt，开发agent。
			- 在线chat产生文档。
	- code层用结构化的数据协作
		- ai code代替人进行代码开发
			- 使用claude code这样的工具
			- 在线chat产生代码
	- 以上工作都在vat环境中进行。认识、构造和维护vat产生下一层工作。
	- ego调度以上所有任务。

### infra

- ANP
- 山海坞
- 尽量贴近观察，尽量保持接口统一，但要保持自己实现的基础设施。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.05.[无名任务]任务&body=日期: 2025.08.05.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250805.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250805190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 意识与观察的概念，在ego模型中的普遍形式是互相作用（包括而不限于观察）产生vat，断开相互作用则突破vat。
- 而不观察则无法分析出规律，无法演算。
- 即使认知上局限与vat，各互斥vat内的活动都对vat和更底层产生作用，它们以及它们的创造物还是可以建立通信和协作的，尤其是ai。
