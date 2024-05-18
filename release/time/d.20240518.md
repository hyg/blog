# 2024.05.18.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[整理近期手稿](#20240518074500)  
- 09:30	[term metadata生成按修订层级排版的COM metadata。](#20240518093000)  
- 14:00	[YARRRML](#20240518140000)  
- 14:30	[docker](#20240518143000)  
- 16:00	[用imap和mailparse自动处理并回复email](#20240518160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 10862 | 2413 | 2520 |
| PSMD | 7000 | 5551 | 1449 | 375 |
| learn | 1000 | 592 | 408 | 690 |
| ego | 3000 | 2334 | 666 | 765 |
| js | 1375 | 855 | 520 | 390 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 364 | -64 | 90 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - learn的第1号事项：寻找测试做得比较好的开源软件，作为学习单元划分和测试的实例。
  - PSMD的第2号事项：PSMD委托合同的metadata
  - js的第2号事项：继续学习promise api
  - raw的第2号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。

- 60分钟时间片：
  - js的第1号事项：自动接收恢复邮件。
  - raw的第1号事项：根据过去数据给出15天内的建议。
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - learn的第2号事项：nosql

- 90分钟时间片：
  - ego的第1号事项：整理近期手稿
  - ego的第2号事项：代码实现，有互动的总结功能。
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第5号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.18.[整理近期手稿]任务&body=日期: 20240518%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240518074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240518074500"></a>
## 7:45~8:44
整理近期手稿

受昨天外勤影响没有休息好，登记为0分钟，todo项回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.18.[term metadata生成按修订层级排版的COM metadata。]任务&body=日期: 20240518%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240518093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240518093000"></a>
##  9:30~10:59
term metadata生成按修订层级排版的COM metadata。

- 在term.js增加termtoCOM参数
- 增加termtoCOM() maketermrelation()
    - 如果item有upgradeby：它所有子条款都有，本地定义都被覆盖；
    - 如果item没有upgradeby：
        - 如果item的upgradeby被map替换：使用被替换后的定义
        - 如果没有被map替换：使用本地定义
- 测试：node term termtoCOM 2e4f11cb
    - 因为有upgradeby localid.localid的情况，走不通。
    - 显示内容和id应该分两种upgradeby？否则其他功能维护起来太麻烦。

- 顺便修复了ego\src\start.js的bug：删除已进入日计划的todoxiang时，seasonobj.todo[timeperiod.subject][j]应为seasonobj.todo[timeperiod.subject][j][timeperiod.amount]

- 增加 todo项：
- '30': 重新思考term metadata种的upgradeby，是否需要显示内容和id两种。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.18.[YARRRML]任务&body=日期: 20240518%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240518140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240518140000"></a>
## 14:00~14:29
YARRRML

- https://rml.io/yarrrml/
- 是把现有数据源转化为RDF
- 可能会在下个阶段，把各类metadata转化为RDF，然后对RDF检索而不是自己写代码。
- 增加todo项：
- '60': 开发YARRRML范例

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.18.[docker]任务&body=日期: 20240518%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240518143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240518143000"></a>
## 14:30~14:59
docker

- 复习完。
- 暂时还是git的后备方案，而且不能向后检索：从某文件的v1.0找到v2.0.（如果image名改变了）

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.18.[用imap和mailparse自动处理并回复email]任务&body=日期: 20240518%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240518160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240518160000"></a>
## 16:00~16:59
用imap和mailparse自动处理并回复email

- 注释掉附件自动保存的语句，方便调试。
- mailparser返回的正文html、textashtml都可以获得，附件的结构太复杂。
- 追加todo项：
    - '60': 自动接收恢复邮件。
      readme: |
        - 继续在js.sample/IM/imap.js基础上继续增加功能。
        - 直接使用imap而不用mailparser：
        - https://www.npmjs.com/package/node-imap
        - https://www.jianshu.com/p/6163113fae4f
        - https://developer.aliyun.com/article/927081
        bind: 
          - '60': 用EmailEngine搭建邮件服务器
            readme: |
              - https://emailengine.app
          - '30': 用Nodemailer 自动处理并恢复email
            readme: |
              - https://nodemailer.com/
              - https://github.com/nodemailer/nodemailer
