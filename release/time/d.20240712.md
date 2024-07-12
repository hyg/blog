# 2024.07.12.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 14:00	[生成waitinglist时，考虑多层todo。](#20240712140000)  
- 14:30	[列存储（Wide Column Store/Column-Family）数据库](#20240712143000)  
- 16:00	[使用新版day、season、waitinglist的ego.js](#20240712160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 2212 | 15488 | 3705 |
| PSMD | 7000 | 257 | 6743 | 720 |
| ego | 4000 | 787 | 3213 | 540 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 60 |
| learn | 1500 | 683 | 817 | 1140 |
| js | 1200 | 275 | 925 | 600 |

---

waiting list:


- 30分钟时间片：
  - learn的第1号事项：列存储（Wide Column Store/Column-Family）数据库
  - js的第8号事项：日期格式化
  - learn的第8号事项：Query fundamentals https://console.neo4j.io
  - js的第10号事项：mermaid

- 60分钟时间片：
  - ego的第1号事项：整理日小结功能。
  - js的第1号事项：syncthing sample
  - raw的第1号事项：自动从网页提取营养成分表
  - ego的第2号事项：使用新版day、season、waitinglist的ego.js

- 90分钟时间片：
  - PSMD的第2号事项：用linkml编写一套标准模型
  - js的第2号事项：helia and orbitdb sample
  - PSMD的第3号事项：term metadata的序号，分为显示序号和唯一id两种。
  - ego的第3号事项：根据ego对外信息接口编写页面代码

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.12.[生成waitinglist时，考虑多层todo。]任务&body=日期: 20240712%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240712140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240712140000"></a>
## 14:00~14:29
ego: [生成waitinglist时，考虑多层todo。]

- 目前的结构是各处代码直接操作waitinglist object，如果要把多层todo准确排入waitinglist:
    - 最直观的解决方案是由waitinglist.js统一提供接口，每次执行一个todo项，都重新组合waitinglist。
        - plan: function(seasonobj,waitlistobj,amount){}  返回值不好定。
    - 方案二：season.js提供接口，执行一个todo项，然后再用waitinglist的接口重新生成。
        - deletetodoitem(seasonobj,todoitem){}
- waitinglist.js makewaitinglist() 两句对换一下嵌套层级：
```
if (todoobj[restSorted[j]][k] != null) {
    for (var amounttype in waitinglist) {
```
- 整理测试数据集：
```

test('delete todo item',(t)=>{
    season.debug = true;
    
    var seasonobj ;
    assert.ok(seasonobj = season.loadseasonobj());
    
    seasonobj.todo = {
        'PSMD': [
            {
                '195': 'PSMD.195',
                'bind': [
                    {
                        '60': 'PSMD.195.60',
                        'bind': [
                            {'30': 'PSMD.195.60.30'},
                            {'90': 'PSMD.195.60.90'}
                        ]
                    },
                    {
                        '90': 'PSMD.195.90'
                    }
                ],
                'readme': 'PSMD.195.readme'
            },
            {
                '90': 'PSMD.90',
                readme: "PSMD.90.readme"
            }
        ],
        'ego': [
            {
                '195': 'ego.195',
                'readme': 'ego.195.readme'
            },
            {
                '30': 'ego.30'
            }
        ]
    };

    var todoitem = {
        'task': 'PSMD',
        'name': 'PSMD.195',
        'id': 0,
        'readme': 'PSMD.195.readnme'
    };

    assert.ok(season.deletetodoitem(seasonobj,todoitem));

    todoitem = {
        'task': 'ego',
        'name': 'ego.30',
        'id': 1
    };

    assert.ok(season.deletetodoitem(seasonobj,todoitem));
});
```
- 执行结果正常：

```
D:\huangyg\git\ego\src>node --test
makedayobj> waketime: 81000
makedayobj> dayplan: 1d
makedayobj> timeslice: 0 free 8 10 15 8 24
makedayobj> timeslice: 1 prepare 8 25 60 9 24
makedayobj> timeslice: 2 food 9 25 45 10 9
makedayobj> timeslice: 3 discuss 10 10 45 10 54
makedayobj> timeslice: 4 free 10 55 184 13 59
makedayobj> timeslice: 5 work 14 0 30 14 29
deletetodoitem> delete the todo item from learn: [列存储（Wide Column Store/Column-Family）数据库]
deletetodoitem> before delete todo item:
- '30': 列存储（Wide Column Store/Column-Family）数据库
  readme: |
    -Cassandra、HBase
- '60': hypercore sample
  readme: >
    - read the exsamples
    :https://github.com/holepunchto/hypercore/tree/main/examples

    - update D:\huangyg\git\js.sample\dat\hypercore.js
- '90': pear api sample
  readme: |
    - https://docs.pears.com/pear-runtime/api
    - https://docs.pears.com/guides/starting-a-pear-terminal-project
- '60': schema in ipld
  readme: |
    - https://ipld.io/docs/schemas/intro/
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

deletetodoitem> after delete todo item:
- '60': hypercore sample
  readme: >
    - read the exsamples
    :https://github.com/holepunchto/hypercore/tree/main/examples

    - update D:\huangyg\git\js.sample\dat\hypercore.js
- '90': pear api sample
  readme: |
    - https://docs.pears.com/pear-runtime/api
    - https://docs.pears.com/guides/starting-a-pear-terminal-project
- '60': schema in ipld
  readme: |
    - https://ipld.io/docs/schemas/intro/
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

makedayobj> time slice draft file name:../../draft/2024/07/20240712140000.md
## 14:00 ~ 14:29
learn: [静默工作]


makedayobj> timeslice: 6 work 14 30 30 14 59
deletetodoitem> delete the todo item from learn: [Query fundamentals https://console.neo4j.io]
deletetodoitem> before delete todo item:
- '60': hypercore sample
  readme: >
    - read the exsamples
    :https://github.com/holepunchto/hypercore/tree/main/examples

    - update D:\huangyg\git\js.sample\dat\hypercore.js
- '90': pear api sample
  readme: |
    - https://docs.pears.com/pear-runtime/api
    - https://docs.pears.com/guides/starting-a-pear-terminal-project
- '60': schema in ipld
  readme: |
    - https://ipld.io/docs/schemas/intro/
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

deletetodoitem> after delete todo item:
- '60': hypercore sample
  readme: >
    - read the exsamples
    :https://github.com/holepunchto/hypercore/tree/main/examples

    - update D:\huangyg\git\js.sample\dat\hypercore.js
- '90': pear api sample
  readme: |
    - https://docs.pears.com/pear-runtime/api
    - https://docs.pears.com/guides/starting-a-pear-terminal-project
- '60': schema in ipld
  readme: |
    - https://ipld.io/docs/schemas/intro/
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

makedayobj> time slice draft file name:../../draft/2024/07/20240712143000.md
## 14:30 ~ 14:59
learn: [静默工作]


makedayobj> timeslice: 7 free 15 0 60 15 59
makedayobj> timeslice: 8 work 16 0 60 16 59
deletetodoitem> delete the todo item from js: [syncthing sample]
deletetodoitem> before delete todo item:
- '60': syncthing sample
  readme: |
    - https://docs.syncthing.net/dev/rest.html
    - https://github.com/JodusNodus/node-syncthing
- '90': helia and orbitdb sample
  readme: |
    - https://helia.io/
    - https://api.orbitdb.org/
    - https://github.com/ipfs/helia-ipns
    - https://github.com/ipfs/js-ipns
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

deletetodoitem> after delete todo item:
- '90': helia and orbitdb sample
  readme: |
    - https://helia.io/
    - https://api.orbitdb.org/
    - https://github.com/ipfs/helia-ipns
    - https://github.com/ipfs/js-ipns
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

makedayobj> time slice draft file name:../../draft/2024/07/20240712160000.md
## 16:00 ~ 16:59
js: [静默工作]


makedayobj> timeslice: 9 food 17 0 120 18 59
makedayobj> timeslice: 10 check 19 0 60 19 59
dumpdayobj> dump day object file: ../data/day/2024/d.20240712.yaml
date: '20240712'
mode: 1
plan: 1d
time:
  - begin: '20240712081000'
    amount: 15
    type: free
    name: 休整
  - begin: '20240712082500'
    amount: 60
    type: prepare
    name: 备餐、运动
  - begin: '20240712092500'
    amount: 45
    type: food
    name: 午餐
  - begin: '20240712101000'
    amount: 45
    type: discuss
    name: 会议、自习
  - begin: '20240712105500'
    amount: 184
    type: free
    name: 休整
  - begin: '20240712140000'
    amount: 30
    type: work
    name: 静默工作
    subject: learn
    title: 列存储（Wide Column Store/Column-Family）数据库
    readme: |
      -Cassandra、HBase
    output: draft/2024/07/20240712140000.md
    namelink: http://simp.ly/p/8t3vlk
  - begin: '20240712143000'
    amount: 30
    type: work
    name: 静默工作
    subject: learn
    title: Query fundamentals https://console.neo4j.io
    output: draft/2024/07/20240712143000.md
    namelink: http://simp.ly/p/5k9gJy
  - begin: '20240712150000'
    amount: 60
    type: free
    name: 休整
  - begin: '20240712160000'
    amount: 60
    type: work
    name: 静默工作
    subject: js
    title: syncthing sample
    readme: |
      - https://docs.syncthing.net/dev/rest.html
      - https://github.com/JodusNodus/node-syncthing
    output: draft/2024/07/20240712160000.md
    namelink: http://simp.ly/p/4QDThK
  - begin: '20240712170000'
    amount: 120
    type: food
    name: 晚餐
  - begin: '20240712190000'
    amount: 60
    type: check
    name: 讨论、整理提交

makedayobj> dump seasonobj, todo:
PSMD:
  - '195': data -> schema 迭代范例
  - '90': 用linkml编写一套标准模型
  - '90': term metadata的序号，分为显示序号和唯一id两种。
    readnme: |
      - 考虑upgradeby的实现。
  - '195': term + COM matedata -> deploy metadata -> deploy view
  - '90': 以1406为例检查知识图谱和blawx的语法
  - '60': 设计条款的可执行机制
ego:
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
  - '60': 时间改为ISO8601格式
    readme: |
      - season metadata
      - day metada
      - draft文件名
infra: []
learn:
  - '60': hypercore sample
    readme: |
      - read the exsamples :https://github.com/holepunchto/hypercore/tree/main/examples
      - update D:\huangyg\git\js.sample\dat\hypercore.js
  - '90': pear api sample
    readme: |
      - https://docs.pears.com/pear-runtime/api
      - https://docs.pears.com/guides/starting-a-pear-terminal-project
  - '60': schema in ipld
    readme: |
      - https://ipld.io/docs/schemas/intro/
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
  - '90': helia and orbitdb sample
    readme: |
      - https://helia.io/
      - https://api.orbitdb.org/
      - https://github.com/ipfs/helia-ipns
      - https://github.com/ipfs/js-ipns
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
raw:
  - '60': 自动从网页提取营养成分表
    readme: |
      - https://www.npmjs.com/package/htmlparser2
      - https://www.npmjs.com/package/jsdom
      - https://htmltojsonconverter.azurewebsites.net/
      - https://developerxyz.com/free-tools/html-to-json-converter
xuemen:
  - '195': 关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
    readme: |
      - https://www.beijing.gov.cn/hudong/gfxwjzj/zjxx/202406/t20240630_3733376.html
      - https://www.sohu.com/a/162518719_526275
      - https://www.congress.gov/bill/115th-congress/house-bill/3388
      - https://www.nhtsa.gov/vehicle-manufacturers/automated-driving-systems
        - https://www.transportation.gov/av/4
        - https://www.transportation.gov/sites/dot.gov/files/2020-02/EnsuringAmericanLeadershipAVTech4.pdf
      - https://www.transportation.gov/sites/dot.gov/files/docs/AV%20policy%20guidance%20PDF.pdf
  - '195': kernel模型升级
  - '195': 重新设计S2状态下的学门基本管理制度
  - '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

makedayobj> waketime: 81000
makedayobj> dayplan: 2c
makedayobj> timeslice: 0 free 8 10 15 8 24
makedayobj> timeslice: 1 prepare 8 25 60 9 24
makedayobj> timeslice: 2 food 9 25 45 10 9
makedayobj> timeslice: 3 discuss 10 10 45 10 54
makedayobj> timeslice: 4 free 10 55 4 10 59
makedayobj> timeslice: 5 food 11 0 180 13 59
makedayobj> timeslice: 6 work 14 0 90 15 29
deletetodoitem> delete the todo item from ego: [根据ego对外信息接口编写页面代码]
deletetodoitem> before delete todo item:
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
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

deletetodoitem> after delete todo item:
- '60': 设计subtask与todo的关系，保持工作的持续连贯。
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

makedayobj> time slice draft file name:../../draft/2024/07/20240712140000.md
## 14:00 ~ 15:29
ego: [工作]


makedayobj> timeslice: 7 free 15 30 30 15 59
makedayobj> timeslice: 8 work 16 0 60 16 59
deletetodoitem> delete the todo item from ego: [设计subtask与todo的关系，保持工作的持续连贯。]
deletetodoitem> before delete todo item:
- '60': 设计subtask与todo的关系，保持工作的持续连贯。
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

deletetodoitem> after delete todo item:
- '90': finish.devmaketomorowinfo(tomorrow);
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

makedayobj> time slice draft file name:../../draft/2024/07/20240712160000.md
## 16:00 ~ 16:59
ego: [工作]


makedayobj> timeslice: 9 food 17 0 120 18 59
makedayobj> timeslice: 10 check 19 0 60 19 59
dumpdayobj> dump day object file: ../data/day/2024/d.20240712.yaml
date: '20240712'
mode: 2
plan: 2c
time:
  - begin: '20240712081000'
    amount: 15
    type: free
    name: 休整
  - begin: '20240712082500'
    amount: 60
    type: prepare
    name: 备餐、运动
  - begin: '20240712092500'
    amount: 45
    type: food
    name: 早餐
  - begin: '20240712101000'
    amount: 45
    type: discuss
    name: 会议、自习
  - begin: '20240712105500'
    amount: 4
    type: free
    name: 休整
  - begin: '20240712110000'
    amount: 180
    type: food
    name: 备餐、午餐午休
  - begin: '20240712140000'
    amount: 90
    type: work
    name: 工作
    subject: ego
    title: 根据ego对外信息接口编写页面代码
    readme: |
      D:\huangyg\git\blog\release\time\d.20240604.md
    output: draft/2024/07/20240712140000.md
    namelink: http://simp.ly/p/lsBYG9
  - begin: '20240712153000'
    amount: 30
    type: free
    name: 休整
  - begin: '20240712160000'
    amount: 60
    type: work
    name: 工作
    subject: ego
    title: 设计subtask与todo的关系，保持工作的持续连贯。
    output: draft/2024/07/20240712160000.md
    namelink: http://simp.ly/p/MpcbHD
  - begin: '20240712170000'
    amount: 120
    type: food
    name: 晚餐
  - begin: '20240712190000'
    amount: 60
    type: check
    name: 讨论、整理提交

makedayobj> dump seasonobj, todo:
PSMD:
  - '195': data -> schema 迭代范例
  - '90': 用linkml编写一套标准模型
  - '90': term metadata的序号，分为显示序号和唯一id两种。
    readnme: |
      - 考虑upgradeby的实现。
  - '195': term + COM matedata -> deploy metadata -> deploy view
  - '90': 以1406为例检查知识图谱和blawx的语法
  - '60': 设计条款的可执行机制
ego:
  - '90': finish.devmaketomorowinfo(tomorrow);
  - '60': 用js代码完成日小结后的git操作。
    readme: |
      - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
      - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
  - '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
  - '60': 时间改为ISO8601格式
    readme: |
      - season metadata
      - day metada
      - draft文件名
infra: []
learn:
  - '30': 列存储（Wide Column Store/Column-Family）数据库
    readme: |
      -Cassandra、HBase
  - '60': hypercore sample
    readme: |
      - read the exsamples :https://github.com/holepunchto/hypercore/tree/main/examples
      - update D:\huangyg\git\js.sample\dat\hypercore.js
  - '90': pear api sample
    readme: |
      - https://docs.pears.com/pear-runtime/api
      - https://docs.pears.com/guides/starting-a-pear-terminal-project
  - '60': schema in ipld
    readme: |
      - https://ipld.io/docs/schemas/intro/
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
  - '60': syncthing sample
    readme: |
      - https://docs.syncthing.net/dev/rest.html
      - https://github.com/JodusNodus/node-syncthing
  - '90': helia and orbitdb sample
    readme: |
      - https://helia.io/
      - https://api.orbitdb.org/
      - https://github.com/ipfs/helia-ipns
      - https://github.com/ipfs/js-ipns
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
raw:
  - '60': 自动从网页提取营养成分表
    readme: |
      - https://www.npmjs.com/package/htmlparser2
      - https://www.npmjs.com/package/jsdom
      - https://htmltojsonconverter.azurewebsites.net/
      - https://developerxyz.com/free-tools/html-to-json-converter
xuemen:
  - '195': 关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
    readme: |
      - https://www.beijing.gov.cn/hudong/gfxwjzj/zjxx/202406/t20240630_3733376.html
      - https://www.sohu.com/a/162518719_526275
      - https://www.congress.gov/bill/115th-congress/house-bill/3388
      - https://www.nhtsa.gov/vehicle-manufacturers/automated-driving-systems
        - https://www.transportation.gov/av/4
        - https://www.transportation.gov/sites/dot.gov/files/2020-02/EnsuringAmericanLeadershipAVTech4.pdf
      - https://www.transportation.gov/sites/dot.gov/files/docs/AV%20policy%20guidance%20PDF.pdf
  - '195': kernel模型升级
  - '195': 重新设计S2状态下的学门基本管理制度
  - '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

✔ make day object (21.2825ms)
updatesold> season.sold:
{
  PSMD: 257,
  ego: 697,
  xuemen: 30,
  infra: 90,
  js: 275,
  learn: 683,
  raw: 90
}
deletetodoitem> delete the todo item from PSMD: [PSMD.195]
deletetodoitem> before delete todo item:
- '195': PSMD.195
  bind:
    - '60': PSMD.195.60
      bind:
        - '30': PSMD.195.60.30
        - '90': PSMD.195.60.90
    - '90': PSMD.195.90
  readme: PSMD.195.readme
- '90': PSMD.90
  readme: PSMD.90.readme

deletetodoitem> after delete todo item:
- '60': PSMD.195.60
  bind:
    - '30': PSMD.195.60.30
    - '90': PSMD.195.60.90
- '90': PSMD.195.90
- '90': PSMD.90
  readme: PSMD.90.readme

deletetodoitem> delete the todo item from ego: [ego.30]
deletetodoitem> before delete todo item:
- '195': ego.195
  readme: ego.195.readme
- '30': ego.30

deletetodoitem> after delete todo item:
- '195': ego.195
  readme: ego.195.readme

✔ get season metadata file name (1.9315ms)
✔ update season sold time (10.7705ms)
✔ delete todo item (4.6924ms)
✔ make meta file id (1.6579ms)
✔ make waitinglist (8.426ms)
ℹ tests 6
ℹ suites 0
ℹ pass 6
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 193.5113
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.12.[列存储（Wide Column Store/Column-Family）数据库]任务&body=日期: 20240712%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240712143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240712143000"></a>
## 14:30~14:59
learn: [列存储（Wide Column Store/Column-Family）数据库]

- 前面工作占用时间，任务顺延。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.12.[使用新版day、season、waitinglist的ego.js]任务&body=日期: 20240712%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240712160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240712160000"></a>
## 16:00~16:59
ego: [使用新版day、season、waitinglist的ego.js]

- 参数不变，把参数擦护理代码移到program.parse(process.argv);之后
- makedayplan()已完成
- makedaylog()未完成，缺season stat、waitlinglist简表等模块，另外追加时间。
- commander的command、option组合使用有问题，有command时不能设option默认值。
```
D:\huangyg\git\ego\src>node test day
options: {}
You ordered a pizza with no sauce and undefined cheese

D:\huangyg\git\ego\src>node test day --cheese=blue
options: {}
You ordered a pizza with no sauce and undefined cheese

D:\huangyg\git\ego\src>node test day --sauce
error: unknown option '--sauce'
(Did you mean --no-sauce?)

D:\huangyg\git\ego\src>node test day --no-sauce --no-cheese
options: {}
You ordered a pizza with no sauce and undefined cheese

D:\huangyg\git\ego\src>node test day
options: { sauce: true, cheese: 'mozzarella' }
You ordered a pizza with sauce and mozzarella cheese

D:\huangyg\git\ego\src>node test day --sauce
error: unknown option '--sauce'
(Did you mean --no-sauce?)

D:\huangyg\git\ego\src>node test day --no-sauce --no-cheese
options: { sauce: false, cheese: false }
You ordered a pizza with no sauce and no cheese

D:\huangyg\git\ego\src>node test day --cheese=blue
options: { sauce: true, cheese: 'blue' }
You ordered a pizza with sauce and blue cheese
```
- 使用command嵌套重新整理入口，这样更符合ego的多功能规划
```
D:\huangyg\git\ego\src>node ego day
Usage: ego day [options] [command]

以天为单位的自我管理功能

Options:
  -h, --help      display help for command

Commands:
  init <mode>     初始化：绑定时间模版，创建日计划、次日规划、手稿及元数据文件。
  over <diff>     工作结束，生成日小结、更新次日规划。
  plan            显示次日规划，不更新任何文件。
  test <data>     测试新代码
  help [command]  display help for command

D:\huangyg\git\ego\src>node ego day test 123
> test: 123
```
- 追加时间：
    - '60': 整理日小结功能。
    - '60': 使用新版day、season、waitinglist的ego.js
