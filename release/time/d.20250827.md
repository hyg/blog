# 2025.08.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20250827190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8956 | 4574 | 9945 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 90 | 910 | 660 |
| raw | 1000 | 70 | 930 | 330 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control

- 60分钟时间片：
  - raw的第1号事项：熟悉内脏之间的关系
  - xuemen的第1号事项：月度事务
  - learn的第1号事项：CometAPI
  - raw的第2号事项：新版营养成分详情，允许多种营养成分。

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第5号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.27.[无名任务]任务&body=日期: 2025.08.27.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250827.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250827190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- https://www.emqx.com/zh/pricing
	- 免费额度：每个月1百万分钟连接时间，1Gb数据流量，1百万规格动作数。

- 针对 wrtc 安装失败的问题，核心原因是 node-pre-gyp 未全局安装，导致预编译脚本无法执行。以下是修复步骤和替代方案
	- npm install -g node-pre-gyp
	- npm cache clean --force
	- rm -rf node_modules package-lock.json // 可以跳过
	- npm install wrtc
- 要判断何时选择 `simple-peer`（深度定制信令）还是 `peerjs`（开箱即用），关键看你的应用对 **信令逻辑的控制需求**。以下是典型场景对比：

---

### **一、选 `simple-peer`（深度定制信令）的场景**
当你的应用需要 **非标准信令逻辑** 或 **强定制化** 时，`simple-peer` 更合适，因为它让你完全掌控信令流程。

#### **1. 私有化部署与安全控制**
- **场景**：企业内部通信系统（如银行、政府机构），要求信令服务器部署在内网，避免公网暴露敏感数据。
- **为什么选 `simple-peer`**：  
  你可以自己搭建信令服务器（如用 `Socket.IO`），并添加 **企业级安全策略**（如 JWT 鉴权、IP 白名单），确保只有授权设备能接入。

#### **2. 自定义房间管理**
- **场景**：多人协作工具（如在线白板、共享文档编辑器），需要 **动态分组**（如按部门/项目划分房间）。
- **为什么选 `simple-peer`**：  
  你可以在信令服务器中实现 **复杂的房间规则**（如自动分配房间、权限继承），而 `peerjs` 的内置房间管理无法满足这种灵活性。

#### **3. 厼标定位与地理围栏**
- **场景**：本地生活服务（如共享出行、社区团购），需要根据用户的 GPS 位置动态匹配附近节点。
- **为什么选 `simple-peer`**：  
  你可以在信令服务器中整合 **地图 API**（如 Google Maps），仅向同一地理区域的用户转发信令，提升匹配效率。

#### **4. 高并发与限流控制**
- **场景**：直播平台（如小众主播互动），需要限制单个房间的连接数以避免资源过载。
- **为什么选 `simple-peer`**：  
  你可以在信令服务器中添加 **速率限制**（如每秒允许的连接数），而 `peerjs` 无法直接修改其内置的信令逻辑。

---

### **二、选 `peerjs`（开箱即用）的场景**
当你的应用需要 **快速原型开发** 或 **标准信令逻辑** 时，`peerjs` 更高效。

#### **1. 快速原型验证**
- **场景**：技术演示、黑客马拉松项目，需要在短时间内实现 P2P 功能。
- **为什么选 `peerjs`**：  
  无需编写信令逻辑，直接用 `peer.connect(peerId)` 即可实现连接，节省大量时间。

#### **2. 标准化视频会议**
- **场景**：小型团队会议工具（如 Zoom 轚版），需要标准的音视频通话功能。
- **为什么选 `peerjs`**：  
  它内置了完整的信令流程，只需关注 UI 层（如摄像头预览、麦克风控制），无需处理底层的 SDP/ICE 协商。

#### **3. 教育类互动应用**
- **场景**：在线课堂（如学生举手提问、小组讨论），需要简单的点对点互动。
- **为什么选 `peerjs`**：  
  其 `call()` 方法简化了呼叫流程，教师和学生可通过 `peer.id` 快速建立连接。

---

### **三、决策树总结**
| **需求类型**               | **推荐库**      | **理由**                                                                 |
|----------------------------|------------------|--------------------------------------------------------------------------|
| 需深度定制信令（私有化、安全、复杂规则） | `simple-peer`    | 完全控制信令流程，适合企业级或高度定制化场景。                           |
| 需快速开发或标准化功能     | `peerjs`        | 开箱即用，适合原型、教育类或标准视频会议场景。                          |

---

### **示例代码对比**
#### **(1) `simple-peer`（深度定制）**
```javascript
// 自定义信令服务器（如 Socket.IO）
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  socket.on('join-room', (roomId) => {
    socket.join(roomId); // 动态房间管理
  });

  // 自定义鉴权（如 JWT）
  socket.use((packet, next) => {
    if (!isValidToken(packet)) return next(new Error('Unauthorized'));
    next();
  });

  socket.on('signal', (data) => {
    socket.to(data.roomId).emit('signal', data.signal);
  });
});
```

#### **(2) `peerjs`（开箱即用）**
```javascript
const Peer = require('peerjs').Peer;

const peer = new Peer({
  host: '0.peerjs.com',
  port: 443,
  path: '/',
  secure: true,
});

peer.on('open', (id) => {
  document.getElementById('your-id').textContent = id;
});

peer.on('call', (call) => {
  call.answer(); // 自动应答
  call.on('stream', (stream) => {
    video.srcObject = stream; // 直接播放视频
  });
});
```

---

通过以上对比，你可以根据自己的应用需求选择合适的库。如果需要更具体的场景分析，随时告诉我！