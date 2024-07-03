# 2024.07.03.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[day plan, day log, waiting list](#20240703093000)  
- 14:00	[寻找可编程的,去中心化的信息发布方式](#20240703140000)  
- 14:30	[了解免安装web im的机制](#20240703143000)  
- 16:00	[用yaml写json schema并且验证。](#20240703160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 404 | 17296 | 3165 |
| PSMD | 7000 | 157 | 6843 | 660 |
| ego | 4000 | 60 | 3940 | 480 |
| infra | 2000 | 30 | 1970 | 60 |
| xuemen | 1500 | 30 | 1470 | 345 |
| raw | 500 | 0 | 500 | 60 |
| learn | 1500 | 77 | 1423 | 1020 |
| js | 1200 | 50 | 1150 | 540 |

---

waiting list:


- 30分钟时间片：
  - learn的第4号事项：github project
  - learn的第5号事项：trello api
  - PSMD的第6号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
  - learn的第6号事项：Document-Oriented数据库

- 60分钟时间片：
  - infra的第1号事项：metadata中自带处理代码的范例
  - learn的第1号事项：linkml, yaml-ld
  - raw的第1号事项：月度季度报告的报表统一到新格式
  - PSMD的第2号事项：用linkml编写一套标准模型

- 90分钟时间片：
  - ego的第1号事项：day plan, day log, waiting list
  - xuemen的第1号事项：kernel模型升级
  - js的第1号事项：peerjs sample
  - ego的第2号事项：根据ego对外信息接口编写页面代码

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第12号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.03.[day plan, day log, waiting list]任务&body=日期: 20240703%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240703093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240703093000"></a>
##  09:30~10:59
ego: [day plan, day log, waiting list]

- 优先级排序还没有明确思路。
- 返回waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.03.[寻找可编程的,去中心化的信息发布方式]任务&body=日期: 20240703%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240703140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240703140000"></a>
## 14:00~14:29
learn: [寻找可编程的,去中心化的信息发布方式]

- diaspora api 使用 OPENID connect，还是中心化的。
    - https://diaspora.github.io/api-documentation/
    - https://github.com/diaspora/api-documentation
- https://docs.freenet.org/tutorial.html
    - 需要学习rust，暂时不做判断。
- peerjs
    - D:\huangyg\git\draft\2024\04\history.backup.md
    - 可以传输数据，自己拼链。
    - 开放api，有文档。
    - 需要公网服务器才能穿透NAT。
- https://www.freedomjs.org/
    - 太老了，很久没有维护。
- https://datproject.org/
    - https://github.com/RangerMauve/hyper-sdk
    - https://www.npmjs.com/package/dat-sdk
    - https://github.com/dat-ecosystem-archive/dat-node
- https://www.npmjs.com/package/libp2p
    - https://libp2p.github.io/js-libp2p/modules/libp2p.html
- 创建sample todo项：
    - '90': peerjs sample
    - '60': dat sample
      readme: |
        - https://github.com/dat-ecosystem-archive/dat-node
        - https://datproject.org/

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.03.[了解免安装web im的机制]任务&body=日期: 20240703%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240703143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240703143000"></a>
## 14:30~14:59
learn: [了解免安装web im的机制]

- https://libera.chat/
- 需要翻墙注册账号
    - guest的登录
    - /nick YourNick
    - /msg NickServ REGISTER YourPassword youremail@example.com
    - 把验证email中的指令在聊天室中打出，格式通常是 /msg NickServ VERIFY REGISTER YourNick xxxxxxxx
- 在客户端可以实用TLS：https://libera.chat/guides/connect
- web可以使用。登录后注册第二个账号貌似不再需要翻墙。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.03.[用yaml写json schema并且验证。]任务&body=日期: 20240703%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240703160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240703160000"></a>
## 16:00~16:59
PSMD: [用yaml写json schema并且验证。]

- D:\huangyg\git\js.sample\schema>npm install ajv
- https://www.npmjs.com/package/ajv
- https://ajv.js.org/guide/schema-language.html 
    - JSON Type Definition：Ajv supports the new specification focussed on defining cross-platform types of JSON messages/payloads - JSON Type Definition (JTD). See the informal reference of JTD schema forms and formal specification RFC8927 
- D:\huangyg\git\js.sample\schema\ajv.js
    - yaml schema需要用js-yaml先load成对象变量，然后在ajv.validate()中使用。schema和instance都一样。
    - string类型的，如果是数字必须加上引号。
    - 空字段会报错。
    - 测试通过.
