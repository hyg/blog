# 2025.06.04.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:59	js: [jora](#20250604140000)
- 16:00~16:59	raw: [新版food plan](#20250604160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6141 | 7389 | 8145 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1470 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 501 | 499 | 660 |
| raw | 1000 | 345 | 655 | 450 |
| learn | 2000 | 1431 | 569 | 2160 |
| js | 1000 | 684 | 316 | 1890 |

---
waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：月初事务
  - js的第1号事项：debug in vscodium
  - js的第4号事项：ai.js

- 60分钟时间片：
  - raw的第1号事项：整理 resource.md
  - learn的第1号事项：量子物理的数学基础
  - ego的第2号事项：entry的科目归并
  - raw的第2号事项：设计三季度时间表

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的按月归并
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - ego的第4号事项：新版基础模型
  - xuemen的第4号事项：kernel模型升级
  - ego的第5号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.04.[jora]任务&body=日期: 2025.06.04.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250604.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250604140000"></a>
## 14:00 ~ 14:59
## js: [jora]

- read:
    - https://github.com/discoveryjs/jora
    - https://www.npmjs.com/package/jora
    - https://discoveryjs.github.io/jora/
- npm install jora
- D:\huangyg\git\js.sample\query\jora.js
```
result = jora('.entries().filter(=> ((value.date > "2025-05-13") and (value.date < "2025-05-16")) )')(AERmap);
result = jora('.entries().filter(=> value.date.match("2025-01"))')(AERmap);
```
- 取月度数据和日期范围数据都ok，可以用来显示表格。
- .[block]语法有ok。
    - https://discoveryjs.github.io/jora/#article:jora-syntax-filter
- 读取分录科目进行合并，还需要更复杂的语法。以后再设法简化。
```
subset = jora('.values().[date.match("2025-06")]')(AERmap);
debit = jora('.AccountingEntry.debit.group(=>AccountTitle,=>amount).({AccountTitle: key,amount: value.sum()})')(subset);
credit = jora('.AccountingEntry.credit.group(=>AccountTitle).({AccountTitle: key,amount: value.amount.sum()})')(subset);

var credit2 = jora('.({AccountTitle,amount: -amount})')(credit);
result = jora('.group(=>AccountTitle,=>amount).({AccountTitle: key,amount: value.sum()})')([...debit,...credit2]);

log(yaml.dump(result));
console.table(result);
```
```
D:\huangyg\git\js.sample\query>node jora
> - AccountTitle: raw.food
  amount: 241.19
- AccountTitle: raw.supply
  amount: 7.56
- AccountTitle: raw.med
  amount: 634
- AccountTitle: ego.it
  amount: 176
- AccountTitle: 微信零钱
  amount: -824.16
- AccountTitle: 银行存款
  amount: -234.59

┌─────────┬──────────────┬─────────┐
│ (index) │ AccountTitle │ amount  │
├─────────┼──────────────┼─────────┤
│ 0       │ 'raw.food'   │ 241.19  │
│ 1       │ 'raw.supply' │ 7.56    │
│ 2       │ 'raw.med'    │ 634     │
│ 3       │ 'ego.it'     │ 176     │
│ 4       │ '微信零钱'   │ -824.16 │
│ 5       │ '银行存款'   │ -234.59 │
└─────────┴──────────────┴─────────┘
```
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.04.[新版food plan]任务&body=日期: 2025.06.04.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250604.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250604160000"></a>
## 16:00 ~ 16:59
## raw: [新版food plan]

- BMI上限放宽到20.5。
- 备餐种类从八种减到四种。
- 主食从200g加到300g。
- 6月份尝试一下新组合，适当扩充简餐选项。