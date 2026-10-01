# 2026.10.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 16:57~18:56	check: [零散笔记](#20261001165700)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.10.01.[无名任务]任务&body=日期: 2026.10.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20261001.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261001165700"></a>
## 16:57 ~ 18:56

## check: [零散笔记]

- ego的会计分录：
	- ego处理的是个人总账
	- 总账对项目管理，各项目同名各科目属于二级账簿的往来。“ego”科目按传统会计措辞应为“内部往来-ego项目”。
	- 二级账簿目前还没有实现，设计为：均设有“内部往来-总账”科目，对应总账的“内部往来-ego项目”等科目互相借贷，其它科目围绕往来科目运转。
- 工作时间片
	- 借
		- raw:token
		- task:time
		- task:artifact
	- 贷
		- task:token
		- raw:time
		- task:time
- PSMD委托
	- 借
		- raw:token
		- task:time

		- 现金:rmb

		- PSMD.trustor:time		

		- task:token
	- 贷
		- task:token
		- raw:time

		- 收入:rmb
		- 应交税费:rmb

		- task:time
		- ego:token

	- 委托者用6672rmb购买ego的2400jt
	- 委托这用2400jt购买PSMD的60time
	- 目前模式是ego直接发行token。以后如果调整要修改D:\huangyg\git\ego\data\voucher\staging\2026\AER.650.yaml
