# 2026.03.22.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260322190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1725 | 11805 | 7110 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4335 |
| js | 1000 | 210 | 790 | 1230 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：新版raw.js的子命令-营养成分详情
  - learn的第3号事项：学习优秀的petri网设计案例
  - js的第4号事项：新版raw.js的子命令-营养成分排序
  - learn的第10号事项：XACML（存量）

- 60分钟时间片：
  - learn的第1号事项：OutSystems, Mendix,
  - js的第5号事项：debug
  - ego的第6号事项：eventemitter sample
  - js的第6号事项：The Node.js best practices list (July 2024)

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - learn的第2号事项：Polygon/Arbitrum
  - js的第2号事项：openpgp v6.1.1.

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第23号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.22.[无名任务]任务&body=日期: 2026.03.22.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260322.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260322190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- npx -y @tencent-weixin/openclaw-weixin-cli@latest install
	- 可能需要重新安装一次当前版本的微信。
	- 在飞书openclaw里安装了。明天继续试用。飞书文档、日历可以支撑更好的用户体验。
- 对比个区块链产品，适合的事;Solana	Rust, C, C++ (智能合约)	极低：通常低于$0.001	极高：理论峰值~65,000 TPS，实际~1,000-3,000 TPS	采用PoS共识与历史证明（PoH）机制，以高吞吐量和低延迟著称。
	- 但几乎所有链在国内都不好访问，长安链使用golang，是最后选择方案。
	- 产品上还是以MQTT等实时通信+静态web（自有、git、nextclound、飞书...）来实现团队协作。
