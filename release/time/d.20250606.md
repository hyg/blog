# 2025.06.06.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1b)。

<a id="index"></a>
- 09:30~09:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250606093000)
- 14:00~15:37	learn: [佯谬及二次革命](#20250606140000)
- 15:38~17:17	js: [debug in vscodium](#20250606153800)
- 17:18~17:32	learn: [量子物理的数学基础](#20250606171800)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 6606 | 6924 | 8460 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1712 | 818 | 1680 |
| infra | 2000 | 630 | 1370 | 210 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1544 | 456 | 2220 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：佯谬及二次革命
  - learn的第3号事项：Helix editor
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第1号事项：量子物理的数学基础
  - raw的第2号事项：设计三季度时间表
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - ego的第1号事项：整理js对象检索的代码
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - raw的第1号事项：整理 resource.md
  - ego的第3号事项：新版基础模型
  - xuemen的第3号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.06.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.06.06.%0D%0A序号: 4%0D%0A手稿:../../draft/2025/20250606.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250606093000"></a>
## 09:30 ~ 09:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- 寻找manifest code的实现方法。
  - 嵌入在metadata中，text字段缩一级，作为manifest的一种。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.06.[佯谬及二次革命]任务&body=日期: 2025.06.06.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250606.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250606140000"></a>
## 14:00 ~ 15:37
## learn: [佯谬及二次革命]

### https://wuli.iphy.ac.cn/en/article/pdf/preview/10.7693/wl20221201.pdf

- 简单的综述，重要工作没放在这篇。
- 还需要阅读引文23~27的工作内容，才能理解革命的含义。
    - https://www.aminer.cn/profile/xue-peng/542d3783dabfae489b97dd63
    - 2021 年我们做的一个实验工作[22]：直觉上，人们预期随着纠缠的增强非定域性也会变得更强。然而两者之间的关系似乎更为复杂。我们发现，在一种被称为“非对称”的贝尔实验中，较弱的纠缠却可以表现出更强的非定域性，如图7 所示

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.06.[debug in vscodium]任务&body=日期: 2025.06.06.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250606.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250606153800"></a>
## 15:38 ~ 17:17
## js: [debug in vscodium]

### https://code.visualstudio.com/docs/nodejs/nodejs-debugging

- ctrl-shift-P >Toggle Auto Attach 选择附加模式。暂时选smart。
- 在终端窗口命令行启动。设断点、单步运行、查看变量都ok。
- 本项目根目录下的 .vscode\launch.json有一些选项可以配置。
    - 点击右下角"Add Configuration... "可以列出插入位置可选的配置项.
    - 可以配合npm脚本来启动测试.
    - 可以设置nodejs版本,配合nvm.
    - 可以在envFile字段指定环境变量
- 目前用到的设置就这些，以后根据项目需要再熟悉其它部分。

### 其它代码编辑器

- 试用了几款对手的编辑器：
    - LiteXLTeam.LiteXL：过于简单，连字体和中文支持都匮乏。
    - Adobe.Brackets： 切换文件夹时能打开上次关闭前的文件，类似工作空间。2021年已经停止维护，鼓励用户向vscode迁移。
    - Emurasoft.EmEditor： 思路太老旧了，替代记事本或office的。
    - lapce：
        - 可以通过打开文件夹，实现工作空间切换。
        - ctrl-p打开顶端命令面板用">raw"可以模糊查找到最近打开过的文件夹。
        - 切换后所有文件又处于斜体字状态，会在操作中被替换。
        - 文档不够细，许多配置项还不熟悉。
        - 内存大概是vscode的三分之一。
    - EclipseFoundation.TheiaIDE：
        - 使用体验非常接近vscode，吃内存也不小。
        - 打开文件夹后，能自动列出npm脚本。
    - GlassDevtools.Void
        - 替代cursor。也可以从vscode迁移。
        - 绑定外部API，不用翻墙： https://openrouter.ai/
        - 可以使用本地ai，比如ollama。
        - 可以直接使用vscode workplace文件，用户体验基本一样，吃内存比vscode多一倍。
    - Helix.Helix：嵌入在命令行窗口的。编程语言方面支持比较强，值得专门学习。
    - Microsoft.Edit: 嵌入在命令行窗口内的。可以替代记事本，不适合开发。
- 追加时间学习helix，日常使用先保留lapce和theia、void继续试用，其它删除了。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.06.[量子物理的数学基础]任务&body=日期: 2025.06.06.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250606.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250606171800"></a>
## 17:18 ~ 17:32
## learn: [量子物理的数学基础]

- 前面综述引出需要学习的概念：
    - 定域、定域实在性、非定域性
    - 完备的、不完备的
    - 贝尔单态
    - 对不等式的违背，达到了xx个标准差。
    - 对易或不对易
    - 互文性、非互文的(noncon‐textual)
    - 时间域的Tsirelson 束缚
- 继续追加时间。