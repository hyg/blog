# 2024.12.28.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，十二月中上旬补足前两月缺勤。今天绑定模版1(1f)。

<a id="index"></a>
- 19:00~03:59	infra: [learning](#20241228190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6633 | 6897 | 5490 |
| PSMD | 4000 | 1745 | 2255 | 1020 |
| ego | 2530 | 1721 | 809 | 945 |
| infra | 2000 | 790 | 1210 | 315 |
| xuemen | 1000 | 485 | 515 | 450 |
| raw | 1000 | 767 | 233 | 420 |
| learn | 2000 | 1115 | 885 | 1470 |
| js | 1000 | 10 | 990 | 870 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：考虑sql.js是否使用。
  - learn的第1号事项：remoteStorage sample
  - raw的第1号事项：2025版管理excel
  - learn的第4号事项：axios爬虫

- 60分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - ego的第1号事项：整理季度任务
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：引用github等特定版本js文件的html模版

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
<a href="mailto:huangyg@mars22.com?subject=关于2024.12.28.[learning]任务&body=日期: 2024.12.28.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/12/20241228.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241228190000"></a>
## 19:00 ~ 03:59
# 00:00~02:30
infra：learning

- openapi及其竞争对手
  - openapi引用最广，linux基金会支持。使用json（yaml兼容），擅长文档和代码框架生成。
  - 其它竞争对手有用yaml和markdown的，各有工具链支持。擅长接口设计、团队协作等等。
- p2p的数据库
  - 选择了一圈还是orbitdb综合最好。
  - 用orbitdb传播简短的配置信息，指向各处有中心的下载url及初级处理代码即可。
  - npm、docker、git等方式根据代码实现的情况，综合选用。