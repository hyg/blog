# 2025.03.25.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月下旬补足前两月缺勤。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	js: [learn js implement of ipfs](#20250325160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7790 | 5740 | 6075 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 960 | 1570 | 1065 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1250 | -250 | 600 |
| learn | 2000 | 1035 | 965 | 1620 |
| js | 1000 | 1240 | -240 | 690 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第十一式
  - raw的第3号事项：复习五元庄第十式
  - raw的第4号事项：复习五元庄第十二式
  - raw的第5号事项：复习五元庄第十三式

- 60分钟时间片：
  - js的第1号事项：基于dat,hypercore,hyperswarm等模块的浏览器动态页面范例。
  - raw的第1号事项：新版本food预算决算
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：git sample

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：复习dat
  - ego的第2号事项：新版基础模型
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.25.[learn js implement of ipfs]任务&body=日期: 2025.03.25.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250325.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250325160000"></a>
## 16:00 ~ 16:59
## js: [learn js implement of ipfs]

- https://github.com/ipfs/helia/tree/main/packages/ipns
    - 直接使用示范代码就出错。
```
file:///D:/huangyg/git/js.sample/helia/node_modules/ipns/dist/src/utils.js:140
        peerId.toBytes()
               ^

TypeError: peerId.toBytes is not a function
    at peerIdToRoutingKey (file:///D:/huangyg/git/js.sample/helia/node_modules/ipns/dist/src/utils.js:140:16)
    at DefaultIPNS.publish (file:///D:/huangyg/git/js.sample/helia/node_modules/@helia/ipns/dist/src/index.js:264:32)
...
```
- https://ipfs.github.io/helia/modules/_helia_ipns.html
    - https://ipfs.github.io/helia/interfaces/_helia_ipns.index.IPNS.html#resolve 
        - resolve使用公钥，需要把公钥发布到接收方。
        - 实际的成员字段是“_publicKey”,比示范代码多了下划线。
```
privateKey: Ed25519PrivateKey {
  _key: Uint8Array(64) [
     39, 224,  87,  89, 166,  54,  87,  28, 205,  94,  84,
     47, 197, 144, 236, 182, 140,   6,  98,  39, 113, 196,
    109, 125,  93,  55, 119, 210,  46, 208, 158,  26, 187,
    170, 204, 193, 220,  10, 210, 151, 200, 115,  85, 106,
    150, 233, 137, 231, 165,  94, 233, 170, 243, 126,  27,
    255, 215, 136,  57, 227, 213, 115, 168,  10
  ],
  _publicKey: Uint8Array(32) [
    187, 170, 204, 193, 220,  10, 210,
    151, 200, 115,  85, 106, 150, 233,
    137, 231, 165,  94, 233, 170, 243,
    126,  27, 255, 215, 136,  57, 227,
    213, 115, 168,  10
  ]
}
privateKey._publicKey: Uint8Array(32) [
  187, 170, 204, 193, 220,  10, 210,
  151, 200, 115,  85, 106, 150, 233,
  137, 231, 165,  94, 233, 170, 243,
  126,  27, 255, 215, 136,  57, 227,
  213, 115, 168,  10
]
```
    - https://libp2p.github.io/js-libp2p/types/_libp2p_interface.PublicKey.html
    - https://libp2p.github.io/js-libp2p/interfaces/_libp2p_interface.Ed25519PublicKey.html

- git库是在维护，几周内还有更新。但还不能在产品中使用。这一轮复习到此结束，helia暂时搁置，PSMD的需求先用hypercore实现，接口可以考虑未来的通用化。
