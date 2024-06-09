# 2024.06.09.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45	[entity draft](#20240609074500)  
- 09:30	[ego draft](#20240609093000)  
- 14:00	[https://www.npmjs.com/package/commander](#20240609140000)  
- 14:30	[选择有价值的数据显示到entry页面](#20240609143000)  
- 16:00	[linkml, yaml-ld](#20240609160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 16043 | 432 | 2505 |
| PSMD | 7250 | 7186 | 64 | 405 |
| learn | 1250 | 1212 | 38 | 960 |
| ego | 4700 | 4544 | 156 | 585 |
| js | 1375 | 1248 | 127 | 300 |
| xuemen | 1300 | 1253 | 47 | 255 |
| raw | 600 | 570 | 30 | 0 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：学习AMD规范，如果适用就开发范例
  - learn的第3号事项：寻找可编程的,去中心化的信息发布方式
  - js的第4号事项：日期格式化
  - PSMD的第4号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。

- 60分钟时间片：
  - ego的第2号事项：基于commander升级参数
  - js的第2号事项：学习 nodejs test框架
  - xuemen的第2号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - learn的第2号事项：Decentralized Identifiers

- 90分钟时间片：
  - learn的第1号事项：linkml, yaml-ld
  - PSMD的第2号事项：以1406为例检查知识图谱和blawx的语法
  - ego的第3号事项：根据ego对外信息接口编写页面代码
  - ego的第4号事项：finish.devmaketomorowinfo(tomorrow);

- 195分钟时间片：
  - ego的第1号事项：entity,ego draft
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - learn的第11号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.09.[entity draft]任务&body=日期: 20240609%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240609074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240609074500"></a>
## 7:45~8:44
entity draft

- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.09.[ego draft]任务&body=日期: 20240609%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240609093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240609093000"></a>
##  09:30~10:59
ego draft

- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.09.[https://www.npmjs.com/package/commander]任务&body=日期: 20240609%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240609140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240609140000"></a>
## 14:00~14:29
https://www.npmjs.com/package/commander

- D:\huangyg\git\js.sample\commander
- npm install commander
```
D:\huangyg\git\js.sample\commander>node test.js -s . --fisrt as.dfg.hj
error: unknown option '--fisrt'
(Did you mean --first?)

D:\huangyg\git\js.sample\commander>node test.js -s . --first as.dfg.hj
[ 'as' ]
```
- https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
- const log = s => console.log(s);
- 可以在下一个项目正式使用。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.09.[选择有价值的数据显示到entry页面]任务&body=日期: 20240609%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240609143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240609143000"></a>
## 14:30~14:59
选择有价值的数据显示到entry页面

- 试一下读取season metadata中的todo时间。
- http://today.mars22.com/blog/release/entry.2day.html
- 实际使用120分钟。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.09.[linkml, yaml-ld]任务&body=日期: 20240609%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240609160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240609160000"></a>
## 16:00~16:59
linkml, yaml-ld

- 了解linkml.io首页图中的语法和工具：https://linkml.io/uploads/2021/03/30/screen-shot-2021-03-29-at-7-05-14-pm.png
- https://linkml.io/linkml/intro/tutorial07.html
- https://linkml.io/linkml/schemas/models.html
    - https://github.com/linkml/linkml/blob/main/examples/PersonSchema/personinfo.yaml
    - 这个案例是使用slot的。
    - 具体语法细节还需要继续学习。
- 登记15分钟，继续追加时间。
