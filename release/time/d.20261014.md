# 2026.10.14.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20261014190000)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.10.14.[无名任务]任务&body=日期: 2026.10.14.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20261014.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261014190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 升级boot23h2.bat
	- nt --title sample -d D:\huangyg\git\sample mc d:\huangyg\git\sample\voucher\js\ d:\huangyg\git\sample\htmlparser\ ; ^
- 修复双系统启动： bcdedit /set {bootmgr} path \EFI\debian\grubx64.efi
- SOP engine 归并到protocol of protocol一起思考
	- 其实根子还是自然语言，作为所有protocol的基础。
	- 然后是结构化的语言，json、UML、FSM......
	- 然后是编程语言
		- 描述接口
		- 描述行为
	- 等于把所有开发行为都归纳进来，等于没有归纳。
	- 先提炼成interface + script + engine 模式
	- PSMD关心的是权力分配模型的部署。
	- letX关心的是知识的部署
	- 智能合约关心的是每个节点的行为一致，其它项目并没有这么执着于这点，更强调知识在各处实践中分叉、再会商。
