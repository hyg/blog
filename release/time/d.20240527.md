# 2024.05.27.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[新版个人模型和部署](#20240527074500)  
- 14:00	[FSM的cypher实现](#20240527140000)  
- 16:00	[FSM的嵌入式db实现](#20240527160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 13852 | -577 | 2205 |
| PSMD | 7000 | 6241 | 759 | 345 |
| learn | 1000 | 967 | 33 | 690 |
| ego | 3000 | 3969 | -969 | 600 |
| js | 1375 | 1005 | 370 | 390 |
| xuemen | 600 | 1196 | -596 | 150 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：https://github.com/levelgraph/levelgraph
  - learn的第1号事项：https://www.npmjs.com/package/jssm
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - PSMD的第2号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。

- 60分钟时间片：
  - ego的第1号事项：新版个人模型的view
  - ego的第2号事项：task之间结算体系设计。
  - js的第3号事项：学习 nodejs test框架
  - ego的第3号事项：在season metadata中实现浮动时间表，修改日计划功能。

- 90分钟时间片：
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - learn的第7号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第8号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.27.[新版个人模型和部署]任务&body=日期: 20240527%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240527074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240527074500"></a>
## 7:45~10:59
新版个人模型和部署

- meta和vat是一种还是两种protocol？
    - 是两种。
    - 以公司法分工为例，meta主要由董事会负责，vat主要由经理（+hr等）负责、董事监事支持。
    - 基于纯数学语言的共同体，meta倾向于由短期或一次性角色完成，vat需要稳定的架构但一旦部署就不需要创新。
- 再与“行动代替语言”对比，在个人领域孵化新规则再spilit、joint到共同体中，在新模型中怎么实现，能不能代替董事角色的旧定义？
- protocol是附有条件的行为，还是多个entity的共同认知。
    - 是多个entity的共同认知。
    - 对推理和行为的描述，就包含附有条件的行为，将要发生的行为。
- 思想、推理和行为要不要统一起来。
- vat是protocol还是thing。
    - 是protocol。
    - 以protocol替换原有知识；
    - 先有明确的知识，再有使用这些知识的推理和行为；
    - 通过替换知识来改变推理和行为。

- 基本概念清晰，可以真正动笔了：
    - '60': 新版个人模型的view
      bind:
        - '90': 新版个人模型的共同体接口
          bind:
            - '60': 新版个人模型的metadata

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.27.[FSM的cypher实现]任务&body=日期: 20240527%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240527140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240527140000"></a>
## 14:00~15:29
FSM的cypher实现

- 这是错误的创建语句
```
MATCH (n) DETACH DELETE n
CREATE (:status {id:1}) -[:event{id:"a"}]-> (:status{id:2})
CREATE (:status {id:2}) -[:event{id:"a"}]-> (:status{id:3})
CREATE (:status {id:3}) -[:event{id:"a"}]-> (:status{id:4})
CREATE (:status {id:4}) -[:event{id:"a"}]-> (:status{id:5})
CREATE (:status {id:5}) -[:event{id:"a"}]-> (:status{id:1})
CREATE (:status {id:1}) -[:event{id:"b"}]-> (:status{id:3})
CREATE (:status {id:3}) -[:event{id:"b"}]-> (:status{id:5})
CREATE (:status {id:5}) -[:event{id:"b"}]-> (:status{id:2})
CREATE (:status {id:2}) -[:event{id:"b"}]-> (:status{id:4})
CREATE (:status {id:4}) -[:event{id:"b"}]-> (:status{id:1})
MATCH (:status{id:1})-[:event{id:"a"}]->(n:status) RETURN n.id

```
- 产生了许多同名的node，所以只能查询到一层关系。

```
MATCH (:status{id:1})-[r:event]-{1,5}(:status{id:4}) RETURN r
1
[{
identity:1152931400211496981, 
start:21, 
end:22, 
type:"event", 
properties:{
id:"b"
}, 
elementId:"5:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:1152931400211496981", 
startNodeElementId:"4:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:21", 
endNodeElementId:"4:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:22"
}]
```
- 查询不到多层关系的path
```
MATCH p=shortestPath((:status{id:1})-[:event*1..5]->(:status{id:4})) RETURN p  
No changes, no records
```

- 这是正确的创建语句
```
MATCH (n) DETACH DELETE n
CREATE (s1:status {id:1}),(s2:status{id:2}),(s3:status{id:3}),(s4:status{id:4}),(s5:status{id:5})
CREATE (s1)-[:event{id:"a"}]->(s2)
CREATE (s2)-[:event{id:"a"}]->(s3)
CREATE (s3)-[:event{id:"a"}]->(s4)
CREATE (s4)-[:event{id:"a"}]->(s5)
CREATE (s5)-[:event{id:"a"}]->(s1)
CREATE (s1)-[:event{id:"b"}]->(s3)
CREATE (s3)-[:event{id:"b"}]->(s5)
CREATE (s5)-[:event{id:"b"}]->(s2)
CREATE (s2)-[:event{id:"b"}]->(s4)
CREATE (s4)-[:event{id:"b"}]->(s1)
```

```
MATCH p=shortestPath((:status{id:1})-[:event*1..5]->(:status{id:4})) RETURN p  
(:status {id: 1})-[:event {id: "a"}]->(:status {id: 2})-[:event {id: "b"}]->(:status {id: 4})
```

```
MATCH (:status{id:1})-[r:event]-{1,5}(:status{id:4}) RETURN r
[
  {
    identity: 6919790723059421554,
    start: 4470,
    end: 4466,
    type: "event",
    properties: {
      id: "a"
    },
    elementId: "5:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:6919790723059421554",
    startNodeElementId: "4:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:4470",
    endNodeElementId: "4:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:4466"
  },
  {
    identity: 1152931400211501429,
    start: 4469,
    end: 4470,
    type: "event",
    properties: {
      id: "a"
    },
    elementId: "5:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:1152931400211501429",
    startNodeElementId: "4:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:4469",
    endNodeElementId: "4:ef4e8d1d-e643-41d1-b24c-a7dcb84ad6b4:4470"
  }
]
```
- neo4j aura还不稳定，以前测试导入的文件还在影响最近的语句。生产环境肯定不能用。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.27.[FSM的嵌入式db实现]任务&body=日期: 20240527%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240527160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240527160000"></a>
## 16:00~16:59
FSM的嵌入式db实现

-  https://github.com/typicode/lowdb
-  https://www.npmjs.com/package/lowdb
-  https://juejin.cn/post/7104222761031041055
- D:\huangyg\git\js.sample\nosql\lowdb.js
- npm install lowdb
    - ESM(ESModule)
    - add "type":"module" into D:\huangyg\git\js.sample\nosql\package.json
    - D:\huangyg\git\js.sample\nosql\FSM.json
```
{
    "init": "s1",
    "current": "s1",
    "status": {"s1":1,"s2":2,"s3":3,"s4":4,"s5":5},
    "event": {"ea": "a","eb": "b"},
    "relation": [
        {"from":"s1","event":"ea","to":"s2"},
        {"from":"s2","event":"ea","to":"s3"},
        {"from":"s3","event":"ea","to":"s4"},
        {"from":"s4","event":"ea","to":"s5"},
        {"from":"s5","event":"ea","to":"s1"},
        {"from":"s1","event":"eb","to":"s3"},
        {"from":"s3","event":"eb","to":"s5"},
        {"from":"s5","event":"eb","to":"s2"},
        {"from":"s2","event":"eb","to":"s4"},
        {"from":"s4","event":"eb","to":"s1"}
        ]
}
```
- 执行结果：
```
D:\huangyg\git\js.sample\nosql>node lowdb
{
  init: 's1',
  current: 's1',
  status: { s1: 1, s2: 2, s3: 3, s4: 4, s5: 5 },
  event: { ea: 'a', eb: 'b' },
  relation: [
    { from: 's1', event: 'ea', to: 's2' },
    { from: 's2', event: 'ea', to: 's3' },
    { from: 's3', event: 'ea', to: 's4' },
    { from: 's4', event: 'ea', to: 's5' },
    { from: 's5', event: 'ea', to: 's1' },
    { from: 's1', event: 'eb', to: 's3' },
    { from: 's3', event: 'eb', to: 's5' },
    { from: 's5', event: 'eb', to: 's2' },
    { from: 's2', event: 'eb', to: 's4' },
    { from: 's4', event: 'eb', to: 's1' }
  ]
}
s2
s3
s4
s5
s1
s3
s5
s2
s4
s1
s3
```
- lawdb并没有方便的查询语句。
- https://lodash.com/  用lodash语法方便一些，但也没有SQL、GQL、sypher这些好用。

- https://github.com/jakesgordon/javascript-state-machine
- npm install --save-dev javascript-state-machine
- D:\huangyg\git\js.sample\nosql\FSM.js
- delete "type": "module", from  D:\huangyg\git\js.sample\nosql\package.json
- 执行结果满意：
```
D:\huangyg\git\js.sample\nosql>node FSM
state: s1
state: s2
state: s3
state: s4
state: s5
state: s1
state: s3
state: s5
state: s2
state: s4
```

- 再追加这几个范例：
    - '30': https://www.npmjs.com/package/jssm
    - '30': http://machina-js.org/
