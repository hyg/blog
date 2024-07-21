# 2024.07.21.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	PSMD: [data -> schema 迭代范例](#20240721074500)
- 14:00~15:29	xuemen: [关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告](#20240721140000)
- 16:00~16:59	PSMD: [设计条款的可执行机制](#20240721160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 4652 | 13048 | 3165 |
| PSMD | 7000 | 717 | 6283 | 525 |
| ego | 4000 | 1382 | 2618 | 540 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 120 | 1380 | 450 |
| raw | 500 | 150 | 350 | 180 |
| learn | 1500 | 1107 | 393 | 810 |
| js | 1200 | 1086 | 114 | 660 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：schema in ipld,reading time.
  - js的第1号事项：leran helia ipns,reading time.
  - learn的第2号事项：linkml, yaml-ld, reading time.
  - js的第2号事项：learn ssb db,reading time.

- 60分钟时间片：
  - ego的第1号事项：schema manifest code v0
  - raw的第1号事项：自动从网页提取营养成分表
  - PSMD的第2号事项：升级knowledge模型
  - ego的第2号事项：schema manifest law v0

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。
  - learn的第5号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.21.[data -> schema 迭代范例]任务&body=日期: 2024.07.21.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240721074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240721074500"></a>
## 7:45~10:59
PSMD: [data -> schema 迭代范例]

### level

- level n: manifest text
- level n: manifest law
- level n: manifest code
- level n+1: manifest schema 
    - schema for law
    - schema for code
- level is entity's internal param
    - map : entity A level n = entity B level m
        - what happen if entity A consider its level n = entity B level m+1, or entity B consider its level m = entity A level n+1
    - map to protocol :
        - protocol X define level 1,2,3.
        - entity A level n = protocol X level 3, so its n-1 = 2, n-2 =1...
        - entity B level m = protocol X level 1, can not understand level 2,3. 
        - or entity A spilit entity A1, entity A level n = entity A1 level 3,...
            - and entity A1 sign protocol X , and share the same levels.
    - map in spilit and joint
        - spilit, joint is protocol
        - entity A spilit into A1 and A2: A level n = A1 level n = A2 level 1, A level n+1 = A1 level n+1 = A2 level 2
            - spilit protocol level 1 = A level 1
            - A1 level 1 = spilit protocol level 1
            - A2 level 1 = spilit protocol level n
        - entity A and B joint to C: A level n = B level m = C level 1.
            - joint protocol level 1 = C level 1
            - A level n = joint protocol level 1
            - B level m = joint protocol level 1

### stage

- level n: text -> level n: law v0 -> level n+1: schema for law v1-> level n: law v1 -> ...
- level n: text -> level n: code v0 -> level n+1: schema foe code v1 -> level n: code v1 -> ...
- skip = finish with nothing
    - level n+1: scheme for law  -> level n+1: schema for code ( skip code v0)
- joint
    - level n: text ->level n: law v0-> level n: code v0-> level n+1: schema for law v1-> level n+1: schema for code v1-> law and code v1
    - or level n: law v0-> level n+1: schema for law v1-> level n+1: schema for code v1-> level n: code v1
    - or level n: law v0-> level n+1: schema for law v1, level n: code v0 -> level n+1: schema for code v1-> level n: code v1
    - ......

### version -> branch + tag

- tag: commit
- branch: comits, a queue of commit
- stage finish:
    - close a task
    - make a tag
    - the next stages -> front
- front -> stage start
    - make a branch
    - make a task

### sample

- update protocol model
    - data -> manifest field
    - validate pass
- make a task: D:\huangyg\git\js.sample\schema\task.schema.yaml
- D:\huangyg\git\js.sample\schema\README.md is  level 1: manifest text
    - level 1: law -> front
    - level 1: code -> front
- front -> D:\huangyg\git\js.sample\schema\schema.md is level 1: manifest law v0
    - make branch
    - make task: D:\huangyg\git\js.sample\schema\task.schemalawv0.yaml
- front -> D:\huangyg\git\js.sample\schema\schema.js is level 1: manifest code v0
    - make branch
    - make task: D:\huangyg\git\js.sample\schema\task.schemacodev0.yaml
    - D:\huangyg\git\js.sample\schema\schema.js
- manage the task as todo item in sample period
    - '60': schema manifest code v0
      readme: |
        - read 2024.07.21 07:45 draft
      bind:
        - '90': schema level 2 schema for code v1
    - '60': schema manifest law v0
      readme: |
        - read 2024.07.21 07:45 draft
      bind:
        - '90': schema level 2 schema for law v1

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.21.[关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告]任务&body=日期: 2024.07.21.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240721140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240721140000"></a>
## 14:00~15:29
xuemen: [关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告]

-   readme: |
    - https://www.beijing.gov.cn/hudong/gfxwjzj/zjxx/202406/t20240630_3733376.html
    - https://www.sohu.com/a/162518719_526275
    - https://www.congress.gov/bill/115th-congress/house-bill/3388
    - https://www.nhtsa.gov/vehicle-manufacturers/automated-driving-systems
      - https://www.transportation.gov/av/4
      - https://www.transportation.gov/sites/dot.gov/files/2020-02/EnsuringAmericanLeadershipA
    - https://www.transportation.gov/sites/dot.gov/files/docs/AV%20policy%20guidance%20PDF.pdf
- 说明文件
  - 小切口：关注企业发展的痛点难点，按照“有限立法”原则，以问题为导向，“小切口”突破，明确发展与安全并重、促进与规范并举管理思路
  - L3：在坚守安全底线的基础上，为L3级及以上自动驾驶汽车市场主体提供清晰、透明、可预期的制度规范，同时给后续探索实践预留空间
  - 市政府->市经济和信息化部门->交通运输、公安交管部门 = 自动驾驶汽车联合工作机制
    - 各区人民政府->组织开展自动驾驶汽车创新活动
    - 京津冀协同发展:政策互认、标准兼容、场景联通、产业协作
- 条例
  - 车辆所有人、管理人担责：车内有驾驶人的，依法对驾驶人进行处理；车内无驾驶人的，对车辆所有人、管理人进行处理。
    - 自动驾驶汽车在道路上发生故障或者发生交通事故，...车内无驾驶人的，（远程）安全员应当立即报警，车辆所有人、管理人应当保护现场、抢救受伤人员。
    - 车辆在自动驾驶系统功能激活状态下发生道路交通事故造成人身伤亡、财产损失的，属于自动驾驶汽车一方责任的，由车辆所有人、管理人承担赔偿责任。
  - 可以向生产者、销售者等进行追偿：车辆所有人、管理人依照前款规定向受害者进行赔偿后，可以依法向负有责任的生产者、销售者等进行追偿。构成犯罪的，依法追究相关责任人的刑事责任。
  - 有限绘图：
    - 应当依法取得相应等级的导航电子地图制作测绘资质。
    - 利用自动驾驶汽车只对车辆及周边道路设施的形状、大小、空间位置及其属性进行测定以用于在车端临时构图，且不在自动驾驶汽车上存储，亦不向车外传输有关地理信息数据的除外。
- 车险：
  - 应当按照国家规定投保机动车交通事故责任强制保险、承运人责任险、乘客意外伤害险，以及投保一定责任限额的其他交通事故责任商业保险或者向金融机构开立一定额度的交通事故赔偿保函。
  - 鼓励保险机构开发适应自动驾驶汽车特点的保险产品，为自动驾驶汽车企业提供保险服务。鼓励自动驾驶汽车企业与保险公司合作，共同开发适应自动驾驶汽车特性的保险产品。

1. 建议第十五条”云控基础平台与车辆、智能化路侧基础设施、边缘计算系统和交通、城市管理等平台实现安全接入和数据联通“应增加”安全监测平台“，改为”云控基础平台与安全监测平台、车辆、智能化路侧基础设施、边缘计算系统和交通、城市管理等平台实现安全接入和数据联通“。
2. 建议将”车辆“一词纳入第三十七条【名词定义】，明确”车辆“与”自动驾驶系统“、”自动驾驶解决方案“、”自动驾驶汽车“的关系，以及哪些属性变化时需要重新办理第二十一、三十条中”登记“。
3. 建议将第二十七、二十八、二十九条中“车辆管理人”一词纳入第三十七条【名词定义】，明确”车辆管理人“与车辆所有人、驾驶人、安全员、开发者、销售者、自动驾驶系统、自动驾驶解决方案的关系，以及相关的手续。注意第二、二十一、二十四、三十二、三十三条中”管理“一词的含义。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.21.[设计条款的可执行机制]任务&body=日期: 2024.07.21.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240721160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240721160000"></a>
## 16:00~16:59
PSMD: [设计条款的可执行机制]

- protocol的manifest，list vs dictionary
    - 每个种类是否只有一份。list可以多份，dictionary只能一份。
- code类manifest item应该不是id，而是path。
    - 字段种类多了之后，就不能选择dictionary了。
```
D:\huangyg\git\js.sample\schema>node protocol
schema: {
  '$defs': {
    Manifests: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      title: 'Manifests',
      type: 'object'
    },
    Manifesttype: {
      description: '',
      enum: [Array],
      title: 'Manifesttype',
      type: 'string'
    },
    Protocol: {
      additionalProperties: false,
      description: '',
      properties: [Object],
      required: [Array],
      title: 'Protocol',
      type: 'object'
    }
  },
  '$id': 'https://raw.githubusercontent.com/hyg/ego/vat/data/protocol',
  additionalProperties: true,
  title: 'protocol',
  type: 'object'
}
data: {
  id: 123456,
  name: '入门目录',
  manifest: [
    {
      type: 'text',
      path: '../view/123.md',
      readme: 'sample text\nsample text 2\n'
    },
    { type: 'law', id: '9d12877c' },
    { type: 'code', path: '..\\src\\protocol.123456.js' }
  ],
  readme: 'sample readme\nsample readme 2\n'
}
validate pass
```
- 参考 D:\huangyg\git\js.sample\codestr\main.js 调用code种类的path字段指向的源文件。
- 为了显示而设计的term model，并不适合与代码绑定。
- 新版UI
    1. 列出可选的角色，以前置protocol定义。
    1. 列出信息资产，以schema定义。
    1. 选择角色后是行为列表，产生event、log。FSM片段（yaml）是方式之一。
    1. 签署后，行为列表（比如FSM片段）纳入自身FSM中。
- 需要设计新版term和code，归在PSMD项目，升级时整理旧版本的term、task代码。
- 和schema项目是什么关系？
    - schema定义ego管理task的机制。
    - PSMD中的term、protocol定义条款和代码一体化的机制。
    - 可以按schema的机制推动infra推进，按infra的机制推动schema的自动化。
- 追加todo项：
    - '90': 整理新版本term的manifest text
      readme: |
        - read 2024.07.21 16:00 draft
