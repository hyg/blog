# 2026.02.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2a)。

<a id="index"></a>
- 16:00~16:29	infra: [结合skill.md的人机混合协作网络](#20260209160000)
- 19:00~19:59	check: [零散笔记](#20260209190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 825 | 12705 | 8085 |
| PSMD | 4000 | 90 | 3910 | 495 |
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
  - PSMD的第4号事项：整理闫岸家政能力讨论

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
  - ego的第4号事项：新版ego, instance or model, any manifest
  - learn的第30号事项：Julia
  - learn的第44号事项：MCP in nodejs

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.09.[结合skill.md的人机混合协作网络]任务&body=日期: 2026.02.09.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260209.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260209160000"></a>
## 16:00 ~ 16:29
## infra: [结合skill.md的人机混合协作网络]
	
- skill.md
    - 人->自然语言->agent+skill.md->metadata->agent+skill.md->人
	- 经过人确认，agent也会直接交换skill.md。
	- skill.md是层次化的，随着模型能力逐渐调整。
- MCP也按同样的机制结合，对安全性要求更高。
- 开发MCP、skill.md作为持续的本地任务，统一管理起来。
	- 统一接口：针对MCP、skill.md的改进建议，新增建议。
---
<a href="mailto:huangyg@mars22.com?subject=关于2026.02.09.[无名任务]任务&body=日期: 2026.02.09.%0D%0A序号: 12%0D%0A手稿:../../draft/2026/20260209.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260209190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- https://happy.engineering/
- openclaw的飞书用户需要配对，但是并没有操作过。可能是通过token在windows机器访问webUI控制端，在同一台windows机器运行飞书并对话就自动配对。没找到精确的文档。
	- curl -fsSL https://openclaw.ai/install.sh | bash
	- 升级和新安装都这个指令。
- 结合skill.md的人机混合协作网络
	- 人->自然语言->agent+skill.md->metadata->agent+skill.md->人
	- 经过人确认，agent也会直接交换skill.md。
	- skill.md是层次化的，随着模型能力逐渐调整。
- MCP也按同样的机制结合，对安全性要求更高。
- 开发MCP、skill.md作为持续的本地任务，统一管理起来。
	- 统一接口：针对MCP、skill.md的改进建议，新增建议。
