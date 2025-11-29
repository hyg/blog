# 2025.11.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1f)。

<a id="index"></a>
- 21:25~22:24	check: [零散笔记](#20251129212500)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2812 | 10718 | 9915 |
| PSMD | 4000 | 360 | 3640 | 1365 |
| ego | 2530 | 330 | 2200 | 1395 |
| infra | 2000 | 30 | 1970 | 450 |
| xuemen | 1000 | 195 | 805 | 600 |
| raw | 1000 | 90 | 910 | 150 |
| learn | 2000 | 1707 | 293 | 4425 |
| js | 1000 | 100 | 900 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：Common Logic (ISO/IEC 24707)
  - learn的第2号事项：Ontology + SWRL（Semantic Web Rule Language）
  - js的第11号事项：passportjs
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - xuemen的第1号事项：月度事务
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.29.[无名任务]任务&body=日期: 2025.11.29.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251129.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251129212500"></a>
## 21:25 ~ 22:24
## check: [零散笔记]

- 整理entity、com复合视角

### entity视角

- 意识表达为建模和部署，而且是层级化或者网络化的。
- 表达的过程也是定义的过程，需要厘清：
	- 共用数据的entity
	- 共用硬件的entity
- 不同粒度的定义，压力动力传递过程的信号失真不同。
- 遇到发展障碍时，改变定义粒度向内寻找优化方向。

### com视角

- 任何同类任务都可以joint，对每个类别提取相同的元数据。
- 通过委托-受托关系穿透边界，外部任务成为内部任务。
- 撮合protocol，每类任务可以选择：单向委托、单向受托、双向委托-受托三种常态开放接口，按protocol自动形成报价。
	- 非常态的委托价格更贵。
- 符合上一条定义的等效任务，经过任务间关系形成等效的父任务、兄弟任务。

- 准备模版三，四季度内完成升级。
