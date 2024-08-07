# 2024.08.07.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~16:59	PSMD: [machines model](#20240807140000)
- 16:00~15:59	js: [learn Orbitdb](#20240807160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 7046 | 10654 | 3600 |
| PSMD | 7000 | 1802 | 5198 | 585 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 450 |
| raw | 500 | 450 | 50 | 60 |
| learn | 1500 | 1698 | -198 | 990 |
| js | 1200 | 1353 | -153 | 750 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：新版营养成分详情，允许多种营养成分。
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - PSMD的第3号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 60分钟时间片：
  - learn的第1号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/
  - ego的第2号事项：eventemitter sample
  - js的第2号事项：learn Orbitdb
  - ego的第3号事项：schema manifest code v0

- 90分钟时间片：
  - PSMD的第1号事项：machines model
  - js的第1号事项：import typescript into javascript
  - PSMD的第2号事项：整理新版本term的manifest code
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.07.[machines model]任务&body=日期: 2024.08.07.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/08/20240807140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240807140000"></a>
## 14:00~15:29
PSMD: [machines model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制
- 用ts实现machine。
    - https://wangdoc.com/typescript/interface
    - https://cloud.tencent.com/developer/article/1592752
- npm install typescript --save-dev
- npm install --save-dev tsx 
- npm install -g typescript
- 分为两个任务
    - '90': machines model
      readme: |
        - a sample instance of machine,FPM,FSM in manifest code 
        - read D:\huangyg\git\draft\2024\07\20240723160000.md
        - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
        - 实现FPM+FSM
        - 从FSM、FPM中抽象出统一的mechine
        - 实现joint、split机制
        - 先用javascript的class实现
    - '90': import typescript into javascript
      readme: |
        - https://geek-docs.com/typescript/typescript-questions/570_typescript_transforming_typescript_into_javascript.html
        - https://cloud.tencent.com/developer/article/1592752
        - https://wangdoc.com/typescript/tsc

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.07.[learn Orbitdb]任务&body=日期: 2024.08.07.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/08/20240807160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240807160000"></a>
## 16:00~16:59
js: [learn Orbitdb]

- 任务顺延。
