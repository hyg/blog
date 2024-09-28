# 2024.09.26.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	PSMD: [machines model](#20240926074500)
- 14:00~14:29	PSMD: [整理8.28.讨论](#20240926140000)
- 16:00~17:14	PSMD: [整理9.5.讨论和代理协议](#20240926160000)

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
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.26.[machines model]任务&body=日期: 2024.09.26.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240926.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240926074500"></a>
## 07:45 ~ 10:59
## PSMD: [machines model]

- machines作为protocol的统一接口，考虑将来各种设备的情况。
- entity和protocol的共同点、区别是什么。它们的manifest code的区别是什么。
    - 一些种类的protocol可以定义一些种类的entity。
        - 修订链顶点在protocol以内
        - 针对未界定事项有兜底程序
        - 定义了全生命周期所有阶段
    - 普通protocol（未能定义entity）也可以定义暂时未分配的权力和利益。
- mechines的接口定义，也是可以修订的，由ego修订。
    - 实际上是ego的manifest text -> code 的实现。
- entity可以提议、签署、执行protocol。
- entity的核心定义是：自我认知能力。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.26.[整理8.28.讨论]任务&body=日期: 2024.09.26.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240926.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240926140000"></a>
## 14:00 ~ 14:29
## PSMD: [整理8.28.讨论]

---
- 2024.09.28.根据手稿整理到draft库：
- 条件：如果符合附件42、不符合附件43。
- 建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。
- 在这前提条件下：

### 5.2. 

- 务实Q1：约束核心人员利用职权寻租。重点发力是先约束自己，再用约束自己的方法约束其他成员。
- 务实Q2：眼前立刻可以兑现的事项就全力跟进，沿着这个方向发现新的、可以立刻落地的机会。需要长期投入培植的方向尽量控制投入。
- 务虚Q1：
    - 评估能看到自己和别人心里闪现的多少念头，能看到多少与所思考问题无关的干扰。
    - 选择会让自己心中念头看的更清楚的去向。
- 务虚Q2：
    - 一般情况下，不要刻意安排反思和复盘。
    - 出现重大损失时，记住怎么躲避损失。下次遇到如果能记起来就避开，记不起来也不要勉强。
- 务虚Q3：在实践中去理解什么是理性、感性、“感受力”，拿出第三方可以独立使用的定义再讨论。
- 务虚Q4：不需要刻意寻找统一定义，当时当事觉得精彩就好。
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.26.[整理9.5.讨论和代理协议]任务&body=日期: 2024.09.26.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/09/20240926.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240926160000"></a>
## 16:00 ~ 17:14
## PSMD: [整理9.5.讨论和代理协议]

- 按以下结构整理到前几天时间片，重新用day over参数生成blog。

### 代理人合作协议V1.2草稿
#### 遵守附件20、21
##### 遵守附件30、31
##### 不遵守附件30、31
######遵守附件40
######遵守附件41
######遵守附件42
######遵守附件43
######遵守附件44
#### 不遵守附件20、21