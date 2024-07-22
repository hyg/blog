# 2024.07.22.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1a)。

<a id="index"></a>
- 07:45~08:14	ego: [schema manifest code v0](#20240722074500)
- 09:30~10:59	PSMD: [整理新版本term的manifest text](#20240722093000)
- 14:00~15:39	learn: [schema in ipld,reading time.](#20240722140000)
- 14:30~14:29	learn: [schema in ipld,codingh time.](#20240722143000)
- 16:00~17:19	PSMD: [升级knowledge模型](#20240722160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 4952 | 12748 | 3330 |
| PSMD | 7000 | 887 | 6113 | 630 |
| ego | 4000 | 1412 | 2588 | 540 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 120 | 1380 | 450 |
| raw | 500 | 150 | 350 | 180 |
| learn | 1500 | 1207 | 293 | 870 |
| js | 1200 | 1086 | 114 | 660 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：leran helia ipns,reading time.
  - learn的第2号事项：linkml, yaml-ld, reading time.
  - js的第2号事项：learn ssb db,reading time.
  - learn的第3号事项：Decentralized Identifiers

- 60分钟时间片：
  - ego的第1号事项：schema manifest code v0
  - raw的第1号事项：自动从网页提取营养成分表
  - learn的第1号事项：learn ipld,reading time.
  - PSMD的第2号事项：knowledge model(protocol.log -> protocol + effect)

- 90分钟时间片：
  - ego的第2号事项：schema level 2 schema for code v1
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。
  - learn的第5号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest code
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.22.[schema manifest code v0]任务&body=日期: 2024.07.22.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240722074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240722074500"></a>
## 07:45~8:44
ego: [schema manifest code v0]

- read draft\2024\07\20240721074500.md
- 在ego模型中增加信息资产：
    - stage（manifest type）列表
    - work flow列表（用于生成front）
    - 暂时写死在代码中。
- level是设定，写死在law和code中。
- task model中要增加level
    - task  level在starttask()中设定，使用与protocol和task的map。
- D:\huangyg\git\js.sample\schema\schema.js  未完成，登记30分钟，继续追加时间。
    - '60': schema manifest code v0
      readme: |
        - read 2024.07.21 07:45 draft
        - read 2024.07.22 07:45 draft

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.22.[整理新版本term的manifest text]任务&body=日期: 2024.07.22.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240722093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240722093000"></a>
##  09:30~10:59
PSMD: [整理新版本term的manifest text]

- read D:\huangyg\git\draft\2024\07\20240721160000.md
- D:\huangyg\git\PSMD\data\readme.term.md
- 提前做一点manifest code的工作。
    - D:\huangyg\git\js.sample\terms\readme.md
    - '90': 整理新版本term的manifest code
      readme: |
        - read 2024.07.22. 09:30 draft
        - read D:\huangyg\git\draft\2024\07\20240721160000.md

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.22.[schema in ipld,reading time.]任务&body=日期: 2024.07.22.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240722140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240722140000"></a>
## 14:00~14:29
learn: [schema in ipld,reading time.]

- https://ipld.io/docs/schemas/intro/
- https://github.com/ipld/js-examples
-ipld确实是linked data的拓展，以前的认识有偏差。codec和schema是独立的两部分。
    - https://ipld.io/docs/intro/primer/ ：IPLD data held in the Data Model can be marshalled into a serial form via a Codec -- and vice versa: serialized data can be unmarshalled to Data Model form via a Codec.
    - codec 是用来把模型序列化、反序列化的。
- ipld用CID代替url实现linked data，从而为去中心化的应用提供数据层支持。
- https://github.com/ipld/js-ipld-dag-cbor
    - ipld-dag-cbor看起来就是个序列化工具。
    - https://cbor.io/
        - cbor和protobuf也是二进制序列化语言。
        - 自带字段名。
    - DAG：Directed Acyclic Graph
- 重点看schema
    - https://ipld.io/docs/schemas/
    - https://www.npmjs.com/package/@ipld/schema
    - https://github.com/ipld/js-ipld-schema
    - 从示范代码看，这是真的schema language。字段名和数据分离的做法可以大幅减少数据量。
- 登记100分钟，追加时间：
    - '60': learn ipld,reading time.
      readme: |
        - read 2024.07.22 14:00 draft
        - https://ipld.io/docs/intro/primer/
        - 彻底弄明白CID代替url实现linked data的实现细节。
      bind:
        - '60': schema in ipld,coding time.
          readme: |
            - https://www.npmjs.com/package/@ipld/schema
            - https://github.com/ipld/js-ipld-schema
            - read 2024.07.22 14:00 draft
        
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.22.[schema in ipld,codingh time.]任务&body=日期: 2024.07.22.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240722143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240722143000"></a>
## 14:30~14:59
learn: [schema in ipld,codingh time.]

- 资料还没有看完，任务顺延。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.22.[升级knowledge模型]任务&body=日期: 2024.07.22.%0D%0A序号: 12%0D%0A手稿:../../draft/2024/07/20240722160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240722160000"></a>
## 16:00~16:59
PSMD: [升级knowledge模型]

- read D:\huangyg\git\draft\2024\07\20240720160000.md
- 旧版term模型中增加event、action应该不能实现新版的UI设计。
- knowledge模型和protocol模型的差异
    - protocol：浏览、签署、执行、修订。
    - knowledge：因->果，例如term to error。
        - 已经被term的depend、effect、together等字段代替。
- knowledge用于选择protocol
    - 前置protocol执行结果 -> 后续protocol+预后
    - protocol.log -> protocol.id + effect{string,int}
- 更根本的定义，knowledge包括schema，包括manifest law、code。
- 再进一步，knowledge应该能表达FSM的一组定义，{status+log,event,next status+log, action}。或者把一个子FSM看作一个status：{FSM+log,event queue,next FSM+log, action queue}。从而形成嵌套的知识体系。
    - 但不能绑定在FSM一种表达形式上。
- ”存在这样的情况xxxx“，应该对应schema，但是定义的表达上还要继续研究。仅仅是一个human readable字段，也不符合PSMD的需求。”xxxx情况下对外界会有yyyy反应“也许更适合，这是FSM的表达方式。
- ”某某属于xxx类型的情况“，所有知识图谱语法都用来表达这种知识。
- ”xxxx情况应该yyyy处理，可以实现zzzz效果“，知识图谱语法很少关注这种知识。可能表现为网页中的一段写死的话，其中部分名词可以引用定义。FSM擅长表达这类知识。
- PSMD的主要目标是支撑共同体建模和部署，其次是引导个人领域向深层拓展。是专用的知识库和工具库，而不是无所不包的知识库。
    - protocol.log -> protocol + effect 是PSMD最关心的知识，也为交流和思考提供锚点。
    - protocol + event -> log + action 也是重要知识，但是在protocol中表达。
    - protocol之间的嵌套、继承关系，可以加快经验积累。
- 追加todo项：
    - '60': knowledge model(protocol.log -> protocol + effect)
      readme: |
        - 2024.07.22 16:00 draft
