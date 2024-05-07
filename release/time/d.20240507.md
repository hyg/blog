# 2024.05.07.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[学习测试方法和工具](#20240507074500)  
- 09:30	[根据新的COM、deploy、COD metadata，编辑出范例。](#20240507093000)  
- 14:00	[学习 github actions和 workflows 的yaml语法](#20240507140000)  
- 14:30	[设计DRI metadata](#20240507143000)  
- 16:00	[在node ego over时创建次日的计划，内容参考node ego plan输出。](#20240507160000)  

---
season stat:

| task | alloc | sold | hold |
| --- | --- | --- | --- |
| total | 13275 | 7828 | 5447 |
| PSMD | 7000 | 4236 | 2764 |
| learn | 1000 | 342 | 658 |
| ego | 3000 | 2054 | 946 |
| js | 1375 | 405 | 970 |
| xuemen | 600 | 581 | 19 |
| raw | 300 | 180 | 120 |
| infra | 0 | 30 | -30 |

---

waiting list:


- 30分钟时间片：
  - js的第2号事项：学习AMD规范，如果适用就开发范例
  - ego的第2号事项：整理废弃git库，包括本地和远程。
  - learn的第2号事项：YARRRML
  - PSMD的第3号事项：了解Rules as Code (RaC)，准备在metadata中增加code字段。

- 60分钟时间片：
  - PSMD的第1号事项：使用1609模型实际编写COM、deploy、COD的metadata
  - js的第1号事项：学习promise对象和async/await
  - ego的第1号事项：在season metadata中实现浮动时间表，修改日计划功能。
  - learn的第1号事项：github的actions,workflow,job脚本语法

- 90分钟时间片：
  - xuemen的第1号事项：整理章程实施细则的metedata
  - PSMD的第2号事项：term metadata生成按修订层级排版的COM metadata。
  - xuemen的第3号事项：整理S2状态下基本管理制度的metedata
  - learn的第7号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - xuemen的第2号事项：整理S2状态下基本管理制度
  - ego的第3号事项：在整理近期手稿之后，修订个人模型。
  - PSMD的第7号事项：term + COM matedata -> deploy metadata -> deploy view

---

[top](#top) | [index](#index)
<a id="20240507074500"></a>
## 7:45~8:44
学习测试方法和工具

- https://juejin.cn/post/6907555445628469255
- https://nodejs.cn/api/test.html
- https://zhuanlan.zhihu.com/p/26034302
- 目前的单元设计得太大，输出输入数据太大太复杂，不利于单元测试。实践的话从jest入手
    - https://www.jestjs.cn/
    - https://segmentfault.com/a/1190000040539268
- 前端测试有必要，如果实践的话从testcafe入手。
    - https://testcafe.io/

```
【阿里云】尊敬的hi10386515@aliyun.com：日常工作中开发者常见的诉求和痛点，比如单元测试编写比较费时间；接手新的代码库，一些祖传代码理解成本高；排查问题查资料要跳转到浏览器，并且很难找到合适的答案。推荐一款 AI 编程工具通义灵码，下载量超 350 万。一个新项目如何快速启动，如何维护遗留系统代码库？点击下方链接，立即体验！https://t.aliyun.com/U/nQHLZC 拒收请回复R
```

在learn task下追加两个todo项：
    - '60': 在util库进行单元测试，在实践中学习。
    - '30': 寻找测试做得比较好的开源软件，作为学习单元划分和测试的实例。
---

[top](#top) | [index](#index)
<a id="20240507093000"></a>
##  9:30~10:59
根据新的COM、deploy、COD metadata，编辑范例。

- 根据昨天  draft\2024\05\20240506140000.md 修订的章程实施细则，重新整理COD使用的term。

董事部分metadata：
```
D:\huangyg\git\PSMD\src>node term commit
......
commit term.1.yaml
产品部(IPU:Inner Product Unit) a419e125
...
commit term.11.yaml
学门科技 e6f0caec
commit term.2.yaml
内务部(ISU:Inner Service Unit) 0719e045
commit term.3.yaml
经理在S2的保底责任 c6e8bb3f
commit term.4.yaml
经理在S2的汇报 4d2e92b6
commit term.5.yaml
代码的调阅权限 41e708f1
commit term.6.yaml
章程实施细则-董事会决议 44f7a3ac
../data/term.a419e125.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.0719e045.yaml文件已更新。../data/term.2.yaml可以删除。
../data/term.c6e8bb3f.yaml文件已更新。../data/term.3.yaml可以删除。
../data/term.4d2e92b6.yaml文件已更新。../data/term.4.yaml可以删除。
../data/term.41e708f1.yaml文件已更新。../data/term.5.yaml可以删除。
../data/term.44f7a3ac.yaml文件已更新。../data/term.6.yaml可以删除。
...
../data/term.e6f0caec.yaml文件已更新。../data/term.11.yaml可以删除。
...

D:\huangyg\git\PSMD\src>node term term 44f7a3ac
enter maketermtext:44f7a3ac     prefix:
enter maketermtext:a419e125     prefix:1.
enter maketermtext:0719e045     prefix:2.
enter maketermtext:c6e8bb3f     prefix:3.
enter maketermtext:4d2e92b6     prefix:4.
enter maketermtext:41e708f1     prefix:5.
../view/term.44f7a3ac.md文件更新，内容如下:
条款 44f7a3ac 正文:
1. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）、S3（稳定或缩减状态）状态下：公司设置产品部(IPU:Inner Product Unit)，负责参与JPU（Joint Product Unit）。
2. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）、S3（稳定或缩减状态）状态下：公司设置内务部(ISU:Inner Service Unit)，委托内务部(ISU:Inner Service Unit)管理公司的资产（办公室、服务器及域名、人民币、内部记账单位、知识产权）。
3. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）状态下：无人承担的任务均由经理承担。当这种情形发生时，按300%计算报酬。
4. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）状态下：经理每个月向监事、董事会书面汇报工作。
5. 本条款按照章程.第十五条.（八）.条款修订。在S3（稳定或缩减状态）状态下：董事、监事可以调阅规章制度、数学模型的代码实现。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.44f7a3ac.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 44f7a3ac</h3><hr/><p>正文:</p><p>1. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）、S3（稳定或缩减状态）状态下：公司设置产品部(IPU:Inner Product Unit)，负责参与JPU（Joint Product Unit）。<br/>
2. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）、S3（稳定或缩减状态）状态下：公司设置内务部(ISU:Inner Service Unit)，委托内务部(ISU:Inner Service Unit)管理公司的资产（办公室、服务器及域名、人民币、内部记账单位、知识产权）。<br/>
3. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）状态下：无人承担的任务均由经理承担。当这种情形发生时，按300%计算报酬。<br/>
4. 本条款按照章程.第十五条.（八）.条款修订。在S2（增长状态）状态下：经理每个月向监事、董事会书面汇报工作。<br/>
5. 本条款按照章程.第十五条.（八）.条款修订。在S3（稳定或缩减状态）状态下：董事、监事可以调阅规章制度、数学模型的代码实现。<br/>
</p><hr/></body></html>
```

- 不少时间用在条款的微小修改上，没有能专注完成metadata的范例（哪怕是假内容的条款）。增加todo项：
    - '60': 使用1609模型实际编写COM、deploy、COD的metadata
      readme: 重点在于验证metadata的结构，如果时间不足可以使用虚构内容。
- 新的条款架构对规章的要求提高了不少，需要充足时间去仔细推敲。追加几个todo项：
    - '90': 整理章程实施细则的metedata
    - '195': 整理S2状态下基本管理制度
    - '90': 整理S2状态下基本管理制度的metedata
---

[top](#top) | [index](#index)
<a id="20240507140000"></a>
## 14:00~14:29
学习 github actions和 workflows 的yaml语法

学习了 https://docs.github.com/zh/actions/creating-actions/metadata-syntax-for-github-actions 从name到steps字段的语法。

追加60分钟时间片：
    - '60': github的actions,workflow,job脚本语法
      readme: |
        - https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions
        - https://docs.github.com/zh/actions/creating-actions/metadata-syntax-for-github-actions
        - https://docs.github.com/zh/actions/learn-github-actions/finding-and-customizing-actions

---

[top](#top) | [index](#index)
<a id="20240507143000"></a>
## 14:30~14:59
设计DRI metadata

参考：https://zhuanlan.zhihu.com/p/670956634  

- DRIs（dietary reference intakes）的意思是“膳食营养素参考摄入量”。包括：
    - RNI（Recommended Nutrient Intake） 推荐摄入量
    - EAR（Estimated Average Requirement）平均需要量
    - AI（Adequate Intake）适宜摄入量
    - UL（Tolerated Upper Intake Lever）可耐受最高摄入量
    - AMDR 宏量营养素可接受范围
    - PI—NCD 预防慢性传染性疾病的建议摄入量
    - SPL 特定建议值
-NRV是英文nutrient reference values
    - 以某套DRIs为默认值。
    - 对部分营养成分设定具体摄入目标，覆盖默认值。

DRIs.name.yaml
```
name:
gender:
age:
weight:
element:
  热量:
    RNI:
    EAR:
    AI:
    UL:
    AMDRmin:
    AMDRmax:
    PI_NCD:
    SPL:
    unit:
  蛋白质:
    ...
```

NRV.name.yaml
```
name:
DRIs:
element:
  热量:
    amount:
    unit:
  蛋白质:
    amount:
    unit:
```
---

[top](#top) | [index](#index)
<a id="20240507160000"></a>
## 16:00~16:59
在node ego over时创建次日的计划，内容参考node ego plan输出。

- 在 finish.js 增加 maketomorowinfo()

执行结果：
```
D:\huangyg\git\ego\src>node ego day over
......
dayinfo file name:
../../blog/release/time/d.20240508.md
content:
# 2024.05.08.

根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，每天早起根据身心状况绑定模版。

---
如果绑定模版1可能安排以下任务：

- 07:45 学习promise对象和async/await -js[0]
- 09:30 term metadata生成按修订层级排版的COM metadata。 -PSMD[0]
- 14:00 了解Rules as Code (RaC)，准备在metadata中增加code字段。 -PSMD[1]
- 14:30 学习AMD规范，如果适用就开发范例 -js[1]
- 16:00 在season metadata中实现浮动时间表，修改日计划功能。 -ego[0]

---
如果绑定模版2可能安排以下任务：

- 07:45 在整理近期手稿之后，修订个人模型。 -ego[2]
- 14:00 term metadata生成按修订层级排版的COM metadata。 -PSMD[0]
- 16:00 学习promise对象和async/await -js[0]

---
对任务排序的建议可以联系<huangyg@mrs22.com>，日计划确定后会在本页面发布。
```