# 2024.05.06.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[根据新的term metadata，重新设计COM、deploy、COD metadata。](#20240506074500)  
- 14:00	[整理章程实施细则](#20240506140000)  
- 16:00	[term metadata的together,effect等字段的内容写入term view](#20240506160000)  

---
season stat:

| task | alloc | sold | hold |
| --- | --- | --- | --- |
| total | 13275 | 7558 | 5717 |
| PSMD | 7000 | 4146 | 2854 |
| learn | 1000 | 312 | 688 |
| ego | 3000 | 1994 | 1006 |
| js | 1375 | 345 | 1030 |
| xuemen | 600 | 581 | 19 |
| raw | 300 | 150 | 150 |
| infra | 0 | 30 | -30 |

---

waiting list:


- 30分钟时间片：
  - learn的第1号事项：学习 github actions和 workflows 的yaml语法
  - raw的第1号事项：设计DRI metadata
  - PSMD的第2号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - learn的第2号事项：YARRRML

- 60分钟时间片：
  - js的第1号事项：学习测试方法和工具
  - ego的第1号事项：在node ego over时创建次日的计划，内容参考node ego plan输出。
  - xuemen的第1号事项：五月报税
  - js的第2号事项：promise对象和async/await

- 90分钟时间片：
  - PSMD的第1号事项：根据新的COM、deploy、COD metadata，编辑出范例。
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - PSMD的第8号事项：整理近期手稿。

- 195分钟时间片：
  - ego的第4号事项：在整理近期手稿之后，修订个人模型。
  - PSMD的第6号事项：term + COM matedata -> deploy metadata -> deploy view

---

[top](#top) | [index](#index)
<a id="20240506074500"></a>
## 7:45~10:59
根据新的term metadata，重新设计COM、deploy、COD metadata。

###  COM
COM定义共同体的模型：placeholder替换成中性词，列出各局部的多种可以互相替换、效果相近的term。各COD的部署和运行经验汇总到COM。

- 主要以权力分配为主线。利益分配、角色任免关系是否需要单独定义，或者建立索引，实际使用后回顾。  

实际使用：
- loop term要不要有localid。
    - 按修订层次排序应该固化吗，还是其中一种布局。
    - 可互相替换的条款，肯定需要在COM而不是term中表达。
- level0可以去掉，减少一层。
- 可互相替换的条款，序号怎么定，互相引用关系怎么定。
    - leveln.m
- 新的提议：
```
name:
id:
modeler:
  name:
  id:
  COM:
  IRI: //代替其它字段
interface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
termmaker:
  const: //不可修订条款
    - termid:
      map:
      readme: |
    - termid:
  loop: //自修订条款
    - termid:
      map:
      readme: |
    - termid:
  level1:
    - upgradeby:
      option:
        - termid:
          map:
          readme: |
        - termid:
    - upgradeby: //对于开源信息可以解决的，可以用readme说明而不列出具体term。
      readme:
  level2:
    - upgradeby:
      option:
        - termid:
          map:
          readme: |
        - termid:
termid: // not term maker
```

###  deploy
deploy定义部署的初始条件、内部词汇和占位符的映射和term逐步生效的过程，期间可以有过渡性的条款或模型。

- 部署过程应能自动生成专题讨论。
  - 对外的专题讨论，使用COMinterface替换placeholder。
  - 内部的专题讨论，使用interface替换placeholder。

```
name:
id:
COM:
COMinterface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
deployer: 
  name:
  id:
  COM:
  IRI: //代替其它字段
interface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
step:
  - termid:
    y: 
      termid:
      y:
      n:
      case:
        - cod: id
          log: |
          readme: |
      issue: //可以设计编号规则，单独另建专题（文件、文件夹或讨论区）。
        name:
        id:
        path:
      readme: |
        //案例分析，发言素材，讨论推演。
    n: 
      errorid:
      y:
      n:
        readme: |
          deploy failure.
          detail info...
  - errorid:
    y: 
      termid:
      y:
      n:
      case:
        - cod: id
          log: |
          readme: |
      readme: |
readme: |
logpath:
```

### COD
COD定义共同体的实例。实例中出现的error和term汇总到建模者，也可以发布新的COM。

- 应能自动生成专题讨论：
  - 对外的专题讨论，使用COMinterface替换placeholder。
  - 内部的专题讨论，使用interface替换placeholder。
- 应能自动生成COM的主要信息，发布经验。
```
name:
id:
COM：
deploy：
COMinterface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
interface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
termid:
logpath:
```

实际使用：
- loop term要不要有localid。
    - 按修订层次排序应该固化吗，还是其中一种布局。
    - 可互相替换的条款，肯定需要在COM而不是term中表达。
- level0可以去掉，减少一层。
- 可互相替换的条款，序号怎么定，互相引用关系怎么定。
    - leveln.m

新的提议：
```
name:
id:
modeler:
  name:
  id:
  COM:
  IRI: //代替其它字段
interface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
termmaker:
  const: //不可修订条款
    - termid:
      map:
      readme: |
    - termid:
  loop: //自修订条款
    - termid:
      map:
      readme: |
    - termid:
  level1:
    - upgradeby:
      option:
        - termid:
          map:
          readme: |
        - termid:
    - upgradeby: //对于开源信息可以解决的，可以用readme说明而不列出具体term。
      readme:
  level2:
    - upgradeby:
      option:
        - termid:
          map:
          readme: |
        - termid:
termid: // not term maker
```

追加todo项：
- '90': 根据新的COM、deploy、COD metadata，编辑出范例。
---

[top](#top) | [index](#index)
<a id="20240506140000"></a>
## 14:00~15:29
整理章程实施细则

- 参考：
    - xuemen库S2分支的内容
    - cod.template/Vertebrate
- 章程实施细则定位在基本管理制度，保留董事会职权，涉及股东会职权的条款列入附件，经理职权以下（含经理）的条款分离出来作为一般的工作。

### 章程实施细则

1. 股东会职权
    1. 根据公司法第五十九条、章程第八条（一）决定：公司分为几种状态，由股东会决定状态数量、名称、当前状态。董事会行使公司法第六十七条（七）（八）（九）、章程第十五条（八）（九）（十）所列职权时须明确适用的状态，以便状态切换时自动启用。
    1. 根据公司法第五十九条、章程第八条（一）决定：公司分为四种状态{S1：休眠，S2：增长，S3：稳定或缩减，S4：拓展}：
    * S1：休眠状态
        1. 根据公司法第五十七条决定：进入、离开S1状态时要编制财务会计报告。
		1. 根据公司法第五十九条（一）、章程第八条（二）决定：在进入S1状态时，由股东会选举一名执行董事，执行董事兼任公司经理。执行董事不定期向全体股东报告工作。
        1. 根据公司法第五十九条（四）、章程第八条（六）决定：
          - S1状态下出现赤字时，支出由执行董事垫付，记为公司向个人借款；
          - 离开S1状态时，，由股东会重建董事会，股东会授权董事会决定补偿方案：
			* 公司向执行董事借款的利息及偿还方案；
			* 执行董事所承担工作的报酬。
	  * S2：增长状态
		1. 根据公司法第五十七条决定：S2状态下董事会可以根据公司法第七十四条对经理授权，并规定行使这些职权的方式和时限，以及相应的奖惩办法。
      * S3：稳定或缩减状态
        1. 根据公司法第五十七条决定：S3状态下公司法第七十四条部分内容、章程第十八条（八）调整，董事会不得在章程以外对经理授权，经理及由经理提名、聘任的人员都严格按章程和基本管理制度、数学模型工作。
        1. 根据公司法第五十七条决定：S3状态下的数学模型及其代码实现属于基本管理制度，按公司法第六十七条（九）制定，这项职权不得对外授权。
	  * S4：拓展状态
		1. 新业务按照“发展状态”运行。
		1. 各业务公用的管理规章和数学模型、代码实现，按照“稳定或缩减状态”运行。
1. 董事会职权
    1. 在S2、S3状态下：设置产品部(IPU:Inner Product Unit)的规章制度，参与JPU（Joint Product Unit）。
    1. 在S2、S3状态下：设置内务部(ISU:Inner Service Unit)，委托ISU管理公司的资产（办公室、服务器及域名、人民币、内部记账单位、知识产权）。
    1. 在S2状态下：无人承担的任务均由经理承担。当这种情形发生时，按300%计算报酬。
    1. 在S2状态下：经理每个月向监事、董事会书面汇报工作。
    1. 在S3状态下：董事、监事可以调阅规章制度、数学模型的代码实现。

已追加todo项。
---

[top](#top) | [index](#index)
<a id="20240506160000"></a>
## 16:00~16:59
term metadata的together,effect等字段的内容写入term view

- 参考depend字段的代码，很容易实现。
- 在三级条款中随机插入了一些together和effect字段。

执行结果：
```

D:\huangyg\git\PSMD\src>node term term 2e4f11cb
enter maketermtext:2e4f11cb     prefix:
enter maketermtext:e55c000c     prefix:第八条.
enter maketermtext:a540486e     prefix:第八条.（一）.
enter maketermtext:21af48dd     prefix:第八条.（二）.
enter maketermtext:8b839d59     prefix:第八条.（三）.
enter maketermtext:0b305ce2     prefix:第八条.（四）.
enter maketermtext:53548d2d     prefix:第八条.（五）.
enter maketermtext:040463e3     prefix:第八条.（六）.
enter maketermtext:460c6741     prefix:第八条.（七）.
enter maketermtext:393c92a3     prefix:第八条.（八）.
enter maketermtext:f3cc3036     prefix:第八条.（九）.
enter maketermtext:62c421f2     prefix:第八条.（十）.
enter maketermtext:25c83dac     prefix:第十五条.
enter maketermtext:f64809f8     prefix:第十五条.（一）.
enter maketermtext:69632214     prefix:第十五条.（二）.
enter maketermtext:423005c6     prefix:第十五条.（三）.
enter maketermtext:615fc73f     prefix:第十五条.（四）.
enter maketermtext:09ead2c1     prefix:第十五条.（五）.
enter maketermtext:50430bca     prefix:第十五条.（六）.
enter maketermtext:bb0ea239     prefix:第十五条.（七）.
enter maketermtext:79f4f1e0     prefix:第十五条.（八）.
enter maketermtext:5884eea5     prefix:第十五条.（九）.
enter maketermtext:7957be41     prefix:第十五条.（十）.
enter maketermtext:4bbd5668     prefix:第十八条.
enter maketermtext:3f89e98f     prefix:第十八条.（一）.
enter maketermtext:2a25389c     prefix:第十八条.（二）.
enter maketermtext:b3012036     prefix:第十八条.（三）.
enter maketermtext:f81cd0f0     prefix:第十八条.（四）.
enter maketermtext:c73b28b3     prefix:第十八条.（五）.
enter maketermtext:500e281d     prefix:第十八条.（六）.
enter maketermtext:dd706d9c     prefix:第十八条.（七）.
enter maketermtext:a2804f8b     prefix:第十八条.（八）.
enter maketermtext:6208f678     prefix:第二十条.
enter maketermtext:b96e83c2     prefix:第二十条.（一）.
enter maketermtext:99520853     prefix:第二十条.（二）.
enter maketermtext:5fec38ed     prefix:第二十条.（三）.
enter maketermtext:c0eb6977     prefix:第二十条.（四）.
enter maketermtext:aa469da0     prefix:第二十条.（五）.
enter maketermtext:f732b768     prefix:第二十条.（六）.
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
第八条.（十）. 本条款按照本条款修订。修改公司章程；
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
第十八条.（八）. 本条款按照第八条.（十）.条款修订。董事会授予的其他职权。
第十八条.（八）. 本条款按照第八条.（十）.条款修订。经理列席董事会会议。
第二十条. 本条款按照第八条.（十）.条款修订。监事行使下列职权：
第二十条.（一）. 本条款按照第八条.（十）.条款修订。检查公司财务；
第二十条.（二）. 本条款按照第八条.（十）.条款修订。对董事、高级管理人员执行公司职务的行为进行监督，对违反法律、行政法规、公司章程或者股东会决议的董 事、高级管理人员提出罢免的建议；
第二十条.（三）. 本条款按照第八条.（十）.条款修订。当董事、高级管理人员的行为损害公司的利益时，要求董事、高级管理人员予以纠正；
第二十条.（四）. 本条款按照第八条.（十）.条款修订。提议召开临时股东会会议，在董事会不履行本章程规定的召集和主持股东会会议职责时召集和主持股东会会议 ；
第二十条.（五）. 本条款按照第八条.（十）.条款修订。向股东会会议提出提案；
第二十条.（六）. 本条款按照第八条.（十）.条款修订。依照《公司法》第一百五十二条的规定，对董事、高级管理人员提起诉讼；
第二十条.（六）. 本条款按照第八条.（十）.条款修订。监事可以列席董事会会议。

---
readme:
条款 2e4f11cb. 章程是公司的顶级规章。但它的条款在修订层次上并不平等。
第十五条. 董事会是决策部门，在不同类型共同体中可能称为董事会、理事会、委员会等等。
第十五条.（四）. 注意：新公司法已取消。

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
第八条.（十）. 本条款按照本条款修订。修改公司章程；<br/>
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
第十八条.（八）. 本条款按照第八条.（十）.条款修订。董事会授予的其他职权。<br/>
第十八条.（八）. 本条款按照第八条.（十）.条款修订。经理列席董事会会议。<br/>
第二十条. 本条款按照第八条.（十）.条款修订。监事行使下列职权：<br/>
第二十条.（一）. 本条款按照第八条.（十）.条款修订。检查公司财务；<br/>
第二十条.（二）. 本条款按照第八条.（十）.条款修订。对董事、高级管理人员执行公司职务的行为进行监督，对违反法律、行政法规、公司章程或者股东会决议的董 事、高级管理人员提出罢免的建议；<br/>
第二十条.（三）. 本条款按照第八条.（十）.条款修订。当董事、高级管理人员的行为损害公司的利益时，要求董事、高级管理人员予以纠正；<br/>
第二十条.（四）. 本条款按照第八条.（十）.条款修订。提议召开临时股东会会议，在董事会不履行本章程规定的召集和主持股东会会议职责时召集和主持股东会会议 ；<br/>
第二十条.（五）. 本条款按照第八条.（十）.条款修订。向股东会会议提出提案；<br/>
第二十条.（六）. 本条款按照第八条.（十）.条款修订。依照《公司法》第一百五十二条的规定，对董事、高级管理人员提起诉讼； <br/>
第二十条.（六）. 本条款按照第八条.（十）.条款修订。监事可以列席董事会会议。<br/>
</p><hr/><p>注释:</p><p>章程是公司的顶级规章。但它的条款在修订层次上并不平等。<br/>
第十五条. 董事会是决策部门，在不同类型共同体中可能称为董事会、理事会、委员会等等。<br/>
第十五条.（四）. 注意：新公司法已取消。<br/>
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

登记20分钟。余下时间回到COD metadata的范例。