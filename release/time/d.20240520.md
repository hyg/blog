# 2024.05.20.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[整理近期手稿。](#20240520074500)  
- 14:00	[设计新版个人模型的基础定义](#20240520140000)  
- 16:00	[重新设计PSMD自助、互助、委托合同](#20240520160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 11497 | 1778 | 2523 |
| PSMD | 7000 | 5641 | 1359 | 648 |
| learn | 1000 | 622 | 378 | 660 |
| ego | 3000 | 2709 | 291 | 585 |
| js | 1375 | 915 | 460 | 390 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - js的第2号事项：了解jami api
  - PSMD的第4号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - js的第4号事项：继续学习promise api

- 60分钟时间片：
  - js的第1号事项：用EmailEngine搭建邮件服务器
  - learn的第1号事项：在util库进行单元测试，在实践中学习。
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - PSMD的第2号事项：PSMD新合同的metadata

- 90分钟时间片：
  - PSMD的第1号事项：设计几种新版合同的雏形，实际测试观察接受程度。
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：在整理近期手稿之后，修订个人模型。
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第5号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.20.[整理近期手稿。]任务&body=日期: 20240520%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240520074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240520074500"></a>
## 7:45~10:59
整理近期手稿。

- 个人模型已经是全局的瓶颈：
    - 个人模型中嵌入共同体booting的起步机制
    - 个人模型接收共同体的观察分析、公示过程
    - 个人模型是智能设备模型的起点
- 工作次序是先完成新版个人模型，再完成新版共同体模型，目前个人模型进度滞后。

### ego
#### 1

- 容器分为brain、mechine、nodes三级。
    - nodes分为container、d-container两级。
- 容器分为public、private两部分。
- 容器event输入、action输出。
    - action record由private部分review。
    - review后决定从model库选择模型deploy进入public部分。
        - 经过实践后从public部分提炼模型进入model库。
        - brain.public 经过实践后从public部分deploy到mechine

##### 评

- 未定义mechine与nodes之间的关系，应该是私有mechine和公用mechine的关系。
- 比较明确定义了逐级提高的过程。

#### 2

- 旧脑raw@body接收event输入，产生body action。
- body action作为各级event listener的输入
- event输入经过各级encoder，产生infor action，作为各级event listner的输入
- 各级meta元认知不断改造各级event listner

##### 评

- 旧脑和皮层的协作关系
- 部分箭头关系不准确，可能原意是反向的。
- 皮层的event listner并不能真正接收外界信息，只能在模拟环境中接收经过encode的模拟event。
- 皮层的event listner并不能真正产生对外操作，只能在模拟环境中产生infor action，让后经过decode输出给body，然后选择其中一个对外输出。

#### 3

- 外部事件由概率分布定义
- 经过感觉器官后，感觉到概率分布
- 在brain的认知中，坍缩到单一情况
    - brain是广义的，包含所有参与认知的器官
    - brain从感觉器官之前、之后分别得到输入，然后产生认知

##### 评

- 描述了对外界认识从概率分布坍缩的过程
- 划分了感觉器官和认知器官
    - 感觉器官输入概率分布，输出概率分布：分布可能不同，但信息还是全面的。
    - 认知器官输入概率分布，输出单一概率，为下一层级认知器官提供简化的模拟环境。
        - 通常还要把下一层级的简化输出重新decoder。

#### 4
ego | joint

- entity分为listener、deamon两部分
- event输入到listner，产生多种action
- 多种actiob经过filter产生最终唯一的action
- deamon观察listener，控制filter
- 未来的权力部门付钱，表决的动机与立场。
- 过程参与者的选项 <- 决心不同，差异化权利

##### 评

- 定义了多个entity joint成一个的机制
- 定义了未来的权力部门约束今天决策部门的机制，可能是chain模型的原始手稿。

---

- ego类手稿整理完了，基本确定新版模型：
    - ego是以人体为容器的entity模型。
    - ego有标准的deamon、spilit、joint。
- entity分为public、private两部分；
    - public分为自然语言、法律语言、数学语言三类。
    - 只对特定名单public，对名单外是private，每个entity视角还是只有两类。
- deamon负责分析action，提炼为有意识的行为部署到public部分。
    - deamon可以运行在private，也可以在public。
    - deamon可以接收外界的观察分析结果
    - deamon可以使用外界的标准模型（模型库）直接部署。
    - deamon可以把部署方案提炼为模型向外提交（模型库）。
- spilit和joint协议一旦产生，兼容的协议下可以产生共同体。
    - 共同体模型在联合范围内，对成员模型有观察、分析、转化的接口。
    - 共同体模型在联合范围歪，根据成员模型可以提供观察、分析、转化信息。
- 在下一次绑定模版2，可以动笔。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.20.[设计新版个人模型的基础定义]任务&body=日期: 20240520%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240520140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240520140000"></a>
## 14:00~15:29
设计新版个人模型的基础定义

- 暂时不需要代码化的总结功能。
- 需要时可以先在season metadata手工编辑，一段时间后再代码化。

- 下面时间开始设计新版个人模型
- 目前使用的vat分支就可以，不再创建新的分支。
- thing是有输入输出的事物。
- world是thing认知中信息、行为的对象。
- vat是thing的信息、行为的真实对象，thing感知不到vat的存在。
    - vat可以无限接近world，但不可能完全相等。
- entity是有deamon的thing。
    - deamon是认知entity自身行为的行为；
    - deamon能接收其它entity对自身行为的认知（不一定认同）；
    - deamon能向其它entity公开自己的认知结果；
- ego是能构造vat并在其中复制自身行为的deamon。
- raw是原始个人模型：
    - 以人体为vat
    - 基于原生deamon
        - 依赖自身自制力改变自身行为
        - 自身行为随自制力升级、降级

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.20.[重新设计PSMD自助、互助、委托合同]任务&body=日期: 20240520%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240520160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240520160000"></a>
## 16:00~16:59
重新设计PSMD自助、互助、委托合同

### 基于新版个人模型

- PSMD提供个人标准模型
    - 可以方便地自定义个人模型
    - 内置受助合同，可以自定义
- PSMD提供标准共同体接口
    - 可以方便地在个人模型基础上引入共同体模型的接口
- PSMD提供互助、委托、受托标准合同
    - 各种个人模型都可以发布标准合同、自定义合同
- PSMD标准合同可以自行对接，包括自定义模型基础上的自定义合同。

### 新版共同体模型

- 新版共同体模型基于新版entity定义
- 多个entity根据接口产生共同体
- 共同体也可以发布互助、委托、受托标准痛和自定义合同

### 自助合同

- raw：无法解释的行为，阅读标准库的解释，自行转化。
- ego：无法解释的行为，阅读标准库的解释，选择一种vat和公开行为部署。
- 自定义模型：选择某种vat接受自动部署。

- 暂时不要细化，追加todo项：
    - '90': 设计几种新版合同的雏形，实际测试观察接受程度。
      bind:
        '90': 重新设计PSMD自助、互助、委托合同
