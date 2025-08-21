# 2025.08.21.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250821190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8956 | 4574 | 9945 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 660 |
| raw | 1000 | 70 | 930 | 330 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control

- 60分钟时间片：
  - raw的第1号事项：熟悉内脏之间的关系
  - xuemen的第1号事项：月度事务
  - learn的第1号事项：CometAPI
  - raw的第2号事项：新版营养成分详情，允许多种营养成分。

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第5号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.21.[无名任务]任务&body=日期: 2025.08.21.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250821.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250821190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

### 清理claude code的prompt

- 日志分析工具：https://yuyz0112.github.io/claude-code-reverse/visualize.html
- 沿用prompt名称。
- import {prompt} from "./prompts.js";

#### system workflow prompt

- l01()
    - getSystemWorkflowPrompt(): 主体部分
    - getCodeReferencesPrompt(): Code References部分

#### check-new-topic prompt

- E$B()
    - CheckNewTopicPrompt

#### system reminder start prompt

- lF1()
    - getSystemReminderStartPrompt()

#### system reminder end prompt

- OD8()
    - case "todo": getSystemReminderEndPrompt()

#### compact prompt

- uMB(A)
    - CompactPrompt1;
    - getCompactPrompt2(A);

#### Task Tool

- $hB()
    - getTaskToolPrompt()

### proxy观察

- C:\Users\hyg\.claude\settings.json
	- "ANTHROPIC_BASE_URL": "http://localhost:3000",
- claude code一个ping产生的数据已经极简。除了向"model":"claude-3-5-haiku-20241022"发了ping的数据包291字节，还向model":"qwen-coder-turbo-0919"发了一个39458字符的json数据，主要是各tool的介绍（不在cli.js中）。

### 对比

- 任务：
	- 进入XMTP客户端项目
	- npm run cc
		- ping
		- “分析本项目的文档和代码，给出潜在改进点，写一份简单的报告（不含源代码）。”
		- /compact
	- ctrl-C ctrl-C
- 原版prompt
```
Total cost:            $1.49 (costs may be inaccurate due to usage of unknown models)
Total duration (API):  1m 36.1s
Total duration (wall): 3m 20.3s
Total code changes:    0 lines added, 0 lines removed
Usage by model:
    claude-3-5-haiku:  2.0k input, 48 output, 0 cache read, 0 cache write
qwen-coder-turbo-0919:  446.5k input, 2.9k output, 349.7k cache read, 0 cache write
```
- 最简prompt
```
Total cost:            $1.19 (costs may be inaccurate due to usage of unknown models)
Total duration (API):  1m 33.0s
Total duration (wall): 2m 10.9s
Total code changes:    0 lines added, 0 lines removed
Usage by model:
qwen-coder-turbo-0919:  352.5k input, 3.1k output, 279.6k cache read, 0 cache write
    claude-3-5-haiku:  38 input, 542 output, 0 cache read, 0 cache write
```

- 节省大约四分之一。不值得再投入时间。
	- 大量prompt不在cli.js，无法精简。
	- Response API推出后，agent会大幅升级，prompt大部分都要重写。