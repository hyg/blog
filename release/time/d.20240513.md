# 2024.05.13.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[freenet的contract](#20240513074500)  
- 09:30	[整理S2状态下基本管理制度的metedata](#20240513093000)  
- 14:00	[修订入门目录term.9d12877c，准备实际使用。](#20240513140000)  
- 14:30	[实现todo项的多层结构](#20240513143000)  
- 16:00	[五月报税](#20240513160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 9710 | 3565 | 2580 |
| PSMD | 7000 | 4916 | 2084 | 585 |
| learn | 1000 | 472 | 528 | 750 |
| ego | 3000 | 2184 | 816 | 615 |
| js | 1375 | 705 | 670 | 300 |
| xuemen | 600 | 1046 | -446 | 210 |
| raw | 300 | 357 | -57 | 120 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - ego的第1号事项：在draft+season+task metadata基础上设计有互动的总结功能
  - raw的第1号事项：debug-diff mode较大天数返回空数据，创建三个R文件。
  - js的第2号事项：自动收发email。
  - learn的第2号事项：YARRRML

- 60分钟时间片：
  - PSMD的第1号事项：按照可交互deploy的模式整理入门目录term.9d12877c措辞
  - js的第1号事项：可交互的静态网页
  - learn的第1号事项：github的actions,workflow,job脚本语法
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。

- 90分钟时间片：
  - PSMD的第6号事项：整理近期手稿。
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---

[top](#top) | [index](#index)
<a id="20240513074500"></a>
## 7:45~8:44
freenet的contract

- https://docs.freenet.org/contract-interface.html#contract-interface
    - state、delta、param三个概念可以借鉴。
    - state、delta可以先验证，再真的改变state
    - State Summary概念：state -> State Summary -> delta -> update current state
    - https://github.com/freenet/freenet-core/issues/167  一份合同把另一份合同的state作为自己验证delta的影响因素之一。
- https://docs.freenet.org/components/contracts.html
    - Freenet is essentially a global decentralized key-value store where keys are WebAssembly code called Contracts. Contracts are stored in the network, along with their data or "state". The contract controls what state is permitted and how it can be modified, and also how to efficiently synchronize state between peers.
    - 合同是key，state是value。

- 从概念设定上看，很适合PSMD和infra。
- 实际使用中需要长时间运行才能连接上其它节点，对成员的体验不是很好。
- 可以作为备用方案，一旦平时用的中心化方式失灵就自动启用，保持业务低速持续。

追加todo项：
    - '195': rust入门
      bind: 
        - '195': 开发reenet Contracts sample
          readme: |
            - https://docs.freenet.org/components/contracts.html
            - https://docs.freenet.org/introduction.html

---

[top](#top) | [index](#index)
<a id="20240513093000"></a>
##  9:30~10:59
整理S2状态下基本管理制度的metedata

- 整理相关term
    - name: 学门科技 id: e6f0caec
        - name: 章程部分条款 id: 2e4f11cb 只留这条就行，现在的十五、十八、二十条都可以删去。
    - name: 章程部分条款S1 id: 6147e7dd
        - 其中第十四条的termid指向 name: 1609-利益分配-4 id: 814f76cb ，应该是commit的时候被污染了。
        - 补回name: 设置董事 id: ecde06c5 替换6147e7dd的第十四条
    -  清理了部分章节名称最后的点 "."
- 清理后基于 e6f0caec 添加后续内容。
- xuemen git库内容和1609的差别：
    - ISU独立使用IST，有独立的压力传递机制，有利于保持节俭。
        - 但只限于后勤和政府接口。
    - 临时模型 对应 规章制度，只有60天有效期。董事需要在次月提交审议报告，而不是只备案。
    - kernel的职能定义太简略
        - 对产品、外部环境和成员个人模型（缺陷）的分析，以及输出成果的定义不明确。当时对这些对象的理解还不够深刻，现在可以加深。

- 中间有其它事务插入，没有完成工作。追加todo项：
    - '60': 整理kernel、ISU、JPU之间的关系，厘清概念。
      readme: |
        - 对产品、外部环境和成员个人模型（缺陷）的分析，以及输出成果的定义不明确。当时对这些对象的理解还不够深刻，现在可以加深。
        - 抓住1609模型的异同，吸纳1609的决策架构，保留xuemen模型(尤其是2-2.核心模型)相对激进的部分。
    - '90': 重新设计S2状态下的学门基本管理制度
      readme: |
        - 基于term.e6f0caec整理
    - '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

---

[top](#top) | [index](#index)
<a id="20240513140000"></a>
## 14:00~14:29
修订入门目录term.9d12877c，准备实际使用。

### 需求

- 引用一段自述，先按照附件21核实，然后在按照附件20的方式补充信息。形式上应该能显示引用的自述，并且追加一段注释，衔接对方自述和附件21措辞。
- 在附件20的界面，应该再次引用对方的自述，以及对方放弃按附件21核实的选择，并给出后退出口。
    - 只有对方放弃核实自述的情况下，请对方针对附件30~34的条件补充材料，措辞上明确符合、不符合的条件。
- 在针对附件30~34的界面上，说明这些条件对解决方案有影响。并且给出不同意见的出口：我认为这个条件对问题没有影响，怎么把这个不同意见从个人转成多人共识。
- 在附件30~34的补充信息基础上做出判断后，基本可以做出判断：
    - 21-no：
        - 20-yes：
            - 30-no：default
            - 30-yes，31~34-no：default+1406
            - 30~34-yes：
                - 42-yes：
                    - 43-yes：1609
                    - 43-no：1609
                - 42-no：
                    - 43-yes：default+1406
                    - 43-no：default
        - 20-no：default
    - 21-yes：与20-yes分支相同。
- 附件43没有使用上。

### 数据结构和代码

- 问题和自述，设计一个单独的metadata，以它的id为参数调用入门目录 deploy 页面。
- 入门目录 deploy 页面按照 step字段 弹出问题，收集信息、签署条款，直到部署结束。
    - 这个过程，受托者作为成员之一参与审议、核实。
    - 部署结束产生的cod或者cod+PSMD委托合同。
- step字段的每一步，应该包括以下信息：
    - 需要的初始参数，比如问题和自述；
    - 界面正文、注释；
    - 用户操作，运用页面alarm、confirm、prompt；
    - 选择核实还是对赌方式进行下去：
        - 核实：信息打包发给受托者，进行审议、核实。
        - 对赌：直接进入下一步。
- 条款应该有两种形式：
    - 核实：规定人员核实后判断适用；
    - 对赌：把承诺写入条款，成为附条件的条款。
- deploy的自动分发：
    - 通过email、网页循环推动。
    - 通过同一页面附主语提示。
- 每个知识或判断都提供不同意入口，选择遵守附件33的索取依据，否则提示无法继续讨论。

- 登记60分钟，追加todo项：
    - '60': 可交互的静态网页
      readme: |
        - 根据同域名的metadata进行提示、选择、接收补充信息并跳转页面
        - 根据不同域名的js进行类似操作。
    - '60': 按照可交互deploy的模式整理入门目录term.9d12877c措辞

---

[top](#top) | [index](#index)
<a id="20240513143000"></a>
## 14:30~14:59
实现todo项的多层结构

- 暂时维持makedaydraft(), makedayplan() 分工。
- 修改makedaydraft()中删除season metadata的部分。
- 执行结果（节选）：
```
delete the job from PSMD:
整理近期手稿。
makedaydraft()> before delete todo item, waitinglist:
task: ego
name: 在draft+season+task metadata基础上设计有互动的总结功能
id: 0

makedaydraft()> before delete todo item:
- '30': 在draft+season+task metadata基础上设计有互动的总结功能
  bind:
    - '90': 代码实现，有互动的总结功能。
    - '60': task之间结算体系设计。
    - '195': 在整理近期手稿之后，修订个人模型。
- '60': 在season metadata中实现浮动时间表，修改日计划功能。
- '30': 整理废弃git库，包括本地和远程。
  readme: |
    参考5.3.14:00 draft
- '30': 设计ego.mars22.com 发布内容。
  bing:
    - '60': /release/entry.html 读取 markdown和metadata 并显示。
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。

makedaydraft()> after delete todo item:
- '90': 代码实现，有互动的总结功能。
- '60': task之间结算体系设计。
- '195': 在整理近期手稿之后，修订个人模型。
- '60': 在season metadata中实现浮动时间表，修改日计划功能。
- '30': 整理废弃git库，包括本地和远程。
  readme: |
    参考5.3.14:00 draft
- '30': 设计ego.mars22.com 发布内容。
  bing:
    - '60': /release/entry.html 读取 markdown和metadata 并显示。
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
```

登记70分钟，追加todo项：
    - '60': 重新设计ego.js的命令行参数，合并函数，整理代码。

---

[top](#top) | [index](#index)
<a id="20240513160000"></a>
## 16:00~16:59
五月报税

- 使用云票助手代替原来的开票软件，完成发票抄报和反写。
- 云票助手的数电部分需要申报才能启用，网站视频没有涉及这个步骤。

登记30分钟，剩下时间再看看14点的入门目录。
