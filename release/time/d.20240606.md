# 2024.06.06.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月上旬补足前两月缺勤。今天绑定模版1。

<a id="index"></a>
- 07:45	[实现2024.6.4.16:00draft的方案三](#20240606074500)  
- 09:30	[entity,ego draft](#20240606093000)  
- 14:00	[同npm发布包](#20240606140000)  
- 14:30	[新版数字证书CA](#20240606143000)  
- 16:00	[entify、ego的共同体接口](#20240606160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 15975 | 15374 | 601 | 2310 |
| PSMD | 7000 | 6981 | 19 | 600 |
| learn | 1000 | 1107 | -107 | 870 |
| ego | 4500 | 4404 | 96 | 330 |
| js | 1375 | 1155 | 220 | 360 |
| xuemen | 1500 | 1253 | 247 | 120 |
| raw | 600 | 444 | 156 | 30 |
| infra | 0 | 30 | -30 | 0 |

---

waiting list:


- 30分钟时间片：
  - js的第1号事项：ESM(ESModule)
  - raw的第1号事项：检查etable递归过程是否累加amount字段而未检查unit字段的。
  - js的第2号事项：https://www.npmjs.com/package/commander
  - learn的第2号事项：寻找可编程的,去中心化的信息发布方式

- 60分钟时间片：
  - xuemen的第1号事项：重新设计S2状态下的学门基本管理制度
  - learn的第1号事项：熟悉知识库语法
  - xuemen的第2号事项：term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型
  - ego的第3号事项：用js代码完成日小结后的git操作。

- 90分钟时间片：
  - ego的第1号事项：编写浮动时间表代码
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法
  - learn的第8号事项：把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。

- 195分钟时间片：
  - PSMD的第1号事项：entify, ego draft
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第10号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.06.[实现2024.6.4.16:00draft的方案三]任务&body=日期: 20240606%0D%0A序号: 0%0D%0A手稿:../../draft/2024/06/20240606074500.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240606074500"></a>
## 7:45~8:44
实现2024.6.4.16:00draft的方案三

- 开始三季度时间表： D:\huangyg\git\ego\data\season\2024S3.yaml
- 增加map字段，根据身体状况和起床时间选取dayplan
    - 起床时间取 D:\huangyg\git\raw\health\d.yyyymmdd.yaml 的wake.time字段
    - 身体状况取 D:\huangyg\git\ego\src\ego.js 的 arguments[1]
        - 存在与arguments[1] 同名的 dayplan，直接绑定
        - 不存在与 arguments[1] 同名的dayplan，作为身体状况取map查找dayplan，然后绑定
- map字段内容为
    - 方案a：status: regex: dayplan
    - 方案b：status: dayplan: start,end
    - 方案b更直观
- dayplan的时间片定义
    - 有beginhour、beginminute：固定开始时间
        - 有amount：固定时长
    - 没有beginhour、beginminute：浮动开始时间，以上一个时间片结束时间+1作为开始
        - 有endhour、endminute：固定结束时间、浮动时长
        - 有amount：固定时长、浮动结束时间
    - 无论哪种情况，时间片都能计算出结束时间，只使用wake.time和之前时间片，不需要之后的信息。
- map范例
```
map:
  1:
    1a:
      start: 0
      end: 040459
    1b:
      start: 040500
      end: 042959
    1c:
      start: 043000
      end: 045959
```
- dayplan范例
```
dayplan:
  '1a':
    supply:
      '30': 2
      '60': 2
      '90': 1
    time:
      - amount: 15
        type: free
        name: 休整
      - amount: 60
        type: prepare
        name: 备餐、运动
      - amount: 45
        type: food
        name: 早餐
      - amount: 45
        type: discuss
        name: 会议、自习
      - endhour: 7
        endminute: 44
        type: free
        name: 休整
      - beginhour: 7
        beginminute: 45
        amount: 60
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/xtgD4F
      - beginhour: 8
        beginminute: 45
        amount: 45
        type: free
        name: 休整
      - beginhour: 9
        beginminute: 30
        amount: 90
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/j1SspP
      - beginhour: 11
        beginminute: 0
        amount: 180
        type: food
        name: 备餐、午餐午休
      - beginhour: 14
        beginminute: 0
        amount: 30
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/8t3vlk
      - beginhour: 14
        beginminute: 30
        amount: 30
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/5k9gJy
      - beginhour: 15
        beginminute: 0
        amount: 60
        type: free
        name: 休整
      - beginhour: 16
        beginminute: 0
        amount: 60
        type: work
        name: 静默工作
        namelink: http://simp.ly/p/4QDThK
      - beginhour: 17
        beginminute: 0
        amount: 120
        type: food
        name: 晚餐
      - beginhour: 19
        beginminute: 0
        amount: 60
        type: check
        name: 讨论、整理提交
    readme: |
      模版一采用静默工作方式。  
      希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐或会议自习时间。
```
- 只完成了yaml文件设计，代码还需要追加时间：
    - '60': 编写浮动时间表代码
      readme: |
        2024.6.4.16:00 draft
        2024.6.6.7:45 draft

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.06.[entity,ego draft]任务&body=日期: 20240606%0D%0A序号: 1%0D%0A手稿:../../draft/2024/06/20240606093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240606093000"></a>
##  9:30~10:59
entity,ego draft

继续追加时间。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.06.[同npm发布包]任务&body=日期: 20240606%0D%0A序号: 2%0D%0A手稿:../../draft/2024/06/20240606140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240606140000"></a>
## 14:00~14:29
同npm发布包

- npm账号不能用，恢复密码email接收不到。
- 学习：
    - https://dev.nodejs.cn/learn/the-package-json-guide/
    - https://npm.nodejs.cn/cli/v8/configuring-npm/package-json
- 编写：
    - D:\huangyg\git\js.sample\nosql\package.json
- 创建新用户。
- npm login
- npm publish
    - nosql：名称已占用
    - @huangyg/nosql：私有包需要付费
    - huangyg-nosql：通过，config.js因为.gitignore而忽略。
```
D:\huangyg\git\js.sample\nosql>npm publish
npm warn publish npm auto-corrected some errors in your package.json when publishing.  Please run "npm pkg fix" to address these errors.
npm warn publish errors corrected:
npm warn publish Removed invalid "scripts"
npm notice
npm notice package: huangyg-nosql@1.0.0
npm notice Tarball Contents
npm notice 83B FSM.csv
npm notice 1.1kB FSM.js
npm notice 634B FSM.json
npm notice 795B jssm.js
npm notice 4.4kB levelgraph.js
npm notice 1.6kB lowdb.js
npm notice 964B machina.js
npm notice 19.7kB neo4j_query_cmd_history_2024-5-27.txt
npm notice 2.3kB neo4j.js
npm notice 421B package.json
npm notice 508B quick-yaml.ts
npm notice 667B redis.js
npm notice 1.6kB yourdb/000055.ldb
npm notice 1.3kB yourdb/000057.ldb
npm notice 1.3kB yourdb/000060.ldb
npm notice 3.8kB yourdb/000061.log
npm notice 16B yourdb/CURRENT
npm notice 0B yourdb/LOCK
npm notice 260B yourdb/LOG
npm notice 505B yourdb/LOG.old
npm notice 227B yourdb/MANIFEST-000059
npm notice Tarball Details
npm notice name: huangyg-nosql
npm notice version: 1.0.0
npm notice filename: huangyg-nosql-1.0.0.tgz
npm notice package size: 9.1 kB
npm notice unpacked size: 42.2 kB
npm notice shasum: 3ee538c9a1c887a33b07ec64621febdefccd1889
npm notice integrity: sha512-rk9JEfOanRVQv[...]PIAZj4BNd/O5Q==
npm notice total files: 21
npm notice
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
Authenticate your account at:
https://www.npmjs.com/auth/cli/e9d74aac-ef37-4a88-97dd-4404f95248e5
Press ENTER to open in the browser...

+ huangyg-nosql@1.0.0
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.06.[新版数字证书CA]任务&body=日期: 20240606%0D%0A序号: 3%0D%0A手稿:../../draft/2024/06/20240606143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240606143000"></a>
## 14:30~14:59
新版数字证书CA

- 通知
      - 【北京数字认证】北京市电子税务局新版上线，一证通用户必须下载安装一证通CA控件，才能登录使用！
      - 一证通CA控件下载地址：https://bjtax.bjca.org.cn/bjtax/index.html
      - 咨询电话：400-700-1900转人工1-0-0
- 已安装环境，登录成功。密码已归档。登记17分钟，余下时间继续完成npm。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.06.06.[entify、ego的共同体接口]任务&body=日期: 20240606%0D%0A序号: 4%0D%0A手稿:../../draft/2024/06/20240606160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240606160000"></a>
## 16:00~16:59
entify、ego的共同体接口

继续追加时间。
