# 2024.10.20.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1c)。

<a id="index"></a>
- 14:00~14:14	ego: [未进行的todo项，增加特别的特征，不产生draft文件，day log中使用固定提示。](#20241020140000)
- 14:30~14:30	ego: [整理季度任务](#20241020143000)
- 16:00~16:00	PSMD: [整理闫岸家政能力讨论](#20241020160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1126 | 12404 | 4725 |
| PSMD | 4000 | 210 | 3790 | 1050 |
| ego | 2530 | 676 | 1854 | 945 |
| infra | 2000 | 160 | 1840 | 210 |
| xuemen | 1000 | 45 | 955 | 450 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 35 | 1965 | 960 |
| js | 1000 | 0 | 1000 | 720 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理季度任务
  - ego的第2号事项：未进行的todo项，增加特别的特征，不产生draft文件，day log中使用固定提示。

- 60分钟时间片：
  - PSMD的第1号事项：整理闫岸家政能力讨论
  - learn的第1号事项：PSMD term in helia dag-json https://www.npmjs.com/package/@helia/dag-json
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - PSMD的第2号事项：整理default模型
  - infra的第3号事项：schema立项。
  - raw的第3号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第4号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第5号事项：machines model
  - ego的第7号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.20.[未进行的todo项，增加特别的特征，不产生draft文件，day log中使用固定提示。]任务&body=日期: 2024.10.20.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/10/20241020.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241020140000"></a>
## 14:00 ~ 14:14
## ego: [未进行的todo项，增加特别的特征，不产生draft文件，day log中使用固定提示。]

- D:\huangyg\git\draft\2024\10\20241015.01.md
- 需求：
    - 完全没有做：
        - 人工：
            - amount=0
            - redo: x
            - delete output field
            - delete draft file
        - 自动：
            - todo项回到season metadata
    - 做了一部分
        - 人工
            - amount: x
            - redo: x (optional)
        - 自动
            - todo back to season metadata (optional)
            - output -> history
    - day plan:
        - history -> draft
- 编码：
    - 在day metadata增加todoitem字段，把season metadata的todo项完整写入。
    - 把season.js的addtodoitem()第二个参数改为todoitem。
    - day.js的makedaylog():if redo != null todo back to season
    - day.js的makedaylog(): if output exist output -> history
    - 在day init命令下if history exist history -> draft
- 下一时间实现代码。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.20.[整理季度任务]任务&body=日期: 2024.10.20.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/10/20241020.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241020143000"></a>
## 14:30 ~ 14:30
## ego: [整理季度任务]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.10.20.[整理闫岸家政能力讨论]任务&body=日期: 2024.10.20.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/10/20241020.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241020160000"></a>
## 16:00 ~ 16:00
## PSMD: [整理闫岸家政能力讨论]

- 继续追加时间。
