# 2024.08.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~10:14	PSMD: [整理新版本term的manifest code](#20240809093000)
- 14:00~16:29	js: [import typescript into javascript](#20240809140000)
- 16:00~15:59	js: [learn Orbitdb](#20240809160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 7376 | 10324 | 3705 |
| PSMD | 7000 | 1967 | 5033 | 780 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 450 |
| raw | 500 | 450 | 50 | 60 |
| learn | 1500 | 1713 | -213 | 990 |
| js | 1200 | 1503 | -303 | 660 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：新版营养成分详情，允许多种营养成分。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - PSMD的第3号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 60分钟时间片：
  - learn的第1号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/
  - js的第1号事项：learn Orbitdb
  - ego的第2号事项：eventemitter sample
  - js的第2号事项：learn js implement of ipfs

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第5号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第6号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.09.[整理新版本term的manifest code]任务&body=日期: 2024.08.09.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/08/20240809093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240809093000"></a>
# 9:30~10:59
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
- 继续追加时间。
    - '90': 整理新版本term的manifest text
      readme: |
        - 条款文本嵌入到machine模型。
        - 以修订和任免定义的层级嵌入到machine模型。
      bind:
        - '90': 整理新版本term的manifest code

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.09.[import typescript into javascript]任务&body=日期: 2024.08.09.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240809140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240809140000"></a>
## 14:00~15:29
js: [import typescript into javascript]

- readme: |
      - https://geek-docs.com/typescript/typescript-questions/570_typescript_transforming_typescript_into_javascript.html
      - https://cloud.tencent.com/developer/article/1592752
      - https://wangdoc.com/typescript/tsc
- D:\huangyg\git\ts.sample\js
- https://cloud.tencent.com/developer/article/1592752
```
D:\huangyg\git\ts.sample\js>node jsTest
file:///D:/huangyg/git/ts.sample/js/TSLib:2
    public static TAG:string = 'TS';
           ^^^^^^

SyntaxError: Unexpected strict mode reserved word
    at compileSourceTextModule (node:internal/modules/esm/utils:337:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:164:18)
    at callTranslator (node:internal/modules/esm/loader:439:14)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:445:30)

Node.js v22.4.1

D:\huangyg\git\ts.sample\js>node jsTest
node:internal/modules/esm/resolve:260
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'D:\huangyg\git\ts.sample\js\TSLib' imported from D:\huangyg\git\ts.sample\js\jsTest.js
    at finalizeResolution (node:internal/modules/esm/resolve:260:11)
    at moduleResolve (node:internal/modules/esm/resolve:921:10)
    at defaultResolve (node:internal/modules/esm/resolve:1132:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:557:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:526:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:249:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:126:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///D:/huangyg/git/ts.sample/js/TSLib'
}

Node.js v22.4.1
```
- https://geek-docs.com/typescript/typescript-questions/570_typescript_transforming_typescript_into_javascript.html
```
D:\huangyg\git\ts.sample\js>tsc app.ts

D:\huangyg\git\ts.sample\js>node app
50
```
- 用js.sample/FPM下的代码测试，interface依然无法导入到js文件中使用，也不会出现在tsc转换后的js文件。目前没有找到文档说明这个问题。实在需要可以ts1->ts2->js，在ts1种定义interface，ts2中使用，只导出函数或者对象给js。
    - 去掉"type": "module"，用var f = require('./FSM.js');
    - 其实tsc之后，interface没什么作用。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.09.[learn Orbitdb]任务&body=日期: 2024.08.09.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/08/20240809160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240809160000"></a>
## 16:00~16:59
js: [learn Orbitdb]

- 时间被上一个任务占用。
