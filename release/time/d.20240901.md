# 2024.09.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月上旬补足前两月缺勤。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:59	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20240901140000)
- 14:30~14:59	raw: [整理代码，理顺food.js几个成员函数之间的调用关系](#20240901143000)
- 16:00~17:29	learn: [learn IPLD Codes, https://ipld.io/docs/data-model/node/](#20240901160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 9197 | 8503 | 3855 |
| PSMD | 7000 | 2672 | 4328 | 780 |
| ego | 4000 | 1573 | 2427 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 480 |
| raw | 500 | 1115 | -615 | 150 |
| learn | 1500 | 1873 | -373 | 930 |
| js | 1200 | 1693 | -493 | 750 |

---
waiting list:


- 30分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - xuemen的第1号事项：财务月初事项
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 60分钟时间片：
  - js的第1号事项：js class
  - ego的第2号事项：eventemitter sample
  - learn的第2号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第2号事项：learn Orbitdb

- 90分钟时间片：
  - learn的第1号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第3号事项：整理新版本term的manifest text
  - PSMD的第6号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.01.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.09.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240901140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240901140000"></a>
## 14:00~14:29
PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.01.[整理代码，理顺food.js几个成员函数之间的调用关系]任务&body=日期: 2024.09.01.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/09/20240901143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240901143000"></a>
## 14:30~14:59
raw: [整理代码，理顺food.js几个成员函数之间的调用关系]

- read D:\huangyg\git\draft\2024\08\20240831140000.md
- 可以跳过map这步，直接统计到table。然后基于table展开各项功能。
- D:\huangyg\git\raw\src\readme.md

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.01.[learn IPLD Codes, https://ipld.io/docs/data-model/node/]任务&body=日期: 2024.09.01.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240901160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240901160000"></a>
## 16:00~16:59
learn: [learn IPLD Codes, https://ipld.io/docs/data-model/node/]

- linkeddata是为了了解数据的构造和定义。
- 数据的定义是schema的一部分，将引出其它部分。
- 可以在raw food和ego day下测试一下报告模版。
    - 扩展term老版本产生view的功能。
- codec : block -> node
    - The term "block" refers to to a chunk of serialized binary data.
- ADLs: node interface , data -> node
    - Advanced Data Layouts ("ADLs") are a way to take data in IPLD and customize additional ways to see and interact it. ADLs can be thought of like a "lens" for data: they can take some data and make it legible in a different way.
- schema: node interface,
