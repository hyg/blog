# 2024.07.24.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1a)。

<a id="index"></a>
- 07:45~08:59	raw: [自动从网页提取营养成分表](#20240724074500)
- 09:30~11:14	PSMD: [FPM(finite protocol machine) model](#20240724093000)
- 14:00~14:29	js: [learn helia ipns,reading time.](#20240724140000)
- 14:30~15:54	js: [leran helia ipns,coding time.](#20240724143000)
- 16:00~16:59	raw: [设计新版raw.js架构。](#20240724160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 5517 | 12183 | 3480 |
| PSMD | 7000 | 1142 | 5858 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 120 | 1380 | 450 |
| raw | 500 | 285 | 215 | 180 |
| learn | 1500 | 1207 | 293 | 930 |
| js | 1200 | 1201 | -1 | 600 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：learn ssb db,reading time.
  - learn的第2号事项：linkml, yaml-ld, reading time.
  - learn的第3号事项：Decentralized Identifiers
  - raw的第3号事项：新版raw.js的子命令-营养成分详情

- 60分钟时间片：
  - learn的第1号事项：learn ipld,reading time.
  - raw的第1号事项：设计新版raw.js架构。
  - ego的第2号事项：eventemitter sample
  - raw的第2号事项：自动从网页提取营养成分表

- 90分钟时间片：
  - PSMD的第1号事项：FPM(finite protocol machine) model
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.24.[自动从网页提取营养成分表]任务&body=日期: 2024.07.24.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240724074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240724074500"></a>
## 07:45~8:44
raw: [自动从网页提取营养成分表]

- readme: |
      - read 2024.07.16.07:45 draft
      - finish the parseeshian() in D:\huangyg\git\js.sample\htmlparser\json2e.js , save e.foodname.yaml use DRI and NRV metadata.
      - 抓取网页:https://pptr.nodejs.cn/
      - https://www.npmjs.com/package/puppeteer
- 继续在 D:\huangyg\git\js.sample\htmlparser 下进行。
- 需要进一步从json转变成yaml，期间使用当季DRI、NRV数据计算nrv字段数字。
```
D:\huangyg\git\js.sample\htmlparser>node json2e.js e.芋头.json
> elementdata:
{
  '食品中文名': '芋头',
  '食品英文名': 'Taro',
  '食品分类': '蔬菜类及制品',
  '可食部': '100.0%',
  '来源': '泰国公共卫生部',
  '产地': '泰国',
  '能量(千焦)': '490',
  '蛋白质(克)': '2.1',
  '脂肪(克)': '0.1',
  '碳水化合物(克)': '26.8',
  '膳食纤维(克)': '1.0',
  '维生素A(微克视黄醇当量)': '-',
  '维生素E(毫克α-生育酚当量)': '-',
  '维生素B1（硫胺素）(毫克)': '0.15',
  '维生素B2（核黄素）(毫克)': '0.04',
  '维生素C（抗坏血酸）(毫克)': '2.0',
  '烟酸（烟酰胺）(毫克)': '1.00',
  '磷(毫克)': '54',
  '钙(毫克)': '84',
  '铁(毫克)': '-',
  '灰分(克)': '1.0',
  '水分(克)': '70',
  '能量(千卡)': '117'
}
makefoodyaml> DRIs:
{
  name: 'DRIforChina2023',
  gender: 'male',
  age: 49,
  weight: 51,
  PAL: 1.4,
  element: [Object]
}
makefoodyaml> save food: e.芋头.yaml
name: 芋头
amount: 100
unit: g
element:
  热量:
    amount: 117
    unit: kcal
    nrv: 6.41
  蛋白质:
    amount: 2.1
    unit: g
    nrv: 2.63
  脂肪:
    amount: 0.1
    unit: g
    nrv: 0.2
  碳水化合物:
    amount: 26.8
    unit: g
    nrv: 10.22
  膳食纤维:
    amount: 1
    unit: g
    nrv: 3.33
  VB1(硫胺素):
    amount: 0.15
    unit: mg
    nrv: 10.71
  VB2(核黄素):
    amount: 0.04
    unit: mg
    nrv: 2.86
  VB3(烟酸):
    amount: 1
    unit: mg
    nrv: 6.67
  VC(抗坏血酸):
    amount: 2
    unit: mg
    nrv: 2
  磷:
    amount: 54
    unit: mg
    nrv: 7.61
  钙:
    amount: 84
    unit: mg
    nrv: 10.5
```
- 登记75分钟，只完成了第一部分，第二部分回到todo项：
    - '60': 自动从网页提取营养成分表
      readme: |
        - read 2024.07.16.07:45 draft
        - read 2024.07.24.07:45 draft
        - 抓取网页:https://pptr.nodejs.cn/
        - https://www.npmjs.com/package/puppeteer

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.24.[FPM(finite protocol machine) model]任务&body=日期: 2024.07.24.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240724093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240724093000"></a>
##  09:30~10:59
PSMD: [FPM(finite protocol machine) model]

- read D:\huangyg\git\draft\2024\07\20240723160000.md
- readme: |
      - a sample instance of FPM in manifest code 
      - schema for code of FPM
- D:\huangyg\git\js.sample\FPM\main.js 
    - D:\huangyg\git\js.sample\FPM\FPM.js
        - D:\huangyg\git\js.sample\FPM\FSM.js
- npm i commander
```
D:\huangyg\git\js.sample\FPM>node main
Usage: FPM sample [options] [command]

a sample instance of FPM(Finite Protocol Machine) in manifest code.

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  fpm             FPM entry
  help [command]  display help for command

D:\huangyg\git\js.sample\FPM>node main fpm
Usage: FPM sample fpm [options] [command]

FPM entry

Options:
  -h, --help                  display help for command

Commands:
  init <id>                   初始化：读取FPM元数据，从出事protocol开始。
  event <id>                  事件处理
  joint <id1> <id2> <termid>  FPM合并。id2并入id1，由id1.termid修订id2的不可修订条款。
  slipit [data]               FPM分立，TBD。
  test [data]                 FPM测试，功能不定。
  help [command]              display help for command
  ```
  - 完成了init()、log():
  ```
  D:\huangyg\git\js.sample\FPM>node main fpm init 1
> init: 1
> FPM:
p: p0

  D:\huangyg\git\js.sample\FPM>node main fpm log true
> log: true
> FPM:
p: p0
log: 'true'

> effect: do nothing.

D:\huangyg\git\js.sample\FPM>node main fpm log true
> log: true
> FPM:
p: p0
log: 'true'

> effect: e1

D:\huangyg\git\js.sample\FPM>node main fpm log true
> log: true
> FPM:
p: p1
log: true

> effect: e2

D:\huangyg\git\js.sample\FPM>node main fpm log true
> log: true
> FPM:
p: p2
log: true

> effect: do nothing.
```
- 继续追加时间完成其它部分：
    - '90': FPM(finite protocol machine) model
      readme: |
        - a sample instance of FPM in manifest code 
        - schema for code of FPM
        - read D:\huangyg\git\draft\2024\07\20240723160000.md
        - read 2024.07.24. 09:30 draft

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.24.[learn helia ipns,reading time.]任务&body=日期: 2024.07.24.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240724140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240724140000"></a>
## 14:00~14:29
js: [learn helia ipns,reading time.]

- readme: |
      - read draft: 2024.07.18. 7:45 ,2024.07.19.14:30
      - https://helia.io/modules/_helia_ipns.html
      - try ipns cover a helia/json content
      - try ipns.2 resolve the content cid from peerid
      - try publish to a path: /ipfs/.../foo.txt and read it from another pc
        - https://helia.io/modules/_helia_ipns.html#md:example---publishing-a-record-with-a-path
- read https://github.com/ipfs-examples/helia-101/ about unixfs
- https://ipfs.github.io/js-stores/modules/blockstore_core.html
    - 是ipfs的模块，说明文档比较粗。
- https://helia.io/functions/helia.createHelia.html 
    - 为什么都是默认参数创建的helia，json可以让其它机器用cid读，unixfs则不行？

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.24.[leran helia ipns,coding time.]任务&body=日期: 2024.07.24.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240724143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240724143000"></a>
## 14:30~14:59
js: [leran helia ipns,coding time.]

- peerid无法送到ipns.2.js，CID.parse()无法正确恢复peerid。
- 
```
huangyg@dev:~/git/js.sample/helia$ node ipns.js
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
  id: 'QmXAqoPeUDS3KXs1qCKGS5adrgavGERGUCFdVnbcPQyy2p'
}
peerId: PeerId(QmXAqoPeUDS3KXs1qCKGS5adrgavGERGUCFdVnbcPQyy2p)
peerId.multihash: Digest {
  code: 18,
  size: 32,
  digest: Uint8Array(32) [
    131,  53, 234,  62, 11, 210, 160, 217,
      8, 217, 210, 177, 58, 161, 108, 112,
     91, 158, 168,  48, 88,  64, 242, 233,
     67, 205, 108, 199,  2,  38, 213, 249
  ],
  bytes: Uint8Array(34) [
     18,  32, 131,  53, 234,  62, 11, 210,
    160, 217,   8, 217, 210, 177, 58, 161,
    108, 112,  91, 158, 168,  48, 88,  64,
    242, 233,  67, 205, 108, 199,  2,  38,
    213, 249
  ]
}
peerId.privateKey: Uint8Array(1195) [
    8,   0,  18, 166,   9,  48, 130,  4, 162,   2,   1,   0,
    2, 130,   1,   1,   0, 158, 210, 57, 115,  66,  50, 128,
  121, 224,  52, 140,  34,  13, 134, 71, 197,   7, 227,  67,
  202, 118, 207,  33, 189, 217,  45, 61,  41, 210, 159,  99,
  156, 149, 129,  98, 232,  41, 247,  3,   6, 180,  13, 241,
   80,  27, 177,  13, 118, 198,  93, 28, 153, 142,   3, 239,
  175, 213, 201, 209,  47,  77,  95, 21,   6,  64, 139,  90,
  205, 109, 220,  20,  91, 216,  36, 77, 199, 119, 127, 157,
  144, 112, 241,  39,
  ... 1095 more items
]
peerId.publicKey: Uint8Array(299) [
    8,   0,  18, 166,   2,  48, 130,   1,  34,  48,  13,   6,
    9,  42, 134,  72, 134, 247,  13,   1,   1,   1,   5,   0,
    3, 130,   1,  15,   0,  48, 130,   1,  10,   2, 130,   1,
    1,   0, 158, 210,  57, 115,  66,  50, 128, 121, 224,  52,
  140,  34,  13, 134,  71, 197,   7, 227,  67, 202, 118, 207,
   33, 189, 217,  45,  61,  41, 210, 159,  99, 156, 149, 129,
   98, 232,  41, 247,   3,   6, 180,  13, 241,  80,  27, 177,
   13, 118, 198,  93,  28, 153, 142,   3, 239, 175, 213, 201,
  209,  47,  77,  95,
  ... 199 more items
]
peerId.type: RSA
peerId.toBytes(): Uint8Array(34) [
   18,  32, 131,  53, 234,  62, 11, 210,
  160, 217,   8, 217, 210, 177, 58, 161,
  108, 112,  91, 158, 168,  48, 88,  64,
  242, 233,  67, 205, 108, 199,  2,  38,
  213, 249
]
peerId.toCID(): CID(bafzbeiedgxvd4c6sudmqrwoswe5kc3dqlopkqmcyidzosq6nntdqejwv7e)
peerId.toString(): QmXAqoPeUDS3KXs1qCKGS5adrgavGERGUCFdVnbcPQyy2p
cid: CID(bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea)
toStringresult: {
  cid: CID(bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea),
  path: '',
  record: {
    value: '/ipfs/bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea',
    validityType: 'EOL',
    validity: '2024-07-25T07:28:52.297000000Z',
    sequence: 1n,
    ttl: 3600000000000n,
    pubKey: Uint8Array(299) [
        8,   0,  18, 166,   2,  48, 130,   1,  34,  48,  13,   6,
        9,  42, 134,  72, 134, 247,  13,   1,   1,   1,   5,   0,
        3, 130,   1,  15,   0,  48, 130,   1,  10,   2, 130,   1,
        1,   0, 158, 210,  57, 115,  66,  50, 128, 121, 224,  52,
      140,  34,  13, 134,  71, 197,   7, 227,  67, 202, 118, 207,
       33, 189, 217,  45,  61,  41, 210, 159,  99, 156, 149, 129,
       98, 232,  41, 247,   3,   6, 180,  13, 241,  80,  27, 177,
       13, 118, 198,  93,  28, 153, 142,   3, 239, 175, 213, 201,
      209,  47,  77,  95,
      ... 199 more items
    ],
    signatureV2: Uint8Array(256) [
      141, 104, 216, 175, 251,  87, 107, 214, 193, 217,  60,  63,
      126, 203, 151, 236, 120, 232,  12, 104, 191, 207, 128, 211,
       20, 189, 207, 207,  79, 249, 181,  31,  73, 243,  17,  95,
       38, 210, 108, 242,  19, 105, 148,  72, 160, 160,  86,   6,
      133, 221,  49, 217,  85, 124, 229,  53, 191,  36,  86,  11,
      156, 111,  51, 232, 133, 169, 154,  24, 241,  33, 195, 239,
       55, 237, 226,  83, 253, 153, 239, 193, 130, 167, 104,  58,
       74, 214, 187, 174,  46, 240, 126,  15,  73,  81, 183, 213,
      138, 113, 177,  99,
      ... 156 more items
    ],
    data: Uint8Array(154) [
      165,  99,  84,  84,  76,  27,   0,   0,   3,  70,  48, 184,
      160,   0, 101,  86,  97, 108, 117, 101,  88,  67,  47, 105,
      112, 102, 115,  47,  98,  97, 103,  97,  97, 105, 101, 114,
       97, 115, 111, 114, 100, 115,  52, 110, 106,  99, 116, 115,
       54, 118, 115,  55, 113, 118, 100, 106, 102,  99, 118, 103,
      110, 117, 109, 101,  52, 104, 113, 111, 104, 102,  54,  53,
      122, 115, 102, 103, 117, 112, 114, 113, 112, 104, 115,  51,
      105,  99, 119, 101,  97, 104,  83, 101, 113, 117, 101, 110,
       99, 101,   1, 104,
      ... 54 more items
    ]
  }
}
get by result.cid: { hello: 'world' }
```
```
huangyg@dev:~/git/js.sample/helia$ node ipns.2.js
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
      '/peers/bafzaajaiaejcauykcw6hkmcxexgr5b4wxwokpqxar2zkofrzkest2fkfj4dabhrt' => [Uint8Array]
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
j: DefaultJSON {
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
file:///home/huangyg/git/js.sample/helia/node_modules/datastore-core/dist/src/errors.js:19
    err = err ?? new Error('Not Found');
                 ^

Error: Not Found
    at Module.notFoundError (file:///home/huangyg/git/js.sample/helia/node_modules/datastore-core/dist/src/errors.js:19:18)
    at MemoryDatastore.get (file:///home/huangyg/git/js.sample/helia/node_modules/datastore-core/dist/src/memory.js:17:26)
    at DefaultKeychain.exportKey (file:///home/huangyg/git/js.sample/helia/node_modules/@libp2p/keychain/dist/src/keychain.js:311:57)
    at DefaultKeychain.exportPeerId (file:///home/huangyg/git/js.sample/helia/node_modules/@libp2p/keychain/dist/src/keychain.js:332:32)
    at file:///home/huangyg/git/js.sample/helia/ipns.2.js:30:53
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'ERR_NOT_FOUND'
}

Node.js v22.4.0
```
- 查看nodemudule文件夹下安装的代码，libp2p下的peerid、keychain还是未完成的测试代码，peeris相关的key连password都是写死的。从这些迹象判断，ipns还不适合在产品中使用。暂时不再追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.24.[设计新版raw.js架构。]任务&body=日期: 2024.07.24.%0D%0A序号: 12%0D%0A手稿:../../draft/2024/07/20240724160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240724160000"></a>
## 16:00~16:59
raw: [设计新版raw.js架构。]

- readme: |
      - 增加子命令和参数。
      - 划分独立模块。
- day命令不需要改变。
- 可以增加month、season、year。主要是一些统计功能，根据统计结果手工调整基础数据，直到调整方式可以自动化。
- task：把涂鸦手稿、法律文件也纳入管理，不仅仅是代码。
    - manifest的text改成draft。
    - 大部分不常用指令，在metadata file中手工编辑，集中在常用指令处理以便记忆。
    - task init <id>：将task.id.yaml文件入库。
        - 根据name字段生成正式id。
        - 检验数据结构是否合法。
    - task all：统计各处锋面front、各层级level、各阶段stage的task。
    - 为day.js提供closetask(),updatetask()接口。
- front
    - front all：列出所有锋面
    - front <id>：列出锋面详情
    - front skip <id>：锋面向前延伸，跳过任务。
    - front task <id>：锋面向前延伸，创建任务。
- asset
    - asset all：列出时间以外的资源。
    - asset <id>：列出单项资源详情，分alloc、sold、hold、apply（todo）列出task和front统计。
    - asset issue [days]：发行一定天数的时间资源。
- 以上设计了ego的架构，可以在实践中不断优化。raw的架构回到waitinglist。