# 2025.05.04.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:59	learn: [clerk统一用户管理](#20250504140000)
- 16:00~16:59	ego: [entry的按月报表](#20250504160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 3552 | 9978 | 6225 |
| PSMD | 4000 | 990 | 3010 | 1170 |
| ego | 2530 | 1215 | 1315 | 1410 |
| infra | 2000 | 300 | 1700 | 210 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 90 | 910 | 450 |
| learn | 2000 | 568 | 1432 | 1935 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：entry的按月报表

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：新版food plan
  - js的第1号事项：learn factory, constructor, prototype
  - ego的第2号事项：entry的科目归并

- 90分钟时间片：
  - PSMD的第1号事项：子1609
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。
  - learn的第2号事项：热更新

- 195分钟时间片：
  - learn的第1号事项：量子力学的各种诠释
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.04.[clerk统一用户管理]任务&body=日期: 2025.05.04.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250504.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250504140000"></a>
## 14:00 ~ 14:59
## learn: [clerk统一用户管理]

- https://clerk.com/docs/quickstarts/javascript
- D:\huangyg\git\js.sample\clerk\
- 更新.gitignore，创建 .env
- 创建clerk账号，创建应用项目，选用户名、手机号、钱包登录。
    - 拿到NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY和CLERK_SECRET_KEY、VITE_CLERK_PUBLISHABLE_KEY

### 不用框架

- npm install @clerk/clerk-js
- 不能用。

### 用框架

- 从安装vite开始
```
npm create vite@latest clerk-javascript
cd clerk-javascript
npm install
npm run dev
```
- TypeError: Cannot read properties of undefined (reading 'VITE_CLERK_PUBLISHABLE_KEY')
- 和框架绑定太紧，无法单独使用。
- 不适合独立项目使用，不再追加时间。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.04.[entry的按月报表]任务&body=日期: 2025.05.04.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250504.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250504160000"></a>
## 16:00 ~ 16:59
## ego: [entry的按月报表]

- 先实现下级科目向上级科目汇总的功能。
- D:\huangyg\git\ego\src\asset.js
    - 在account数据结构中增加credit、debit、ftitle字段。
    - 增加递归函数updatebalance
    - 修改entry函数，使用updatebalance

```
D:\huangyg\git\ego\src>npm run entry

> entry
> node ego asset entry

> entry
┌──────────────────┬───────────┬───────────────────┬───────────────────┬────────────────────┐
│ (index)          │ id        │ debit             │ credit            │ balance            │
├──────────────────┼───────────┼───────────────────┼───────────────────┼────────────────────┤
│ 总账             │ 0         │ { rmb: 101582.9 } │ { rmb: 101582.9 } │ { rmb: 0 }         │
│ 银行存款         │ 1         │ { rmb: 27000 }    │ { rmb: 40942.27 } │ { rmb: -13942.27 } │
│ 现金             │ 2         │ { rmb: 28615.76 } │ { rmb: 32024.87 } │ { rmb: -3409.11 }  │
│ 现金.微信零钱    │ 2.1       │ { rmb: 28615.76 } │ { rmb: 32024.87 } │ { rmb: -3409.11 }  │
│ raw              │ 10        │ { rmb: 33489.33 } │ { rmb: 0 }        │ { rmb: 33489.33 }  │
│ raw.food         │ 10.1      │ { rmb: 2828.08 }  │ { rmb: 0 }        │ { rmb: 2828.08 }   │
│ raw.med          │ 10.2      │ { rmb: 1227.04 }  │ { rmb: 0 }        │ { rmb: 1227.04 }   │
│ raw.site         │ 10.3      │ { rmb: 29365.71 } │ { rmb: 0 }        │ { rmb: 29365.71 }  │
│ raw.site.bj1     │ '10.3.1.' │ { rmb: 28365.21 } │ { rmb: 0 }        │ { rmb: 28365.21 }  │
│ raw.site.wz      │ '10.3.2.' │ { rmb: 1000.5 }   │ { rmb: 0 }        │ { rmb: 1000.5 }    │
│ raw.fun          │ 10.4      │ { rmb: 8.88 }     │ { rmb: 0 }        │ { rmb: 8.88 }      │
│ raw.shell        │ 10.5      │ { rmb: 40.96 }    │ { rmb: 0 }        │ { rmb: 40.96 }     │
│ raw.supply       │ 10.6      │ { rmb: 18.66 }    │ { rmb: 0 }        │ { rmb: 18.66 }     │
│ donation         │ 20        │ { rmb: 3802.82 }  │ { rmb: 28615.76 } │ { rmb: -24812.94 } │
│ donation.parent  │ 20.1      │ { rmb: 3674.26 }  │ { rmb: 28615.76 } │ { rmb: -24941.5 }  │
│ donation.younger │ 20.2      │ { rmb: 57.59 }    │ { rmb: 0 }        │ { rmb: 57.59 }     │
│ donation.else    │ 20.3      │ { rmb: 70.97 }    │ { rmb: 0 }        │ { rmb: 70.97 }     │
│ PSMD             │ 100       │ { rmb: 1038.99 }  │ { rmb: 0 }        │ { rmb: 1038.99 }   │
│ xuemen           │ 1000      │ { rmb: 7636 }     │ { rmb: 0 }        │ { rmb: 7636 }      │
└──────────────────┴───────────┴───────────────────┴───────────────────┴────────────────────┘
```