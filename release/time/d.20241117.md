# 2024.11.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1a)。

<a id="index"></a>
- 07:45~09:04	learn: [wordpress plugin](#20241117074500)
- 09:30~11:29	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20241117093000)
- 14:00~14:00	ego: [整理季度任务](#20241117140000)
- 14:30~14:30	raw: [使用convert-units](#20241117143000)
- 16:00~16:59	learn: [ER diagram export to SQL](#20241117160000)
- 16:00~16:00	PSMD: [整理闫岸家政能力讨论](#20241117160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 3640 | 9890 | 5205 |
| PSMD | 4000 | 1305 | 2695 | 1050 |
| ego | 2530 | 1571 | 959 | 915 |
| infra | 2000 | 250 | 1750 | 210 |
| xuemen | 1000 | 105 | 895 | 450 |
| raw | 1000 | 174 | 826 | 420 |
| learn | 2000 | 235 | 1765 | 1260 |
| js | 1000 | 0 | 1000 | 900 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理季度任务
  - raw的第1号事项：使用convert-units
  - learn的第3号事项：https://frontity.org/

- 60分钟时间片：
  - PSMD的第1号事项：整理闫岸家政能力讨论
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第1号事项：wordpress + nodejs
  - learn的第2号事项：wordpress install and config

- 90分钟时间片：
  - learn的第1号事项：wordpress plugin
  - PSMD的第2号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - PSMD的第3号事项：整理default模型
  - infra的第3号事项：schema立项。

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第5号事项：machines model
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.17.[wordpress plugin]任务&body=日期: 2024.11.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/11/20241117.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241117074500"></a>
## 07:45 ~ 09:04
## learn: [wordpress plugin]

- https://developer.wordpress.org/plugins/
- nodejs方向：
    - github.com/Automattic/wp-calypso
    - https://github.com/scottgonzalez/node-wordpress
    - https://www.morewordpress.com/using-node-js-with-wordpress-everything-you-need-to-know：Node.js can also be used to create custom WordPress plugins and themes. This can be done by using the WordPress REST API to interact with the WordPress database and provide custom functionality to the frontend.
        -To use Node.js with WordPress, you need to configure Node.js to work with WordPress. One way to do this is to use the WordPress REST API, which allows you to access WordPress data and functionality through a set of RESTful endpoints. You can use Node.js to make requests to these endpoints and retrieve data from WordPress.
        - Another way to configure Node.js with WordPress is to use the WP-API Node.js library, which provides an easy-to-use interface for working with the WordPress REST API in Node.js. This library makes it easy to make requests to the WordPress REST API and retrieve data from WordPress.
    - 是升级方向，但没有明确时间表，外围开发者可以通过API提前转到nodejs，而不是相对陈旧的php。
- 看到Plugin Basics
- 创建一些todo项：
    - '60': wordpress install and config
    - '30': https://frontity.org/
    - '60': oData simple
      readme: |
        - https://services.odata.org/
        - http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html
    - '60': MapLibre sample
      readme: |
        - https://maplibre.org/
        - https://maplibre.org/maplibre-gl-js/docs/
        - https://github.com/maplibre/maplibre-gl-js
    - '60': wordpress + nodejs
      readme: |
        - wordpress-rest-api
        - https://www.npmjs.com/package/wpapi
        - https://github.com/scottgonzalez/node-wordpress

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.17.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.11.17.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/11/20241117.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241117093000"></a>
## 09:30 ~ 11:29
## PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

- 讨论了针对房地产项目的数据整理。
- 归档到buffer git库。以后继续分析。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.17.[整理季度任务]任务&body=日期: 2024.11.17.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/11/20241117.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241117140000"></a>
## 14:00 ~ 14:00
## ego: [整理季度任务]


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.17.[使用convert-units]任务&body=日期: 2024.11.17.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/11/20241117.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241117143000"></a>
## 14:30 ~ 14:30
## raw: [使用convert-units]


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.17.[ER diagram export to SQL]任务&body=日期: 2024.11.17.%0D%0A序号: 12%0D%0A手稿:../../draft/2024/11/20241117.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241117160000"></a>
## 16:00 ~ 16:59
## learn: [ER diagram export to SQL]

- draw.io有ER图，没有导出SQL的功能。
- HeidiSQL有ER、SQL，开源。
    - winget install HeidiSQL.HeidiSQL
- 增加todo项：
    - '60': 用代码中的对象或类，产生数据库创建SQL脚本、ER图（mermaid） 
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.17.[整理闫岸家政能力讨论]任务&body=日期: 2024.11.17.%0D%0A序号: 13%0D%0A手稿:../../draft/2024/11/20241117.05.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241117160000"></a>
## 16:00 ~ 16:00
## PSMD: [整理闫岸家政能力讨论]

