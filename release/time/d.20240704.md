# 2024.07.04.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[day plan, day log, waiting list](#20240704093000)  
- 14:00	[了解免安装web im的机制：gitter.im](#20240704140000)  
- 14:30	[github project](#20240704143000)  
- 16:00	[metadata中自带处理代码的范例](#20240704160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 554 | 17146 | 3165 |
| PSMD | 7000 | 157 | 6843 | 660 |
| ego | 4000 | 90 | 3910 | 450 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 345 |
| raw | 500 | 0 | 500 | 60 |
| learn | 1500 | 137 | 1363 | 1050 |
| js | 1200 | 50 | 1150 | 600 |

---

waiting list:


- 30分钟时间片：
  - learn的第5号事项：trello api
  - PSMD的第6号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。
  - learn的第6号事项：Document-Oriented数据库
  - PSMD的第7号事项：重新思考term metadata种的upgradeby，是否需要显示内容和id两种。

- 60分钟时间片：
  - ego的第1号事项：新版ego.js的数据结构
  - learn的第1号事项：simplenote的数据同步机制
  - raw的第1号事项：月度季度报告的报表统一到新格式
  - PSMD的第2号事项：用linkml编写一套标准模型

- 90分钟时间片：
  - xuemen的第1号事项：kernel模型升级
  - js的第1号事项：peerjs sample
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - learn的第3号事项：拟制说、目的财产说、实在说

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第12号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.04.[day plan, day log, waiting list]任务&body=日期: 20240704%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240704093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240704093000"></a>
##  09:30~10:59
ego: [day plan, day log, waiting list]

- season metadata 的map字段增加mode=2的映射。
- 统一几个数据结构和方法：
    - waiting list：下一步可以选择多种优先级模型
    - season stat
    - day schadule：
    - day index
- 试一下抓取simplenote页面：
    - 跨站
        - getTextFileFromURL返回1、0、“”；4、0、“”。
    - frame

- 增加todo项：
    - '60': simplenote的数据同步机制
      readme: |
        - https://simperium.com/overview/
        - https://simplenote.com/developers/
        - https://simperium.com/docs/reference/http/
    - '60': 新版ego.js的数据结构
      readme: 参考2024.7.4.9:30 draft

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.04.[了解免安装web im的机制：gitter.im]任务&body=日期: 20240704%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240704140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240704140000"></a>
## 14:00~14:29
learn: [了解免安装web im的机制：gitter.im]

- github账号登录：@hyg-57556846c43b8c6019781aff:gitter.im
    - web可以登录
    - element app也可以登录（Security Key.）：Continuing will grant element://vector/webapp/ access to your account.
- Since Gitter runs on Matrix, you can use the wonderful Matrix API against https://gitter.ems.host/ (ex. GET https://gitter.ems.host/_matrix/client/versions)
    - https://github.com/matrix-org/matrix-js-sdk
- 增加todo项：
    - '60': giiter.im bot sample
      readme: |
        - https://github.com/matrix-org/matrix-js-sdk
        - http://matrix-org.github.io/matrix-js-sdk/index.html

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.04.[github project]任务&body=日期: 20240704%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240704143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240704143000"></a>
## 14:30~14:59
learn: [github project]

- 仿trello、project
- API： https://docs.github.com/zh/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects
- github desktop：不支持github project
- 功能适合团队协作，单人使用的话过于复杂。自动化不如本地方便。

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.04.[metadata中自带处理代码的范例]任务&body=日期: 20240704%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240704160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240704160000"></a>
## 16:00~16:59
infra: [metadata中自带处理代码的范例]

- D:\huangyg\git\js.sample\codestr
```
var dataobj = yaml.load(fs.readFileSync("test.yaml"));
var codestr =  dataobj.code ;
import(codestr).then((code)=>{
    code.datatoview(dataobj);
}).catch((err) => {
    console.log("error:"+err);
});

var jsstr =  dataobj.js ;
try{
    require(jsstr).datatoview(dataobj);
}
catch(err){
    console.log("error:"+err);
};
```
- import、require两种方法执行结果都正常：
```
D:\huangyg\git\js.sample\codestr>node main
data:123456
195:195str
data:123456
60:60str
```

- 测试dat desktop
- https://github.com/sammacbeth/dat-fox/blob/master/README.md
    - https://addons.mozilla.org/en-US/firefox/addon/dat-p2p-protocol/
    - 太复杂，不适合目标用户。
- draft ： dat://f9dd4e35a26ba81c2a1d0c94f76f37caf0805605b1756d5d33ed370392e3bed7
- 测试cabal
- PSMD：cabal://f2cbd3f1282dc5681a5212ef52936a979508113a12dfff2aa845b2bbe4604913
- 还比较简陋，删去的cabal还在，用户名不能改。
