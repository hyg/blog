# 2024.06.04.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45	[新版模型的draft](#20240604074500)  
- 09:30	[entity和com的接口](#20240604093000)  
- 14:00	[设计ego.mars22.com 发布内容。](#20240604140000)  
- 14:30	[域名和接口整理](#20240604143000)  
- 16:00	[在season metadata中实现浮动时间表，修改日计划功能。](#20240604160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 15975 | 14907 | 1068 | 2490 |
| PSMD | 7000 | 6726 | 274 | 690 |
| learn | 1000 | 1107 | -107 | 870 |
| ego | 4500 | 4254 | 246 | 330 |
| js | 1375 | 1110 | 265 | 390 |
| xuemen | 1500 | 1236 | 264 | 180 |
| raw | 600 | 444 | 156 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：同npm发布包
  - xuemen的第1号事项：新版数字证书CA
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - learn的第1号事项：寻找可编程的,去中心化的信息发布方式

- 60分钟时间片：
  - PSMD的第3号事项：设计条款的可执行机制
  - xuemen的第3号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - ego的第3号事项：用js代码完成日小结后的git操作。
  - learn的第3号事项：熟悉知识库语法

- 90分钟时间片：
  - ego的第1号事项：/release/entry.html 读取 markdown和metadata 并显示。
  - PSMD的第2号事项：entify、ego的共同体接口
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第2号事项：实现2024.6.4.16:00draft的方案三

- 195分钟时间片：
  - PSMD的第1号事项：entity、ego的draft、metadata
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第10号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.04.[新版模型的draft]任务&body=日期: 20240604%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240604074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240604074500"></a>
## 7:45~8:44
新版模型的draft

- 继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.04.[entity和com的接口]任务&body=日期: 20240604%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240604093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240604093000"></a>
##  9:30~10:59
entity和com的接口

- 未完成。继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.04.[设计ego.mars22.com 发布内容。]任务&body=日期: 20240604%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240604140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240604140000"></a>
## 14:00~14:29
设计ego.mars22.com 发布内容。

- 分为接口interface、认知cognize、协议protocol、资源resource四部分

- 接口
    - 昨天的小结
    - 今天的计划 or 小结
    - 明天绑定各种模版的计划
    - 要约入口
    - 联系方式

- 认知
    - 偏差列表
        - raw
        - 层级分配
    - 知识库
    - 锋面
        - 上
        - 下
    - 要约

- 协议
    - 已生效协议入口
        - 以vat划分层级
    - 已部署共同体入口
    - 事件列表
        - 汇总
        - 按协议分
    - todo列表
        - 按协议分
        - 按时间长度分

- 资源
    - 时间
        - 季度统计
            - 总计和分任务的分配、已使用、已分配未使用、已计划的时间
    - 记账单位
    - 其它资源

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.04.[域名和接口整理]任务&body=日期: 20240604%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240604143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240604143000"></a>
## 14:30~14:59
域名和接口整理

- mars22.com：个人领域的数据
    - ego.mars22.com
        - 资源分配
    - today.mars22.com
        - 近几天工作计划和小结
        - 季度统计
        - waitinglist
    - protocol.mars22.com
        - raw
        - tbd.
    - cognize.mars22.com
        - 偏差error
        - 分级meta & vat
        - 知识
        - 要约
    - rest.mars22.com
- xuemen.com
    - www.xuemen.com
    - kernel.xuemen.com：三会和经理
    - isu.xuemen.com：国内法接口内侧
    - jpu.xuemen.com：联合产品部
- xuemen.cn:：国内客户与合作方
- xuemen.com.cn：国内法接口

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.04.[在season metadata中实现浮动时间表，修改日计划功能。]任务&body=日期: 20240604%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240604160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240604160000"></a>
## 16:00~16:59
在season metadata中实现浮动时间表，修改日计划功能。

- 方案一：代码版的时间表模版。
- 方案二：yaml版的浮动时间语法。
- 方案三：身体状态+自然醒时间 =》固定时间表
    - 身体状态由人工判断，由代码总结各参数与人工判断的关系
    - 最终转到代码判断，人工可以干预
- 选择方案三，追加todo项：
    - '90': 实现2024.6.4.16:00draft的方案三
