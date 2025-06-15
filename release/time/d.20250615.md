# 2025.06.15.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版2(2b)。

<a id="index"></a>
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250615160000)
- 10:00~11:29	ego: [新版基础模型](#20250615100000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7576 | 5954 | 8625 |
| PSMD | 4000 | 1335 | 2665 | 1470 |
| ego | 2530 | 1862 | 668 | 1680 |
| infra | 2000 | 955 | 1045 | 210 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1784 | 216 | 2190 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：佯谬及二次革命
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第2号事项：设计三季度时间表
  - learn的第2号事项：量子物理的数学基础
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - ego的第1号事项：基于真实数据标志财务报表
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.

- 195分钟时间片：
  - raw的第1号事项：整理 resource.md
  - PSMD的第2号事项：exsamples
  - PSMD的第3号事项：子1609:基于公司、合同
  - xuemen的第3号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.15.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.06.15.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250615.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250615160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- 试试把cjs的action也放在metadata和code以外。
```
D:\huangyg\git\js.sample\jsterms>node main
enter e1. state= s0
r0: action a1.
enter e2. state= s1
r0: action a1.
r1: action a0.
enter e2. state= s2
r0: action a0.
r1: action a1.
enter e2. state= s0
r0: action a0.
r1: action a2.
enter e10. state= s10
r10: action a11.
enter e10. state= s11
r10: action a10.
r11: action a11.
enter e2. state= s1
r0: action a1.
r1: action a0.
```

- 下一步把maketext、makereadme、makecode集中在一个基础模块中。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.15.[新版基础模型]任务&body=日期: 2025.06.15.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250615.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250615100000"></a>
## 10:00 ~ 11:29
## ego: [新版基础模型]

- PSMD共用的新交流接口：【1. 因为某原因】某人或某企业【2.出现认知偏差】，为了消除偏差采取某【措施3.】。
- 【2.出现认知偏差】：
	- 【2.1.可以夸大或贬低某事】
	- 【2.2.选择性遗忘某事】
	- ...
- 【措施3.】：
	-【3.1. 向内消除某原因】
	-【3.2. 借助外力制止类似的夸大或贬低】】。
	- ...
- 按照这个范式，在交流中可以产生以下委托：
	- 自由交流，分析出某人或某企业的偏执（【2.】及其分型）;
	- 已知【2.】，观察委托者能否自己寻找内在原因【1.】；
	- 已知【2.】，设计【3.】及其分型。
- 整理案例，脱敏后形成【3.】及其分型的模型库。以开源协议公布。
- 入门目录级标准模型也按这个范式调整。
