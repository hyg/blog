# 2025.03.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月中上旬补足前两月缺勤。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~17:59	js: [js class](#20250318160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7100 | 6430 | 6045 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 690 | 1840 | 975 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1250 | -250 | 600 |
| learn | 2000 | 1035 | 965 | 1560 |
| js | 1000 | 820 | 180 | 810 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第十一式
  - raw的第3号事项：复习五元庄第十式
  - raw的第4号事项：复习五元庄第十二式
  - raw的第5号事项：复习五元庄第十三式

- 60分钟时间片：
  - js的第1号事项：js class
  - raw的第1号事项：新版本food预算决算
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：learn js implement of ipfs

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：复习dat
  - ego的第2号事项：新版本任务、子任务的数据结构
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.18.[js class]任务&body=日期: 2025.03.18.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250318.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250318160000"></a>
## 16:00 ~ 17:59
## js: [js class]

- main.js是infra维护的总入口。
- obj in js分布在不同层级，可以是infra维护的标准接口（甚至和main.js是绑定的），也可以是某个vat的局部设定。
- yaml文件是某个js的data manifest。
- 暂时按以上思路实践一下。
- 根据PSMD知识检索的需求，增加todo项：
    - '90': learn graphql
      readme: |
        - https://www.graphql-js.org/docs/
        - https://github.com/graphql/graphql-js
        - https://the-guild.dev/graphql/tools
        - https://github.com/ardatan/graphql-tools