# 2025.07.10.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 13:34~14:09	learn: [佯谬及二次革命](#202507101334000)
- 14:10~14:44	infra: [整理fsm、psm的split、joint操作。](#20250710141000)
- 16:17~17:16	learn: [量子物理的数学基础](#20250710161700)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 281 | 13249 | 7905 |
| PSMD | 4000 | 90 | 3910 | 1170 |
| ego | 2530 | 0 | 2530 | 1485 |
| infra | 2000 | 95 | 1905 | 210 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 96 | 1904 | 2250 |
| js | 1000 | 0 | 1000 | 1860 |

---
waiting list:


- 30分钟时间片：
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：设计三季度时间表
  - learn的第2号事项：佯谬及二次革命
  - raw的第2号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - learn的第1号事项：量子物理的数学基础
  - xuemen的第1号事项：mail server

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.10.[佯谬及二次革命]任务&body=日期: 2025.07.10.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250710.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="202507101334000"></a>
## 13:34 ~ 14:09
## learn: [佯谬及二次革命]

### 阶段小结：仪器与“干扰”

- 现在的量子计算机的离子阱可以隔绝外界的“干扰”，只保留规定的电场参数作为IO。此外都是经典电路，因此在这个思想实验中没有特别作用。
- 在剔除“干扰”影响后，可拓展思想实验，研究观察者（自己）并入被观察系统后的规律。然后：
	- 一名观察者对被观察系统的输入参数进行调节，影响其它观察者的观察结果，进而实现通信。
	- 观察者之间在【观察者+被观察系统】以外另建通信通道。
- 实际上，人类观察者并不能直接观察粒子，而是借助设备完成微观粒子到某种宏观影像的映射，再进入人类的器官。
- 而这些设备，是按照宏观现象研究出来的物理规律设计的，已经控制了“干扰”。因为也很难推断设备观察的是某种状态还是所有状态。
	- 人类观察宏观世界产生经典物理知识。
	- 使用经典物理知识设计仪器，控制“干扰”，产生宏观的观察结果。
	- 使用仪器观察微观世界，仪器输出结果中含有一系列佯谬。
- 更完整的过程，是佯谬→新的世界模型→新的物理规律→新的仪器→新的数据→新的......
- 另一种研发过程：在宏观世界完成智能设备设计→智能设备置入到仪器某个环节→新的数据→新世界模型→新的智能设...

### 下阶段：“干扰”无法解释的佯谬

- 还有一些佯谬不能用仪器的干扰解释。基于它们再重复以上分析。


### https://wuli.iphy.ac.cn/en/article/pdf/preview/10.7693/wl20221201.pdf

### read ../../draft/2025/20250606.02.md

#### learn: [佯谬及二次革命]

### https://wuli.iphy.ac.cn/en/article/pdf/preview/10.7693/wl20221201.pdf

- 简单的综述，重要工作没放在这篇。
- 还需要阅读引文23~27的工作内容，才能理解革命的含义。
    - https://www.aminer.cn/profile/xue-peng/542d3783dabfae489b97dd63
    - 2021 年我们做的一个实验工作[22]：直觉上，人们预期随着纠缠的增强非定域性也会变得更强。然而两者之间的关系似乎更为复杂。我们发现，在一种被称为“非对称”的贝尔实验中，较弱的纠缠却可以表现出更强的非定域性，如图7 所示


### read ../../draft/2025/20250610.01.md

#### learn: [佯谬及二次革命]

- 阅读量子计算相关的综述。
	- https://www.sciengine.com/CSB/doi/10.1360/972012-224
- 进一步阅读量子计算机的综述：
	- https://www.aminer.cn/pub/65bbc048939a5f4082e56987/quantum-computers
	- https://www.aminer.cn/pub/56d90073dabfae2eeed3d39d/colloquium-topological-insulators
- 重点关注：能够颠覆量子力学关键思想实验和佯谬的新进展。
	- 量子计算机作为观察者
	- 观察者的大脑视为量子计算机，用数学语言描述“观察”
	- 人和量子计算机的观察结果怎么交流
- 进一步学习：
	- 量子图灵机模型
	- Shor 算法
	- Grover 算法
	- Deutsch 门
	- 离子阱系统



---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.10.[整理fsm、psm的split、joint操作。]任务&body=日期: 2025.07.10.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250710.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250710141000"></a>
## 14:10 ~ 14:44
## infra: [整理fsm、psm的split、joint操作。]

- fsm的split：所有输入都同时给子fsm
	- 子fsm的状态作为可读环境数据env。每个子fsm增加一组状态，处理输入时读取env（某个外部fsm状态）。映射关系太大，slpit没有好处。
	- 子fsm的状态作为可写环境变量env。各子fsm直接写其它fsm状态后进入s0。映射关系简单，但是子fsm安全性低，也没有好处。
- fsm的joint：
	- 子fsm的状态的全部组合，作为新fsm的状态 Sk=(SAi，SBj)。env、event和action的处理很直观。
- fpm的情况，根据draft 202407231600, (protocol.log -> protocol + effect) 不用knowledge这个词，缩小为有限协议机FPM（finite protocol machine）。而protocol用FSM定义。
	- 当时是表达知识的，评估将来效果，而不是用来处理event、action的。
	- 后续时间片把fpm当作fsm使用，用来切换protocol。只是不考虑protocol内部state，而是根据当前protocol切换新的protocol。
- 按照最初原意，fpm的split、join只需要简单处理，包括F：(p)->(p,e)的函数。(protocol.log -> protocol + effect)。
- 如果把FPM当作大型FSM使用，处理方式和FSM相似。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.10.[量子物理的数学基础]任务&body=日期: 2025.07.10.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250710.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250710161700"></a>
## 16:17 ~ 17:16
## learn: [量子物理的数学基础]

- 定域实在论
	- https://baike.baidu.com/item/%E5%AE%9A%E5%9F%9F%E5%AE%9E%E5%9C%A8%E8%AE%BA/22383747
	- 定域论只允许在某区域发生的事件以不超过光速的传递方式影响其它区域。
	- 定域性原理表明，物体只能直接地被毗连区域发生的事件所影响，遥远区域发生的事件不能以某种超过光速的传递方式间接地影响此物体。
	- 实在论主张，做实验观测到的现象是出自于某种物理实在，而这物理实在与观测的动作无关。
	- 将定域性原理与实在论综合在一起，定域实在论表明，微观粒子具有可测量、良好定义的物理实在，不会被在遥远区域发生的事件以超光速速度影响。
	
- “EPR佯谬”（EPR paradox）
	- https://baike.baidu.com/item/%E7%88%B1%E5%9B%A0%E6%96%AF%E5%9D%A6-%E6%B3%A2%E5%A4%9A%E5%B0%94%E6%96%AF%E5%9F%BA-%E7%BD%97%E6%A3%AE%E4%BD%AF%E8%B0%AC/22360064
	- https://journals.aps.org/pr/pdf/10.1103/PhysRev.47.777

- 完备的、不完备的
	- http://www.shuxueji.com/w/130250
	- 在数理逻辑，一个理论被称为完备的，如果对于其语言中的任何一个句子S，这个理论包括且仅包括S或\neg S。一个系统是相容的，如果不存在同时P和非P的证明。哥德尔不完备定理证明了，包含皮亚诺公理的所有公理系统都是不可能既完备又相容的。
	- 在图论中，一个图被称为完全的，如果这个图是无向图，并且任何两个顶点之间都恰有一条边连接。
	
### https://baike.baidu.com/item/%E5%BE%AE%E5%88%86%E5%87%A0%E4%BD%95/11421

### https://zhuanlan.zhihu.com/p/629852598

### read ../../draft/2025/20250526.02.md

#### learn: [狄拉克算子]

- 需要更系统地学习，才能熟练验算新版本的底层模型。
- 继续追加时间，改为todo项“量子物理的数学基础”。

### read ../../draft/2025/20250417.01.md

#### ego: [新版基础模型]

- 向下要考虑物理学和哲学方向的新进展，把热升级的弹性空间分配好，延长向后兼容空间。
    - 注意引文和近年最新的几项思想实验：https://www.quantamagazine.org/frauchiger-renner-paradox-clarifies-where-our-views-of-reality-go-wrong-20181203/
    - https://arxiv.org/abs/2402.10267
    - https://journals.aps.org/pra/abstract/10.1103/PhysRevA.109.032205
    - https://arxiv.org/abs/2307.01874
    - https://arxiv.org/html/2307.01874v3
- 横向要考虑自然人、智能设备、现有企业的共性。
- 在以上两项工作的基础上，重新总结意识的定义。在这基础上重新设计模型和部署的数据结构，以及分立、合并两项操作，从而设计出跨类别混合的共同体。
- 在以上工作完成后，把共同体治理的通用概念落实到自然人、智能设备。重写ego模型，实践检验至少一个季度。
- 继续追加时间。

### read ../../draft/2025/20250407.b.md

#### ego: [新版基础概念准备]

- 搜集几篇可能触动entity基础定义的新文章。了解最新的悖论和需要重写的思想实验。为新版基础模型做概念准备。这个方向的投入永远没有休止，但要尽量提高结构上向后兼容的能力。
- https://journals.aps.org/pra/abstract/10.1103/PhysRevA.109.032205
- https://arxiv.org/abs/2307.01874
- in the quantum world even points of view are uncertain:https://www.quantamagazine.org/in-the-quantum-world-even-points-of-view-are-uncertain-20241122/
- https://arxiv.org/abs/2402.10267

### read ../../draft/2025/20250606.04.md

#### learn: [量子物理的数学基础]

- 前面综述引出需要学习的概念：
    - 定域、定域实在性、非定域性
    - 完备的、不完备的
    - 贝尔单态
    - 对不等式的违背，达到了xx个标准差。
    - 对易或不对易
    - 互文性、非互文的(noncon‐textual)
    - 时间域的Tsirelson 束缚
- 继续追加时间。

