# 2026.03.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	js: [learn factory, constructor, prototype](#20260317160000)
- 19:00~19:59	check: [零散笔记](#20260317190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1725 | 11805 | 7140 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4365 |
| js | 1000 | 210 | 790 | 1230 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：学习优秀的petri网设计案例
  - js的第1号事项：新版raw.js的子命令-营养成分详情
  - js的第4号事项：新版raw.js的子命令-营养成分排序
  - learn的第11号事项：XACML（存量）

- 60分钟时间片：
  - learn的第4号事项：Zapier
  - learn的第5号事项：Polygon/Arbitrum
  - js的第5号事项：debug
  - ego的第6号事项：eventemitter sample

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - learn的第2号事项：XSTATE https://xstate.js.org
  - js的第2号事项：openpgp v6.1.1.

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第24号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.17.[learn factory, constructor, prototype]任务&body=日期: 2026.03.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260317.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260317160000"></a>
## 16:00 ~ 16:59
## js: [learn factory, constructor, prototype]

### https://juejin.cn/post/6844903653774458888

### https://segmentfault.com/a/1190000019054466

### https://www.javascripttutorial.net/javascript-factory-functions/

### https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes


---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.17.[无名任务]任务&body=日期: 2026.03.17.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260317.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260317190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- D:\huangyg\git\sample\awiki
	- 只测试了一两个模块，就把额度用完了。
	- qwen --resume c3f7a14c-2cb3-4664-96e5-642c86889f65
- D:\huangyg\git\sample\MQTT
	- 自动忽视同房间内的加密通信，而不是报错。
	- 实现完整的HPKE-RFC9180协议。
	- 扩展DID身份认证，支持跨DID种类通信。
	- qwen --resume 878be903-6bac-4408-bbc0-27fcbcf0cf45
	- 用opencode分析确认，测试。网页版的bug还没有修完。
	- opencode -s ses_304dca5b3ffeClu9us2WRBCk01
