# 2025.10.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20251018190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1010 | 12520 | 9540 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 195 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 830 | 1170 | 4245 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：https://www.pnml.org/
  - learn的第3号事项：RuleML,结构化规则语言（如RuleML的核心子集）
  - learn的第8号事项：CloudEvent（JSON 格式，spec 1.0+）
  - js的第8号事项：copilot

- 60分钟时间片：
  - learn的第1号事项：Tauri + Rust
  - js的第1号事项：LangChain.js
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：ai-sdk + moonshot

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.18.[无名任务]任务&body=日期: 2025.10.18.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251018.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251018190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 根据这份论文内容：https://arxiv.org/html/2505.00018v2 如果重构需要agent本身签名，就意味着涉及的agent全票通过、meta level发动重构才能生效。这是否意味着需要建立类似事务的机制，如果部分agent抗拒就回卷到重构前。
- 论文中的案例里，是否整个HAACS 都必须是同一个开发方。如果各agent来自互不统属的开发方，agent的update和reconfigurable将怎么协商、进行？各开发方仅凭本论文内容是否可以各自开发出可以协作的agent，还是必须安排额外的交流，扩展本论文内容之后才进入开发。
- 网页中使用indexdb，本地软件直接对object操作比嵌入式KV数据库更适合，语法更简练。
-  SECI, Ba模型是通过对话进行启发，螺旋式地增长个体知识。
	- PSMD在 SECI, Ba 所能实现的极限以上，通过把深层知识转化为浅层的公理、原语，在浅层主体无法理解、无需理解的情况下增长共同体知识。
- 选型：
	- stepify、petri-js + pnml
	- tauri+Vanilla
	- 基础学科：DL
	- 合同：CEV（Contract Expression Language）、Marlowe
	- SOP：颜色 Petri 网 CPN、Statecharts、DIY通用事件接口
- 值得研究借鉴Agora Protocol的自然语言-protocol-code manifest转换。
- Libsodium.js的随机数还是伪的。真的用本地熵池接口。
