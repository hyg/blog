# 2025.03.22.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月下旬补足前两月缺勤。今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~12:29	ego: [新版基础模型](#20250322093000)
- 14:00~15:29	ego: [新版实时手稿](#20250322140000)
- 16:00~16:00	js: [js class](#20250322160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7610 | 5920 | 6135 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 960 | 1570 | 1065 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1250 | -250 | 600 |
| learn | 2000 | 1035 | 965 | 1560 |
| js | 1000 | 1060 | -60 | 810 |

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
  - ego的第2号事项：新版基础模型
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.22.[新版基础模型]任务&body=日期: 2025.03.22.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250322.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250322093000"></a>
## 09:30 ~ 12:29
## ego: [新版基础模型]

- 复习双缝实验。
- 1999年实验的量子“擦除”还是依赖沿途晶体的特性，和思想实验的场景还有差距。
- 要想把个人模型和共同体模型的底层衔接到物理世界模型，还需要再推演一下。
- 继续追加时间。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.22.[新版实时手稿]任务&body=日期: 2025.03.22.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250322.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250322140000"></a>
## 14:00 ~ 15:29
## ego: [新版实时手稿]

- 从simplenote转移到飞书。
- node ego day init
    - 为当天每个任务创建云文档，设置开放共享，取得共享url；
    - 共享url写入day metadata；
    - 在飞书写手稿（离线情况能用吗？）
- node ego day over
    - 根据day metadata获得云文档的id；
    - 取得云文档内容，写入draft git库，生成blog git库的日小结；
    - git add . & git commit -m "xxx" & git push all
    - 删除飞书云文档。

- 离线好像不能用。继续追加时间验证一下。