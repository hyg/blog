# 20240425

小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |  
| --- | --- | --- | --- |  
| 04:00~04:14 | 15 | 休整 |  |  
| 04:15~05:14 | 60 | 备餐、运动 |  |  
| 05:15~05:59 | 45 | 早餐 |  |  
| 06:00~06:44 | 45 | 会议、自习 |  |  
| 06:45~07:44 | 60 | 休整 |  |  
| 07:45~08:44 | 60 | 静默工作 | [设计新的season metadata。](#20240425074500) |  
| 08:45~09:29 | 45 | 休整 |  |  
| 09:30~10:59 | 90 | 静默工作 | [更新knowledge设计，env并入depend字段。](#20240425093000) |  
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |  
| 14:00~14:29 | 30 | 静默工作 | [基于配置文件（字符串）动态调用代码](#20240425140000) |  
| 14:30~14:59 | 30 | 静默工作 | [整理知识图谱的历史手稿](#20240425143000) |  
| 15:00~15:59 | 60 | 休整 |  |  
| 16:00~16:59 | 60 | 静默工作 | [knowledge新metadata的commit](#20240425160000) |  
| 17:00~18:59 | 120 | 晚餐 |  |  
| 19:00~19:59 | 60 | 讨论、整理提交 |  |  

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。


---
<a id="index"></a>
- 07:45	[设计新的season metadata。](#20240425074500)  
- 09:30	[更新knowledge设计，env并入depend字段。](#20240425093000)  
- 14:00	[基于配置文件（字符串）动态调用代码](#20240425140000)  
- 14:30	[整理知识图谱的历史手稿](#20240425143000)  
- 16:00	[knowledge新metadata的commit](#20240425160000)  

---


[top](#top) | [index](#index)
<a id="20240425074500"></a>
## 7:45~8:44
设计新的season metadata。


- \ego文件夹下新建data、src、view子文件夹。原server、client移动到src下。
- \ego\data\season下新建season metadata，命名规则：
  - yyyySn.yaml
    - yyyy: 年份
    - n: 季度
- task metadata迁移到\ego\data\task下
- 在task metadata中建立agreement、todo字段，删去log字段。

```
year: 2024
season: 1
beginmonth: 3
beginday: 1
nextbeginmoth: 7
nextbeginday: 1
timetype:
  - name: work
  - name: free
  - name: discuss
  - name: learn
  - name: prepare
  - name: sleep
  - name: food
  - name: check
dayplan:
dayplan:
  1:
    supply:
      90: 1
      60: 2
      30: 2
    time:
      - beginhour: 04
        beginminute: 0
        amount: 15
        type: free
        name: 休整
      - beginhour: 04
        beginminute: 15
        amount: 60
        type: prepare
        name: 备餐、运动
      - beginhour: 05
        beginminute: 15
        amount: 45
        type: food
        name: 早餐
      - beginhour: 06
        beginminute: 0
        amount: 45
        type: discuss
        name: 会议、自习
      - beginhour: 06
        beginminute: 45
        amount: 60
        type: free
        name: 休整
      - beginhour: 07
        beginminute: 45
        amount: 60
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/xtgD4F
      - beginhour: 08
        beginminute: 45
        amount: 45
        type: free
        name: 休整
      - beginhour: 09
        beginminute: 30
        amount: 90
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/j1SspP
      - beginhour: 11
        beginminute: 00
        amount: 180
        type: food
        name: 备餐、午餐午休
      - beginhour: 14
        beginminute: 0
        amount: 30
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/8t3vlk
      - beginhour: 14
        beginminute: 30
        amount: 30
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/5k9gJy
      - beginhour: 15
        beginminute: 0
        amount: 60
        type: free
        name: 休整
      - beginhour: 16
        beginminute: 0
        amount: 60
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/4QDThK
      - beginhour: 17
        beginminute: 00
        amount: 120
        type: food
        name: 晚餐
      - beginhour: 19
        beginminute: 00
        amount: 60
        type: check
        name: 讨论、整理提交
    readme: |
      模版一采用静默工作方式。  
      希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。
  2:
    supply:
      195: 1
      60: 1
      90: 1
    time:
      - beginhour: 04
        beginminute: 0
        amount: 15
        type: free
        name: 休整
      - beginhour: 04
        beginminute: 15
        amount: 60
        type: prepare
        name: 备餐、运动
      - beginhour: 05
        beginminute: 15
        amount: 45
        type: food
        name: 早餐
      - beginhour: 06
        beginminute: 0
        amount: 45
        type: discuss
        name: 会议、自习
      - beginhour: 06
        beginminute: 45
        amount: 60
        type: free
        name: 休整
      - beginhour: 07
        beginminute: 45
        amount: 195
        type: work
        name: 工作
        namelink: http://simp.ly/p/3GXNTh
      - beginhour: 11
        beginminute: 00
        amount: 180
        type: food
        name: 备餐、午餐午休
      - beginhour: 14
        beginminute: 0
        amount: 90
        type: work
        name: 工作
        namelink: http://simp.ly/p/lsBYG9
      - beginhour: 15
        beginminute: 30
        amount: 30
        type: free
        name: 休整
      - beginhour: 16
        beginminute: 0
        amount: 60
        type: work
        name: 工作
        namelink: http://simp.ly/p/MpcbHD
      - beginhour: 17
        beginminute: 00
        amount: 120
        type: food
        name: 晚餐
      - beginhour: 19
        beginminute: 00
        amount: 60
        type: check
        name: 讨论、整理提交
    readme: |
      工作的同时可以在线讨论。
time:
  supply:
    1: 30
    2: 15
    3: 2
    // dayplanid: amount
  alloc:
      PSMD:
        90: 1
        60: 3
        30: 2
      learn:
        90: 4
        60: 4
        30: 1 
      ego:
        90: 4
        60: 4
        30: 1 
      learn:
        30: 8
        60: 4
```


[top](#top) | [index](#index)
<a id="20240425093000"></a>
##  9:30~10:59
更新knowledge设计，env并入depend字段。

- 参考gantt图中任务之间的depeng：
	- 开始解决某error时必须同时开始解决本error、在解决完某error前必须先解决完本error：应该合并成termset一起设knowledge。
	- 因为knowledge反映termset生效的效果，可以视为解决问题结束。开始时间可以根据议事规则的召集、讨论、表决时间，加上起草动议时间、协商动员的时间，这些是部署者根据cod实际情况布置，不是模型和条款库可以提前排期的。
	- 这种情况”如果同时存在某error要同时解决（找别的termset），如果只是本error单独存在就用本knowledge解决。“，可以设一个多error效果的大termset，多个单独error效果的小termset，小termset里的depend里规定其它error不存在。然后由检索算法去适当提示。
	- 保险起见，增加一种类型：如果有就要同时解决。
	- 开始解决某error前必须先解决完本error：设在某error那边”必须先解决完某error再解决本error“。两边设不好同步。

- knowledge的需求来源：
	- menber error+COD -> COD error checklist -> motion
	- menber error+COM -> deploy -> COD
	- COD log -> menber error+COD error -> menber motion + COD motion
    - COD error -> menber error checklist -> menber motion
    
	- 委托者自助，浏览error view，想去解决 -> cod error checklist ->  自检 -> cod error diag metadata+view ->
deploy or 委托合同 metadata+view
	- 委托者自述 -> 受托者整理出cod error diag+checklist -> 自检 -> cod error diag metadata + view -> deploy or 委托合同
	- 委托者委托 -> 受托者调研 -> cod error checklist -> 受托者整理问卷 -> code error diag -> deploy or 新委托
	- 成员error在共同体层面表现为成员的行为偏差，使用同一种error metadata表达。由成员个人去完成：行为偏差->下意识行为 的分析。

- 细分需求
	- error -> error checklist
		- error to error  relation
			- depend
			- together
		- error metadata中添加字段，产生自检说明和承诺条款，生成核实
	- checklist -> diag(error list, maybe unknown status)
		- termset to error relation
		- term to error relation
	- diag(error list) -> checklist or deploy or contract
		- termset to error relation
		- term to error relation
		- error unknown status -> trustee contract

	- 综合考虑，在knowledge增加type字段：
		- termtoerror
		- errortoerror
		- termtoterm
		- termtotermset

更新\PSMD\data\readme.me
```
~~~
name:
id:
type:
objid:
depend:
  errorid:
    percent:
    text: | 
together:
  errorid:
    percent:
    text: |
effect:
  id:
    percent:
    text:
readme: |
~~~
- depeng: 部署本条款（解决本error）之前先解决该error
- together：部署本条款（解决本error）的同时开始解决该error
- 解决方案只含一条term或者termset。
- 根据type：objid to effect
```


[top](#top) | [index](#index)
<a id="20240425140000"></a>
## 14:00~14:29
基于配置文件（字符串）动态调用代码

### eval()
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval

- 出于安全性考虑，先在本地运行的代码中使用，网页暂时不用。

### function()
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function

- 首先var func=function（params...）;然后this["funcName"].call(params...)调用；

- setInterval 
- setTimeout


[top](#top) | [index](#index)
<a id="20240425143000"></a>
## 14:30~14:59
整理知识图谱的历史手稿

### RDF 资源、属性和属性值

- RDF 使用 Web 标识符来标识事物，并通过属性和属性值来描述资源。
- 对资源、属性和属性值的解释：
  - 资源是可拥有 URI 的任何事物，比如 "http://www.w3school.com.cn/rdf"
  - 属性是拥有名称的资源，比如 "author" 或 "homepage"
  - 属性值是某个属性的值，比如 "David" 或 "http://www.w3school.com.cn" （请注意一个属性值可以是另外一个资源）

下面的 RDF 文档可描述资源 "http://www.w3school.com.cn/rdf"：
```
<?xml version="1.0"?>
<RDF>
  <Description about="http://www.w3school.com.cn/RDF">
    <author>David</author>
    <homepage>http://www.w3school.com.cn</homepage>
  </Description>
</RDF>
```

- rdf是知识库的标记语言
- 另外有工具作为rdf知识库的读写查等操作，比自己写代码更统一。

下一步：  
- 先彻底打通业务流程，只发布view。然后把data、src部分升级到rdf，如果升级成功则作为范例。
  - https://www.npmjs.com/package/rdf#query-information-from-rdf-sources
- 再结合范例，重新思考知识图谱的缺陷和补救方式。
- 考虑把data、src部分发布出去。

历史手稿：
```

--- 

知识图谱的缺陷

表达权利分配规则的需求
知识图谱的表达方式
缺陷和改进


---

知识图谱

### SparQL

https://www.w3.org/TR/rdf-sparql-protocol/
https://jena.apache.org/tutorials/sparql.html

### rdf

www.w3.org/RDF/
https://www.w3school.com.cn/rdf/rdf_intro.asp

### RDF-star and SPARQL-star

https://www.w3.org/2021/12/rdf-star.html
https://w3c.github.io/rdf-star/
https://www.ontotext.com/knowledgehub/fundamentals/what-is-rdf-star/

### OWL
 
 https://www.w3.org/2001/sw/wiki/OWL

### Gremlin 

https://tinkerpop.apache.org/gremlin.html

### neo4j

https://neo4j.com/
查询语言是 Cypher  https://neo4j.com/developer/cypher/


### 华为KG API

https://support.huaweicloud.com/api-kg/kg_03_0007.html


### 北大gStore

http://www.gstore.cn/pcsite/index.html#/

### HugeGraph

https://hugegraph.apache.org/


### 图形化

https://www.ldf.fi/service/rdf-grapher
https://issemantic.net/rdf-visualizer

```

```
### 世界观（缸中之脑）和推理
知识图谱和推理机制，在缸中之脑模型中会发生什么。

- 缺陷和具体范例
	- 缸中之脑和双缝都要讨论到。
- 改进
	- 在缸外增加推理设备，发掘更原始的规律。
	- 假设：符号、文字可以穿透缸，与其它缸中之脑交换信息。
	- 假设：在微观层面设置装置，可以与其它缸中之脑交换信息。
```

```
知识图谱的缺陷

表达权利分配规则的需求
知识图谱的表达方式
缺陷和改进
```

[top](#top) | [index](#index)
<a id="20240425160000"></a>
## 16:00~16:59
knowledge新metadata的commit

- 先把/ego/src/path.js谢了。

### commit板块
- node term commit:   temp metadata → formal metadata
- node term commit filename: temp metadata → formal metadata

knowledge.1.yaml
```
name: 1406解决割据问题
id: 1
type: termsettoerror
objid: 056e71fb
depend:
  2:
    percent: 50
    text: |
      抵押权力解决资源问题不再新增，再开始解决本问题。
effect:
  1: 
    percent: 50
    text: |
      - 1406动议可以消除已出现的割据问题。
      - 如果是因为资源问题未解决，欠付报酬而以一定范围割据作为抵押物，今后还会出现新的割据问题。这种情况需要同时处理历史欠账，并且根除资源问题。
readme: ''
```
commit结果
```
name: 1406解决割据问题
id: 3b7582cd
type: termsettoerror
objid: 056e71fb
depend:
  48291d8c:
    percent: 50
    text: |
      抵押权力解决资源问题不再新增，再开始解决本问题。
effect:
  0ccddb29: 
    percent: 50
    text: |
      - 1406动议可以消除已出现的割据问题。
      - 如果是因为资源问题未解决，欠付报酬而以一定范围割据作为抵押物，今后还会出现新的割据问题。这种情况需要同时处理历史欠账，并且根除资源问题。
readme: ''
```

knowledge.2.yaml
```
name: 1609解决资源问题
id: 2
type: termtoerror
objid: 5b4e0597
depend:
  cde3c3e2:
    percent: 100
    text: |
      必须在规则有效的环境下进行。
effect:
  2:
    percent: 60
    text: |
      - 1609模型可用于把薪酬、投资合二为一，极大提高调动未来收入的能力，缓解资源问题。
      - 如果规则无效问题未能解决，则1609模型无效。
readme: ''
```
commit结果
```
name: 1609解决资源问题
id: d8a0602f
type: termtoerror
objid: 5b4e0597
depend:
  cde3c3e2:
    percent: 100
    text: |
      必须在规则有效的环境下进行。
effect:
  48291d8c:
    percent: 60
    text: |
      - 1609模型可用于把薪酬、投资合二为一，极大提高调动未来收入的能力，缓解资源问题。
      - 如果规则无效问题未能解决，则1609模型无效。
readme: ''
```
执行过程：
```
D:\huangyg\git\PSMD\src>node term commit
commit error.1.yaml
执行部门陷入割据 0ccddb29
commit error.2.yaml
无法有效分配未来收入 48291d8c
commit knowledge.1.yaml
1406解决割据问题 3b7582cd
commit knowledge.2.yaml
1609解决资源问题 d8a0602f
commit term.1.yaml
执行部门陷入割据 0ccddb29
commit term.2.yaml
如果割据就启用1406 583d6243
commit termset.1.yaml
预设1406动议 b3124d50
../data/term.0ccddb29.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.583d6243.yaml文件已更新。../data/term.2.yaml可以删除。
../data/error.0ccddb29.yaml文件已更新。../data/error.1.yaml可以删除。
../data/error.48291d8c.yaml文件已更新。../data/error.2.yaml可以删除。
path replace:term.2.yaml term.583d6243.yaml
旧文件:../data/termset.1.yaml中item:1的id:cb4ab0e9未能替换，请人工检查。
path replace:term.1.yaml term.0ccddb29.yaml
旧文件:../data/termset.1.yaml中itemset:3的id:056e71fb未能替换，请人工检查。
../data/termset.b3124d50.yaml文件已更新。../data/termset.1.yaml可以删除。
knowledge depend replace. error:2 -> 48291d8c
旧文件:../data/knowledge.1.yaml中objid: 056e71fb 未能替换，请人工检查。
knowledge effect replace. id:1 -> 0ccddb29
../data/knowledge.3b7582cd.yaml文件已更新。../data/knowledge.1.yaml可以删除。
旧文件:../data/knowledge.2.yaml中depend字段的id: cde3c3e2 未能替换，请人工检查。
旧文件:../data/knowledge.2.yaml中objid: 5b4e0597 未能替换，请人工检查。
knowledge effect replace. id:2 -> 48291d8c
../data/knowledge.d8a0602f.yaml文件已更新。../data/knowledge.2.yaml可以删除。
```

下一步：

- 生成内容板块
    - node term knowledge    ： knowledge metadata → allknowledge metadata
    - node term knowledge id    ： knowledge metadata → knowledge markdown + html