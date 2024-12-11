# 2024.12.11.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，十二月中上旬补足前两月缺勤。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:39	learn: [https://frontity.org/](#20241211140000)
- 14:30~14:54	xuemen: [月初事务](#20241211143000)
- 16:00~16:00	infra: [范例--利用js模块组合实现合同条款的组合。](#20241211160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4663 | 8867 | 5145 |
| PSMD | 4000 | 1685 | 2315 | 1050 |
| ego | 2530 | 1721 | 809 | 915 |
| infra | 2000 | 250 | 1750 | 210 |
| xuemen | 1000 | 155 | 845 | 450 |
| raw | 1000 | 347 | 653 | 390 |
| learn | 2000 | 505 | 1495 | 1230 |
| js | 1000 | 0 | 1000 | 900 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理季度任务

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第1号事项：wordpress + nodejs
  - raw的第1号事项：熟悉内脏之间的关系
  - infra的第2号事项：动态菜单设计。

- 90分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - learn的第1号事项：wordpress plugin
  - PSMD的第2号事项：整理default模型
  - infra的第3号事项：schema立项。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.12.11.[https://frontity.org/]任务&body=日期: 2024.12.11.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/12/20241211.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241211140000"></a>
## 14:00 ~ 14:39
## learn: [https://frontity.org/]

- Frontity Framework is not under active development anymore.
    - The team has been working on the WordPress Interactivity API, which unblocks the same type of UX as the Frontity framework, but fully compatible with the new Site Editor.
    - https://make.wordpress.org/core/2024/03/04/interactivity-api-dev-note/
- 是wordpress向nodejs升级的尝试，基本废除了整个前端，整合到基于react的新前端。
- state、action、library概念，很适合表达protocol，也适合共享。
    - 所有state集合在一个json中。实际上更接近config数据。
    - https://docs.frontity.org/learning-frontity/state
- GraphQL：把REST的API定义从url转移到json数据，来回都是json。
- WordPress Interactivity API更不便，frontity被冻结应该是团队内乱，倒退了。
- 不再追加todo项。思路可以借鉴。


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.12.11.[月初事务]任务&body=日期: 2024.12.11.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/12/20241211.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241211143000"></a>
## 14:30 ~ 14:54
## xuemen: [月初事务]

```
尊敬的纳税人：

按照国家税务总局北京市税务局对数电票推广扩围工作的最新要求，你单位已核定数电发票，请在本月16日前将原增值税发票（专票及普票）结存发票缴销，并将税控设备在电子税务局做远程注销操作后缴回就近办税服务厅。
【国家税务总局北京市海淀区税务局温泉税务所】
```
```
【中国税务】尊敬的纳税人：
按照国家税务总局北京市税务局对数电票推广扩围工作的最新要求，你单位已核定数电发票，请在本月16日前将原增值税发票（专票及普票）结存发票缴销，并将税控设备在电子税务局做远程注销操作后缴回就近办税服务厅。【国家税务总局北京市海淀区税务局温泉税务所】
```

- 个税申报ok
- 税控抄报ok
- 原增值税发票（专票及普票）结存发票缴销
    - 您可能需要：查看进度【我要查询】-【事项进度查询】：去查看
-  残疾人就业保障金申报 ok
-  温泉税务所
-  http://beijing.chinatax.gov.cn/bjswj/c104560/202311/e69c9a07ff7c4f079e51086d1001fe06.shtml
-  北京市海淀区农大南路1号院10号楼
```
自2023年12月4日（周一）起，海淀区税务局清河税务所（原址为北京市海淀区西北旺镇丰智东路7号院1号楼）、温泉税务所（原址为北京市海淀区西北旺镇丰智东路7号院1号楼），统一搬迁至北京市海淀区农大南路1号院10号楼对外办公。
    咨询电话：010-88112366　　
    乘车路线　　
    地铁：地铁13号线至上地站A出站口约1.5公里，骑行约8分钟可到达，或换乘447路至上地南路站；地铁16号线至农大南路站C出站口约2.6公里，骑行约13分钟可到达，或换乘305路、393路、636路、688路至树村东口站。　　
    公交：320路、365路、432路、614路、623路、681路、688路、982路至上地南口站；305路、393路、623路、636路、688路至树村东口站。　　　　 
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.12.11.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2024.12.11.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/12/20241211.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241211160000"></a>
## 16:00 ~ 16:00
## infra: [范例--利用js模块组合实现合同条款的组合。]

