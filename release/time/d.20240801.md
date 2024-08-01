# 2024.08.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~09:49	PSMD: [machines model](#20240801093000)
- 14:00~14:39	raw: [设计新版raw.js架构。](#20240801140000)
- 14:30~14:59	raw: [新版raw.js的子命令-营养成分详情](#20240801143000)
- 16:00~16:59	learn: [schema in ipld,coding time.](#20240801160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6427 | 11273 | 3600 |
| PSMD | 7000 | 1472 | 5528 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 165 | 1335 | 450 |
| raw | 500 | 390 | 110 | 120 |
| learn | 1500 | 1485 | 15 | 1110 |
| js | 1200 | 1353 | -153 | 600 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：新版raw.js的子命令-营养成分详情
  - raw的第2号事项：新版raw.js的子命令-营养成分排序
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
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.01.[machines model]任务&body=日期: 2024.08.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/08/20240801093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240801093000"></a>
##  09:30~10:59
PSMD: [machines model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制
- machine和event listener的对比：
    - machine适合处理event+相关背景情况，再决定行为。
    - event listener适合event直接决定行为。
    - 它们根据情况组合使用，不同地方嵌套上的内外关系不同。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.01.[设计新版raw.js架构。]任务&body=日期: 2024.08.01.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240801140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240801140000"></a>
## 14:00~14:29
raw: [设计新版raw.js架构。]

- readme: |
      - 增加子命令和参数。
      - 划分独立模块。
- 时间段可以作为独立的参数，food、health作为子命令。
- raw的目标
    - 提供更多的优质时间片
    - 为上一个目标积累知识
- health
    - 不断细化身体换季的外部条件：室外温度、湿度，室内温度、湿度。
    - 积累更多身心状态的指标，弹性的增加、减少指标。
    - 更准确的判定当天的身心状态，调整最合适的任务种类和时间模版。
- food
    - 食材的消化率
    - 差异化设定不同身心状态下的DRIs

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.01.[新版raw.js的子命令-营养成分详情]任务&body=日期: 2024.08.01.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/08/20240801143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240801143000"></a>
## 14:30~14:59
raw: [新版raw.js的子命令-营养成分详情]

- learn js object factory, constructor first
    - '60': learn factory, constructor, prototype
      readme: |
        - https://juejin.cn/post/6844903653774458888
        - https://segmentfault.com/a/1190000019054466
        - https://www.javascripttutorial.net/javascript-factory-functions/
        -https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.01.[schema in ipld,coding time.]任务&body=日期: 2024.08.01.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/08/20240801160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240801160000"></a>
## 16:00~16:59
learn: [schema in ipld,coding time.]

- readme: |
      - https://www.npmjs.com/package/@ipld/schema
      - https://github.com/ipld/js-ipld-schema
      - read 2024.07.22 14:00 draft
- D:\huangyg\git\js.sample\ipld
- npm i @ipld/schema
- "type": "module" -> D:\huangyg\git\js.sample\ipld\package.json
```
D:\huangyg\git\js.sample\ipld>node from-dsl.js
{
  SimpleStruct: {
    struct: {
      fields: {
        foo: { type: 'Int' },
        bar: { type: 'Bool' },
        baz: { type: 'String' }
      },
      representation: { map: {} }
    }
  },
  MyMap: { map: { keyType: 'String', valueType: 'SimpleStruct' } }
}

D:\huangyg\git\js.sample\ipld>node to-dsl.js
type SimpleStruct struct {
  foo Int
  bar Bool
  baz String
}

type MyMap {String:SimpleStruct}
```
```
D:\huangyg\git\js.sample\ipld>node to-typed
Typed form: {
  name: 'Home',
  width: 460,
  depth: 200,
  plants: [
    { species: 'Murraya', height: 30 },
    { species: 'Murraya', height: 28 },
    { species: 'Murraya', height: 29 },
    { species: 'StarJasmine', height: 10 },
    { species: 'StarJasmine', height: 11 },
    { species: 'Lemon', height: 140 },
    { species: 'Camellia', height: 230 },
    { species: 'Camellia', height: 200 }
  ]
}

D:\huangyg\git\js.sample\ipld>node from-typed
Modified representation data: ["Home",460,250,[[1,32],[1,30],[1,30],[2,10],[2,11],[3,140],[4,230],[4,200],[2,5]]]
```
- npm i @ipld/schema -g
- 用dsl写一个ipldsch文件
```
D:\huangyg\git\js.sample\ipld>ipld-schema validate dsl.ipldsch
Validated dsl.ipldsch ...

D:\huangyg\git\js.sample\ipld>ipld-schema validate dsl.ipldsch
Could not validate dsl.ipldsch: Error parsing schema @ line:5 col:4: Expected "#", "advanced", "representation", "type", [ \t\n\r], or end of input but "," found.

D:\huangyg\git\js.sample\ipld>ipld-schema to-js dsl.ipldsch
/** Auto-generated with @ipld/schema@v5.0.0 at Thu Aug 01 2024 from IPLD Schema:
 *
 * type SimpleStruct struct {
 *     foo Int
 *     bar Bool
 *     baz String
 *   }
 *   type MyMap { String: SimpleStruct }
 */

const Kinds = {
  Null: /** @returns {undefined|null} */ (/** @type {any} */ obj) => obj === null ? obj : undefined,
  Int: /** @returns {undefined|number} */ (/** @type {any} */ obj) => Number.isInteger(obj) ? obj : undefined,
  Float: /** @returns {undefined|number} */ (/** @type {any} */ obj) => typeof obj === 'number' && Number.isFinite(obj) ? obj : undefined,
  String: /** @returns {undefined|string} */ (/** @type {any} */ obj) => typeof obj === 'string' ? obj : undefined,
  Bool: /** @returns {undefined|boolean} */ (/** @type {any} */ obj) => typeof obj === 'boolean' ? obj : undefined,
  Bytes: /** @returns {undefined|Uint8Array} */ (/** @type {any} */ obj) => obj instanceof Uint8Array ? obj : undefined,
  Link: /** @returns {undefined|object} */ (/** @type {any} */ obj) => obj !== null && typeof obj === 'object' && obj.asCID === obj ? obj : undefined,
  List: /** @returns {undefined|Array<any>} */ (/** @type {any} */ obj) => Array.isArray(obj) ? obj : undefined,
  Map: /** @returns {undefined|object} */ (/** @type {any} */ obj) => obj !== null && typeof obj === 'object' && obj.asCID !== obj && !Array.isArray(obj) && !(obj instanceof Uint8Array) ? obj : undefined
}
/** @type {{ [k in string]: (obj:any)=>undefined|any}} */
const Types = {
  Int: Kinds.Int,
  Bool: Kinds.Bool,
  String: Kinds.String,
  SimpleStruct: /** @returns {undefined|any} */ (/** @type {any} */ obj) => {
    if (Kinds.Map(obj) === undefined) {
      return undefined
    }
    const entries = Object.entries(obj)
    /** @type {{[k in string]: any}} */
    let ret = obj
    let requiredCount = 3
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i]
      switch (key) {
        case 'foo':
          {
            requiredCount--
            const v = Types.Int(obj[key])
            if (v === undefined) {
              return undefined
            }
            if (v !== value || ret !== obj) {
              if (ret === obj) {
                /** @type {{[k in string]: any}} */
                ret = {}
                for (let j = 0; j < i; j++) {
                  ret[entries[j][0]] = entries[j][1]
                }
              }
              ret.foo = v
            }
          }
          break
        case 'bar':
          {
            requiredCount--
            const v = Types.Bool(obj[key])
            if (v === undefined) {
              return undefined
            }
            if (v !== value || ret !== obj) {
              if (ret === obj) {
                /** @type {{[k in string]: any}} */
                ret = {}
                for (let j = 0; j < i; j++) {
                  ret[entries[j][0]] = entries[j][1]
                }
              }
              ret.bar = v
            }
          }
          break
        case 'baz':
          {
            requiredCount--
            const v = Types.String(obj[key])
            if (v === undefined) {
              return undefined
            }
            if (v !== value || ret !== obj) {
              if (ret === obj) {
                /** @type {{[k in string]: any}} */
                ret = {}
                for (let j = 0; j < i; j++) {
                  ret[entries[j][0]] = entries[j][1]
                }
              }
              ret.baz = v
            }
          }
          break
        default:
          return undefined
      }
    }

    if (requiredCount > 0) {
      return undefined
    }
    return ret
  },
  MyMap: /** @returns {undefined|any} */ (/** @type {any} */ obj) => {
    if (Kinds.Map(obj) === undefined) {
      return undefined
    }
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      let v = obj[keys[i]]
      v = Types.SimpleStruct(v)
      if (v === undefined) {
        return undefined
      }
      if (v !== obj[keys[i]]) {
        /** @type {{[k in string]: any}} */
        const ret = {}
        for (let j = 0; j < keys.length; j++) {
          if (j < i) {
            ret[keys[j]] = obj[keys[i]]
          } else if (j === i) {
            ret[keys[j]] = v
          } else {
            let v = obj[keys[j]]
            v = Types.SimpleStruct(v)
            if (v === undefined) {
              return undefined
            }
            ret[keys[j]] = v
          }
        }
        return ret
      }
    }
    return obj
  }
}
/** @type {{ [k in string]: (obj:any)=>undefined|any}} */
const Reprs = {
  Int: Kinds.Int,
  Bool: Kinds.Bool,
  String: Kinds.String,
  SimpleStruct: /** @returns {undefined|any} */ (/** @type {any} */ obj) => {
    if (Kinds.Map(obj) === undefined) {
      return undefined
    }
    const entries = Object.entries(obj)
    /** @type {{[k in string]: any}} */
    let ret = obj
    let requiredCount = 3
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i]
      switch (key) {
        case 'foo':
          {
            requiredCount--
            const v = Reprs.Int(value)
            if (v === undefined) {
              return undefined
            }
            if (v !== value || ret !== obj) {
              if (ret === obj) {
                /** @type {{[k in string]: any}} */
                ret = {}
                for (let j = 0; j < i; j++) {
                  ret[entries[j][0]] = entries[j][1]
                }
              }
              ret.foo = v
            }
          }
          break
        case 'bar':
          {
            requiredCount--
            const v = Reprs.Bool(value)
            if (v === undefined) {
              return undefined
            }
            if (v !== value || ret !== obj) {
              if (ret === obj) {
                /** @type {{[k in string]: any}} */
                ret = {}
                for (let j = 0; j < i; j++) {
                  ret[entries[j][0]] = entries[j][1]
                }
              }
              ret.bar = v
            }
          }
          break
        case 'baz':
          {
            requiredCount--
            const v = Reprs.String(value)
            if (v === undefined) {
              return undefined
            }
            if (v !== value || ret !== obj) {
              if (ret === obj) {
                /** @type {{[k in string]: any}} */
                ret = {}
                for (let j = 0; j < i; j++) {
                  ret[entries[j][0]] = entries[j][1]
                }
              }
              ret.baz = v
            }
          }
          break
        default:
          return undefined
      }
    }
    if (requiredCount > 0) {
      return undefined
    }
    return ret
  },
  MyMap: /** @returns {undefined|any} */ (/** @type {any} */ obj) => {
    if (Kinds.Map(obj) === undefined) {
      return undefined
    }
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      let v = obj[keys[i]]
      v = Reprs.SimpleStruct(v)
      if (v === undefined) {
        return undefined
      }
      if (v !== obj[keys[i]]) {
        /** @type {{[k in string]: any}} */
        const ret = {}
        for (let j = 0; j < keys.length; j++) {
          if (j < i) {
            ret[keys[j]] = obj[keys[i]]
          } else if (j === i) {
            ret[keys[j]] = v
          } else {
            let v = obj[keys[j]]
            v = Reprs.SimpleStruct(v)
            if (v === undefined) {
              return undefined
            }
            ret[keys[j]] = v
          }
        }
        return ret
      }
    }
    return obj
  }
}

export const SimpleStruct = {
  toTyped: Types.SimpleStruct,
  toRepresentation: Reprs.SimpleStruct
}

export const MyMap = {
  toTyped: Types.MyMap,
  toRepresentation: Reprs.MyMap
}
```
- 还挺顺手的，比linkml、json schema都精简、灵活。下一步用raw项目试试：
    - '60': IPLD DSL sample
      readme: |
        - read 2024.08.01. 16:00 draft
        - make schema sample use raw\food 
