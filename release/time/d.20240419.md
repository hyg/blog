# 20240419

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
- 07:45	[PSMD 一合同附件的termset](#20240419074500)  
- 09:30	[根据task metadata 中的path字段追溯到各级子项目，在alltask metadata中增加树形结构。](#20240419093000)  
- 14:00	[把termset的metada整理生成id和文件名](#20240419140000)  
- 14:30	[把termset的metada整理生成id和文件名](#20240419143000)  
- 16:00	[设计error、term、termset、deploy、com的关系。](#20240419160000)  

---


[top](#top) | [index](#index)
<a id="20240419074500"></a>
## 7:45~8:44

PSMD 一合同附件的termset

- 根据[2024.04150930.md](2024.04150930.md)中附件20，编写termset metadata。
	- readme范例中，sortid字段前增加“- ”，表示数组。
	- 要注意去掉readme中范例的注释。
	- text要用| 标记，结尾自动换行。
- 在term.js中增加termset递归功能。

term.2.yaml
~~~
name: 符合某条件1
id: 2
text: |
  涉事各方全体同意，推举一名或多名保证人：
    - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
    - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
~~~

term.3.yaml
~~~
name: 符合某条件2
id: 3
text: |
  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
~~~

term.4.yaml
~~~
name: 符合某条件3
id: 4
interface:
  term:
    1: 容器规则
text: |
  涉事各方签署 <term.1>，承诺遵守该条件，将生效、执行的记录作为补充信息。
~~~

term.5.yaml
~~~
name: 符合某条件开头
id: 5
interface:
  term:
    1: 下一条
text: |
  对自述难以核实的情况下，可以按照<term.1>方式之一增加补充信息：
~~~

termset.2.yaml
~~~
name: 符合某条件的条款
id: 2
level: 1
interface:
  term:
    1: 容器规则
item:
  - sortid: 1
    type: term
    id: 2
    path: term.2.yaml
  - sortid: 2
    type: term
    id: 3
    path: term.3.yaml
  - sortid: 3
    type: term
    id: 4
    map:
      term:
        1: 1
    path: term.4.yaml
readme: |
  - upgradeby应该分内部、外部两种情况定义。
effect: |
~~~

termset.3.yaml
~~~
name: 符合某条件
id: 3
level: 2
interface:
  term:
    1: 附件21.容器规则
    2: 第2条
item:
  - sortid: 1
    type: term
    id: 5
    map:
      term:
        1: 2
    path: term.5.yaml
  - sortid: 2
    type: termset
    id: 2
    map:
      term:
        1: 1
    path:  termset.2.yaml
readme: |
effect: |
~~~

自动生成条款如下：
~~~
D:\huangyg\git\PSMD\src>node term termset 3
<term.1> -> <term.2>
对自述难以核实的情况下，可以按照<term.2>方式之一增加补充信息：

<term.1> -> <term.1>
涉事各方签署 <term.1>，承诺遵守该条件，将生效、执行的记录作为补充信息。

<term.1> -> <term.1>
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 <term.1>，承诺遵守该条件，将生效、执行的记录作为补充信息。

<term.1> -> 附件21.容器规则
1.  对自述难以核实的情况下，可以按照<term.2>方式之一增加补充信息：
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

<term.2> -> 第2条
1.  对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

termset text:
1.  对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。
~~~

下一步：考虑条款合并的需求。例如上面范例中，怎么实现1. 1.1.  1.2. 1.3.，而不是1. 2.1. ...。


[top](#top) | [index](#index)
<a id="20240419093000"></a>
##  9:30~10:59

ego 根据task metadata 中的path字段追溯到各级子项目，在alltask metadata中增加树形结构。

- 为了表达各项目子任务，task metadata文件前缀从t.改为task.
- 手工编辑learn.js PSMD.modeling PSMD.deploy三个子项目的metadata。
- 根据各任务metadata中的path字段，进行递归查找，所有task并列写入tasklist，按parent id建立树形结构写入tasktree。
	- log写入tasklist。

下一步：
	- task view目前都写在task.js所在文件夹。实际使用一段时间在决定是否要写回task metada文件所在文件夹，要考虑独立项目的子任务。这样的话，要遭alltask.tasklist下面记录一下metadata所在位置。
	- stat统计时间先写入tasklist，再在tasktree归并。



[top](#top) | [index](#index)
<a id="20240419140000"></a>
## 14:00~14:29

PSMD：把termset的metada整理生成id和文件名

实现 term.js 中的 commit()
~~~
D:\huangyg\git\PSMD\src>node term commit
符合某条件1 33523fe1
符合某条件2 a1c197a9
符合某条件3 259076a4
符合某条件开头 bb8005b9
调整分配主比例 01e1c775
符合某条件的条款 949e69e3
符合某条件 dbe32f79
../data/term.33523fe1.yaml文件已更新。../data/term.2.yaml可以删除。
../data/term.a1c197a9.yaml文件已更新。../data/term.3.yaml可以删除。
../data/term.259076a4.yaml文件已更新。../data/term.4.yaml可以删除。
../data/term.bb8005b9.yaml文件已更新。../data/term.5.yaml可以删除。
../data/termset.01e1c775.yaml文件已更新。../data/termset.1.yaml可以删除。
../data/termset.949e69e3.yaml文件已更新。../data/termset.2.yaml可以删除。
../data/termset.dbe32f79.yaml文件已更新。../data/termset.3.yaml可以删除。
~~~

使用新id运行node term termset：
~~~
D:\huangyg\git\PSMD\src>node term termset dbe32f79
<term.1> -> <term.2>
对自述难以核实的情况下，可以按照<term.2>方式之一增加补充信息：

<term.1> -> <term.1>
涉事各方签署 <term.1>，承诺遵守该条件，将生效、执行的记录作为补充信息。

<term.1> -> <term.1>
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 <term.1>，承诺遵守该条件，将生效、执行的记录作为补充信息。

<term.1> -> 附件21.容器规则
1.  对自述难以核实的情况下，可以按照<term.2>方式之一增加补充信息：
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

<term.2> -> 第2条
1.  对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。

termset text:
1.  对自述难以核实的情况下，可以按照第2条方式之一增加补充信息：
2.1.  涉事各方全体同意，推举一名或多名保证人：
  - 保证人在其它事项中符合该条件，并按照本附件提供补充信息。
  - 由保证人调查涉事各方是否符合该条件，将调查记录作为补充信息。
2.2.  涉事各方分别自述，交叉核实。将所有记录合并作为补充信息。
2.3.  涉事各方签署 附件21.容器规则，承诺遵守该条件，将生效、执行的记录作为补充信息。
~~~

[top](#top) | [index](#index)
<a id="20240419143000"></a>
## 14:30~14:59

PSMD：继续14:00的任务。


[top](#top) | [index](#index)
<a id="20240419160000"></a>
##  16:00~16:59

PSMD 设计error、term、termset、deploy、com的关系。

- 增加记录log，核实log可以：
	- term、termset被遵守、违反：即用log定义term、termset的遵守和违反
	- error产生、未产生：即用log定义error
- 某种环境env是指log中出现以下状况的组合：
	- 某些error未发现
	- 某些erro发现
	- 某些term、termset已生效
	- 某些term、termset未生效
- 遵守term、termset的效果是：在某种env下，可以消除某些error。
- 违反term、termset的效果是：在某种env下，可以产生某些error。
	- 这不是确定的，因为存在未知的、有相似效果的替代方案。
	- 排查其它term、termset后可以推测。
- 某些error的效果是：在某种环境下，即使某些term、termset被遵守也会失去效果。最终这些term、termset会被普遍违反。

根据log提炼term、termset与error的关系：  
- 产生knowledge（env-termset-error之间映射关系）metadata

根据knowledge metadata：  
- 根据COM推断error  
	- 产生COM修订动议
- 根据deploy推选error  
	- 产生deploy修订动议
- 根据log核实error  
	- 产生消除error的动议
- 对反例提出核实、整理方案供第三方验证的动议  

主体可以：  
- 发布log、env、knowledge
- 标注感兴趣的env、term、termset、error，由工具自动筛选log、knowledge
- 感兴趣的主体及其env
- 以env的差距定义距离，参考dht编制索引表。
