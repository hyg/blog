# 2025.11.10.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~17:59	PSMD: [SOP(Standard Operation Procedure)数据结构](#20251110160000)
- 19:00~19:59	check: [零散笔记](#20251110190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2662 | 10868 | 9825 |
| PSMD | 4000 | 210 | 3790 | 1335 |
| ego | 2530 | 330 | 2200 | 1395 |
| infra | 2000 | 30 | 1970 | 450 |
| xuemen | 1000 | 195 | 805 | 540 |
| raw | 1000 | 90 | 910 | 150 |
| learn | 2000 | 1707 | 293 | 4425 |
| js | 1000 | 100 | 900 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：Ontology + SWRL（Semantic Web Rule Language）
  - learn的第10号事项：Common Logic (ISO/IEC 24707)
  - js的第11号事项：passportjs
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - ego的第2号事项：整理task及其相互关系
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.10.[SOP(Standard Operation Procedure)数据结构]任务&body=日期: 2025.11.10.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251110.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251110160000"></a>
## 16:00 ~ 17:59
## PSMD: [SOP(Standard Operation Procedure)数据结构]

- 复习工作流引擎
	- temporal、serverless workflow DSL、zeebe值得试试。
- https://temporal.io/
	- https://docs.temporal.io/develop/typescript/set-up-your-local-typescript
```
D:\huangyg\git\sample\voucher\js>winget search Temporal
名称         ID                   版本  匹配              源
----------------------------------------------------------------
Temporal CLI Temporal.TemporalCLI 1.5.1 Command: temporal winget
```
- Serverless Workflow DSL
	- https://serverlessworkflow.io/
	- https://github.com/serverlessworkflow/sdk-typescript
- XState 与 BPMN 引擎的区别: XState 更像一个“状态管理库”，而不是一个“流程管理引擎”。它专注于一个实体的内部行为，而 BPMN 引擎专注于一个跨越多个人员和系统的、长周期的业务流程。你可以用 XState 来实现 BPMN 流程中的一个“服务任务”的内部逻辑。
| 形式化方法 | 是否有引擎？ | 引擎类型和定位 |
|---|---|---|
| **Statecharts** | **是** | **状态管理库** (如 XState)，用于软件组件的内部逻辑。 |
| **Petri 网** | **是 (但小众)** | **分析与仿真工具**，用于系统性能分析和死锁检测。 |
| **Behavior Trees** | **是 (但领域特定)** | **AI/机器人控制引擎**，用于自主智能体的反应式行为。 |
| **进程演算** | **是 (但非执行)** | **模型检验器** (如 FDR4)，用于在开发前验证系统正确性。 |
| **FSM** | **是 (但太基础)** | **通用库/构建块**，用于实现简单的控制逻辑。 |

- BPMN和UI之间的钩子
	- 发现需要用户处理的任务。
    - 获取完成任务所需的数据和表单定义。
    - 渲染一个用户可以操作的界面。
    - 提交用户的操作结果，并推动流程继续。
- BPMN对人工任务的内置定义更完整。但是要对自然人、企业、智能设备统一建模，就不需要这项基础，基于temporal、serverless workflow DSL自定义跨entity任务反而更直观。
- 自定义的接口和内部数据结构，可以参考BPMN的设计。
	- BPMN to UI
	- BPMN to restful

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.10.[无名任务]任务&body=日期: 2025.11.10.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251110.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251110190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

### 车险

- 不可逆的趋势：
	- 车身厂开放AI下载安装
	- AI开放雇佣开发人员进行升级
	- 保险公司开发基于AI的车险业务（费率和AI挂钩而不是车身型号）
- 可能货车会先启动。
- 小国、低人权国家可能会先启动。
- AI作为驾驶员，AI代持企业和保险公司签合同（关于驾驶），车主和保险公司签另一份合同（关于硬件）。
- AI的“户籍管理”是基础，重点是AI的冒名、多重身份的鉴别。显意识、潜意识层级与身份定义的方案。
- 车祸到算法研发人员的压力传递是关键，信号失真会导致严重财务后果。
