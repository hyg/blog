# 2024.05.01.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2。

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | --- | --- |
| 04:00~04:14 | 15 | 休整 |  |
| 04:15~05:14 | 60 | 备餐、运动 |  |
| 05:15~05:59 | 45 | 早餐 |  |
| 06:00~06:44 | 45 | 会议、自习 |  |
| 06:45~07:44 | 60 | 休整 |  |
| 07:45~10:59 | 195 | 工作 | [基于新的term +termset metadata修改代码commit, generate view](#20240501074500) |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~15:29 | 90 | 工作 | [编写自动分录的代码](#20240501140000) |
| 15:30~15:59 | 30 | 休整 |  |
| 16:00~16:59 | 60 | 工作 | [复习个人模型](#20240501160000) |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

工作的同时可以在线讨论。

---

<a id="index"></a>
- 07:45	[基于新的term +termset metadata修改代码commit, generate view](#20240501074500)  
- 14:00	[编写自动分录的代码](#20240501140000)  
- 16:00	[复习个人模型](#20240501160000)  


---

[top](#top) | [index](#index)
<a id="20240501074500"></a>
## 7:45~10:59
基于新的term +termset metadata修改代码commit, generate view

      - item字段里可以自由排练text、term.
        - 无localid，或者localid为""的text，就是title，通常用做章、附件的开头。最好是含有placeholder。
        - localid同时作为prefix：向下改变所有内部序号，用"."依序连接起来。
      - 实际检验一下localid机制是否能实现prefix功能，或者需要单独设一个字段。
      - term commit
      - term metadata -> term txt
    

### commit()

- 调整昨天范例中的localid
  - term.1的顺延1；
  - term.2\3\4的改为空字符串，看后面使用再定。
- 增加effect字段内容供测试用。
  - depend、togetther、effect字段可能要增加map字段。
- 为了避免二义性，在placeholder中加入类型term、error等前缀。

term.1.yaml替换为term.01e1c775.yaml
```
name: 调整分配主比例
id: 01e1c775
interface:
  <term.01e1c775.entity.1>: deployer
  <term.01e1c775.entity.2>: director
  <term.01e1c775.entity.3>: 共同体
  <term.01e1c775.asset.1>: p
item:
  - localid: '1'
    termid: 23f76740
    upgradeby: <term.01e1c775.localid.1>
    map:
      <term.23f76740.entity.1>: <term.01e1c775.entity.1>
  - localid: '2'
    termid: bafdd0aa
    upgradeby: <term.01e1c775.localid.1>
    map:
      <term.bafdd0aa.asset.1>: <term.01e1c775.asset.1>
  - localid: '3'
    termid: 988ea839
    upgradeby: <term.01e1c775.localid.1>
    map:
      <term.988ea839.entity.1>: <term.01e1c775.entity.2>
readme: |
  本条款是模型1609利益分配的核心条款。
depend:
  - errorid: 'null'
    percent: 'null'
    text: ''
together:
  - errorid: 'null'
    percent: 'null'
    text: ''
effect:
  - errorid: 48291d8c
    percent: '50'
    map:
      <error.48291d8c.entity.1>: <term.01e1c775.entity.3>
    text: |
      1609模型可以有效分配未来收入，本条款是其中一部分。
```

term.2.yaml替换为term.23f76740.yaml
```
name: 自修订条款
id: 23f76740
interface:
  <term.23f76740.entity.1>: deployer
item:
  - localid: ''
    text: |
      由<term.23f76740.entity.1>书面提交即生效。
readme: |
  自修订条款是权力分配中的顶级条款。
effect: ''
```

### maketermview() maketermtext()

- 为调试给term metadata加上readme。

执行结果：
```
D:\huangyg\git\PSMD\src>node term term 01e1c775
../view/term.01e1c775.md文件更新，内容如下:
条款 01e1c775 正文:
1. 由deployer书面提交即生效。
2. p=20，p%=20%。
3. 由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

---
条款 01e1c775 readme:
本条款是模型1609利益分配的核心条款。
1. 自修订条款是权力分配中的顶级条款。
2. 本条款设置了参数p的初始值。
3. 本条款是权力分配中的二级条款。
```

---

[top](#top) | [index](#index)
<a id="20240501140000"></a>
## 14:00~15:29
编写自动分录的代码

- 复习：D:\huangyg\git\draft\2024\04\20240427160000.md
- 建立本地S2分支，把master的S2文件夹内容复制过来，冲突的先覆盖了。
- 创建data、src、view文件夹，在src下建立xuemen.js，分录模式暂定命令行：node xuemen entry。把AVR根据AEC生成AER：
    - 会计凭证	Accounting Voucher Record	AVR
    - 会计分录规则	Accounting Entry Code	AEC
    - 会计分录记录	Accounting Entry Record	AER


AVR
```
date: 
title: 
VoucherID: 
VoucherType:
summary:
amount:
item:
  - name:
    data:
  - name:
    data:
rawdata:
  '0': 批次号：
  '1': ...
```

AEC
```
CodeID:
VoucherType: 利息回单
code:
  path:
  hash:
map:
- AVRitem: amount
  AERitem: 
- AVRitem:
  AERitem:

AVR字段和AER字段映射
```

AER
```
date: 
VoucherID: 
AccountingSoftwareID: 
AccountingEntry: 
  - debit: 
    - AccountTitle: 
      amount: 
    credit: 
    - AccountTitle: 
      amount: 
    - AccountTitle: 
      amount: 
```

- 创建entry.js作为所有会计分录的入口，它根据会计凭证的种类VoucherType查找不同的AEC文件，然后根据AEC文件的code.path字段调用不同代码。再建立配套的文件：
    - xuemen\data\AEC.利息回单.1.yaml
    - xuemen\src\AEC.1.js

执行结果：
```
D:\huangyg\git\xuemen\src>node xuemen entry ..\..\xuemen.record\ISU2019.AVR.1.yaml
test.AER.nnn.yaml 文件已保存。内容如下:
 date: 2019-03-21T00:00:00.000Z
VoucherID: 190000468462
AccountingSoftwareID: 18010001
AccountingEntry:
  debit:
    - AccountTitle: 银行存款-交通银行
      amount: 2.25
    - AccountTitle: 财务费用-利息费用
      amount: -2.25
```

### 升级设想

- AEC改成js文件，便于xuemen.js调用。
    - getcodepath(VoucherType)  // 利息回单->AER.1.js
- 会计科目要建立基础metadata文件。现在暂时直接赋值。
- AER模版（D:\huangyg\git\xuemen\S2\AER.Template.yaml）中的AccountingEntry.debit字段应该去掉前面的“-”号，不是数组而是对象。


---

[top](#top) | [index](#index)
<a id="20240501160000"></a>
## 16:00~16:59
复习个人模型

- 复习旧版本：
    - D:\huangyg\git\ego\ego.com.md
    - D:\huangyg\git\ego\club.com.md
    - D:\huangyg\git\ego\cod.md
    - D:\huangyg\git\ego\README.note.md
- 通用模型支持建模，俱乐部模型支持（同层次的建模者、部署者）个人交流，ego是支持建模和交流。内置了（经过配置的）俱乐部cod的俱乐部成员个人模型。

- 新设想集中在这些定义：
    - 不再以p1、p2、ia定义资源池，而是容器模型的章程条款为定义。
    - 每种章程设立的账号发行自己的token，在资源紧缺压力下的交易产生汇率，按一定汇率规则可以共同发行联合token。按默认规则由所有token联合发行的，统一命名为joint token。
    - 继续沿用共同体层次、行为层次、契约层次的定义，作为joint token默认规则的一部分，无交易时的情形。
    - 除了对外契约，对内认知也会拉开层次，也作为默认规则的一部分。对内认知的成果与对外契约、容器账号建立映射关系。

### task之间结算体系，重新插入到ego的todo队列中。在整理近年手稿之后重新设计个人模型：  
- 通过具体结算传递内部资源压力，产生工作成果的内部成本。
- 工作成果的价格要从对外交易中产生。
- 个人模型的结构要准确反映长期的层次关系，使工作成果的成本价格差沿着这些关系向高层次和深层次两个方向合理分配。这些关系所转化成的规则应该：
    - 在每个局部应该是直观的、符合常识的。
    - 在局部-整体的关系上，也是直观的，符合常识的。
    - 根据上两条汇总出量化的结果，作为资源分配的依据。
- 结算体系再二季度完成修订，在三季度试运行，2025年正式发布。