# 2025.09.23.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	PSMD: [健康消费合作社建模](#20250923074500)
- 14:00~15:29	infra: [新版通用页面](#20250923140000)
- 16:00~16:59	PSMD: [SOP(Standard Operation Procedure)数据结构](#20250923160000)
- 19:00~19:59	check: [零散笔记](#20250923190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 10191 | 3339 | 10020 |
| PSMD | 4000 | 2305 | 1695 | 1365 |
| ego | 2530 | 1490 | 1040 | 1485 |
| infra | 2000 | 635 | 1365 | 285 |
| xuemen | 1000 | 150 | 850 | 540 |
| raw | 1000 | 250 | 750 | 150 |
| learn | 2000 | 4505 | -2505 | 4455 |
| js | 1000 | 856 | 144 | 1740 |

---
waiting list:


- 30分钟时间片：
  - infra的第2号事项：封装新版密钥工具集
  - learn的第3号事项：LegalRuleML（Legal Rule Markup Language）
  - learn的第4号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第6号事项：Tauri + Rust

- 60分钟时间片：
  - infra的第1号事项：新版通用页面
  - ego的第1号事项：nextcloud
  - js的第1号事项：IM bot
  - learn的第1号事项：https://jsonlogic.com/

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - PSMD的第3号事项：machines model
  - infra的第3号事项：Rete/Phreak算法的自主实现

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.23.[健康消费合作社建模]任务&body=日期: 2025.09.23.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250923.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250923074500"></a>
## 07:45 ~ 10:59
## PSMD: [健康消费合作社建模]

#### 部署者的情况

- 如果升级还有两次，再不升级可能彻底气馁。
- 能力早就具备，资源储备正在逐渐流失。许多次停滞在筹备早期，无法孵化完整的共同体。
- 偏差：
	- 对肠道健康的个人模型研发进度，高估。
	- 其它个人健康模型，低估。
	- 对学者的促销效果，高估。
	- 对社区零售的增长进度，不敏感，低估。
	- 对成名人物，高估。
	- 对新生群体，低估。
- 这次：
	- 现在：
		- 社区级别：孵化模型社区（肠道健康）
		- 联社级别：召集、对大厂商务合作、学术界合作（肠道健康个人模型预研），熟悉决策部门议事、对执行部门的控制。
	- 生活保障好之后，尝试更纯粹地思考：平衡联社一级的共同体资源能力和重构能力。
- 下一个：使用经典部署模式，在个人领域孵化到完整再剥离。
- 下两个：基于实践设计富有个人风格的、原创的共同体模型。

#### 折衷和防范

- 从经典的个人领域孵化式部署，分出一个弱化版，陌生人的个人领域共同孵化。
- 打通任免链和修订链的小循环，纳入大循环。防范小团体的形成。
- 放开人体健康模型的入口，防止被堵塞。
- 放开基层社的脱离、合并，防止联社固化、老化。

#### 提纲

- 设 社区+联合社区 两级。
- 联合社区不接受个人社员，各社区标准人以营业额为权重选举联合社区决策部门和监察部门大部分席位。
	- 所有社区个人社员以消费额为权重选举一名监事。
	- 决策部门按1406运转，并优胜劣汰。
	- 决策部门设定线上社区、线下社区、联合社区的产品定价和利润分配比例。
		- 年度结束时，如果联合社区专户余额超过年度消费额的30%，超出部分按消费比例返还到社区专户。
		- 社区->个人社员同理，由联合社区司库直接操作。
	- 决策部门任免：
		- 一名执行官，负责运营。
		- 一名司库，负责资产管理。
		- 一名IT专员，负责信息化。
- 各线上社区设标准人和管理员：
	- 标准人选择并执行健康模型，输出数据公示。推举继任者。
	- 管理员负责运营，由社员按消费额为权重任免。

- 下个时间片进行舞弊、堵塞等攻防推演。然后可以动笔，按旧版本PSMD格式起草模型：
	- 弱化版筹备（部署）计划
	- 健康社区产品

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.23.[新版通用页面]任务&body=日期: 2025.09.23.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250923.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250923140000"></a>
## 14:00 ~ 15:29
## infra: [新版通用页面]

- 提议：proposal
	- 条件：condition
- 协议：protocol
	- listen
	- emit
		- 对方视角：preview
	- interest
- d:\huangyg\git\sample\entrypage\
	- 详情参考：d:\huangyg\git\sample\SOP\hfsm\readme.kimi.long.md
- 要找时间吃透hfsm.js

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.23.[SOP(Standard Operation Procedure)数据结构]任务&body=日期: 2025.09.23.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250923.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250923160000"></a>
## 16:00 ~ 16:59
## PSMD: [SOP(Standard Operation Procedure)数据结构]

- 分层有限状态机（HFSM）
- d:\huangyg\git\sample\SOP\hfsm\
	- 2 level: sop.demo.js
	- 3 level: tower.demo.js
- 详情：readme.kimi.md , readme.kimi.long.md
- https://jsonlogic.com/ 追加时间好好研究。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.23.[无名任务]任务&body=日期: 2025.09.23.%0D%0A序号: 11%0D%0A手稿:../../draft/2025/20250923.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250923190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- https://zread.ai/bmadcode/BMAD-METHOD
	- webUI（其实就是coding agent）和IDE两个模式，分工推进、积极融合其它工具。
	- 创建gemini GEMs等。
	- 适合开发人员。普通人还是需要通用页面。
- https://docs.cloudbase.net/ai/quickstart
	- 需要公众号、服务号、小程序。
	- mars22邮箱已绑定，xuemen邮箱注册了一个企业微信，不能进入cloudbase平台。
- 如果要用上面设计的jsonlogic+hfsm机制，驱动已有的财会、ERP、办公OA等系统，都有哪些方案。
	- D:\huangyg\git\sample\DeptAPI\readme.kimi.md
	- 追加时间。
