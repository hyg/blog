# 2024.05.05.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[xuemen COD metadata-章程部分条款](#20240505074500)  
- 14:00	[根据新的term metadata，重新设计COM、deploy metadata。](#20240505140000)  
- 16:00	[term metadata的depend字段的内容写入term view](#20240505160000)  

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
  - ego的第1号事项：在season metadata中实现浮动时间表，修改日计划功能。
  - js的第1号事项：学习测试方法和工具
  - xuemen的第1号事项：五月报税
  - PSMD的第2号事项：term metadata的together,effect等字段的内容写入term view

- 90分钟时间片：
  - xuemen的第3号事项：xuemen COD metadata-S2状态下的部门模型
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - PSMD的第8号事项：整理近期手稿。

- 195分钟时间片：
  - PSMD的第1号事项：根据新的term metadata，重新设计COM、deploy、COD metadata，编辑出范例。
  - ego的第3号事项：在整理近期手稿之后，修订个人模型。
  - PSMD的第6号事项：term + COM matedata -> deploy metadata -> deploy view

---

[top](#top) | [index](#index)
<a id="20240505074500"></a>
## 7:45~10:59
xuemen COD metadata-章程部分条款

- 清理termset metadata + view,然后merge develop_newterm分支。
    - convert.js暂时保留，因为还有termtoterm()
    - 在tortoisegit，develop_newterm分支merge master
    - 在tortoisegit切换到master分支，没什么变化，merge develop_newterm，新metadata、view、conver都有了。
    - 命令行：git branch -D develop_newterm
    - 命令行：git push github --delete develop_newterm 失败，命令行下没有设ssl。
    - 删除两个残余termset metadata，commit after merge
    - 在tortoisegit的push界面，选remote branch右边省略号，展开各remote看到分支，右键delete。有效。
- 从公司章程开始整理，只编辑有用的条款：第八、十五、十八、二十条。

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
第十八条. 本条款按照第八条.（十）.条款修订。经理列席董事会会议。
第二十条. 本条款按照第八条.（十）.条款修订。监事行使下列职权：
第二十条.（一）. 本条款按照第八条.（十）.条款修订。检查公司财务；
第二十条.（二）. 本条款按照第八条.（十）.条款修订。对董事、高级管理人员执行公司职务的行为进行监督，对违反法律、行政法规、公司章程或者股东会决议的董 事、高级管理人员提出罢免的建议；
第二十条.（三）. 本条款按照第八条.（十）.条款修订。当董事、高级管理人员的行为损害公司的利益时，要求董事、高级管理人员予以纠正；
第二十条.（四）. 本条款按照第八条.（十）.条款修订。提议召开临时股东会会议，在董事会不履行本章程规定的召集和主持股东会会议职责时召集和主持股东会会议 ；
第二十条.（五）. 本条款按照第八条.（十）.条款修订。向股东会会议提出提案；
第二十条.（六）. 本条款按照第八条.（十）.条款修订。依照《公司法》第一百五十二条的规定，对董事、高级管理人员提起诉讼；
第二十条. 本条款按照第八条.（十）.条款修订。监事可以列席董事会会议。

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
第十八条. 本条款按照第八条.（十）.条款修订。经理列席董事会会议。<br/>
第二十条. 本条款按照第八条.（十）.条款修订。监事行使下列职权：<br/>
第二十条.（一）. 本条款按照第八条.（十）.条款修订。检查公司财务；<br/>
第二十条.（二）. 本条款按照第八条.（十）.条款修订。对董事、高级管理人员执行公司职务的行为进行监督，对违反法律、行政法规、公司章程或者股东会决议的董 事、高级管理人员提出罢免的建议；<br/>
第二十条.（三）. 本条款按照第八条.（十）.条款修订。当董事、高级管理人员的行为损害公司的利益时，要求董事、高级管理人员予以纠正；<br/>
第二十条.（四）. 本条款按照第八条.（十）.条款修订。提议召开临时股东会会议，在董事会不履行本章程规定的召集和主持股东会会议职责时召集和主持股东会会议 ；<br/>
第二十条.（五）. 本条款按照第八条.（十）.条款修订。向股东会会议提出提案；<br/>
第二十条.（六）. 本条款按照第八条.（十）.条款修订。依照《公司法》第一百五十二条的规定，对董事、高级管理人员提起诉讼； <br/>
第二十条. 本条款按照第八条.（十）.条款修订。监事可以列席董事会会议。<br/>
</p><hr/></body></html>
```

- 多用了50分钟，已登记。
- 追加todo项：
      - '60': xuemen COD metadata-章程实施细则
      - '90': xuemen COD metadata-S2状态下的部门模型

---

[top](#top) | [index](#index)
<a id="20240505140000"></a>
## 14:00~15:29
根据新的term metadata，重新设计COM、deploy metadata。

1. term定义条款和合同，包括正文、注释、层次结构、次序、修订关系，以及占位符、各级映射。
1. COM定义共同体的模型：placeholder替换成中性词，列出各局部的多种可以互相替换、效果相近的term。各COD的部署和运行经验汇总到COM。
1. deploy定义部署的初始条件、内部词汇和占位符的映射和term逐步生效的过程，期间可以有过渡性的条款或模型。
1. COD定义共同体的实例。实例中出现的error和term汇总到建模者，也可以发布新的COM。
1. error定义有效果偏差的term，以及有效果的term。索引位置暂定在allterm metadata。

COM备选结构
```
name:
id:
interface:
  <term.termid.entity.1>: value
  <term.termid.entity.2>: value
  <term.termid.asset.1>: value
  <term.termid.term.1>: value
  <term.termid.event.1>: value
  <term.termid.localid.1>: value
item:
  level0:
    permanent: //不可修订条款
      - termid:
        map:
        readme: |
      - termid:
    self: //自修订条款
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
```

deploy备选结构
```
deploy:
  init: 
    - termid:
      y: 
        termid:
        y:
        n:
        case:
          - cod: id
            log: |
            readme: |
        readme: |
      n: 
        errorid:
        y:
        n:
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
execution:

readme: |
effect:
```

还需要更多时间，追加一个todo项：
- '195': 根据新的term metadata，重新设计COM、deploy、COD metadata，编辑出范例。
---

[top](#top) | [index](#index)
<a id="20240505160000"></a>
## 16:00~16:59
term metadata的depend字段的内容写入term view

- 清理term.js中与termset有关代码。
- 在maketermtext()中添加depend、together、effect相关代码。
- 调整了readme的嵌套次序，从倒序恢复到正序。
- 实现了depend字段，执行效果：
```
---
......
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
```

追加一个todo项：
- '60': term metadata的together,effect等字段的内容写入term view

