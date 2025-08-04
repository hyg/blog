# 2025.08.04.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:29	learn: [业务规则引擎](#20250804140000)
- 16:00~16:59	PSMD: [PSMD agent AI的内部角色和功能](#20250804160000)
- 19:00~19:59	check: [零散笔记](#20250804190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7840 | 5690 | 8670 |
| PSMD | 4000 | 1670 | 2330 | 1170 |
| ego | 2530 | 1320 | 1210 | 1365 |
| infra | 2000 | 425 | 1575 | 405 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 3895 | -1895 | 3030 |
| js | 1000 | 370 | 630 | 1710 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：AI特殊监管区设想
  - js的第1号事项：a2a-js
  - js的第2号事项：graphviz
  - learn的第2号事项：Agent Protocol https://agentprotocol.ai/

- 60分钟时间片：
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - learn的第1号事项：ANP（Agent Network Protocol）

- 90分钟时间片：
  - PSMD的第1号事项：筹备会议 by role+prompt
  - ego的第2号事项：整理task及其相互关系
  - PSMD的第3号事项：子1609:基于公司、合同
  - infra的第3号事项：schema立项。

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - infra的第4号事项：Rete/Phreak算法的自主实现
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.04.[业务规则引擎]任务&body=日期: 2025.08.04.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250804.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250804140000"></a>
## 14:00 ~ 15:29
## learn: [业务规则引擎]

- dmn + nodejs
- 显示图形、建模作图的工具有不少。
- 规则引擎比较少。可以通过REST接口结合Camunda去用，非专业用户安装配置java会有点复杂。
	- 有一些停止维护十年左右的老引擎。
- 用提示词“请把罗伯特议事规则简化为最小的合规版本，以markdown、mermaid、drl、dmn语言分别描述。”让llm生成了一些数据。
	- 请把一个议题扩展到一次会议。输出要求不变。
- https://www.npmjs.com/package/bpmn-engine
D:\huangyg\git\js.sample\bpmn-engine>node execute.mjs
```
Execution completed with id 788

D:\huangyg\git\js.sample\bpmn-engine>node listenforevent.mjs
flow <flow1> was taken
flow <flow2> was taken
{}
User sirname is von Rosen
```

- 可以用。因为dmn是无状态的，可以作为FSM一个状态的决策图，借助引擎减少工作量，加强通用性。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.04.[PSMD agent AI的内部角色和功能]任务&body=日期: 2025.08.04.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250804.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250804160000"></a>
## 16:00 ~ 16:59
## PSMD: [PSMD agent AI的内部角色和功能]


- 开箱即用的、非IT专业用户的软件，怎么使用LLM模型。
	- 后端调用，前端不接触api key。需要服务器和带宽支出。
	- 本地部署微型llm模型：
		- ollama：非专业用户可能认为太麻烦。
		- Transformers.js：安排时间试用一下。下载文件也挺大的。
		- node-llama-cpp：安装复杂（需要编译），性能更高，完全离线。
	- OAuth授权代理：有些服务商允许用OAuth授权后获得access_token（替代api key）。需要用户已经在那里有账户。比自己申请api key配置没省事多少。
- 默认方案还是用户自己申请、配置api key。自己付款。软件只负责业务逻辑。
	- 检查code manifest接口的数据合格（手写json？）。这其实用代码更好。
	- 根据free manifest文档，产生代码去处理code manifest格式的事务。
	- 自然语言转code manifest接口的数据（json）。接收对方的json转自然语言。
	- 自然语言调free manifest接口，由对方的agent处理。
	- 根据接口转人工。
	- 整理人工对话，保存为RAG数据库和FSM，或生成MCP server、tool代码。

- 多agent的内部实现：组织上下文管理和切换模型。实现讨论和表决。

- PSMD接口
	- 共同体规则片段和标准模型匹配
	- 个人规则和接口和标准模型匹配
	- 行为合规：和生效接口的匹配

- ego接口还会包括vat的管理，人际关系的管理。
- infra接口包括下载和升级基础模块，切换协议。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.04.[无名任务]任务&body=日期: 2025.08.04.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250804.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250804190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- qwen3-coder挑战赛微信群可以申请1000万token。暂时不需要。
- 使用网页版 chat.qwen.ai 使用 qwen3-coder-flash 试了一下。提示语：
```
开发一个html网页，功能是：
1. 网页有一个参数，参数相同的网页之间可以自动互相发现，并进行对话、通信；
2. 只有一个网页，不开发服务器软件，可以借助已有的服务器建立连接，但是不依赖服务器而直接通信。
3. 打开网页的计算机位于不同的局域网内，局域网出口都安装有NAT。
4. 通信数据是端对端加密的。
```
- 要求使用规定的stun服务器
```
iceServers: [
{ urls: 'stun:fwa.lifesizecloud.com:3478' },
{ urls: 'stun:stun.isp.net.au:3478' },
{ urls: 'stun:stun.freeswitch.org:3478' },
{ urls: 'stun:stun.voip.blackberry.com:3478' }
],
```
- 要求增加调试日志
- d:\huangyg\git\js.sample\qwen\p2p.html
```
调试日志:
[12:29:30] 开始初始化P2P聊天...
[12:29:30] 房间参数: PSMD
[12:29:30] 加密密钥生成完成
[12:29:30] 开始建立P2P连接...
[12:29:30] 创建Peer连接，initiator=true
[12:29:30] 准备创建SimplePeer实例...
[12:29:30] SimplePeer实例创建成功
[12:29:30] 事件监听器已设置
[12:29:30] 收到信令数据: {"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-99.0 4088198983818525325 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 AB:C3:38:B9:31:7B:0D:CC:D8:FC:66:A7:9F:6A:66:7D:6F:F3:AE:73:F4:59:33:E7:AA:CF:12:47:C7:83:2A:04\r\na=group:BUNDLE 0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=sendrecv\r\na=extmap-allow-mixed\r\na=ice-pwd:5475c50610fc2c89049b2efb1c1fdb65\r\na=ice-ufrag:61ccec67\r\na=mid:0\r\na=setup:actpass\r\na=sctp-port:5000\r\na=max-message-size:1073741823\r\n"}
[12:29:30] 发送了offer信号
[12:29:30] 收到信令数据: {"type":"candidate","candidate":{"candidate":"candidate:0 1 UDP 2122252543 58081f47-bdf3-473a-8d60-9384c0683bf8.local 51326 typ host","sdpMLineIndex":0,"sdpMid":"0"}}
[12:29:30] 收到ICE候选者: candidate:0 1 UDP 2122252543 58081f47-bdf3-473a-8d60-9384c0683bf8.local 51326 typ host
[12:29:30] 收到信令数据: {"type":"candidate","candidate":{"candidate":"candidate:2 1 TCP 2105524479 58081f47-bdf3-473a-8d60-9384c0683bf8.local 9 typ host tcptype active","sdpMLineIndex":0,"sdpMid":"0"}}
[12:29:30] 收到ICE候选者: candidate:2 1 TCP 2105524479 58081f47-bdf3-473a-8d60-9384c0683bf8.local 9 typ host tcptype active
[12:29:30] 收到信令数据: {"type":"candidate","candidate":{"candidate":"candidate:1 1 UDP 1686052863 221.218.141.220 7500 typ srflx raddr 0.0.0.0 rport 0","sdpMLineIndex":0,"sdpMid":"0"}}
[12:29:30] 收到ICE候选者: candidate:1 1 UDP 1686052863 221.218.141.220 7500 typ srflx raddr 0.0.0.0 rport 0
[12:29:41] 收到信令数据: {"type":"candidate","candidate":{"candidate":"","sdpMLineIndex":0,"sdpMid":"0"}}
[12:29:41] 收到ICE候选者: 无候选者
```

- 开箱即用的、非IT专业用户的软件，怎么使用LLM模型。
	- 后端调用，前端不接触api key。需要服务器和带宽支出。
	- 本地部署微型llm模型：
		- ollama：非专业用户可能认为太麻烦。
		- Transformers.js：安排时间试用一下。下载文件也挺大的。
		- node-llama-cpp：安装复杂（需要编译），性能更高，完全离线。
	- OAuth授权代理：有些服务商允许用OAuth授权后获得access_token（替代api key）。需要用户已经在那里有账户。比自己申请api key配置没省事多少。
- 默认方案还是用户自己申请、配置api key。自己付款。软件只负责业务逻辑。
	- 检查code manifest接口的数据合格（手写json？）。这其实用代码更好。
	- 根据free manifest文档，产生代码去处理code manifest格式的事务。
	- 自然语言转code manifest接口的数据（json）。接收对方的json转自然语言。
	- 自然语言调free manifest接口，由对方的agent处理。
	- 根据接口转人工。
	- 整理人工对话，保存为RAG数据库和FSM，或生成MCP server、tool代码。
