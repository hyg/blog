# 2026.04.05.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~10:59	PSMD: [权利分配语法 & engine](#20260405093000)
- 14:00~15:29	ego: [新版实时手稿](#20260405140000)
- 16:00~16:59	infra: [设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。](#20260405160000)
- 19:00~19:59	check: [零散笔记](#20260405190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 0 |
| PSMD | 4000 | 0 | 4000 | 0 |
| ego | 2530 | 0 | 2530 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.05.[无名任务]任务&body=日期: 2026.04.05.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260405.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260405093000"></a>
## 09:30 ~ 10:59
## PSMD: [权利分配语法 & engine]

- 权力、利益的分配需要不同语法。
	- 标准号：GB/T 19581-2004
	- 中文标准名称：信息技术 会计核算软件数据接口 	
	- 英文标准名称：Information technology--Data interface of accounting software

- 先按照BIP开发助手提出的几个数据结构开发分录记录（AER）、分录规则（分录模版AERT）。
	- 和SOP并列纳入修订链。
	- 业务打通之后，再拨出资源实现国标、金蝶的接口。数据内容应该相似。

- 用友：https://community.yonyou.com/index
	- https://www.yonyou.com/developer/developer/
	- https://community.yonyou.com/article/detail/10660
	- https://c2.yonyoucloud.com/iuap-hc-client/ucf-wh/client/index.html#/detail/LJQJCSSFFL1?nodeId=18c8e305-5cc6-43e7-b98e-4e3efe49fd6d&productline=CommunityDoc	

- 由于有很多小额而高频的业务，无法一笔笔人工分录，相同种类业务的分录又高度重复，因此客户提出自己开发的OA软件，在董事会、CEO、CFO三层制定不同科目的会计分录规则，这些规则应该以什么语法输出，才能导入会计软件直接生效。
```
BIP开发助手:
原理或原因分析

针对高频小额重复业务场景，通过预置规则实现自动化分录是智能会计中台的核心能力。其原理基于三层架构：

规则分层控制：董事会级定义核算框架（如科目分类体系）、CEO级设置账簿级合并规则、CFO级配置具体科目对照表，形成自上而下的控制链
动态科目匹配：通过"影响因素-科目分类-科目对照"三级映射机制，将业务特征实时匹配到预设科目
模板化执行：事项分录模板将业务字段与会计要素（科目/金额/辅助核算）建立固定映射关系，实现批量处理
解决方案
步骤1：配置分层规则语法（JSON示例）
json
{
  "ruleLevel": "BOARD", // BOARD/CEO/CFO
  "accountingSubject": {
    "subjectClass": "ASSET", // 科目分类
    "influenceFactors": [
      {
        "factorName": "paymentMethod",
        "factorValue": "ALIPAY",
        "mappingType": "FIXED" // FIXED/DYNAMIC
      }
    ]
  },
  "template": {
    "debit": {
      "subject": "1002.01", // 预设科目
      "amountSource": "transactionAmount"
    },
    "credit": {
      "subject": "6001.03",
      "amountSource": "transactionAmount"
    }
  }
}

步骤2：实施智能会计中台对接
 

影响因素设置
在财务云 > 智能会计中台 > 会计规则中心 > 影响因素设置中定义业务特征维度（如支付渠道、业务类型）

 

【影响因素设置界面截图】


 

科目对照配置
通过科目对照节点建立"业务特征值-科目"映射关系，支持多级优先级（账簿级>账簿类型级>租户级）

 

【科目对照配置示意图】


 

事项分录模板开发
使用YPD框架开发规则链组件，关键代码参考：

java
@Component("autoAccountingRule")
public class AutoAccountingRule implements IYpdCommonRul {
    @Override
    public Object execute(RulCtxVO ctx, Map<String, Object> params) {
        // 1. 解析业务特征值
        String paymentMethod = (String)params.get("paymentMethod");
        
        // 2. 调用智能中台科目匹配服务
        AccountingSubject subject = AccountingService.matchSubject(
            paymentMethod, 
            ctx.getAccountingStandards());
        
        // 3. 生成标准分录结构
        return AccountingTemplate.generateEntry(subject);
    }
}

步骤3：数据对接规范
输入数据格式：要求OA系统输出包含业务单号、交易金额、影响因素键值对的CSV文件
文件命名规则：ACCOUNTING_[账簿编码]_[日期].csv
传输方式：支持SFTP定时推送或REST API实时调用
注意事项
版本兼容性：规则语法需匹配YonBIP智能会计中台SP3及以上版本
权限隔离：董事会级规则需配置在租户级，CEO/CFO级规则需绑定具体账簿
异常处理：建议在OA系统中增加"人工复核队列"机制处理匹配失败的交易
性能优化：单文件建议不超过10万条记录，高频场景采用分批次提交
📚 参考来源
事项分录配置生成总账凭证测试讲解
事项会计中台配置
【生态开发】-YPD版本的规则链扩展代码示例
```

- 刷新页面后，产生更具体了数据结构。
```
{
  "ruleLevel": "CFO", // 规则层级：Board/CEO/CFO
  "businessType": "expense_reimbursement", // 业务类型
  "accountingAffairs": "confirm_payable", // 会计事务
  "voucherTemplate": {
    "summary": "费用报销-${department}", // 摘要模板
    "entries": [
      {
        "account": {
          "type": "dynamic", // 科目取值方式：dynamic/fixed
          "value": "6602.${cost_type}" // 动态科目或固定科目编码
        },
        "direction": "debit", // 借贷方向
        "amount": "${amount}", // 金额字段映射
        "auxiliary": { // 辅助核算
          "department": "${department}",
          "project": "${project_code}"
        }
      },
      {
        "account": {
          "type": "fixed",
          "value": "1002" // 银行存款科目
        },
        "direction": "credit",
        "amount": "${amount}"
      }
    ]
  },
  "conditions": [ // 条件公式
    {
      "field": "amount",
      "operator": ">=",
      "value": 5000,
      "action": "require_approval" // 分级控制
    }
  ]
}
```


1. 用友的哪些产品基于智能会计中台，哪些产品没有智能会计中台、需要另外设计技术方案。
2. 智能会计中台的影响因素设置、科目对照设置必须人工完成吗，是否有软件调用的接口，以适应动态变化的业务。
3. 事项分录模版是智能会计中台的功能（接口怎么调用），还是我方OA内部的功能？

```
智能会计中台相关问题解答
1. 基于智能会计中台的用友产品

根据文档分析，以下用友产品基于智能会计中台：

标准产品：YonBIP旗舰版中的财务会计、管理会计、费控服务、收入稽核清分等模块已内置智能会计中台功能
异构业财产品：供应链服务(采购入库、销售出库等)、生产制造服务(生产订单、委外订单等)通过"异构业财事项"接入智能会计中台
依赖产品：如文档《YonBIP 5.0.2507旗舰版弱依赖产品盘清单-大财务》所示，收入稽核清分的交易立账功能需依赖智能会计中台

需要另外设计技术方案的产品包括：

非标准业务系统(如客户自建OA系统)
未预置会计事务的行业产品/ISV产品
业务结构与标准产品差异较大的异构系统
2. 影响因素设置与科目对照设置

影响因素设置和科目对照设置支持以下方式：

人工配置：可通过财务云 > 智能会计中台 > 会计规则中心界面进行人工配置
接口调用：提供API接口支持动态调整：
影响因素设置接口：支持通过事件中心消息动态更新影响因素
科目对照接口：可通过会计平台引擎API实时更新科目对照关系
报文格式示例：
json
{
  "eventInfo": {
    "reqId": "请求ID",
    "srcBusiId": "来源业务ID",
    "action": "update" 
  },
  "data": {
    "影响因素字段": "新值"
  }
}

3. 事项分录模板功能归属

事项分录模板属于智能会计中台的核心功能：

功能位置：财务云 > 智能会计中台 > 会计规则中心 > 事项分录入账配置
接口调用：
通过SDK调用：需添加fi-eeac-open-api依赖
接口示例：
java
@BillPlugin(busiObj = "业务对象编码")
public class DemoPlugin extends AbstractBillPlugin {
    @Autowired
    private BillAuditSendEeacService billAuditSendEeacService;
    
    public void afterAudit(YpdBillContext context) {
        // 调用事项分录生成接口
    }
}

与OA集成：需在OA中开发对接逻辑，通过事件中心传递业务数据
注意事项
非标准业务系统接入需先完成业务事项注册
科目对照修改后需重新生成会计事务才能生效
事项分录模板有层级优先级(账簿级 > 账簿类型级 > 租户级)
📚 参考来源
业务单据对接会计平台
YonBIP 5.0.2507旗舰版弱依赖产品盘清单-大财务
事项会计中台配置
事项会计中台业财对接
```

- 用友有没有议事规则模块，能根据导入的规则文件，具体管理会议发言和表决，提取出合规的决议。用友有没有模块可以实现标准业务流程（SOP），第三方调用接口提交SOP的描述脚本，然后员工在用友产品中执行SOP。也就是把OA定制开发在用友产品上。

```
用友BIP平台确实提供了相关功能模块和扩展能力来满足您的需求，以下是具体分析：

1. 议事规则模块（会议管理）

用友BIP的 智能会议管理 模块支持会议全流程管理，但需结合规则引擎实现您的需求：

基础功能：
会议预约、议题管理、发言记录、表决管理。
与OA、邮件、IM系统集成。
扩展实现：
规则引擎：通过 BIP流程引擎 或 低代码平台 自定义议事规则（如发言时长、表决条件）。
文件导入：支持上传JSON/XML格式的规则文件，解析后动态生成会议流程。
合规决议提取：结合 自然语言处理（NLP） 或 规则匹配，从会议记录中提取关键决议。
推荐方案：
使用 BIP低代码平台 开发定制模块，或通过 OpenAPI 对接第三方合规系统。
2. 标准业务流程（SOP）管理

用友BIP的 智能流程平台 支持SOP的配置、执行与第三方调用：

核心能力：
SOP模板库：预置采购、报销等标准流程，支持自定义。
脚本化扩展：通过 Groovy脚本 或 JavaScript 动态调整流程逻辑。
接口调用：提供 RESTful API 供第三方提交SOP脚本（需符合BIP数据规范）。
实现步骤：
SOP脚本提交：第三方通过接口提交JSON/YAML格式的SOP描述（示例）：
json
{
  "sopName": "采购申请",
  "steps": [
    {"action": "填写申请单", "role": "申请人"},
    {"action": "部门审批", "condition": "amount > 5000"},
    {"action": "财务复核", "role": "财务部"}
  ]
}

动态加载：用友BIP解析脚本后生成可执行的流程实例。
员工执行：员工在BIP工作台或移动端按步骤完成SOP。
集成方式：
直接调用 BIP流程引擎API（需开发适配层）。
通过 低代码平台 快速配置SOP与第三方系统的映射。
3. OA定制开发的替代方案

用友BIP的 低代码开发平台（YonBuilder） 可替代传统OA定制开发：

优势：
拖拽式配置业务流程，无需编码。
支持与ERP、CRM等模块深度集成。
典型场景：
将第三方OA的审批流迁移到BIP平台。
通过 连接器（Connector） 对接外部系统数据。
注意事项
权限控制：确保第三方接口调用和SOP执行有严格的权限管理。
脚本安全：需对第三方提交的SOP脚本做沙箱隔离和语法校验。
测试验证：建议在BIP沙箱环境测试规则文件和SOP脚本的兼容性。
推荐资源
BIP流程引擎开发文档
YonBuilder低代码平台教程
联系用友实施团队获取定制化支持（需商务对接）。

如需进一步技术细节，可提供具体场景，我会给出更精准的方案。

---
用友BIP的流程引擎和智能流程平台是其企业数字化解决方案的核心组件，以下是针对您问题的详细解答：

1. BIP流程引擎与智能流程平台的定位
(1) 产品形态
 

BIP流程引擎
是用友BIP平台的内置模块，属于 「用友BIP智能中台」 的一部分，并非独立产品。
主要服务于BIP的ERP、财务、供应链等业务系统的流程自动化需求。

 

智能流程平台
是BIP平台中**「智能中台」的扩展能力**，支持低代码流程配置和智能决策，通常与流程引擎配合使用。

(2) 关联产品

两者深度集成于以下用友BIP产品中：

用友BIP PaaS平台（核心载体）
用友BIP智能财务
用友BIP供应链云
用友BIP人力云
2. 开发调试入门指南（Node.js + Windows环境）
(1) 开发准备
 

环境要求：

Node.js 16+（建议LTS版本）
Windows 10/11（需安装WSL 2以兼容Linux依赖）
Postman/Insomnia（API调试工具）
Docker（可选，用于本地模拟BIP服务）
 

核心开发资源：

BIP开放平台（https://open.yonyou.com/）
提供RESTful API文档、SDK和示例代码。
YonBuilder低代码开发工具
支持可视化流程设计，生成可直接调用的API。
(2) 调试流程
 

模拟流程引擎环境：

通过Docker部署BIP流程引擎测试镜像（需用友提供镜像文件）。
或直接连接用友BIP沙箱环境（需申请账号）。
 

Node.js调用示例：

javascript
const axios = require('axios');

// 启动流程实例
async function startProcess() {
  const response = await axios.post('https://bip-server/api/process/start', {
    processDefinitionKey: 'expense_approval',
    variables: {
      amount: 5000,
      applicant: 'user001'
    }
  }, {
    headers: { 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' }
  });
  console.log(response.data);
}

startProcess();

 

智能流程平台扩展：

通过YonBuilder配置SOP流程，导出为JSON脚本。
使用Node.js调用智能流程平台的/api/sop/execute接口执行脚本。
(3) 调试工具链
工具	用途
VS Code	代码编辑 + YonBuilder插件
WSL 2	运行Linux依赖（如Docker）
ngrok	暴露本地Node.js服务供BIP回调
BIP流程日志	跟踪流程执行状态（需权限）
3. 关键能力对比
功能	BIP流程引擎	智能流程平台
核心目标	基础流程自动化	智能决策 + SOP管理
开发方式	API调用 + 规则脚本	低代码配置 + 外部脚本集成
Node.js集成	直接调用RESTful API	需通过适配层转换SOP脚本
适用场景	固定审批流、工单流转	动态业务流程、AI增强流程
4. 常见问题
Q：是否需要单独购买？
否。两者是BIP平台的模块，需购买BIP整体解决方案（如BIP PaaS或行业云产品）。
Q：本地开发如何绕过企业环境限制？
申请用友BIP开发者沙箱账号，获取测试环境API权限。
使用Mock数据模拟BIP接口响应（如JSON Server）。
Q：Node.js服务如何与BIP流程双向通信？
方案1：BIP流程节点配置HTTP任务，调用Node.js接口。
方案2：Node.js服务订阅BIP的消息队列（如RabbitMQ）。
5. 推荐学习路径
入门：
阅读BIP开放平台文档的「流程服务」章节。
在YonBuilder中尝试配置一个简单审批流。
进阶：
通过Postman调试BIP流程API，理解变量传递规则。
开发一个Node.js中间件，实现BIP与第三方系统的数据同步。

如需更具体的API字段说明或企业级部署方案，建议联系用友实施团队获取《BIP流程引擎技术白皮书》。
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.05.[无名任务]任务&body=日期: 2026.04.05.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260405.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260405140000"></a>
## 14:00 ~ 15:29
## ego: [新版实时手稿]


---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.05.[无名任务]任务&body=日期: 2026.04.05.%0D%0A序号: 9%0D%0A手稿:../../draft/2026/20260405.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260405160000"></a>
## 16:00 ~ 16:59
## infra: [设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。]


---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.05.[无名任务]任务&body=日期: 2026.04.05.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260405.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260405190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]


- https://www.rabbitmq.com/
	- aliyun有事件总线和MQ产品：https://www.aliyun.com/product/amqp
	
- aliyun的云工作流
	- 云工作流的流程定义语言FDL（Flow Definition Language）是一种基于YAML语言的状态机定义规范，通过定义一个状态机（状态集合）描述业务流程逻辑；在执行时，按照流程定义的状态关系结合业务运行时执行结果驱动状态流转，最终完成流程执行。
```
使用云工作流服务，您只需要按使用量付费，即按照工作流执行中实际步骤转换次数付费，例如：
    1个并行（parallel）步骤有3个分支，每个分支包含1个任务步骤，则总的步骤转换次数为4，其中包含1次并行步骤转换和3次任务步骤转换。
    1个并行循环（foreach）步骤包含1个任务步骤，执行时循环4次，则总的步骤转换次数为5，其中包含1次并行循环步骤转换和4次任务步骤转换。
    1个选择（choice）步骤包含3个分支，每个分支包含1个任务步骤，执行了其中1个分支，则总的步骤转换次数为2，其中包含1次选择步骤转换和1次任务步骤转换。
计费方式说明
以下计费单价和免费额度仅供参考，实际请以商务提供的价格和额度为准。
    每月免费额度
    每月阿里云账号（含RAM用户）累计的前5000次步骤转换免费。
    按量计费
    步骤转换计费1.7元/万次。
```
- Chat App消息服务 https://www.aliyun.com/product/chat-app
	- https://help.aliyun.com/zh/chatapp/product-overview/chatapp-message-service-pricing
- 企业邮箱：https://www.aliyun.com/product/alibaba-mail
- teambition企业协同： https://www.teambition.com/pricing


- 腾讯rabbitMQ：https://buy.cloud.tencent.com/price/rabbitmq/calculator
- https://cloud.tencent.com/product/im
