# 2025.08.06.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 13:00~17:59	learn: [BMAD](#20250806130000)
- 19:30~19:59	js: [nodejs中调用jar](#20250806193000)
- 19:00~19:59	check: [零散笔记](#20250806190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8290 | 5240 | 8580 |
| PSMD | 4000 | 1670 | 2330 | 1170 |
| ego | 2530 | 1350 | 1180 | 1335 |
| infra | 2000 | 485 | 1515 | 345 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4195 | -2195 | 3030 |
| js | 1000 | 430 | 570 | 1710 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：graphviz
  - learn的第2号事项：Agent Protocol https://agentprotocol.ai/
  - learn的第4号事项：claude code + kimi K2 @ bailian
  - learn的第5号事项：NER（命名实体识别）RE（关系抽取）

- 60分钟时间片：
  - infra的第1号事项：动态菜单设计。
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - learn的第1号事项：ANP（Agent Network Protocol）

- 90分钟时间片：
  - PSMD的第1号事项：筹备会议 by role+prompt
  - ego的第1号事项：整理task及其相互关系
  - infra的第2号事项：schema立项。
  - PSMD的第3号事项：子1609:基于公司、合同

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - infra的第3号事项：Rete/Phreak算法的自主实现
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.06.[BMAD]任务&body=日期: 2025.08.06.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250806.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250806130000"></a>
## 13:00 ~ 17:59
## learn: [BAMD]

- https://zread.ai/bmadcode/BMAD-METHOD/2-quick-start
- 角色不是很严格，analyst直接开始改代码了。
- 消耗token比较多
	- C:\Users\hyg\.qwen\settings.json 增加 "sessionTokenLimit": 128000

- agent之间是否有层级关系，没有。按照定义：
	- 父agent设计、调整子agent。
		- 目前看是人工一次写死的
	- 父agent根据任务内容选择调用子agent。
		- 大部分请需要人工切换，在明确提示下可以提议切换，出现过一次自主切换。这种情况说明后台模型能力足够，不需要划分agent。
		- 角色不是很严格，例如analyst也会去动代码文件、安装依赖包、直到去运行代码。
- 适合非IT人员快速开发简单的自用工具。
- 开发人员其实在头脑中已经自动完成了这些思考，直接使用ai IDE就是差不多的体验。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.06.[nodejs中调用jar]任务&body=日期: 2025.08.06.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250806.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250806193000"></a>
## 19:30 ~ 19:59
## js: [nodejs中调用jar]

- d:\huangyg\git\js.sample\xbrl\  这个项目下使用了几种不同的方法：
	- java npm包
	- child_process 命令行调用
- 基本可以解决调用问题。对环境的依赖都比较大，需要安装的软件较多，对非专业用户有压力。
	- 还是尽量找nodejs兼容的包，尽量不用java代码。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.06.[无名任务]任务&body=日期: 2025.08.06.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250806.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250806190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- multi agent如果是扁平化的，这些工作的生命周期会随着模型升级而结束，大部分吸纳到API内侧。
- 如果是层级化的，定义是：
	- 父agent设计、调整子agent，而不是按写死的prompt。
	- 父agent根据任务情况选择、调用子agent，而不是按写死的流程。
	- 如果能自定完成上述工作，说明后台模型能力足够，不需要划分agent。
