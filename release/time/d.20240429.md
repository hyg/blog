# 20240429

小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

| 时间片 | 时长 | 用途 | 手稿 |
| --- | --- | --- | --- |
| 04:00~04:14 | 15 | 休整 |  |
| 04:15~05:14 | 60 | 备餐、运动 |  |
| 05:15~05:59 | 45 | 早餐 |  |
| 06:00~06:44 | 45 | 会议、自习 |  |
| 06:45~07:44 | 60 | 休整 |  |
| 07:45~08:44 | 60 | 静默工作 | [设计新term结构](#20240429074500) |
| 08:45~09:29 | 45 | 休整 |  |
| 09:30~10:59 | 90 | 静默工作 | [日小结时更新season metadata中time.sold字段，汇总waitinglist](#20240429093000) |
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |
| 14:00~14:29 | 30 | 静默工作 | [复习git，基于分支重新设计开发流程。](#20240429140000) |
| 14:30~14:59 | 30 | 静默工作 | [初步熟悉npm、winget发布规则](#20240429143000) |
| 15:00~15:59 | 60 | 休整 |  |
| 16:00~16:59 | 60 | 静默工作 | [测试划分有意识和下意识行为的措辞](#20240429160000) |
| 17:00~18:59 | 120 | 晚餐 |  |
| 19:00~19:59 | 60 | 讨论、整理提交 |  |

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。


---
<a id="index"></a>
- 07:45	[设计新term结构](#20240429074500)  
- 09:30	[日小结时更新season metadata中time.sold字段，汇总waitinglist](#20240429093000)  
- 14:00	[复习git，基于分支重新设计开发流程。](#20240429140000)  
- 14:30	[初步熟悉npm、winget发布规则](#20240429143000)  
- 16:00	[测试划分有意识和下意识行为的措辞](#20240429160000)  

---


[top](#top) | [index](#index)
<a id="20240429074500"></a>
## 7:45~8:44
设计新term结构

 - 整理章节序号的需求
 - 收集开放结构文档的参考资料

### 需求

- 能够表达条款之间的关系：
    - A条款根据B条款修订
    - A角色由B、C、D角色根据C条款任免
    - E条款引用F条款
- 能够根据需要改变序号，比如：
    - 全局排序
```
1. xxx
2. xxx
  2.1. xxx
     2.1.1. xxx
     2.1.2. xxx
  2.2. xxx
...
123. xxx
124. xxx
```
- 划分章节
```
第一章
第一节
1. xxx
2. xxx
第二节
1. xxx
  1.1. xxx
2. xxx
附件一
1. xxx
2. xxx
```
- 在根据不同应用需求改变序号的同时，合同的结构已经运用经验能够稳定、持续地维护。被前提条件隔离得非常稀疏的实践者能够持续地异步交流。
  - 条款之间关系不能因为频繁更换序号而混乱。
  - 序号不能因为条款之间复杂关系而无法灵活变更。

### 开放结构文档

#### odf: Open Document Format

- https://www.oasis-open.org/standard/open-document-format-for-office-applications-opendocument-version-1-3
- https://baike.baidu.com/item/odf/62028913
  - 用zip打包几个文件夹，包含content、meta、setting、style、manifest等xml文件。
  - 
- libreoffice writer保存的odf文件（*.odt）是二进制文件。
- libreoffice writer保存的flat XML odf文件（*.fodt）是纯文本文件。
  - 使用<text:list-item>逐层嵌套，产生递增序号。
  - 序号可选数字、大小写字母、大小写罗马数字（应该不能跳号，不支持中文一二三），在text标签中增加text:style-name="Numbering_20_ABC"、"Numbering_20_IVX"等属性。
  - 
- 

#### OpenXPS:Open XML Paper Specification 

- https://www.ecma-international.org/wp-content/uploads/TC46-XPS-White-Paper.pdf
- 

#### UOF:Unified Office document Format 

- https://baike.baidu.com/item/UOF2.0/3896124
- libreoffice保存为*.uot文件，是纯文本xml文件。
  - 文本在字、字.句、字.句.文本串 <字:文本串 uof:locID="t0109" uof:attrList="标识符">2.1.1. xxx</字:文本串>
  - 编号在字、字.段落、字.段落.段落属性中<字:自动编号信息 uof:locID="t0059" uof:attrList="编号引用 编号级别 重新编号 起始编号" 字:编号引用="Numbering_20_ABC" 字:编号级别="0" 字:重新编号="1" 字:起始编号="1"/>

#### OFD:Open Fixed-layout Documents

- https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=3AF6682D939116B6F5EED53D01A9DB5D
- https://www.cnblogs.com/xxss0903/p/17884466.html
- https://gitee.com/ofdrw/ofdrw
- 

#### tex

- https://ctan.org/
- https://latexstudio.net/shredderyin/tex/tex_tds.html
- 语法
  - https://zhuanlan.zhihu.com/p/52347414
  - https://localghost-blog.github.io/latex-tutorial/zh/docs/how-to-write-a-well-structured-latex-file/
- https://tug.org/texlive/
  - https://www.cnblogs.com/liuliang1999/p/12656706.html
- https://zhuanlan.zhihu.com/p/456055339
- https://zhuanlan.zhihu.com/p/166523064



- term metadata专注于条款之间的关系
- term format metadata专注于序号等排版关旭
  - 默认是txt、html
  - 争取支持ofd、tex


[top](#top) | [index](#index)
<a id="20240429093000"></a>
##  9:30~10:59
日小结时更新season metadata中time.sold字段，汇总waitinglist

### 流程

- 因为已经解决了metadata回写问题，所以不再需要创建todo metadata。
    - 各任务todo从task metadata集中到season metadata
- 做计划时，自动从season metadata中按次序选出候选子任务，填入dayplan模版中，显示填充结果而不回写。
    - 人工调整season metadata，直至每种模版的绑定结果都符合预期。
- 绑定模版时，一次生成draft metadata、time slice draft markdown、day plan view，直接从season metadata中删除对用todo项。
    
- 做日小结时，draft metadata+view -> day blog view
    - 更新season metadata中time.sold字段。
    - 更新task.log字段


- 实现了finish.updateseason(date)，做日小结时更新season metadata中time.sold字段。执行结果：
```
  sold:
    ego: 1609
    PSMD: 2938
    infra: 30
    js: 199
    learn: 162
    xuemen: 60
    raw: 115
```
- 实现了 start.testdayplan: function () ，按当前各任务剩余时间顺序，遍历各任务todo字段，依序把todo项汇总。执行结果：
```
resttotal: 8192
reset:
 PSMD: 4062
learn: 838
ego: 1391
js: 1176
xuemen: 540
raw: 185

resetSOrted:
 - PSMD
- ego
- js
- learn
- xuemen
- raw

waitinglist:
 '30':
  - task: js
    name: async
  - task: xuemen
    name: 数字发票试点
  - task: raw
    name: debug-灰枣按"个"作为单位被算出很高热量。
  - task: js
    name: promise 对象
  - task: raw
    name: 设计DRI metadata
  - task: PSMD
    name: 生成入门目录涉及的所有view，调整措池准备试用
  - task: ego
    name: 整理废弃git库，包括本地和远程。
  - task: js
    name: 学习AMD规范，如果适用就开发范例
  - task: learn
    name: 学习正则表达式RegExp
  - task: js
    name: 在js代码中进行git操作
  - task: raw
    name: debug-diff mode较大天数返回空数据，创建三个R文件。
  - task: PSMD
    name: PSMD委托合同的metadata
  - task: js
    name: 日期格式化
    readme: |
      https://www.cnblogs.com/biehongli/p/9327604.html
      https://juejin.cn/post/7199191689150644279
      https://blog.csdn.net/lwf3115841/article/details/129105206
'60':
  - task: PSMD
    name: 设计条款内容与排版序号分离的新数据结构，编写metadata范例。
  - task: ego
    name: task waitinglist编码
  - task: learn
    name: 设计自己的git开发流程
    readme: >
      - https://ruanyifeng.com/blog/2015/08/git-use-process.html

      - https://www.ruanyifeng.com/blog/2015/12/git-workflow.html

      - https://www.jianshu.com/p/9801b98c1de4

      -
      https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
  - task: ego
    name: task之间结算体系设计
  - task: learn
    name: 把git开发流程编写成批处理文件
  - task: raw
    name: 实现自定义DRI的代码
  - task: PSMD
    name: 基于term metadata修改COM、deploy、COD等metadata
  - task: ego
    name: github + codeberg page 范例
  - task: learn
    name: nosql
  - task: ego
    name: 在season metadata中实现浮动时间表，修改日计划功能。
  - task: js
    name: 向外提供js文件的范例，为代码层级互通做准备
'90':
  - task: PSMD
    name: 基于新的term +termset metadata修改代码commit, generate view
    readme: |
      - item字段里可以自由排练text、term，可以自由安排有title、prefix或没有。
        - title：单独显示，不改变内部序号。通常用做章、附件的开头。
        - prefix：向下改变所有内部序号，用"."依序连接起来。
      - item字段里的map增加title、prefix的映射。
        - 下级title可以在map被替换；
        - 下级prefix也在map被替换。
      - interface字段增加title字段，相当于目录。上级不提换就用本地的。
      - term commit
      - term metadata -> term view
  - task: xuemen
    name: 编写自动分录的代码
  - task: learn
    name: 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
'195':
  - task: xuemen
    name: xuemen COD metadata
  - task: PSMD
    name: term + COM matedata -> deploy metadata -> deploy view
```



[top](#top) | [index](#index)
<a id="20240429140000"></a>
## 14:00~14:29
复习git，基于分支重新设计开发流程

- https://ruanyifeng.com/blog/2015/08/git-use-process.html
- https://www.ruanyifeng.com/blog/2015/12/git-workflow.html
- https://www.jianshu.com/p/9801b98c1de4
- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow


[top](#top) | [index](#index)
<a id="20240429143000"></a>
## 14:30~14:59
初步熟悉npm、winget发布规则

- https://learn.microsoft.com/zh-cn/windows/package-manager/package/
- https://docs.npmjs.com/cli/v10/commands/npm-publish
- https://packager.io/
- https://gitee.com/repo

已经了解，需要时可以发布。


[top](#top) | [index](#index)
<a id="20240429160000"></a>
## 16:00~16:59
测试划分有意识和下意识行为的措辞

- https://www.zhihu.com/question/324451453/answer/3482762994
- https://www.zhihu.com/question/649573115/answer/3482783271
