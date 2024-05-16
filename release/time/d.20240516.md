# 2024.05.16.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[可交互的静态网页](#20240516074500)  
- 09:30	[起草标准模型2405](#20240516093000)  
- 14:00	[在draft+season+task metadata基础上设计总结功能](#20240516140000)  
- 14:30	[自动收发email。](#20240516143000)  
- 16:00	[github的actions,workflow,job脚本语法](#20240516160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 10652 | 2623 | 2490 |
| PSMD | 7000 | 5461 | 1539 | 435 |
| learn | 1000 | 532 | 468 | 690 |
| ego | 3000 | 2334 | 666 | 675 |
| js | 1375 | 795 | 580 | 390 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 364 | -64 | 90 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - learn的第1号事项：YARRRML
  - learn的第2号事项：docker
  - raw的第2号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - PSMD的第3号事项：PSMD委托合同的metadata

- 60分钟时间片：
  - ego的第1号事项：整理近期手稿
  - js的第1号事项：用imap和mailparse自动处理并回复email
  - raw的第1号事项：根据过去数据给出15天内的建议。
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。

- 90分钟时间片：
  - PSMD的第2号事项：term metadata生成按修订层级排版的COM metadata。
  - ego的第2号事项：代码实现，有互动的总结功能。
  - learn的第5号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第6号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.16.[可交互的静态网页]任务&body=日期: 20240516%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240516074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240516074500"></a>
## 7:45~8:44
可交互的静态网页

- 根据同域名的metadata进行提示、选择、接收补充信息并跳转页面
- 根据不同域名的js进行类似操作。
- 范例：
    - https://hyg.codeberg.page/blog/@master/release/term.html
    - http://today.mars22.com/blog/release/term.html
        - 不行，PSMD库在xuemen账号下，不在hyg，所以是跨域了。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.16.[起草标准模型2405]任务&body=日期: 20240516%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240516093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240516093000"></a>
##  9:30~10:59
起草标准模型2405

- 重点是权利分配跟随无意识行为和有意识行为的边界变化。
- 同时不能成为实际控制人压制其他成员的工具。还需要推演清楚再一起动笔。

### 方案一

- 执行部门：基本管理制度以外直接指挥或普通规章
- 一级决策部门：人工制定基本管理制度
- 二级决策部门：编写源代码完成一级决策部门的工作 -- 制定基本管理制度
- 三级决策部门：编写源代码生成二级决策部门的工作 -- 编写源代码完成一级决策部门的工作
- 如此递归。源代码包括元数据、以及必须的基础概念、定义、假设等。

### 方案二

- 任何职务行为都要提供依据。
- 层级n：为层级n-1的行为提供默认依据。
    - 当层级n-1的行为无法提供依据时使用；
    - 通常解释为目标偏差，因为个人领域缺陷无法履行承诺；
    - 默认依据会触发处罚条款。
- 升级到层级n的程序，遵循“以行为代替语言”的原则。自愿公示个人领域中针对某无意识行为的解释和处罚，经过实践验证后，转化为共同体的默认依据，从而实现层级n人员的任免。

- 还需要再斟酌，关键环节敲定后再统一动笔。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.16.[在draft+season+task metadata基础上设计总结功能]任务&body=日期: 20240516%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240516140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240516140000"></a>
## 14:00~14:29
在draft+season+task metadata基础上设计总结功能

- draft metadata：增加log、comment字段。
- season metadata：增加comment字段。
- task metadata：暂时不动，在season+draft的comment字段下增加task属性。
    - 由代码提取，写到task metadata中。（or alltask？）
    - 在生成task view时一起带上就行。
- 总结不纳入日小结，另外生成月、季度的小结和计划，在做计划时汇总显示小结。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.16.[自动收发email。]任务&body=日期: 20240516%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240516143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240516143000"></a>
## 14:30~14:59
自动收发email。

- https://github.com/nodemailer/nodemailer
- https://nodemailer.com/
- https://emailengine.app
- https://www.jianshu.com/p/6163113fae4f
- https://developer.aliyun.com/article/927081
- 在js.sample/IM 文件夹下添加测试文件 imap.js  可以读取阿里企业邮箱的内容。
- 追加todo项
    - '60': 用imap和mailparse自动处理并回复email
      readme: |
        - 在js.sample/IM/imap.js基础上继续增加功能。
        - https://www.jianshu.com/p/6163113fae4f
        - https://developer.aliyun.com/article/927081
    - '60': 用EmailEngine搭建邮件服务器
      readme: |
        - https://emailengine.app
    - '30': 用Nodemailer 自动处理并恢复email
      readme: |
        - https://nodemailer.com/
        - https://github.com/nodemailer/nodemailer

顺便修改ego/src/start.js,解决连续删除todo项时，按照老序号删错的问题。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.16.[github的actions,workflow,job脚本语法]任务&body=日期: 20240516%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240516160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240516160000"></a>
## 16:00~16:59
github的actions,workflow,job脚本语法

- https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions
- 语法可以参考，甚至移植。但github的语法依赖大量环境设定，这部分很难移植。
- PSMD的code部分，尽量使用js、REST方式定义，环境设定可以学习知识图谱之后定。
