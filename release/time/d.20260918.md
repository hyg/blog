# 2026.09.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~20:59	check: [零散笔记](#20260918190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1170 | 12360 | 0 |
| PSMD | 4000 | 825 | 3175 | 0 |
| ego | 2530 | 285 | 2245 | 0 |
| infra | 2000 | 60 | 1940 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.09.18.[无名任务]任务&body=日期: 2026.09.18.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260918.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260918190000"></a>
## 19:00 ~ 20:59
## check: [零散笔记]

- 检查源代码，分析9月9日运行bun over时，PSMD: [整理闫岸家政能力讨论]这个任务为什么没有结束。
```
完成总结
修改文件 (5个)
文件	改动
src/allocator.js	+44行：新增 isRelySatisfied 函数，getCandidateTodos 增加 taskIndex 构建和 rely 判断
src/journal.js	+84/-22行：parseWorkSlice 行为矩阵注释 + amount>0 始终生成 action；writebackTodo 区分 completed/in_progress + history_drafts/time_slices 条件控制 + amount=0 文件删除；formatOutput 适配
src/allocator.test.js	+96行：14个 isRelySatisfied 测试用例
src/journal.test.js	+158行：11个 parseWorkSlice 行为矩阵测试 + 2个 formatOutput 测试
测试结果
- 新增测试全部通过（allocator: 19/19, journal: 18/20，2个失败为预先存在的数据问题）
- 2个预先存在的失败：
- parseDayObj: day文件 20260401 的 totalArtifacts 值已变（非本次修改）
- isDaySettled: 20260404 已有 voucher（之前结算过）
关键行为变更
1. completed 任务：status='completed', amount=0，不再排入日计划
2. in_progress 任务（有 redo）：status='in_progress', amount=redo，继续排入
3. rely 依赖：pending 状态检查前置任务，无效依赖视为已完成
4. amount=0：不追加 draft 历史，但仍写回 redo/status，确保 output 文件删除
```

- 检查历史数据错误。
```
分析结论
不是所有 day over 都错误。二季度以来涉及 PSMD 的 19 次 day over 中：
正常的：8 次（有 redo 字段）
这些操作的 writebackTodo 正常工作，time_slices 和 history_drafts 已正确追加。
有 bug 的：11 次（amount>0，无 redo）
日期	任务
Apr 44行整理闫岸家政能力讨论
Apr 5个权利分配语法 & engine
May 10	部署语法
Jul 24	在线游戏
Aug 17	term + COM matedata -> deploy metadata
Aug 22行消费者自主健康管理平台创业召集通知
Aug 25	权利分配语法 & engine
Sep 96行整理闫岸家政能力讨论
...Sep（还有3次）
缺失的数据
这 11 次操作中：
- ✅ 凭证正常生成（token_balance 扣减正确）
- ❌ time_slices 未追加（工作时间记录缺失）
- ❌ history_drafts 未追加（draft 文件引用缺失）
- ❌ status 未更新（全部仍为 pending）
当前 PSMD.yaml 状态
31 个 todo，全部 status: pending，没有任何 completed 或 in_progress。
```
- 修复代码、修复历史数据。
```
执行报告
一、AER 凭证修复
操作
补录 sourceDate（标准格式）
转换 date 字段为标准格式
删除重复 AER
二、Day 文件 aer 字段
操作
已有 aer 字段
写入 aer: null（amount=0）
三、新生成 AER 凭证
编号	日期	类型
AER.601	2026-04-01	work
AER.602	2026-04-01	check
AER.603	2026-04-02	work
AER.604	2026-04-02	work
AER.605	2026-04-02	check
AER.606	2026-04-03	work
AER.607	2026-04-03	work
AER.608	2026-04-03	work
AER.609	2026-04-03	check
AER.610	2026-04-05	work
AER.611	2026-04-05	check
AER.612	2026-07-03	check
AER.613	2026-07-158行check
AER.614	2026-08-08	work
AER.615	2026-08-08	work
AER.616	2026-08-08	work
AER.617	2026-08-08	check
AER.618	2026-09-18	work
AER.619	2026-09-18	work
AER.620	2026-09-18	work
AER.621	2026-09-18	check
四、剩余项
- 12 个 AER 文件 sourceDate 为空（测试生成的，非 day over 结算，不处理）
- 271 个 amount=0 时间片已标记 aer: null
- 当前最大 AER 编号：AER.621
```
```

```
