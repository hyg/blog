# 2025.03.11.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，三月份安排休整和总结，三月中上旬补足前两月缺勤。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:00	raw: [复习五元庄第五式](#20250311140000)
- 14:30~14:30	raw: [复习五元庄第四式](#20250311143000)
- 16:00~17:59	learn: [复习ipld](#20250311160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5370 | 8160 | 5925 |
| PSMD | 4000 | 2990 | 1010 | 1335 |
| ego | 2530 | 690 | 1840 | 975 |
| infra | 2000 | 120 | 1880 | 315 |
| xuemen | 1000 | 195 | 805 | 450 |
| raw | 1000 | 540 | 460 | 780 |
| learn | 2000 | 475 | 1525 | 1290 |
| js | 1000 | 360 | 640 | 780 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：复习五元庄第四式
  - raw的第2号事项：复习五元庄第五式
  - raw的第4号事项：复习五元庄第六式
  - raw的第5号事项：复习五元庄第七式

- 60分钟时间片：
  - js的第1号事项：learn Orbitdb
  - infra的第2号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第2号事项：oData simple
  - js的第2号事项：js class

- 90分钟时间片：
  - ego的第1号事项：新版实时手稿
  - learn的第1号事项：飞书 nodejs sdk
  - ego的第2号事项：新版本任务、子任务的数据结构
  - PSMD的第2号事项：子1609

- 195分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第1号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.11.[复习五元庄第五式]任务&body=日期: 2025.03.11.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250311.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250311140000"></a>
## 14:00 ~ 14:00
## raw: [复习五元庄第五式]


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.11.[复习五元庄第四式]任务&body=日期: 2025.03.11.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250311.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250311143000"></a>
## 14:30 ~ 14:30
## raw: [复习五元庄第四式]


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.03.11.[复习ipld]任务&body=日期: 2025.03.11.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250311.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250311160000"></a>
## 16:00 ~ 17:59
## learn: [复习ipld]

- 复习dag-json
```
D:\huangyg\git\js.sample\ipld>node DAG-json.js
data: <Buffer 7b 22 78 22 3a 31 2c 22 79 22 3a 5b 32 2c 33 2c 7b 22 2f 22 3a 22 51 6d 61 6f 7a 4e 52 37 44 5a 48 51 4b 31 5a 63 55 39 70 37 51 64 72 73 68 4d 76 58 ... 109 more bytes>
decoded: {
  x: 1,
  y: [ 2, 3, CID(QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4) ],
  z: {
    a: CID(QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4),
    b: null,
    c: 'string'
  }
}
decoded.y[0] 2
CID.asCID(decoded.z.a): CID(QmaozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4)
```
- https://github.com/ipld/js-dag-json
- 其实PSMD只使用CID（multiformat）就足够了。