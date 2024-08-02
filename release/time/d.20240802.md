# 2024.08.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~09:29	PSMD: [machines model](#20240802093000)
- 14:00~14:19	raw: [新版raw.js的子命令-营养成分详情](#20240802140000)
- 14:30~14:29	raw: [新版raw.js的子命令-营养成分排序](#20240802143000)
- 16:00~16:39	raw: [自动从网页提取营养成分表](#20240802160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6487 | 11213 | 3540 |
| PSMD | 7000 | 1472 | 5528 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 165 | 1335 | 450 |
| raw | 500 | 450 | 50 | 0 |
| learn | 1500 | 1485 | 15 | 1110 |
| js | 1200 | 1353 | -153 | 660 |

---
waiting list:


- 30分钟时间片：
  - learn的第6号事项：linkml, yaml-ld, coding time.
  - learn的第7号事项：Decentralized Identifiers

- 60分钟时间片：
  - learn的第1号事项：IPLD DSL sample
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
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.02.[machines model]任务&body=日期: 2024.08.02.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/08/20240802093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240802093000"></a>
##  09:30~10:59
PSMD: [machines model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制
- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.02.[新版raw.js的子命令-营养成分详情]任务&body=日期: 2024.08.02.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240802140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240802140000"></a>
## 14:00~14:29
raw: [新版raw.js的子命令-营养成分详情]

- 可选多种营养成分
- 考虑不同UI
- 使用新的模块化设计
- 使用新的data model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.02.[新版raw.js的子命令-营养成分排序]任务&body=日期: 2024.08.02.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/08/20240802143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240802143000"></a>
## 14:30~14:59
raw: [新版raw.js的子命令-营养成分排序]

- 插到学习任务后：
- '60': learn factory, constructor, prototype
      readme: |
        - https://juejin.cn/post/6844903653774458888
        - https://segmentfault.com/a/1190000019054466
        - https://www.javascripttutorial.net/javascript-factory-functions/
        -https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes
      bind:
        - '30': 新版raw.js的子命令-营养成分详情
          readme: |
            - 可选多种营养成分
            - 考虑不同UI
            - 使用新的模块化设计
            - 使用新的data model
        - '30': 新版raw.js的子命令-营养成分排序

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.02.[自动从网页提取营养成分表]任务&body=日期: 2024.08.02.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/08/20240802160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240802160000"></a>
## 16:00~16:59
raw: [自动从网页提取营养成分表]

- readme: |
      - read 2024.07.16.07:45 draft
      - read 2024.07.24.07:45 draft
      - 抓取网页:https://pptr.nodejs.cn/
      - https://www.npmjs.com/package/puppeteer
- npm i puppeteer-core 
- const browser = await puppeteer.launch({"executablePath":"C:\\Program Files\\Mozilla Firefox\\firefox.exe"});
- await page.goto('https://www.eshian.com/yyss/1081.html');
```
呃…找不到此网站。

我们无法连接至 translate,acceptchframe,mediarouter,optimizationhints,processpersiteuptomainframethreshold,isolatesandboxediframes 的服务器。

若您确认输入的是正确网址，可以：

    稍后再试
    检查您的网络连接
    检查 Firefox 是否有联网权限（可能已接入网络，但被防火墙阻止）
```
- firefox打开了新instance，新tab。但是没有进入页面。
```
D:\huangyg\git\js.sample\htmlparser>node puppeteer.js
file:///D:/huangyg/git/js.sample/htmlparser/node_modules/@puppeteer/browsers/lib/esm/launch.js:301
                reject(new Error([
                       ^

Error: Failed to launch the browser process!


TROUBLESHOOTING: https://pptr.dev/troubleshooting

    at Interface.onClose (file:///D:/huangyg/git/js.sample/htmlparser/node_modules/@puppeteer/browsers/lib/esm/launch.js:301:24)
    at Interface.emit (node:events:532:35)
    at Interface.close (node:internal/readline/interface:527:10)
    at Socket.onend (node:internal/readline/interface:253:10)
    at Socket.emit (node:events:532:35)
    at endReadableNT (node:internal/streams/readable:1696:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)

Node.js v22.4.1
```
- 还运用不起来，不再研究。
