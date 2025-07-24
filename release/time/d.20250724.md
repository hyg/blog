# 2025.07.24.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~12:44	learn: [去中心化节点](#20250724093000)
- 14:07~15:46	learn: [百炼平台API](#202507241407000)
- 16:00~16:59	PSMD: [PSMD agent AI的内部角色和功能](#20250724160000)
- 19:00~22:39	learn: [claude code + kimi K2 @ bailian](#20250724190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4316 | 9214 | 7845 |
| PSMD | 4000 | 510 | 3490 | 1170 |
| ego | 2530 | 290 | 2240 | 1305 |
| infra | 2000 | 335 | 1665 | 210 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 2751 | -751 | 2520 |
| js | 1000 | 340 | 660 | 1650 |

---
waiting list:


- 30分钟时间片：
  - PSMD的第1号事项：PSMD agent AI的内部角色和功能
  - js的第1号事项：a2a-js
  - learn的第1号事项：claude code + kimi K2 @ bailian
  - learn的第6号事项：react ink

- 60分钟时间片：
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。

- 90分钟时间片：
  - ego的第3号事项：基于真实数据标志财务报表
  - infra的第3号事项：schema立项。
  - xuemen的第3号事项：mail server
  - PSMD的第4号事项：子1609:基于公司、合同

- 195分钟时间片：
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：machines model
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.24.[去中心化节点]任务&body=日期: 2025.07.24.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250724.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250724093000"></a>
## 09:30 ~ 12:44
## learn: [去中心化节点]

- 重新了解bittorrent-dht，它底层是k-rpc-socket、k-rpc。从这里下手试试能不能传输数据。
- dht._rpc是k-rpc的实例，k-rpc把整个RPC都exports了。
- k-rpc包的index.js中require了k-rpc-socket，socket就是实例。
- k-rpc-socket是dgram的封装，加上了bencode等dht层业务。

- 另一方面，k-rpc-socket的构造函数使用opt参数中，可以设置外来socket。
	- this.socket = opts.socket || dgram.createSocket('udp4')
	- 这个opt又来自k-rpc的构造函数的opt。
		- this.socket = opts.krpcSocket || socket(opts)
	- 在dht的构造函数中，可以在opt中直接传动krpc实例，也可以在自己opt参数上叠加idLength，作为opt去构造新的k-rpc。
		- this._rpc = opts.krpc || krpc(Object.assign({ idLength: this._hashLength }, opts))
	- 所以在dht构造时，用dgram实例作为opt成员是可行的。
- dht._rpc.socket 是k-rpc-socket的实例，dht._rpc.socket.socket是dgram的实例。
	- 原生的 message 事件是在 底层 dgram.Socket 实例 上触发，即：dht._rpc.socket.socket.on('message', ...)
	- 如果想在 不破坏 DHT 的情况下 复用同一个 UDP 端口，应监听 dht._rpc.socket.socket，而不是 dht._rpc.socket。
- 参数和bencode
- dht._rpc.socket.send是 (peer, message, cb)格式，message会被bencode处理，因此不会在接收方触发dht warning。
- dht._rpc.socket.socket.send是(buf, offset, length, port, address[, callback])，buf直接发出，会在接收方触发dht warning。

- 这次使用dht._rpc.socket.socket.send，公网和内网联调ok：
```
message event Message sent to { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 993 }
messge event: 笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本发现你了。 { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 1010 }
message event Message sent to { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 1010 }
messge event: 笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本发现你了。 { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 1027 }
message event Message sent to { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 1027 }
messge event: 笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本:server:笔记本发现你了。 { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 1044 }
message event Message sent to { address: '221.218.141.220', family: 'IPv4', port: 8702, size: 1044 }
found potential peer X��H<N}�mQ�ω��#$221.218.141.220:7654 through 93.40.209.119:19163
found potential peer X��H<N}�mQ�ω��#$221.218.141.220:29113 through 93.40.209.119:19163
found potential peer X��H<N}�mQ�ω��#$115.28.214.237:20000 through 93.40.209.119:19163
found node:  93.40.209.119 19163 0
peer event Message sent to { host: '221.218.141.220', port: 7654 }
peer event Message sent to { host: '221.218.141.220', port: 29113 }
peer event Message sent to { host: '115.28.214.237', port: 20000 }
messge event: server发现你了。 { address: '115.28.214.237', family: 'IPv4', port: 20000, size: 21 }
found node:  173.249.33.72 35146 0
found node:  173.249.19.73 27811 0
found node:  46.232.211.243 64112 0
found potential peer X��H<N}�mQ�ω��#$115.28.214.237:20000 through 41.144.1.6:20158
found potential peer X��H<N}�mQ�ω��#$221.218.141.220:7654 through 41.144.1.6:20158
found potential peer X��H<N}�mQ�ω��#$221.218.141.220:29113 through 41.144.1.6:20158
found node:  41.144.1.6 20158 0
peer event Message sent to { host: '115.28.214.237', port: 20000 }
peer event Message sent to { host: '221.218.141.220', port: 7654 }
peer event Message sent to { host: '221.218.141.220', port: 29113 }
messge event: server发现你了。 { address: '115.28.214.237', family: 'IPv4', port: 20000, size: 21 }
```

- 前面主要的问题时替换了dht的message event listener，而不是dht._rpc.socket.socket的。
- 下一个时间片看看NAT打洞方案，如果可行就设计一套简单应用协议，实践看看后面会遇到什么。

- 相关阅读材料：
```
# STUN 服务器
stun.l.google.com:19302:
  summary: Google 提供的免费 STUN 服务，全球通用但国内偶有不稳。

stun.miwifi.com:3478:
  summary: 小米路由器提供的国内 STUN 节点，实测在中国网络环境下延迟更低、可达性更好。

# Node.js 运行时
nodejs:
  summary: 运行示例代码所需的 JavaScript 运行时。

# npm 包
bittorrent-dht:
  summary: 无需 Tracker 的分布式哈希表实现，用于节点发现与地址交换。

stun:
  summary: 轻量级 STUN 客户端库，用来获取本机经 NAT 后的公网地址与端口。

# 网络协议
DHT (Mainline DHT):
  summary: BitTorrent 生态的分布式节点发现协议，仅暴露 160 bit info_hash，不泄漏明文内容或双方地址。

UDP hole punching:
  summary: 通过同时向对方的公网映射端口发包，实现 NAT 穿透并建立点对点直连。
```
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.24.[百炼平台API]任务&body=日期: 2025.07.24.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250724.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="202507241407000"></a>
## 14:07 ~ 15:46
## learn: [百炼平台API]

- 模型和价格： https://help.aliyun.com/zh/model-studio/models
	- QwQ -> Max -> Plus ->  Turbo 
	- Long：长上下文,价格在plus和turbo之间。
	- Omni Omni-Realtime: 多模态	
	- QvQ: 视觉
- https://bailian.console.aliyun.com/?tab=api#/api/?type=model&url=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F2712576.html
- Temperature 和 top_p: 由于temperature与top_p均可以控制生成文本的多样性，因此建议您只设置其中一个值。
	- https://help.aliyun.com/zh/model-studio/text-generation#ad7b336bec5fw
- JSON Mode: 包括输入和输出都可以运用jason
	- https://help.aliyun.com/zh/model-studio/json-mode
- batch模式，部分模型半价。
	- https://help.aliyun.com/zh/model-studio/batch-interfaces-compatible-with-openai	
	- Batch调用不支持预付费（节省计划），且不享受免费额度、Context Cache等优惠。

- D:\huangyg\git\js.sample\bailian\openai.js
- npm install dotenv --save
- npm i openai
- 系统提示：`你是一名资深律师，同时拥有高级会计师资质。委托人要求在每次在对话内容尾部以json格式提供以下意见：
	1. 对话内容依赖哪些假设，根据上下文可能不是唯一情形；
	2. 每项假设的其它可能情形有哪些；
	3. 每种并列的情形，现实中存在的范围和比例，以及对话题的影响；`
- 问题：https://www.zhihu.com/question/13476050739/answer/1930906928839652321
	
```
首先，恭喜你晋升为部门主管！这是一个重要的职业里程碑，也意味着你将面临新的挑战。作为管理者，你的角色不仅仅是完成任务，更重要的是要激励团队、促进沟通以及做出决策。以下是一些建议帮助你更好地适应这个新角色：

1. **明确目标与期望**：确保每位团队成员都清楚地知道他们的工作目标是什么，以及如何衡量成功。这有助于保持团队的方向一致，并且能够提高工作效率。

2. **建立有效沟通**：作为领导者，你需要成为一个良好的倾听者。鼓励开放式的讨论，让员工感到他们可以自由表达自己的想法和担忧。同时也要学会清晰准确地传达信息。

3. **培养信任关系**：通过公平对待所有人、尊重差异并认可成就来赢得团队的信任。当人们相信你是公正无私的时候，他们会更愿意跟随你。

4. **授权给团队成员**：给予下属适当的自主权去完成任务或项目。这不仅可以减轻你的负担，还能增强他们的责任感和成就感。

5. **自我反思与成长**：定期评估自己作为领导者的表现，并寻找改进的机会。参加相关培训课程或者阅读有关管理的书籍都是很好的方式。

6. **保持积极乐观的态度**：面对困难时保持冷静，用积极正面的心态去影响周围的人。记住，情绪是可以传染的。

7. **平衡工作与生活**：确保有足够的休息时间，保持良好的身心健康状态。一个健康快乐的领导更容易激发团队的积极性。

对于您的情况，这里提供一些关于对话内容依赖的假设及其可能情形的意见：
```
```json
{
  "assumptions": [
    {
      "description": "假定您所在的企业文化支持开放式沟通。",
      "alternatives": ["企业文化封闭保守，不鼓励员工之间或与上级之间的直接交流。"],
      "ranges_and_impacts": {
        "range": "大约20%至30%的企业可能存在较为封闭的文化环境。",
        "impact": "在这样的环境中实施上述建议可能会遇到更多障碍，需要采取额外措施以促进有效沟通。"
      }
    },
    {
      "description": "假设您已经具备了基本的管理和人际交往技能。",
      "alternatives": ["如果完全缺乏这些基础能力，则需要从零开始学习。"],
      "ranges_and_impacts": {
        "range": "根据个人经历不同，这部分人群占比难以量化，但通常初任管理者会面临这种情况。",
        "impact": "对于完全没有经验的人来说，初期可能会更加艰难，需要投入更多时间和精力进行学习和实践。"
      }
    }
  ]
}
```
- 问题：https://www.zhihu.com/question/1930533074447370221/answer/1930759928101987949
```
D:\huangyg\git\js.sample\bailian>node openai.mjs
您提到的“认知觉醒后，重新思考决定我未来发展的高度”这一观点非常深刻。个人未来发展高度受到多种因素的影响，包括但不限于教育背景、工作经验、人际关系网络、机遇以及最重要的——个人的认知与决策能力。其中，“认知觉醒”可以被视为个体开始意识到自身潜能，并主动采取行动去实现自我价值的过程。这不仅涉及到对自己兴趣爱好、优势劣势的认识，还包括对外部环境变化的敏感度及适应能力。

### 1. 对话内容依赖哪些假设

- **假设一**：个人可以通过认知觉醒提升自我意识，进而影响其职业发展路径。
- **假设二**：外部条件（如经济状况、行业趋势等）对个人发展有一定限制作用，但并非决定性因素。
- **假设三**：持续学习和个人成长是提高未来发展潜力的关键。

### 2. 每项假设的其它可能情形

- **对于假设一**：有人可能认为先天条件（比如家庭背景、智力水平等）才是决定个人成就的主要因素。
- **对于假设二**：也存在观点指出，在某些情况下，外部环境的确能够极大程度上限制甚至决定了一个人能达到的高度。
- **对于假设三**：虽然大多数人认同终身学习的重要性，但也有人强调实践经验或特定技能训练比纯粹的知识积累更为关键。

### 3. 每种并列的情形，现实中存在的范围和比例，以及对话题的影响

- 在现实生活中，关于成功要素的看法因人而异。根据不同的研究和社会调查结果估计，大约有60%至70%的人群更倾向于相信通过努力可以改变命运；而剩余部分则可能更加重视先天条件或其他不可控因素的作用。这种差异直接关系到个人如何规划自己的职业生涯和发展策略。
- 外部环境确实会对个人产生重要影响，尤其是在资源分配不均的社会中。然而，即使在较为不利的情况下，仍有约40%-50%左右的人能够通过不懈奋斗突破现有局限，这表明主观能动性仍然是不可忽视的力量。
- 至于学习与实践之间的平衡问题，则往往取决于具体行业和个人目标。一般而言，在科技快速迭代的信息时代背景下，持续更新知识体系变得尤为重要，但这并不意味着忽视了实际操作经验的价值。理想状态下，两者应该相辅相成，共同促进个人成长与发展。
```
```json
{
  "assumptions": [
    {
      "description": "个人可以通过认知觉醒提升自我意识，进而影响其职业发展路径。",
      "alternatives": ["先天条件（如家庭背景、智力水平等）是决定个人成就的主要因素。"],
      "impact_range": "约60%至70%的人群更倾向于相信通过努力可以改变命运。",
      "influence_on_topic": "这种差异直接关系到个人如何规划自己的职业生涯和发展策略。"
    },
    {
      "description": "外部条件（如经济状况、行业趋势等）对个人发展有一定限制作用，但并非决定性因素。",
      "alternatives": ["在某些情况下，外部环境的确能够极大程度上限制甚至决定了一个人能达到的高度。"],
      "impact_range": "即使在较为不利的情况下，仍有约40%-50%左右的人能够通过不懈奋斗突破现有局限。",
      "influence_on_topic": "这表明主观能动性仍然是不可忽视的力量。"
    },
    {
      "description": "持续学习和个人成长是提高未来发展潜力的关键。",
      "alternatives": ["有些人强调实践经验或特定技能训练比纯粹的知识积累更为关键。"],
      "impact_range": "两者应该相辅相成，共同促进个人成长与发展。",
      "influence_on_topic": "在科技快速迭代的信息时代背景下，持续更新知识体系变得尤为重要，但这并不意味着忽视了实际操作经验的价值。"
    }
  ]
}
```

- 明天观察计费情况： https://bailian.console.aliyun.com/?tab=model#/model-market/detail/qwen-max
- 后面的时间片试一下百炼平台的kimi模型，然后是有结构的多轮对话。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.24.[PSMD agent AI的内部角色和功能]任务&body=日期: 2025.07.24.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250724.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250724160000"></a>
## 16:00 ~ 16:59
## PSMD: [PSMD agent AI的内部角色和功能]

- 每个角色都配一个AI助理角色
- 建模者：设计核心权利分配模型，明确修订和任免关系。
- 部署者：模型与各项资源的绑定，作为共同体内部最顶级的修订和任免接口。
- 其它角色：由模型规定。
	- 董事：工作日志（尤其是直接指挥）-> 修订规章、任免人员
	- 监事：工作日志 -> 违规
	- 管理员：规章未定义事项 -> 直接指挥（通用工单）
	- 成员：工单（必选、可选、不可选）-> 工作成果
- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.24.[claude code + kimi K2 @ bailian]任务&body=日期: 2025.07.24.%0D%0A序号: 11%0D%0A手稿:../../draft/2025/20250724.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250724190000"></a>
## 19:00 ~ 22:39
## learn: [claude code + kimi K2 @ bailian]

- 在本地搭建proxy，把百炼平台上的kimi K2作为claude code的模型使用。
- d:\huangyg\git\js.sample\bailian\ccproxy.js
- 反复修改后，返回参数和真正openai API还是有差别，
```
✅ 代理 http://localhost:3000/v1/messages
⬅️ Claude → Proxy {"model":"claude-3-5-haiku-20241022","max_tokens":512,"messages":[{"role":"user","content":"ping"}],"system":[{"type":"text","te...
⬅️ Claude → Proxy {"model":"moonshot-kimi-k2-instruct","messages":[{"role":"user","content":[{"type":"text","text":"<system-reminder>\nAs you answ...
➡️ Proxy → Bailian 200 "data: {\"choices\":[{\"delta\":{\"content\":\"\",\"role\":\"assistant\"},\"index\":0,\"logprobs\":null,\"finish_reason\":null}]...
➡️ Proxy → Bailian 200 "data: {\"choices\":[{\"delta\":{\"content\":\"\",\"role\":\"assistant\"},\"index\":0,\"logprobs\":null,\"finish_reason\":null}]...
⬅️ Claude → Proxy {"model":"moonshot-kimi-k2-instruct","messages":[{"role":"user","content":[{"type":"text","text":"<system-reminder>\nAs you answ...
➡️ Proxy → Bailian 200 {"choices":[{"message":{"content":"I'm not sure what you need help with. You've sent several `ping` messages, but haven't provid...
^C
```

```
> ping
  ⎿  API Error: Cannot read properties of undefined (reading 'filter')
  ⎿  API Error: Cannot read properties of undefined (reading 'filter')
  ⎿  Interrupted by user

> ping
  ⎿  API Error: Cannot read properties of undefined (reading 'filter')
```
- 再抽点时间试试问deepseek，因为缺乏文档，如果还报错就不值得再投入。