# 2026.07.21.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 19:51~20:50	check: [零散笔记](#20260721195100)

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
<a href="mailto:huangyg@mars22.com?subject=关于2026.07.21.[无名任务]任务&body=日期: 2026.07.21.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260721.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260721195100"></a>
## 19:51 ~ 20:50
## check: [零散笔记]

- debain机器：
	- openclaw gateway stop
	- openclaw dashboard stop
	- openclaw daemon stop
	- openclaw daemon disable
		- openclaw daemon status # 输出 disabled 表示成功
- https://www.opensquilla.ai
	- curl -LsSf https://astral.sh/uv/install.sh | sh
	- . "$HOME/.local/bin/env"
		-  uv --version
	- uv tool install --python 3.12 "opensquilla[recommended] @ https://github.com/opensquilla/opensquilla/releases/download/v0.5.0rc4/opensquilla-0.5.0rc4-py3-none-any.whl"
	- opensquilla onboard
		- 创建飞书机器人opensquilla
	- opensquilla gateway run
	- opensquilla gateway start --json
- agent skill开发
```
my-agent-skills/                          # 你的技能仓库
├── package.json                          # npm 包配置（用于分发）
├── .github/
│   └── workflows/
│       └── validate.yml                  # CI 自动验证
├── skills/                               # 所有 skill 存放目录
│   ├── data-processing/
│   │   ├── SKILL.md                      # 核心：元数据 + 指令
│   │   ├── scripts/
│   │   │   └── process.js                # Node.js 跨平台脚本
│   │   ├── references/
│   │   │   └── ADVANCED.md               # 按需加载的详细文档
│   │   └── assets/
│   │       └── template.json             # 模板/资源文件
│   ├── report-generator/
│   │   └── SKILL.md
│   └── ...
├── scripts/
│   ├── validate-all.js                   # 批量验证脚本
│   └── build.js                          # 打包脚本
└── README.md
```
	- 项目目录结构:
		- 每个项目有自己的task\agent-skill目录。
		- skill作为ego项目管理下的artifact，索引到task\agent-skill目录下。
		- ego节点之间互相推荐agent-skill，由agent询问使用者后安装。
	- 优先使用npm发布
		- 非 IT 客户只需 npm install，无需理解 Git
		- 支持语义化版本（npm update 即可升级）
		- 支持私有 npm registry（企业客户）
		- 与 Node.js 生态无缝集成
		
	- 另建一个目录，模拟其他使用者环境去测试agent+skill用户体验。
