# 2025.06.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:42~15:14	js: [lodash.findkey](#20250601144200)
- 15:15~16:05	js: [jsonquerylang.org](#20250601151500)
- 16:40~18:24	js: [openpgp v6.1.1.](#20250601164000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5511 | 8019 | 7455 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1470 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 449 | 551 | 660 |
| raw | 1000 | 285 | 715 | 450 |
| learn | 2000 | 1123 | 877 | 2190 |
| js | 1000 | 474 | 526 | 1170 |

---
waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：acme
  - learn的第2号事项：整理学术工具
  - js的第5号事项：debug in vscodium

- 60分钟时间片：
  - learn的第1号事项：量子物理的数学基础
  - raw的第1号事项：新版food plan
  - ego的第2号事项：entry的科目归并
  - raw的第2号事项：设计三季度时间表

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的按月归并
  - js的第1号事项：openpgp v6.1.1.
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - ego的第4号事项：新版基础模型
  - xuemen的第4号事项：kernel模型升级
  - ego的第5号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.01.[lodash.findkey]任务&body=日期: 2025.06.01.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250601.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250601144200"></a>
## 14:42 ~ 15:14
## js: [lodash.findkey]

- filter比findkey更适合。
- https://lodash.nodejs.cn/docs/collection/filter#filter
- D:\huangyg\git\js.sample\query\lodash.js
```
D:\huangyg\git\js.sample\query>node lodash
> - date: '2025-05-14'
  VoucherID: '19250514162000031820982519105386'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: 97.68
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: 97.68
  comment:
    - name: 河套全脂奶粉
      amount: 2500
      unit: g
      asset: 97.68
```
- 和自己实现差不多，如果有更深度的查询和数据加工可以参考：https://dev59.com/l1gR5IYBdhLWcg3wLq9n
```
var result = _.chain(data)
    .map('elements')               // pluck all elements from data
    .flatten()                     // flatten the elements into a single array
    .filter({prop: 'foo'})         // exatract elements with a prop of 'foo'
    .sumBy('val')                  // sum all the val properties
    .value()
```
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.01.[jsonquerylang.org]任务&body=日期: 2025.06.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250601.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250601151500"></a>
## 15:15 ~ 16:05
## js: [jsonquerylang.org]

- https://github.com/jsonquerylang/jsonquery
- D:\huangyg\git\js.sample\query\jsonquery.js
- npm install @jsonquerylang/jsonquery
- 需要构造 require 函数的文件名:https://nodejs.cn/api/module.html#modulecreaterequirefilename
    - https://nodejs.cn/api/esm.html#es-%E6%A8%A1%E5%9D%97%E5%92%8C-commonjs-%E7%9A%84%E5%8C%BA%E5%88%AB
```
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
var fs = require('fs');
var yaml = require('js-yaml');
```
- “filter”不要写成“.filter”：
```
result = jsonquery(AERmap, `
  values()
    | filter((.date > "2025-05-13") and (.date < "2025-05-15"))
  `);

console.log(yaml.dump(result));
```
```
D:\huangyg\git\js.sample\query>node jsonquery.mjs
- date: '2025-05-14'
  VoucherID: '19250514162000031820982519105386'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: 97.68
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: 97.68
  comment:
    - name: 河套全脂奶粉
      amount: 2500
      unit: g
      asset: 97.68
```
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.01.[openpgp v6.1.1.]任务&body=日期: 2025.06.01.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250601.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250601164000"></a>
## 16:40 ~ 18:24
## js: [openpgp PEM comment]

- 由于stalw.art的加密设置、openPGP、导入公钥功能不接受含有注释的PEM文件，需要生成干净无注释的PEM。
- openpgp.js v3.40的generateKey没有config，不能去除注释。
- 升级到最新的v6.1.1.
    - https://app.unpkg.com/openpgp@6.1.1/files/dist
- 阅读源码，了解config的成员。注意各版本的拼写略有不同，官网文档有时也不准确。
    - https://github.com/openpgpjs/openpgpjs/blob/v6.1.0/src/openpgp.js 
    - https://github.com/openpgpjs/openpgpjs/blob/v6.1.0/src/config/config.js
- D:\huangyg\git\js.sample\openpgp\local.6.html
    - userIds -> userIDs
    - numBits -> rsaBits
    - var userIDs = name + " (" + id + ") <" + email + ">" ;
        - 改为 var userIDs = {name: name, email: email};
    - var opt = {numBits: 4096, userIds: userIDs, passphrase: passphrase}; 
        - 改为： var opt = {rsaBits: 4096, userIDs: userIDs, passphrase: passphrase};
    - 返回值也从key接口改为一个对象: { privateKey:PrivateKey|Uint8Array|String, publicKey:PublicKey|Uint8Array|String, revocationCertificate:String }
    - 成功产生新的密钥对。无注释的，带有默认注释的，带有自定义注释的。
        - var opt = { rsaBits: 4096, userIDs: userIDs, passphrase: passphrase ,config:{showVersion: true, showComment: true, versionString: "test version string",commentString: "test comment"} };
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEaDwoMBYJKwYBBAHaRw8BAQdAV/ALsCiK9Gn7EWRH2DrzLRuOZ+dEyUzq
0MFF+hkpPzDNGem7hOWLh+WImiA8aHlnQHh1ZW1lbi5jbj7CwBMEExYKAIUF
gmg8KDADCwkHCZARXb+D2teTP0UUAAAAAAAcACBzYWx0QG5vdGF0aW9ucy5v
cGVucGdwanMub3JnRFauN24NvDLJupop8gddnjkgzJaFNLyw7aw/XgqdcYgF
FQoIDgwEFgACAQIZAQKbAwIeARYhBP/wh/s74p1VKK41exFdv4Pa15M/AAB4
lQD/RB8H6yg8PjzAaOe3dxiKo5FZu2ItfBsttZJH2oyfED4BAIYee2HuJoq+
jG+OdwUxlt7BzjR5wnFc4KoEawJRNUoPzjgEaDwoMBIKKwYBBAGXVQEFAQEH
QLcx+0w9DMRuT27KxGmayjsvV2+zsfHdh9EzD2sMCBgAAwEIB8K+BBgWCgBw
BYJoPCgwCZARXb+D2teTP0UUAAAAAAAcACBzYWx0QG5vdGF0aW9ucy5vcGVu
cGdwanMub3Jnt0r435dkcrAEqyWzhuOQSQwg3YEUcW168O2k1K+c7aACmwwW
IQT/8If7O+KdVSiuNXsRXb+D2teTPwAAaOMBAILkhJDEhmcmtRZd7EGbTQcy
4E2FpYFbGT1bqoXi+a0mAQCftzSqLhiWPvKDYbt49W+Oq0mn/Lmij+WcWaMJ
nCjGAw==
=M7I+
-----END PGP PUBLIC KEY BLOCK-----
```
- 仅解决了密钥生成。加密解密、签名验证等功能也会有许多升级细节，追加时间完成。