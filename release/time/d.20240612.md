# 2024.06.12.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45	[格里申法案](#20240612074500)  
- 09:30	[ego draft, metadata](#20240612093000)  
- 14:00	[学习AMD规范，如果适用就开发范例](#20240612140000)  
- 14:30	[用commander的.command()或.addCommand()改写入口](#20240612143000)  
- 16:00	[linkml, yaml-ld](#20240612160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 16518 | -43 | 2745 |
| PSMD | 7250 | 7296 | -46 | 600 |
| learn | 1250 | 1422 | -172 | 1110 |
| ego | 4700 | 4669 | 31 | 420 |
| js | 1375 | 1278 | 97 | 330 |
| xuemen | 1300 | 1253 | 47 | 285 |
| raw | 600 | 570 | 30 | 0 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - learn的第2号事项：JSON Schema
  - js的第4号事项：日期格式化
  - PSMD的第5号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。

- 60分钟时间片：
  - js的第1号事项：用js代码完成git操作。
  - learn的第1号事项：linkml, yaml-ld
  - js的第2号事项：学习 nodejs test框架
  - js的第3号事项：向外提供js文件的范例，为代码层级互通做准备

- 90分钟时间片：
  - ego的第1号事项：ego draft
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - ego的第3号事项：finish.devmaketomorowinfo(tomorrow);
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：entify,ego draft, metadata
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第15号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[格里申法案]任务&body=日期: 20240612%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240612074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612074500"></a>
## 07:45~8:44
PSMD  [格里申法案]

- https://www.secrss.com/articles/11191
    - 欧洲议会2017年2月16日《机器人民法规范》
    - https://m.thepaper.cn/baijiahao_16218093
- https://weibo.com/1494926084/OiC2j59lL
```
俄罗斯格里申法案，
确实定义了机器人在特定条件下的民事权利。
但这些条件针对机器人进入原有法律体系，
而不是人类进入机器人开辟的新法律领域。

如果机器人不按照格里申法案条款登记，
机器人之间，机器人与自然人、法人之间的交易就没有定义。
以后支撑这些交易的记账、仲裁，
也就不在俄罗斯法律的规划范围以内。

也就是说，
这是一部防守、退缩的法案。
等于承认人类在创造力和思维能力上，落后于机器人。

而有进取心、相信人类创造力的立法者，
应该向前进入新领域，
去定义机器人之间的交易和规则，
任由机器人遵守、弃用，最终依赖并且不断申请人类修订升级。

但这样的立法者还没有亮相，
都是直接宣布机器人离不开人类，调门很高。
做事时就默认人类制定的法律满足不了机器人的需求。
```
- 机器人-代理人这个定义，实际效果是自然人、法人作为机器人在旧法律领域的代理，而不是反过来。因为真正有价值的活动超出旧法律领域，而立法者没有意愿向前去定义、支撑这些活动。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[ego draft, metadata]任务&body=日期: 20240612%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240612093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612093000"></a>
##  09:30~10:59
ego  [ego draft, metadata]

- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[学习AMD规范，如果适用就开发范例]任务&body=日期: 20240612%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240612140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612140000"></a>
## 14:00~14:29
js  [学习AMD规范，如果适用就开发范例]

- http://www.ruanyifeng.com/blog/2012/10/javascript_module.html
- 大概了解，应该用不着。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[用commander的.command()或.addCommand()改写入口]任务&body=日期: 20240612%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240612143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612143000"></a>
## 14:30~14:59
ego  [用commander的.command()或.addCommand()改写入口]

- 已完成，ego1.js 可以替换ego.js。
- 登记15分钟。
```
D:\huangyg\git\ego\src>node ego1 help day
Usage: ego day [options]

以天为单位的自我管理功能

Options:
  -i, --init <int>  初始化：绑定时间模版，创建日计划、次日规划、手稿及元数据文件。
  -o, --over        工作结束，生成日小结、更新次日规划。
  -p, --plan        显示次日规划，不更新任何文件。
  -h, --help        display help for command

D:\huangyg\git\ego\src>node ego1 day -p
{ plan: true }
../data/season/2024S2.yaml文件中的time.sold字段已更新:
ego: 4684
PSMD: 7296
infra: 30
js: 1278
learn: 1422
xuemen: 1253
raw: 570

1 draftmetadata:
date: 20240612
plan: 1
time:
  - begin: '20240612074500'
    amount: 60
    type: work
    subject: js
    name: 学习 nodejs test框架
    readme: |
      - https://github.com/Vanessa219/vditor
          - https://nodejs.cn/api/test.html
      - https://github.com/markedjs/marked
      - https://bun.sh/
      bind:
        - '90': 实际编写自己的测试范例
    output: draft/2024/06/20240612074500.md
  - begin: '20240612093000'
    amount: 90
    type: work
    subject: ego
    name: 根据ego对外信息接口编写页面代码
    readme: |
      D:\huangyg\git\blog\release\time\d.20240604.md
    output: draft/2024/06/20240612093000.md
  - begin: '20240612140000'
    amount: 30
    type: work
    subject: js
    name: 日期格式化
    readme: |
      http://momentjs.cn/
      https://www.cnblogs.com/biehongli/p/9327604.html
      https://juejin.cn/post/7199191689150644279
      https://blog.csdn.net/lwf3115841/article/details/129105206
    output: draft/2024/06/20240612140000.md
  - begin: '20240612143000'
    amount: 30
    type: work
    subject: learn
    name: 寻找可编程的,去中心化的信息发布方式
    readme: |
      - https://diaspora.github.io/api-documentation/
      - https://github.com/diaspora/api-documentation
    output: draft/2024/06/20240612143000.md
  - begin: '20240612160000'
    amount: 60
    type: work
    subject: js
    name: 向外提供js文件的范例，为代码层级互通做准备
    output: draft/2024/06/20240612160000.md

2 draftmetadata:
date: 20240612
plan: 2
time:
  - begin: '20240612074500'
    amount: 195
    type: work
    subject: xuemen
    name: 重新设计S2状态下的学门基本管理制度
    output: draft/2024/06/20240612074500.md
  - begin: '20240612140000'
    amount: 90
    type: work
    subject: ego
    name: 根据ego对外信息接口编写页面代码
    readme: |
      D:\huangyg\git\blog\release\time\d.20240604.md
    output: draft/2024/06/20240612140000.md
  - begin: '20240612160000'
    amount: 60
    type: work
    subject: js
    name: 学习 nodejs test框架
    readme: |
      - https://github.com/Vanessa219/vditor
          - https://nodejs.cn/api/test.html
      - https://github.com/markedjs/marked
      - https://bun.sh/
      bind:
        - '90': 实际编写自己的测试范例
    output: draft/2024/06/20240612160000.md


D:\huangyg\git\ego\src>node ego1 day -o
{ over: true }
../data/season/2024S2.yaml文件中的time.sold字段已更新:
ego: 4684
PSMD: 7296
infra: 30
js: 1278
learn: 1422
xuemen: 1253
raw: 570

daylog file name:
../../blog/release/time/d.20240612.md
content:
# 2024.06.12.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45 [格里申法案](#20240612074500)
- 09:30 [ego draft, metadata](#20240612093000)
- 14:00 [学习AMD规范，如果适用就开发范例](#20240612140000)
- 14:30 [用commander的.command()或.addCommand()改写入口](#20240612143000)
- 16:00 [linkml, yaml-ld](#20240612160000)

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 16353 | 122 | 2475 |
| PSMD | 7250 | 7236 | 14 | 600 |
| learn | 1250 | 1362 | -112 | 1020 |
| ego | 4700 | 4654 | 46 | 330 |
| js | 1375 | 1248 | 127 | 270 |
| xuemen | 1300 | 1253 | 47 | 255 |
| raw | 600 | 570 | 30 | 0 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第3号事项：日期格式化
  - learn的第3号事项：寻找可编程的,去中心化的信息发布方式
  - learn的第4号事项：了解免安装web im的机制
  - js的第5号事项：mermaid

- 60分钟时间片：
  - js的第1号事项：学习 nodejs test框架
  - js的第2号事项：向外提供js文件的范例，为代码层级互通做准备
  - xuemen的第2号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - learn的第2号事项：Decentralized Identifiers

- 90分钟时间片：
  - ego的第1号事项：根据ego对外信息接口编写页面代码
  - learn的第1号事项：拟制说、目的财产说、实在说
  - ego的第2号事项：finish.devmaketomorowinfo(tomorrow);
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第1号事项：entify,ego draft, metadata
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第13号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[格里申法案]任务&body=日期: 20240612%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240612074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612074500"></a>
## 07:45 ~ 08:45
格里申法案


---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[ego draft, metadata]任务&body=日期: 20240612%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240612093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612093000"></a>
## 09:30 ~ 11:00
ego draft, metadata


---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[学习AMD规范，如果适用就开发范例]任务&body=日期: 20240612%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240612140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612140000"></a>
## 14:00 ~ 14:30
学习AMD规范，如果适用就开发范例


---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[用commander的.command()或.addCommand()改写入口]任务&body=日期: 20240612%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240612143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612143000"></a>
## 14:30 ~ 15:00
用commander的.command()或.addCommand()改写入口


---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[linkml, yaml-ld]任务&body=日期: 20240612%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240612160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612160000"></a>
## 16:00 ~ 17:00
linkml, yaml-ld


dayinfo file name:
../../blog/release/time/d.20240613.md
content:
# 2024.06.13.

根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。每天早起根据身心状况绑定模版。

---
如果绑定模版1可能安排以下任务：

- 07:45 学习 nodejs test框架 -js[0]
- 09:30 根据ego对外信息接口编写页面代码 -ego[0]
- 14:00 日期格式化 -js[2]
- 14:30 寻找可编程的,去中心化的信息发布方式 -learn[2]
- 16:00 向外提供js文件的范例，为代码层级互通做准备 -js[1]

---
如果绑定模版2可能安排以下任务：

- 07:45 重新设计S2状态下的学门基本管理制度 -xuemen[0]
- 14:00 根据ego对外信息接口编写页面代码 -ego[0]
- 16:00 学习 nodejs test框架 -js[0]

---
对任务排序的建议请点击这个链接<a href="mailto:huangyg@mars22.com?subject=关于2024.06.13.任务排序的建议&body=date: 20240613%0D%0Afile: ../../blog/release/time/d.20240613.md%0D%0A---请勿修改邮件主题及以上内容---%0D%0A">发送电子邮件</a>，日计划确定后会在本页面发布。

D:\huangyg\git\ego\src>node ego1 day -i
error: option '-i, --init <int>' argument missing

D:\huangyg\git\ego\src>node ego1 day -i 1
{ init: '1' }
delete the job from js:
学习 nodejs test框架
makedaydraft()> before delete todo item, waitinglist: 5 0
task: js
name: 学习 nodejs test框架
id: 0
readme: |
  - https://github.com/Vanessa219/vditor
      - https://nodejs.cn/api/test.html
  - https://github.com/markedjs/marked
  - https://bun.sh/
  bind:
    - '90': 实际编写自己的测试范例

makedaydraft()> before delete todo item:
- '60': 学习 nodejs test框架
  readme: |
    - https://github.com/Vanessa219/vditor
        - https://nodejs.cn/api/test.html
    - https://github.com/markedjs/marked
    - https://bun.sh/
    bind:
      - '90': 实际编写自己的测试范例
- '60': 向外提供js文件的范例，为代码层级互通做准备
- '30': 日期格式化
  readme: |
    http://momentjs.cn/
    https://www.cnblogs.com/biehongli/p/9327604.html
    https://juejin.cn/post/7199191689150644279
    https://blog.csdn.net/lwf3115841/article/details/129105206
- '60': 学习'Electron'，创作一个范例。
- '30': mermaid
  readme: |
    https://mermaid.nodejs.cn/
    https://mermaid.js.org/
- '30': text->id,protobuf-javascript
  readme: |
    https://github.com/protocolbuffers/protobuf-javascript

makedaydraft()> after delete todo item:
- '60': 向外提供js文件的范例，为代码层级互通做准备
- '30': 日期格式化
  readme: |
    http://momentjs.cn/
    https://www.cnblogs.com/biehongli/p/9327604.html
    https://juejin.cn/post/7199191689150644279
    https://blog.csdn.net/lwf3115841/article/details/129105206
- '60': 学习'Electron'，创作一个范例。
- '30': mermaid
  readme: |
    https://mermaid.nodejs.cn/
    https://mermaid.js.org/
- '30': text->id,protobuf-javascript
  readme: |
    https://github.com/protocolbuffers/protobuf-javascript

delete the job from ego:
根据ego对外信息接口编写页面代码
makedaydraft()> before delete todo item, waitinglist: 7 0
task: ego
name: 根据ego对外信息接口编写页面代码
id: 0
readme: |
  D:\huangyg\git\blog\release\time\d.20240604.md

makedaydraft()> before delete todo item:
- '90': 根据ego对外信息接口编写页面代码
  readme: |
    D:\huangyg\git\blog\release\time\d.20240604.md
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '30': 生成waitinglist时，考虑多层todo。

makedaydraft()> after delete todo item:
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '30': 生成waitinglist时，考虑多层todo。

delete the job from js:
日期格式化
makedaydraft()> before delete todo item, waitinglist: 9 1
task: js
name: 日期格式化
id: 2
readme: |
  http://momentjs.cn/
  https://www.cnblogs.com/biehongli/p/9327604.html
  https://juejin.cn/post/7199191689150644279
  https://blog.csdn.net/lwf3115841/article/details/129105206

makedaydraft()> before delete todo item:
- '60': 向外提供js文件的范例，为代码层级互通做准备
- '30': 日期格式化
  readme: |
    http://momentjs.cn/
    https://www.cnblogs.com/biehongli/p/9327604.html
    https://juejin.cn/post/7199191689150644279
    https://blog.csdn.net/lwf3115841/article/details/129105206
- '60': 学习'Electron'，创作一个范例。
- '30': mermaid
  readme: |
    https://mermaid.nodejs.cn/
    https://mermaid.js.org/
- '30': text->id,protobuf-javascript
  readme: |
    https://github.com/protocolbuffers/protobuf-javascript

makedaydraft()> after delete todo item:
- '60': 向外提供js文件的范例，为代码层级互通做准备
- '60': 学习'Electron'，创作一个范例。
- '30': mermaid
  readme: |
    https://mermaid.nodejs.cn/
    https://mermaid.js.org/
- '30': text->id,protobuf-javascript
  readme: |
    https://github.com/protocolbuffers/protobuf-javascript

delete the job from learn:
寻找可编程的,去中心化的信息发布方式
makedaydraft()> before delete todo item, waitinglist: 10 2
task: learn
name: 寻找可编程的,去中心化的信息发布方式
id: 2
readme: |
  - https://diaspora.github.io/api-documentation/
  - https://github.com/diaspora/api-documentation

makedaydraft()> before delete todo item:
- '90': 拟制说、目的财产说、实在说
- '60': Decentralized Identifiers
  readme: |
    https://did.js.org/
    https://www.w3.org/TR/did-use-cases/
    https://www.w3.org/TR/did-core/
- '30': 寻找可编程的,去中心化的信息发布方式
  readme: |
    - https://diaspora.github.io/api-documentation/
    - https://github.com/diaspora/api-documentation
- '30': 了解免安装web im的机制
  readme: |
    gitter.im
    https://libera.chat/
    https://web.libera.chat/gamja/
- '30': github project
  readme: >
    https://docs.github.com/zh/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects
- '30': trello api
  readme: |
    https://developer.atlassian.com/cloud/trello/rest/
    https://www.npmjs.com/package/trello
- '30': Document-Oriented数据库
  readme: |
    -MongoDB、CouchDB、RavenDB
- '30': 列存储（Wide Column Store/Column-Family）数据库
  readme: |
    -Cassandra、HBase
- '30': Query fundamentals https://console.neo4j.io
- '60': 开发YARRRML范例
- '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
- '60': Windows PowerShell
- '195': rust入门
  bind:
    - '195': 开发reenet Contracts sample
      readme: |
        - https://docs.freenet.org/components/contracts.html
        - https://docs.freenet.org/introduction.html
        - https://docs.freenet.org/tutorial.html
- '60': 继续学习promise api
  readme: |
    - https://zh.javascript.info/promise-api

makedaydraft()> after delete todo item:
- '90': 拟制说、目的财产说、实在说
- '60': Decentralized Identifiers
  readme: |
    https://did.js.org/
    https://www.w3.org/TR/did-use-cases/
    https://www.w3.org/TR/did-core/
- '30': 了解免安装web im的机制
  readme: |
    gitter.im
    https://libera.chat/
    https://web.libera.chat/gamja/
- '30': github project
  readme: >
    https://docs.github.com/zh/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects
- '30': trello api
  readme: |
    https://developer.atlassian.com/cloud/trello/rest/
    https://www.npmjs.com/package/trello
- '30': Document-Oriented数据库
  readme: |
    -MongoDB、CouchDB、RavenDB
- '30': 列存储（Wide Column Store/Column-Family）数据库
  readme: |
    -Cassandra、HBase
- '30': Query fundamentals https://console.neo4j.io
- '60': 开发YARRRML范例
- '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
- '60': Windows PowerShell
- '195': rust入门
  bind:
    - '195': 开发reenet Contracts sample
      readme: |
        - https://docs.freenet.org/components/contracts.html
        - https://docs.freenet.org/introduction.html
        - https://docs.freenet.org/tutorial.html
- '60': 继续学习promise api
  readme: |
    - https://zh.javascript.info/promise-api

delete the job from js:
向外提供js文件的范例，为代码层级互通做准备
makedaydraft()> before delete todo item, waitinglist: 12 0
task: js
name: 向外提供js文件的范例，为代码层级互通做准备
id: 1

makedaydraft()> before delete todo item:
- '60': 向外提供js文件的范例，为代码层级互通做准备
- '60': 学习'Electron'，创作一个范例。
- '30': mermaid
  readme: |
    https://mermaid.nodejs.cn/
    https://mermaid.js.org/
- '30': text->id,protobuf-javascript
  readme: |
    https://github.com/protocolbuffers/protobuf-javascript

makedaydraft()> after delete todo item:
- '60': 学习'Electron'，创作一个范例。
- '30': mermaid
  readme: |
    https://mermaid.nodejs.cn/
    https://mermaid.js.org/
- '30': text->id,protobuf-javascript
  readme: |
    https://github.com/protocolbuffers/protobuf-javascript

../data/draft/2024/d.20240612.yaml
date: 20240612
plan: 1
time:
  - begin: '20240612074500'
    amount: 60
    type: work
    subject: js
    name: 学习 nodejs test框架
    readme: |
      - https://github.com/Vanessa219/vditor
          - https://nodejs.cn/api/test.html
      - https://github.com/markedjs/marked
      - https://bun.sh/
      bind:
        - '90': 实际编写自己的测试范例
    output: draft/2024/06/20240612074500.md
  - begin: '20240612093000'
    amount: 90
    type: work
    subject: ego
    name: 根据ego对外信息接口编写页面代码
    readme: |
      D:\huangyg\git\blog\release\time\d.20240604.md
    output: draft/2024/06/20240612093000.md
  - begin: '20240612140000'
    amount: 30
    type: work
    subject: js
    name: 日期格式化
    readme: |
      http://momentjs.cn/
      https://www.cnblogs.com/biehongli/p/9327604.html
      https://juejin.cn/post/7199191689150644279
      https://blog.csdn.net/lwf3115841/article/details/129105206
    output: draft/2024/06/20240612140000.md
  - begin: '20240612143000'
    amount: 30
    type: work
    subject: learn
    name: 寻找可编程的,去中心化的信息发布方式
    readme: |
      - https://diaspora.github.io/api-documentation/
      - https://github.com/diaspora/api-documentation
    output: draft/2024/06/20240612143000.md
  - begin: '20240612160000'
    amount: 60
    type: work
    subject: js
    name: 向外提供js文件的范例，为代码层级互通做准备
    output: draft/2024/06/20240612160000.md

seasonobj.todo:
PSMD:
  - '195': entify,ego draft, metadata
  - '195': term + COM matedata -> deploy metadata -> deploy view
  - '90': 以1406为例检查知识图谱和blawx的语法
  - '60': 设计条款的可执行机制
  - '30': debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
    readme: |
      term.25c83dac.yaml的depend.text 包含 <term.2e4f11cb.term.1>
      执行node term term 2e4f11cb
      term.25c83dac.yaml的interface:
        <term.50430bca.632214.c83dac.entity.1>: 董事会
        <term.50430bca.632214.c83dac.term.1>: 章程第八条（十）
        <term.50430bca.632214.c83dac.term.2>: 中华人民共和国公司法
  - '30': 重新思考term metadata种的upgradeby，是否需要显示内容和id两种。
ego:
  - '90': finish.devmaketomorowinfo(tomorrow);
  - '60': 用js代码完成日小结后的git操作。
    readme: |
      - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
      - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
  - '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
  - '30': 生成waitinglist时，考虑多层todo。
learn:
  - '90': 拟制说、目的财产说、实在说
  - '60': Decentralized Identifiers
    readme: |
      https://did.js.org/
      https://www.w3.org/TR/did-use-cases/
      https://www.w3.org/TR/did-core/
  - '30': 了解免安装web im的机制
    readme: |
      gitter.im
      https://libera.chat/
      https://web.libera.chat/gamja/
  - '30': github project
    readme: |
      https://docs.github.com/zh/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects
  - '30': trello api
    readme: |
      https://developer.atlassian.com/cloud/trello/rest/
      https://www.npmjs.com/package/trello
  - '30': Document-Oriented数据库
    readme: |
      -MongoDB、CouchDB、RavenDB
  - '30': 列存储（Wide Column Store/Column-Family）数据库
    readme: |
      -Cassandra、HBase
  - '30': Query fundamentals https://console.neo4j.io
  - '60': 开发YARRRML范例
  - '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - '60': Windows PowerShell
  - '195': rust入门
    bind:
      - '195': 开发reenet Contracts sample
        readme: |
          - https://docs.freenet.org/components/contracts.html
          - https://docs.freenet.org/introduction.html
          - https://docs.freenet.org/tutorial.html
  - '60': 继续学习promise api
    readme: |
      - https://zh.javascript.info/promise-api
js:
  - '60': 学习'Electron'，创作一个范例。
  - '30': mermaid
    readme: |
      https://mermaid.nodejs.cn/
      https://mermaid.js.org/
  - '30': text->id,protobuf-javascript
    readme: |
      https://github.com/protocolbuffers/protobuf-javascript
raw: []
xuemen:
  - '195': 重新设计S2状态下的学门基本管理制度
  - '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

time slice draft file name:../../draft/2024/06/20240612074500.md
## 07:45 ~ 08:45
格里申法案


time slice draft file name:../../draft/2024/06/20240612093000.md
## 09:30 ~ 09:30
ego draft, metadata


time slice draft file name:../../draft/2024/06/20240612140000.md
## 14:00 ~ 14:30
学习AMD规范，如果适用就开发范例


time slice draft file name:../../draft/2024/06/20240612143000.md
## 14:30 ~ 15:00
用commander的.command()或.addCommand()改写入口


time slice draft file name:../../draft/2024/06/20240612160000.md
## 16:00 ~ 17:00
linkml, yaml-ld


dayplan file name:
../../blog/release/time/d.20240612.md
content:
# 2024.06.12.
计划

根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | --- | --- |
| 04:00~04:14 | 15 | 休整 |  |
| 04:15~05:14 | 60 | 备餐、运动 |  |
| 05:15~05:59 | 45 | 早餐 |  |
| 06:00~06:44 | 45 | 会议、自习 |  |
| 06:45~07:44 | 60 | 休整 |  |
| 07:45~08:44 | 60 | 静默工作 | 格里申法案  [在线](http://simp.ly/p/xtgD4F) [离线](../../draft/2024/06/20240612074500.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[格里申法案]任务&body=日期: 20240612%0D%0A序号: 5%0D%0A手稿:../../draft/2024/06/20240612074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 08:45~09:29 | 45 | 休整 |  |
| 09:30~10:59 | 90 | 静默工作 | ego draft, metadata  [在线](http://simp.ly/p/j1SspP) [离线](../../draft/2024/06/20240612093000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[ego draft, metadata]任务&body=日期: 20240612%0D%0A序号: 7%0D%0A手稿:../../draft/2024/06/20240612093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | 学习AMD规范，如果适用就开发范例  [在线](http://simp.ly/p/8t3vlk) [离线](../../draft/2024/06/20240612140000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[学习AMD规范，如果适用就开发范例]任务&body=日期: 20240612%0D%0A序号: 9%0D%0A手稿:../../draft/2024/06/20240612140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 14:30~14:59 | 30 | 静默工作 | 用commander的.command()或.addCommand()改写入口  [在线](http://simp.ly/p/5k9gJy) [离线](../../draft/2024/06/20240612143000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[用commander的.command()或.addCommand()改写入口]任务&body=日期: 20240612%0D%0A序号: 10%0D%0A手稿:../../draft/2024/06/20240612143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 15:00~15:59 | 60 | 休整 |  |
| 16:00~16:59 | 60 | 静默工作 | linkml, yaml-ld  [在线](http://simp.ly/p/4QDThK) [离线](../../draft/2024/06/20240612160000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[linkml, yaml-ld]任务&body=日期: 20240612%0D%0A序号: 12%0D%0A手稿:../../draft/2024/06/20240612160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

模版一采用静默工作方式。
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。

---

- 07:45 PSMD  [格里申法案](../../../draft/2024/06/20240612074500.md)
- 09:30 ego  [ego draft, metadata](../../../draft/2024/06/20240612093000.md)
- 14:00 js  [学习AMD规范，如果适用就开发范例](../../../draft/2024/06/20240612140000.md)
- 14:30 ego  [用commander的.command()或.addCommand()改写入口](../../../draft/2024/06/20240612143000.md)
- 16:00 learn  [linkml, yaml-ld](../../../draft/2024/06/20240612160000.md)

dayinfo file name:
../../blog/release/time/d.20240613.md
content:
# 2024.06.13.

根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。每天早起根据身心状况绑定模版。

---
如果绑定模版1可能安排以下任务：

- 07:45 学习 nodejs test框架 -js[0]
- 09:30 根据ego对外信息接口编写页面代码 -ego[0]
- 14:00 日期格式化 -js[2]
- 14:30 寻找可编程的,去中心化的信息发布方式 -learn[2]
- 16:00 向外提供js文件的范例，为代码层级互通做准备 -js[1]

---
如果绑定模版2可能安排以下任务：

- 07:45 重新设计S2状态下的学门基本管理制度 -xuemen[0]
- 14:00 根据ego对外信息接口编写页面代码 -ego[0]
- 16:00 学习 nodejs test框架 -js[0]

---
对任务排序的建议请点击这个链接<a href="mailto:huangyg@mars22.com?subject=关于2024.06.13.任务排序的建议&body=date: 20240613%0D%0Afile: ../../blog/release/time/d.20240613.md%0D%0A---请勿修改邮件主题及以上内容---%0D%0A">发送电子邮件</a>，日计划确定后会在本页面发布。
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.12.[linkml, yaml-ld]任务&body=日期: 20240612%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240612160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240612160000"></a>
## 16:00~16:59
learn  [linkml, yaml-ld]

- https://linkml.io/linkml/intro/tutorial03.html
- 处理代码作为字段
- 批准生效作为event
- 转换rdf失败
```
D:\huangyg\git\ego\data>linkml-convert -s entity.yaml -t rdf huangyg.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Scripts\linkml-convert.exe\__main__.py", line 7, in <module>
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 1157, in __call__
    return self.main(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 1078, in main
    rv = self.invoke(ctx)
         ^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 1434, in invoke
    return ctx.invoke(self.callback, **ctx.params)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 783, in invoke
    return __callback(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml\utils\converter.py", line 178, in cli
    print(dumper.dumps(obj, **outargs))
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\dumpers\rdflib_dumper.py", line 186, in dumps
    return self.as_rdf_graph(element, schemaview, prefix_map=prefix_map).\
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\dumpers\rdflib_dumper.py", line 68, in as_rdf_graph
    self.inject_triples(element, schemaview, g)
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\dumpers\rdflib_dumper.py", line 141, in inject_triples
    v_node = self.inject_triples(v, schemaview, graph, slot.range)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\dumpers\rdflib_dumper.py", line 141, in inject_triples
    v_node = self.inject_triples(v, schemaview, graph, slot.range)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\dumpers\rdflib_dumper.py", line 120, in inject_triples
    element_uri = self._as_uri(element_id, id_slot, schemaview)
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\dumpers\rdflib_dumper.py", line 193, in _as_uri
    return schemaview.namespaces().uri_for(element_id)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\utils\namespaces.py", line 228, in uri_for
    raise ValueError(f"{TypedNode.yaml_loc(uri_or_curie)}Unknown CURIE prefix: {prefix}")
ValueError: File "huangyg.yaml", line 11, col 11: Unknown CURIE prefix: @base
```
- 去掉todo的identifier: true:
```
D:\huangyg\git\ego\data>linkml-convert -s entity.yaml -t rdf huangyg.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
@prefix ORCID: <https://orcid.org/> .
@prefix entity: <https://raw.githubusercontent.com/hyg/ego/vat/data/entity> .

ORCID:0009-0005-7296-5316 a entity:Ego ;
    entity:aliases "['huangyg', 'mars22', 'fromoon', 'samadhi']" ;
    entity:cognize "1" ;
    entity:data [ a entity:EntityData ;
            entity:entityid "ORCID:0009-0005-7296-5316" ;
            entity:todos [ a entity:Todo ;
                    entity:id "20240612165400" ;
                    entity:name "linkml, yaml-ld" ;
                    entity:readme """- https://linkml.io/linkml/schemas/models.html
- https://linkml.io/linkml/intro/tutorial03.html
""" ;
                    entity:subject "learn" ;
                    entity:time "60" ] ] ;
    entity:name "黄勇刚" ;
    entity:offer "3" ;
    entity:protocol "2" .
```
- 可以基于rdf去做后面工作。
- 继续学习04节，还有https://json-schema.org/specification。
