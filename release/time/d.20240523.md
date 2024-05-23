# 2024.05.23.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版3，使用模版2的时间表。

<a id="index"></a>
- 07:45	[新版个人模型的view draft](#20240523074500)  
- 14:00	[PSMD新合同的view draft](#20240523140000)  
- 16:00	[nosql](#20240523160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 12547 | 728 | 2505 |
| PSMD | 7000 | 5941 | 1059 | 495 |
| learn | 1000 | 727 | 273 | 660 |
| ego | 3000 | 3294 | -294 | 780 |
| js | 1375 | 975 | 400 | 330 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：了解jami api
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - learn的第2号事项：Document-Oriented数据库
  - PSMD的第3号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。

- 60分钟时间片：
  - learn的第1号事项：knowledge graph数据库和查询语言
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - js的第2号事项：学习 nodejs test框架
  - ego的第2号事项：task之间结算体系设计。

- 90分钟时间片：
  - PSMD的第1号事项：PSMD新合同的view draft
  - learn的第5号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：新版个人模型的view draft
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第6号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.23.[新版个人模型的view draft]任务&body=日期: 20240523%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240523074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240523074500"></a>
## 7:45~10:59
新版个人模型的view draft

- 根据昨天手稿整理 D:\huangyg\git\ego\README.md
    - 要不要避开raw、ego这些旧词。
    - entity与let's reconize可以合并。
- 基本概念还在变动：
    - 物体|thing: 与知识图谱的thing定义相同。
    - 主体|entity: 具有mate行为的物体(thing)。
        - meta: 认知自我，解释自己的思想和行为，察觉思想和行为中使用的知识（概念、定义、假设等等）。
            - 可实践的知识，可以表现为生效的协议、要约。
        - raw: entuity还没有认知的自身行为的集合。
    - common: 具有protocol,spilit,joint三种基础行为的主体(entity)。
        - protocol：附有条件的行为。
            - 要约表示可实践的知识。
        - spilit分立，一个entity分立成为多个entity。
        - joint合并，多个entity合并产生一个entity。
    - vat: 支持entity的思想和行为的知识（定义、概念、假设等等）的thing。
    - ego: 通过创造vat、在vat中设立主体(entity)来认知的entity。
    - 共同体|community：由多个主体joint合并而成的主体。

- 休整时间继续整理思路，todo项回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.23.[PSMD新合同的view draft]任务&body=日期: 20240523%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240523140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240523140000"></a>
## 14:00~15:29
PSMD新合同的view draft

- 自助查询、委托编写、互助审议：
    - 一种行为的解释，及其使用的概念、定义、假设；
    - 适合一种行为的分立、合并方案；
    - 多种行为组合的应对。
- 自助查询依赖entity的index

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.23.[nosql]任务&body=日期: 20240523%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240523160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240523160000"></a>
## 16:00~16:59
nosql

- https://zhuanlan.zhihu.com/p/418281466
    - NoSQL可以大体上分为4个种类：Key-value、Document-Oriented、Column-Family Databases以及 Graph-Oriented Databases。
- create js.sample\nosql\redis.js
- cli和js都正常set,get,del
```
D:\huangyg\git\js.sample\nosql>node redis
set OK
get huangyg
del 1
```

- 追加learn todo项：
    - '60': knowledge graph数据库和查询语言
      readme: |
        - Neo4J、Infinite Graph、OrientDB
    - '30': Document-Oriented数据库
      readme: |
        -MongoDB、CouchDB、RavenDB
    - '30': 列存储（Wide Column Store/Column-Family）数据库
      readme: |
        -Cassandra、HBase
