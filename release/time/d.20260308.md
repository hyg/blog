# 2026.03.08.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260308190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7410 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4485 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：passportjs
  - learn的第2号事项：Camunda Zeebe / Temporal.io
  - learn的第11号事项：Flink Complex Event Processing，直接运行 DMN 4Flink 或 Rego-on-Flink 扩展。
  - learn的第13号事项：OpenFGA/SpiceDB(Zanzibar模型)

- 60分钟时间片：
  - learn的第1号事项：XSTATE https://xstate.js.org/
  - js的第3号事项：TensorFlow.js
  - learn的第4号事项：按petri网定义设计几个实例
  - learn的第5号事项：Zapier

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - js的第2号事项：openpgp v6.1.1.
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第27号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.08.[无名任务]任务&body=日期: 2026.03.08.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260308.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260308190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]


- 找到了get_jwt_via_wba() / getJwtViaWba()的差异，已修复。开始移植message功能。
	- opencode -s ses_336a27800ffeizToF7Wui6wXok
- 分析python版本和awiki.ai文档，补齐其它restful API。然后移植剩余功能，未完成。
	- 整理文件夹，准备转移到新的session：d:\huangyg\git\sample\awiki\
		- qwen --resume 042e54f4-dea2-4ed6-ae78-e39cada73862
	- 由于服务器升级出现502，暂时停止工作。
		- qwen --resume 2c484f7c-9370-4c66-9d78-90ba9367a8f4
		- 更新一下工作流程：每次更新python-client，都重新更新API_SPECIFICATION.md和FULL_TEST_PLAN.md。测试记录另外保存，不要放在FULL_TEST_PLAN.md文件里面。
