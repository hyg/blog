# 2024.05.03.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。



<a id="index"></a>
- 07:45	[term metadata的upgradeby字段的内容写入term view](#20240503074500)  
- 09:30	[自动把旧格式转化为新格式](#20240503093000)  
- 14:00	[整理废弃git库。](#20240503140000)  
- 14:30	[学习正则表达式RegExp](#20240503143000)  
- 16:00	[Jade Language生成html view](#20240503160000)  

---
season stat:

| task | alloc | sold | hold |
| --- | --- | --- | --- |
| total | 13275 | 5445 | 7830 |
| PSMD | 7000 | 3028 | 3972 |
| learn | 1000 | 222 | 778 |
| ego | 3000 | 1731 | 1269 |
| js | 1375 | 229 | 1146 |
| xuemen | 600 | 90 | 510 |
| raw | 300 | 115 | 185 |
| infra | 0 | 30 | -30 |

---

waiting list:


- 30分钟时间片：
  - raw的第1号事项：debug-灰枣按"个"作为单位被算出很高热量。
  - js的第2号事项：async
  - raw的第2号事项：设计DRI metadata
  - PSMD的第3号事项：生成入门目录涉及的所有view，调整措池准备试用

- 60分钟时间片：
  - PSMD的第1号事项：term metadata的depend,together,effect等字段的内容写入term view
  - ego的第1号事项：github + codeberg page 范例
  - js的第1号事项：学习测试方法和工具
  - learn的第1号事项：nosql

- 90分钟时间片：
  - PSMD的第2号事项：完成psmd\src\conver.js中的termsertoterm().
  - learn的第2号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - PSMD的第8号事项：整理近期手稿。

- 195分钟时间片：
  - xuemen的第2号事项：xuemen COD metadata
  - ego的第4号事项：在整理近期手稿之后，修订个人模型。
  - PSMD的第6号事项：term + COM matedata -> deploy metadata -> deploy view

---

[top](#top) | [index](#index)
<a id="20240503074500"></a>
## 7:45~8:44
term metadata的upgradeby字段的内容写入term view

- upgradeby的语法：
    - 如果是按照i本term内的item修订，就写localid：<term.xxxx.localid.i> -> “本条款按照i条款修订”
        - 如果i是本条款的localid -> ”本条款按照本条款修订“
    - 如果是按照外部条款修订，就写term placeholder：<term.xxxx.term.x>,然后按规则由本term的interface字段或上级term的item.map字段替换。
    - 上级定义覆盖下级定义：如果上级term定义了一个item的修订权，这个item的内部定义就一律以上级为准。包括上级的localid或者term placeholder。
        - 能否在上级的item.map中替换下级的<term.xxxx.localid.x>？技术上可行，有需求吗？
    - 进一步思考：仅仅修订权定义不同，是否要另建一套term才能表达。抑或是条文和修订权分别定义。


只完成了term的upgradeby，执行结果：
```
D:\huangyg\git\PSMD\src>node term term 01e1c775
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照本条款修订。
23f76740>upgradestr:本条款按照本条款修订。
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照1.条款修订。
bafdd0aa>upgradestr:本条款按照1.条款修订。
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照1.条款修订。
988ea839>upgradestr:本条款按照1.条款修订。
../view/term.01e1c775.md文件更新，内容如下:
条款 01e1c775 正文:
1. 本条款按照本条款修订。由deployer书面提交即生效。
2. 本条款按照1.条款修订。p=20，p%=20%。
3. 本条款按照1.条款修订。由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

---
条款 01e1c775 readme:
本条款是模型1609利益分配的核心条款。
1. 自修订条款是权力分配中的顶级条款。
2. 本条款设置了参数p的初始值。
3. 本条款是权力分配中的二级条款。

../view/term.01e1c775.html文件更新，内容如下:
﻿<!DOCTYPE html>
<html lang="zh-cn">

<head>
    <meta charset="UTF-8">
    <script>



    </script>
</head>

<body>
    <hr />
    <h3>条款01e1c775</h3>
    <br />
    <hr />
    正文:
    <br />
    1. 本条款按照本条款修订。由deployer书面提交即生效。<br/>
2. 本条款按照1.条款修订。p=20，p%=20%。<br/>
3. 本条款按照1.条款修订。由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>

    <br />
    <hr />

    readme:
    <br />
    本条款是模型1609利益分配的核心条款。<br/>
1. 自修订条款是权力分配中的顶级条款。<br/>
2. 本条款设置了参数p的初始值。<br/>
3. 本条款是权力分配中的二级条款。<br/>

    <hr />

</body>

</html>
```

把余下工作写回season metadata：
- "60": term metadata的depend,together,effect等字段的内容写入term view
---

[top](#top) | [index](#index)
<a id="20240503093000"></a>
##  9:30~10:59
自动把旧格式转化为新格式

- old term -> new term
    - interface格式替换，所有placeholder替换。
    - text降到item下,readme保持在顶级。

执行结果：
```
D:\huangyg\git\PSMD\src>node conver
enter termtoterm(), term id: 01e1c775
it is a new version term metadata.
enter termtoterm(), term id: 064129fa
it has a text field. move to item level.
文件term.064129fa.yaml已经更新，内容：
name: 制定规则-4
id: 064129fa
interface:
  <term.064129fa.term.1>: 分支隔离规则
item:
  - localid: ''
    text: |
      <term.064129fa.term.1>适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。

enter termtoterm(), term id: 0ccddb29
it has a text field. move to item level.
文件term.0ccddb29.yaml已经更新，内容：
name: 执行部门陷入割据
id: 0ccddb29
interface:
  <term.0ccddb29.entity.1>: 共同体
  <term.0ccddb29.entity.2>: 下达指令者
  <term.0ccddb29.entity.3>: 决策部门
  <term.0ccddb29.entity.4>: 执行部门
  <term.0ccddb29.asset.1>: 工单
  <term.0ccddb29.asset.2>: 日志
  <term.0ccddb29.term.1>: 资源不足
readme: |
  - <term.0ccddb29.entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
  - <term.0ccddb29.entity.1>曾经对<term.0ccddb29.entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
  - 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<term.0ccddb29.entity.1>设立阶段，就要确定是否符合<term.0ccddb29.term.1>，如果符合应该在设立时解决。
item:
  - localid: ''
    text: |
      出现以下情况之一：
      - <term.0ccddb29.entity.3>未界定<term.0ccddb29.entity.4>工作的合规性要求。
      - <term.0ccddb29.entity.3>界定了<term.0ccddb29.entity.4>工作的合规性要求。
        - <term.0ccddb29.entity.4>成员对指令不进行合规检查，即使不合规也执行。
        - <term.0ccddb29.entity.4>成员及<term.0ccddb29.entity.2>未按要求填写和提交表单，比如<term.0ccddb29.asset.1>、<term.0ccddb29.asset.2>。

enter termtoterm(), term id: 1
it is a new version term metadata.
enter termtoterm(), term id: 177700d4
it has a text field. move to item level.
文件term.177700d4.yaml已经更新，内容：
name: 集体决策
id: 177700d4
interface:
  <term.177700d4.entity.1>: director
readme: ''
effect: ''
item:
  - localid: ''
    text: |
      由<term.177700d4.entity.1>表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

enter termtoterm(), term id: 1c3f8b06
no interface field here.
it has a text field. move to item level.
文件term.1c3f8b06.yaml已经更新，内容：
name: 分支隔离规则-1
id: 1c3f8b06
readme: |
  - 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。
    - 现状常常被特殊化。
  - 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。
item:
  - localid: ''
    text: |
      对相同事项的不同处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。

enter termtoterm(), term id: 2
it is a new version term metadata.
enter termtoterm(), term id: 23f76740
it is a new version term metadata.
enter termtoterm(), term id: 259076a4
it has a text field. move to item level.
文件term.259076a4.yaml已经更新，内容：
name: 符合某条件3
id: 259076a4
interface:
  <term.259076a4.term.1>: 容器规则
item:
  - localid: ''
    text: |
      涉事各方签署 <term.259076a4.term.1>，承诺遵守该条件，将生效、执行的记录作为补充信息。

enter termtoterm(), term id: 260ca049
it has a text field. move to item level.
文件term.260ca049.yaml已经更新，内容：
name: 直接指挥的归档
id: 260ca049
interface:
  <term.260ca049.entity.1>: 经理
  <term.260ca049.entity.2>: 执行部门
  <term.260ca049.entity.3>: 决策部门
  <term.260ca049.asset.1>: 通用工单
readme: |
  - 如果出现重大失误，<term.260ca049.entity.3>可能召开临时会议干预。所以要求及时归档。
  - 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
item:
  - localid: ''
    text: |
      <term.260ca049.entity.1>和执行人员都要向<term.260ca049.entity.3>归档<term.260ca049.asset.1>。执行人员应在收到或自行填写<term.260ca049.asset.1>24小时内归档。<term.260ca049.entity.1>填写的<term.260ca049.asset.1>归档要求是：
        - 在<term.260ca049.entity.3>的一个审议周期内，每一事项的前3份<term.260ca049.asset.1>，应在出具24小时内向<term.260ca049.entity.3>归档；
        - 在<term.260ca049.entity.3>的一个审议周期内，同一事项的第4份<term.260ca049.asset.1>起，可以汇总后在审议周期结束前一并归档。

enter termtoterm(), term id: 2e758794
it has a text field. move to item level.
文件term.2e758794.yaml已经更新，内容：
name: 保密规则-2
id: '2e758794'
interface:
  <term.2e758794.term.1>: PS标准
readme: |
  - 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。
    - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。
  - 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。
item:
  - localid: ''
    text: |
      按<term.2e758794.term.1>上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行规定，保密制度不得改变。

enter termtoterm(), term id: 3
it is a new version term metadata.
enter termtoterm(), term id: 33523fe1
no interface field here.
it has a text field. move to item level.
文件term.33523fe1.yaml已经更新，内容：
name: 符合某条件1
id: 33523fe1
item:
  - localid: ''
    text: |
      涉事各方全体同意，推举一名或多名保证人：
        - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
        - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。

enter termtoterm(), term id: 4
it is a new version term metadata.
enter termtoterm(), term id: 4116b506
no interface field here.
it has a text field. move to item level.
文件term.4116b506.yaml已经更新，内容：
name: 公布日志
id: 4116b506
item:
  - localid: ''
    text: |
      公布完整、连续、不可删改的执行记录，证实方案的效果。
        - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。

enter termtoterm(), term id: 48577ce8
it has a text field. move to item level.
文件term.48577ce8.yaml已经更新，内容：
name: 直接指挥权
id: 48577ce8
interface:
  <term.48577ce8.entity.1>: 经理
  <term.48577ce8.entity.2>: 执行部门
  <term.48577ce8.entity.3>: 决策部门
  <term.48577ce8.term.1>: 基本制度
  <term.48577ce8.term.3>: 劳动合同
  <term.48577ce8.asset.1>: 通用工单
item:
  - localid: ''
    text: |
      在<term.48577ce8.entity.2>内，<term.48577ce8.term.1>和<term.48577ce8.term.3>未定义的事项由<term.48577ce8.entity.1>直接指挥。

enter termtoterm(), term id: 49d40087
no interface field here.
it has a text field. move to item level.
文件term.49d40087.yaml已经更新，内容：
name: 分支隔离规则-2
id: 49d40087
item:
  - localid: ''
    text: |
      实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。

enter termtoterm(), term id: 4b12ac08
it has a text field. move to item level.
文件term.4b12ac08.yaml已经更新，内容：
name: 入门目录202404151600-3
id: 4b12ac08
interface:
  <term.4b12ac08.term.1>: 附件21
readme: |
  - "可行"是指：
    - 方案的内容完整、准确、无二义性，具备相关岗位普通资质的人员可以自行阅读、使用。
    - 在独立的第三方实施，可以按预期的比率产生预期的效果。
  - 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。
item:
  - localid: ''
    text: |
      如果有其它可行方案请发到<huangyg@mars22.com>，我将按照<term.4b12ac08.term.1>核实。

enter termtoterm(), term id: 4c37b176
no interface field here.
it has a text field. move to item level.
文件term.4c37b176.yaml已经更新，内容：
name: 制定规则-2
id: 4c37b176
readme: |
  - 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。
  - 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。
item:
  - localid: ''
    text: |
      接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。

enter termtoterm(), term id: 50d2347f
no interface field here.
it has a text field. move to item level.
文件term.50d2347f.yaml已经更新，内容：
name: 制定规则-1
id: 50d2347f
item:
  - localid: ''
    text: |
      制定规章要明确预期效果。

enter termtoterm(), term id: 52edbf25
it has a text field. move to item level.
文件term.52edbf25.yaml已经更新，内容：
name: 入门目录202404151600-2-2
id: 52edbf25
interface:
  <term.52edbf25.term.1>: 附件20
  <term.52edbf25.term.2>: 附件30
  <term.52edbf25.term.3>: 附件42
  <term.52edbf25.term.4>: 附件31
  <term.52edbf25.term.5>: 附件32
  <term.52edbf25.term.6>: 附件33
  <term.52edbf25.term.7>: 附件34
item:
  - localid: ''
    text: |
      条件：同意按照<term.52edbf25.term.1>增加补充信息，补充关于<term.52edbf25.term.2>，<term.52edbf25.term.3>，<term.52edbf25.term.4>、<term.52edbf25.term.5>、<term.52edbf25.term.6>、<term.52edbf25.term.7>的补充信息，且判断符合附件<term.52edbf25.term.2>，<term.52edbf25.term.3>，不全符合符合<term.52edbf25.term.4>、<term.52edbf25.term.5>、<term.52edbf25.term.6>、<term.52edbf25.term.7>。
      建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件<term.52edbf25.term.4>、<term.52edbf25.term.5>、<term.52edbf25.term.6>、<term.52edbf25.term.7>的补充信息。

enter termtoterm(), term id: 55c25f3f
no interface field here.
it has a text field. move to item level.
文件term.55c25f3f.yaml已经更新，内容：
name: 制定规则-3
id: 55c25f3f
item:
  - localid: ''
    text: |
      如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。

enter termtoterm(), term id: 583d6243
it has a text field. move to item level.
文件term.583d6243.yaml已经更新，内容：
name: 如果割据就启用1406
id: 583d6243
interface:
  <term.583d6243.term.1>: 附件44
  <term.583d6243.term.2>: 附件1406
item:
  - localid: ''
    text: |
      如果符合<term.583d6243.term.1>的情况，则<term.583d6243.term.2>自动生效。

enter termtoterm(), term id: 5ab2b2ba
no interface field here.
it has a text field. move to item level.
文件term.5ab2b2ba.yaml已经更新，内容：
name: 能力和贡献持续变化
id: 5ab2b2ba
readme: |
  注意判断：即使规章（包括草案、参考案例）已经足够完善，足以保证准确估算贡献符合利益，依然有成员下意识地高估自己的贡献、低估其他成员的贡献，无法自控。
item:
  - localid: ''
    text: |
      定义：核心人员凭借职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。
      反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。

enter termtoterm(), term id: 5b4e0597
it has a text field. move to item level.
文件term.5b4e0597.yaml已经更新，内容：
name: 入门目录202404151600-2-1
id: 5b4e0597
interface:
  <term.5b4e0597.term.1>: 附件20
  <term.5b4e0597.term.2>: 附件30
  <term.5b4e0597.term.3>: 附件42
  <term.5b4e0597.term.4>: 附件31
  <term.5b4e0597.term.5>: 附件32
  <term.5b4e0597.term.6>: 附件33
  <term.5b4e0597.term.7>: 附件34
readme: |
  由于规章只能改变有意识、理性的行为，所以根据条件提出建议。
item:
  - localid: ''
    text: |
      条件：同意按照<term.5b4e0597.term.1>增加补充信息，补充关于<term.5b4e0597.term.2>，<term.5b4e0597.term.3>，<term.5b4e0597.term.4>、<term.5b4e0597.term.5>、<term.5b4e0597.term.6>、<term.5b4e0597.term.7>的补充信息，且均判断为符合。
      建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。

enter termtoterm(), term id: 5c7d5a18
no interface field here.
it has a text field. move to item level.
文件term.5c7d5a18.yaml已经更新，内容：
name: 分支隔离规则-3
id: 5c7d5a18
readme: |
  - 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。
    - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。
      - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。
  - 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。
item:
  - localid: ''
    text: |
      规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实际收到的问题。

enter termtoterm(), term id: 5f7bbbe4
no interface field here.
it has a text field. move to item level.
文件term.5f7bbbe4.yaml已经更新，内容：
name: 分支隔离规则-4
id: 5f7bbbe4
item:
  - localid: ''
    text: |
      查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。

enter termtoterm(), term id: 5f7eed28
no interface field here.
it has a text field. move to item level.
文件term.5f7eed28.yaml已经更新，内容：
name: PS标准-2
id: 5f7eed28
item:
  - localid: ''
    text: |
      人员的上下级关系，根据任免权定义。

enter termtoterm(), term id: 607455c0
no interface field here.
it has a text field. move to item level.
文件term.607455c0.yaml已经更新，内容：
name: 提出对赌要约
id: 607455c0
item:
  - localid: ''
    text: |
      已发布开放的要约，只有取得该效果才有收益。

enter termtoterm(), term id: 64eb9304
it has a text field. move to item level.
文件term.64eb9304.yaml已经更新，内容：
name: 自修订条款
id: 64eb9304
interface:
  <term.64eb9304.entity.1>: deployer
readme: ''
effect: ''
item:
  - localid: ''
    text: |
      由<term.64eb9304.entity.1>书面提交即生效。

enter termtoterm(), term id: 6988b66d
no interface field here.
it has a text field. move to item level.
文件term.6988b66d.yaml已经更新，内容：
name: PS标准-1
id: 6988b66d
item:
  - localid: ''
    text: |
      规章条款的上下级关系，根据制定、修订权定义。

enter termtoterm(), term id: 7288c99c
it has a text field. move to item level.
文件term.7288c99c.yaml已经更新，内容：
name: 入门目录202404151600-2-3
id: 7288c99c
interface:
  <term.7288c99c.term.1>: 附件20
  <term.7288c99c.term.2>: 附件30
item:
  - localid: ''
    text: |
      条件：
      - 不能按照<term.7288c99c.term.1>增加补充信息。
      - 同意按照<term.7288c99c.term.1>增加补充信息，补充关于<term.7288c99c.term.2>的补充信息，且判断为不符合。
      建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。

enter termtoterm(), term id: 7506353d
it has a text field. move to item level.
文件term.7506353d.yaml已经更新，内容：
name: 直接指挥的方式
id: 7506353d
interface:
  <term.7506353d.entity.1>: 经理
  <term.7506353d.entity.2>: 执行部门
  <term.7506353d.entity.3>: 决策部门
  <term.7506353d.term.2>: 具体规章
  <term.7506353d.asset.1>: 通用工单
readme: |
  在使用IT系统时，可修改为<term.7506353d.entity.1>向系统提交<term.7506353d.asset.1>，并由系统通知负责执行的成员。
item:
  - localid: ''
    text: |
      直接指挥的方式：
        - <term.7506353d.entity.1>填写<term.7506353d.asset.1>明确事项的处理要求，并交给负责执行的成员；
        - <term.7506353d.entity.1>制订<term.7506353d.term.2>明确事项的处理要求，并提交给<term.7506353d.entity.3>备案，<term.7506353d.entity.3>签收后<term.7506353d.term.2>即生效。<term.7506353d.entity.2>成员根据生效的<term.7506353d.term.2>自行填写<term.7506353d.asset.1>并执行。

enter termtoterm(), term id: 90c5a430
no interface field here.
it has a text field. move to item level.
文件term.90c5a430.yaml已经更新，内容：
name: PS标准-4
id: 90c5a430
item:
  - localid: ''
    text: |
      严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。

enter termtoterm(), term id: 91ff9448
no interface field here.
it has a text field. move to item level.
文件term.91ff9448.yaml已经更新，内容：
name: 有效的内部监管
id: 91ff9448
item:
  - localid: ''
    text: |
      定义：已有基础制度和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。

enter termtoterm(), term id: 988ea839
it is a new version term metadata.
enter termtoterm(), term id: a1c197a9
no interface field here.
it has a text field. move to item level.
文件term.a1c197a9.yaml已经更新，内容：
name: 符合某条件2
id: a1c197a9
item:
  - localid: ''
    text: |
      涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。

enter termtoterm(), term id: bafdd0aa
it is a new version term metadata.
enter termtoterm(), term id: bb8005b9
it has a text field. move to item level.
文件term.bb8005b9.yaml已经更新，内容：
name: 符合某条件开头
id: bb8005b9
interface:
  <term.bb8005b9.term.1>: 下一条
item:
  - localid: ''
    text: |
      对自述难以核实的情况下，可以按照<term.bb8005b9.term.1>方式之一增加补充信息：

enter termtoterm(), term id: bba7c6f1
it has a text field. move to item level.
文件term.bba7c6f1.yaml已经更新，内容：
name: 利益分配比例
id: bba7c6f1
interface:
  <term.bba7c6f1.asset.1>: p
readme: ''
effect: ''
item:
  - localid: ''
    text: |
      <term.bba7c6f1.asset.1>=20，<term.bba7c6f1.asset.1>%=20%。

enter termtoterm(), term id: c8254555
no interface field here.
it has a text field. move to item level.
文件term.c8254555.yaml已经更新，内容：
name: PS标准-3
id: c8254555
item:
  - localid: ''
    text: |
      严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。

enter termtoterm(), term id: c87ec159
it has a text field. move to item level.
文件term.c87ec159.yaml已经更新，内容：
name: 通用工单的审议
id: c87ec159
interface:
  <term.c87ec159.entity.1>: 经理
  <term.c87ec159.entity.2>: 执行部门
  <term.c87ec159.entity.3>: 决策部门
  <term.c87ec159.term.1>: 基本制度
  <term.c87ec159.term.2>: 具体规章
  <term.c87ec159.asset.1>: 通用工单
  <term.c87ec159.asset.2>: 审议报告
readme: |
  - 时间按一月一周期安排，只是范例。可以根据<term.c87ec159.term.1>的完善程度自行调节，从一周到一年都可以考虑。
  - <term.c87ec159.term.1>生效后，所规定的工作事项就不再允许<term.c87ec159.entity.1>直接指挥。相应的<term.c87ec159.term.2>也同时失效。
  - <term.c87ec159.term.1>的规定，可能与<term.c87ec159.asset.1>规定的相同、相似、相反......
item:
  - localid: ''
    text: |
      <term.c87ec159.entity.3>成员应：
        - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的<term.c87ec159.asset.1>，提交<term.c87ec159.asset.2>以及<term.c87ec159.term.1>的修订动议。
        - 在审议周期的第20天结束前阅读完其他成员提交的<term.c87ec159.asset.2>和<term.c87ec159.term.1>的修订动议，提交<term.c87ec159.asset.2>。
        - 在审议周期结束前对<term.c87ec159.term.1>修订动议进行表决。

enter termtoterm(), term id: cb4ab0e9
no interface field here.
it has a text field. move to item level.
文件term.cb4ab0e9.yaml已经更新，内容：
name: 资源不足
id: cb4ab0e9
item:
  - localid: ''
    text: |
      定义：需要以未来的收入换取资源，而且需要与同行争夺。
      反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。

enter termtoterm(), term id: cc0fba2f
no interface field here.
it has a text field. move to item level.
文件term.cc0fba2f.yaml已经更新，内容：
name: 入门目录202404151600-1
id: cc0fba2f
item:
  - localid: ''
    text: |
      针对不同条件给出建议如下：

enter termtoterm(), term id: d13b27d1
no interface field here.
it has a text field. move to item level.
文件term.d13b27d1.yaml已经更新，内容：
name: 保密规则-3
id: d13b27d1
item:
  - localid: ''
    text: |
      一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。

enter termtoterm(), term id: d1f88a2c
no interface field here.
it has a text field. move to item level.
文件term.d1f88a2c.yaml已经更新，内容：
name: 保密规则-1
id: d1f88a2c
item:
  - localid: ''
    text: |
      所有人员的所有工作结果默认为公开，对外发布。

enter termtoterm(), term id: dd1bc41b
no interface field here.
it has a text field. move to item level.
文件term.dd1bc41b.yaml已经更新，内容：
name: 入门目录202404151600-2-4
id: dd1bc41b
item:
  - localid: ''
    text: |
      条件：还在筹备因此无法补充信息的。
      建议：参考booting标准模型。

enter termtoterm(), term id: df39a1ed
no interface field here.
it has a text field. move to item level.
文件term.df39a1ed.yaml已经更新，内容：
name: 保密规则-4
id: df39a1ed
item:
  - localid: ''
    text: |
      如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。
```

- 顺便把term upgradeby的”本条款“实现了。
- 时间不够，termset部分追加一个时间片去完成：
    - '60': 完成psmd\src\conver.js中的termsertoterm().
      readme: |
        - 参考5.3. 9:30 draft。
        - old termset -> new term
          - 如果item符合以下条件，直接把text、readme提升到item下：
            - type = term
            - localid = ”“
          - 增加converfrom字段：值是旧term或者termset的文件名。
---

[top](#top) | [index](#index)
<a id="20240503140000"></a>
## 14:00~14:29
整理废弃git库

- 设立备份文件夹：D:\huangyg\backup\git 。
    - 选中的项目在主文件夹 D:\huangyg\git commit
    - 在备份文件夹clone
    - 在主文件夹删除。提前把用户权限赋予整个主文件夹及子文件夹，修改高级安全属性变更所有者。
- 以下git库移入备份文件夹：
    - BEICHU
    - aev
    - 7kick
    - carwash
    - celtsc
    - FelixHuang
    - FSM
- 其他情况：
    - Financial，本地远程都是空的，log也是空的。但是github有watcher，暂时不删。移到备份。

时间不够，再追加一个30分钟时间片到season metadata.todo字段

---

[top](#top) | [index](#index)
<a id="20240503143000"></a>
## 14:30~14:59
学习正则表达式RegExp

- https://regexlearn.com/
- https://www.runoob.com/regexp/regexp-tutorial.html

基本了解语法和简单运用，早上自学时间可以试一下复杂的练习题。不再追加时间，实践中慢慢熟悉。

---

[top](#top) | [index](#index)
<a id="20240503160000"></a>
## 16:00~16:59
Jade Language生成html view

- 把htmltemp.term改名为termtemp.ejs， 把ejs相关代码块整理到判断下。
- 另建termtemp.jade模版文件。
```
html(lang="zh-cn")
  head
    title term html sample
    script
      if alert
        !{alertstr}
      if confirm
        !{confirmstr}
      if prompt
        !{apromptstr}

  body
    h3 条款 #{termid}
    hr
    p 正文:
    p !{treehtml}
    hr
    if(readme)
      p 注释:
      p !{treereadmehtml}
      hr
```

执行结果如下：
```
D:\huangyg\git\PSMD\src>node term term 01e1c775
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照本条款修订。
23f76740>upgradestr:本条款按照本条款修订。
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照1.条款修订。
bafdd0aa>upgradestr:本条款按照1.条款修订。
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照1.条款修订。
988ea839>upgradestr:本条款按照1.条款修订。
../view/term.01e1c775.md文件更新，内容如下:
条款 01e1c775 正文:
1. 本条款按照本条款修订。由deployer书面提交即生效。
2. 本条款按照1.条款修订。p=20，p%=20%。
3. 本条款按照1.条款修订。由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

---
条款 01e1c775 readme:
本条款是模型1609利益分配的核心条款。
1. 自修订条款是权力分配中的顶级条款。
2. 本条款设置了参数p的初始值。
3. 本条款是权力分配中的二级条款。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.01e1c775.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script>confirm("confirm test.")</script></head><body><h3>条款 01e1c775</h3><hr/><p>正文:</p><p>1. 本条款按照本条款修订。由deployer书面提交即生效。<br/>
2. 本条款按照1.条款修订。p=20，p%=20%。<br/>
3. 本条款按照1.条款修订。由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>
</p><hr/><p>注释:</p><p>本条款是模型1609利益分配的核心条款。<br/>
1. 自修订条款是权力分配中的顶级条款。<br/>
2. 本条款设置了参数p的初始值。<br/>
3. 本条款是权力分配中的二级条款。<br/>
</p><hr/></body></html>
```
