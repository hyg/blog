# 2024.10.08.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:34	ego: [整理schema模式下的task对外接口](#20241008140000)
- 14:30~16:29	infra: [整理不同linked data的schema实现方式。](#20241008143000)
- 16:00~16:00	ego: [整理季度任务](#20241008160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 626 | 12904 | 4665 |
| PSMD | 4000 | 30 | 3970 | 990 |
| ego | 2530 | 421 | 2109 | 825 |
| infra | 2000 | 130 | 1870 | 240 |
| xuemen | 1000 | 45 | 955 | 450 |
| raw | 1000 | 0 | 1000 | 480 |
| learn | 2000 | 0 | 2000 | 960 |
| js | 1000 | 0 | 1000 | 720 |

---
waiting list:


- 30分钟时间片：
  - infra的第1号事项：整理不同linked data的schema实现方式。

- 60分钟时间片：
  - ego的第1号事项：整理季度任务
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第1号事项：js class
  - ego的第2号事项：新版本任务、子任务的数据结构

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第4号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - infra的第4号事项：schema立项。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.08.[整理schema模式下的task对外接口]任务&body=日期: 2024.10.08.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/10/20241008.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241008140000"></a>
## 14:00 ~ 14:34
## ego: [整理schema模式下的task对外接口]

- 按昨天整理的三种场景，继续整理。
- 接口体现为合同条款，而且是通用的：委托者团队内部、委托者与业务关联的上下游合作伙伴、委托者与受托者、...无论自然人或共同体都是相同的条款。
- 条款要点：
    - 按照schema层级，概念、规律、知识的定义层级优先于应用层级。
    - 按照PSMD基本原则，在现状无解决方案的前提下，改变选择的方案优先于新选择下的解决方案。
    - 在付费业务中，委托事项自动替代为依赖的优先事项。
- 具体条款等业务对接再细化。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.08.[整理不同linked data的schema实现方式。]任务&body=日期: 2024.10.08.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/10/20241008.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241008143000"></a>
## 14:30 ~ 16:29
## infra: [整理不同linked data的schema实现方式。]

- 考察linkml、JSON-LD、IPLD三套方案。
    - https://linkml.io/
        - https://linkml.io/linkml/intro/overview.html#feature-easy-to-author-schemas
        - https://linkml.io/linkml/schemas/index.html
        - linkml语境下，schema是model。相对于data而言，model定义了这个数据yaml各字段。
            - 至于定义各字段所使用的关键词，来自linkml或者更深一层的model。
            - prefixes字段可以指向更深层schema，可以多个。
        - model和define有一定差异，除非model是基于另一套表达能力无穷的深层model。
    - https://json-ld.org
        - 在data一端指向schema。
    - https://json-schema.org/
        - https://json-schema.org/learn/getting-started-step-by-step
        - $shcema字段指向更深一层级的schema。
        - $id字段指向自己的发布url。
        - 更多底层schema似乎要用warehouseLocation引入。
        - properties字段下每个属性有description，可以放置一些定义、范例。
    - https://ipld.io/
- 这些schema（model）定义了data的结构，用来验证Validate。而不是引入知识、规律、定义。
- Linked Data 的本意，是数据结构还是知识、规律、定义？
- 再复习一下Linked Data ，追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.08.[整理季度任务]任务&body=日期: 2024.10.08.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/10/20241008.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241008160000"></a>
## 16:00 ~ 16:00
## ego: [整理季度任务]

- 时间让给前面任务。本任务继续追加。
