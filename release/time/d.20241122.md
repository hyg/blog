# 2024.11.22.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 11:40~13:39	learn: [mariadb access](#20241122114000)
- 14:00~14:00	ego: [整理季度任务](#20241122140000)
- 14:30~14:30	raw: [使用convert-units](#20241122143000)
- 16:00~16:00	infra: [范例--利用js模块组合实现合同条款的组合。](#20241122160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4075 | 9455 | 5205 |
| PSMD | 4000 | 1485 | 2515 | 1050 |
| ego | 2530 | 1571 | 959 | 915 |
| infra | 2000 | 250 | 1750 | 210 |
| xuemen | 1000 | 130 | 870 | 450 |
| raw | 1000 | 174 | 826 | 420 |
| learn | 2000 | 465 | 1535 | 1260 |
| js | 1000 | 0 | 1000 | 900 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理季度任务
  - raw的第1号事项：使用convert-units
  - learn的第3号事项：https://frontity.org/

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第1号事项：wordpress + nodejs
  - infra的第2号事项：动态菜单设计。
  - learn的第2号事项：wordpress install and config

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
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.22.[mariadb access]任务&body=日期: 2024.11.22.%0D%0A序号: 3%0D%0A手稿:../../draft/2024/11/20241122.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241122114000"></a>
## 11:40 ~ 13:39
## learn: [mariadb access]

- netstat -anpt | grep 3306
    - 只有tcp6 0 0 127.0.0.0:3306 ....
- /etc/mysql/mariadb.conf.d/50-server.cnf
    - 注释bind-address
    - sudo systemctl restart mysql
    - netstat -anpt | grep 3306
        - 可以看到第二个监听3306端口
- sudo mysql
- GRANT ALL ON *.* to root@'%' IDENTIFIED BY 'password';
    - 分别对hyg@'%' hyg@'localhost' dev@'%' dev@'localhost' root@'localhost' 设置密码
    - FLUSH PRIVILEGES;
- 远程使用：mysql --ssl=OFF -u username -p password

- dbeaver的ER图依然是根据数据库生成，而不是从ER图开始设计数据库，再导出SQL语句。
- https://dbdiagram.io 也是从SQL语言画ER图，而不能直接在图中创建。
- https://app.chartdb.io  可以画ER图，在图侧编辑区修改字段定义。需要登录才能导出SQL。
    - https://github.com/chartdb/chartdb
- https://www.drawdb.app 满足需求。
    - https://github.com/drawdb-io/drawdb
    
---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.22.[整理季度任务]任务&body=日期: 2024.11.22.%0D%0A序号: 4%0D%0A手稿:../../draft/2024/11/20241122.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241122140000"></a>
## 14:00 ~ 14:00
## ego: [整理季度任务]


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.22.[使用convert-units]任务&body=日期: 2024.11.22.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/11/20241122.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241122143000"></a>
## 14:30 ~ 14:30
## raw: [使用convert-units]


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.22.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2024.11.22.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/11/20241122.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241122160000"></a>
## 16:00 ~ 16:00
## infra: [范例--利用js模块组合实现合同条款的组合。]

