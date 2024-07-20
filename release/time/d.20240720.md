# 2024.07.20.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~10:59	learn: [拟制说、目的财产说、实在说](#20240720093000)
- 14:00~14:29	js: [text->id,protobuf-javascript](#20240720140000)
- 14:30~14:59	js: [用day.js改写util.js](#20240720143000)
- 16:00~16:59	PSMD: [设计term模型中event、action字段](#20240720160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 2887 | 14813 | 3120 |
| PSMD | 7000 | 402 | 6598 | 690 |
| ego | 4000 | 952 | 3048 | 240 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 540 |
| raw | 500 | 90 | 410 | 180 |
| learn | 1500 | 782 | 718 | 810 |
| js | 1200 | 541 | 659 | 660 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：schema in ipld,reading time.
  - js的第1号事项：leran helia ipns,reading time.
  - learn的第2号事项：linkml, yaml-ld, reading time.
  - js的第2号事项：learn ssb db,reading time.

- 60分钟时间片：
  - PSMD的第1号事项：设计条款的可执行机制
  - ego的第1号事项：整理task及其相互关系
  - raw的第1号事项：自动从网页提取营养成分表
  - ego的第2号事项：用js代码完成日小结后的git操作。

- 90分钟时间片：
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - PSMD的第5号事项：以1406为例检查知识图谱和blawx的语法
  - learn的第5号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - PSMD的第6号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - PSMD的第2号事项：data -> schema 迭代范例
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.20.[拟制说、目的财产说、实在说]任务&body=日期: 2024.07.20.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240720093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240720093000"></a>
##  09:30~10:59
learn: [拟制说、目的财产说、实在说]

- https://www.legal-theory.org/?mod=info&act=view&id=10857
    - 大陆法系在理论上已经形成了三种比较成熟的法人本质学说，即拟制说、实在说和否认说。
    - 关于法人本质的这三种承诺，均选取立足于法人外部研究法人的观察角度，均着眼于解决法人何以成为民事主体以及这种民事主体具有何种特征的问题，对于法人与外部关系具有一定的解释力，但对于法人的内部组织关系则无法作出解释和评判。如它们均不能合理解释为什么公司股东在股份平等的前提下所享有的权利是不平等的，不能解释为什么在特定条件下公司或公司的某些股东要承担以公平合理的价格购买其他股东股份的义务，不能解释为什么公司在采取某些重要行为前应当获得股东的同意，虽然法人否认说向解决这些问题的正确方向迈出了一步。鉴于目前法人的主体性已经成为一个不争的事实，以至于有的学者认为，关于法人本质的分歧已经成为一个无益的争论。 
    - 和事佬的和稀泥文章。
- https://baike.baidu.com/item/%E6%B3%95%E4%BA%BA%E5%AD%A6%E8%AF%B4/22469827
    - “拟制说”、“否认说”、“实在说”是认识的三个历史阶段。
    - 实在说又分二派：（1）“有机体说”。认为与自然人一样，法人有自己的表达意思的机关，自己姓名、法人机关和机构是法人机体的各种系统，因此法人应成为社会有机体。（2）“组织体说”。认为无论是法人或自然人都是法律规范赋予的人格，在社会法律制度中，任何民事主体都是构成社会经济生活的基本组织单位。这弥补了“有机体说”的不足，为世界上多数民法学者所承认。
    - 法人的人格授予，来自另一些法人。互相认可在表达意思方面的兼容性才是根本。更进一步，互相认可、互相兼容也可以通过授权和集中完成，不一定是每个主体都要直接授予。
    - https://baike.baidu.com/item/%E6%B3%95%E4%BA%BA%E6%8B%9F%E5%88%B6%E8%AF%B4/6554462
    - https://baike.baidu.com/item/%E6%B3%95%E4%BA%BA%E5%90%A6%E8%AE%A4%E8%AF%B4
    - https://baike.baidu.com/item/%E6%B3%95%E4%BA%BA%E5%AE%9E%E5%9C%A8%E8%AF%B4
        - （3）社会作用说。这是由日本学者我妻荣提出的。他认为，法人可独立承担社会价值，有适于具有权利能力的社会价值。社会作用说反映了现代社会中各类经营主体已不是单纯追逐自身利益的现实，他们的存在既对社会经济的发展起着重要的推动作用，也对社会负有越来越多的责任。法律上确认这些社会团体的地位，不仅有助于极大的发挥法人组织的积极作用，而且也有助于从法律责任上确认法人的社会责任。
- http://iolaw.cssn.cn/zxzp/201601/t20160104_4638079.shtml
    - 法人到底是拟制的还是实在的，很大程度上并非法学问题，而是社会学问题。然而，对法人性质的定位，却对诸多民法学理论和制度有深远影响。在事实层面，拟制说与实在说的根本界限在于是否承认法人在社会生活中已经成为和自然人相同的独立主体；在价值层面，则为法人是否值得与自然人受同等法律保护？两者最终都可归结为：法人到底只是一种手段（拟制说），还是同时也是一种目的（实在说）？在比较法上，各国民法理论与实践都没有采取单一的拟制说或实在说，而是以一种学说为主，兼顾另一种，既满足国家对法人成立的监控要求，也为法人的社会活动提供行为规范。鉴于我国对法人过度管制的现实，我国未来的民法典应以实在说为基础，重点规范法人的团体性要件，确认法人类型法定原则，对所有类型的法人，均采登记生效主义。但是，在法人成员对外活动的代理、法人格否认等方面，则以拟制说为基础。

- 法律和IT界的思考更侧重实用。哲学界的更根本，但深度还是不够，也缺乏形式化的工具。知识图谱因为侧重UI而不是代码，从其它领域借用术语方面很大方，对行为能力思考不多。需要新的IT机制衔接知识和行为。
- 法人来自认识世界时采用的基础假设。
    - 这些假设定义了主体自身（及其他主体）具有的意思能力、行动能力，决定了主体之间可能的相互关系，隐含了各种能力分立、合并的可能策略。这些可能的策略在不同外界条件下显示出不同的生存能力，被发现并命名为法人。
        - 随着对世界认识的加深，对主体的定义也不断更迭，法人或替代概念也随之调整。有可能发现真正意义上的共同意识。
    - 发现和命名的过程，可以从对外认识世界，转向对内认识自我。可以尝试提炼其中经验，转化为IT工具促进各主体自觉地进行，促进主体之间的关系扩展到更高程度的自觉和解放的基础上。
    - 这些基础假设对认识的影响，远远不止其中暗示的法人概念。穷尽IT技术所能产生的促进作用，也是有限的。
- 在ego项目设立认识自我的子项目，积累假设与行为的关系数据，具体化为工具之后分别在PSMD、infra等项目设立子项目。
    - '60': 整理task及其相互关系
      readme: |
        - readme 2024.07.20. 09:30 draft

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.20.[text->id,protobuf-javascript]任务&body=日期: 2024.07.20.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240720140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240720140000"></a>
## 14:00~14:29
js: [text->id,protobuf-javascript]

- https://protobuf.com.cn/overview/
    - 需要用protoc把*.proto文件编译成目标语言js。
    - 同时npm install google-protobuf
    - 然后可以在代码中require编译结果
- https://github.com/protocolbuffers/protobuf-javascript
    - protobuf.dev官方的
- https://github.com/sirikata/protojs
- protobuf是一种跨语言的shcema语言
    - linkml也可以输出protobuf
        - gen-proto personinfo.yaml > personinfo.proto
        - https://linkml.io/linkml/generators/protobuf.html
    - protobuf to json schema
        - https://github.com/chrusty/protoc-gen-jsonschema
    - json schema to protobuf
        - https://github.com/okdistribute/jsonschema-protobuf
- 继承等语法不全，不如linkml和json schema灵活。暂时不用。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.20.[用day.js改写util.js]任务&body=日期: 2024.07.20.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/07/20240720143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240720143000"></a>
## 14:30~14:59
js: [用day.js改写util.js]

- https://day.js.org/
- npm install dayjs
- D:\huangyg\git\ego\src\util.1.js
```
D:\huangyg\git\ego\src>node util.test.js
2024-07-08T17:00:26+08:00
time: Mon Jul 08 2024 17:00:26 GMT+0800 (中国标准时间)
✔ make meta file id (1.3484ms)
✔ get today str (1.6635ms)
✔ get time from str (2.0133ms)
ℹ tests 3
ℹ suites 0
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 12.3119
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.20.[设计term模型中event、action字段]任务&body=日期: 2024.07.20.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240720160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240720160000"></a>
## 16:00~16:59
PSMD: [设计term模型中event、action字段]

- readme: |
  - 结合text字段生成UI行为。
  - 业务逻辑的片段：FSM分立、合并的方法。
  - 或者另一个模型，连接term、event、action。
- FSM还是太具体了，需要设计一套兼容各种行为模型的接口，然后把FSM作为一种instance。
- 先实现FSM，以后实现其它模型后，再一并设计它们的通用模型。

### 方案对比

- 方案一：term仅仅作为条款文本，另件一个模型表达条款文本和行为之间关系。
- 方案二：扩展term模型，把条款的文本、行为都用term表达。
- term是文本item组成的树形结构，行为是绑定在每一个叶子term，还是只能统一绑定在最终用于签署的树根term上？
    - 这个特性不影响方案选择，都是树根绑定的行为优先。都不能由子条款行为组合产生整体行为，都需要综合考虑。
- 相同文本在不同背景下，绑定不同的行为。
    - 方案一更灵活，数据量更小。方案二需要定义不同的term instance。

### 方案一实现

- protocol schema: D:\huangyg\git\PSMD\data\protocol.model.yaml
```
D:\huangyg\git\PSMD\data>gen-json-schema protocol.model.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
{
    "$defs": {
        "Datatype": {
            "description": "",
            "enum": [
                "text",
                "law",
                "code",
                "unknown"
            ],
            "title": "Datatype",
            "type": "string"
        },
        "Protocol": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "data": {
                    "items": {
                        "$ref": "#/$defs/Protocoldata"
                    },
                    "type": "array"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "readme": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ],
            "title": "Protocol",
            "type": "object"
        },
        "Protocoldata": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "id": {
                    "type": "string"
                },
                "type": {
                    "$ref": "#/$defs/Datatype"
                }
            },
            "title": "Protocoldata",
            "type": "object"
        }
    },
    "$id": "https://raw.githubusercontent.com/hyg/ego/vat/data/protocol",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": true,
    "metamodel_version": "1.7.0",
    "title": "protocol",
    "type": "object",
    "version": null
}
```
```
D:\huangyg\git\js.sample\schema>node protocol
schema: {
  '$defs': {
    Datatype: {
      description: '',
      enum: [Array],
      title: 'Datatype',
      type: 'string'
    },
    Protocol: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      required: [Array],
      title: 'Protocol',
      type: 'object'
    },
    Protocoldata: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      title: 'Protocoldata',
      type: 'object'
    }
  },
  '$id': 'https://raw.githubusercontent.com/hyg/ego/vat/data/protocol',
  additionalProperties: true,
  title: 'protocol',
  type: 'object'
}
data: {
  id: 123456,
  name: '入门目录',
  data: [
    { type: 'text', data: 'sample text\nsample text 2\n' },
    { type: 'law', id: '9d12877c' },
    { type: 'code', path: '..\\src\\protocol.123456.js' }
  ],
  readme: 'sample readme\nsample readme 2\n'
}
validate pass
```
- protocol是knowledge的一种，数据结构可以复用。先进入实践，实际体会后再升级。
    - '60': 升级knowledge模型
      readme: |
        - read 2024.07.20 16:00 draft
