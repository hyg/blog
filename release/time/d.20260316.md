# 2026.03.16.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1d)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260316190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7200 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4365 |
| js | 1000 | 150 | 850 | 1290 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：学习优秀的petri网设计案例
  - js的第2号事项：新版raw.js的子命令-营养成分详情
  - js的第5号事项：新版raw.js的子命令-营养成分排序
  - learn的第11号事项：XACML（存量）

- 60分钟时间片：
  - js的第1号事项：learn factory, constructor, prototype
  - learn的第4号事项：Zapier
  - learn的第5号事项：Polygon/Arbitrum
  - ego的第6号事项：eventemitter sample

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - learn的第2号事项：XSTATE https://xstate.js.org
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第24号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.16.[无名任务]任务&body=日期: 2026.03.16.%0D%0A序号: 10%0D%0A手稿:../../draft/2026/20260316.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260316190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- D:\huangyg\git\node-awiki
	- 修复dev反馈的bug。
	- qwen --resume 2c3924e2-e087-4a21-9b2c-e7a4a17ae27e
```
Python 的 encode_signature 方法会：
1. 尝试解析 DER 格式的签名，提取 r 和 s
2. 将 r 和 s 转换为固定 32 字节的 big-endian 格式
3. 拼接 r||s（共 64 字节）
4. 使用 base64url 编码（不带 padding）
```
```
                                                                                                                                                           │
  │    ================================================================================                                                                           │
  │    测试套件 1: 群组功能静默测试                                                                                                                               │
  │    测试群组：AI 学习与培训 (入群码：376027)                                                                                                                   │
  │    ================================================================================                                                                           │
  │                                                                                                                                                               │
  │    [步骤 1] 第一个 DID 加入群组...                                                                                                                            │
  │    ✓ 加入成功                                                                                                                                                 │
  │    群组 ID: 60d38c54-6270-4e29-ae02-f26cc4b421e6                                                                                                              │
  │                                                                                                                                                               │
  │    [步骤 2] 第二个 DID 加入群组...                                                                                                                            │
  │    ✓ 加入成功                                                                                                                                                 │
  │                                                                                                                                                               │
  │    [步骤 3] 查看群组详情...                                                                                                                                   │
  │    查看群组：✓ 成功                                                                                                                                           │
  │                                                                                                                                                               │
  │    [步骤 4] 查看群组成员...                                                                                                                                   │
  │    查看成员：✗ 失败                                                                                                                                           │
  │                                                                                                                                                               │
  │    [步骤 5] 列出已加入的群组...                                                                                                                               │
  │    列出群组：✗ 失败                                                                                                                                           │
  │                                                                                                                                                               │
  │    --------------------------------------------------------------------------------                                                                           │
  │    群组功能测试结果汇总:                                                                                                       	                               │
  │    --------------------------------------------------------------------------------                                                                           │
  │    通过：3/5                  
  ···


- D:\huangyg\git\sample\awiki
	- 调用几个定制agent，相对宽松的提示词完成移植。配额用完前还没完成。
	- qwen --resume c3f7a14c-2cb3-4664-96e5-642c86889f65
	- opencode -s ses_308fee7d2ffevz5zvODCWeotT3
