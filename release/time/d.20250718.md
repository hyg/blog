# 2025.07.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 11:40~13:09	learn: [claude code + kimi K2](#20250718114000)
- 14:00~14:59	learn: [演化计算（Evolutionary Computation）和大模型结合的研判](#20250718140000)
- 15:00~16:29	ego: [entry的科目归并](#20250718150000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1752 | 11778 | 7290 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 290 | 2240 | 1335 |
| infra | 2000 | 335 | 1665 | 150 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 737 | 1263 | 2055 |
| js | 1000 | 210 | 790 | 1710 |

---
waiting list:


- 30分钟时间片：
  - js的第6号事项：learn brain.js
  - learn的第8号事项：playwright
  - js的第8号事项：copilot
  - js的第9号事项：node.js

- 60分钟时间片：
  - learn的第1号事项：佯谬及二次革命
  - raw的第1号事项：设计新的季度时间表
  - js的第1号事项：LangChain.js
  - infra的第2号事项：动态菜单设计。

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：mail server

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第5号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.18.[claude code + kimi K2]任务&body=日期: 2025.07.18.%0D%0A序号: 3%0D%0A手稿:../../draft/2025/20250718.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250718114000"></a>
## 11:40 ~ 13:09
## learn: [claude code + kimi K2]

- 点击链接查看和 Kimi 的对话 https://www.kimi.com/share/d1ssm7c268gjaa433id0
    - ANTHROPIC_API_KEY在旧版本是ANTHROPIC_AUTH_TOKEN，如果连接不上可以用旧名称试试。
    - 如果设置环境变量无效，就在C:\Users\hyg\.claude\settings.json增加:
```
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.moonshot.cn/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxx"
  },
```
- API Key: https://platform.moonshot.cn/console/account
- 在js.sample/query项目下，根据AER和acount数据结构，能正确生成科目余额、财报。
- 但是kimi在余额没有用完时，就频繁提示API Error 429。准备试试豆包和其它AI provider。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.18.[演化计算（Evolutionary Computation）和大模型结合的研判]任务&body=日期: 2025.07.18.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250718.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250718140000"></a>
## 14:00 ~ 14:59
## learn: [演化计算（Evolutionary Computation）和大模型结合的研判]

- https://www.wangxubin.site/Blogs/posts/ec-in-llm-era/
	- 从这里开始：https://www.wangxubin.site/Blogs/posts/ec-in-llm-era/#32-%E4%B8%BB%E8%A6%81%E6%BC%94%E5%8C%96%E7%AE%97%E6%B3%95
	- 很可能已经在大模型开发中使用了演化计算的思路。
- https://zhuanlan.zhihu.com/p/432162132
- https://blog.csdn.net/2401_84204413/article/details/145206561
- PSMD项目中，可以使用演化计算维护MCP，然后共LLM使用。
	- 结合RAG的knowledgebase，Collection等概念：https://www.wangxubin.site/Blogs/posts/knowledge-base-construction/

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.18.[entry的科目归并]任务&body=日期: 2025.07.18.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250718.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250718150000"></a>
## 15:00 ~ 16:29
## ego: [entry的科目归并]

- 用claude code + kimi K2生成了claudecode.js
- 在kimi聊天以问答方式生成了kimichat.js
- 科目合并ok。
- 按年度、月度整理各科目期初期末余额和财报时，最后一个月没有收支数据时，期末余额会错误地计算为零。正确应该是沿用期初余额。
	- kimi罢工（error 429、400），手工修改displaySubjectBalances()之后ok。
```
                //const closingBalance = period.closing[key] ? period.closing[key].balance.rmb : 0;
                //const change = closingBalance - openingBalance;
                const change = period.closing[key] ? period.closing[key].balance.rmb : 0;
                const closingBalance = openingBalance + change;
```
