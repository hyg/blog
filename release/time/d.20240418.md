# 20240418

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
- 07:45	[task metadata + draft metadata -> task view](#20240418074500)
- 09:30	[termset metadata -> termset view](#20240418093000)
- 14:00	[ego整体架构汇总](#20240418140000)
- 14:30	[blog规划](#20240418143000)
- 16:00	[task metada + draft metadata -> task stat](#20240418160000)

---


[top](#top) | [index](#index)
<a id="20240418074500"></a>
## 7:45~8:44

ego：task metadata + draft metadata -> task view

- 重新调整task.js的参数
~~~
node task           : today draft to stat
node task view       : draft metadata to task view
node task all        : task metadata to alltask metadata
node task 2024       : draft to year stat
node task 20240416   : draft to day stat
node task 1          : diff date draft to stat
node task 20240101 20240401   : period draft to stat
~~~

完成：
task metadata + draft metadata -> alltask metadata

下一步：
alltask metadata -> task view



[top](#top) | [index](#index)
<a id="20240418093000"></a>
##  9:30~10:59

PSMD termset metadata -> termset view

修改了数据结构中的interface字段：
~~~
interface:
  entity:
    id: name
  asset:
    id: name
  term:  //  引用其它条款，在termset、COM中根据联合使用情况绑定。
    id: name
  event:
    id: name
~~~
map字段
~~~
map:    // interface 局部-全局映射表
            entity:
                localid: globalid
            asset:
                localid: globalid
            term:  //  引用其它条款，在termset、COM中根据联合使用情况绑定。
                localid: globalid
            event:
                localid: globalid
~~~
以方便代码实现。目前还没有发现缺陷。

完成 term.js中的函数：
- maketermsetview
- maketermsettext
- maketermtext
可以生成termset view的正文。

D:\huangyg\git\PSMD\src>node term termset 1
<entity.1> -> <entity.1>
由<entity.1>书面提交即生效。

<asset.1> -> <asset.1>
<asset.1>=20，<asset.1>%=20%。

<entity.1> -> <entity.2>
由<entity.2>表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

<entity.1> -> deployer
1.  由deployer书面提交即生效。
2.  <asset.1>=20，<asset.1>%=20%。
3.  由<entity.2>表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

<entity.2> -> director
1.  由deployer书面提交即生效。
2.  <asset.1>=20，<asset.1>%=20%。
3.  由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

<asset.1> -> p
1.  由deployer书面提交即生效。
2.  p=20，p%=20%。
3.  由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

termset text:
1.  由deployer书面提交即生效。
2.  p=20，p%=20%。
3.  由director表决按一人一票表决，超过80%出席会议有效，赞成票超过超过三分之二为通过。

下一步：
- 把termset的metada整理生成id和文件名。
- 测试一下多层嵌套termset，目前范例只有一层。
- 加上辅助信息产生正式的view，写入文件。
- 顺便完成term view。主题函数已经在实现termset时做好了。


[top](#top) | [index](#index)
<a id="20240418140000"></a>
## 14:00 ~ 14:30

ego整体架构汇总

### 整体架构：

~~~
\raw 库处理饮食、作息
\ego 库调度资源，主要是时间、内部token和各外部记账单位。管理无明确项目归属的公用资源。为各独立项目之间协作提供公用基础设施。
	\log	日志数据
	\data	元数据 metsadata
	\src	 源代码
	\view	可阅读的文档、报表
\draft 库存放原始手稿，包括ego和独立项目。
\blog 库对外发布信息，主要是ego的，也包括从独立项目的实践中提炼的通用经验。
有对外接口的项目开设专门库，独立调度资源、发布信息。各独立库的基础信息存放在\ego\data，以便互相协作。
~~~

### 当前项目

- \raw\raw.js
	- 暂时不变，将来也按独立项目分为log、data、src、view文件夹。
	- 重点是数据结构和代码持续升级，而数据保持互通的机制。
- \PSMD\src\term.js
	- 保留在PSMD项目下，作为独立项目的范例。
- \ego\task\task.js
	- 整理为 data、src、view文件夹。
	- 重点是各项目之间资源调度的机制。
- \blog\release\time.js
	- 整理到ego下。

### 项目间协作

- \ego\src\config.env.js  : 某个软硬件环境下的路径、文件夹名称等信息。
- \ego\src\util.js:  公用代码库。
- \ego\log: 公用资源和项目间资源调度记录。
- \ego\data\   : 各项目metadata。

下一步：考虑成熟后移动代码，实践检验。



[top](#top) | [index](#index)
<a id="20240418143000"></a>
## 14:30 ~ 15:00

PSMD lib规划

- blog
	- 针对新委托者：概念介绍、典型场景的快速入门。
	- 针对部署者：离线、独立部署将遇到的问题和当前经验。
	- 针对建模者：近期前沿问题和实践进展。
- lib
	- error、term、termset、COM、deploy等metadata  不定期自动爬取，留下有价值的。不一定使用。
- index.yaml、index.js   索引表:
	- PSMD受托者：包括自己
		- 使用的error、term、termset、COM、deploy等metadata。用于根据某metadata匹配公用者blog url。
- 自动委托的PSMD标准合同
- 自动受托的PSMD标准合同
- 专门签署生效的PSMD标准合同
- 标准合同下的委托需求：专门签署，或者沿着自动委托、受托链产生效力。

可以从view开始，metadata有些难度。



[top](#top) | [index](#index)
<a id="20240418160000"></a>
## 16:00 ~ 17:00

ego：task metada + draft metadata -> task stat

- 实现四种参数的subject时间统计。

D:\huangyg\git\ego\task>node task 2024
draft to stat:20240101~20250101
ego spent 720 minutes.
PSMD spent 900 minutes.
infra spent 30 minutes.

D:\huangyg\git\ego\task>node task
draft to stat:20240418~20240419
ego spent 150 minutes.
PSMD spent 120 minutes.

D:\huangyg\git\ego\task>node task 20240414
draft to stat:20240414~20240415
PSMD spent 255 minutes.
ego spent 90 minutes.

D:\huangyg\git\ego\task>node task -2
draft to stat:20240416~20240417
ego spent 270 minutes.
PSMD spent 90 minutes.

D:\huangyg\git\ego\task>node task 20240416 20240418
draft to stat:20240416~20240418
ego spent 330 minutes.
PSMD spent 375 minutes.

- 完成 alltask metadata -> task view，生成了简单的markdown。


下一步：考虑子项目的情况。应该按树形结构逐级汇总。alltask metadata这时候可以用上，不要漏了subject。
