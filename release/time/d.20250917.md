# 2025.09.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	js: [nextcloud](#20250917160000)
- 19:00~19:59	check: [零散笔记](#20250917190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9616 | 3914 | 9465 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1490 | 1040 | 1425 |
| infra | 2000 | 545 | 1455 | 195 |
| xuemen | 1000 | 150 | 850 | 540 |
| raw | 1000 | 250 | 750 | 150 |
| learn | 2000 | 4505 | -2505 | 4335 |
| js | 1000 | 856 | 144 | 1740 |

---
waiting list:


- 30分钟时间片：
  - learn的第2号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第3号事项：LegalRuleML（Legal Rule Markup Language）
  - learn的第4号事项：Tauri + Rust
  - learn的第5号事项：SBVR（OMG业务语义词汇与规则）

- 60分钟时间片：
  - js的第1号事项：IM bot
  - learn的第1号事项：CometAPI
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：a2a-js

- 90分钟时间片：
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.17.[nextcloud]任务&body=日期: 2025.09.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250917.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250917160000"></a>
## 16:00 ~ 16:59
## js: [nextcloud]

- 先使用url，不用npm包。

### 接口

- create
	- 输入：文件名、文件内容
	- 返回：文件id、共享url
- sync
	- 输入：文件id、文件内容
	- 返回：成功失败
- remove
	- 输入：文件id
	- 返回成功失败

### 使用

- day init
	- work、check类型的timespice：
	- 调取历史draft生成新draft初始内容，
	- create，返回值写入day metadata file
	- 生成day plan，sync
- day over
	- 读取day metadata file
	- 调取draft，生成day log，sync
	- 更新season metadata file
	- 生成tomorrow，sync
- daemon
	- 根据day metadata file监控文件变化
	- sync
	- 要考虑不是连续运行，中途关机开机也能功能正常。
- 固定文件
	- today
	- tomorrow

### 测试

- 接口测试
- ego日常流程测试

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.17.[无名任务]任务&body=日期: 2025.09.17.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250917.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250917190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- https://ap2-protocol.net/
- https://ap2-protocol.org/
- https://www.x402.org/
- AP2和x402是可插拔的关系，各自可以和其它替代协议组合。
	- AP2支持传统支付方式，合作伙伴有银联国际。
- https://eips.ethereum.org/EIPS/eip-8004
	- https://ethereum-magicians.org/t/erc-8004-trustless-agents/25098
