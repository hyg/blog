# 2025.07.19.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 11:20~13:58	learn: [jami bot](#20250719112000)
- 14:00~14:39	js: [learn brain.js](#20250719140000)
- 14:40~15:39	learn: [playwright](#20250719144000)
- 16:00~16:59	learn: [佯谬及二次革命](#20250719160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2136 | 11394 | 7260 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 290 | 2240 | 1335 |
| infra | 2000 | 335 | 1665 | 150 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 1081 | 919 | 2055 |
| js | 1000 | 250 | 750 | 1680 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：react ink
  - js的第9号事项：copilot
  - PSMD的第10号事项：整理闫岸家政能力讨论
  - js的第10号事项：node.js

- 60分钟时间片：
  - raw的第1号事项：设计新的季度时间表
  - learn的第1号事项：jami bot
  - js的第1号事项：giiter.im bot sample
  - infra的第2号事项：动态菜单设计。

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：mail server

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第5号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.19.[jami bot]任务&body=日期: 2025.07.19.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250719.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250719112000"></a>
## 11:20 ~ 13:58
## learn: [jami bot]

- d:\huangyg\git\js.sample\jami\

### claude code

- npm包名有幻觉，提醒后修改可以npm install。
- 下个时间片实际运行看看。

### kimi问答

- 点击链接查看和 Kimi 的对话 https://www.kimi.com/share/d1tja1up4uo1t5rfcsmg
    - plink hyg@chat.aigc.ing
    - 测试路径的model丰富，可以作为聊天用。
    - 窗口太小，没找到设置方式。
    - 更换语言界面，怎么操作都没反应。
    - 直接输入中文是乱码。
    - 开源，可以自己二次开发bot，自己部署。
- npm install git+https://gitlab.com/jami-project/jami-lib-node.git#main
    - 错误的库名，或者已经转为私有、删除。
- https://github.com/savoirfairelinux/jami-daemon/tree/master/bin/dbus
    - 一些xml接口设置
- https://github.com/savoirfairelinux/jami-daemon/tree/master/bin/nodejs
- winget install SFLinux.Jami
- dbus没能按kimi判断那样使用。也无法判断jami客户端运行后，是不是deamon就启动了。根据用户的情况，还是以windows为主。所以暂时放弃开发jami bot，仅限个人自用。

### tox

- tox：https://tox.chat/download.html
    - npm config set proxy http://127.0.0.1:9910
    - npm config set https-proxy http://127.0.0.1:9910
    - npm install https://github.com/node-ffi/node-ffi
    - npm config delete proxy
    - npm config delete https-proxy
    - 安装不成功。先不再试。

### matrix

- 已经可以访问了。
- https://matrix.org
- https://servers.joinmatrix.org/ 
- 已经有todo项，提高排序位置。

### briar

- 根据我找到的信息，以下是关于Briar API的详细资料：

## Briar Headless REST API

Briar项目有一个headless客户端版本，它暴露了REST API。这是一个最小版本的headless客户端，支持列出/写入私人消息和博客帖子，并且有基本的支持来列出其他PrivateMessageHeaders和接收它们。

## 主要特性

Briar是一个开源软件通信技术，旨在提供安全且具有弹性的点对点通信，无需中央服务器，对外部基础设施的依赖最小。消息可以通过蓝牙、Wi-Fi、通过Tor的互联网或USB存储等可移动存储传输。所有通信都是端到端加密的。

## API 架构

Briar peer使用websocket来通知连接的API客户端新事件。在建立连接后，您必须立即向websocket发送认证令牌作为消息。如果您未能这样做，您将不会在该socket上收到消息。

## API文档现状

目前，API的文档直接写在其readme文件中，这表明文档还比较简单，正在改进中。

## Node.js集成示例

基于找到的信息，以下是一个基本的Node.js集成示例：

```
const WebSocket = require('ws');
const axios = require('axios');

class BriarClient {
    constructor(baseURL = 'http://localhost:7000', wsURL = 'ws://localhost:7000/v1/ws') {
        this.baseURL = baseURL;
        this.wsURL = wsURL;
        this.token = null;
        this.ws = null;
        
        // 创建axios实例
        this.api = axios.create({
            baseURL: this.baseURL + '/v1',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // 认证并获取token
    async authenticate(password) {
        try {
            const response = await this.api.post('/session', {
                password: password
            });
            this.token = response.data.token;
            
            // 设置认证头
            this.api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            
            console.log('认证成功');
            return this.token;
        } catch (error) {
            console.error('认证失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 连接WebSocket以接收实时事件
    connectWebSocket() {
        if (!this.token) {
            throw new Error('需要先认证');
        }

        this.ws = new WebSocket(this.wsURL);
        
        this.ws.on('open', () => {
            console.log('WebSocket连接已建立');
            // 发送认证token
            this.ws.send(this.token);
        });

        this.ws.on('message', (data) => {
            try {
                const event = JSON.parse(data);
                this.handleEvent(event);
            } catch (error) {
                console.error('解析WebSocket消息失败:', error);
            }
        });

        this.ws.on('error', (error) => {
            console.error('WebSocket错误:', error);
        });

        this.ws.on('close', () => {
            console.log('WebSocket连接已关闭');
        });
    }

    // 处理接收到的事件
    handleEvent(event) {
        switch (event.type) {
            case 'ConversationMessageReceivedEvent':
                console.log('收到新消息:', event.data);
                this.onMessageReceived(event.data);
                break;
            case 'ContactRemovedEvent':
                console.log('联系人被移除:', event.data);
                break;
            default:
                console.log('未知事件类型:', event);
        }
    }

    // 获取联系人列表
    async getContacts() {
        try {
            const response = await this.api.get('/contacts');
            return response.data;
        } catch (error) {
            console.error('获取联系人失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 获取与特定联系人的对话
    async getConversation(contactId) {
        try {
            const response = await this.api.get(`/contacts/${contactId}/messages`);
            return response.data;
        } catch (error) {
            console.error('获取对话失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 发送私人消息
    async sendPrivateMessage(contactId, text) {
        try {
            const response = await this.api.post(`/contacts/${contactId}/messages`, {
                text: text
            });
            return response.data;
        } catch (error) {
            console.error('发送消息失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 添加联系人（通过联系人链接）
    async addContact(link) {
        try {
            const response = await this.api.post('/contacts', {
                link: link
            });
            return response.data;
        } catch (error) {
            console.error('添加联系人失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 获取自己的联系人链接
    async getContactLink() {
        try {
            const response = await this.api.get('/contacts/add');
            return response.data.link;
        } catch (error) {
            console.error('获取联系人链接失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 创建博客帖子
    async createBlogPost(text) {
        try {
            const response = await this.api.post('/blogs/posts', {
                text: text
            });
            return response.data;
        } catch (error) {
            console.error('创建博客帖子失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 获取博客帖子
    async getBlogPosts() {
        try {
            const response = await this.api.get('/blogs/posts');
            return response.data;
        } catch (error) {
            console.error('获取博客帖子失败:', error.response?.data || error.message);
            throw error;
        }
    }

    // 消息接收回调（可以重写）
    onMessageReceived(message) {
        console.log(`收到来自 ${message.contactId} 的消息: ${message.text}`);
    }

    // 断开连接
    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// 使用示例
async function example() {
    const client = new BriarClient();
    
    try {
        // 1. 认证
        await client.authenticate('your-password');
        
        // 2. 连接WebSocket接收实时事件
        client.connectWebSocket();
        
        // 3. 获取联系人列表
        const contacts = await client.getContacts();
        console.log('联系人列表:', contacts);
        
        // 4. 发送消息给第一个联系人
        if (contacts.length > 0) {
            const contactId = contacts[0].contactId;
            await client.sendPrivateMessage(contactId, 'Hello from Node.js bot!');
        }
        
        // 5. 创建博客帖子
        await client.createBlogPost('这是一个来自API的博客帖子');
        
        // 6. 重写消息接收处理
        client.onMessageReceived = (message) => {
            console.log(`机器人收到消息: ${message.text}`);
            
            // 简单的自动回复逻辑
            if (message.text.includes('hello')) {
                client.sendPrivateMessage(message.contactId, '你好！我是一个Briar机器人。');
            }
        };
        
    } catch (error) {
        console.error('示例执行失败:', error);
    }
}

// 导出类
module.exports = BriarClient;

// 如果直接运行此文件，执行示例
if (require.main === module) {
    example();
}
```

## 部署和使用步骤

### 1. 安装Briar Headless

```bash
# 从源码编译（需要Java环境）
git clone https://code.briarproject.org/briar/briar.git
cd briar
./gradlew :briar-headless:assemble

# 或下载预编译版本
```

### 2. 启动Headless服务

```bash
# 启动Briar headless，默认端口7000
java -jar briar-headless/build/libs/briar-headless.jar --password your-password
```

### 3. API端点

基于找到的信息，主要API端点包括：

- `POST /v1/session` - 认证获取token
- `GET /v1/contacts` - 获取联系人列表  
- `POST /v1/contacts` - 添加联系人
- `GET /v1/contacts/{contactId}/messages` - 获取对话消息
- `POST /v1/contacts/{contactId}/messages` - 发送私人消息
- `GET /v1/blogs/posts` - 获取博客帖子
- `POST /v1/blogs/posts` - 创建博客帖子
- `WS /v1/ws` - WebSocket连接接收实时事件

## 注意事项

1. **文档限制**：API文档目前还比较简单，主要在readme文件中，功能可能不够完整。

2. **功能限制**：当前的headless版本功能相对基础，主要支持私人消息和博客帖子。

3. **开发状态**：这个API还在积极开发中，可能会有变化。

4. **安全性**：所有通信都是端到端加密的，API本身也需要认证。

如果需要更详细的文档，建议直接查看官方GitLab仓库中的briar-headless目录。

- 文档和API还不成熟，暂时不开发bot。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.19.[learn brain.js]任务&body=日期: 2025.07.19.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250719.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250719140000"></a>
## 14:00 ~ 14:39
## js: [learn brain.js]

- https://github.com/BrainJS/brain.js
- https://brain.js.org/

- √是神经网络学习，不是LLM。
- d:\huangyg\git\js.sample\brainjs\
- npm install --save brain.js
	- 报错。需要本地rebuild。先不试了。
	- 直接下载unpkg.com的brain.js,测试ok。
```
D:\huangyg\git\js.sample\brainjs>node main
net.run([1, 0]): Float32Array(1) [ 0.9334105253219604 ]
net.run([0, 1]): 1
net.run([1, 0]): 0
net.run([1, 1]): 0
net.run({ r: 1, g: 0.4, b: 0 }): { black: 0.01861307956278324, white: 0.9824023246765137 }
net.run({ r: 1, g: 0.4, b: 0 }): { black: 0.196854829788208, white: 0.8054252862930298 }
```	
- main.html用<script src="//unpkg.com/brain.js"></script>，测试ok。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.19.[playwright]任务&body=日期: 2025.07.19.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250719.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250719144000"></a>
## 14:40 ~ 15:39
## learn: [playwright]

- https://playwright.nodejs.cn/
- d:\huangyg\git\js.sample\playwright\
- npm init playwright@latest
- 用page.content()抓取的页面，返回http 500错误。没有实际内容。
- 不适合raw项目的营养成分表抓取。遇到其它需求时再另外安排试用。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.19.[佯谬及二次革命]任务&body=日期: 2025.07.19.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250719.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250719160000"></a>
## 16:00 ~ 16:59
## learn: [佯谬及二次革命]

- 学习相关数学概念后，重新消化 https://wuli.iphy.ac.cn/en/article/pdf/preview/10.7693/wl20221201.pdf
	- 贝尔不等式把理论上的争论，转化成实验友好的不等式判据。
	- 贝尔实验的“定域性漏洞”和“测量漏，几十年接力终于消除漏。介绍诺奖的价值。
	- 因果律：
		- √ 抛硬币是因，50%【正面向上+反面向下】+50%【正面向下+反面向上】是果。
		- × 正面向上是因，反面向下是果。
		- × 观察正面是因，反面朝向是果。
	- 量子导引quantum steering和系综（Ensemble https://baike.baidu.com/item/%E7%B3%BB%E7%BB%BC%E8%AF%A0%E9%87%8A/22361465 ）
- 下面时间片重点看看图7开始的新实验，也是作者团队的贡献。弱纠缠、强非定域性。
