# 2024.07.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~10:44	PSMD: [machines model](#20240727093000)
- 14:00~14:14	raw: [设计新版raw.js架构。](#20240727140000)
- 14:30~14:29	raw: [新版raw.js的子命令-营养成分详情](#20240727143000)
- 16:00~17:14	learn: [learn ipld,reading time.](#20240727160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6137 | 11563 | 3360 |
| PSMD | 7000 | 1412 | 5588 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 120 | 1380 | 450 |
| raw | 500 | 320 | 180 | 150 |
| learn | 1500 | 1370 | 130 | 900 |
| js | 1200 | 1353 | -153 | 540 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：设计新版raw.js架构。
  - raw的第2号事项：新版raw.js的子命令-营养成分详情
  - raw的第3号事项：新版raw.js的子命令-营养成分排序
  - learn的第3号事项：linkml, yaml-ld, coding time.

- 60分钟时间片：
  - learn的第1号事项：Getting Things Done with IPLD
  - js的第1号事项：learn Orbitdb
  - ego的第2号事项：eventemitter sample
  - learn的第2号事项：schema in ipld,coding time.

- 90分钟时间片：
  - PSMD的第1号事项：machines model
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.27.[machines model]任务&body=日期: 2024.07.27.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240727093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240727093000"></a>
##  09:30~10:59
PSMD: [machines model]

- 先整理分析PSMD github traffic统计。
- 回到waitinglist。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.27.[设计新版raw.js架构。]任务&body=日期: 2024.07.27.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240727140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240727140000"></a>
## 14:00~14:29
raw: [设计新版raw.js架构。]

- readme: |
      - 增加子命令和参数。
      - 划分独立模块。
- node raw
      - food
            - 空参数显示当天营养成分统计
            - diff：以当天为零、以日为单位计算相对时差的某天的营养成分统计
            - yyyy：年度报告
            - yyyymm：阅读报告，如果是季度最后一月同时出季度报告
            - yyyymmdd：日营养成分统计
            - yyyymmdd yyyymmdd：区间营养成分统计
      - health
            - sleep
            - weight
- 继续细化。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.27.[新版raw.js的子命令-营养成分详情]任务&body=日期: 2024.07.27.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/07/20240727143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240727143000"></a>
## 14:30~14:59
raw: [新版raw.js的子命令-营养成分详情]

- 未完成，回到waitinglist。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.27.[learn ipld,reading time.]任务&body=日期: 2024.07.27.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/07/20240727160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240727160000"></a>
## 16:00~16:59
learn: [learn ipld,reading time.]

- readme: |
      - read 2024.07.22 14:00, 2024.07.25.16:00 draft
      - https://ipld.io/docs/intro/primer/
      - 彻底弄明白CID代替url实现linked data的实现细节。
      - https://ipld.io/docs/schemas/intro/#schema-language-dsl-and-dmt-form
      - https://ipld.io/docs/schemas/features/representation-strategies/
- In the future, some sort of "bytecode" or "IR" might be introduced which allows more portable definitions of ADLs, but no such system is yet specified.
- 可以继续按 Getting Things Done with IPLD 一节体验。
    - '60': Getting Things Done with IPLD
      readme: |
        - https://ipld.io/docs/intro/primer/#getting-things-done-with-ipld
        - 彻底弄明白CID代替url实现linked data的实现细节。
        - https://ipld.io/docs/schemas/intro/#schema-language-dsl-and-dmt-form
        - https://ipld.io/docs/schemas/features/representation-strategies/
