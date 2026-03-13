# 2026.03.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260313190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7200 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4365 |
| js | 1000 | 150 | 850 | 1290 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：学习优秀的petri网设计案例
  - learn的第11号事项：XACML（存量）
  - learn的第12号事项：SHACL（RDF/图谱场景）
  - js的第12号事项：duckdb

- 60分钟时间片：
  - js的第3号事项：learn factory, constructor, prototype
  - learn的第4号事项：Zapier
  - js的第4号事项：debug
  - learn的第5号事项：Polygon/Arbitrum

- 90分钟时间片：
  - learn的第1号事项：XSTATE https://xstate.js.org
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第24号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.13.[无名任务]任务&body=日期: 2026.03.13.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260313.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260313190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- node-awiki发布0.1.4.，仍然没有刷新JWT的能力。
- 使用opencode测试了openrouter的几个免费模型。bug不少，会在thinking阶段死循环。
	- 改进了ego的一些问题。
- 用qwencode批量修改营养成分表：把胆固醇从element转移到comment，不再纳入统计。
	- clear-element.js
- 用qwencode在MQTT对话示范上增加e2ee功能，基于ANP的e2ee子协议，扩展到did:key,did:ethr.
	- cli和html三种组合都可以收发。
	- 同一个topic下两人加密交流，第三人会报错。
	- 连接、初始化这些步骤还可以简化。
	- 输入对方did、公钥可以合并为一步，输入一个两字段的json。
	- 只做了did:key,还没有实现did:ethr.
	- qwen --resume 878be903-6bac-4408-bbc0-27fcbcf0cf45
- qwen做移植不行，开发自己的还不错。
