# 2024.05.11.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[整理S2状态下基本管理制度](#20240511074500)  
- 14:00	[完成1609 deploy、COD的metadata](#20240511140000)  
- 16:00	[了解call和apply](#20240511160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 9050 | 4225 | 2220 |
| PSMD | 7000 | 4596 | 2404 | 705 |
| learn | 1000 | 412 | 588 | 360 |
| ego | 3000 | 2114 | 886 | 525 |
| js | 1375 | 615 | 760 | 240 |
| xuemen | 600 | 926 | -326 | 210 |
| raw | 300 | 357 | -57 | 180 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - ego的第1号事项：实现todo项的多层结构
  - js的第2号事项：学习AMD规范，如果适用就开发范例
  - learn的第2号事项：YARRRML
  - learn的第3号事项：docker

- 60分钟时间片：
  - PSMD的第1号事项：基于智能设备的S2基本管理制度
  - js的第1号事项：学习promise对象和async/await
  - learn的第1号事项：github的actions,workflow,job脚本语法
  - raw的第1号事项：实现自定义DRI,NRV的代码

- 90分钟时间片：
  - PSMD的第2号事项：COM metadata -> COM view
  - xuemen的第2号事项：整理S2状态下基本管理制度的metedata
  - learn的第7号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - PSMD的第8号事项：term metadata生成按修订层级排版的COM metadata。

- 195分钟时间片：
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第8号事项：在整理近期手稿之后，修订个人模型。

---

[top](#top) | [index](#index)
<a id="20240511074500"></a>
## 7:45~10:59
整理S2状态下基本管理制度


### 公司法
- 无论哪一版公司法，股东会都不能越过董事(会)制订基本管理制度。
- 股东之一出任S1状态下的董事兼经理，可以董事身份行使董事会职权，制订基本管理制度。
- S1董事在离任前，按照S2状态的管理需要制订基本管理制度，并且把S1状态下的业务逐渐转移到新制度下，然后再结束S1状态，选举S2状态的董事会。
    - 通常情况下，S1董事仍然会入选S2董事会或监事会，以保证连贯性。
- 基于以上分析，S2状态下的基本管理制度，在S1末期基于1406模型（动议套装）056e71fb 启动。

### 智能设备
- 追加todo项：
  - '60': 基于智能设备的S2基本管理制度


---

[top](#top) | [index](#index)
<a id="20240511140000"></a>
## 14:00~15:29
完成1609 deploy、COD的metadata

- 先不起1609 COM的工作
    - 由于COM的数量不多，就不用commit了。
- 可修订、不可修订条款；决策条款、非决策条款两个维度可以正交。
    - 决策条款定义为可以产生条款：term maker。
- 顺便编写了term.f70677ff 1609模型的条款形态。
```
D:\huangyg\git\PSMD\src>node term term f70677ff
enter maketermtext:f70677ff     prefix:
enter maketermtext:c13a43a2     prefix:自修订条款1.
enter maketermtext:71da4d25     prefix:二级决策条款1.
enter maketermtext:40880d93     prefix:二级决策条款2.
enter maketermtext:54b6949d     prefix:二级决策条款3.
enter maketermtext:95eab800     prefix:二级决策条款4.
enter maketermtext:0edca872     prefix:二级决策条款5.
enter maketermtext:32e45dee     prefix:二级决策条款6.
enter maketermtext:88e5c5f4     prefix:三级决策条款1.
enter maketermtext:4e9e9c33     prefix:三级决策条款2.
enter maketermtext:666776c3     prefix:三级决策条款3.
enter maketermtext:efaeac70     prefix:三级决策条款4.
enter maketermtext:77666f44     prefix:基本管理制度.
enter maketermtext:ac890987     prefix:基本管理制度.保密制度.
enter maketermtext:72af7dea     prefix:基本管理制度.保密制度.1.
enter maketermtext:02c7d037     prefix:基本管理制度.保密制度.2.
enter maketermtext:ef4cdffe     prefix:基本管理制度.保密制度.3.
enter maketermtext:de47ace4     prefix:基本管理制度.利益分配.
enter maketermtext:c046b09d     prefix:基本管理制度.利益分配.1.
enter maketermtext:3638eac6     prefix:基本管理制度.利益分配.2.
enter maketermtext:1558e5e1     prefix:基本管理制度.利益分配.3.
enter maketermtext:814f76cb     prefix:基本管理制度.利益分配.4.
enter maketermtext:58d4c137     prefix:基本管理制度.利益分配.5.
enter maketermtext:c1f65b6d     prefix:基本管理制度.利益分配.5.1.
enter maketermtext:6568c500     prefix:基本管理制度.利益分配.5.2.
enter maketermtext:d8bd8aa6     prefix:基本管理制度.利益分配.6.
enter maketermtext:8a5d94dc     prefix:基本管理制度.利益分配.6.1.
enter maketermtext:34be50e1     prefix:基本管理制度.利益分配.6.2.
enter maketermtext:3176f00c     prefix:基本管理制度.利益分配.6.3.
enter maketermtext:a8ca0160     prefix:基本管理制度.利益分配.6.4.
enter maketermtext:2a78271e     prefix:基本管理制度.利益分配.6.5.
enter maketermtext:96b99526     prefix:基本管理制度.利益分配.7.
enter maketermtext:6d2ca266     prefix:基本管理制度.利益分配.7.1.
enter maketermtext:fb21bdf9     prefix:基本管理制度.利益分配.7.2.
enter maketermtext:7f7a536f     prefix:基本管理制度.利益分配.7.3.
enter maketermtext:a8d575a7     prefix:基本管理制度.利益分配.7.4.
enter maketermtext:70cdd24d     prefix:基本管理制度.利益分配.7.5.
enter maketermtext:41312cc4     prefix:基本管理制度.利益分配.7.6.
enter maketermtext:12d14064     prefix:基本管理制度.利益分配.8.
enter maketermtext:af62f03b     prefix:基本管理制度.利益分配.8.1.
enter maketermtext:55cc8467     prefix:基本管理制度.利益分配.8.2.
enter maketermtext:e4495f38     prefix:基本管理制度.利益分配.8.3.
../view/term.f70677ff.md文件更新，内容如下:
条款 f70677ff 正文:
自修订条款1. 本条款按照本条款修订。由deployer书面提交修订以下事项，提交时生效：
  - p%
  - director席位数
  - director会议议事规则
  - supervisor席位数
  - supervisor会议议事规则
  - director和supervisor任期及选举程序
  - trustee任期及任免程序
  - 第一届director
  - 第一届supervisor
  - 下一任deployer
  - 本条款内容
二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。
二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：
  - director工作计划（含预算案）
  - director工作报告
  - 审议报告
  - 任免admin
  - 设立、撤销部门
  - worker劳动合同
  - 制订基本管理制度
  - 制订保密文件的脱敏版本
二级决策条款3. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director通过可以作出决议。
二级决策条款4. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director和trustee通过可以作出决议。
二级决策条款5. 本条款按照自修订条款1条款修订。根据supervisor会议议事规则，经三分之二supervisor通过可以作出决议：
  - supervisor工作计划
  - supervisor工作报告
  - 审议报告
  - director任期提前结束，重新进行选举。
二级决策条款6. 本条款按照自修订条款1条款修订。由trustee书面提交修订以下事项，提交时生效：
- 预算透支限额
- director任期提前结束，重新进行选举。
- supervisor任期提前结束，重新进行选举。
三级决策条款1. 本条款按照二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：
  - 工作计划草案
  - 工作报告
  - 具体规章
  - worker名册（及合同）
三级决策条款2. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，worker手中合同的每个RIU报酬 权重为r*(100-p)，RIU持有者持有的每个RIU权重为w*p。
  - 如果deployer没有指定继任者又不能工作，选举新任deployer。
三级决策条款3. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同的每 个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。
  - 选举director
  - 选举supervisor
三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照<term.f70677ff.level1.4>修订。全体RIU持有者选举，以持有的RIU为权重。
  - 任免trustee。
基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。
基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制 度不得规定。
基本管理制度.保密制度.3. 本条款按照二级决策程序1.条款修订。其它规章正文及执行记录默认为公开。
基本管理制度.利益分配.1. 利益分配原则：优先劣后次序与决策层级相反。
基本管理制度.利益分配.2. 每个成员设一个专户，每个专户可以容纳所有种类的资产。
基本管理制度.利益分配.3. 本条款按照自修订条款1.条款修订。设四个共同体专户，每个专户可以容纳所有种类的资产。分别由：deployer、trustee、director和supervisor、admin管理。
基本管理制度.利益分配.4. 本条款按照自修订条款1.条款修订。按照二级决策条款2.设立部门时，开设部门专户，并明确与其它专户的资源交换规则。
基本管理制度.利益分配.5. deployer专户：
基本管理制度.利益分配.5.1. 本条款按照自修订条款1.条款修订。deployer专户用于deployer工作经费，以及重构期间发生的短期支出。
基本管理制度.利益分配.5.2. 本条款按照二级决策条款3.条款修订。每月末将director专户余额的0.5%转入deployer专户。
基本管理制度.利益分配.6. 本条款按照二级决策条款4.条款修订。trustee专户：
基本管理制度.利益分配.6.1. 本条款按照二级决策条款4.条款修订。RIU持有者可以将RIU转入trustee专户，委托trustee卖出。
基本管理制度.利益分配.6.2. 本条款按照二级决策条款4.条款修订。投资者可以将其它资源转入trustee专户，委托trustee买入RIU。
基本管理制度.利益分配.6.3. 本条款按照二级决策条款4.条款修订。收入的p%用于购买trustee专户中的RIU，低价优先。交易获得的RIU支付trustee报酬后，余额转入director专户。
基本管理制度.利益分配.6.4. 本条款按照二级决策条款4.条款修订。RIU交易由trustee按价格优先、时间优先原则撮合。
基本管理制度.利益分配.6.5. 本条款按照二级决策条款4.条款修订。trustee从收入的p%购买的RIU中领取报酬，竞聘者须明确报酬的计算公式。
基本管理制度.利益分配.7. 本条款按照二级决策条款3.条款修订。director专户由director与supervisor共同使用：
基本管理制度.利益分配.7.1. 本条款按照二级决策条款3.条款修订。director专户中的RIU可以是负数，最小值由预算透支限额确定。
基本管理制度.利益分配.7.2. 本条款按照二级决策条款3.条款修订。收入的(100-p)%转入director专户。
基本管理制度.利益分配.7.3. 本条款按照二级决策条款3.条款修订。按生效的admin工作计划（含预算案）从director专户转入admin专户，余额不足时后续条款的支出 暂缓。
基本管理制度.利益分配.7.4. 本条款按照二级决策条款3.条款修订。supervisor按supervisor工作计划（含预算案）使用director专户余额，余额不足时后续条款的支 出暂缓。
基本管理制度.利益分配.7.5. 本条款按照二级决策条款3.条款修订。director按director工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出暂 缓。
基本管理制度.利益分配.7.6. 本条款按照二级决策条款3.条款修订。deployer、director、supervisor从director专户领取报酬，director、supervisor竞聘者须明确 报酬的计算公式，deployer报酬数额为director、supervisor报酬的中位数。director专户数额不足时以应发数额为权重按比例分配，等候期间不计利息。
基本管理制度.利益分配.8. admin专户：
基本管理制度.利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。
基本管理制度.利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。
基本管理制度.利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数额 不足而等候期间不计利息。

---
readme:
条款 f70677ff. 二级决策条款2.
本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。
基本管理制度.
基本管理制度.利益分配.
基本管理制度.利益分配.2.
- 所有工作成果都属于资产。
基本管理制度.利益分配.5.
基本管理制度.利益分配.5.1.
- deployer无须制订工作计划和预算案。
- 部署时根据实际情况确定本条的记账方式。
基本管理制度.利益分配.5.2.
deployer使用资源的优先级高于director。
基本管理制度.利益分配.6.
基本管理制度.利益分配.6.3.
大部分收入还是由director使用，其中p%体现为RIU（扣除trustee报酬），其余体现为对外交易约定的资源。
基本管理制度.利益分配.6.5.
trustee任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
基本管理制度.利益分配.7.
基本管理制度.利益分配.7.3.
- 工作计划和预算案可以根据工作需要规定资源转入时间，滚动利用预算周期内的交易收入。
- admin使用资源的优先级高于director和supervisor。
基本管理制度.利益分配.7.4.
supervisor使用资源的优先级高于director。
基本管理制度.利益分配.7.6.
- deployer、director、supervisor的报酬优先级低于工作支出。
- director、supervisor任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
基本管理制度.利益分配.8.
基本管理制度.利益分配.8.2.
- member所包括角色范围根据实际情况界定。通常包括admin、worker，有时也包括一些外部人员、机构。
- 报酬可能包括不同种类的资源。
基本管理制度.利益分配.8.3.
- admin任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.f70677ff.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 f70677ff</h3><hr/><p>正文:</p><p>自修订条款1. 本条款 按照本条款修订。由deployer书面提交修订以下事项，提交时生效：<br/>
  - p%<br/>
  - director席位数<br/>
  - director会议议事规则<br/>
  - supervisor席位数<br/>
  - supervisor会议议事规则<br/>
  - director和supervisor任期及选举程序<br/>
  - trustee任期及任免程序<br/>
  - 第一届director<br/>
  - 第一届supervisor<br/>
  - 下一任deployer<br/>
  - 本条款内容<br/>
二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。<br/>
二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：<br/>
  - director工作计划（含预算案）<br/>
  - director工作报告<br/>
  - 审议报告<br/>
  - 任免admin<br/>
  - 设立、撤销部门<br/>
  - worker劳动合同<br/>
  - 制订基本管理制度<br/>
  - 制订保密文件的脱敏版本<br/>
二级决策条款3. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director通过可以作出决议。<br/>
二级决策条款4. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director和trustee通过可以作出决议。<br/>
二级决策条款5. 本条款按照自修订条款1条款修订。根据supervisor会议议事规则，经三分之二supervisor通过可以作出决议：<br/>
  - supervisor工作计划<br/>
  - supervisor工作报告<br/>
  - 审议报告<br/>
  - director任期提前结束，重新进行选举。<br/>
二级决策条款6. 本条款按照自修订条款1条款修订。由trustee书面提交修订以下事项，提交时生效：<br/>
- 预算透支限额<br/>
- director任期提前结束，重新进行选举。<br/>
- supervisor任期提前结束，重新进行选举。<br/>
三级决策条款1. 本条款按照二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：<br/>
  - 工作计划草案<br/>
  - 工作报告<br/>
  - 具体规章<br/>
  - worker名册（及合同）<br/>
三级决策条款2. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，worker手中合同的每个RIU报酬 权重为r*(100-p)，RIU持有者持有的每个RIU权重为w*p。 <br/>
  - 如果deployer没有指定继任者又不能工作，选举新任deployer。<br/>
三级决策条款3. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同的每 个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。<br/>
  - 选举director<br/>
  - 选举supervisor<br/>
三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照<term.f70677ff.level1.4>修订。全体RIU持有者选举，以持有的RIU为权重。<br/>
  - 任免trustee。<br/>
基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。<br/>
基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制 度不得规定。<br/>
基本管理制度.保密制度.3. 本条款按照二级决策程序1.条款修订。其它规章正文及执行记录默认为公开。<br/>
基本管理制度.利益分配.1. 利益分配原则：优先劣后次序与决策层级相反。<br/>
基本管理制度.利益分配.2. 每个成员设一个专户，每个专户可以容纳所有种类的资产。<br/>
基本管理制度.利益分配.3. 本条款按照自修订条款1.条款修订。设四个共同体专户，每个专户可以容纳所有种类的资产。分别由：deployer、trustee、director和supervisor、admin管理。<br/>
基本管理制度.利益分配.4. 本条款按照自修订条款1.条款修订。按照二级决策条款2.设立部门时，开设部门专户，并明确与其它专户的资源交换规则。<br/>
基本管理制度.利益分配.5. deployer专户：<br/>
基本管理制度.利益分配.5.1. 本条款按照自修订条款1.条款修订。deployer专户用于deployer工作经费，以及重构期间发生的短期支出。<br/>
基本管理制度.利益分配.5.2. 本条款按照二级决策条款3.条款修订。每月末将director专户余额的0.5%转入deployer专户。<br/>
基本管理制度.利益分配.6. 本条款按照二级决策条款4.条款修订。trustee专户：<br/>
基本管理制度.利益分配.6.1. 本条款按照二级决策条款4.条款修订。RIU持有者可以将RIU转入trustee专户，委托trustee卖出。<br/>
基本管理制度.利益分配.6.2. 本条款按照二级决策条款4.条款修订。投资者可以将其它资源转入trustee专户，委托trustee买入RIU。<br/>
基本管理制度.利益分配.6.3. 本条款按照二级决策条款4.条款修订。收入的p%用于购买trustee专户中的RIU，低价优先。交易获得的RIU支付trustee报酬后，余额转入director专户。<br/>
基本管理制度.利益分配.6.4. 本条款按照二级决策条款4.条款修订。RIU交易由trustee按价格优先、时间优先原则撮合。<br/>
基本管理制度.利益分配.6.5. 本条款按照二级决策条款4.条款修订。trustee从收入的p%购买的RIU中领取报酬，竞聘者须明确报酬的计算公式。<br/>
基本管理制度.利益分配.7. 本条款按照二级决策条款3.条款修订。director专户由director与supervisor共同使用：<br/>
基本管理制度.利益分配.7.1. 本条款按照二级决策条款3.条款修订。director专户中的RIU可以是负数，最小值由预算透支限额确定。<br/>
基本管理制度.利益分配.7.2. 本条款按照二级决策条款3.条款修订。收入的(100-p)%转入director专户。<br/>
基本管理制度.利益分配.7.3. 本条款按照二级决策条款3.条款修订。按生效的admin工作计划（含预算案）从director专户转入admin专户，余额不足时后续条款的支出 暂缓。<br/>
基本管理制度.利益分配.7.4. 本条款按照二级决策条款3.条款修订。supervisor按supervisor工作计划（含预算案）使用director专户余额，余额不足时后续条款的支 出暂缓。<br/>
基本管理制度.利益分配.7.5. 本条款按照二级决策条款3.条款修订。director按director工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出暂 缓。<br/>
基本管理制度.利益分配.7.6. 本条款按照二级决策条款3.条款修订。deployer、director、supervisor从director专户领取报酬，director、supervisor竞聘者须明确 报酬的计算公式，deployer报酬数额为director、supervisor报酬的中位数。director专户数额不足时以应发数额为权重按比例分配，等候期间不计利息。<br/>
基本管理制度.利益分配.8. admin专户：<br/>
基本管理制度.利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。<br/>
基本管理制度.利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。<br/>
基本管理制度.利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数额 不足而等候期间不计利息。<br/>
</p><hr/><p>注释:</p><p>二级决策条款2.<br/>
本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。<br/>
基本管理制度.<br/>
基本管理制度.利益分配.<br/>
基本管理制度.利益分配.2.<br/>
- 所有工作成果都属于资产。<br/>
基本管理制度.利益分配.5.<br/>
基本管理制度.利益分配.5.1.<br/>
- deployer无须制订工作计划和预算案。<br/>
- 部署时根据实际情况确定本条的记账方式。<br/>
基本管理制度.利益分配.5.2.<br/>
deployer使用资源的优先级高于director。<br/>
基本管理制度.利益分配.6.<br/>
基本管理制度.利益分配.6.3.<br/>
大部分收入还是由director使用，其中p%体现为RIU（扣除trustee报酬），其余体现为对外交易约定的资源。<br/>
基本管理制度.利益分配.6.5.<br/>
trustee任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
基本管理制度.利益分配.7.<br/>
基本管理制度.利益分配.7.3.<br/>
- 工作计划和预算案可以根据工作需要规定资源转入时间，滚动利用预算周期内的交易收入。<br/>
- admin使用资源的优先级高于director和supervisor。<br/>
基本管理制度.利益分配.7.4.<br/>
supervisor使用资源的优先级高于director。<br/>
基本管理制度.利益分配.7.6.<br/>
- deployer、director、supervisor的报酬优先级低于工作支出。<br/>
- director、supervisor任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
基本管理制度.利益分配.8.<br/>
基本管理制度.利益分配.8.2.<br/>
- member所包括角色范围根据实际情况界定。通常包括admin、worker，有时也包括一些外部人员、机构。<br/>
- 报酬可能包括不同种类的资源。<br/>
基本管理制度.利益分配.8.3.<br/>
- admin任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
</p><hr/></body></html>
```

- 起草deploy范例：
```
name: deploy范例[X机构部署1609模型]
id: X-1609
COM: 1609
interface:
  <COM.1609.entity.deployer>: deployer
  <COM.1609.entity.director>: director
  <COM.1609.entity.trustee>: trustee
  <COM.1609.entity.supervisor>: supervisor
  <COM.1609.entity.admin>: admin
  <COM.1609.entity.worker>: worker
  <COM.1609.entity.2>: value
  <COM.1609.asset.1>: RIU
  <COM.1609.asset.2>: p
  <COM.1609.term.1>: 自修订条款
  <COM.1609.term.2>: director会议议事规则
  <COM.1609.term.3>: supervisor会议议事规则
  <COM.1609.localid.1>: value
deployer: 
  IRI: ego.mars22.com/hyg
interface:
  <term.X-1609.entity.1>: X机构
  <term.X-1609.entity.2>: 张三
  <term.X-1609.entity.3>: 李四
step:
  - termid: f70677ff
    map:
      <COM.1609.entity.deployer>: <term.X-1609.entity.2>
      <COM.1609.entity.admin>: <term.X-1609.entity.3>
    y:
      termid: <COM.1609.term.2>
      y:
        termid: <COM.1609.term.3>
    n: 
      errorid: 48291d8c
      y: 
      n: 
        termid: 056e71fb
        readme: |
          1406
        y:
          readme: |
            先运行起来，根据团队对error 48291d8c的体会计划后续工作。
        n:
          readme: |
            deploy failure.
readme: |
logpath: log.x.com
```

---

[top](#top) | [index](#index)
<a id="20240511160000"></a>
## 16:00~16:59
了解call和apply

定义知道了，还没想到具体项目下的用途。
- https://zh.javascript.info/call-apply-decorators