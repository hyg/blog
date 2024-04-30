# 20240430

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
| 07:45~08:44 | 60 | 静默工作 | [task waitinglist编码](#20240430074500) |
| 08:45~09:29 | 45 | 休整 |  |
| 09:30~10:59 | 90 | 静默工作 | [设计条款内容与排版序号分离的新数据结构，编写metadata范例。](#20240430093000) |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | [在js代码中进行git操作](#20240430140000) |
| 14:30~14:59 | 30 | 静默工作 | [数字发票试点](#20240430143000) |
| 15:00~15:59 | 60 | 休整 |  |
| 16:00~16:59 | 60 | 静默工作 | [设计自己的git开发流程](#20240430160000) |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。


---
<a id="index"></a>
- 07:45	[task waitinglist编码](#20240430074500)  
- 09:30	[设计条款内容与排版序号分离的新数据结构，编写metadata范例。](#20240430093000)  
- 14:00	[在js代码中进行git操作](#20240430140000)  
- 14:30	[数字发票试点](#20240430143000)  
- 16:00	[设计自己的git开发流程](#20240430160000)  

---


[top](#top) | [index](#index)
<a id="20240430074500"></a>
## 7:45~8:44
task waitinglist编码

### 生成waitinglist

- 首先用season.time的alloc字段（已经和time.supply字段和dayplan模版下的supply计算的总数一致）减去sold字段，得出各任务剩余时间。
- 对剩余时间进行排序，得出各任务优先级。今后还可以有其它优先级算法。
- 遍历所有模版，读取所有现存的时间片长度。目前是30、60、90、195分钟四种。
- 按照优先顺序，遍历season.todo字段下各项目，依次读第1个job，然后依次读第2个job，分别按长度排入四种时间长度下的waitinglist。

### 预推计划

- 遍历每一种时间模版dayplan，每个时间片选取waitinglist的第一个，然后这个元素弹出waitinglist数组。
- 排完一种时间模版之后，重新生成waitinglist，再排下一种时间模版。

### 日计划

- 真实绑定一种时间模版，排期方式和预推时一样。
- 区别是会删除season.todo下的job。
- 生成draft的metadata和各时间片的view，以及blog\release\time\下的当天markdown文件。

大部分工作昨晚陆续完成，共计约90分钟。其中70分钟加在昨天9:30时间片，20分钟算在今天。

执行结果：
```
D:\huangyg\git\ego\src>node ego day 1
resttotal: 8192
reset:
 PSMD: 4062
learn: 838
ego: 1391
js: 1176
xuemen: 540
raw: 185

resetSOrted:
 - PSMD
- ego
- js
- learn
- xuemen
- raw

delete the job from ego:
task之间结算体系设计
delete the job from xuemen:
编写自动分录的代码
delete the job from js:
async
delete the job from raw:
debug-灰枣按"个"作为单位被算出很高热量。
delete the job from learn:
把git开发流程编写成批处理文件
../data/draft/2024/d.20240430.yaml
date: 20240430
plan: 1
time:
  - begin: '20240430074500'
    amount: 60
    type: work
    subject: ego
    name: task之间结算体系设计
    output: draft/2024/04/20240430074500.md
  - begin: '20240430093000'
    amount: 90
    type: work
    subject: xuemen
    name: 编写自动分录的代码
    output: draft/2024/04/20240430093000.md
  - begin: '20240430140000'
    amount: 30
    type: work
    subject: js
    name: async
    output: draft/2024/04/20240430140000.md
  - begin: '20240430143000'
    amount: 30
    type: work
    subject: raw
    name: debug-灰枣按"个"作为单位被算出很高热量。
    output: draft/2024/04/20240430143000.md
  - begin: '20240430160000'
    amount: 60
    type: work
    subject: learn
    name: 把git开发流程编写成批处理文件
    output: draft/2024/04/20240430160000.md

seasonobj.todo:
PSMD:
  - '195': 基于新的term +termset metadata修改代码commit, generate view
    readme: |
      - item字段里可以自由排练text、term，可以自由安排有title、prefix或没有。
        - title：单独显示，不改变内部序号。通常用做章、附件的开头。
        - prefix：向下改变所有内部序号，用"."依序连接起来。
      - item字段里的map增加title、prefix的映射。
        - 下级title可以在map被替换；
        - 下级prefix也在map被替换。
      - interface字段增加title字段，相当于目录。上级不提换就用本地的。
      - term commit
      - term metadata -> term view
  - '30': 生成入门目录涉及的所有view，调整措池准备试用
  - '60': 基于term metadata修改COM、deploy、COD等metadata
  - '195': term + COM matedata -> deploy metadata -> deploy view
  - '30': PSMD委托合同的metadata
ego:
  - '30': 整理废弃git库，包括本地和远程。
  - '60': github + codeberg page 范例
  - '60': 在season metadata中实现浮动时间表，修改日计划功能。
learn:
  - '30': 学习正则表达式RegExp
  - '60': nosql
  - '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
js:
  - '30': promise 对象
  - '30': 学习AMD规范，如果适用就开发范例
  - '60': 向外提供js文件的范例，为代码层级互通做准备
  - '30': 日期格式化
    readme: |
      https://www.cnblogs.com/biehongli/p/9327604.html
      https://juejin.cn/post/7199191689150644279
      https://blog.csdn.net/lwf3115841/article/details/129105206
raw:
  - '30': 设计DRI metadata
  - '60': 实现自定义DRI的代码
  - '30': debug-diff mode较大天数返回空数据，创建三个R文件。
xuemen:
  - '195': xuemen COD metadata

the draft metadata isn't exist:../data/draft/2024/d.20240430.yaml
```


[top](#top) | [index](#index)
<a id="20240430093000"></a>
##  9:30~10:59
设计条款内容与排版序号分离的新数据结构，编写metadata范例。

- 定位：PSMD输出的是三会动议。
    - 是其他部门和合作方工作的输入文件。比如律师基于三会的决议开始自己的工作、完成后续的法律文件，而不是要求三会输出律师的工作结果。
    - PSMD输出文件的排版和序号，只是为了避开和机构内部已有文件，以免出现二义性。如果个别机构内部有更严格的版面要求可以由辅助人员整理。直到大面积使用、成为事实标准之后才纳入PSMD需求。

- 只有需要独立使用时，才单独创立。否则可以合在一个文件里。
    - 但是互相引用应该可以精确定位到某一条款。因此内部编号还是要精确。

### 数据结构

- 增加item字段。
  - 取消item.path，改由统一的接口从id获得path、obj
  - 取消item.type，统统都有text、term字段，localid都可以在interface转换成空字符串，实现无序号文字。
  - 暂时保留upgradeby字段，实际使用后再定。
- 增加depend、together字段，结合原有的effect字段代替knowledge
  - 默认是termtoerror，因为没有type，而effect的id也是errorid
  - 可能有不止一种效果，每种效果的depend、together不同，这时仍需要独立的knowledge
- interface和map字段都去掉分类，直接排列所有placeholder的映射。
    - placeholder中添加termid，以示区别。

```
name:
id:
interface:
  <termid.entity.1>: name
  <termid.entity.2>: name
  <termid.asset.1>: name
  <termid.term.1>: name
  <termid.event.1>: name
  <termid.localid.1>: name
item:
  - localid:
      text: |
      termid: 
      upgradeby: // localid.localid.....localid
      map:
        <termid.entity.1>: <termid.entity.1>
        <termid.entity.2>: <termid.entity.2>
        <termid.asset.1>: <termid.asset.1>
        <termid.term.1>: <termid.term.1>
        <termid.event.1>: <termid.event.1>
        <termid.localid.1>: <termid.localid.1>
readme: |
depend:
  errorid:
    percent:
    text: | 
together:
  errorid:
    percent:
    text: |
effect:
  errorid:
    percent:
    text: |
```

- PSMD git本地库创建develop_newterm分支。
- 根据termset.01e1c775 创建新结构的4个term文件：

- term.1.yaml
```
name: 调整分配主比例
id: 1
interface:
  <1.entity.1>: deployer
  <1.entity.2>: director
  <1.asset.1>: p
item:
  - localid: 0
    termid: 2
    upgradeby: <1.localid.0>
    map:
      <2.entity.1>: <1.entity.1>
  - localid: 1
    termid: 3
    upgradeby: <1.localid.0>
    map:
      <3.asset.1>: <1.asset.1>
  - localid: 2
    termid: 4
    upgradeby: <1.localid.0>
    map:
      <4.entity.1>: <1.entity.2>
readme: |
depend:
  errorid:
    percent:
    text: | 
together:
  errorid:
    percent:
    text: |
effect:
  errorid:
    percent:
    text: |
```

- term.2.yaml
```
name: 自修订条款
id: 2
interface:
  <2.entity.1>: deployer
item:
  - localid: 0
    text: |
      由<2.entity.1>书面提交即生效。
readme: |
effect: |
```

- term.3.yaml
```
name: 利益分配比例
id: 3
interface:
  <3.asset.1>: p
item:
  - localid: 0
    text: |
      <3.asset.1>=20，<3.asset.1>%=20%。
readme: |
effect: |
```

- term.4.yaml
```
name: 集体决策
id: 4
interface:
  <4.entity.1>: director
item:
  - localid: 0
    text: |
      由<4.entity.1>表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。
readme: |
effect: |
```

[top](#top) | [index](#index)
<a id="20240430140000"></a>
## 14:00~14:29
在js代码中进行git操作

- https://juejin.cn/post/7310554208230850623
    - isomorphic-git 是一个纯 JavaScript 的库，提供了跨浏览器和 Node.js 环境使用的 Git 功能: https://isomorphic-git.org/
    - dugite 是一个execFile原理实现git绑定的js库: https://github.com/desktop/dugite
- https://geek-docs.com/git/git-questions/103_git_git_commands_in_nodejs.html  
    - 使用 child_process 模块来执行 Shell 命令


- 一个命令推送到所有远端: https://blog.walterlv.com/post/git-push-to-all-remotes.html

[top](#top) | [index](#index)
<a id="20240430143000"></a>
## 14:30~14:59
数字发票试点

- 短信通知：
```
【百旺服务】 尊敬的纳税人：您已经是数电发票试点纳税人，请及时联系我们一键迁移历史发票数据，完成系统升级工作。客服热线：010-59201188
温馨提示：由于400-611-2366线路改造，税控盘、税务Ukey、金税盘、数电发票咨询服务热线变更为：010-59201188，有问题请及时与我们联系。感谢您的配合！拒收请回复R
```

- 航天金穗 https://www.htjs.net 税控盘专线：400-611-2366


- 百旺金赋 http://www.ibwjf.com/ 咨询服务
```
 您好，接到短信自称是百旺，说服务热线400-611-2366改为010-59201188。确认一下是百旺的通知吗。

百旺聂冀 14:38:57
这个不是我们的通知

百旺聂冀 14:39:10
我们的客服电话是85398677

14:39:50
可能是百旺的内部部门吗。还是确定是外部的假冒信息。

百旺聂冀 14:40:44
这个是之前的承包商 不是我们北京百旺金赋

14:41:26
ok，那我不管他们的通知了。

百旺聂冀 14:41:56
嗯
```
- 安装百旺金赋的云票助手和帮助文档，五月份试用一下。
    - http://www.ibwjf.com/dataDownload/0
    - http://www.ibwjf.com/classRooms/1


[top](#top) | [index](#index)
<a id="20240430160000"></a>
## 16:00~16:59
设计自己的git开发流程


1. ego、raw项目在笔记本运行master分支，主要开发版本在台式机开发，其它开发版本在笔记本。
1. ego、raw以外的项目在台式机运行master项目，主要开发版本在笔记本开发，其它开发版本在台式机。
1. 其它分支命名和用途：
    - develop: 开发分支。
    - feature-name: 功能分支
    - release-version: 发布分支
    - bugfix-name: bug修复分支
1. 人工编辑的文档库使用代码库相同的方式管理。
1. 自动生成的文档库，代码分支有完整的数据、代码、文档，在此基础上创建纯文档分支，由代码分支cherry-pick过去。 代码分支不编辑文件，只做tag和archive（release）。
    - 每份委托合同创建纯文档分支
1. 远程库：
    - github: master分支
    - codeberg: 文档分支为主
    - gitee: 所有分支
    - coding: 部分项目的所有分支
1. tag命名和用途：
    - 代码分支：版本号
    - 文档分支：决议号
