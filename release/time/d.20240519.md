# 2024.05.19.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[自动接收恢复邮件。](#20240519074500)  
- 09:30	[整理近期手稿](#20240519093000)  
- 14:00	[寻找测试做得比较好的开源软件，作为学习单元划分和测试的实例。](#20240519140000)  
- 14:30	[PSMD委托合同的metadata](#20240519143000)  
- 16:00	[根据过去数据给出15天内的建议。](#20240519160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 13275 | 11152 | 2123 | 2730 |
| PSMD | 7000 | 5581 | 1419 | 525 |
| learn | 1000 | 622 | 378 | 660 |
| ego | 3000 | 2424 | 576 | 915 |
| js | 1375 | 915 | 460 | 390 |
| xuemen | 600 | 1136 | -536 | 210 |
| raw | 300 | 444 | -144 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - js的第2号事项：了解jami api
  - PSMD的第3号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。
  - PSMD的第4号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。

- 60分钟时间片：
  - PSMD的第1号事项：重新设计PSMD自助、互助、委托合同
  - ego的第1号事项：整理近期手稿。
  - js的第1号事项：用EmailEngine搭建邮件服务器
  - learn的第1号事项：在util库进行单元测试，在实践中学习。

- 90分钟时间片：
  - ego的第3号事项：代码实现，有互动的总结功能。
  - learn的第4号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第5号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.19.[自动接收恢复邮件。]任务&body=日期: 20240519%0D%0A序号: 0%0D%0A手稿:../../draft/2024/05/20240519074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240519074500"></a>
## 7:45~8:44
自动接收恢复邮件。

- 创建测试邮箱账号。在postmaster设置允许外域收发：smtp、pop3、imap。
- 保密信息都写到config.js里
- npm install imap
- 创建.gitignore 文件
```
node_modules/
/config.js
/term.*.yaml
```
- https://www.npmjs.com/package/imap
- npm install nodemailer
- 用回mailparser保存附件，再用yamljs打开，可以正确回复。
- 发送邮件成功。
```
D:\huangyg\git\js.sample\IM>node imap
打开邮箱
1完成
所有邮件抓取完成!
邮件头信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
邮件主题: test and attachment
发件人: "黄勇刚" <huangyg@xuemen.com>
收件人: test@mars22.com
邮件附件信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
附件名称:term.2e4f11cb.yaml
邮件内容信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
邮件内容: undefined
Email sent: 250 Data Ok: queued as freedom
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.19.[整理近期手稿]任务&body=日期: 20240519%0D%0A序号: 1%0D%0A手稿:../../draft/2024/05/20240519093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240519093000"></a>
##  9:30~10:59
整理近期手稿

### raw
#### 1
结合vat模型整理raw

- vat2为vat1提供world model；
- vat n为vat n-1提供world model；
- “真实世界”的输入从底层vat开始，一路向浅层vat和意识传递。输出反方向。

##### 评

两个缸中之脑交流怎么破缸，可以放在这个模型下检验一下。

#### 2
个人领域信息管理的两个维度

- 维度1: data -> knowledge -> view
- 维度2: text -> law -> code
- raw模型把资源time分配到各项目，产生三种data：
    - (text,data): text.origin
        - -> (text,knowledge): metadata or schema ,draft
            - -> (law,data): law.origin
            - -> (law,knowledge): lib or document
                - -> (law,view): json or yaml paper 要约生效
                    - -> (code,view): html+js or infra/tools
                - ->  (code,data): js.sample
        - ->  (code,data): js.sample
    - (law,data): law.origin
        - ->  (law,knowledge): lib or document
    - (code,data): js.sample
        - -> (code,knowledge): nodejs
            - -> (code,view): html+js or infra/tools
    - all git repos -> raw/time

##### 评

- 规划了时间资源向信息资产转化的路径
- 根据两个维度划分了信息资产的类别
- 目前实际情况比较简单：
    - draft -> PSMD / ego git repos : /data -> src -> view
- 有意识无意识的边界，在data-knowldge之间
- vat和entity的边界，在schema、lib - paper之间

### ego
#### 1

- container中是D
- event输入container，输出action
- event输入到contaiiner中的mux，各D的action经过filter成为container的action
- model -deploy-> deployment
    - model : fsm or event listener
- deployment -modeling-> model
- deployment - learn-> deploymenr
- deployment -split->deployments
    - deployments -joint-> dedployment
    - joint: 
        - person union
        - protocol unoin
        - product union
        - project union
- deployment -training-> D
- Token -enable-> deployment

##### 评

- 忘记了D是什么，其他部分都很熟悉。

#### 2

- site is container
- raw@site -grow-> new-being@container
    - filter
    - env
    - tool
        - sample -> law -> method -> tool
        - law -> protocol
    - reviewer

##### 评

- 无意识的raw存在于肉体site中
- raw成长为有意识的new being（entity），可以不属于container中。
- container具体由一组元素定义。

#### 3 

- raw 向container部署new being有三种接口
    - grow
    - joint
    - spilit
- 在升级或部署期间，event输入和action输出是持续的。
- joint ->3P
    - project
    - product
    - protocol
- model + deploy -> cod -output->3P
- protocol -> model + deploy
- joint -> model + deploy
- 3P -> raw

##### 评

- 前半部分raw部署newbing的三种接口，扩展了上一张手稿。
- 后半部分的含义不是很清楚。
- 3P扩展了P1、P2俱乐部的定义。

#### 4

- model -deploy-> deployment@container
- event -> node@container -> ego + deployments -> action
- ego <-互动,joint-> deployments

追加连续的整理todo项，可以整理ego以外的手稿：
    - '60': 整理近期手稿。
      bind:
        - '60': 整理近期手稿。
          bind:
            - '60': 整理近期手稿。
              bind:
                - '60': 整理近期手稿。
                  bind:
                    - '195': 在整理近期手稿之后，修订个人模型。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.19.[寻找测试做得比较好的开源软件，作为学习单元划分和测试的实例。]任务&body=日期: 20240519%0D%0A序号: 2%0D%0A手稿:../../draft/2024/05/20240519140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240519140000"></a>
## 14:00~14:29
寻找测试做得比较好的开源软件，作为学习单元划分和测试的实例。

- https://github.com/Vanessa219/vditor
    - https://nodejs.cn/api/test.html
- https://github.com/markedjs/marked
    - 也是nodejs自带的 test

就选这两个范例：
    - '60': 学习 nodejs test框架
      readme: |
        - https://github.com/Vanessa219/vditor
            - https://nodejs.cn/api/test.html
        - https://github.com/markedjs/marked
        bind:
          - '90': 实际编写自己的测试范例

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.19.[PSMD委托合同的metadata]任务&body=日期: 20240519%0D%0A序号: 3%0D%0A手稿:../../draft/2024/05/20240519143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240519143000"></a>
## 14:30~14:59
PSMD委托合同的metadata

- 旧合同：https://github.com/xuemen/PSMD/blob/master/%E5%B7%A5%E4%BD%9C%E8%AE%A1%E5%88%92%E5%8F%8A%E9%A2%84%E7%AE%97%E6%96%B9%E6%A1%88.md
- 自助、互助、委托三种模式
- 自助完全开放、无前提、无考核、免费
- 互助有前提、有考核、无收支
    - 已经穷尽自助模式下方法和工具
    - 自动触发的互审合同
- 委托有前提、有考核、有收支
    - 受托的工作成果转化为自助、互助的工具
    - 委托合同
- 新合同
    - 无意识行为的识别和分析
    - 无意识行为转化为有意识行为的范例
    - 有意识行为的分立、合并
- 个人委托：新合同
- 共同体委托：新合同+
    - 成员行为的分立、合并

- 自动化服务
    - 个人尽量使用自动化服务
    - 共同体尽量在同行业范围内搭建自动服务
    - 建立档案和收入模式
- 人工服务
    - 共同体在每个行业的前几个委托
    - 建模、部署和金融功能结合

- 追加todo项：
    - '60': 重新设计PSMD自助、互助、委托合同
      readme: |
        - 20240519 14:30 draft
      bind:
        - PSMD新合同的metadata

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.05.19.[根据过去数据给出15天内的建议。]任务&body=日期: 20240519%0D%0A序号: 4%0D%0A手稿:../../draft/2024/05/20240519160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240519160000"></a>
## 16:00~16:59
根据过去数据给出15天内的建议。

- 增加新参数 plan mode: "node raw plan 15"
- 新函数 function makeplan(long) ，列出过去各年同一时间段最常吃的食材排序。
- 执行结果：
```
D:\huangyg\git\raw>node raw plan 10
makeplan() > history: 20230520 ~ 20230530
血麦片 24.05 21
低钠盐 1.31 21
花青素杂粮 19.62 13
脱脂奶粉 11.96 13
黑青稞 20.83 12
灰枣 26.71 12
奶粉 16.25 12
绿豆 10 11
亚麻籽 5 11
麦胚芽 6 11
大米 51.82 11
小分子肽粉 3 10
枸杞 5 9
百香果 70.28 9
胡柚 221.38 8
卤水豆腐 71.44 8
杏鲍菇 97.79 7
西兰花 119.57 7
鸡蛋 41.93 7
鲜味王 0.55 6
油菜 131 5
蛋饺 54.3 5
娃娃菜 151.5 5
油 1 5
橙 165 4
可可粉 4 4
后腿腊肉 21.75 4
怀山药赤小豆薏米粉 30.75 4
里脊 47.63 4
中食达照烧鸡腿排 110.5 3
荞麦面 74.67 3
方便面 62.67 3
黄瓜 212.17 3
快菜 152.67 3
生菜 53.25 2
菊粉 9 2
菜心 170 2
小白菜 191.75 2
木耳 12.5 2
土豆 166.25 2
...
makeplan() > history: 20150520 ~ 20150530
麦胚芽 20 11
杂粮粥 67.78 9
海鸭蛋 60 8
猪肉 81.25 8
玉米 167.14 7
豇豆 150 6
番石榴 93.33 6
馒头 63.33 6
绿豆 24 5
麦片 52.5 4
奶粉 28 4
包子（猪肉白菜） 113.33 3
西兰花 166.67 3
梅花肉 87.5 2
南瓜 205 2
包子（肉三鲜） 150 2
香蕉 225 2
白菜 150 2
西瓜 650 2
圣女果 120 1
米饭 75 1
```
