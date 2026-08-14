# 2026.08.14.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版2(2a)。

<a id="index"></a>
- 19:00~20:29	check: [零散笔记](#20260814190000)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.08.14.[无名任务]任务&body=日期: 2026.08.14.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260814.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260814190000"></a>
## 19:00 ~ 20:29
## check: [零散笔记]

- Cordis
	- https://deepseek-harness.github.io/deepseek-harness/reference/cordis-primer
	- https://deepseek-harness.github.io/deepseek-harness/develop/cordis-tutorial/
	- https://github.com/cordiverse/cordis
	- https://github.com/cordiverse/paper
	- https://cordis.moe/
- deepseek harness
	- https://github.com/deepseek-ai/deepseek-harness
	- https://www.deepseek.com/harness/
	- 用自然语言安装skill和mcp
	- 插件系统比pi要完善，可以参考。针对性的开发还要观察。
		- PSMD的具体实现还是通用skill
- 新版本工作环境
	- 一套本地工具，持续运行，可以选cordis+插件。
	- 一套AI agent：
		- 维护本地工具
		- 用自然语言处理本地工具标准接口以外的事件
- 其它插件系统
	- 纯事件总线方案（零 AI 痕迹）：直接使用 Node.js 原生 EventEmitter 或 mitt。你的内核只负责发射 file:open、file:save 事件，插件监听这些事件。负荷几乎为零，只有函数调用开销。
	- 轻量级 DI 容器方案：使用 typedi 或 inversify。它们只负责类的实例化和管理，不关心任何 Session 或上下文，负荷仅在于启动时的类反射解析。
	- 参考成熟的轻量级插件框架：如果不想从零造轮子，可以看回之前提到的 Moduul 或 @voilabs/plugins。它们的源码核心只有几百行，专注于“加载-注册-调用”，完全没有 Session 和 Memory 相关的代码，不会给你的本地文件系统操作带来任何多余的负担。
	- https://www.npmjs.com/package/microplugin
	- 如果要使用外来插件，需要沙盒机制，cordis也不是不行。
