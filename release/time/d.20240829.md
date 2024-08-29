# 2024.08.29.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1c)。

<a id="index"></a>
- 14:00~13:59	PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。](#20240829140000)
- 14:30~15:34	raw: [新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。](#20240829143000)
- 16:00~15:59	learn: [learn IPLD Codes, https://ipld.io/docs/data-model/node/](#20240829160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 8646 | 9054 | 3945 |
| PSMD | 7000 | 2432 | 4568 | 780 |
| ego | 4000 | 1472 | 2528 | 825 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 181 | 1319 | 450 |
| raw | 500 | 1055 | -555 | 150 |
| learn | 1500 | 1723 | -223 | 990 |
| js | 1200 | 1693 | -493 | 750 |

---
waiting list:


- 30分钟时间片：
  - PSMD的第1号事项：整理近期讨论，按照新版manifest text提炼几个有代表性的场景。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系

- 60分钟时间片：
  - ego的第1号事项：未启动todo项从day metadata中自动返回waiting list
  - learn的第1号事项：learn IPLD Codes, https://ipld.io/docs/data-model/node/
  - js的第1号事项：js class
  - js的第2号事项：learn Orbitdb

- 90分钟时间片：
  - PSMD的第2号事项：整理新版本term的manifest text
  - learn的第2号事项：learn IPLD ADLs https://ipld.io/docs/advanced-data-layouts/
  - PSMD的第3号事项：整理新版本term的manifest code
  - PSMD的第6号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - ego的第2号事项：新版ego, instance or model, any manifest
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第4号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.29.[整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]任务&body=日期: 2024.08.29.%0D%0A序号: 6%0D%0A手稿:../../draft/2024/08/20240829140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240829140000"></a>
## 14:00~14:29
PSMD: [整理近期讨论，按照新版manifest text提炼几个有代表性的场景。]

- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.29.[新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。]任务&body=日期: 2024.08.29.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/08/20240829143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240829143000"></a>
## 14:30~14:59
raw: [新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。]

- D:\huangyg\git\raw\src\raw.js
    - 增加food指令下的默认参数。
```
D:\huangyg\git\raw\src>node raw
Usage: raw [options] [command]

个人领域的野生部分

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  food            饮食管理
  help [command]  display help for command

D:\huangyg\git\raw\src>node raw food
default mode
```

- 继续追加时间。需要先整理代码，理顺food.js几个成员函数之间的调用关系。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.08.29.[learn IPLD Codes, https://ipld.io/docs/data-model/node/]任务&body=日期: 2024.08.29.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/08/20240829160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240829160000"></a>
## 16:00 ~ 16:59
learn: [learn IPLD Codes, https://ipld.io/docs/data-model/node/]

- 继续追加时间。
