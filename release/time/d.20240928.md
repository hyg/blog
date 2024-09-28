# 2024.09.28.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~17:09	PSMD: [整理8.28.讨论](#20240928140000)
- 16:00~16:09	PSMD: [整理9.5.讨论和代理协议](#20240928160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 13471 | 4229 | 4890 |
| PSMD | 7000 | 4952 | 2048 | 1050 |
| ego | 4000 | 2191 | 1809 | 990 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2379 | -879 | 990 |
| js | 1200 | 2018 | -818 | 720 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：day over [date]带有日期参数时，redo就不要插回season metadata了。
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/

- 60分钟时间片：
  - PSMD的第1号事项：整理9.5.讨论和代理协议
  - infra的第1号事项：动态菜单设计。
  - js的第1号事项：js class
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：整理default模型
  - infra的第3号事项：schema立项。
  - raw的第4号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - ego的第2号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.28.[整理8.28.讨论]任务&body=日期: 2024.09.28.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/09/20240928.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240928140000"></a>
## 14:00 ~ 17:09
## PSMD: [整理8.28.讨论]

- 规整这个任务的各时间片手稿，使用PSMD入门目录编号：
    - 20240902140000.md: 不符合附件20、21；不符合30；不符合43；
    - 20240916140000.md: 符合附件20、21、30，不全符合31、32、33、34，符合43，符合42；4.1.
    - 20240924.02.md：符合附件20、21、30，不全符合31、32、33、34，符合43，不符合42；4.3.
    - 20240925.02.md：符合附件20、21、30、31、32、33、34；符合42、43；5.1.
    - 20240926.02.md：符合附件20、21、30、31、32、33、34；符合42、不符合43；5.2.
    - 20240927.01.md：符合附件20、21、30、31、32、33、34；不符合42、符合43。5.3.
    - 20240928.01.md：mermaid图和全局建议

### commit

- 问题相关的书面记录几乎没有，只有临时、单方面的口述。
- 上一阶段选择（去高校）时口述的理由，和现阶段回顾（不能去高校）的理由相印证之后，判断目前状况：
    - 在意识到问题时，潜意识里已经做出选择；
    - 在思考问题时，潜意识不断修改基础信息，操纵思考结果；
    - 真正做出选择的时间和过程，被恐惧遮挡不容易认知；
    - 观察到--专注时可以夺回自主权，驱散干扰。估计制造这层恐惧的人和事早已离开，还有些许惯性残留。
- 综合以上情况，结合其它案例，给出不同情况的建议。以后需要靠自己从内部突破，逐层升级，而不建议借助其他人从外部施压。
- 注意：
    - 下图可点击，根据具体条款自检，然后自行选择具体建议。
    - 所有建议都来自有限的实践，还会随着今后实践修订。这些建议以外可能有可行方案，我也一直在边界外继续实践探索，但目前认识还浅，所以不能作为建议给别人。
    - 由于同一个问题在不同前提有不同建议，后续讨论需要明确前提。比如：“d.20240924.md#4-3中的建议讲得不够清楚，有几点疑问需要进一步探讨：1...2...3...”。

``` mermaid
graph
    2024.08.28. --> dbe32f79
    dbe32f79 --符合--> d0111eb4
    dbe32f79 --不符合--> 20240902140000
    d0111eb4 --符合--> 91ff9448
    d0111eb4 --不符合--> 20240902140000
    91ff9448 --符合--> 6d206b54
    91ff9448 --不符合--> 20240902140000

    6d206b54 --符合--> 9e6bc34f
    6d206b54 --不符合--> cb4ab0e9N[cb4ab0e9]
    9e6bc34f --符合--> 600f6f80
    9e6bc34f --不符合--> cb4ab0e9N[cb4ab0e9]
    600f6f80 --符合--> 12119600
    600f6f80 --不符合--> cb4ab0e9N[cb4ab0e9]
    12119600 --符合--> cb4ab0e9
    12119600 --不符合--> cb4ab0e9N[cb4ab0e9]

    cb4ab0e9N[cb4ab0e9] --符合--> 5ab2b2baN[5ab2b2ba]
    cb4ab0e9N[cb4ab0e9] --不符合--> 20240902140000
    5ab2b2baN[5ab2b2ba] --符合--> 20240916140000
    5ab2b2baN[5ab2b2ba] --不符合--> 20240924.02.4.3.

    cb4ab0e9 --符合--> 5ab2b2ba
    cb4ab0e9 --不符合--> N5ab2b2ba[5ab2b2ba]
    5ab2b2ba --符合--> 20240925.02.5.1.
    5ab2b2ba --不符合--> 20240926.02.5.2.
    N5ab2b2ba[5ab2b2ba] --符合--> 20240927.01.5.3.
    N5ab2b2ba[5ab2b2ba] --不符合--> 20240902140000

    click dbe32f79 "http://xuemen.github.io/PSMD/view/term.dbe32f79.html"
    click d0111eb4 "http://xuemen.github.io/PSMD/view/term.d0111eb4.html"
    click 91ff9448 "http://xuemen.github.io/PSMD/view/term.91ff9448.html"
    click 6d206b54 "http://xuemen.github.io/PSMD/view/term.6d206b54.html"
    click 9e6bc34f "http://xuemen.github.io/PSMD/view/term.9e6bc34f.html"
    click 600f6f80 "http://xuemen.github.io/PSMD/view/term.600f6f80.html"
    click 12119600 "http://xuemen.github.io/PSMD/view/term.12119600.html"
    click cb4ab0e9 "http://xuemen.github.io/PSMD/view/term.cb4ab0e9.html"
    click 5ab2b2ba "http://xuemen.github.io/PSMD/view/term.5ab2b2ba.html"
    click cb4ab0e9N "http://xuemen.github.io/PSMD/view/term.cb4ab0e9.html"
    click 5ab2b2baN "http://xuemen.github.io/PSMD/view/term.5ab2b2ba.html"
    click N5ab2b2ba "http://xuemen.github.io/PSMD/view/term.5ab2b2ba.html"

    click 20240902140000 "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240902.md#default"
    click 20240916140000 "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240916.md#4-1"
    click 20240924.02.4.3. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240924.md#4-3"

    click 20240925.02.5.1. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240925.md#5-1"
    click 20240926.02.5.2. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240926.md#5-2"
    click 20240927.01.5.3. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240927.md#5-3"
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.28.[整理9.5.讨论和代理协议]任务&body=日期: 2024.09.28.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240928.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240928160000"></a>
## 16:00 ~ 16:09
## PSMD: [整理9.5.讨论和代理协议]

- 仍然在关注产品包装设计，对代理的权利要求回应不多。
- 具体对话和分析手稿日后一并整理归档。
- 继续追加时间。
