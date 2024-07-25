# 2024.07.25.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~11:14	PSMD: [FPM(finite protocol machine) model](#20240725093000)
- 14:00~14:34	js: [learn ssb db,reading time.](#20240725140000)
- 14:30~15:29	js: [learn ssb db,coding time.](#20240725143000)
- 16:00~17:24	learn: [learn ipld,reading time.](#20240725160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 5802 | 11898 | 3450 |
| PSMD | 7000 | 1247 | 5753 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 120 | 1380 | 450 |
| raw | 500 | 285 | 215 | 180 |
| learn | 1500 | 1292 | 208 | 930 |
| js | 1200 | 1296 | -96 | 570 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：learn SSB browser core
  - learn的第3号事项：linkml, yaml-ld, reading time.
  - learn的第4号事项：Decentralized Identifiers

- 60分钟时间片：
  - raw的第1号事项：设计新版raw.js架构。
  - learn的第1号事项：learn ipld,reading time.
  - ego的第2号事项：eventemitter sample
  - raw的第2号事项：自动从网页提取营养成分表

- 90分钟时间片：
  - PSMD的第1号事项：FPM(finite protocol machine) model
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.25.[FPM(finite protocol machine) model]任务&body=日期: 2024.07.25.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240725093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240725093000"></a>
##  09:30~10:59
PSMD: [FPM(finite protocol machine) model]

- readme: |
      - a sample instance of FPM in manifest code 
      - schema for code of FPM
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30 draft

- FSM也需要完成代码，其中一个action设为“放弃”，其中一个状态设为“停止响应”。FPM扫描到这个action或者状态，则启动protocol切换。
      - FSM 合并对应的term并列？
      - FSM组合成为FPM对应term的层级？
      - 扫描的效率太低了，直接关闭然后在下一个event达到时FPM初始化下一个FSM。也就是FPM向FSM给出接口，而每一个FSM instance增加一个字段parent指向调用自己的FPM instance。
            - 同理，FPM instance也应该有parent字段。
- 每个FPM只有一个活跃的FSM，如果需要结合多个FSM的功能应该joint它们。
      - event是直接送给FSM，还是由FPM转送。转送则需要建立映射。类似网络的NAT模式和直接公网IP。
- debug、active、parent都应该是instance的字段，而不是js module.export的字段。
- 再向上抽象一层：D:\huangyg\git\js.sample\FPM\machine.js
      - FSM -> FPM的关系是不是普遍的，可以抽象为无限嵌套的machine of machine模型。
            - 叶子machine处理event，树枝machine管理sub-machine，根machine在树枝基础上增加对外接口。
- 继续追加时间，范例不要太复杂，跑通接口就可以。初步完成范例之后，抓紧用现有模型验证一下表达能力。
    - '90': FPM(finite protocol machine) model
      readme: |
        - a sample instance of machine,FPM,FSM in manifest code 
        - read D:\huangyg\git\draft\2024\07\20240723160000.md
        - read 2024.07.24. 09:30, 2024.07.25. 09:30 draft

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.25.[learn ssb db,reading time.]任务&body=日期: 2024.07.25.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240725140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240725140000"></a>
## 14:00~14:29
js: [learn ssb db,reading time.]

- readme: |
      - read 2024.07.18. 9:30 draft
      - https://github.com/ssbc/ssb-db2
            - SSB-DB2 is a new database for secure-scuttlebutt, it is meant as a replacement for ssb-db. The main reason for creating a new database is to be able to rework some of the existing decisions without having to be 100% backwards compatible. 
            - https://github.com/ssbc/jitdb
            - https://github.com/ssbc/async-append-only-log
            - https://github.com/ssbc/secret-stack
      - find broswer utils
            - https://github.com/arj03/ssb-browser-core

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.25.[learn ssb db,coding time.]任务&body=日期: 2024.07.25.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/07/20240725143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240725143000"></a>
## 14:30~14:59
js: [learn ssb db,coding time.]

- windows machine
      - npm i secret-stack
      - npm i ssb-caps
      - npm i ssb-db2
```D:\huangyg\git\js.sample\ssb>node db
D:\huangyg\git\js.sample\ssb\node_modules\secret-stack\lib\plugins\shs.js:58
      throw new Error('secret-stack/plugins/shs must have caps.shs configured')
      ^

Error: secret-stack/plugins/shs must have caps.shs configured
    at Object.init (D:\huangyg\git\js.sample\ssb\node_modules\secret-stack\lib\plugins\shs.js:58:13)
    at create (D:\huangyg\git\js.sample\ssb\node_modules\secret-stack\lib\api.js:71:30)
    at Object.<anonymous> (D:\huangyg\git\js.sample\ssb\db.js:6:4)
    at Module._compile (node:internal/modules/cjs/loader:1467:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1551:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:5)

Node.js v22.4.1
```
- ubuntu machine
    - npm 停滞，cnpm正常安装三个模块。
    - node db出相同的报错。
- 继续研究浏览器中的使用
    - '30': learn SSB browser core
      readme: |
        - https://github.com/arj03/ssb-browser-core
        - https://github.com/arj03/ssb-browser-example/

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.25.[learn ipld,reading time.]任务&body=日期: 2024.07.25.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240725160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240725160000"></a>
## 16:00~16:59
learn: [learn ipld,reading time.]

- readme: |
      - read 2024.07.22 14:00 draft
      - https://ipld.io/docs/intro/primer/
            - The IPLD Data Model is like an "AST" for data -- but without the "S"; the Data Model is independent of syntax.
            - AST： Abstract Syntax Tree
                  - https://segmentfault.com/a/1190000023389980
      - 彻底弄明白CID代替url实现linked data的实现细节。
      - https://ipld.io/docs/schemas/intro/#schema-language-dsl-and-dmt-form
      - https://ipld.io/docs/schemas/features/representation-strategies/
- data model在ipld的概念，是数据的树（和图？）。schema只是其中一种形式，ADL是另一种。其它一些地方使用model = schema概念，阅读时要注意区分。
- 还需要继续追加时间，ipld的概念和术语需要慢慢熟悉。
    - '60': learn ipld,reading time.
      readme: |
        - read 2024.07.22 14:00, 2024.07.25.16:00 draft
        - https://ipld.io/docs/intro/primer/
        - 彻底弄明白CID代替url实现linked data的实现细节。
        - https://ipld.io/docs/schemas/intro/#schema-language-dsl-and-dmt-form
        - https://ipld.io/docs/schemas/features/representation-strategies/
