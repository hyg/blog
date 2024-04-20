# 20240420

小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 |
| --- | --- | --- |
| 4:00~4:14 | 15 | 休整 |
| 4:15~5:14 | 60 | 备餐、运动 |
| 5:15~5:59 | 45 | 早餐 |
| 6:00~6:44 | 45 | 会议、自习 |
| 6:45~7:44 | 60 | 休整  |
| 7:45~8:44 | 60 | [静默工作](http://simp.ly/p/xtgD4F) |
| 8:45~9:29 | 45 | 休整 |
| 9:30~10:59 | 90 | [静默工作](http://simp.ly/p/j1SspP) |
| 11:00~13:59 | 180 | 备餐、午餐午休 |
| 14:00~14:29 | 30 | [静默工作](http://simp.ly/p/8t3vlk)  |
| 14:30~14:59 | 30 | [静默工作](http://simp.ly/p/5k9gJy) |
| 15:00~15:59 | 60 | 休整 |
| 16:00~16:59 | 60 | [静默工作](http://simp.ly/p/4QDThK) |
| 17:00~18:59 | 120 | 晚餐 |
| 19:00~19:59 | 60 | 讨论、整理提交 |

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。

---
<a id="index"></a>
- 07:45	[整理合同metadata范例](#20240420074500)  
- 09:30	[PSMD：一份要约的 metsdata → view](#20240420093000)  
- 14:00	[学习国密算法](#20240420140000)  
- 14:30	[子任务时间汇总](#20240420143000)  
- 16:00	[PSMD 设计error、log、env、knowledge等新的数据结构，思考与termset、com、task的关联。](#20240420160000)  

---


[top](#top) | [index](#index)
<a id="20240420074500"></a>
## 7:45~8:44

整理合同metadata范例

完成了：  
- draft 202404151600.md 中的附件21：d0111eb4  
- 附件31：PSMD升级规则中的PS标准：6d206b54  
- 附件32：PSMD升级规则中的保密规则：9e6bc34f  

解决一个错误，输出到markdown文件居然习惯性地加了yaml.dump() 。导致markdown中的序号后有两个空格，还有换行的情况。

[top](#top) | [index](#index)
<a id="20240420093000"></a>
##  9:30~10:59

PSMD：一份要约的 metsdata → view

draft 202404151600.md：  

~~~

针对不同条件给出建议如下：
1. 使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。
	- 同意按照附件20增加补充信息，补充关于附件30，42，31、32、33、34的补充信息，且均判断为符合。
1. 先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件31、32、33、34的补充信息。
	- 同意按照附件20增加补充信息，补充关于附件30，42，31、32、33、34的补充信息，且判断符合附件30、42，不全符合符合31、32、33、34。
1. 在业务背景下，基于既成事实博弈。具体可以参考default标准模型。
	- 不能按照附件20增加补充信息。
	- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。
1. 参考booting标准模型。
	- 还在筹备因此无法补充信息的。

如果有其它可行方案请发到<huangyg@mars22.com>，我将按照附件21核实。

附件21 实施效果的核实

1. 公布完整、连续、不可删改的执行记录，证实方案的效果。
	- 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。
1. 已发布开放的要约，只有取得该效果才有收益。
~~~

其它draft相关内容：  
~~~
### 附件30 有效的内部监管
定义：已有基础制度和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。

### 附件42 资源不足
定义：需要以未来的收入换取资源，而且需要与同行争夺。
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。

### 附件 43 能力和贡献持续变化
定义：核心人员凭借职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。
反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。
~~~

继续把 draft 202404151600.md 中的合同整理为term、termset的metadata，然后commit生成正式metadata，再生成view：  
- 附件33：PSMD升级规则中的制定规则：600f6f80
- 附件34：PSMD升级规则中的分支隔离规则：12119600  
- 附件30：有效的内部监管
- 附件42 资源不足
- 附件 43 能力和贡献持续变化
- 入门目录202404151600主体（第2条）
- 入门目录202404151600全文：
	- 附件20的term.2，不需要向外映射。可以沿用内部interface。
	- 附件32的term.1也是
	- 附件33的term.1

commit产生的这批id如下：  
~~~
入门目录202404151600-2-1 5b4e0597
入门目录202404151600-2-2 52edbf25
入门目录202404151600-2-3 7288c99c
入门目录202404151600-2-4 dd1bc41b
入门目录202404151600-1 cc0fba2f
入门目录202404151600-3 4b12ac08
有效的内部监管 91ff9448
资源不足 cb4ab0e9
能力和贡献持续变化 5ab2b2ba
入门目录202404151600-2 e6976035
入门目录202404151600 9d12877c
~~~

加上已经完成的：  
- 附件20：符合某条件：dbe32f79
- 附件21：实施效果的核实：d0111eb4  
- 附件31：PSMD升级规则中的PS标准：6d206b54  
- 附件32：PSMD升级规则中的保密规则：9e6bc34f  

执行过程：  

~~~

D:\huangyg\git\PSMD\src>node term commit
入门目录202404151600-2-1 5b4e0597
入门目录202404151600-2-2 52edbf25
入门目录202404151600-2-3 7288c99c
入门目录202404151600-2-4 dd1bc41b
入门目录202404151600-1 cc0fba2f
入门目录202404151600-3 4b12ac08
有效的内部监管 91ff9448
资源不足 cb4ab0e9
能力和贡献持续变化 5ab2b2ba
入门目录202404151600-2 e6976035
入门目录202404151600 9d12877c
../data/term.5b4e0597.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.52edbf25.yaml文件已更新。../data/term.2.yaml可以删除。
../data/term.7288c99c.yaml文件已更新。../data/term.3.yaml可以删除。
../data/term.dd1bc41b.yaml文件已更新。../data/term.4.yaml可以删除。
../data/term.cc0fba2f.yaml文件已更新。../data/term.5.yaml可以删除。
../data/term.4b12ac08.yaml文件已更新。../data/term.6.yaml可以删除。
../data/term.91ff9448.yaml文件已更新。../data/term.7.yaml可以删除。
../data/term.cb4ab0e9.yaml文件已更新。../data/term.8.yaml可以删除。
../data/term.5ab2b2ba.yaml文件已更新。../data/term.9.yaml可以删除。
path replace:term.1.yaml term.5b4e0597.yaml
path replace:term.2.yaml term.52edbf25.yaml
path replace:term.3.yaml term.7288c99c.yaml
path replace:term.4.yaml term.dd1bc41b.yaml
../data/termset.e6976035.yaml文件已更新。../data/termset.1.yaml可以删除。
path replace:term.5.yaml term.cc0fba2f.yaml
path replace:termset.1.yaml termset.e6976035.yaml
path replace:term.6.yaml term.4b12ac08.yaml
旧文件:../data/termset.2.yaml中itemset:3的id:dbe32f79未能替换，请人工检查。
旧文件:../data/termset.2.yaml中itemset:4的id:d0111eb4未能替换，请人工检查。
path replace:termset.7.yaml termset.91ff9448.yaml
旧文件:../data/termset.2.yaml中itemset:6的id:6d206b54未能替换，请人工检查。
旧文件:../data/termset.2.yaml中itemset:7的id:9e6bc34f未能替换，请人工检查。
旧文件:../data/termset.2.yaml中itemset:8的id:600f6f80未能替换，请人工检查。
旧文件:../data/termset.2.yaml中itemset:9的id:12119600未能替换，请人工检查。
path replace:termset.8.yaml termset.cb4ab0e9.yaml
path replace:termset.9.yaml termset.5ab2b2ba.yaml
../data/termset.9d12877c.yaml文件已更新。../data/termset.2.yaml可以删除。

~~~

执行 node term termset 9d12877c 产生的文件termset.9d12877c.md内容如下（作为txt可以，作为markdown的话序号乱了）：  

···

1. 针对不同条件给出建议如下：
2.1. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且均判断为符合。
建议：使用自定义的规章解决资源和重构问题，具体可以参考1609、chain等标准模型。
2.2. 条件：同意按照附件20增加补充信息，补充关于附件30，附件42，附件31、附件32、附件33、附件34的补充信息，且判断符合附件附件30，附件42，不全符合符合附件31、附件32、附件33、附件34。
建议：先参考default+1406标准模型开展业务，逐步完善规章，取得进步后重新增加关于附件附件31、附件32、附件33、附件34的补充信息。
2.3. 条件：
- 不能按照附件20增加补充信息。
- 同意按照附件20增加补充信息，补充关于附件30的补充信息，且判断为不符合。
建议：在业务背景下，基于既成事实博弈。具体可以参考default标准模型。
2.4. 条件：还在筹备因此无法补充信息的。
建议：参考booting标准模型。
3. 如果有其它可行方案请发到<huangyg@mars22.com>，我将按照附件21核实。
附件20.1. 对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
附件20.2.1. 涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
附件20.2.2. 涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
附件20.2.3. 涉事各方签署 附件21，承诺遵守该条件，将生效、执行的记录作为补充信息。
附件21.1. 公布完整、连续、不可删改的执行记录，证实方案的效果。
  - 如果以前的执行记录不符合以上条件，可以在愿意按标准公布记录的独立第三方验证。
附件21.2. 已发布开放的要约，只有取得该效果才有收益。
附件30. 定义：已有基础制度和人员，能保证书面规章的违约成本高于收益。规定监管人员以外的内部成员、外部合作方不需要额外为此耗费资源。
附件31.1. 规章条款的上下级关系，根据制定、修订权定义。
附件31.2. 人员的上下级关系，根据任免权定义。
附件31.3. 严格执行制定、修订程序。上级规章条款未生效（或被实质架空）时，不提交、不讨论下级规章条款。
附件31.4. 严格执行任免程序。上级人员未赴任（或被实质架空）时，不提名、不讨论下级人员。
附件32.1. 所有人员的所有工作结果默认为公开，对外发布。
附件32.2. 人按PS标准上溯得出顶级规章，从顶级规章到保密制度之间的上下级规章链条（包括保密制度），这组规章的密级均为公开，这组规章的工作记录的密级由该规章自行规定，保密制度不得改变。
附件32.3. 一份文档所有用途使用相同方式取得。如果因不可抗力需要改变方式，应规定不可抗力的判定程序，确保内容相同。
附件32.4. 如果在密级规定范围内的人员都没有能力完成任务，制定保密制度相应条款的人员承担主要责任，赔偿损失。
附件33.1. 制定规章要明确预期效果。
附件33.2. 接到质询时必须提供依据，依据必须是 外部法律 or 案例统计 两种方式之一。
附件33.3. 如果是旧版本修订，制定者可以提出适用范围。只能向该适用范围内使用旧版规章的共同体发送修订通知。
附件33.4. 分支隔离规则适用于制定规章。一个分支的共同体内制定规章时，所提供依据如果使用其它分支的案例，将自动增加切换规章的动议作为前提。
附件34.1. 对相同事项的不同处理方法，视为同一规章的不同分支版本。对该事项未做任何规定，也视为其中一个分支版本。
附件34.2. 实际通过生效、使用某分支版本的规章，即为支持该分支版本，反对其它分支版本。
附件34.3. 规章使用过程遇到问题可以提出修订委托，如发往反对者将自动转为帮助切换规章的委托（切换到对方实际使用的分支版本）。如果是付费委托，受托者只需回答实际收到的问题。
附件34.4. 查询资料时，未做任何规定分支可以列出所有分支的资料，其它分支只列出本分支的资料。
附件42. 定义：需要以未来的收入换取资源，而且需要与同行争夺。
反向的情况，是创始时能一次筹集到足够的资源，可见未来的收入和积累都超过支出。或者需要以未来的收入换取资源，但是不需要竞争即可获得充足资源。
附件43. 定义：核心人员凭借职权高估自己的贡献、低估非核心成员的贡献，这样做的综合效果更符合他们的利益。
反向的情况，核心人员准确估算包括自己在内的成员贡献，这样做的综合效果更符合他们的利益。

···

下一步：  
- 把附件43加进去。
- termid可能有二义性：字符串和数字。比如：2e758794 被理解为Infinity：  

~~~
Error: ENOENT: no such file or directory, open 'D:\huangyg\git\PSMD\data\term.Infinity.yaml'
    at Object.readFileSync (node:fs:455:20)
    at maketermtext (D:\huangyg\git\PSMD\src\term.js:239:32)
    at maketermsettext (D:\huangyg\git\PSMD\src\term.js:202:28)
    at maketermsetview (D:\huangyg\git\PSMD\src\term.js:183:23)
    at Object.<anonymous> (D:\huangyg\git\PSMD\src\term.js:42:9)
~~~

- 附件34 termset.12119600.yaml的readme字段出现变形。开头的|被改为>，每行之间、-号和条文之间都被加了回车
- 各级termsetinterface中的id （globalid）要避开item.map中的id （localid），以免在替换时产生二义性。



[top](#top) | [index](#index)
<a id="20240420140000"></a>
## 14:00~14:29

学习国密算法  

- 在 202404151400.md基础上，增加 js.simple/sm.crypt/local.3.html 的功能。但是网页中执行中断。
- 直接在nodejs下命令行验证：创建密钥对、加密、解密、签名、验证，都正常。

~~~

D:\huangyg\git\js.sample\sm-crypto>node test
public key:04d5e72263e80e3715411c04f3cf586c2e24673c6611f2ef7bbb1e33f19a12b1f45fe694ae314001fcc606148cb9b095d0ae0f12a8e58ef17ba64cfddc2e66e561
private key:b28bdee8e2cccf2978a9eabffd0ffeb33550f5c2aff5869bbe106f54c0cdd39d
verify public key:true
plain text:

- task:PSMD  [整理合同和COM metadata](../../../draft/2024/04/20240420074500.md)
- task:PSMD  [COM metsdata → COM view](../../../draft/2024/04/20240420093000.md)
- task:js  [学习国密算法](../../../draft/2024/04/20240420140000.md)
- task:ego  [子任务时间汇总的伪码](../../../draft/2024/04/20240420143000.md)
- task:PSMD  [设计error、log、env、knowledge等新的数据结构，以及与termset、com、task关联。](../../../draft/2024/04/20240420160000.md)
encrypt text:
fe2d9872a4cede8bbf9e2b1f2aff19ab9011fe54de3fe8f48246fae88bc0c0658afa696f8094cefb15549028db4fb24a15232e65c5707794edb7aa177a695a6fed8312db3e64abb8eb2a128e52e43c774696246fa5ef389d8894e76ff3056a273ef81f4cb7cbe4b2c52ba484075b1d904280d53826e636f2de9259d294e9b515da929a82a8f4f769349bb5084d08a8d61f6a353050f1c3f74e4717fffebeae1fa305cd5b7bec375b8bea0d4bf771a445db669440031d3416b2de4828fea45c6bf8c164628f0796d1b7f2664a57a707c2bc932a69f545c60794a2fb105dba331dc1fb6e3121b1486ea5249a75ad30a4f28ac1d418c17519d2919538df0ef7853e437374bc317e92000d442529db7a91e255b7af5f2715cf0af21a3868dca7e4733f1ee1af96931dacbb1cded09fb2b0a5b505ef3f50e55558bd6f626d074d6ed6e68096c1eb7cae69aed65e8f68f726ccb7a81df91dd208bd65c7088b9212acb8f46f6898a611b64757d1a04db9fba3b62541b863e56ea058e769925af921c15cb80440dfb72af8977eb0a029471c15d3f9727f8ac6475f3780dc563f5f04fc91afb7a3a5f6ff65d6efc90826c8c88716db31a1946f79b94cbfd11d3567aebcc879b70b3ebd8c01274c16d82b0b67544cfffe152113c59ae042433e58ef8bccb06d5c63d059190deded3a7f6ec83d52a04fb66e12228bba4df84b44957f0a1ce888d237d70270bdb8eb4c7ab7042a606b36b2151ec5487773c19a97f54f2729d3811a3c7a700fa8d564a69d6a7cefc1d34c724536ad91e9f3d38c13a46eef72302cac78f5
decrypt text:

- task:PSMD  [整理合同和COM metadata](../../../draft/2024/04/20240420074500.md)
- task:PSMD  [COM metsdata → COM view](../../../draft/2024/04/20240420093000.md)
- task:js  [学习国密算法](../../../draft/2024/04/20240420140000.md)
- task:ego  [子任务时间汇总的伪码](../../../draft/2024/04/20240420143000.md)
- task:PSMD  [设计error、log、env、knowledge等新的数据结构，以及与termset、com、task关联。](../../../draft/2024/04/20240420160000.md)
signed hex:de92ea6ec507b39015f492c43f52a5418dd107da9722f36ed60f48c2dcd9a4587139478ba620b8ebc3e8aa4a059929caba0c643c77820fef8e68348c91ee8953
verify the sig: true
~~~

参考资料：  
- https://github.com/antherd/sm-crypto
- https://www.cnblogs.com/goodAndyxublog/p/15654531.html
- https://cscoder.cn/docs/base/sm_crypto/sm-crypto-js.html

下一步：  
- FileSaver的SaveAs()为什么需要先alert一下才能用。
- sm2.doEncrypt()出错。阅读参考资料找出原因。
- 学习sm3、sm4等算法接口。



[top](#top) | [index](#index)
<a id="20240420143000"></a>
## 14:30~14:59

子任务时间汇总

- 直接修改了task.js的maketaskview()，以后可以在 node task view的过程中统计时间。
- 增加了gettreetime()，递归汇总各任务及子任务消耗的时间。
- 修改了一些bug。

执行结果：  
~~~

D:\huangyg\git\ego\task>node task view
can't find task metadata:       infra
end node:1cJ9sN node time:840
end node:16cedf80 node time:30
tree node:6a8da52e node time:0 child time:30
end node:b7bd55c1 node time:0
end node:e39da5b6 node time:0
tree node:01d9c808 node time:1355 child time:0
tasktree totaltime:2225

alltask.yaml文件已被更新。
task.1cJ9sN.md文件已被更新。
task.16cedf80.md文件已被更新。
task.6a8da52e.md文件已被更新。
task.01d9c808.md文件已被更新。
task.b7bd55c1.md文件已被更新。
task.e39da5b6.md文件已被更新。

~~~


[top](#top) | [index](#index)
<a id="20240420160000"></a>
##  16:00~16:59

PSMD 设计error、log、env、knowledge等新的数据结构，思考与termset、com、task的关联。

- 在上午9:30实现的要约 9d12877c termset中，其实附件42、43就是error，附件30、31、32、33、34是针对五种error的解决方案。  
- 如果有error、termsert之间的关系，应该可以自动生成这份要约。或者生成一份情况核实表，分别针对合适结果产生建议。
	- 如果写入term metadata，恐怕表达能力有限。

### 数据结构

#### env

~~~
name:
id:
term:
  - id:
  - id:
termset:
  - id:
  - id:
error:
  - id
  - id
~~~
- term字段：已经生效的term。如果单独有重要效果的话就列出。
- termset字段：已经生效的termset。如果有效果的term组合被分在termset的不同章节下，如何快速匹配？
- error：目前未解决的error

#### error

- error
~~~
name:
id:
text: |
readme: |
bind:
  - type: term、termset、COM、deploy、COD
     id:
~~~

#### log
~~~
- id:
- time:
- entityid:
- termsetid:
- termid:
- text: |
~~~
- entity是指cod的interface中id。
- termid是指termset中的sortid/sortid/.../sortid
- 某entity根据某term的行为。

#### knowldege / effect

~~~
name:
id:
envid:
term:
  - id:
termset:
  - id:
  - id
error:
  - id:
    percent:
    text:
readme: |
~~~
在env下，term和termset生效就有多大可能性消除error。

下一步：  
- 编辑下列error metadata：
	- 未经统一程序兼任职务
	- 职务行为未提交log
	- 未经表决而生效的职务行为
	- 规章超负荷
	- 合规工作超负荷
- 编辑下列env metadata：
- 整理1406 termset，根据knowledge拆分
- 编辑以上error、env相关的knowledge
