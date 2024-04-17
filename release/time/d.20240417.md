# 20240417

小结
<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

| 时间片 | 时长 | 用途 |
| --- | --- | --- |
| 4:00~4:14 | 15 | 休整 |
| 4:15~5:14 | 60 | 备餐、运动 |
| 5:15~5:59 | 45 | 早餐 |
| 6:00~6:44 | 45 | 会议、自习 |
| 6:45~7:44 | 60 | 休整  |
| 7:45~10:59 | 195 | [工作](http://simp.ly/p/3GXNTh) |
| 11:00~13:59 | 180 | 备餐、午餐午休 |
| 14:00~15:29 | 90 | [工作](http://simp.ly/p/lsBYG9) |
| 15:30~15:59 | 30 | 休整 |
| 16:00~16:59 | 60 | [工作](http://simp.ly/p/MpcbHD) |
| 17:00~18:59 | 120 | 晚餐 |
| 19:00~19:59 | 60 | 讨论、整理提交 |

工作的同时可以在线讨论。

---
<a id="index"></a>
- 07:45	[PSMD 条款库的数据结构](#20240417074500)
- 14:00	[PSMD 条款库的代码](#20240417140000)
- 16:00	[ego 任务统计代码](#20240417160000)

---


[top](#top) | [index](#index)
<a id="20240417074500"></a>
## 7:45~10:59

PSMD 条款库的数据结构

根据[昨天](https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240416.md#20240416093000)设计的数据结构，开始编程。

- 由于metadata文件的读写同步问题，log字段取消，由代码自动写入markdown和html文件。
- 仔细对比COM markdown使用allx还是COM的metadata。决定allx主要起到index索引作用，内部使用（git库开放）。COM metadata、markdown和html对外部使用。数据结构细节需要针对性微调。
- deploy针对从COM启动的需求，COD针对部署过程、部分决议已经通过的情形，数据结构需要针对性微调。

输出： 
1. 数据结构在PSMD\data\readme.md
1. 初步设计：

### PSMD\src\term.js

node term all   : term metada + termset metadata → allterm metadata
node term term id   : term metadata → term markdown + html
node term termset id    ： termset metadata → termset markdown + html

### PSMD\src\model.js

node model id    ： COM metadata → COM markdown + html

### PSMD\src\deploy.js

node deploy id  ：deploy metadata → deploy markdown、deploy html、全部通过后的COD metdadata
node deploy

下一步：
- 手写metadate
- 实现代码：  
    - term metadata + termset metadata → allterm metadata
    - allterm metadata → 条款的markdown、html文件，要约、合同
    - COM metadata → COM markdown、COM html
    - deploy metadata → deploy markdown、deploy html、全部通过后的COD metdadata
    - COD metadata → COD markdown、COD html
    - COD record → 修订error、term、termset的task metadata


[top](#top) | [index](#index)
<a id="20240417140000"></a>
## 14:00~15:29

PSMD 条款库的代码

手工编辑了三个term metadata：
- 主分配比例p：设置初始值，在termset中明确修订权。
- 自修订条款
- 二级修订条款1

一个termset metadata：自修订条款修订其它两个条款。

创建/PSMD/src/term.js
完成:  term metadata + termsetmetadata → allterm metadata

[top](#top) | [index](#index)
<a id="20240417160000"></a>
## 16:00~16:59

ego 任务模版

调整：
- 资源分配、统计，放在time.js
~~~
node time:  today's draft metadata + draft markdown → day log markdown + task markdown's log
node time 1: diff day's draft metadata + draft markdown → day log markdown + task markdown's log
node time 20240417: 20240417's draft metadata + draft markdown → day log markdown + task markdown's log
node time init 1: plan 1 metadata → today draft metadata
node time init: draft metadata + plan metadata → today plan markdown
~~~
- 任务管理放在task.js
~~~
node task           : today draft to stat
node task all        : task metadata to alltask metadata
node task 2024       : draft to year stat
node task 20240416   : draft to day stat
node task 1          : diff date draft to stat
node task 20240101 20240401   : period draft to stat
~~~

1. 设计了plan.yaml中的time字段，为后续代码提供时间段元数据。
1. 实现了：
	- node time init 1: plan 1 metadata → draft metadata
	- node time init: draft metadata + plan metadata → day plan markdown

下一步：
- 根据起床时间制定浮动时间表。
- node time:  today's draft metadata + draft markdown → day log markdown + task markdown's log 的task markdown‘s log。