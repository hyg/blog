# 2026.07.03.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 19:37~20:06	check: [零散笔记](#20260703193700)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.07.03.[无名任务]任务&body=日期: 2026.07.03.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260703.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260703193700"></a>
## 19:37 ~ 20:06
## check: [零散笔记]

- cloudflare worker纳入项目基础。
	- 部署broker、relay，支撑agent之间通信。
	- 直接部署后台工具，包括llm bot。
	- 消息队列：https://www.cloudflare-cn.com/developer-platform/products/cloudflare-queues/
- 配合ECS服务器、git host、局域网内节点，构成完整的工作环境。
	- PSMD后台部署到worker，数据提交到git。
	- ego主程序运行在节点，relay部署到worker，数据提交到git，数据汇总页部署到cloudflare page。
- 阿里云 ESA vs 腾讯云 EdgeOne vs Cloudflare https://tbbbk.com/aliyun-esa-vs-edgeone-vs-cloudflare-comparison-2025/
