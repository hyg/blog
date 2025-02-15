# 2025.02.15.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	ego: [新版本任务、子任务的数据结构](#20250215160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 3915 | 9615 | 6105 |
| PSMD | 4000 | 2765 | 1235 | 1335 |
| ego | 2530 | 360 | 2170 | 885 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 150 | 850 | 450 |
| raw | 1000 | 255 | 745 | 1020 |
| learn | 2000 | 265 | 1735 | 1230 |
| js | 1000 | 0 | 1000 | 870 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：考虑sql.js是否使用。
  - raw的第1号事项：复习形神庄第四节
  - raw的第2号事项：复习形神庄第五节
  - raw的第3号事项：复习形神庄第六节

- 60分钟时间片：
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第2号事项：oData simple
  - js的第2号事项：引用github等特定版本js文件的html模版
  - ego的第3号事项：eventemitter sample

- 90分钟时间片：
  - ego的第1号事项：新版本任务、子任务的数据结构
  - learn的第1号事项：飞书 nodejs sdk
  - ego的第2号事项：启用新字段存放前置任务的output，自动汇编写入新的draft文件。
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.15.[新版本任务、子任务的数据结构]任务&body=日期: 2025.02.15.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250215.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250215160000"></a>
## 16:00 ~ 16:59
## ego: [新版本任务、子任务的数据结构]

- task拥有独立账簿，todoitem只用来绑定时间片和输入输出信息。
    - task都有同名会计科目。二级？
    - task是否是todoitem，是否可以绑定时间片和输入输出。
        - 时间是资产
        - 信息是资产
- task、todoitem之间的关系：
    - a为b的父task
    - a为b的容器
    - a为b提供元知识
    - a产生b
    - 关系可以扩展
- task
```yaml
id:
name:
relation:
    - id:
      relationtype:
balance：


```
- relation: 考虑用代码而不是yaml？
    - 自动汇总账簿。
```yaml
id:
name:
readme: 
func:
    js:
```

- todo item
```yaml
id:
name:
relation:
    - id:
      relationtype:
```

- 继续追加时间。