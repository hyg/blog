# 2026.11.22.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 16:01~17:00	check: [零散笔记](#20261122160100)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 540 | 12990 | 0 |
| PSMD | 4000 | 150 | 3850 | 0 |
| ego | 2530 | 60 | 2470 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 330 | 670 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.11.22.[无名任务]任务&body=日期: 2026.11.22.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20261122.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261122160100"></a>
## 16:01 ~ 17:00
## check: [零散笔记]

- https://weibo.com/ttarticle/p/show?id=2309404964840639955393

- opencode -s ses_e17ebd4ceffetQkWtghsHK0cKH
	- financing-w0javs9s-wji64871.edgeone.cool
```
+ Thought: 24.0s
Objective
- 在 EdgeOne Makers 融资材料工作台默认使用 EdgeOne AI 免费额度（无需 Key）；额度耗尽时强制配置自己的 provider/API Key 后才能继续。
- 当前方案：文档生成改用服务端 Makers Models（绕过 Edge Functions ~100s 限制），聊天默认 Edge AI，并在 Edge AI 上游非额度错误时回退 Makers Models。
Important Details
- 工作目录：D:\huangyg\git\sample\financing；Windows PowerShell 使用 npm.cmd，Node v24.22.1。
- 用户明确要求：长时间等待的测试/部署必须有显著提示并设置硬超时。
- PowerShell here-string 管道到 node - 会把中文变成 ?；测试脚本必须用 Write 工具写 UTF-8 临时文件（C:\Users\hyg\AppData\Local\Temp\opencode\*.mjs）再执行。
- Edge AI API：Pages Functions 全局 AI.chatCompletions({ model, messages, stream })，无需 API Key；文档 https://pages.edgeone.ai/zh/document/edge-ai。
- Edge AI 模型顺序：@tx/deepseek-ai/deepseek-v4（默认 chat）、deepseek-v32、deepseek-v3-0324、deepseek-r1-0528、deepseek-r1-distill-qwen-32b。
- 生成专用模型：EDGE_AI_GENERATION_MODEL = "@tx/deepseek-ai/deepseek-r1-distill-qwen-32b"，通过 callProvider({ model }) 优先尝试。
- 已修改 callEdgeOneAi：chat 无显式 preferredModel 时跳过 EDGE_AI_GENERATION_MODEL（r1-distill 只输出 reasoning，chat 解析失败）；生成因显式传 r1-distill 仍保留。
- Edge AI 返回中 reasoning_content 可能是正文，也可能是纯思考；edgeAiResponseText 候选顺序为 content、reasoning_content、choice.text。
- Edge Functions 实际请求上限约 100s；完整 3 组 Edge AI 生成曾 100.17s 返回 545 "Error return from script"。
- Makers Models 网关：https://ai-gateway.edgeone.link/v1（OpenAI 兼容），模型 @makers/deepseek-v4-flash，免费 500k tokens/月、单请求 300s。
- Makers Models 环境变量：AI_GATEWAY_API_KEY、AI_GATEWAY_BASE_URL，已写入生产环境；Edge Function 通过 context.env 读取，health 已验证 makersModels:true。
- 安全事件：AI_GATEWAY_API_KEY 曾在 CLI/env 输出中泄露，必须到控制台轮换或删除；CLI 无删除命令。不要在日志/总结中再次打印该 Key。
- 项目：financing-w0javs9s / makers-sluentnjyivh；workspace makers-workspace / zone-3xlrpjhm9ht8。
- 部署命令：npx.cmd edgeone makers deploy ./dist --json；访问 API 需先访问带 eo_token/eo_time 的入口设置 Cookie。
- 最新已部署版本：dpajub2o06w1，入口 token 37fed9a502e6e467548f694d4078fef4&eo_time=1795240388；最新 chat 回退改动尚未构建/部署。
- Provider 安全约束：Key 只存当前标签页内存；不写日志/Cookie/服务器存储；错误 redact key；响应 cache-control: no-store；CSP script-src 'self'。
- Provider catalog 仍为 12 个，Edge AI 与 Makers Models 不进入用户下拉。
- 9 份材料 ID：overview, summary, business-plan, pitch-deck, financials, market, technical, risk, data-room；AI 只生成除 overview 外的 8 份。
- demo 模式仅支持中文/英文；其他语言需真实 provider；Edge AI 允许 other 语言。
- readProviderError 将 HTTP 429 映射为 rate_limit；handleGenerate 对 provider.config.id === "makers-models" 的 rate_limit 再映射为 edge_ai_quota_exhausted / 429，触发前端额度 modal。
- 生成响应语义：provider 显示 makers-models，edgeAi:true、mode:"ai"；chat 回退 Makers 时 edgeAi:false。
- src/index.js 曾被 edit 工具异常截断为 0 字节；已从 bundle 恢复为 var/1e6 风格，编辑需检查文件大小并 node --check。
- 临时测试脚本：C:\Users\hyg\AppData\Local\Temp\opencode\full-gen.mjs、chat-check.mjs、single-doc.mjs、group-gen.mjs、parallel-docs.mjs、gateway-test.mjs，不在仓库内。
Work State
Completed
- src/providers.js 新增 MAKERS_MODELS_MODEL = "@makers/deepseek-v4-flash"、makersModelsAvailable(env)、makersModelsConfig(env)（id:"makers-models"、api:"openai"、默认 baseUrl、free:true）。
- src/index.js 新增 useMakersModelsForGeneration(provider, env)；isEdgeAiProvider 支持 provider.edgeAi === true；handleGenerate 使用该包装，handleChat 保持 resolveProvider。
- 修正首次替换误命中 handleChat 的问题；chat 不再被 Makers Models 替换。
- handleGenerate 对 Makers Models 的 429 映射为 edge_ai_quota_exhausted，message 提示配置自己的 provider。
- /api/health 增加 makersModels: makersModelsAvailable(env) 诊断布尔值。
- 测试新增：tests/providers.test.js 覆盖 Makers Models 可用性/config/网关 bearer 调用；tests/edgeone.test.js 覆盖 env 存在时 /api/generate 使用 Makers Models。
- 已部署 dprmue9kubh8，health 确认 makersModels:true；完整 8 篇生成成功：34.3s、200、mode:"ai"、edgeAi:true、provider makers-models、无 warnings、9 个材料 ID。
- 已将 chat 回退模型排除 r1-distill，quota 测试期望从 5 改为 4；npm.cmd test 全部通过。
- 早期已完成：Edge AI 流读取超时与 abort、parseDocumentTags 容错、validate 选项、非 quota 生成错误回退规则、prompt 加固、生成模型优先选择、Cloud Functions 诊断删除、网关本地实测 3 篇 28.5s、前端 Edge AI 默认/额度强制配置 UI。
Active
- 刚在 handleChat 加入回退：Edge AI 非 quota 错误或返回 null 且 makersModelsAvailable(env) 时，改用 Makers Models；设置 chatProvider.edgeAi=false，warning "EdgeOne AI was temporarily unavailable; this turn used EdgeOne Makers Models."。
- 该 chat 回退改动尚未 node --check、npm.cmd test、构建、部署或线上验证。
- Edge AI chat 当前上游异常：v4/v32/v3-0324/r1-0528 均返回 "推理内部错误 task_id: ..."，导致此前 chat 502 edge_ai_error；回退用于避免该 502。
- 需重新部署后同时验证 chat（Edge AI 或 Makers 回退）与完整 8 篇生成未回归。
Blocked
- Edge AI 聊天上游 "推理内部错误" 为外部服务异常，无法确认何时恢复；已加 Makers Models 回退。
- 已泄露的 AI_GATEWAY_API_KEY 需控制台轮换/删除并更新 env；CLI 无删除能力。
- Edge AI 原生生成仍无法在 ~100s 内完成 8 篇；Makers Models 已绕过，但 Edge AI 回退路径仍慢。
- 真实 Edge AI / Makers Models 额度耗尽场景未线上验证。
- 无真实第三方 provider Key 做端到端 fallback 测试。
- 前端仅语法检查，无 Playwright/Puppeteer 浏览器视觉/交互验证。
Next Move
1. 运行 node --check src\index.js、npm.cmd test，构建并部署；更新 chat-check.mjs token 后验证 chat 不再 502，且能显示 Edge AI 成功或 Makers Models 回退 warning。
2. 重新跑 full-gen.mjs 完整 8 篇生成，确认仍 ~34s、provider.id:"makers-models"、edgeAi:true、无 warnings；再跑 export smoke。
3. 到控制台轮换/删除泄露的 AI_GATEWAY_API_KEY，更新生产 env 并重新部署；清理临时脚本与 .env.example 敏感声明。
Relevant Files
- D:\huangyg\git\sample\financing\src\providers.js：Edge AI 调用/模型回退/validate/EDGE_AI_GENERATION_MODEL/MAKERS_MODELS_MODEL/makersModelsAvailable/makersModelsConfig；chat 跳过 r1-distill 逻辑。
- D:\huangyg\git\sample\financing\src\index.js：路由、resolveProvider、handleChat（最新回退改动）、handleGenerate（Makers 替换与 quota 映射）、isEdgeAiProvider、health makersModels。
- D:\huangyg\git\sample\financing\src\ai.js：interview、文档分组生成、prompt、parseDocumentTags、generateDocumentsWithProvider。
- D:\huangyg\git\sample\financing\src\edgeone.js：EdgeOne onRequest 适配器（传入 context.env）。
- D:\huangyg\git\sample\financing\scripts\build-edgeone.mjs：esbuild 构建。
- D:\huangyg\git\sample\financing\scripts\smoke.mjs：SMOKE_EDGE_AI / SMOKE_EDGE_AI_GENERATE 全链路验证。
- D:\huangyg\git\sample\financing\tests\providers.test.js：Makers Models config/available/网关调用；chat quota 期望 4 模型。
- D:\huangyg\git\sample\financing\tests\edgeone.test.js：默认 Edge AI、quota、Makers Models 生成测试。
- D:\huangyg\git\sample\financing\tests\ai.test.js：文档分组、prompt、parse、partial/quota 测试。
- D:\huangyg\git\sample\financing\public\app.js：Edge AI notice、quota modal、请求状态。
- D:\huangyg\git\sample\financing\public\index.html：Edge AI notice 结构。
- D:\huangyg\git\sample\financing\public\styles.css：Edge AI notice/quota 样式。
- D:\huangyg\git\sample\financing\edgeone.json：SPA rewrite、CSP 和安全 headers。
- D:\huangyg\git\sample\financing\.env：本地 Makers Models 凭据，已 gitignore，不得提交/打印。
- D:\huangyg\git\sample\financing\.env.example：声明 AI_GATEWAY_API_KEY= / AI_GATEWAY_BASE_URL=。
- D:\huangyg\git\sample\financing\.edgeone\auth.json：CLI 登录 token，敏感，不得提交。
- D:\huangyg\git\sample\financing\dist\edge-functions\api\[[default]].js：当前构建产物，修改后需重建。
- C:\Users\hyg\AppData\Local\Temp\opencode\full-gen.mjs：完整 8 篇生成验证脚本。
- C:\Users\hyg\AppData\Local\Temp\opencode\chat-check.mjs：chat 验证脚本，需更新部署 token。
▣  Compaction · DeepSeek V4.1 Flash Free · 55.7s
```

- 在free、doc、code集中manifet中，code分为model和manual两种。调用方可以根据设置切换两套code。
