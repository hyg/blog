# 2025.07.16.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~17:59	learn: [ai工具对比](#20250716140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1392 | 12138 | 7200 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 200 | 2330 | 1365 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 587 | 1413 | 1905 |
| js | 1000 | 150 | 850 | 1680 |

---
waiting list:


- 30分钟时间片：
  - js的第2号事项：LangChain.js
  - learn的第3号事项：演化计算（Evolutionary Computation）和大模型结合的研判
  - ego的第5号事项：entry的科目归并
  - js的第6号事项：learn brain.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第1号事项：佯谬及二次革命
  - raw的第1号事项：设计新的季度时间表
  - js的第1号事项：ai-sdk + moonshot

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - ego的第2号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - learn的第5号事项：量子物理的数学基础

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.16.[ai工具对比]任务&body=日期: 2025.07.16.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250716.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250716140000"></a>
## 14:00 ~ 17:59
## learn: [AI工具对比]

### 数据整理

- 同学讨论到数据幻觉有关的问题。ai整理后的数据序号和内容混乱了，而且不仅是相邻的内容（序号在前、在后误读），而是相距很远的无关问题。
	- 这之前先用两个提问整理数据：“请把以下数据转化为json格式：......”
- 数据以非结构化的文本方式呈现，要以简短指令去处理。如果和大段自然语言混在一起，很容易被当作文本处理，进而产生数据幻觉。
- 生成的原生js代码基本能直接用，jora的有语法错误，jsonpath总是被改为jsonpath-plus（以后倒是可以试试）。

### PSMD应用

- 测试提问：
	- 请按照条款 6d206b54（ https://xuemen.github.io/PSMD/view/term.6d206b54.html ）整理《中华人民共和国公司法 》 （ https://www.gov.cn/yaowen/liebiao/202312/content_6923395.htm ）的所有内容。
	- 请按照条款 6d206b54（ https://xuemen.github.io/PSMD/view/term.6d206b54.html  ）分别整理《中华人民共和国立法法 》 （ https://www.gov.cn/xinwen/2023-03/14/content_5746569.htm ）、《中国共产党党章》（ https://www.12371.cn/special/zggcdzc/zggcdzcqw/  ）的所有内容。

- 可以准确理解条款6d206b54，能在形式上能大概划分法规和人员层次的。回答内容都比较含糊，划分不到条款甚至短句。
	- kimi	
	- 豆包
- 只是复述法规内容的，对条款6d206b54基本没有使用。
	- deepseek
	- 在问
	- 智谱清言
	- 紫东太初
	- 讯飞星火
	- 密塔（复述并不准确）
- 只是复述条款6d206b54内容，但没有准确应用的。
	- 元宝：划分并不准确。
	- 通义

- 没有反应的。
	- mistral
	- 纳米：https://bot.n.cn
