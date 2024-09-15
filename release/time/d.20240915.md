# 2024.09.15.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月中上旬补足前两月缺勤。今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~10:59	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20240915093000)
- 14:00~15:59	ego: [整理ubuntu工作环境](#20240915140000)
- 14:30~14:59	js: [js class framework](#20240915143000)
- 16:00~17:14	js: [js class](#20240915160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 11352 | 6348 | 4275 |
| PSMD | 7000 | 3857 | 3143 | 840 |
| ego | 4000 | 1773 | 2227 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1265 | -765 | 450 |
| learn | 1500 | 2198 | -698 | 990 |
| js | 1200 | 1928 | -728 | 780 |

---
waiting list:


- 30分钟时间片：
  - raw的第3号事项：熟悉内脏之间的关系

- 60分钟时间片：
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - js的第1号事项：js class
  - ego的第2号事项：eventemitter sample
  - js的第2号事项：js class

- 90分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：整理新版本term的manifest code
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.15.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.09.15.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240915093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240915093000"></a>
## 计划 09:30 ~ 10:59
PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.15.[整理ubuntu工作环境]任务&body=日期: 2024.09.15.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240915140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240915140000"></a>
## 14:00~14:29
ego: [整理ubuntu工作环境](../../draft/2024/09/20240915140000.md)

- 更新了ubuntu机器的git库。
    - 在10号清单上追加draft库。
- 初始化脚本：
```
#!/bin/bash
gnome-terminal --tab --working-directory=git/raw -t "raw" --tab --working-directory=git/ego/src -t "ego/src" --tab --working-directory=git/js.sample -t "js.sample"
nautilus ~/git/ego/src
nautilus ~/git/ego/data/day/2024
nautilus ~/git/draft/2024/09
sudo apt clean ; sudo apt update ; sudo apt upgrade -y; sudo apt autoremove -y; sudo snap refresh
```
- 今天win11机器commit、push之后，可以在ubuntu机器开始全天测试。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.15.[js class framework]任务&body=日期: 2024.09.15.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240915143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240915143000"></a>
## 计划 14:30 ~ 14:59
js: [js class framework]

- 并入下一时间片。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.15.[js class]任务&body=日期: 2024.09.15.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/09/20240915160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240915160000"></a>
## 16:00~16:59
js: [js class]

- D:\huangyg\git\js.sample\FPM\testfsm.yaml
- D:\huangyg\git\js.sample\FPM\testfsm.js
- 需要设计action和F两组函数，在yaml文件中索引，并由统一代码把它们组合使用。
- 内部数据，由instance创建时指定存储路径。
- 外部数据，需要由上一级给出访问接口。
- 继续追加时间。
