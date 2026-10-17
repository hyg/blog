# 2026.10.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 16:13~17:12	check: [零散笔记](#20261017161300)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.10.17.[无名任务]任务&body=日期: 2026.10.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20261017.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261017161300"></a>
## 16:13 ~ 17:12
## check: [零散笔记]

- 收集开机信息并优化
	- 管理员运行终端：wpr -boottrace -addboot CPU -addboot diskio -addboot fileio -addboot registry -addboot network -addboot minifilter -filemode
	- 重启后，管理员运行终端：wpr -boottrace -stopboot "C:\Temp\BootTrace.etl"
	- 运行Windows Performance Analyzer (WPA)，打开etl文件查看cpu和存储堵点，针对性调整。
	- d:\huangyg\OptimizeBoot.ps1
