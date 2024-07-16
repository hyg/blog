# 2024.07.16.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1a)。

<a id="index"></a>
- 07:45~08:44	raw: [自动从网页提取营养成分表](#20240716074500)
- 09:30~10:59	ego: [根据ego对外信息接口编写页面代码](#20240716093000)
- 14:00~14:49	js: [限定nodejs版本](#20240716140000)
- 14:30~14:29	learn: [Query fundamentals https://console.neo4j.io](#20240716143000)
- 16:00~17:09	ego: [设计subtask与todo的关系，保持工作的持续连贯。](#20240716160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 2887 | 14813 | 3315 |
| PSMD | 7000 | 402 | 6598 | 630 |
| ego | 4000 | 952 | 3048 | 360 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 60 |
| learn | 1500 | 782 | 718 | 1050 |
| js | 1200 | 541 | 659 | 570 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：设计ego中task的种类、设立、注销规则。
  - learn的第1号事项：确定mermaid gantt语法是否能表达ego模型task关系
  - js的第9号事项：text->id,protobuf-javascript
  - js的第10号事项：用day.js改写util.js

- 60分钟时间片：
  - js的第1号事项：helia, orbitdb sample
  - raw的第1号事项：自动从网页提取营养成分表
  - ego的第2号事项：编写ego中task的schema
  - learn的第3号事项：schema in ipld

- 90分钟时间片：
  - learn的第2号事项：pear api sample
  - js的第2号事项：try "@helia/ipns" sample
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法
  - ego的第3号事项：用linkml和json schema沿信息接口向内建模。

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - xuemen的第2号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.16.[自动从网页提取营养成分表]任务&body=日期: 2024.07.16.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240716074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240716074500"></a>
## 07:45~8:44
raw: [自动从网页提取营养成分表]

- npm install htmlparser2
    - D:\huangyg\git\js.sample\htmlparser\htmlparser2.js
- https://www.npmjs.com/package/jsdom
- D:\huangyg\git\js.sample\htmlparser\json2e.js
    - https://htmltojsonconverter.azurewebsites.net/
    - https://developerxyz.com/free-tools/html-to-json-converter
    - D:\huangyg\git\js.sample\htmlparser\e.芋头.json
```
D:\huangyg\git\js.sample\htmlparser>node json2e e.芋头.json
elementdata:
{
  '食品中文名': '芋头',
  '食品英文名': 'Taro',
  '食品分类': '蔬菜类及制品',
  '可食部': '100.0%',
  '来源': '泰国公共卫生部',
  '产地': '泰国',
  '能量(千焦)': '490',
  '蛋白质(克)': '2.1',
  '脂肪(克)': '0.1',
  '碳水化合物(克)': '26.8',
  '膳食纤维(克)': '1.0',
  '维生素A(微克视黄醇当量)': '-',
  '维生素E(毫克α-生育酚当量)': '-',
  '维生素B1（硫胺素）(毫克)': '0.15',
  '维生素B2（核黄素）(毫克)': '0.04',
  '维生素C（抗坏血酸）(毫克)': '2.0',
  '烟酸（烟酰胺）(毫克)': '1.00',
  '磷(毫克)': '54',
  '钙(毫克)': '84',
  '铁(毫克)': '-',
  '灰分(克)': '1.0',
  '水分(克)': '70',
  '能量(千卡)': '117'
}
```
- 继续追加时间。
    - '60': 自动从网页提取营养成分表
      readme: |
        - read 2024.07.16.07:45 draft
        - finish the parseeshian() in D:\huangyg\git\js.sample\htmlparser\json2e.js , save e.foodname.yaml use DRI and NRV metadata.

---

## 以下是未归档的历史手稿
PSMD  [entity model增加自我认知、资源分配、元认知字段。]

- 不列出具体数据，只定义输出输入的数据模型，以及存放位置、处理代码。
- 输出输入的数据类型也不直接定义，而是列出这些定义生效、发布的协议。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.16.[根据ego对外信息接口编写页面代码]任务&body=日期: 2024.07.16.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240716093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240716093000"></a>
##  09:30~10:59
ego: [根据ego对外信息接口编写页面代码]

- D:/huangyg/git/blog/release/time/d.20240604.md
- https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
    - 导航到 DNS 提供程序并创建 CNAME 记录，使子域指向站点的默认域。 例如，如果要使用子域 www.example.com 作为你的用户站点，请创建将 www.example.com 指向 <user>.github.io 的 CNAME 记录。 如果要使用子域 another.example.com 作为你的组织站点，请创建将 another.example.com 指向 <organization>.github.io 的 CNAME 记录。 CNAME 记录应始终指向 <user>.github.io 或 <organization>.github.io，排除存储库名称。 
    - 使用 organization ？
    - （www.example.com、
blog.example.com）	CNAME	SUBDOMAIN	USERNAME.github.io 或
ORGANIZATION.github.io
- https://docs.codeberg.org/codeberg-pages/using-custom-domain/
    - www.yourdomain.com	CNAME	reponame.username.codeberg.page
    - 应该也可以用organization：
        - https://docs.codeberg.org/codeberg-pages/
        - Create a public repository named 'pages' in your user account or organization.
- 每个子域名对应一个git库，根路径下的index.html作为信息接口首页。
- https://ajv.js.org/guide/environments.html#browsers
    - D:\huangyg\git\ego\data\raw.food.json 
```
"additionalProperties": {
        "type": "string"
    }
```
    - https://ajv.js.org/guide/environments.html#browsers
    - https://cdnjs.com/libraries/ajv
    - D:\huangyg\git\js.sample\schema\raw.html 测试通过。本地测试通过的模型和数据，不再在网页测试。
- 追加时间用linkml和json schema沿信息接口向内建模。
    - '90': 用linkml和json schema沿信息接口向内建模。
      readme: |
        - D:/huangyg/git/blog/release/time/d.20240604.md
        - 2024.7.16. 9:30 draft

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.16.[限定nodejs版本]任务&body=日期: 2024.07.16.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240716140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240716140000"></a>
## 14:00~14:29
js: [限定nodejs版本]

- nvm
    - https://github.com/nvm-sh/nvm
    - https://www.runoob.com/w3cnote/nvm-manager-node-versions.html
    - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
D:\huangyg\git\js.sample\helia>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
'bash' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```
    - Note: nvm also supports Windows in some cases. It should work through WSL (Windows Subsystem for Linux) depending on the version of WSL. It should also work with GitBash (MSYS) or Cygwin. Otherwise, for Windows, a few alternatives exist, which are neither supported nor developed by us:
- nvm-windows
    - https://github.com/coreybutler/nvm-windows
    - 卸载nodejs
    - 下载nvm-setup.exe，安装。
    - nvm install 16
    - nvm install 22
    - nvm list
    - node -v
    - npm -v
    - nvm use 16
    - nvm use 22
    - 切换版本没有问题。
```
D:\huangyg\git\js.sample\helia>nvm list

    22.4.1
    16.20.2
  * 10.24.1 (Currently using 64-bit executable)

D:\huangyg\git\js.sample\helia>nvm use 22
Now using node v22.4.1 (64-bit)

D:\huangyg\git\js.sample\helia>node -v
v22.4.1

D:\huangyg\git\js.sample\helia>npm -v
10.8.1

D:\huangyg\git\js.sample\helia>nvm use 16
Now using node v16.20.2 (64-bit)

D:\huangyg\git\js.sample\helia>node -v
v16.20.2

D:\huangyg\git\js.sample\helia>npm -v
8.19.4
```
- n
    - npm install -g n
```
D:\huangyg\git\js.sample\helia>npm install -g n
npm error code EBADPLATFORM
npm error notsup Unsupported platform for n@9.2.3: wanted {"os":"!win32"} (current: {"os":"win32"})
npm error notsup Valid os:  !win32
npm error notsup Actual os: win32
npm error A complete log of this run can be found in: C:\Users\hyg\AppData\Local\npm-cache\_logs\2024-07-16T06_15_11_168Z-debug-0.log
```
- windows这边用nvm-windows，ubuntu可以用nvm和n。都可以切换版本。
- https://segmentfault.com/q/1010000042599510
    - 在package.json中增加
```
  "engines" : {
    "npm" : ">=9.0.0 <11.0.0",
    "node" : ">=17.0.0 <23.0.0"
  }
  ```
    - 创建.npmrc 文件，engine-strict=true。执行命令行npm config set engine-strict true 
    - 在nodejs v16下依然可以执行。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.16.[Query fundamentals https://console.neo4j.io]任务&body=日期: 2024.07.16.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240716143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240716143000"></a>
## 14:30~14:59
learn: [Query fundamentals https://console.neo4j.io]

- 还是登录失败。
- 因为neo4j不方便用户（需要安装），先放一放。查询语法也以后再学习，相关学习todo项不再回到waitinglist。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.16.[设计subtask与todo的关系，保持工作的持续连贯。]任务&body=日期: 2024.07.16.%0D%0A序号: 12%0D%0A手稿:../../draft/2024/07/20240716160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240716160000"></a>
## 16:00~16:59
ego: [设计subtask与todo的关系，保持工作的持续连贯。]

- 需求
    - task可以分解为subtask，可以合并为一个数据结构。
    - task之间的关系参考甘特图。
        - 生成mermaid代码，使用mermaid的before、until等语法。
        - https://mermaid.nodejs.cn/syntax/gantt.html
    - task可以分配多个todo item，每个todoitem对应一个时间片、产生一份draft，阅读时应该很方便的索引和汇编。
        - todo item是调度的最小单位，同一个task下可以延续bind绑定，不在增加其它关系。
    - 跨task的draft同理，应该方便索引和汇编。
- task.json 是task的json schema
    - 是ego.data 的instance
    - view generator code file
    -
- task.x.yaml  task.x.json是x项目的metadata
    - 是task的instance 
    - path of instance metadata
- task.x.md task.x.html 是x项目的view
    - ego.view的instance 
    - task view
    - todo item view ~ season.time.x.todo ~ day metadata.time.period ~ draft view
    - 
- ego各信息接口的task名称都指向taskview
- ego.view
    - new view require
        - text
        - model
        - code
    - todo: view confirm
    - todo: view to model 
- 后续任务：
    - '30': 确定mermaid gantt语法是否能表达ego模型task关系
      readme: |
        - https://mermaid.nodejs.cn/syntax/gantt.html
        - read 2024.07.16.16:00 draft
    - '30': 设计ego中task的种类、设立、注销规则。
    - '60': 编写ego中task的schema
