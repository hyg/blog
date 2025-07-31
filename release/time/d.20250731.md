# 2025.07.31.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:59	ego: [整理task及其相互关系](#20250731140000)
- 18:40~19:39	check: [零散笔记](#20250731184000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7000 | 6530 | 8790 |
| PSMD | 4000 | 1610 | 2390 | 1230 |
| ego | 2530 | 940 | 1590 | 1335 |
| infra | 2000 | 425 | 1575 | 405 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 3495 | -1495 | 3120 |
| js | 1000 | 370 | 630 | 1710 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：a2a-js
  - js的第2号事项：graphviz
  - js的第3号事项：nodejs中调用jar
  - learn的第3号事项：Agent Protocol https://agentprotocol.ai/

- 60分钟时间片：
  - PSMD的第1号事项：PSMD agent AI的内部角色和功能
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。

- 90分钟时间片：
  - ego的第1号事项：整理task及其相互关系
  - learn的第1号事项：业务规则引擎
  - PSMD的第2号事项：筹备会议 by role+prompt
  - ego的第3号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：machines model
  - infra的第4号事项：Rete/Phreak算法的自主实现
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.31.[整理task及其相互关系]任务&body=日期: 2025.07.31.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250731.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250731140000"></a>
## 14:00 ~ 15:59
## ego: [整理task及其相互关系]

- 整理各服务商的价格和余额。重新协调工具链和工作模式。

### LLM provider

- 阿里百炼平台（qwen、Moonshot-Kimi-K2-Instruct、deepseek，至2026-1-19）：
	- 免费额度余额：https://bailian.console.aliyun.com/?tab=model#/model-market
- 火山引擎（Doubao-Seed-1.6、Kimi-K2，豆包1.5系列）：
	- 免费推理额度余额：https://console.volcengine.com/ark/region:ark+cn-beijing/openManagement
- 硅基流动（赠14元，有少量免费模型，大部分收费）：
	- 余额和赠送余额：https://cloud.siliconflow.cn/me/expensebill
	- 用“免费”搜索：https://cloud.siliconflow.cn/me/models
- mistral（暂时还可以免费调用）：https://admin.mistral.ai/organization/billing
- kimi开放平台（赠15元）：https://platform.moonshot.cn/console/account
- Z智谱（新模型2025-08-31前五折）：https://bigmodel.cn/finance/overview

### claude code model

- siliconflow
- qwen：百炼平台各种qwen-coder-xxx
- GLM：Z智谱

- 开发调试期间，优先把百炼平台的免费额度用完，然后再用火山引擎的。
- 同时开发本地工具：借助免费的chat主页，完成task的层级整理。
- 下面时间：
	- 把js.sample/claudecode的client和processor功能按需求原意调整。
	- 升级ego（人工+AI）：
		- 人工编写需求文档、设计数据结构；
		- chat主页：检查需求文档和数据结构；
		- 百炼平台qwen-coder+claude code：协助完成代码。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.31.[无名任务]任务&body=日期: 2025.07.31.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250731.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250731184000"></a>
## 18:40 ~ 19:39
## check: [零散笔记]

- d:\huangyg\git\Home003_0520\
	- 新需求“用户注册、保存检索和邮件提醒。用户注册想替换成自己的， 包括google、facebook的帐号登录”
	- 用qwen、GLM、kimi+claude code分别分析代码并给出报告。
```
综合分析本项目的代码和文档，并根据新需求：“用户注册、保存检索和邮件提醒。用户注册想替换成自己的，包括google、facebook的帐号登录.”设计详细的修改方案。最后写一份markdown文件report.siliconflow.kimi.md保存在根目录下，详细写明每一处修改内容，需要详细给出每一处确切的新代码。报告最后写出自动完成全部修改的脚本代码。以上过程对report.siliconflow.kimi.md文件的创建和写入都不需要确认，其它任何文件都不要写。
```

- 试了下国家超算重心的api
	- d:\huangyg\git\js.sample\scnet\
	- 号称有100万token免费额度，但是第一次调用就反馈402余额不足。
	- 官网智能助手提供了一些虚假的方法，没有一种能查询余额的。

- 修改ego\src\day.js：早上创建check draft时也创建文件。