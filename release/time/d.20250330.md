# 2025.03.30.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月下旬补足前两月缺勤。今天绑定模版2(2b)。

<a id="index"></a>
- 18:00~21:59	ego: [新版实时手稿](#20250330180000)
- 14:00~16:59	raw: [资源管理器替代](#20250330140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8700 | 4830 | 6285 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 1510 | 1020 | 1065 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1430 | -430 | 540 |
| learn | 2000 | 1125 | 875 | 1860 |
| js | 1000 | 1330 | -330 | 720 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：复习五元庄第十一式
  - raw的第2号事项：复习五元庄第十式
  - raw的第3号事项：复习五元庄第十二式
  - raw的第4号事项：复习五元庄第十三式

- 60分钟时间片：
  - js的第1号事项：git sample
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：在代码中自动提交git库
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - ego的第1号事项：新版基础模型
  - learn的第1号事项：复习dat
  - ego的第2号事项：新版实时手稿
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.30.[新版实时手稿]任务&body=日期: 2025.03.30.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250330.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250330180000"></a>
## 18:00 ~ 21:59
## ego: [新版实时手稿]

### 读取simplenote的内容

- npm i simplenote
```
D:\huangyg\git\js.sample\simplenote>node --trace-deprecation simplenote
(node:52724) [DEP0128] DeprecationWarning: Invalid 'main' field in '\\?\D:\huangyg\git\js.sample\simplenote\node_modules\array\package.json' of 'array.js'. Please either fix that or report it to the module author
    at tryPackage (node:internal/modules/cjs/loader:504:15)
    at Function._findPath (node:internal/modules/cjs/loader:795:18)
    at Function._resolveFilename (node:internal/modules/cjs/loader:1235:27)
    at Function._load (node:internal/modules/cjs/loader:1075:27)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\huangyg\git\js.sample\simplenote\node_modules\SimpleNote\index.js:7:13)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
node:events:496
      throw er; // Unhandled 'error' event
      ^

Error: connect ETIMEDOUT 45.114.11.238:443
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1610:16)
Emitted 'error' event on Request instance at:
    at Request.callback (D:\huangyg\git\js.sample\simplenote\node_modules\superagent\lib\node\index.js:661:24)
    at ClientRequest.<anonymous> (D:\huangyg\git\js.sample\simplenote\node_modules\superagent\lib\node\index.js:628:10)
    at ClientRequest.emit (node:events:518:28)
    at emitErrorEvent (node:_http_client:103:11)
    at TLSSocket.socketErrorListener (node:_http_client:506:5)
    at TLSSocket.emit (node:events:518:28)
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4039,
  code: 'ETIMEDOUT',
  syscall: 'connect',
  address: '45.114.11.238',
  port: 443
}
```

- npm install simplenote-sync
```
D:\huangyg\git\js.sample\simplenote>node --trace-deprecation simplenote-sync
(node:53184) [DEP0128] DeprecationWarning: Invalid 'main' field in '\\?\D:\huangyg\git\js.sample\simplenote\node_modules\array\package.json' of 'array.js'. Please either fix that or report it to the module author
    at tryPackage (node:internal/modules/cjs/loader:504:15)
    at Function._findPath (node:internal/modules/cjs/loader:795:18)
    at Function._resolveFilename (node:internal/modules/cjs/loader:1235:27)
    at Function._load (node:internal/modules/cjs/loader:1075:27)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (D:\huangyg\git\js.sample\simplenote\node_modules\simplenote\index.js:7:13)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
D:\huangyg\git\js.sample\simplenote\node_modules\simplenote-sync\lib\sync.js:49
  model.all(function(err, arr) {
        ^

TypeError: model.all is not a function
    at Sync.sync (D:\huangyg\git\js.sample\simplenote\node_modules\simplenote-sync\lib\sync.js:49:9)
    at Timeout._onTimeout (D:\huangyg\git\js.sample\simplenote\simplenote-sync.js:11:14)
    at listOnTimeout (node:internal/timers:594:17)
    at process.processTimers (node:internal/timers:529:7)

Node.js v22.10.0
```

- simperium
    - https://www.npmjs.com/package/simperium
    - https://github.com/Simperium/node-simperium/blob/trunk/sample/simplenote.js
    - 需要simperium的APPID和SECRET，已经关闭申请窗口：Read this first!! Local development is currently not supported if you don't have an existing account on the test server or access to the production credentials. 

- gist
    - npm install gist
```
D:\huangyg\git\js.sample\gist>node gist
undefined:1


SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at url (D:\huangyg\git\js.sample\gist\node_modules\gist\lib\gist.js:4:19)
    at IncomingMessage.<anonymous> (D:\huangyg\git\js.sample\gist\node_modules\gist\lib\gist.js:31:30)
    at IncomingMessage.emit (node:events:530:35)
    at endReadableNT (node:internal/streams/readable:1698:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)

Node.js v22.10.0
```
    - npm install gist-box
        - 需要github id 和token。
        - 不值得。
- 继续追加时间。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.30.[资源管理器替代]任务&body=日期: 2025.03.30.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250330.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250330140000"></a>
## 14:00 ~ 16:59
## raw: [资源管理器替代]

- 需求：
    - 支持tab
    - 启动时恢复上次的tab
    - 命令行打开指定的多个文件夹，每个一个tab
- tablacus、double commander 满足需求
- Files满足前两项需求，暂时没有找到命令行文档。
- 内存方面，打开工作常用的五个tab：
    - Files： 1.2G
    - tablacus： 57M
    - double commander： 8M
- tablacus是绿色软件，免安装。
- double commander和Files可以通过winget安装。
```
winget install alexx2000.DoubleCommander
winget install FilesCommunity.Files
```
- 并行使用一段时间再定。