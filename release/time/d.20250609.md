# 2025.06.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:29	learn: [Helix editor](#20250609140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6696 | 6834 | 8460 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1712 | 818 | 1680 |
| infra | 2000 | 630 | 1370 | 210 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1634 | 366 | 2220 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：佯谬及二次革命
  - learn的第2号事项：Helix editor
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第2号事项：设计三季度时间表
  - infra的第3号事项：动态菜单设计。
  - raw的第3号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - raw的第1号事项：整理 resource.md
  - ego的第3号事项：新版基础模型
  - xuemen的第3号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.09.[Helix editor]任务&body=日期: 2025.06.09.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250609.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250609140000"></a>
## 14:00 ~ 15:29
## learn: [Helix editor]

- https://docs.helix-editor.cn/title-page.html
- https://zhuanlan.zhihu.com/p/680116339
- https://erasin.wang/helix/tutor/

- 更新开机批处理文件。hx各用一两M内存，edit各用了0.3M，geany用了21.8M。vscodium需要360M以上。
```
wt -w 0 nt --title food -d d:\huangyg\git\raw\food edit d:\huangyg\git\raw\food\.last.yaml&
wt -w 0 nt --title health -d d:\huangyg\git\raw\health edit d:\huangyg\git\raw\health\.last.yaml&
wt -w 0 nt --title raw.js -d d:\huangyg\git\raw hx d:\huangyg\git\raw\raw.js&
wt -w 0 nt --title day -d d:\huangyg\git\ego\data\day hx d:\huangyg\git\ego\data\day\2025\d.20250608.yaml&
start "" "C:\Program Files\Geany\bin\geany.exe" "d:\huangyg\git\ego\src\ego.js"&
```
- edit还没有高亮，勉强能用。
- hx、geany都有高亮。hx更节省资源，但是操作需要熟悉。geany的菜单区不受theme影响，颜色改不了。
- 一旦退出都会关闭终端tab，并不会回到工作路径。
- 先同时用一段时间，体验更深入再选择。

- hx --tutor学习完前三章，继续追加时间。
