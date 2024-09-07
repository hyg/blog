# 2024.09.07.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月上旬补足前两月缺勤。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:39	raw: [设计四季度时间表](#20240907140000)
- 14:30~14:49	raw: [整理代码，理顺food.js几个成员函数之间的调用关系](#20240907143000)
- 16:00~16:59	js: [js class](#20240907160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 10062 | 7638 | 4335 |
| PSMD | 7000 | 3047 | 3953 | 840 |
| ego | 4000 | 1573 | 2427 | 795 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1235 | -735 | 450 |
| learn | 1500 | 2063 | -563 | 990 |
| js | 1200 | 1813 | -613 | 810 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理ubuntu工作环境
  - js的第3号事项：js class framework
  - raw的第3号事项：熟悉内脏之间的关系

- 60分钟时间片：
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第1号事项：js class
  - js的第2号事项：js class
  - raw的第2号事项：设计四季度时间表

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
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.07.[设计四季度时间表]任务&body=日期: 2024.09.07.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240907140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240907140000"></a>
## 14:00~14:29
raw: [设计四季度时间表]

- readme: |
      - 两片休整时间联合调节的算法需要整理。
      - 餐谱和饱腹感时间需要综合算计（饱腹感+饥饿感）：
        - 早餐：5+1、4+1、3+1小时三版；
        - 午餐：5+1、2+1小时两版；
        - 晚餐：3+0、2+0小时两版。
    - 兼容两套时间模版：
        - 4~5：5:15~6:14（5+0~1）、11:15（5+1）、17:15（3+0）
        - 5~6:   6:15~7:14（4+0~1）、11:15（5+1）、17:15（3+0）
        - 6~7:   7:15~8:14  (3+0~1)、11:15（5+1）、17:15（3+0）
        - 7~8:   8:15~9:14  (3+0~1)、12:15（4+1）、17:15（3+0）
        - 8~9:   9:15~10:14 (5+0~0.5)、15:30（2+0.5）、18:00（2+0）
        - 9~10: 10:15~11:14(4+0~0.5)、15:30（2+0.5）、18:00（2+0）
        - 10~11: 11:15~12:14(5+0~1)、17:15（3+0）
        - 11~12: 12:15~13:14(4+0~1)、17:15（3+0）
        - 12~13: 13:15~14:14(3+0~1)、17:15（3+0）
        - 13~： 全天休整
- 还是5点之前起床身心状况最好，工作时间效率最高，内脏脂肪清理最干净。
  - 摸索内脏状态调整的模式。
- 时间模版和 (时间模版->时间表)代码绑定在季度metadata中，可以使用day.js中的export类的成员变量。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.07.[整理代码，理顺food.js几个成员函数之间的调用关系]任务&body=日期: 2024.09.07.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/09/20240907143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240907143000"></a>
## 14:30~14:59
raw: [整理代码，理顺food.js几个成员函数之间的调用关系]

- 删掉map组成员变量，跳过map组直接做table组；
- 命令行参数、网页和config.js结合的方式：
    - 保留旧版本简洁的命令行参数，用它们覆盖内存中的config对象，再执行统一的后续代码；
    - 网页模式下，在编辑框列出config对象内容，改写后再执行统一的后续代码；
- console.table和网页兼容的输出方式。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.07.[js class]任务&body=日期: 2024.09.07.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240907160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240907160000"></a>
## 16:00~16:59
js: [js class]

- readme: |
      - https://zh.javascript.info/class
      - https://www.w3school.com.cn/js/pro_js_object_oriented.asp
      - yaml文件，obj in js，main.js之间是什么关系？其他语言怎么处理？放在schema框架统一再斟酌。

- js中的类能否支撑ego和PSMD项目的schema需求？
- 以FSM为例实现一下。
