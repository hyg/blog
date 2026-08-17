# 2026.08.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	PSMD: [term + COM matedata -> deploy metadata -> deploy view](#20260817074500)
- 14:00~15:29	ego: [新版实时手稿](#20260817140000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20260817160000)
- 19:00~19:59	check: [零散笔记](#20260817190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1200 | 12330 | 0 |
| PSMD | 4000 | 705 | 3295 | 0 |
| ego | 2530 | 375 | 2155 | 0 |
| infra | 2000 | 120 | 1880 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.08.17.[无名任务]任务&body=日期: 2026.08.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260817.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260817074500"></a>
## 07:45 ~ 10:59
## PSMD: [term + COM matedata -> deploy metadata -> deploy view]

## 历史工作记录

### 20260213.01.md

## PSMD: [term + COM matedata -> deploy metadata -> deploy view]

- PSMD:
	- 重点观测智能设备的能力变化，即使收集反例。
		- 智能设备的认知深度，是重中之重。
	- 反例->补丁
		- 补丁->模型->部署实例
		- 补丁->部署实例+动议
	- 成功案例->模型+预期效果
- infra: 
	- 模型元数据语法+部署方案元数据语法->共同体引擎
	- ego模型+task元数据语法+task关系元数据语法->主体引擎->共同体引擎
		- 以不同锋面作为成员；以不同锋面的诉求，作为集体决策的席位。
		- task\artifact在不同成员之间流转。
	- 元数据语法
		- 模型->模型元数据语法
		- 部署实例->部署方案元数据语法
		- task
		- task关系
		- artifact
- ego：
	- 资源分配
		- ego模型
		- 管理PSMD、infra、...等task
	- 思想实验与世界模型


---

### 20260803.01.md

## PSMD: [term + COM matedata -> deploy metadata -> deploy view]

- 工作分为几个层次：
	- 人工手写deploy metadata + COD engine -> COD
	- 人工手写COM metadata + term(少量配置项) + COM engine -> deploy metadata
	- 人工手写COM、COD两套metadata语法+engine。
- 下个时间片设计代码框架和开发环境。


---


---
<a href="mailto:huangyg@mars22.com?subject=关于2026.08.17.[无名任务]任务&body=日期: 2026.08.17.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260817.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260817140000"></a>
## 14:00 ~ 15:29
## ego: [新版实时手稿]


---
<a href="mailto:huangyg@mars22.com?subject=关于2026.08.17.[无名任务]任务&body=日期: 2026.08.17.%0D%0A序号: 9%0D%0A手稿:../../draft/2026/20260817.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260817160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

## 历史工作记录

### 20241004.05.md

## infra: [范例--利用js模块组合实现合同条款的组合。]

- 复习了模块。

---

### 20250503.03.md

## infra: [范例--利用js模块组合实现合同条款的组合。]

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

---

### 20250505.03.md

## infra: [范例--利用js模块组合实现合同条款的组合。]

- https://www.runoob.com/nodejs/nodejs-event.html
- 对比event机制和fsm、psm
    - eventemitter还是一类nodejs的。
    - 自己实现的fsm、psm更容易移植。
- 按照fsm、psm定义接口，各实现路线自己选择内部机制。

---

### 20250606.01.md

## infra: [范例--利用js模块组合实现合同条款的组合。]

- 寻找manifest code的实现方法。
  - 嵌入在metadata中，text字段缩一级，作为manifest的一种。

---

### 20250610.03.md

## infra: [范例--利用js模块组合实现合同条款的组合。]

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


---

### 20250613.02.md

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


---


---
<a href="mailto:huangyg@mars22.com?subject=关于2026.08.17.[无名任务]任务&body=日期: 2026.08.17.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260817.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260817190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

