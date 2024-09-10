# 2024.09.10.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月中上旬补足前两月缺勤。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:59	ego: [整理ubuntu工作环境](#20240910140000)
- 14:30~14:30	js: [js class framework](#20240910143000)
- 16:00~16:00	learn: [https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web](#20240910160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 10437 | 7263 | 4395 |
| PSMD | 7000 | 3242 | 3758 | 840 |
| ego | 4000 | 1653 | 2347 | 795 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1265 | -765 | 510 |
| learn | 1500 | 2123 | -623 | 990 |
| js | 1200 | 1823 | -623 | 810 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理ubuntu工作环境
  - js的第1号事项：js class framework
  - raw的第4号事项：熟悉内脏之间的关系

- 60分钟时间片：
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - raw的第1号事项：在心率曲线上增加其它运动种类。
  - js的第2号事项：js class
  - ego的第3号事项：eventemitter sample

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest code
  - PSMD的第2号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - raw的第2号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - ego的第2号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.10.[整理ubuntu工作环境]任务&body=日期: 2024.09.10.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240910140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240910140000"></a>
## 14:00~14:29
ego: [整理ubuntu工作环境]

### 过程

- 早起：编辑raw库health日志（血氧、心率、体重、睡眠log），第一轮备餐时编辑food日志（食材种类、重量、饮水时间）。
- 餐前运动：编辑raw库health日志的锻炼（时间、血氧、心率、脉搏次数、脉搏log），编辑food库（饮水时间）。
- 第二轮备餐：编辑raw库food日志（食材种类、重量）。
- 早餐前：整理微信存档（照片、睡眠和早餐日志、今日营养目标和备餐难点）。
- 早餐：编辑raw库food日志（时间）。
- 早餐后：根据身心情况决定时间模版。
    - 在ego库执行init命令；
    - 在blog库commit和push，复制日计划到simplenote；
    - 在raw库commit和push；
    - 编辑raw库food日志（饮水、服维生素时间）；
    - 编辑raw库health日志（排便log）。
- 室外运动：编辑raw库health日志（时间、时长、血氧、心率）。
- 上午：
    - 编辑raw库food日志（饮水时间）；
    - 在simplenote编辑手稿；
    - 编辑各项目git库，这段时间主要是ego、PSMD、raw、js.jample等；
- 上午休整：第一轮备午餐时编辑food日志（食材种类、重量）。
- 中午：第二轮备午餐时编辑food日志（食材种类、重量）。
- 午餐：编辑raw库food日志（时间）。
- 下午：
    - 编辑raw库food日志（饮水时间）；
    - 在simplenote编辑手稿；
    - 编辑各项目git库，这段时间主要是ego、PSMD、raw、js.jample等；
- 下午休整：第一轮备晚餐时编辑food日志（食材种类、重量）。
- 下午运动：编辑raw库health日志（时间、血氧、心率、恢复到80心率的秒数）。
- 傍晚：第二轮备晚餐时编辑food日志（食材种类、重量）。
- 晚餐：编辑raw库food日志（时间）。
- 整理提交：
    - 整理simplenote手稿；
    - 编辑ego库day metadata（实际使用时间、redo时间）；
    - 编辑draft库的各时间片日志、清理simplenote手稿；
    - 在ego库执行over命令；
        - 可能先执行plan命令，调整ego库season metadata文件的todo项；
    - 在blog、ego、draft以及当天编辑过的项目等库执行commit和push。
- 晚上：编辑raw库（饮水时间、粗编次日餐谱）。

### 工作环境
- 准备raw、ego、blog、PSMD、js.sample等git库，pull最新数据；
- simplenote、vscodium等工具。

- 可以实际测试环境，然后整天实测。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.10.[js class framework]任务&body=日期: 2024.09.10.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/09/20240910143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240910143000"></a>
## 计划 14:30 ~ 14:59
js: [js class framework]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.10.[https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web]任务&body=日期: 2024.09.10.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240910160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240910160000"></a>
## 计划 16:00 ~ 16:59
learn: [https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web]

- 继续追加时间。
