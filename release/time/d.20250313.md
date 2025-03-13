# 2025.03.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月中上旬补足前两月缺勤。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	learn: [复习ipns](#20250313160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5770 | 7760 | 5985 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 690 | 1840 | 975 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 600 | 400 | 720 |
| learn | 2000 | 595 | 1405 | 1410 |
| js | 1000 | 580 | 420 | 780 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第六式
  - raw的第3号事项：复习五元庄第七式
  - raw的第4号事项：复习五元庄第八式
  - learn的第5号事项：js debug in vscodium

- 60分钟时间片：
  - js的第1号事项：learn Orbitdb
  - raw的第1号事项：新版本food预算决算
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：js class

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：复习ipns
  - ego的第2号事项：新版本任务、子任务的数据结构
  - learn的第2号事项：飞书 nodejs sdk

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.13.[复习ipns]任务&body=日期: 2025.03.13.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250313.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250313160000"></a>
## 16:00 ~ 16:59
## learn: [复习ipns]

- npm update之后再试。会有警报但最后能读取。
```
D:\huangyg\git\js.sample\helia>node ipns
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
    destroy: [Function: destroy],
    enabled: [Getter/Setter],
    inspectOpts: {},
    error: [Function: debug] {
      namespace: 'helia:ipns:error',
      useColors: true,
      color: 221,
      extend: [Function: extend],
      destroy: [Function: destroy],
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
  id: 'QmVdPzkzApbTscxp2nftgMK18guPL1SJjmK372xAxJKtjT'
}
peerId: PeerId(QmVdPzkzApbTscxp2nftgMK18guPL1SJjmK372xAxJKtjT)
peerId.multihash: Digest {
  code: 18,
  size: 32,
  digest: Uint8Array(32) [
    108,  76,  11, 219, 232, 177, 171, 141,
    164,  47, 201,  19,  30, 139, 184, 175,
    179,  46,   1,  83,  78, 219, 133, 195,
    114, 124, 244,  65, 242, 107, 144, 202
  ],
  bytes: Uint8Array(34) [
     18,  32, 108,  76,  11, 219, 232, 177,
    171, 141, 164,  47, 201,  19,  30, 139,
    184, 175, 179,  46,   1,  83,  78, 219,
    133, 195, 114, 124, 244,  65, 242, 107,
    144, 202
  ]
}
peerId.privateKey: Uint8Array(1197) [
    8,   0,  18, 168,   9,  48, 130,   4, 164,   2,   1,   0,
    2, 130,   1,   1,   0, 149, 235, 116,  76, 107, 207, 132,
   62, 241, 115, 242, 174,  26,  46, 208, 186,  17,  12, 109,
   21,  57,  72, 183,  74, 172, 213,  73, 240,  25,  82, 254,
  155, 244, 122,  32,  55, 219, 199,  94, 152, 238, 109,  61,
   56,  93, 216,  35,  94, 217,  32, 254, 205,  60, 141, 106,
  201,  12, 180, 180, 219,  47, 151,   7, 102, 170,  14,  61,
   55, 153,  91,  99, 127, 228, 170, 110,  48,  20, 225,  92,
  239,  89, 204, 199,
  ... 1097 more items
]
peerId.publicKey: Uint8Array(299) [
    8,   0,  18, 166,   2,  48, 130,   1,  34,  48,  13,   6,
    9,  42, 134,  72, 134, 247,  13,   1,   1,   1,   5,   0,
    3, 130,   1,  15,   0,  48, 130,   1,  10,   2, 130,   1,
    1,   0, 149, 235, 116,  76, 107, 207, 132,  62, 241, 115,
  242, 174,  26,  46, 208, 186,  17,  12, 109,  21,  57,  72,
  183,  74, 172, 213,  73, 240,  25,  82, 254, 155, 244, 122,
   32,  55, 219, 199,  94, 152, 238, 109,  61,  56,  93, 216,
   35,  94, 217,  32, 254, 205,  60, 141, 106, 201,  12, 180,
  180, 219,  47, 151,
  ... 199 more items
]
peerId.type: RSA
peerId.toBytes(): Uint8Array(34) [
   18,  32, 108,  76,  11, 219, 232, 177,
  171, 141, 164,  47, 201,  19,  30, 139,
  184, 175, 179,  46,   1,  83,  78, 219,
  133, 195, 114, 124, 244,  65, 242, 107,
  144, 202
]
peerId.toCID(): CID(bafzbeidmjqf5x2frvog2il6jcmpixofpwmxacu2o3oc4g4t46ra7e24qzi)
peerId.toString(): QmVdPzkzApbTscxp2nftgMK18guPL1SJjmK372xAxJKtjT
cid: CID(bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea)
(node:143884) MaxListenersExceededWarning: Possible EventTarget memory leak detected. 11 abort listeners added to [AbortSignal]. MaxListeners is 10. Use events.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
result: {
  cid: CID(bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea),
  path: '',
  record: {
    value: '/ipfs/bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea',
    validityType: 'EOL',
    validity: '2025-03-14T12:21:38.941000000Z',
    sequence: 1n,
    ttl: 3600000000000n,
    pubKey: Uint8Array(299) [
        8,   0,  18, 166,   2,  48, 130,   1,  34,  48,  13,   6,
        9,  42, 134,  72, 134, 247,  13,   1,   1,   1,   5,   0,
        3, 130,   1,  15,   0,  48, 130,   1,  10,   2, 130,   1,
        1,   0, 149, 235, 116,  76, 107, 207, 132,  62, 241, 115,
      242, 174,  26,  46, 208, 186,  17,  12, 109,  21,  57,  72,
      183,  74, 172, 213,  73, 240,  25,  82, 254, 155, 244, 122,
       32,  55, 219, 199,  94, 152, 238, 109,  61,  56,  93, 216,
       35,  94, 217,  32, 254, 205,  60, 141, 106, 201,  12, 180,
      180, 219,  47, 151,
      ... 199 more items
    ],
    signatureV2: Uint8Array(256) [
       71,  12, 104, 202, 126, 136,  30, 239,   0, 213, 173,  52,
       70, 213, 135,  80, 212, 245, 177, 173, 122, 133, 231, 245,
      220, 128, 126,  54, 223, 168, 134, 120,  45, 118,   6, 138,
        3, 188,  67, 248,  61,   4, 226, 132,  44,  22, 212, 231,
      187,  37, 212,  90, 116, 218, 193, 160, 212, 142, 222,  92,
       20,  75, 254,  28, 203, 238, 207,  60, 105, 147, 148, 229,
       26, 211, 108, 165, 189, 101, 116, 208, 126, 219,  80,  46,
      174,  21,  73, 168, 240,  20,   2,  58, 191, 224,  96, 107,
       48, 238, 130, 254,
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

- 追加时间按PSMD发布条款的需求做一个小demo。