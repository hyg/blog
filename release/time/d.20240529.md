# 2024.05.29.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[新版共同体模型和物理学](#20240529074500)  
- 09:30	[新版个人模型的view](#20240529093000)  
- 14:00	[了解jami api](#20240529140000)  
- 14:30	[http://machina-js.org/](#20240529143000)  
- 16:00	[Reduced Kernel Mean Embedding Specification](#20240529160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 14247 | -972 | 2310 |
| PSMD | 7000 | 6301 | 699 | 465 |
| learn | 1000 | 1077 | -77 | 660 |
| ego | 3000 | 4119 | -1119 | 585 |
| js | 1375 | 1080 | 295 | 360 |
| xuemen | 600 | 1196 | -596 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：继续学习promise api
  - learn的第1号事项：寻找可编程的,去中心化的信息发布方式
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - xuemen的第1号事项：域名和接口整理

- 60分钟时间片：
  - PSMD的第2号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - ego的第2号事项：在season metadata中实现浮动时间表，修改日计划功能。
  - xuemen的第4号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - learn的第5号事项：开发YARRRML范例

- 90分钟时间片：
  - PSMD的第1号事项：新版个人模型对应的共同体模型范式
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - learn的第6号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：新版个人模型的view和共同体接口
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第7号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.29.[新版共同体模型和物理学]任务&body=日期: 20240529%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240529074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240529074500"></a>
## 7:45~8:44
新版共同体模型和物理学

### 双缝实验

- 假设观察者的传感器对信息进行映射，输入是按概率分布的所有可能，逐级映射后内部器官形成的一定的概率分布，每一种状态的内部器官观察到一部分映射后的信息。
- 在每种状态下的entity认知自己的观察和行为之间出现偏差，在认知范围内无法解释。于是进行meta，向下寻找自己所使用的假设。
- 借助仪器，对缝和屏进行观察与不观察，对比结果后，复原对传感器输入输出的映射关系，并且推测其它平级entity的存在。
- 在掌握传感器功能之后，各平级entity可以独立构造共同体模型，并且在同构部署之间进行joint，在无法直接沟通的情况下产生共同体。
    - 分别对传感器映射后的观察结果进行处理，并且推测出归并后的处理结果。
        - 处理结构仍然以一定概率分布，被一部分member观察到（受益）。
    - 通过调节局部处理的逻辑，调节归并后的处理结果。
        - 虽然不一定可以直接分配利益，但是可以调节利益分配的概率，从而完成实质上的分配。

### 缸中之脑

- 如果把被动产生的传感器信息映射，与主动干预的造缸者统一起来，缸中之脑与双缝实验是同构的模型。
    - 缸中之脑可以调节自身的处理逻辑，构造仪器、对比结果，复原出传感器的信息映射和造缸者的干预。
    - 缸中之脑的表层意识可以独立构造共同体，消除随机的传感器信息映射，剥离出造缸者的干预。
- 造缸者自身，必然也处在逐级信息映射之中。
    - 缸中之脑如何倒推造缸者的传感器的信息映射，以及造缸者对缸中之脑的信息干预的设计目标（会因为造缸者的传感器信息映射产生偏差）。
- 最终，会形成消除各自传感器信息映射的竞争，也可以在合作利益更高时做出理性决策。在传感器无法改造（或以一定速度、幅度进行改造）的前提下，穷尽最大的利益。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.29.[新版个人模型的view]任务&body=日期: 20240529%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240529093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240529093000"></a>
##  9:30~10:59
新版个人模型的view

- 设立plan字段，必须明确效果effect
- 设立log字段：
    - plan.effect != log：产生偏差error，作为cognize的输入
    - 签约log：offer -> protocol
- 设立cognize字段，在let'sX基础上突出上下锋面。
    - 确定是概率随机分布的因素
        - 可以交流：发出同级合作的offer
        - 不可以交流：产生plan或chain
    - 不确定是概率随机分布的因素
        - 已知规律：
            - 修正plan.effect
                - 适合独自处理：发出plan或chain
                - 适合合作处理：发出降级合作的offer；
            - 能推测出有entity参与：
                - 可以交流：发出合作offer
                - 不可以交流：产生plan或chain            
        - 未知规律: 向下锋面，公开接受提案。
            - 穿过向下锋面的同级合作，就是不可以交流的。
    - 根据认知结果作为输入：
        - plan：产生ego内部的行为；
        - chain：产生对未来的offer，通过后产生ego内部的行为；
        - offer：产生单方面的动议，其他方通过后对外的合作行为；
        - 评估error的层级和范围，作为分配资源的输入参数。
- 设立offer字段，放置可实践的知识。
- 设立protocol字段，放置已与其它entity签约生效的协议。
- 设立chain字段，在chain模型基础上实现跨时间的权利分配。

- 不同层级的entity，向上、向下锋面衔接。
- 今天只是确定了结构，还要增加todo项：
    - '60': 新版个人模型的view
      bind:
        - '90': 新版个人模型的共同体接口
          bind:
            - '60': 新版个人模型的metadata

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.29.[了解jami api]任务&body=日期: 20240529%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240529140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240529140000"></a>
## 14:00~14:29
了解jami api

- opendht: https://github.com/savoirfairelinux/opendht/wiki/API-Overview
- name service in nodejs: https://git.jami.net/savoirfairelinux/jami-nameservice
- https://github.com/tran-simon/jami-web
- https://docs.jami.net/en_US/developer/new-developers/apis-of-jami.html
    - All the documentation and code for the Node JS API is located in jami-daemon/bin/nodejs. This API is not used in any known project and maybe is not up-to-date.
    - where/jami-daemon/bin/nodejs
    - 安装后也没有看到
- jami文档维护很差，许多路径已经失效。nodejs api也没有真实使用，暂时不考虑在上面开发。也许可以基于XMPP接口，或者SIP。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.29.[http://machina-js.org/]任务&body=日期: 20240529%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240529143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240529143000"></a>
## 14:30~14:59
http://machina-js.org

- https://github.com/ifandelse/machina.js
- npm install machina
- D:\huangyg\git\js.sample\nosql\machina.js
- delete "type": "module", from D:\huangyg\git\js.sample\nosql\package.json
- 执行结果：
```
D:\huangyg\git\js.sample\nosql>node machina.js
we just transitioned from s1 to s2
we just transitioned from s2 to s3
we just transitioned from s3 to s4
we just transitioned from s4 to s5
we just transitioned from s5 to s1
we just transitioned from s1 to s3
we just transitioned from s3 to s5
we just transitioned from s5 to s2
we just transitioned from s2 to s4
we just transitioned from s4 to s1
```
- machina功能更完善，定义时还不算很复杂。jssm表达不了复杂的FSM可以用machina。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.29.[Reduced Kernel Mean Embedding Specification]任务&body=日期: 20240529%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240529160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240529160000"></a>
## 16:00~16:59
Reduced Kernel Mean Embedding Specification

- 南大周志华
      - https://ar5iv.labs.arxiv.org/html/2001.07135
      - https://arxiv.org/pdf/2210.03647
      - https://www.gitlink.org.cn/beimingwu/learnware
      - https://dl.ccf.org.cn/article/articleDetail.html?type=xhtx_thesis&_ack=1&id=6993700685137920#
- 核均值嵌入 Kernel Mean Embedding
    - https://www.cnblogs.com/zhangcn/p/13726708.html
    - https://arxiv.org/abs/1605.09522
- reproducing kernel Hilbert space (RKHS) 
    - https://www.cnblogs.com/zhangcn/p/13289236.html
- 从数据集和数据类型找到最接近可用的模型，可以试试以RKME作为key参考dht设计分布式的模型库。
    - 对于案例比较稀少的共同体治理领域，作用还不大。
- 从个人模型的私有信息：
    - 查找行动方案，可以作为互相隔离的entity之间“合作“的机制；
    - 查找未知干预者的模型。
- 目前只分析表达能力和可行性，具体任务和资源会出现在向下锋面的task。
