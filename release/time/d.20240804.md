# 2024.08.04.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1c)。

<a id="index"></a>
- 14:00~14:19	learn: [linkml, yaml-ld, coding time.](#20240804140000)
- 14:30~15:22	learn: [Decentralized Identifiers](#20240804143000)
- 16:00~16:59	learn: [IPLD DSL sample](#20240804160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6650 | 11050 | 3600 |
| PSMD | 7000 | 1492 | 5508 | 585 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 165 | 1335 | 480 |
| raw | 500 | 450 | 50 | 60 |
| learn | 1500 | 1628 | -128 | 1050 |
| js | 1200 | 1353 | -153 | 660 |

---
waiting list:


- 30分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - xuemen的第1号事项：报税。
  - raw的第1号事项：新版营养成分详情，允许多种营养成分。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 60分钟时间片：
  - learn的第1号事项：Decentralized Identifiers
  - js的第1号事项：learn Orbitdb
  - ego的第2号事项：eventemitter sample
  - learn的第2号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/

- 90分钟时间片：
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第3号事项：machines model
  - learn的第3号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第5号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.04.[linkml, yaml-ld, coding time.]任务&body=日期: 2024.08.04.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/08/20240804140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240804140000"></a>
## 14:00~14:29
learn: [linkml, yaml-ld, coding time.]

- linkml没有支持yaml-ld的内容。
- yaml-ld规范没有官方工具和代码实现：https://json-ld.github.io/yaml-ld/spec/
- 应用不多，不再投入时间。登记20分钟，提前开始后面任务。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.04.[Decentralized Identifiers]任务&body=日期: 2024.08.04.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240804143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240804143000"></a>
## 14:30~14:59
learn: [Decentralized Identifiers]

- readme: |
      https://did.js.org/
      https://www.w3.org/TR/did-use-cases/
      https://www.w3.org/TR/did-core/
- https://did-ipid.github.io/ipid-did-method/
- npm install dids
- npm i key-did-provider-ed25519
- npm i key-did-resolver
```
D:\huangyg\git\js.sample\did>node did
seed: Uint8Array(32) [
  196,   0, 176,  74,  11,  52,  28,  94,
  157,  93,  57, 231,   5,  41, 183,  60,
   31, 174, 194, 130, 131, 108,  62, 128,
  180, 217,  47,  16, 101, 126, 110, 232
]
provider: Ed25519Provider { _handle: [AsyncFunction (anonymous)] }
did: DID {
  _client: RPCClient {},
  _id: 'did:key:z6MkvVAkmpdqb53wajXVGdcQjq6ZnPeJMdr24qEPa92AZh7r',
  _resolver: Resolver {
    registry: { key: [AsyncFunction: key] },
    cache: [Function: noCache]
  },
  _capability: undefined,
  _parentId: undefined
}
aliceDID: did:key:z6MkvVAkmpdqb53wajXVGdcQjq6ZnPeJMdr24qEPa92AZh7r
jws: {
  payload: 'eyJoZWxsbyI6IndvcmxkIn0',
  signatures: [
    {
      protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa3ZWQWttcGRxYjUzd2FqWFZHZGNRanE2Wm5QZUpNZHIyNHFFUGE5MkFaaDdyI3o2TWt2VkFrbXBkcWI1M3dhalhWR2RjUWpxNlpuUGVKTWRyMjRxRVBhOTJBWmg3ciJ9',
      signature: 'ZSv8N1PsN9Bunp4760GhLAb6jbkxgLEp1zWuuW6XJG3a0ln2f682EGIyr06zo_abLYtHcLaJzxVzApoXws4JAg'
    }
  ]
}
```
- 继续追加时间。
    - '60': Decentralized Identifiers
      readme: |
        - https://did.js.org/
        - https://did-ipid.github.io/ipid-did-method/

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.04.[IPLD DSL sample]任务&body=日期: 2024.08.04.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/08/20240804160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240804160000"></a>
## 16:00~16:59
learn: [IPLD DSL sample]

- readme: |
      - read 2024.08.01. 16:00 draft
      - read .ipldsch files https://github.com/ipld/js-ipld-schema/tree/master/test/fixtures
      - make schema sample use raw\food 
- https://github.com/ipld/js-ipld-schema
    - ipld-schema json-to-schema [files...]: Accepts .json files, if none are passed will read from stdin, prints the canonical IPLD Schema form of the schema represented by the JSON
    - .json files的规格还不太了解，猜测了几种都通不过。
- https://github.com/ipld/js-ipld-schema/tree/master/test/fixtures 下的.json文件，ipld-schema命令行应该也通不过，只能读入代码中使用。
```
D:\huangyg\git\js.sample\ipld>ipld-schema validate food.ipldsch
Validated food.ipldsch ...

D:\huangyg\git\js.sample\ipld>ipld-schema to-json food.ipldsch
{
  "types": {
    "foodlog": {
      "struct": {
        "fields": {
          "date": {
            "type": "String"
          },
          "food": {
            "type": {
              "list": {
                "valueType": "logitem"
              }
            }
          },
          "water": {
            "type": {
              "list": {
                "valueType": "logitem"
              }
            }
          },
          "med": {
            "type": {
              "list": {
                "valueType": "logitem"
              }
            }
          },
          "log": {
            "type": "String"
          },
          "comment": {
            "type": "String"
          }
        },
        "representation": {
          "tuple": {}
        }
      }
    },
    "logitem": {
      "struct": {
        "fields": {
          "name": {
            "type": "String"
          },
          "amount": {
            "type": "Float"
          },
          "unit": {
            "type": "String"
          },
          "nrv": {
            "type": "Float"
          }
        },
        "representation": {
          "tuple": {}
        }
      }
    }
  }
}

D:\huangyg\git\js.sample\ipld>ipld-schema to-schema food.ipldsch
type foodlog struct {
  date String
  food [logitem]
  water [logitem]
  med [logitem]
  log String
  comment String
} representation tuple

type logitem struct {
  name String
  amount Float
  unit String
  nrv Float
} representation tuple
```
- 用代码生成紧凑数据（representation tuple+tuple）：D:\huangyg\git\js.sample\ipld\food.js
```
D:\huangyg\git\js.sample\ipld>node food
typedData:
{
  date: 20240803,
  food: [Array],
  water: [Array],
  med: [Array],
  log: '',
  comment: ''
}
newData:
[ 20240803, [Array], [Array], [Array], '', '' ]
newData in json: [20240803,[[20240803075600,"黄金贡柚",128,"g"],[20240803075700,"馒头2407",1,"个"],[20240803075700,"熟五花肉2407",21,"g"],[20240803075700,"十三村原味腐乳",11,"g"],[20240803075700,"南瓜",49,"g"],[20240803075700,"西兰花",110,"g"],[20240803081200,"桑葚干",10,"g"],[20240803081200,"亚麻籽",5,"g"],[20240803081200,"麦胚芽",10,"g"],[20240803083000,"奶粉",20,"g"],[20240803083000,"瑞幸冷萃咖啡液",1,"份"],[20240803120700,"番茄酱",27,"g"],[20240803120700,"域上田园有机沙棘原浆",17,"g"],[20240803120700,"缘聚菊粉",10,"g"],[20240803120800,"杏梅",279.5,"g"],[20240803121500,"一品寒香大米",40,"g"],[20240803121500,"紫米",10,"g"],[20240803121500,"青麦仁",10,"g"],[20240803121500,"六旺果",23.5,"g"],[20240803121500,"卤牛肉2407a",16.5,"g"],[20240803121500,"香香唯北豆腐",47.5,"g"],[20240803121500,"胡萝卜",107.5,"g"],[20240803121500,"芹菜",256.5,"g"],[20240803121500,"中盐低钠盐",1,"g"],[20240803125500,"奶粉",20,"g"],[20240803173900,"桔柚",189.5,"g"],[20240803174300,"海带",10,"g"],[20240803174300,"绿豆",10,"g"],[20240803174300,"青麦仁",35,"g"],[20240803174300,"鸡蛋",36.5,"g"],[20240803174300,"苦瓜",75.5,"g"],[20240803174300,"中盐低钠盐",1.5,"g"],[20240803174300,"鲜味王",0.5,"g"],[20240803174300,"油",0.5,"g"],[20240803181000,"伊利脱脂奶粉",20,"g"]],[[20240803065300,"开水",125,"ml"],[20240803074000,"竹壳茶",250,"ml"],[20240803072500,"咖啡",80.5,"ml"],[20240803083000,"竹壳茶",250,"ml"],[20240803083600,"竹壳茶",200,"ml"],[20240803100300,"开水",250,"ml"],[20240803110600," 开水",250,"ml"],[20240803125500,"咖啡",80,"ml"],[20240803140000,"开水",250,"ml"],[20240803160600,"开水",250,"ml"],[20240803174300,"粥水",350,"ml"],[20240803181000,"可可奶",80,"ml"],[20240803184800,"开水",50,"ml"]],[[20240803072500,"楚牛牛磺酸",0.5,"g"],[20240803083000,"维生素D3",125,"μg"],[20240803083000,"selenium",200,"μg"],[20240803083000,"mature multi",1,"片"]],"",""]
```
- 用代码生成紧凑数据（representation map+tuple）：
```
D:\huangyg\git\js.sample\ipld>node food
typedData:
{
  date: 20240803,
  food: [Array],
  water: [Array],
  med: [Array],
  log: '',
  comment: ''
}
newData:
{
  date: 20240803,
  food: [Array],
  water: [Array],
  med: [Array],
  log: '',
  comment: ''
}
newData in json: {"date":20240803,"food":[[20240803075600,"黄金贡柚",128,"g"],[20240803075700,"馒头2407",1,"个"],[20240803075700,"熟五花肉2407",21,"g"],[20240803075700,"十三村原味腐乳",11,"g"],[20240803075700,"南瓜",49,"g"],[20240803075700,"西兰花",110,"g"],[20240803081200,"桑葚干",10,"g"],[20240803081200,"亚麻籽",5,"g"],[20240803081200,"麦胚芽",10,"g"],[20240803083000,"奶粉",20,"g"],[20240803083000,"瑞幸冷萃咖啡液",1,"份"],[20240803120700,"番茄酱",27,"g"],[20240803120700,"域上田园有机沙棘原浆",17,"g"],[20240803120700,"缘聚菊粉",10,"g"],[20240803120800,"杏梅",279.5,"g"],[20240803121500,"一品寒香大米",40,"g"],[20240803121500,"紫米",10,"g"],[20240803121500,"青麦仁",10,"g"],[20240803121500,"六旺果",23.5,"g"],[20240803121500,"卤牛肉2407a",16.5,"g"],[20240803121500,"香香唯北豆腐",47.5,"g"],[20240803121500,"胡萝卜",107.5,"g"],[20240803121500,"芹菜",256.5,"g"],[20240803121500,"中盐 低钠盐",1,"g"],[20240803125500,"奶粉",20,"g"],[20240803173900,"桔柚",189.5,"g"],[20240803174300,"海带",10,"g"],[20240803174300,"绿豆",10,"g"],[20240803174300,"青麦仁",35,"g"],[20240803174300,"鸡蛋",36.5,"g"],[20240803174300,"苦瓜",75.5,"g"],[20240803174300,"中盐低钠盐",1.5,"g"],[20240803174300,"鲜味王",0.5,"g"],[20240803174300,"油",0.5,"g"],[20240803181000,"伊利脱脂奶粉",20,"g"]],"water":[[20240803065300,"开水",125,"ml"],[20240803074000,"竹壳茶",250,"ml"],[20240803072500,"咖啡",80.5,"ml"],[20240803083000,"竹壳茶",250,"ml"],[20240803083600,"竹壳茶",200,"ml"],[20240803100300,"开水",250,"ml"],[20240803110600,"开水",250,"ml"],[20240803125500,"咖啡",80,"ml"],[20240803140000,"开水",250,"ml"],[20240803160600,"开水",250,"ml"],[20240803174300,"粥水",350,"ml"],[20240803181000,"可可奶",80,"ml"],[20240803184800,"开水",50,"ml"]],"med":[[20240803072500,"楚牛牛磺酸",0.5,"g"],[20240803083000,"维生素D3",125,"μg"],[20240803083000,"selenium",200,"μg"],[20240803083000,"mature multi",1,"片"]],"log":"","comment":""}
```
- 用代码生成紧凑数据（representation map+map）：
```
D:\huangyg\git\js.sample\ipld>node food
typedData:
{
  date: 20240803,
  food: [Array],
  water: [Array],
  med: [Array],
  log: '',
  comment: ''
}
newData:
{
  date: 20240803,
  food: [Array],
  water: [Array],
  med: [Array],
  log: '',
  comment: ''
}
newData in json: {"date":20240803,"food":[{"time":20240803075600,"name":"黄金贡柚","amount":128,"unit":"g"},{"time":20240803075700,"name":"馒头2407","amount":1,"unit":"个"},{"time":20240803075700,"name":"熟五花肉2407","amount":21,"unit":"g"},{"time":20240803075700,"name":"十三村原味腐乳","amount":11,"unit":"g"},{"time":20240803075700,"name":"南瓜","amount":49,"unit":"g"},{"time":20240803075700,"name":"西兰花","amount":110,"unit":"g"},{"time":20240803081200,"name":"桑葚干","amount":10,"unit":"g"},{"time":20240803081200,"name":"亚麻籽","amount":5,"unit":"g"},{"time":20240803081200,"name":"麦胚芽","amount":10,"unit":"g"},{"time":20240803083000,"name":"奶粉","amount":20,"unit":"g"},{"time":20240803083000,"name":"瑞幸冷萃咖啡液","amount":1,"unit":"份"},{"time":20240803120700,"name":"番茄酱","amount":27,"unit":"g"},{"time":20240803120700,"name":"域上田园有机沙棘原浆","amount":17,"unit":"g"},{"time":20240803120700,"name":"缘聚菊粉","amount":10,"unit":"g"},{"time":20240803120800,"name":"杏梅","amount":279.5,"unit":"g"},{"time":20240803121500,"name":"一品寒香大米","amount":40,"unit":"g"},{"time":20240803121500,"name":"紫米","amount":10,"unit":"g"},{"time":20240803121500,"name":"青麦仁","amount":10,"unit":"g"},{"time":20240803121500,"name":"六旺果","amount":23.5,"unit":"g"},{"time":20240803121500,"name":"卤牛肉2407a","amount":16.5,"unit":"g"},{"time":20240803121500,"name":"香香唯北豆腐","amount":47.5,"unit":"g"},{"time":20240803121500,"name":"胡萝卜","amount":107.5,"unit":"g"},{"time":20240803121500,"name":"芹菜","amount":256.5,"unit":"g"},{"time":20240803121500,"name":"中盐低钠盐","amount":1,"unit":"g"},{"time":20240803125500,"name":"奶粉","amount":20,"unit":"g"},{"time":20240803173900,"name":"桔柚","amount":189.5,"unit":"g"},{"time":20240803174300,"name":"海带","amount":10,"unit":"g"},{"time":20240803174300,"name":"绿豆","amount":10,"unit":"g"},{"time":20240803174300,"name":"青麦仁","amount":35,"unit":"g"},{"time":20240803174300,"name":"鸡蛋","amount":36.5,"unit":"g"},{"time":20240803174300,"name":"苦瓜","amount":75.5,"unit":"g"},{"time":20240803174300,"name":"中盐低钠盐","amount":1.5,"unit":"g"},{"time":20240803174300,"name":"鲜味王","amount":0.5,"unit":"g"},{"time":20240803174300,"name":"油","amount":0.5,"unit":"g"},{"time":20240803181000,"name":"伊利脱脂奶粉","amount":20,"unit":"g"}],"water":[{"time":20240803065300,"name":"开水","amount":125,"unit":"ml"},{"time":20240803074000,"name":"竹壳茶","amount":250,"unit":"ml"},{"time":20240803072500,"name":"咖啡","amount":80.5,"unit":"ml"},{"time":20240803083000,"name":"竹壳茶","amount":250,"unit":"ml"},{"time":20240803083600,"name":"竹壳茶","amount":200,"unit":"ml"},{"time":20240803100300,"name":"开水","amount":250,"unit":"ml"},{"time":20240803110600,"name":"开水","amount":250,"unit":"ml"},{"time":20240803125500,"name":"咖啡","amount":80,"unit":"ml"},{"time":20240803140000,"name":"开水","amount":250,"unit":"ml"},{"time":20240803160600,"name":"开水","amount":250,"unit":"ml"},{"time":20240803174300,"name":"粥水","amount":350,"unit":"ml"},{"time":20240803181000,"name":"可可奶","amount":80,"unit":"ml"},{"time":20240803184800,"name":"开水","amount":50,"unit":"ml"}],"med":[{"time":20240803072500,"name":"楚牛牛磺酸","amount":0.5,"unit":"g"},{"time":20240803083000,"name":"维生素D3","amount":125,"unit":"μg"},{"time":20240803083000,"name":"selenium","amount":200,"unit":"μg"},{"time":20240803083000,"name":"mature multi","amount":1,"unit":"片"}],"log":"","comment":""}
```
- 可以继续深入学习codec、ADL，todo项已经在waitinglist中。
