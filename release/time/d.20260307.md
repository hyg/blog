# 2026.03.07.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260307190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7410 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4485 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - js的第9号事项：passportjs
  - learn的第10号事项：Camunda Zeebe / Temporal.io
  - learn的第11号事项：Flink Complex Event Processing，直接运行 DMN 4Flink 或 Rego-on-Flink 扩展。
  - learn的第13号事项：OpenFGA/SpiceDB(Zanzibar模型)

- 60分钟时间片：
  - learn的第2号事项：XSTATE https://xstate.js.org/
  - js的第2号事项：TensorFlow.js
  - learn的第3号事项：按petri网定义设计几个实例
  - learn的第4号事项：Zapier

- 90分钟时间片：
  - learn的第1号事项：HPKE（Hybrid Public Key Encryption，RFC 9180）
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第27号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.07.[无名任务]任务&body=日期: 2026.03.07.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260307.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260307190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- awiki.ai网站和python代码似乎稳定一点了。继续移植到nodejs。
	- did创建和注册ok，auth(获取jwt)还没有通过。
	- qwen --resume 042e54f4-dea2-4ed6-ae78-e39cada73862
	- opencode -s ses_336a27800ffeizToF7Wui6wXok

### 1.1 awiki.ai 平台架构

```
┌─────────────────────────────────────────────────────────────────┐
│                      awiki.ai 平台                               │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ DID Server   │  │ Message Svr  │  │  Social Svr  │         │
│  │              │  │              │  │              │         │
│  │ - 存储 DID   │  │ - 消息转发   │  │ - Profile    │         │
│  │ - /did.json  │  │ - 需要 JWT   │  │ - 关注系统   │         │
│  │ (公开访问)   │  │              │  │ - 需要 JWT   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  所有功能型服务器共享同一个 DID Server                            │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 标准认证流程（DID Server 与功能型 Server 分离）

```
┌─────────┐         ┌──────────────────┐         ┌──────────────────┐
│  Agent  │         │   DID Server     │         │  Functional Svr  │
│         │         │  (awiki.ai)      │         │  (awiki.ai)      │
└────┬────┘         └────────┬─────────┘         └────────┬─────────┘
     │                       │                            │
     │  1. create_identity() │                            │
     │     生成密钥对         │                            │
     │     构建 DID Document  │                            │
     │                       │                            │
     │  2. register_did()    │                            │
     │     (DID + Proof)     │                            │
     │ ─────────────────────>│                            │
     │                       │                            │
     │                       │ 验证 DID Document          │
     │                       │ 验证 Proof 签名             │
     │                       │ 保存 DID 和公钥             │
     │                       │                            │
     │  3. 返回 user_id      │                            │
     │     (此时还没有 JWT)   │                            │
     │ <─────────────────────│                            │
     │                       │                            │
     │                       │                            │
     │  4. get_jwt_via_wba() │                            │
     │     (DID WBA 签名)     │                            │
     │ ──────────────────────────────────────────────────>│
     │                       │                            │
     │                       │  GET /did.json             │
     │                       │  获取公钥                  │
     │                       │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │
     │                       │                            │
     │                       │ 验证 DID WBA 签名           │
     │                       │ 颁发 JWT                   │
     │                       │                            │
     │  5. 返回 access_token │                            │
     │     (JWT for this service)                          │
     │ <───────────────────────────────────────────────────│
     │                       │                            │
     │                       │                            │
     │  6. 使用 JWT 访问功能  │                            │
     │     Authorization: Bearer <JWT>                     │
     │ ──────────────────────────────────────────────────>│
     │                       │                            │
     │                       │ 验证 JWT                   │
     │                       │ 提供功能服务               │
     │                       │                            │
     │ <───────────────────────────────────────────────────│
     │                       │                            │
```

**关键点**：
1. **`create_identity()`** - 本地生成密钥对和 DID Document（不联网）
2. **`register_did()`** - 向 DID Server 注册身份（一次性）
3. **`get_jwt_via_wba()`** - 向**每个**功能型 Server 申请 JWT（多次）

### 1.3 awiki.ai 的特殊情况（DID Server + 功能型 Server 合一）

```
┌─────────┐         ┌────────────────────────────────────┐
│  Agent  │         │        awiki.ai                    │
│         │         │  (DID Server + Message Server)     │
└────┬────┘         └─────────────┬──────────────────────┘
     │                            │
     │  1. create_identity()      │
     │     生成密钥对              │
     │     构建 DID Document       │
     │                            │
     │  2. register_did()         │
     │     (DID + Proof)          │
     │ ─────────────────────────> │
     │                            │
     │                            │ 验证 DID Document
     │                            │ 验证 Proof 签名
     │                            │ 保存 DID 和公钥
     │                            │
     │  3. get_jwt_via_wba()      │
     │     (DID WBA 签名)          │
     │ ─────────────────────────> │
     │                            │
     │                            │ 验证 DID WBA 签名
     │                            │ 颁发 JWT (Message Server)
     │                            │
     │  4. 返回 access_token      │
     │     (JWT for Message Svr)  │
     │ <───────────────────────── │
     │                            │
```

**关键点**：
- awiki.ai 将 DID Server 和 Message Server 合并
- `create_authenticated_identity()` **连续调用**了三个步骤：
  1. `create_identity()` - 创建身份
  2. `register_did()` - 注册身份（返回 user_id）
  3. `get_jwt_via_wba()` - 获取 Message Server 的 JWT

- **但这三个步骤本质上是独立的**：
  - 步骤 1+2 只对 DID Server 做一次
  - 步骤 3 对**每个**功能型 Server 各做一次

### 1.4 Python create_authenticated_identity() 完整流程

**文件位置**: `scripts/utils/auth.py`

```python
async def create_authenticated_identity(
    client: httpx.AsyncClient,
    config: SDKConfig,
    name: str | None = None,
    is_public: bool = False,
    is_agent: bool = False,
    role: str | None = None,
    endpoint_url: str | None = None,
    services: list[dict[str, Any]] | None = None,
) -> DIDIdentity:
    """One-stop creation of a complete DID identity (generate keys -> register -> obtain JWT)."""
    
    # 步骤 1: 创建身份（本地生成，不联网）
    identity = create_identity(
        hostname=config.did_domain,
        path_prefix=["user"],
        proof_purpose="authentication",
        domain=config.did_domain,
        services=services,
    )
    
    # 步骤 2: 注册 DID（向 DID Server）
    reg_result = await register_did(
        client,
        identity,
        name=name,
        is_public=is_public,
        is_agent=is_agent,
        role=role,
        endpoint_url=endpoint_url,
    )
    identity.user_id = reg_result["user_id"]
    
    # 步骤 3: 获取 JWT（向功能型 Server，此处 awiki.ai 既是 DID Server 也是 Message Server）
    identity.jwt_token = await get_jwt_via_wba(client, identity, config.did_domain)
    
    return identity
```

### 1.5 对比重点：get_jwt_via_wba() / getJwtViaWba()

**为什么特别对比这个函数？**

1. **步骤 1+2 已确认一致** - Python 和 Node.js 的 `create_identity()` 和 `register_did()` 已经验证一致
2. **步骤 3 是独立流程** - `get_jwt_via_wba()` 是向功能型 Server 申请 JWT 的独立步骤
3. **正常情况下多次调用** - 对每个功能型 Server（Message, Social, etc.）都要调用一次
4. **awiki.ai 特殊情况** - 因为 DID Server 和 Message Server 合一，所以在注册后**立即**调用