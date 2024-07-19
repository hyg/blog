# 2024.07.19.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~10:59	ego: [用linkml和json schema沿信息接口向内建模。](#20240719093000)
- 14:00~15:14	learn: [learn gemini protocol](#20240719140000)
- 14:30~15:29	js: [debug helia/ipns](#20240719143000)
- 16:00~16:59	ego: [实践检验一下stage、level、branch、error等task type。](#20240719160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 2887 | 14813 | 3345 |
| PSMD | 7000 | 402 | 6598 | 690 |
| ego | 4000 | 952 | 3048 | 180 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 180 |
| learn | 1500 | 782 | 718 | 930 |
| js | 1200 | 541 | 659 | 720 |

---
waiting list:


- 30分钟时间片：
  - js的第12号事项：text->id,protobuf-javascript
  - js的第13号事项：用day.js改写util.js

- 60分钟时间片：
  - PSMD的第1号事项：设计term模型中event、action字段
  - ego的第1号事项：用js代码完成日小结后的git操作。
  - learn的第1号事项：schema in ipld
  - js的第1号事项：leran helia ipns

- 90分钟时间片：
  - learn的第3号事项：拟制说、目的财产说、实在说
  - PSMD的第5号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第6号事项：term metadata的序号，分为显示序号和唯一id两种。
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：data -> schema 迭代范例
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.19.[用linkml和json schema沿信息接口向内建模。]任务&body=日期: 2024.07.19.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240719093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240719093000"></a>
##  09:30~10:59
ego: [用linkml和json schema沿信息接口向内建模。]

- 中间有protocol这一步
    - view to protocol->action
    - protocol to model+code->action


### PSMD非标委托（课题研究）接口

- protocol
```
请尽量简洁地描述问题，附带所涉及的模型、部署方案、工作记录、工作计划，发给产品经理（huangyg@xuemen.com）。
在开始工作前付清以下费用（多次付款的首付款不少于以下价目）。
......
```
    - 收齐以上材料后，按照PSMD入门目录[条款 9d12877c](https://hyg.codeberg.page/PSMD/@master/view/term.9d12877c.html) 处理。
- model
    - 旧版的term instance：D:\huangyg\git\PSMD\data\term.9d12877c.yaml 主要是生成term view。
    - 新的模型，目标是instance可以自动产生action，结合到合同、决议、工作表单（纸质、软件）中。
    - 自检和提交材料过程合并。以附件20为例：

1. 显示附件20的文本
1. 用户选择签署或者放弃
    1. 签署则进入材料提交环节
        1. 逐项材料（信息资产）按照model对instance 进行 validate。
        1. 自动生成工作提交材料的入口，供签署人今后使用。背后也是model对instance进行validate。
    1. 放弃则跳转到default模型，从第一步显示文本开始。

    - 附件20 metadata （instance）的数据包括：
        - 文本内容
        - 签署后的代码：提交信息资产
            - 整理过去信息资产
            - 今后提交信息资产
            - 签署后欠交的处理
        - default模型入口

- linkml
    - https://linkml.io/linkml/schemas/inlining.html#inlining-as-simple-dictionaries
    - D:\huangyg\git\js.sample\terms\term.model.yaml
- jscon schema,ajv
    - D:\huangyg\git\js.sample\terms\term.model.json
    - D:\huangyg\git\js.sample\terms\term.js
```
D:\huangyg\git\js.sample\terms>node term
schema: {
  '$defs': {
    Errorrelation: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      title: 'Errorrelation',
      type: 'object'
    },
    Placeholder: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      title: 'Placeholder',
      type: 'object'
    },
    Term: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      required: [Array],
      title: 'Term',
      type: 'object'
    },
    Termitem: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      title: 'Termitem',
      type: 'object'
    }
  },
  '$id': 'https://raw.githubusercontent.com/hyg/ego/vat/data/term',
  additionalProperties: true,
  title: 'term',
  type: 'object'
}
data: {
  name: '入门目录202404151600',
  id: '9d12877c',
  interface: {
    '<term.9d12877c.term.20>': '附件20',
    '<term.9d12877c.term.21>': '附件21',
    '<term.9d12877c.term.30>': '附件30',
    '<term.9d12877c.term.31>': '附件31',
    '<term.9d12877c.term.32>': '附件32',
    '<term.9d12877c.term.33>': '附件33',
    '<term.9d12877c.term.34>': '附件34',
    '<term.9d12877c.term.42>': '附件42',
    '<term.9d12877c.term.43>': '附件43',
    '<term.9d12877c.url.1>': '<a href="mailto:huangyg@mars22.com?subject=其他可行方案&body=name: 入门目录202404151600%0D%0Aid: 9d12877c%0D%0A---请勿修改以上内容 从下一行开始写您的方案---%0D%0A">发送电子邮件</a>​'
  },
  item: [
    {
      localid: '',
      text: '首先自检能否遵守<term.9d12877c.term.20>、<term.9d12877c.term.21>，针对不同情况给出建议如下：\n'
    },
    {
      localid: '1',
      text: '条件：如果工作中不能按照<term.9d12877c.term.20>核实情况，也不能按照<term.9d12877c.term.21>提供依据。\n' +
        '建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。考虑使用PSMD的团队委托。\n'
    },
    {
      localid: '2',
      text: '条件：如果工作中能按照<term.9d12877c.term.20>核实情况，按照<term.9d12877c.term.20>提供依据。\n' +
        '建议：针对<term.9d12877c.term.30>、<term.9d12877c.term.31>、<term.9d12877c.term.32>、<term.9d12877c.term.33>、<term.9d12877c.term.34>安排核实。\n'
    },
    {
      localid: '3',
      text: '条件：如果不符合<term.9d12877c.term.30>。\n' +
        '建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。考虑使用PSMD的团队委托。\n'
    },
    { localid: '4', termid: '6c2eb032', map: [Object] },
    { localid: '5', termid: '7db5064c', map: [Object] },
    { localid: '6', termid: '4b12ac08', map: [Object] },
    { localid: '附件20', termid: 'dbe32f79' },
    { localid: '附件21', termid: 'd0111eb4', map: [Object] },
    { localid: '附件30', termid: '91ff9448' },
    { localid: '附件31', termid: '6d206b54' },
    { localid: '附件32', termid: '9e6bc34f', map: [Object] },
    { localid: '附件33', termid: '600f6f80' },
    { localid: '附件34', termid: '12119600' },
    { localid: '附件42', termid: 'cb4ab0e9' },
    { localid: '附件43', termid: '5ab2b2ba' }
  ]
}
validate pass
```
- event,action字段才是真正需要扩展的，今天只是把旧版term的model整理出来。
    - '60': 设计term模型中event、action字段
      readme: |
        - 结合text字段生成UI行为。
        - 业务逻辑的片段：FSM分立、合并的方法。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.19.[learn gemini protocol]任务&body=日期: 2024.07.19.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240719140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240719140000"></a>
## 14:00~14:29
learn: [learn gemini protocol]

- https://geminiprotocol.net/docs/faq.gmi
- 看起来Ghoper只文字中心的，和web并行的早期协议。
- gemini在ghoper基础上改进，2019诞生。
- gemtext
    - https://gemini.flounder.online/docs/gemtext.gmi
    - https://hexdocs.pm/gemtext/Gemtext.html
- gemini适合轻量、纯文本内容发布，依赖中心化服务器。目前没有需求。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.19.[debug helia/ipns]任务&body=日期: 2024.07.19.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/07/20240719143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240719143000"></a>
## 14:30~14:59
js: [debug helia/ipns]

- try json
	- https://helia.io/modules/_helia_json.html
	- npm i @helia/json
	- npm i multiformats
	- add : const helia = await createHelia()
	- j.put() --> j.add()
```
huangyg@dev:~/git/js.sample/helia$ node json.1
cid: CID(bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea)
{ hello: 'world' }
```
	- windows：bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea 
		- 浏览：404
		- 检查：
```
JSON
CID	bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea
LINKS	0
DATA	
{hello: "world"}
```
	- 说明add()之后内容就发布出去了，不需要helia.start()之类的操作。
- ipns：
	- 用cat()读取cid的内容。
```
huangyg@dev:~/git/js.sample/helia$ node ipns
helia: HeliaP2P {
  blockstore: BlockStorage {
    lock: {
      readLock: [AsyncFunction: readLock],
      writeLock: [AsyncFunction: writeLock]
    },
    child: NetworkedStorage {
      child: [IdentityBlockstore],
      hashers: [Object],
      log: [Function],
      logger: [Object],
      components: [Object],
      started: true
    },
    pins: PinsImpl {
      datastore: [MemoryDatastore],
      blockstore: [NetworkedStorage],
      dagWalkers: [Object]
    },
    started: true
  },
  datastore: MemoryDatastore {
    data: Map(4) {
      '/pkcs8/self' => [Uint8Array],
      '/info/self' => [Uint8Array],
      '/version' => [Uint8Array],
      '/peers/bafzaajaiaejcb5rlxdomlcnp74cmrwfc6m7pwpqzzodlpeabu4utyb4yst37q34o' => [Uint8Array]
    }
  },
  pins: PinsImpl {
    datastore: MemoryDatastore { data: [Map] },
    blockstore: NetworkedStorage {
      child: [IdentityBlockstore],
      hashers: [Object],
      log: [Function],
      logger: [Object],
      components: [Object],
      started: true
    },
    dagWalkers: {
      '85': [Object],
      '112': [Object],
      '113': [Object],
      '297': [Object],
      '512': [Object]
    }
  },
  logger: { forComponent: [Function: forComponent] },
  routing: Routing {
    log: [Function: debug] {
      namespace: 'helia:routing',
      useColors: true,
      color: 185,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {},
      error: [Function],
      trace: [Function]
    },
    routers: [ [Libp2pRouter], [HTTPGatwayRouter] ],
    providerLookupConcurrency: 5
  },
  dagWalkers: {
    '85': { codec: 85, walk: [GeneratorFunction: walk] },
    '112': { codec: 112, walk: [GeneratorFunction: walk] },
    '113': { codec: 113, walk: [GeneratorFunction: walk] },
    '297': { codec: 297, walk: [GeneratorFunction: walk] },
    '512': { codec: 512, walk: [GeneratorFunction: walk] }
  },
  hashers: {
    '0': {
      code: 0,
      name: 'identity',
      encode: [Function: coerce],
      digest: [Function: digest]
    },
    '18': Hasher { name: 'sha2-256', code: 18, encode: [Function: encode] },
    '19': Hasher { name: 'sha2-512', code: 19, encode: [Function: encode] }
  },
  dns: DNS {
    resolvers: { '.': [Array] },
    cache: CachedAnswers { lru: [Object] }
  },
  metrics: undefined,
  log: [Function: debug] {
    namespace: 'helia',
    useColors: true,
    color: 221,
    extend: [Function: extend],
    destroy: [Function: deprecated],
    enabled: [Getter/Setter],
    inspectOpts: {},
    error: [Function: debug] {
      namespace: 'helia:error',
      useColors: true,
      color: 203,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {}
    },
    trace: [Function: logger] {
      enabled: false,
      color: '',
      diff: 0,
      log: [Function (anonymous)],
      namespace: 'helia:trace',
      destroy: [Function (anonymous)],
      extend: [Function (anonymous)]
    }
  },
  libp2p: Libp2pNode {}
}
name: DefaultIPNS {
  routers: [ HeliaRouting { routing: [Routing] } ],
  localStore: {
    put: [AsyncFunction: put],
    get: [AsyncFunction: get],
    has: [AsyncFunction: has],
    delete: [AsyncFunction: delete]
  },
  timeout: undefined,
  dns: DNS {
    resolvers: { '.': [Array] },
    cache: CachedAnswers { lru: [Object] }
  },
  log: [Function: debug] {
    namespace: 'helia:ipns',
    useColors: true,
    color: 63,
    extend: [Function: extend],
    destroy: [Function: deprecated],
    enabled: [Getter/Setter],
    inspectOpts: {},
    error: [Function: debug] {
      namespace: 'helia:ipns:error',
      useColors: true,
      color: 221,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {}
    },
    trace: [Function: logger] {
      enabled: false,
      color: '',
      diff: 0,
      log: [Function (anonymous)],
      namespace: 'helia:ipns:trace',
      destroy: [Function (anonymous)],
      extend: [Function (anonymous)]
    }
  }
}
keyInfo: {
  name: 'my-key',
  id: 'QmP5zqdzNMXxs2eSzBZXCTLLYHgvjMBpNM33sxhg6dYcTm'
}
peerId: PeerId(QmP5zqdzNMXxs2eSzBZXCTLLYHgvjMBpNM33sxhg6dYcTm)
fs: UnixFS {
  components: HeliaP2P {
    blockstore: BlockStorage {
      lock: [Object],
      child: [NetworkedStorage],
      pins: [PinsImpl],
      started: true
    },
    datastore: MemoryDatastore { data: [Map] },
    pins: PinsImpl {
      datastore: [MemoryDatastore],
      blockstore: [NetworkedStorage],
      dagWalkers: [Object]
    },
    logger: { forComponent: [Function: forComponent] },
    routing: Routing {
      log: [Function],
      routers: [Array],
      providerLookupConcurrency: 5
    },
    dagWalkers: {
      '85': [Object],
      '112': [Object],
      '113': [Object],
      '297': [Object],
      '512': [Object]
    },
    hashers: { '0': [Object], '18': [Hasher], '19': [Hasher] },
    dns: DNS { resolvers: [Object], cache: [CachedAnswers] },
    metrics: undefined,
    log: [Function: debug] {
      namespace: 'helia',
      useColors: true,
      color: 221,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {},
      error: [Function],
      trace: [Function]
    },
    libp2p: Libp2pNode {}
  }
}
emptyDirCid: CID(bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354)
cid: CID(bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu)
result: {
  cid: CID(bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu),
  path: '',
  record: {
    value: '/ipfs/bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu',
    validityType: 'EOL',
    validity: '2024-07-20T07:33:04.971000000Z',
    sequence: 1n,
    ttl: 3600000000000n,
    pubKey: Uint8Array(299) [
        8,   0,  18, 166,   2,  48, 130,   1,  34,  48,  13,   6,
        9,  42, 134,  72, 134, 247,  13,   1,   1,   1,   5,   0,
        3, 130,   1,  15,   0,  48, 130,   1,  10,   2, 130,   1,
        1,   0, 203, 170, 154,  85, 116,   1,  50, 187,  24, 203,
      237, 105,   3,  55,  60, 112, 190,  63, 138, 147,  39, 141,
      131, 189,  10,  78, 156, 253, 140, 171, 182, 187, 139, 255,
      105,  50, 101,  71, 170, 100, 254, 232,  77,  35,  79,  75,
      145,  51,  11, 101,   8, 173, 127,  29,   6, 213, 192, 244,
       43, 131,  61, 180,
      ... 199 more items
    ],
    signatureV2: Uint8Array(256) [
       73, 178, 227, 206,  84,  23,  95, 142,  70,  25,  57,  50,
      200,   6,   4,  56, 137, 192, 181,  63, 138,  62,  68, 102,
       62,  52, 205,  15,  14, 252,  72,  98, 248, 133, 205,   0,
      197, 120, 168, 104, 140, 162, 205, 190, 177, 241,  76,  48,
       47, 142, 187, 110, 232, 172, 177,  60, 135,  65, 212,  71,
       61, 162,  33,  21,  39, 140,  23, 203, 185, 102, 127,  32,
      115, 148, 160, 239,  72, 204, 117, 253, 243, 144,   8, 107,
       46,  50, 188, 151,  56, 106, 161, 199,  96, 242, 116, 202,
      110, 178, 196,  33,
      ... 156 more items
    ],
    data: Uint8Array(152) [
      165,  99,  84,  84,  76,  27,   0,   0,   3,  70,  48, 184,
      160,   0, 101,  86,  97, 108, 117, 101,  88,  65,  47, 105,
      112, 102, 115,  47,  98,  97, 102, 107, 114, 101, 105,  97,
      105, 120, 110, 112, 102,  50,  51, 118, 107, 121, 101,  99,
      106,  53, 120, 113, 105, 115, 112, 106, 113,  53, 117,  98,
       99, 119, 103, 115, 110, 116, 110, 110, 117, 114, 119,  50,
       98, 106,  98, 121,  55, 107, 104, 101,  52, 119, 110, 106,
      105, 104, 117, 104,  83, 101, 113, 117, 101, 110,  99, 101,
        1, 104,  86,  97,
      ... 52 more items
    ]
  }
}
CID(bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu) 
cat bu cid: Uint8Array(5) [ 0, 1, 2, 3, 4 ]
cat by result.cid: Uint8Array(5) [ 0, 1, 2, 3, 4 ]
```
	- bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu
    - 浏览：
```
ipfs/
baga...cwea
当前的连接不是一个文件或目录，请使用检查 功能替代
```
  - 检查：errors.Wocat the cid by ipns.2.js
```
huangyg@dev:~/git/js.sample/helia$ node ipns.2
helia: HeliaP2P {
  blockstore: BlockStorage {
    lock: {
      readLock: [AsyncFunction: readLock],
      writeLock: [AsyncFunction: writeLock]
    },
    child: NetworkedStorage {
      child: [IdentityBlockstore],
      hashers: [Object],
      log: [Function],
      logger: [Object],
      components: [Object],
      started: true
    },
    pins: PinsImpl {
      datastore: [MemoryDatastore],
      blockstore: [NetworkedStorage],
      dagWalkers: [Object]
    },
    started: true
  },
  datastore: MemoryDatastore {
    data: Map(4) {
      '/pkcs8/self' => [Uint8Array],
      '/info/self' => [Uint8Array],
      '/version' => [Uint8Array],
      '/peers/bafzaajaiaejcatruthwsgz47qnleaztjb5l5fxce7lqrtnsc2qqcb7nitw5zulmc' => [Uint8Array]
    }
  },
  pins: PinsImpl {
    datastore: MemoryDatastore { data: [Map] },
    blockstore: NetworkedStorage {
      child: [IdentityBlockstore],
      hashers: [Object],
      log: [Function],
      logger: [Object],
      components: [Object],
      started: true
    },
    dagWalkers: {
      '85': [Object],
      '112': [Object],
      '113': [Object],
      '297': [Object],
      '512': [Object]
    }
  },
  logger: { forComponent: [Function: forComponent] },
  routing: Routing {
    log: [Function: debug] {
      namespace: 'helia:routing',
      useColors: true,
      color: 185,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {},
      error: [Function],
      trace: [Function]
    },
    routers: [ [Libp2pRouter], [HTTPGatwayRouter] ],
    providerLookupConcurrency: 5
  },
  dagWalkers: {
    '85': { codec: 85, walk: [GeneratorFunction: walk] },
    '112': { codec: 112, walk: [GeneratorFunction: walk] },
    '113': { codec: 113, walk: [GeneratorFunction: walk] },
    '297': { codec: 297, walk: [GeneratorFunction: walk] },
    '512': { codec: 512, walk: [GeneratorFunction: walk] }
  },
  hashers: {
    '0': {
      code: 0,
      name: 'identity',
      encode: [Function: coerce],
      digest: [Function: digest]
    },
    '18': Hasher { name: 'sha2-256', code: 18, encode: [Function: encode] },
    '19': Hasher { name: 'sha2-512', code: 19, encode: [Function: encode] }
  },
  dns: DNS {
    resolvers: { '.': [Array] },
    cache: CachedAnswers { lru: [Object] }
  },
  metrics: undefined,
  log: [Function: debug] {
    namespace: 'helia',
    useColors: true,
    color: 221,
    extend: [Function: extend],
    destroy: [Function: deprecated],
    enabled: [Getter/Setter],
    inspectOpts: {},
    error: [Function: debug] {
      namespace: 'helia:error',
      useColors: true,
      color: 203,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {}
    },
    trace: [Function: logger] {
      enabled: false,
      color: '',
      diff: 0,
      log: [Function (anonymous)],
      namespace: 'helia:trace',
      destroy: [Function (anonymous)],
      extend: [Function (anonymous)]
    }
  },
  libp2p: Libp2pNode {}
}
fs: UnixFS {
  components: HeliaP2P {
    blockstore: BlockStorage {
      lock: [Object],
      child: [NetworkedStorage],
      pins: [PinsImpl],
      started: true
    },
    datastore: MemoryDatastore { data: [Map] },
    pins: PinsImpl {
      datastore: [MemoryDatastore],
      blockstore: [NetworkedStorage],
      dagWalkers: [Object]
    },
    logger: { forComponent: [Function: forComponent] },
    routing: Routing {
      log: [Function],
      routers: [Array],
      providerLookupConcurrency: 5
    },
    dagWalkers: {
      '85': [Object],
      '112': [Object],
      '113': [Object],
      '297': [Object],
      '512': [Object]
    },
    hashers: { '0': [Object], '18': [Hasher], '19': [Hasher] },
    dns: DNS { resolvers: [Object], cache: [CachedAnswers] },
    metrics: undefined,
    log: [Function: debug] {
      namespace: 'helia',
      useColors: true,
      color: 221,
      extend: [Function: extend],
      destroy: [Function: deprecated],
      enabled: [Getter/Setter],
      inspectOpts: {},
      error: [Function],
      trace: [Function]
    },
    libp2p: Libp2pNode {}
  }
}
cat bu cid: <Buffer 00 01 02 03 04>
```
 
- ubuntu: ipns.2.js
```
peerId: CID(QmP5zqdzNMXxs2eSzBZXCTLLYHgvjMBpNM33sxhg6dYcTm)
file:///home/huangyg/git/js.sample/helia/node_modules/ipns/dist/src/utils.js:140
        peerId.toBytes()
               ^

TypeError: peerId.toBytes is not a function
    at peerIdToRoutingKey (file:///home/huangyg/git/js.sample/helia/node_modules/ipns/dist/src/utils.js:140:16)
    at DefaultIPNS.resolve (file:///home/huangyg/git/js.sample/helia/node_modules/@helia/ipns/dist/src/index.js:287:28)
    at file:///home/huangyg/git/js.sample/helia/ipns.2.js:23:27
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Node.js v22.4.0
```
- 追加todo项：
    - '60': leran helia ipns
      readme: |
        - read draft: 2024.07.18. 7:45 ,2024.07.19.14:30
        - https://helia.io/modules/_helia_ipns.html
        - try ipns cover a helia/json content
        - try ipns.2 resolve the content cid from peerid
        - try publish to a path: /ipfs/.../foo.txt and read it from another pc
          - https://helia.io/modules/_helia_ipns.html#md:example---publishing-a-record-with-a-path

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.19.[实践检验一下stage、level、branch、error等task type。]任务&body=日期: 2024.07.19.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240719160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240719160000"></a>
## 16:00~16:59
ego: [实践检验一下stage、level、branch、error等task type。]

- 整理现有的task和todo项。
    - D:\huangyg\git\ego\task
    - season.S3.yaml
- raw
    - food
        - stage
            - view: 营养成分日统计、月报、季报、年报
            -  view to protocol->action：使用营养学方面的公开知识，还没有开始自己整理。
            -  protocol to model+code->action：
                -  model： e.xxx.yaml, d.yyyymmdd.yaml
                -  code：raw.js
        - level：没有产生其它task的schema，最浅层。
        - branch：
            - 增加采购、食材管理、食谱、交流的功能。
            - web view
        - error：暂无
    - health
        - stage
            - view: weight.R, heartrate.R, sleep.R，健康波动和影响因素的关系。
            -  view to protocol->action：使用公开知识，还没有开始自己整理。
            -  protocol to model+code->action：
                -  model： d.yyyymmdd.yaml
                -  code：raw.js
        - level：最浅层。
        - branch：
            - 增加作息、运动方面的记录和交流功能。
            - mermaid chart
            - web view
        - error：non
- ego：确立task参数并在task之间分配资源。
    - stage
        - view: 日计划、日小结、season stat、waiting list brief
        - view to protocol->action：task的分类和相互关系，外部接口与内部双向传递压力的规则。
        - protocol to model+code->action：
            - model：day，draft，task，season
            - code：ego.js, day.js, season.js,waitinglist.js,util.js
    - level: 为所有task提供schema，比它们深一层。
    - branch：外部接口与内部双向传递压力，term生成UI的自动化机制。
    - error：全局压力向局部传递时失真，资源分配落实无力。
- PSMD
    - stage
        - view：工作计划与预算案，集结日志，issue区的讨论小结，com.orgin，cod.template库。
        - view to protocol->action：入门目录9d12877c等
        - protocol to model+code->action：
            - model：default、1609、chain
            - code：term.js
    - level：为委托方的治理方案提供schema，比它们深一层。在受托者视角是最浅一层。
    - branch：入门目录自动化，结构适应持续升级。
    - error：对委托者认知能力要求太高，需要支撑更微观的局部思考，由受托者维持全局。
- stage、level可以放在task model中开始实践。error放在独立model，与task衔接形成互动行为来实践。branch在git中用，再观察一阵。
