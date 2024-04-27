# 2024.04.27.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | --- | --- |
| 04:00~04:14 | 15 | 休整 |  |
| 04:15~05:14 | 60 | 备餐、运动 |  |
| 05:15~05:59 | 45 | 早餐 |  |
| 06:00~06:44 | 45 | 会议、自习 |  |
| 06:45~07:44 | 60 | 休整 |  |
| 07:45~08:44 | 60 | 静默工作 | [task和timeslice配对的需求分析和设计](#20240427074500) |
| 08:45~09:29 | 45 | 休整 |  |
| 09:30~10:59 | 90 | 静默工作 | [使用knowledge metadata生成error view内容](#20240427093000) |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | [分析term和termset是否可以合并](#20240427140000) |
| 14:30~14:59 | 30 | 静默工作 | [eval、function、import() 范例](#20240427143000) |
| 15:00~15:59 | 60 | 休整 |  |
| 16:00~16:59 | 60 | 静默工作 | [整理治理相关数据结构，为自动分录做好准备。](#20240427160000) |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。

---

<a id="index"></a>
- 07:45	[task和timeslice配对的需求分析和设计](#20240427074500)  
- 09:30	[使用knowledge metadata生成error view内容](#20240427093000)  
- 14:00	[分析term和termset是否可以合并](#20240427140000)  
- 14:30	[eval、function、import() 范例](#20240427143000)  
- 16:00	[整理治理相关数据结构，为自动分录做好准备。](#20240427160000)  


---

[top](#top) | [index](#index)
<a id="20240427074500"></a>
## 7:45~8:44
task和timeslice配对的需求分析和设计

### 流程
由于任务间压力还没有实际产生，里程碑和任务之间关系也不明确，只能按预估的情形确定需求：  

- 在每天结束时，排出次日每种模版的配对。
- 根据各种模版的配对，人工调整metadata。
- 在每天开始时，自动按模版一次生成draft metadata和draft markdown文件。


### 数据结构
如果fs读写同一个文件还是内容混乱，就设置多个metadata文件。

- 正式的候选任务写在todo.yaml中，人工编辑。
- 排出每种模版配对时，代码把每种配对产生的次日更新写在nexttodo.yaml中。这过程可以反复进行。
- 在正式绑定模版时，读取nexttodo.yaml中对应部分，直接写入todo.yaml。这一步不读todo.yaml。

todo.yaml
```
taskname:
  - 30: subtask1
    readme: |
      subtask detail info.
  - 60: subtask2
taskname:
    - 30: 1
    - 30: 2
```

nexttodo.yaml
```
dayplan1:
  todo.yaml content
dayplan2:
  another todo.yaml
```


---

[top](#top) | [index](#index)
<a id="20240427093000"></a>
##  9:30~10:59
使用knowledge metadata生成error view内容

基础概念：  

- 个人领域划分出有意识和无意识两部分；
- 共同体成员首先在最基层单元中，互相确认职务行为是有意识还是无意识的。
    - 有意识的行为：基于理性人假设，从行为偏差分析规章偏差，根据情况产生工单。
        - 共同体knowledge为这个过程提供迭代更新的知识，以提高自动化程度。
    - 无意识的行为：暂时停职，由个人领域自行纠偏，然后根据情况恢复或者重新竞聘。
        - 共同体knowledge不介入，个人领域knowledge为这个过程提供迭代更新的知识。


修改\psmd\src\term.js 中的makeerrorview() makeerrornet() 执行结果如下:
```

D:\huangyg\git\PSMD\src>node term error 0ccddb29
    - 0ccddb29>发现knowledge 3b7582cd :使用termset [056e71fb](../view/term.056e71fb.md)  可能解决 error 0ccddb29 预估有效的比例是 50%
    - 0ccddb29>使用knowledge 3b7582cd 需要先解决error:
    - 0ccddb29>[48291d8c](../view/error.48291d8c.md)
    - 0ccddb29>48291d8c>发现knowledge d8a0602f :使用term [5b4e0597](../view/term.5b4e0597.md) 可能解决 error 48291d8c 预估有效的比例是 60%
    - 0ccddb29>48291d8c>使用knowledge d8a0602f 需要先解决error:
    - 0ccddb29>48291d8c>[cde3c3e2](../view/error.cde3c3e2.md)
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
  - 有意识的行为：可以基于理性人假设，从行为偏差分析规章偏差，根据情况产生工单。可以参考以下内容：
    - 0ccddb29>发现knowledge 3b7582cd :使用termset [056e71fb](../view/term.056e71fb.md)  可能解决 error 0ccddb29 预估有效的比例是 50%
    - 0ccddb29>使用knowledge 3b7582cd 需要先解决error:[48291d8c](../view/error.48291d8c.md)
    - 0ccddb29>48291d8c>发现knowledge d8a0602f :使用term [5b4e0597](../view/term.5b4e0597.md) 可能解决 error 48291d8c 预估有效的比例是 60%
    - 0ccddb29>48291d8c>使用knowledge d8a0602f 需要先解决error:[cde3c3e2](../view/error.cde3c3e2.md)

---
```

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

```
D:\huangyg\git\PSMD\src>node term error cde3c3e2
../view/error.cde3c3e2.md文件更新，内容如下:
问题 cde3c3e2 正文:
违规收益超过违规成本。违规造成的既成事实被接受。

---
问题 cde3c3e2 readme:

---
解决建议:
出现偏差的部门内部互相确认:相关职务行为是有意识还是无意识的。
  - 无意识的行为：应暂时停职，由相关成员自行纠偏，然后根据情况复职或者重新竞聘。
  - 有意识的行为：可以基于理性人假设，从行为偏差分析规章偏差，根据情况产生工单。如需进一步建议请联系<huang@mars22.com>
---
```
---

[top](#top) | [index](#index)
<a id="20240427140000"></a>
## 14:00~14:29
分析term和termset是否可以合并

新的term结构： 

- 增加item字段，改为subterm。
  - 取消item.path，改由统一的接口从id获得path、obj
  - 取消item.type，统统都是term
  - 暂时保留upgradeby字段，实际使用后再定。
- 增加depend、together字段，结合原有的effect字段代替knowledge
  - 默认是termtoerror，因为没有type，而effect的id也是errorid
  - 可能有不止一种效果，每种效果的depend、together不同，这时仍需要knowledge
- 保留原有的text字段，作为高于item下子条款一级的正文。

```
name:
id:
interface:
  entity:
    id: name
  asset:
    id: name
  term:
    id: name
  event:
    id: name
text: |
subterm:
  - sortid:
      id:
      upgradeby: // sortid.sortid.....id  上级定义覆盖下级定义
      map:
        entity:
          localid: globalid
        asset:
          localid: globalid
        term:
          localid: globalid
        event:
          localid: globalid
readme: |
depend:
  errorid:
    percent:
    text: | 
together:
  errorid:
    percent:
    text: |
effect: |
  errorid:
    percent:
    text: |
```

---

[top](#top) | [index](#index)
<a id="20240427143000"></a>
## 14:30~14:59
eval、function、import() 范例

- 为了让数据结构不断升级，各版本的数据结构和代码配套，由稳定的结构调用。
- 这种用途import()最方便。

范例在\js.sample\codestr ，执行结果：
```
D:\huangyg\git\js.sample\codestr>node main
data:123456
60:60str
```

---

[top](#top) | [index](#index)
<a id="20240427160000"></a>
## 16:00~16:59
整理治理相关数据结构，为自动分录做好准备。

### xuemen

- 公司章程
    - 三会动议、决议、会议纪要
- 1-2.章程实施细则
    - 股东会决议：决定公司状态
        - 进入S4状态的决议明确业务范围
    - 财务会计报告：
        - 进入、离开S1状态
        - 
    - 股东会决议：任命S1状态下的执行董事
    - 股东会决议：离开S1状态的补偿方案
- 2-1.全局模型
    - 核心模型
    - ISU模型
        - 内务需求
        - 内务工作计划以及预算方案
    - JPU模型
    - 通用工单
    - 通用日志
    - 临时模型
    - 审议记录
- 2-3.ISU模型
    - Token决算数据包[TBP:Token Balance Package]
    - 财务管理制度
- 2-4.JPU模型
    - 产品模型
    - 产品配置备忘录(P2CM:Product Configuration Memo)
    - 预购意见
    - 预购权重调整方案
    - 工作计划及预算方案
    - 工作总结及结算方案
    - 结项方案

### xuemen.record
目前是AER、TEO、TER、AVR记录文件。

- 会计分录记录	Accounting Entry Record	AER
- Token交易委托	Token Exchange Order	TEO
- Token交易记录	Token Exchange Record	TER
- 会计凭证	Accounting Voucher Record	AVR

### 自动分录

- 会计分录规则	Accounting Entry Code	AEC
```
CodeID:
VoucherType: 利息回单
code:
  path:
  hash:
map:
- AVRitem: amount
  AERitem: 
- AVRitem:
  AERitem:

AVR字段和AER字段映射
```
- 以 xuemen.record\ISU2019.AVR.1.yaml ISU2019.AER.1.yaml这一对文件为例：
    - AEC.map字段无法表达：
        - AccountingEntry.debit.AccountTitle = 银行存款-交通银行 amount=AVRitem: 金额
        - AccountingEntry.debit.AccountTitle = 财务费用-利息费用 amount=AVRitem: 金额 *-1
        - AccountingSoftwareID
    - code字段：可以表达以上关系
```
map:
- AVRitem: 记账日期
  AERitem: date
- AVRitem: 回单编号
  AERitem: VoucherID
- AVRitem: 金额
  AERitem: AccountingEntry.debit.amount
```
- 让AEC生效需要以下六层决议：
    - 董事会决议：AEC生效
    - 董事会决议：3-02.财务管理制度
    - 董事会决议：2-3.ISU模型
    - 股东会决议：2-1.全局模型
    - 股东会决议：1-2.章程实施细则
    - 股东会决议：1-1.章程
