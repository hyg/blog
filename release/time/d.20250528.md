# 2025.05.28.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~17:29	learn: [query yaml file or js obj](#20250528160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4797 | 8733 | 7365 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1470 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 105 | 895 | 450 |
| learn | 2000 | 1123 | 877 | 2250 |
| js | 1000 | 120 | 880 | 1230 |

---
waiting list:


- 30分钟时间片：
  - js的第5号事项：rxdb
  - js的第6号事项：LokiJS
  - js的第7号事项：node-dirty
  - js的第8号事项：tiny,https://www.npmjs.com/package/tiny

- 60分钟时间片：
  - raw的第1号事项：新版food plan
  - js的第1号事项：IndexedDB + dexie
  - ego的第2号事项：entry的科目归并
  - raw的第2号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的按月归并
  - learn的第1号事项：query yaml file or js obj
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.28.[query yaml file or js obj]任务&body=日期: 2025.05.28.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250528.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250528160000"></a>
## 16:00 ~ 17:29
## ego: [todo item中readme的传递（数组复制）]

- todo item的readme已测试通过。
- 准备yaml数据的复杂查询:
    - sql.js需要把yaml数据转为insert语句，写入数据库后再用sql查询。
    - kv数据库不方便复杂查询。
    - 寻找针对js对象的查询:在这个方向追加时间。