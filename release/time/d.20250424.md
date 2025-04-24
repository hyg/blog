# 2025.04.24.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 09:46~10:58	learn: [markdown数学公式](#20250424094600)
- 14:00~17:59	learn: [复习数学基础](#20250424140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2902 | 10628 | 5970 |
| PSMD | 4000 | 720 | 3280 | 1170 |
| ego | 2530 | 1095 | 1435 | 1380 |
| infra | 2000 | 240 | 1760 | 210 |
| xuemen | 1000 | 219 | 781 | 450 |
| raw | 1000 | 90 | 910 | 390 |
| learn | 2000 | 418 | 1582 | 1770 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：clerk统一用户管理
  - ego的第1号事项：entry的科目归并
  - ego的第5号事项：entry的按月报表

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：熟悉内脏之间的关系
  - js的第1号事项：learn factory, constructor, prototype
  - ego的第2号事项：redahomes

- 90分钟时间片：
  - PSMD的第1号事项：子1609
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。
  - learn的第2号事项：热更新

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第3号事项：新版基础模型
  - ego的第4号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.24.[markdown数学公式]任务&body=日期: 2025.04.24.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250424.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250424094600"></a>
## 09:46 ~ 10:58
## learn: [markdown数学公式]

- https://www.jianshu.com/p/383e8149136c
- https://www.nature.com/articles/s41467-018-05739-8 中的（2）

- 网页中的代码
```latex
U_{{\mathrm{S}} \to {\mathrm{L}}} =\left\{ \begin{array}{l}{{\left\{ {\left| \downarrow \right\rangle } \right._{\mathrm{S}} \mapsto \left| { - \frac{1}{2}} \right\rangle _{\mathrm{L}} \equiv \left| \downarrow \right\rangle _{\mathrm{S}} \otimes \left| {{\mbox{``}}{\mathrm{z}} = - \frac{1}{2} {\mbox{''}}} \right\rangle _{\mathrm{D}} \otimes \left| {{\mbox{``}} \psi _{\mathrm{S}} = \left| \downarrow \right\rangle {\mbox{''}}} \right\rangle _{\mathrm{F}}}}\\ {{\left\{ {\left| \uparrow \right\rangle } \right._{\mathrm{S}} \mapsto \left| { + \frac{1}{2}} \right\rangle _{\mathrm{L}} \equiv \left| \uparrow \right\rangle _{\mathrm{S}} \otimes \left| {{\mbox{``}} {\mathrm{z}} = + \frac{1}{2}{\mbox{''}}} \right\rangle _{\mathrm{D}} \otimes \left| {{\mbox{``}}\psi _{\mathrm{S}} = \left| \uparrow \right\rangle {\mbox{''}}} \right\rangle _{\mathrm{F}}}}\end{array}\right. .
```
    
- markdown中的代码：
```
U_{{\mathrm{S}} \to {\mathrm{L}}} = 
\left\{
    \begin{array} {l}
        {
            \left\{
                \left|
                    \downarrow \rangle _\mathrm{S}
                \right.
                
            \right.
            \mapsto
                \left|
                    -\frac{1}{2} \rangle _\mathrm{L}
                \right.
                \equiv
                \left|
                    \downarrow \rangle _\mathrm{S}
                \right.
                \otimes
                \left|
                    \text{``}
                    \mathrm{Z}=-\frac{1}{2}
                    \text{''}
                    \rangle _\mathrm{D}
                \right.
                \otimes
                \left|
                    \text{``}
                    \psi_\mathrm{S}=
                    \left|
                        \downarrow\rangle
                    \right.
                    \text{''}
                    \rangle_\mathrm{F}
                \right.
        }\\
        {
            \left\{
                \left|
                    \uparrow \rangle _\mathrm{S}
                \right.
                
            \right.
            \mapsto
                \left|
                    +\frac{1}{2} \rangle _\mathrm{L}
                \right.
                \equiv
                \left|
                    \uparrow \rangle _\mathrm{S}
                \right.
                \otimes
                \left|
                    \text{``}
                    \mathrm{Z}=+\frac{1}{2}
                    \text{''}
                    \rangle _\mathrm{D}
                \right.
                \otimes
                \left|
                    \text{``}
                    \psi_\mathrm{S}=
                    \left|
                        \uparrow\rangle
                    \right.
                    \text{''}
                    \rangle_\mathrm{F}
                \right.
        }
    \end{array}
\right..
```
$$
U_{{\mathrm{S}} \to {\mathrm{L}}} = 
\left\{
    \begin{array} {l}
        {
            \left\{
                \left|
                    \downarrow \rangle _\mathrm{S}
                \right.
                
            \right.
            \mapsto
                \left|
                    -\frac{1}{2} \rangle _\mathrm{L}
                \right.
                \equiv
                \left|
                    \downarrow \rangle _\mathrm{S}
                \right.
                \otimes
                \left|
                    \text{``}
                    \mathrm{Z}=-\frac{1}{2}
                    \text{''}
                    \rangle _\mathrm{D}
                \right.
                \otimes
                \left|
                    \text{``}
                    \psi_\mathrm{S}=
                    \left|
                        \downarrow\rangle
                    \right.
                    \text{''}
                    \rangle_\mathrm{F}
                \right.
        }\\
        {
            \left\{
                \left|
                    \uparrow \rangle _\mathrm{S}
                \right.
                
            \right.
            \mapsto
                \left|
                    +\frac{1}{2} \rangle _\mathrm{L}
                \right.
                \equiv
                \left|
                    \uparrow \rangle _\mathrm{S}
                \right.
                \otimes
                \left|
                    \text{``}
                    \mathrm{Z}=+\frac{1}{2}
                    \text{''}
                    \rangle _\mathrm{D}
                \right.
                \otimes
                \left|
                    \text{``}
                    \psi_\mathrm{S}=
                    \left|
                        \uparrow\rangle
                    \right.
                    \text{''}
                    \rangle_\mathrm{F}
                \right.
        }
    \end{array}
\right..
$$

- 目前只实现排版正确，表示范围的{、}、\left、\right、\begin、\end等符号，还需要了解数学含义后再准确调整。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.24.[复习数学基础]任务&body=日期: 2025.04.24.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250424.b.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250424140000"></a>
## 14:00 ~ 17:59
## learn: [复习数学基础]

- 纯态 pure state：
    - 能够直接以 $\mid\psi\rangle$ 这样的态矢量（state vector）来表示的量子态。
    - 具有“精确已知状态”的量子系统称为纯态（pure state)。在这种情况下，密度算子就是ρ=|ψ><ψ|，以100%的概率处在∣ψ>。
    - 可以借助矢量和密度算子两种形式进行描述。
- 混合台 mixed state：
    - 拥有好几个纯态，例如三个纯态 $\mid\psi_{1}\rangle$， $\mid\psi_{2}\rangle$， $\mid\psi_{3}\rangle$ ，该系统处在这三个纯态上的概率分别为 $\mathrm{p}_{1}$，$\mathrm{p}_{2}$，$\mathrm{p}_{3}$ ，这样的一个量子态，我们称它为混合态。
    - 不能用向量的形式描述量子态，是借助密度矩阵的形式描述的，那么这个量子态就是混合态，系统就是处于混合态（mixed state)，称为是在ρ的系综里不同纯态的混合。
    - 只能借助密度矩阵的形式进行描述的。
- 继续追加时间阅读：
    - https://blog.csdn.net/qq_43270444/article/details/109206221
    - https://zhuanlan.zhihu.com/p/136427627
    - https://zhuanlan.zhihu.com/p/499570837
    - https://zhuanlan.zhihu.com/p/266248900
    - https://www.zhihu.com/tardis/zm/art/163484824