# 2026.10.18.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 17:24~18:23	check: [零散笔记](#20261018172400)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.10.18.[无名任务]任务&body=日期: 2026.10.18.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20261018.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261018172400"></a>
## 17:24 ~ 18:23
## check: [零散笔记]

- debian 卸载 openclaw opensquilla
- workbuddy @ debain
	- wget https://software.openkylin.top/openkylin/yangtze/pool/main/deb/workbuddy/workbuddy_5.4.5_amd64.deb
	
	- curl -fsSL https://raw.githubusercontent.com/ziyue67/workbuddy-linux/main/install.sh -o install.sh
	- less install.sh
	- bash install.sh
- 外部agent：
	- dsh在npmjs再升级几版，在笔记本安装，付费使用deepseek模型。
	- workbuddy在debian安装，先使用免费积分。
	- opencode在两台机器都安装，使用免费模型。
	- 外网服务器先待命。包括阿里云、cloudflare worker、edgeone等等。
- 内部agent：
	- ego：在笔记本，主要在任务之间分配资源。
		- 本地agent
	- PSMD：在debian和外网服务器，共同体的建模和部署。
		- 建模者：本地agent
		- 部署者：外网页面->本地agent（prompt、skill、cli）
		- 成员：外网页面->本地agent（prompt、skill、cli）
