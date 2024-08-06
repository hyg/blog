# 2024.08.06.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~09:39	PSMD: [整理新版本term的manifest code](#20240806093000)
- 14:00~14:29	PSMD: [machines model](#20240806140000)
- 16:00~16:59	learn: [Decentralized Identifiers](#20240806160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6866 | 10834 | 3510 |
| PSMD | 7000 | 1622 | 5378 | 585 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 450 |
| raw | 500 | 450 | 50 | 60 |
| learn | 1500 | 1698 | -198 | 990 |
| js | 1200 | 1353 | -153 | 660 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：新版营养成分详情，允许多种营养成分。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - PSMD的第3号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 60分钟时间片：
  - js的第1号事项：learn Orbitdb
  - learn的第1号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/
  - ego的第2号事项：eventemitter sample
  - js的第2号事项：learn js implement of ipfs

- 90分钟时间片：
  - PSMD的第1号事项：machines model
  - PSMD的第2号事项：整理新版本term的manifest code
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第5号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.06.[整理新版本term的manifest code]任务&body=日期: 2024.08.06.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/08/20240806093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240806093000"></a>
# 9:30~10:59
PSMD: [整理新版本term的manifest code]

- readme: |
      - 为了显示而设计的term model，并不适合与代码绑定。
      - 设计前置protocol的定义和数据表现
        - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
        - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
        - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
      - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
        - 根据FSM、FPM、machine的设计决定term的粒度。
        - 设计每项知识的思考和案例积累锚点。
      - 随之修订manifest text。
      - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。

- 有优先任务，顺延。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.06.[machines model]任务&body=日期: 2024.08.06.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240806140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240806140000"></a>
## 14:00~15:29
PSMD: [machines model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制

- interface and class 还没有成熟方案。熟悉ts后可以，可以先简单粗暴完成雏形。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.06.[Decentralized Identifiers]任务&body=日期: 2024.08.06.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/08/20240806160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240806160000"></a>
## 16:00~16:59
learn: [Decentralized Identifiers]

- readme: |
      - https://did.js.org/
      - https://developers.ceramic.network/docs/dids/authorization
      - https://did-ipid.github.io/ipid-did-method/

- https://github.com/ipfs-shipyard/js-did-ipid
- npm install did-ipid
```
npm install did-ipid
npm error code 128
npm error An unknown git error occurred
npm error command git --no-replace-objects ls-remote ssh://git@github.com/hugomrdias/concat-stream.git
npm error git@github.com: Permission denied (publickey).
npm error fatal: Could not read from remote repository.
npm error
npm error Please make sure you have the correct access rights
npm error and the repository exists.
npm error A complete log of this run can be found in: C:\Users\hyg\AppData\Local\npm-cache\_logs\2024-08-06T08_23_49_187Z-debug-0.log
```

- 使用旧的js-ipfs库，而不是helia
- npm install ipfs-core
```
D:\huangyg\git\js.sample\did>node did
generating Ed25519 keypair...
to get started, enter:

        jsipfs cat /ipfs/QmRaaUwTNfwgFZpeUy8qrZwrp2dY4kCKmmB5xEqvH3vtD1/readme

Swarm listening on /ip4/192.168.3.201/tcp/4002/p2p/12D3KooWS8mqjqWXi72KtMBaLvLww3jMETMEi72VbPeZaoi6XYyx
Swarm listening on /ip4/127.0.0.1/tcp/4002/p2p/12D3KooWS8mqjqWXi72KtMBaLvLww3jMETMEi72VbPeZaoi6XYyx
Swarm listening on /ip4/127.0.0.1/tcp/4003/ws/p2p/12D3KooWS8mqjqWXi72KtMBaLvLww3jMETMEi72VbPeZaoi6XYyx
seed: Uint8Array(32) [
  133, 203,  21, 140, 105,  48, 228,
  210,  48, 172, 145, 114, 195, 116,
   12, 119, 184, 179, 216, 121, 214,
  145, 157,  91, 129, 176, 250, 124,
  247, 255,  75,  71
]
provider: Ed25519Provider { _handle: [AsyncFunction (anonymous)] }
did: DID {
  _client: RPCClient {},
  _id: 'did:key:z6MkuoyBS1U1SHnEX4w5frMe5d4CBR1gvrrY3VUB5yVBUAAy',
  _resolver: Resolver {
    registry: { key: [AsyncFunction: key] },
    cache: [Function: noCache]
  },
  _capability: undefined,
  _parentId: undefined
}
aliceDID: did:key:z6MkuoyBS1U1SHnEX4w5frMe5d4CBR1gvrrY3VUB5yVBUAAy
jws: {
  payload: 'AXESINDmZIeFXbbpBQWH1bXt7F2Ysg03pRcvzsvSc7vMNurc',
  signatures: [
    {
      protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3VveUJTMVUxU0huRVg0dzVmck1lNWQ0Q0JSMWd2cnJZM1ZVQjV5VkJVQUF5I3o2TWt1b3lCUzFVMVNIbkVYNHc1ZnJNZTVkNENCUjFndnJyWTNWVUI1eVZCVUFBeSJ9',
      signature: 'xtgZ-smv39hC329gUFI1Y921ZV-106Cw_-JtWv_hRlMcfp-4ZseHO-QGM3G0FDk26ZllGoL6MPp7DP6o6nr8DA'
    }
  ],
  link: CID(bafyreigq4zsipbk5w3uqkbmh2w2633c5tcza2n5fc4x45s6soo54ynxk3q)
}
linkedBlock: Uint8Array(11) [
  161, 100, 115, 111,
  109, 101, 100, 100,
   97, 116,  97
]
jwsCid: CID(bagcqcera7nfvmjn26un3czrpitapcqbkkaknzddmjeuzqknpab4vizu4ovca)
file:///D:/huangyg/git/js.sample/did/node_modules/ipfs-core/node_modules/multiformats/src/cid.js:315
          throw new Error(
                ^

Error: Version 0 CID must use dag-pb (code: 112) block encoding
    at CID.create (file:///D:/huangyg/git/js.sample/did/node_modules/ipfs-core/node_modules/multiformats/src/cid.js:315:17)
    at put (file:///D:/huangyg/git/js.sample/did/node_modules/ipfs-core/src/components/block/put.js:30:23)
    at async file:///D:/huangyg/git/js.sample/did/did.js:41:15

Node.js v22.4.1
```
- 很多接口已经不再维护了，到createDagJWS()为止是正常的。等helia能够在windows安装再研究did.js和helia结合。
- https://www.npmjs.com/package/did-resolver
- https://github.com/decentralized-identity
- 这个用户维护的库看起来还很活跃，resolver接口使用很简单，就不测试了。
- https://identity.foundation/
