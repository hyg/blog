# 2025.08.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250813190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8896 | 4634 | 9630 |
| PSMD | 4000 | 1760 | 2240 | 1170 |
| ego | 2530 | 1460 | 1070 | 1425 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 4475 | -2475 | 3990 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - learn的第1号事项：LegalRuleML（Legal Rule Markup Language）
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：Tauri + Rust

- 60分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - raw的第2号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - PSMD的第1号事项：筹备会议 by role+prompt
  - infra的第1号事项：schema立项。
  - PSMD的第3号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.13.[无名任务]任务&body=日期: 2025.08.13.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250813.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250813190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 纯html页面的去中心XMTP IM：官方没有UMD版本的。
	- qwen很快就死循环了。
	- GLM进到xmtp-js很深的子文件夹，改到最后也没有成功。每次的报错信息倒是都不一样。
- https://xmtp.chat/
	- bot-node-enhanced.js可以持续对话。
	- inboxid:a98a974c554006bf56cb8661922317b2a1bae7150be90c12586c9b42adc36045

- web3 storage 在用户端自动创建账号，获取API token
- qwen判断可以，实际上没有创建正好，而是用DID去直接upload。总在File对象的结构报错，最后也成功。
