# 2025.05.30.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:14	js: [json-query regexp](#20250530140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5142 | 8388 | 7185 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1470 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 269 | 731 | 540 |
| raw | 1000 | 285 | 715 | 450 |
| learn | 2000 | 1123 | 877 | 2190 |
| js | 1000 | 285 | 715 | 1020 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：lodash.findkey
  - learn的第2号事项：整理学术工具
  - js的第2号事项：jsonquerylang.org

- 60分钟时间片：
  - learn的第1号事项：量子物理的数学基础
  - raw的第1号事项：新版food plan
  - ego的第2号事项：entry的科目归并
  - raw的第2号事项：设计三季度时间表

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的按月归并
  - xuemen的第1号事项：2024年报
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.30.[json-query regexp]任务&body=日期: 2025.05.30.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250530.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250530140000"></a>
## 14:00 ~ 15:14
## js: [json-query regexp]

- D:\huangyg\git\js.sample\query\json-query.regexp.js
- 数组结构的查询ok
- AER结构的查询ok
- yaml.load要增加参数, { schema: yaml.FAILSAFE_SCHEMA }，以保持日期作为字符串。方便后续正则表达式处理。
    - 查询2025-05-13~2025-05-18的分录：
    - result = jsonQuery('[**][*date~/^2025-05-1[3-8]$/]', { data: AERmap, allowRegexp: true }).value;
```

D:\huangyg\git\js.sample\query>node json-query.regexp.js
> - date: '2025-05-13'
  VoucherID: '19250513152000031792975727052594'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: donation.parent
        asset: rmb
        amount: '26.98'
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: '26.98'
  comment:
    - name: 人参果
      amount: '2500'
      unit: g
      asset: '26.98'
- date: '2025-05-13'
  VoucherID: '1000050001202505130221128164106'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: '2000.00'
    credit:
      - AccountTitle: donation.parent
        asset: rmb
        amount: '2000.00'
- date: '2025-05-13'
  VoucherID: '19250509172010031716905866053015'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: '-25.63'
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: '-25.63'
  comment:
    - name: 腊鸭腿退款
      amount: '2500'
      unit: g
      asset: '-25.63'
- date: '2025-05-14'
  VoucherID: '19250514162000031820982519105386'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: '97.68'
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: '97.68'
  comment:
    - name: 河套全脂奶粉
      amount: '2500'
      unit: g
      asset: '97.68'
- date: '2025-05-15'
  VoucherID: '4200002717202505156831853189'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: '6.90'
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: '6.90'
  comment:
    - name: 小象超市月卡
      amount: '1'
      unit: 月
      asset: '6.90'
- date: '2025-05-15'
  VoucherID: '4200002730202505156369957438'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: '8.44'
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: '8.44'
  comment:
    - name: 菠菜
      amount: '350'
      unit: g
      asset: '2.21'
    - name: 油菜
      amount: '500'
      unit: g
      asset: '1.49'
    - name: 小白菜
      amount: '300'
      unit: g
      asset: '1.75'
    - name: 快菜
      amount: '500'
      unit: g
      asset: '2.99'
- date: '2025-05-15'
  VoucherID: '19250515122000031841454883147557'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: '87.05'
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: '87.05'
  comment:
    - name: 南粳46大米
      amount: '5000'
      unit: g
      asset: '39.97'
    - name: 百香果
      amount: '2500'
      unit: g
      asset: '26.84'
    - name: 红烧扣肉罐头
      amount: '680'
      unit: g
      asset: '20.25'
- date: '2025-05-15'
  VoucherID: '19250515122000031845270226052665'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: '13.80'
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: '13.80'
  comment:
    - name: 亚麻籽粉
      amount: '500'
      unit: g
      asset: '13.80'
- date: '2025-05-16'
  VoucherID: '2025051622001431991456112732'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: ego.it
        asset: rmb
        amount: '95.00'
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: '95.00'
  comment:
    - name: mars22.com域名
      amount: '500'
      unit: g
      asset: '13.80'
- date: '2025-05-17'
  VoucherID: '4200002655202505173483982034'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.site.bj1
        asset: rmb
        amount: '500.00'
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: '500.00'
  comment:
    - name: 电费
      amount: '500'
      unit: 元
      asset: '500.00'
- date: '2025-05-17'
  VoucherID: '4200002704202505178788601006'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.site.bj1
        asset: rmb
        amount: '42.00'
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: '42.00'
  comment:
    - name: 燃气费
      amount: '42'
      unit: 元
      asset: '42.00'
```