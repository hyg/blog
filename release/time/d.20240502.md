# 2024.05.02.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。



<a id="index"></a>
- 07:45	[error,knowledge metadata的placeholder升级](#20240502074500)  
- 09:30	[term metadata -> term html](#20240502093000)  
- 14:00	[把waitinglist前几名和次日可能的模版绑定结果写入日小结。](#20240502140000)  
- 14:30	[测试](#20240502143000)  
- 16:00	[日小结后的git操作编写成批处理文件](#20240502160000)  

---
season stat:
| task | alloc | sold | rest |
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

30分钟时间片：
- ego的第1号事项：整理废弃git库，包括本地和远程。
- learn的第1号事项：学习正则表达式RegExp
- raw的第1号事项：debug-灰枣按"个"作为单位被算出很高热量。
- ego的第2号事项：makedayplan()创建draft文件夹，合并makedayplan和makedaydraft。

60分钟时间片：
- PSMD的第1号事项：term metadata的upgradeby,depend,together,effect等字段的内容写入term view
- js的第1号事项：Jade Language生成html view
- xuemen的第1号事项：五月报税
- js的第2号事项：学习测试方法和工具

90分钟时间片：
- PSMD的第2号事项：自动把旧格式转化为新格式：
- learn的第3号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
- PSMD的第7号事项：整理近期手稿。

195分钟时间片：
- xuemen的第2号事项：xuemen COD metadata
- PSMD的第5号事项：term + COM matedata -> deploy metadata -> deploy view
- ego的第5号事项：在整理近期手稿之后，修订个人模型。

---

[top](#top) | [index](#index)
<a id="20240502074500"></a>
## 7:45~8:44
error,knowledge metadata的placeholder升级

- 新error metadata结构：
```
name:
id:
interface:
  <error.termid.entity.1>: value
  <error.termid.entity.2>: value
  <error.termid.asset.1>: value
  <error.termid.term.1>: value
  <error.termid.event.1>: value
  <error.termid.localid.1>: value
text: |
readme: |
```

### commit

编辑两个临时error metadata文件（仅供测试用）：  
- error.1.yaml
```
name: 执行部门陷入割据
id: 1
interface:
  <error.1.term.1>: 资源不足
  <error.1.entity.1>: 共同体
  <error.1.entity.2>: 下达指令者
  <error.1.entity.3>: 决策部门
  <error.1.entity.4>: 执行部门
  <error.1.asset.1>: 工单
  <error.1.asset.2): 日志
text: |
  出现以下情况之一：
  - <error.1.entity.3>未界定<error.1.entity.4>工作的合规性要求。
  - <error.1.entity.3>界定了<error.1.entity.4>工作的合规性要求。
    - <error.1.entity.4>成员对指令不进行合规检查，即使不合规也执行。
    - <error.1.entity.4>成员及下达指令者未按要求填写和提交表单，比如<error.1.asset.1>、<error.1.asset.2>。
readme: |
  - <error.1.entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
  - <error.1.entity.1>曾经对<error.1.entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
  - 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<error.1.entity.1>设立阶段，就要确定是否符合<error.1.term.1>，如果符合应该在设立时解决。
```

- error.2.yaml
```
name: 无法有效分配未来收入
id: 2
interface:
  <error.2.entity.1>: 共同体
text: |
  <error.2.entity.1>涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。
readme: |
  可能的原因包括：
    - <error.2.entity.1>内部废除该承诺，可能成为有效力的决议；
    - <error.2.entity.1>内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。
```

- 在git分支develop-newterm中修改commit()关于error的代码，执行结果：
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
调整分配主比例 01e1c775
commit term.2.yaml
自修订条款 23f76740
commit term.3.yaml
利益分配比例 bafdd0aa
commit term.4.yaml
集体决策 988ea839
../data/term.01e1c775.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.23f76740.yaml文件已更新。../data/term.2.yaml可以删除。
../data/term.bafdd0aa.yaml文件已更新。../data/term.3.yaml可以删除。
../data/term.988ea839.yaml文件已更新。../data/term.4.yaml可以删除。
before replace the error:
1 name: 执行部门陷入割据
id: '1'
interface:
  <error.1.term.1>: 资源不足
  <error.1.entity.1>: 共同体
  <error.1.entity.2>: 下达指令者
  <error.1.entity.3>: 决策部门
  <error.1.entity.4>: 执行部门
  <error.1.asset.1>: 工单
  <error.1.asset.2): 日志
text: |
  出现以下情况之一：
  - <error.1.entity.3>未界定<error.1.entity.4>工作的合规性要求。
  - <error.1.entity.3>界定了<error.1.entity.4>工作的合规性要求。
    - <error.1.entity.4>成员对指令不进行合规检查，即使不合规也执行。
    - <error.1.entity.4>成员及下达指令者未按要求填写和提交表单，比如<error.1.asset.1>、<error.1.asset.2>。
readme: |
  - <error.1.entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
  - <error.1.entity.1>曾经对<error.1.entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
  - 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<error.1.entity.1>设立阶段，就要确定是否符合<error.1.term.1>，如果符合应该在设立时解决。

after replace the error:
1 name: 执行部门陷入割据
id: 0ccddb29
interface:
  <error.0ccddb29.term.1>: 资源不足
  <error.0ccddb29.entity.1>: 共同体
  <error.0ccddb29.entity.2>: 下达指令者
  <error.0ccddb29.entity.3>: 决策部门
  <error.0ccddb29.entity.4>: 执行部门
  <error.0ccddb29.asset.1>: 工单
  <error.0ccddb29.asset.2): 日志
text: |
  出现以下情况之一：
  - <error.0ccddb29.entity.3>未界定<error.0ccddb29.entity.4>工作的合规性要求。
  - <error.0ccddb29.entity.3>界定了<error.0ccddb29.entity.4>工作的合规性要求。
    - <error.0ccddb29.entity.4>成员对指令不进行合规检查，即使不合规也执行。
    - <error.0ccddb29.entity.4>成员及下达指令者未按要求填写和提交表单，比如<error.0ccddb29.asset.1>、<error.0ccddb29.asset.2>。
readme: |
  - <error.0ccddb29.entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
  - <error.0ccddb29.entity.1>曾经对<error.0ccddb29.entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
  - 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<error.0ccddb29.entity.1>设立阶段，就要确定是否符合<error.0ccddb29.term.1>，如果符合应该在设立时解决。

../data/error.0ccddb29.yaml文件已更新。../data/error.1.yaml可以删除。
before replace the error:
2 name: 无法有效分配未来收入
id: '2'
interface:
  <error.2.entity.1>: 共同体
text: |
  <error.2.entity.1>涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。
readme: |
  可能的原因包括：
    - <error.2.entity.1>内部废除该承诺，可能成为有效力的决议；
    - <error.2.entity.1>内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。

after replace the error:
2 name: 无法有效分配未来收入
id: 48291d8c
interface:
  <error.48291d8c.entity.1>: 共同体
text: |
  <error.48291d8c.entity.1>涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。
readme: |
  可能的原因包括：
    - <error.48291d8c.entity.1>内部废除该承诺，可能成为有效力的决议；
    - <error.48291d8c.entity.1>内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。

../data/error.48291d8c.yaml文件已更新。../data/error.2.yaml可以删除。
```

-  knowledge metadata中没有placeholder，所以不用更改。只是删除了termset部分代码。所有种类commit的综合执行结果：
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
调整分配主比例 01e1c775
commit term.2.yaml
自修订条款 23f76740
commit term.3.yaml
利益分配比例 bafdd0aa
commit term.4.yaml
集体决策 988ea839
../data/term.01e1c775.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.23f76740.yaml文件已更新。../data/term.2.yaml可以删除。
../data/term.bafdd0aa.yaml文件已更新。../data/term.3.yaml可以删除。
../data/term.988ea839.yaml文件已更新。../data/term.4.yaml可以删除。
../data/error.0ccddb29.yaml文件已更新。../data/error.1.yaml可以删除。
../data/error.48291d8c.yaml文件已更新。../data/error.2.yaml可以删除。
knowledge depend replace. error:2 -> 48291d8c
../data/knowledge.3b7582cd.yaml文件已更新。../data/knowledge.1.yaml可以删除。
旧文件:../data/knowledge.2.yaml中depend字段的id: cde3c3e2 未能替换，请人工检查。
旧文件:../data/knowledge.2.yaml中objid: 5b4e0597 未能替换，请人工检查。
knowledge effect replace. id:2 -> 48291d8c
../data/knowledge.d8a0602f.yaml文件已更新。../data/knowledge.2.yaml可以删除。
```
涉及error.2的term.1中effect字段也正确：
```
effect:
  - errorid: 2
    percent: 50
    map:
      <error.2.entity.1>: <term.1.entity.3>
    text: |
      1609模型可以有效分配未来收入，本条款是其中一部分。
```
term.01e1c775:
```
effect:
  - errorid: 48291d8c
    percent: '50'
    map:
      <error.48291d8c.entity.1>: <term.01e1c775.entity.3>
    text: |
      1609模型可以有效分配未来收入，本条款是其中一部分。
```

### metadata -> view

- 修改 makeerrorview() makeerrortext() makeerrornet()
- 由于范例knowledge.type字段是termsettoerror，所以effect字段也暂时不处理，error.0ccddb29目前无解：
```

D:\huangyg\git\PSMD\src>node term error 0ccddb29
../view/error.0ccddb29.md文件更新，内容如下:
问题 0ccddb29 正文:
出现以下情况之一：
- 决策部门未界定执行部门工作的合规性要求。
- 决策部门界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。

---
问题 0ccddb29 readme:
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合资源不足，如果符合应该在设立时解决。

---
解决建议:
出现偏差的部门内部互相确认:相关职务行为是有意识还是无意识的。
  - 无意识的行为：应暂时停职，由相关成员自行纠偏，然后根据情况复职或者重新竞聘。
  - 有意识的行为：可以基于理性人假设，从行为偏差分析规章偏差，根据情况产生工单。如需进一步建议请联系<huang@mars22.com>
---
```
- 而error. 48291d8c可以正确生成view：
```

D:\huangyg\git\PSMD\src>node term error 48291d8c
    - 48291d8c>发现knowledge d8a0602f :使用term [5b4e0597](../view/term.5b4e0597.md) 可能解决 error 48291d8c 预估有效的比例是 60%
    - 48291d8c>使用knowledge d8a0602f 需要先解决error:
    - 48291d8c>[cde3c3e2](../view/error.cde3c3e2.md)
../view/error.48291d8c.md文件更新，内容如下:
问题 48291d8c 正文:
共同体涉及未来收入的承诺，无法保证兑现。因此，无法使用未来收入换取当下资源，只能以现有资源进行交易。

---
问题 48291d8c readme:
可能的原因包括：
  - 共同体内部废除该承诺，可能成为有效力的决议；
  - 共同体内部对同一笔未来收入安排其它用途，可能成为有效力的预算案。

---
解决建议:
出现偏差的部门内部互相确认:相关职务行为是有意识还是无意识的。
  - 无意识的行为：应暂时停职，由相关成员自行纠偏，然后根据情况复职或者重新竞聘。
  - 有意识的行为：可以基于理性人假设，从行为偏差分析规章偏差，根据情况产生工单。可以参考以下内容：
    - 48291d8c>发现knowledge d8a0602f :使用term [5b4e0597](../view/term.5b4e0597.md) 可能解决 error 48291d8c 预估有效的比例是 60%
    - 48291d8c>使用knowledge d8a0602f 需要先解决error:[cde3c3e2](../view/error.cde3c3e2.md)

---
```

新增todo：
    - '90': 自动把旧格式转化为新格式：
      readme: |
        - old term metadata -> new term metadata
        - old termset metadata -> new term metadata

---

[top](#top) | [index](#index)
<a id="20240502093000"></a>
##  9:30~10:59
term metadata -> term html

- markdown版本已经实现了同网站跳转功能，因此不需要再开发同样内容的html。
- html的优势是互动：
    - 弹出提示
    - 弹出选择窗口：根据选择跳转
- 顺便设计新的展示方式：根据受众的记忆、理解能力，每个页面展示局部知识，各局部之间的联系保持简洁直观，避免信息量超过负荷能力。


### 需求

- 类似旧的[termset.9d12877c.md](https://codeberg.org/hyg/PSMD/src/commit/659b6e191ef9766f976dcbbe2cbe5fcd6697b7b2/view/termset.9d12877c.md) 这样的多种选择，可以每一步选择生成html页面，引导用户进入针对性内容。
- 每一步选择都有之前选择的声明，防止断章取义。
- 先使用目前term metadata的depend、together字段表达这种关系。

### 工具

- Jade： https://jade-lang.com
- EJS：https://ejs.bootcss.com/
- swig：http://node-swig.github.io/swig-templates/

使用都很简单。

### 设计

- 需要统一的view metadata，然后分别生成text、markdown、html乃至ofd、tex。
```
name:
id:
template:
  txt:
  markdown:
  html:
  ofd:
  tex:
data:
  content:
  email:
  alert: text
  confirm:
    text:
    yes: path or null
    no: path or null
  prompt:
    text:
    defaul:
    pass: 
    fault: path 
```
- 怎么实现不确定的层次内容。

使用ejs做了简单的maketermhtml()，执行结果：
```
D:\huangyg\git\PSMD\src>node term term 01e1c775
../view/term.01e1c775.md文件更新，内容如下:
条款 01e1c775 正文:
1. 由deployer书面提交即生效。
2. p=20，p%=20%。
3. 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

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
    1. 由deployer书面提交即生效。<br/>
2. p=20，p%=20%。<br/>
3. 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。<br/>

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

在js task下添加学习jade的todo job：- '60': Jade Language生成html view

---

[top](#top) | [index](#index)
<a id="20240502140000"></a>
## 14:00~14:29
把waitinglist前几名和次日可能的模版绑定结果写入日小结。

- 日小结去掉当天时间表
- 列出这几项数据：
    - 本季度各项目分配时间、已使用时间，剩余时间
    - 各种时间片前四名的todo项

执行结果：
```
D:\huangyg\git\ego\src>node ego day over
../data/season/2024S2.yaml文件中的time.sold字段已更新:
ego: 1731
PSMD: 3028
infra: 30
js: 229
learn: 222
xuemen: 90
raw: 115

seasonpath:../data/season/2024S2.yaml
resttotal: 7860
rest:
PSMD: 3972
learn: 778
ego: 1269
js: 1146
xuemen: 510
raw: 185

resetSOrted:
- PSMD
- ego
- js
- learn
- xuemen
- raw

daylog file name:
../../blog/release/time/d.20240502.md
content:
# 2024.05.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。



<a id="index"></a>
- 07:45 [error,knowledge metadata的placeholder升级](#20240502074500)
- 09:30 [term metadata -> term html](#20240502093000)
- 14:00 [把waitinglist前几名和次日可能的模版绑定结果写入日小结。](#20240502140000)
- 14:30 [测试](#20240502143000)
- 16:00 [把git开发流程编写成批处理文件](#20240502160000)

---
season stat:
| task | alloc | sold | rest |
| --- | --- | --- | --- |
| PSMD | 7000 | 3028 | 3972 |
| learn | 1000 | 222 | 778 |
| ego | 3000 | 1731 | 1269 |
| js | 1375 | 229 | 1146 |
| xuemen | 600 | 90 | 510 |
| raw | 300 | 115 | 185 |
| infra | 0 | 30 | -30 |

---

waiting list:

30分钟时间片：
- ego的第1号事项：整理废弃git库，包括本地和远程。
- learn的第1号事项：学习正则表达式RegExp
- raw的第1号事项：debug-灰枣按"个"作为单位被算出很高热量。
- ego的第2号事项：makedayplan()创建draft文件夹，合并makedayplan和makedaydraft。

60分钟时间片：
- PSMD的第1号事项：term metadata的upgradeby,depend,together,effect等字段的内容写入term view
- js的第1号事项：Jade Language生成html view
- xuemen的第1号事项：五月报税
- learn的第2号事项：nosql

90分钟时间片：
- PSMD的第2号事项：自动把旧格式转化为新格式：
- learn的第3号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
- PSMD的第7号事项：整理近期手稿。

195分钟时间片：
- xuemen的第2号事项：xuemen COD metadata
- PSMD的第5号事项：term + COM matedata -> deploy metadata -> deploy view
- ego的第5号事项：在整理近期手稿之后，修订个人模型。

---

[top](#top) | [index](#index)
<a id="20240502074500"></a>
## 07:45 ~ 08:45
......
```

---

[top](#top) | [index](#index)
<a id="20240502143000"></a>
## 14:30~14:59
测试

上个时间片waitinglist任务占用时间。原定测试学习任务加回season.todo字段，并增加到60分钟。
---

[top](#top) | [index](#index)
<a id="20240502160000"></a>
## 16:00~16:59
日小结后的git操作编写成批处理文件

- 每日小结后的git操作：\ego\src\finish.bat 执行结果第一段（后面雷同）：
```

D:\huangyg\git\ego\src>finish

D:\huangyg\git\ego\src>cd ..\..\ego

D:\huangyg\git\ego>git add .

D:\huangyg\git\ego>git commit -m "- task:PSMD  [error,knowledge metadata鐨刾laceholder鍗囩骇](../../../draft/2"
[vat 39bf432] - task:PSMD  [error,knowledge metadata閻ㄥ埦laceholder閸楀洨楠嘳(../../../draft/2
 7 files changed, 131 insertions(+), 74 deletions(-)
 create mode 100644 data/draft/2024/d.20240502.yaml
 create mode 100644 src/finish.bat
 create mode 100644 term

D:\huangyg\git\ego>git push github
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (14/14), 2.82 KiB | 1.41 MiB/s, done.
Total 14 (delta 6), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
remote:
remote: GitHub found 2 vulnerabilities on hyg/ego's default branch (1 high, 1 moderate). To find out more, visit:
remote:      https://github.com/hyg/ego/security/dependabot
remote:
To https://github.com/hyg/ego.git
   3275342..39bf432  vat -> vat

D:\huangyg\git\ego>git push coding
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (14/14), 2.82 KiB | 1.41 MiB/s, done.
Total 14 (delta 6), reused 0 (delta 0), pack-reused 0 (from 0)
remote:
remote: Create a merge request for 'vat' on CODING by visiting:
remote:
remote:     https://huangyg.coding.net/p/ego/d/ego/git/merges/create/master...vat
remote:
To https://e.coding.net/huangyg/ego/ego.git
   3275342..39bf432  vat -> vat

D:\huangyg\git\ego>git push gitee
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (14/14), 2.82 KiB | 1.41 MiB/s, done.
Total 14 (delta 6), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Powered by GITEE.COM [GNK-6.4]
To https://gitee.com/hyg/ego.git
   3275342..39bf432  vat -> vat
```

在season metadata中增加一个ego的低优先级todo项： 
```
    - '60': 用js代码完成日小结后的git操作。
      readme: |
        - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
        - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
```
