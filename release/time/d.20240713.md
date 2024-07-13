# 2024.07.13.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[用linkml编写一套标准模型](#20240713093000)  
- 14:00	[列存储（Wide Column Store/Column-Family）数据库](#20240713140000)  
- 14:30	[日期格式化](#20240713143000)  
- 16:00	[整理日小结功能。](#20240713160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 2497 | 15203 | 3555 |
| PSMD | 7000 | 402 | 6598 | 630 |
| ego | 4000 | 862 | 3138 | 510 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 60 |
| learn | 1500 | 722 | 778 | 1110 |
| js | 1200 | 301 | 899 | 600 |

---

waiting list:


- 30分钟时间片：
  - learn的第7号事项：Query fundamentals https://console.neo4j.io
  - js的第9号事项：mermaid
  - js的第10号事项：text->id,protobuf-javascript
  - js的第11号事项：用day.js改写util.js

- 60分钟时间片：
  - js的第1号事项：syncthing sample
  - learn的第1号事项：hypercore sample
  - raw的第1号事项：自动从网页提取营养成分表
  - ego的第3号事项：设计subtask与todo的关系，保持工作的持续连贯。

- 90分钟时间片：
  - ego的第1号事项：使用新版day、season、waitinglist的ego.js
  - PSMD的第2号事项：term metadata的序号，分为显示序号和唯一id两种。
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - js的第2号事项：helia and orbitdb sample

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.13.[用linkml编写一套标准模型]任务&body=日期: 20240713%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240713093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240713093000"></a>
##  09:30~10:59
PSMD: [用linkml编写一套标准模型]

1. 显性地明确建模者和使用者的分工；
1. 自动检验输入数据。

- ego模型如果其他人也使用，两个功能都需要。
- D:\huangyg\git\ego\data\raw.food.yaml
```
D:\huangyg\git\ego\data>gen-json-schema raw.food.yaml
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
{
    "$defs": {
        "Item": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "amount": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "time": {
                    "type": "string"
                },
                "unit": {
                    "type": "string"
                }
            },
            "title": "Item",
            "type": "object"
        },
        "Raw.food": {
            "additionalProperties": false,
            "description": "",
            "properties": {
                "comment": {
                    "type": "string"
                },
                "date": {
                    "type": "string"
                },
                "food": {
                    "items": {
                        "$ref": "#/$defs/Item"
                    },
                    "type": "array"
                },
                "log": {
                    "type": "string"
                },
                "med": {
                    "items": {
                        "$ref": "#/$defs/Item"
                    },
                    "type": "array"
                },
                "water": {
                    "items": {
                        "$ref": "#/$defs/Item"
                    },
                    "type": "array"
                }
            },
            "title": "Raw.food",
            "type": "object"
        }
    },
    "$id": "https://raw.githubusercontent.com/hyg/ego/vat/data/raw.food",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "additionalProperties": true,
    "metamodel_version": "1.7.0",
    "title": "raw.food",
    "type": "object",
    "version": null
}
```
- 在json scheme实际使用，需要删去 "$schema"、"metamodel_version"、"version"字段。使用$defs确实更简洁。
- 但是linkml中验证数据文件时报错：
```
D:\huangyg\git\ego\data>linkml-validate -s raw.food.yaml ..\..\raw\food\d.20240713.yaml
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
UnicodeDecodeError: 'gbk' codec can't decode byte 0x90 in position 143: illegal multibyte sequence
```
- 转到json schema：
```
{
    "type": "object",
    "properties": {
        "date": {
            "type": "integer"
        },
        "food": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "time": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "amount": {
                        "type": "number"
                    },
                    "unit": {
                        "type": "string"
                    }
                }
            }
        },
        "water": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "time": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "amount": {
                        "type": "number"
                    },
                    "unit": {
                        "type": "string"
                    }
                }
            }
        },
        "med": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "time": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "amount": {
                        "type": "number"
                    },
                    "unit": {
                        "type": "string"
                    }
                }
            }
        },
        "log": {
            "type": "string"
        },
        "comment": {
            "type": "string"
        }
    },
    "required": [
        "date"
    ],
    "additionalProperties": false
}
```

```
D:\huangyg\git\js.sample\schema>node raw
schema: {
  type: 'object',
  properties: {
    date: { type: 'integer' },
    food: { type: 'array', items: [Object] },
    water: { type: 'array', items: [Object] },
    med: { type: 'array', items: [Object] },
    log: { type: 'string' },
    comment: { type: 'string' }
  },
  required: [ 'date' ],
  additionalProperties: false
}
data: {
  date: 20240713,
  food: [
    { time: 20240713061800, name: '葡萄', amount: 100.5, unit: 'g' },
    { time: 20240713062200, name: '肉包子2407b', amount: 1, unit: '个' },
    { time: 20240713062200, name: '南瓜', amount: 75.5, unit: 'g' },
    { time: 20240713062200, name: '秋葵', amount: 116.5, unit: 'g' },
    { time: 20240713063800, name: '桑葚干', amount: 10, unit: 'g' },
    { time: 20240713063800, name: '亚麻籽', amount: 5, unit: 'g' },
    { time: 20240713063800, name: '麦胚芽', amount: 10, unit: 'g' },
    { time: 20240713064800, name: '奶粉', amount: 20, unit: 'g' },
    { time: 20240713064800, name: '瑞幸冷萃咖啡液', amount: 0.5, unit: '份' },
    { time: 20240713155200, name: '番茄酱', amount: 30, unit: 'g' },
    { time: 20240713155200, name: '域上田园有机沙棘原浆', amount: 15, unit: 'g' },
    { time: 20240713155200, name: '菊粉', amount: 10, unit: 'g' },
    { time: 20240713155300, name: '黄桃', amount: 125, unit: 'g' },
    { time: 20240713123000, name: '一品寒香大米', amount: 40, unit: 'g' },
    { time: 20240713123000, name: '紫米', amount: 10, unit: 'g' },
    { time: 20240713123000, name: '青麦仁', amount: 10, unit: 'g' },
    { time: 20240713123000, name: '六旺果', amount: 20.5, unit: 'g' },
    { time: 20240713123000, name: '花生', amount: 5, unit: 'g' },
    { time: 20240713123000, name: '胡萝卜', amount: 75, unit: 'g' },
    { time: 20240713123000, name: '苋菜', amount: 150, unit: 'g' },
    { time: 20240713123000, name: '狭鳕鱼肉', amount: 33, unit: 'g' },
    { time: 20240713123000, name: '香香唯北豆腐', amount: 78.5, unit: 'g' },
    { time: 20240713123000, name: '千海蓝有机头水紫菜', amount: 3, unit: 'g' },
    { time: 20240713123000, name: '中盐低钠盐', amount: 1.5, unit: 'g' },
    { time: 20240713123000, name: '油', amount: 0.5, unit: 'g' },
    { time: 20240713130000, name: '奶粉', amount: 20, unit: 'g' },
    { time: 20240713130000, name: '瑞幸冷萃咖啡液', amount: 0.5, unit: '份' },
    { time: 20240713170000, name: '李子', amount: 125, unit: 'g' },
    { time: 20240713160000, name: '绿豆', amount: 10, unit: 'g' },
    { time: 20240713160000, name: '海带', amount: 10, unit: 'g' },
    { time: 20240713160000, name: '青麦仁', amount: 50, unit: 'g' },
    { time: 20240713160000, name: '鸡蛋', amount: 35, unit: 'g' },
    { time: 20240713160000, name: '苦瓜', amount: 150, unit: 'g' },
    { time: 20240713160000, name: '中盐低钠盐', amount: 1, unit: 'g' },
    { time: 20240713160000, name: '鲜味王', amount: 0.5, unit: 'g' },
    { time: 20240713160000, name: '油', amount: 0.5, unit: 'g' },
    { time: 20240713162800, name: '奶粉', amount: 20, unit: 'g' },
    { time: 20240713162800, name: '可可粉', amount: 4, unit: 'g' }
  ],
  water: [
    { time: 20240713052000, name: '开水', amount: 150, unit: 'ml' },
    { time: 20240713055800, name: '开水', amount: 250, unit: 'ml' },
    { time: 20240713064800, name: '咖啡', amount: 80, unit: 'ml' },
    { time: 20240713073000, name: '开水', amount: 250, unit: 'ml' },
    { time: 20240713080200, name: '开水', amount: 250, unit: 'ml' },
    { time: 20240713092100, name: '开水', amount: 250, unit: 'ml' },
    { time: 20240713102400, name: '开水', amount: 250, unit: 'ml' },
    { time: 20240713162800, name: '咖啡', amount: 80, unit: 'ml' },
    { time: 20240713180500, name: '开水', amount: 250, unit: 'ml' },
    { time: 20240713191400, name: '开水', amount: 100, unit: 'ml' }
  ],
  med: [
    { time: 20240713064800, name: '楚牛牛磺酸', amount: 0.5, unit: 'g' },
    { time: 20240713073000, name: 'selenium', amount: 200, unit: 'μg' },
    {
      time: 20240713073000,
      name: 'mature multi',
      amount: 1,
      unit: '片'
    }
  ],
  log: '',
  comment: ''
}
validate pass
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.13.[列存储（Wide Column Store/Column-Family）数据库]任务&body=日期: 20240713%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240713140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240713140000"></a>
## 14:00~14:29
learn: [列存储（Wide Column Store/Column-Family）数据库]

- https://cassandra.apache.org/_/index.html
    - https://developer.aliyun.com/article/1253450
    - https://www.npmjs.com/package/cassandra-driver
    - 需要人工安装或者部署，不适合消费者。
    - 能同步。NAT后没有明确，应该需要另外设法穿透。
    - Gossip 协议可以进一步学习。
- https://hbase.apache.org/
    - https://github.com/alibaba/node-hbase-client
    - https://developer.aliyun.com/article/841604
- Gossip protocol
    - https://developer.aliyun.com/article/1436240
    - https://www.npmjs.com/package/gossip
    - https://www.npmjs.com/package/@chainsafe/libp2p-gossipsub
- ZeroMQ 
    - https://zeromq.org/
    - https://zeromq.org/languages/nodejs/
- 节点发现方面不强，需要人工配置对方地址。不适合PSMD和ego场景。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.13.[日期格式化]任务&body=日期: 20240713%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240713143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240713143000"></a>
## 14:30~14:59
js: [日期格式化]

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    - 主要解决语言和时区。
- https://momentjs.cn/
    - 自定义输出格式ok
    - 相对时间、时间增减、多语言ok
- https://day.js.org/
    - 符合需要，文件更小，更灵活。
- 增加todo项：
    - '30': 用day.js改写util.js

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.13.[整理日小结功能。]任务&body=日期: 20240713%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240713160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240713160000"></a>
## 16:00~16:59
ego: [整理日小结功能。]

- 日小结中，还需要增加：
    - season stat ： 由season.js提供接口
    - waitinglist brief ： 由waitinglist.js提供接口
    - draft detail ： 由day.js提供接口
- makestattable: function (seasonobj)
```
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 2212 | 15488 | 3525 |
| PSMD | 7000 | 257 | 6743 | 630 |
| ego | 4000 | 787 | 3213 | 480 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 60 |
| learn | 1500 | 683 | 817 | 1110 |
| js | 1200 | 275 | 925 | 600 |
```

- makebrieflist: function(waitinglist)
```
waiting list:


- 30分钟时间片：
  - learn的第7号事项：Query fundamentals https://console.neo4j.io
  - js的第9号事项：mermaid
  - js的第10号事项：text->id,protobuf-javascript
  - js的第11号事项：用day.js改写util.js

- 60分钟时间片：
  - ego的第1号事项：使用新版day、season、waitinglist的ego.js
  - js的第1号事项：syncthing sample
  - learn的第1号事项：hypercore sample
  - raw的第1号事项：自动从网页提取营养成分表

- 90分钟时间片：
  - PSMD的第2号事项：term metadata的序号，分为显示序号和唯一id两种。
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - js的第2号事项：helia and orbitdb sample
  - learn的第2号事项：pear api sample

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
```

- makeoutputlist: function (dayobj),测试通过。
- makedaylog: function (dayobj) ，测试通过。
- 增加todo项：
    - '60': 整理maketomorowinfo()到新版day.js
