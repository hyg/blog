# 2024.07.10.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 14:00	[完成day.js中index等string](#20240710140000)  
- 14:30	[重新思考term metadata种的upgradeby，是否需要显示内容和id两种。](#20240710143000)  
- 16:00	[dat sample for root metadata](#20240710160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 1898 | 15802 | 3615 |
| PSMD | 7000 | 257 | 6743 | 720 |
| ego | 4000 | 577 | 3423 | 510 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 60 |
| learn | 1500 | 579 | 921 | 1080 |
| js | 1200 | 275 | 925 | 600 |

---

waiting list:


- 30分钟时间片：
  - learn的第6号事项：列存储（Wide Column Store/Column-Family）数据库
  - ego的第7号事项：生成waitinglist时，考虑多层todo。
  - learn的第7号事项：Query fundamentals https://console.neo4j.io
  - js的第8号事项：日期格式化

- 60分钟时间片：
  - ego的第1号事项：使用新版day、season、waitinglist的ego.js
  - js的第1号事项：syncthing sample
  - raw的第1号事项：自动从网页提取营养成分表
  - learn的第2号事项：schema in ipld

- 90分钟时间片：
  - learn的第1号事项：pear api sample
  - PSMD的第2号事项：用linkml编写一套标准模型
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - js的第2号事项：helia and orbitdb sample

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.10.[完成day.js中index等string]任务&body=日期: 20240710%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240710140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240710140000"></a>
## 14:00~15:29
ego: [完成day.js中index等string]

- 在线讨论其它问题，任务顺延。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.10.[重新思考term metadata种的upgradeby，是否需要显示内容和id两种。]任务&body=日期: 20240710%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240710143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240710143000"></a>
## 14:30~14:59
PSMD: [重新思考term metadata种的upgradeby，是否需要显示内容和id两种。]

- 增加todo项：
    - '90': term metadata的序号，分为显示序号和唯一id两种。
      readnme: |
        - 考虑upgradeby的实现。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.10.[dat sample for root metadata]任务&body=日期: 20240710%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240710160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240710160000"></a>
js: [dat sample for root metadata]

- https://datproject.org/
- https://docs.datproject.org/docs/dat-sdk#using-script-tags-to-load-the-sdk
- D:\huangyg\git\js.sample\dat
      - https://github.com/dat-ecosystem-archive/dat-node
            - npm install dat-node
            - 所有范例都不成功。古老项目很久没有维护，可能和新版的node哪里不兼容。
      - https://www.npmjs.com/package/dat-sdk
            - npm install --save dat-sdk
            - github.com/datproject/sdk 自动跳转到： https://github.com/RangerMauve/hyper-sdk 应该也不再维护了。
      - https://github.com/RangerMauve/hyper-sdk
            - npm install --save hyper-sdk
            - 追加时间。
