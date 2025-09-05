# 2025.09.05.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版2(2c)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250905190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9436 | 4094 | 9705 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 195 |
| xuemen | 1000 | 150 | 850 | 540 |
| raw | 1000 | 190 | 810 | 270 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 796 | 204 | 1800 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第4号事项：LegalRuleML（Legal Rule Markup Language）

- 60分钟时间片：
  - raw的第1号事项：新版营养成分详情，允许多种营养成分。
  - js的第1号事项：nextcloud
  - learn的第1号事项：CometAPI
  - js的第2号事项：IM bot

- 90分钟时间片：
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。
  - xuemen的第2号事项：mail server
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.05.[无名任务]任务&body=日期: 2025.09.05.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250905.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250905190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- codex的配置文件~/.codex/config.toml中，备注都删掉，dev_key指向环境变量名，不能直接写key。
	- windows和debian下都正常运行。
	- 可以使用chat API，百炼平台的免费额度都可以用了。
- https://github.com/shareAI-lab/analysis_claude_code
- https://danielmiessler.com/blog/how-my-projects-fit-together
- Qwen大模型本地部署+微调法律大模型: https://www.douyin.com/video/7542703775929077031
	- 很罗嗦，需要用时找PyTorch文档和范例直接看就行。 

- 继续MCP项目：d:\huangyg\git\sample\MCP\PSMD\hyg\
	- inputSchema: { context: z.string() }
	- import nlp from 'wink-nlp-utils';
	- 运行正常：
```
╭───────────────────────────────────────╮
│  > 用PSMD对“流浪地球电影的设定是：    │
│    五百年加速、                       │
│    一千三百年滑行、                   │
│    七百年减速。                       │
│                                       │
│    按三体纪年，                       │
│    地球挨二向箔这边还在第一阶段。     │
│                                       │
│    如果后面故事都认真规划了，         │
│    只会拍得更痛快，                   │
│    不需要那么多铺垫了。 ​​​”进行NRE分析
╰───────────────────────────────────────╯

 ╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
 │ ✔ NRE (PSMD MCP Server) NRE (PSMD MCP Server)                                                                                             │
 │                                                                                                                                            │
 │    [{"value":"流浪地球电影的设定是：","tag":"unk"},{"value":"\n","tag":"tabCRLF"},{"value":"五百年加速、","tag":"unk"},{"value":"\n","tag  │
 │    ":"tabCRLF"},{"value":"一千三百年滑行、","tag":"unk"},{"value":"\n","tag":"tabCRLF"},{"value":"七百年减速。","tag":"unk"},{"value":"\n  │
 │    \n","tag":"tabCRLF"},{"value":"按三体纪年，","tag":"unk"},{"value":"\n","tag":"tabCRLF"},{"value":"地球挨二向箔这边还在第一阶段。","ta  │
 │    g":"unk"},{"value":"\n\n","tag":"tabCRLF"},{"value":"如果后面故事都认真规划了，","tag":"unk"},{"value":"\n","tag":"tabCRLF"},{"value":  │
 │    "只会拍得更痛快，","tag":"unk"},{"value":"\n","tag":"tabCRLF"},{"value":"不需要那么多铺垫了。","tag":"unk"}]                            │
 ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
✦ 根据对这段文字的NER分析，没有识别出特定的命名实体。所有内容都被标记为unk（未知），这意味着文本中的信息主要是描述性的，不包含明确的人名、地名、机构名
  或时间等标准命名实体。

  分析结果表明：

   1. 文本主要讨论的是《流浪地球》电影的情节设定。
   2. 提到了具体的时间段（五百年加速、一千三百年滑行、七百年减速）和与《三体》相关的情节（地球挨二向箔），但这些并未被识别为标准命名实体。
   3. 也没有识别出任何组织机构或特定人物名称。

  这可能是因为当前使用的NER模型没有针对影视作品或科幻小说中的特定术语进行训练，因此无法准确提取相关信息。
```
