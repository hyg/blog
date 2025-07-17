# 2025.07.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:59	js: [LangChain.js](#20250717140000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250717160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1512 | 12018 | 7170 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 200 | 2330 | 1365 |
| infra | 2000 | 335 | 1665 | 150 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 587 | 1413 | 1905 |
| js | 1000 | 210 | 790 | 1710 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：演化计算（Evolutionary Computation）和大模型结合的研判
  - ego的第5号事项：entry的科目归并
  - js的第6号事项：learn brain.js
  - js的第8号事项：copilot

- 60分钟时间片：
  - raw的第1号事项：设计新的季度时间表
  - js的第1号事项：LangChain.js
  - infra的第2号事项：动态菜单设计。
  - learn的第2号事项：佯谬及二次革命

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：mail server

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - learn的第5号事项：量子物理的数学基础

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.17.[LangChain.js]任务&body=日期: 2025.07.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250717.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250717140000"></a>
## 14:00 ~ 14:59
## js: [LangChain.js]

- https://github.com/langchain-ai/langchainjs
- https://js.langchain.com
- d:\huangyg\git\js.sample\LangChain\
- npm i langchain @langchain/core
- https://js.langchain.com/docs/tutorials/llm_chain/
- https://smith.langchain.com/
	- login,setting,API Key
	- export LANGSMITH_TRACING="true"
	- export LANGSMITH_API_KEY="..."
- npm i @langchain/mistralai
- 基本问答：
```
D:\huangyg\git\js.sample\LangChain>node mistral
AIMessage {
  "content": "Hello in Chinese is \"你好\" (Nǐ hǎo). Here's the breakdown:\n\n- 你 (Nǐ) means \"you\"\n- 好 (Hǎo) means \"good\"\n\nSo, \"你好\" literally translates to \"you good,\" but it is used to say \"hi\" or \"hello\" in Chinese.\n\nHere are a few more ways to say hi in Chinese:\n\n- 哈喽 (Hā lóu) - Hello (used more casually)\n- 早上好 (Zǎo shang hǎo) - Good morning\n- 您好 (Nín hǎo) - Hello (polite/formal)",
  "additional_kwargs": {},
  "response_metadata": {
    "tokenUsage": {
      "completionTokens": 157,
      "promptTokens": 15,
      "totalTokens": 172
    },
    "finishReason": "stop"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "input_tokens": 15,
    "output_tokens": 157,
    "total_tokens": 172
  }
}
```
- 结构性问答很适合整理营养成分表：
```
D:\huangyg\git\js.sample\LangChain>node mistral
{
  name: '八月红',
  solid: 15,
  sugarrate: '甜',
  period: '8月中旬',
  place: '山东烟台',
  rating: 8
}
```
- https://js.langchain.com/docs/how_to/tool_calling/
	- tool call可以把自然语言转化为结构化的调用参数。
	- 适合PSMD的bot类应用。
- 封装比较周到，调试跟踪功能齐全（可能危及信息安全），可以安排时间做一下bot、agent的范例。
	- https://docs.langchain.com.cn/

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.17.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.07.17.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250717.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250717160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- 动态import并改变页面
- D:\huangyg\git\js.sample\jsterms\main.m.html
- 需要一次性import所有fsm，使用不同变量，使用中可以赋值到相同的变量中使用。
```
enter e0 term1.mjs:19:11
enter e1 term1.mjs:23:11
Object { e0: e0(), e1: e1(), e2: e2(), a3: a3(rule)
 }
 term1.mjs:25:11
 r0s1: action a1. term1.mjs:61:10
 r10s10: action a0. 2 term2.mjs:39:10
 r10s10: action a1. term2.mjs:42:10
 enter e0
```
- 可以清空就按钮，按照新fsm的event清单创建一批新按钮。并且按特定逻辑切换fsm。
```
enter e0 term1.mjs:19:11
enter turn: 
Object { a0: a0(rule), a1: a1(rule), a2: a2(rule)
, code: {…}, env: {…}, metadata: {…}, state: "s0", text: "term1 text", … }
main.m.html:38:21
add: e0 main.m.html:47:25
add: e1 main.m.html:47:25
add: e2 main.m.html:47:25
r0s1: action a0. term1.mjs:58:10
r1s1: action a2. term1.mjs:64:10
fsm: term1 main.m.html:56:29
enter turn: 
Object { a10: a10(rule), a11: a11(rule)
, code: {…}, env: {…}, metadata: {…}, state: "s10", text: "term2 text", … }
main.m.html:38:21
add: e10 main.m.html:47:25
add: e11 main.m.html:47:25
r10s10: action a0. term2.mjs:39:10
fsm: term2 main.m.html:56:29
enter turn: 
Object { a0: a0(rule), a1: a1(rule), a2: a2(rule)
, code: {…}, env: {…}, metadata: {…}, state: "s1", text: "term1 text", … }
main.m.html:38:21
add: e0 main.m.html:47:25
add: e1 main.m.html:47:25
add: e2
```
- 后面时间片试试用eval动态拼接字符串去import，从而实现真正的可重构权利分配。
