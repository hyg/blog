# 2025.01.25.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~12:29	PSMD: [1609的分立、合并。](#20250125093000)
- 14:00~14:00	PSMD: [子1609](#20250125140000)
- 16:00~16:00	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20250125160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 5610 |
| PSMD | 4000 | 0 | 4000 | 1200 |
| ego | 2530 | 0 | 2530 | 945 |
| infra | 2000 | 0 | 2000 | 315 |
| xuemen | 1000 | 0 | 1000 | 450 |
| raw | 1000 | 0 | 1000 | 420 |
| learn | 2000 | 0 | 2000 | 1410 |
| js | 1000 | 0 | 1000 | 870 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：差旅物资准备
  - js的第1号事项：考虑sql.js是否使用。

- 60分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - ego的第1号事项：整理季度任务
  - learn的第1号事项：firebase的开源替代
  - ego的第2号事项：整理知识体系的层级定义

- 90分钟时间片：
  - PSMD的第2号事项：子1609
  - PSMD的第4号事项：整理新版本term的manifest code
  - learn的第4号事项：飞书 nodejs sdk
  - raw的第4号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.01.25.[1609的分立、合并。]任务&body=日期: 2025.01.25.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250125.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250125093000"></a>
## 09:30 ~ 12:29
## PSMD: [1609的分立、合并。]

- 使用版本：
    - file:///D:/huangyg/git/PSMD/view/COM.1609.html
    - file:///D:/huangyg/git/PSMD/view/term.f70677ff.html
    - 1609假设director、supervisor的席位超过一个，所以增加了议事规则。
    - 三级决策条款4. 的修订子句重复。
        - D:\huangyg\git\PSMD\data\term.efaeac70.yaml 去掉“本条款按照<term.efaeac70.term.1>修订。”
        - node term term f70677ff
        - node term COM 1609
```
diff --git "a/D:\\huangyg\\git\\PSMD\\view\\COM.1609.html" "b/D:\\huangyg\\git\\PSMD\\view\\term.f70677ff.html"
index b6ada33..f68d8ed 100644
--- "a/D:\\huangyg\\git\\PSMD\\view\\COM.1609.html"
+++ "b/D:\\huangyg\\git\\PSMD\\view\\term.f70677ff.html"
@@ -1,8 +1,4 @@
-<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 </h3><hr/><p>正文:</p><p># 共同体模型1609 正文 <br/>
-## 决策条款  <br/>
-### 自修订条款  <br/>
-自修订条款1. 本条款按照本条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。<br/>
-### 二级决策条款  <br/>
+<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 f70677ff</h3><hr/><p>正文:</p><p>自修订条款1. 本条款按照自修订条款1.条款修订。由deployer书面提交即可行使职权。deployer职权包括修订本条款内容。<br/>
 二级决策条款1. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经三分之二以上director通过可以作出决议。<br/>
 二级决策条款2. 本条款按照自修订条款1.条款修订。根据director会议议事规则，经二分之一以上director通过可以作出决议：<br/>
   - director工作计划（含预算案）<br/>
@@ -25,9 +21,6 @@
   - 预算透支限额<br/>
   - director任期提前结束，重新进行选举。<br/>
   - supervisor任期提前结束，重新进行选举。<br/>
-二级决策条款7. 本条款按照自修订条款1.条款修订。 [本条款内容待定] director会议议事规则，可以根据该届director的工作习惯，选择主流议事规则之一。<br/>
-二级决策条款8. 本条款按照自修订条款1.条款修订。 [本条款内容待定] supervisor会议议事规则，可以根据该届supervisor的工作习惯，选择主流议事规则之一。<br/>
-### 三级决策条款  <br/>
 三级决策条款1. 本条款按照二级决策条款1.条款修订。由admin书面提交修订以下事项，提交时生效：<br/>
   - admin工作计划草案<br/>
   - admin工作报告<br/>
@@ -38,9 +31,9 @@
 三级决策条款3. 本条款按照二级决策条款3.条款修订。全体worker、RIU持有者选举。假设worker合同的报酬RIU总额为w，RIU总额为r，席位为x，worker手中合同的每个RIU报酬权重为r*x*p，RIU持有者持有的每个RIU权重为w*x*(100-p)。选举采用累积投票制，不对单独席位进行罢免投票，每次都全部重选。<br/>
   - 选举director<br/>
   - 选举supervisor<br/>
-三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照二级决策条款4修订。全体RIU持有者选举，以持有的RIU为权重。<br/>
+三级决策条款4. 本条款按照二级决策条款4.条款修订。本条款按照<term.f70677ff.level1.4>修订。全体RIU持有者选举，以持有的RIU为权重。<br/>
   - 任免trustee。<br/>
-三级决策条款5. 本条款按照二级决策条款4.条款修订。deployer行使以下职权：<br/>
+职权分配1. 本条款按照二级决策条款4.条款修订。deployer行使以下职权：<br/>
   - 设定p%<br/>
   - 设定director席位数<br/>
   - 制定director会议议事规则<br/>
@@ -52,7 +45,6 @@
   - 任命第一届supervisor<br/>
   - 任命下一任deployer<br/>
   - 修改自修订条款1.内容<br/>
-### 基本管理制度  <br/>
 基本管理制度.保密制度.1. 本条款按照自修订条款1.条款修订。本制度正文公开。<br/>
 基本管理制度.保密制度.2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制度不得规定。<br/>
 基本管理制度.保密制度.3. 本条款按照二级决策条款1.条款修订。其它规章正文及执行记录默认为公开。<br/>
@@ -91,9 +83,12 @@
   - 在审议周期的第10天结束前阅读完上一个审议周期结束前归档的通用工单，提交审议报告以及基本管理制度的修订动议。<br/>
   - 在审议周期的第20天结束前阅读完其他成员提交的审议报告和基本管理制度的修订动议，提交审议报告。<br/>
   - 在审议周期结束前对基本管理制度修订动议进行表决。<br/>
-</p><hr/><p>注释:</p><p>自修订条款1. 为了防止deployer被架空，规定其自行定义程序上的细节。部署后根据实体地址和位置、接收人员的职务名称、服务器域名和IP地址等信息，可以修改提交方式。<br/>
-二级决策条款2. 本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。<br/>
-三级决策条款5. 基本管理制度.利益分配.<br/>
+</p><hr/><p>注释:</p><p>自修订条款1.<br/>
+为了防止deployer被架空，规定其自行定义程序上的细节。部署后根据实体地址和位置、接收人员的职务名称、服务器域名和IP地址等信息，可以修改提交方式。<br/>
+二级决策条款2.<br/>
+本条款是指针对未规定的事项，制订基本管理制度的第一版。后续版本按照各条款修订权产生。<br/>
+基本管理制度.<br/>
+基本管理制度.利益分配.<br/>
 基本管理制度.利益分配.2.<br/>
 - 所有工作成果都属于资产。<br/>
 基本管理制度.利益分配.5.<br/>
```

- 分立和合并涉及1609模型的初衷，继续斟酌。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.01.25.[子1609]任务&body=日期: 2025.01.25.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250125.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250125140000"></a>
## 14:00 ~ 14:00
## PSMD: [子1609]


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.01.25.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2025.01.25.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250125.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250125160000"></a>
## 16:00 ~ 16:00
## PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

