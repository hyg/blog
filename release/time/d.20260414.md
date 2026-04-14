# 2026.04.14.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260414190000)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.04.14.[无名任务]任务&body=日期: 2026.04.14.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260414.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260414190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 数据定义的协议protocols
	- 每个数据包含有协议、版本、内容种类、内容字段。
	- 原生内容种类：
		- 请求协议文本、prompt、skill、code
	- 协议是有状态的
	- 内容字段可以嵌套子协议的数据包。

- PSMD提供应用层的文本、prompt、skill、code。声明自己适用于protocols。

- 通信前可以用IPLD打包，甚至更浅层也有些概念可以重用。
