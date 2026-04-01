# 2026.04.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1e)。

<a id="index"></a>
- 13:27~19:36	ego: [整理edgeone、cnb、gitee的发布通道](#20260401132700)
- 19:00~19:59	check: [零散笔记](#20260401190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 6810 |
| PSMD | 4000 | 0 | 4000 | 570 |
| ego | 2530 | 0 | 2530 | 885 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 90 |
| learn | 2000 | 0 | 2000 | 4245 |
| js | 1000 | 0 | 1000 | 1020 |

---
waiting list:


- 30分钟时间片：
  - js的第3号事项：新版raw.js的子命令-营养成分排序
  - learn的第8号事项：XACML（存量）
  - learn的第9号事项：SHACL（RDF/图谱场景）
  - learn的第10号事项：Esper EPL

- 60分钟时间片：
  - learn的第5号事项：The Open Quantum Safe (OQS) project
  - js的第5号事项：lint
  - ego的第6号事项：eventemitter sample
  - learn的第6号事项：CometAPI

- 90分钟时间片：
  - learn的第1号事项：Polygon/Arbitrum
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - js的第1号事项：openpgp v6.1.1.
  - ego的第2号事项：微观与宏观衔接的几篇论文

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第21号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.01.[无名任务]任务&body=日期: 2026.04.01.%0D%0A序号: 4%0D%0A手稿:../../draft/2026/20260401.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260401132700"></a>
## 13:27 ~ 19:36
## ego: [整理edgeone、cnb、gitee的发布通道]

- https://blogrepo.edgeone.cool/release/time/d.20260401.md
- 二级域名指向日志入口：阿里云DNS控制台，添加记录，记录类型：显性URL，记录值301：https://blogrepo.edgeone.cool/release/entry.edgeone.html
	- 以后再修改为更友好的界面。
- 创建密钥仓库 https://cnb.cool/mars22/env
	- envs.yml 保存edgeone的 API Token
- 在ego根目录创建.cnb.yml ，让每次push后deploy到edgeone page。
	- edgeone pages deploy [<directoryOrZip>] [-n <projectName>] [-e <env>]
	- huangyg -> blog
	- mars22 -> ego
	- 也需要实名认证。
- 完成edgeone和gitee的实名认证，开通page。

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.01.[无名任务]任务&body=日期: 2026.04.01.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260401.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260401190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

---
月度报告
三月份

日平均值，和二月份、去年三月份对比:
热量1979.85kcal， -28.86、+74.36kcal；
蛋白质83.46g， -7.58、+0.11g；
脂肪65.24g， +2.92、+4.52g；
碳水化合物261.38g， +0.31、+10.61g；
钠2033.18mg， +37.71、+330.80mg；
膳食纤维35.43g， +1.25、+3.00g；
钙1123.37mg， +61.96、+10.01mg；
水2148.56ml， -54.22、+208.66ml；

脂肪供能29.66% （AMDR：20~30%）
碳水化合物供能52.81% （AMDR：50~65%）
蛋白质供能16.86% （AMDR：10~20%）
膳食纤维供能3.58%

---
季度报告
一季度

日平均值，和四季度、去年一季度对比:
热量2048.03kcal， +135.82、+76.83kcal；
蛋白质90.74g， +3.17、-0.14g；
脂肪64.76g， +5.75、+5.27g；
碳水化合物267.75g， +16.00、+2.56g；
钠2056.60mg， -61.44、+170.43mg；
膳食纤维35.01g， -0.09、+3.79g；
钙1093.65mg， +32.81、-43.26mg；
水2154.10ml， +24.22、-17.47ml；

脂肪供能28.46% （AMDR：20~30%）
碳水化合物供能52.29% （AMDR：50~65%）
蛋白质供能17.72% （AMDR：10~20%）
膳食纤维供能3.42%

---

- 每周有两天吃零食，脂肪就逼近AMDR上限了。
- 热量控制得比前几个月好，这个冬季过得很平稳。
- 正式升级，准备按顺序在PSMD、P2club、it coop使用。
- 开始清理沉积的事项。
