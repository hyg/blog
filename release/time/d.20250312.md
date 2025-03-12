# 2025.03.12.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月中上旬补足前两月缺勤。今天绑定模版1(1d)。

<a id="index"></a>
- 10:00~13:59	js: [git sample](#20250312100000)
- 14:00~14:29	raw: [复习五元庄第四式](#20250312140000)
- 14:30~14:59	raw: [复习五元庄第五式](#20250312143000)
- 16:00~16:59	learn: [graphsync protocol](#20250312160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5730 | 7800 | 5955 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 690 | 1840 | 975 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 600 | 400 | 720 |
| learn | 2000 | 535 | 1465 | 1380 |
| js | 1000 | 600 | 400 | 780 |

---
waiting list:


- 30分钟时间片：
  - raw的第2号事项：复习五元庄第六式
  - raw的第3号事项：复习五元庄第七式
  - raw的第4号事项：复习五元庄第八式
  - learn的第5号事项：js debug in vscodium

- 60分钟时间片：
  - learn的第1号事项：复习ipns
  - raw的第1号事项：新版本food预算决算
  - js的第1号事项：learn Orbitdb
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - ego的第2号事项：新版本任务、子任务的数据结构
  - learn的第2号事项：飞书 nodejs sdk
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.12.[git sample]任务&body=日期: 2025.03.12.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250312.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250312100000"></a>
## 10:00 ~ 13:59
## js: [git sample]

- isomorphic-git还是不支持ssh
- simple-git支持，需要设一下GIT_SSH_COMMAND
- 命令行也很折腾：
    - git调openssh始终需要手动输入密码
        - 需要修改文件权限才能完成 ssh-add d:\huangyg\.ssh\id_rsa
        - 然后ssh -T确实可以免密码。
        - 但是git和ssh-agent使用的路径和文件名似乎有不同规则。
```
D:\huangyg\git\raw>ssh-add d:\huangyg\.ssh\id_rsa
Enter passphrase for d:\huangyg\.ssh\id_rsa:
Identity added: d:\huangyg\.ssh\id_rsa (huangyg@mars22.com)

D:\huangyg\git\raw>git push all
Enter passphrase for key '/d/huangyg/.ssh/id_rsa':

D:\huangyg\git\raw>ssh-add ~/.ssh/id_rsa
~/.ssh/id_rsa: No such file or directory

D:\huangyg\git\raw>ssh-add ~\.ssh\id_rsa
~\.ssh\id_rsa: No such file or directory

D:\huangyg\git\raw>ssh-add $HOME\.ssh\id_rsa
$HOME\.ssh\id_rsa: No such file or directory

D:\huangyg\git\raw>ssh-add %HOME%\.ssh\id_rsa
Enter passphrase for D:\huangyg\.ssh\id_rsa:
Identity added: D:\huangyg\.ssh\id_rsa (huangyg@mars22.com)

D:\huangyg\git\raw>git push all
Enter passphrase for key '/d/huangyg/.ssh/id_rsa':

D:\huangyg\git\raw>ssh-add '/d/huangyg/.ssh/id_rsa'
'/d/huangyg/.ssh/id_rsa': No such file or directory
```
    - 增加环境变量GIT_SSH指向plink(pakeant)可以免密码 ​。需要新开窗口。

```
D:\huangyg\git\raw>git push all
Everything up-to-date
Everything up-to-date
Everything up-to-date
```

- 继续整理范例，把文件变化的判断加上。预计使用git status。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.12.[复习五元庄第四式]任务&body=日期: 2025.03.12.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250312.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250312140000"></a>
## 14:00 ~ 14:29
## raw: [复习五元庄第四式]

- 收拢气感，注意力由外向内过渡，开始锻炼脏真。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.12.[复习五元庄第五式]任务&body=日期: 2025.03.12.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250312.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250312143000"></a>
## 14:30 ~ 14:59
## raw: [复习五元庄第五式]

- 复习心脏的手印、开窍、情绪和声音引导。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.12.[graphsync protocol]任务&body=日期: 2025.03.12.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250312.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250312160000"></a>
## 16:00 ~ 16:59
## learn: [graphsync protocol]

- https://github.com/retrieval-markets-lab/js-graphsync
    - 示范太简单，getpeer和unixfsPathSelector的参数没有注释，也没有找到文档。
- https://github.com/chafey/js-graphsync
    - 停滞的半成品。
- js下没有找到可用的模块。go的暂时用不上。
