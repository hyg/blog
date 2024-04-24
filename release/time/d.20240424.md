# 20240424

小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

| 时间片 | 时长 | 用途 | 手稿 |  
| --- | --- | --- | --- |  
| 04:00~04:14 | 15 | 休整 |  |  
| 04:15~05:14 | 60 | 备餐、运动 |  |  
| 05:15~05:59 | 45 | 早餐 |  |  
| 06:00~06:44 | 45 | 会议、自习 |  |  
| 06:45~07:44 | 60 | 休整 |  |  
| 07:45~10:59 | 195 | 工作 | [error + knowledge metadata -> view](#20240424074500) |  
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |  
| 14:00~15:29 | 90 | 工作 | [整理基本概念，准备梳理各git库的log、data、src、view](#20240424140000) |  
| 15:30~15:59 | 30 | 休整 |  |  
| 16:00~16:59 | 60 | 工作 | [整理个人领域模型和共同体模型的关联](#20240424160000) |  
| 17:00~18:59 | 120 | 晚餐 |  |  
| 19:00~19:59 | 60 | 讨论、整理提交 |  |  

工作的同时可以在线讨论。


---
<a id="index"></a>
- 07:45	[error + knowledge metadata -> view](#20240424074500)  
- 14:00	[整理基本概念，准备梳理各git库的log、data、src、view](#20240424140000)  
- 16:00	[整理个人领域模型和共同体模型的关联](#20240424160000)  

---


[top](#top) | [index](#index)
<a id="20240424074500"></a>
## 7:45~10:59

error + knowledge metadata -> view

- 实现makeitemview()，以前只做了makeitermtext()。
```
D:\huangyg\git\PSMD\src>node term term 260ca049
../view/term.260ca049.md文件更新，内容如下:
条款 260ca049 正文:
经理和执行人员都要向决策部门归档通用工单。执行人员应在收到或自行填写通用工单24小时内归档。经理填写的通用工单归档要求是：
  - 在决策部门的一个审议周期内，每一事项的前3份通用工单，应在出具24小时内向决策部门归档；
  - 在决策部门的一个审议周期内，同一事项的第4份通用工单起，可以汇总后在审议周期结束前一并归档。

---
条款 260ca049 readme:
- 如果出现重大失误，决策部门可能召开临时会议干预。所以要求及时归档。
- 在使用IT系统时，可以由系统实时归档。本条款可以根据情况修订。
```

- 需要在knowledge metadata中加入interface和二级map字段？暂时不需要，因为knowledge不是对外展示的，而是自动组装termset用的，使用各源头matedata自身的interface就可以。
- 实现makeerrortext、makeerrorview()。
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
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合<term.1>，如果符合应该在设立时解决。
```

- 由于knowledge用于自动组装termset，因此不需要创建view。先构造error-knowledge-error网络，构造过程先发提示：
```
D:\huangyg\git\PSMD\src>node term error 0ccddb29
enter makeerrornet: 0ccddb29 已查找的knowledge:
{}

search knowledge: 1
search knowledge: 2
search knowledge: 3b7582cd
发现knowledge 3b7582cd 可以解决 error 0ccddb29 有效率: 50
knowledge 3b7582cd 生效有先决条件，先解决error:
error:48291d8c
enter makeerrornet: 48291d8c 已查找的knowledge:
3b7582cd: true

search knowledge: 1
search knowledge: 2
search knowledge: 3b7582cd
search knowledge: d8a0602f
发现knowledge d8a0602f 可以解决 error 48291d8c 有效率: 60
knowledge d8a0602f 生效有先决条件，先解决error:
error:cde3c3e2
enter makeerrornet: cde3c3e2 已查找的knowledge:
3b7582cd: true
d8a0602f: true

search knowledge: 1
search knowledge: 2
search knowledge: 3b7582cd
search knowledge: d8a0602f
search knowledge: d8a0602f
../view/error.0ccddb29.md文件更新，内容如下:
问题 0ccddb29 正文:
出现以下情况之一：
- 决策部门未界定执行部门工作的合规性要求。
- 决策部门界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。

---
问题 0ccddb29 readme:
- 继续构造error-knowledge-error网络，生成提示段落加入到error view中。
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合<term.1>，如果符合应该在设立时解决。
```

下一步：  

- 成员的个人领域模型纳入env。
  - 先整理个人模型和共同体模型的对应关系。
- 准备sql和nosql版本
- error + allknowledge metadata -> 针对某总env的termset metadata
- 委托者构造env以及课题的自助页面
- 研究一下js-yaml的dump option。素材：
    - term.260ca049 的text字段 | 符号dump成了 > 符号
    - error.0ccddb29 的readme字段 也是>符号，而且内容被加了换行。


[top](#top) | [index](#index)
<a id="20240424140000"></a>
## 14:00~15:29
整理基本概念，准备梳理各git库的log、data、src、view

暂存在ego\readme.md

## git库

- raw：无意识的部分
    - log
        - food
        - health
    - data
    - src
        - raw.js
    - view
        - 各级时间段food、health的报表
- ego：有意识的部分
    - log
        - 各级时间段的计划小结metadata
    - data
        - 时间模版的metadata
        - contract的metadata
        - task的metadata
        - 内部账目的metadata
        - 各独立项目的metadata
    - src
        - time.js
        - task.js
    - view
        - 各级计划小结的markdown、html文件
        - contract、task、内部账目的报表
- blog：个人正规发布。可能根据各git托管网站的page格式重整：
    - 和用户名同名
    - 和个人域名同名
- draft：内部手稿，防止硬盘问题备份到私有库。
- x.sample: 练习范例
- com.origin: 共同体模型的雏形
- cod.template: 共同体部署方案的模版
- 独立个人项目，如PSMD
    - log
    - data
        - term、termset、error、knowledge的metadata
    - src
        - term.js
    - view


## 基本概念

- 主体：由自然人和共同体归纳产生的概念，智能设备等新主体的设计基础。
- 共同体：各种主体的有意识的部分的合并。基本接口：
    - 签署和执行合同。
        - 要约表示可实践的知识。
    - 分立和合并。
        - 分立是模型的一部分。
        - 合并是合同的一种。
    - meta：察觉潜藏的概念和知识。
        - 可实践的知识，可以表现为合同、要约。

## 接口

- 门户页：写在个人域名dns，各种软件或纸质的个人简介、签名档。内容根据当时需要统筹规划。
- blog
- raw\view
- ego\view
- ego\contract
    - 要约的浏览、签署
        - gathering
        - PSMD委托
    - 要约的自动组合、对签

下一步：
- 从知识-要约-共同体的角度，设计个人模型与共同体模型的映射关系。
- 各网站page规则 -> 设计门户页及其git库
- git库迁移

[top](#top) | [index](#index)
<a id="20240424160000"></a>
## 16:00~16:59
整理个人领域模型和共同体模型的关联

## 当前数据结构下的关联
- knowledge中env、depend字段下的error，分为自身error和成员error
	- 成员error定义为：角色id+errorid
- 由此根据成员error可以检索出无效的term、termset乃至COM、COD。
- 由此可以转至针对该名成员的knowledge，生成个人改进的初步方案，交给人工核实、修订。
- 产生角色的合同附件，如果出现error：
	- 合同无效并赔偿损失，金额由共同体评估。
	- 生成个人改进方案，欢迎改进后重新竞聘。 

## 重新设计knowledge metadata
- knowledge的env字段并入depend字段
	- depend分为几种类型：
		- 必须有、必须没有 某term、termset、error。
		- 参考gantt图：必须先解决完某error再解决本error、开始解决某error时必须同时开始解决本error、开始解决某error前必须先解决完本error、在解决完某error前必须先解决完本error。
- knowledge也应该有类型：
	- term(set) to error
	- term(set) to term(set)
- knowledge的需求来源：
	- menber error+COD -> COD error checklist -> motion
	- menber error+COM -> deploy -> COD
	- COD log -> menber error+COD error -> menber motion + COD motion
    - COD error -> menber error checklist -> menber motion

## 迭代升级的关系
relation metadata
```
name:
id:
type: 1
obj1: id1
obj2: id2
obj3: id3
```

relationtype metadata
```
name:
id: 1
objcnt: 3
text: |
  如果error<obj1>已经解决，termset<obj2>有50%概率解决error<obj3>。
srcipt: relationtion.1.js
```
relation.1.js的功能是，传入obj3可以返回一段文本，其中每条都替换了{obj1,obj2}，而且有可用的跳转链接。


下一步：  

- 30m：确定knowledge的需求。
- 60m：重新设计 knowledge metadata 的数据结构，编辑范例。
- 60m：编写代码 knowledge metadata -> error view
- 针对其它需求的代码。
- 90m：根据metadata中的script字段，动态调用代码的范例。
