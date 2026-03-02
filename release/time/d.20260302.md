# 2026.03.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~09:59	raw: [整理代码，理顺food.js几个成员函数之间的调用关系](#20260302093000)
- 19:00~19:59	check: [零散笔记](#20260302190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1635 | 11895 | 7560 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 945 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 0 | 1000 | 30 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4545 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：用js代码完成日小结后的git操作。
  - xuemen的第1号事项：月初事务
  - js的第9号事项：passportjs
  - ego的第10号事项：时间改为ISO8601格式

- 60分钟时间片：
  - learn的第1号事项：Farcaster
  - js的第2号事项：TensorFlow.js
  - learn的第3号事项：XSTATE https://xstate.js.org/
  - learn的第4号事项：按petri网定义设计几个实例

- 90分钟时间片：
  - js的第1号事项：openpgp v6.1.1.
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - learn的第2号事项：HPKE（Hybrid Public Key Encryption，RFC 9180）
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - PSMD的第2号事项：会话skill套装设计
  - ego的第2号事项：新版ego, instance or model, any manifest
  - learn的第28号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.02.[整理代码，理顺food.js几个成员函数之间的调用关系]任务&body=日期: 2026.03.02.%0D%0A序号: 5%0D%0A手稿:../../draft/2026/20260302.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260302093000"></a>
## 09:30 ~ 09:59
## raw: [整理代码，理顺food.js几个成员函数之间的调用关系]

- gemini 2.5pro -> gemini.upgrade.md
- 考虑把buy excel文件功能纳入，统一管理食材采购和配餐营养。

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.02.[无名任务]任务&body=日期: 2026.03.02.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260302.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260302190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- HPKE（Hybrid Public Key Encryption，RFC 9180）主要替代/统一了以下碎片化方案：

| 方案                            | 标准来源                                          | 核心问题                                          | 与 HPKE 对比                       |
| ----------------------------- | --------------------------------------------- | --------------------------------------------- | ------------------------------- |
| **ECIES (ANSI X9.63)**        | ANSI, IEEE 1363a, ISO/IEC 18033-2, SECG SEC 1 | 依赖 SHA-1、RIPEMD 等过时算法；缺乏 IND-CCA2 证明；无统一测试向量  | HPKE 统一了这些碎片标准，使用现代 AEAD 算法     |
| **NaCl/libsodium (box/seal)** | 非标准（djb 设计）                                   | 算法固定（Curve25519 + XSalsa20-Poly1305），缺乏标准化流程  | HPKE 提供标准化、可审计的替代方案，支持算法协商      |
| **OpenPGP**                   | RFC 4880                                      | 复杂的历史包袱，支持遗留算法；密钥管理基于 Web of Trust            | HPKE 更轻量，专为协议嵌入设计，非用户工具         |
| **Noise Protocol**            | 非 IETF 标准                                     | 主要用于传输层（如 WireGuard），"one-way" 模式非标准化         | HPKE 专注于应用层加密，与 TLS/HTTP 层集成更好  |
| **RSA-OAEP**                  | PKCS#1                                        | 性能差、密文膨胀大、不利于后量子迁移                            | HPKE 基于椭圆曲线，支持 KEM 抽象层便于 PQC 迁移 |

- https://jsr.io/@dajiaji/hpke
- @hpke/hpke-js
- 设专门学习任务，消化之后openpgp不再投入时间。
