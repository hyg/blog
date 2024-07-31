# 2024.07.31.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~09:29	PSMD: [machines model](#20240731093000)
- 14:00~13:59	PSMD: [整理新版本term的manifest code](#20240731140000)
- 16:00~16:39	learn: [Getting Things Done with IPLD](#20240731160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6277 | 11423 | 3570 |
| PSMD | 7000 | 1452 | 5548 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 165 | 1335 | 450 |
| raw | 500 | 320 | 180 | 150 |
| learn | 1500 | 1425 | 75 | 1110 |
| js | 1200 | 1353 | -153 | 540 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：设计新版raw.js架构。
  - raw的第2号事项：新版raw.js的子命令-营养成分详情
  - raw的第3号事项：新版raw.js的子命令-营养成分排序
  - learn的第6号事项：linkml, yaml-ld, coding time.

- 60分钟时间片：
  - learn的第1号事项：schema in ipld,coding time.
  - js的第1号事项：learn Orbitdb
  - ego的第2号事项：eventemitter sample
  - learn的第2号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/

- 90分钟时间片：
  - PSMD的第1号事项：machines model
  - PSMD的第2号事项：整理新版本term的manifest code
  - learn的第3号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.31.[machines model]任务&body=日期: 2024.07.31.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240731093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240731093000"></a>
# 9:30~10:59
PSMD: [machines model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.31.[整理新版本term的manifest code]任务&body=日期: 2024.07.31.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240731140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240731140000"></a>
## 14:00~15:29
PSMD: [整理新版本term的manifest code]

- readme: |
      - 为了显示而设计的term model，并不适合与代码绑定。
      - 设计前置protocol的定义和数据表现
        - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
        - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
        - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
      - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
        - 根据FSM、FPM、machine的设计决定term的粒度。
        - 设计每项知识的思考和案例积累锚点。
      - 随之修订manifest text。
      - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
- 等machine代码稳定一点再继续推进。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.31.[Getting Things Done with IPLD]任务&body=日期: 2024.07.31.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240731160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240731160000"></a>
## 16:00~16:59
learn: [Getting Things Done with IPLD]

- readme: |
      - https://ipld.io/docs/intro/primer/#getting-things-done-with-ipld
        - https://ipld.io/docs/synthesis/gtd/
      - 彻底弄明白CID代替url实现linked data的实现细节。
        - CID和url并不是作为key，而是作为schema的value。然后引用这份schema的内容（字段）。
        - https://proto.school/content-addressing/
      - https://ipld.io/docs/schemas/intro/#schema-language-dsl-and-dmt-form
      - https://ipld.io/docs/schemas/features/representation-strategies/
- 文档中的概念还是描述得很抽象，分配时间实现几个范例再回头消化一遍。
    - '60': learn IPLD Codes, https://ipld.io/docs/data-model/node/
    - '90': learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
    - '60': https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web 
    - '60': https://proto.school/basics  IPFS,P2P Data Links with Content Addressing 
