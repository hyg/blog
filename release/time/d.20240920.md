# 2024.09.20.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月补足前两月缺勤。今天绑定模版1(1c)。

<a id="index"></a>
- 14:00~14:59	ego: [ego day各参数中增加已实现的diff](#20240920140000)
- 14:30~15:29	ego: [day.js makedaylog() 根据日期读取正确的season obj](#20240920143000)
- 16:00~16:00	js: [js class](#20240920160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 11957 | 5743 | 4755 |
| PSMD | 7000 | 3962 | 3038 | 870 |
| ego | 4000 | 1953 | 2047 | 945 |
| infra | 2000 | 200 | 1800 | 120 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2258 | -758 | 990 |
| js | 1200 | 1928 | -728 | 900 |

---
waiting list:


- 30分钟时间片：
  - infra的第2号事项：动态菜单设计。
  - PSMD的第4号事项：根据近期交流情况整理入口protocol

- 60分钟时间片：
  - ego的第1号事项：ego day各参数中增加已实现的diff
  - js的第1号事项：js class
  - raw的第1号事项：熟悉内脏之间的关系
  - ego的第2号事项：ego day各参数中增加已实现的diff

- 90分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - infra的第1号事项：schema立项。
  - learn的第1号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第2号事项：整理新版本term的manifest code

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版ego, instance or model, any manifest
  - PSMD的第5号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.20.[ego day各参数中增加已实现的diff]任务&body=日期: 2024.09.20.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/09/20240920.00.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240920140000"></a>
## 14:00 ~ 14:59
### ego: [ego day各参数中增加已实现的diff]

- 增加可选参数diff报错。
```
daycommand
    .command("init <mode> [diff]")
    .description('初始化：绑定时间模版，创建日计划、次日规划、手稿及元数据文件。')
    .action((mode,diff=0) => {
        log("init:%s %s", mode,diff);
        var dayobj = day.makedayobj(mode,diff);
        day.makedayplan(dayobj);
        day.maketomorrowinfo();
    });
```
```
huangyg@dev:~/git/ego/src$ node ego day init 1 1 
> init:1 1
node:fs:442
    return binding.readFileUtf8(path, stringToFlags(options.flag));
                   ^

Error: ENOENT: no such file or directory, open '../../raw/health/d.20250320.yaml'
    at Object.readFileSync (node:fs:442:20)
    at Object.getwaketime (/home/huangyg/git/ego/src/day.js:26:38)
    at Object.makedayobj (/home/huangyg/git/ego/src/day.js:68:29)
    at Command.<anonymous> (/home/huangyg/git/ego/src/ego.js:28:26)
    at Command.listener [as _actionHandler] (/home/huangyg/git/ego/src/node_modules/commander/lib/command.js:542:17)
    at /home/huangyg/git/ego/src/node_modules/commander/lib/command.js:1502:14
    at Command._chainOrCall (/home/huangyg/git/ego/src/node_modules/commander/lib/command.js:1386:12)
    at Command._parseCommand (/home/huangyg/git/ego/src/node_modules/commander/lib/command.js:1501:27)
    at /home/huangyg/git/ego/src/node_modules/commander/lib/command.js:1265:27
    at Command._chainOrCall (/home/huangyg/git/ego/src/node_modules/commander/lib/command.js:1386:12) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '../../raw/health/d.20250320.yaml'
}

Node.js v22.4.0
```
- 改用util.1.js正常：
```
huangyg@dev:~/git/ego/src$ node ego day init 1 0
> init:1 0
getwaketime> diff: 0
getwaketime> theDate: 2025-03-19T13:13:42.062Z
getwaketime> dateStr: 20240920
makedayobj> waketime: 65900
...
```
- diff是负数还不成功。
```
huangyg@dev:~/git/ego/src$ node ego day init 1 -1
error: unknown option '-1'
huangyg@dev:~/git/ego/src$ node ego day init 1 "-1"
error: unknown option '-1'
```
- https://www.npmjs.com/package/commander 今天无法访问，继续追加时间改天再测。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.20.[day.js makedaylog() 根据日期读取正确的season obj]任务&body=日期: 2024.09.20.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/09/20240920.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240920143000"></a>
## 14:30 ~ 15:29
### ego: [day.js makedaylog() 根据日期读取正确的season obj]

- 修改 seasonfilename、loadseasonobj，增加datestr参数。
- 修改util.1.js 增加str2date()
```
huangyg@dev:~/git/ego/src$ node util.test
time: Mon Jul 08 2024 17:00:26 GMT+0800 (中国标准时间)
date: Mon Jul 08 2024 00:00:00 GMT+0800 (中国标准时间)
✔ make meta file id (3.281412ms)
✔ get today str (1.593289ms)
✔ get time from str (2.045348ms)
✔ get date from str (1.369556ms)
ℹ tests 4
ℹ suites 0
ℹ pass 4
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 18.918724
```

```
huangyg@dev:~/git/ego/src$ node season.test
theDate =  Fri Sep 20 2024 20:59:05 GMT+0800 (中国标准时间)
theDate =  Fri Sep 20 2024 20:59:05 GMT+0800 (中国标准时间)
datestr is empty
theDate =  Wed May 01 2024 00:00:00 GMT+0800 (中国标准时间)
theDate =  Fri Sep 20 2024 20:59:05 GMT+0800 (中国标准时间)
updatesold> season.sold:
{
  PSMD: 3962,
  ego: 1893,
  xuemen: 241,
  infra: 200,
  js: 1988,
  learn: 2258,
  raw: 1415
}
theDate =  Fri Sep 20 2024 20:59:05 GMT+0800 (中国标准时间)
deletetodoitem> delete the todo item from PSMD: [PSMD.195]
deletetodoitem> before delete todo item:
- '195': PSMD.195
  bind:
    - '60': PSMD.195.60
      bind:
        - '30': PSMD.195.60.30
        - '90': PSMD.195.60.90
    - '90': PSMD.195.90
  readme: PSMD.195.readme
- '90': PSMD.90
  readme: PSMD.90.readme

deletetodoitem> after delete todo item:
- '60': PSMD.195.60
  bind:
    - '30': PSMD.195.60.30
    - '90': PSMD.195.60.90
- '90': PSMD.195.90
- '90': PSMD.90
  readme: PSMD.90.readme

deletetodoitem> delete the todo item from ego: [ego.30]
deletetodoitem> before delete todo item:
- '195': ego.195
  readme: ego.195.readme
- '30': ego.30

deletetodoitem> after delete todo item:
- '195': ego.195
  readme: ego.195.readme

theDate =  Fri Sep 20 2024 20:59:05 GMT+0800 (中国标准时间)
makestattable> seasonstatstr:

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 11837 | 5863 | 4395 |
| PSMD | 7000 | 3962 | 3038 | 870 |
| ego | 4000 | 1833 | 2167 | 765 |
| infra | 2000 | 200 | 1800 | 120 |
| xuemen | 1500 | 241 | 1259 | 450 |
| raw | 500 | 1415 | -915 | 480 |
| learn | 1500 | 2258 | -758 | 990 |
| js | 1200 | 1928 | -728 | 720 |

✔ get season metadata file name (5.32418ms)
✔ update season sold time (43.931915ms)
✔ delete todo item (7.423786ms)
✔ make season stat table (5.390311ms)
ℹ tests 4
ℹ suites 0
ℹ pass 4
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 79.04762
```
- makedaylog() : var seasonobj = season.loadseasonobj(datestr);

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.09.20.[js class]任务&body=日期: 2024.09.20.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/09/20240920.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240920160000"></a>
## 16:00 ~ 16:00
### js: [js class]

- 重装系统，任务顺延。