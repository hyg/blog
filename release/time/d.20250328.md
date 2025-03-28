# 2025.03.28.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月下旬补足前两月缺勤。今天绑定模版1(1e)。

<a id="index"></a>
- 18:00~19:29	learn: [npm scripts](#20250328180000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 8100 | 5430 | 6255 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 1090 | 1440 | 1065 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 1250 | -250 | 600 |
| learn | 2000 | 1125 | 875 | 1770 |
| js | 1000 | 1330 | -330 | 720 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第十一式
  - raw的第3号事项：复习五元庄第十式
  - raw的第4号事项：复习五元庄第十二式
  - raw的第5号事项：复习五元庄第十三式

- 60分钟时间片：
  - raw的第1号事项：新版本food预算决算
  - js的第1号事项：git sample
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - js的第2号事项：在代码中自动提交git库

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：复习dat
  - ego的第2号事项：新版基础模型
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.28.[npm scripts]任务&body=日期: 2025.03.28.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250328.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250328180000"></a>
## 18:00 ~ 19:29
## learn: [npm scripts]

- https://ruanyifeng.com/blog/2016/10/npm_scripts.html
- ego项目作为范例。
```
...
  "scripts": {
    "entry": "node ego asset entry",
    "1": "node ego day init 1",
    "2": "node ego day init 2",
    "over": "node ego day over",
    "git": "git add . && git commit -m \"package.json script\" & git push all"
  }
```
- 看了下codecrafters-io/build-your-own-x，追加todo项：
```
    subject: js
    title: git sample
    readme: |
      - http://gitlet.maryrosecook.com/docs/gitlet.html
      - https://kushagra.dev/blog/build-git-learn-git/
      - https://isomorphic-git.org/docs/en/snippets
      - https://isomorphic-git.org/docs/en/quickstart
```