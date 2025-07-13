# 2025.07.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:29	learn: [cursor rules](#20250713140000)
- 14:30~15:14	learn: [真随机数发生器](#20250713143000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 796 | 12734 | 7065 |
| PSMD | 4000 | 90 | 3910 | 1110 |
| ego | 2530 | 140 | 2390 | 1335 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 171 | 1829 | 1830 |
| js | 1000 | 30 | 970 | 1650 |

---
waiting list:


- 30分钟时间片：
  - js的第4号事项：AI SDK
  - ego的第5号事项：entry的科目归并
  - js的第5号事项：LangChain.js
  - js的第6号事项：learn brain.js

- 60分钟时间片：
  - ego的第1号事项：整理js对象检索的代码
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：设计新的季度时间表
  - js的第1号事项：Vector Database in nodejs

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - learn的第1号事项：量子物理的数学基础
  - xuemen的第1号事项：mail server
  - ego的第2号事项：基于真实数据标志财务报表

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.13.[cursor rules]任务&body=日期: 2025.07.13.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250713.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250713140000"></a>
## 14:00 ~ 14:29
## learn: [cursor rules]

- 转向了解向量数据库，看是不是可以动态的搭建。
- 增加todo项：
	- '60': Vector Database in nodejs
    	readme:
        	- https://www.dongaigc.com/p/Stevenic/vectra
			- https://therightsw.com/vector-database-crud

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.13.[真随机数发生器]任务&body=日期: 2025.07.13.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250713.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250713143000"></a>
## 14:30 ~ 15:14
## learn: [真随机数发生器]


- https://www.npmjs.com/package/random 这个是伪随机数
- https://www.npmjs.com/package/rdrand-lite
	- https://blog.csdn.net/qq_31661311/article/details/145425577
	- What is the difference between RDSeed and RDRand:
		- A pseudorandom generator that's periodically seeded from that noise source, whose output is available through the RDRAND instruction;一个伪随机生成器，它定期从该噪声源中获取种子，其输出可通过 RDRAND 指令获取；
		- A true random generator that's driven off the noise source, whose output is available through the RDSEED instruction.一个真正的随机生成器，它由噪声源驱动，其输出可通过 RDSEED 指令获取。
	- npm install rdrand-lite
- https://www.npmjs.com/package/trng
- D:\huangyg\git\js.sample\random\main.js
```
D:\huangyg\git\js.sample\random>node main
1222941300897540881n
2418389370
1637468223
Random hex string: 9095fce6e1ac10f9201a891f24a39de7
```
- 其它方案：
```
需求	推荐方案
真随机 & 可验证	RDSEED 指令（方案 1）
真随机 & 易用	crypto.randomInt()（方案 2）
高性能 & 安全	crypto.randomBytes()（方案 3）
```
