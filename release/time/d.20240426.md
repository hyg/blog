# 20240426

小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |  
| --- | --- | --- | --- |  
| 04:00~04:14 | 15 | 休整 |  |  
| 04:15~05:14 | 60 | 备餐、运动 |  |  
| 05:15~05:59 | 45 | 早餐 |  |  
| 06:00~06:44 | 45 | 会议、自习 |  |  
| 06:45~07:44 | 60 | 休整 |  |  
| 07:45~08:44 | 60 | 静默工作 | [新season metadata生成日计划](#20240426074500) |  
| 08:45~09:29 | 45 | 休整 |  |  
| 09:30~10:59 | 90 | 静默工作 | [knowledge新metadata输出view](#20240426093000) |  
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |  
| 14:00~14:29 | 30 | 静默工作 | [debug,yaml.dump后|符号编程>符号而且加了换行。](#20240426140000) |  
| 14:30~14:59 | 30 | 静默工作 | [整理各git托管商的page协议。](#20240426143000) |  
| 15:00~15:59 | 60 | 休整 |  |  
| 16:00~16:59 | 60 | 静默工作 | [新season metadata生成日小结](#20240426160000) |  
| 17:00~18:59 | 120 | 晚餐 |  |  
| 19:00~19:59 | 60 | 讨论、整理提交 |  |  

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。


---
<a id="index"></a>
- 07:45	[新season metadata生成日计划](#20240426074500)  
- 09:30	[knowledge新metadata输出view](#20240426093000)  
- 14:00	[debug,yaml.dump后|符号编程>符号而且加了换行。](#20240426140000)  
- 14:30	[整理各git托管商的page协议。](#20240426143000)  
- 16:00	[新season metadata生成日小结](#20240426160000)  

---


[top](#top) | [index](#index)
<a id="20240426074500"></a>
## 7:45~8:44
新season metadata生成日计划

- 主要解决模块化，学习使用module、require。
- 完成新版日计划：
```

D:\huangyg\git\ego\src>node ego time init 1
seasonpath:../data/season/2024S2.yaml
../../draft/2024/04/d.20240426.yaml
date: 20240426
plan: 1
time:
  - begin: '20240426074500'
    amount: 60
    type: work
    subject: tbd
    name: tbd
    output: draft/2024/04/20240426074500.md
  - begin: '20240426093000'
    amount: 90
    type: work
    subject: tbd
    name: tbd
    output: draft/2024/04/20240426093000.md
  - begin: '20240426140000'
    amount: 30
    type: work
    subject: tbd
    name: tbd
    output: draft/2024/04/20240426140000.md
  - begin: '20240426143000'
    amount: 30
    type: work
    subject: tbd
    name: tbd
    output: draft/2024/04/20240426143000.md
  - begin: '20240426160000'
    amount: 60
    type: work
    subject: tbd
    name: tbd
    output: draft/2024/04/20240426160000.md
```
```
D:\huangyg\git\ego\src>node ego time init
seasonpath:../data/season/2024S2.yaml
time slice draft file name:../../draft/2024/04/20240426074500.md
## 07:45 ~ 08:45

新season metadata生成日计划小结


time slice draft file name:../../draft/2024/04/20240426093000.md
## 09:30 ~ 11:00

knowledge新metadata输出view


time slice draft file name:../../draft/2024/04/20240426140000.md
## 14:00 ~ 14:30

debug,yaml.dump后|符号编程>符号而且加了换行。


time slice draft file name:../../draft/2024/04/20240426143000.md
## 14:30 ~ 15:00

整理各git托管商的page协议。


time slice draft file name:../../draft/2024/04/20240426160000.md
## 16:00 ~ 17:00

knowledge新metadata生成内容板块


dayplan file name:
time/d.20240426.md
content:
# 20240426

计划

根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | --- | --- |
| 04:00~04:14 | 15 | 休整 |  |
| 04:15~05:14 | 60 | 备餐、运动 |  |
| 05:15~05:59 | 45 | 早餐 |  |
| 06:00~06:44 | 45 | 会议、自习 |  |
| 06:45~07:44 | 60 | 休整 |  |
| 07:45~08:44 | 60 | 静默工作 | 新season metadata生成日计划小结  [在线同步](http://simp.ly/p/xtgD4F) [离线归档](../../draft/2024/04/20240426074500.md) |
| 08:45~09:29 | 45 | 休整 |  |
| 09:30~10:59 | 90 | 静默工作 | knowledge新metadata输出view  [在线同步](http://simp.ly/p/j1SspP) [离线归档](../../draft/2024/04/20240426093000.md) |

| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | debug,yaml.dump后|符号编程>符号而且加了换行。  [在线同步](http://simp.ly/p/8t3vlk) [离线归档](../../draft/2024/04/20240426140000.md) |
| 14:30~14:59 | 30 | 静默工作 | 整理各git托管商的page协议。  [在线同步](http://simp.ly/p/5k9gJy) [离线归档](../../draft/2024/04/20240426143000.md) |

| 15:00~15:59 | 60 | 休整 |  |
| 16:00~16:59 | 60 | 静默工作 | knowledge新metadata生成内容板块  [在线同步](http://simp.ly/p/4QDThK) [离线归档](../../draft/2024/04/20240426160000.md) |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

模版一采用静默工作方式。
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。


---
- task:ego  [新season metadata生成日计划小结](../../../draft/2024/04/20240426074500.md)
- task:PSMD  [knowledge新metadata输出view](../../../draft/2024/04/20240426093000.md)
- task:PSMD  [debug,yaml.dump后|符号编程>符号而且加了换行。](../../../draft/2024/04/20240426140000.md)
- task:learn  [整理各git托管商的page协议。](../../../draft/2024/04/20240426143000.md)
- task:PSMD  [knowledge新metadata生成内容板块](../../../draft/2024/04/20240426160000.md)
```

[top](#top) | [index](#index)
<a id="20240426093000"></a>
##  9:30~10:59
knowledge新metadata输出view

- 使用新的knowledge metadata，为error markdown增加内容。
- /PSMD/src/term.js  makeerrorview() makeerrornet()

```

D:\huangyg\git\PSMD\src>node term error 0ccddb29
0ccddb29>enter makeerrornet: 0ccddb29 已查找的knowledge:
{}

0ccddb29>search knowledge: 1
0ccddb29>search knowledge: 2
0ccddb29>search knowledge: 3b7582cd
0ccddb29>发现knowledge 3b7582cd :使用termset [056e71fb](../view/term.056e71fb.md)  可能解决 error 0ccddb29 预估有效的比例是 50%
0ccddb29>使用knowledge 3b7582cd 需要先解决error:
0ccddb29>[48291d8c](../view/error.48291d8c.md)
0ccddb29>48291d8c>enter makeerrornet: 48291d8c 已查找的knowledge:
3b7582cd: true

0ccddb29>48291d8c>search knowledge: 1
0ccddb29>48291d8c>search knowledge: 2
0ccddb29>48291d8c>search knowledge: 3b7582cd
0ccddb29>48291d8c>search knowledge: d8a0602f
0ccddb29>48291d8c>发现knowledge d8a0602f :使用term [5b4e0597](../view/term.5b4e0597.md) 可能解决 error 48291d8c 预估有效的比例是 60%
0ccddb29>48291d8c>使用knowledge d8a0602f 需要先解决error:
0ccddb29>48291d8c>[cde3c3e2](../view/error.cde3c3e2.md)
0ccddb29>48291d8c>cde3c3e2>enter makeerrornet: cde3c3e2 已查找的knowledge:
3b7582cd: true
d8a0602f: true

0ccddb29>48291d8c>cde3c3e2>search knowledge: 1
0ccddb29>48291d8c>cde3c3e2>search knowledge: 2
0ccddb29>48291d8c>cde3c3e2>search knowledge: 3b7582cd
0ccddb29>48291d8c>cde3c3e2>search knowledge: d8a0602f
0ccddb29>search knowledge: d8a0602f
../view/error.0ccddb29.md文件更新，内容如下:
问题 0ccddb29 正文:
出现以下情况之一：
- 决策部门未界定执行部门工作的合规性要求。
- 决策部门界定了执行部门工作的合规性要求。
  - 执行部门成员对指令不进行合规检查，即使不合规也执行。
  - 执行部门成员及下达指令者未按要求填写和提交表单，比如工单、日志。

---
问题 0ccddb29 readme:
- 下达指令者的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 共同体曾经对下达指令者违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
- 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在共同体设立阶段，就要确定是否符合<term.1>，如果符合应该在设立时解决。

---
解决建议:
0ccddb29>发现knowledge 3b7582cd :使用termset [056e71fb](../view/term.056e71fb.md)  可能解决 error 0ccddb29 预估有效的比例是 50%
0ccddb29>使用knowledge 3b7582cd 需要先解决error:
0ccddb29>[48291d8c](../view/error.48291d8c.md)

0ccddb29>48291d8c>发现knowledge d8a0602f :使用term [5b4e0597](../view/term.5b4e0597.md) 可能解决 error 48291d8c 预估有效的比例是 60%
0ccddb29>48291d8c>使用knowledge d8a0602f 需要先解决error:
0ccddb29>48291d8c>[cde3c3e2](../view/error.cde3c3e2.md)


---
```

[top](#top) | [index](#index)
<a id="20240426140000"></a>
## 14:00~14:29
debug,yaml.dump后|符号编程>符号而且加了换行。

error.0ccddb29的手稿内容
```
readme: |
  - <entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
  - <entity.1>曾经对<entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。
  - 把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<entity.1>设立阶段，就要确定是否符合<term.1>，如果符合应该在设立时解决。
```
被dump成正规内容
```
readme: >
  - <entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。

  - <entity.1>曾经对<entity.2>违约，以一定范围内的割据作为抵押物。这是历史上资源紧缺，无法兑现约定报酬的后遗症。

  -
  把一定范围内的割据作为违约抵押物的情况，解除割据应该同时处理历史欠账。在<entity.1>设立阶段，就要确定是否符合<term.1>，如果符合应该在设立时解决。
```

- yaml.load增加参数), { schema: yaml.FAILSAFE_SCHEMA }); 不变。
- 去掉每行开头前面”-“，不变。
- 只留一行。是好的，|还是|，末尾加了换行。
- 只留一行，|改成|-，变成直接定义的字符串；readme: <entity.2>的指令包括对更早指令的掩盖，通过互相包庇产生系统性的对抗。
- 多行，|改成|-。末尾加了回车，其它准确复刻。
- 每行开头增加”-“。末尾加了回车，其它准确复刻。
- 改回原始文件，问题重新。
- 原始文件第三行砍到80字符以内。末尾加了回车，其它准确复刻。
- yaml.dump增加参数,{'lineWidth  ': -1}));末尾加了回车，其它准确复刻。
- 全部yaml.dump()都增加了参数,{'lineWidth': -1}));


[top](#top) | [index](#index)
<a id="20240426143000"></a>
## 14:30~14:59
整理各git托管商的page协议。

### github

- https://docs.github.com/zh/pages/getting-started-with-github-pages
- 若要发布用户站点，必须创建名为 <username>.github.io 的个人帐户拥有的存储库。 若要发布组织站点，必须创建名为 <organization>.github.io 的组织帐户拥有的存储库。 除非使用的是自定义域，否则用户和组织站点在 http(s)://<username>.github.io 或 http(s)://<organization>.github.io 中可用。
- 项目站点的源文件与其项目存储在同一个仓库中。 除非使用的是自定义域，否则项目站点在 http(s)://<username>.github.io/<repository> 或 http(s)://<organization>.github.io/<repository> 中可用。
- 修改项目设置和DNS：https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain

### conberg

- https://codeberg.page/
- Create a public repository named pages to make the site available at the main subdomain. 
- Push your static content, HTML, style, fonts, images or anything else. 
- Access your new website using this link:
https://USERNAME.codeberg.page[/REPOSITORY][/@BRANCH]
- To use a custom domain, create a file .domains in your repository with the domain name you wish to use. Then, add a DNS record for that domain:
```
CNAME [[branch.]repo.]user.codeberg.page.
```
- Or for apex domains where CNAME doesn't work:
```
ALIAS codeberg.page.
TXT [[branch.]repo.]user.codeberg.page
```
- If ALIAS isn't supported, use A & AAAA instead:
```
A 217.197.91.145
AAAA 2001:67c:1401:20f0::1
+ TXT as above 
```

### gitee

- https://gitee.com/help/articles/4136
- 想以ipvb.gitee.io直接访问，那么他就可以创建一个名字为ipvb的仓库 https://gitee.com/ipvb/ipvb 部署完成后，就可以以 https://ipvb.gitee.io 进行访问了。
- 仓库必须有 index.html 才可以正常访问
- 你尚未通过实名认证，无法使用 Pages 服务，如需使用，请先进行实名认证。 
    - 手持证件照是手持身份证与本人面部的合照。

### coding

- https://cloud.tencent.com/developer/article/1906710
- 菜单已经变化，没有page服务入口。


综合看，还是先使用codeberg，其次是github。争取一个本地库push两个托管方。

[top](#top) | [index](#index)
<a id="20240426160000"></a>
## 16:00~16:59
新season metadata生成日小结

- 已完成，格式微调，明天可以试用。
- 浮动时间表的优先级往后方，先抓紧实现任务和时间之间的压力传递：
    - 对外承诺的任务，按期限向前排子任务。
    - 长期任务的子任务按优先级排序，自动填充进入时间表。 
    - 尽快让它们产生相互竞争，好设计资源调度的规则。
