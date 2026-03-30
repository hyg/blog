# 2026.03.30.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260330190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1725 | 11805 | 7050 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4275 |
| js | 1000 | 210 | 790 | 1230 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：学习优秀的petri网设计案例
  - js的第2号事项：新版raw.js的子命令-营养成分详情
  - js的第5号事项：新版raw.js的子命令-营养成分排序
  - learn的第9号事项：XACML（存量）

- 60分钟时间片：
  - js的第1号事项：debug
  - ego的第6号事项：eventemitter sample
  - learn的第6号事项：The Open Quantum Safe (OQS) project
  - js的第6号事项：The Node.js best practices list (July 2024)

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - learn的第2号事项：Polygon/Arbitrum
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第22号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.30.[无名任务]任务&body=日期: 2026.03.30.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260330.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260330190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- https://agentearth.ai/
	- 生态位和ANP很接近，MCP阶段动手，工程上更活跃，社会活动方面较弱。
- https://ziwayzhao.github.io/agent-coworker
	- 也是基于XMTP建立agent协作。
- https://github.com/BlinkDL/Agen
	- 思路很好，目前只是简单的替换。对智力活动的分解、分配、集成没有太多体现。
- PSMD node 初稿
	- 使用专用yaml扩展语法建模，通用引擎接口定义SOP。
	- 模型pk：对模型输入事件，按简易规则验证模型的重构、资源能力。
		- 任务由成本（n维）和收益（m维）定义;
		- 人员由每回合的能力（n维）、观察次数（n维）和报酬（m维）定义；
			- 一次观察=对某人员某维度的能力进行测量，决定招聘和考核的速度；
		- 每个角色每回合可以定义一类任务的SOP；
			- 任务必须在能力维度以内，多人联合时去能力并集。 
		- 未定义SOP的事件出现时，
			- 员工有三分之一概率自行处理且成功；
				- 员工自行处理三次事件，则要求自治：上级可以接受自治或开除员工；
		- 自治范围以一系列任务定义，对上级提交调整过的定义（成本增加和收益减少）。
			- 自治范围和人员一级，作为SOP的调度单元。
		- 维度从n=2，m=1开始逐渐递增，任务种类和概率不断偏移。
	- 模拟环境部署：模型部署到仿真环境中对抗，验证能力。
		- 仿真环境抽象接口：
			- 移动、争夺、经营、观察；
				- 争夺由能力权重（n维）和能力累加模式（n维）定义，能力累加模式由相加和峰值两种、可扩展，各方投入的人员能力计算综合能力，赢家通吃。
				- 经营按成本收益计算。
			- 指令、日志。
		- 基础仿真环境：PSMD issue中的无规则对抗模型+LLM。
	- 真实部署：相同语法，相同部署操作，直接进入生产环境使用。
