# 2025.10.24.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	ego: [细化ego对task的资源分配](#20251024160000)
- 19:00~19:59	check: [零散笔记](#20251024190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1612 | 11918 | 10065 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 210 | 2320 | 1485 |
| infra | 2000 | 30 | 1970 | 480 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1222 | 778 | 4425 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：XSTATE https://xstate.js.org/
  - learn的第3号事项：TLA+
  - learn的第4号事项：Alloy
  - learn的第5号事项：VDM (Vienna Development Method)

- 60分钟时间片：
  - ego的第1号事项：细化ego对task的资源分配
  - js的第1号事项：LangChain.js
  - learn的第1号事项：按petri网定义设计几个实例
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

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
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.24.[细化ego对task的资源分配]任务&body=日期: 2025.10.24.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251024.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251024160000"></a>
## 16:00 ~ 16:59
## ego: [细化ego对task的资源分配]

- 总接口：沿用waitinglist模式，从每种时间片一个细化到每个时间片。
- 设一个焦点任务，在waitinglist生成后压入第一位。但要间隔使用，不能连续占用两个时间片。
- 任务设优先级。
	- 父任务自动创建时沿用子任务的优先级。
	- day metadata 增加字段，增减优先级。
- 资源分配到层级，各层级内按优先级重新排序。
	- 按过去30天、10天、3天统计各层级在各时间片及全天的资源分配，根据缺口调整今天的层级排序。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.24.[无名任务]任务&body=日期: 2025.10.24.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251024.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251024190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 根据微信支付新的订单详情格式，修改voucher代码。
```
  Interaction Summary                                                                                                                                              │
  │  Session ID:                 f86db1a6-85ef-41af-86dd-5a5d0e75a3e5                                                                                                 │
  │  Tool Calls:                 145 ( ✓ 130 x 15 )                                                                                                                   │
  │  Success Rate:               89.7%                                                                                                                                │
  │  User Agreement:             100.0% (9 reviewed)                                                                                                                  │
  │  Code Changes:               +862 -13631                                                                                                                          │
  │                                                                                                                                                                   │
  │  Performance                                                                                                                                                      │
  │  Wall Time:                  1h 8m 21s                                                                                                                            │
  │  Agent Active:               31m 41s                                                                                                                              │
  │    » API Time:               27m 5s (85.5%)                                                                                                                       │
  │    » Tool Time:              4m 35s (14.5%)                                                                                                                       │
  │                                                                                                                                                                   │
  │                                                                                                                                                                   │
  │  Model Usage                  Reqs   Input Tokens  Output Tokens                                                                                                  │
  │  ───────────────────────────────────────────────────────────────                                                                                                  │
  │  coder-model                   180     11,394,893         66,764                                                                                                  │
  │                                                                                                                                                                   │
  │  Savings Highlight: 9,845,159 (86.4%) of input tokens were served from the cache, reducing costs. 
  ```
- 地点改到：北京王府井希尔顿酒店 7668
