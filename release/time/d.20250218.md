# 2025.02.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1c)。

<a id="index"></a>
- 14:00~14:29	js: [考虑sql.js是否使用。](#20250218140000)
- 14:30~14:59	raw: [复习形神庄第四节](#20250218143000)
- 16:00~18:59	PSMD: [智在科技项目准备](#20250218160000)
- 16:00~16:00	js: [引用github等特定版本js文件的html模版](#20250218160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4155 | 9375 | 6045 |
| PSMD | 4000 | 2945 | 1055 | 1335 |
| ego | 2530 | 360 | 2170 | 885 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 150 | 850 | 450 |
| raw | 1000 | 285 | 715 | 990 |
| learn | 2000 | 265 | 1735 | 1230 |
| js | 1000 | 30 | 970 | 840 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：复习形神庄第五节
  - raw的第2号事项：复习形神庄第六节
  - raw的第3号事项：复习形神庄第七节
  - raw的第4号事项：复习形神庄第八节

- 60分钟时间片：
  - js的第1号事项：引用github等特定版本js文件的html模版
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第2号事项：oData simple
  - js的第2号事项：js class

- 90分钟时间片：
  - ego的第1号事项：新版本任务、子任务的数据结构
  - learn的第1号事项：飞书 nodejs sdk
  - ego的第2号事项：启用新字段存放前置任务的output，自动汇编写入新的draft文件。
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.18.[考虑sql.js是否使用。]任务&body=日期: 2025.02.18.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250218.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250218140000"></a>
## 14:00 ~ 14:29
## js: [考虑sql.js是否使用。]

- 如果复合查询工作量较大，把数据整理为关系数据库的工作量相对较小，可以使用。
- 目前即使是raw也没有到这程度。也许针对yaml的查询工具更适合。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.18.[复习形神庄第四节]任务&body=日期: 2025.02.18.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250218.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250218143000"></a>
## 14:30 ~ 14:59
## raw: [复习形神庄第四节]

- 今天雨水节气，正好复习到肝的部分。
- 下旬放在下午15点那段休息试试，结合对门静脉的感觉。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.18.[智在科技项目准备]任务&body=日期: 2025.02.18.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250218.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250218160000"></a>
## 16:00 ~ 18:59
## PSMD: [智在科技项目准备]

- 【CHH-Key】经过一周多的推动，今天填齐了三人的描述内容。
- 下午开始issue区填写。
```
Readme
- 此文档由黄常谦自2025.02.09发起编辑，由陈大金、黄勇刚合作编辑。
  - CHH代表三人姓氏首字母
  - C=陈大金，H=黄勇刚，H=黄常谦
- 三位编辑成员各自独立输出，个人对自己的输出有修订编辑权，对其他二人的输出原文不得编辑修改，但可以并不限于：评论、引用、拉取改写、扩展、演绎等等；
- 此文档暂时保存在《飞书-智在科技-黄常谦》库中，为防止被损毁，建议三人确定最佳的保存方式。
- 假设三人最终解决了与本方案具备同样目的的其他方案，【CHH-key】自动冻结封存，替换为三人结成共识的方案。
- 【CHH-Key】暂时及已发生的交互记录保存在：
  - 陈大金、黄勇刚、黄常谦三人微信群 - “未命名”，由陈大金2025.01.06创立。
  - 陈大金、黄勇刚、黄常谦三人智在科技飞书消息群 - “智在科技共同体”，由陈大金2025.01.14创立。
[图片]
[图片]

1. 【CHH-Key】描述
希望本节描述为【CHH-Key】最终定义提供思路。
1.1 黄常谦描述
- 【CHH-Key】是一个集智大脑：三人的独立大脑通过交互，大概率会生成对共同体更有价值的“意识”与“认知”。
- 【CHH-Key】是一个虚拟人格：对共同体更有价值的“意识”与“认知”在特定条件下自然具备虚拟人格的特征，有可能呈现一种类似“共同体文化内核”，或者在共同体持有特定表决权，或者类似PSMD链式共同体的席位等。
- 【CHH-Key】作为虚拟人格，也许可参照PSMD知识库，是一个“容器”。（参照PSMD及黄勇刚文档中有关容器的内容）
- 【CHH-Key】专注于研究和解决共同体问题，但独立于任何共同体之外。即，不会拥有、依附、代表任何共同体。
1.2. 黄勇刚描述
- 即使同一个人的大脑中也存在许多念头。一部分“后台进程”不断把错误合理化，另一部分不断剥离这些“妄念”。
- 多人协同思考也有相同的构造，而非简单的思想倾倒。需要把各人的纠错方法组合起来，真心相信这方法，才能真心使用产生的知识。
- 如果以上过程没有退缩，坚持完成后可以将组合产生的知识称为【CHH-Key】。

1.3. 陈大金描述
- 华为的成功，源自批评和自我批评，尤其是任正非自我批评的实现；但实际上独立个体极难“左右互博”、“互为矛盾”地实施并坚持，导致自我批评往往落空。
- 辩证思维，需要正反两方；一个人切换到两个、甚至更多视角进行思辨和推演，往往也是极难实现，更不用说常态化进行。
- 商业的大成就，往往即需要立足当下生存为要，也需要面向未来愿景引领，否则难以达成。
- 因此，如果个体的人格分裂困难，多元人格的融合，未尝不是一个值得探索的方案。

2. 为何需要【CHH-Key】
希望本节通过三人聚焦，思考是否存在如下各自描述的需求，或引导出其他解决方案。
2.1 黄常谦描述
从观察目前三人正在筹备的“智在科技2025计划”，以及复盘三人以往交互历史，感知到三人在共性意识和认知中存在各自的特性：
  - 陈大金：善于在现实（Jungle场景）中找寻生存之道，并且有强烈愿景追求理想（Paradise场景）。知识体系专注于互联网科技领域，理工科技类知识突出，人文社科类知识存在短板。受现实状况约束，意识与认知专注于现实，需调用深层意识识别共同体或前瞻共同体时需要外部引导。
  - 黄勇刚：极强的深层意识和前瞻认知，研发了PSMD等知识库。较少投入资源在现实（Jungle）中交互，因此自然语言表达时，对于习惯于Jungle环境的人较理解有一定难度，或需要更多的上下文，更长期的交互才容易理解。
  - 黄常谦：介于上述二人之间，在现实（Jungle）中生存能力不强，虽有与上述二人相似的愿景，但在前瞻理想（Paradise）中并没有可靠的解决思路或方案。人文社科类知识有一定沉淀积累，学习能力较强，在前沿科技领域有比较正确的感知。
换言之，用形象描述：
  - CPU与GPU，在共同体部署上，黄勇刚像CPU，陈大金像GPU，黄常谦介于两者之间；
  - 此岸与彼岸，黄勇刚在彼岸，陈大金在此岸，黄常谦试图解决渡桥。

立足于目前“智在科技2025”的需求，观察三人近期交互情况，黄常谦认为需要一个可互补集智的“能力方”，最简单的场景：“三人大脑交互形成一个更具高效和实用的大脑”，或暂命名为【CHH-Key】。
鉴于上述描述，当三个大脑各自指挥各自行动时，有可能锁死三人希望实施的“集体行动”。反之，如果存在【CHH-Key】大脑，其输出可实现三人“集体行动”。
【CHH-Key】或可解决如下问题：
  - 避免一方的意识或认知难以理解其他方的意识或认知而造成主观否定判断；
  - 避免需行动的一方基于主观判断的否定，而不采取行动，或者未采取实质最优行动；
  - 也许，经过一定时间的，三方大脑的集智过程，需行动一方快速克服了缺陷，避免再投入学习成本，而快速采取经集智的最优行动。
https://zzhiai2020.feishu.cn/sync/HFuudR5e9s0yambpBgAcgIEonbg
- 类似的，三人的合作思想也都在已知的轨道上：
  - 规律1：思想跨越每个里程碑时，创业者必然认为自身素质远高于共同体实控人的标准，这时如果身上残留有低工作标准（即把制度瘫痪掉），这对矛盾时而被合理化、时而被认知和剥离，个人愿景就会反复摇摆。走出摇摆的方法中，自主地把负面条件反射替换为理性思考，速度慢、效果稳固；借助外力压住习惯，速度快、容易动摇。
  - 规律2：在愿景摇摆阶段，创业者必然会试探：低工作标准 → 高难度模型 → 良好效果，因为内在的矛盾而难以细化操作步骤，让其他人去补齐步骤，大家也都表示不可行、超出能力。之后仍然会有一段时间举棋不定，这时看起来很像锁死、脱轨。
  - 陈大金：愿景正在原始模式和现代模式之间反复，也在试探低工作标准 → 高难度模型。其实自身的知识和经历足以做出判断，也足以独立完成新共同体种类的研发和部署。这也是PSMD项目对委托者的真实期望。
  - 黄常谦：曾经以不同生态位亲历愿景摇摆阶段，因为长期在辅助位置，不习惯拍板决策、输出停滞在示意图、描述性文件等形式。其实悟性极高，能不借助外力看到自己心里的每个念头，一旦挣脱思维枷锁就可以输出无二义性、可操作的文件，迅速盘活个人积累的各类资源。
  - 黄勇刚：在愿景摇摆阶段停滞了十年、经历三轮企业生命周期，当时内心的不安和波动终身难忘。然后到合作社、俱乐部阶段，仍然执迷不悟地以超低标准去赌超高预期。基于这些教训，愿以现实作为标准，整理共同体模型和部署方案帮助创业者。
- PSMD项目并不排斥原始模式，也熟练掌握“GPU语言”（但不愿滥用）：
  - 入门目录给出了多种工作标准组合，配套有多种模型，向下兼容到原始模式。而且留有自定义方案的接口，委托者可以自己的语言描述可行方案（含工作标准）。实际上在微信群、飞书中曾4次提出（关键词：“第6条”）。
  - 关于低工作标准 → 高难度模型 → 良好效果，其中错配关系早已反复论证，极个别“成功案例”依赖于特殊资源禀赋，在现实中不可复制，至少超出受托者的能力。我们在讨论 低工作标准 → 低难度模型 → 较差效果 、高工作标准 → 高难度模型 → 良好效果 时，语言上没有障碍，三人都是GPU语言、CPU语言流畅切换。
- 【CHH-Key】同样有原始模式和现代模式之分。如果选择共同确认纠错和排序方法，上述工作标准也可以新的文字重新产生；现实中不成立的匹配关系，也可以新的纠错方法暴露出来。只要是基于事实和逻辑的方法，无论在【CHH-Key】内外进行都会指向同一个方向。

2.3. 陈大金描述

- 从0/1、对/错、是/否、真实/虚假、做/不做...等潜意识的二元对立，走向“三角之美”： 任意两方在讨论问题时必然是相对的，而第三方则需要处于独立的身份进行观察、记录、转译、提醒等，从而促进当事方的下意识表达及行为的觉醒。
即：B不是A、C的连接点最终构成线段，而A、B、C构成一个三角形；三角形态各异，代表不同的思辨态势，从而能够更加客观的、量化的甚至具象化的表达。

暂时无法在飞书文档外展示此内容

https://zzhiai2020.feishu.cn/sync/FBXIdwzCDsKGHZbs3Jdc3XHBnof

3. 反例：没有【CHH-Key】会怎样？
希望本节通过三人聚焦，思考不采用【CHH-Key】会成为怎样的状况，或引导出其他解决方案。
3.1 黄常谦描述
观察目前三人正在筹备的“智在科技2025计划”，以及黄常谦复盘自身以往经历，借用以下场景描述：
  - 读懂小说很容易，进一步可以口述出读过的小说，再进一步可以借用小说映射现实等，再进一步甚至大脑可构思一部小说。但是，当提笔写出构思的小说时，依然面临极大的困难。借用此场景，当共同体规则制定者完成“构思”后，开始提笔输出规则，以大脑中呈现的现实，映射到写确定的规则同样有难度。
  - 或者，现实中常规输出的文字模式，与要以规则用语表达，并没有参照文本时，存在难度或效率低下。此外，还存在一种场景，规则制定者输出后，现实使用者并不能理解。此场景是黄常谦在2020年承担中交城投房地产事业部制度修订和完善时，经历的困境。（可参照：设计变更识别树 zhuanlan.zhihu.com）
  - 或者，存在两类“计划”，一类与CPU相似，确定性要素明确；一类与GPU相似，大方向对但没有确定性要素。CPU计划在确定性要素未明确前难以推出实施，而GPU计划“差不多对”即可，先行动再边干边改。陈永苗说过这一场景，也许可参考：“在当下行动，以预备于当下行动所能延伸的历史前头或未来，为其准备条件，或者说站在历史的前头或未来看清所需要的条件，回过头来在当下行动中预备。行动即理论。行动是一种从说服中摆脱出来的决断。目标是在行动中才得以在场的，变为无条件的。它不会回过头去摧毁前提条件的目标认识，即使错了也要将错就错，行动本身自有纠错机制。”
综上所述。假设没有【CHH-Key】，虽然三方共识或愿景已明确，在具体实施时，一方的意识与认知依然需要干预需行动的一方意识和认知，实施行动，也许会存在以下描述：
  - 行动方通过再学习、再认知，反复磨练后，输出具体计划并实施行动，但需消耗不确定时间；
  - 行动方无法通过再学习、再认知，输出具体计划并实施行动，需要现实案例做参考效仿，才能确定虽然未完成再学习、再认知也能效仿制定计划；
  - 行动方具体行动后，在过程中并未达到预定成果，制定计划者被处罚，后续行动变成不确定或终止进一步行动；
  - 行动方具体行动后，在过程中发现现实与再学习，再认知始终存在差异，或过程中主观产生否定，采取止损措施而终止客观上实际可达成的目标。
https://zzhiai2020.feishu.cn/sync/WGyZdfKYzsnaOQbQoUFctiBBn7N

3.3. 陈大金描述

- 达成共识的目的，是为了触发一致的行动（更加高效），类似“知行合一”的效果。达成共识与触发行动、知和行都需要消耗能量；不在知上，就是行上。而先知后行、或者先行后知，都是一种非此即彼，需要消耗大量的成本（时间、试错等）。
- 类似的，将A拉到C或者A主动走到C所需的能量，应该远大于从B点推动三角形向前滚动所需要的能量。
- 更关键的是，这个过程是一个相互带动的过程，是一个相互切换立脚点的过程，是一个相互补位的过程，更是一个相互融合的过程。当三角的棱角被磨得更圆后，共识-提案-决策的过程将更加顺畅。
- 如果没有这个过程，将导致无尽的观望、犹豫、拉扯.... 行动缓慢、方向偏离，甚至决策错误。

4. 【CHH-Key】预期效果
本节一方面收集三人对【CHH-Key】预期设想，一方面记录相关输出。
4.1 黄常谦
4.1.1 描述
  - 输出任务归属其中一方，三方虽已形成共识，但输出方存在输出障碍，例如：知识不全，时间不足，用语不熟等等，其他两方切换到输出方立场，协同补齐输出，最终由输出方定案。
  - 各方对输出的确定性存在差异，例如前文“CPU计划”和“GPU计划”，建议首选“GPU计划”输出，目标指向“CPU计划”，即时修正，逐步演化。既不会中途锁死，也不会脱轨，造成目标无法实现。
  - 假设把个体行为偏离“道义”或“公义”定义为通俗语“黑化”，【CHH-Key】或可防止个体或个体控制的共同体“黑化”的可能。
4.1.2 输出
- 关于智在2025计划，陈大金如何面向全体股东和高管，采取集体行动，通过公开PK，择优共同体部署方案，并募集资源投入到共同体升级的部署工作中，黄常谦立足于陈大金立场，即采用角色扮演提供的方案：【链接 智在科技2025-共同体部署方案募集项目 】
4.2. 黄勇刚
4.2.1. 描述
  - 假设三人能提炼出自己的纠错、排序方法，愿意告诉另外两人。以平等的心态学习了解其他人的方法后，认可叠加产生的【CHH-Key】纠错、排序方法，认可经过这些方法组合的知识。
4.2.2. 输出
  - 【CHH-Key】可以自己的语言，重新描述可行方案（按PSMD入门目录第6条、含工作标准）。
  - 【CHH-Key】可以自己的纠错方法，利用真实世界中的数据，基于逻辑检验各种工作标准和标准模型之间的匹配关系，暴露现实中不成立的错配组合。
  - PSMD所有输出，【CHH-Key】可以消化的都可以由【CHH-Key】完成；【CHH-Key】无法吸收的、仍可以由黄勇刚完成。
  - 注意：【CHH-Key】的所有输出，陈大金本人也可以完成，PSMD对应接口一直开放且多次提出对接。

https://zzhiai2020.feishu.cn/sync/YKKbdQP3isNVkgbRl4XchYfbnKa

5. 【CHH-Key】issues
三人持续讨论【CHH-Key】的话题记录于本节。
5.1 Issue1：【CHH-Key】在“智在科技2025”项目中的角色描述
5.1.1 黄勇刚提议：【CHH-Key】为智在科技提供收费服务，推动智在科技使用PSMD团队委托过程中停顿的事项。
5.1.1.1 服务内容：
5.1.1.1.1 帮助智在科技整理现有规章和工作记录。
5.1.1.1.2 帮助智在科技使用PSMD入门目录第6条，提出“其它可行方案”。
5.1.1.1.3 帮助智在科技对PSMD入门目录内容提出解释的要求。搜索“十几分钟就可以解释清楚”、“可以找了几个孩子测试”，可以找到【提问-解释】这项工作中断的位置。（如果有提出而未解释的，请直接提醒黄勇刚）
5.1.1.2.【CHH-Key】报价=（C报价+H报价+H报价）+【CHH-Key】管理费用
5.1.1.2.1 黄勇刚报价：
- 填写本文档：
  - 2025.2.28.23:59:59之前，使用免费咨询接口。
  - 2025.3.1. 开始，使用PSMD价目表。
- 5.1.1.1.1. 、5.1.1.1.2. 原则上不参与。如果确实需要参与，这两项以及后续工作使用PSMD价目表。
- 5.1.1.1.3. 仍属于广州面谈，使用免费咨询接口。
- 其它事项默认使用PSMD价目表。

5.2 Issue2：关于【CHH-Key】虚拟人格
5.2.1. 黄勇刚提议：【CHH-Key】应符合民法典第三章第一节、第二节内容，其中涉及政府、法律事项改由本文档规定。



5.3 Issue3：关于【CHH-Key】运作机制
5.3.1. 黄勇刚提议：
- 【CHH-Key】可以分为若干层级，每层级由一组{事件:行动}构成。第n层的行动是产生第n-1层的内容。比如：
  - level 1:{早餐结束:刷牙}、{浅龋:补牙}、{中龋:补牙}
  - level 2:{浅龋:请张三修改level1内容}
  - level 3:{中龋:请李四医生选人替换level2的人员}
- 三人均可提交【CHH-Key】的修订案，经过沙盘推演后进行表决，三人同意即修改正式内容。
- 沙盘推演的过程为：
  - 一人为裁判，两人为推演者。
  - 裁判选择一些提议和正式内容组成受审方案，同一受审方案由三人轮换做裁判进行推演，直到三人都认为可以结束。结束前三人各写一段备注，作为沙盘推演工作记录的一部分，不可分割使用。
  - 推演者可以提出{事件}，按照受审方案确定{行动}，裁判按照真实世界评估{事件}的概率和{行动}的效果。直到全体推演者没有新的事件提出。比如（以前面例子内容level1、level2共4条为正式内容，level3的1条为新提议，合并共5条组成受审方案）：
    - 推演者1：事件是浅龋
    - 裁判：补牙。收集真实世界数据，支出为488元，时间为半天。
    - 裁判：联系张三，张三把{早餐结束:刷牙}修改为{正餐结束:刷牙}。
    - 裁判：收集真实世界数据，判定每天一次刷牙十年浅龋概率为95%、中龋概率90%，三次正餐都刷牙十年浅龋概率为50%、中龋概率40%。
    - 推演者2：事件是中龋+浅龋。
    - 裁判：补牙...
    - 裁判：联系李四医生，医生推荐王五。联系王五，王五把{正餐结束:刷牙}改为{起床:刷牙}、{睡前:刷牙}。
    - 裁判：收集真实世界数据，判定王五方案十年浅龋概率为70%、中龋概率50%。（效果不如张三方案）
    - ......{中龋:请李四医生选人替换level2的人员}表决没有得到全票，未能加入正式内容。
- 在约定范围内，正式内容在真实世界执行，即为【CHH-Key】的正式行为。自动按事件触发行为，不断滚动向前推进。三人根据实践反馈不断迭代升级【CHH-Key】内容。
- 三人报酬均按照PSMD工作计划及预算方案计算。
【CHH-Key】明文明账运行，所有工作记录均向全世界公开。

5.4 Issue4：【CHH-Key】自修订条款草案




6. 【CHH-Key】完成成果清单
1. 智在科技2025计划：共同体部署项目-工作方案 
```