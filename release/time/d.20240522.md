# 2024.05.22.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版3，使用模版2的时间表。

<a id="index"></a>
- 07:45	[新版个人模型](#20240522074500)  
- 14:00	[重新设计PSMD自助、互助、委托合同](#20240522140000)  
- 16:00	[在util库进行单元测试，在实践中学习。](#20240522160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 12202 | 1073 | 2445 |
| PSMD | 7000 | 5851 | 1149 | 495 |
| learn | 1000 | 667 | 333 | 600 |
| ego | 3000 | 3099 | -99 | 780 |
| js | 1375 | 975 | 400 | 330 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：了解jami api
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - PSMD的第3号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - js的第3号事项：继续学习promise api

- 60分钟时间片：
  - learn的第1号事项：nosql
  - xuemen的第1号事项：整理kernel、ISU、JPU之间的关系，厘清概念。
  - js的第2号事项：学习 nodejs test框架
  - learn的第2号事项：开发YARRRML范例

- 90分钟时间片：
  - PSMD的第1号事项：PSMD新合同的view draft
  - learn的第3号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - ego的第1号事项：新版个人模型的view draft
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第4号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.22.[新版个人模型]任务&body=日期: 20240522%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240522074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240522074500"></a>
## 7:45~10:59
新版个人模型

- 在前面几天的基础上：
    - 认识自己，解释自己的思想和行为，是最底层的；
        - 如果没有这个特征，就是thing
    - spilit、joint比ego更深层，raw模型也有这些接口，但是不能解释自己的行为、容易被植入、随时会毁约；
    - 解释自己的行为，审议别人解释他自己的行为，是两项自定义标准，可以分别定义，也可以统一定义，但是显性的定义；
    - 思想和行为都有层级，解释自己的行为，也有更深层解释“解释自己行为的行为”，如此类推；
    - ego是raw创造并解释的，依然是脆弱不稳定的模型，ego创立并解释的spilit然后joint，然后由更稳定的joint deamon解释；

- 休整时间再检查：个人和共同体、智能设备的共同基础模型
- 共同体
    - 共同体认识自己，解释自己的决策和行为；
    - 共同体定义spilit、joint接口；
    - 共同体有层级，多个主体可以joint成有层级的共同体；
    - 共同体也可以显性地设立有创造vat职权的内部部门。
- 智能设备
    - 智能设备认识自己，解释自己的决策和行为；
    - 智能设备deploy自己（的一部分），与其它设备合并（认知自己的部分）；
    - 智能设备有层级；
    - 智能设备创造容器，在其中观察自己的部署。

- thing：有输入输出
    - entity：认识自我，解释自己的思想和行为
        - raw：contract（protocol）、spilit、joint
            - ego：创造vat，部署经过解释的行为，进一步认识自我或交易。

- 追加todo项：
  - '195': 新版个人模型的view draft
      bind:
        - '195': 新版个人模型的metadata
        - '90': PSMD新合同的view draft
          bind:
            - '60': PSMD新合同的metadata

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.22.[重新设计PSMD自助、互助、委托合同]任务&body=日期: 20240522%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240522140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240522140000"></a>
## 14:00~15:29
重新设计PSMD自助、互助、委托合同

- 在新版个人模型基础上设计
- thing：有输入输出
    - entity：认识自我，解释自己的思想和行为
        - 合同一：
            - 提供入口，自行浏览。
                - 基础扎实的介绍：protocol、spilit、joint
            - 协助组织语言，与身边亲友交流。
            - 协助组织数据，向陌生人发布。
        - raw：contract（protocol）、spilit、joint
            - 合同二
                - 审议：protocol、spilit、joint接口
                    - 引入其它COM的个人模型接口
                    - 基础扎实的介绍vat概念
                - 委托起草动议
                - 委托主持议事
                    - 筹备期boot
                    - 初创期deploy
            - ego：创造vat，部署经过解释的行为，进一步认识自我或交易。
                - 合同三
                    - 集结gathering
                    - 互审

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.22.[在util库进行单元测试，在实践中学习。]任务&body=日期: 20240522%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240522160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240522160000"></a>
## 16:00~16:59
在util库进行单元测试，在实践中学习。

- https://yunnysunny.github.io/nodebook/08_node_unit_test.html#_8-1-%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95
- D:\huangyg\git\ego\src\util.test.js
- 执行结果：
```
D:\huangyg\git\ego\src>node util.test.js
✔ make meta file id (1.3412ms)
✔ get today str (0.7357ms)
ℹ tests 2
ℹ suites 0
ℹ pass 2
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 9.1341
```

- 登记45分钟。余下时间补前面任务。
