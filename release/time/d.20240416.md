# 20240416

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
- 07:45	[ego 任务管理的手写范例，metadata数据结构设计](#20240416074500)
- 09:30	[PSMD 条款设计流程及手写范例，metadata to view 代码](#20240416093000)
- 14:00	[draft自动生成日小结](#20240416140000)
- 14:30	[ego entry页面显示markdown](#20240416143000)
- 16:00	[ego draft to metadata 代码](#20240416160000)

---


[top](#top) | [index](#index)
<a id="20240416074500"></a>
## 7:45~8:44

ego 任务管理

### 流程

1. 手写draft的时间片md文件，以文字记载task metadata的变更提要。
1. 手写更新task metadata文件，一级项目在ego，二级以下在一级项目内分配。
1. 自动统计、生成图表，辅助后续分配，手工或自动调整metadata。
1. 自动合并成当前的全局metadata文件。
1. 自动根据全局metadata文件产生：
	- 各项目简介markdown、html文件；
	- GTD工具的可选菜单。

### 架构设计

1. 对外显示各项目简介markdown、html文件，并不断更新，它们的结构和内容是相对稳定的。
1. 内部流程和文件是不断升级变化的：
	- 文件：draft md→task metadata→全局metadata、ego资源分配metadata
	- 代码：
		- task metadata → ego资源分配metadata
		- task metadata → 统计图表
		- task metadata → 全局metadata
		- 全局metadata → 各项目简介markdown、html文件、GTD工具的可选菜单


### metadata数据结构

- task metadata
~~~
name:
id:
parent id:
start:
end:
dependencies:
	- id:
	- id:
path: 
	- name:
	  path:
	  readme: |
readme: |
step:
	- time: 
	   name:
	   status:
	   readme: |
log:
	- time:
	   text: |
~~~

- 全局metadata
~~~
time:
task:
	id:
	  name: 
	  id:
	  ...
	  subtask:
	  	- name:
	  	  id:
~~~

### metadata范例

1. 在ego的git库中创建task文件夹。
1. 创建几个task metadata文件。
1. 创建task.js，从task metadata生成全局metadata。

下一步：追溯到一级任务的path文件夹。
参考：
	- https://github.com/frappe/gantt 的甘特图json数据结构


[top](#top) | [index](#index)
<a id="20240416093000"></a>
##  9:30~10:59

PSMD条款库

### 流程及架构设计

1. 根据实践和讨论，编写偏差error metadata和条款设计修订tansk metada，由代码生成error markdown、html文件、allerror metadata文件。
1. 在ego项目下，根据task统计界面分配时间到具体子任务。
1. 在PSMD的设计、修订条款子任务中，通过PSMD项目的统计界面了解相关信息，然后撰写手稿存放在draft库中，并在当天的draft metadata文件中记录手稿的任务归属。
1. 在条款设计完成时，手工编写PSMD项目的term metadata。由代码自动生成条款的markdown、html文件。
1. 在使用时，手工编写条款集合termset的metadata，由代码生成termset的markdown、html文件。
1. 建模时，手工编写共同体模型的COM metadata文件，由代码生成markdown、html文件。
1. 部署时手工编写输入条件的deploy metadata文件（列明人员、资源等条件），由代码生成deploy markdown、html文件，以及全部表决通过后的COD metadata。
1. 紧急部署时，手工编写部署方案的COD metadata文件。
1. 由代码根据COD metadata生成markdown、html。
1. term的placeholder有entity、asset、term三类（以后可以扩充），termset、COM解决term之间的关联关系，deploy解决entity、asset的关联关系。

- 内部可见：
	- error metadata
	- allerror metadata
	- draft手稿
	- draft metadata
	- error metadata
	- term metadata
	- termset metadata
	- allterm metadata
	- COM metadata
	- deploy metadata
	- COD metadata
- 对外可见：
	- error markdown、html
	- term markdown、html
	- termset markdown、html
	- COM markdown、html
	- deploy markdown、html
	- COD markdown、html

### 数据结构

- error metadata
~~~
name:
id:
text:
bind:
	- type: term、termset、COD
	- id:
log: |
~~~
- allerror metadata
~~~
time:
error:
	errorid:
		//error metadata文件全部内容
		effect: //解决方案，对应term、termset、COM的effect字段
			- type: term、termset、COM
			- id:
	errorid:
~~~
- draft metadata
~~~
date: 20240415
time:
  - begin: 20240415074500
    amount: 60
    unit: minute
    type: work
    subject: ego
	subjecttype: task、error、term、termset、COM、COD
    output: draft/2024/04/2024041140745.md
~~~
- term metadata
~~~
name:
id:
interface:
	entity:
		- name:
		id:
		readme: |
		- name:
		id:
		readme: |
	asset:
		- name:
		id:
		readme: |
	term:	//	引用其它条款，在termset、COM中根据联合使用情况绑定。
		- name:
		id:
		readme: |
	event:
		- name:
		  id:
		  readme: |
text:
readme:
effect:
	error hashid:
	error hashid:
log: |
~~~
- termset metadata
~~~
name:
id:
level:
interface:
	entity:
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
	asset:
		- name:
		id:
		globalid: \\ termsetid\...\termid\assetid
		readme: |
	term:	//	引用其它条款，在termset、COM中根据联合使用情况绑定。
		- name:
		id:
		globalid: \\ termsetid\...\termid\termid
		readme: |
	event:
		- name:
		  id:
		  globalid: 
		  readme: |
item:
	- type:  term\termset
	  id:
	  globalid: \\ termsetid\...\termid\
	  text:
	  upgrade: \\ 修订程序的globalid
	  path:
	  item:
			- id:
			  globalid: \\ termsetid\...\termid\
			  text:
			  upgrade: \\ 修订程序的globalid
	- id:
readme: |
log: |
effect:
	error hashid:
	error hashid:
~~~
- allterm metadata
~~~
time:
term:
	hash:
		//term metadata全部内容
		error:	//对应error metadata的bind字段
			-id:
			-id:
termset:
	hash:
		//termset metadata全部内容
		error:	//对应error metadata的bind字段
			-id:
			-id:
~~~
- COM metadata
~~~
name:
id:
level:
interface:
	entity:
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
	asset:
		- name:
		id:
		globalid: \\ termsetid\...\termid\assetid
		readme: |
	term:	//	引用其它条款，COM主要是引用外部法规，比如公司法。
		- name:
		id:
		globalid: \\ termsetid\...\termid\termid
		readme: |
	event:
		- name:
		  id:
		  globalid: 
		  readme: |
item:	\\ 似乎可以直接用一个termset
	- type: term\termset
	  id:
	  upgrade: 
readme: |
log: |
effect:
	error hashid:
	error hashid:
~~~
- deploy metadata
~~~
name:
id:
source:
	type: termset\COM
	id: termsetid or COM id
interface:
	entity:
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
	asset:
		- name:
		id:
		globalid: \\ termsetid\...\termid\assetid
		readme: |
	term:	//	引用其它条款，COM主要是引用外部法规，比如公司法。
		- name:
		id:
		globalid: \\ termsetid\...\termid\termid
		readme: |
	event:
		- name:
		  id:
		  globalid: 
		  readme: |
~~~
- COD metadata
~~~
name:
id:
COMid:
interface:
	entity:
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
		- name:
		id:
		globalid:  \\ termsetid\...\termid\entityid
		readme: |
	asset:
		- name:
		id:
		globalid: \\ termsetid\...\termid\assetid
		readme: |
	term:	//	引用其它条款，COM主要是引用外部法规，比如公司法。
		- name:
		id:
		globalid: \\ termsetid\...\termid\termid
		readme: |
	event:
		- name:
		  id:
		  globalid: 
		  readme: |
readme: |
log: |
~~~

### 自动化代码

- error metadata → error markdown、html、task metadata
- draft metadata → 更新task metadata的time、log字段 （→ alltask metadata），更新
- term metadata → allterm metadata
- allterm metadata → 条款的markdown、html文件，要约、合同
- COM metadata → COM markdown、COM html
- deploy metadata → deploy markdown、deploy html、全部通过后的COD metdadata
- COD metadata → COD markdown、COD html

下一步的工作：
- 根据COM的讨论和COD的执行，产生修订error、term、termset的task metadata，在ego或COD分配资源时使用，从而形成闭环。


[top](#top) | [index](#index)
<a id="20240416140000"></a>
## 14:00~14:29

draft自动生成日小结

- 在draft数据结构中增加了name字段。
- 内容末尾的回车都是紧贴内容，不带空行。是否隔行由后续内容开头决定。
- 路径的左端不带斜杠，右端带。
- 增加了目录。
- 增加了top、index标签。

输出：D:\huangyg\git\blog\release\time.js
- makedaylog(date)

[top](#top) | [index](#index)
<a id="20240416143000"></a>
## 14:30~14:59

ego entry页面显示markdown 

- 使用 https://marked.js.org/ 解析markdown内容
- 网页无法跨域获得日志内容。
    - 普通http get无效，返回status=0.
    - jsonP无效，返回status=0.
    - iframe无效，gitee和codeberg都拒绝iframe
- 网页使用ifram读取codeberg page同域名下的日志文件，被自动下载。

下一步：试试修改iframe属性，获得内容后试试onload()中解析markdown内容。

[top](#top) | [index](#index)
<a id="20240416160000"></a>
##  16:00~16:59

ego draft to metadata 代码

~~~
node task            : task metadata to alltask metadata
node task 2024       : draft to year stat
node task 20240416   : draft to task metadata
node task 1          : diff date draft to task metadata
node task 20240101 20240401   : period draft to stat
~~~

输出：D:\huangyg\git\ego\task\task.js
- 参数分流
- draft to task metadata：function drafttotask(date)

下一步：debug
出现空文件或内容缺实、跳断的情况。
已确认写入的内容是正确的，初步判断是读文件和写文件之间的同步问题。
