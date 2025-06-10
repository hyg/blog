# 2025.06.10.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	learn: [佯谬及二次革命](#20250610140000)
- 14:30~14:59	learn: [Helix editor](#20250610143000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250610160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6816 | 6714 | 8460 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1712 | 818 | 1680 |
| infra | 2000 | 690 | 1310 | 210 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1694 | 306 | 2220 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：Helix editor
  - learn的第2号事项：佯谬及二次革命
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第2号事项：设计三季度时间表
  - infra的第3号事项：动态菜单设计。
  - raw的第3号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - raw的第1号事项：整理 resource.md
  - ego的第3号事项：新版基础模型
  - xuemen的第3号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.10.[佯谬及二次革命]任务&body=日期: 2025.06.10.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250610.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250610140000"></a>
## 14:00 ~ 14:29
## learn: [佯谬及二次革命]

- 阅读量子计算相关的综述。
	- https://www.sciengine.com/CSB/doi/10.1360/972012-224
- 进一步阅读量子计算机的综述：
	- https://www.aminer.cn/pub/65bbc048939a5f4082e56987/quantum-computers
	- https://www.aminer.cn/pub/56d90073dabfae2eeed3d39d/colloquium-topological-insulators
- 重点关注：能够颠覆量子力学关键思想实验和佯谬的新进展。
	- 量子计算机作为观察者
	- 观察者的大脑视为量子计算机，用数学语言描述“观察”
- 进一步学习：
	- 量子图灵机模型
	- Shor 算法
	- Grover 算法
	- Deutsch 门
	- 离子阱系统

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.10.[Helix editor]任务&body=日期: 2025.06.10.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250610.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250610143000"></a>
## 14:30 ~ 14:59
## learn: [Helix editor]

- 打开多文件的语法：hx --vsplit file1 file2 file3
- 完成tutor第四、五章。
- 同步学习了micro和edit对应功能。
- ubuntu desktop安装了micro和helix。
	- sudo apt install micro
	- 下载deb安装helix

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.10.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.06.10.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250610.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250610160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- maketext函数的text作为manifest名称作为参数。
- 增加基础定义字段，上级条款往下级条款map：
	- rule
	- event
	- state
	- 以上内容在text manifest中，也以placeholder形式表现。
- 调用和接口：
	- 参考event emitter机制，上级调用下级event listener
	- 返回：
		- events
		- tasks
		- logs
			- 根据条款（text manifest），执行以下操作：发出事件、分配task
- vat：交给ego新版本的大任务。这里只考虑数据和指令的正确对接，包括充裕的表达能力。
	- 自动产生任何manifest的正式内容
	- 自动完成task
	- 维护基础定义
- 休整时间继续斟酌，下一个时间片再动代码。
