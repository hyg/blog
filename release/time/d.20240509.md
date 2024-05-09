# 2024.05.09.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 07:45	[本地html调用远程git repo或者git page的metadata](#20240509074500)  
- 09:30	[使用1609模型实际编写COM的metadata](#20240509093000)  
- 14:00	[了解XMPP协议，为自动发送通知做准备。](#20240509140000)  
- 14:30	[nodejs中使用微信，为协同工作做准备。](#20240509143000)  
- 16:00	[整理DRI metadata](#20240509160000)  

---
season stat:

| task | alloc | sold | hold |
| --- | --- | --- | --- |
| total | 13275 | 8523 | 4752 |
| PSMD | 7000 | 4386 | 2614 |
| learn | 1000 | 412 | 588 |
| ego | 3000 | 2054 | 946 |
| js | 1375 | 495 | 880 |
| xuemen | 600 | 881 | -281 |
| raw | 300 | 265 | 35 |
| infra | 0 | 30 | -30 |

---

waiting list:


- 30分钟时间片：
  - raw的第1号事项：整理今年夏季使用的NRV metadata
  - ego的第2号事项：日小结时间统计增加一列todo，累计还没有进行的todo项时间。
  - learn的第2号事项：YARRRML
  - js的第3号事项：学习AMD规范，如果适用就开发范例

- 60分钟时间片：
  - js的第1号事项：使用wechty做一个微信机器人范例
  - learn的第1号事项：github的actions,workflow,job脚本语法
  - js的第2号事项：学习promise对象和async/await
  - raw的第2号事项：实现自定义DRI,NRV的代码

- 90分钟时间片：
  - PSMD的第1号事项：完成1609 COM metadata
  - ego的第1号事项：实现todo项的多层结构
  - PSMD的第2号事项：完成1609 deploy、COD的metadata
  - PSMD的第3号事项：COM metadata -> COM view

- 195分钟时间片：
  - xuemen的第1号事项：整理S2状态下基本管理制度
  - PSMD的第4号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第9号事项：在整理近期手稿之后，修订个人模型。

---

[top](#top) | [index](#index)
<a id="20240509074500"></a>
## 7:45~8:44
本地html调用远程git repo或者git page的metadata

- blog/release/entry.test.html 失败，继续找问题。
- 最后不行就把metadata写成js文件，方便跨域调用。
    - js文件又不如直接写成html view。
- js.sample/terms/entry.test.html 先实现git page中的html读取metadata，已测试通过。
- 追加todo项：
    - '60': /release/entry.html 读取 markdown和metadata 并显示。
- codeberg的同域名page读取也测试通过。
- 页面布局是：
    - github和codeber下各有入口html，由这些html读取同域名下的metadata或者markdown文件。需要跨域的时候就跳转html。

---

[top](#top) | [index](#index)
<a id="20240509093000"></a>
##  9:30~10:59
使用1609模型实际编写COM的metadata

- 三级决策条款
```
  level2:
    - upgradeby: <COM.1609.level1.1>
      termid: 88e5c5f4
      map:
        <term.88e5c5f4.entity.1>: <COM.1609.entity.admin>
        <term.88e5c5f4.term.1>: <COM.1609.level1.1>
    - upgradeby: <COM.1609.level1.3>
      termid: 4e9e9c33
      map:
        <term.4e9e9c33.entity.1>: <COM.1609.entity.deployer>
        <term.4e9e9c33.entity.2>: <COM.1609.entity.worker>
        <term.4e9e9c33.term.1>: <COM.1609.level1.3>
        <term.4e9e9c33.asset.1>: <COM.1609.asset.1>
        <term.4e9e9c33.asset.2>: <COM.1609.asset.2>
    - upgradeby: <COM.1609.level1.3>
      termid: 666776c3
      map:
        <term.666776c3.entity.1>: <COM.1609.entity.director>
        <term.666776c3.entity.2>: <COM.1609.entity.supervisor>
        <term.666776c3.entity.3>: <COM.1609.entity.worker>
        <term.666776c3.term.1>: <COM.1609.level1.3>
        <term.666776c3.asset.1>: <COM.1609.asset.1>
        <term.666776c3.asset.2>: <COM.1609.asset.2>
    - upgradeby: <COM.1609.level1.4>
      termid: efaeac70
      map:
        <term.efaeac70.entity.1>: <COM.1609.entity.trustee>
        <term.efaeac70.term.1>: <COM.1609.level1.4>
        <term.efaeac70.asset.1>: <COM.1609.asset.1>
```

- 保密制度
```
name: 1609-保密制度
id: ac890987
interface:
  <term.ac890987.term.1>: 自修订条款1.
  <term.ac890987.term.2>: 二级决策程序1.
  <term.ac890987.term.3>: 不可修订条款
  <term.ac890987.term.4>: 自修订条款
  <term.ac890987.term.5>: 二级决策条款
item:
  - localid: '1'
    upgradeby: <term.ac890987.term.1>
    termid: 72af7dea
  - localid: '2'
    upgradeby: <term.ac890987.term.1>
    termid: 02c7d037
    map:
      <term.02c7d037.term.1>: <term.ac890987.term.3>
      <term.02c7d037.term.2>: <term.ac890987.term.4>
      <term.02c7d037.term.3>: <term.ac890987.term.5>
      <term.02c7d037.term.4>: <term.ac890987.term.1>
  - localid: '3'
    upgradeby: <term.ac890987.term.2>
    termid: ef4cdffe
    map:
      <term.ef4cdffe.term.1>: <term.ac890987.term.2>
``` 
```
D:\huangyg\git\PSMD\src>node term term ac890987
enter maketermtext:ac890987     prefix:
enter maketermtext:72af7dea     prefix:1.
enter maketermtext:02c7d037     prefix:2.
enter maketermtext:ef4cdffe     prefix:3.
../view/term.ac890987.md文件更新，内容如下:
条款 ac890987 正文:
1. 本条款按照自修订条款1.条款修订。本制度正文公开。
2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制度不得规定。
3. 本条款按照二级决策程序1.条款修订。其它规章正文及执行记录默认为公开。

Warning: missing space before text for line 6 of jade file "undefined"
Warning: missing space before text for line 8 of jade file "undefined"
Warning: missing space before text for line 10 of jade file "undefined"
../view/term.ac890987.html文件更新，内容如下:
<html lang="zh-cn"><head><title>term html sample</title><script></script></head><body><h3>条款 ac890987</h3><hr/><p>正文:</p><p>1. 本条款按照自修订 条款1.条款修订。本制度正文公开。<br/>
2. 本条款按照自修订条款1.条款修订。不可修订条款、自修订条款、二级决策条款的正文以及执行记录的保密事项由这些条款自己定义，本制度不得规定。<br/>
3. 本条款按照二级决策程序1.条款修订。其它规章正文及执行记录默认为公开。<br/>
</p><hr/></body></html>
```

- 条款内容要用text: | 然后换行，而不能直接写在text: 后面，否则末尾没有回车，makeview时不会换行。
  - text: [^|]
- 追加后续todo项：
    - '90': 完成1609 COM metadata
      readme: |
        - 利益分配条款
        - 各决策条款的改变事项，微调。
    - '90': 完成1609 deploy、COD的metadata
    - '90': COM metadata -> COM view

---

[top](#top) | [index](#index)
<a id="20240509140000"></a>
## 14:00~14:29
了解XMPP协议，为自动发送通知做准备。

目前主流的IM协议有：  
- XMPP (Extensible Messaging and Presence Protocol)
- SIMPLE(session initiation protocol for instant messaging and presence leveraging extensions)
- IMPP (Instant Messaging and Presence Protocol)
- activesync

学习 xmpp
- https://xmpp.org/about/technology-overview/
- https://conversejs.org/
    - jabbim.com 的web模式使用
    - https://github.com/conversejs/converse.js/
    - https://www.npmjs.com/package/converse.js/v/10.0.0
    - https://conversejs.org/docs/html/
- https://www.npmjs.com/package/@xmpp/client
- 新建js.sample/IM
    - 能看到online事件发出的信息，对方可以接收到。
    - 对方发来的，没有触发stanza事件。
```
D:\huangyg\git\js.sample\IM>node xmpp
<ref *1> Element {
  name: 'iq',
  parent: Element {
    name: 'stream:stream',
    parent: null,
    children: [],
    attrs: {
      id: '15186860272392038401',
      version: '1.0',
      'xml:lang': 'en',
      'xmlns:stream': 'http://etherx.jabber.org/streams',
      from: 'jabbim.com',
      xmlns: 'jabber:client'
    }
  },
  children: [
    Element {
      name: 'bind',
      parent: [Circular *1],
      children: [Array],
      attrs: [Object]
    }
  ],
  attrs: { type: 'result', id: 'z3j047wbpg' }
}
onlinelearn@jabbim.com/9490604234615875585234876738
^C
D:\huangyg\git\js.sample\IM>
```

先不追加时间，利用休整时间看看再说。

---

[top](#top) | [index](#index)
<a id="20240509143000"></a>
## 14:30~14:59
nodejs中使用微信，为协同工作做准备。

### nodejs

- https://github.com/node-weixin/node-weixin-api
- https://gitee.com/javen205/TNWX
- https://github.com/wechaty/wechaty
    - https://wechaty.gitbook.io/wechaty/v/zh
- 

### 命令行

- https://github.com/goorockey/node-wechat-terminal
- https://github.com/oneatletico/cmd-wechat-terminal

- 命令行还是需要人工操作，nodejs的wechty应该可以试试。
- 追加一个todo项：
    - '60': 使用wechty做一个微信机器人范例
      readme: |
        - https://github.com/wechaty/wechaty
        - https://wechaty.gitbook.io/wechaty/v/zh

---

[top](#top) | [index](#index)
<a id="20240509160000"></a>
## 16:00~16:59
整理DRI metadata

D:\huangyg\git\raw\food\DRIs.DRIforChina2023.yaml

- 增加PAL字段：身体活动水平。三级数值为1.4、 1.7、 2.0。
- 能量增加EER字段：能量需要量 EER=BMR*PAL = 1828.83
    - BMR 基础代谢率 (kcal/d) = 14.52W-15.88S+565.79 = 1310.67
        - W体重，kg
        - S性别，男=0，女=1
- 应该用代码来计算。
- 部分营养成分增加readme字段
- 钴增加RfD字段，每日参考剂量
- 硼等增加NOAEL，No Observed Adverse Effect Level 无可见有害作用水平
- 钒增加LOAEL字段，最低可见有害作用水平
- 砷增加MRL字段
- 牛磺酸等增加OSL字段，人体观察到的安全水平 observed safe level

追加todo项：  
- '30': 整理今年夏季使用的NRV metadata