# 2025.12.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，十二月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	xuemen: [月度事务](#20251209140000)
- 14:30~14:59	learn: [Ontology + SWRL（Semantic Web Rule Language）](#20251209143000)
- 19:00~19:59	check: [零散笔记](#20251209190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2872 | 10658 | 9855 |
| PSMD | 4000 | 360 | 3640 | 1365 |
| ego | 2530 | 330 | 2200 | 1395 |
| infra | 2000 | 30 | 1970 | 450 |
| xuemen | 1000 | 225 | 775 | 540 |
| raw | 1000 | 90 | 910 | 150 |
| learn | 2000 | 1737 | 263 | 4425 |
| js | 1000 | 100 | 900 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - learn的第2号事项：Common Logic (ISO/IEC 24707)
  - js的第11号事项：passportjs
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：Vector Database in nodejs

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.12.09.[月度事务]任务&body=日期: 2025.12.09.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251209.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251209140000"></a>
## 14:00 ~ 14:29
## xuemen: [月度事务]

- 对账、报税正常完成。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.12.09.[Ontology + SWRL（Semantic Web Rule Language）]任务&body=日期: 2025.12.09.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251209.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251209143000"></a>
## 14:30 ~ 14:59
## learn: [Ontology + SWRL（Semantic Web Rule Language）]

- Ontology（本体）：你可以把它理解为一个领域的“数据字典+关系图谱”
- SWRL已经进入维护期：近 3 年无新版规范，斯坦福侧仅做 Protégé 兼容更新；科研论文数量 2024 起被 SHACL/SPIN 反超。
	- 基本形式：Antecedent (前提) → Consequent (结论)。例如，一条SWRL规则可以是：Person(?p) ∧ hasAge(?p, ?age) ∧ greaterThan(?age, 18) → Adult(?p)。这条规则的含义是：如果一个人（?p）的年龄（?age）大于18，那么可以推断这个人属于“成人”类。
- 上升期的SPIN (SPARQL Inferencing Notation）/SHACL值得关注。
	- 增加todo项

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.12.09.[无名任务]任务&body=日期: 2025.12.09.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251209.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251209190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

