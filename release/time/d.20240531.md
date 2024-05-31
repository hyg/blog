# 2024.05.31.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[新版个人模型的view和共同体接口](#20240531074500)  
- 14:00	[重新设计S2状态下的学门基本管理制度](#20240531140000)  
- 16:00	[新版个人模型的metadata](#20240531160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 14472 | -1197 | 2250 |
| PSMD | 7000 | 6511 | 489 | 570 |
| learn | 1000 | 1077 | -77 | 720 |
| ego | 3000 | 4134 | -1134 | 330 |
| js | 1375 | 1080 | 295 | 390 |
| xuemen | 600 | 1196 | -596 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：继续学习promise api
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - js的第2号事项：同npm发布包
  - learn的第2号事项：寻找可编程的,去中心化的信息发布方式

- 60分钟时间片：
  - learn的第1号事项：熟悉知识库语法
  - ego的第1号事项：在season metadata中实现浮动时间表，修改日计划功能。
  - PSMD的第2号事项：了解blawx的语法
  - xuemen的第4号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

- 90分钟时间片：
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - learn的第7号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：新版个人模型的view和共同体接口
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第8号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.31.[新版个人模型的view和共同体接口]任务&body=日期: 20240531%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240531074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240531074500"></a>
## 7:45~10:59
新版个人模型的view和共同体接口

- 模型改名2406。todo项回到waitinglist。

## 基本概念
以下是entity在外部记录中使用的概念

- 物体|thing: 与知识图谱的thing定义相同。(https://schema.org.cn/Thing)
- 主体|entity: 具有认知(cognize)行为的物体(thing)。
    - event: 与知识图谱的event定义相同。（https://schema.org.cn/Event） 
    - promise：承诺的行为。
        - event的所有字段。
        - effect：行为的后果，一组event。
    - raw: entuity还没有认知的自身行为的集合。
    - 知识|knowledge: 对推理的描述，包括描述行为的后果。
- ego: 通过创造vat、在vat中设立主体(entity)来认知的entity。
    - error
    - offer
    - protocol
       - spilit
       - joint
    - vat: 支持entity的思想和行为的知识（定义、概念、假设等等）的thing。
- 认知|cognize: 认知是描述认知对象的行为。认知对象可以是thing和entity，包括自身。
- 行为：
    - 包括推理
    - 包括自身的行为
- 协议|protocol: 多个entity的共同认知。
    - 对thing的所有权是entity行为的一种认知。
    - 要约|offer: 是一个entity单方面认可的protocol。发布要约是一种行为，因此表示知识进入实践。
- 元认知|meta: 认知推理和行为所使用的知识（概念、定义、假设等等）。
- 容器|vat: 为entity的推理和行为提供知识的protocol。
    - 以protocol替换原有知识；
    - 先有明确的知识，再有使用这些知识的推理和行为；
    - 通过替换知识来改变推理和行为。
- 分立|spilit: 一个entity产生多个entity的行为。
- 联合|joint: 多个entity产生一个entity的行为。
- 共同体|community：由多个主体joint合并而成的主体。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.31.[重新设计S2状态下的学门基本管理制度]任务&body=日期: 20240531%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240531140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240531140000"></a>
## 14:00~15:29
重新设计S2状态下的学门基本管理制度

- 先完成个人模型再重新启动共同体部分的任务。回到waitinglist。
---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.31.[新版个人模型的metadata]任务&body=日期: 20240531%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240531160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240531160000"></a>
## 16:00~16:59
新版个人模型的metadata

- ego
    - thing.yaml
    - entity.yaml
    - ego.yaml
    - data
        - event
        - promise
        - error
            - error.*.yaml
        - raw
        - offer
            - term.spilit.yaml
            - term.joint.yaml
            - term.default.yaml
        - protocol
            - term.ego.yaml
        - vat
    - src
    - view
        - ego.md
        - ego.html
        - raw.md
        - raw.html
