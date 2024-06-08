# 2024.06.08.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版2。

<a id="index"></a>
- 07:45	[entity, ego draft](#20240608074500)  
- 14:00	[编写浮动时间表代码](#20240608140000)  
- 16:00	[重新设计S2状态下的学门基本管理制度](#20240608160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 15848 | 627 | 2295 |
| PSMD | 7250 | 7176 | 74 | 465 |
| learn | 1250 | 1197 | 53 | 930 |
| ego | 4700 | 4539 | 161 | 420 |
| js | 1375 | 1203 | 172 | 330 |
| xuemen | 1300 | 1253 | 47 | 120 |
| raw | 600 | 450 | 150 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：https://www.npmjs.com/package/commander
  - raw的第1号事项：选择有价值的数据显示到entry页面
  - js的第2号事项：学习AMD规范，如果适用就开发范例
  - learn的第3号事项：寻找可编程的,去中心化的信息发布方式

- 60分钟时间片：
  - PSMD的第1号事项：entity draft
  - learn的第1号事项：linkml, yaml-ld
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - learn的第2号事项：Decentralized Identifiers

- 90分钟时间片：
  - ego的第1号事项：ego draft
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - ego的第3号事项：finish.devmaketomorowinfo(tomorrow);
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第11号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[entity, ego draft]任务&body=日期: 20240608%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240608074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240608074500"></a>
## 7:45~10:59
entity, ego draft

- linkml
    - winget install Python.Python.3.12
    - 新终端窗口： pip install linkml
        - 检查：linkml-convert --help
```
id: https://raw.githubusercontent.com/hyg/ego/vat/data/entity
name: entity
prefixes:
  linkml: https://w3id.org/linkml/
  entity: https://raw.githubusercontent.com/hyg/ego/vat/data/entity
imports:
  - linkml:types
default_range: string
default_prefix: entity

classes:
  Entity:
    attributes:
      id:
      name:
      aliases:
      event:
      todo:
      cognize:
```
- gen-json-schema entity.yaml
```
D:\huangyg\git\ego\data>gen-json-schema entity.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
{
    "$defs": {
        "Entity": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "aliases": {
                    "type": "string"
                },
                "cognize": {
                    "type": "string"
                },
                "event": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "todo": {
                    "type": "string"
                }
            },
            "title": "Entity",
            "type": "object"
        }
    },
    "$id": "https://raw.githubusercontent.com/hyg/ego/vat/data/entity",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": true,
    "metamodel_version": "1.7.0",
    "title": "entity",
    "type": "object",
    "version": null
}
```
- ego.yaml
```
id: huangyg
name: 黄勇刚
aliases: ego
event: ego\data\event
todo: ego\data\todo
cognize: ego\data\congnize
```
- linkml-validate -s entity.yaml ego.yaml
```
D:\huangyg\git\ego\data>linkml-validate -s entity.yaml ego.yaml
C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Scripts\linkml-validate.exe\__main__.py", line 7, in <module>
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 1157, in __call__
    return self.main(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 1078, in main
    rv = self.invoke(ctx)
         ^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 1434, in invoke
    return ctx.invoke(self.callback, **ctx.params)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\core.py", line 783, in invoke
    return __callback(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\click\decorators.py", line 33, in new_func
    return f(get_current_context(), *args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml\validator\cli.py", line 191, in cli
    for result in validator.iter_results_from_source(loader, config.target_class):
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml\validator\validator.py", line 105, in iter_results_from_source
    for index, instance in enumerate(loader.iter_instances()):
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml\validator\loaders\yaml_loader.py", line 27, in iter_instances
    for document in yaml.safe_load_all(source_file):
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\yaml\__init__.py", line 90, in load_all
    loader = Loader(stream)
             ^^^^^^^^^^^^^^
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\yaml\loader.py", line 34, in __init__
    Reader.__init__(self, stream)
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\yaml\reader.py", line 85, in __init__
    self.determine_encoding()
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\yaml\reader.py", line 124, in determine_encoding
    self.update_raw()
  File "C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\yaml\reader.py", line 178, in update_raw
    data = self.stream.read(size)
           ^^^^^^^^^^^^^^^^^^^^^^
UnicodeDecodeError: 'gbk' codec can't decode byte 0x9a in position 27: illegal multibyte sequence
```
- ego.yaml
```
id: huangyg
name: huang yonggang
aliases: ego
event: ego\data\event
todo: ego\data\todo
cognize: ego\data\congnize
```
- linkml-validate -s entity.yaml ego.yaml
```
D:\huangyg\git\ego\data>linkml-validate -s entity.yaml ego.yaml
C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
No issues found
```
- linkml-convert -s entity.yaml ego.yaml -t ttl
```
D:\huangyg\git\ego\data>linkml-convert -s entity.yaml ego.yaml -t ttl
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
@prefix entity: <https://raw.githubusercontent.com/hyg/ego/vat/data/entity> .

[] a entity:Entity ;
    entity:aliases "ego" ;
    entity:cognize "ego\\data\\congnize" ;
    entity:event "ego\\data\\event" ;
    entity:id "huangyg" ;
    entity:name "huang yonggang" ;
    entity:todo "ego\\data\\todo" .
```

- linkml的语法、工具链还有些散碎感，像是在实现过程被技术细节引偏了。linkml借鉴了很深的哲学思考、但不在这项目中。很可能要自行开发工具链。
- 在learn下增加todo项：
    - '60': linkml, yaml-ld
      readme: |
        - 了解linkml.io首页图中的语法和工具：https://linkml.io/uploads/2021/03/30/screen-shot-2021-03-29-at-7-05-14-pm.png
        - https://linkml.io/linkml/intro/tutorial07.html

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[编写浮动时间表代码]任务&body=日期: 20240608%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240608140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240608140000"></a>
## 14:00~15:29
编写浮动时间表代码

- 参考
    - 2024.6.4.16:00 draft
    - 2024.6.6.7:45 draft
- start.devmakedayplan(date, mode);
```
D:\huangyg\git\ego\src>node ego dev 1
devmakedayplan()> waketime: 71400
devmakedayplan()> dayplan: 1c
devmakedayplan()> timeslice: 0 free 7 14 15 7 28
devmakedayplan()> timeslice: 1 prepare 7 29 60 8 28
devmakedayplan()> timeslice: 2 food 8 29 45 9 13
devmakedayplan()> timeslice: 3 discuss 9 14 45 9 58
devmakedayplan()> timeslice: 4 free 9 59 60 10 59
devmakedayplan()> timeslice: 5 food 11 0 180 13 59
devmakedayplan()> timeslice: 6 work 14 0 30 14 29
devmakedayplan() > delete the job from js:
https://www.npmjs.com/package/commander
devmakedayplan()> before delete todo item, waitinglist: 6 0
task: js
name: https://www.npmjs.com/package/commander
id: 0

devmakedayplan()> before delete todo item:
- '30': https://www.npmjs.com/package/commander
- '30': 学习AMD规范，如果适用就开发范例
- '60': 学习 nodejs test框架
  readme: |
    - https://github.com/Vanessa219/vditor
        - https://nodejs.cn/api/test.html
    - https://github.com/markedjs/marked
    - https://bun.sh/
    bind:
      - '90': 实际编写自己的测试范例
- '60': 向外提供js文件的范例，为代码层级互通做准备
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

devmakedayplan()> after delete todo item:
- '30': 学习AMD规范，如果适用就开发范例
- '60': 学习 nodejs test框架
  readme: |
    - https://github.com/Vanessa219/vditor
        - https://nodejs.cn/api/test.html
    - https://github.com/markedjs/marked
    - https://bun.sh/
    bind:
      - '90': 实际编写自己的测试范例
- '60': 向外提供js文件的范例，为代码层级互通做准备
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

devmakedayplan() > time slice draft file name:../../draft/2024/06/20240608140000.md
## 14:00 ~ 14:29
js: [https://www.npmjs.com/package/commander]


devmakedayplan()> timeslice: 7 work 14 30 30 14 59
devmakedayplan() > delete the job from raw:
选择有价值的数据显示到entry页面
devmakedayplan()> before delete todo item, waitinglist: 7 0
task: raw
name: 选择有价值的数据显示到entry页面
id: 0

devmakedayplan()> before delete todo item:
- '30': 选择有价值的数据显示到entry页面

devmakedayplan()> after delete todo item:
[]

devmakedayplan() > time slice draft file name:../../draft/2024/06/20240608143000.md
## 14:30 ~ 14:59
raw: [选择有价值的数据显示到entry页面]


devmakedayplan()> timeslice: 8 free 15 0 60 15 59
devmakedayplan()> timeslice: 9 work 16 0 60 16 59
devmakedayplan() > delete the job from xuemen:
term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
devmakedayplan()> before delete todo item, waitinglist: 9 0
task: xuemen
name: term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
id: 0

devmakedayplan()> before delete todo item:
- '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

devmakedayplan()> after delete todo item:
[]

devmakedayplan() > time slice draft file name:../../draft/2024/06/20240608160000.md
## 16:00 ~ 16:59
xuemen: [term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型]


devmakedayplan()> timeslice: 10 food 17 0 120 18 59
devmakedayplan()> timeslice: 11 check 19 0 60 19 59
devmakedayplan() > draft meta filename:../data/draft/2024/d.20240608.yaml
date: 20240608
mode: 1
plan: 1
time:
  - begin: '20240608140000'
    amount: 30
    type: work
    subject: js
    name: https://www.npmjs.com/package/commander
    output: draft/2024/06/20240608140000.md
  - begin: '20240608143000'
    amount: 30
    type: work
    subject: raw
    name: 选择有价值的数据显示到entry页面
    output: draft/2024/06/20240608143000.md
  - begin: '20240608160000'
    amount: 60
    type: work
    subject: xuemen
    name: term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
    output: draft/2024/06/20240608160000.md

devmakedayplan() > seasonobj.todo:
PSMD:
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
ego:
  - '90': 根据ego对外信息接口编写页面代码
    readme: |
      D:\huangyg\git\blog\release\time\d.20240604.md
  - '60': 用js代码完成日小结后的git操作。
    readme: |
      - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
      - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
  - '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
  - '30': 生成waitinglist时，考虑多层todo。
learn:
  - '60': linkml, yaml-ld
    readme: |
      - 了解linkml.io首页图中的语法和工具：https://linkml.io/uploads/2021/03/30/screen-shot-2021-03-29-at-7-05-14-pm.png
      - https://linkml.io/linkml/intro/tutorial07.html
  - '60': Decentralized Identifiers
    readme: |
      https://did.js.org/
      https://www.w3.org/TR/did-use-cases/
      https://www.w3.org/TR/did-core/
  - '30': 寻找可编程的,去中心化的信息发布方式
    readme: |
      - https://diaspora.github.io/api-documentation/
      - https://github.com/diaspora/api-documentation
  - '30': 了解免安装web im的机制
    readme: |
      gitter.im
      https://libera.chat/
      https://web.libera.chat/gamja/
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
  - '30': 学习AMD规范，如果适用就开发范例
  - '60': 学习 nodejs test框架
    readme: |
      - https://github.com/Vanessa219/vditor
          - https://nodejs.cn/api/test.html
      - https://github.com/markedjs/marked
      - https://bun.sh/
      bind:
        - '90': 实际编写自己的测试范例
  - '60': 向外提供js文件的范例，为代码层级互通做准备
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
xuemen: []

devmakedayplan() > dayplan file name:../../blog/release/time/d.20240608.md
# 2024.06.08.
计划

根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版1(1c)。

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | --- | --- |
| 07:14~07:28 | 15 | 休整 |  |
| 07:29~08:28 | 60 | 备餐、运动 |  |
| 08:29~09:13 | 45 | 早餐 |  |
| 09:14~09:58 | 45 | 会议、自习 |  |
| 09:59~10:59 | 60 | 休整 |  |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | js:https://www.npmjs.com/package/commander  [在线](http://simp.ly/p/8t3vlk) [离线](../../draft/2024/06/20240608140000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[https://www.npmjs.com/package/commander]任务&body=日期: 20240608%0D%0A序号: 6%0D%0A手稿:../../draft/2024/06/20240608140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 14:30~14:59 | 30 | 静默工作 | raw:选择有价值的数据显示到entry页面  [在线](http://simp.ly/p/5k9gJy) [离线](../../draft/2024/06/20240608143000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[选择有价值的数据显示到entry页面]任务&body=日期: 20240608%0D%0A序号: 7%0D%0A手稿:../../draft/2024/06/20240608143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 15:00~15:59 | 60 | 休整 | raw:选择有价值的数据显示到entry页面  [在线](http://simp.ly/p/5k9gJy) [离线](../../draft/2024/06/20240608143000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[选择有价值的数据显示到entry页面]任务&body=日期: 20240608%0D%0A序号: 7%0D%0A手稿:../../draft/2024/06/20240608143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 16:00~16:59 | 60 | 静默工作 | xuemen:term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型  [在线](http://simp.ly/p/4QDThK) [离线](../../draft/2024/06/20240608160000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型]任务&body=日期: 20240608%0D%0A序号: 9%0D%0A手稿:../../draft/2024/06/20240608160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |
| 17:00~18:59 | 120 | 晚餐 | xuemen:term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型  [在线](http://simp.ly/p/4QDThK) [离线](../../draft/2024/06/20240608160000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型]任务&body=日期: 20240608%0D%0A序号: 9%0D%0A手稿:../../draft/2024/06/20240608160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想 法]</a> |
| 19:00~19:59 | 60 | 讨论、整理提交 | xuemen:term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型  [在线](http://simp.ly/p/4QDThK) [离线](../../draft/2024/06/20240608160000.md) <a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型] 任务&body=日期: 20240608%0D%0A序号: 9%0D%0A手稿:../../draft/2024/06/20240608160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[想法]</a> |

模版一采用静默工作方式。
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐或会议自习时间。

---

- js: [https://www.npmjs.com/package/commander](../../../draft/2024/06/20240608140000.md)
- raw: [选择有价值的数据显示到entry页面](../../../draft/2024/06/20240608143000.md)
- xuemen: [term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型](../../../draft/2024/06/20240608160000.md)
```

- 登记 135分钟，取消下一个任务。增加todo项：
- '90': finish.devmaketomorowinfo(tomorrow);

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.08.[重新设计S2状态下的学门基本管理制度]任务&body=日期: 20240608%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240608160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240608160000"></a>
## 16:00~16:59
重新设计S2状态下的学门基本管理制度

- 上一个任务顺延，本任务取消返回waitinglist。
