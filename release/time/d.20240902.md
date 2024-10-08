# 2024.09.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~10:59	learn: [learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/](#20240902093000)
- 14:00~14:29	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20240902140000)
- 14:30~15:29	xuemen: [财务月初事项](#20240902143000)
- 16:00~16:59	learn: [https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web](#20240902160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 13471 | 4229 | 4890 |
| PSMD | 7000 | 4952 | 2048 | 1050 |
| ego | 4000 | 2191 | 1809 | 990 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2379 | -879 | 990 |
| js | 1200 | 2018 | -818 | 720 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：day over [date]带有日期参数时，redo就不要插回season metadata了。
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/

- 60分钟时间片：
  - PSMD的第1号事项：整理9.5.讨论和代理协议
  - infra的第1号事项：动态菜单设计。
  - js的第1号事项：js class
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：整理default模型
  - infra的第3号事项：schema立项。
  - raw的第4号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - ego的第2号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.02.[learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/]任务&body=日期: 2024.09.02.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240902093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240902093000"></a>
## 09:30 ~ 10:59
##  09:30~10:59
learn: [learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/]

- ADL开始是给大量数据只做专用的index，后来发展出其它用户场景。
- 更通用的描述是：ADLs are a way to customize how to see and interact with some data. 
- 把大量数据分片存储，也是ADL应用场景。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.02.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.09.02.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240902140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240902140000"></a>
## 14:00 ~ 14:29
## 14:00~14:29
PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

- 相隔半周后，再次斟酌小林问答。
- 保存在 D:\huangyg\6-友好人士\林命彬\问题.2024.08.28.md

### Q: 职业发展「3+3」可能会遇到哪些困难?哪些方面要重点发力?

1. 需要了解[3+3]的思考过程。
    - 在线询问思考过程得不到详细信息，线下会面询问会回答。如果线上线下都能提供详细信息，无论公私交流都会顺畅很多。
    - 思考过程中都是正面信息，基本没有负面信息。
1. 留在政府、政协、高校的决策。
    - 以前曾经谈到，讲的都是正面信息。
    - 这次提到一些负面信息，但以小林的能力应该早就掌握。
    - 如果能一视同仁地列出正面负面信息，可以提高决策质量。
1. 怎么才能问出负面信息，分析真正的困难和当前没可选上的重点？
    - 以及根据其它类似情形的经验，单纯靠语言逼问出正面、负面信息，需要很强的压力和技巧。效果不理想。
    - 如果交流对象能直接核实情况，隐瞒负面信息的念头会熄灭在萌芽，交流过程反而比较友好、高效。
    - 综合考虑实际情况，应该在身边寻找有素质较高的朋友，互相赋予真实的权利，支撑更高质量的思考和决策。

- 整理其他问题后再酝酿几轮。
---
- 2024.09.28.根据手稿整理到draft库：
- 条件（使用入门目录中的localid）：
    - 1.如果工作中不能按照附件20核实情况，也不能按照附件21提供依据。
    - 3.如果符合附件20、21。如果不符合附件30。
    - 4.2.如果符合附件20、21。如果符合附件30，但是不全符合附件31、附件32、附件33、附件34。如果符合附件42、不符合附件43。
    - 4.4.如果符合附件20、21。如果符合附件30，但是不全符合附件31、附件32、附件33、附件34。如果附件42、附件43都不符合。
    - 5.4.如果符合附件20、21。如果符合附件30，也全部符合附件31、附件32、附件33、附件34。如果不符合附件42、符合附件43。
- 建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。
- 在这套前提条件下：

### default

- 务实Q1：
    - 主要困难是在具体业务下，怎么选择违反规则的时间和事项，所制造的既成事实在下一轮协商时最有价值，达成的新契约最有利。
    - 发力点在于熟悉业务，提高 违规→既成事实→协商结果 的推演准确度。
- 务实Q2：眼前立刻可以兑现的事项就全力跟进，沿着这个方向发现新的、可以立刻落地的机会。需要长期投入培植的方向尽量控制投入。
- 务虚Q1：
    - 评估能看到自己和别人心里闪现的多少念头，能看到多少与所思考问题无关的干扰。
    - 选择会让自己心中念头看的更清楚的去向。
- 务虚Q2：
    - 一般情况下，不要刻意安排反思和复盘。
    - 出现重大损失时，记住怎么躲避损失。下次遇到如果能记起来就避开，记不起来也不要勉强。
- 务虚Q3：不需要刻意平衡理性和感性。遇事就按照当时当事的感受去做就好。
- 务虚Q4：不需要刻意寻找统一定义，当时当事觉得精彩就好。
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.02.[财务月初事项]任务&body=日期: 2024.09.02.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240902143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240902143000"></a>
## 14:30 ~ 15:29
## 14:30~14:59
xuemen: [财务月初事项]

- 处理回单、对账单。
- 抄报反写ok。
- 如果下载pdf和ofd文件，则只发送ofd。增加todo项测试OFD文件的自动读写。
    - '60': 在nodejs读写OFD文件。
      readme: |
        - https://github.com/ofdrw/ofdrw
        - https://blog.csdn.net/lishangke/article/details/135245444
        - https://www.npmjs.com/package/ofd.js/v/0.8.0
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.02.[https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web]任务&body=日期: 2024.09.02.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/09/20240902160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240902160000"></a>
## 16:00 ~ 16:59
## 16:00 ~ 16:59
learn: [https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web]

- 前面任务占用太多时间，继续追加时间。