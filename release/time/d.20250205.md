# 2025.02.05.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1f)。

<a id="index"></a>
- 15:41~18:40	PSMD: [个人领域备选模型](#20250205154100)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2825 | 10705 | 6195 |
| PSMD | 4000 | 1805 | 2195 | 1335 |
| ego | 2530 | 300 | 2230 | 855 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 90 | 910 | 450 |
| raw | 1000 | 255 | 745 | 1020 |
| learn | 2000 | 255 | 1745 | 1350 |
| js | 1000 | 0 | 1000 | 870 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：考虑sql.js是否使用。
  - raw的第1号事项：复习形神庄第四节
  - raw的第2号事项：复习形神庄第五节
  - raw的第3号事项：复习形神庄第六节

- 60分钟时间片：
  - learn的第1号事项：rxdb p2p NATS
  - ego的第2号事项：新版本任务、子任务的数据结构
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第2号事项：wordpress install and config

- 90分钟时间片：
  - ego的第1号事项：启用新字段存放前置任务的output，自动汇编写入新的draft文件。
  - PSMD的第2号事项：子1609
  - learn的第3号事项：飞书 nodejs sdk
  - PSMD的第4号事项：整理新版本term的manifest code

- 195分钟时间片：
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.02.05.[个人领域备选模型]任务&body=日期: 2025.02.05.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250205.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250205154100"></a>
## 15:41 ~ 18:40
## PSMD: [个人领域备选模型]

- 除了快慢，还可以按照[三种层级定义](..\..\draft\2025\20250201.01.md)之一，划分层级。
- 每层归纳为正面、负面两类protocol。
- 跨层存在四对交互。
    - n正 <-> n+1正
    - n正 <-> n+1负
    - n负 <-> n+1正
    - n负 <-> n+1负
- 跨时间轴两点产生十六对交互
- 输入输出：
    - 快慢：互相争夺
    - 容器：深层过滤浅层
    - 自动化：底层一旦部署就占主导
    - 元知识：浅层主导
- 外部应该能生成输入输出信息：
    - 使负面protocol卡顿，定点地释放正面、深层protocol，帮助它们占据主导。
    - 生成方法、生成记录，都公开且接受质询。经过同意后再使用。