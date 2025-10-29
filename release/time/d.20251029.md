# 2025.10.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	ego: [细化ego对task的资源分配](#20251029160000)
- 19:00~19:59	check: [零散笔记](#20251029190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2047 | 11483 | 10035 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 270 | 2260 | 1455 |
| infra | 2000 | 30 | 1970 | 480 |
| xuemen | 1000 | 195 | 805 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1402 | 598 | 4425 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：各层级各类资产的定价
  - learn的第3号事项：Alloy
  - learn的第4号事项：VDM (Vienna Development Method)
  - js的第8号事项：copilot

- 60分钟时间片：
  - js的第1号事项：LangChain.js
  - learn的第1号事项：XSTATE https://xstate.js.org/
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：ai-sdk + moonshot

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.29.[细化ego对task的资源分配]任务&body=日期: 2025.10.29.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251029.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251029160000"></a>
## 16:00 ~ 16:59
## ego: [细化ego对task的资源分配]

- task：拥有专户，持有所有种类的资产。
	- 上下文的读写权限。
	- 可以变更承担entity。
	- 属性：
		- 期限
		- 优先级
			- 层级关系的定义,层级,优先级
			- 层级关系的定义,层级,关键任务
		- 父子关系的定义：父任务、子任务
- todo item：只有时间资源专户。
	- 时间资源绑定承担entity。
	- 启动条件：用函数实现，可以读取其它task的todoitem状态
	- 前置时间：用函数实现，必须先完成的todoitem的时间总和。
	- 关键路径：用函数实现，必须先完成的todoitem。
- ego：entity的核心task
	- 调度raw以外的其它task
	- 与raw交易时间资源
	- 认知、元认知（创建父任务并分配资源）
	- 模拟、预测
- ego把时间分配到：
	- 层级关系的定义,层级->时间
- 依次统计该时间片过去30、10、3天的实际时间使用（30天均衡则统计10天，10天均衡则统计3天），对比时间分配选出使用比例最低的{层级关系的定义,层级}。
	- 如果{层级关系的定义,层级}有关键任务，分配给关键任务的todoitem或其关键路径todoitem。
	- 按{层级关系的定义,层级}的优先级分配。
		- 优先级定义：下一次分配的最早时间。比如16小时，则0day11:00完成任务时，设置1day3:00为下次分配的最早时间，0day下午都不会分配给它。
- 增加todo项：各层级各类资产的定价

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.29.[无名任务]任务&body=日期: 2025.10.29.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251029.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251029190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- https://edgeone.ai
- cnb.cool
	- 使用仓库网址作为git地址
	- 使用cnb作为用户名
	- 使用token作为密码，可以精细控制权限
