# 2026.01.28.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260128190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 195 | 13335 | 8790 |
| PSMD | 4000 | 0 | 4000 | 960 |
| ego | 2530 | 0 | 2530 | 1185 |
| infra | 2000 | 0 | 2000 | 480 |
| xuemen | 1000 | 0 | 1000 | 60 |
| raw | 1000 | 195 | 805 | 150 |
| learn | 2000 | 0 | 2000 | 4425 |
| js | 1000 | 0 | 1000 | 1530 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - learn的第3号事项：Common Logic (ISO/IEC 24707)
  - PSMD的第8号事项：整理闫岸家政能力讨论
  - ego的第11号事项：用js代码完成日小结后的git操作。

- 60分钟时间片：
  - learn的第1号事项：Chroma sample
  - xuemen的第1号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - js的第2号事项：Vector Database in nodejs
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。

- 90分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：设计静态数据（git库）和实时交互的分工。如何共同支撑PSMD和ego项目。
  - js的第1号事项：node.js

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - infra的第2号事项：petri网工作流引擎设计
  - infra的第3号事项：Rete/Phreak算法的自主实现
  - ego的第4号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.01.28.[无名任务]任务&body=日期: 2026.01.28.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260128.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260128190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 描述思维活动的层次化结构：
```
level 1：命题A成立
level 2：分析命题A，证明命题A。
level 3：分析level2中使用的公理、定理、假设、定义...证明其中的定理，明确其中的定义。
......
level n：｛我的观点不证自明、无需解释。｝or ｛level n-1只使用公理、假设，没有使用原创的定理、定义｝

level n是这段思维活动名义上的最底层。
在任何一层使用不成立的假设，无法明确的定义，就是真实的底。
```
- 思维构型的数据结构
```
任务A分为a1、a2、a3.
张三的数据:
a1:{1:pass,2:pass,3:warning,4:error,5:bottom} 这里在level1、2是理性的，3、4已经部分非理性、5完全犯浑。
a2:...
a3:...
```
