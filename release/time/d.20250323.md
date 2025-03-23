# 2025.03.23.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月下旬补足前两月缺勤。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	js: [js class](#20250323160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7670 | 5860 | 6075 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 960 | 1570 | 1065 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1250 | -250 | 600 |
| learn | 2000 | 1035 | 965 | 1560 |
| js | 1000 | 1120 | -120 | 750 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第十一式
  - raw的第3号事项：复习五元庄第十式
  - raw的第4号事项：复习五元庄第十二式
  - raw的第5号事项：复习五元庄第十三式

- 60分钟时间片：
  - js的第1号事项：learn js implement of ipfs
  - raw的第1号事项：新版本food预算决算
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：基于dat,hypercore,hyperswarm等模块的浏览器动态页面范例。

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
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.23.[js class]任务&body=日期: 2025.03.23.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250323.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250323160000"></a>
## 16:00 ~ 16:59
## js: [js class]

- 再次对比：
    - yaml文件： 适合其它编程语言。dump更方便。
    - obj in js：浏览器远程加载更方便。dump需要自己实现一下。
    - 相同：方便手工编辑，考虑空格换行tab键，hash都不唯一。
- 考虑其它解释语言，数据还是先放在yaml，浏览器里面手动加载一下（跨域怎么办？）。个别应用可以把数据放在js里。
- 下一个时间片可以FSM实践检验了。