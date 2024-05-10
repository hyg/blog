# 2024.05.10.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[使用wechty做一个微信机器人范例](#20240510074500)  
- 09:30	[完成1609 COM metadata](#20240510093000)  
- 14:00	[整理今年夏季使用的NRV metadata](#20240510140000)  
- 14:30	[实现自定义DRI,NRV的代码](#20240510143000)  
- 16:00	[日小结时间统计增加一列todo，累计还没有进行的todo项时间。学习数组插入数组。](#20240510160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 8855 | 4420 | 2475 |
| PSMD | 7000 | 4506 | 2494 | 705 |
| learn | 1000 | 412 | 588 | 360 |
| ego | 3000 | 2114 | 886 | 525 |
| js | 1375 | 555 | 820 | 300 |
| xuemen | 600 | 881 | -281 | 405 |
| raw | 300 | 357 | -57 | 180 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - ego的第1号事项：实现todo项的多层结构
  - learn的第2号事项：YARRRML
  - js的第3号事项：学习AMD规范，如果适用就开发范例
  - learn的第3号事项：docker

- 60分钟时间片：
  - js的第1号事项：了解call和apply
  - learn的第1号事项：github的actions,workflow,job脚本语法
  - raw的第1号事项：实现自定义DRI,NRV的代码
  - ego的第2号事项：/release/entry.html 读取 markdown和metadata 并显示。

- 90分钟时间片：
  - PSMD的第1号事项：完成1609 deploy、COD的metadata
  - PSMD的第2号事项：COM metadata -> COM view
  - xuemen的第3号事项：整理S2状态下基本管理制度的metedata
  - PSMD的第7号事项：term metadata生成按修订层级排版的COM metadata。

- 195分钟时间片：
  - xuemen的第1号事项：整理S2状态下基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第8号事项：在整理近期手稿之后，修订个人模型。

---

[top](#top) | [index](#index)
<a id="20240510074500"></a>
## 7:45~8:44
使用wechty做一个微信机器人范例

昨晚已经把xmpp收发消息跑通。长时间闲置还是会断线。
```
D:\huangyg\git\js.sample\IM>node xmpp
(node:10100) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
connecting
connecting
connect
opening
open
opening
open
opening
open
<iq type="result" id="krvegcw2lo"><bind xmlns="urn:ietf:params:xml:ns:xmpp-bind"><jid>learn@jabbim.com/520348062276946534557140265</jid></bind></iq>
online
online: learn@jabbim.com/520348062276946534557140265
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="3f2abb86-2bc2-4052-aa9f-de54af571452"><origin-id xmlns="urn:xmpp:sid:0" id="3f2abb86-2bc2-4052-aa9f-de54af571452"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><delay xmlns="urn:xmpp:delay" from="jabbim.com" stamp="2024-05-09T13:02:19.432086Z">Offline Storage</delay><body>hi</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="dfd733cb-b853-4787-a5c7-1c0a534a449b"><origin-id xmlns="urn:xmpp:sid:0" id="dfd733cb-b853-4787-a5c7-1c0a534a449b"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><delay xmlns="urn:xmpp:delay" from="jabbim.com" stamp="2024-05-09T13:03:56.375380Z">Offline Storage</delay><body>hello</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="fbb21b98-8c85-4c5d-a1da-1324803dd66b"><origin-id xmlns="urn:xmpp:sid:0" id="fbb21b98-8c85-4c5d-a1da-1324803dd66b"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><delay xmlns="urn:xmpp:delay" from="jabbim.com" stamp="2024-05-09T13:05:36.423499Z">Offline Storage</delay><body>are u online?</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="5b32e3c7-546e-4910-b2b1-945d5e1099f9"><origin-id xmlns="urn:xmpp:sid:0" id="5b32e3c7-546e-4910-b2b1-945d5e1099f9"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><delay xmlns="urn:xmpp:delay" from="jabbim.com" stamp="2024-05-09T13:09:39.463135Z">Offline Storage</delay><body>hello learn</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="ece8424c-06ab-4c03-9e5d-28f77d5ca2bc"><origin-id xmlns="urn:xmpp:sid:0" id="ece8424c-06ab-4c03-9e5d-28f77d5ca2bc"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><delay xmlns="urn:xmpp:delay" from="jabbim.com" stamp="2024-05-09T14:04:45.645481Z">Offline Storage</delay><body>hey</body></message>
<presence xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="learn@jabbim.com/520348062276946534557140265"><x xmlns="vcard-temp:x:update"/><show>chat</show><status>presence!</status></presence>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="08ce5f7a-8589-46bb-8eb8-d1db4d7afc93"><origin-id xmlns="urn:xmpp:sid:0" id="08ce5f7a-8589-46bb-8eb8-d1db4d7afc93"/><displayed xmlns="urn:xmpp:chat-markers:0" id="None"/></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="f5ae1912-4c70-450a-9910-0266c58916d5"><archived by="learn@jabbim.com" id="1715263586963539" xmlns="urn:xmpp:mam:tmp"/><stanza-id by="learn@jabbim.com" id="1715263586963539" xmlns="urn:xmpp:sid:0"/><origin-id xmlns="urn:xmpp:sid:0" id="f5ae1912-4c70-450a-9910-0266c58916d5"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><body>really?</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="bec806cb-db4a-4738-b460-ebff6c1e6395"><archived by="learn@jabbim.com" id="1715263606220666" xmlns="urn:xmpp:mam:tmp"/><stanza-id by="learn@jabbim.com" id="1715263606220666" xmlns="urn:xmpp:sid:0"/><origin-id xmlns="urn:xmpp:sid:0" id="bec806cb-db4a-4738-b460-ebff6c1e6395"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><body>ok</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="b4b6a7d9-dbe3-4c35-aadd-8ad8137ab28c"><archived by="learn@jabbim.com" id="1715263609763192" xmlns="urn:xmpp:mam:tmp"/><stanza-id by="learn@jabbim.com" id="1715263609763192" xmlns="urn:xmpp:sid:0"/><origin-id xmlns="urn:xmpp:sid:0" id="b4b6a7d9-dbe3-4c35-aadd-8ad8137ab28c"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><body>good</body></message>
<message xml:lang="en" to="learn@jabbim.com/520348062276946534557140265" from="hyg@jabbim.com/gajim.HTKRCI7J" type="chat" id="e79c99c7-aa30-4c05-9e64-eee971801556"><archived by="learn@jabbim.com" id="1715263689669350" xmlns="urn:xmpp:mam:tmp"/><stanza-id by="learn@jabbim.com" id="1715263689669350" xmlns="urn:xmpp:sid:0"/><origin-id xmlns="urn:xmpp:sid:0" id="e79c99c7-aa30-4c05-9e64-eee971801556"/><request xmlns="urn:xmpp:receipts"/><markable xmlns="urn:xmpp:chat-markers:0"/><body>fine</body></message>
```

- 建立 D:\huangyg\git\js.sample\wechaty 项目
- 需要nmp init，然后在js.sample\wechaty\package.json 中的第一层添加"type": "module",
    - (node:6632) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
- 要选用有build instance语句的范例，官网范例也有过时的。
    - SyntaxError: The requested module 'wechaty' does not provide an export named 'Wechaty'
    - https://github.com/wechaty/getting-started/issues/250
```
import { WechatyBuilder } from 'wechaty'

const wechaty = WechatyBuilder.build() // get a Wechaty instance
wechaty
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => console.log(`Message: ${message}`))
wechaty.start()
```

- 可以跑起来，获得好友发言。真正调试需要单独账号，尤其注意不要绑定银行卡。
- 执行结果：
```
D:\huangyg\git\js.sample\wechaty>node bot
(node:14588) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Scan QR Code to login: 2
https://wechaty.js.org/qrcode/https%3A%2F%2Flogin.weixin.qq.com%2Fl%2FQdq_xWamSw%3D%3D
Scan QR Code to login: 3
https://wechaty.js.org/qrcode/https%3A%2F%2Flogin.weixin.qq.com%2Fl%2FQdq_xWamSw%3D%3D
User Contact<黄勇刚> logged in
Message: Message#Unknown[🗣Contact<黄勇刚>]
Message: Message#Unknown[🗣Contact<黄勇刚>]
Message: Message#Text[🗣Contact<剑平>@👥Room<IRIS百人会>]        「北京_白清杰：我觉得小孩子是要多读读科普书。各种学科的人物传记，历史书，从小学习逻 辑学，学习怎么做问题研究，提高解决问题的能力」
- -
Message: Message#Text[🗣Contact<剑平>@👥Room<IRIS百人会>]        @煮酒论剑 [抱拳][抱拳][抱拳]
uncaughtException AssertionError [ERR_ASSERTION]: '1101' == 0
    at Object.equal (D:\huangyg\git\js.sample\wechaty\node_modules\wechat4u\lib\util\global.js:69:24)
    at D:\huangyg\git\js.sample\wechaty\node_modules\wechat4u\lib\core.js:410:24
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 2,
  details: "AssertionError [ERR_ASSERTION]: '1101' == 0\n" +
    '    at Object.equal (D:\\huangyg\\git\\js.sample\\wechaty\\node_modules\\wechat4u\\lib\\util\\global.js:69:24)\n' +
    '    at D:\\huangyg\\git\\js.sample\\wechaty\\node_modules\\wechat4u\\lib\\core.js:410:24\n' +
    '    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)'
}
08:26:50 WARN PuppetWechat4u contactRawPayload(AssertionError [ERR_ASSERTION]: 1101 == 0) wechat4u.batchGetContact() exception: undefined
```

---

[top](#top) | [index](#index)
<a id="20240510093000"></a>
##  9:30~10:59
完成1609 COM metadata

- 利益分配的1、2、都属于不可修订条款。
- term commit的时候同名临时文件覆盖了正式文件，而临时文件引用的其它临时文件已经修改过，只能手工逐条恢复。
    - 以后commit完要删除临时文件。考虑自动删除。
- 完成普通条款 term.77666f44
    - D:\huangyg\git\PSMD\data\COM.1609.yaml中加入termid: 77666f44

```
D:\huangyg\git\PSMD\src>node term term 77666f44
enter maketermtext:77666f44     prefix:
enter maketermtext:ac890987     prefix:保密制度.
enter maketermtext:72af7dea     prefix:保密制度.1.
enter maketermtext:02c7d037     prefix:保密制度.2.
enter maketermtext:ef4cdffe     prefix:保密制度.3.
enter maketermtext:de47ace4     prefix:利益分配.
enter maketermtext:c046b09d     prefix:利益分配.1.
enter maketermtext:3638eac6     prefix:利益分配.2.
enter maketermtext:1558e5e1     prefix:利益分配.3.
enter maketermtext:814f76cb     prefix:利益分配.4.
enter maketermtext:58d4c137     prefix:利益分配.5.
enter maketermtext:c1f65b6d     prefix:利益分配.5.1.
enter maketermtext:6568c500     prefix:利益分配.5.2.
enter maketermtext:d8bd8aa6     prefix:利益分配.6.
enter maketermtext:8a5d94dc     prefix:利益分配.6.1.
enter maketermtext:34be50e1     prefix:利益分配.6.2.
enter maketermtext:3176f00c     prefix:利益分配.6.3.
enter maketermtext:a8ca0160     prefix:利益分配.6.4.
enter maketermtext:2a78271e     prefix:利益分配.6.5.
enter maketermtext:96b99526     prefix:利益分配.7.
enter maketermtext:6d2ca266     prefix:利益分配.7.1.
enter maketermtext:fb21bdf9     prefix:利益分配.7.2.
enter maketermtext:7f7a536f     prefix:利益分配.7.3.
enter maketermtext:a8d575a7     prefix:利益分配.7.4.
enter maketermtext:70cdd24d     prefix:利益分配.7.5.
enter maketermtext:41312cc4     prefix:利益分配.7.6.
enter maketermtext:12d14064     prefix:利益分配.8.
enter maketermtext:af62f03b     prefix:利益分配.8.1.
enter maketermtext:55cc8467     prefix:利益分配.8.2.
enter maketermtext:e4495f38     prefix:利益分配.8.3.
../view/term.77666f44.md文件更新，内容如下:
条款 77666f44 正文:
保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。
保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制度不得规定。
保密制度.3. 本条款按照二级决策程序1.条款修订。其它规章正文及执行记录默认为公开。
利益分配.1. 利益分配原则：优先劣后次序与决策层级相反。
利益分配.2. 每个成员设一个专户，每个专户可以容纳所有种类的资产。
利益分配.3. 本条款按照自修订条款1.条款修订。设四个共同体专户，每个专户可以容纳所有种类的资产。分别由：deployer、trustee、director和supervisor、admin管理。
利益分配.4. 本条款按照自修订条款1.条款修订。按照二级决策条款2.设立部门时，开设部门专户，并明确与其它专户的资源交换规则。
利益分配.5. deployer专户：
利益分配.5.1. 本条款按照自修订条款1.条款修订。deployer专户用于deployer工作经费，以及重构期间发生的短期支出。
利益分配.5.2. 本条款按照二级决策条款3.条款修订。每月末将director专户余额的0.5%转入deployer专户。
利益分配.6. 本条款按照二级决策条款4.条款修订。trustee专户：
利益分配.6.1. 本条款按照二级决策条款4.条款修订。RIU持有者可以将RIU转入trustee专户，委托trustee卖出。
利益分配.6.2. 本条款按照二级决策条款4.条款修订。投资者可以将其它资源转入trustee专户，委托trustee买入RIU。
利益分配.6.3. 本条款按照二级决策条款4.条款修订。收入的p%用于购买trustee专户中的RIU，低价优先。交易获得的RIU支付trustee报酬后，余额转入director专户。
利益分配.6.4. 本条款按照二级决策条款4.条款修订。RIU交易由trustee按价格优先、时间优先原则撮合。
利益分配.6.5. 本条款按照二级决策条款4.条款修订。trustee从收入的p%购买的RIU中领取报酬，竞聘者须明确报酬的计算公式。
利益分配.7. 本条款按照二级决策条款3.条款修订。director专户由director与supervisor共同使用：
利益分配.7.1. 本条款按照二级决策条款3.条款修订。director专户中的RIU可以是负数，最小值由预算透支限额确定。
利益分配.7.2. 本条款按照二级决策条款3.条款修订。收入的(100-p)%转入director专户。
利益分配.7.3. 本条款按照二级决策条款3.条款修订。按生效的admin工作计划（含预算案）从director专户转入admin专户，余额不足时后续条款的支出暂缓。
利益分配.7.4. 本条款按照二级决策条款3.条款修订。supervisor按supervisor工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出暂缓。
利益分配.7.5. 本条款按照二级决策条款3.条款修订。director按director工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出暂缓。
利益分配.7.6. 本条款按照二级决策条款3.条款修订。deployer、director、supervisor从director专户领取报酬，director、supervisor竞聘者须明确报酬的计算公式，deployer报酬数额为director、supervisor报酬的中位数。director专户数额不足时以应发数额为权重按比例分配，等候期间不计利息。
利益分配.8. admin专户：
利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。
利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。
利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数额不足而等候期间不计利息。

---
readme:
条款 77666f44. 利益分配. 利益分配.2. - 所有工作成果都属于资产。
利益分配.5. 利益分配.5.1. - deployer无须制订工作计划和预算案。
- 部署时根据实际情况确定本条的记账方式。
利益分配.5.2. deployer使用资源的优先级高于director。
利益分配.6. 利益分配.6.3. 大部分收入还是由director使用，其中p%体现为RIU（扣除trustee报酬），其余体现为对外交易约定的资源。
利益分配.6.5. trustee任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
利益分配.7. 利益分配.7.3. - 工作计划和预算案可以根据工作需要规定资源转入时间，滚动利用预算周期内的交易收入。
- admin使用资源的优先级高于director和supervisor。
利益分配.7.4. supervisor使用资源的优先级高于director。
利益分配.7.6. - deployer、director、supervisor的报酬优先级低于工作支出。
- director、supervisor任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。
利益分配.8. 利益分配.8.2. - member所包括角色范围根据实际情况界定。通常包括admin、worker，有时也包括一些外部人员、机构。
- 报酬可能包括不同种类的资源。
利益分配.8.3. - admin任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.77666f44.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 77666f44</h3><hr/><p>正文:</p><p>保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。<br/>
保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制度不得规定。<br/>
保密制度.3. 本条款按照二级决策程序1.条款修订。其它规章正文及执行记录默认为公开。<br/>
利益分配.1. 利益分配原则：优先劣后次序与决策层级相反。<br/>
利益分配.2. 每个成员设一个专户，每个专户可以容纳所有种类的资产。<br/>
利益分配.3. 本条款按照自修订条款1.条款修订。设四个共同体专户，每个专户可以容纳所有种类的资产。分别由：deployer、trustee、director和supervisor、admin管理。<br/>
利益分配.4. 本条款按照自修订条款1.条款修订。按照二级决策条款2.设立部门时，开设部门专户，并明确与其它专户的资源交换规则。<br/>
利益分配.5. deployer专户：<br/>
利益分配.5.1. 本条款按照自修订条款1.条款修订。deployer专户用于deployer工作经费，以及重构期间发生的短期支出。<br/>
利益分配.5.2. 本条款按照二级决策条款3.条款修订。每月末将director专户余额的0.5%转入deployer专户。<br/>
利益分配.6. 本条款按照二级决策条款4.条款修订。trustee专户：<br/>
利益分配.6.1. 本条款按照二级决策条款4.条款修订。RIU持有者可以将RIU转入trustee专户，委托trustee卖出。<br/>
利益分配.6.2. 本条款按照二级决策条款4.条款修订。投资者可以将其它资源转入trustee专户，委托trustee买入RIU。<br/>
利益分配.6.3. 本条款按照二级决策条款4.条款修订。收入的p%用于购买trustee专户中的RIU，低价优先。交易获得的RIU支付trustee报酬后，余额转入director专户。<br/>
利益分配.6.4. 本条款按照二级决策条款4.条款修订。RIU交易由trustee按价格优先、时间优先原则撮合。<br/>
利益分配.6.5. 本条款按照二级决策条款4.条款修订。trustee从收入的p%购买的RIU中领取报酬，竞聘者须明确报酬的计算公式。<br/>
利益分配.7. 本条款按照二级决策条款3.条款修订。director专户由director与supervisor共同使用：<br/>
利益分配.7.1. 本条款按照二级决策条款3.条款修订。director专户中的RIU可以是负数，最小值由预算透支限额确定。<br/>
利益分配.7.2. 本条款按照二级决策条款3.条款修订。收入的(100-p)%转入director专户。<br/>
利益分配.7.3. 本条款按照二级决策条款3.条款修订。按生效的admin工作计划（含预算案）从director专户转入admin专户，余额不足时后续条款的支出暂缓。<br/>
利益分配.7.4. 本条款按照二级决策条款3.条款修订。supervisor按supervisor工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出暂缓。<br/>
利益分配.7.5. 本条款按照二级决策条款3.条款修订。director按director工作计划（含预算案）使用director专户余额，余额不足时后续条款的支出暂缓。<br/>
利益分配.7.6. 本条款按照二级决策条款3.条款修订。deployer、director、supervisor从director专户领取报酬，director、supervisor竞聘者须明确报酬的计算公式，deployer报酬数额为director、supervisor报酬的中位数。director专户数额不足时以应发数额为权重按比例分配，等候期间不计利息。<br/>
利益分配.8. admin专户：<br/>
利益分配.8.1. 本条款按照二级决策条款1.条款修订。admin按admin工作计划（含预算案）调用admin专户中的资源。<br/>
利益分配.8.2. 本条款按照二级决策条款1.条款修订。member的工作成果提交到admin专户，从admin专户领取报酬，报酬金额在合同中规定。<br/>
利益分配.8.3. 本条款按照二级决策条款1.条款修订。admin从admin专户领取报酬（优先级在worker之后），竞聘者须明确报酬的计算公式。本专户数额不足而等候期间不计利息。<br/>
</p><hr/><p>注释:</p><p>利益分配. 利益分配.2. - 所有工作成果都属于资产。<br/>
利益分配.5. 利益分配.5.1. - deployer无须制订工作计划和预算案。<br/>
- 部署时根据实际情况确定本条的记账方式。<br/>
利益分配.5.2. deployer使用资源的优先级高于director。<br/>
利益分配.6. 利益分配.6.3. 大部分收入还是由director使用，其中p%体现为RIU（扣除trustee报酬），其余体现为对外交易约定的资源。<br/>
利益分配.6.5. trustee任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
利益分配.7. 利益分配.7.3. - 工作计划和预算案可以根据工作需要规定资源转入时间，滚动利用预算周期内的交易收入。<br/>
- admin使用资源的优先级高于director和supervisor。<br/>
利益分配.7.4. supervisor使用资源的优先级高于director。<br/>
利益分配.7.6. - deployer、director、supervisor的报酬优先级低于工作支出。<br/>
- director、supervisor任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
利益分配.8. 利益分配.8.2. - member所包括角色范围根据实际情况界定。通常包括admin、worker，有时也包括一些外部人员、机构。<br/>
- 报酬可能包括不同种类的资源。<br/>
利益分配.8.3. - admin任期内报酬公式不变，如果情况变化可以辞职，再与其他竞聘者一起根据当时情况竞聘。<br/>
</p><hr/></body></html>
```

---

[top](#top) | [index](#index)
<a id="20240510140000"></a>
## 14:00~14:29
整理今年夏季使用的NRV metadata

```
name: 202405a
DRIs: DRIforChina2023
element:
  热量:
    amount: 1850
    unit: kcal
  蛋白质: 
    amount: 80.9
    unit: g
  脂肪:
    amount: 51.4
    unit: g
  碳水化合物:
    amount: 265.9
    unit: g
  水:
    amount: 2000
    unit: ml
```
---

[top](#top) | [index](#index)
<a id="20240510143000"></a>
## 14:30~14:59
实现自定义DRI,NRV的代码

- 在 D:\huangyg\git\raw\raw.js 增加maketable()
- 暂时够用，屏幕宽度只能显示"总量","日均","单位","NRV(%)","RNI","RNI(%)","AI","AI(%)","UL","UL(%)","PI_NCD","SPL"。

---

[top](#top) | [index](#index)
<a id="20240510160000"></a>
## 16:00~16:59
日小结时间统计增加一列todo，累计还没有进行的todo项时间。学习数组插入数组。

- 在D:\huangyg\git\ego\src\finish.js 增加 todosum(todoobj) ，修改maketomorowinfo(date) 。执行结果：
```
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 8523 | 4752 | 2475 |
| PSMD | 7000 | 4386 | 2614 | 705 |
| learn | 1000 | 412 | 588 | 360 |
| ego | 3000 | 2054 | 946 | 585 |
| js | 1375 | 495 | 880 | 240 |
| xuemen | 600 | 881 | -281 | 405 |
| raw | 300 | 265 | 35 | 180 |
| infra | 0 | 30 | -30 | 0 |
```

- 准备一下数组删除、插入的方法，为todo项的分层结构做准备。
- D:\huangyg\git\ego\src\start.js  line38
    - 删除不能用原来的filter()，可以用splice() 只要前两个参数，第二个是1.
    - 插入使用array.splice()
        - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        - 第一个参数是索引位置，第二个参数0是插入，1是原地替换。
- 很有价值的资料：https://blog.csdn.net/qq_32849999/article/details/102777206
  - ES6中引入了一种Spread操作符...,他后面接一个Iterator对象,可以整个数组拆散一次插入。
  - ES5用apply可以实现将参数用数组的方式绑定到执行的方法上面.于是,我们可以把所有需要的参数放进一个数组里面,然后用apply.
- 新建测试文件todo.yaml、todo.js

todo.yaml
```
PSMD:
  - '90': 完成1609 deploy、COD的metadata
  - '90': COM metadata -> COM view
  - '195': term + COM matedata -> deploy metadata -> deploy view
    bind:
    - '90': 实现todo项的多层结构
    - '60': /release/entry.html 读取 markdown和metadata 并显示。
    - '60': 在season metadata中实现浮动时间表，修改日计划功能。
    - '30': 整理废弃git库，包括本地和远程。
      readme: |
        参考5.3.14:00 draft
    - '60': task之间结算体系设计。
    - '30': 设计ego.mars22.com 发布内容。
    - '60': 用js代码完成日小结后的git操作。
      readme: |
        - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
        - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
    - '195': 在整理近期手稿之后，修订个人模型。
  - '30': PSMD委托合同的metadata
  - '30': 了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - '30': debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
    readme: |
      term.25c83dac.yaml的depend.text 包含 <term.2e4f11cb.term.1> 
      执行node term term 2e4f11cb
      term.25c83dac.yaml的interface:
        <term.50430bca.632214.c83dac.entity.1>: 董事会
        <term.50430bca.632214.c83dac.term.1>: 章程第八条（十）
        <term.50430bca.632214.c83dac.term.2>: 中华人民共和国公司法
  - '90': term metadata生成按修订层级排版的COM metadata。
  - '60': 设计条款的可执行机制
  - '90': 整理近期手稿。

```

todo.js
```
var fs = require('fs');
var yaml = require('js-yaml');

var todoobj = yaml.load(fs.readFileSync("todo.yaml"));
todoobj.PSMD.splice(2,1,...todoobj.PSMD[2].bind);
console.log(yaml.dump(todoobj.PSMD));
```

执行结果：
```
D:\huangyg\git\ego\src>node todo
- '90': 完成1609 deploy、COD的metadata
- '90': COM metadata -> COM view
- '90': 实现todo项的多层结构
- '60': /release/entry.html 读取 markdown和metadata 并显示。
- '60': 在season metadata中实现浮动时间表，修改日计划功能。
- '30': 整理废弃git库，包括本地和远程。
  readme: |
    参考5.3.14:00 draft
- '60': task之间结算体系设计。
- '30': 设计ego.mars22.com 发布内容。
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '195': 在整理近期手稿之后，修订个人模型。
- '30': PSMD委托合同的metadata
- '30': 了解Rules as Code (RaC)，准备在metadata中增加code字段。
- '30': debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
  readme: |
    term.25c83dac.yaml的depend.text 包含 <term.2e4f11cb.term.1>
    执行node term term 2e4f11cb
    term.25c83dac.yaml的interface:
      <term.50430bca.632214.c83dac.entity.1>: 董事会
      <term.50430bca.632214.c83dac.term.1>: 章程第八条（十）
      <term.50430bca.632214.c83dac.term.2>: 中华人民共和国公司法
- '90': term metadata生成按修订层级排版的COM metadata。
- '60': 设计条款的可执行机制
- '90': 整理近期手稿。
```

- 因为task名称、时间长度、todo项名称都是已知的，所以遍历这个task的todo项，找到位置就可以一句展开bind的后续todo项了。
- 把多层结构的todo项时间从90改为30
    - '30': 实现todo项的多层结构
