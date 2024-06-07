# 2024.06.07.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45	[重新设计S2状态下的学门基本管理制度](#20240607074500)  
- 09:30	[编写浮动时间表代码](#20240607093000)  
- 14:00	[ESM(ESModule)](#20240607140000)  
- 14:30	[检查etable递归过程是否累加amount字段而未检查unit字段的。](#20240607143000)  
- 16:00	[熟悉知识库语法](#20240607160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 15975 | 15518 | 457 | 2280 |
| PSMD | 7000 | 6981 | 19 | 600 |
| learn | 1000 | 1197 | -197 | 870 |
| ego | 4500 | 4404 | 96 | 330 |
| js | 1375 | 1203 | 172 | 330 |
| xuemen | 1500 | 1253 | 247 | 120 |
| raw | 600 | 450 | 150 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：https://www.npmjs.com/package/commander
  - raw的第1号事项：选择有价值的数据显示到entry页面
  - js的第2号事项：学习AMD规范，如果适用就开发范例
  - learn的第2号事项：寻找可编程的,去中心化的信息发布方式

- 60分钟时间片：
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - learn的第1号事项：linkml, yaml-ld
  - xuemen的第2号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - js的第3号事项：学习 nodejs test框架

- 90分钟时间片：
  - ego的第1号事项：编写浮动时间表代码
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法
  - learn的第8号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：entify, ego draft
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第10号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.07.[重新设计S2状态下的学门基本管理制度]任务&body=日期: 20240607%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240607074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240607074500"></a>
## 7:45~8:44
重新设计S2状态下的学门基本管理制度

- 昨晚raw项目上有交流到凌晨。今天上午休整，任务都取消、回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.07.[编写浮动时间表代码]任务&body=日期: 20240607%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240607093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240607093000"></a>
##  9:30~10:59
编写浮动时间表代码

- 昨晚raw项目上有交流到凌晨。今天上午休整，任务都取消、回到waitinglist。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.07.[ESM(ESModule)]任务&body=日期: 20240607%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240607140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240607140000"></a>
## 14:00~14:29
ESM(ESModule)

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules
- https://github.com/mdn/js-examples/tree/main/module-examples
    - 这几个案例设计得不错

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.07.[检查etable递归过程是否累加amount字段而未检查unit字段的。]任务&body=日期: 20240607%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240607143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240607143000"></a>
## 14:30~14:59
检查etable递归过程是否累加amount字段而未检查unit字段的。

- foodsum已有检查代码。
```
        // todo:check the unit (g,mg,kg,...) and change amount
        //console.log("fooddata.unit's type:"+typeof(fooddata.unit));
        let r = 1;
        if (foodunit == fooddata.unit) {
            r = foodamount / fooddata.amount;
        } else if ((fRate[foodunit] !== undefined) && (fRate[foodunit][fooddata.unit] !== undefined)) {
            r = foodamount * fRate[foodunit][fooddata.unit] / fooddata.amount;
        } else {
            console.log("unknow unit:\t" + foodunit + "\t" + fooddata.unit + "\tfoodname:" + foodname + "\tfoodamount:" + foodamount);
            return false;
        }

        // 递归结构的食材，food中有food。
        for (var id in fooddata.food) {
            foodsum(fooddata.food[id].name, fooddata.food[id].amount * r, fooddata.food[id].unit, etable, ftable);
        }
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.07.[熟悉知识库语法]任务&body=日期: 20240607%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240607160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240607160000"></a>
## 16:00~16:59
熟悉知识库语法

- http://xmlns.com/foaf/spec/
- https://www.w3.org/TR/owl-ref/
- https://json-ld.github.io/yaml-ld/spec/
- https://linkml.io/linkml/
    - 综合比较之后，选择linkml作为首选、yaml-ld作为备选，实现PSMD一个新版本。在实践检验后再决定后续方向。
        - 自定义语法
        - 多种语法兼容的代码
