# 2024.10.07.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~09:59	PSMD: [整理default模型](#20241007093000)
- 14:00~14:54	ego: [day over的redo部分跳过同名、同时间的todo项。](#20241007140000)
- 14:30~15:14	ego: [新版本任务、子任务的数据结构](#20241007143000)
- 16:00~17:29	ego: [整理季度任务](#20241007160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 471 | 13059 | 4665 |
| PSMD | 4000 | 30 | 3970 | 990 |
| ego | 2530 | 386 | 2144 | 825 |
| infra | 2000 | 10 | 1990 | 240 |
| xuemen | 1000 | 45 | 955 | 450 |
| raw | 1000 | 0 | 1000 | 480 |
| learn | 2000 | 0 | 2000 | 960 |
| js | 1000 | 0 | 1000 | 720 |

---
waiting list:


- 30分钟时间片：
  - infra的第1号事项：整理不同linked data的schema实现方式。

- 60分钟时间片：
  - ego的第1号事项：整理季度任务
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第1号事项：js class
  - ego的第2号事项：新版本任务、子任务的数据结构

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第4号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - infra的第4号事项：schema立项。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.07.[整理default模型]任务&body=日期: 2024.10.07.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/10/20241007.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241007093000"></a>
## 09:30 ~ 09:59
## PSMD: [整理default模型]

- 在核心部门正常运行，基于规则的博弈没有成型之前，默认现象是基于既成事实的博弈，从这种博弈案例中整理规律，命名为default模型。
- 参考：
    - https://www.zhihu.com/question/667750171/answer/3632621735

- 结合新版schema整理。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.07.[day over的redo部分跳过同名、同时间的todo项。]任务&body=日期: 2024.10.07.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/10/20241007.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241007140000"></a>
## 14:00 ~ 14:54
## ego: [day over的redo部分跳过同名、同时间的todo项。]

- D:\huangyg\git\ego\src\season.js
- addtodoitem()
- 目前season metadata下的结构，可以简易处理。将来新版本task设计下，应该只是设置一个开关量，重复设置并没有问题。
- 需求调整为只考虑同名。不同时间也跳过。
```

D:\huangyg\git\ego\src>node season.test
loadseasonobj> seasonfilename: ../data/season/2024S4.yaml
addtodoitem> add the todo item to xuemen: xuemen.195
addtodoitem> before add todo item:
- '195': kernel模型升级
- '195': 重新设计S2状态下的学门基本管理制度
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

addtodoitem> after add todo item:
- '195': xuemen.195
  readme: xuemen.195.readme
- '195': kernel模型升级
- '195': 重新设计S2状态下的学门基本管理制度
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

addtodoitem> add the todo item to xuemen: xuemen.195
addtodoitem> before add todo item:
- '195': xuemen.195
  readme: xuemen.195.readme
- '195': kernel模型升级
- '195': 重新设计S2状态下的学门基本管理制度
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

findtodoitem> found task: xuemen.195 0 195
addtodoitem> the todo item already there.
addtodoitem> add the todo item to xuemen: xuemen.195
addtodoitem> before add todo item:
- '195': xuemen.195
  readme: xuemen.195.readme
- '195': kernel模型升级
- '195': 重新设计S2状态下的学门基本管理制度
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

findtodoitem> found task: xuemen.195 0 195
addtodoitem> the todo item already there.
✔ add a redo item into season (13.1582ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 17.8682
```
- 微调其它测试项。
```
✔ add a redo item into season (14.3973ms)
✔ get season metadata file name (0.7598ms)
✔ update season sold time (7.6062ms)
✔ delete todo item (4.2744ms)
✔ make season stat table (2.8573ms)
ℹ tests 5
ℹ suites 0
ℹ pass 5
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 35.9246
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.07.[新版本任务、子任务的数据结构]任务&body=日期: 2024.10.07.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/10/20241007.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241007143000"></a>
## 14:30 ~ 15:14
## ego: [新版本任务、子任务的数据结构]

- 场景1：受托者运行代码，生成提案，人工发给委托者，人工主持议事。
- 场景2：受托者提供元数据，委托者使用代码产生提案，代码组织议事产生决议。
- 场景3：代码根据受托者决议的元数据，产生各方的菜单和按钮（责任、权力），操作后产生新的事件。
- 3种场景都需要产生委托者task，并入工作日程，公示计划和小结。涉及的内部protocol为对外protocol的一部分。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.07.[整理季度任务]任务&body=日期: 2024.10.07.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/10/20241007.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241007160000"></a>
## 16:00 ~ 17:29
## ego: [整理季度任务]

- schema在metadata中的具体实现。
    - 在后续升级版本的表现。
    - 由不同schema、不同版本定义的metadata，如何联合产生view、action、event。
        - 可以有多个view生成器，各自使用不同范围的metadata，产生不同格式的view。其中也就可以包含新生成器、新版本。
- 可以动手整理了。