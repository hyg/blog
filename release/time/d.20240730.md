# 2024.07.30.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~09:39	PSMD: [machines model](#20240730093000)
- 14:00~14:29	PSMD: [整理新版本term的manifest code](#20240730140000)
- 16:00~16:44	xuemen: [国家网络身份认证公共服务管理办法](#20240730160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 6237 | 11463 | 3360 |
| PSMD | 7000 | 1452 | 5548 | 555 |
| ego | 4000 | 1472 | 2528 | 765 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 165 | 1335 | 450 |
| raw | 500 | 320 | 180 | 150 |
| learn | 1500 | 1385 | 115 | 900 |
| js | 1200 | 1353 | -153 | 540 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：设计新版raw.js架构。
  - raw的第2号事项：新版raw.js的子命令-营养成分详情
  - raw的第3号事项：新版raw.js的子命令-营养成分排序
  - learn的第3号事项：linkml, yaml-ld, coding time.

- 60分钟时间片：
  - learn的第1号事项：Getting Things Done with IPLD
  - js的第1号事项：learn Orbitdb
  - ego的第2号事项：eventemitter sample
  - learn的第2号事项：schema in ipld,coding time.

- 90分钟时间片：
  - PSMD的第1号事项：machines model
  - PSMD的第2号事项：整理新版本term的manifest code
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法
  - PSMD的第5号事项：term metadata的序号，分为显示序号和唯一id两种。

- 195分钟时间片：
  - ego的第1号事项：新版ego, instance or model, any manifest
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.30.[machines model]任务&body=日期: 2024.07.30.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240730093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240730093000"></a>
# 9:30~10:59
PSMD: [machines model]

- readme: |
      - a sample instance of machine,FPM,FSM in manifest code 
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制
- 继续追加时间。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.30.[整理新版本term的manifest code]任务&body=日期: 2024.07.30.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240730140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240730140000"></a>
## 14:00~15:29
PSMD: [整理新版本term的manifest code]

- readme: |
      - 为了显示而设计的term model，并不适合与代码绑定。
      - 设计前置protocol的定义和数据表现
        - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
        - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
        - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
      - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
        - 根据FSM、FPM、machine的设计决定term的粒度。
        - 设计每项知识的思考和案例积累锚点。
      - 随之修订manifest text。
      - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
- 整理些天相关的draft，调整readme部分。安排一个大的后续todo项，开了头之后再分解。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.30.[国家网络身份认证公共服务管理办法]任务&body=日期: 2024.07.30.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240730160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240730160000"></a>
## 16:00~16:59
xuemen: [国家网络身份认证公共服务管理办法]

- https://www.cac.gov.cn/2024-07/26/c_1723675813897965.htm
- https://weibo.com/1494926084/OpXzxA5Sj
- 线下核验：
      - 公共服务平台用私钥对网号加盐进行签名，发布eID={{网号，盐，公钥，签名：{签名时间、签名方法、签名}，检验码:{校验方法，校验码}}序列化字符串，序列化方法}。
      - 验证工具本身不携带任何初始数据：
            - 反序列化得到{网号，盐，公钥，签名，校验码}。
            - 检验校验码，得到{网号，盐，公钥，签名}。
            - 检验签名，核验{网号}在签名时间是合法的。
