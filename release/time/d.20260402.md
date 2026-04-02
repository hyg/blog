# 2026.04.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:29	PSMD: [权利分配语法 & engine](#20260402140000)
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

更新accounts.yaml - task科目id改为task.id
PSMD:
  id: 264ba3f2
infra:
  id: 2d0059c6
learn:
  id: 339d8d14
js:
  id: 32981a13
xuemen:
  id: c36b4952
```
