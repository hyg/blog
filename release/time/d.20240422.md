# 20240422

小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |  
| --- | --- | --- | --- |  
| 04:00~04:15 | 15 | 休整 |  |  
| 04:15~05:15 | 60 | 备餐、运动 |  |  
| 05:15~06:00 | 45 | 早餐 |  |  
| 06:00~06:45 | 45 | 会议、自习 |  |  
| 06:45~07:45 | 60 | 休整 |  |  
| 07:45~08:45 | 60 | 静默工作 | [设计时间规划功能](#20240422074500) |  
| 08:45~09:30 | 45 | 休整 |  |  
| 09:30~11:00 | 90 | 静默工作 | [预设1406动议的范例（针对env、error、knowledge的缺陷）](#20240422093000) |  
| 11:00~14:00 | 180 | 备餐、午餐午休 |  |  
| 14:00~14:30 | 30 | 静默工作 | [日时间表动态生成](#20240422140000) |  
| 14:30~15:00 | 30 | 静默工作 | [寻找纯文本方式存放的甘特图](#20240422143000) |  
| 15:00~16:00 | 60 | 休整 |  |  
| 16:00~17:00 | 60 | 静默工作 | [准备error、env、knowledge metadata，为自动生成termset metada做准备。](#20240422160000) |  
| 17:00~19:00 | 120 | 晚餐 |  |  
| 19:00~20:00 | 60 | 讨论、整理提交 |  |  


---
<a id="index"></a>
- 07:45	[设计时间规划功能](#20240422074500)  
- 09:30	[预设1406动议的范例（针对env、error、knowledge的缺陷）](#20240422093000)  
- 14:00	[日时间表动态生成](#20240422140000)  
- 14:30	[寻找纯文本方式存放的甘特图](#20240422143000)  
- 16:00	[准备error、env、knowledge metadata，为自动生成termset metada做准备。](#20240422160000)  

---


[top](#top) | [index](#index)
<a id="20240422074500"></a>
## 7:45~8:44

设计时间规划功能

### 需求和流程
- 本季度的时间片估算，假设前两个月：
	- 三分之一时间绑定模块二
	- 有一个模块三
	- 其余绑定模块一
	- 不可抗力因素造成缺勤，在第三个月补足。
- 划分各任务的子任务和依赖关系、优先级、期限。
	- 设立里程碑、期限。
- 自动排出各时间片的候选子任务，可以人工调整（如果在界面不好实现就手工编辑metadata）
- 在日计划绑定模版，自动初始化出draft的markdown和day metadata
- 在季度规划中列出后续时间片和候选任务、里程碑，预估完成时间。可以列在日小结后部。

### 数据结构和算法

- 增加season metadata：
	- 工作日天数，默认60天。
	- 日模版的分布，默认40天模版一，10天模版二，10天模版三（两组）。
	- 各任务的上期结余，本期预订时间。
- 可以用task metadata中表达各任务的子任务和依赖关系，优先级可以增加字段
	- 优先级可以统一规划，定义，分配给任务。
	- 任务内部可以分配子任务、里程碑的优先级，期限。
- 排序时综合考虑优先级和期限，给出抗风险冗余的总评估。
- 通过合同和共同体，对外提供任务的预估完成时间（及不同报价）。
- alltask metada和view中，要区分已完成、进行中、未开始的任务，时间分别统计。
	- 全局的totaltime、treetotaltime不变
	- 增加seasontime字段，内容是对象。对象属性有上季度结余时间oldbalance、预订时间order、已提取时间checkout、已申请apply、结余时间balance（可转入下一季度）。


下一步：  

- 再斟酌排序算法的实现细节，以免整体架构频繁推倒重构。
- 需要的话，先用excel和甘特图内部实践验证。
- 一定要内部使用成熟后再对外使用。
- season 和 alltask.tasklist.seasomtime 的配合。
	- season人工编辑，代码不编辑。
	- alltask代码编辑，人工不编辑。读与写之间有足够时间间隔，以免底层时序混乱。


[top](#top) | [index](#index)
<a id="20240422093000"></a>
##  9:30~10:59

预设1406动议的范例（针对env、error、knowledge的缺陷）

- 先针对1406动议人工编辑一套范例。
	- 在error metadata中添加interface字段。
	- 在knowledge中表达了1406动议可以解决割据问题。

error.1.yaml

```

name: 执行部门陷入割据
id: 1
interface:
  entity:
    1: 共同体
    2: 上级
    3: 决策部门
    4: 执行部门
  asset:
    1: 工单
    2: 日志
  term:
    id: name
  event:
    id: 
text: |
  出现以下情况之一：
  - <entity.3>未界定<entity.4>工作的合规性要求。
  - <entity.3>界定了<entity.4>工作的合规性要求。
    - <entity.4>成员对指令不进行合规检查，即使不合规也执行。
    - <entity.4>成员及下达指令者未按要求填写和提交表单，比如<asset.1>、<asset.2>。
readme: |
  - <entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
  - <entity.1>曾经对<entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
  - 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<entity.1>设立阶段，就要确定是否符合<term.1>，如果符合应该在设立时解决。

```

env.1.yaml

```
name: 原始状态-1
id: 1
error:
  - id: 1
readme: |
  创始团队缺乏经验，使用的外来模版遗漏了结局问题的章节。
```

knowledge.1.yaml

```
name: 1406解决割据问题
id: 1
envid: 1
termset:
  - id: 056e71fb
error:
  - id: 1
    percent: 50
    text: |
      - 1406动议可以消除已出现的割据问题。
      - 如果是因为资源问题未解决，欠付报酬而以一定范围割据作为抵押物，今后还会出现新的割据问题。这种情况需要同时处理历史欠账，并且根除资源问题。
readme: |
```

- 发现的问题：
	- 难以自动识别割据问题、资源问题，这依赖人工核实。因此写入条款，在内部成员之间形成制约，才能触发既定条款，并在内部人员操作时提供后续动议。数据结构应该服务于这个流程，而不是外部人员或者代码直接干预。
	- 难以表达解决割据问题之前无效的条款。

- 目标条款:  如果符合附件44（执行部门陷入割据）的情况，则附件1406（1406动议）自动生效。

···

D:\huangyg\git\PSMD\src>node term commit
执行部门陷入割据 0ccddb29
如果割据就启用1406 583d6243
预设1406动议 b3124d50
../data/term.0ccddb29.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.583d6243.yaml文件已更新。../data/term.2.yaml可以删除。
path replace:term.2.yaml term.583d6243.yaml
path replace:term.1.yaml term.0ccddb29.yaml
旧文件:../data/termset.1.yaml中itemset:2的id:056e71fb未能替换，请人工检查。
../data/termset.b3124d50.yaml文件已更新。../data/termset.1.yaml可以删除。

D:\huangyg\git\PSMD\src>node term termset b3124d50
../view/termset.b3124d50.md文件更新，内容如下:
1. 如果符合附件44的情况，则附件1406自动生效。
附件44. 出现以下情况之一：
- 决策部门未界定执行部门工作的合规性要求。
- 决策部门界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如通用工单、日志。
附件1406.
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

附件44. readme:
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合基本制度，如果符合应该在设立时解决。
附件1406. readme:
1406准确的定位是决策部门的动议套件，可以用作其它模型的附件。 ​​​
附件1406.2. readme:
在使用IT系统时，可修改为经理向系统提交通用工单，并由系统通知负责执行的成员。
附件1406.3. readme:
- 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
附件1406.4. readme:
- 时间按一月一周期安排，只是范例。可以根据基本制度的完善程度自行调节，从一周到一年都可以考虑。
- 基本制度生效后，所规定的工作事项就不再允许经理直接指挥。相应的具体规章也同时失效。
- 基本制度的规定，可能与通用工单规定的相同、相似、相反......

---

···

下一步：  

- termset metadata中，interface中的term还是映射到字符串，而不是同一个termset.item下的sortid。虽然可以人工保持同名，但还不是真正互通。也许可以在代码内把它们衔接起来：
	- termset.item.map中可以映射到同级sortid：
		- 优先映射到sortid，找不到的才映射到interface。
		- 分别标注id: {sortid: id}  or id: {interfaceid: id}
	- 统一映射到interface，其中部分与sortid同名。（有违interface字段本意：对外暴露的接口）
- 如果只是定义error-termset-error关系：termset能解决error2，但是只在error1解决之后有效。那么在termset中添加两个字段就可以了。env-termset-error怎么能表达更广泛的条件组合。它们结合人工选择切入点（or锋面），可以自动生成定制的入门目录。

[top](#top) | [index](#index)
<a id="20240422140000"></a>
## 14:00~14:29

日时间表动态生成

- 已完成日计划中的时间表。
- 已完成日小结中的时间表。


下一步：  

- 整理重复代码，需要时调整数据结构。

[top](#top) | [index](#index)
<a id="20240422143000"></a>
## 14:30~14:59

寻找纯文本方式存放的甘特图

- https://frappe.io/gantt

~~~

var tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  },
  ...
]
var gantt = new Gantt("#gantt", tasks);

~~~

- https://www.ganttproject.biz/ 自定义的*.gan是xml文件。也可以导出导入csv文件，文档没有找到，csv格式历史上有一些bug。

```
<?xml version="1.0" encoding="UTF-8"?><project name="Untitled Gantt Project" company="" webLink="http://" view-date="2024-04-20" view-index="0" gantt-divider-location="351" resource-divider-location="300" version="3.3.3307" locale="zh_CN">
    <description/>
    <view zooming-state="default:2" id="gantt-chart">
        <field id="tpd3" name="名称" width="200" order="0"/>
        <field id="tpd4" name="开始日期" width="75" order="1"/>
        <field id="tpd5" name="结束日期" width="75" order="2"/>
        <field id="tpd15" name="备注" width="20" order="3"/>
        <option id="filter.completedTasks" value="false"/>
        <option id="filter.dueTodayTasks" value="false"/>
        <option id="filter.overdueTasks" value="false"/>
        <option id="filter.inProgressTodayTasks" value="false"/>
    </view>
    <view id="resource-table">
        <field id="0" name="名称" width="210" order="0"/>
        <field id="1" name="默认角色" width="86" order="1"/>
    </view>
    <!-- -->
    <calendars>
        <day-types>
            <day-type id="0"/>
            <day-type id="1"/>
            <default-week id="1" name="default" sun="1" mon="0" tue="0" wed="0" thu="0" fri="0" sat="1"/>
            <only-show-weekends value="false"/>
            <overriden-day-types/>
            <days/>
        </day-types>
    </calendars>
    <tasks empty-milestones="true">
        <taskproperties>
            <taskproperty id="tpd0" name="type" type="default" valuetype="icon"/>
            <taskproperty id="tpd1" name="priority" type="default" valuetype="icon"/>
            <taskproperty id="tpd2" name="info" type="default" valuetype="icon"/>
            <taskproperty id="tpd3" name="name" type="default" valuetype="text"/>
            <taskproperty id="tpd4" name="begindate" type="default" valuetype="date"/>
            <taskproperty id="tpd5" name="enddate" type="default" valuetype="date"/>
            <taskproperty id="tpd6" name="duration" type="default" valuetype="int"/>
            <taskproperty id="tpd7" name="completion" type="default" valuetype="int"/>
            <taskproperty id="tpd8" name="coordinator" type="default" valuetype="text"/>
            <taskproperty id="tpd9" name="predecessorsr" type="default" valuetype="text"/>
        </taskproperties>
        <task id="0" uid="cfb128ba2d4a4fd2861da77002fb8f4b" name="raw" meeting="false" start="2024-04-22" duration="1" complete="0" expand="true"/>
        <task id="1" uid="3263d29e698d4b44bfcfca068b617d48" name="ego" meeting="false" start="2024-04-22" duration="1" complete="0" expand="true"/>
        <task id="2" uid="99f82a958e994c069bb2489ae0304c65" name="PSMD" meeting="false" start="2024-04-23" duration="7" complete="0" expand="true">
            <task id="3" uid="062dfe42d33443eba053aa99d62aaf51" name="modeling" meeting="false" start="2024-04-23" duration="2" complete="0" expand="true">
                <depend id="5" type="2" difference="0" hardness="Strong"/>
            </task>
            <task id="5" uid="e5c7a53e088b47028459b68e451ae18e" name="deploy" meeting="false" start="2024-04-25" duration="5" complete="0" expand="true"/>
        </task>
        <task id="6" uid="441e7f0c8dc64c5593937f732db8832e" name="learn" meeting="false" start="2024-04-22" duration="1" complete="0" expand="true">
            <task id="7" uid="9998dbce7d5a40ab921264a116103568" name="js" meeting="false" start="2024-04-22" duration="1" complete="0" expand="true"/>
        </task>
    </tasks>
    <resources/>
    <allocations/>
    <vacations/>
    <previous/>
    <roles roleset-name="Default"/>
</project>

```

csv范例：

```
"序号",名称,开始日期,结束日期,持续,完成,成本,协调者,前置任务,大纲编号,资源,Assignments,新任务,备注,网页连接,备注
0,raw,2024/4/22,2024/4/22,1,0,0,,,1,,,,,
1,ego,2024/4/22,2024/4/22,1,0,0,,,2,,,,,
2,PSMD,2024/4/23,2024/5/1,7,0,0,,,3,,,"#000000",,
3,"  modeling",2024/4/23,2024/4/24,2,0,0,,,3.1,,,,,
5,"  deploy",2024/4/25,2024/5/1,5,0,0,,3,3.2,,,,,
6,learn,2024/4/22,2024/4/22,1,0,0,,,4,,,"#000000",,
7,"  js",2024/4/22,2024/4/22,1,0,0,,,4.1,,,,,

出错了 (
The header contains a duplicate entry: '备注' in [序号, 名称, 开始日期, 结束日期, 持续, 完成, 成本, 协调者, 前置任务, 大纲编号, 资源, Assignments, 新任务, 备注, 网页连接, 备注] 
查看日志
)
```


- https://github.com/DHTMLX/gantt 

```
gantt.config.date_format = "%Y-%m-%d %H:%i";
gantt.init("gantt_here");
gantt.parse({
  data: [
    {id: 1, text: "Project #1", start_date: null, duration: null, parent:0, progress: 0, open: true},
    {id: 2, text: "Task #1", start_date: "2019-08-01 00:00", duration:5, parent:1, progress: 1},
    {id: 3, text: "Task #2", start_date: "2019-08-06 00:00", duration:2, parent:1, progress: 0.5},
    {id: 4, text: "Task #3", start_date: null, duration: null, parent:1, progress: 0.8, open: true},
    {id: 5, text: "Task #3.1", start_date: "2019-08-09 00:00", duration:2, parent:4, progress: 0.2},
    {id: 6, text: "Task #3.2", start_date: "2019-08-11 00:00", duration:1, parent:4, progress: 0}
  ],
  links:[
    {id:1, source:2, target:3, type:"0"},
    {id:2, source:3, target:4, type:"0"},
    {id:3, source:5, target:6, type:"0"}
  ]
});

```


[top](#top) | [index](#index)
<a id="20240422160000"></a>
##  16:00~16:59
准备error、env、knowledge metadata，为自动生成termset metada做准备。

继续使用上午9:30的分析

### 流程
1. 委托者自述问题，受托者评估委托者自身问题，以及委托者自述的问题，结合两者编辑metadata文件。
	- 成熟后，委托者可以通过通用的入门目录，自行操作产生metadata文件。
1. 受托者提交metadata文件，由代码检索后产生解决方案的termset metadata，再进一步产生termset view。过程中受托者可以手工编辑termset metadata。
	- 可以设置模版文件，以产生不同风格的termset的metadata和view。
	- 成熟后，委托者可以自行操作产生termset view。

### 需求及架构、数据结构
1. 委托者自身问题，以及委托者自述的问题，都是error和term(set)的组合。因此env metadata还是需要的。
1. knowledge是引用env，还是自带error和term(set)组合：应该自带。
1. 可能要表达的knowledge：
	- 某termset能解决error1，但是只在error2解决之后有效。
		- 分解成两个knowledge，分别表达error2解决和未解决的env，检索非常不方便。
		- 专门设置必须先解决的前置error字段，表达这则knowledge更直观，也更容易检索。
	- 某termset能解决error1，但是只在error2、error3、erro4解决之后才有效。
		- 前置error字段是个数组。
1. 参考甘特图的字段名：
	- dependencies
	- depend

完成error.1	error.2 env.1 knowledge.1 knoeledge.2 metadata，需要引用error.cde3c3e2。

下一步：  
继续完成这批metadata生成termset metadata的代码范例。

