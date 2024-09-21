# 2024.09.21.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~11:29	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20240921093000)
- 14:00~14:00	infra: [动态菜单设计。](#20240921140000)
- 14:30~14:39	PSMD: [根据近期交流情况整理入口protocol](#20240921143000)
- 16:00~17:29	ego: [ego day各参数中增加已实现的diff](#20240921160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 12177 | 5523 | 4635 |
| PSMD | 7000 | 4092 | 2908 | 990 |
| ego | 4000 | 2043 | 1957 | 795 |
| infra | 2000 | 200 | 1800 | 150 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2258 | -758 | 990 |
| js | 1200 | 1928 | -728 | 780 |

---
waiting list:


- 30分钟时间片：
  - PSMD的第1号事项：根据近期交流情况整理入口protocol
  - infra的第1号事项：动态菜单设计。
  - ego的第2号事项：day.js maketomorrowinfo()并行增加一个函数，支持diff项。然后把plan参数转向新函数。
  - infra的第2号事项：动态菜单设计。

- 60分钟时间片：
  - js的第1号事项：js class
  - raw的第1号事项：熟悉内脏之间的关系
  - js的第2号事项：js class
  - learn的第2号事项：learn Blogging on the Decentralized Web https://proto.school/blog

- 90分钟时间片：
  - learn的第1号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第2号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - raw的第2号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - infra的第3号事项：schema立项。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第7号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.21.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.09.21.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240921.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240921093000"></a>
## 09:30 ~ 11:29
## PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

 - 几个有代表性的阶段：
    - 低标准+无预期
    - 低标准+高预期：不符合规律，受到质疑。
    - 低标准+低预期：主动强调低预期，表示高预期是别人强加的。
- 案例一：培养子女家政能力
    - 低标准：父母单方面、事后、主观、评估
    - 高标准：制定统一KPI、责权利之后公平竞争
    - 低预期：培养揣摩父母想法的能力
    - 高预期：培养家政能力
    - 停留在【低标准+高预期】，沉默不语。
        - 提出“规则”，其中为自己隐藏单方面、主观的权力。
- 案例二：日化品营销
    - 低标准：直营的众筹、网店，线下实体店铺货。
    - 高标准：建立分销渠道
    - 低预期：维持收支平衡
    - 高预期：人均月收入三万以上
    - 进入【低标准+低预期】，沉默不语。
        - 以doc文件提出校园渠道的代理商合作协议，因内容照搬强势产品不适应自身产品。遇到质疑后表示与学生谈判另有一份协议，实际上很可能选择维持现状（未成形的渠道政策、无提纲的漫谈式调研、...）。
        - 以图文宣传稿提出代理合作协议，并认为不签署正式合同就没有效力。遇到质疑后表示只做网店销售，不发展代理渠道。
- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.21.[动态菜单设计。]任务&body=日期: 2024.09.21.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240921.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240921140000"></a>
## 14:00 ~ 14:00
## infra: [动态菜单设计。]

- 继续追加时间。
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.21.[根据近期交流情况整理入口protocol]任务&body=日期: 2024.09.21.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240921.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240921143000"></a>
## 14:30 ~ 14:39
## PSMD: [根据近期交流情况整理入口protocol]

- 继续追加时间。
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.21.[ego day各参数中增加已实现的diff]任务&body=日期: 2024.09.21.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/09/20240921.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240921160000"></a>
## 16:00 ~ 17:29
## ego: [ego day各参数中增加已实现的diff]

- 加入option：
```
daycommand
    .command("init <mode>")
    .description('初始化：绑定时间模版，创建日计划、次日规划、手稿及元数据文件。')
    .option("-d, -diff <diff>","目标日期相对于今天的天数。",0)
    .action((mode,diff=0) => {
        log("init:%s %s", mode,diff);
        var dayobj = day.makedayobj(mode,diff);
        day.makedayplan(dayobj);
        day.maketomorrowinfo();
    });
```
```
D:\huangyg\git\ego\src>node ego day init 2 -d -6
> init:2 { Diff: '-6' }
getwaketime> diff: -6
getwaketime> theDate: 2024-09-15T08:34:04.342Z
getwaketime> dateStr: 20240915
makedayobj> waketime: 60700
datestr is empty
seasonfilename> theDate =  Sun Sep 15 2024 00:00:00 GMT+0800 (中国标准时间)
makedayobj> dayplan: 2b
makedayobj> timeslice: 0 free 6 7 15 6 21
......
```
- over指令已经有绝对日期参数。使用较少不再增加diff。
- plan指令的maketomorrowinfo没有diff参数。可以另外增加todo项。
    - '30': day.js maketomorrowinfo()并行增加一个函数，支持diff项。然后把plan参数转向新函数。
