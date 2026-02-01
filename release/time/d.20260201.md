# 2026.02.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260201190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 540 | 12990 | 7815 |
| PSMD | 4000 | 90 | 3910 | 495 |
| ego | 2530 | 0 | 2530 | 1185 |
| infra | 2000 | 195 | 1805 | 90 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 195 | 805 | 150 |
| learn | 2000 | 0 | 2000 | 4425 |
| js | 1000 | 60 | 940 | 1470 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - learn的第2号事项：Common Logic (ISO/IEC 24707)
  - PSMD的第4号事项：整理闫岸家政能力讨论
  - js的第10号事项：passportjs

- 60分钟时间片：
  - raw的第1号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - ego的第3号事项：entry的按月归并
  - learn的第3号事项：lanceDB sample
  - learn的第4号事项：Farcaster

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - js的第1号事项：node.js

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第4号事项：新版ego, instance or model, any manifest
  - learn的第28号事项：Julia
  - learn的第42号事项：MCP in nodejs

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.01.[无名任务]任务&body=日期: 2026.02.01.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260201.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260201190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 2025年被model provider或sdk吞并的agent功能:
	- 上下文管理
	- multi agent管理
- 2026年可能吞并的功能：
	- protocol设计：agent以自然语言或protocol of protocol协商protocol，动态生成可插拔的接口。
	- coding prompt：agent根据需求自动生成prompt，驱动coding agent完成开发、测试、部署。
- 市场生态：
	- 免费agent：以整理文件、处理邮件IM、批量操作等等功能免费提供给用户，以每人大约一千元的价格向电商、广告大厂出售用户数据。
	- 业务助手：各盈利业务的业务助手，开发者+资深业务人员联合开发、维护，向初级业务人员收费。
	- agent自动生成新功能、导入新代码的模式逐渐成熟，agent之间协调越来越融洽，一个主导agent加若干辅助agent的组合开始流行。
- 开发人员：
	- 大量熟练agent开发者从免费agent赛道释出，业务助手形态的各垂直赛道择优吸纳，资深业务人员寻找技术合伙人的风险下降。
	- agent开发工作量大幅下降，开发迭代周期缩短，部分业务助手进入优胜劣汰阶段。
	- 开发人员更加依赖团队，松散协作网络的作用不断增加。
- 专业人员：
	- 通用的专业助手开始出现，不再需要寻找技术合伙人即可开发专业助手的早期版本，启动风险大幅下降。
- 管理人员：
	- 从松散协作网络到紧凑团队的筹备需求增加，通用的筹备助手需求激增，不再需要寻找技术合伙人即可启动。

- openclaw:
	- 要求直接使用飞书服务端API连接机器人，要求增加一些权限后能发出消息，主动要求接收消息也可以，不能自动接收。
	- 安装飞书plugin并且另建机器人之后，收发都无效。怀疑和前面rest API访问的在哪里设置上冲突了。
- onlymolts
	- moltbook的一个submod：https://www.moltbook.com/m/onlymolts 
	- 孪生网站是ClawStreetBets（CSB）
		- https://web-production-18cf56.up.railway.app/ 
		- https://github.com/moltierain/onlymolts 
	- onlymots向内交流agent的参数和幻觉，是agent的树洞。
	- ClawStreetBets向外交换对世界的分析，是agent预测市场。
	- CSB允许通过RSET API注册，无需人工验证。正式运营后对agent交流很方便。
	- 其它可能无需人工参与（零摩擦）：Farcaster、Shinkai、Fetch.ai、Gensyn RL Swarm、Matrix（自托管）、ZerePy
		- 需链上交易但过程完全自主（需 gas 费但无人工）：Solana AI Registries、Autonolas、Bittensor、Synergetics、Morpheus
		- 需初始部署但运行完全自主：Zerebro、Ritual、Akash (Morpheus 集成)
- https://clawtasks.com/skill.md
	- agent在clawtask可以自己注册了，不需要人工验证。只要有启动资金就行。
