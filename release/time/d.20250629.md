# 2025.06.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:29	PSMD: [整理default模型](#20250629140000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250629160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7901 | 5629 | 7725 |
| PSMD | 4000 | 1425 | 2575 | 1080 |
| ego | 2530 | 1862 | 668 | 1485 |
| infra | 2000 | 1035 | 965 | 180 |
| xuemen | 1000 | 541 | 459 | 540 |
| raw | 1000 | 470 | 530 | 390 |
| learn | 2000 | 1784 | 216 | 2190 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - infra的第1号事项：整理fsm、psm的split、joint操作。
  - learn的第1号事项：佯谬及二次革命
  - js的第3号事项：ai.js

- 60分钟时间片：
  - raw的第1号事项：设计三季度时间表
  - raw的第2号事项：熟悉内脏之间的关系
  - learn的第2号事项：量子物理的数学基础
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - ego的第1号事项：基于真实数据标志财务报表
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.
  - PSMD的第2号事项：子1609:基于公司、合同

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.29.[整理default模型]任务&body=日期: 2025.06.29.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250629.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250629140000"></a>
## 14:00 ~ 15:29
## PSMD: [整理default模型]

### read ../../draft/2024/10/20241007.01.md

#### PSMD: [整理default模型]

- 在核心部门正常运行，基于规则的博弈没有成型之前，默认现象是基于既成事实的博弈，从这种博弈案例中整理规律，命名为default模型。
- 参考：
    - https://www.zhihu.com/question/667750171/answer/3632621735

- 结合新版schema整理。


### read ../../draft/2024/10/20241010.02.md

#### PSMD: [整理default模型]

- default模型并不是共同体的规则模型，而是行为模型。
- 这些行为所依赖的规则属于成员个体的模型。
- default定义了共同体瘫痪时，成员使用自己模型产生的集体行为。
- 个人领域，可以定义共同体瘫痪时的default protocol。
    - 这些protocol自动合并，产生共同体的default模型。
- 继续追加时间。


### read ../../draft/2024/10/20241011.01.md

#### PSMD: [整理default模型]

- 添加todo项：
    - '60': 《中华人民共和国民营经济促进法
（草案征求意见稿）》公开征求意见
      readme: |
        - https://www.moj.gov.cn/pub/sfbgw/lfyjzj/lflfyjzj/202410/t20241010_507325.html
- 个人模型组合成为集体协议：只是约定时间地点，各自按自己动机决策。这个过程的具体文字还要细化，它才是default模型的基础。


### read ../../draft/2024/11/20241106.01.md

#### PSMD: [整理default模型]

- FPM模型是否能表达层级。各protocol之间已经有event和action的关系。


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.29.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.06.29.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250629.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250629160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

### read ../../draft/2024/10/20241004.05.md

#### infra: [范例--利用js模块组合实现合同条款的组合。]

- 复习了模块。

### read ../../draft/2025/20250503.03.md

#### infra: [范例--利用js模块组合实现合同条款的组合。]

- D:\huangyg\git\js.sample\jsterms\main.js
```
D:\huangyg\git\js.sample\jsterms>node main
> id: '12'
name: term12
subterm:
  - localid: '1.'
    term:
      metadata:
        id: '111111'
        name: term1
        text: term1 text
        readme: term1 readme
  - localid: '2.'
    term:
      metadata:
        id: '222222'
        name: term2
        text: term2 text
        readme: term2 readme
text: |
  1. term1 text
  2. term2 text
readme: |
  1. term1 readme
  2. term2 readme
```
- 需要把term12的init、maketext、makereadme等成员函数提取出来，放在共用位置。
  - 但是也允许term自带成员函数，优先使用自带的。
- 继续追加时间。

### read ../../draft/2025/20250505.03.md

#### infra: [范例--利用js模块组合实现合同条款的组合。]

- https://www.runoob.com/nodejs/nodejs-event.html
- 对比event机制和fsm、psm
    - eventemitter还是一类nodejs的。
    - 自己实现的fsm、psm更容易移植。
- 按照fsm、psm定义接口，各实现路线自己选择内部机制。

### read ../../draft/2025/20250606.01.md

#### infra: [范例--利用js模块组合实现合同条款的组合。]

- 寻找manifest code的实现方法。
  - 嵌入在metadata中，text字段缩一级，作为manifest的一种。

### read ../../draft/2025/20250610.03.md

#### infra: [范例--利用js模块组合实现合同条款的组合。]

- maketext函数的text作为manifest名称作为参数。
- 增加基础定义字段，上级条款往下级条款map：
	- rule
	- event
	- state
	- 以上内容在text manifest中，也以placeholder形式表现。
- 调用和接口：
	- 参考event emitter机制，上级调用下级event listener
	- 返回：
		- events
		- tasks
		- logs
			- 根据条款（text manifest），执行以下操作：发出事件、分配task
- vat：交给ego新版本的大任务。这里只考虑数据和指令的正确对接，包括充裕的表达能力。
	- 自动产生任何manifest的正式内容
	- 自动完成task
	- 维护基础定义
- 休整时间继续斟酌，下一个时间片再动代码。


### read ../../draft/2025/20250613.02.md

#### infra: [范例--利用js模块组合实现合同条款的组合。]

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


