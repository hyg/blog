# 2026.03.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260327190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1725 | 11805 | 7050 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4275 |
| js | 1000 | 210 | 790 | 1230 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：学习优秀的petri网设计案例
  - js的第2号事项：新版raw.js的子命令-营养成分详情
  - js的第5号事项：新版raw.js的子命令-营养成分排序
  - learn的第9号事项：XACML（存量）

- 60分钟时间片：
  - js的第1号事项：debug
  - ego的第6号事项：eventemitter sample
  - learn的第6号事项：The Open Quantum Safe (OQS) project
  - js的第6号事项：The Node.js best practices list (July 2024)

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - learn的第2号事项：Polygon/Arbitrum
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第22号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.27.[无名任务]任务&body=日期: 2026.03.27.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260327.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260327190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 修复ego\src\util.js中gitstep的同步操作。
	- gitlink更新了服务器密钥，需要选择y才能完成操作，导致代码卡死。手工操作一次后回复正常。
	- ssh-agent可以打开puttygen创建的密钥，可以从plink——pagenat迁移回openssh+ssh-agent方案。
		- setup-ssh-agent.bat
		- setup-ssh-simple.bat
	- GIT_SSH_COMMAND环境变量和代码里的变量，都要设置正确。
		- git config --global core.sshCommand "\"C:\\Windows\\System32\\OpenSSH\\ssh.exe\" -o StrictHostKeyChecking=accept-new" 2>&1
		- 更新了 util.js，在加载 simple-git 之前设置 process.env.GIT_SSH_COMMAND
	- git和windows各有自己的ssh.exe
	- simple-git的push不在stdin的子进程里，无法输入密钥口令，需要用别的方式push。改为ssh-agent之后测试通过。
```
方法 1：用 PuTTYgen 导出 OpenSSH 格式

     1. 打开 PuTTYgen
     2. 点击 Load 加载您的 .ppk 文件
     3. 菜单 Conversions → Export OpenSSH key
     4. 保存为 id_rsa（私钥）和 id_rsa.pub（公钥）
     5. 放到 C:\Users\hyg\.ssh\ 目录

    方法 2：直接用 ssh-add 加载 PPK 文件（Windows 新版支持）

    Windows 10/11 的新版 OpenSSH 可以直接加载 PPK 文件：

     1 ssh-add C:\path\to\your\key.ppk
	 
完整迁移方案

    如果您想迁移到 OpenSSH：

    1. 启用 Windows ssh-agent 服务

     1 # 以管理员身份运行 PowerShell
     2 Get-Service ssh-agent
     3 Set-Service ssh-agent -StartupType Automatic
     4 Start-Service ssh-agent

    2. 添加密钥到 ssh-agent

     1 # 直接使用 PPK 文件（如果支持）
     2 ssh-add "C:\Users\hyg\.ssh\your-key.ppk"
     3
     4 # 或转换为 OpenSSH 格式后添加
     5 ssh-add "C:\Users\hyg\.ssh\id_rsa"

    3. 修改 util.js

     1 const GIT_SSH_COMMAND = 'ssh -o StrictHostKeyChecking=accept-new';
 
 
    /**
     * 新安装 Windows 环境的 SSH 配置步骤：
     *
     * 1. 启用 ssh-agent 服务（管理员 PowerShell）：
     *    Set-Service ssh-agent -StartupType Automatic
     *    Start-Service ssh-agent
     *
     * 2. 生成或导入 SSH 密钥，添加到 ssh-agent：
     *    ssh-keygen -t ed25519 -C "your@email.com"
     *    ssh-add C:\Users\<用户名>\.ssh\id_ed25519
     *
     * 3. 配置 git 使用 Windows 自带的 OpenSSH（不是 Git 自带的 ssh）：
     *    git config --global core.sshCommand "C:\Windows\System32\OpenSSH\ssh.exe -o StrictHostKeyChecking=accept-new"
     *
     * 4. 将公钥注册到远程平台（gitee / github / bitbucket 等）。
     *
     * 原理：
     * - 命令行 git push：读取 core.sshCommand，由 Windows ssh 连接 ssh-agent 完成认证。
     * - bun over（Node.js）：simple-git 的 push 不继承控制台 stdin，ssh 无法交互输入密码短语，
     *   因此本函数用 execSync 调 git push 并设 stdio:'inherit'，同时通过 GIT_SSH_COMMAND
     *   指定 Windows ssh，确保子进程也能连接 ssh-agent。
     */
```

- AI负责自然语言理解和近义词匹配。
	- 各人的思考和知识，脱敏后发布。
	- 各人的提问，沿着委托关系传播，在每个受托者的脱敏区：
		- 匹配问答和知识
		- 匹配适合的委托者：继续转发委托
	- 子问题的分解和集成
	- 锋面和资源分配
- 以上每个模块都独立配置，共享：
	- 提示词\需求
		- 委托关系包括开发
	- skill
	- cli
