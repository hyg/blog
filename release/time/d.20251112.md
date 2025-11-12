# 2025.11.12.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~17:29	PSMD: [SOP(Standard Operation Procedure)数据结构](#20251112160000)
- 19:00~19:59	check: [零散笔记](#20251112190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2812 | 10718 | 9915 |
| PSMD | 4000 | 360 | 3640 | 1365 |
| ego | 2530 | 330 | 2200 | 1395 |
| infra | 2000 | 30 | 1970 | 450 |
| xuemen | 1000 | 195 | 805 | 600 |
| raw | 1000 | 90 | 910 | 150 |
| learn | 2000 | 1707 | 293 | 4425 |
| js | 1000 | 100 | 900 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：Ontology + SWRL（Semantic Web Rule Language）
  - learn的第10号事项：Common Logic (ISO/IEC 24707)
  - js的第11号事项：passportjs
  - learn的第11号事项：Camunda Zeebe / Temporal.io

- 60分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - xuemen的第1号事项：月度事务
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：node.js
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第2号事项：健康消费合作社建模
  - infra的第2号事项：petri网工作流引擎设计
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.12.[SOP(Standard Operation Procedure)数据结构]任务&body=日期: 2025.11.12.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251112.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251112160000"></a>
## 16:00 ~ 17:29
## PSMD: [SOP(Standard Operation Procedure)数据结构]

```
有一套主要由股东会、董事会、监事会、总经理使用的办公软件需要在更底层使用camunda、tempporal、aireflow等工作流引擎，部分会议决议以工作引擎的语法输出（含数字签名），由执行部门的办公软件引入使用。
1. 对整套系统给出概要设计文档。
2. 要求设计统一API接口，包括工作流引擎和不同层办公软件UI、非UI逻辑的交互接口。对接口要求给出详细设计文档。
3. 针对各工作流引擎和API接口之间的适配模块，给出详细设计，最好有示范代码。
```
- GLM的方案比较合理，设计原则 
    - RESTful风格： 使用标准HTTP方法和资源路径。
    - 引擎无关性： API设计必须抽象，不暴露任何特定引擎（如Camunda的task或Temporal的signal）的概念。
    - 版本控制： API路径中应包含版本号，如 /api/v1/...。
    - 统一认证： 使用JWT或OAuth 2.0进行身份验证和授权。
    - 标准化错误响应： 所有错误都遵循统一的JSON格式。
- 核心资源定义

| 资源 | 描述 | URI 模板 |
|---|---|---|
| `WorkflowDefinitions` | 工作流定义/模板 | `/api/v1/workflows` |
| `WorkflowInstances` | 一个正在运行的工作流实例 | `/api/v1/instances` |
| `HumanTasks` | 分配给用户的人工任务 | `/api/v1/tasks` |
| `Resolutions` | 已签署的最终决议 | `/api/v1/resolutions` |

- 适配器模式设计。我们将定义一个统一的 IWorkflowEngineAdapter 接口，所有引擎的适配器都必须实现此接口。 
```
// src/adapters/IWorkflowEngineAdapter.ts

export interface Task {
  taskId: string;
  instanceId: string;
  name: string;
  taskType: string;
  // ... 其他通用字段
}

export interface Instance {
  instanceId: string;
  workflowKey: string;
  status: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'TERMINATED';
  // ... 其他通用字段
}

export interface IWorkflowEngineAdapter {
  // 启动实例
  startInstance(workflowKey: string, businessKey: string, variables: object): Promise<Instance>;

  // 获取实例状态
  getInstance(instanceId: string): Promise<Instance>;

  // 获取用户任务列表
  getTasksForUser(assignee: string): Promise<Task[]>;

  // 完成任务
  completeTask(taskId: string, variables: object): Promise<void>;

  // 获取实例的所有变量
  getInstanceVariables(instanceId: string): Promise<object>;
}
```

- kimi因为上下文太长开始胡编乱造
- doubao划分层次太多、统一适配到camunda接口、可以参考。

```
适配层  
├─ 抽象接口（IWorkflowAdapter）  
│  ├─ deploy(flowDefinition: FlowDefinition): Promise<DeployResult>  
│  ├─ startInstance(flowId: string, variables: Variables): Promise<Instance>  
│  ├─ completeTask(taskId: string, variables: Variables, signature?: string): Promise<TaskResult>  
│  └─ getInstance(instanceId: string): Promise<InstanceDetail>  
├─ 具体实现  
│  ├─ CamundaAdapter（实现IWorkflowAdapter）  
│  ├─ TemporalAdapter（实现IWorkflowAdapter）  
│  └─ AirflowAdapter（实现IWorkflowAdapter）  
└─ 引擎路由服务（EngineRouter）：根据流程类型选择适配的引擎  
```
- 抽象接口定义
```
// src/adapter/IWorkflowAdapter.ts  
export interface Variables { [key: string]: any }  
export interface FlowDefinition {  
  id?: string;  
  name: string;  
  engineType: 'camunda' | 'temporal' | 'airflow';  
  content: string; // 统一流程描述（如简化的JSON或BPMN）  
}  
export interface Instance {  
  instanceId: string;  
  flowId: string;  
  status: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'PAUSED';  
  variables: Variables;  
}  

export interface IWorkflowAdapter {  
  deploy(def: FlowDefinition): Promise<{ flowId: string }>;  
  startInstance(flowId: string, variables: Variables): Promise<Instance>;  
  completeTask(taskId: string, variables: Variables, signature?: string): Promise<void>;  
  getInstance(instanceId: string): Promise<Instance>;  
}  
```
- 引擎路由服务
```
// src/adapter/EngineRouter.ts  
import { IWorkflowAdapter, FlowDefinition, Instance, Variables } from './IWorkflowAdapter';  
import { CamundaAdapter } from './CamundaAdapter';  
import { TemporalAdapter } from './TemporalAdapter';  

export class EngineRouter {  
  private adapters: Record<string, IWorkflowAdapter>;  

  constructor() {  
    this.adapters = {  
      camunda: new CamundaAdapter('http://camunda:8080/engine-rest'),  
      temporal: new TemporalAdapter('http://temporal:7233')  
    };  
  }  

  // 根据流程类型选择适配器  
  private getAdapter(engineType: string): IWorkflowAdapter {  
    const adapter = this.adapters[engineType];  
    if (!adapter) throw new Error(`Unsupported engine: ${engineType}`);  
    return adapter;  
  }  

  // 代理所有接口方法  
  async deploy(def: FlowDefinition) {  
    return this.getAdapter(def.engineType).deploy(def);  
  }  

  async startInstance(engineType: string, flowId: string, variables: Variables) {  
    return this.getAdapter(engineType).startInstance(flowId, variables);  
  }  

  // ... 其他方法（completeTask、getInstance等）  
}  
```
- 适配层与 API 网关集成。API 网关通过调用EngineRouter屏蔽引擎差异，例如
```
// API网关层示例（Express.js）  
import express from 'express';  
import { EngineRouter } from './adapter/EngineRouter';  

const app = express();  
app.use(express.json());  
const engineRouter = new EngineRouter();  

// 启动流程实例接口  
app.post('/api/v1/instances', async (req, res) => {  
  try {  
    const { flowId, engineType, variables } = req.body;  
    const instance = await engineRouter.startInstance(engineType, flowId, variables);  
    res.json(instance);  
  } catch (err) {  
    res.status(500).json({ error: err.message });  
  }  
});  
```
- 下个时间片汇总方案，给出最终API接口方案。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.11.12.[无名任务]任务&body=日期: 2025.11.12.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20251112.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251112190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 根据银行APP提示联系客户经理。后台搜索没有问题，明天实际操作再看。
