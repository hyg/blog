# 2025.10.31.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:59	ego: [各层级各类资产的定价](#20251031140000)
- 16:15~16:59	learn: [Alloy](#20251031161500)
- 16:00~16:14	js: [ai-sdk + moonshot](#20251031160000)
- 19:00~19:59	check: [零散笔记](#20251031190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2182 | 11348 | 9855 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 330 | 2200 | 1425 |
| infra | 2000 | 30 | 1970 | 480 |
| xuemen | 1000 | 195 | 805 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1447 | 553 | 4395 |
| js | 1000 | 90 | 910 | 1500 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：VDM (Vienna Development Method)
  - js的第6号事项：copilot
  - js的第7号事项：node.js
  - js的第8号事项：passportjs

- 60分钟时间片：
  - js的第1号事项：Vector Database in nodejs
  - learn的第1号事项：XSTATE https://xstate.js.org/
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - learn的第2号事项：按petri网定义设计几个实例

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.31.[各层级各类资产的定价]任务&body=日期: 2025.10.31.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251031.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251031140000"></a>
## 14:00 ~ 14:59
## ego: [各层级各类资产的定价]

- 概念：
	- 定价，是指委托某entity完成某task的价目，也就是task输出资产的价格。不同entity完成相同task有不同价格。
	- 专户，是记录task持有的各类资产。

- 某entity已经承担过深层task，输出成果实际支撑浅层task：由深层task定价，并提供接口撮合浅层task之间的交易和合作。
- 某entity首次承担深层task：
	- 对entity外委托，由浅层task对深层task输出物定价，由受托方entity的ego决定是否承担。
	- 对entity内委托，由entity的ego定价。
- 要求能在多重认知下可以合作、交易。
	- 深层意识，或实际上替代深层意识的理性entity（包括内部外部），承托浅层task的定价和交易。
	- 实际上，是以人机结合的理性entity逐渐替代深层意识，并且完成破缸、汇通多重认知并形成统一市场。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.31.[Alloy]任务&body=日期: 2025.10.31.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251031.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251031161500"></a>
## 16:15 ~ 16:59
## learn: [Alloy]

- 介绍一下 Alloy https://grafana.com/docs/alloy/latest/ ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点、nodejs+windows技术栈的相关工具集。分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- Grafana 生态的统一代理。

| 特性/平台 | Grafana 全家桶 | Datadog | Elastic Stack (ELK) | New Relic |
| :--- | :--- | :--- | :--- | :--- |
| **核心哲学** | **开源、模块化、可组合** | **商业、一体化、SaaS** | **开源、以日志为中心** | **商业、APM 为核心** |
| **优点** | ✅ **完全开源**，成本可控<br>✅ **高度灵活**，可按需组合<br>✅ **社区庞大**，生态活跃<br>✅ **无厂商锁定** | ✅ **开箱即用**，上手极快<br>✅ **功能强大且集成度高**<br>✅ **优秀的 UI/UX**<br>✅ **全托管服务**，免运维 | ✅ **日志处理能力极强**<br>✅ **全文搜索和聚合分析**<br>✅ **生态成熟**，插件丰富 | ✅ **APM 能力顶级**<br>✅ **强大的端到端可视化**<br>✅ **智能告警和异常检测** |
| **缺点** | ❌ **需要自行部署和维护**<br>❌ **组件多，学习曲线较陡**<br>❌ **一体化体验不如商业产品** | ❌ **非常昂贵**<br>❌ **厂商锁定**<br>❌ 灵活性相对较低 | ❌ **资源消耗大**（尤其是 Elasticsearch）<br>❌ **配置复杂**<br>❓ 指标和追踪非原生强项 | ❌ **价格昂贵**<br>❌ **厂商锁定**<br>❓ 定制化能力有限 |
| **成本** | 低（自运维） / 中（Grafana Cloud） | 高 | 中（自运维） / 高（Elastic Cloud） | 高 |
| **适用场景** | 追求成本控制、技术自主、有运维能力的团队，尤其是混合云和多云环境 | 预算充足、希望快速获得完整可观测性能力、不想投入运维精力的企业 | 对日志分析有极高要求、需要复杂全文搜索和数据处理能力的场景 | 对应用性能监控（APM）有重度需求、希望快速定位代码级性能问题的企业 |

- 暂时用不上，浅浅了解就行。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.31.[ai-sdk + moonshot]任务&body=日期: 2025.10.31.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20251031.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251031160000"></a>
## 16:00 ~ 16:14
## js: [ai-sdk + moonshot]

### https://ai-sdk.dev/docs/foundations/providers-and-models
### https://platform.moonshot.cn/docs/introduction
### toolcalls, json mode,MCP(model context protocol),agentic

- moonshot免费额度已经用完，tool、MCP这些接口已经在其他任务熟悉果。不再投入时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.31.[无名任务]任务&body=日期: 2025.10.31.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251031.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251031190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 《受益所有人信息管理办法》要求，2024年11月1日前已设立的公司、合伙企业，应当在2025年11月1日前备案受益所有人信息。
- docmd.mgks.dev
