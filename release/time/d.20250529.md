# 2025.05.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~16:59	raw: [2025.6.食材预算](#20250529140000)
- 14:30~15:59	js: [json-query](#20250529143000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5067 | 8463 | 7035 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1470 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 285 | 715 | 450 |
| learn | 2000 | 1123 | 877 | 2160 |
| js | 1000 | 210 | 790 | 990 |

---
waiting list:


- 30分钟时间片：
  - js的第2号事项：lodash.findkey

- 60分钟时间片：
  - learn的第1号事项：量子物理的数学基础
  - js的第1号事项：jora
  - raw的第1号事项：新版food plan
  - ego的第2号事项：entry的科目归并

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的按月归并
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.29.[2025.6.食材预算]任务&body=日期: 2025.05.29.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250529.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250529140000"></a>
## 14:00 ~ 16:59
## raw: [2025.6.食材预算]

- 蛋白质按每天50克红肉、50克白肉、一个鸡蛋三杯奶准备。
    - 红肉：2斤梅花肉做粉蒸肉、叉烧，1斤羊腿肉做卤肉。
    - 白肉：2斤鸡腿肉做水煎、烤肉，1斤鱼肉随蔬菜买，烤或者汤。
    - 鸡蛋：随蔬菜在超市买，水煮蛋、蛋挞。
    - 奶粉：计划6.25.补货
    - 豆制品：蒲草香干20块
    - 准备2斤虎皮凤爪，熏兔腿，牛肚备用。
- 主食按每天50克大米、20克青麦仁、20克小米、10克燕麦片、10克绿豆、60~80克面食准备。
    - 南粳46到八月底
    - 青麦仁到九月底
    - 小米到七月中
    - 河套牌麦芯粉到七月底
    - 面条到七月中旬，根据结果再试吃几种无盐面条，最后确定持续补货的品种。
- 水果按每天三种准备。
    - 早餐：人参果到6.29.
    - 午餐：百香果到6.7.，接桃到6.16.，杏到7.10.
    - 晚餐：桔柚到6.6.，接圣女果（青甜2号或丹东409）到6.22，接伦晚脐橙或夏橙到7.7.
    - 荔枝、芒果、香蕉、西瓜、木瓜备选。
- 蔬菜按每天200克叶菜、50克胡萝卜、50克南瓜、50克洋葱准备。
    - 芦笋4斤早餐用
- 油籽干货：
    - 麦胚芽到6.6.，补充600g。
    - 桑葚干到6.18.，补充500g。
    - 木耳到六月中，补充500g。
- 调味
    - 番茄酱到6.6.，补充1600g。
    - 蒸肉米粉5包。
    - 红糖500g。
    - 卤肉料2包8次。
- 其它
    - 肉粽十个
    - 通勤餐三次
    - 蛋挞一套
    - 黄山烧饼两盒
- 以上基础预算共1050元，200元备用金。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.29.[json-query]任务&body=日期: 2025.05.29.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250529.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250529143000"></a>
## 14:30 ~ 15:59
## js: [json-query]

- https://www.npmjs.com/package/json-query
    - npm install json-query
- D:\huangyg\git\js.sample\query\json-query.js
- 原生的条件中没有日期比较，正则表达式报错，先用helper完成始末日期之间的AER记录筛选。
```
var jsonQuery = require('json-query');
var fs = require('fs');
var yaml = require('js-yaml');

function log(...s) {
    s[0] = log.caller.name + "> " + s[0];
    console.log(...s);
}

function loadAER(year) {
    var AERmap = new Object();
    var voucherfolder = "../../ego/data/voucher/" + year;
    fs.readdirSync(voucherfolder).forEach(file => {
        if (file.substr(0, 4) == "AER.") {
            var AER = yaml.load(fs.readFileSync(voucherfolder + "/" + file, 'utf8'));
            AERmap[file] = AER;
        }
    });
    return AERmap;
}
var date1= new Date("2025-05-01");
var date2= new Date("2025-05-10");
var helpers = {
    period: function(input){
        //log(yaml.dump(input));
        var date = Date.parse(input.date);
      if (date > date1 & date < date2){
        return input
      }
    }
}
var AERmap = loadAER(2025);
//log(yaml.dump(AERmap));

var result = jsonQuery('[**][*:period]', {data: AERmap, locals: helpers}).value;
log(yaml.dump(result));
```

```
D:\huangyg\git\js.sample\query>node json-query.js
> - date: 2025-05-03T00:00:00.000Z
  VoucherID: '4200002658202505032975872546'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: 22.85
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: 22.85
  comment:
    - name: 芹菜
      amount: 500
      unit: g
      asset: 2.23
    - name: 油菜
      amount: 500
      unit: g
      asset: 1.62
    - name: 小白菜
      amount: 300
      unit: g
      asset: 1.92
    - name: 洋葱
      amount: 650
      unit: g
      asset: 5.18
    - name: 黑鱼片
      amount: 250
      unit: g
      asset: 11.9
- date: 2025-05-03T00:00:00.000Z
  VoucherID: '2010000420250503000004041922'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: xuemen
        asset: rmb
        amount: 1000
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: 1000
  comment: null
- date: 2025-05-06T00:00:00.000Z
  VoucherID: '2025050622001431991454719577'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: xuemen
        asset: rmb
        amount: 238.68
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: 238.68
  comment:
    - name: ECS服务器
      amount: 1
      unit: 年
      asset: 238.68
- date: 2025-05-07T00:00:00.000Z
  VoucherID: '4200002609202505073566415424'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: 12.22
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: 12.22
  comment:
    - name: 菠菜
      amount: 350
      unit: g
      asset: 2.33
    - name: 油菜
      amount: 500
      unit: g
      asset: 1.48
    - name: 小白菜
      amount: 300
      unit: g
      asset: 2.11
    - name: 鸡蛋
      amount: 400
      unit: g
      asset: 6.3
- date: 2025-05-07T00:00:00.000Z
  VoucherID: '4200002683202505070481588386'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.site.bj1
        asset: rmb
        amount: 30
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: 30
  comment:
    - name: 自来水
      amount: 6
      unit: 立方米
      asset: 30
- date: 2025-05-07T00:00:00.000Z
  VoucherID: '4200002612202505071094369277'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.site.bj1
        asset: rmb
        amount: 15
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: 15
  comment:
    - name: 快递
      amount: 2
      unit: kg
      asset: 15
- date: 2025-05-09T00:00:00.000Z
  VoucherID: '4200002608202505096907570479'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: 18.83
    credit:
      - AccountTitle: 微信零钱
        asset: rmb
        amount: 18.83
  comment:
    - name: 油菜
      amount: 500
      unit: g
      asset: 1.69
    - name: 圆白菜
      amount: 1000
      unit: g
      asset: 2.99
    - name: 胡萝卜
      amount: 600
      unit: g
      asset: 2.96
    - name: 小白菜
      amount: 300
      unit: g
      asset: 2.11
    - name: 快菜
      amount: 500
      unit: g
      asset: 3.9
    - name: 洋葱
      amount: 650
      unit: g
      asset: 5.18
- date: 2025-05-09T00:00:00.000Z
  VoucherID: '19250509172010031716905866053015'
  AccountingSoftwareID: null
  AccountingEntry:
    debit:
      - AccountTitle: raw.food
        asset: rmb
        amount: 92.94
      - AccountTitle: raw.site.bj1
        asset: rmb
        amount: 4.15
    credit:
      - AccountTitle: 银行存款
        asset: rmb
        amount: 97.09
  comment:
    - name: 腊肉
      amount: 500
      unit: g
      asset: 18.84
    - name: 腊鸭腿
      amount: 8
      unit: 只
      asset: 25.67
    - name: 青麦碾转
      amount: 500
      unit: g
      asset: 15.56
    - name: 青麦仁
      amount: 2000
      unit: g
      asset: 32.87
    - name: O型圈套装
      amount: 1
      unit: 套
      asset: 4.19
    - name: 多多钱包余额
      amount: 0.04
      unit: 元
      asset: -0.04
```