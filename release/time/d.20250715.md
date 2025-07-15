# 2025.07.15.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:59	js: [AI SDK](#20250715140000)
- 16:00~17:45	learn: [量子物理的数学基础](#20250715160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1152 | 12378 | 7200 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 200 | 2330 | 1365 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 347 | 1653 | 1965 |
| js | 1000 | 150 | 850 | 1620 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：LangChain.js
  - ego的第5号事项：entry的科目归并
  - learn的第5号事项：演化计算（Evolutionary Computation）和大模型结合的研判
  - js的第5号事项：learn brain.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：设计新的季度时间表
  - learn的第2号事项：佯谬及二次革命
  - raw的第2号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - ego的第2号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - learn的第1号事项：量子物理的数学基础
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.15.[AI SDK]任务&body=日期: 2025.07.15.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250715.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250715140000"></a>
## 14:00 ~ 15:59
## js: [AI SDK]

- https://github.com/vercel/ai
- https://ai-sdk.dev/

- https://ai-sdk.dev/docs/getting-started
- 支持的框架很多。
- https://ai-sdk.dev/docs/getting-started/nodejs
- 只支持openai API？首页提到“Unified Provider API”，可能是文档滞后了。
	- https://ai-sdk.dev/docs/foundations/providers-and-models
	- 支持许多provider，包括deepseek。

### vs ai.js

- 接口比ai.js更底层，定制角色、提示语和上下文更容易。
- 纯js，不需要安装python，更符合目标用户的本地环境。
- 有tool实现传感器功能。https://ai-sdk.dev/docs/foundations/tools
- 适合完成多步骤、定制化的自动工具。
	- 先用免费API开发调试，比如mistral。
	- 然后用收费API对比，选定产品可选的AI provider。

- D:\huangyg\git\js.sample\ai-sdk
	- npm i ai

### deepseek
- npm install @ai-sdk/deepseek
- D:\huangyg\git\js.sample\ai-sdk\deepseek.js
```
error: APICallError [AI_APICallError]: Insufficient Balance
...
  statusCode: 402,
  responseHeaders: {
    'access-control-allow-credentials': 'true',
    connection: 'keep-alive',
    'content-length': '111',
    'content-type': 'application/json',
    date: 'Tue, 15 Jul 2025 07:32:46 GMT',
    server: 'CW',
    'set-cookie': 'HWWAFSESID=9f497948221bc4a1e3; path=/',
    'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
    vary: 'origin, access-control-request-method, access-control-request-headers',
    'x-content-type-options': 'nosniff',
    'x-ds-trace-id': 'bef257780fc9ba83bcac61dee0000910'
  },
  responseBody: '{"error":{"message":"Insufficient Balance","type":"unknown_error","param":null,"code":"invalid_request_error"}}',
  isRetryable: false,
  data: {
    error: {
      message: 'Insufficient Balance',
      type: 'unknown_error',
      param: null,
      code: 'invalid_request_error'
    }
  },
  [Symbol(vercel.ai.error)]: true,
  [Symbol(vercel.ai.error.AI_APICallError)]: true
}
```

### mistral

- https://ai-sdk.dev/providers/ai-sdk-providers/mistral
- npm install @ai-sdk/mistral
- D:\huangyg\git\js.sample\ai-sdk\mistral.js
```
try {
    const { text } = await generateText({
    model: mistral('mistral-large-latest'),
    prompt: '中国近年有哪些新品种水果在八月份成熟，请按照糖分排序，列出各品种的名称、糖分、简介、成熟期、优势产地。',
  });
    //console.log(reasoning);
    console.log(text);
} catch (err) {
    // 处理错误
    console.log("error:",err);
}
```
```
D:\huangyg\git\js.sample\ai-sdk>node mistral
中国近年来有许多新品种水果在八月份成熟，以下是按照糖分排序列出的一些品种的名称、糖分、简介、成熟期和优势产地：

1. **红富士苹果**
   - **糖分**：15-18%
   - **简介**：红富士苹果是一种甜脆多汁的苹果品种，果实圆润，颜色鲜艳，口感香甜。
   - **成熟期**：8月中旬至9月
   - **优势产地**：山东、陕西、辽宁

2. **黄金梨**
   - **糖分**：14-16%
   - **简介**：黄金梨果实金黄，果肉细腻，汁多甜脆，是一种高品质的梨品种。
   - **成熟期**：8月下旬至9月
   - **优势产地**：河北、山东、辽宁

3. **蜜橘**
   - **糖分**：12-14%
   - **简介**：蜜橘果实小巧，皮薄易剥，果肉甜美多汁，是一种受欢迎的柑橘类水果。
   - **成熟期**：8月中旬至9月
   - **优势产地**：浙江、福建、广东

4. **葡萄（巨峰葡萄）**
   - **糖分**：10-12%
   - **简介**：巨峰葡萄果实粒大，皮薄肉厚，甜美多汁，是一种高品质的葡萄品种。
   - **成熟期**：8月中旬至9月
   - **优势产地**：新疆、山东、河北

5. **桃（黄桃）**
   - **糖分**：10-12%
   - **简介**：黄桃果实金黄，果肉甜脆，汁多香甜，是一种受欢迎的桃品种。
   - **成熟期**：8月中旬至9月
   - **优势产地**：山东、河北、辽宁

6. **李子（黑李子）**
   - **糖分**：8-10%
   - **简介**：黑李子果实深紫色，果肉甜美，汁多，是一种高品质的李子品种。
   - **成熟期**：8月中旬至9月
   - **优势产地**：山东、河北、辽宁

7. **杏（黄杏）**
   - **糖分**：8-10%
   - **简介**：黄杏果实金黄，果肉甜脆，汁多香甜，是一种受欢迎的杏品种。
   - **成熟期**：8月中旬至9月
   - **优势产地**：山东、河北、辽宁

这些水果品种在八月份成熟，糖分含量较高，口感甜美，深受消费者喜爱。不同品种的水果在不同地区有其优势产地，这些地区的气候和土壤条件非常适合这些水果的生长和成熟。
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.15.[量子物理的数学基础]任务&body=日期: 2025.07.15.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250715.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250715160000"></a>
## 16:00 ~ 17:45
## learn: [量子物理的数学基础]

### 互文性、非互文的 con‐textua、intertextuality

- https://baike.baidu.com/item/%E4%BA%92%E6%96%87%E6%80%A7/2213729
- https://fh.pku.edu.cn/docs/2018-11/20181119230523662772.pdf
- 在论文《量子力学佯谬及第二次量子革命》中就是指上下文关系：
	- http://www.wuli.ac.cn/cn/article/doi/10.7693/wl20221201
	- https://www.thepaper.cn/newsDetail_forward_21304267

### 时间域的Tsirelson束缚 Tsirelson's bound

- https://tru-physics.org/2023/05/27/tsirelsons-bound/
	- S可以达到2\sqrt{2},也就是Tsirelson’s bound.
- CHSH不等式 CHSH inequality
	- https://zhuanlan.zhihu.com/p/64099906
	- https://tru-physics.org/2023/05/12/chsh-inequality
	- -2 \leq S \leq 2
	- 贝尔不等式、CHSH不等式适用于隐变量诠释，不适用于统计诠释。
- 统计诠释or系综诠释
	- https://baike.baidu.com/item/%E7%B3%BB%E7%BB%BC%E8%AF%A0%E9%87%8A/22361465
