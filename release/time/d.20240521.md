# 2024.05.21.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[在整理近期手稿之后，修订个人模型。](#20240521074500)  
- 14:00	[设计几种新版合同的雏形，实际测试观察接受程度。](#20240521140000)  
- 16:00	[用EmailEngine搭建邮件服务器](#20240521160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 11842 | 1433 | 2310 |
| PSMD | 7000 | 5731 | 1269 | 495 |
| learn | 1000 | 622 | 378 | 660 |
| ego | 3000 | 2904 | 96 | 585 |
| js | 1375 | 975 | 400 | 330 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：了解jami api
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - js的第3号事项：继续学习promise api
  - PSMD的第4号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。

- 60分钟时间片：
  - learn的第1号事项：在util库进行单元测试，在实践中学习。
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - PSMD的第2号事项：PSMD新合同的metadata
  - js的第2号事项：学习 nodejs test框架

- 90分钟时间片：
  - PSMD的第1号事项：重新设计PSMD自助、互助、委托合同
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：新版个人模型
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第5号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.21.[在整理近期手稿之后，修订个人模型。]任务&body=日期: 20240521%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240521074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240521074500"></a>
## 7:45~10:59
在整理近期手稿之后，修订个人模型。

- 再熟悉一下知识图谱的术语。
    - https://www.ibm.com/topics/knowledge-graph
    - https://dl.acm.org/doi/10.1145/3447772
    - https://www.w3.org/OWL/
    - 适可而止，就算术语重复也继续向前走。
- 基于昨天的基础定义，动笔升级个人模型，并嵌入共同体接口。
    - 必要时，对浅层主体隐藏深层术语和知识，只暴露浅层所需要的概念。
    - 只明确这一层需要的实践，再根据实践记录引入下一层级。

- 继续追加todo项：
- '195': 新版个人模型

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.21.[设计几种新版合同的雏形，实际测试观察接受程度。]任务&body=日期: 20240521%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240521140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240521140000"></a>
## 14:00~15:29
设计几种新版合同的雏形，实际测试观察接受程度。

- 再等等个人模型定稿。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.21.[用EmailEngine搭建邮件服务器]任务&body=日期: 20240521%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240521160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240521160000"></a>
## 16:00~16:59
用EmailEngine搭建邮件服务器

```
sudo apt install docker.io docker-compose
sudo apt install lsb-release curl gpg
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis
redis-server
redis-cli
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> exit
sudo usermod -aG docker huangyg
sudo docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
sudo docker pull postalsys/emailengine:v2
sudo docker run -p 3000:3000 --env EENGINE_REDIS="redis://127.0.0.1:6379/7" postalsys/emailengine:v2

{"level":30,"time":1716282054796,"pid":7,"hostname":"e81ea8cc1ad4","msg":"Starting EmailEngine","version":"2.41.4","node":"20.13.1","uvThreadpoolSize":4,"workersImap":4,"workersWebhooks":1,"workersSubmission":1}
============================================================================================================
Failed to establish connection to Redis using "redis://127.0.0.1:6379"
Can not connect to the database. Redis might not be running. Are you using correct hostname and port values?

To run EmailEngine provide valid Redis configuration
  $ node server.js --dbs.redis="redis://username:password@1.2.3.4:6379/0"
```

没有成功，因为不在关键路径上，不再追加时间。
