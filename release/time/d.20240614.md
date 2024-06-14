# 2024.06.14.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45	[isomorphic-git范例](#20240614074500)  
- 09:30	[entity draft,metadata](#20240614093000)  
- 14:00	[kernel模型升级](#20240614140000)  
- 14:30	[JSON Schema](#20240614143000)  
- 16:00	[ego draft, metadata](#20240614160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 16848 | -373 | 2865 |
| PSMD | 7250 | 7431 | -181 | 600 |
| learn | 1250 | 1422 | -172 | 1080 |
| ego | 4700 | 4759 | -59 | 480 |
| js | 1375 | 1383 | -8 | 420 |
| xuemen | 1300 | 1253 | 47 | 285 |
| raw | 600 | 570 | 30 | 0 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - js的第1号事项：JSON Schema
  - learn的第4号事项：寻找可编程的,去中心化的信息发布方式
  - learn的第5号事项：了解免安装web im的机制

- 60分钟时间片：
  - learn的第1号事项：linkml, yaml-ld
  - js的第2号事项：git sample
  - xuemen的第3号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - js的第3号事项：在代码中自动提交git库

- 90分钟时间片：
  - ego的第1号事项：ego as instance
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - learn的第2号事项：拟制说、目的财产说、实在说
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：entity model增加自我认知、资源分配、元认知字段。
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第14号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.14.[isomorphic-git范例]任务&body=日期: 20240614%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240614074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240614074500"></a>
## 07:45~8:44
js  [isomorphic-git范例]

- https://www.npmjs.com/package/isomorphic-git
- https://isomorphic-git.org/
- D:\huangyg\git\js.sample\git
- npm install --save isomorphic-git
    - https://isomorphic-git.org/docs/en/quickstart
    - https://isomorphic-git.org/docs/en/snippets
- minimist 解析命令行参数也很方便。
    - https://www.npmjs.com/package/minimist
- npm install globby
    - import而不是require，
- 还是过于复杂，没有完成。追加：
    - '60': git sample
      readme: |
        - https://isomorphic-git.org/docs/en/snippets
        - https://isomorphic-git.org/docs/en/quickstart

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.14.[entity draft,metadata]任务&body=日期: 20240614%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240614093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240614093000"></a>
##  09:30~10:59
PSMD  [entity draft,metadata]

- ego是schema还是instance。
- entity的表达能力能满足自然人、企业、智能设备的需要吗，能支撑向前走多远。
- 先把重点问题厘清再展开，以免陷入细节。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.14.[kernel模型升级]任务&body=日期: 20240614%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240614140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240614140000"></a>
## 14:00~14:29
xuemen  [kernel模型升级]

- 因事延后，回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.14.[JSON Schema]任务&body=日期: 20240614%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240614143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240614143000"></a>
## 14:30~14:59
learn  [JSON Schema]

- 因事延后，回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.14.[ego draft, metadata]任务&body=日期: 20240614%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240614160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240614160000"></a>
## 16:00~16:59
ego  [ego draft, metadata]

- 先按instance写一下。
- entity是基础类型，主要特征是认知。
    - 在自我视角是有event和todo
    - event和todo中有一部分是无法认知的，合集为raw。
        - raw只能记录到边界，还属于可认知的部分。
    - event和todo中有一部分是可以认知的，合集为knowledge。
- ego的特征有：
    - 元认知
        - 根据元认知产生的层级分配资源
            - 强调稳定、可持续的元认知
        - 为其它entity提供元认知，输出schema
    - 可选：自我认知
        - 这个特征是元认知的基础，对todo的描述是draft，显性描述todo所使用的知识、并使这些行为和效果可以复制是元认知。
    - 可选：以明确的逻辑分配资源，而不是临时决定。
        - 这个特征强调稳定、可持续的自我
- 把自我认知、明确逻辑分配资源，纳入entity的模型中。元认知作为data -> schema, draft -> knowledge -> todo -> event 的一种设定，不作为模型，作为实例。
    - 在模型中的具体表现是：项目、发布路径、数据队列......
    - 不断产生知识和修订intance的机制，model稳定不改。
- 增加todo项：
    - '195': entity model增加自我认知、资源分配、元认知字段。
    - '90': ego as instance
