# 2025.11.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~16:59	learn: [Semantic Version + Content-Addressable Storage（如 OCI Artifacts 存 DMN/Regos）](#20251109140000)
- 19:00~19:59	check: [零散笔记](#20251109190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2542 | 10988 | 9825 |
| PSMD | 4000 | 90 | 3910 | 1335 |
| ego | 2530 | 330 | 2200 | 1395 |
| infra | 2000 | 30 | 1970 | 450 |
| xuemen | 1000 | 195 | 805 | 540 |
| raw | 1000 | 90 | 910 | 150 |
| learn | 2000 | 1707 | 293 | 4425 |
| js | 1000 | 100 | 900 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：Ontology + SWRL（Semantic Web Rule Language）
  - learn的第10号事项：Common Logic (ISO/IEC 24707)
  - js的第11号事项：passportjs
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - ego的第2号事项：整理task及其相互关系
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.09.[Semantic Version + Content-Addressable Storage（如 OCI Artifacts 存 DMN/Regos）]任务&body=日期: 2025.11.09.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251109.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251109140000"></a>
## 14:00 ~ 16:59
## learn: [Semantic Version + Content-Addressable Storage（如 OCI Artifacts 存 DMN/Regos）]

- Open Policy Agent (OPA) 的策略语言 Rego
	- https://www.openpolicyagent.org/docs/policy-language
	- https://play.openpolicyagent.org/
- 适合权力分配规则：
	- 业务系统核实用户权限
	- 事件触发SOP
- https://www.npmjs.com/package/@open-policy-agent/opa-wasm
	- opa build -t wasm 性能提升 3-5×，Node.js 通过 opa-wasm 即可离线 eval，边缘场景（Windows IoT）无需携带 OPA 二进制。
- OPA/rego与FSM/XSTATE混合打法：
	- 用 Rego 做“是否可转移”的 guard 函数，把复杂条件封装成一条 canTransition := true if {...}；
	- 用 XState 管“当前在哪、下一步去哪”，保持图小且可画。
	- 两者通过 input.canTransition = opaEval(...) 结合，各取所长。
	- Rego 表达力 > 有限状态机，尤其擅长压缩+查询+反向推导；XState 擅长可视化+逐步追踪。（例如“用户还想知道差多少钱才满足优惠”）
- AI：设计更多实例介绍Rego 可以压缩、查询、反向推导这些特性。
- 对PSMD项目而言，DMN/regos可以用DIY的数据结构管理，暂时还不需要OCI注册库。
	- 对于更复杂的需求，可以考虑直接在docker中管理数据，借用它的CAS功能。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.09.[无名任务]任务&body=日期: 2025.11.09.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251109.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251109190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

