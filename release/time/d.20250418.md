# 2025.04.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	ego: [新版基础模型](#20250418074500)
- 14:00~14:44	PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622](#20250418140000)
- 16:00~16:59	ego: [redahomes](#20250418160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2469 | 11061 | 6000 |
| PSMD | 4000 | 660 | 3340 | 1170 |
| ego | 2530 | 1050 | 1480 | 1380 |
| infra | 2000 | 240 | 1760 | 210 |
| xuemen | 1000 | 204 | 796 | 480 |
| raw | 1000 | 90 | 910 | 390 |
| learn | 2000 | 105 | 1895 | 1770 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：clerk统一用户管理
  - xuemen的第2号事项：月初事务
  - ego的第4号事项：entry的科目归并
  - ego的第5号事项：entry的按月报表

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：redahomes
  - raw的第1号事项：熟悉内脏之间的关系
  - js的第1号事项：learn factory, constructor, prototype

- 90分钟时间片：
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - PSMD的第2号事项：子1609
  - learn的第2号事项：热更新
  - infra的第2号事项：schema立项。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - ego的第2号事项：新版基础模型
  - ego的第3号事项：新版ego, instance or model, any manifest
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.18.[新版基础模型]任务&body=日期: 2025.04.18.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250418.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250418074500"></a>
## 07:45 ~ 10:59
## ego: [新版基础模型]

- 继续整合几个关键的思想实验，拿出基础模型。
- 现在的议事规则，是各方基于自己视角的事实（包括事件先后次序）进行理性分析，赢家通吃。是否能在新的世界观下逼近最佳决策效果。
- 怎么才能在更深层意识进行归并。继续追加时间。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.18.[根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]任务&body=日期: 2025.04.18.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250418.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250418140000"></a>
## 14:00 ~ 14:44
## PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

- 先选股份有限公司，担保有限公司先不做。
- 其它部分，继续追加时间完善。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.18.[redahomes]任务&body=日期: 2025.04.18.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250418.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250418160000"></a>
## 16:00 ~ 16:59
## ego: [readhomes]

- mysql
    - 3.97.216.88:3306
    - database:redahomes
    - user:root_account
- property_location_all_sources表格中的经纬度出现大量重复。
    - 某模块使用property_location_all_sources中full_address字段，调用 https://photon.komoot.io/api/ 获得经纬度，写回数据库。
    - full_address字段有大量重复。
    - full_address字段有大量相似数据。 比如街道和门牌号一样，邮编或其它州、市信息粒度不同。
    - full_address字段来自PropertyLocation表格
- PropertyLocation的字段有StreetNumber StreetName StreetSuffix, CountyOrParish, StateOrProvince, PostalCode, Canada，数据来自地产局系统，地产经纪录入的。
    - “PropertyLocation的表格和地产局系统里的数据, 用postman核实过， 一样的”。
- 需要：
    1. 把”不一样的地址“定义清楚，比如是使用full_address，还是PropertyLocation表格的字段组合（怎么组合）来定义；
    1. 把”一样的经纬度“定义清楚，精确到哪一位，komoot还有其它返回数据，要不要使用上。
    1. ”一样的经纬度“需要怎么处理，什么样的处理结果才是需求，或者直接把数学公式明确下来。