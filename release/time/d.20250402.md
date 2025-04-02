# 2025.04.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 16:00~16:59	js: [git sample](#20250402160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 390 | 13140 | 6165 |
| PSMD | 4000 | 150 | 3850 | 1335 |
| ego | 2530 | 180 | 2350 | 1065 |
| infra | 2000 | 0 | 2000 | 315 |
| xuemen | 1000 | 0 | 1000 | 450 |
| raw | 1000 | 0 | 1000 | 480 |
| learn | 2000 | 0 | 2000 | 1860 |
| js | 1000 | 60 | 940 | 660 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：复习五元庄第十三式
  - raw的第2号事项：复习五元庄第十二式
  - raw的第3号事项：复习脏真归元法
  - learn的第8号事项：js debug in vscodium

- 60分钟时间片：
  - js的第1号事项：在代码中自动提交git库
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：learn factory, constructor, prototype
  - PSMD的第3号事项：1609的分立、合并。

- 90分钟时间片：
  - ego的第1号事项：新版基础模型
  - learn的第1号事项：复习dat
  - PSMD的第2号事项：子1609
  - ego的第2号事项：新版实时手稿

- 195分钟时间片：
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.02.[git sample]任务&body=日期: 2025.04.02.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250402.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250402160000"></a>
## 16:00 ~ 16:59
## js: [git sample]

- https://github.com/maryrosecook/gitlet
- https://github.com/maryrosecook/gitlet/blob/master/spec/add.spec.js
```
D:\huangyg\git\js.sample\git>node gitlet.test
node:fs:284
function existsSync(path) {
                   ^

RangeError: Maximum call stack size exceeded
    at Object.existsSync (node:fs:284:20)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1806:14)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)
    at gitletDir (D:\huangyg\git\js.sample\git\gitlet.js:1816:18)

Node.js v22.10.0
```
- 似乎和git不兼容，只是模仿原理。
- 继续用simple-git就可以了。