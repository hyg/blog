# 2024.11.11.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:53	raw: [debug-食材营养成分的蛋白质、脂肪等大项使用mg单位时换算出错。](#20241111140000)
- 14:30~14:30	ego: [整理季度任务](#20241111143000)
- 16:00~16:09	PSMD: [整理闫岸家政能力讨论](#20241111160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2880 | 10650 | 4905 |
| PSMD | 4000 | 965 | 3035 | 1050 |
| ego | 2530 | 1531 | 999 | 945 |
| infra | 2000 | 250 | 1750 | 210 |
| xuemen | 1000 | 45 | 955 | 480 |
| raw | 1000 | 54 | 946 | 420 |
| learn | 2000 | 35 | 1965 | 1020 |
| js | 1000 | 0 | 1000 | 780 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理季度任务
  - xuemen的第1号事项：月初事务
  - raw的第1号事项：使用convert-units
  - ego的第2号事项：未进行的todo项，增加特别的特征，不产生draft文件，day log中使用固定提示。

- 60分钟时间片：
  - PSMD的第1号事项：整理闫岸家政能力讨论
  - learn的第1号事项：wordpress plugin
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第1号事项：引用github等特定版本js文件的html模版

- 90分钟时间片：
  - PSMD的第2号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - PSMD的第3号事项：整理default模型
  - infra的第3号事项：schema立项。
  - raw的第4号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 195分钟时间片：
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第5号事项：machines model
  - ego的第7号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.11.[debug-食材营养成分的蛋白质、脂肪等大项使用mg单位时换算出错。]任务&body=日期: 2024.11.11.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/11/20241111.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241111140000"></a>
## 14:00 ~ 14:53
## raw: [debug-食材营养成分的蛋白质、脂肪等大项使用mg单位时换算出错。]

- 把梨的蛋白质改为：
```
  蛋白质:
    amount: 400
    unit: mg
    nrv: 0.7
```
- 重现问题node raw 20241105
- npm install convert-units
- 在foodsum的处理并没有问题，只是在第一个食材使用mg时，后续都会使用mg作为单位。
    - 在营养成分大表、nrv计算都没有问题。
- 营养成分详情表的计算会出问题
    - foodsum()
```
data["累计摄入"] = etable[e].amount.toFixed(3) + etable[e].unit;
```
- 在供能比例的计算会出问题。
    - maketable()中
```

        if(etable["脂肪"].unit != "g"){
            etable["脂肪"].amount = convert(etable["脂肪"].amount).from(etable["脂肪"].unit).to('g');
            etable["脂肪"].unit = "g";
        }
        if(etable["蛋白质"].unit != "g"){
            etable["蛋白质"].amount = convert(etable["蛋白质"].amount).from(etable["蛋白质"].unit).to('g');
            etable["蛋白质"].unit = "g";
        }
        if(etable["碳水化合物"].unit != "g"){
            etable["碳水化合物"].amount = convert(etable["碳水化合物"].amount).from(etable["碳水化合物"].unit).to('g');
            etable["碳水化合物"].unit = "g";
        }
```
- 打补丁解决问题，更系统的方法在新版中实现。


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.11.[整理季度任务]任务&body=日期: 2024.11.11.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/11/20241111.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241111143000"></a>
## 14:30 ~ 14:30
## ego: [整理季度任务]


---
<a href="mailto:huangyg@mars22.com?subject=关于2024.11.11.[整理闫岸家政能力讨论]任务&body=日期: 2024.11.11.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/11/20241111.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20241111160000"></a>
## 16:00 ~ 16:09
## PSMD: [整理闫岸家政能力讨论]

