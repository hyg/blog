# 2025.07.14.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 14:00~15:09	learn: [量子物理的数学基础](#20250714140000)
- 16:00~16:59	ego: [整理js对象检索的代码](#20250714160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 926 | 12604 | 7095 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 200 | 2330 | 1365 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 241 | 1759 | 1830 |
| js | 1000 | 30 | 970 | 1650 |

---
waiting list:


- 30分钟时间片：
  - js的第4号事项：AI SDK
  - ego的第5号事项：entry的科目归并
  - learn的第5号事项：演化计算（Evolutionary Computation）和大模型结合的研判
  - js的第5号事项：LangChain.js

- 60分钟时间片：
  - learn的第1号事项：量子物理的数学基础
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：设计新的季度时间表
  - js的第1号事项：Vector Database in nodejs

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - ego的第2号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.14.[量子物理的数学基础]任务&body=日期: 2025.07.14.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250714.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250714140000"></a>
## 14:00 ~ 15:09
## learn: [量子物理的数学基础]

- 贝尔单态 Bell states
	- https://baike.baidu.com/item/%E8%B4%9D%E5%B0%94%E6%80%81/936308
	- √ https://www.cnblogs.com/zmzzzz/p/11063756.html
	- https://blog.csdn.net/m0_37622530/article/details/82991134
	- https://qubit.guide/5.7-bell-states
	- https://pennylane.ai/qml/glossary/what-are-bell-states

- 对不等式的违背，达到了xx个标准差。
	- https://www.quantumcas.ac.cn/2023/0515/c24874a602276/page.htm
	- https://www.thepaper.cn/newsDetail_forward_21877754
	
- 对易或不对易 Commutation relation
	- https://baike.baidu.com/item/%E5%AF%B9%E6%98%93%E7%9A%84%E7%AE%97%E6%B3%95/5518370
	- https://zhuanlan.zhihu.com/p/382891349
	- https://zhuanlan.zhihu.com/p/576498544 
		- 算符是指作用在一个函数上得出另一个函数的运算符号，在量子力学中，算符是对波函数进行某种数学运算的符号。
```
对易式: [A,B]=AB-BA
[A,BC]=ABC-BCA=B[A,C]+[A,B]C=BAC-BCA+ABC-BAC ...
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.14.[整理js对象检索的代码]任务&body=日期: 2025.07.14.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250714.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250714160000"></a>
## 16:00 ~ 16:59
## ego: [整理js对象检索的代码]

- 微调：js只使用原生功能，删去lodash引用。
- jora和js原生语法很接近了，可读性更好一点。有match匹配字符串日期，有group和sum。
- jsonpath有match，没有group和sum语法，有apply、function但是和直接js没区别。适合初步整理数据。
- jsonquery用match会报错，语法过于复杂，还没有找到group语法，好像有sum。
- 继续追加时间，争取一次选定长期使用。
