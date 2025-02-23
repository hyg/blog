# 2025.02.23.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1f)。

<a id="index"></a>
- 17:31~18:15	PSMD: [meta data微调](#20250223173100)
- 19:30~00:29	ego: [手稿从simplenote转移到飞书的设计](#20250223193000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4680 | 8850 | 5955 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 660 | 1870 | 975 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 150 | 850 | 450 |
| raw | 1000 | 405 | 595 | 870 |
| learn | 2000 | 265 | 1735 | 1230 |
| js | 1000 | 90 | 910 | 780 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：复习形神庄第九节
  - raw的第2号事项：复习形神庄第十节
  - raw的第3号事项：复习五元庄第一式
  - raw的第4号事项：复习五元庄第二式

- 60分钟时间片：
  - js的第1号事项：js class
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第2号事项：oData simple
  - js的第2号事项：learn Orbitdb

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：飞书 nodejs sdk
  - ego的第2号事项：新版本任务、子任务的数据结构
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.23.[meta data微调]任务&body=日期: 2025.02.23.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250223.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250223173100"></a>
## 17:31 ~ 18:15
## 17:31~18:14
PSMD: meta data微调

- 入门目录微调
    - 完成：条款的内部名称
    - 暂不：根据项目实践增加备注
- 注意和父项目保持一致

- git\PSMD\data\term.9d12877c.yaml
```
diff --git "a/data/term.9d12877c.yaml" "b/data/term.9d12877c.yaml"
index 3c24544..0fb73bd 100644
--- "a/data/term.9d12877c.yaml"
+++ "b/data/term.9d12877c.yaml"
@@ -21,7 +21,7 @@ item:
       建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。考虑使用PSMD的团队委托。
   - localid: "2"
     text: |
-      条件：如果工作中能按照<term.9d12877c.term.20>核实情况，按照<term.9d12877c.term.20>提供依据。
+      条件：如果工作中能按照<term.9d12877c.term.20>核实情况，按照<term.9d12877c.term.21>提供依据。
       建议：针对<term.9d12877c.term.30>、<term.9d12877c.term.31>、<term.9d12877c.term.32>、<term.9d12877c.term.33>、<term.9d12877c.term.34>安排核实。
   - localid: "3"
     text: |
@@ -61,14 +61,21 @@ item:
     termid: 91ff9448
   - localid: 附件31
     termid: 6d206b54
+    map:
+      <term.6d206b54.term.1>: <term.9d12877c.term.31>
   - localid: 附件32
     termid: 9e6bc34f
     map:
       <term.9e6bc34f.term.1>: <term.9d12877c.term.31>
   - localid: 附件33
     termid: 600f6f80
+    map:
+      <term.600f6f80.term.1>: <term.9d12877c.term.34>
+      <term.600f6f80.term.2>: <term.9d12877c.term.31>
   - localid: 附件34
     termid: '12119600'
+    map:
+      <term.12119600.term.1>: <term.9d12877c.term.31>
   - localid: 附件42
     termid: cb4ab0e9
   - localid: 附件43
```
- 分别微调：
    - git\\PSMD\\data\\term.600f6f80.yaml 
    - git\\PSMD\\data\\term.12119600.yaml 
    - git\\PSMD\\data\\term.6d206b54.yaml

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.23.[手稿从simplenote转移到飞书的设计]任务&body=日期: 2025.02.23.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250223.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250223193000"></a>
## 19:30 ~ 00:29
##  09:30~10:59
ego: 手稿从simplenote转移到飞书的设计

- simplenote api： https://simplenote.com/developers/
    - Trial*: Up to 250k requests	Free
    - *Free trial expires one year after account registration on simperium.com.
    - dashboard中并没有apikey，开发者只有sign in没有sign up， REST api中的create user需要api key。。。
- 飞书 开放平台：https://open.feishu.cn
    - 创建单独用户，以免申请权限时互相干扰。
    - 取得App ID、App Secret。
    - 文档概述：https://open.feishu.cn/document/server-docs/docs/docs/docx-v1/docx-overview
    - 文档API：https://open.feishu.cn/document/server-docs/docs/docs/upgraded-docs-openapi-access-guide
    - 自建应用获取 tenant_access_token： https://open.feishu.cn/document/server-docs/authentication-management/access-token/tenant_access_token_internal
- 飞书nodejs： https://github.com/larksuite/node-sdk
    - curl -H "Authorization: Bearer t-xxxx" https://open.feishu.cn/open-apis/bot/v3/info
        - 获得open_id: ou_xxxx
        - BODY: {"code":0,"data":{"member":{"member_id":"ou_xxx","member_type":"openid","perm":"full_access","perm_type":"container","type":"user"}},"msg":"Success"}
    

- 基础数据仍然存在git，使用git push更新。
    - 日初计划
    - 日末日志
    - 关键手稿
- 实时手稿发布在可读页面，日末整理到私有git库和日志。
- D:\huangyg\git\js.sample\feishu
    - npm install restify
    - ego应用获得folder管理权限后仍然不能创建文档，ego作为机器人加入time群组，再把time群组设为folder管理者才成功。
```
{
  "code": 0,
  "data": {
    "document": {
      "document_id": "YGKCdRKvGoRltkxRPTgciKFznif",
      "revision_id": 1,
      "title": "日小结"
    }
  },
  "msg": "success"
}
```
  - 取得文档所有块。page是标题，第一个children就是正文。直接往正文写markdown内容不会自动解析。
```
curl -H "Authorization: Bearer t-xxx" https://open.feishu.cn/open-apis/docx/v1/documents/YGKCdRKvGoRltkxRPTgciKFznif/blocks
```

- 飞书文档的各步骤操作基本测试过。和simplenode相比，至少可以操作了。纯文本输入不能自动识别markdown格式，其它问题不大。
- 增加todo项：
  - '90': 新版实时手稿
