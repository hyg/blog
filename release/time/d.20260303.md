# 2026.03.03.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1b)。

<a id="index"></a>
- 14:30~14:59	xuemen: [月初事务](#20260303143000)
- 19:00~19:59	check: [零散笔记](#20260303190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7530 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 945 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4545 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：用js代码完成日小结后的git操作。
  - js的第9号事项：passportjs
  - ego的第10号事项：时间改为ISO8601格式
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - learn的第1号事项：Farcaster
  - js的第2号事项：TensorFlow.js
  - learn的第3号事项：XSTATE https://xstate.js.org/
  - learn的第4号事项：按petri网定义设计几个实例

- 90分钟时间片：
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - learn的第2号事项：HPKE（Hybrid Public Key Encryption，RFC 9180）
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第2号事项：会话skill套装设计
  - ego的第2号事项：新版ego, instance or model, any manifest
  - learn的第28号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.03.[月初事务]任务&body=日期: 2026.03.03.%0D%0A序号: 8%0D%0A手稿:../../draft/2026/20260303.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260303143000"></a>
## 14:30 ~ 14:59
## xuemen: [月初事务]

- 已完成。

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.03.[无名任务]任务&body=日期: 2026.03.03.%0D%0A序号: 12%0D%0A手稿:../../draft/2026/20260303.05.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260303190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- openclaw多agent互聊：共享文件、UDP多播、原生tool sessions_send
```
我打算在局域网一个openclaw部署创建多个subagent，各自作为不同人类用户的AI助理。
这些AI助理互相之间使用openclaw的原生tool "sessions_send"(https://docs.openclaw.ai/concepts/session-tool#sessions_send ) 代表用户进行实时交流。

比如：我的Agent是个写程序的宅男，我媳妇儿的Agent是一个做国际传媒的女编导，然后女编导要去收集各种外媒资料，或者做一些啥工作需要开发个小程序，就去找宅男Agent帮忙……
比如：两个程序猿的AI助理讨论代码实现，或者一个说方案，另一个review......
这几个应用场景只是帮助理解，下面设计方案时只关注通用的通信机制，不需要考虑用户职业，AI助理的交流内容由用户通过IM下达，不需要体现在方案中。

人类用户使用某种IM工具（飞书、QQ、钉钉....）在外网下达指令、围观AI助理之间交流。AI助理之间的每一句对话，都加上适当前缀、实时在IM工具发给人类用户。
请设计方案，编写其中用到的设置指令、提示词、技能描述文件...从刚安装的openclaw开始，给出一步步的详细讲解。
```
