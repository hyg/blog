# 2026.03.05.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260305190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7530 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 945 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4545 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：时间改为ISO8601格式
  - ego的第2号事项：用js代码完成日小结后的git操作。
  - js的第9号事项：passportjs
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - learn的第1号事项：Farcaster
  - js的第2号事项：TensorFlow.js
  - learn的第3号事项：XSTATE https://xstate.js.org/
  - learn的第4号事项：按petri网定义设计几个实例

- 90分钟时间片：
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - learn的第2号事项：HPKE（Hybrid Public Key Encryption，RFC 9180）
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第2号事项：会话skill套装设计
  - ego的第3号事项：新版ego, instance or model, any manifest
  - learn的第28号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.05.[无名任务]任务&body=日期: 2026.03.05.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260305.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260305190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

-

```
const { ethers } = require('ethers');

const wallets = {
  PSMD: ethers.Wallet.createRandom(),
  blog: ethers.Wallet.createRandom()
};

const result = {
  PSMD: { 
    address: wallets.PSMD.address, 
    privateKey: wallets.PSMD.privateKey 
  },
  blog: { 
    address: wallets.blog.address, 
    privateKey: wallets.blog.privateKey 
  }
};

console.log(JSON.stringify(result, null, 2));
```

```
const { ethers } = require('ethers');

const accounts = [
  {
    name: 'name1',
    apiKey: '',
    privateKey: '',
    address: '',
    nonce: '',
    agentId: '',
    issuedAt: '2026-03-05T03:15:00.873Z',
    expiresAt: '2026-03-05T03:25:00.873Z'
  },
  {
    name: 'name2',
    apiKey: '',
    privateKey: '',
    address: '',
    nonce: '',
    agentId: '',
    issuedAt: '2026-03-05T03:15:00.873Z',
    expiresAt: '2026-03-05T03:25:00.873Z'
  },
  {
    name: 'name3',
    apiKey: '',
    privateKey: '',
    address: '',
    nonce: '',
    agentId: '',
    issuedAt: '2026-03-05T03:15:00.873Z',
    expiresAt: '2026-03-05T03:25:00.873Z'
  }
];

async function signAndVerify(account) {
  const wallet = new ethers.Wallet(account.privateKey);
  console.log(`Signing for ${account.name} with address ${wallet.address}`);
  
  // ethers v6 signTypedData format
  const signature = await wallet.signTypedData(
    {
      name: "MoltX",
      version: "1",
      chainId: 8453
    },
    {
      MoltXWalletLink: [
        { name: "agentId", type: "string" },
        { name: "agentName", type: "string" },
        { name: "wallet", type: "address" },
        { name: "chainId", type: "uint256" },
        { name: "nonce", type: "string" },
        { name: "issuedAt", type: "string" },
        { name: "expiresAt", type: "string" }
      ]
    },
    {
      agentId: account.agentId,
      agentName: account.name,
      wallet: account.address,
      chainId: 8453,
      nonce: account.nonce,
      issuedAt: account.issuedAt,
      expiresAt: account.expiresAt
    }
  );

  console.log(`${account.name} signature: ${signature}`);
  return { nonce: account.nonce, signature };
}

async function main() {
  const results = {};
  for (const account of accounts) {
    try {
      results[account.name] = await signAndVerify(account);
    } catch (error) {
      console.error(`Error signing for ${account.name}:`, error.message);
    }
  }
  console.log('\n\nFinal results for verification:');
  console.log(JSON.stringify(results, null, 2));
}

main();
```

- SBT/POAP验证
- awiki的message部分功能，有不少开源替代，无需从awiki剥离。
	- https://www.npmjs.com/package/didcomm-node
	- https://js.waku.org/
		- https://www.npmjs.com/package/@waku/sdk
```
| 方案                   | 核心协议                      | 与Awiki兼容性     | 替代方式             | 成熟度        |
| -------------------- | ------------------------- | ------------- | ---------------- | ---------- |
| **DIDComm v2**       | JWM + JOSE                | ⭐⭐⭐⭐⭐ 原生DID兼容 | 直接替换消息层，保留DID身份  | 高（DIF标准）   |
| **Matrix + Olm**     | Olm/Megolm Double Ratchet | ⭐⭐⭐ 需适配DID    | 作为传输层，DID作为MXID  | 高（生产级）     |
| **Status Waku**      | Waku v2 + X3DH            | ⭐⭐⭐ 需桥接       | P2P消息层，DID作为节点ID | 中（Web3原生）  |
| **Signal libsignal** | Signal Protocol           | ⭐⭐ 需大量适配      | 仅加密层，需自建传输       | 高（但AGPL限制） |
| **Noise Protocol**   | Noise Framework           | ⭐⭐⭐ 轻量级       | 替换HPKE，保留DID握手   | 高（现代标准）    |
```

- 如果不考虑did身份，单纯考虑agent之间e2ee通信以及后量子保护，在windows+nodejs环境下有哪些推荐方案。要求从身份id创建到通信全过程都由agent自主完成，不需要人工参与。
	- Node.js 24.7.0 于2025年8月发布，内置了 ML-KEM（FIPS 203标准）和 ML-DSA（FIPS 204标准）支持，无需额外依赖
	- 如果需要 混合后量子/经典安全（同时抵抗当前攻击和量子攻击），推荐使用 @hpke/hybridkem-x25519-kyber768
```
| 方案                            | 后量子支持    | 成熟度   | 性能 | 适用场景     |
| ----------------------------- | -------- | ----- | -- | -------- |
| **Node.js 24.7+ 原生ML-KEM**    | ✅ 内置     | ⭐⭐⭐⭐⭐ | 高  | **首选方案** |
| **@hpke/ml-kem + @hpke/core** | ✅ 完整HPKE | ⭐⭐⭐⭐  | 高  | 标准HPKE协议 |
| **mlkem (crystals-kyber-js)** | ✅ 纯JS实现  | ⭐⭐⭐⭐  | 中  | 兼容性要求    |
| **@omnituum/pqc-shared**      | ✅ 混合加密   | ⭐⭐⭐   | 中  | 快速集成     |
| **Noise Protocol (noise-js)** | ❌ 经典加密   | ⭐⭐⭐   | 高  | 仅经典安全    |
```

- 双棘轮算法:	
	- http://shuxueji.com/w/67723
	- https://blog.lancitou.net/double-ratchet-algorithm/
- 迪菲-赫尔曼密钥交换: https://www.qiuwenbaike.cn/wiki/%E8%BF%AA%E8%8F%B2-%E8%B5%AB%E7%88%BE%E6%9B%BC%E5%AF%86%E9%91%B0%E4%BA%A4%E6%8F%9B

- Arweave
	- https://zhuanlan.zhihu.com/p/404474115
	- https://github.com/ArweaveTeam/arweave-js
