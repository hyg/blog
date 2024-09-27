# 2024.09.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~12:29	PSMD: [整理8.28.讨论](#20240927093000)
- 14:00~14:00	raw: [整理代码，理顺food.js几个成员函数之间的调用关系](#20240927140000)
- 16:00~16:29	PSMD: [整理9.5.讨论和代理协议](#20240927160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 13271 | 4429 | 4575 |
| PSMD | 7000 | 4752 | 2248 | 1050 |
| ego | 4000 | 2191 | 1809 | 765 |
| infra | 2000 | 275 | 1725 | 180 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2379 | -879 | 930 |
| js | 1200 | 2018 | -818 | 720 |

---
waiting list:


- 30分钟时间片：
  - infra的第1号事项：动态菜单设计。
  - learn的第1号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/

- 60分钟时间片：
  - PSMD的第1号事项：整理9.5.讨论和代理协议
  - ego的第1号事项：schema manifest code v0
  - js的第1号事项：js class
  - ego的第2号事项：eventemitter sample

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：整理8.28.讨论
  - infra的第3号事项：schema立项。
  - raw的第4号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：machines model
  - ego的第3号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.27.[整理8.28.讨论]任务&body=日期: 2024.09.27.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240927.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240927093000"></a>
## 09:30 ~ 12:29
## PSMD: [整理8.28.讨论]

- 规整这个任务的各时间片手稿：
    - 20240902140000.md: 不符合附件20、21；不符合30；不符合43；
    - 20240916140000.md: 符合附件20、21、30，不全符合31、32、33、34，符合43，符合42；4.1.
    - 20240924.02.md：符合附件20、21、30，不全符合31、32、33、34，符合43，不符合42；4.3.
    - 20240925.02.md：符合附件20、21、30、31、32、33、34；符合42、43；5.1.
    - 20240926.02.md：符合附件20、21、30、31、32、33、34；符合42、不符合43；5.2.
    - 20240927.01.md：符合附件20、21、30、31、32、33、34；不符合42、符合43。5.3.
    - 下一个时间片：mermaid图和全局建议

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
    5ab2b2baN[5ab2b2ba] --不符合--> 20240924.02.4.3

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
    click 20240916140000 "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240916.md#4.1."
    click 20240924.02.4.3. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240924.md#4.3."

    click 20240925.02.5.1. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240925.md#5.1."
    click 20240926.02.5.2. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240926.md#5.2."
    click 20240927.01.5.3. "https://codeberg.org/hyg/blog/src/branch/master/release/time/d.20240927.md#5.3."
```

### 5.3. 

- 条件：如果不符合附件42、符合附件43。
- 建议：先参考default+1406标准模型开展业务。
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.27.[整理代码，理顺food.js几个成员函数之间的调用关系]任务&body=日期: 2024.09.27.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240927.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240927140000"></a>
## 14:00 ~ 14:00
## raw: [整理代码，理顺food.js几个成员函数之间的调用关系]

- 上一个任务顺延。继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.27.[整理9.5.讨论和代理协议]任务&body=日期: 2024.09.27.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/09/20240927.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240927160000"></a>
## 16:00 ~ 16:29
## PSMD: [整理9.5.讨论和代理协议]

- 规整这个任务的各时间片手稿：
    - 20240921.01.md
    - 20240926.03.md
