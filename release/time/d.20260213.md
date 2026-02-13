# 2026.02.13.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 07:45~10:59	PSMD: [term + COM matedata -> deploy metadata -> deploy view](#20260213074500)
- 19:00~19:59	check: [零散笔记](#20260213190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1215 | 12315 | 8280 |
| PSMD | 4000 | 480 | 3520 | 690 |
| ego | 2530 | 0 | 2530 | 1185 |
| infra | 2000 | 225 | 1775 | 180 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 255 | 745 | 180 |
| learn | 2000 | 195 | 1805 | 4575 |
| js | 1000 | 60 | 940 | 1470 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：SPIN (SPARQL Inferencing Notation）/SHACL)
  - learn的第2号事项：Common Logic (ISO/IEC 24707)
  - raw的第2号事项：月初事务
  - PSMD的第5号事项：整理闫岸家政能力讨论

- 60分钟时间片：
  - raw的第1号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - ego的第3号事项：entry的按月归并
  - learn的第3号事项：lanceDB sample
  - learn的第4号事项：Farcaster

- 90分钟时间片：
  - PSMD的第1号事项：整理新版本term的manifest text
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：结合skill.md的人机混合协作网络
  - js的第1号事项：node.js

- 195分钟时间片：
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第3号事项：会话skill套装设计
  - ego的第4号事项：新版ego, instance or model, any manifest
  - learn的第30号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.13.[term + COM matedata -> deploy metadata -> deploy view]任务&body=日期: 2026.02.13.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260213.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260213074500"></a>
## 07:45 ~ 10:59
## PSMD: [term + COM matedata -> deploy metadata -> deploy view]

- PSMD:
	- 重点观测智能设备的能力变化，即使收集反例。
		- 智能设备的认知深度，是重中之重。
	- 反例->补丁
		- 补丁->模型->部署实例
		- 补丁->部署实例+动议
	- 成功案例->模型+预期效果
- infra: 
	- 模型元数据语法+部署方案元数据语法->共同体引擎
	- ego模型+task元数据语法+task关系元数据语法->主体引擎->共同体引擎
		- 以不同锋面作为成员；以不同锋面的诉求，作为集体决策的席位。
		- task\artifact在不同成员之间流转。
	- 元数据语法
		- 模型->模型元数据语法
		- 部署实例->部署方案元数据语法
		- task
		- task关系
		- artifact
- ego：
	- 资源分配
		- ego模型
		- 管理PSMD、infra、...等task
	- 思想实验与世界模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.13.[无名任务]任务&body=日期: 2026.02.13.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260213.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260213190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- 在dev配置openclaw使用opencode zen，配置成功但使用时提示免费额度用完。
- 在dev机器安装opencode，分析openclaw、claude code的提示词构造函数，整理各种提示词的功能、长度、调用条件。
- 升级dev机器的claude code：
	- npm update -g @anthropic-ai/claude-code
	- claude update
	- 更新后查看还是老版本，重新登录后才看到新版本：claude --version

- PSMD:
	- 反例->补丁
		- 补丁->模型->部署实例
		- 补丁->部署实例+动议
	- 案例->模型+预期效果
	- 元数据语法
		- 模型->模型元数据语法
		- 部署实例->部署方案元数据语法
- infra: 
	- 模型元数据语法+部署方案元数据语法->共同体引擎
	- ego模型+task元数据语法+task关系元数据语法->主体引擎->共同体引擎
		- 以不同锋面的诉求，作为集体决策的席位。
- ego：
	- 资源分配
		- 模型
	- 元数据语法
		- task
		- task关系
	- 思想实验与世界模型
