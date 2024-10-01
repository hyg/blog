# 2024.10.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	ego: [新版本任务、子任务的数据结构](#20241001140000)
- 14:30~15:14	xuemen: [整理财务报表](#20241001143000)
- 16:00~17:30	ego: [schema manifest code v0](#20241001160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 166 | 13364 | 4755 |
| PSMD | 4000 | 0 | 4000 | 990 |
| ego | 2530 | 121 | 2409 | 915 |
| infra | 2000 | 0 | 2000 | 210 |
| xuemen | 1000 | 45 | 955 | 480 |
| raw | 1000 | 0 | 1000 | 480 |
| learn | 2000 | 0 | 2000 | 960 |
| js | 1000 | 0 | 1000 | 720 |

---
waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：月初财务工作
  - ego的第2号事项：新版本任务、子任务的数据结构
  - ego的第4号事项：新版本任务、子任务的数据结构
  - ego的第5号事项：整理季度任务

- 60分钟时间片：
  - ego的第1号事项：schema manifest code v0
  - infra的第1号事项：动态菜单设计。
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第1号事项：js class

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - infra的第3号事项：schema立项。
  - PSMD的第4号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第7号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.01.[新版本任务、子任务的数据结构]任务&body=日期: 2024.10.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/10/20241001.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241001140000"></a>
## 14:00 ~ 14:29
## ego: [新版本任务、子任务的数据结构]

- 可以取消todo item，一律定义未task。
- task之间的关系由三个字段定义：
    - 父子task关系，树形结构、无环有向图；
    - 时序上的关系，参考甘特图的四种定义；
    - schema的层级level以及manifest之间的关系，有环有向图、网状结构。
        - 由于涉及文件种类多，需要单独的metadata。
- day plan、day over（blog的日小结）可以自动生成三张图的mermaid代码。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.01.[整理财务报表]任务&body=日期: 2024.10.01.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/10/20241001.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241001143000"></a>
## 14:30 ~ 15:14
## xuemen: [整理财务报表]

- 个税申报ok。
- 测试了银行账户。
- 云票助手下载链接恢复正常了。
- 试用了确认式申报，和发票抄报并行操作的大致流程不变。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.01.[schema manifest code v0]任务&body=日期: 2024.10.01.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/10/20241001.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241001160000"></a>
## 16:00 ~ 17:30
## ego: [schema manifest code v0]

- 先规划本季度时间，本任务顺延。
- 增加season.stat()
```
const seasoncommand = program
    .command('season')
    .description('以天季度为单位的自我管理功能');

seasoncommand
    .command("stat [date]")
    .description('显示季度统计报表。')
    .action((date) => {
        log("stat:", date);
        season.debug = true;
        season.stat(date);
    });
```
- 三季度模版统计：
```
D:\huangyg\git\ego\src>node ego season stat 20240701
> stat: 20240701
seasonfilename> theDate =  Mon Jul 01 2024 00:00:00 GMT+0800 (中国标准时间)
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 1       │ 52     │
│ 2       │ 40     │
└─────────┴────────┘
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 1a      │ 5      │
│ 1b      │ 24     │
│ 2a      │ 9      │
│ 1c      │ 8      │
│ 2b      │ 21     │
│ 2c      │ 9      │
│ 1d      │ 16     │
└─────────┴────────┘
```
- 四季度时间规划：
- mode:
    - 1: 40
    - 2: 20
- plan:
    - 1a:12
    - 1b:11
    - 1c:8
    - 1d:8
    - 1e:1
    - 1f:0
    - 2a:12
    - 2b:5
    - 2c:3
- 增加season.plan()
```
seasoncommand
    .command("plan")
    .description('计算本季度的时间计划，更新metadata文件。')
    .action(() => {
        log("plan");
        season.debug = false;
        season.plan();
    });
```
- 四季度计划：
```
D:\huangyg\git\ego\src>node ego season plan
> plan
seasonfilename> theDate =  Tue Oct 01 2024 16:51:47 GMT+0800 (中国标准时间)
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 30      │ 78     │
│ 60      │ 72     │
│ 90      │ 49     │
│ 195     │ 12     │
└─────────┴────────┘
plan> timesum: 13410
seasonfilename> theDate =  Tue Oct 01 2024 16:51:47 GMT+0800 (中国标准时间)
dumpseasonobj> seasonobj.time:
mode:
  '1': 40
  '2': 20
plan:
  1a: 12
  1b: 12
  1c: 8
  1d: 7
  1e: 1
  1f: 0
  2a: 12
  2b: 5
  2c: 3
alloc:
  PSMD: 7000
  ego: 4000
  infra: 2000
  xuemen: 1500
  raw: 500
  learn: 1500
  js: 1200
sold:
  PSMD: 0
  ego: 0
  xuemen: 0
  infra: 0
  js: 0
  learn: 0
  raw: 0
timeslice:
  '30': 78
  '60': 72
  '90': 49
  '195': 12
timesum: 13410
```
- 增加todo项：
    - '30': 整理季度任务