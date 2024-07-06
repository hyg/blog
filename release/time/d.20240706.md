# 2024.07.06.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[data -> schema 迭代范例](#20240706074500)  
- 14:00	[相关代码整理到day.js, season.js, waitinglist.js](#20240706140000)  
- 16:00	[月度季度报告的报表统一到新格式](#20240706160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 1078 | 16622 | 3555 |
| PSMD | 7000 | 182 | 6818 | 660 |
| ego | 4000 | 307 | 3693 | 630 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 345 |
| raw | 500 | 60 | 440 | 60 |
| learn | 1500 | 359 | 1141 | 1080 |
| js | 1200 | 50 | 1150 | 780 |

---

waiting list:


- 30分钟时间片：
  - ego的第3号事项：相关代码整理到waitinglist.js
  - js的第5号事项：js minify tools
  - learn的第5号事项：trello api
  - PSMD的第6号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。

- 60分钟时间片：
  - raw的第1号事项：月度季度报告的报表统一到新格式
  - PSMD的第2号事项：用linkml编写一套标准模型
  - ego的第2号事项：相关代码整理到season.js
  - js的第2号事项：dat sample for root metadata

- 90分钟时间片：
  - ego的第1号事项：相关代码整理到day.js
  - xuemen的第1号事项：kernel模型升级
  - js的第1号事项：peerjs sample
  - learn的第1号事项：pear sample

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第12号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.06.[data -> schema 迭代范例]任务&body=日期: 20240706%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240706074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240706074500"></a>
## 7:45~10:59
PSMD: [data -> schema 迭代范例]

- 增加简化log()
```
function log(s) {
    console.log(log.caller.name + ">", s);
}
```
- 执行效果：
```
> { plan: true }
testdayplan> test
```
- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.06.[相关代码整理到day.js, season.js, waitinglist.js]任务&body=日期: 20240706%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240706140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240706140000"></a>
## 14:00~15:29
ego: [相关代码整理到day.js, season.js, waitinglist.js]

### day
- 完成makedayobj的一部分。
```
D:\huangyg\git\ego\src>node util.test
✔ make meta file id (1.5835ms)
✔ get today str (0.6777ms)
✔ get day metadata file name (0.1434ms)
✔ get season metadata file name (0.1197ms)
✔ get wake time (2.9988ms)
ℹ tests 5
ℹ suites 0
ℹ pass 5
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 12.6317
```
- 继续追加时间。
---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.06.[月度季度报告的报表统一到新格式]任务&body=日期: 20240706%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240706160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240706160000"></a>
## 16:00 ~ 16:59
raw: [月度季度报告的报表统一到新格式]

- 没有开始，回到waitinglist。
