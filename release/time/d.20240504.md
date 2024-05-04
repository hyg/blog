# 2024.05.04.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[term metadata的depend,together,effect等字段的内容写入term view](#20240504074500)  
- 09:30	[完成psmd\src\conver.js中的termsertoterm().](#20240504093000)  
- 14:00	[debug-灰枣按"个"作为单位被算出很高热量。](#20240504140000)  
- 14:30	[async](#20240504143000)  
- 16:00	[github + codeberg page 范例](#20240504160000)  

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
  - learn的第1号事项：学习 github actions和 workflows 的yaml语法
  - raw的第1号事项：设计DRI metadata
  - ego的第2号事项：整理废弃git库，包括本地和远程。
  - learn的第2号事项：YARRRML

- 60分钟时间片：
  - PSMD的第1号事项：term metadata的depend,together,effect等字段的内容写入term view
  - ego的第1号事项：在season metadata中实现浮动时间表，修改日计划功能。
  - js的第1号事项：学习测试方法和工具
  - xuemen的第1号事项：五月报税

- 90分钟时间片：
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - PSMD的第6号事项：整理近期手稿。

- 195分钟时间片：
  - xuemen的第2号事项：xuemen COD metadata
  - ego的第3号事项：在整理近期手稿之后，修订个人模型。
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view

---

[top](#top) | [index](#index)
<a id="20240504074500"></a>
## 7:45~8:44
term metadata的depend,together,effect等字段的内容写入term view

- 继续修改term.js maketermview()

还没有完成，将任务回写到season metadata的todo字段。今天这次的有效时间记为5分钟。

---

[top](#top) | [index](#index)
<a id="20240504093000"></a>
##  9:30~10:59
完成psmd\src\conver.js中的termsertoterm().

- 旧的termset.effect字段是字符串，新的term.effect是一个数组，因此需要人工转变。目前没有。

执行结果：
```

D:\huangyg\git\PSMD\src>node conver
文件termset.01e1c775.yaml已经更新，内容：
name: 调整分配主比例
id: 01e1c775
interface:
  <term.01e1c775.entity.1>: deployer
  <term.01e1c775.entity.2>: director
  <term.01e1c775.asset.1>: p
item:
  - localid: '1'
    termid: 64eb9304
    upgradeby: <term.01e1c775.localid.1>
    map:
      <term.64eb9304.entity.1>: <term.01e1c775.entity.1>
  - localid: '2'
    termid: bba7c6f1
    upgradeby: <term.01e1c775.localid.1>
    map:
      <term.bba7c6f1.asset.1>: <term.01e1c775.asset.1>
  - localid: '3'
    termid: 177700d4
    upgradeby: <term.01e1c775.localid.1>
    map:
      <term.177700d4.entity.1>: <term.01e1c775.entity.2>

文件termset.056e71fb.yaml已经更新，内容：
name: 1406动议
id: 056e71fb
readme: |
  1406准确的定位是<term.056e71fb.entity.3>的动议套件，可以用作其它模型的附件。 ​​​
interface:
  <term.056e71fb.entity.1>: 经理
  <term.056e71fb.entity.2>: 执行部门
  <term.056e71fb.entity.3>: 决策部门
  <term.056e71fb.term.1>: 基本制度
  <term.056e71fb.term.2>: 具体规章
  <term.056e71fb.term.3>: 劳动合同
  <term.056e71fb.asset.1>: 通用工单
  <term.056e71fb.asset.2>: 审议报告
item:
  - localid: '1'
    termid: 48577ce8
    map:
      <term.48577ce8.entity.1>: <term.056e71fb.entity.1>
      <term.48577ce8.entity.2>: <term.056e71fb.entity.2>
      <term.48577ce8.entity.3>: <term.056e71fb.entity.3>
      <term.48577ce8.term.1>: <term.056e71fb.term.1>
      <term.48577ce8.term.3>: <term.056e71fb.term.3>
      <term.48577ce8.asset.1>: <term.056e71fb.asset.1>
  - localid: '2'
    termid: 7506353d
    map:
      <term.7506353d.entity.1>: <term.056e71fb.entity.1>
      <term.7506353d.entity.2>: <term.056e71fb.entity.2>
      <term.7506353d.entity.3>: <term.056e71fb.entity.3>
      <term.7506353d.term.2>: <term.056e71fb.term.2>
      <term.7506353d.asset.1>: <term.056e71fb.asset.1>
  - localid: '3'
    termid: 260ca049
    map:
      <term.260ca049.entity.1>: <term.056e71fb.entity.1>
      <term.260ca049.entity.2>: <term.056e71fb.entity.2>
      <term.260ca049.entity.3>: <term.056e71fb.entity.3>
      <term.260ca049.asset.1>: <term.056e71fb.asset.1>
  - localid: '4'
    termid: c87ec159
    map:
      <term.c87ec159.entity.1>: <term.056e71fb.entity.1>
      <term.c87ec159.entity.2>: <term.056e71fb.entity.2>
      <term.c87ec159.entity.3>: <term.056e71fb.entity.3>
      <term.c87ec159.term.1>: <term.056e71fb.term.1>
      <term.c87ec159.term.2>: <term.056e71fb.term.2>
      <term.c87ec159.asset.1>: <term.056e71fb.asset.1>
      <term.c87ec159.asset.2>: <term.056e71fb.asset.2>

文件termset.1.yaml已经更新，内容：
name: 预设1406动议
id: '1'
interface:
  <term.1.entity.e1>: 共同体
  <term.1.entity.e2>: 经理
  <term.1.entity.e3>: 决策部门
  <term.1.entity.e4>: 执行部门
  <term.1.entity.e5>: 下达指令者
  <term.1.asset.a1>: 通用工单
  <term.1.asset.a2>: 审议报告
  <term.1.asset.a3>: 工作日志
  <term.1.term.1>: 基本制度
  <term.1.term.2>: 具体规章
  <term.1.term.3>: 劳动合同
  <term.1.term.42>: 附件42
  <term.1.term.44>: 附件44
  <term.1.term.1406>: 附件1406
item:
  - localid: '1'
    termid: '2'
    map:
      <term.2.term.1>: <term.1.term.44>
      <term.2.term.2>: <term.1.term.1406>
  - localid: 附件42
    termid: cb4ab0e9
  - localid: 附件44
    termid: '1'
    map:
      <term.1.entity.1>: <term.1.entity.e1>
      <term.1.entity.2>: <term.1.entity.e5>
      <term.1.entity.3>: <term.1.entity.e3>
      <term.1.entity.4>: <term.1.entity.e4>
      <term.1.asset.1>: <term.1.asset.a1>
      <term.1.term.1>: <term.1.term.42>
  - localid: 附件1406
    termid: 056e71fb
    map:
      <term.056e71fb.entity.1>: <term.1.entity.e2>
      <term.056e71fb.entity.2>: <term.1.entity.e4>
      <term.056e71fb.entity.3>: <term.1.entity.e3>
      <term.056e71fb.term.1>: <term.1.term.1>
      <term.056e71fb.term.2>: <term.1.term.2>
      <term.056e71fb.term.3>: <term.1.term.3>
      <term.056e71fb.asset.1>: <term.1.asset.a1>
      <term.056e71fb.asset.2>: <term.1.asset.a2>

文件termset.12119600.yaml已经更新，内容：
name: 分支隔离规则
id: '12119600'
readme: |
  - 例如：共同体A采用<term.12119600.term.1>，共同体B、C没有。当B在上级规章未生效时要讨论下级规章。B向C提出咨询，C收到B发出的原始咨询内容。B向A提出咨询，咨询内容自动转化为“如何在规章中增加PS标准”，A无法收到B发出的原始咨询内容。这条规则主要提醒自我安慰性的求助，向反对者求助就是承认自身行为导致问题无解。
  - 在父项目，各隔离分支将使用不同记账单位。相同金额不同单位，视为同工同酬。比如采用PS标准的分支使用M为单位，不采用<term.12119600.term.1>分支使用N为单位，自由兑换的平衡点是1M兑换10N。一项工作的报酬是5，两个分支账号分别得到5M（可兑换50N）、5N的报酬。
interface:
  <term.12119600.term.1>: PS标准
item:
  - localid: '1'
    termid: 1c3f8b06
  - localid: '2'
    termid: 49d40087
  - localid: '3'
    termid: 5c7d5a18
  - localid: '4'
    termid: 5f7bbbe4

文件termset.600f6f80.yaml已经更新，内容：
name: 制定规则
id: 600f6f80
readme: |
  比如不采用<term.600f6f80.term.2>的共同体，制定规章时以采用PS标准分支下的案例为依据，则自动增加采用PS标准的动议，切换生效之后才能讨论所制定规章。
interface:
  <term.600f6f80.term.1>: 分支隔离规则
  <term.600f6f80.term.2>: PS标准
item:
  - localid: '1'
    termid: 50d2347f
  - localid: '2'
    termid: 4c37b176
  - localid: '3'
    termid: 55c25f3f
  - localid: '4'
    termid: 064129fa
    map:
      <term.064129fa.term.1>: <term.600f6f80.term.1>

文件termset.6d206b54.yaml已经更新，内容：
name: PS标准
id: 6d206b54
readme: |
  - 以“规章条款”为单位。比如某公司章程有一条：股东会三分之二表决权通过可以修订章程。这条本身就在章程里面，所以也能修订自己。（比如修改为：股东会四分之三表决权通过可以修订章程。）这个条款就比章程的其它条款都高一级。无论怎么组合编集，都不影响这种层级关系。
  - 比如规章写明A任免B和C，即使在其它文件使用“B是C上级”、“C接受B的指令”这类措辞，本标准下BC平级、都是A下级。A缺席时B讨论C的人选即违规（如果B是章程中有PS标准的账号，会立刻被强制注销财产充公）。
  - 无法判断时按最坏情况处理，比如因保密制度不能阅读就按未生效、未被执行看待。
  - 上级规章制定过程可以讨论规章草案下的工作场景，包括制定下级规章的场景。只有特定上级规章导致特定下级规章草案不能产生，引入讨论才有意义。一旦离开上级规章制定程序的时间、地点、人员这些条件就不能提前讨论下级规章，因为这时上级规章（下级规章制定修订程序）还没有生效，不应该暗示自己的内定角色。
  - 待实现的后续规则：不遵守则由自然人承担。比如一个共同体的上级规章被架空时讨论下级规章，则以该自然人代替共同体承担规章中的权利，比如向执行下级规章的员工发工资。（也就是从共同体剥离，并入个人领域）"
item:
  - localid: '1'
    termid: 6988b66d
  - localid: '2'
    termid: 5f7eed28
  - localid: '3'
    termid: c8254555
  - localid: '4'
    termid: 90c5a430

文件termset.949e69e3.yaml已经更新，内容：
name: 符合某条件的条款
id: 949e69e3
readme: |
  - upgradeby应该分内部、外部两种情况定义。
interface:
  <term.949e69e3.term.1>: 容器规则
item:
  - localid: '1'
    termid: 33523fe1
  - localid: '2'
    termid: a1c197a9
  - localid: '3'
    termid: 259076a4
    map:
      <term.259076a4.term.1>: <term.949e69e3.term.1>

文件termset.9d12877c.yaml已经更新，内容：
name: 入门目录202404151600
id: 9d12877c
interface:
  <term.9d12877c.term.20>: 附件20
  <term.9d12877c.term.21>: 附件21
  <term.9d12877c.term.30>: 附件30
  <term.9d12877c.term.31>: 附件31
  <term.9d12877c.term.32>: 附件32
  <term.9d12877c.term.33>: 附件33
  <term.9d12877c.term.34>: 附件34
  <term.9d12877c.term.42>: 附件42
item:
  - localid: '1'
    termid: cc0fba2f
  - localid: '2'
    termid: e6976035
    map:
      <term.e6976035.term.1>: <term.9d12877c.term.20>
      <term.e6976035.term.2>: <term.9d12877c.term.30>
      <term.e6976035.term.3>: <term.9d12877c.term.42>
      <term.e6976035.term.4>: <term.9d12877c.term.31>
      <term.e6976035.term.5>: <term.9d12877c.term.32>
      <term.e6976035.term.6>: <term.9d12877c.term.33>
      <term.e6976035.term.7>: <term.9d12877c.term.34>
  - localid: '3'
    termid: 4b12ac08
  - localid: 附件20
    termid: dbe32f79
    map:
      <term.dbe32f79.term.1>: <term.9d12877c.term.21>
  - localid: 附件21
    termid: d0111eb4
  - localid: 附件30
    termid: 91ff9448
  - localid: 附件31
    termid: 6d206b54
  - localid: 附件32
    termid: 9e6bc34f
    map:
      <term.9e6bc34f.term.1>: <term.9d12877c.term.31>
  - localid: 附件33
    termid: 600f6f80
  - localid: 附件34
    termid: '12119600'
  - localid: 附件42
    termid: cb4ab0e9
  - localid: 附件43
    termid: 5ab2b2ba

文件termset.9e6bc34f.yaml已经更新，内容：
name: 保密规则
id: 9e6bc34f
readme: |
  - 顶层权利分配规则肯定在保密制度之上，因此PSMD只讨论公开资料。
  - 如果某个审议环节从某网址取得一份资料，这份资料从产生、生效、所有使用环节都从这个网址获得。比如是指令，下达指令者应在这个网址发布指令，然后通知接受指令者去阅读。
interface:
  <term.9e6bc34f.term.1>: PS标准
item:
  - localid: '1'
    termid: d1f88a2c
  - localid: '2'
    termid: '2e758794'
    map:
      <term.2e758794.term.1>: <term.9e6bc34f.term.1>
  - localid: '3'
    termid: d13b27d1
  - localid: '4'
    termid: df39a1ed

文件termset.b3124d50.yaml已经更新，内容：
name: 预设1406动议
id: b3124d50
interface:
  <term.b3124d50.entity.e1>: 共同体
  <term.b3124d50.entity.e2>: 经理
  <term.b3124d50.entity.e3>: 决策部门
  <term.b3124d50.entity.e4>: 执行部门
  <term.b3124d50.entity.e5>: 下达指令者
  <term.b3124d50.asset.a1>: 通用工单
  <term.b3124d50.asset.a2>: 审议报告
  <term.b3124d50.asset.a3>: 工作日志
  <term.b3124d50.term.1>: 基本制度
  <term.b3124d50.term.2>: 具体规章
  <term.b3124d50.term.3>: 劳动合同
  <term.b3124d50.term.42>: 附件42
  <term.b3124d50.term.44>: 附件44
  <term.b3124d50.term.1406>: 附件1406
item:
  - localid: '1'
    termid: 583d6243
    map:
      <term.583d6243.term.1>: <term.b3124d50.term.44>
      <term.583d6243.term.2>: <term.b3124d50.term.1406>
  - localid: 附件42
    termid: cb4ab0e9
  - localid: 附件44
    termid: 0ccddb29
    map:
      <term.0ccddb29.entity.1>: <term.b3124d50.entity.e1>
      <term.0ccddb29.entity.2>: <term.b3124d50.entity.e5>
      <term.0ccddb29.entity.3>: <term.b3124d50.entity.e3>
      <term.0ccddb29.entity.4>: <term.b3124d50.entity.e4>
      <term.0ccddb29.asset.1>: <term.b3124d50.asset.a1>
      <term.0ccddb29.term.1>: <term.b3124d50.term.42>
  - localid: 附件1406
    termid: 056e71fb
    map:
      <term.056e71fb.entity.1>: <term.b3124d50.entity.e2>
      <term.056e71fb.entity.2>: <term.b3124d50.entity.e4>
      <term.056e71fb.entity.3>: <term.b3124d50.entity.e3>
      <term.056e71fb.term.1>: <term.b3124d50.term.1>
      <term.056e71fb.term.2>: <term.b3124d50.term.2>
      <term.056e71fb.term.3>: <term.b3124d50.term.3>
      <term.056e71fb.asset.1>: <term.b3124d50.asset.a1>
      <term.056e71fb.asset.2>: <term.b3124d50.asset.a2>

文件termset.d0111eb4.yaml已经更新，内容：
name: 实施效果的核实
id: d0111eb4
item:
  - localid: '1'
    termid: 4116b506
  - localid: '2'
    termid: 607455c0

文件termset.dbe32f79.yaml已经更新，内容：
name: 符合某条件
id: dbe32f79
interface:
  <term.dbe32f79.term.1>: 附件21.容器规则
  <term.dbe32f79.term.2>: 第2条
item:
  - localid: '1'
    termid: bb8005b9
    map:
      <term.bb8005b9.term.1>: <term.dbe32f79.term.2>
  - localid: '2'
    termid: 949e69e3
    map:
      <term.949e69e3.term.1>: <term.dbe32f79.term.1>

文件termset.e6976035.yaml已经更新，内容：
name: 入门目录202404151600-2
id: e6976035
interface:
  <term.e6976035.term.1>: 附件20
  <term.e6976035.term.2>: 附件30
  <term.e6976035.term.3>: 附件42
  <term.e6976035.term.4>: 附件31
  <term.e6976035.term.5>: 附件32
  <term.e6976035.term.6>: 附件33
  <term.e6976035.term.7>: 附件34
item:
  - localid: '1'
    termid: 5b4e0597
    map:
      <term.5b4e0597.term.1>: <term.e6976035.term.1>
      <term.5b4e0597.term.2>: <term.e6976035.term.2>
      <term.5b4e0597.term.3>: <term.e6976035.term.3>
      <term.5b4e0597.term.4>: <term.e6976035.term.4>
      <term.5b4e0597.term.5>: <term.e6976035.term.5>
      <term.5b4e0597.term.6>: <term.e6976035.term.6>
      <term.5b4e0597.term.7>: <term.e6976035.term.7>
  - localid: '2'
    termid: 52edbf25
    map:
      <term.52edbf25.term.1>: <term.e6976035.term.1>
      <term.52edbf25.term.2>: <term.e6976035.term.2>
      <term.52edbf25.term.3>: <term.e6976035.term.3>
      <term.52edbf25.term.4>: <term.e6976035.term.4>
      <term.52edbf25.term.5>: <term.e6976035.term.5>
      <term.52edbf25.term.6>: <term.e6976035.term.6>
      <term.52edbf25.term.7>: <term.e6976035.term.7>
  - localid: '3'
    termid: 7288c99c
    map:
      <term.7288c99c.term.1>: <term.e6976035.term.1>
      <term.7288c99c.term.2>: <term.e6976035.term.2>
  - localid: '4'
    termid: dd1bc41b
```

- 在  term.js 的loadallterm() 中增加测试代码：
```
// test after conver
maketermview(t.id);
```
- 由于termset.1 item里有term.1，所有被conver出一个循环的引用。删除这两个临时文件。

执行结果：
```
D:\huangyg\git\PSMD\src>node term all
enter maketermtext:01e1c775     prefix:
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照本条款修订。
enter maketermtext:64eb9304     prefix:1.
64eb9304>upgradestr:本条款按照本条款修订。
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照1.条款修订。
enter maketermtext:bba7c6f1     prefix:2.
bba7c6f1>upgradestr:本条款按照1.条款修订。
01e1c775>local upgradeby slice:
0~6:<term.
6~14:01e1c775
14~22:.localid
23~-1:1
01e1c775>upgradestr:本条款按照1.条款修订。
enter maketermtext:177700d4     prefix:3.
177700d4>upgradestr:本条款按照1.条款修订。
../view/term.01e1c775.md文件更新，内容如下:
条款 01e1c775 正文:
1. 本条款按照本条款修订。由deployer书面提交即生效。
2. 本条款按照1.条款修订。p=20，p%=20%。
3. 本条款按照1.条款修订。由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.01e1c775.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 01e1c775</h3><hr/><p>正文:</p><p>1. 本条款按照本条款 修订。由deployer书面提交即生效。<br/>
2. 本条款按照1.条款修订。p=20，p%=20%。<br/>
3. 本条款按照1.条款修订。由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>
</p><hr/></body></html>
enter maketermtext:056e71fb     prefix:
056e71fb>upgradestr:
enter maketermtext:48577ce8     prefix:1.
48577ce8>upgradestr:
056e71fb>upgradestr:
enter maketermtext:7506353d     prefix:2.
7506353d>upgradestr:
056e71fb>upgradestr:
enter maketermtext:260ca049     prefix:3.
260ca049>upgradestr:
056e71fb>upgradestr:
enter maketermtext:c87ec159     prefix:4.
c87ec159>upgradestr:
../view/term.056e71fb.md文件更新，内容如下:
条款 056e71fb 正文:
1. 在执行部门内，基本制度和劳动合同未定义的事项由经理直接指挥。
2. 直接指挥的方式：
  - 经理填写通用工单明确事项的处理要求，并交给负责执行的成员；
  - 经理制订具体规章明确事项的处理要求，并提交给决策部门备案，决策部门签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单并执行。
3. 经理和执行人员都要向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。
4. 决策部门成员应：
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本制度的修订动议。
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本制度的修订动议，提交审议报告。
  - 在审议周期结束前对基本制度修订动议进行表决。

---
条款 056e71fb readme:
1406准确的定位是决策部门的动议套件，可以用作其它模型的附件。 ​​​
2. 在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。
3. - 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
4. - 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.056e71fb.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 056e71fb</h3><hr/><p>正文:</p><p>1. 在执行部门内，基 本制度和劳动合同未定义的事项由经理直接指挥。<br/>
2. 直接指挥的方式：<br/>
  - 经理填写通用工单明确事项的处理要求，并交给负责执行的成员；<br/>
  - 经理制订具体规章明确事项的处理要求，并提交给决策部门备案，决策部门签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单并执行。<br/>
3. 经理和执行人员都要向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：<br/>
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；<br/>
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。<br/>
4. 决策部门成员应：<br/>
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本制度的修订动议。<br/>
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本制度的修订动议，提交审议报告。<br/>
  - 在审议周期结束前对基本制度修订动议进行表决。<br/>
</p><hr/><p>注释:</p><p>1406准确的定位是决策部门的动议套件，可以用作其它模型的附件。 ​​​<br/>
2. 在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。<br/>
3. - 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。<br/>
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。<br/>
4. - 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。<br/>
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。<br/>
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......<br/>
</p><hr/></body></html>
enter maketermtext:064129fa     prefix:
064129fa>upgradestr:
../view/term.064129fa.md文件更新，内容如下:
条款 064129fa 正文:
 分支隔离规则适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.064129fa.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 064129fa</h3><hr/><p>正文:</p><p> 分支隔离规则适用于 制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。<br/>
</p><hr/></body></html>
enter maketermtext:0ccddb29     prefix:
0ccddb29>upgradestr:
../view/term.0ccddb29.md文件更新，内容如下:
条款 0ccddb29 正文:
 出现以下情况之一：
- 决策部门未界定执行部门工作的合规性要求。
- 决策部门界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。

---
条款 0ccddb29 readme:
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合资源不足，如果符合应该在设立时解决。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.0ccddb29.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 0ccddb29</h3><hr/><p>正文:</p><p> 出现以下情况之一：<br/>
- 决策部门未界定执行部门工作的合规性要求。<br/>
- 决策部门界定了执行部门工作的合规性要求。<br/>
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。<br/>
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。<br/>
</p><hr/><p>注释:</p><p>- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。<br/>
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。<br/>
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合资源不足，如果符合应该在设立时解决。<br/>
</p><hr/></body></html>
enter maketermtext:12119600     prefix:
12119600>upgradestr:
enter maketermtext:1c3f8b06     prefix:1.
1c3f8b06>upgradestr:
12119600>upgradestr:
enter maketermtext:49d40087     prefix:2.
49d40087>upgradestr:
12119600>upgradestr:
enter maketermtext:5c7d5a18     prefix:3.
5c7d5a18>upgradestr:
12119600>upgradestr:
enter maketermtext:5f7bbbe4     prefix:4.
5f7bbbe4>upgradestr:
../view/term.12119600.md文件更新，内容如下:
条款 12119600 正文:
1. 对相同事项的不同处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。
2. 实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。
3. 规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实 际收到的问题。
4. 查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。

---
条款 12119600 readme:
- 例如：共同体A采用PS标准，共同体B、C没有。当B在上级规章未生效时要讨论下级规章。B向C提出咨询，C收到B发出的原始咨询内容。B向A提出咨询，咨询内容自动转化为“如何在规章中增加PS标准”，A无法收到B发出的原始咨询内容。这条规则主要提醒自我安慰性的求助，向反对者求助就是承认自身行为导致问题无解。
- 在父项目，各隔离分支将使用不同记账单位。相同金额不同单位，视为同工同酬。比如采用PS标准的分支使用M为单位，不采用PS标准分支使用N为单位，自由兑换的平衡点是1M兑换10N。一项工作的报酬是5，两个分支账号分别得到5M（可兑换50N）、5N的报酬。
1. - 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。
  - 现状常常被特殊化。
- 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。
3. - 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。
  - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。
    - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。
- 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.12119600.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 12119600</h3><hr/><p>正文:</p><p>1. 对相同事项的不同 处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。<br/>
2. 实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。<br/>
3. 规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实 际收到的问题。<br/>
4. 查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。<br/>
</p><hr/><p>注释:</p><p>- 例如：共同体A采用PS标准，共同体B、C没有。当B在上级规章未生效时要讨论下级规章。B向C提出咨询，C收到B发出的原始咨询内容。B向A提出咨询，咨询内容自动转化为“如何在规章中增加PS标准”，A无法收到B发出的原始咨询内容。这条规则主要提醒自我安慰性的求助，向反对者求助就是承认自身行为导致问题无解。<br/>
- 在父项目，各隔离分支将使用不同记账单位。相同金额不同单位，视为同工同酬。比如采用PS标准的分支使用M为单位，不采用PS标准分支使用N为单位，自由兑换的平衡点是1M兑换10N。一项工作的报酬是5，两个分支账号分别得到5M（可兑换50N）、5N的报酬。<br/>
1. - 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。<br/>
  - 现状常常被特殊化。<br/>
- 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。<br/>
3. - 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。<br/>
  - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。<br/>
    - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。<br/>
- 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。<br/>
</p><hr/></body></html>
enter maketermtext:177700d4     prefix:
177700d4>upgradestr:
../view/term.177700d4.md文件更新，内容如下:
条款 177700d4 正文:
 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.177700d4.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 177700d4</h3><hr/><p>正文:</p><p> 由director表决按一 人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>
</p><hr/></body></html>
enter maketermtext:1c3f8b06     prefix:
1c3f8b06>upgradestr:
../view/term.1c3f8b06.md文件更新，内容如下:
条款 1c3f8b06 正文:
 对相同事项的不同处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。

---
条款 1c3f8b06 readme:
- 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。
  - 现状常常被特殊化。
- 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.1c3f8b06.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 1c3f8b06</h3><hr/><p>正文:</p><p> 对相同事项的不同处 理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。<br/>
</p><hr/><p>注释:</p><p>- 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。<br/>
  - 现状常常被特殊化。<br/>
- 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。<br/>
</p><hr/></body></html>
enter maketermtext:2    prefix:
2>upgradestr:
../view/term.2.md文件更新，内容如下:
条款 2 正文:
 由deployer书面提交即生效。

---
条款 2 readme:
自修订条款是权力分配中的顶级条款。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.2.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 2</h3><hr/><p>正文:</p><p> 由deployer书面提交即生效。<br/>
</p><hr/><p>注释:</p><p>自修订条款是权力分配中的顶级条款。<br/>
</p><hr/></body></html>
enter maketermtext:23f76740     prefix:
23f76740>upgradestr:
../view/term.23f76740.md文件更新，内容如下:
条款 23f76740 正文:
 由deployer书面提交即生效。

---
条款 23f76740 readme:
自修订条款是权力分配中的顶级条款。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.23f76740.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 23f76740</h3><hr/><p>正文:</p><p> 由deployer书面提交 即生效。<br/>
</p><hr/><p>注释:</p><p>自修订条款是权力分配中的顶级条款。<br/>
</p><hr/></body></html>
enter maketermtext:259076a4     prefix:
259076a4>upgradestr:
../view/term.259076a4.md文件更新，内容如下:
条款 259076a4 正文:
 涉事各方签署 容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.259076a4.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 259076a4</h3><hr/><p>正文:</p><p> 涉事各方签署 容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。<br/>
</p><hr/></body></html>
enter maketermtext:260ca049     prefix:
260ca049>upgradestr:
../view/term.260ca049.md文件更新，内容如下:
条款 260ca049 正文:
 经理和执行人员都要向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。

---
条款 260ca049 readme:
- 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.260ca049.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 260ca049</h3><hr/><p>正文:</p><p> 经理和执行人员都要 向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：<br/>
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；<br/>
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。<br/>
</p><hr/><p>注释:</p><p>- 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。<br/>
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。<br/>
</p><hr/></body></html>
enter maketermtext:2e758794     prefix:
2e758794>upgradestr:
../view/term.2e758794.md文件更新，内容如下:
条款 2e758794 正文:
 按PS标准上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行规 定，保密制度不得改变。

---
条款 2e758794 readme:
- 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。
  - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.2e758794.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 2e758794</h3><hr/><p>正文:</p><p> 按PS标准上溯得出顶 级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行规定，保密制度不得改变。<br/>
</p><hr/><p>注释:</p><p>- 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。<br/>
  - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。<br/>
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。<br/>
</p><hr/></body></html>
enter maketermtext:3    prefix:
3>upgradestr:
../view/term.3.md文件更新，内容如下:
条款 3 正文:
 p=20，p%=20%。

---
条款 3 readme:
本条款设置了参数p的初始值。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.3.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 3</h3><hr/><p>正文:</p><p> p=20，p%=20%。<br/>
</p><hr/><p>注释:</p><p>本条款设置了参数p的初始值。<br/>
</p><hr/></body></html>
enter maketermtext:33523fe1     prefix:
33523fe1>upgradestr:
../view/term.33523fe1.md文件更新，内容如下:
条款 33523fe1 正文:
 涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.33523fe1.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 33523fe1</h3><hr/><p>正文:</p><p> 涉事各方全体同意， 推举一名或多名保证人：<br/>
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。<br/>
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。<br/>
</p><hr/></body></html>
enter maketermtext:4    prefix:
4>upgradestr:
../view/term.4.md文件更新，内容如下:
条款 4 正文:
 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

---
条款 4 readme:
本条款是权力分配中的二级条款。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.4.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 4</h3><hr/><p>正文:</p><p> 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>
</p><hr/><p>注释:</p><p>本条款是权力分配中的二级条款。<br/>
</p><hr/></body></html>
enter maketermtext:4116b506     prefix:
4116b506>upgradestr:
../view/term.4116b506.md文件更新，内容如下:
条款 4116b506 正文:
 公布完整、连续、不可删改的执行记录，证实方案的效果。
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.4116b506.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 4116b506</h3><hr/><p>正文:</p><p> 公布完整、连续、不 可删改的执行记录，证实方案的效果。<br/>
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。<br/>
</p><hr/></body></html>
enter maketermtext:48577ce8     prefix:
48577ce8>upgradestr:
../view/term.48577ce8.md文件更新，内容如下:
条款 48577ce8 正文:
 在执行部门内，基本制度和劳动合同未定义的事项由经理直接指挥。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.48577ce8.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 48577ce8</h3><hr/><p>正文:</p><p> 在执行部门内，基本 制度和劳动合同未定义的事项由经理直接指挥。<br/>
</p><hr/></body></html>
enter maketermtext:49d40087     prefix:
49d40087>upgradestr:
../view/term.49d40087.md文件更新，内容如下:
条款 49d40087 正文:
 实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.49d40087.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 49d40087</h3><hr/><p>正文:</p><p> 实际通过生效、使用 某分支版本的规章，即为支持该分支版本，反对其它分支版本。<br/>
</p><hr/></body></html>
enter maketermtext:4b12ac08     prefix:
4b12ac08>upgradestr:
../view/term.4b12ac08.md文件更新，内容如下:
条款 4b12ac08 正文:
 如果有其它可行方案请发到<huangyg@mars22.com>，我将按照附件21核实。

---
条款 4b12ac08 readme:
- "可行"是指：
  - 方案的内容完整、准确、无二义性，具备相关岗位普通资质的人员可以自行阅读、使用。
  - 在独立的第三方实施，可以按预期的比率产生预期的效果。
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.4b12ac08.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 4b12ac08</h3><hr/><p>正文:</p><p> 如果有其它可行方案 请发到<huangyg@mars22.com>，我将按照附件21核实。<br/>
</p><hr/><p>注释:</p><p>- "可行"是指：<br/>
  - 方案的内容完整、准确、无二义性，具备相关岗位普通资质的人员可以自行阅读、使用。<br/>
  - 在独立的第三方实施，可以按预期的比率产生预期的效果。<br/>
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。<br/>
</p><hr/></body></html>
enter maketermtext:4c37b176     prefix:
4c37b176>upgradestr:
../view/term.4c37b176.md文件更新，内容如下:
条款 4c37b176 正文:
 接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。

---
条款 4c37b176 readme:
- 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。
- 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.4c37b176.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 4c37b176</h3><hr/><p>正文:</p><p> 接到质询时必须提供 依据，依据必须是 外部法律 or 案例统计 两种方式之一。<br/>
</p><hr/><p>注释:</p><p>- 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。<br/>
- 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。<br/>
</p><hr/></body></html>
enter maketermtext:50d2347f     prefix:
50d2347f>upgradestr:
../view/term.50d2347f.md文件更新，内容如下:
条款 50d2347f 正文:
 制定规章要明确预期效果。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.50d2347f.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 50d2347f</h3><hr/><p>正文:</p><p> 制定规章要明确预期 效果。<br/>
</p><hr/></body></html>
enter maketermtext:52edbf25     prefix:
52edbf25>upgradestr:
../view/term.52edbf25.md文件更新，内容如下:
条款 52edbf25 正文:
 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合附件31、附件32、附件33、附件34。
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.52edbf25.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 52edbf25</h3><hr/><p>正文:</p><p> 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合附件31、附件32、附件33、 附件34。<br/>
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。<br/>
</p><hr/></body></html>
enter maketermtext:55c25f3f     prefix:
55c25f3f>upgradestr:
../view/term.55c25f3f.md文件更新，内容如下:
条款 55c25f3f 正文:
 如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.55c25f3f.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 55c25f3f</h3><hr/><p>正文:</p><p> 如果是旧版本修订， 制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。<br/>
</p><hr/></body></html>
enter maketermtext:583d6243     prefix:
583d6243>upgradestr:
../view/term.583d6243.md文件更新，内容如下:
条款 583d6243 正文:
 如果符合附件44的情况，则附件1406自动生效。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.583d6243.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 583d6243</h3><hr/><p>正文:</p><p> 如果符合附件44的情 况，则附件1406自动生效。<br/>
</p><hr/></body></html>
enter maketermtext:5ab2b2ba     prefix:
5ab2b2ba>upgradestr:
../view/term.5ab2b2ba.md文件更新，内容如下:
条款 5ab2b2ba 正文:
 定义：核心人员凭借职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。
反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。

---
条款 5ab2b2ba readme:
注意判断：即使规章（包括草案、参考案例）已经足够完善，足以保证准确估算贡献符合利益，依然有成员下意识地高估自己的贡献、低估其他成员的贡献，无法自控。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.5ab2b2ba.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 5ab2b2ba</h3><hr/><p>正文:</p><p> 定义：核心人员凭借 职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。<br/>
反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。<br/>
</p><hr/><p>注释:</p><p>注意判断：即使规章（包括草案、参考案例）已经足够完善，足以保证准确估算贡献符合利益，依然有成员下意识地高估自己的贡献、低估其他成员的贡献，无法自控。<br/>
</p><hr/></body></html>
enter maketermtext:5b4e0597     prefix:
5b4e0597>upgradestr:
../view/term.5b4e0597.md文件更新，内容如下:
条款 5b4e0597 正文:
 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。

---
条款 5b4e0597 readme:
由于规章只能改变有意识、理性的行为，所以根据条件提出建议。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.5b4e0597.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 5b4e0597</h3><hr/><p>正文:</p><p> 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。<br/>
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。<br/>
</p><hr/><p>注释:</p><p>由于规章只能改变有意识、理性的行为，所以根据条件提出建议。<br/>
</p><hr/></body></html>
enter maketermtext:5c7d5a18     prefix:
5c7d5a18>upgradestr:
../view/term.5c7d5a18.md文件更新，内容如下:
条款 5c7d5a18 正文:
 规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实际 收到的问题。

---
条款 5c7d5a18 readme:
- 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。
  - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。
    - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。
- 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.5c7d5a18.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 5c7d5a18</h3><hr/><p>正文:</p><p> 规章使用过程遇到问 题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实际收到的问题。<br/>
</p><hr/><p>注释:</p><p>- 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。<br/>
  - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。<br/>
    - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。<br/>
- 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。<br/>
</p><hr/></body></html>
enter maketermtext:5f7bbbe4     prefix:
5f7bbbe4>upgradestr:
../view/term.5f7bbbe4.md文件更新，内容如下:
条款 5f7bbbe4 正文:
 查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.5f7bbbe4.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 5f7bbbe4</h3><hr/><p>正文:</p><p> 查询资料时，未做任 何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。<br/>
</p><hr/></body></html>
enter maketermtext:5f7eed28     prefix:
5f7eed28>upgradestr:
../view/term.5f7eed28.md文件更新，内容如下:
条款 5f7eed28 正文:
 人员的上下级关系，根据任免权定义。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.5f7eed28.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 5f7eed28</h3><hr/><p>正文:</p><p> 人员的上下级关系， 根据任免权定义。<br/>
</p><hr/></body></html>
enter maketermtext:600f6f80     prefix:
600f6f80>upgradestr:
enter maketermtext:50d2347f     prefix:1.
50d2347f>upgradestr:
600f6f80>upgradestr:
enter maketermtext:4c37b176     prefix:2.
4c37b176>upgradestr:
600f6f80>upgradestr:
enter maketermtext:55c25f3f     prefix:3.
55c25f3f>upgradestr:
600f6f80>upgradestr:
enter maketermtext:064129fa     prefix:4.
064129fa>upgradestr:
../view/term.600f6f80.md文件更新，内容如下:
条款 600f6f80 正文:
1. 制定规章要明确预期效果。
2. 接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。
3. 如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。
4. 分支隔离规则适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。

---
条款 600f6f80 readme:
比如不采用PS标准的共同体，制定规章时以采用PS标准分支下的案例为依据，则自动增加采用PS标准的动议，切换生效之后才能讨论所制定规章。
2. - 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。
- 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.600f6f80.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 600f6f80</h3><hr/><p>正文:</p><p>1. 制定规章要明确预 期效果。<br/>
2. 接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。<br/>
3. 如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。<br/>
4. 分支隔离规则适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。<br/>
</p><hr/><p>注释:</p><p>比如不采用PS标准的共同体，制定规章时以采用PS标准分支下的案例为依据，则自动增加采用PS标准的动议，切换生效之后才能讨论所制定规章。<br/>
2. - 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。<br/>
- 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。<br/>
</p><hr/></body></html>
enter maketermtext:607455c0     prefix:
607455c0>upgradestr:
../view/term.607455c0.md文件更新，内容如下:
条款 607455c0 正文:
 已发布开放的要约，只有取得该效果才有收益。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.607455c0.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 607455c0</h3><hr/><p>正文:</p><p> 已发布开放的要约， 只有取得该效果才有收益。<br/>
</p><hr/></body></html>
enter maketermtext:64eb9304     prefix:
64eb9304>upgradestr:
../view/term.64eb9304.md文件更新，内容如下:
条款 64eb9304 正文:
 由deployer书面提交即生效。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.64eb9304.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 64eb9304</h3><hr/><p>正文:</p><p> 由deployer书面提交 即生效。<br/>
</p><hr/></body></html>
enter maketermtext:6988b66d     prefix:
6988b66d>upgradestr:
../view/term.6988b66d.md文件更新，内容如下:
条款 6988b66d 正文:
 规章条款的上下级关系，根据制定、修订权定义。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.6988b66d.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 6988b66d</h3><hr/><p>正文:</p><p> 规章条款的上下级关 系，根据制定、修订权定义。<br/>
</p><hr/></body></html>
enter maketermtext:6d206b54     prefix:
6d206b54>upgradestr:
enter maketermtext:6988b66d     prefix:1.
6988b66d>upgradestr:
6d206b54>upgradestr:
enter maketermtext:5f7eed28     prefix:2.
5f7eed28>upgradestr:
6d206b54>upgradestr:
enter maketermtext:c8254555     prefix:3.
c8254555>upgradestr:
6d206b54>upgradestr:
enter maketermtext:90c5a430     prefix:4.
90c5a430>upgradestr:
../view/term.6d206b54.md文件更新，内容如下:
条款 6d206b54 正文:
1. 规章条款的上下级关系，根据制定、修订权定义。
2. 人员的上下级关系，根据任免权定义。
3. 严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。
4. 严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。

---
条款 6d206b54 readme:
- 以“规章条款”为单位。比如某公司章程有一条：股东会三分之二表决权通过可以修订章程。这条本身就在章程里面，所以也能修订自己。（比如修改为：股东会四分之三表决权通过可以修订章程。）这个条款就比章程的其它条款都高一级。无论怎么组合编集，都不影响这种层级关系。
- 比如规章写明A任免B和C，即使在其它文件使用“B是C上级”、“C接受B的指令”这类措辞，本标准下BC平级、都是A下级。A缺席时B讨论C的人选即违规（如果B是章程中有PS标准的账号，会立刻被强制注销财产充公）。
- 无法判断时按最坏情况处理，比如因保密制度不能阅读就按未生效、未被执行看待。
- 上级规章制定过程可以讨论规章草案下的工作场景，包括制定下级规章的场景。只有特定上级规章导致特定下级规章草案不能产生，引入讨论才有意义。一旦离开上级规章制定程序的时间、地点、人员这些条件就不能提前讨论下级规章，因为这时上级规章（下级规章制定修订程序）还没有生效，不应该暗示自己的内定角色。
- 待实现的后续规则：不遵守则由自然人承担。比如一个共同体的上级规章被架空时讨论下级规章，则以该自然人代替共同体承担规章中的权利，比如向执行下级规章的员工发工资。（也就是从共同体剥离，并入个人领域）"

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.6d206b54.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 6d206b54</h3><hr/><p>正文:</p><p>1. 规章条款的上下级 关系，根据制定、修订权定义。<br/>
2. 人员的上下级关系，根据任免权定义。<br/>
3. 严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。<br/>
4. 严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。<br/>
</p><hr/><p>注释:</p><p>- 以“规章条款”为单位。比如某公司章程有一条：股东会三分之二表决权通过可以修订章程。这条本身就在章程里面，所以也能修订自己。（比如修改为：股东会四分之三表决权通过可以修订章程。）这个条款就比章程的其它条款都高一级。无论怎么组合编集，都不影响这种层级关系。<br/>
- 比如规章写明A任免B和C，即使在其它文件使用“B是C上级”、“C接受B的指令”这类措辞，本标准下BC平级、都是A下级。A缺席时B讨论C的人选即违规（如果B是章程中有PS标准的账号，会立刻被强制注销财产充公）。<br/>
- 无法判断时按最坏情况处理，比如因保密制度不能阅读就按未生效、未被执行看待。<br/>
- 上级规章制定过程可以讨论规章草案下的工作场景，包括制定下级规章的场景。只有特定上级规章导致特定下级规章草案不能产生，引入讨论才有意义。一旦离开上级规章制定程序的时间、地点、人员这些条件就不能提前讨论下级规章，因为这时上级规章（下级规章制定修订程序）还没有生效，不应该暗示自己的内定角色。<br/>
- 待实现的后续规则：不遵守则由自然人承担。比如一个共同体的上级规章被架空时讨论下级规章，则以该自然人代替共同体承担规章中的权利，比如向执行下级规章的员工发工资。（也就是从共同体剥离，并入个人领域）"<br/>
</p><hr/></body></html>
enter maketermtext:7288c99c     prefix:
7288c99c>upgradestr:
../view/term.7288c99c.md文件更新，内容如下:
条款 7288c99c 正文:
 条件：
- 不能按照附件20增加补充信息。
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.7288c99c.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 7288c99c</h3><hr/><p>正文:</p><p> 条件：<br/>
- 不能按照附件20增加补充信息。<br/>
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。<br/>
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。<br/>
</p><hr/></body></html>
enter maketermtext:7506353d     prefix:
7506353d>upgradestr:
../view/term.7506353d.md文件更新，内容如下:
条款 7506353d 正文:
 直接指挥的方式：
  - 经理填写通用工单明确事项的处理要求，并交给负责执行的成员；
  - 经理制订具体规章明确事项的处理要求，并提交给决策部门备案，决策部门签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单并执行。

---
条款 7506353d readme:
在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.7506353d.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 7506353d</h3><hr/><p>正文:</p><p> 直接指挥的方式：<br/>
  - 经理填写通用工单明确事项的处理要求，并交给负责执行的成员；<br/>
  - 经理制订具体规章明确事项的处理要求，并提交给决策部门备案，决策部门签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单并执行。<br/>
</p><hr/><p>注释:</p><p>在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。<br/>
</p><hr/></body></html>
enter maketermtext:90c5a430     prefix:
90c5a430>upgradestr:
../view/term.90c5a430.md文件更新，内容如下:
条款 90c5a430 正文:
 严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.90c5a430.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 90c5a430</h3><hr/><p>正文:</p><p> 严格执行任免程序。 上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。<br/>
</p><hr/></body></html>
enter maketermtext:91ff9448     prefix:
91ff9448>upgradestr:
../view/term.91ff9448.md文件更新，内容如下:
条款 91ff9448 正文:
 定义：已有基础制度和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.91ff9448.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 91ff9448</h3><hr/><p>正文:</p><p> 定义：已有基础制度 和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。<br/>
</p><hr/></body></html>
enter maketermtext:949e69e3     prefix:
949e69e3>upgradestr:
enter maketermtext:33523fe1     prefix:1.
33523fe1>upgradestr:
949e69e3>upgradestr:
enter maketermtext:a1c197a9     prefix:2.
a1c197a9>upgradestr:
949e69e3>upgradestr:
enter maketermtext:259076a4     prefix:3.
259076a4>upgradestr:
../view/term.949e69e3.md文件更新，内容如下:
条款 949e69e3 正文:
1. 涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
3. 涉事各方签署 容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

---
条款 949e69e3 readme:
- upgradeby应该分内部、外部两种情况定义。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.949e69e3.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 949e69e3</h3><hr/><p>正文:</p><p>1. 涉事各方全体同意 ，推举一名或多名保证人：<br/>
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。<br/>
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。<br/>
2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。<br/>
3. 涉事各方签署 容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。<br/>
</p><hr/><p>注释:</p><p>- upgradeby应该分内部、外部两种情况定义。<br/>
</p><hr/></body></html>
enter maketermtext:988ea839     prefix:
988ea839>upgradestr:
../view/term.988ea839.md文件更新，内容如下:
条款 988ea839 正文:
 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

---
条款 988ea839 readme:
本条款是权力分配中的二级条款。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.988ea839.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 988ea839</h3><hr/><p>正文:</p><p> 由director表决按一 人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>
</p><hr/><p>注释:</p><p>本条款是权力分配中的二级条款。<br/>
</p><hr/></body></html>
enter maketermtext:9d12877c     prefix:
9d12877c>upgradestr:
enter maketermtext:cc0fba2f     prefix:1.
cc0fba2f>upgradestr:
9d12877c>upgradestr:
enter maketermtext:e6976035     prefix:2.
e6976035>upgradestr:
enter maketermtext:5b4e0597     prefix:2.1.
5b4e0597>upgradestr:
e6976035>upgradestr:
enter maketermtext:52edbf25     prefix:2.2.
52edbf25>upgradestr:
e6976035>upgradestr:
enter maketermtext:7288c99c     prefix:2.3.
7288c99c>upgradestr:
e6976035>upgradestr:
enter maketermtext:dd1bc41b     prefix:2.4.
dd1bc41b>upgradestr:
9d12877c>upgradestr:
enter maketermtext:4b12ac08     prefix:3.
4b12ac08>upgradestr:
9d12877c>upgradestr:
enter maketermtext:dbe32f79     prefix:附件20.
dbe32f79>upgradestr:
enter maketermtext:bb8005b9     prefix:附件20.1.
bb8005b9>upgradestr:
dbe32f79>upgradestr:
enter maketermtext:949e69e3     prefix:附件20.2.
949e69e3>upgradestr:
enter maketermtext:33523fe1     prefix:附件20.2.1.
33523fe1>upgradestr:
949e69e3>upgradestr:
enter maketermtext:a1c197a9     prefix:附件20.2.2.
a1c197a9>upgradestr:
949e69e3>upgradestr:
enter maketermtext:259076a4     prefix:附件20.2.3.
259076a4>upgradestr:
9d12877c>upgradestr:
enter maketermtext:d0111eb4     prefix:附件21.
d0111eb4>upgradestr:
enter maketermtext:4116b506     prefix:附件21.1.
4116b506>upgradestr:
d0111eb4>upgradestr:
enter maketermtext:607455c0     prefix:附件21.2.
607455c0>upgradestr:
9d12877c>upgradestr:
enter maketermtext:91ff9448     prefix:附件30.
91ff9448>upgradestr:
9d12877c>upgradestr:
enter maketermtext:6d206b54     prefix:附件31.
6d206b54>upgradestr:
enter maketermtext:6988b66d     prefix:附件31.1.
6988b66d>upgradestr:
6d206b54>upgradestr:
enter maketermtext:5f7eed28     prefix:附件31.2.
5f7eed28>upgradestr:
6d206b54>upgradestr:
enter maketermtext:c8254555     prefix:附件31.3.
c8254555>upgradestr:
6d206b54>upgradestr:
enter maketermtext:90c5a430     prefix:附件31.4.
90c5a430>upgradestr:
9d12877c>upgradestr:
enter maketermtext:9e6bc34f     prefix:附件32.
9e6bc34f>upgradestr:
enter maketermtext:d1f88a2c     prefix:附件32.1.
d1f88a2c>upgradestr:
9e6bc34f>upgradestr:
enter maketermtext:2e758794     prefix:附件32.2.
2e758794>upgradestr:
9e6bc34f>upgradestr:
enter maketermtext:d13b27d1     prefix:附件32.3.
d13b27d1>upgradestr:
9e6bc34f>upgradestr:
enter maketermtext:df39a1ed     prefix:附件32.4.
df39a1ed>upgradestr:
9d12877c>upgradestr:
enter maketermtext:600f6f80     prefix:附件33.
600f6f80>upgradestr:
enter maketermtext:50d2347f     prefix:附件33.1.
50d2347f>upgradestr:
600f6f80>upgradestr:
enter maketermtext:4c37b176     prefix:附件33.2.
4c37b176>upgradestr:
600f6f80>upgradestr:
enter maketermtext:55c25f3f     prefix:附件33.3.
55c25f3f>upgradestr:
600f6f80>upgradestr:
enter maketermtext:064129fa     prefix:附件33.4.
064129fa>upgradestr:
9d12877c>upgradestr:
enter maketermtext:12119600     prefix:附件34.
12119600>upgradestr:
enter maketermtext:1c3f8b06     prefix:附件34.1.
1c3f8b06>upgradestr:
12119600>upgradestr:
enter maketermtext:49d40087     prefix:附件34.2.
49d40087>upgradestr:
12119600>upgradestr:
enter maketermtext:5c7d5a18     prefix:附件34.3.
5c7d5a18>upgradestr:
12119600>upgradestr:
enter maketermtext:5f7bbbe4     prefix:附件34.4.
5f7bbbe4>upgradestr:
9d12877c>upgradestr:
enter maketermtext:cb4ab0e9     prefix:附件42.
cb4ab0e9>upgradestr:
9d12877c>upgradestr:
enter maketermtext:5ab2b2ba     prefix:附件43.
5ab2b2ba>upgradestr:
../view/term.9d12877c.md文件更新，内容如下:
条款 9d12877c 正文:
1. 针对不同条件给出建议如下：
2.1. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。
2.2. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合 附件31、附件32、附件33、附件34。
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。
2.3. 条件：
- 不能按照附件20增加补充信息。
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。
2.4. 条件：还在筹备因此无法补充信息的。
建议：参考booting标准模型。
3. 如果有其它可行方案请发到<huangyg@mars22.com>，我将按照附件21核实。
附件20.1. 对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
附件20.2.1. 涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
附件20.2.2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
附件20.2.3. 涉事各方签署 附件21，承诺遵守该条件，将生效、执行的记录作为补充信息。
附件21.1. 公布完整、连续、不可删改的执行记录，证实方案的效果。
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。
附件21.2. 已发布开放的要约，只有取得该效果才有收益。
附件30. 定义：已有基础制度和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。
附件31.1. 规章条款的上下级关系，根据制定、修订权定义。
附件31.2. 人员的上下级关系，根据任免权定义。
附件31.3. 严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。
附件31.4. 严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。
附件32.1. 所有人员的所有工作结果默认为公开，对外发布。
附件32.2. 按附件31上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行规定，保密制度不得改变。
附件32.3. 一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。
附件32.4. 如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。
附件33.1. 制定规章要明确预期效果。
附件33.2. 接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。
附件33.3. 如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。
附件33.4. 分支隔离规则适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。
附件34.1. 对相同事项的不同处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。
附件34.2. 实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。
附件34.3. 规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实际收到的问题。
附件34.4. 查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。
附件42. 定义：需要以未来的收入换取资源，而且需要与同行争夺。
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。
附件43. 定义：核心人员凭借职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。
反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。

---
条款 9d12877c readme:
2. 2.1. 由于规章只能改变有意识、理性的行为，所以根据条件提出建议。
3. - "可行"是指：
  - 方案的内容完整、准确、无二义性，具备相关岗位普通资质的人员可以自行阅读、使用。
  - 在独立的第三方实施，可以按预期的比率产生预期的效果。
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。
附件20. 附件20.2. - upgradeby应该分内部、外部两种情况定义。
附件31. - 以“规章条款”为单位。比如某公司章程有一条：股东会三分之二表决权通过可以修订章程。这条本身就在章程里面，所以也能修订自己。（比如修改为：股东会四分之三表决权通过可以修订章程。）这个条款就比章程的其它条款都高一级。无论怎么组合编集，都不影响这种层级关系。
- 比如规章写明A任免B和C，即使在其它文件使用“B是C上级”、“C接受B的指令”这类措辞，本标准下BC平级、都是A下级。A缺席时B讨论C的人选即违规（如果B是章程中有PS标准的账号，会立刻被强制注销财产充公）。
- 无法判断时按最坏情况处理，比如因保密制度不能阅读就按未生效、未被执行看待。
- 上级规章制定过程可以讨论规章草案下的工作场景，包括制定下级规章的场景。只有特定上级规章导致特定下级规章草案不能产生，引入讨论才有意义。一旦离开上级规章制定程序的时间、地点、人员这些条件就不能提前讨论下级规章，因为这时上级规章（下级规章制定修订程序）还没有生效，不应该暗示自己的内定角色。
- 待实现的后续规则：不遵守则由自然人承担。比如一个共同体的上级规章被架空时讨论下级规章，则以该自然人代替共同体承担规章中的权利，比如向执行下级规章的员工发工资。（也就是从共同体剥离，并入个人领域）"
附件32. - 顶层权利分配规则肯定在保密制度之上，因此PSMD只讨论公开资料。
- 如果某个审议环节从某网址取得一份资料，这份资料从产生、生效、所有使用环节都从这个网址获得。比如是指令，下达指令者应在这个网址发布指令，然后通知接受指令者去阅读。
附件32.2. - 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。
  - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。
附件33. 比如不采用PS标准的共同体，制定规章时以采用PS标准分支下的案例为依据，则自动增加采用PS标准的动议，切换生效之后才能讨论所制定规章。
附件33.2. - 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。
- 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。
附件34. - 例如：共同体A采用PS标准，共同体B、C没有。当B在上级规章未生效时要讨论下级规章。B向C提出咨询，C收到B发出的原始咨询内容。B向A提出咨询，咨询内容自动转化为“如何在规章中增加PS标准”，A无法收到B发出的原始咨询内容。这条规则主要提醒自我安慰性的求助，向反对者求助就是承认自身行为导致问题无解。
- 在父项目，各隔离分支将使用不同记账单位。相同金额不同单位，视为同工同酬。比如采用PS标准的分支使用M为单位，不采用PS标准分支使用N为单位，自由兑换的平衡点是1M兑换10N。一项工作的报酬是5，两个分支账号分别得到5M（可兑换50N）、5N的报酬。
附件34.1. - 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。
  - 现状常常被特殊化。
- 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。
附件34.3. - 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。
  - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。
    - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。
- 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。
附件43. 注意判断：即使规章（包括草案、参考案例）已经足够完善，足以保证准确估算贡献符合利益，依然有成员下意识地高估自己的贡献、低估其他成员的贡献，无法自控。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.9d12877c.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 9d12877c</h3><hr/><p>正文:</p><p>1. 针对不同条件给出 建议如下：<br/>
2.1. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。<br/>
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。<br/>
2.2. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合 附件31、附件32、附件33、附件34。<br/>
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。<br/>
2.3. 条件：<br/>
- 不能按照附件20增加补充信息。<br/>
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。<br/>
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。<br/>
2.4. 条件：还在筹备因此无法补充信息的。<br/>
建议：参考booting标准模型。<br/>
3. 如果有其它可行方案请发到<huangyg@mars22.com>，我将按照附件21核实。<br/>
附件20.1. 对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：<br/>
附件20.2.1. 涉事各方全体同意，推举一名或多名保证人：<br/>
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。<br/>
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。<br/>
附件20.2.2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。<br/>
附件20.2.3. 涉事各方签署 附件21，承诺遵守该条件，将生效、执行的记录作为补充信息。<br/>
附件21.1. 公布完整、连续、不可删改的执行记录，证实方案的效果。<br/>
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。<br/>
附件21.2. 已发布开放的要约，只有取得该效果才有收益。<br/>
附件30. 定义：已有基础制度和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。<br/>
附件31.1. 规章条款的上下级关系，根据制定、修订权定义。<br/>
附件31.2. 人员的上下级关系，根据任免权定义。<br/>
附件31.3. 严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。<br/>
附件31.4. 严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。<br/>
附件32.1. 所有人员的所有工作结果默认为公开，对外发布。<br/>
附件32.2. 按附件31上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行规定，保密制度不得改变。<br/>
附件32.3. 一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。<br/>
附件32.4. 如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。<br/>
附件33.1. 制定规章要明确预期效果。<br/>
附件33.2. 接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。<br/>
附件33.3. 如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。<br/>
附件33.4. 分支隔离规则适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。<br/>
附件34.1. 对相同事项的不同处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。<br/>
附件34.2. 实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。<br/>
附件34.3. 规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实际收到的问题。<br/>
附件34.4. 查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。<br/>
附件42. 定义：需要以未来的收入换取资源，而且需要与同行争夺。<br/>
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。<br/>
附件43. 定义：核心人员凭借职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。<br/>
反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。<br/>
</p><hr/><p>注释:</p><p>2. 2.1. 由于规章只能改变有意识、理性的行为，所以根据条件提出建议。<br/>
3. - "可行"是指：<br/>
  - 方案的内容完整、准确、无二义性，具备相关岗位普通资质的人员可以自行阅读、使用。<br/>
  - 在独立的第三方实施，可以按预期的比率产生预期的效果。<br/>
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。<br/>
附件20. 附件20.2. - upgradeby应该分内部、外部两种情况定义。<br/>
附件31. - 以“规章条款”为单位。比如某公司章程有一条：股东会三分之二表决权通过可以修订章程。这条本身就在章程里面，所以也能修订自己。（比如修改为：股东会四分之三表决权通过可以修订章程。）这个条款就比章程的其它条款都高一级。无论怎么组合编集，都不影响这种层级关系。<br/>
- 比如规章写明A任免B和C，即使在其它文件使用“B是C上级”、“C接受B的指令”这类措辞，本标准下BC平级、都是A下级。A缺席时B讨论C的人选即违规（如果B是章程中有PS标准的账号，会立刻被强制注销财产充公）。<br/>
- 无法判断时按最坏情况处理，比如因保密制度不能阅读就按未生效、未被执行看待。<br/>
- 上级规章制定过程可以讨论规章草案下的工作场景，包括制定下级规章的场景。只有特定上级规章导致特定下级规章草案不能产生，引入讨论才有意义。一旦离开上级规章制定程序的时间、地点、人员这些条件就不能提前讨论下级规章，因为这时上级规章（下级规章制定修订程序）还没有生效，不应该暗示自己的内定角色。<br/>
- 待实现的后续规则：不遵守则由自然人承担。比如一个共同体的上级规章被架空时讨论下级规章，则以该自然人代替共同体承担规章中的权利，比如向执行下级规章的员工发工资。（也就是从共同体剥离，并入个人领域）"<br/>
附件32. - 顶层权利分配规则肯定在保密制度之上，因此PSMD只讨论公开资料。<br/>
- 如果某个审议环节从某网址取得一份资料，这份资料从产生、生效、所有使用环节都从这个网址获得。比如是指令，下达指令者应在这个网址发布指令，然后通知接受指令者去阅读。<br/>
附件32.2. - 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。<br/>
  - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。<br/>
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。<br/>
附件33. 比如不采用PS标准的共同体，制定规章时以采用PS标准分支下的案例为依据，则自动增加采用PS标准的动议，切换生效之后才能讨论所制定规章。<br/>
附件33.2. - 接受质询并回应，可以检验该成员是否下意识地把自己的特殊化、隐蔽化。<br/>
- 依据的客观性，可以判断该成员能否在有意识的情况下判断效果。<br/>
附件34. - 例如：共同体A采用PS标准，共同体B、C没有。当B在上级规章未生效时要讨论下级规章。B向C提出咨询，C收到B发出的原始咨询内容。B向A提出咨询，咨询内容自动转化为“如何在规章中增加PS标准”，A无法收到B发出的原始咨询内容。这条规则主要提醒自我安慰性的求助，向反对者求助就是承认自身行为导致问题无解。<br/>
- 在父项目，各隔离分支将使用不同记账单位。相同金额不同单位，视为同工同酬。比如采用PS标准的分支使用M为单位，不采用PS标准分支使用N为单位，自由兑换的平衡点是1M兑换10N。一项工作的报酬是5，两个分支账号分别得到5M（可兑换50N）、5N的报酬。<br/>
附件34.1. - 注意特殊化的隐藏方案：不需要与其它方案对比，不需要显性地公布内容，而视为已经通过产生效力。<br/>
  - 现状常常被特殊化。<br/>
- 注意判断：成员下意识地把自己赞成的方案特殊化、隐蔽化。<br/>
附件34.3. - 避免断章取义：隐藏规章之间的依赖关系，截取个别章节和效果，用来支持相反的前置条款。<br/>
  - 例如：不刷牙的张三向刷牙的李四询问后续问题，李四只需要回答如何从不刷牙开始刷牙，而无须回答张三的原始问题。以免被断章取义。<br/>
    - 注意是后续问题。如果询问刷牙的效果（假设这是他们最初的选择分岔点），则可以直接回答。<br/>
- 注意：有的是故意设套。也有下意识地--理性的一面已经做出可靠的判断，潜意识里做出相反的选择，于是无法自控地沿着曾经说服过自己的模式去“套话”。<br/>
附件43. 注意判断：即使规章（包括草案、参考案例）已经足够完善，足以保证准确估算贡献符合利益，依然有成员下意识地高估自己的贡献、低估其他成员的贡献，无法自控。<br/>
</p><hr/></body></html>
enter maketermtext:9e6bc34f     prefix:
9e6bc34f>upgradestr:
enter maketermtext:d1f88a2c     prefix:1.
d1f88a2c>upgradestr:
9e6bc34f>upgradestr:
enter maketermtext:2e758794     prefix:2.
2e758794>upgradestr:
9e6bc34f>upgradestr:
enter maketermtext:d13b27d1     prefix:3.
d13b27d1>upgradestr:
9e6bc34f>upgradestr:
enter maketermtext:df39a1ed     prefix:4.
df39a1ed>upgradestr:
../view/term.9e6bc34f.md文件更新，内容如下:
条款 9e6bc34f 正文:
1. 所有人员的所有工作结果默认为公开，对外发布。
2. 按PS标准上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行 规定，保密制度不得改变。
3. 一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。
4. 如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。

---
条款 9e6bc34f readme:
- 顶层权利分配规则肯定在保密制度之上，因此PSMD只讨论公开资料。
- 如果某个审议环节从某网址取得一份资料，这份资料从产生、生效、所有使用环节都从这个网址获得。比如是指令，下达指令者应在这个网址发布指令，然后通知接受指令者去阅读。
2. - 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。
  - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.9e6bc34f.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 9e6bc34f</h3><hr/><p>正文:</p><p>1. 所有人员的所有工 作结果默认为公开，对外发布。<br/>
2. 按PS标准上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行 规定，保密制度不得改变。<br/>
3. 一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。<br/>
4. 如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。<br/>
</p><hr/><p>注释:</p><p>- 顶层权利分配规则肯定在保密制度之上，因此PSMD只讨论公开资料。<br/>
- 如果某个审议环节从某网址取得一份资料，这份资料从产生、生效、所有使用环节都从这个网址获得。比如是指令，下达指令者应在这个网址发布指令，然后通知接受指令者去阅读。<br/>
2. - 注意特殊化的保密规定：下级规章或由下级规章任免的人员，规定了上级规章及其工作记录的密级。<br/>
  - 常见于规章制订、人员任免脱离上级规章，出现脱节的情况。借保密隐藏过失。<br/>
- 注意判断：成员下意识地把自己的工作特殊化、隐蔽化。<br/>
</p><hr/></body></html>
enter maketermtext:a1c197a9     prefix:
a1c197a9>upgradestr:
../view/term.a1c197a9.md文件更新，内容如下:
条款 a1c197a9 正文:
 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.a1c197a9.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 a1c197a9</h3><hr/><p>正文:</p><p> 涉事各方分别自述， 交叉核实。将所有记录合并作为补充信息。<br/>
</p><hr/></body></html>
enter maketermtext:b3124d50     prefix:
b3124d50>upgradestr:
enter maketermtext:583d6243     prefix:1.
583d6243>upgradestr:
b3124d50>upgradestr:
enter maketermtext:cb4ab0e9     prefix:附件42.
cb4ab0e9>upgradestr:
b3124d50>upgradestr:
enter maketermtext:0ccddb29     prefix:附件44.
0ccddb29>upgradestr:
b3124d50>upgradestr:
enter maketermtext:056e71fb     prefix:附件1406.
056e71fb>upgradestr:
enter maketermtext:48577ce8     prefix:附件1406.1.
48577ce8>upgradestr:
056e71fb>upgradestr:
enter maketermtext:7506353d     prefix:附件1406.2.
7506353d>upgradestr:
056e71fb>upgradestr:
enter maketermtext:260ca049     prefix:附件1406.3.
260ca049>upgradestr:
056e71fb>upgradestr:
enter maketermtext:c87ec159     prefix:附件1406.4.
c87ec159>upgradestr:
../view/term.b3124d50.md文件更新，内容如下:
条款 b3124d50 正文:
1. 如果符合附件44的情况，则附件1406自动生效。
附件42. 定义：需要以未来的收入换取资源，而且需要与同行争夺。
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。
附件44. 出现以下情况之一：
- 决策部门未界定执行部门工作的合规性要求。
- 决策部门界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如通用工单、日志。
附件1406.1. 在执行部门内，基本制度和劳动合同未定义的事项由经理直接指挥。
附件1406.2. 直接指挥的方式：
  - 经理填写通用工单明确事项的处理要求，并交给负责执行的成员；
  - 经理制订具体规章明确事项的处理要求，并提交给决策部门备案，决策部门签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单并执行。
附件1406.3. 经理和执行人员都要向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。
附件1406.4. 决策部门成员应：
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本制度的修订动议。
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本制度的修订动议，提交审议报告。
  - 在审议周期结束前对基本制度修订动议进行表决。

---
条款 b3124d50 readme:
附件44. - 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合附件42，如果符合应该在设立时解决。
附件1406. 1406准确的定位是决策部门的动议套件，可以用作其它模型的附件。 ​​​
附件1406.2. 在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。
附件1406.3. - 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
附件1406.4. - 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.b3124d50.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 b3124d50</h3><hr/><p>正文:</p><p>1. 如果符合附件44的 情况，则附件1406自动生效。<br/>
附件42. 定义：需要以未来的收入换取资源，而且需要与同行争夺。<br/>
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。<br/>
附件44. 出现以下情况之一：<br/>
- 决策部门未界定执行部门工作的合规性要求。<br/>
- 决策部门界定了执行部门工作的合规性要求。<br/>
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。<br/>
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如通用工单、日志。<br/>
附件1406.1. 在执行部门内，基本制度和劳动合同未定义的事项由经理直接指挥。<br/>
附件1406.2. 直接指挥的方式：<br/>
  - 经理填写通用工单明确事项的处理要求，并交给负责执行的成员；<br/>
  - 经理制订具体规章明确事项的处理要求，并提交给决策部门备案，决策部门签收后具体规章即生效。执行部门成员根据生效的具体规章自行填写通用工单并执行。<br/>
附件1406.3. 经理和执行人员都要向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：<br/>
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；<br/>
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。<br/>
附件1406.4. 决策部门成员应：<br/>
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本制度的修订动议。<br/>
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本制度的修订动议，提交审议报告。<br/>
  - 在审议周期结束前对基本制度修订动议进行表决。<br/>
</p><hr/><p>注释:</p><p>附件44. - 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。<br/>
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。<br/>
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合附件42，如果符合应该在设立时解决。<br/>
附件1406. 1406准确的定位是决策部门的动议套件，可以用作其它模型的附件。 ​​​<br/>
附件1406.2. 在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。<br/>
附件1406.3. - 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。<br/>
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。<br/>
附件1406.4. - 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。<br/>
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。<br/>
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......<br/>
</p><hr/></body></html>
enter maketermtext:bafdd0aa     prefix:
bafdd0aa>upgradestr:
../view/term.bafdd0aa.md文件更新，内容如下:
条款 bafdd0aa 正文:
 p=20，p%=20%。

---
条款 bafdd0aa readme:
本条款设置了参数p的初始值。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.bafdd0aa.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 bafdd0aa</h3><hr/><p>正文:</p><p> p=20，p%=20%。<br/>
</p><hr/><p>注释:</p><p>本条款设置了参数p的初始值。<br/>
</p><hr/></body></html>
enter maketermtext:bb8005b9     prefix:
bb8005b9>upgradestr:
../view/term.bb8005b9.md文件更新，内容如下:
条款 bb8005b9 正文:
 对自述难以核实的情况下，可以按照下一条方式之一增加补充信息：

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.bb8005b9.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 bb8005b9</h3><hr/><p>正文:</p><p> 对自述难以核实的情 况下，可以按照下一条方式之一增加补充信息：<br/>
</p><hr/></body></html>
enter maketermtext:bba7c6f1     prefix:
bba7c6f1>upgradestr:
../view/term.bba7c6f1.md文件更新，内容如下:
条款 bba7c6f1 正文:
 p=20，p%=20%。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.bba7c6f1.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 bba7c6f1</h3><hr/><p>正文:</p><p> p=20，p%=20%。<br/>
</p><hr/></body></html>
enter maketermtext:c8254555     prefix:
c8254555>upgradestr:
../view/term.c8254555.md文件更新，内容如下:
条款 c8254555 正文:
 严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.c8254555.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 c8254555</h3><hr/><p>正文:</p><p> 严格执行制定、修订 程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。<br/>
</p><hr/></body></html>
enter maketermtext:c87ec159     prefix:
c87ec159>upgradestr:
../view/term.c87ec159.md文件更新，内容如下:
条款 c87ec159 正文:
 决策部门成员应：
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本制度的修订动议。
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本制度的修订动议，提交审议报告。
  - 在审议周期结束前对基本制度修订动议进行表决。

---
条款 c87ec159 readme:
- 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.c87ec159.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 c87ec159</h3><hr/><p>正文:</p><p> 决策部门成员应：<br/>
  - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本制度的修订动议。<br/>
  - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本制度的修订动议，提交审议报告。<br/>
  - 在审议周期结束前对基本制度修订动议进行表决。<br/>
</p><hr/><p>注释:</p><p>- 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。<br/>
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。<br/>
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......<br/>
</p><hr/></body></html>
enter maketermtext:cb4ab0e9     prefix:
cb4ab0e9>upgradestr:
../view/term.cb4ab0e9.md文件更新，内容如下:
条款 cb4ab0e9 正文:
 定义：需要以未来的收入换取资源，而且需要与同行争夺。
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.cb4ab0e9.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 cb4ab0e9</h3><hr/><p>正文:</p><p> 定义：需要以未来的 收入换取资源，而且需要与同行争夺。<br/>
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。<br/>
</p><hr/></body></html>
enter maketermtext:cc0fba2f     prefix:
cc0fba2f>upgradestr:
../view/term.cc0fba2f.md文件更新，内容如下:
条款 cc0fba2f 正文:
 针对不同条件给出建议如下：

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.cc0fba2f.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 cc0fba2f</h3><hr/><p>正文:</p><p> 针对不同条件给出建 议如下：<br/>
</p><hr/></body></html>
enter maketermtext:d0111eb4     prefix:
d0111eb4>upgradestr:
enter maketermtext:4116b506     prefix:1.
4116b506>upgradestr:
d0111eb4>upgradestr:
enter maketermtext:607455c0     prefix:2.
607455c0>upgradestr:
../view/term.d0111eb4.md文件更新，内容如下:
条款 d0111eb4 正文:
1. 公布完整、连续、不可删改的执行记录，证实方案的效果。
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。
2. 已发布开放的要约，只有取得该效果才有收益。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.d0111eb4.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 d0111eb4</h3><hr/><p>正文:</p><p>1. 公布完整、连续、 不可删改的执行记录，证实方案的效果。<br/>
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。<br/>
2. 已发布开放的要约，只有取得该效果才有收益。<br/>
</p><hr/></body></html>
enter maketermtext:d13b27d1     prefix:
d13b27d1>upgradestr:
../view/term.d13b27d1.md文件更新，内容如下:
条款 d13b27d1 正文:
 一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.d13b27d1.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 d13b27d1</h3><hr/><p>正文:</p><p> 一份文档所有用途使 用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。<br/>
</p><hr/></body></html>
enter maketermtext:d1f88a2c     prefix:
d1f88a2c>upgradestr:
../view/term.d1f88a2c.md文件更新，内容如下:
条款 d1f88a2c 正文:
 所有人员的所有工作结果默认为公开，对外发布。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.d1f88a2c.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 d1f88a2c</h3><hr/><p>正文:</p><p> 所有人员的所有工作 结果默认为公开，对外发布。<br/>
</p><hr/></body></html>
enter maketermtext:dbe32f79     prefix:
dbe32f79>upgradestr:
enter maketermtext:bb8005b9     prefix:1.
bb8005b9>upgradestr:
dbe32f79>upgradestr:
enter maketermtext:949e69e3     prefix:2.
949e69e3>upgradestr:
enter maketermtext:33523fe1     prefix:2.1.
33523fe1>upgradestr:
949e69e3>upgradestr:
enter maketermtext:a1c197a9     prefix:2.2.
a1c197a9>upgradestr:
949e69e3>upgradestr:
enter maketermtext:259076a4     prefix:2.3.
259076a4>upgradestr:
../view/term.dbe32f79.md文件更新，内容如下:
条款 dbe32f79 正文:
1. 对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
2.1. 涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3. 涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

---
条款 dbe32f79 readme:
2. - upgradeby应该分内部、外部两种情况定义。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.dbe32f79.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 dbe32f79</h3><hr/><p>正文:</p><p>1. 对自述难以核实的 情况下，可以按照第2条方式之一增加补充信息：<br/>
2.1. 涉事各方全体同意，推举一名或多名保证人：<br/>
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。<br/>
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。<br/>
2.2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。<br/>
2.3. 涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。<br/>
</p><hr/><p>注释:</p><p>2. - upgradeby应该分内部、外部两种情况定义。<br/>
</p><hr/></body></html>
enter maketermtext:dd1bc41b     prefix:
dd1bc41b>upgradestr:
../view/term.dd1bc41b.md文件更新，内容如下:
条款 dd1bc41b 正文:
 条件：还在筹备因此无法补充信息的。
建议：参考booting标准模型。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.dd1bc41b.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 dd1bc41b</h3><hr/><p>正文:</p><p> 条件：还在筹备因此 无法补充信息的。<br/>
建议：参考booting标准模型。<br/>
</p><hr/></body></html>
enter maketermtext:df39a1ed     prefix:
df39a1ed>upgradestr:
../view/term.df39a1ed.md文件更新，内容如下:
条款 df39a1ed 正文:
 如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.df39a1ed.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 df39a1ed</h3><hr/><p>正文:</p><p> 如果在密级规定范围 内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。<br/>
</p><hr/></body></html>
enter maketermtext:e6976035     prefix:
e6976035>upgradestr:
enter maketermtext:5b4e0597     prefix:1.
5b4e0597>upgradestr:
e6976035>upgradestr:
enter maketermtext:52edbf25     prefix:2.
52edbf25>upgradestr:
e6976035>upgradestr:
enter maketermtext:7288c99c     prefix:3.
7288c99c>upgradestr:
e6976035>upgradestr:
enter maketermtext:dd1bc41b     prefix:4.
dd1bc41b>upgradestr:
../view/term.e6976035.md文件更新，内容如下:
条款 e6976035 正文:
1. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。
2. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合附 件31、附件32、附件33、附件34。
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。
3. 条件：
- 不能按照附件20增加补充信息。
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。
4. 条件：还在筹备因此无法补充信息的。
建议：参考booting标准模型。

---
条款 e6976035 readme:
1. 由于规章只能改变有意识、理性的行为，所以根据条件提出建议。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.e6976035.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 e6976035</h3><hr/><p>正文:</p><p>1. 条件：同意按照附 件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。<br/>
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。<br/>
2. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合附 件31、附件32、附件33、附件34。<br/>
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。<br/>
3. 条件：<br/>
- 不能按照附件20增加补充信息。<br/>
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。<br/>
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。<br/>
4. 条件：还在筹备因此无法补充信息的。<br/>
建议：参考booting标准模型。<br/>
</p><hr/><p>注释:</p><p>1. 由于规章只能改变有意识、理性的行为，所以根据条件提出建议。<br/>
</p><hr/></body></html>
../data/allterm.yaml文件已更新。
```

- 检查比较大的几个文件，没有异常。个别换行排版问题以后统一微调。
- 多用了80分钟，已写入draft metadata。
---

[top](#top) | [index](#index)
<a id="20240504140000"></a>
## 14:00~14:29
debug-灰枣按"个"作为单位被算出很高热量。

- 确实提示了：unknow unit:    个      g       foodname:灰枣   foodamount:1 ，只是被数据表顶出屏幕上方。
- 提示来自 foodsum() 中这句
```
let r = 1;
        if (foodunit == fooddata.unit) {
            r = foodamount / fooddata.amount;
        } else if ((fRate[foodunit] !== undefined) && (fRate[foodunit][fooddata.unit] !== undefined)) {
            r = foodamount * fRate[foodunit][fooddata.unit] / fooddata.amount;
        } else {
            console.log("unknow unit:\t" + foodunit + "\t" + fooddata.unit + "\tfoodname:" + foodname + "\tfoodamount:" + foodamount);
        }
```
- 提示之后，就以r=1继续计算，所以按 e.灰枣.yaml 中的100g份量计算了。
- 在第二个else分支，unit字段有值但和营养成分表不同，也无法转换，foodsum()就返回false。让它归入未知食材表。
- 针对所有食材都未知的情况，增加了几处 if (etable["热量"] != null) {} else {} 判断。

执行结果：
```
D:\huangyg\git\raw>node raw
unknow unit:    个      g       foodname:灰枣   foodamount:1
all food have not element data...

                未算入成份表的食物
名称                    总数量          日均    单位
灰枣                    1.00            1.00    个
```

其实，在etablt的递归过程中，还有好几处累加。可能根本没有对比单位。正好单位相同就正确，否则数据会可能出错但没有任何提示。所以在raw task下增加一个低优先级的todo：  - '30': 检查etable递归过程是否累加amount字段而未检查unit字段的。

---

[top](#top) | [index](#index)
<a id="20240504143000"></a>
## 14:30~14:59
async

- async函数一个 Promise 对象。如果没有返回值就返回Promise.resolve(undefined)。
- async/await 基于 promise。

大致了解概念，但还不够实践。把js task下promise对象的学习todo向增加到60分钟：  
- '60': promise对象和async/await

---

[top](#top) | [index](#index)
<a id="20240504160000"></a>
## 16:00~16:59
github + codeberg page 范例

- 参考 20240426143000 draft
- hyg.gihub.io 可以使用，功能和blog/release/entry.html 一样。
  - 设置DNS，新增CNAME记录把 today.mars22.com 指向 hyg.github.io
- hyg.codeberg.page 可以实用，也是从本地 \git\page 库push
  - 设置DNS，将 ego.mars22.com 从A记录115.28.179.147改为CNAME记录，指向hyg.codeberg.page 需要半小时生效，可能申请ssl证书比github慢。
- 今后today和ego可以分别管理。

- 为term metadata -> code做准备，新增一个todo项：
    - '30': 学习 github actions和 workflows 的yaml语法
      readme: |
        - https://docs.github.com/zh/actions/creating-actions/metadata-syntax-for-github-actions
        - https://docs.github.com/zh/actions/learn-github-actions/finding-and-customizing-actions
- 为个人领域管理做准备，新增一个todo项：
    - '30': 设计ego.mars22.com 发布内容。
