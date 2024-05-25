# 2024.05.25.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版3，使用模版2的时间表。

<a id="index"></a>
- 07:45	[新版个人模型的metadata](#20240525074500)  
- 14:00	[cypher and neo4j arua](#20240525140000)  
- 16:00	[PSMD新合同的metadata](#20240525160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 13237 | 38 | 2235 |
| PSMD | 7000 | 6091 | 909 | 345 |
| learn | 1000 | 877 | 123 | 690 |
| ego | 3000 | 3684 | -684 | 570 |
| js | 1375 | 975 | 400 | 390 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：quick-yaml.db
  - learn的第1号事项：Learn the basics https://console.neo4j.io
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - PSMD的第2号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。

- 60分钟时间片：
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - learn的第2号事项：Ultipa
  - ego的第2号事项：task之间结算体系设计。
  - ego的第3号事项：在season metadata中实现浮动时间表，修改日计划功能。

- 90分钟时间片：
  - ego的第1号事项：新版个人模型
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.25.[新版个人模型的metadata]任务&body=日期: 20240525%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240525074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240525074500"></a>
## 7:45~10:59
新版个人模型的metadata

- 在昨天基本定义基础上微调：
    - joint合并是多个entity合并为一个entity：community
    - protocol可以使多个entity之间产生一个entity内部某个时刻的合作关系，差异在于：
        - term双方不同，protocol是各个旧entity之间，joint是各个旧entity作为各member与新entity之间；
            - 各member如果使用外部vat（比如身体、硬件），还会有交易；
        - term的修订权不同；
        - 对合作范围内的思想和行为的描述不同，joint规定了统一的描述，protocol不一定有；
        - 如果涉及meta，joint规定了统一的meta，protocol不一定有；
    - meta和vat的关系还没有敲定
        - meta是认知思想和行为使用的知识，偏重于现实
        - vat是为思想和行为提供知识，偏重于设想
            - vat是通过改变使用的知识，来改变思想和行为
        - 是否要为meta、vat增加明确的概念，就像认知能力区分thing->entity一样，继续在entity之上增加概念？
- 再次放在三种形式自然人、共同体、智能设备检查。
- 再次比对旧版、比对let‘X。
- 放在物理学的模型中检查。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.25.[cypher and neo4j arua]任务&body=日期: 20240525%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240525140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240525140000"></a>
## 14:00~15:29
cypher and neo4j arua

- 结合Galaxybase 的文章把语法学习完： https://zhuanlan.zhihu.com/p/398323729
- neo4k的教程，基础概念更深入，还没有对比Galaxybase的语法有什么差异 ：https://neo4j.com/docs/cypher-manual/current/queries/concepts/
- 嵌入式的、nodejs的数据库，找到有基于json、yaml的，还没有图数据库；
- 嵌入式的，python的，neo4j可以。
- 追加todo项：
    - '30': Learn the basics https://console.neo4j.io 

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.25.[PSMD新合同的metadata]任务&body=日期: 20240525%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240525160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240525160000"></a>
## 16:00~16:59
PSMD新合同的metadata

- 在昨天基础上微调：
    - trust是委托的protocol
        - P1 trust: 对思想和行为的认知
        - P2 trust: 元认知
        - vat truset: 提供vat
        - mirror trust: 作为并行的镜像，履行相同的职责
        - backup trust: 有问题没有决议的时候，提供动议
