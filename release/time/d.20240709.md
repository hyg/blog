# 2024.07.09.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[data -> schema 迭代范例](#20240709074500)  
- 14:00	[peerjs sample](#20240709140000)  
- 16:00	[相关代码整理到season.js](#20240709160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 1658 | 16042 | 3510 |
| PSMD | 7000 | 227 | 6773 | 660 |
| ego | 4000 | 547 | 3453 | 540 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 450 |
| raw | 500 | 60 | 440 | 90 |
| learn | 1500 | 489 | 1011 | 1110 |
| js | 1200 | 215 | 985 | 660 |

---

waiting list:


- 30分钟时间片：
  - ego的第1号事项：完成day.js中index等string
  - PSMD的第6号事项：重新思考term metadata种的upgradeby，是否需要显示内容和id两种。
  - learn的第6号事项：Document-Oriented数据库
  - learn的第7号事项：列存储（Wide Column Store/Column-Family）数据库

- 60分钟时间片：
  - js的第1号事项：dat sample for root metadata
  - ego的第2号事项：使用新版day、season、waitinglist的ego.js
  - learn的第2号事项：schema in ipld
  - js的第2号事项：syncthing sample

- 90分钟时间片：
  - learn的第1号事项：pear api sample
  - raw的第1号事项：自动从网页提取营养成分表
  - PSMD的第2号事项：用linkml编写一套标准模型
  - ego的第3号事项：根据ego对外信息接口编写页面代码

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.09.[data -> schema 迭代范例]任务&body=日期: 20240709%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240709074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240709074500"></a>
## 7:45~10:59
PSMD: [data -> schema 迭代范例]

- linkml和json schema都针对名词，表达动作、行为的能力还需要再想想。
- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.09.[peerjs sample]任务&body=日期: 20240709%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240709140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240709140000"></a>
## 14:00~15:29
js: [peerjs sample]

- https://peerjs.com/docs/#start
- https://peerjs.com/docs/#dataconnection
- 知道peer id的话，可以单方面发送信息。
- 双方知道peer id的话，可以互传。
- 可以设定id，但是会被冒充？需要自己设计身份验证机制。
- A small percentage of users are behind symmetric NATs. When two symmetric NAT users try to connect to each other, NAT traversal is impossible and no connection can be made. A workaround is to proxy through the connection through a TURN server. The PeerServer cloud service provides a free TURN server. This will allow your PeerJS app to work seamlessly for this situation 

- https://www.npmjs.com/package/peerjs
- 执行没有通过
    - https://github.com/peers/peerjs/issues/761
    - https://github.com/peers/peerjs/issues/589
- 先在html使用。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.09.[相关代码整理到season.js]任务&body=日期: 20240709%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240709160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240709160000"></a>
## 16:00~16:59
ego: [相关代码整理到season.js]

- 完成updatesold()
```
updatesold> season.sold:
{
  PSMD: 407,
  ego: 547,
  xuemen: 30,
  infra: 90,
  js: 215,
  learn: 489,
  raw: 60
}
```
- 整理模版2的2a、2b弹性时间表，以及入口映射：
```
  '2':
    2a:
      start: 0
      end: 45959
    2b:
      start: 50000
      end: 64459
```
- 模版2最晚6:45起床，否则提示"devmakedayplan()> can't find dayplan"
