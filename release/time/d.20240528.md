# 2024.05.28.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[新版个人模型的view](#20240528074500)  
- 09:30	[重新设计S2状态下的学门基本管理制度](#20240528093000)  
- 14:00	[https://github.com/levelgraph/levelgraph](#20240528140000)  
- 14:30	[https://www.npmjs.com/package/jssm](#20240528143000)  
- 16:00	[task之间结算体系设计。](#20240528160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 13977 | -702 | 2205 |
| PSMD | 7000 | 6241 | 759 | 405 |
| learn | 1000 | 987 | 13 | 660 |
| ego | 3000 | 4029 | -1029 | 570 |
| js | 1375 | 1050 | 325 | 360 |
| xuemen | 600 | 1196 | -596 | 180 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：了解jami api
  - learn的第1号事项：http://machina-js.org/
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - xuemen的第1号事项：域名和接口整理

- 60分钟时间片：
  - PSMD的第1号事项：新版共同体模型和物理学
  - js的第2号事项：学习 nodejs test框架
  - ego的第2号事项：在season metadata中实现浮动时间表，修改日计划功能。
  - xuemen的第3号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

- 90分钟时间片：
  - ego的第1号事项：新版个人模型的view
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.28.[新版个人模型的view]任务&body=日期: 20240528%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240528074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240528074500"></a>
## 7:45~8:44
新版个人模型的view

- 状态不宁，时间登记为零，todo项回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.28.[重新设计S2状态下的学门基本管理制度]任务&body=日期: 20240528%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240528093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240528093000"></a>
##  9:30~10:59
重新设计S2状态下的学门基本管理制度

- 状态不宁，时间登记为零，todo项回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.28.[https://github.com/levelgraph/levelgraph]任务&body=日期: 20240528%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240528140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240528140000"></a>
## 14:00~14:29
https://github.com/levelgraph/levelgraph

- npm install level
- npm install --save levelgraph
- D:\huangyg\git\js.sample\nosql\levelgraph.js
- 写成金字塔才通过，不是很方便，持久化还没考虑。以后再改：
```
D:\huangyg\git\js.sample\nosql>node levelgraph.js
s1 -[a]-> s2
s2 -[a]-> s3
s3 -[a]-> s4
s4 -[a]-> s5
s5 -[a]-> s1
s1 -[b]-> s3
s3 -[b]-> s5
s5 -[b]-> s2
s2 -[b]-> s4
s4 -[b]-> s1
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.28.[https://www.npmjs.com/package/jssm]任务&body=日期: 20240528%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240528143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240528143000"></a>
## 14:30~14:59
https://www.npmjs.com/package/jssm

- npm install jssm
- D:\huangyg\git\js.sample\nosql\jssm.js
- add "type":"module" into D:\huangyg\git\js.sample\nosql\package.json
- 非常直观、方便，执行结果：
```
D:\huangyg\git\js.sample\nosql>node jssm
s1
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
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.28.[task之间结算体系设计。]任务&body=日期: 20240528%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240528160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240528160000"></a>
## 16:00~16:59
task之间结算体系设计。

- 沿用旧的机制，由ego设定各资源池之间的交易比例；
- 通过自由交易产生比例；
- meta和vat可以自由使用其中entity的资源；
    - 按树形结构汇总，参考复式记账和科目的设置。
    - 按照行为偏差产生meta预算，按照meta结果招标vat的方案和预算。
- 按照外界entity的行为层级，通过protocol传递形成task层级，加上针对task的内部meta。
- 按照行为偏差和评估的价值，汇总计算产生各task的汇率。
- 纳入个人模型一并动笔。
