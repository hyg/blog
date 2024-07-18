# 2024.07.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1a)。

<a id="index"></a>
- 07:45~09:24	js: [helia ipns sample (libp2p/keychain)](#20240718074500)
- 09:30~10:59	js: [learn Secure Scuttlebutt](#20240718093000)
- 14:00~14:29	ego: [设计ego中task的种类、设立、注销规则。](#20240718140000)
- 14:30~14:59	learn: [确定mermaid gantt语法是否能表达ego模型task关系](#20240718143000)
- 16:00~16:59	ego: [编写ego中task的schema](#20240718160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 2887 | 14813 | 3435 |
| PSMD | 7000 | 402 | 6598 | 630 |
| ego | 4000 | 952 | 3048 | 330 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 180 |
| learn | 1500 | 782 | 718 | 960 |
| js | 1200 | 541 | 659 | 690 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：learn gemini protocol
  - js的第2号事项：debug helia/ipns
  - js的第12号事项：text->id,protobuf-javascript
  - js的第13号事项：用day.js改写util.js

- 60分钟时间片：
  - ego的第1号事项：实践检验一下stage、level、branch、error等task type。
  - js的第1号事项：learn ssb db
  - raw的第1号事项：自动从网页提取营养成分表
  - learn的第2号事项：schema in ipld

- 90分钟时间片：
  - ego的第2号事项：用linkml和json schema沿信息接口向内建模。
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第4号事项：term metadata的序号，分为显示序号和唯一id两种。
  - learn的第4号事项：拟制说、目的财产说、实在说

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - xuemen的第2号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.18.[helia ipns sample (libp2p/keychain)]任务&body=日期: 2024.07.18.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240718074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240718074500"></a>
## 07:45~8:44
js: [helia ipns sample (libp2p/keychain)]

- readme
      - read 2024.07.17. 14:00 draft
      - learn @libp2p/keychain https://github.com/libp2p/js-libp2p-keychain
      - learn sample https://helia.io/modules/_helia_ipns.html
- 根据https://blog.mauve.moe/posts/protocol-comparisons重新梳理
    - bittorrent、ipfs（libp2p）、hypercore（dat）、Secure ScuttleButt 四套相对独立的协议
    - ipfs的js实现是helia，不如go实现稳定。实测对windows支持不好。
    - hypercore是原生js，比较稳定，对windows支持更好。
    - SSB已安排学习。
    - 跨协议的平台、工具已安排学习。尽量在项目中使用。
- 研究一下windows安装错误中针对node-datachannel的npm error command failed
    - npm i node-datachannel
    - 还是报错，找不到相关资料。停。
- 在ubuntu机器写代码，在windows机器运行ipfs desktop配合测试，用simplenote和gist传递信息，注意及时git pull和push。
    - npm i helia ， @helia/ipns，@helia/unixfs
    - https://helia.io/modules/_helia_ipns.html#md:example---getting-started  执行示范代码
 ```
huangyg@dev:~/git/js.sample/helia$ node ipns
file:///home/huangyg/git/js.sample/helia/node_modules/@libp2p/keychain/dist/src/keychain.js:138
            throw new CodeError('Invalid key type', codes.ERR_INVALID_KEY_TYPE);
                  ^

CodeError: Invalid key type
    at DefaultKeychain.createKey (file:///home/huangyg/git/js.sample/helia/node_modules/@libp2p/keychain/dist/src/keychain.js:138:19)
    at async file:///home/huangyg/git/js.sample/helia/ipns.js:9:17 {
  code: 'ERR_INVALID_KEY_TYPE',
  props: {}
}

Node.js v22.4.0
```
    - 根据报错信息查看keychain.js代码，在createkey()增加第二个参数"rsa"（可选(type === 'rsa' || type === 'ed25519' || type === 'secp256k1') ）.再执行报错
```
huangyg@dev:~/git/js.sample/helia$ node ipns
file:///home/huangyg/git/js.sample/helia/ipns.js:14
const cid = await fs.add(Uint8Array.from([0, 1, 2, 3, 4]))
                     ^

TypeError: fs.add is not a function
    at file:///home/huangyg/git/js.sample/helia/ipns.js:14:22

Node.js v22.4.0
```
    - https://ipfs.github.io/helia-unixfs/ 
    - https://helia.io/interfaces/_helia_unixfs.index.UnixFS.html
    - https://helia.io/interfaces/_helia_unixfs.index.UnixFS.html#addBytes.addBytes-1
    - 代码改为：
```
const emptyDirCid = await fs.addDirectory()
const cid = await fs.addBytes(Uint8Array.from([0, 1, 2, 3, 4]))
```
    - https://helia.io/interfaces/_helia_ipns.index.IPNS.html
    - https://helia.io/interfaces/_helia_ipns.index.IPNS.html#publish.publish-1
    - 在publish()增加await，增加提示后，执行代码（需要等待几分钟）：
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
      '/peers/bafzaajaiaejcayvxvrasq7vjjtow2uaajqhrlj47mzm5yakxu2rmvq4ocox5c3dt' => [Uint8Array]
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
start: undefined
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
  id: 'QmWmFVGXeCdqDeaA724D1FgHjcXtTV2rQbVEz5J7rNsZ2b'
}
peerId: PeerId(QmWmFVGXeCdqDeaA724D1FgHjcXtTV2rQbVEz5J7rNsZ2b)
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
    validity: '2024-07-19T01:18:24.405000000Z',
    sequence: 1n,
    ttl: 3600000000000n,
    pubKey: Uint8Array(299) [
        8,   0,  18, 166,   2,  48, 130,   1,  34,  48,  13,   6,
        9,  42, 134,  72, 134, 247,  13,   1,   1,   1,   5,   0,
        3, 130,   1,  15,   0,  48, 130,   1,  10,   2, 130,   1,
        1,   0, 214, 245, 145, 223, 244,  45,  41, 143, 232, 244,
      100, 226,  25,  88,  72, 171, 246,  81,  24,  92,  36, 203,
      251, 139, 132, 183, 236,  50, 183,  15, 104, 144,  45,  59,
      165, 120, 173,  26,  54, 124,  90, 119, 114, 200, 219, 184,
      201, 237, 224,  29, 106, 105, 237,  23,  75,  62,  98, 126,
      232, 216, 152, 144,
      ... 199 more items
    ],
    signatureV2: Uint8Array(256) [
      156, 108, 202, 238, 151,  72, 100, 109,  91,  12,  31, 195,
       29,  75, 157, 120, 114, 200,  74,  64,  81,   6,  86,  14,
       70,  62,  43, 211,  50, 121, 225,  67, 234, 111,  26, 170,
      199, 220, 106, 193,  87, 242,  42, 220, 169,  82, 245, 145,
      230, 171,  76,   7, 161, 144,   3, 219, 111, 171,  34, 130,
       72, 188, 174,  76,  78, 180, 191, 184, 170,  45, 108, 157,
       56,  78, 189,  92, 100, 160, 209,  36,  96, 237, 158,  44,
      102, 249,  14,  71, 113,   1, 235, 246,  79,  92, 109,  55,
      244,  86,  82,  34,
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
```
- 在windows机器的ipfs desktop浏览：
    - bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu  404 errors.Wo
    - /ipfs/bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu 404
    - /ipns/bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu 404 errors.Wo
    - QmP9KYHRZdmapry3SNfUhwf2qvQgLS1Yc4r3UxEWeruCDm errors.Wo
    - /ipns/QmP9KYHRZdmapry3SNfUhwf2qvQgLS1Yc4r3UxEWeruCDm 404 errors.Wo
- 代码已经git add, commit, push
- 能解析出 /ipfs/bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu 但是这个ipfs没有发布出来，具体原因待查。追加todo项：
    - '30': debug helia/ipns
      readme: |
        - readme 2024.07.18. 7:45 draft
        - /ipfs/bafkreiaixnpf23vkyecj5xqispjq5ubcwgsntnnurw2bjby7khe4wnjihu 为什么没有发布出来，重点考虑helia.start()。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.18.[learn Secure Scuttlebutt]任务&body=日期: 2024.07.18.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240718093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240718093000"></a>
##  09:30~10:59
js: [learn Secure Scuttlebutt]

- readme: |
      - http://ssbc.github.io/ssb-db/
      - https://scuttlebot.io
- 可以npm -g安装后命令行运行本地服务器，也可以命令行和js方式执行客户端操作。也有一些图形界面：
    - https://scuttlebot.io/apps/index.html
    - https://www.scuttlebutt.nz/get-started/
- 真正对外发布需要公网pub关注，去https://web.libera.chat/ 的#scuttlebutt 频道要邀请码。
- npm install -g ssb-server
- npm i ssb-client
- ubuntu:
	- npm install -g ssb-server
	- npm i ssb-client
	- server
```
huangyg@dev:/tmp/ssb$ ssb-server start
error loading sodium bindings: No native build was found for platform=linux arch=x64 runtime=node abi=127 uv=1 libc=glibc
falling back to javascript version.
ssb-server 15.3.0 /home/huangyg/.ssb logging.level:notice
my key ID: q1qykzgixp+06zi6MbsQWrT6Vdjgo4m0xLPquqTTyXw=.ed25519
ssb-friends: stream legacy api used
************************************************** ()
``` 
	- client code
```
var ssbClient = require('ssb-client')

ssbClient(function (err, sbot) {
  if (err)
    throw err
sbot.whoami(function (err, info) {
  // info.id
console.log("info:",info)
console.log("info.id:",info.id)
})
  // sbot is now ready. when done:
  sbot.close()
})

```
```
huangyg@dev:/tmp/ssb$ node client
info: { id: '@q1qykzgixp+06zi6MbsQWrT6Vdjgo4m0xLPquqTTyXw=.ed25519' }
info.id: @q1qykzgixp+06zi6MbsQWrT6Vdjgo4m0xLPquqTTyXw=.ed25519
```
- sbot publish --type post... ,sbot whoami,sbot createUserStream --id...,sbot publish --type about...,·测试都正常。
- npm install -g git-ssb
```
huangyg@dev:~/git/com.origin$ git ssb create ssb
(node:14288) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Created repo: ssb://%QWYfXVEbEhTcrPk4H7q3ZAeT/ZQA+Sp4NtWJX7eet0s=.sha256 (com.origin)
Added remote: ssb
huangyg@dev:~/git/com.origin$ git push ssb
(node:14305) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
枚举对象中: 797, 完成.
对象计数中: 100% (797/797), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (726/726), 完成.
写入对象中: 100% (797/797), 559.57 KiB | 9.48 MiB/s, 完成.
总共 797（差异 400），复用 0（差异 0），包复用 0
Decoding objects: 100% (797/797)
Pushing blobs...
Published %6dh+WiKcMtMkSwCN7t76AhaZxBzIXHmSV43EsIWZDTA=.sha256
To ssb://%QWYfXVEbEhTcrPk4H7q3ZAeT/ZQA+Sp4NtWJX7eet0s=.sha256
 * [new branch]      master -> master
``` 
- ubuntu机器上 git clone正常。
```
huangyg@dev:/tmp/ssb$ git clone ssb://%QWYfXVEbEhTcrPk4H7q3ZAeT/ZQA+Sp4NtWJX7eet0s=.sha256
正克隆到 'ZQA+Sp4NtWJX7eet0s=.sha256'...
(node:14616) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
接收对象中: 100% (797/797), 559.57 KiB | 6.51 MiB/s, 完成.
处理 delta 中: 100% (400/400), 完成.
```
- agregore浏览器不能读ssb://路径。
- windows机器上 npm install -g git-ssb 正常，git clone报错
```
D:\huangyg\git\js.sample\ssb>git clone ssb://%QWYfXVEbEhTcrPk4H7q3ZAeT/ZQA+Sp4NtWJX7eet0s=.sha256
Cloning into 'ZQA+Sp4NtWJX7eet0s=.sha256'...
(node:9840) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Error: stackless error
    at module.exports (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\git-ssb\node_modules\explain-error\index.js:18:19)
    at C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\git-ssb\node_modules\ssb-client\client.js:55:17
    at C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\git-ssb\node_modules\multiserver\compose.js:80:25
    at Socket.onError (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\git-ssb\node_modules\multiserver\plugins\net.js:107:11)
    at Socket.emit (node:events:520:28)
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\git-ssb\node_modules\git-remote-ssb\git-remote-ssb:43
  if (err) throw err
           ^

AggregateError [ECONNREFUSED]:
    at internalConnectMultiple (node:net:1118:18)
    at afterConnectMultiple (node:net:1685:7) {
  code: 'ECONNREFUSED',
  [errors]: [
    Error: connect ECONNREFUSED ::1:8008
        at createConnectionError (node:net:1648:14)
        at afterConnectMultiple (node:net:1678:16) {
      errno: -4078,
      code: 'ECONNREFUSED',
      syscall: 'connect',
      address: '::1',
      port: 8008
    },
    Error: connect ECONNREFUSED 127.0.0.1:8008
        at createConnectionError (node:net:1648:14)
        at afterConnectMultiple (node:net:1678:16) {
      errno: -4078,
      code: 'ECONNREFUSED',
      syscall: 'connect',
      address: '127.0.0.1',
      port: 8008
    }
  ]
}

Node.js v22.4.1
```
- ssb从功能上受限与pub邀请，可以作为辅助发布渠道，不做主力。js代码也要避开windows机器，即使勉强在ubuntu环境开发，用户端也很难推广。浏览器和数据库的应用另外安排学习。
- 增加todo项：
    - '60': learn ssb db
      readme: |
        - read 2024.07.18. 9:30 draft
        - https://github.com/ssbc/ssb-db2
        - find broswer utils
    - '30': learn gemini protocol
      readme: |
        - https://geminiprotocol.net/
        - gemini://geminiprotocol.net/

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.18.[设计ego中task的种类、设立、注销规则。]任务&body=日期: 2024.07.18.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240718140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240718140000"></a>
## 14:00~14:29
ego: [设计ego中task的种类、设立、注销规则。]

### task type

- stage
    - make view+raw knowledge
    - raw knowledge to text| draft
    - text| draft to data+code
    - data+code to model+protocol
- knowledge  level: 按照model-instance关系划分层级
- knowledge branch| tag:
    - branch| tag
    - fix bug| error
- 规则：
    - 上一阶段完成，下一阶段可以开始。如果不开始就构成锋面。
    - bug| error有效，fix task可以开始。如果不开始就构成锋面。
    - 一个层级完成，下一层级可以开始。如果不开始就构成锋面。
    - 一个分支发行，下一个分支可以开始。如果不开始就构成锋面。
- stage、level、branch、error的定义还不成熟，交叉关系还需要继续斟酌。
    - '60': 实践检验一下stage、level、branch、error等task type。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.18.[确定mermaid gantt语法是否能表达ego模型task关系]任务&body=日期: 2024.07.18.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240718143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240718143000"></a>
## 14:30~14:59
learn: [确定mermaid gantt语法是否能表达ego模型task关系]

- readme: |
      - https://mermaid.nodejs.cn/syntax/gantt.html
      - read 2024.07.16.16:00 draft
- task、todo item、time period之间的关系
    - 根据全局情况调整锋面，设立task。
    - 根据task进展，主要是新的知识，产生todo item。
    - 根据期限压力和资源分配调整todo item的优先级。
    - 根据身体状况选择模版，绑定todo item和time period。
- 可以按照比例估算各todo item绑定结果，推算不增加task、todo item的情况下推进结果，生成gantt图展示结果。知识不全面时估算不准确。
- 根据gantt图反向传递压力，生成锋面、设立task，生成资源分配方案。知识不全面时估算不准确。
- 就以上两种估算和展示而言
    - js代码生成mermaid语法可行。
    - js代码读取mermaid代码，暂时没有找到工具。
        - 自定义数据model，向前可以生成mermaid代码，向后可以被js代码读取，进而向前传递压力。作为task的一部分字段。
- task增加字段，吸收mermaid的after、until语法。
- todo item应该与其它task没有关系，根据这个差异划分task与todo item。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.18.[编写ego中task的schema]任务&body=日期: 2024.07.18.%0D%0A序号: 12%0D%0A手稿:../../draft/2024/07/20240718160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240718160000"></a>
## 16:00~16:59
ego: [编写ego中task的schema]

- read D:\huangyg\git\draft\2024\07\20240716160000.md
- read 2024.07.18.14:30 draft
- 把mermaid gantt语法吸收纳入task.
    - https://mermaid.nodejs.cn/syntax/gantt.html
- D:\huangyg\git\ego\data\task.yaml
```
D:\huangyg\git\ego\data>gen-json-schema task.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
{
    "$defs": {
        "Depand": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "Finish_to_Finish": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                },
                "Finish_to_Start": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                },
                "Start_to_Finish": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                },
                "Start_to_Start": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                }
            },
            "title": "Depand",
            "type": "object"
        },
        "Task": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "dependencies": {
                    "$ref": "#/$defs/Depand"
                },
                "id": {
                    "type": "string"
                },
                "log": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "parent_id": {
                    "type": "string"
                },
                "readme": {
                    "type": "string"
                },
                "start": {
                    "type": "string"
                },
                "status": {
                    "$ref": "#/$defs/TaskStatus"
                }
            },
            "required": [
                "id",
                "name",
                "parent_id"
            ],
            "title": "Task",
            "type": "object"
        },
        "TaskStatus": {
            "description": "",
            "enum": [
                "active",
                "done",
                "crit",
                "unknown",
                "milestone"
            ],
            "title": "TaskStatus",
            "type": "string"
        }
    },
    "$id": "https://raw.githubusercontent.com/hyg/ego/vat/data/task",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": true,
    "metamodel_version": "1.7.0",
    "title": "task",
    "type": "object",
    "version": null
}
```
- 需要手工删除$schema、metamodel_version、version
- D:\huangyg\git\js.sample\schema\task.js
```
D:\huangyg\git\js.sample\schema>node task
schema: {
  '$defs': {
    Depand: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      title: 'Depand',
      type: 'object'
    },
    Task: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      required: [Array],
      title: 'Task',
      type: 'object'
    },
    TaskStatus: {
      description: '',
      enum: [Array],
      title: 'TaskStatus',
      type: 'string'
    }
  },
  '$id': 'https://raw.githubusercontent.com/hyg/ego/vat/data/task',
  additionalProperties: true,
  title: 'task',
  type: 'object'
}
data: {
  name: 'ego',
  id: '1cJ9sN',
  'parent id': 0,
  start: 2012-01-01T00:00:00.000Z,
  status: 'crit',
  dependencies: { 'Finish-to-Start': [ 0, 1, 2 ] },
  readme: '# the code of huangy ## 个人领域模 ego是[通用个人领域模型](common.com.md)、[俱乐部](club.com.md)的分支版本，它最终会以软件形式发布。  * [通用模型](common.com.md * [俱乐部](club.com.md * [ego设计方案](ego.com.md * [ego部署方案](cod.md 具体概念可以参考[设计笔记](README.note.md) 版权声明 1. 本库作品版权归[黄勇刚](mailto:huangyg@mars22.com)所有 2. 除非作品内特别声明，本库作品采用[署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。  \n',
  log: '- stage\n' +
    '    - make view+raw knowledge\n' +
    '    - raw knowledge to text| draft\n' +
    '    - text| draft to data+code\n' +
    '    - data+code to model+protocol\n' +
    '- knowledge  level: 按照model-instance关系划分层级\n' +
    '- knowledge branch| tag:\n' +
    '    - branch| tag\n' +
    '    - fix bug| error\n' +
    '- 规则：\n' +
    '    - 上一阶段完成，下一阶段可以开始。如果不开始就构成锋面。\n' +
    '    - bug| error有效，fix task可以开始。如果不开始就构成锋面。\n' +
    '    - 一个层级完成，下一层级可以开始。如果不开始就构成锋面。\n' +
    '    - 一个分支发行，下一个分支可以开始。如果不开始就构成锋面。\n'
}
validate pass
```
```
data: {
  name: 'ego',
  id: '1cJ9sN',
  'parent id': 0,
  start: 2012-01-01T00:00:00.000Z,
  dependencies: null,
  readme: '# the code of huangy ## 个人领域模 ego是[通用个人领域模型](common.com.md)、[俱乐部](club.com.md)的分支版本，它最终会以软件形式发布。  * [通用模型](common.com.md * [俱乐部](club.com.md * [ego设计方案](ego.com.md * [ego部署方案](cod.md 具体概念可以参考[设计笔记](README.note.md) 版权声明 1. 本库作品版权归[黄勇刚](mailto:huangyg@mars22.com)所有 2. 除非作品内特别声明，本库作品采用[署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。  \n'
}
validate pass
```
- task之间关系是放在season还是task里，跨season的信息也要考虑。
- 目的是全局和局部之间压力双向传递。升级之前利用休整时间斟酌，直接修改数据模型和readme文件。
