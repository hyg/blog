# 2024.05.15.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[整理term.9d12877c的附件部分。](#20240515074500)  
- 09:30	[准备银行资料](#20240515093000)  
- 14:00	[debug-diff mode较大天数返回空数据，创建三个R文件。](#20240515140000)  
- 14:30	[增加email互动](#20240515143000)  
- 16:00	[整理近期手稿](#20240515160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 10382 | 2893 | 2580 |
| PSMD | 7000 | 5371 | 1629 | 525 |
| learn | 1000 | 472 | 528 | 750 |
| ego | 3000 | 2304 | 696 | 705 |
| js | 1375 | 705 | 670 | 300 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 364 | -64 | 90 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - ego的第1号事项：在draft+season+task metadata基础上设计总结功能
  - js的第2号事项：自动收发email。
  - learn的第2号事项：YARRRML
  - raw的第2号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。

- 60分钟时间片：
  - js的第1号事项：可交互的静态网页
  - learn的第1号事项：github的actions,workflow,job脚本语法
  - raw的第1号事项：根据过去数据给出15天内的建议。
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。

- 90分钟时间片：
  - PSMD的第1号事项：起草标准模型2405
  - PSMD的第3号事项：term metadata生成按修订层级排版的COM metadata。
  - ego的第3号事项：代码实现，有互动的总结功能。
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.15.[整理term.9d12877c的附件部分。]任务&body=日期: 20240515%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240515074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240515074500"></a>
## 7:45~8:44
整理term.9d12877c的附件部分。

- 整理 附件20
    - 删去949e69e3
    - 删去bb8005b9
    - 把它们的条款集中到 dbe32f79
    - 可以删去20.3，把原20.2上提首选，原20.1下降为备选。   
    - 或者把附件20、21合并。
        - 删除33523fe1
        - 删除a1c197a9
        - 删除259076a4
        - 删除4116b506
        - 删除607455c0
```
附件20. 对于已发生的行为，可以按照以下方式之一进行核实：
附件20.1. 提供完整、连续、不可删改的记录；
附件20.2. 提供涉事各方的自述，以及每一方对其他方自述的意见；
附件20.3. 涉事各方全体同意，推举一名或多名保证人：
- 保证人在自己主要工作中，按照前两条之一公布信息；
- 由保证人调查涉事各方的历史行为，提供调查记录。
附件21. 对于某方案的预期效果，可以按照以下方式之一提供依据：
附件21.1. 有强制力的法规，保证该预期效果；
附件21.2. 实践案例的效果：
- 必须是涉事各方无法控制范围内的实践案例；
- 多种预期效果应按实践结果估算比例。
附件21.3. 发布开放的要约：
- 职务行为按附件20进行公示，接受事后印证并公示印证结果；
- 该预期效果纳入考核，以取得该预期效果为前提获得收益。
```

- 利用休整时间继续整理，已经对外试用，过段时间总结试用结果。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.15.[准备银行资料]任务&body=日期: 20240515%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240515093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240515093000"></a>
##  9:30~10:59
整理材料

时间被银行事务临时占用，todo项回到waitinglist。
---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.15.[debug-diff mode较大天数返回空数据，创建三个R文件。]任务&body=日期: 20240515%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240515140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240515140000"></a>
## 14:00~14:29
debug-diff mode较大天数返回空数据，创建三个R文件。

- 使用-1000、-2000、-3000都不能重现问题。可以返回正确数据。
- 可能以前正好diff到一个出差或者连续熬夜的时间，没有数据。
- 登记7分钟，提前开始下一个任务。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.15.[增加email互动]任务&body=日期: 20240515%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240515143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240515143000"></a>
## 14:30~14:59
增加email互动

- 在日计划、日小结、次日规划上增加了含有主体和简要信息的email入口。
- 登记60分钟，总结功能另外追加todo项：
- '30': 在draft+season+task metadata基础上设计总结功能

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.15.[整理近期手稿]任务&body=日期: 20240515%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240515160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240515160000"></a>
## 16:00~16:59
整理近期手稿

### ego

#### 1 
共同体模型和自然人模型的统一接口

- 调整接口
    - 交易 or 达成合同
    - 分立 split
    - 合并 joint
- 使用接口
    - 行使权力 or 可选的、主动的行为
    - 履行责任 or 强制的、被动的行为
    - 提取利益 or 使用记账服务，可视为权力。
- 对内
    - 升级个体模型

##### 评

- 权责接口可以用来生成菜单项
- 可以结合其它脚本语法，在实现中再检验。

#### 2

1. 在不同合同（账号）下对外交互
1. 不同合同（账号）在自我资源中的分配优先权
1. 各账号成就的管理

- P2 event
- P1 evnet
    - 主体小结：一次性交流 -> 要约 -> 正式合同 -> 项目交流

- raw
    - time
        - event ：text、law、code
            - 每日计划
            - 每日小结
            - 每月计划
                - 分配到账号下
            - 每月小结
    - food
    - health

##### 评

- 怎么从对外交互传递压力到内部，产生最佳的行为。
- 跨账号、跨合同的事件之间怎么使用统一的尺度分配资源。
- 只是罗列零散想法，没有形成可执行的方案。

#### 3

-raw
    - time -> log
    - food
    - health

- input -> 分类, tag
    - 人工处理作为sample
        - 人工复制draft到output
    - code + data处理
        - 自动产生draft -> output
            - 营养成分表
                - 日
                - 始末
                - 增量
            - 时间表
                - 计划
                - 小结
            - tag表
                - 层级
                - 分配权重

- level n output
    - 人工sample
    - metadata + code
        - level n+1 sample
        - metadata + code
            - level n+2 sample
                - ......

##### 评

- 一个层级的人工编程、编辑metadata，就是更深层级的sample，进一步以code+metadata实现同样的工作。
- 沿着这个模型，不断寻找更深层级的知识。

#### 4
自然人的个体模型：原始到破缸

- 条件反射：在vat中使用一些假设和定义对input产生output，同时产生log
- 有意识的行为：在vat以外根据event listener、FSM、LUT对input产生output，同时产生log
- 对log进行分析、识别提取出假设、定义以及其上的条件反射 -> 共享入库 -> 在分析识别中使用
    - 修改event listener
    - 修改FSM
    - 修改LUT

##### 评

- 把进化过程显性化，便于下一步设计metadata和合同。

#### 5
site (container)

- deploy
    - fork
    - split
    - joint

##### container is  a type of deployment for support others

- model+token输入到container中，产生deployment
    - event经过container的mux传递到deployment
    - deployment的action经过container的filter输出到外界
- 对container中的deployment建模（modeling），产生model

##### 评

- 帮助个人模型升级的过渡装置，也是一个主体对另一个主体的孵化。

#### 6

- event -> entity -> action + record
- entity
    - public
        - deploy <- model repo
        - modeling -> model repo
            - model repo -deploy-> container = human or  mechine or node
    - private

##### 评
- 描述了模型库的原始来源：一些实践案例的public部分
- 描述了container的三种类型

---

- 还没有整理完，继续最佳todo项。

