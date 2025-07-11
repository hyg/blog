# 2025.07.11.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:59	ego: [微观与宏观衔接的几篇论文](#20250711140000)
- 16:00~18:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250711160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 581 | 12949 | 7935 |
| PSMD | 4000 | 90 | 3910 | 1170 |
| ego | 2530 | 120 | 2410 | 1485 |
| infra | 2000 | 275 | 1725 | 210 |
| xuemen | 1000 | 0 | 1000 | 570 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 96 | 1904 | 2250 |
| js | 1000 | 0 | 1000 | 1860 |

---
waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：月初事务
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：设计新的季度时间表
  - learn的第2号事项：佯谬及二次革命
  - raw的第2号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - PSMD的第1号事项：整理default模型
  - ego的第1号事项：整理js对象检索的代码
  - learn的第1号事项：量子物理的数学基础
  - js的第1号事项：openpgp v6.1.1.

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.11.[微观与宏观衔接的几篇论文]任务&body=日期: 2025.07.11.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250711.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250711140000"></a>
## 14:00 ~ 15:59
## ego: [微观与宏观衔接的几篇论文]

- https://www.zhihu.com/question/319749491/answer/3096339791
	- 解释双缝实验：观察范围内的电磁波相位变化，与观察范围外的不再发生干涉。干涉条纹消失。
	- 其它实验或思想实验，再安排时间一一检验。
- https://weibo.com/1984930215/PAt3iosGD
	- 谈得比较浅，到止观这层已经偏向。对后续建模用处不大。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.11.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.07.11.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250711.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250711160000"></a>
## 16:00 ~ 18:59
## infra: [范例--利用js模块组合实现合同条款的组合。]


### 嵌套条款的打包

- webpack + Babel ：CMD、预编译 https://webpack.js.org/
- Browserify：AMD、预编译 http://browserify.org/
- SeaJs：CMD、在线编译
- requirejs：AMD、在线编译
- TaskRunner也包含相似功能
	- Gulp: https://www.gulpjs.com.cn/
	- FIS3: https://fex-team.github.io/fis3/

#### Browserify

- npm install -g browserify
- browserify main.js -o bundle.js
	- 可以在main.js中完成所有操作，html页面无法互动。
- browserify -r .\term12.js:term -o bundle12.js
	- 可以与页面互动，更适合PSMD的需求。
```
    <script src="bundle12.js"></script>
    <script>
        var term = require('term');
        console.log("%o", term);
        term.init();

        function event1() {
            term.code["1.e1"]();
            term.code["2.e10"]();
        }
        function event2() {
            term.code["1.e2"]();
            term.code["2.e11"]();
        }
    </script>
```
- 不需要手工删除exports，因此也没有同名问题。目前需要人工打包。
	- 需要试试自动打包，而且条款也是根据实时操作组合的。
- 下个时间片试一下webpack。
