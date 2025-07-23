# 2025.07.23.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 10:30~16:39	learn: [qwen code](#20250723103000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 3741 | 9789 | 7725 |
| PSMD | 4000 | 450 | 3550 | 1140 |
| ego | 2530 | 290 | 2240 | 1335 |
| infra | 2000 | 335 | 1665 | 210 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 2236 | -236 | 2400 |
| js | 1000 | 340 | 660 | 1650 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：a2a-js
  - learn的第1号事项：react ink
  - js的第9号事项：copilot
  - js的第10号事项：node.js

- 60分钟时间片：
  - PSMD的第1号事项：筹备会议 by claude.md
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表

- 90分钟时间片：
  - xuemen的第1号事项：mail server
  - ego的第2号事项：整理js对象检索的代码
  - PSMD的第3号事项：子1609:基于公司、合同
  - ego的第3号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - learn的第2号事项：MCP in nodejs
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.23.[qwen code]任务&body=日期: 2025.07.23.%0D%0A序号: 3%0D%0A手稿:../../draft/2025/20250723.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250723103000"></a>
## 10:30 ~ 16:39
## learn: [qwen code]

- npm install -g @qwen-code/qwen-code
```
file:///C:/Users/hyg/AppData/Roaming/nvm/v22.10.0/node_modules/@qwen-code/qwen-code/bundle/gemini.js:261626
        onSelect(items[activeIndex].value);
```
- 把qwen-coder对接到claude code使用
	- C:\Users\hyg\.claude\settings.json
```
  "env": {
  	    "ANTHROPIC_BASE_URL": "https://dashscope-intl.aliyuncs.com/api/v2/apps/claude-code-proxy",
  	    "ANTHROPIC_AUTH_TOKEN": "sk-xxx"
  	     },
  }
  ```
- 会自动把key改为sk-ant-xxx，提示： API Error (401 Invalid API-key provided.) · Retrying in 35 seconds…
- 在官网体验页试用qwen3-coder-plus，它对需求的理解不如kimi k2,deepseek。甚至腾讯的codebuddy助手配合vscodium使用，体验都比它好。等过段时间成熟点再看。
- 用claude code + kimi K2和codium + codebuddy + deepseek，开发dht节点都能完成代码，但是在内网环境都不能自动发现其它节点。
	- 其中一个节点在公网运行，它可以找到peer。
	- 内网不可以。
- https://www.163.com/dy/article/K55GTPED055659FP.html
	- export ANTHROPIC_BASE_URL=https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy
	- 这个base-url可以了。
- https://help.aliyun.com/zh/model-studio/claude-code
	- 会从阿里云账号扣款，qwen3-coder-plus没有给免费额度。代码质量并不高。
