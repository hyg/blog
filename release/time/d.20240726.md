# 2024.07.26.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~10:59	PSMD: [FPM(finite protocol machine) model](#20240726093000)
- 14:00~14:56	js: [learn SSB browser core](#20240726140000)
- 14:30~14:32	learn: [linkml, yaml-ld, reading time.](#20240726143000)
- 16:00~16:19	raw: [设计新版raw.js架构。](#20240726160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 5972 | 11728 | 3360 |
| PSMD | 7000 | 1337 | 5663 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 120 | 1380 | 450 |
| raw | 500 | 305 | 195 | 150 |
| learn | 1500 | 1295 | 205 | 900 |
| js | 1200 | 1353 | -153 | 540 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：设计新版raw.js架构。
  - raw的第2号事项：新版raw.js的子命令-营养成分详情
  - learn的第3号事项：linkml, yaml-ld, coding time.
  - raw的第3号事项：新版raw.js的子命令-营养成分排序

- 60分钟时间片：
  - learn的第1号事项：learn ipld,reading time.
  - js的第1号事项：learn Orbitdb
  - ego的第2号事项：eventemitter sample
  - learn的第2号事项：schema in ipld,coding time.

- 90分钟时间片：
  - PSMD的第1号事项：machines model
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.26.[FPM(finite protocol machine) model]任务&body=日期: 2024.07.26.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240726093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240726093000"></a>
##  09:30~10:59
PSMD: [FPM(finite protocol machine) model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30 draft
- 系列任务
    - 实现简化的FSM
    - 实现FPM+FSM
    - 从FSM、FPM中抽象出统一的mechine
    - 实现joint、split机制
```
D:\huangyg\git\js.sample\FPM>node main
Usage: FPM sample [options] [command]

a sample instance of FPM(Finite Protocol Machine) in manifest code.

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  fpm             FPM entry
  fsm             FSM entry
  help [command]  display help for command

D:\huangyg\git\js.sample\FPM>node main fsm
Usage: FPM sample fsm [options] [command]

FSM entry

Options:
  -h, --help                  display help for command

Commands:
  init <id>                   初始化：读取FSM元数据，从初始state开始。
  event <content>             事件处理
  joint <id1> <id2> <termid>  FSM合并。id2并入id1，由id1.termid修订id2的不可修订条款。
  split [data]                FSM分立，TBD。
  test [data]                 FSM测试，功能不定。
  help [command]              display help for command

D:\huangyg\git\js.sample\FPM>node main fsm init 1
> init: 1
> FSM:
{ parent: 0, s: 's0', metadata: 'fsmmetadata' }
> FSM:
parent: 0
s: s0
metadata: fsmmetadata


D:\huangyg\git\js.sample\FPM>node main fsm event e0
> event: e0
> FSM:
parent: 0
s: s0
metadata: fsmmetadata

F> state: s0    event: e0
a0> action 0
a1> action 1
> ret: s1

D:\huangyg\git\js.sample\FPM>node main fsm event e1
> event: e1
> FSM:
parent: 0
s: s1
metadata: fsmmetadata

F> state: s1    event: e1
a1> action 1
> ret: s3

D:\huangyg\git\js.sample\FPM>node main fsm event e2
> event: e2
> FSM:
parent: 0
s: s3
metadata: fsmmetadata

F> state: s3    event: e2
a2> action 2
> ret: s3
```
- 继续追加时间：
    - '90': machines model
      readme: |
        - a sample instance of machine,FPM,FSM in manifest code 
        - read D:\huangyg\git\draft\2024\07\20240723160000.md
        - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
        - 实现FPM+FSM
        - 从FSM、FPM中抽象出统一的mechine
        - 实现joint、split机制

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.26.[learn SSB browser core]任务&body=日期: 2024.07.26.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240726140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240726140000"></a>
## 14:00~14:29
js: [learn SSB browser core]

- readme: |
      - https://github.com/arj03/ssb-browser-core
      - https://github.com/arj03/ssb-browser-example/
- npm i browserify -g
- npm i ssb-browser-core
```
D:\huangyg\git\js.sample\ssb\html>browserify index.js -o dist.js
Error: Parsing file D:\huangyg\git\js.sample\ssb\html\index.js: 'import' and 'export' may appear only with 'sourceType: module' (1:0)
    at Deps.parseDeps (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\module-deps\index.js:519:15)
    at getDeps (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\module-deps\index.js:447:44)
    at C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\module-deps\index.js:430:38
    at ConcatStream.<anonymous> (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\concat-stream\index.js:37:43)
    at ConcatStream.emit (node:events:532:35)
    at finishMaybe (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\readable-stream\lib\_stream_writable.js:630:14)
    at endWritable (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\readable-stream\lib\_stream_writable.js:638:3)
    at Writable.end (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\readable-stream\lib\_stream_writable.js:594:22)
    at DuplexWrapper.onend (C:\Users\hyg\AppData\Roaming\nvm\v22.4.1\node_modules\browserify\node_modules\readable-stream\lib\_stream_readable.js:577:10)
    at Object.onceWrapper (node:events:634:28)
```
- index.js, package.json一字不改都是example repo里的。 不再追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.26.[linkml, yaml-ld, reading time.]任务&body=日期: 2024.07.26.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/07/20240726143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240726143000"></a>
## 14:30~14:59
learn: [linkml, yaml-ld, reading time.]

- readme: |
      - https://linkml.io/linkml/schemas/models.html
      - https://linkml.io/linkml/intro/tutorial04.html
- 14:00任务占用时间。linkml的教程已经在其他项目快速浏览过，实践中够用，不再安排细读。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.26.[设计新版raw.js架构。]任务&body=日期: 2024.07.26.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240726160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240726160000"></a>
## 16:00~16:59
raw: [设计新版raw.js架构。]

- readme: |
      - 增加子命令和参数。
      - 划分独立模块。
- raw是个人的野生部分，具体是指ego模型界定的下意识行为与有意识行为的边界，在有意识一侧的部分。
- 2015年设计的food、health中，food相对独立可以作为子命令，health可以继续细分。
- 登记20分钟，回到waitlinglist继续。
    - '30': 设计新版raw.js架构。
      readme: |
        - 增加子命令和参数。
        - 划分独立模块。
