# 2025.07.20.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~11:59	learn: [MCP in nodejs](#20250720093000)
- 14:00~15:29	js: [giiter.im bot sample](#20250720140000)
- 15:30~19:59	learn: [去中心化节点](#2025072015300)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2646 | 10884 | 7380 |
| PSMD | 4000 | 90 | 3910 | 1080 |
| ego | 2530 | 290 | 2240 | 1335 |
| infra | 2000 | 335 | 1665 | 150 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 1501 | 499 | 2265 |
| js | 1000 | 340 | 660 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第6号事项：react ink
  - js的第8号事项：copilot
  - js的第9号事项：node.js
  - PSMD的第10号事项：整理闫岸家政能力讨论

- 60分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：动态菜单设计。
  - raw的第1号事项：设计新的季度时间表

- 90分钟时间片：
  - learn的第1号事项：去中心化节点
  - ego的第2号事项：整理js对象检索的代码
  - infra的第2号事项：schema立项。
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：machines model
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.20.[MCP in nodejs]任务&body=日期: 2025.07.20.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250720.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250720093000"></a>
## 09:30 ~ 11:59
## learn: [MCP in nodejs]

- 了解概念Model Context Protocol:
	- https://modelcontextprotocol.io/introduction
	- https://mcp-docs.cn/introduction
- 关键概念
	- Roots：是client向server传递的操作范围。
	- Resources：是否用作MCP Server网络的索引？参考LetsX。
	- Prompts
	- Tools
	- Sampling
- type:
	- stdio
	- SSE
- 架构：什么方式可以组合免费LLM和自己的MCP。
	- stdio模式: 开发聊天室bot，调用LLM 模型时提供tool清单，按LLM的response.content调用工具。
		- https://mcp-docs.cn/quickstart/client#node
		- 在bot机器上修改LLM provider。
		- 在bot机器上运行MCP server，只是由LLM间接调用。
	- SSE模式：
		- railway
		- netlify
		- others:
| 名称                          | 免费额度                 | 国内速度                      | 部署方式                    | 优点                   | 缺点                          |
| --------------------------- | -------------------- | ------------------------- | ----------------------- | -------------------- | --------------------------- |
| **Railway**                 | 500 h/月 + 1 GB 存储    | 经 Cloudflare，延迟 80-120 ms | Git 自动部署、CLI、Dockerfile | 一键 HTTPS、日志友好        | 免费额度有限，大流量需付费               |
| **Render**                  | 512 MB RAM 永久免费      | 北美节点，国内 150-200 ms        | Git/CLI/Dockerfile      | 域名即开即用               | 免费实例 15 min 无访问即休眠          |
| **Fly.io**                  | 3 个 256 MB 实例/月      | 可自选 HKG 节点，国内 60-90 ms    | `fly.toml` + CLI        | 支持中国区边缘节点            | CLI 稍复杂，信用卡验证               |
| **Supabase Edge Functions** | 500k 调用/日            | 阿里香港边缘，国内 50 ms           | CLI/在线编辑器               | 与 Database/Auth 无缝集成 | 仅 Serverless Function，不适合长驻 |
| **阿里云函数计算 FC**              | 100 万次/月 + 400k GB·s | 国内 < 30 ms                | 控制台/CLI/Serverless Devs | 国内最快、实名免费            | 需实名，函数 15 min 冷启动           |

- 信任链和LetsX结构，可以表现为MCP server之间的网络。
- 下个时间片开发范例。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.20.[giiter.im bot sample]任务&body=日期: 2025.07.20.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250720.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250720140000"></a>
## 14:00 ~ 15:29
## js: [gitter.im bot sample]

- https://www.npmjs.com/package/matrix-js-sdk
- gitter.im->all setting->help&about->access token
	- Homeserver is https://gitter.ems.host
	- Identity server is https://vector.im
- add room: today
	- https://matrix.to/#/#today:gitter.im
- 已经可以首发信息。以后再配合其它用户测试对话。matrix还是需要依赖服务器，需要注册验证，不过内容加密，适合已经存在合同关系的委托者。
- 在其它todo项试试chat.jabb.im,wechat.

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.20.[去中心化节点]任务&body=日期: 2025.07.20.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250720.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="2025072015300"></a>
## 15:30 ~ 19:59
## learn: [去中心化节点]

- d:\huangyg\git\js.sample\dht\
- letsX.js需要使用npm i bittorrent-dht@^10.0.0
- p2p.mjs使用最新版 npm i bittorrent-dht@latest
- 局域网内的收不到peer事件，只能在lookup时回调收到peer个数。一直是1~2个。
- 外网服务器运行p2p.js出现两种warning，lookup时回调收到peer个数，通常是7~8个。还可以收到peer事件：
```
warning: Error: Invalid data: Missing delimiter ":" [0x3a]
    at Function.decode.find (/home/huangyg/git/js.sample/dht/node_modules/k-rpc-socket/node_modules/bencode/lib/decode.js:112:9)
    at Function.decode.buffer (/home/huangyg/git/js.sample/dht/node_modules/k-rpc-socket/node_modules/bencode/lib/decode.js:157:20)
    at Function.decode.next (/home/huangyg/git/js.sample/dht/node_modules/k-rpc-socket/node_modules/bencode/lib/decode.js:98:21)
    at Object.decode (/home/huangyg/git/js.sample/dht/node_modules/k-rpc-socket/node_modules/bencode/lib/decode.js:81:17)
    at Socket.onmessage (/home/huangyg/git/js.sample/dht/node_modules/k-rpc-socket/index.js:64:29)
    at Socket.emit (node:events:513:28)
    at UDP.onMessage [as onmessage] (node:dgram:930:8)
```
```
warning: Error: Out of order response
    at Socket.onmessage (/home/huangyg/git/js.sample/dht/node_modules/k-rpc-socket/index.js:90:30)
    at Socket.emit (node:events:513:28)
    at UDP.onMessage [as onmessage] (node:dgram:930:8)
```

```
found potential peer 115.28.214.237:20000 through 31.192.180.217:28421
found potential peer 221.218.141.220:29113 through 80.246.94.121:15367
found potential peer 115.28.214.237:20000 through 95.24.78.49:27739
found potential peer 221.218.141.220:29113 through 78.169.59.108:42294
```
- 下面时间片开始使用peer进行通信：
```
获得的节点端口是否已经被dht占用，还能用来交流其它数据吗？
不会冲突，可以复用。  
DHT 库（bittorrent-dht / dht-rpc 等）在启动监听时 **只占用了 UDP 端口**，而应用层的聊天或文件传输通常走 **TCP 或 WebRTC SCTP/QUIC 数据通道**，端口类型/协议不同，互不干扰；即使你想复用同一 **UDP 端口** 收发自定义数据，也只需在消息头部加“协议标识”即可，DHT 会自动丢弃不认识的 UDP 负载。因此：

1. **DHT 发现节点** → 使用 **UDP 端口**（如 20000）。  
2. **点对点聊天/传文件** → 走 **TCP** 或 **WebRTC DataChannel**，端口可 **相同或不同**，互不影响。
```