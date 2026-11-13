# 2026.11.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2b)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20261113190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 540 | 12990 | 0 |
| PSMD | 4000 | 150 | 3850 | 0 |
| ego | 2530 | 60 | 2470 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 330 | 670 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.11.13.[无名任务]任务&body=日期: 2026.11.13.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20261113.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261113190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- infra项目维护agent节点网络：
	- 分为agent+cli、agent、webpage三种模式，可扩展。
	- 一套可插拔、可配置的功能模块
		- 同一需求，与不同的本地agent适配产生不同的功能模块，分别管理，可以需求索引。
		- 根据agent决定怎么管理session
			- 主cli管理
			- agent自行管理
	- 有通信模块
	- 有manifest管理，分为free、doc、code，可扩展。
		- 索引不到的功能模块，产生free→doc→code任务
	- 子任务的问题空间、解空间的定义，生成父任务。
	- 任务可以在节点之间流转，在主体之间交易。
