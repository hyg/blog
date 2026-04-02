# 2026.04.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:29	PSMD: [权利分配语法 & engine](#20260402140000)
- 16:00~16:59	ego: [JT的发行和回收](#20260402160000)
- 19:00~19:59	check: [零散笔记](#20260402190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 0 |
| PSMD | 4000 | 0 | 4000 | 0 |
| ego | 2530 | 0 | 2530 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.02.[无名任务]任务&body=日期: 2026.04.02.%0D%0A序号: 6%0D%0A手稿:../../draft/2026/20260402.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260402140000"></a>
## 14:00 ~ 15:29
## PSMD: [权利分配语法 & engine]

- 创建engine分支
- D:\huangyg\git\PSMD\doc\COMlang.md
- engine -> redo

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.02.[无名任务]任务&body=日期: 2026.04.02.%0D%0A序号: 8%0D%0A手稿:../../draft/2026/20260402.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260402160000"></a>
## 16:00 ~ 16:59
## ego: [JT的发行和回收]

- 熟悉央行的分录规则。
```
单式与复式如何协同运作

总结来说，外汇管理的做账体系是一个以复式记账为骨架、以分账制为血肉、以单式记账为补充的复合型体系：
层次	方式	对象	核心用途
核心会计账	复式记账（借贷记账法）	表内科目：资产、负债、所有者权益、损益	反映实际发生的资金增减变化，确保资产负债表平衡
辅助体系	外汇分账制	各币种（美元、欧元、英镑、日元等）分别设账	让复式记账在多种货币下仍能"自求平衡"
表外核算	单式记账	外汇额度、担保、未决事项、金融衍生品敞口	追踪"潜在"的权利义务，不计入资产负债表

一句话总结：外汇管理以复式记账为根基，通过外汇分账制实现对多币种的精细化核算，同时用单式记账记录表外事项。外汇储备在央行资产负债表上体现为资产端的"国外资产——外汇"，同时对应负债端的"储备货币"，两者同增同减，构成了理解一国货币发行机制的核心视角。
```

- Token的价值导向：
	- 设立front项目，负责锋面工作：
		- 向上锋面：资助为主。对不同层次、不同创新程度的接口给予不同政策。
		- 向下锋面：直接承担。由front向raw购买时间，持有artifact。
- 隔离内外：
	- 有法币收入，ego发行token购买。有法币支出，需要用token向ego购买。
	- 各项目可以artifact向ego换取token，ego发行token购买。
		- 定期根据外部市场调整各类、各级artifact的token价格。
- 促进增长：
	- add todo item

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.02.[无名任务]任务&body=日期: 2026.04.02.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260402.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260402190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- ego继续升级
	1. 删除season.todo字段
		- 2026S2.yaml中的todo字段已删除
	2. 修改waitinglist.js
		- 新版本（二季度及以后）时，makewaitinglist返回空对象
		- 旧版本（一季度及以前）仍然使用season.todo
	3. 当前数据流
		- 新版本（二季度及以后）：
			- bun i1/i2 → 使用allocator从task.yaml选择todo
			- bun over → 使用journal结算，写回task.yaml
		- 旧版本（一季度及以前）：
			- bun i1/i2 → 使用waitinglist从season.yaml选择todo
			- bun over → 使用season.addtodoitem写回season.yaml
```
当前src目录结构
src/
├── asset.js        # 记账模块（整合了account.js）
├── allocator.js    # 分配逻辑
├── config.js       # 配置
├── day.js          # 日计划/日小结
├── derivation.js   # 派生接口
├── draft.js        # 手稿管理
├── ego.js          # 主程序入口
├── front.js        # 锋面优先级
├── journal.js      # 分录规则
├── migrate.js      # 数据迁移
├── schema.js       # schema
├── season.js       # 季度管理
├── task.js         # task管理
├── util.js         # 工具函数
└── *.test.js       # 测试文件


```
