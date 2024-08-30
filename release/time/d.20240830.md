# 2024.08.30.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~10:59	PSMD: [整理新版本term的manifest text](#20240830093000)
- 14:00~14:19	PSMD: [整理新版本term的manifest code](#20240830140000)
- 16:00~17:40	ego: [未启动todo项从day metadata中自动返回waiting list](#20240830160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 8927 | 8773 | 3885 |
| PSMD | 7000 | 2612 | 4388 | 780 |
| ego | 4000 | 1573 | 2427 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 450 |
| raw | 500 | 1055 | -555 | 150 |
| learn | 1500 | 1723 | -223 | 990 |
| js | 1200 | 1693 | -493 | 750 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第3号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。

- 60分钟时间片：
  - learn的第1号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/
  - js的第1号事项：js class
  - ego的第2号事项：eventemitter sample
  - js的第2号事项：learn Orbitdb

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest code
  - PSMD的第2号事项：整理新版本term的manifest text
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第6号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.30.[整理新版本term的manifest text]任务&body=日期: 2024.08.30.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/08/20240830093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240830093000"></a>
# 9:30~10:59
PSMD: [整理新版本term的manifest text]

- 整理最近几周的交流。
- 针对预设结论提炼了两种典型的行为模式。这里的预设结论包括来自内部、外部、不明来历的，默认有多种。

1. 根据收到的观点排序后，依次核实，直到有一个的依据、逻辑都达到自己标准，否则不下结论。
2. 排序后以个人名义抢发第一位的观点，遇到质疑再补充前面的依据和逻辑，达不到外部标准就降低内部标准说服自己。

- 采用第1种模式的人，排序错误会造成思维卡顿，观点更晚、更少。他们有动力去优化默认排序，也就是价值观。
- 第2种模式如果赌对了，表现是知识渊博、思维敏捷；赌错了除了尴尬一点，还有一个衍生的问题：这个错误和行为模式会被刻在心里，随着内部辩解越刻越深，成为他们今后思考和提问的隐藏前提。

- 与其他人的对话（包括AI）可以更好地支撑第1中模式下的思考。
- 跳出第2种模式，只能通过自己与自己的对决进行，没有外部的人（包括AI）可以帮助，除了指出有这两种模式以外。

- 第2种模式下补充前面依据和逻辑时，会下意识地找人演练一下，这就是大部分人在大部分场合听到的。
- 真正第1种模式已经收缩到很少的专门时间地点了。

- 安排时间设计针对性的协议。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.30.[整理新版本term的manifest code]任务&body=日期: 2024.08.30.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240830140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240830140000"></a>
## 14:00~15:29
PSMD: [整理新版本term的manifest code]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.30.[未启动todo项从day metadata中自动返回waiting list]任务&body=日期: 2024.08.30.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/08/20240830160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240830160000"></a>
## 16:00~16:59
ego: [未启动todo项从day metadata中自动返回waiting list]

### day.js
- makedaylog()
```
        for (var i in dayobj.time) {
            var timeperiod = dayobj.time[i];
            var begintime = util.str2time(timeperiod.begin);

            if(timeperiod.redo == true){
                var todoitem = new Object();

                season.addtodoitem(seasonobj,timeperiod.subject,timeperiod.title,timeperiod.amount,timeperiod.readme);
                if(timeperiod.trueamount != null){
                    timeperiod.amount = timeperiod.trueamount ;
                }
                
            }            
        }
```
    - 由于todoitem在waitinglist已有定义，所以只传数据不用这个object参数。
- makeindex()
```
if(timeperiod.amount > 0){
                endtime = new Date(endtime.setMinutes(endtime.getMinutes() + timeperiod.amount - 1));
            }
```

### season.js
```
addtodoitem(seasonobj, task, name, amount, readme) {
        log("add the todo item to %s: %s", task, name);

        log("before add todo item:\n" + yaml.dump(seasonobj.todo[task]));
        var item = new Object();
        item[amount] = name ;
        if(readme != null){
            item.readme = readme;
        }

        seasonobj.todo[task].splice(0,0,item);

        log("after add todo item:\n" + yaml.dump(seasonobj.todo[task]));

        return seasonobj;
    },
```

```
    - begin: '20240830140000'
    amount: 90
    redo: true
    type: work
    name: 工作
    subject: PSMD
    title: 整理新版本term的manifest code
    readme: |
      - 为了显示而设计的term model，并不适合与代码绑定。
      - 设计前置protocol的定义和数据表现
        - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
        - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
        - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
      - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
        - 根据FSM、FPM、machine的设计决定term的粒度。
        - 设计每项知识的思考和案例积累锚点。
      - 随之修订manifest text。
      - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
    output: ../../draft/2024/08/20240830140000.md
    namelink: http://simp.ly/p/lsBYG9
```
```
    addtodoitem> add the todo item to PSMD: 整理新版本term的manifest code
addtodoitem> before add todo item:
- '30': 整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
......

addtodoitem> after add todo item:
- '90': 整理新版本term的manifest code
  readme: |
    - 为了显示而设计的term model，并不适合与代码绑定。
    - 设计前置protocol的定义和数据表现
      - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
      - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
      - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
    - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
      - 根据FSM、FPM、machine的设计决定term的粒度。
      - 设计每项知识的思考和案例积累锚点。
    - 随之修订manifest text。
    - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
- '30': 整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
```

```
makedaylog> datestr: 20240830
makeindex> indexstr:
- 09:30~10:59   PSMD: [整理新版本term的manifest text](#20240830093000)
- 14:00~14:00   PSMD: [整理新版本term的manifest code](#20240830140000)
- 16:00~16:59   ego: [未启动todo项从day metadata中自动返回waiting list](#20240830160000)
```

- 开始实际使用。