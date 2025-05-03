# 2025.05.03.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:49	xuemen: [月初事务](#20250503140000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250503160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 3432 | 10098 | 6255 |
| PSMD | 4000 | 990 | 3010 | 1170 |
| ego | 2530 | 1155 | 1375 | 1410 |
| infra | 2000 | 300 | 1700 | 210 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 90 | 910 | 450 |
| learn | 2000 | 508 | 1492 | 1965 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：clerk统一用户管理
  - ego的第5号事项：entry的按月报表

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的科目归并
  - raw的第1号事项：新版food plan
  - js的第1号事项：learn factory, constructor, prototype

- 90分钟时间片：
  - PSMD的第1号事项：子1609
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。
  - js的第2号事项：learn graphql

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - learn的第2号事项：量子力学的各种诠释
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第3号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.03.[月初事务]任务&body=日期: 2025.05.03.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250503.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250503140000"></a>
## 14:00 ~ 14:49
## xuemen: [月初事务]

- 个税
    - 境内人员信息、是否扣除减除费用、是，保存、报送。
    - 之后按以前操作即可。
- 云票助手
    - 可用发票额度：已申报
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.03.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.05.03.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250503.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250503160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- D:\huangyg\git\js.sample\jsterms\main.js
```
D:\huangyg\git\js.sample\jsterms>node main
> id: '12'
name: term12
subterm:
  - localid: '1.'
    term:
      metadata:
        id: '111111'
        name: term1
        text: term1 text
        readme: term1 readme
  - localid: '2.'
    term:
      metadata:
        id: '222222'
        name: term2
        text: term2 text
        readme: term2 readme
text: |
  1. term1 text
  2. term2 text
readme: |
  1. term1 readme
  2. term2 readme
```
- 需要把term12的init、maketext、makereadme等成员函数提取出来，放在共用位置。
  - 但是也允许term自带成员函数，优先使用自带的。
- 继续追加时间。