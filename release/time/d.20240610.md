# 2024.06.10.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版2。

<a id="index"></a>
- 07:45	[entity,ego draft](#20240610074500)  
- 14:00	[linkml, yaml-ld](#20240610140000)  
- 16:00	[基于commander升级参数](#20240610160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 16475 | 16198 | 277 | 2685 |
| PSMD | 7250 | 7186 | 64 | 495 |
| learn | 1250 | 1302 | -52 | 1080 |
| ego | 4700 | 4609 | 91 | 555 |
| js | 1375 | 1248 | 127 | 300 |
| xuemen | 1300 | 1253 | 47 | 255 |
| raw | 600 | 570 | 30 | 0 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：学习AMD规范，如果适用就开发范例
  - ego的第2号事项：用commander的.command()或.addCommand()改写入口
  - js的第4号事项：日期格式化
  - learn的第4号事项：寻找可编程的,去中心化的信息发布方式

- 60分钟时间片：
  - learn的第1号事项：linkml, yaml-ld
  - js的第2号事项：学习 nodejs test框架
  - xuemen的第2号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - js的第3号事项：向外提供js文件的范例，为代码层级互通做准备

- 90分钟时间片：
  - PSMD的第1号事项：格里申法案
  - learn的第2号事项：拟制说、目的财产说、实在说
  - ego的第3号事项：根据ego对外信息接口编写页面代码
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：entity,ego draft
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第14号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.10.[entity,ego draft]任务&body=日期: 20240610%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240610074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240610074500"></a>
## 7:45~10:59
ego  [entity,ego draft]

- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.10.[linkml, yaml-ld]任务&body=日期: 20240610%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240610140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240610140000"></a>
## 14:00~15:29
learn  [linkml, yaml-ld]

- 了解linkml.io首页图中的语法和工具：https://linkml.io/uploads/2021/03/30/screen-shot-2021-03-29-at-7-05-14-pm.png
- https://linkml.io/linkml/intro/tutorial07.html
    - slot是自定义的字段，在classes中使用，在meta文件顶层定义这些slot。
- https://linkml.io/linkml/schemas/models.html
- https://github.com/linkml/linkml/blob/main/examples/PersonSchema/personinfo.yaml
- 如果只使用而没有定义slot：
```
D:\huangyg\git\ego\data>gen-json-schema entity.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
ValueError: No such slot id as an attribute of Ego ancestors or as a slot definition in the schema
```
- 在yaml文件顶层定义之后（直接列出不做任何定义也算）
```
D:\huangyg\git\ego\data>gen-json-schema entity.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
{
    "$defs": {
        "Ego": {
            "additionalProperties": false,
            "description": "entity alloc resources according to cognize level.",
            "properties": {
                "id": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "offer": {
                    "type": "string"
                },
                "protocol": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "name"
            ],
            "title": "Ego",
            "type": "object"
        },
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
D:\huangyg\git\ego\data>gen-yuml entity.yaml
https://yuml.me/diagram/nofunky;dir:TB/class/[Entity|id:string %3F;name:string %3F;aliases:string %3F;event:string %3F;todo:string %3F;cognize:string %3F],[Ego|id:string;name:string;protocol:string %3F;offer:string %3F]
```
- 增加了继承关系: is_a: Entity
```
D:\huangyg\git\ego\data>gen-json-schema entity.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
{
    "$defs": {
        "Ego": {
            "additionalProperties": false,
            "description": "entity alloc resources according to cognize level.",
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
                "offer": {
                    "type": "string"
                },
                "protocol": {
                    "type": "string"
                },
                "todo": {
                    "type": "string"
                }
            },
            "title": "Ego",
            "type": "object"
        },
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
- slot这个概念已经掌握了。下面可以直接实践，有时间继续从第二节课开始学习。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.10.[基于commander升级参数]任务&body=日期: 20240610%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240610160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240610160000"></a>
## 16:00~16:59
ego  [基于commander升级参数]

- D:\huangyg\git\ego\src\ego1.js
```
D:\huangyg\git\ego\src>node ego1 help day
Usage: ego day [options]

以天为单位的自我管理功能

Options:
  -i, --init <int>  初始化：绑定时间模版，创建日计划、次日规划、手稿及元数据文件。
  -o, --over        工作结束，生成日小结、更新次日规划。
  -p, --plan        显示次日规划，不更新任何文件。
  -h, --help        display help for command

D:\huangyg\git\ego\src>node ego1 day -o
{ over: true }
over:

D:\huangyg\git\ego\src>node ego1 day -p
{ plan: true }
plan:

D:\huangyg\git\ego\src>node ego1 day -i 1
{ init: '1' }
init:

D:\huangyg\git\ego\src>node ego1 day -i 2
{ init: '2' }
init:
```
- command需要配合action，追加todo项彻底弄懂：
    - '30': 用commander的.command()或.addCommand()改写入口
