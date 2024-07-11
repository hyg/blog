# 2024.07.11.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[自动从网页提取营养成分表](#20240711093000)  
- 14:00	[完成day.js中index等string](#20240711140000)  
- 14:30	[Document-Oriented数据库](#20240711143000)  
- 16:00	[hyper-sdk sample](#20240711160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 2002 | 15698 | 3675 |
| PSMD | 7000 | 257 | 6743 | 720 |
| ego | 4000 | 577 | 3423 | 510 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 60 |
| learn | 1500 | 683 | 817 | 1140 |
| js | 1200 | 275 | 925 | 600 |

---

waiting list:


- 30分钟时间片：
  - ego的第7号事项：生成waitinglist时，考虑多层todo。
  - learn的第7号事项：列存储（Wide Column Store/Column-Family）数据库
  - js的第8号事项：日期格式化
  - learn的第8号事项：Query fundamentals https://console.neo4j.io

- 60分钟时间片：
  - ego的第1号事项：使用新版day、season、waitinglist的ego.js
  - js的第1号事项：syncthing sample
  - learn的第1号事项：hypercore sample
  - raw的第1号事项：自动从网页提取营养成分表

- 90分钟时间片：
  - PSMD的第2号事项：用linkml编写一套标准模型
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - js的第2号事项：helia and orbitdb sample
  - learn的第2号事项：pear api sample

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.11.[自动从网页提取营养成分表]任务&body=日期: 20240711%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240711093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240711093000"></a>
##  09:30~10:59
raw: [自动从网页提取营养成分表]

- D:\huangyg\git\js.sample\data
- http://www.eshian.com/yyss/1064.html
    - 不允许跨站，返回：1、0、“”、4、0、“”
- 在线讨论ai法人问题。时间登记30分钟到raw、60分钟到PSMD，任务继续排入waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.11.[完成day.js中index等string]任务&body=日期: 20240711%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240711140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240711140000"></a>
## 14:00~14:29
ego: [完成day.js中index等string]

- makeindex(dayobj,type)
    - type: plan,log
```
makeindex> indexstr:
- 09:30~10:59   learn: [pear api sample](../../draft/2024/07/20240711093000.md)
- 14:00~14:29   learn: [列存储（Wide Column Store/Column-Family）数据库](../../draft/2024/07/20240711140000.md)
- 14:30~14:59   ego: [生成waitinglist时，考虑多层todo。](../../draft/2024/07/20240711143000.md)
- 16:00~16:59   ego: [使用新版day、season、waitinglist的ego.js](../../draft/2024/07/20240711160000.md)

makeindex> indexstr:
- 09:30~10:59   learn: [pear api sample](#20240711093000)
- 14:00~14:29   learn: [列存储（Wide Column Store/Column-Family）数据库](#20240711140000)
- 14:30~14:59   ego: [生成waitinglist时，考虑多层todo。](#20240711143000)
- 16:00~16:59   ego: [使用新版day、season、waitinglist的ego.js](#20240711160000)
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.11.[Document-Oriented数据库]任务&body=日期: 20240711%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240711143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240711143000"></a>
## 14:30~14:59
learn: [Document-Oriented数据库]

- MongoDB
- CouchDB
- RavenDB
- 需要安装或设置服务器，不符合PSMD用户群体的需要。
- 查找数据方面，对知识查询还不如图数据库方便。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.11.[hyper-sdk sample]任务&body=日期: 20240711%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240711160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240711160000"></a>
## 16:00~16:59
learn: [hyper-sdk sample]

- D:\huangyg\git\js.sample\dat\hypertest.js
```
sdk.publicKey: <Buffer 47 f1 82 a5 db 57 0f b3 8e a4 04 40 96 07 bb db 43 a2 76 bf 31 5f 83 d7 85 56 3b ac 00 e0 3c 43>
```
- npm install hypercore
```
D:\huangyg\git\js.sample\dat>node hypercore
core.id:  bc1wwrypornf96o3dtkf14ribhuxhzhdf115b1a3o41xb3csicgo
core.key:  <Buffer 0b 25 4a 10 0d 81 04 5f fa 19 1c 54 59 68 95 0f 26 fe 5f 83 2c a5 b0 cb 19 86 a4 f0 e5 96 ab 0d>
core: Hypercore(
  id: bc1wwrypornf96o3dtkf14ribhuxhzhdf115b1a3o41xb3csicgo
  key: 0b254a100d81045ffa191c545968950f26fe5f832ca5b0cb1986a4f0e596ab0d
  discoveryKey: d6e20f7d6a9131b16a7e2acab9294b1b4ca4dc323d46f6a31038dd7c1a334062
  opened: true
  closed: false
  snapshotted: false
  sparse: true
  writable: true
  length: 18
  fork: 0
  sessions: [ 1 ]
  activeRequests: [ 0 ]
  peers: [ 0 ]
)
core was updated? false length is 18
has: true
block 2: <Buffer 62 61 74 63 68 20 62 6c 6f 63 6b 20 32>
```
- 追加todo项：
    - '60': hypercore sample
      readme: |
        - read the exsamples :https://github.com/holepunchto/hypercore/tree/main/examples
        - update D:\huangyg\git\js.sample\dat\hypercore.js
