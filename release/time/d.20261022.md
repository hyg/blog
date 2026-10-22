# 2026.10.22.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20261022190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 0 | 13530 | 0 |
| PSMD | 4000 | 0 | 4000 | 0 |
| ego | 2530 | 0 | 2530 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.10.22.[无名任务]任务&body=日期: 2026.10.22.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20261022.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261022190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 升级nodejs： https://nodejs.org/en/blog/release/v24.22.1/
- npm install npm@latest -g
```
d:\huangyg\git\sample\node\MIMO>node -v
v24.10.0
d:\huangyg\git\sample\node\MIMO>npm -v
11.6.1
......
d:\huangyg\git\sample\node\MIMO>npm -v
12.2.1
d:\huangyg\git\sample\node\MIMO>node -v
v24.22.1
```
- xuemen.com
```
sudo apt update
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs
node -v
v26.12.1
```
- debian开发机
```
huangyg@debian:~$ node -v
v22.23.3
huangyg@debian:~$ npm -v
10.9.9
...
huangyg@debian:~$ node -v
v26.12.1
huangyg@debian:~$ npm -v
11.20.0
```
- SOP engine：workbuddy设计得太复杂。依托git和文件夹自己逐渐升级。
