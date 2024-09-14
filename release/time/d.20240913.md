# 2024.09.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月中上旬补足前两月缺勤。今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~10:59	PSMD: [整理新版本term的manifest code](#20240913093000)
- 14:00~14:59	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20240913140000)
- 16:00~16:44	learn: [https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web](#20240913160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 11067 | 6633 | 4335 |
| PSMD | 7000 | 3737 | 3263 | 840 |
| ego | 4000 | 1653 | 2347 | 795 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1325 | -825 | 450 |
| learn | 1500 | 2198 | -698 | 990 |
| js | 1200 | 1823 | -623 | 810 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理ubuntu工作环境
  - js的第1号事项：js class framework
  - raw的第3号事项：熟悉内脏之间的关系

- 60分钟时间片：
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第2号事项：js class
  - raw的第2号事项：设计四季度时间表
  - ego的第3号事项：eventemitter sample

- 90分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：整理新版本term的manifest code
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - ego的第2号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.13.[整理新版本term的manifest code]任务&body=日期: 2024.09.13.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240913093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240913093000"></a>
# 9:30~10:59
PSMD: [整理新版本term的manifest code]

- FSM、FPM的实现，yaml+js class分工问题。
- ego 立项 schema：定义可重配置的protocol
    - protocol manifest text
    - protocol manifest law：
    - protocol menifest code：yaml+code（js、python、...）
        - yaml：FSM、FPM、event data、action data、....
        - js：event->action

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.13.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.09.13.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240913140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240913140000"></a>
## 14:00~15:29
PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

- 沿着昨天的入口继续构思。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.13.[https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web]任务&body=日期: 2024.09.13.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/09/20240913160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240913160000"></a>
learn: [https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web]

- 使用CID和DAG结合，把protocol拆散存储在不同entity那里。同时也是一种寿命管理，无人使用的protocol，原作者关机就消失了。
- 继续追加时间。
