# 2025.03.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月下旬补足前两月缺勤。今天绑定模版1(1e)。

<a id="index"></a>
- 18:30~20:39	ego: [升级day.js](#20250327183000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8010 | 5520 | 6255 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 1090 | 1440 | 1065 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1250 | -250 | 600 |
| learn | 2000 | 1035 | 965 | 1770 |
| js | 1000 | 1330 | -330 | 720 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第十一式
  - raw的第3号事项：复习五元庄第十式
  - raw的第4号事项：复习五元庄第十二式
  - raw的第5号事项：复习五元庄第十三式

- 60分钟时间片：
  - raw的第1号事项：新版本food预算决算
  - js的第1号事项：git sample
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：在代码中自动提交git库

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：复习dat
  - ego的第2号事项：新版基础模型
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.27.[升级day.js]任务&body=日期: 2025.03.27.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250327.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250327183000"></a>
## 18:30 ~ 20:39
## ego: [升级day.js]

- makedaylog() 增加判断，如果amount=0就不要追加readme了。
- 增加cleardayobj()，清理output文件和字段，在makedaylog()中调用。
- makeindex()增加output字段的判断。
- D:\huangyg\git\js.sample\git\simple-git.js 代码分别转入util.1.js day.js
- 增加gitpo()，在makedaylog()中调用。
- npm i simple-git