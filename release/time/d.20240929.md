# 2024.09.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~09:30	raw: [整理代码，理顺food.js几个成员函数之间的调用关系](#20240929093000)
- 14:00~14:14	ego: [day over [date]带有日期参数时，redo就不要插回season metadata了。](#20240929140000)
- 14:30~14:59	learn: [learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/](#20240929143000)
- 16:00~19:59	PSMD: [整理9.5.讨论和代理协议](#20240929160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 14071 | 3629 | 4665 |
| PSMD | 7000 | 5477 | 1523 | 990 |
| ego | 4000 | 2206 | 1794 | 795 |
| infra | 2000 | 305 | 1695 | 210 |
| xuemen | 1500 | 241 | 1259 | 510 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2409 | -909 | 960 |
| js | 1200 | 2018 | -818 | 720 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：新版本任务、子任务的数据结构
  - xuemen的第1号事项：整理财务报表
  - xuemen的第2号事项：月初财务工作

- 60分钟时间片：
  - infra的第1号事项：动态菜单设计。
  - js的第1号事项：js class
  - learn的第1号事项：https://proto.school/merkle-dags IPLD,Merkle DAGs, Structuring Data for the Distributed Web
  - ego的第2号事项：schema manifest code v0

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - infra的第3号事项：schema立项。
  - PSMD的第4号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第3号事项：kernel模型升级
  - ego的第4号事项：新版ego, instance or model, any manifest
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.29.[整理代码，理顺food.js几个成员函数之间的调用关系]任务&body=日期: 2024.09.29.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/09/20240929.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240929093000"></a>
## 09:30 ~ 09:30
## raw: [整理代码，理顺food.js几个成员函数之间的调用关系]

- 继续PSMD 2024.08.28.的后续引导。
    - 没有点开框图，以为要去别的地方找标准 -- 要增强提示。
    - 看不懂，按照不符合处理 -- 提前提示。
    - 对于不同情况有不同建议，不同时间处于不同情况，还需要再次说明。
- 本任务另外追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.29.[day over [date]带有日期参数时，redo就不要插回season metadata了。]任务&body=日期: 2024.09.29.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240929.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240929140000"></a>
## 14:00 ~ 14:14
## ego: [day over [date]带有日期参数时，redo就不要插回season metadata了。]


- ego.js已经判断过，date参数下不产生次日计划。
- day.js在makedaylog()里面redo的处理代码外，增加一层判断。
```
            if(datestr == util.datestr()){
                if(timeperiod.redo == true){
                    season.addtodoitem(seasonobj,timeperiod.subject,timeperiod.title,timeperiod.amount,timeperiod.readme);
                    if(timeperiod.trueamount != null){
                        timeperiod.amount = timeperiod.trueamount ;
                    }
                }else if(timeperiod.redo != null){
                    if(timeperiod.readme != null){
                        season.addtodoitem(seasonobj,timeperiod.subject,timeperiod.title,timeperiod.redo,timeperiod.readme+"- read "+timeperiod.output+"\n");
                    }else{
                        season.addtodoitem(seasonobj,timeperiod.subject,timeperiod.title,timeperiod.redo,"- read "+timeperiod.output+"\n");
                    }
                    
                    if(timeperiod.trueamount != null){
                        timeperiod.amount = timeperiod.trueamount ;
                    }
                } 
            }else{
                log("not today, don't redo.");
            }
```
- 测试ok。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.29.[learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/]任务&body=日期: 2024.09.29.%0D%0A序号: 8%0D%0A手稿:../../draft/2024/09/20240929.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240929143000"></a>
## 14:30 ~ 14:59
## learn: [learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/]

- 随着DAG的学习，也看一下：https://ipld.io/docs/codecs/known/dag-json/
- https://github.com/ipld/js-dag-json
```
D:\huangyg\git\js.sample\ipld>node DAG-json.js
data: <Buffer 7b 22 78 22 3a 31 2c 22 79 22 3a 5b 32 2c 33 2c 7b 22 2f 22 3a 22 51 6d 61 6f 7a 4e 52 37 44 5a 48 51 4b 31 5a 63 55 39 70 37 51 64 72 73 68 4d 76 58 ... 109 more bytes>
decoded: {
  x: 1,
  y: [ 2, 3, CID(QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4) ],
  z: {
    a: CID(QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4),
    b: null,
    c: 'string'
  }
}
```

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.29.[整理9.5.讨论和代理协议]任务&body=日期: 2024.09.29.%0D%0A序号: 10%0D%0A手稿:../../draft/2024/09/20240929.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240929160000"></a>
## 16:00 ~ 19:59
## PSMD: [整理9.5.讨论和代理协议]

- 整理本任务的各时间片手稿。
- 起草mermaid图初稿。
- 确定整体思路，准备总体意见。

---

- 以下是2024.09.30.根据手稿统一整理。

- 条件：如果不符合附件42、符合附件43。
- 建议：先参考default+1406标准模型开展业务。
- 在这前提条件下：

### 5.3.

- 有比较完备的内部制度，可以找素质能力比较高的人合作；
- 主要靠自有资金，在精心选择的小范围内建立渠道：
    - 在目标区域投放广告，组织促销活动；
    - 在目标区域要达到一线强势品牌的宣传力度；
    - 以预付货款、有压货任务为条件招募代理商。
- 我的接口：
    - 协助检查工作计划、预算和工作记录；
    - 根据上述工作标准的落实情况，逐步提供新颖、有代差的上下游合作方案；
    - 根据团队成员情况，逐渐提交新颖的、有代差的章程和管理制度。