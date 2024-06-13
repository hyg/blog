# 2024.06.13.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月中上旬补足前两月缺勤。今天绑定模版2。

<a id="index"></a>
- 07:45	[data to schema](#20240613074500)  
- 14:00	[ego draft， metadata](#20240613140000)  
- 16:00	[用js代码完成git操作。](#20240613160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 16608 | -133 | 2670 |
| PSMD | 7250 | 7341 | -91 | 495 |
| learn | 1250 | 1422 | -172 | 1110 |
| ego | 4700 | 4699 | 1 | 390 |
| js | 1375 | 1293 | 82 | 390 |
| xuemen | 1300 | 1253 | 47 | 285 |
| raw | 600 | 570 | 30 | 0 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - learn的第2号事项：JSON Schema
  - js的第4号事项：日期格式化
  - PSMD的第5号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。

- 60分钟时间片：
  - js的第1号事项：isomorphic-git范例
  - ego的第1号事项：ego draft, metadata
  - learn的第1号事项：linkml, yaml-ld
  - js的第2号事项：学习 nodejs test框架

- 90分钟时间片：
  - PSMD的第1号事项：entity draft,metadata
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - ego的第3号事项：finish.devmaketomorowinfo(tomorrow);
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第15号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.13.[data to schema]任务&body=日期: 20240613%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240613074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240613074500"></a>
## 7:45~10:59
PSMD  [data to schema]

- 浅层的schema，就是深层的data。
- vat模型下，data to schema是深层向浅层提供服务的范式。
- 如果能从schema反推data，以及data产生的过程，就是浅层升级进入深层。
- 设想的步骤：
    - 编写或找到linkml的metamodel的schema；
    - 基于metamodel schema将知识（概念、定义、规律、...）编写或生成data，就是schema；
        - 这些知识所使用的知识（概念、定义、规律、...），是更深层与本层的接口；
        - 整理这些接口的view和UI，输入输出之间的关系，进而掌握深层schema，是entity升级的途径。
    - 基于schema编写或生成view，才是深层向浅层发送的内容；
    - 基于schema编写或生成UI，才是深层从浅层获取信息的接口；
    - schema部分内容，import knowledge，及其校验工具，用于浅层之间的交互；
    - 基于schema编写或生成的代码或协议，在深层处理输入输出、支撑浅层的活动。

- https://linkml.io/linkml/generators/index.html
- https://linkml.io/linkml-model/latest/docs/
    - https://linkml.io/linkml-model/latest/docs/todos/
        - entity.yaml中自定义的比它更全。
- https://linkml.io/linkml-model/latest/docs/SchemaDefinition/  这应该就是linkml官方的schema of schema 。
    - ClassDefinition
    - SlotDefinition
    - TypeDefinition
- https://linkml.io/linkml/generators/markdown.html 这应该就是linkml官方的data to view。
- 后面分两个方向：
    - 按照自己的思路开始编写，接口上和外界优秀案例兼容。
        - schema、class、slot、type的定义，使用linkml语法。由于yaml-ld与json-ld互通，linkml可以生成json-ld，所以不再重复。
        - schema to view，UI，import knowledge工具，先自己实现，打通应用场景，再逐步参考吸收外部工具。
    - 系统学习linkml等方案，选择局部进入实践，确切掌握后再吸收。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.13.[ego draft， metadata]任务&body=日期: 20240613%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240613140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240613140000"></a>
## 14:00~15:29
ego  [ego draft， metadata]

- https://osf.io/preprints/osf/vuzt3
- https://linkml.io/linkml/howtos/collaborative-development.html
    - You may wish to use an existing governance model or community documents as a starting point for your project:
        - Bioschemas community and governance docs
            - https://bioschemas.org/community/
        - Biolink
        - schema.org how we work
        - GA4GH Constitution
        - Bioregistry
- 追加时间，增加学习bioschemas的todo项。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.13.[用js代码完成git操作。]任务&body=日期: 20240613%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240613160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240613160000"></a>
## 16:00~16:59
js  [用js代码完成git操作。]

- 参考： D:\huangyg\git\draft\2024\04\20240430140000.md
    - https://www.nodegit.org/
    - https://www.npmjs.com/package/simple-git
- 增加 isomorphic-git 范例todo项
