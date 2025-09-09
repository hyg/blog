# 2025.09.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版1(1f)。

<a id="index"></a>
- 16:23~17:22	check: [零散笔记](#20250909162300)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9496 | 4034 | 9675 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 195 |
| xuemen | 1000 | 150 | 850 | 570 |
| raw | 1000 | 250 | 750 | 210 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 796 | 204 | 1800 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理simplenote文件，准备转移到webDAV.
  - xuemen的第1号事项：月度事务
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control

- 60分钟时间片：
  - raw的第1号事项：新版本food预算决算
  - js的第1号事项：nextcloud
  - learn的第1号事项：CometAPI
  - js的第2号事项：IM bot

- 90分钟时间片：
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第2号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.09.[无名任务]任务&body=日期: 2025.09.09.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250909.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250909162300"></a>
## 16:23 ~ 17:22
## check: [零散笔记]

- https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/
	- https://mp.weixin.qq.com/s/01taY3YM4vnw6GefgAstUg
- 有一部分mcp是依附于agent的，不怎么依赖公共注册。
- 以应用场景来举例：
	1. 一个医生的数字伴生agent，帮助处理简单的问询和复诊。这个agent需要调用患者本地数据时，会推荐一个数据脱敏的MCP server。
    2. 这个数据脱敏MCP的某个工作步骤，对数据取哈希值。首先用prompt让模型取哈希，如果有幻觉就搜索取哈希的tool，MCP。
- 上面例子的第1个MCP其实是医生agent绑定的，患者首先选医生，医生推荐哪个就用哪个。第2个MCP才会去注册服务器搜索。
