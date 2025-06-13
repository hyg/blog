# 2025.06.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版2(2c)。

<a id="index"></a>
- 10:00~10:59	ego: [新版基础模型](#20250613100000)
- 16:00~18:14	infra: [范例--利用js模块组合实现合同条款的组合。](#20250613160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7101 | 6429 | 8430 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1772 | 758 | 1680 |
| infra | 2000 | 825 | 1175 | 210 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1784 | 216 | 2190 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：佯谬及二次革命
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第2号事项：设计三季度时间表
  - learn的第2号事项：量子物理的数学基础
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - ego的第1号事项：基于真实数据标志财务报表
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - raw的第1号事项：整理 resource.md
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.13.[新版基础模型]任务&body=日期: 2025.06.13.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250613.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250613100000"></a>
## 10:00 ~ 10:59
## ego: [新版基础模型]

- 浅层意识运用智能设备，在清醒、理性状况下重建深层意识（aka 潜意识、条件反射）。
	- 清理负面条件反射（贪嗔痴）
	- 跨越观察者坍缩
	- 跨越世界观（时间、空间等）
	- ...
- 负面条件反射再深入，内容和层级都不锁死，先定义框架、在探索中逐渐调整。
	- 世界观可能是观察者坍缩的一种。时间、空间等概念也是观察结果之一（然后用于理解更浅层的观察结果）。这种情况下这两层可以合并。
	- 框架包括各层级之间关系，各entity之间接口，它们都应该具有足够表达能力，保持稳定又可重配置。
- 在深层重建过程中，也基于新的内部知识产生对外接口，在基础上形成共同体。
	- 新共同体对旧共同体的关系，争取定义在成员“意识”层级的关系上。使它们能天然地吸收融合。
	- 促进资源向深层未知领域的研究集中，促进研究成果的扩散。
- 层级的定义：浅层观察到目前无法解释的现象
	- 解释自己的言行是重要形式。因此，将职务行为自动化也是新层级产生的标志。
- 层级的关系：提供浅层可以理解的定义、假设、公理（去解释观察到的现象），可以使用的接口。(vat)
- 后续时间用数学语言定义以上设定，然后进入实践。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.13.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.06.13.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250613.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250613160000"></a>
## 16:00 ~ 18:14
## infra: [范例--利用js模块组合实现合同条款的组合。]

- 初步搭了一下粗稿。这种嵌套的情况不能用this引用函数。
```
D:\huangyg\git\js.sample\jsterms>node main
> {
  id: '12',
  name: 'term12',
  env: {},
  subterm: [
    {
      localid: '1.',
      term: {
        metadata: {
          id: '111111',
          name: 'term1',
          text: 'term1 text',
          readme: 'term1 readme',
          env: [Object],
          code: [Object]
        }
      }
    },
    {
      localid: '2.',
      term: {
        metadata: {
          id: '222222',
          name: 'term2',
          text: 'term2 text',
          readme: 'term2 readme',
          env: [Object],
          code: [Object]
        }
      }
    },
    [length]: 2
  ],
  text: '1. term1 text\n2. term2 text\n',
  readme: '1. term1 readme\n2. term2 readme\n',
  code: {
    '1.e0': <ref *1> [Function: e0] {
      [length]: 0,
      [name]: 'e0',
      [arguments]: null,
      [caller]: null,
      [prototype]: { [constructor]: [Circular *1] }
    },
    '1.e1': <ref *2> [Function: e1] {
      [length]: 0,
      [name]: 'e1',
      [arguments]: null,
      [caller]: null,
      [prototype]: { [constructor]: [Circular *2] }
    },
    '1.e2': <ref *3> [Function: e2] {
      [length]: 0,
      [name]: 'e2',
      [arguments]: null,
      [caller]: null,
      [prototype]: { [constructor]: [Circular *3] }
    },
    '2.e10': <ref *4> [Function: e10] {
      [length]: 0,
      [name]: 'e10',
      [arguments]: null,
      [caller]: null,
      [prototype]: { [constructor]: [Circular *4] }
    },
    '2.e11': <ref *5> [Function: e11] {
      [length]: 0,
      [name]: 'e11',
      [arguments]: null,
      [caller]: null,
      [prototype]: { [constructor]: [Circular *5] }
    }
  }
}
enter e1
D:\huangyg\git\js.sample\jsterms\term1.js:24
                        this.a1("r0");
                             ^

TypeError: this.a1 is not a function
    at Object.e1 [as 1.e1] (D:\huangyg\git\js.sample\jsterms\term1.js:24:16)
    at Object.<anonymous> (D:\huangyg\git\js.sample\jsterms\main.js:12:27)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Object..js (node:internal/modules/cjs/loader:1689:10)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.10.0
```
- 返回对象[{rule: "r0", action:"a1"},...]，然后由上级条款调用。代码会比较复杂，跨语言移植比较容易。
- 使用eventemitter。过于依赖js特性，移植时容易留下隐患。
	- 由上级条款统一add listener、统一emit
	- 下级条款完成add listener，把eventemitter对象写入metadata字段往上传送，由上级条款emit。
- 每个action一个js文件，只传递文件名再动态载入、调用。代码复杂度中等，只依赖文件或网络url，移植比较容易。
- 试试用一个成员函数把所有event、action代码包裹进去，可以在函数内定义函数。移植时可能会需要重写。
- 要注意localid组合时要避免重名。比如1.1.1.条款下的2.，和1.1.条款下的1.2.，要能够区分开。
- 追加时间，想想还有没有直观简洁的方案。可以跳过各种localid和map，先实现event、action函数的准确对接。
	- 再选择一两种解释型语言实现类似功能，确保可以跨平台、以哈希值定位源代码。
