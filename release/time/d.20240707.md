# 2024.07.07.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[相关代码整理到day.js](#20240707093000)  
- 14:00	[相关代码整理到waitinglist.js](#20240707140000)  
- 14:30	[js minify tools](#20240707143000)  
- 16:00	[月度季度报告的报表统一到新格式](#20240707160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 1228 | 16472 | 3690 |
| PSMD | 7000 | 182 | 6818 | 690 |
| ego | 4000 | 412 | 3588 | 630 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 450 |
| raw | 500 | 60 | 440 | 90 |
| learn | 1500 | 359 | 1141 | 1080 |
| js | 1200 | 95 | 1105 | 750 |

---

waiting list:


- 30分钟时间片：
  - learn的第5号事项：trello api
  - PSMD的第6号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
  - learn的第6号事项：Document-Oriented数据库
  - PSMD的第7号事项：重新思考term metadata种的upgradeby，是否需要显示内容和id两种。

- 60分钟时间片：
  - ego的第1号事项：完成day.js中table、index等string
  - ego的第2号事项：相关代码整理到season.js
  - learn的第2号事项：linkml, yaml-ld
  - js的第2号事项：dat sample for root metadata

- 90分钟时间片：
  - learn的第1号事项：pear sample
  - js的第1号事项：peerjs sample
  - raw的第1号事项：自动从网页提取营养成分表
  - PSMD的第2号事项：用linkml编写一套标准模型

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.07.[相关代码整理到day.js]任务&body=日期: 20240707%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240707093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240707093000"></a>
##  09:30~10:59
ego: 相关代码整理到day.js

- 整理 day.test.js、season.test.js
```
D:\huangyg\git\ego\src>node --test
✔ get day metadata file name (1.8376ms)
✔ get wake time (2.9553ms)
✔ get season metadata file name (1.7236ms)
✔ make meta file id (1.664ms)
✔ get today str (0.9971ms)
ℹ tests 5
ℹ suites 0
ℹ pass 5
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 162.4555
```
- log要传递所有参数:
```
function log(...s) {
    s[0] = log.caller.name + ">" + s[0];
    console.log( ...s);
}
```
- 完成makedayobj()
```
D:\huangyg\git\ego\src>node ego1 day -t
{ test: true }
makedayobj> waketime: 61200
makedayobj> dayplan: 1b
timeslice: 0 free 6 12 15 6 26
timeslice: 1 prepare 6 27 60 7 26
timeslice: 2 food 7 27 45 8 11
timeslice: 3 discuss 8 12 45 8 56
timeslice: 4 free 8 57 32 9 29
timeslice: 5 work 9 30 90 10 59
makedayobj> delete the job from xuemen :
 kernel模型升级
makedayobj> before delete todo item, waitinglist: 5 0
task: xuemen
name: kernel模型升级
id: 0

makedayobj> before delete todo item:
- '90': kernel模型升级
- '195': 重新设计S2状态下的学门基本管理制度
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

makedayobj> after delete todo item:
- '195': 重新设计S2状态下的学门基本管理制度
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

makedayobj> time slice draft file name ../../draft/2024/07/20240707093000.md
 ## 09:30 ~ 10:59
xuemen: [kernel模型升级]


timeslice: 6 food 11 0 180 13 59
timeslice: 7 work 14 0 30 14 29
makedayobj> delete the job from learn :
 trello api
makedayobj> before delete todo item, waitinglist: 7 4
task: learn
name: trello api
id: 4
readme: |
  https://developer.atlassian.com/cloud/trello/rest/
  https://www.npmjs.com/package/trello

makedayobj> before delete todo item:
- '90': pear sample
- '60': linkml, yaml-ld
  readme: |
    - https://linkml.io/linkml/schemas/models.html
    - https://linkml.io/linkml/intro/tutorial04.html
- '90': 拟制说、目的财产说、实在说
- '60': Decentralized Identifiers
  readme: |
    https://did.js.org/
    https://www.w3.org/TR/did-use-cases/
    https://www.w3.org/TR/did-core/
- '30': trello api
  readme: |
    https://developer.atlassian.com/cloud/trello/rest/
    https://www.npmjs.com/package/trello
- '30': Document-Oriented数据库
  readme: |
    -MongoDB、CouchDB、RavenDB
- '30': 列存储（Wide Column Store/Column-Family）数据库
  readme: |
    -Cassandra、HBase
- '30': Query fundamentals https://console.neo4j.io
- '60': 开发YARRRML范例
- '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
- '60': Windows PowerShell
- '195': rust入门
  bind:
    - '195': 开发reenet Contracts sample
      readme: |
        - https://docs.freenet.org/components/contracts.html
        - https://docs.freenet.org/introduction.html
        - https://docs.freenet.org/tutorial.html
- '60': 继续学习promise api
  readme: |
    - https://zh.javascript.info/promise-api

makedayobj> after delete todo item:
- '90': pear sample
- '60': linkml, yaml-ld
  readme: |
    - https://linkml.io/linkml/schemas/models.html
    - https://linkml.io/linkml/intro/tutorial04.html
- '90': 拟制说、目的财产说、实在说
- '60': Decentralized Identifiers
  readme: |
    https://did.js.org/
    https://www.w3.org/TR/did-use-cases/
    https://www.w3.org/TR/did-core/
- '30': Document-Oriented数据库
  readme: |
    -MongoDB、CouchDB、RavenDB
- '30': 列存储（Wide Column Store/Column-Family）数据库
  readme: |
    -Cassandra、HBase
- '30': Query fundamentals https://console.neo4j.io
- '60': 开发YARRRML范例
- '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
- '60': Windows PowerShell
- '195': rust入门
  bind:
    - '195': 开发reenet Contracts sample
      readme: |
        - https://docs.freenet.org/components/contracts.html
        - https://docs.freenet.org/introduction.html
        - https://docs.freenet.org/tutorial.html
- '60': 继续学习promise api
  readme: |
    - https://zh.javascript.info/promise-api

makedayobj> time slice draft file name ../../draft/2024/07/20240707140000.md
 ## 14:00 ~ 14:29
learn: [trello api]


timeslice: 8 work 14 30 30 14 59
makedayobj> delete the job from PSMD :
 debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
makedayobj> before delete todo item, waitinglist: 8 5
task: PSMD
name: debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
id: 5
readme: |
  term.25c83dac.yaml的depend.text 包含 <term.2e4f11cb.term.1>
  执行node term term 2e4f11cb
  term.25c83dac.yaml的interface:
    <term.50430bca.632214.c83dac.entity.1>: 董事会
    <term.50430bca.632214.c83dac.term.1>: 章程第八条（十）
    <term.50430bca.632214.c83dac.term.2>: 中华人民共和国公司法

makedayobj> before delete todo item:
- '195': data -> schema 迭代范例
- '60': 用linkml编写一套标准模型
- '195': term + COM matedata -> deploy metadata -> deploy view
- '90': 以1406为例检查知识图谱和blawx的语法
- '60': 设计条款的可执行机制
- '30': debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
  readme: |
    term.25c83dac.yaml的depend.text 包含 <term.2e4f11cb.term.1>
    执行node term term 2e4f11cb
    term.25c83dac.yaml的interface:
      <term.50430bca.632214.c83dac.entity.1>: 董事会
      <term.50430bca.632214.c83dac.term.1>: 章程第八条（十）
      <term.50430bca.632214.c83dac.term.2>: 中华人民共和国公司法
- '30': 重新思考term metadata种的upgradeby，是否需要显示内容和id两种。

makedayobj> after delete todo item:
- '195': data -> schema 迭代范例
- '60': 用linkml编写一套标准模型
- '195': term + COM matedata -> deploy metadata -> deploy view
- '90': 以1406为例检查知识图谱和blawx的语法
- '60': 设计条款的可执行机制
- '30': 重新思考term metadata种的upgradeby，是否需要显示内容和id两种。

makedayobj> time slice draft file name ../../draft/2024/07/20240707143000.md
 ## 14:30 ~ 14:59
PSMD: [debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。]


timeslice: 9 free 15 0 60 15 59
timeslice: 10 work 16 0 60 16 59
makedayobj> delete the job from ego :
 相关代码整理到season.js
makedayobj> before delete todo item, waitinglist: 10 0
task: ego
name: 相关代码整理到season.js
id: 0

makedayobj> before delete todo item:
- '60': 相关代码整理到season.js
- '60': 使用新版day、season、waitinglist的ego.js
- '90': 根据ego对外信息接口编写页面代码
  readme: |
    D:\huangyg\git\blog\release\time\d.20240604.md
- '60': 设计subtask与todo的关系，保持工作的持续连贯。
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '30': 生成waitinglist时，考虑多层todo。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

makedayobj> after delete todo item:
- '60': 使用新版day、season、waitinglist的ego.js
- '90': 根据ego对外信息接口编写页面代码
  readme: |
    D:\huangyg\git\blog\release\time\d.20240604.md
- '60': 设计subtask与todo的关系，保持工作的持续连贯。
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '30': 生成waitinglist时，考虑多层todo。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

makedayobj> time slice draft file name ../../draft/2024/07/20240707160000.md
 ## 16:00 ~ 16:59
ego: [相关代码整理到season.js]


timeslice: 11 food 17 0 120 18 59
timeslice: 12 check 19 0 60 19 59
makedayobj> dump seasonobj, todo:
 PSMD:
  - '195': data -> schema 迭代范例
  - '60': 用linkml编写一套标准模型
  - '195': term + COM matedata -> deploy metadata -> deploy view
  - '90': 以1406为例检查知识图谱和blawx的语法
  - '60': 设计条款的可执行机制
  - '30': 重新思考term metadata种的upgradeby，是否需要显示内容和id两种。
ego:
  - '60': 使用新版day、season、waitinglist的ego.js
  - '90': 根据ego对外信息接口编写页面代码
    readme: |
      D:\huangyg\git\blog\release\time\d.20240604.md
  - '60': 设计subtask与todo的关系，保持工作的持续连贯。
  - '90': finish.devmaketomorowinfo(tomorrow);
  - '60': 用js代码完成日小结后的git操作。
    readme: |
      - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
      - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
  - '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
  - '30': 生成waitinglist时，考虑多层todo。
  - '60': 时间改为ISO8601格式
    readme: |
      - season metadata
      - day metada
      - draft文件名
infra: []
learn:
  - '90': pear sample
  - '60': linkml, yaml-ld
    readme: |
      - https://linkml.io/linkml/schemas/models.html
      - https://linkml.io/linkml/intro/tutorial04.html
  - '90': 拟制说、目的财产说、实在说
  - '60': Decentralized Identifiers
    readme: |
      https://did.js.org/
      https://www.w3.org/TR/did-use-cases/
      https://www.w3.org/TR/did-core/
  - '30': Document-Oriented数据库
    readme: |
      -MongoDB、CouchDB、RavenDB
  - '30': 列存储（Wide Column Store/Column-Family）数据库
    readme: |
      -Cassandra、HBase
  - '30': Query fundamentals https://console.neo4j.io
  - '60': 开发YARRRML范例
  - '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - '60': Windows PowerShell
  - '195': rust入门
    bind:
      - '195': 开发reenet Contracts sample
        readme: |
          - https://docs.freenet.org/components/contracts.html
          - https://docs.freenet.org/introduction.html
          - https://docs.freenet.org/tutorial.html
  - '60': 继续学习promise api
    readme: |
      - https://zh.javascript.info/promise-api
js:
  - '90': peerjs sample
  - '60': dat sample for root metadata
    readme: |
      - https://github.com/dat-ecosystem-archive/dat-node
      - https://datproject.org/
      - https://github.com/RangerMauve/hyper-sdk
      - https://docs.datproject.org/docs/dat-sdk#using-script-tags-to-load-the-sdk
  - '60': syncthing sample
    readme: |
      - https://docs.syncthing.net/dev/rest.html
      - https://github.com/JodusNodus/node-syncthing
  - '90': helia and orbitdb sample
    readme: |
      - https://helia.io/
      - https://api.orbitdb.org/
  - '60': git sample
    readme: |
      - https://isomorphic-git.org/docs/en/snippets
      - https://isomorphic-git.org/docs/en/quickstart
  - '60': 在代码中自动提交git库
    readme: |
      - D:\huangyg\git\draft\2024\04\20240430140000.md
      - 2024.6.13. 16:00 draft
  - '60': 学习 nodejs test框架
    readme: |
      - https://github.com/Vanessa219/vditor
          - https://nodejs.cn/api/test.html
      - https://github.com/markedjs/marked
      - https://bun.sh/
      bind:
        - '90': 实际编写自己的测试范例
  - '60': 向外提供js文件的范例，为代码层级互通做准备
  - '60': giiter.im bot sample
    readme: |
      - https://github.com/matrix-org/matrix-js-sdk
      - http://matrix-org.github.io/matrix-js-sdk/index.html
  - '30': 日期格式化
    readme: |
      http://momentjs.cn/
      https://www.cnblogs.com/biehongli/p/9327604.html
      https://juejin.cn/post/7199191689150644279
      https://blog.csdn.net/lwf3115841/article/details/129105206
  - '60': 学习'Electron'，创作一个范例。
  - '30': mermaid
    readme: |
      https://mermaid.nodejs.cn/
      https://mermaid.js.org/
  - '30': text->id,protobuf-javascript
    readme: |
      https://github.com/protocolbuffers/protobuf-javascript
raw: []
xuemen:
  - '195': 重新设计S2状态下的学门基本管理制度
  - '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
```
- 测试通过。
```
test('make day object',(t)=>{
    day.debug = true;
    assert.ok(day.makedayobj(1));
    assert.ok(day.makedayobj(2));
});
```
```
✔ get day metadata file name (1.8806ms)
✔ get wake time (3.2802ms)
✔ make day object (15.9096ms)
✔ get season metadata file name (1.9747ms)
✔ make meta file id (1.6219ms)
✔ get today str (0.9012ms)
✔ make waitinglist (7.7974ms)
ℹ tests 7
ℹ suites 0
ℹ pass 7
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 196.35
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.07.[相关代码整理到waitinglist.js]任务&body=日期: 20240707%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240707140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240707140000"></a>
## 14:00~14:29
ego: [相关代码整理到waitinglist.js]

- makewaitinglist()
- 测试通过。
```
test('make waitinglist',(t)=>{
    assert.ok(waitinglist.makewaitinglist(season.loadseasonobj()));
});
```
- 其它优先级排序需求明确后再开发。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.07.[js minify tools]任务&body=日期: 20240707%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240707143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240707143000"></a>
## 14:30~14:59
js: [js minify tools]

- js代码写入metadata，作为候选方案确保代码和数据准确匹配。
- https://www.npmjs.com/package/minify
    - npm i minify -g
    - minify：'minify' 不是内部或外部命令，也不是可运行的程序或批处理文件。
        - C:\Users\hyg\AppData\Roaming\npm add to PATH
    - npm i minify
    - node main.mjs
```
D:\huangyg\git\js.sample\minify>minify ../IM/XMPP.js
const{client:a,xml:b}=require('@xmpp/client');process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';var c=a({service:'chat.jabb.im',domain:'jabbim.com',username:'learn',password:'123456'});c.on('status',A=>console.debug(A));c.on('error',_=>console.error(_));c.on('offline',()=>console.log('offline'));c.on('stanza',B=>{console.log(`${B}`);if(B.is('message')){console.log('stanza.body: '+B.children['body']);console.log('stanza.attrs.from: '+B.attrs.from);const{to:C,from:_b}=B.attrs;c.send(b('message',{to:'hyg@jabbim.com', type:'chat'},b('body',null,'yes, i see.')))}});c.on('online',_a=>{console.log('online: '+`${_a}`);c.send(b('presence',{},b('show',{},'chat'),b('status',{},'presence!')))});c.start().catch(console.error);
```
```
D:\huangyg\git\js.sample\minify>node main.mjs
const{client:a,xml:b}=require('@xmpp/client');process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';var c=a({service:'chat.jabb.im',domain:'jabbim.com',username:'learn',password:'123456'});c.on('status',A=>console.debug(A));c.on('error',_=>console.error(_));c.on('offline',()=>console.log('offline'));c.on('stanza',B=>{console.log(`${B}`);if(B.is('message')){console.log('stanza.body: '+B.children['body']);console.log('stanza.attrs.from: '+B.attrs.from);const{to:C,from:_b}=B.attrs;c.send(b('message',{to:'hyg@jabbim.com', type:'chat'},b('body',null,'yes, i see.')))}});c.on('online',_a=>{console.log('online: '+`${_a}`);c.send(b('presence',{},b('show',{},'chat'),b('status',{},'presence!')))});c.start().catch(console.error);
```
- https://github.com/mishoo/UglifyJS
    - npm install uglify-js -g
```
D:\huangyg\git\js.sample\minify>uglifyjs ../IM/XMPP.js
const{client,xml}=require("@xmpp/client");process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";const xmpp=client({service:"chat.jabb.im",domain:"jabbim.com",username:"learn",password:"123456"});xmpp.on("status",status=>{console.debug(status)});xmpp.on("error",err=>{console.error(err)});xmpp.on("offline",()=>{console.log("offline")});xmpp.on("stanza",async stanza=>{console.log(stanza.toString());if(stanza.is("message")){console.log("stanza.body: "+stanza.children["body"]);console.log("stanza.attrs.from: "+stanza.attrs.from);const{to,from}=stanza.attrs;xmpp.send(xml("message",{to:"hyg@jabbim.com",type:"chat"},xml("body",null,"yes, i see.")))}});xmpp.on("online",async address=>{console.log("online: "+address.toString());const presence=xml("presence",{},xml("show",{},"chat"),xml("status",{},"presence!"));xmpp.send(presence)});xmpp.start().catch(console.error);
```
```
D:\huangyg\git\js.sample\minify>node main
undefined
function add(n,d){return n+d}
```
- https://github.com/babel/minify
    - babel-minify is an experimental project ...
    - 不再试了。前两种够用。
- minify替换变量后文件更小，uglifyjs通过参数应该有类似效果。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.07.[月度季度报告的报表统一到新格式]任务&body=日期: 20240707%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240707160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240707160000"></a>
## 16:00~16:59
raw: [月度季度报告的报表统一到新格式]

- foodseasonreport() 中改一行就可以：
```
//showtables();
    maketable();
```
- 至此，showtables()可以彻底弃用。
- 提前准备了营养成分标抓取的资料，在raw项目下增加todo项：
    - '90': 自动从网页提取营养成分表
      readme: |
        - https://www.npmjs.com/package/htmlparser2
        - https://www.npmjs.com/package/jsdom
        - https://htmltojsonconverter.azurewebsites.net/
        - https://developerxyz.com/free-tools/html-to-json-converter
