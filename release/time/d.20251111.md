# 2025.11.11.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	PSMD: [SOP(Standard Operation Procedure)数据结构](#20251111160000)
- 19:00~19:59	check: [零散笔记](#20251111190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2722 | 10808 | 9825 |
| PSMD | 4000 | 270 | 3730 | 1335 |
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
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.11.[SOP(Standard Operation Procedure)数据结构]任务&body=日期: 2025.11.11.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251111.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251111160000"></a>
## 16:00 ~ 16:59
## PSMD: [SOP(Standard Operation Procedure)数据结构]

### camunda

- 以 camunda REST API 或者 camunda-external-task-client-js为范例，设计engine js API。
- 以camunda UI钩子为范例，设计 engine UI API。

### Temporal

- 以TemporalCLI为范例，设计 engine API

- 继续追加时间。

### BPMN和XState组合

- BPMN 引擎 (如 Camunda): 作为编排器；XState: 作为协调器/执行器。
- Camunda中创建一个 Service Task，设置topic。
- js文件中借助camunda-external-task-client-js的client.subscribe()订阅这个topic，调用XState执行具体业务。
- AI强烈建议在以下场景使用此方案： 
	- 一个服务任务包含两个或以上的异步步骤。
    - 任务逻辑中存在复杂的条件分支、重试机制或超时处理。
    - 需要对核心业务逻辑进行严格的单元测试。
    - 同一套业务逻辑需要在多个不同地方复用。
- 对于简单的、线性的、单次调用的服务任务，直接使用 Camunda 的脚本任务或简单的 Node.js 外部任务客户端可能是更直接、更轻量的选择。 

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.11.[无名任务]任务&body=日期: 2025.11.11.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251111.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251111190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 周四复盘周一交流，确定人员定位。
