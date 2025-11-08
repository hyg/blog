# 2025.11.08.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:09	js: [copilot](#20251108140000)
- 14:10~14:59	learn: [CloudEvent（JSON 格式，spec 1.0+）](#20251108141000)
- 19:00~19:59	check: [零散笔记](#20251108190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2362 | 11168 | 9855 |
| PSMD | 4000 | 90 | 3910 | 1335 |
| ego | 2530 | 330 | 2200 | 1395 |
| infra | 2000 | 30 | 1970 | 450 |
| xuemen | 1000 | 195 | 805 | 540 |
| raw | 1000 | 90 | 910 | 150 |
| learn | 2000 | 1527 | 473 | 4455 |
| js | 1000 | 100 | 900 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第9号事项：Semantic Version + Content-Addressable Storage（如 OCI Artifacts 存 DMN/Regos）
  - learn的第10号事项：Ontology + SWRL（Semantic Web Rule Language）
  - js的第11号事项：passportjs
  - learn的第11号事项：Common Logic (ISO/IEC 24707)

- 60分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - learn的第1号事项：Chroma sample

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - ego的第2号事项：整理task及其相互关系
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.08.[copilot]任务&body=日期: 2025.11.08.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251108.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251108140000"></a>
## 14:00 ~ 14:09
## js: [copilot]

- https://github.com/features/copilot
- 还是cli agent更方便：claude code、codex、qwencode...
- 小问题更适合在网页版提问，不让agent接触本地文件，人工确定思路之后让网页ai生成prompt，再调用本地cli agent。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.08.[CloudEvent（JSON 格式，spec 1.0+）]任务&body=日期: 2025.11.08.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251108.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251108141000"></a>
## 14:10 ~ 14:59
## learn: [CloudEvent（JSON 格式，spec 1.0+）]

- 统一事件的数据结构。针对事件驱动架构（EDA），云原生应用。
- https://github.com/cloudevents/sdk-javascript
	- event收发接口很方便。
- D:\huangyg\git\sample\CloudEvent>pnpm i cloudevents express
```
D:\huangyg\git\sample\CloudEvent>node node1
服务器启动成功~
{"id":"533fc1fb-71fa-4807-bd27-876b9463a705","time":"2025-11-08T12:47:14.001Z","type":"com.PSMD.hox.callfor","source":"/PSMD/hox","specversion":"1.0","datacontenttype":"application/json; charset=utf-8"}
```
- 可以纳入infra设计方案。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.08.[无名任务]任务&body=日期: 2025.11.08.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251108.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251108190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- ANP开发讨论反水军、差评师的agent电商方案。
- cloudevent和事件驱动架构（EDA），纳入infra设计方案。
	- event先自己管理，因为吞吐量并不大，只是需要松耦合。
