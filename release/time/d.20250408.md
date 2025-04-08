# 2025.04.08.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~11:44	infra: [schema立项。](#20250408074500)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1704 | 11826 | 5910 |
| PSMD | 4000 | 525 | 3475 | 1170 |
| ego | 2530 | 540 | 1990 | 1260 |
| infra | 2000 | 240 | 1760 | 210 |
| xuemen | 1000 | 84 | 916 | 480 |
| raw | 1000 | 90 | 910 | 390 |
| learn | 2000 | 105 | 1895 | 1800 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：月初事务

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：熟悉内脏之间的关系
  - js的第1号事项：learn factory, constructor, prototype
  - raw的第2号事项：设计二季度时间表

- 90分钟时间片：
  - PSMD的第1号事项：子1609
  - ego的第1号事项：微观与宏观衔接的几篇论文
  - learn的第1号事项：热更新
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - ego的第2号事项：新版基础模型
  - xuemen的第2号事项：kernel模型升级
  - ego的第3号事项：新版ego, instance or model, any manifest
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.08.[schema立项。]任务&body=日期: 2025.04.08.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250408.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250408074500"></a>
## 07:45 ~ 11:44
## infra: [schema立项。]

- 基于新版基础模型，重新设计ego和entity概念。
- chain模型的设定是：信息随时间单向传递（积累），归档内容不会被篡改。
- 新版基础模型设定是：双向都不能保证真实，无论是内容还是事件的先后次序都可能不一样。
- 需要从最基础的互动重写所有知识。实际是从default模型开始都要重写。
- 继续增加时间，从最基础开始设计框架。争取延长向后兼容的时间。