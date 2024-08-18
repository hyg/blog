# 2024.08.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:59	raw: [新版架构。](#20240818140000)
- 14:30~14:29	raw: [新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。](#20240818143000)
- 16:00~15:59	raw: [新版营养成分详情，允许多种营养成分。](#20240818160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 7866 | 9834 | 3825 |
| PSMD | 7000 | 2037 | 4963 | 780 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 450 |
| raw | 500 | 670 | -170 | 90 |
| learn | 1500 | 1723 | -223 | 990 |
| js | 1200 | 1693 | -493 | 750 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - PSMD的第4号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 60分钟时间片：
  - learn的第1号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/
  - js的第1号事项：js class
  - ego的第2号事项：eventemitter sample
  - raw的第2号事项：新版营养成分详情，允许多种营养成分。

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - PSMD的第2号事项：整理新版本term的manifest code
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第6号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.18.[新版架构。]任务&body=日期: 2024.08.18.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/08/20240818140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240818140000"></a>
## 14:00~14:29
raw: [新版架构。]

- 如何从对象实例自动得出类的定义。
- D:\huangyg\git\js.sample\class
    - npm i js-yaml
    - export log()中使用caller
```
D:\huangyg\git\js.sample\class>node main
file:///D:/huangyg/git/js.sample/class/A.js:15
    s[0] = log.caller.name + "> " + s[0];
               ^

TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    at log (file:///D:/huangyg/git/js.sample/class/A.js:15:16)
    at file:///D:/huangyg/git/js.sample/class/main.js:6:1
    at ModuleJob.run (node:internal/modules/esm/module_job:262:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:485:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:109:5)

Node.js v22.4.1
```
    -其它正常。
```
import yaml from "js-yaml";
import fs from "fs";

export function A(filename) {
    this.fooddata = yaml.load(fs.readFileSync(filename, 'utf8'));
}

A.prototype.debug = true;
A.prototype.tostring = function () {
    return yaml.dump(this.fooddata);
}
```

```
import yaml from "js-yaml";
import fs from "fs";

export class B {
    constructor(filename){
        this.fooddata = yaml.load(fs.readFileSync(filename, 'utf8'));
    }
    
}

B.prototype.debug = true;
B.prototype.tostring = function(){
    return yaml.dump(this.fooddata);
}
```
```
import yaml from "js-yaml";
import fs from "fs";


export function log(...s) {
    //s[0] = log.caller.name + "> " + s[0];
    console.trace();
    console.log(...s);
}

function tostring(data) {
    return yaml.dump(data);
}

export function C(filename) {
    var obj = new Object();
    obj.fooddata = yaml.load(fs.readFileSync(filename, 'utf8'));
    obj.debug = true;
    obj.tostring = tostring;
    return obj;
}
```
```
import {A} from "./A.js";
import {B} from "./B.js";
import {C,log} from "./C.js";

//var data = new C("D:\\huangyg\\git\\raw\\food\\d.20240818.yaml");
var obj = C("D:\\huangyg\\git\\raw\\food\\d.20240818.yaml");
//console.log("data:\n",data.tostring());
//log("data:\n",data.tostring());
//console.log("data:\n",obj.tostring(obj.fooddata));
//log("data:\n",obj.tostring(obj.fooddata));
log("data:\n%o",obj.fooddata);
```
- 以fooddata字段保存object，把数据封装在下一级；还是在本级展开保存？
- yaml文件，obj in js，main.js之间是什么关系？其他语言怎么处理？放在schema框架统一再斟酌。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.18.[新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。]任务&body=日期: 2024.08.18.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/08/20240818143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240818143000"></a>
## 14:30 ~ 14:59
raw: [新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.18.[新版营养成分详情，允许多种营养成分。]任务&body=日期: 2024.08.18.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/08/20240818160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240818160000"></a>
## 16:00 ~ 16:59
raw: [新版营养成分详情，允许多种营养成分。]

- 继续追加时间。
