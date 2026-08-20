# 2026.08.20.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2a)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260820190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 855 | 12675 | 0 |
| PSMD | 4000 | 510 | 3490 | 0 |
| ego | 2530 | 285 | 2245 | 0 |
| infra | 2000 | 60 | 1940 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.08.20.[无名任务]任务&body=日期: 2026.08.20.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260820.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260820190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 在电子凭证voucher/js试一下自我演化。
	- 用户提交原始凭证
	- cli进行分录，创建AER、AVR文件
	- 用户审核AER、AVR文件，可能回修改
	- cli将原始凭证、分录代码版本、修改前后AERAVR文件制作成升级需求和测试用例，创建升级任务
	- coding agent执行升级任务、执行所有测试用例。只有这一步消耗token。
- dsh插件主要是互相调用，通过inject驱动。如果用自然语言驱动还是用skill更合适。
