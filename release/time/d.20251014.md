# 2025.10.14.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:14	learn: [Libsodium.js](#20251014140000)
- 16:00~16:59	learn: [indexdb](#20251014160000)
- 19:00~19:59	check: [零散笔记](#20251014190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 745 | 12785 | 9600 |
| PSMD | 4000 | 90 | 3910 | 1365 |
| ego | 2530 | 0 | 2530 | 1425 |
| infra | 2000 | 30 | 1970 | 195 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 150 |
| learn | 2000 | 565 | 1435 | 4305 |
| js | 1000 | 60 | 940 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：描述逻辑（Description Logic, DL）
  - learn的第7号事项：CEV（Contract Expression Language）
  - learn的第8号事项：XACML 4.0 / ODRL 2.2
  - js的第8号事项：copilot

- 60分钟时间片：
  - js的第1号事项：LangChain.js
  - learn的第2号事项：Tauri + Rust
  - raw的第2号事项：新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
  - js的第2号事项：ai-sdk + moonshot

- 90分钟时间片：
  - PSMD的第1号事项：SOP(Standard Operation Procedure)数据结构
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：整理task及其相互关系

- 195分钟时间片：
  - infra的第1号事项：Rete/Phreak算法的自主实现
  - xuemen的第1号事项：kernel模型升级
  - PSMD的第2号事项：健康消费合作社建模
  - PSMD的第3号事项：machines model

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.14.[Libsodium.js]任务&body=日期: 2025.10.14.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20251014.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251014140000"></a>
## 14:00 ~ 15:14
## learn: [Libsodium.js]

- https://www.npmjs.com/package/libsodium
- d:\huangyg\git\sample\libsodium\
	- pnpm install libsodium-wrappers
	- node test
- test.js test2.js
	- 需要传递key，header，c1，c2。
	- header可能包括nonce。
- test3.js
	- 文档有错，nonce是object没有concat方法。
	- 用对象组合nonce和ciphertext，运行正常。
	- sodium.crypto_box_keypair()不带参数，会受最近一次to_hex导入key影响。API设计上减少参数传递？
- 目前可以使用，但是没有深入了解原理。
	- 实际使用时再安排专门学习：https://doc.libsodium.org/

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.14.[indexdb]任务&body=日期: 2025.10.14.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20251014.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251014160000"></a>
## 16:00 ~ 16:59
## learn: [indexdb]

- D:\huangyg\git\sample\indexdb
	- 基本读写操作测试正常，根据PSMD需求没有打开live server而是直接双击html文件。
	- 满足应用需求。
- 事务在语法上只定义开始，不定义结束。由浏览器判断所有操作完成就结束。如果浏览器认为事务已经“稳定”（没有新的请求进来），它就会自动提交或中止该事务，然后事务对象就失效了。
	- 关键问题在于：如果你在第一个按钮点击时创建事务，然后等待用户的第二次点击，那么在两次点击之间的这段时间里，事件循环会认为你的事务已经完成了所有工作，从而自动关闭它。当用户第二次点击时，你试图使用一个已经失效的 transaction 对象，浏览器会抛出一个 TransactionInactiveError 错误。
- https://jsonbin.io/
	- 免费额度太少，不如直接提交到github。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.10.14.[无名任务]任务&body=日期: 2025.10.14.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20251014.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20251014190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- far manager底下命令行，执行node命令不方便。比如不能滚屏。
- 在debian安装了midnight commander和sc-im。
	- sc-im的数据处理还报错，比如=sum(H3:H4)
