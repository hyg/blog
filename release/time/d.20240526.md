# 2024.05.26.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[整理kernel、ISU、JPU之间的关系，厘清概念。](#20240526074500)  
- 09:30	[新版个人模型](#20240526093000)  
- 14:00	[quick-yaml.db](#20240526140000)  
- 14:30	[Learn the basics https://console.neo4j.io](#20240526143000)  
- 16:00	[Ultipa](#20240526160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 13507 | -232 | 2340 |
| PSMD | 7000 | 6091 | 909 | 495 |
| learn | 1000 | 967 | 33 | 630 |
| ego | 3000 | 3774 | -774 | 675 |
| js | 1375 | 1005 | 370 | 360 |
| xuemen | 600 | 1196 | -596 | 150 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：https://github.com/levelgraph/levelgraph
  - learn的第1号事项：Document-Oriented数据库
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - js的第2号事项：了解jami api

- 60分钟时间片：
  - PSMD的第2号事项：FSM的嵌入式db实现
  - js的第3号事项：学习 nodejs test框架
  - ego的第3号事项：task之间结算体系设计。
  - learn的第4号事项：开发YARRRML范例

- 90分钟时间片：
  - PSMD的第1号事项：FSM的cypher实现
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - ego的第2号事项：新版个人模型的共同体接口
  - learn的第5号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：新版个人模型和部署
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第6号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.26.[整理kernel、ISU、JPU之间的关系，厘清概念。]任务&body=日期: 20240526%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240526074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240526074500"></a>
## 7:45~8:44
整理kernel、ISU、JPU之间的关系，厘清概念。

- xuemen是基于公司法的传统企业，所有新概念、方案必须在国内法框架下，分别以股东、经理、产品经理等角色行使职权，主要瓶颈是：
    - 股东会还使用纸质文件和签名，没有同意使用数字签名；
    - 股东会还使用法律语言，没有同意使用代码作为工作语言（制定决议）；
- kernel是股东会、监事会、董事会和经理的集合，按照公司法可以合并部分角色和职权，对外接口相对稳定，因此统一定义。
- ISU是后台部门的集合。如果xuemen支撑新型共同体运行，ISU将作为国内法接口，是vat中法律语言的部分。
- JPU是产品部门的集合。如果xuemen支撑新型共同体运行，JPU将作为PSMD接口，是vat中数学语言的部分。
    - JPU对外部产品团队提供多种的权利分配规则，并以明文明账方式代运行其中公用部分；
    - JPU为外部产品团队提供发行token的机制；
        - 作为机制的原生功能，各团队在自愿前提下可以联合发行joint token，合并部分权利；
    - JPU按行业分别积累具体规章，并提供法律语言、数学语言双版本供外部团队使用；
    - JPU要谨慎地判断kernel决议和国内法的效力和效率，在遵守法规、保证响应速度的前提下尽可能容纳更多的高级人才（能够使用数学语言设立共同体），并支持他们进入各行业。无法容纳的事项（也就是kernel决议和国内法可以撤销的，响应速度跟不上的）放在外部。如果核心规则放在外部infra，则JPU成为分支机构之一，承接一定范围内的业务。
- 按照新版个人模型：
    - JPU+infra的定位是：
        - 使用数学语言设立共同体的vat
            - 筹备阶段boot protocol
            - 运营阶段default、1609、chain、2405四种标准模型
        - modeler的club
            - 使用数学语言设立共同体的合规检查（针对不使用vat的共同体）
        - deployer的club
        - 部署在vat中所有cod联合发行joint token的管理者
- PSMD提供纯数学语言的vat
- xuemen和PSMD一同寻找股东会使用数字签名、数学语言的公司，提供ISU和JPU

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.26.[新版个人模型]任务&body=日期: 20240526%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240526093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240526093000"></a>
##  9:30~10:59
新版个人模型

- 在前几天模块3期间基本定义再继续比对。
- term的数据库实现还可以推进，保持view不变的话其它方向不等：
    - cypher
    - yaml db
        - https://github.com/GodDown1V4/obsidian-yaml-database
    - embedded db
        - sqlite3
        - https://github.com/typicode/lowdb
        - https://github.com/JamesMGreene/nestdb
        - https://www.npmjs.com/package/nano-sql
- 在此期间增加几个todo项：
    - '90': FSM的cypher实现
    - '60': FSM的嵌入式db实现

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.26.[quick-yaml.db]任务&body=日期: 20240526%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240526140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240526140000"></a>
## 14:00~14:29
quick-yaml.db

- npm install quick-yaml.db
- npm install -g ts-node
- 创建D:\huangyg\git\js.sample\nosql\quick-yaml.ts
- D:\huangyg\git\js.sample\nosql\package.json 中添加 "ts-node": { "esm": true },
- ts-node报错。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.26.[Learn the basics https://console.neo4j.io]任务&body=日期: 20240526%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240526143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240526143000"></a>
## 14:30~14:59
Learn the basics https://console.neo4j.io

- 学习了基本操作。
- 增加todo项
- '30': Query fundamentals https://console.neo4j.io

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.26.[Ultipa]任务&body=日期: 20240526%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240526160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240526160000"></a>
## 16:00~16:59
Ultipa

- https://www.ultipa.cn
    - 嬴图GQL https://www.ultipa.cn/document/ultipa-graph-query-language/introduction
- tigergraph https://www.tigergraph.com.cn
- GSQL：https://info.tigergraph.com/hubfs/Chinese/whitepaper/%E4%B8%8B%E8%BD%BDGSQL%E7%99%BD%E7%9A%AE%E4%B9%A6%E4%B8%80%E7%A7%8D%E7%B1%BBSQL%E7%9A%84%E5%9B%BE%E6%9F%A5%E8%AF%A2%E8%AF%AD%E8%A8%80.pdf
- Gremlin vs Cypher vs nGQL https://cloud.tencent.com/developer/article/1594313
- GQL：https://www.iso.org/standard/76120.html
    - 更像是cypher的方言
    - 预计neo4j的地位会更加稳固
- RDF SPARQL
    - https://www.gstore.cn
    - https://db-engines.com/en/article/RDF+Stores
    - https://db-engines.com/en/system/GraphDB%3BNeo4j
- neo4j 和cypher的未来地位比ultipa、pdf和sparql更好，先选用它做PSMD的数据，留意新的挑战者。
