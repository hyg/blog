# 2025.10.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:29	learn: [XSTATE https://xstate.js.org/](#20251027140000)
- 14:30~14:59	learn: [redux https://cn.redux.js.org](#20251027143000)
- 19:00~19:59	check: [零散笔记](#20251027190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1987 | 11543 | 10065 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 210 | 2320 | 1485 |
| infra | 2000 | 30 | 1970 | 480 |
| xuemen | 1000 | 195 | 805 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 1402 | 598 | 4425 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：Alloy
  - learn的第4号事项：VDM (Vienna Development Method)
  - js的第8号事项：copilot
  - js的第9号事项：node.js

- 60分钟时间片：
  - ego的第1号事项：细化ego对task的资源分配
  - js的第1号事项：LangChain.js
  - learn的第1号事项：XSTATE https://xstate.js.org/
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.27.[XSTATE https://xstate.js.org/]任务&body=日期: 2025.10.27.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251027.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251027140000"></a>
## 14:00 ~ 15:29
## learn: [XSTATE https://xstate.js.org/]

- d:\huangyg\git\sample\statecharts\
	- pnpm install xstate
	- sample1是没有状态直接on的语法。sample2有state字段，更完整。
- https://www.jsdocs.io/package/xstate
	- https://www.jsdocs.io/package/xstate#assign
	- 一个对象：context要被更新的局部；一个返回更新值的函数。
- actions、 activities、 delays、 guards、 和 services 是作为createMachine的第二个参数options。	
- Xstate的spilt,joint.
	- 作为复合状态 Compound states的子状态
	- 作为并行状态 Parallel states
- 下个时间片以1406为案例继续：D:\huangyg\git\sample\statecharts\1406.js

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.27.[redux https://cn.redux.js.org]任务&body=日期: 2025.10.27.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20251027.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251027143000"></a>
## 14:30 ~ 14:59
## learn: [redux https://cn.redux.js.org]

- 介绍一下 redux https://cn.redux.js.org ，推荐一些阅读资料。列举与它应用场景和功能类似的竞品，对比优缺点、nodejs+windows技术栈的相关工具集。分析社区和团队、使用人群及其活跃度，预判今后的发展。
	- Redux vs Zustand：Zustand 可以看作是 Redux 的“极简版”。如果你喜欢 Redux 的思想但讨厌样板代码，Zustand 是绝佳选择。
    - Redux vs MobX：Redux 是“显式”的，MobX 是“隐式”的。Redux 强迫你遵循规则，而 MobX 给你自由。大型团队协作时，Redux 的约束性通常是优点。
    - Redux vs Context：Context 是 React 的内置方案，适合解决 Props Drilling。但当状态更新频繁或被多个远端组件使用时，其性能问题会凸显，此时 Redux/Zustand 更合适。
- 为各局部的状态变化提供统一、全局的容器。可预测化、函数式的「全局状态容器」；与 React 解耦，可跑在浏览器、React-Native、Electron、Node、小程序运行时。
| 库 / 框架          | 核心范式            | 包体积(min+gz) | TS 友好 | 异步范式                    | Node 场景       | Windows 工具链                     | 优点            | 缺点                  |
| --------------- | --------------- | ----------- | ----- | ----------------------- | ------------- | ------------------------------- | ------------- | ------------------- |
| **Redux + RTK** | 不可变 + action 派发 | 14 kB       | 一等公民  | thunk / saga / listener | 支持 SSR、CLI、脚本 | DevTools、VS Code 插件、Time-travel | 中间件生态最大；调试无敌  | 样板仍偏多；初学者概念多        |
| **Zustand**     | Hooks 信号式       | 3.8 kB      | 优     | async/await 直接写         | 可创建多 Store    | 浏览器插件 2025 才发布                  | 零样板；超轻        | 无时间旅行；复杂流程吃力        |
| **MobX**        | 响应式代理           | 17 kB       | 中     | flow / runInAction      | Node 可运行，但需配置 | 无官方 DevTools                    | 写 OOP 直觉；自动追踪 | 调试黑盒；Tree-Shaking 差 |
| **Recoil**      | 原子图             | 11 kB       | 优     | async selector          | 实验性 Node 支持   | 无 Windows 离线工具                  | Concurrent 友好 | 仍在 0.x；API 不稳定      |
| **Pinia**       | Vue 官方          | 7 kB        | 优     | async action            | 同构 SSR        | Vue DevTools                    | Vue 场景最顺      | 非 Vue 项目不可用         |
| **XState**      | 状态图             | 20 kB       | 优     | 内置 actor/invoke         | 服务端工作流        | Stately Studio                  | 可视化强；适合流程     | 写法重；学习曲线陡           |
| **Valtio**      | 代理不可变           | 4 kB        | 中     | async 直接写               | 支持            | 无 DevTools                      | 极简 API        | 社区小；无调试器            |
- Redux 不再是「轻量」的代名词，但凭借「调试生态 + 不可变时间旅行 + 全栈同构」三大护城河，在 Node-Windows 技术栈仍是复杂业务状态的首选；未来随着 RTK 2.x 全栈化，它大概率从「React 状态管理」进化为「JavaScript 通用数据流引擎」。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.27.[无名任务]任务&body=日期: 2025.10.27.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251027.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251027190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- pipe2下载安装 https://pipe2.sourceforge.net/docs.html
	- d:\0-download\3-Tool\PIPEv4.3.0\launch.bat

<a id="annex22"></a>
## 附件二十二
hox.召集. 审议工作输出

- https://hoxdao-urc.feishu.cn/docx/YRQkdQQbqoQmQPx83FXcvH10nCc

- 还有多处修改值得探讨，但多处联动关系复杂，而且文字层面修订时间已经太长，不如在实践过程中总结：
	- 召集通知 vs 召集通知+项目发起会议通知；
		- 受邀者在收到召集通知（了解时间地点会务费议事规则等等信息）之后才决定是否参与； vs 受邀者先确认参与再发出会议通知和议事规则；
		- 参与者在互相熟悉、实缴并公示之后，到提交步骤才提交共同体部署方案 vs 项目发起会议通知中就要求明确谁是部署方案作者、并区别对待；
		- 每个参与者都要缴纳会务费 vs 部分角色缴纳；
	- 认缴实缴包括可以用货币估价并可以依法转让的财产、人力资源 vs 简化：认缴只包括资金和人力资源，实缴则只有资金；
	- 无人提案只退还实缴资源，不退会务费、不赔偿损失 vs 退实缴资源、退会务费和赔偿损失；
	- 投入步骤包括所有种类资源 vs 只有资金和人力资源投入者参与；
		- 投入步骤同时提交所有资源 vs 资金投入者先提交，然后人力资源投入者；
		- 部署方案作者没有限定 vs 限定资金投入者提交部署方案；
	- 竞聘步骤按部署方案进行（包括主持、程序等细节）vs hox统一安排答辩主持人和次序等细节；
		- 投入步骤由资源投入者选择提案 vs 由提案选择资源投入者；
	- 修改步骤：只有修改的部署方案释放资源 vs 所有部署方案释放资源；

- 启动时间主要根据受邀人群的实际情况决定，可以考虑以下方面：
	- 受邀者的“社会经验” vs hox程序的科学性、严密性 vs 召集人的透明度、诚信度 三方面吻合，缺口是否已经补齐；
	- 受邀者对创业方向价值的判断和行动习惯；
		- 以存量资源和创业方向对接：一般一周就达到极限，如果不行动就开始反复和退缩；
		- 主动接触市场增量（崛起的消费者群体），并积极改造自己、与增量绑定：这样的参与者可以作为重点合作对象。
