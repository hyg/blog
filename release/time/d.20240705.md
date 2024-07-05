# 2024.07.05.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

<a id="index"></a>
- 07:45	[p2p工具](#20240705074500)  
- 14:00	[新版ego.js的数据结构](#20240705140000)  
- 16:00	[simplenote的数据同步机制](#20240705160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 903 | 16797 | 3315 |
| PSMD | 7000 | 157 | 6843 | 660 |
| ego | 4000 | 217 | 3783 | 480 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 345 |
| raw | 500 | 0 | 500 | 60 |
| learn | 1500 | 359 | 1141 | 1080 |
| js | 1200 | 50 | 1150 | 690 |

---

waiting list:


- 30分钟时间片：
  - js的第4号事项：js minify tools
  - learn的第5号事项：trello api
  - PSMD的第6号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
  - learn的第6号事项：Document-Oriented数据库

- 60分钟时间片：
  - raw的第1号事项：月度季度报告的报表统一到新格式
  - PSMD的第2号事项：用linkml编写一套标准模型
  - js的第2号事项：dat sample for root metadata
  - learn的第2号事项：linkml, yaml-ld

- 90分钟时间片：
  - ego的第1号事项：相关代码整理到day.js, season.js, waitinglist.js
  - xuemen的第1号事项：kernel模型升级
  - js的第1号事项：peerjs sample
  - learn的第1号事项：pear sample

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第12号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.05.[p2p工具]任务&body=日期: 20240705%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240705074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240705074500"></a>
## 7:45~10:59
learn: [p2p工具]

- 复习linkml、OWL资料。
- ubuntu测试Dat
    - sudo npm install dat
    - mkdir dat
    - cd dat
    - dat clone dat://f9dd4e35a26ba81c2a1d0c94f76f37caf0805605b1756d5d33ed370392e3bed7
    - 需要共享端（windows）运行dat desktop几分钟后，peer数从0变1，ubuntu端偶尔有1个connection但是流量一直是0，.dat文件夹的metadata倒是很快就同步了。
    - 默认是anonymous read & write
    - 两个小时仍然没有同步文件。停止测试。
- windows测试pears
    - https://docs.pears.com/
        - npm install -g pear
        - pear
        - pear run pear://runtime
        - 在GUI界面上点击自动完成后续安装，结束后关闭GUI。
        - pear
    - https://keet.io/
        - 安装到15%停滞。重新安装还是到15%自动退出。
        - pear run pear://keet
    - https://peerviewer.org/
        - 是远程桌面工具，不适合PSMD的需求。
- ubuntu测试pears
    - 按照官网文档安装最新版nodejs和npm，nvm install 22
    - npm i -g pear
    - pear
- https://openp2p.cn/
    - 按文档设置，显示"直连”，但是一直连接不上。
    - 也是属于远程桌面，不符合需求。
- syncthing
    - windows
        - winget install Syncthing.Syncthing
        - 命令行： syncthing
        - 浏览器：http://127.0.0.1:8384
        - 保存API key，设置GUI账号密码
        - 页面右上角：操作-显示ID，发给对方。
        - D:\huangyg\git\draft\2024\07，高级-文件夹类型-只发送，共享-选择ubuntu设备
        - 在windows编辑文件可以很快同步到ubuntu
    - ubuntu
        - 按文档操作：apt.synchting.net 
        - 命令行：syncthing
        - 页面右下角：添加远程设备，填写设备ID或者选择自动发现的。
        - 在同步文件夹提示中选择本地路径。
        - 在Ubuntu编辑文件不会改变windows版本
    - 安装配置比较麻烦，页面信息偶尔有错（windows显示ubuntu失去同步，ubuntu显示同步成功，实际文件内容正确）。
    - 争取用api实现，让用户免操作。只传送顶级metadata应该可以。
- 增加todo项：
    - '60': syncthing sample
      readme: |
        - https://docs.syncthing.net/dev/rest.html
        - https://github.com/JodusNodus/node-syncthing
    - '30': js minify tools
      readme: |
        - js代码写入metadata，作为候选方案确保代码和数据准确匹配。
        - https://www.npmjs.com/package/minify
        - https://github.com/mishoo/UglifyJS
        - https://github.com/babel/minify
    - '90': pear sample

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.05.[新版ego.js的数据结构]任务&body=日期: 20240705%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240705140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240705140000"></a>
## 14:00~15:29
ego: [新版ego.js的数据结构]

- 统一几个数据结构和方法：
    - waiting list：下一步可以选择多种优先级模型
    - season stat
    - day schadule：
    - day index
- waitlist.js
    - 按不同优先级模型：todo->waitlist
- season.js
- daytable.js
    - day plan: 
        - waketime + mode -> day metadata 
        - day metadata -> draft metadata + draft markdown , or day metadata replace draft metadata
        - day metadata -> day table
    - day log:
        - day metadata -> day index
        - day metadata + draft markdown -> day log
- 把draft metadata的time字段扩展，成为day metadata。
    - 如果要减少数据量，可以把信息分散在season和day两边。
- seasonobj,dayobj放到对应js文件中，测试通过。
```
D:\huangyg\git\ego\src>node util.test
✔ make meta file id (1.5292ms)
✔ get today str (0.6858ms)
✔ get day metadata file name (0.1431ms)
✔ get season metadata file name (0.1185ms)
ℹ tests 4
ℹ suites 0
ℹ pass 4
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 9.1521
```
- 增加todo项：
    - '60': 相关代码整理到day.js, season.js, waitinglist.js

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.05.[simplenote的数据同步机制]任务&body=日期: 20240705%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240705160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240705160000"></a>
## 16:00~16:59
learn: [simplenote的数据同步机制]

- https://simperium.com/docs/js/
    - https://github.com/Simperium/simperium-js
    - https://simperium.com/overview/
        - 只有sign in没有sign up
        - Trial*: Up to 250k requests 	Free（*Free trial expires one year after account registration on simperium.com.）
        - 收费的。不适合。
    - https://simplenote.com/developers/
    - https://simperium.com/docs/reference/http/
- 项目应该已经停了。
