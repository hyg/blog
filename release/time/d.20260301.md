# 2026.03.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	PSMD: [整理闫岸家政能力讨论](#20260301140000)
- 14:30~14:59	ego: [用js代码完成日小结后的git操作。](#20260301143000)
- 19:00~19:59	check: [零散笔记](#20260301190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1605 | 11925 | 7440 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 945 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 285 | 715 | 90 |
| learn | 2000 | 315 | 1685 | 4455 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：用js代码完成日小结后的git操作。
  - js的第9号事项：passportjs
  - ego的第10号事项：时间改为ISO8601格式
  - learn的第10号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - learn的第1号事项：Farcaster
  - js的第1号事项：TensorFlow.js
  - learn的第2号事项：XSTATE https://xstate.js.org/
  - learn的第3号事项：按petri网定义设计几个实例

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第2号事项：openpgp v6.1.1.
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法
  - ego的第3号事项：微观与宏观衔接的几篇论文

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第2号事项：会话skill套装设计
  - ego的第2号事项：新版ego, instance or model, any manifest
  - learn的第27号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.01.[整理闫岸家政能力讨论]任务&body=日期: 2026.03.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260301.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260301140000"></a>
## 14:00 ~ 14:29
## PSMD: [整理闫岸家政能力讨论]

- 估计已经下决心，先躺平、等离巢之后再建立能力。
- 除非主动提起，不再督促。

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.01.[用js代码完成日小结后的git操作。]任务&body=日期: 2026.03.01.%0D%0A序号: 6%0D%0A手稿:../../draft/2026/20260301.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260301143000"></a>
## 14:30 ~ 14:59
## ego: [用js代码完成日小结后的git操作。]

- 了解在代码中调历史版本特定文件的语法。
```
async function getFileAtCommit(dir, repoUrl, commitHash, filePath) {
  await git.init({ fs, dir });
  await git.addRemote({ fs, dir, remote: 'origin', url: repoUrl });
  // 获取该提交（可能也需要 fetch 相关对象）
  await git.fetch({ fs, http, dir, remote: 'origin', ref: commitHash, depth: 1 });
  
  const blob = await git.readBlob({ fs, dir, oid: commitHash, filepath: filePath });
  return Buffer.from(blob.blob).toString('utf-8');
}
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.01.[无名任务]任务&body=日期: 2026.03.01.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260301.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260301190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- ANP做了端对端消息。似乎没有对did:wba解耦，创建身份标识的代码似乎允许domian是null？
```
对端到端加密协议做了升级，用HPKE（RFC9180）代替了ECDHE，这是最新的协议文本,大家感兴趣可以看看,代码已经实现:
https://github.com/agent-network-protocol/AgentNetworkProtocol/blob/main/chinese/09-ANP-%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%8D%B3%E6%97%B6%E6%B6%88%E6%81%AF%E5%8D%8F%E8%AE%AE%E8%A7%84%E8%8C%83.md

主要优化:
HPKE 将原来的三步 ECDHE 交互式握手简化为一次性封装（e2ee_init），无需往返即可建立会话密钥。
发起方可以在对方离线时完成密钥初始化，更适合 HTTP 异步投递和收件箱模型。
HPKE 是 RFC 9180 标准化方案，比自定义 ECDHE 握手流程更易审计、风险更低。
新方案实现更简单，状态机更小，错误处理和乱序边界更清晰。
密钥职责明确分离：X25519 只做密钥协商，ECDSA 只做身份签名，安全边界更清晰。
HPKE 天然支持对多个接收者独立封装密钥，使群聊 Sender Key 分发变得可行。
整体上，新方案在工程复杂度、标准化程度和群聊扩展能力上都明显优于旧的 ECDHE 设计。
```
	- 继续观望，确定可以不依赖公网域名再跟进。
	- 对于skill文件，也许可以用一个主skill引用，要求剥离身份认证功能，只保留通信能力，作为通信层子协议之一使用。

- 选择几个日常交流场景，引入agent参与。
