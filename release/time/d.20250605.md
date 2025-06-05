# 2025.06.05.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:01	ego: [整理会计分录的统计报表格式](#20250605140000)
- 15:28~15:37	xuemen: [月初事务](#20250605152800)
- 16:00~18:09	ego: [整理js对象检索的代码](#20250605160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6363 | 7167 | 8460 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1712 | 818 | 1680 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1431 | 569 | 2160 |
| js | 1000 | 684 | 316 | 1890 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：debug in vscodium
  - js的第4号事项：ai.js

- 60分钟时间片：
  - learn的第1号事项：量子物理的数学基础
  - raw的第2号事项：设计三季度时间表
  - learn的第2号事项：cursor rules
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - raw的第1号事项：整理 resource.md
  - ego的第3号事项：新版基础模型
  - xuemen的第3号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.05.[整理会计分录的统计报表格式]任务&body=日期: 2025.06.05.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250605.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250605140000"></a>
## 14:00 ~ 15:01
## ego: [整理会计分录的统计报表格式]

### 损益表（Trading Profit and Loss Account, 美式叫Income Statement）

- https://wiki.mbalib.com/wiki/%E6%8D%9F%E7%9B%8A%E8%A1%A8
- 单步式 vs 多步式： 对基础元数据的要求相同。
    - 多步式每项要求计算本月数、本年累计数，需要增加中间变量，增加计算量，对元数据要求相同。
- 管理费用下需要分解出更多二三级科目，适应智能设备和权利分配方案（“行政”概念的升级），由部署方案的资产清单中定义。
- 财务费用下，需要增加各种token的发行、销毁、兑换（to做市商...）等等支出，由token的发行管理机构的部署方案和决议来定义。
- 权责发生制 https://wiki.mbalib.com/wiki/%E6%9D%83%E8%B4%A3%E5%8F%91%E7%94%9F%E5%88%B6 需要重新定义。
    - 合约条款的条件触发时间（生效时间）
    - token锁定的时间
    - 针对使用随机数的情况，需要特别定义

### 现金流量表 (Cash Flow Statement)

- https://wiki.mbalib.com/wiki/%E7%8E%B0%E9%87%91%E6%B5%81%E9%87%8F%E8%A1%A8
- 由于涉外交易流入的法币与token持有者自动交易，离开主体。需要以token为单位编制，需要定义如何使用token和法币的浮动汇率。因为大量资产以token报价，内部资产的计算更直接。极端情况下出现多余的法币，处理方式类似于商品。
    - 需要考虑token的流动性。
- 表格内容和计算关系很直观，没有太多需要特别定义的地方。

### 资产负债表(Balance Sheet)，亦称财务状况表（Statement of financial position）

- https://wiki.mbalib.com/wiki/%E8%B5%84%E4%BA%A7%E8%B4%9F%E5%80%BA%E8%A1%A8
- 根据PSMD的定义，entity都没有“所有者”。只有各种票据（股票、债券）、合约、token的所有者，这些票据和合约、token涉及分配权时，应该针对该权利的名称定义“某某权益”。
- 此外没有特殊的。

### 其它属性
- 时间
    - 月度
    - 季度
    - 半年度
    - 年度
    - 只会增加中间变量和计算量，不影响元数据定义。
- 编制单位
    - 单位：task作为编制单位，todo item不建账。
    - 汇总
- 范围
    - 个别
    - 合并
    - 由split、joint两个基础protocol进一步定义细节。

### 总结

- entity和split、joint两个基础protocol，界定编制单位、范围的细节。
- 票据、合约、token涉及的分配权，定义“某某权益”，纳入资产负债表。
- 外围entity处于token和法币兑换的边界，需要加强做市商角色和稳定基金，保证token流动性。这是现金流量表转向token为单位的基础。
- 在COM中定义权责发生制的时间点，作为损益表的基础。
- 在COD和决议案中定义管理费用、财务费用的下级科目。
- 实际产生三大报表，检验AVR、AER两大元数据格式定义。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.05.[月初事务]任务&body=日期: 2025.06.05.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250605.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250605152800"></a>
## 15:28 ~ 15:37
## xuemen: [月初事务]

- 一切顺利。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.05.[整理js对象检索的代码]任务&body=日期: 2025.06.05.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250605.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250605160000"></a>
## 16:00 ~ 18:09
## ego: [整理js对象检索的代码]

- d:\huangyg\git\js.sample\query\ 下已经使用jsonquery、json-query、lodash、jora四种方式检索js对象。
    - https://www.npmjs.com/package/@jsonquerylang/jsonquery
    - https://www.npmjs.com/package/json-query
    - https://www.npmjs.com/package/lodash
    - https://www.npmjs.com/package/jora
    - Weekly Downloads：59,743、231,140、73,035,630、308,407（2024-06-06 to 2024-06-12）
    - Last publish：8 days ago、8 years ago、4 years ago、9 months ago

- 还有js的原生功能。
    - 可以提取月度、时间段的会计分录数据。
    - 按科目合并比较麻烦，groupby之后还要entries展开，然后map、reduce完成累加。
```
D:\huangyg\git\js.sample\query>node js
> raw.food,rmb:
  - AccountTitle: raw.food
    asset: rmb
    amount: 10.16
  - AccountTitle: raw.food
    asset: rmb
    amount: 9.18
  - AccountTitle: raw.food
    asset: rmb
    amount: 20
  - AccountTitle: raw.food
    asset: rmb
    amount: 40.5
  - AccountTitle: raw.food
    asset: rmb
    amount: 90.36
  - AccountTitle: raw.food
    asset: rmb
    amount: 31.9
  - AccountTitle: raw.food
    asset: rmb
    amount: 39.09
raw.supply,rmb:
  - AccountTitle: raw.supply
    asset: rmb
    amount: 7.56
raw.med,rmb:
  - AccountTitle: raw.med
    asset: rmb
    amount: 634
ego.it,rmb:
  - AccountTitle: ego.it
    asset: rmb
    amount: 176
微信零钱,rmb:
  - AccountTitle: 微信零钱
    asset: rmb
    amount: -10.16
  - AccountTitle: 微信零钱
    asset: rmb
    amount: -618
  - AccountTitle: 微信零钱
    asset: rmb
    amount: -20
  - AccountTitle: 微信零钱
    asset: rmb
    amount: -176
银行存款,rmb:
  - AccountTitle: 银行存款
    asset: rmb
    amount: -7.56
  - AccountTitle: 银行存款
    asset: rmb
    amount: -9.18
  - AccountTitle: 银行存款
    asset: rmb
    amount: -16
  - AccountTitle: 银行存款
    asset: rmb
    amount: -40.5
  - AccountTitle: 银行存款
    asset: rmb
    amount: -90.36
  - AccountTitle: 银行存款
    asset: rmb
    amount: -31.9
  - AccountTitle: 银行存款
    asset: rmb
    amount: -39.09

D:\huangyg\git\js.sample\query>node js
> - title: raw.food,rmb
  amount: 241.19
- title: raw.supply,rmb
  amount: 7.56
- title: raw.med,rmb
  amount: 634
- title: ego.it,rmb
  amount: 176
- title: 微信零钱,rmb
  amount: -824.16
- title: 银行存款,rmb
  amount: -234.59
```

- 继续追加时间整理。