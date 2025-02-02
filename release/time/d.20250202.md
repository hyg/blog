# 2025.02.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	ego: [启用新字段存放前置任务的output，自动汇编写入新的draft文件。](#20250202160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2465 | 11065 | 6060 |
| PSMD | 4000 | 1505 | 2495 | 1140 |
| ego | 2530 | 300 | 2230 | 855 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 90 | 910 | 450 |
| raw | 1000 | 255 | 745 | 1020 |
| learn | 2000 | 195 | 1805 | 1410 |
| js | 1000 | 0 | 1000 | 870 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：考虑sql.js是否使用。
  - raw的第1号事项：复习形神庄第四节
  - raw的第2号事项：复习形神庄第五节
  - raw的第3号事项：复习形神庄第六节

- 60分钟时间片：
  - learn的第1号事项：firebase的开源替代
  - PSMD的第2号事项：1609的分立、合并。
  - ego的第2号事项：新版本任务、子任务的数据结构
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。

- 90分钟时间片：
  - PSMD的第1号事项：子1609
  - ego的第1号事项：启用新字段存放前置任务的output，自动汇编写入新的draft文件。
  - PSMD的第3号事项：整理新版本term的manifest code
  - PSMD的第4号事项：智在科技项目准备

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.02.[启用新字段存放前置任务的output，自动汇编写入新的draft文件。]任务&body=日期: 2025.02.02.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250202.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250202160000"></a>
## 16:00 ~ 16:59
## ego: [启用新字段存放前置任务的output，自动汇编写入新的draft文件。]

- key: pre
- value: 一个嵌套式的数组，树形结构。
- 某一天的output插入到数组的某个位置，由当天day metadata定义具体章节结构。
    - key: subof
    - value: pre树的节点value
    - key: after
    - value: pre树的节点value
- 自动判断当天无输出，删去draft文件。
- 自动根据pre字段，汇集前面的draft文件，写入当天draft。

- 是否与task、todoitem的定义重复。
- 一个todoitem可以重复占用时间片，都按照after关系连续组合。
- 凡是需要跳章节的，必须另起task，在task中定义父子关系。
    - 增加task的命令行设计
    - 增加从draft向task output汇总的todoitem种类？
    - 操作系统路径和文件内结构组合的task路径
- 继续追加时间。