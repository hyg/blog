# 2024.07.08.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[pear sample](#20240708093000)  
- 14:00	[debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。](#20240708140000)  
- 14:30	[trello api](#20240708143000)  
- 16:00	[完成day.js中table、index等string](#20240708160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 1463 | 16237 | 3660 |
| PSMD | 7000 | 212 | 6788 | 660 |
| ego | 4000 | 487 | 3513 | 600 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 450 |
| raw | 500 | 60 | 440 | 90 |
| learn | 1500 | 489 | 1011 | 1110 |
| js | 1200 | 95 | 1105 | 750 |

---

waiting list:


- 30分钟时间片：
  - ego的第1号事项：完成day.js中index等string
  - PSMD的第6号事项：重新思考term metadata种的upgradeby，是否需要显示内容和id两种。
  - learn的第6号事项：Document-Oriented数据库
  - learn的第7号事项：列存储（Wide Column Store/Column-Family）数据库

- 60分钟时间片：
  - ego的第2号事项：相关代码整理到season.js
  - js的第2号事项：dat sample for root metadata
  - learn的第2号事项：schema in ipld
  - ego的第3号事项：使用新版day、season、waitinglist的ego.js

- 90分钟时间片：
  - js的第1号事项：peerjs sample
  - learn的第1号事项：pear api sample
  - raw的第1号事项：自动从网页提取营养成分表
  - PSMD的第2号事项：用linkml编写一套标准模型

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[pear sample]任务&body=日期: 20240708%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240708093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240708093000"></a>
##  09:30~10:59
learn: [pear sample]

- https://pears.com/
- https://docs.pears.com/guides/starting-a-pear-desktop-project
- 初始化一个新项目
```
D:\huangyg\git\js.sample\pear>pear init --yes

Pear ~ Welcome to the Internet of Peers›


 {
   "name": "pear",
   "main": "index.html",
   "type": "module",
   "pear": {
     "name": "pear",
     "type": "desktop",
     "gui": {
       "backgroundColor": "#1F2430",
       "height": 540,
       "width": 720
     }
   },
   "license": "Apache-2.0",
   "devDependencies": {
     "brittle": "^3.0.0"
   },
   "scripts": {
     "dev": "pear dev",
     "test": "brittle test/*.test.js"
   }
 }

Created:-

  * D:\huangyg\git\js.sample\pear\package.json
  * D:\huangyg\git\js.sample\pear\index.html
  * D:\huangyg\git\js.sample\pear\app.js
  * D:\huangyg\git\js.sample\pear\test\index.test.js
```
- pear dev可以打开开发环境。但其中一个窗口提示“Cannot read properties of undefined (reading 'get')”，Automatic reload效果也没有。
- Open package.json and update部分，只能该GUI字段，不能改整个pear字段。
- 在ubuntu机器可以完成教程中的dev、stage、run、seed等操作，本机测试成功。但是在windows机器用key去pear run，不成功。
    - 在windows机器，npm unistall -g pear, npm i -g pear, pear run pear://..... 依然报错。
```
x An error occured
TypeError: ipc.start is not a function
    at run (file:///C:/Users/hyg/AppData/Roaming/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/lib/run.js:58:71)
    at run (file:///C:/Users/hyg/AppData/Roaming/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/cmd/run.js:58:51)
    at Object.launch (file:///C:/Users/hyg/AppData/Roaming/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/cmd/index.js:82:20)
    at Cmd.run (file:///C:/Users/hyg/AppData/Roaming/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/cmd/index.js:51:38)
    at module.exports (file:///C:/Users/hyg/AppData/Roaming/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/cmd/index.js:79:13)
    at cli (file:///C:/Users/hyg/AppData/Roaming/pear/by-dkey/7216eeac5c879a2ca1dcff14bb8c1ad47d188a8c17b13e66f36d354ea8bd3b28/1/boot.bundle/cli.js:19:9)
```
- pear还不稳定，可以实用底层api（Holepunch ），但是不能依赖整个环境。增加todo项：
    - '90': pear api sample
      readme: |
        - https://docs.pears.com/pear-runtime/api
        - https://docs.pears.com/guides/starting-a-pear-terminal-project

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。]任务&body=日期: 20240708%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240708140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240708140000"></a>
## 14:00~14:29
PSMD: [debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。]

```
      term.25c83dac.yaml的depend.text 包含 <term.2e4f11cb.term.1> 
      执行node term term 2e4f11cb
      term.25c83dac.yaml的interface:
        <term.50430bca.632214.c83dac.entity.1>: 董事会
        <term.50430bca.632214.c83dac.term.1>: 章程第八条（十）
        <term.50430bca.632214.c83dac.term.2>: 中华人民共和国公司法
```

- 目前版本term.25c83dac.yaml的depend.text 已经没有 <term.2e4f11cb.term.1> ，添加回去之后运行node term term 2e4f11cb,term.25c83dac.yaml的interface没有变化：
```
D:\huangyg\git\PSMD\src>node term term 2e4f11cb
enter maketermtext:2e4f11cb     upgradeby:undefined     prefix:
enter maketermtext:e55c000c     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.
enter maketermtext:a540486e     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（一）.
enter maketermtext:21af48dd     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（二）.
enter maketermtext:8b839d59     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（三）.
enter maketermtext:0b305ce2     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（四）.
enter maketermtext:53548d2d     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（五）.
enter maketermtext:040463e3     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（六）.
enter maketermtext:460c6741     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（七）.
enter maketermtext:393c92a3     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（八）.
enter maketermtext:f3cc3036     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（九）.
enter maketermtext:62c421f2     upgradeby:<term.2e4f11cb.term.1>        prefix:第八条.（十）.
enter maketermtext:10009b73     upgradeby:<term.2e4f11cb.term.1>        prefix:第十四条.
enter maketermtext:25c83dac     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.
enter maketermtext:f64809f8     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（一）.
enter maketermtext:69632214     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（二）.
enter maketermtext:423005c6     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（三）.
enter maketermtext:615fc73f     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（四）.
enter maketermtext:09ead2c1     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（五）.
enter maketermtext:50430bca     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（六）.
enter maketermtext:bb0ea239     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（七）.
enter maketermtext:79f4f1e0     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（八）.
enter maketermtext:5884eea5     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（九）.
enter maketermtext:7957be41     upgradeby:<term.2e4f11cb.term.1>        prefix:第十五条.（十）.
enter maketermtext:4bbd5668     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.
enter maketermtext:3f89e98f     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（一）.
enter maketermtext:2a25389c     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（二）.
enter maketermtext:b3012036     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（三）.
enter maketermtext:f81cd0f0     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（四）.
enter maketermtext:c73b28b3     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（五）.
enter maketermtext:500e281d     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（六）.
enter maketermtext:dd706d9c     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（七）.
enter maketermtext:a2804f8b     upgradeby:<term.2e4f11cb.term.1>        prefix:第十八条.（八）.
enter maketermtext:6208f678     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.
enter maketermtext:b96e83c2     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.（一）.
enter maketermtext:99520853     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.（二）.
enter maketermtext:5fec38ed     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.（三）.
enter maketermtext:c0eb6977     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.（四）.
enter maketermtext:aa469da0     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.（五）.
enter maketermtext:f732b768     upgradeby:<term.2e4f11cb.term.1>        prefix:第二十条.（六）.
../view/term.2e4f11cb.md文件更新，内容如下:
条款 2e4f11cb 正文:
第八条. 本条款按照第八条.（十）.条款修订。股东会由全体股东组成，是公司的权力机构，行使下列职权：
第八条.（一）. 本条款按照第八条.（十）.条款修订。决定公司的经营方针和投资计划；
第八条.（二）. 本条款按照第八条.（十）.条款修订。选举和更换非由职工代表担任的董事、监事，决定有关董事、监事的报酬事项；
第八条.（三）. 本条款按照第八条.（十）.条款修订。审议批准董事会的报告；
第八条.（四）. 本条款按照第八条.（十）.条款修订。审议批准监事的报告；
第八条.（五）. 本条款按照第八条.（十）.条款修订。审议批准公司的年度财务预算方案、决算方案；
第八条.（六）. 本条款按照第八条.（十）.条款修订。审议批准公司的利润分配方案和弥补亏损的方案；
第八条.（七）. 本条款按照第八条.（十）.条款修订。对公司增加或者减少注册资本作出决议；
第八条.（八）. 本条款按照第八条.（十）.条款修订。对发行公司债券作出决议；
第八条.（九）. 本条款按照第八条.（十）.条款修订。对公司合并、分立、解散、清算或者变更公司形式作出决议；
第八条.（十）. 本条款按照第八条.（十）.条款修订。修改公司章程；
第十四条. 本条款按照第八条.（十）.条款修订。公司设董事会，成员为三人，由股东会选举产生。董事任期三年，任期届满，可连选连任。如果任期内董事会席位数发生变化，视为任期提前结束，重新进行选举。选举方法：采用累积投票制。
董事会设董事长一人，由董事会选举产生。
第十五条. 本条款按照第八条.（十）.条款修订。董事会行使下列职权：：
第十五条.（一）. 本条款按照第八条.（十）.条款修订。负责召集股东会，并向股东会报告工作；
第十五条.（二）. 本条款按照第八条.（十）.条款修订。执行股东会的决议；
第十五条.（三）. 本条款按照第八条.（十）.条款修订。审定公司的经营计划和投资方案；
第十五条.（四）. 本条款按照第八条.（十）.条款修订。制订公司的年度财务预算方案、决算方案；
第十五条.（五）. 本条款按照第八条.（十）.条款修订。制订公司的利润分配方案和弥补亏损方案；
第十五条.（六）. 本条款按照第八条.（十）.条款修订。制订公司增加或者减少注册资本以及发行公司债券的方案；
第十五条.（七）. 本条款按照第八条.（十）.条款修订。制订公司合并、分立、变更公司形式、解散的方案；
第十五条.（八）. 本条款按照第八条.（十）.条款修订。决定公司内部管理机构的设置；
第十五条.（九）. 本条款按照第八条.（十）.条款修订。决定聘任或者解聘公司经理及其报酬事项，并根据经理的提名决定聘任或者解聘公司副经理、财务负责人及其 报酬事项；
第十五条.（十）. 本条款按照第八条.（十）.条款修订。制定公司的基本管理制度；
第十八条. 本条款按照第八条.（十）.条款修订。公司设经理，由董事会决定聘任或者解聘。经理对董事会负责，行使下列职权：
第十八条.（一）. 本条款按照第八条.（十）.条款修订。主持公司的生产经营管理工作，组织实施董事会决议；
第十八条.（二）. 本条款按照第八条.（十）.条款修订。组织实施公司年度经营计划和投资方案；
第十八条.（三）. 本条款按照第八条.（十）.条款修订。拟订公司内部管理机构设置方案；
第十八条.（四）. 本条款按照第八条.（十）.条款修订。拟订公司的基本管理制度；
第十八条.（五）. 本条款按照第八条.（十）.条款修订。制定公司的基本管理制度；
第十八条.（六）. 本条款按照第八条.（十）.条款修订。提请聘任或者解聘公司副经理、财务负责人；
第十八条.（七）. 本条款按照第八条.（十）.条款修订。决定聘任或者解聘除应由董事会决定聘任或者解聘以外的负责管理人员；
第十八条.（八）. 本条款按照第八条.（十）.条款修订。董事会授予的其他职权，授权时应规定行使这些职权的方式和时限，以及相应的奖惩办法。
第十八条. 本条款按照第八条.（十）.条款修订。经理列席董事会会议。
第二十条. 本条款按照第八条.（十）.条款修订。监事行使下列职权：
第二十条.（一）. 本条款按照第八条.（十）.条款修订。检查公司财务；
第二十条.（二）. 本条款按照第八条.（十）.条款修订。对董事、高级管理人员执行公司职务的行为进行监督，对违反法律、行政法规、公司章程或者股东会决议的董 事、高级管理人员提出罢免的建议；
第二十条.（三）. 本条款按照第八条.（十）.条款修订。当董事、高级管理人员的行为损害公司的利益时，要求董事、高级管理人员予以纠正；
第二十条.（四）. 本条款按照第八条.（十）.条款修订。提议召开临时股东会会议，在董事会不履行本章程规定的召集和主持股东会会议职责时召集和主持股东会会议 ；
第二十条.（五）. 本条款按照第八条.（十）.条款修订。在S3（稳定或缩减状态）状态下：董事、监事可以调阅规章制度、数学模型的代码实现。
第二十条.（六）. 本条款按照第八条.（十）.条款修订。依照《公司法》第一百五十二条的规定，对董事、高级管理人员提起诉讼；
第二十条. 本条款按照第八条.（十）.条款修订。监事可以列席董事会会议。

---
readme:
条款 2e4f11cb. 章程是公司的顶级规章。但它的条款在修订层次上并不平等。
第十五条.
董事会是决策部门，在不同类型共同体中可能称为董事会、理事会、委员会等等。
第十五条.（四）.
注意：新公司法已取消。

---
depend:
条款 2e4f11cb.
问题 0ccddb29,影响率50% 正文:
出现以下情况之一：
- 董事会未界定执行部门工作的合规性要求。
- 董事会界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。
问题 0ccddb29 readme:
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 公司曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在公司设立阶段，就要确定是否符合资源不足，如果符合应该在设立时解决。
第十五条.
事项1,影响率50% :
测试字符串: 中华人民共和国公司法生效。
测试字符串: 第八条.（十）生效。
第十五条.（六）.
问题 cde3c3e2,影响率70% 正文:
违规收益超过违规成本。违规造成的既成事实被接受。
问题 cde3c3e2 readme:

---
together:
条款 2e4f11cb.
问题 48291d8c,影响率90% 正文:
共同体涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。
问题 48291d8c readme:
可能的原因包括：
  - 共同体内部废除该承诺，可能成为有效力的决议；
  - 共同体内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。
第十五条.
事项1,影响率90% :
测试字符串：<term.25c83dac.term.1>是条款之王。
第十五条.（六）.
事项1,影响率30% :
测试字符串：<term.50430bca.asset.2>融资成本低。

---
effect:
条款 2e4f11cb.
问题 cde3c3e2,有效率60% 正文:
违规收益超过违规成本。违规造成的既成事实被接受。
问题 cde3c3e2 readme:
第十五条.
问题 cde3c3e2,有效率50% 正文:
违规收益超过违规成本。违规造成的既成事实被接受。
问题 cde3c3e2 readme:
第十五条.（六）.
事项1,有效率40% :
测试字符串: <term.50430bca.asset.1>不足。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.2e4f11cb.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 2e4f11cb</h3><hr/><p>正文:</p><p>第八条. 本条款按照第八条.（十）.条款修订。股东会由全体股东组成，是公司的权力机构，行使下列职权：<br/>
第八条.（一）. 本条款按照第八条.（十）.条款修订。决定公司的经营方针和投资计划；<br/>
第八条.（二）. 本条款按照第八条.（十）.条款修订。选举和更换非由职工代表担任的董事、监事，决定有关董事、监事的报酬事项；<br/>
第八条.（三）. 本条款按照第八条.（十）.条款修订。审议批准董事会的报告；<br/>
第八条.（四）. 本条款按照第八条.（十）.条款修订。审议批准监事的报告；<br/>
第八条.（五）. 本条款按照第八条.（十）.条款修订。审议批准公司的年度财务预算方案、决算方案；<br/>
第八条.（六）. 本条款按照第八条.（十）.条款修订。审议批准公司的利润分配方案和弥补亏损的方案；<br/>
第八条.（七）. 本条款按照第八条.（十）.条款修订。对公司增加或者减少注册资本作出决议；<br/>
第八条.（八）. 本条款按照第八条.（十）.条款修订。对发行公司债券作出决议；<br/>
第八条.（九）. 本条款按照第八条.（十）.条款修订。对公司合并、分立、解散、清算或者变更公司形式作出决议；<br/>
第八条.（十）. 本条款按照第八条.（十）.条款修订。修改公司章程；<br/>
第十四条. 本条款按照第八条.（十）.条款修订。公司设董事会，成员为三人，由股东会选举产生。董事任期三年，任期届满，可连选连任。如果任期内董事会席位数发生变化，视为任期提前结束，重新进行选举。选举方法：采用累积投票制。<br/>
董事会设董事长一人，由董事会选举产生。<br/>
第十五条. 本条款按照第八条.（十）.条款修订。董事会行使下列职权：：<br/>
第十五条.（一）. 本条款按照第八条.（十）.条款修订。负责召集股东会，并向股东会报告工作；<br/>
第十五条.（二）. 本条款按照第八条.（十）.条款修订。执行股东会的决议；<br/>
第十五条.（三）. 本条款按照第八条.（十）.条款修订。审定公司的经营计划和投资方案；<br/>
第十五条.（四）. 本条款按照第八条.（十）.条款修订。制订公司的年度财务预算方案、决算方案；<br/>
第十五条.（五）. 本条款按照第八条.（十）.条款修订。制订公司的利润分配方案和弥补亏损方案；<br/>
第十五条.（六）. 本条款按照第八条.（十）.条款修订。制订公司增加或者减少注册资本以及发行公司债券的方案；<br/>
第十五条.（七）. 本条款按照第八条.（十）.条款修订。制订公司合并、分立、变更公司形式、解散的方案；<br/>
第十五条.（八）. 本条款按照第八条.（十）.条款修订。决定公司内部管理机构的设置；<br/>
第十五条.（九）. 本条款按照第八条.（十）.条款修订。决定聘任或者解聘公司经理及其报酬事项，并根据经理的提名决定聘任或者解聘公司副经理、财务负责人及其 报酬事项；<br/>
第十五条.（十）. 本条款按照第八条.（十）.条款修订。制定公司的基本管理制度；<br/>
第十八条. 本条款按照第八条.（十）.条款修订。公司设经理，由董事会决定聘任或者解聘。经理对董事会负责，行使下列职权：<br/>
第十八条.（一）. 本条款按照第八条.（十）.条款修订。主持公司的生产经营管理工作，组织实施董事会决议；<br/>
第十八条.（二）. 本条款按照第八条.（十）.条款修订。组织实施公司年度经营计划和投资方案；<br/>
第十八条.（三）. 本条款按照第八条.（十）.条款修订。拟订公司内部管理机构设置方案；<br/>
第十八条.（四）. 本条款按照第八条.（十）.条款修订。拟订公司的基本管理制度；<br/>
第十八条.（五）. 本条款按照第八条.（十）.条款修订。制定公司的基本管理制度；<br/>
第十八条.（六）. 本条款按照第八条.（十）.条款修订。提请聘任或者解聘公司副经理、财务负责人；<br/>
第十八条.（七）. 本条款按照第八条.（十）.条款修订。决定聘任或者解聘除应由董事会决定聘任或者解聘以外的负责管理人员；<br/>
第十八条.（八）. 本条款按照第八条.（十）.条款修订。董事会授予的其他职权，授权时应规定行使这些职权的方式和时限，以及相应的奖惩办法。<br/>
第十八条. 本条款按照第八条.（十）.条款修订。经理列席董事会会议。<br/>
第二十条. 本条款按照第八条.（十）.条款修订。监事行使下列职权：<br/>
第二十条.（一）. 本条款按照第八条.（十）.条款修订。检查公司财务；<br/>
第二十条.（二）. 本条款按照第八条.（十）.条款修订。对董事、高级管理人员执行公司职务的行为进行监督，对违反法律、行政法规、公司章程或者股东会决议的董 事、高级管理人员提出罢免的建议；<br/>
第二十条.（三）. 本条款按照第八条.（十）.条款修订。当董事、高级管理人员的行为损害公司的利益时，要求董事、高级管理人员予以纠正；<br/>
第二十条.（四）. 本条款按照第八条.（十）.条款修订。提议召开临时股东会会议，在董事会不履行本章程规定的召集和主持股东会会议职责时召集和主持股东会会议 ；<br/>
第二十条.（五）. 本条款按照第八条.（十）.条款修订。在S3（稳定或缩减状态）状态下：董事、监事可以调阅规章制度、数学模型的代码实现。<br/>
第二十条.（六）. 本条款按照第八条.（十）.条款修订。依照《公司法》第一百五十二条的规定，对董事、高级管理人员提起诉讼； <br/>
第二十条. 本条款按照第八条.（十）.条款修订。监事可以列席董事会会议。<br/>
</p><hr/><p>注释:</p><p>章程是公司的顶级规章。但它的条款在修订层次上并不平等。<br/>
第十五条.<br/>
董事会是决策部门，在不同类型共同体中可能称为董事会、理事会、委员会等等。<br/>
第十五条.（四）.<br/>
注意：新公司法已取消。<br/>
</p><hr/><p>前提:</p><p>问题 0ccddb29,影响率50% 正文:  <br/>
出现以下情况之一：<br/>
- 董事会未界定执行部门工作的合规性要求。<br/>
- 董事会界定了执行部门工作的合规性要求。<br/>
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。<br/>
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。<br/>
问题 0ccddb29 readme:<br/>
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。<br/>
- 公司曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。<br/>
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在公司设立阶段，就要确定是否符合资源不足，如果符合应该在设立时解决。<br/>
第十五条.<br/>
事项1,影响率50% :<br/>
测试字符串: 中华人民共和国公司法生效。<br/>
测试字符串: 第八条.（十）生效。<br/>
第十五条.（六）.<br/>
问题 cde3c3e2,影响率70% 正文:  <br/>
违规收益超过违规成本。违规造成的既成事实被接受。<br/>
问题 cde3c3e2 readme:<br/>
</p><hr/><p>同步解决:</p><p>问题 48291d8c,影响率90% 正文:  <br/>
共同体涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。<br/>
问题 48291d8c readme:<br/>
可能的原因包括：<br/>
  - 共同体内部废除该承诺，可能成为有效力的决议；<br/>
  - 共同体内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。<br/>
第十五条.<br/>
事项1,影响率90% :<br/>
测试字符串：<term.25c83dac.term.1>是条款之王。<br/>
第十五条.（六）.<br/>
事项1,影响率30% :<br/>
测试字符串：<term.50430bca.asset.2>融资成本低。<br/>
</p><hr/><p>效果:</p><p>问题 48291d8c,影响率90% 正文:  <br/>
共同体涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。<br/>
问题 48291d8c readme:<br/>
可能的原因包括：<br/>
  - 共同体内部废除该承诺，可能成为有效力的决议；<br/>
  - 共同体内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。<br/>
第十五条.<br/>
事项1,影响率90% :<br/>
测试字符串：<term.25c83dac.term.1>是条款之王。<br/>
第十五条.（六）.<br/>
事项1,影响率30% :<br/>
测试字符串：<term.50430bca.asset.2>融资成本低。<br/>
</p><hr/></body></html>
```
- term.js中没有“[“interface”] =”、“.interface =”，“interface[”有9处都在赋值号右侧。
- node term term 25c83dac后yaml文件也没有变化。
```
D:\huangyg\git\PSMD\src>node term term 25c83dac
enter maketermtext:25c83dac     upgradeby:undefined     prefix:
enter maketermtext:f64809f8     upgradeby:<term.25c83dac.term.1>        prefix:（一）.
enter maketermtext:69632214     upgradeby:<term.25c83dac.term.1>        prefix:（二）.
enter maketermtext:423005c6     upgradeby:<term.25c83dac.term.1>        prefix:（三）.
enter maketermtext:615fc73f     upgradeby:<term.25c83dac.term.1>        prefix:（四）.
enter maketermtext:09ead2c1     upgradeby:<term.25c83dac.term.1>        prefix:（五）.
enter maketermtext:50430bca     upgradeby:<term.25c83dac.term.1>        prefix:（六）.
enter maketermtext:bb0ea239     upgradeby:<term.25c83dac.term.1>        prefix:（七）.
enter maketermtext:79f4f1e0     upgradeby:<term.25c83dac.term.1>        prefix:（八）.
enter maketermtext:5884eea5     upgradeby:<term.25c83dac.term.1>        prefix:（九）.
enter maketermtext:7957be41     upgradeby:<term.25c83dac.term.1>        prefix:（十）.
../view/term.25c83dac.md文件更新，内容如下:
条款 25c83dac 正文:
 本条款按照章程第八条（十）.条款修订。董事会行使下列职权：：
（一）. 本条款按照章程第八条（十）.条款修订。负责召集股东会，并向股东会报告工作；
（二）. 本条款按照章程第八条（十）.条款修订。执行股东会的决议；
（三）. 本条款按照章程第八条（十）.条款修订。审定公司的经营计划和投资方案；
（四）. 本条款按照章程第八条（十）.条款修订。制订公司的年度财务预算方案、决算方案；
（五）. 本条款按照章程第八条（十）.条款修订。制订公司的利润分配方案和弥补亏损方案；
（六）. 本条款按照章程第八条（十）.条款修订。制订公司增加或者减少注册资本以及发行公司债券的方案；
（七）. 本条款按照章程第八条（十）.条款修订。制订公司合并、分立、变更公司形式、解散的方案；
（八）. 本条款按照章程第八条（十）.条款修订。决定公司内部管理机构的设置；
（九）. 本条款按照章程第八条（十）.条款修订。决定聘任或者解聘公司经理及其报酬事项，并根据经理的提名决定聘任或者解聘公司副经理、财务负责人及其报酬事 项；
（十）. 本条款按照章程第八条（十）.条款修订。制定公司的基本管理制度；

---
readme:
条款 25c83dac. 董事会是决策部门，在不同类型共同体中可能称为董事会、理事会、委员会等等。
（四）.
注意：新公司法已取消。

---
depend:
条款 25c83dac.
事项1,影响率50% :
测试字符串: 中华人民共和国公司法生效。
测试字符串: <term.2e4f11cb.term.1>生效。
（六）.
问题 cde3c3e2,影响率70% 正文:
违规收益超过违规成本。违规造成的既成事实被接受。
问题 cde3c3e2 readme:

---
together:
条款 25c83dac.
事项1,影响率90% :
测试字符串：<term.25c83dac.term.1>是条款之王。
（六）.
事项1,影响率30% :
测试字符串：<term.50430bca.asset.2>融资成本低。

---
effect:
条款 25c83dac.
问题 cde3c3e2,有效率50% 正文:
违规收益超过违规成本。违规造成的既成事实被接受。
问题 cde3c3e2 readme:
（六）.
事项1,有效率40% :
测试字符串: <term.50430bca.asset.1>不足。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.25c83dac.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 25c83dac</h3><hr/><p>正文:</p><p> 本条款按照章程第八 条（十）.条款修订。董事会行使下列职权：：<br/>
（一）. 本条款按照章程第八条（十）.条款修订。负责召集股东会，并向股东会报告工作；<br/>
（二）. 本条款按照章程第八条（十）.条款修订。执行股东会的决议；<br/>
（三）. 本条款按照章程第八条（十）.条款修订。审定公司的经营计划和投资方案；<br/>
（四）. 本条款按照章程第八条（十）.条款修订。制订公司的年度财务预算方案、决算方案；<br/>
（五）. 本条款按照章程第八条（十）.条款修订。制订公司的利润分配方案和弥补亏损方案；<br/>
（六）. 本条款按照章程第八条（十）.条款修订。制订公司增加或者减少注册资本以及发行公司债券的方案；<br/>
（七）. 本条款按照章程第八条（十）.条款修订。制订公司合并、分立、变更公司形式、解散的方案；<br/>
（八）. 本条款按照章程第八条（十）.条款修订。决定公司内部管理机构的设置；<br/>
（九）. 本条款按照章程第八条（十）.条款修订。决定聘任或者解聘公司经理及其报酬事项，并根据经理的提名决定聘任或者解聘公司副经理、财务负责人及其报酬事 项；<br/>
（十）. 本条款按照章程第八条（十）.条款修订。制定公司的基本管理制度；<br/>
</p><hr/><p>注释:</p><p>董事会是决策部门，在不同类型共同体中可能称为董事会、理事会、委员会等等。<br/>
（四）.<br/>
注意：新公司法已取消。<br/>
</p><hr/><p>前提:</p><p>事项1,影响率50% :<br/>
测试字符串: 中华人民共和国公司法生效。<br/>
测试字符串: <term.2e4f11cb.term.1>生效。<br/>
（六）.<br/>
问题 cde3c3e2,影响率70% 正文:  <br/>
违规收益超过违规成本。违规造成的既成事实被接受。<br/>
问题 cde3c3e2 readme:<br/>
</p><hr/><p>同步解决:</p><p>事项1,影响率90% :<br/>
测试字符串：<term.25c83dac.term.1>是条款之王。<br/>
（六）.<br/>
事项1,影响率30% :<br/>
测试字符串：<term.50430bca.asset.2>融资成本低。<br/>
</p><hr/><p>效果:</p><p>事项1,影响率90% :<br/>
测试字符串：<term.25c83dac.term.1>是条款之王。<br/>
（六）.<br/>
事项1,影响率30% :<br/>
测试字符串：<term.50430bca.asset.2>融资成本低。<br/>
</p><hr/></body></html>
```
- D:\huangyg\git\PSMD\data\term.2e4f11cb.yaml的item字段中包含：
```
  - localid: 第十五条
    upgradeby: <term.2e4f11cb.term.1>
    termid: 25c83dac
```
- 在maketermview()进入maketermtext()递归时，D:\huangyg\git\PSMD\data\term.25c83dac.yaml中的depend.text字段中的<term.2e4f11cb.term.1>被按照D:\huangyg\git\PSMD\data\term.2e4f11cb.yaml的interface字段替换：“测试字符串: <term.2e4f11cb.term.1>生效。”->“测试字符串: 第八条.（十）生效。”，随treedepend返回。
- 目前版本代码没能重现bug。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[trello api]任务&body=日期: 20240708%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240708143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240708143000"></a>
## 14:30~14:59
learn: [trello api]

- https://developer.atlassian.com/cloud/trello/rest/
- https://www.npmjs.com/package/trello
    - https://trello.com/app-key
    - 创建power-up时会看到API key和秘密（估计是security），然后点击API key右侧的"...创建信令"
        - https://trello.com/1/authorize?expiration=never&scope=read,write,account&response_type=token&key=xxx
        - 授权后看到“您已通过以下信令授予对 Trello 账号的访问权限：”，应该是token。
        - API key针对powerup，token针对user。
    - npm install trello
    - 取idList：
        - 打开一张卡片，滚动到底端“共享”，导出为json，搜索idList。
        - 或者用REST方式拿到看板下所有list的id：https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-lists-get
        - 使用addcard api插入一张新卡片，执行成功：
```
    D:\huangyg\git\js.sample\trello>node learntrello
Added card: {
  id: '668b8f16db80d2b6ac9849eb',
  badges: {
    attachmentsByType: { trello: [Object] },
    externalSource: null,
    location: false,
    votes: 0,
    viewingMemberVoted: false,
    subscribed: false,
    attachments: 0,
    fogbugz: '',
    checkItems: 0,
    checkItemsChecked: 0,
    checkItemsEarliestDue: null,
    comments: 0,
    description: true,
    due: null,
    dueComplete: false,
    lastUpdatedByAi: false,
    start: null
  },
  checkItemStates: [],
  closed: false,
  dueComplete: false,
  dateLastActivity: '2024-07-08T07:02:46.444Z',
  desc: 'readme: |\n' +
    '- https://docs.pears.com/pear-runtime/api\n' +
    '- https://docs.pears.com/guides/starting-a-pear-terminal-project',
  descData: { emoji: {} },
  due: null,
  dueReminder: null,
  email: null,
  idBoard: '65f4d7a7399adfcdc2cff677',
  idChecklists: [],
  idList: '65f4d7a8fd2c16c083463de8',
  idMembers: [],
  idMembersVoted: [],
  idShort: 4,
  idAttachmentCover: null,
  labels: [],
  idLabels: [],
  manualCoverAttachment: false,
  name: 'pear api sample',
  pos: 16386,
  shortLink: 'fWKhQhRE',
  shortUrl: 'https://trello.com/c/fWKhQhRE',
  start: null,
  subscribed: false,
  url: 'https://trello.com/c/fWKhQhRE/4-pear-api-sample',
  cover: {
    idAttachment: null,
    color: null,
    idUploadedBackground: null,
    size: 'normal',
    brightness: 'dark',
    idPlugin: null
  },
  isTemplate: false,
  cardRole: null,
  attachments: [],
  stickers: [],
  limits: {}
}
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[完成day.js中table、index等string]任务&body=日期: 20240708%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240708160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240708160000"></a>
## 16:00~16:59
ego: [完成day.js中table、index等string]

- 整理D:\huangyg\git\ego\src\day.js：修改log()的参数，重新把%s加回去，避免逗号引起空格。
- maketable()

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | :---: | --- |
| 06:37~06:51 | 15 | 休整 |  |
| 06:52~07:51 | 60 | 备餐、运动 |  |
| 07:52~08:36 | 45 | 早餐 |  |
| 08:37~09:21 | 45 | 会议、自习 |  |
| 09:22~09:28 | 7 | 休整 |  |
| 09:30~10:59 | 90 | 静默工作 | learn:pear api sample [在线](http://simp.ly/p/j1SspP) [离线](../../draft/2024/07/20240708093000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[learn:pear api sample]任务&body=日期: 20240708%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240708093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | PSMD:重新思考term metadata种的upgradeby，是否需要显示内容和id两种。 [在线](http://simp.ly/p/8t3vlk) [离线](../../draft/2024/07/20240708140000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[PSMD:重新思考term metadata种的upgradeby，是否需要显示内容和id两种。]任务&body=日期: 20240708%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240708140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 14:30~14:59 | 30 | 静默工作 | learn:Document-Oriented数据库 [在线](http://simp.ly/p/5k9gJy) [离线](../../draft/2024/07/20240708143000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[learn:Document-Oriented数据库]任务&body=日期: 20240708%0D%0A序号: 8%0D%0A手稿:../../draft/2024/07/20240708143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 15:00~15:59 | 60 | 休整 |  |
| 16:00~16:59 | 60 | 静默工作 | ego:相关代码整理到season.js [在线](http://simp.ly/p/4QDThK) [离线](../../draft/2024/07/20240708160000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.07.08.[ego:相关代码整理到season.js]任务&body=日期: 20240708%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240708160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

```
✔ get day metadata file name (1.9585ms)
✔ get wake time (3.477ms)
✔ make day object (13.8945ms)
✔ make day table (5.4112ms)
✔ get season metadata file name (1.777ms)
✔ make meta file id (1.6236ms)
✔ get today str (0.8415ms)
✔ get time from str (0.175ms)
✔ make waitinglist (7.6095ms)
ℹ tests 9
ℹ suites 0
ℹ pass 9
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 195.0857
```

- 只完成了table，index还要追加todo项：
    - '30': 完成day.js中index等string
