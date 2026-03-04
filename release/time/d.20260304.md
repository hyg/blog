# 2026.03.04.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版2(2b)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260304190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7530 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 945 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4545 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：用js代码完成日小结后的git操作。
  - js的第9号事项：passportjs
  - ego的第10号事项：时间改为ISO8601格式
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - learn的第1号事项：Farcaster
  - js的第2号事项：TensorFlow.js
  - learn的第3号事项：XSTATE https://xstate.js.org/
  - learn的第4号事项：按petri网定义设计几个实例

- 90分钟时间片：
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - learn的第2号事项：HPKE（Hybrid Public Key Encryption，RFC 9180）
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第2号事项：会话skill套装设计
  - ego的第2号事项：新版ego, instance or model, any manifest
  - learn的第28号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.04.[无名任务]任务&body=日期: 2026.03.04.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260304.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260304190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 用opencode和trae开发https://github.com/AgentConnect/awiki-agent-id-skill 的nodejs版本，增加：
	- 扩展身份方法，增加did:key,did:ethr，以后还可以继续增加。
	- 扩展通信方法，增加MQTT、moltx.io站内信，以后还可以继续增加。
	- e2ee部分和awiki解耦，以上两类方法可以自由组合。
- D:\huangyg\git\sample\awiki>node src/cli.js create "mars22" --method wba --domain today.mars22.com/blog/release > mars22.did.json
- D:\huangyg\git\sample\awiki>node src/cli.js create "mars22" --method wba --domain hyg.codeberg.page/blog/release --credential mars22_codeberg
	- copy to d:\huangyg\git\blog\release\user\mars22\did.json
	- git commit & push
	- 各git repo的page需要重新规划。
- 估计大概5美元成本可以完成。继续观察ANP社区会不会摆脱对awiki.ai这类中心化设施的依赖，自主向agent的需求转化。
	- 仔细观察实控人的兴奋点漂移方向，评估最终边界轮廓，估算稳定版本剪裁成本。

- coding plan：
	- qwen: https://www.aliyun.com/benefit/scene/codingplan
		- 支持glm5，k2.5, m2.5...
		- 据说速度慢。
	- glm： https://bigmodel.cn/glm-coding
		- 性价比高。
- 普通需求使用免费的llm：分词，构造抽象语法树 -> 细分领域SOP -> SOP engine
	- https://docs.bigmodel.cn/cn/guide/models/free/glm-4.7-flash
	
