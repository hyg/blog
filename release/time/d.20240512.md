# 2024.05.12.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[基于智能设备的S2基本管理制度](#20240512074500)  
- 09:30	[COM metadata -> COM view](#20240512093000)  
- 14:00	[实现todo项的多层结构](#20240512140000)  
- 14:30	[学习AMD规范，如果适用就开发范例](#20240512143000)  
- 16:00	[学习promise对象和async/await](#20240512160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 9400 | 3875 | 2100 |
| PSMD | 7000 | 4856 | 2144 | 555 |
| learn | 1000 | 412 | 588 | 420 |
| ego | 3000 | 2114 | 886 | 525 |
| js | 1375 | 705 | 670 | 210 |
| xuemen | 600 | 926 | -326 | 210 |
| raw | 300 | 357 | -57 | 180 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - PSMD的第1号事项：修订入门目录term.9d12877c，准备实际使用。
  - ego的第1号事项：实现todo项的多层结构
  - js的第1号事项：继续学习promise api
  - js的第2号事项：学习AMD规范，如果适用就开发范例

- 60分钟时间片：
  - learn的第1号事项：freenet的contract
  - raw的第1号事项：实现自定义DRI,NRV的代码
  - xuemen的第1号事项：五月报税
  - ego的第2号事项：/release/entry.html 读取 markdown和metadata 并显示。

- 90分钟时间片：
  - xuemen的第2号事项：整理S2状态下基本管理制度的metedata
  - PSMD的第6号事项：term metadata生成按修订层级排版的COM metadata。
  - PSMD的第8号事项：整理近期手稿。
  - learn的第8号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第8号事项：在整理近期手稿之后，修订个人模型。

---

[top](#top) | [index](#index)
<a id="20240512074500"></a>
## 7:45~8:44
基于智能设备的S2基本管理制度

- 抛开公司法框架，基于1609的决策条款设计基本管理制度。
- 分解自修订条款：
    - 程序上的细节，deployer可以自行定义，以免被架空。
    - 职权范围必须锁死，由二级决策条款4.来修改。
- 状态切换交给trustee，二级决策条款6.。

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
基于1609模型决策条款设计的S2基本管理制度 bfa1c02e
commit term.11.yaml
deployer职权 06c7f1ef
commit term.2.yaml
1609-二级决策条款-6+设置状态 aa22a167
commit term.3.yaml
S2部门设置 85414146
../data/term.bfa1c02e.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.aa22a167.yaml文件已更新。../data/term.2.yaml可以删除。
../data/term.85414146.yaml文件已更新。../data/term.3.yaml可以删除。
../data/term.06c7f1ef.yaml文件已更新。../data/term.11.yaml可以删除。
../data/error.0ccddb29.yaml文件已更新。../data/error.1.yaml可以删除。
../data/error.48291d8c.yaml文件已更新。../data/error.2.yaml可以删除。
knowledge depend replace. error:2 -> 48291d8c
../data/knowledge.3b7582cd.yaml文件已更新。../data/knowledge.1.yaml可以删除。
旧文件:../data/knowledge.2.yaml中depend字段的id: cde3c3e2 未能替换，请人工检查。
旧文件:../data/knowledge.2.yaml中objid: 5b4e0597 未能替换，请人工检查。
knowledge effect replace. id:2 -> 48291d8c
../data/knowledge.d8a0602f.yaml文件已更新。../data/knowledge.2.yaml可以删除。

D:\huangyg\git\PSMD\src>node term term bfa1c02e
enter maketermtext:bfa1c02e     upgradeby:undefined     prefix:
enter maketermtext:c13a43a2     upgradeby:自修订条款1   prefix:自修订条款1.
enter maketermtext:71da4d25     upgradeby:自修订条款1   prefix:S2二级决策条款1.
enter maketermtext:40880d93     upgradeby:自修订条款1   prefix:S2二级决策条款2.
enter maketermtext:54b6949d     upgradeby:自修订条款1   prefix:S2二级决策条款3.
enter maketermtext:95eab800     upgradeby:自修订条款1   prefix:S2二级决策条款4.
enter maketermtext:0edca872     upgradeby:<term.bfa1c02e.term.1>        prefix:S2二级决策条款5.
enter maketermtext:aa22a167     upgradeby:<term.bfa1c02e.term.1>        prefix:S2二级决策条款6.
enter maketermtext:88e5c5f4     upgradeby:S2二级决策条款1       prefix:S2三级决策条款1.
enter maketermtext:4e9e9c33     upgradeby:S2二级决策条款3       prefix:S2三级决策条款2.
enter maketermtext:666776c3     upgradeby:S2二级决策条款3       prefix:S2三级决策条款3.
enter maketermtext:efaeac70     upgradeby:S2二级决策条款4       prefix:S2三级决策条款4.
enter maketermtext:06c7f1ef     upgradeby:S2二级决策条款4       prefix:职权分配1.
enter maketermtext:77666f44     upgradeby:undefined     prefix:S2基本管理制度.
enter maketermtext:ac890987     upgradeby:undefined     prefix:S2基本管理制度.保密制度.
enter maketermtext:72af7dea     upgradeby:<term.ac890987.term.1>        prefix:S2基本管理制度.保密制度.1.
enter maketermtext:02c7d037     upgradeby:<term.ac890987.term.1>        prefix:S2基本管理制度.保密制度.2.
enter maketermtext:ef4cdffe     upgradeby:<term.ac890987.term.2>        prefix:S2基本管理制度.保密制度.3.
enter maketermtext:de47ace4     upgradeby:undefined     prefix:S2基本管理制度.利益分配.
enter maketermtext:c046b09d     upgradeby:undefined     prefix:S2基本管理制度.利益分配.1.
enter maketermtext:3638eac6     upgradeby:undefined     prefix:S2基本管理制度.利益分配.2.
enter maketermtext:1558e5e1     upgradeby:undefined     prefix:S2基本管理制度.利益分配.3.
enter maketermtext:814f76cb     upgradeby:undefined     prefix:S2基本管理制度.利益分配.4.
enter maketermtext:58d4c137     upgradeby:undefined     prefix:S2基本管理制度.利益分配.5.
enter maketermtext:c1f65b6d     upgradeby:undefined     prefix:S2基本管理制度.利益分配.5.1.
enter maketermtext:6568c500     upgradeby:undefined     prefix:S2基本管理制度.利益分配.5.2.
enter maketermtext:d8bd8aa6     upgradeby:undefined     prefix:S2基本管理制度.利益分配.6.
enter maketermtext:8a5d94dc     upgradeby:<term.d8bd8aa6.term.1>        prefix:S2基本管理制度.利益分配.6.1.
enter maketermtext:34be50e1     upgradeby:<term.d8bd8aa6.term.1>        prefix:S2基本管理制度.利益分配.6.2.
enter maketermtext:3176f00c     upgradeby:<term.d8bd8aa6.term.1>        prefix:S2基本管理制度.利益分配.6.3.
enter maketermtext:a8ca0160     upgradeby:<term.d8bd8aa6.term.1>        prefix:S2基本管理制度.利益分配.6.4.
enter maketermtext:2a78271e     upgradeby:<term.d8bd8aa6.term.1>        prefix:S2基本管理制度.利益分配.6.5.
enter maketermtext:96b99526     upgradeby:undefined     prefix:S2基本管理制度.利益分配.7.
enter maketermtext:6d2ca266     upgradeby:<term.96b99526.term.1>        prefix:S2基本管理制度.利益分配.7.1.
enter maketermtext:fb21bdf9     upgradeby:<term.96b99526.term.1>        prefix:S2基本管理制度.利益分配.7.2.
enter maketermtext:7f7a536f     upgradeby:<term.96b99526.term.1>        prefix:S2基本管理制度.利益分配.7.3.
enter maketermtext:a8d575a7     upgradeby:<term.96b99526.term.1>        prefix:S2基本管理制度.利益分配.7.4.
enter maketermtext:70cdd24d     upgradeby:<term.96b99526.term.1>        prefix:S2基本管理制度.利益分配.7.5.
enter maketermtext:41312cc4     upgradeby:<term.96b99526.term.1>        prefix:S2基本管理制度.利益分配.7.6.
enter maketermtext:12d14064     upgradeby:undefined     prefix:S2基本管理制度.利益分配.8.
enter maketermtext:af62f03b     upgradeby:<term.12d14064.term.1>        prefix:S2基本管理制度.利益分配.8.1.
enter maketermtext:55cc8467     upgradeby:<term.12d14064.term.1>        prefix:S2基本管理制度.利益分配.8.2.
enter maketermtext:e4495f38     upgradeby:<term.12d14064.term.1>        prefix:S2基本管理制度.利益分配.8.3.
enter maketermtext:056e71fb     upgradeby:<term.77666f44.term.2>        prefix:S2基本管理制度.1406条款.
enter maketermtext:48577ce8     upgradeby:<term.77666f44.term.2>        prefix:S2基本管理制度.1406条款.1.
enter maketermtext:7506353d     upgradeby:<term.77666f44.term.2>        prefix:S2基本管理制度.1406条款.2.
enter maketermtext:260ca049     upgradeby:<term.77666f44.term.2>        prefix:S2基本管理制度.1406条款.3.
enter maketermtext:c87ec159     upgradeby:<term.77666f44.term.2>        prefix:S2基本管理制度.1406条款.4.
enter maketermtext:85414146     upgradeby:S2二级决策条款2       prefix:S2部门设置.
../view/term.bfa1c02e.md文件更新，内容如下:
条款 bfa1c02e 正文:
自修订条款1. 本条款按照自修订条款1.条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。
S2二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。
S2二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：
  - director工作计划（含预算案）
  - director工作报告
  - 审议报告
  - 任免admin
  - admin工作计划（含预算案）
  - 设立、撤销部门
  - worker劳动合同
  - 制订基本管理制度
  - 制订保密文件的脱敏版本
S2二级决策条款3. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director通过可以作出决议。
S2二级决策条款4. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director和trustee通过可以作出决议。
S2二级决策条款5. 本条款按照自修订条款1.条款修订。根据supervisor会议议事规则，经三分之二supervisor通过可以作出决议：
  - supervisor工作计划
  - supervisor工作报告
  - 审议报告
  - director任期提前结束，重新进行选举。
S2二级决策条款6. 本条款按照自修订条款1.条款修订。由trustee书面提交修订以下事项，提交时生效：
- 预算透支限额
- director任期提前结束，重新进行选举。
- supervisor任期提前结束，重新进行选举。
- 共同体的状态
S2三级决策条款1. 本条款按照S2二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：
  - admin工作计划草案
  - admin工作报告
  - 具体规章
  - worker名册（及合同）
S2三级决策条款2. 本条款按照S2二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，worker手中合同的每个RIU 报酬权重为r*(100-p)，RIU持有者持有的每个RIU权重为w*p。
  - 如果deployer没有指定继任者又不能工作，选举新任deployer。
S2三级决策条款3. 本条款按照S2二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同 的每个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。
  - 选举director
  - 选举supervisor
S2三级决策条款4. 本条款按照S2二级决策条款4.条款修订。本条款按照<term.bfa1c02e.level1.4>修订。全体RIU持有者选举，以持有的RIU为权重。
  - 任免trustee。
职权分配1. 本条款按照S2二级决策条款4.条款修订。deployer行使以下职权：
  - 设定p%
  - 设定director席位数
  - 制定director会议议事规则
  - 设定supervisor席位数
  - 制定supervisor会议议事规则
  - 确定director和supervisor任期及选举程序
  - 确定trustee任期及任免程序
  - 任命第一届director
  - 任命第一届supervisor
  - 任命下一任deployer
  - 修改自修订条款1内容
S2基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。
S2基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本 制度不得规定。
S2基本管理制度.保密制度.3. 本条款按照二级决策条款1.条款修订。其它规章正文及执行记录默认为公开。
S2基本管理制度.利益分配.1. 利益分配原则：优先劣后次序与决策层级相反。
S2基本管理制度.利益分配.2. 每个成员设一个专户，每个专户可以容纳所有种类的资产。
S2基本管理制度.利益分配.3. 本条款按照自修订条款1.条款修订。设四个共同体专户，每个专户可以容纳所有种类的资产。分别由：deployer、trustee、director和supervisor、admin管理。
S2基本管理制度.利益分配.4. 本条款按照自修订条款1.条款修订。按照二级决策条款2.设立部门时，开设部门专户，并明确与其它专户的资源交换规则。
S2基本管理制度.利益分配.5. deployer专户：
S2基本管理制度.利益分配.5.1. 本条款按照自修订条款1.条款修订。deployer专户用于deployer工作经费，以及重构期间发生的短期支出。
S2基本管理制度.利益分配.5.2. 本条款按照二级决策条款3.条款修订。每月末将director专户余额的0.5%转入deployer专户。
S2基本管理制度.利益分配.6. 本条款按照二级决策条款4.条款修订。trustee专户：
S2基本管理制度.利益分配.6.1. 本条款按照二级决策条款4.条款修订。RIU持有者可以将RIU转入trustee专户，委托trustee卖出。
S2基本管理制度.利益分配.6.2. 本条款按照二级决策条款4.条款修订。投资者可以将其它资源转入trustee专户，委托trustee买入RIU。
S2基本管理制度.利益分配.6.3. 本条款按照二级决策条款4.条款修订。收入的p%用于购买trustee专户中的RIU，低价优先。交易获得的RIU支付trustee报酬后，余额转 入director专户。
S2基本管理制度.利益分配.6.4. 本条款按照二级决策条款4.条款修订。RIU交易由trustee按价格优先、时间优先原则撮合。
S2基本管理制度.利益分配.6.5. 本条款按照二级决策条款4.条款修订。trustee从收入的p%购买的RIU中领取报酬，竞聘者须明确报酬的计算公式。
S2基本管理制度.利益分配.7. 本条款按照二级决策条款3.条款修订。director专户由director与supervisor共同使用：
S2基本管理制度.利益分配.7.1. 本条款按照二级决策条款3.条款修订。director专户中的RIU可以是负数，最小值由预算透支限额确定。
S2基本管理制度.利益分配.7.2. 本条款按照二级决策条款3.条款修订。收入的(100-p)%转入director专户。
S2基本管理制度.利益分配.7.3. 本条款按照二级决策条款3.条款修订。按生效的admin工作计划（含预算案）从director专户转入admin专户，余额不足时后续条款的支 出暂缓。
S2基本管理制度.利益分配.7.4. 本条款按照二级决策条款3.条款修订。supervisor按supervisor工作计划（含预算案）使用director专户余额，余额不足时后续条款的 支出暂缓。
S2基本管理制度.利益分配.7.5. 本条款按照二级决策条款3.条款修订。director按director工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出 暂缓。
S2基本管理制度.利益分配.7.6. 本条款按照二级决策条款3.条款修订。deployer、director、supervisor从director专户领取报酬，director、supervisor竞聘者须明 确报酬的计算公式，deployer报酬数额为director、supervisor报酬的中位数。director专户数额不足时以应发数额为权重按比例分配，等候期间不计利息。
S2基本管理制度.利益分配.8. 本条款按照二级决策条款1.条款修订。admin专户：
S2基本管理制度.利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。
S2基本管理制度.利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。
S2基本管理制度.利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数 额不足而等候期间不计利息。
S2基本管理制度.1406条款.1. 本条款按照S2二级决策条款2.条款修订。在执行部门内，基本管理制度和劳动合同未定义的事项由admin直接指挥。
S2基本管理制度.1406条款.2. 本条款按照S2二级决策条款2.条款修订。直接指挥的方式：
  - admin填写通用工单明确事项的处理要求，并交给负责执行的成员；
  - admin制订具体规章明确事项的处理要求，并提交给director会议备案，director会议签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单 并执行。
S2基本管理制度.1406条款.3. 本条款按照S2二级决策条款2.条款修订。admin和执行人员都要向director会议归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。admin填写的通用工单归档要求是：
  - 在director会议的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向director会议归档；
  - 在director会议的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。
S2基本管理制度.1406条款.4. 本条款按照S2二级决策条款2.条款修订。director会议成员应：
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本管理制度的修订动议。
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本管理制度的修订动议，提交审议报告。
  - 在审议周期结束前对基本管理制度修订动议进行表决。
S2部门设置. 本条款按照S2二级决策条款2.条款修订。共同体设置产品部(IPU:Inner Product Unit)，负责参与JPU（Joint Product Unit）。共同体设置内务部(ISU:Inner Service Unit)，委托内务部(ISU:Inner Service Unit)管理共同体的资产（办公室、服务器及域名、人民币、内部记账单位、知识产权）。

---
readme:
条款 bfa1c02e. 自修订条款1.
为了防止deployer被架空，规定其自行定义程序上的细节。部署后根据实体地址和位置、接收人员的职务名称、服务器域名和IP地址等信息，可以修改提交方式。
S2二级决策条款2.
本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。
S2基本管理制度.
S2基本管理制度.利益分配.
S2基本管理制度.利益分配.2.
- 所有工作成果都属于资产。
S2基本管理制度.利益分配.5.
S2基本管理制度.利益分配.5.1.
- deployer无须制订工作计划和预算案。
- 部署时根据实际情况确定本条的记账方式。
S2基本管理制度.利益分配.5.2.
deployer使用资源的优先级高于director。
S2基本管理制度.利益分配.6.
S2基本管理制度.利益分配.6.3.
大部分收入还是由director使用，其中p%体现为RIU（扣除trustee报酬），其余体现为对外交易约定的资源。
S2基本管理制度.利益分配.6.5.
trustee任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
S2基本管理制度.利益分配.7.
S2基本管理制度.利益分配.7.3.
- 工作计划和预算案可以根据工作需要规定资源转入时间，滚动利用预算周期内的交易收入。
- admin使用资源的优先级高于director和supervisor。
S2基本管理制度.利益分配.7.4.
supervisor使用资源的优先级高于director。
S2基本管理制度.利益分配.7.6.
- deployer、director、supervisor的报酬优先级低于工作支出。
- director、supervisor任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
S2基本管理制度.利益分配.8.
S2基本管理制度.利益分配.8.2.
- member所包括角色范围根据实际情况界定。通常包括admin、worker，有时也包括一些外部人员、机构。
- 报酬可能包括不同种类的资源。
S2基本管理制度.利益分配.8.3.
- admin任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
S2基本管理制度.1406条款.
1406准确的定位是director会议的动议套件，可以用作其它模型的附件。 ​​​
S2基本管理制度.1406条款.2.
在使用IT系统时，可修改为admin向系统提交通用工单，并由系统通知负责执行的成员。
S2基本管理制度.1406条款.3.
- 如果出现重大失误，director会议可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
S2基本管理制度.1406条款.4.
- 时间按一月一周期安排，只是范例。可以根据基本管理制度的完善程度自行调节，从一周到一年都可以考虑。
- 基本管理制度生效后，所规定的工作事项就不再允许admin直接指挥。相应的具体规章也同时失效。
- 基本管理制度的规定，可能与通用工单规定的相同、相似、相反......

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.bfa1c02e.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 bfa1c02e</h3><hr/><p>正文:</p><p>自修订条款1. 本条款 按照自修订条款1.条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。<br/>
S2二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。<br/>
S2二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：<br/>
  - director工作计划（含预算案）<br/>
  - director工作报告<br/>
  - 审议报告<br/>
  - 任免admin<br/>
  - admin工作计划（含预算案）<br/>
  - 设立、撤销部门<br/>
  - worker劳动合同<br/>
  - 制订基本管理制度<br/>
  - 制订保密文件的脱敏版本<br/>
S2二级决策条款3. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director通过可以作出决议。<br/>
S2二级决策条款4. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director和trustee通过可以作出决议。<br/>
S2二级决策条款5. 本条款按照自修订条款1.条款修订。根据supervisor会议议事规则，经三分之二supervisor通过可以作出决议：<br/>
  - supervisor工作计划<br/>
  - supervisor工作报告<br/>
  - 审议报告<br/>
  - director任期提前结束，重新进行选举。<br/>
S2二级决策条款6. 本条款按照自修订条款1.条款修订。由trustee书面提交修订以下事项，提交时生效：<br/>
- 预算透支限额<br/>
- director任期提前结束，重新进行选举。<br/>
- supervisor任期提前结束，重新进行选举。<br/>
- 共同体的状态<br/>
S2三级决策条款1. 本条款按照S2二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：<br/>
  - admin工作计划草案<br/>
  - admin工作报告<br/>
  - 具体规章<br/>
  - worker名册（及合同）<br/>
S2三级决策条款2. 本条款按照S2二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，worker手中合同的每个RIU 报酬权重为r*(100-p)，RIU持有者持有的每个RIU权重为w*p。 <br/>
  - 如果deployer没有指定继任者又不能工作，选举新任deployer。<br/>
S2三级决策条款3. 本条款按照S2二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同 的每个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。<br/>
  - 选举director<br/>
  - 选举supervisor<br/>
S2三级决策条款4. 本条款按照S2二级决策条款4.条款修订。本条款按照<term.bfa1c02e.level1.4>修订。全体RIU持有者选举，以持有的RIU为权重。<br/>
  - 任免trustee。<br/>
职权分配1. 本条款按照S2二级决策条款4.条款修订。deployer行使以下职权：<br/>
  - 设定p%<br/>
  - 设定director席位数<br/>
  - 制定director会议议事规则<br/>
  - 设定supervisor席位数<br/>
  - 制定supervisor会议议事规则<br/>
  - 确定director和supervisor任期及选举程序<br/>
  - 确定trustee任期及任免程序<br/>
  - 任命第一届director<br/>
  - 任命第一届supervisor<br/>
  - 任命下一任deployer<br/>
  - 修改自修订条款1内容<br/>
S2基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。<br/>
S2基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本 制度不得规定。<br/>
S2基本管理制度.保密制度.3. 本条款按照二级决策条款1.条款修订。其它规章正文及执行记录默认为公开。<br/>
S2基本管理制度.利益分配.1. 利益分配原则：优先劣后次序与决策层级相反。<br/>
S2基本管理制度.利益分配.2. 每个成员设一个专户，每个专户可以容纳所有种类的资产。<br/>
S2基本管理制度.利益分配.3. 本条款按照自修订条款1.条款修订。设四个共同体专户，每个专户可以容纳所有种类的资产。分别由：deployer、trustee、director和supervisor、admin管理。<br/>
S2基本管理制度.利益分配.4. 本条款按照自修订条款1.条款修订。按照二级决策条款2.设立部门时，开设部门专户，并明确与其它专户的资源交换规则。<br/>
S2基本管理制度.利益分配.5. deployer专户：<br/>
S2基本管理制度.利益分配.5.1. 本条款按照自修订条款1.条款修订。deployer专户用于deployer工作经费，以及重构期间发生的短期支出。<br/>
S2基本管理制度.利益分配.5.2. 本条款按照二级决策条款3.条款修订。每月末将director专户余额的0.5%转入deployer专户。<br/>
S2基本管理制度.利益分配.6. 本条款按照二级决策条款4.条款修订。trustee专户：<br/>
S2基本管理制度.利益分配.6.1. 本条款按照二级决策条款4.条款修订。RIU持有者可以将RIU转入trustee专户，委托trustee卖出。<br/>
S2基本管理制度.利益分配.6.2. 本条款按照二级决策条款4.条款修订。投资者可以将其它资源转入trustee专户，委托trustee买入RIU。<br/>
S2基本管理制度.利益分配.6.3. 本条款按照二级决策条款4.条款修订。收入的p%用于购买trustee专户中的RIU，低价优先。交易获得的RIU支付trustee报酬后，余额转 入director专户。<br/>
S2基本管理制度.利益分配.6.4. 本条款按照二级决策条款4.条款修订。RIU交易由trustee按价格优先、时间优先原则撮合。<br/>
S2基本管理制度.利益分配.6.5. 本条款按照二级决策条款4.条款修订。trustee从收入的p%购买的RIU中领取报酬，竞聘者须明确报酬的计算公式。<br/>
S2基本管理制度.利益分配.7. 本条款按照二级决策条款3.条款修订。director专户由director与supervisor共同使用：<br/>
S2基本管理制度.利益分配.7.1. 本条款按照二级决策条款3.条款修订。director专户中的RIU可以是负数，最小值由预算透支限额确定。<br/>
S2基本管理制度.利益分配.7.2. 本条款按照二级决策条款3.条款修订。收入的(100-p)%转入director专户。<br/>
S2基本管理制度.利益分配.7.3. 本条款按照二级决策条款3.条款修订。按生效的admin工作计划（含预算案）从director专户转入admin专户，余额不足时后续条款的支 出暂缓。<br/>
S2基本管理制度.利益分配.7.4. 本条款按照二级决策条款3.条款修订。supervisor按supervisor工作计划（含预算案）使用director专户余额，余额不足时后续条款的 支出暂缓。<br/>
S2基本管理制度.利益分配.7.5. 本条款按照二级决策条款3.条款修订。director按director工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出 暂缓。<br/>
S2基本管理制度.利益分配.7.6. 本条款按照二级决策条款3.条款修订。deployer、director、supervisor从director专户领取报酬，director、supervisor竞聘者须明 确报酬的计算公式，deployer报酬数额为director、supervisor报酬的中位数。director专户数额不足时以应发数额为权重按比例分配，等候期间不计利息。<br/>
S2基本管理制度.利益分配.8. 本条款按照二级决策条款1.条款修订。admin专户：<br/>
S2基本管理制度.利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。<br/>
S2基本管理制度.利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。<br/>
S2基本管理制度.利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数 额不足而等候期间不计利息。<br/>
S2基本管理制度.1406条款.1. 本条款按照S2二级决策条款2.条款修订。在执行部门内，基本管理制度和劳动合同未定义的事项由admin直接指挥。<br/>
S2基本管理制度.1406条款.2. 本条款按照S2二级决策条款2.条款修订。直接指挥的方式：<br/>
  - admin填写通用工单明确事项的处理要求，并交给负责执行的成员；<br/>
  - admin制订具体规章明确事项的处理要求，并提交给director会议备案，director会议签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单 并执行。<br/>
S2基本管理制度.1406条款.3. 本条款按照S2二级决策条款2.条款修订。admin和执行人员都要向director会议归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。admin填写的通用工单归档要求是：<br/>
  - 在director会议的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向director会议归档；<br/>
  - 在director会议的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。<br/>
S2基本管理制度.1406条款.4. 本条款按照S2二级决策条款2.条款修订。director会议成员应：<br/>
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本管理制度的修订动议。<br/>
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本管理制度的修订动议，提交审议报告。<br/>
  - 在审议周期结束前对基本管理制度修订动议进行表决。<br/>
S2部门设置. 本条款按照S2二级决策条款2.条款修订。共同体设置产品部(IPU:Inner Product Unit)，负责参与JPU（Joint Product Unit）。共同体设置内务部(ISU:Inner Service Unit)，委托内务部(ISU:Inner Service Unit)管理共同体的资产（办公室、服务器及域名、人民币、内部记账单位、知识产权）。<br/>
</p><hr/><p>注释:</p><p>自修订条款1.<br/>
为了防止deployer被架空，规定其自行定义程序上的细节。部署后根据实体地址和位置、接收人员的职务名称、服务器域名和IP地址等信息，可以修改提交方式。<br/>
S2二级决策条款2.<br/>
本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。<br/>
S2基本管理制度.<br/>
S2基本管理制度.利益分配.<br/>
S2基本管理制度.利益分配.2.<br/>
- 所有工作成果都属于资产。<br/>
S2基本管理制度.利益分配.5.<br/>
S2基本管理制度.利益分配.5.1.<br/>
- deployer无须制订工作计划和预算案。<br/>
- 部署时根据实际情况确定本条的记账方式。<br/>
S2基本管理制度.利益分配.5.2.<br/>
deployer使用资源的优先级高于director。<br/>
S2基本管理制度.利益分配.6.<br/>
S2基本管理制度.利益分配.6.3.<br/>
大部分收入还是由director使用，其中p%体现为RIU（扣除trustee报酬），其余体现为对外交易约定的资源。<br/>
S2基本管理制度.利益分配.6.5.<br/>
trustee任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
S2基本管理制度.利益分配.7.<br/>
S2基本管理制度.利益分配.7.3.<br/>
- 工作计划和预算案可以根据工作需要规定资源转入时间，滚动利用预算周期内的交易收入。<br/>
- admin使用资源的优先级高于director和supervisor。<br/>
S2基本管理制度.利益分配.7.4.<br/>
supervisor使用资源的优先级高于director。<br/>
S2基本管理制度.利益分配.7.6.<br/>
- deployer、director、supervisor的报酬优先级低于工作支出。<br/>
- director、supervisor任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
S2基本管理制度.利益分配.8.<br/>
S2基本管理制度.利益分配.8.2.<br/>
- member所包括角色范围根据实际情况界定。通常包括admin、worker，有时也包括一些外部人员、机构。<br/>
- 报酬可能包括不同种类的资源。<br/>
S2基本管理制度.利益分配.8.3.<br/>
- admin任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
S2基本管理制度.1406条款.<br/>
1406准确的定位是director会议的动议套件，可以用作其它模型的附件。 ​​​<br/>
S2基本管理制度.1406条款.2.<br/>
在使用IT系统时，可修改为admin向系统提交通用工单，并由系统通知负责执行的成员。<br/>
S2基本管理制度.1406条款.3.<br/>
- 如果出现重大失误，director会议可能召开临时会议干预。所以要求及时归档。<br/>
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。<br/>
S2基本管理制度.1406条款.4.<br/>
- 时间按一月一周期安排，只是范例。可以根据基本管理制度的完善程度自行调节，从一周到一年都可以考虑。<br/>
- 基本管理制度生效后，所规定的工作事项就不再允许admin直接指挥。相应的具体规章也同时失效。<br/>
- 基本管理制度的规定，可能与通用工单规定的相同、相似、相反......<br/>
</p><hr/></body></html>
```

顺便修订了1609模型 term.f70677ff
```
diff --git "a/view/term.f70677ff.md" "b/view/term.f70677ff.md"
index 167d96b..3fea3eb 100644
--- "a/view/term.f70677ff.md"
+++ "b/view/term.f70677ff.md"
@@ -1,16 +1,5 @@
 条款 f70677ff 正文:
-自修订条款1. 本条款按照本条款修订。由deployer书面提交修订以下事项，提交时生效：
-  - p%
-  - director席位数
-  - director会议议事规则
-  - supervisor席位数
-  - supervisor会议议事规则
-  - director和supervisor任期及选举程序
-  - trustee任期及任免程序
-  - 第一届director
-  - 第一届supervisor
-  - 下一任deployer
-  - 本条款内容
+自修订条款1. 本条款按照本条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。
 二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。
 二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：
   - director工作计划（含预算案）
@@ -45,6 +34,18 @@
   - 选举supervisor
 三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照<term.f70677ff.level1.4>修订。全体RIU持有者选举，以持有的RIU为权重。
   - 任免trustee。
+职权分配1. 本条款按照二级决策条款4.条款修订。deployer行使以下职权：
+  - 设定p%
+  - 设定director席位数
+  - 制定director会议议事规则
+  - 设定supervisor席位数
+  - 制定supervisor会议议事规则
+  - 确定director和supervisor任期及选举程序
+  - 确定trustee任期及任免程序
+  - 任命第一届director
+  - 任命第一届supervisor
+  - 任命下一任deployer
+  - 修改自修订条款1内容
 基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。
 基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制度不得规定。
 基本管理制度.保密制度.3. 本条款按照二级决策条款1.条款修订。其它规章正文及执行记录默认为公开。
@@ -86,7 +87,9 @@
 
 ---
 readme:
-条款 f70677ff. 二级决策条款2.
+条款 f70677ff. 自修订条款1.
+为了防止deployer被架空，规定其自行定义程序上的细节。
+二级决策条款2.
 本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。
 基本管理制度.
 基本管理制度.利益分配.
```
---

[top](#top) | [index](#index)
<a id="20240512093000"></a>
##  9:30~10:59
COM metadata -> COM view

- term.js 增加 makeCOMview() ， node term COM id   : COM metadata → COM markdown + html  
- 修改了maketermtext() 和一些metadata中的upgradeby字段格式，主要是最后的点 .
```
D:\huangyg\git\PSMD\src>node term COM 1609
enter maketermtext:c13a43a2     upgradeby:自修订条款1.  prefix:自修订条款1.
enter maketermtext:71da4d25     upgradeby:<COM.1609.loop.1>     prefix:二级决策条款1.
enter maketermtext:40880d93     upgradeby:<COM.1609.loop.1>     prefix:二级决策条款2.
enter maketermtext:54b6949d     upgradeby:<COM.1609.loop.1>     prefix:二级决策条款3.
enter maketermtext:95eab800     upgradeby:<COM.1609.loop.1>     prefix:二级决策条款4.
enter maketermtext:0edca872     upgradeby:<COM.1609.loop.1>     prefix:二级决策条款5.
enter maketermtext:32e45dee     upgradeby:<COM.1609.loop.1>     prefix:二级决策条款6.
enter maketermtext:88e5c5f4     upgradeby:<COM.1609.level1.1>   prefix:三级决策条款1.
enter maketermtext:4e9e9c33     upgradeby:<COM.1609.level1.3>   prefix:三级决策条款2.
enter maketermtext:666776c3     upgradeby:<COM.1609.level1.3>   prefix:三级决策条款3.
enter maketermtext:efaeac70     upgradeby:<COM.1609.level1.4>   prefix:三级决策条款4.
enter maketermtext:77666f44     upgradeby:undefined     prefix:基本管理制度.
enter maketermtext:ac890987     upgradeby:undefined     prefix:基本管理制度.保密制度.
enter maketermtext:72af7dea     upgradeby:<term.ac890987.term.1>        prefix:基本管理制度.保密制度.1.
enter maketermtext:02c7d037     upgradeby:<term.ac890987.term.1>        prefix:基本管理制度.保密制度.2.
enter maketermtext:ef4cdffe     upgradeby:<term.ac890987.term.2>        prefix:基本管理制度.保密制度.3.
enter maketermtext:de47ace4     upgradeby:undefined     prefix:基本管理制度.利益分配.
enter maketermtext:c046b09d     upgradeby:undefined     prefix:基本管理制度.利益分配.1.
enter maketermtext:3638eac6     upgradeby:undefined     prefix:基本管理制度.利益分配.2.
enter maketermtext:1558e5e1     upgradeby:undefined     prefix:基本管理制度.利益分配.3.
enter maketermtext:814f76cb     upgradeby:undefined     prefix:基本管理制度.利益分配.4.
enter maketermtext:58d4c137     upgradeby:undefined     prefix:基本管理制度.利益分配.5.
enter maketermtext:c1f65b6d     upgradeby:undefined     prefix:基本管理制度.利益分配.5.1.
enter maketermtext:6568c500     upgradeby:undefined     prefix:基本管理制度.利益分配.5.2.
enter maketermtext:d8bd8aa6     upgradeby:undefined     prefix:基本管理制度.利益分配.6.
enter maketermtext:8a5d94dc     upgradeby:<term.d8bd8aa6.term.1>        prefix:基本管理制度.利益分配.6.1.
enter maketermtext:34be50e1     upgradeby:<term.d8bd8aa6.term.1>        prefix:基本管理制度.利益分配.6.2.
enter maketermtext:3176f00c     upgradeby:<term.d8bd8aa6.term.1>        prefix:基本管理制度.利益分配.6.3.
enter maketermtext:a8ca0160     upgradeby:<term.d8bd8aa6.term.1>        prefix:基本管理制度.利益分配.6.4.
enter maketermtext:2a78271e     upgradeby:<term.d8bd8aa6.term.1>        prefix:基本管理制度.利益分配.6.5.
enter maketermtext:96b99526     upgradeby:undefined     prefix:基本管理制度.利益分配.7.
enter maketermtext:6d2ca266     upgradeby:<term.96b99526.term.1>        prefix:基本管理制度.利益分配.7.1.
enter maketermtext:fb21bdf9     upgradeby:<term.96b99526.term.1>        prefix:基本管理制度.利益分配.7.2.
enter maketermtext:7f7a536f     upgradeby:<term.96b99526.term.1>        prefix:基本管理制度.利益分配.7.3.
enter maketermtext:a8d575a7     upgradeby:<term.96b99526.term.1>        prefix:基本管理制度.利益分配.7.4.
enter maketermtext:70cdd24d     upgradeby:<term.96b99526.term.1>        prefix:基本管理制度.利益分配.7.5.
enter maketermtext:41312cc4     upgradeby:<term.96b99526.term.1>        prefix:基本管理制度.利益分配.7.6.
enter maketermtext:12d14064     upgradeby:undefined     prefix:基本管理制度.利益分配.8.
enter maketermtext:af62f03b     upgradeby:<term.12d14064.term.1>        prefix:基本管理制度.利益分配.8.1.
enter maketermtext:55cc8467     upgradeby:<term.12d14064.term.1>        prefix:基本管理制度.利益分配.8.2.
enter maketermtext:e4495f38     upgradeby:<term.12d14064.term.1>        prefix:基本管理制度.利益分配.8.3.
enter maketermtext:056e71fb     upgradeby:<term.77666f44.term.2>        prefix:基本管理制度.1406条款.
enter maketermtext:48577ce8     upgradeby:<term.77666f44.term.2>        prefix:基本管理制度.1406条款.1.
enter maketermtext:7506353d     upgradeby:<term.77666f44.term.2>        prefix:基本管理制度.1406条款.2.
enter maketermtext:260ca049     upgradeby:<term.77666f44.term.2>        prefix:基本管理制度.1406条款.3.
enter maketermtext:c87ec159     upgradeby:<term.77666f44.term.2>        prefix:基本管理制度.1406条款.4.
Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
makeCOMview() > ../view/COM.1609.md文件更新，内容如下:
# 共同体模型1609 正文
## 决策条款
### 自修订条款
自修订条款1. 本条款按照本条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。
### 二级决策条款
二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。
二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：
  - director工作计划（含预算案）
  - director工作报告
  - 审议报告
  - 任免admin
  - admin工作计划（含预算案）
  - 设立、撤销部门
  - worker劳动合同
  - 制订基本管理制度
  - 制订保密文件的脱敏版本
二级决策条款3. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director通过可以作出决议。
二级决策条款4. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director和trustee通过可以作出决议。
二级决策条款5. 本条款按照自修订条款1.条款修订。根据supervisor会议议事规则，经三分之二supervisor通过可以作出决议：
  - supervisor工作计划
  - supervisor工作报告
  - 审议报告
  - director任期提前结束，重新进行选举。
二级决策条款6. 本条款按照自修订条款1.条款修订。由trustee书面提交修订以下事项，提交时生效：
- 预算透支限额
- director任期提前结束，重新进行选举。
- supervisor任期提前结束，重新进行选举。
二级决策条款7. 本条款按照自修订条款1.条款修订。 [本条款内容待定] director会议议事规则，可以根据该届director的工作习惯，选择主流议事规则之一。
二级决策条款8. 本条款按照自修订条款1.条款修订。 [本条款内容待定] supervisor会议议事规则，可以根据该届supervisor的工作习惯，选择主流议事规则之一。
### 三级决策条款
三级决策条款1. 本条款按照二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：
  - admin工作计划草案
  - admin工作报告
  - 具体规章
  - worker名册（及合同）
三级决策条款2. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，worker手中合同的每个RIU报酬 权重为r*(100-p)，RIU持有者持有的每个RIU权重为w*p。
  - 如果deployer没有指定继任者又不能工作，选举新任deployer。
三级决策条款3. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同的每 个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。
  - 选举director
  - 选举supervisor
三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照二级决策条款4修订。全体RIU持有者选举，以持有的RIU为权重。
  - 任免trustee。
### 基本管理制度
基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。
基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制 度不得规定。
基本管理制度.保密制度.3. 本条款按照二级决策条款1.条款修订。其它规章正文及执行记录默认为公开。
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
基本管理制度.利益分配.8. 本条款按照二级决策条款1.条款修订。admin专户：
基本管理制度.利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。
基本管理制度.利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。
基本管理制度.利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数额 不足而等候期间不计利息。
基本管理制度.1406条款.1. 本条款按照二级决策条款2.条款修订。在执行部门内，基本管理制度和劳动合同未定义的事项由admin直接指挥。
基本管理制度.1406条款.2. 本条款按照二级决策条款2.条款修订。直接指挥的方式：
  - admin填写通用工单明确事项的处理要求，并交给负责执行的成员；
  - admin制订具体规章明确事项的处理要求，并提交给director会议备案，director会议签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单 并执行。
基本管理制度.1406条款.3. 本条款按照二级决策条款2.条款修订。admin和执行人员都要向director会议归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。admin填写的通用工单归档要求是：
  - 在director会议的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向director会议归档；
  - 在director会议的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。
基本管理制度.1406条款.4. 本条款按照二级决策条款2.条款修订。director会议成员应：
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本管理制度的修订动议。
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本管理制度的修订动议，提交审议报告。
  - 在审议周期结束前对基本管理制度修订动议进行表决。

---
# 共同体模型1609 readme
自修订条款1. 为了防止deployer被架空，规定其自行定义程序上的细节。部署后根据实体地址和位置、接收人员的职务名称、服务器域名和IP地址等信息，可以修改提 交方式。
二级决策条款2. 本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。
三级决策条款4. 基本管理制度.利益分配.
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
基本管理制度.1406条款.
1406准确的定位是director会议的动议套件，可以用作其它模型的附件。 ​​​
基本管理制度.1406条款.2.
在使用IT系统时，可修改为admin向系统提交通用工单，并由系统通知负责执行的成员。
基本管理制度.1406条款.3.
- 如果出现重大失误，director会议可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
基本管理制度.1406条款.4.
- 时间按一月一周期安排，只是范例。可以根据基本管理制度的完善程度自行调节，从一周到一年都可以考虑。
- 基本管理制度生效后，所规定的工作事项就不再允许admin直接指挥。相应的具体规章也同时失效。
- 基本管理制度的规定，可能与通用工单规定的相同、相似、相反......

makeCOMview() > ../view/COM.1609.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 </h3><hr/><p>正文:</p><p># 共同体模型1609 正文 <br/>
## 决策条款  <br/>
### 自修订条款  <br/>
自修订条款1. 本条款按照本条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。<br/>
### 二级决策条款  <br/>
二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。<br/>
二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：<br/>
  - director工作计划（含预算案）<br/>
  - director工作报告<br/>
  - 审议报告<br/>
  - 任免admin<br/>
  - admin工作计划（含预算案）<br/>
  - 设立、撤销部门<br/>
  - worker劳动合同<br/>
  - 制订基本管理制度<br/>
  - 制订保密文件的脱敏版本<br/>
二级决策条款3. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director通过可以作出决议。<br/>
二级决策条款4. 本条款按照自修订条款1.条款修订。由deployer提出。根据director会议议事规则，经全体director和trustee通过可以作出决议。<br/>
二级决策条款5. 本条款按照自修订条款1.条款修订。根据supervisor会议议事规则，经三分之二supervisor通过可以作出决议：<br/>
  - supervisor工作计划<br/>
  - supervisor工作报告<br/>
  - 审议报告<br/>
  - director任期提前结束，重新进行选举。<br/>
二级决策条款6. 本条款按照自修订条款1.条款修订。由trustee书面提交修订以下事项，提交时生效：<br/>
- 预算透支限额<br/>
- director任期提前结束，重新进行选举。<br/>
- supervisor任期提前结束，重新进行选举。<br/>
二级决策条款7. 本条款按照自修订条款1.条款修订。 [本条款内容待定] director会议议事规则，可以根据该届director的工作习惯，选择主流议事规则之一。<br/>
二级决策条款8. 本条款按照自修订条款1.条款修订。 [本条款内容待定] supervisor会议议事规则，可以根据该届supervisor的工作习惯，选择主流议事规则之一。<br/>
### 三级决策条款  <br/>
三级决策条款1. 本条款按照二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：<br/>
  - admin工作计划草案<br/>
  - admin工作报告<br/>
  - 具体规章<br/>
  - worker名册（及合同）<br/>
三级决策条款2. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，worker手中合同的每个RIU报酬 权重为r*(100-p)，RIU持有者持有的每个RIU权重为w*p。 <br/>
  - 如果deployer没有指定继任者又不能工作，选举新任deployer。<br/>
三级决策条款3. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同的每 个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。<br/>
  - 选举director<br/>
  - 选举supervisor<br/>
三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照二级决策条款4修订。全体RIU持有者选举，以持有的RIU为权重。<br/>
  - 任免trustee。<br/>
### 基本管理制度  <br/>
基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。<br/>
基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制 度不得规定。<br/>
基本管理制度.保密制度.3. 本条款按照二级决策条款1.条款修订。其它规章正文及执行记录默认为公开。<br/>
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
基本管理制度.利益分配.8. 本条款按照二级决策条款1.条款修订。admin专户：<br/>
基本管理制度.利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。<br/>
基本管理制度.利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。<br/>
基本管理制度.利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数额 不足而等候期间不计利息。<br/>
基本管理制度.1406条款.1. 本条款按照二级决策条款2.条款修订。在执行部门内，基本管理制度和劳动合同未定义的事项由admin直接指挥。<br/>
基本管理制度.1406条款.2. 本条款按照二级决策条款2.条款修订。直接指挥的方式：<br/>
  - admin填写通用工单明确事项的处理要求，并交给负责执行的成员；<br/>
  - admin制订具体规章明确事项的处理要求，并提交给director会议备案，director会议签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单 并执行。<br/>
基本管理制度.1406条款.3. 本条款按照二级决策条款2.条款修订。admin和执行人员都要向director会议归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。admin填写的通用工单归档要求是：<br/>
  - 在director会议的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向director会议归档；<br/>
  - 在director会议的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。<br/>
基本管理制度.1406条款.4. 本条款按照二级决策条款2.条款修订。director会议成员应：<br/>
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本管理制度的修订动议。<br/>
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本管理制度的修订动议，提交审议报告。<br/>
  - 在审议周期结束前对基本管理制度修订动议进行表决。<br/>
</p><hr/><p>注释:</p><p>自修订条款1. 为了防止deployer被架空，规定其自行定义程序上的细节。部署后根据实体地址和位置、接收人员的职务名称、服务器域名和IP地址等信息，可以修改提交方式。<br/>
二级决策条款2. 本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。<br/>
三级决策条款4. 基本管理制度.利益分配.<br/>
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
基本管理制度.1406条款.<br/>
1406准确的定位是director会议的动议套件，可以用作其它模型的附件。 ​​​<br/>
基本管理制度.1406条款.2.<br/>
在使用IT系统时，可修改为admin向系统提交通用工单，并由系统通知负责执行的成员。<br/>
基本管理制度.1406条款.3.<br/>
- 如果出现重大失误，director会议可能召开临时会议干预。所以要求及时归档。<br/>
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。<br/>
基本管理制度.1406条款.4.<br/>
- 时间按一月一周期安排，只是范例。可以根据基本管理制度的完善程度自行调节，从一周到一年都可以考虑。<br/>
- 基本管理制度生效后，所规定的工作事项就不再允许admin直接指挥。相应的具体规章也同时失效。<br/>
- 基本管理制度的规定，可能与通用工单规定的相同、相似、相反......<br/>
</p><hr/></body></html>
```

- 目前upgradeby字段会覆盖所有子条款的upgradeby字段。如果只覆盖个别条款怎么实现。比如基本管理制度77666f44中只覆盖1406（056e71fb）的upgradeby。
    - 不同自条款覆盖不同的，怎么实现，可以在map去替换吗？
- 花的时间比较多，登记200分钟。下午两个30分钟时间片回到todo项。

---

[top](#top) | [index](#index)
<a id="20240512140000"></a>
## 14:00~14:29
实现todo项的多层结构

先取消，时间用来完成上午追加时间的任务。
---

[top](#top) | [index](#index)
<a id="20240512143000"></a>
## 14:30~14:59
学习AMD规范，如果适用就开发范例

先取消，时间用来完成上午追加时间的任务。
---

[top](#top) | [index](#index)
<a id="20240512160000"></a>
## 16:00~16:59
学习promise对象和async/await

- 还是这个教程好 https://zh.javascript.info/async
- 休整时间继续，睡觉前根据余下内容追加todo项。
    - '30': 继续学习promise api
      readme: |
        - https://zh.javascript.info/promise-api