# 2024.05.24.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版3，使用模版2的时间表。

<a id="index"></a>
- 07:45	[新版个人模型的view draft](#20240524074500)  
- 14:00	[PSMD新合同的view draft](#20240524140000)  
- 16:00	[knowledge graph数据库和查询语言](#20240524160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 12892 | 383 | 2310 |
| PSMD | 7000 | 6031 | 969 | 405 |
| learn | 1000 | 787 | 213 | 750 |
| ego | 3000 | 3489 | -489 | 585 |
| js | 1375 | 975 | 400 | 330 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：了解jami api
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - PSMD的第3号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - js的第3号事项：继续学习promise api

- 60分钟时间片：
  - PSMD的第1号事项：PSMD新合同的metadata
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - js的第2号事项：学习 nodejs test框架
  - learn的第2号事项：Ultipa

- 90分钟时间片：
  - learn的第1号事项：cypher and neo4j arua
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：新版个人模型的metadata
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.24.[新版个人模型的view draft]任务&body=日期: 20240524%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240524074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240524074500"></a>
## 7:45~10:59
新版个人模型的view draft

- 再次重写基本概念
    - thing按照知识图谱的定义
    - entity是有认知能力的thing
        - 认知能力的定义是能描述思想和行为
        - 认知能力包括对thing(含entity)、对自我
            - raw是尚未认知的思想和行为的集合
            - 已认知的根据内容单独命名
        - 认知结果的默认表达方式是自然语言
    - meta是元认知能力，定义是能描述思想和行为使用的知识
        - 知识包括定义、假设、规律等等
        - vat是一个entity的思想和行为使用的知识的集合
    - protocol是认知结果的规范表达方式，包括法律语言和数学语言等
        - 生效的protocol是可以实践的知识
    - spilit是分立，一个entity分立成为多个entity
    - joint是联合，多个entity合并成为一个entity
        - 认知能力的联合
        - 元认知能力的联合
        - 一部分作为另一部分的vat，前者为后者的思想和行为提供知识
    - ego是通过构造vat来进行元认知的entity
    - club是互相认知的protocol
        - P1 club:对思想和行为的认知
        - P2 club: 元认知
        - gathering是club组织线下互相认知，也是protocol
            - P2 trust：委托作为主持人
    - community是合作的protocol (不再是单一entity)
        - 多层级commnity: 一部分entity作为另一部分的vat
        - raw和ego是合作关系
    - trust是委托的protocol
        - P1 trust: 对思想和行为的认知
        - P2 trust: 委托作为vat
        - mirror trust: 作为并行的镜像，履行相同的职责
- 比对前天昨天的版本
- 比对旧版
- 比对let‘X

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.24.[PSMD新合同的view draft]任务&body=日期: 20240524%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240524140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240524140000"></a>
## 14:00~15:29
PSMD新合同的view draft

- 使用今天版本的个人模型：
- club是互相认知的protocol
        - P1 club:对思想和行为的认知
        - P2 club: 元认知
        - gathering是club组织线下互相认知，也是protocol
                - P2 trust：委托作为主持人
- trust是委托的protocol
        - P1 trust: 对思想和行为的认知
        - P2 trust: 委托作为vat
        - mirror trust: 作为并行的镜像，履行相同的职责
- joint是联合，多个entity合并成为一个entity
        - 认知能力的联合
        - 元认知能力的联合
        - 一部分作为另一部分的vat，前者为后者的思想和行为提供知识
- ego是通过构造vat来进行元认知的entity
- 自助合同主要用于：
        - ego构造vat
- 互助合同是club protocol
- 委托合同是trust protocol

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.24.[knowledge graph数据库和查询语言]任务&body=日期: 20240524%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240524160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240524160000"></a>
## 16:00~16:59
knowledge graph数据库和查询语言

- D:\huangyg\git\draft\2024\04\20240425143000.md
- https://neo4j.com/
- https://neo4j.com/developer/cypher/
- https://github.com/neo4j/neo4j-javascript-driver#readme
- npm install neo4j-driver
- 创建 D:\huangyg\git\js.sample\nosql\neo4j.js
- 
```
MATCH (n) DETACH DELETE n

CREATE (n:term {name:'入门目录202404151600-3',id:'4b12ac08',readme:'\n      - \"可行\"是指：\n        - 方案的内容完整、准确、无二义性，具备相关岗位普通资质的人员可以自行阅读、使用。\n        - 在独立的第三方实施，可以按预期的比率产生预期的效果。\n       - 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。'})

MERGE (index:term {id : '4b12ac08'}) RETURN index.name AS name'
```
```
D:\huangyg\git\js.sample\nosql>node neo4j
入门目录202404151600-3
```

-  登记84分钟，追加todo项：
    - '90': cypher and neo4j arua
      readme: |
        - https://console.neo4j.io
        - https://neo4j.com/docs/cypher-manual/current/syntax/
        - https://zhuanlan.zhihu.com/p/88745411
    - '60': Ultipa 
