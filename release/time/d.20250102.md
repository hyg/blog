# 2025.01.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1f)。

<a id="index"></a>
- 06:00~07:59	ego: [会计分录](#20250103060000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 5490 |
| PSMD | 4000 | 0 | 4000 | 1020 |
| ego | 2530 | 0 | 2530 | 945 |
| infra | 2000 | 0 | 2000 | 315 |
| xuemen | 1000 | 0 | 1000 | 450 |
| raw | 1000 | 0 | 1000 | 420 |
| learn | 2000 | 0 | 2000 | 1470 |
| js | 1000 | 0 | 1000 | 870 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：remoteStorage sample
  - raw的第1号事项：2025版管理excel
  - js的第1号事项：考虑sql.js是否使用。
  - learn的第4号事项：axios爬虫

- 60分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - ego的第1号事项：整理季度任务
  - ego的第2号事项：整理知识体系的层级定义
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。

- 90分钟时间片：
  - PSMD的第2号事项：整理default模型
  - raw的第4号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第5号事项：整理新版本term的manifest code
  - PSMD的第6号事项：整理新版本term的manifest text

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.01.03.[会计分录]任务&body=日期: 2025.01.03.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250102.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250103060000"></a>
## 06:00 ~ 07:59
## 6:00~8:00
ego: 会计分录

- 根据今天支出建立AER、AVR记录。
- 在ego下进行简单的分录。
```

D:\huangyg\git\ego\src>node ego asset entry
> entry
entry> 银行存款:
  id: 1
  name: 银行存款
  balance:
    rmb: -120.56
  record:
    - date: 2025-01-02T00:00:00.000Z
      asset: rmb
      type: credit
      amount: 102.41
    - date: 2025-01-02T00:00:00.000Z
      asset: rmb
      type: credit
      amount: 18.15
raw.food:
  id: 2
  name: raw.food
  balance:
    rmb: 120.56
  record:
    - date: 2025-01-02T00:00:00.000Z
      asset: rmb
      type: debit
      amount: 102.41
    - date: 2025-01-02T00:00:00.000Z
      asset: rmb
      type: debit
      amount: 18.15
```