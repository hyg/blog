# 2026.06.25.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1f)。

<a id="index"></a>
- 17:26~18:25	check: [零散笔记](#20260625172600)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 0 |
| PSMD | 4000 | 0 | 4000 | 0 |
| ego | 2530 | 0 | 2530 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.06.25.[无名任务]任务&body=日期: 2026.06.25.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260625.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260625172600"></a>
## 17:26 ~ 18:25
## check: [零散笔记]

- 知乎API： https://developer.zhihu.com/
- ANP:
	- https://w3c-cg.github.io/ai-agent-protocol/protocol.html
	- https://github.com/w3c-cg/ai-agent-protocol
	- 这是近一年，一些和ANP有关的论文，有从性能、安全、框架设计等几个角度来对A2A、MCP、ANP等几种协议进行对比分析
		- https://arxiv.org/pdf/2606.19135v1
		- https://arxiv.org/pdf/2606.03163v3
		- https://arxiv.org/pdf/2602.11327v2
		- https://arxiv.org/pdf/2510.17149v3
		- https://arxiv.org/pdf/2508.10146
	- 似乎在改名为ai agent protocol，或者把部分功能转移到新协议名下。
	- anp社区和awiki社区、企业的关系还没有明朗，在犹豫和混乱中很有可能产生不必要的成本。
	- agent身份、描述、发现之间耦合仍然过紧，agent开发者需要额外投入精力去剥离。
	- agent描述部分开始脱离通信协议，向agent本身的功能发展。但是对智力活动的本质分析不够，仍然不能从“思考”这个根本特征去定义agent。
	- meta-protocol其实是主协议（由它引入其他子协议），目前仍然缺位。
