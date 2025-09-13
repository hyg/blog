# 2025.09.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版1(1f)。

<a id="index"></a>
- 16:05~17:04	check: [零散笔记](#20250913160500)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9556 | 3974 | 9585 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1490 | 1040 | 1425 |
| infra | 2000 | 545 | 1455 | 195 |
| xuemen | 1000 | 150 | 850 | 540 |
| raw | 1000 | 250 | 750 | 210 |
| learn | 2000 | 4505 | -2505 | 4335 |
| js | 1000 | 796 | 204 | 1800 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第3号事项：LegalRuleML（Legal Rule Markup Language）
  - learn的第4号事项：Tauri + Rust
  - learn的第5号事项：SBVR（OMG业务语义词汇与规则）

- 60分钟时间片：
  - raw的第1号事项：新版本food预算决算
  - js的第1号事项：nextcloud
  - learn的第1号事项：CometAPI
  - js的第2号事项：IM bot

- 90分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：整理task及其相互关系
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.13.[无名任务]任务&body=日期: 2025.09.13.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250913.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250913160500"></a>
## 16:05 ~ 17:04
## check: [零散笔记]

- uv
	- powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
	- pip install uv
	- winget install --id=astral-sh.uv  -e		
- 试试openmanus
	- curl -LsSf https://astral.sh/uv/install.sh | sh
	- git config --global --unset http.https://github.com.proxy
	- git clone https://github.com/FoundationAgents/OpenManus.git
	- cd OpenManus
	- 创建并激活虚拟环境：
		- C:\Users\hyg\.local\bin\uv venv --python 3.12
		- .venv\Scripts\activate
	- uv pip install -r requirements.txt
		- crawl4ai 0.6.3报错则先提升版本：uv pip install "crawl4ai>=0.7.dev0" --prerelease=allow
			- 如果不想看到 hardlink 警告，可以设置环境变量：set UV_LINK_MODE=copy
		- 打开 requirements.txt：crawl4ai==0.6.3 改成：crawl4ai>=0.7.dev0
		- uv pip install -r requirements.txt --prerelease=allow
- 安装时间太长，明早再看。下一步：
	- cp config/config.example.toml config/config.toml
		- 增加各model和api-key
