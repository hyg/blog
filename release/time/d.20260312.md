# 2026.03.12.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260312190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7320 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4485 |
| js | 1000 | 150 | 850 | 1290 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：OpenFGA/SpiceDB(Zanzibar模型)
  - learn的第3号事项：Flink Complex Event Processing，直接运行 DMN 4Flink 或 Rego-on-Flink 扩展。
  - learn的第6号事项：学习优秀的petri网设计案例
  - js的第12号事项：duckdb

- 60分钟时间片：
  - learn的第1号事项：按petri网定义设计几个实例
  - js的第3号事项：learn factory, constructor, prototype
  - js的第4号事项：debug
  - js的第5号事项：The Node.js best practices list (July 2024)

- 90分钟时间片：
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - js的第2号事项：query yaml file or js obj

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第27号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.12.[无名任务]任务&body=日期: 2026.03.12.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260312.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260312190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- D:\huangyg\git\sample\awiki\nodejs-client
	- 修复JWT过期 bug和编写agent.md，发布npm包。
	- opencode -s ses_3270ab658ffefVR9m10xUNjKKf
- d:\huangyg\git\node-awiki\skilltest>
	- 升级新版本的python，蒸馏步骤脚本有bug，调试中用完今天免费token（前面先完成了node-awiki 0.1.3.）
	- opencode -s ses_3216f2ecbffeJoA0ru4HlYbZv5
	- 让qwencode接着干：qwen --resume e95950be-ce87-408f-9a67-d6a45883f96a
		- 蒸馏完anp，其它依赖包还没有完成。

- 考虑把PSMD升级为PSMDD（Pivot System Modeling Deploy and Distill）
	- Distill是指从COD的行为蒸馏出COD。
