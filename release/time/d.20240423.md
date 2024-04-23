# 20240423

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
| 07:45~08:44 | 60 | 静默工作 | [设计新的dayplan metadata](#20240423074500) |  
| 08:45~09:29 | 45 | 休整 |  |  
| 09:30~10:59 | 90 | 静默工作 | [term commit中添加error和knowledge](#20240423093000) |  
| 11:00~13:59 | 180 | 备餐、午餐午休 |  |  
| 14:00~14:29 | 30 | 静默工作 | [选定一种gantt工具，能够从数据上和task metadata互通。](#20240423140000) |  
| 14:30~14:59 | 30 | 静默工作 | [国密算法网页端debug](#20240423143000) |  
| 15:00~15:59 | 60 | 休整 |  |  
| 16:00~16:59 | 60 | 静默工作 | [设计season plan的流程和数据结构](#20240423160000) |  
| 17:00~18:59 | 120 | 晚餐 |  |  
| 19:00~19:59 | 60 | 讨论、整理提交 |  |  

模版一采用静默工作方式。  
希望讨论的提纲发到 [huangyg@mars22.com](mailto:huangyg@mars22.com)，通常安排在后面某天的早餐（5:15~5:59）或会议时间（6:00~6:45）。


---
<a id="index"></a>
- 07:45	[设计新的dayplan metadata](#20240423074500)  
- 09:30	[term commit中添加error和knowledge](#20240423093000)  
- 14:00	[选定一种gantt工具，能够从数据上和task metadata互通。](#20240423140000)  
- 14:30	[国密算法网页端debug](#20240423143000)  
- 16:00	[设计season plan的流程和数据结构](#20240423160000)  

---


[top](#top) | [index](#index)
<a id="20240423074500"></a>
## 7:45~8:44

设计新的dayplan metadata

- 以醒来时间为起点排日计划
	- 休整时间片有一定弹性
- 以实际始末时间整理日小结
- 理顺全流程的变量、文件名、文件夹名，方便维护。

### 数据结构

#### plan metadata

- 方案一
	- dayplan增加type字段。设fix和float两种，对应固定时间和跟随起床时间浮动。将来可能增加针对不同时间点浮动。
	- time字段下，fix类dayplan有开始时间和时长，float类只有时长。
- 方案二
	- dayplan的time字段下，每个时间片多种类型：
		- 有固定开始时间和固定时长，可以推算出固定结束时间。
		- 只有固定时长，在上一个时间片的结束时间加1为开始。
		- 有固定开始时间，有计划时长，计划结束时间。
		- 有固定结束时间，有计划时长，计划开始时间。
		- 只有计划时长：
			- 在上一个时间片结束时间加1为开始。
			- 如果下一个时间片有固定开始时间，则以它减1位为结束。
			- 如果下一时间片没有固定开始时间，则以计划时长计算结束时间。



[top](#top) | [index](#index)
<a id="20240423093000"></a>
##  9:30~10:59
term commit中添加error和knowledge

已完成。
```
D:\huangyg\git\PSMD\src>node term commit
commit error.1.yaml
执行部门陷入割据 0ccddb29
commit error.2.yaml
无法有效分配未来收入 48291d8c
commit knowledge.1.yaml
1406解决割据问题 3b7582cd
commit knowledge.2.yaml
1609解决资源问题 d8a0602f
commit term.1.yaml
执行部门陷入割据 0ccddb29
commit term.2.yaml
如果割据就启用1406 583d6243
commit termset.1.yaml
预设1406动议 b3124d50
../data/term.0ccddb29.yaml文件已更新。../data/term.1.yaml可以删除。
../data/term.583d6243.yaml文件已更新。../data/term.2.yaml可以删除。
../data/error.0ccddb29.yaml文件已更新。../data/error.1.yaml可以删除。
../data/error.48291d8c.yaml文件已更新。../data/error.2.yaml可以删除。
path replace:term.2.yaml term.583d6243.yaml
旧文件:../data/termset.1.yaml中item:1的id:cb4ab0e9未能替换，请人工检查。
path replace:term.1.yaml term.0ccddb29.yaml
旧文件:../data/termset.1.yaml中itemset:3的id:056e71fb未能替换，请人工检查。
../data/termset.b3124d50.yaml文件已更新。../data/termset.1.yaml可以删除。
knowledge env replace. type: errorid: 1 -> 0ccddb29
knowledge depend replace. type: errorid: 2 -> 48291d8c
旧文件:../data/knowledge.1.yaml中termset字段, id:056e71fb未能替换，请人工检查。
knowledge error replace. id: 1 -> 0ccddb29
../data/knowledge.3b7582cd.yaml文件已更新。../data/knowledge.1.yaml可以删除。
knowledge env replace. type: errorid: 2 -> 48291d8c
旧文件:../data/knowledge.2.yaml中depend字段, type:error的id:cde3c3e2未能替换，请人工检查。
旧文件:../data/knowledge.2.yaml中term字段, id:5b4e0597未能替换，请人工检查。
knowledge error replace. id: 2 -> 48291d8c
../data/knowledge.d8a0602f.yaml文件已更新。../data/knowledge.2.yaml可以删除。
```

下一步：  

- error、knowledge metadata -> termset medata -> termset view
- 增加一种参数规格： node term commit filename  提交单个手稿，沿着引用关系涉及的手稿文件也都提交。
	- 同时把旧的commit增强一下：所有短于8字符id的都提交，以便起草大合同手稿。


[top](#top) | [index](#index)
<a id="20240423140000"></a>
## 14:00~14:29
选定一种gantt工具，能够从数据上和task metadata互通。

### https://github.com/frappe/gantt

- 可以显示、拖拽改变始末时间
- 可以设置事件响应：点击、改变始末时间时调用、改变完成进度、改变显示模式
- 只有一种depend关系，没有明确是哪种。
- 设置父子关系，改变depend关系，没有适当接口。

### ganttproject

- /task/task的meeting 是里程碑，true是，flase不是。
- /task/task的expand 是展开子任务，true展开，false收缩。
- /tasks/task/depend的type有4种：
	- 1：ego开始-deploy开始  在/ego/depend.type = 1 在图中显示在deploy属性下
	- 2：modeling结束-deploy开始  在/modeling/depend.type = 2 在图中显示在deploy属性下
	- 3：js结束-modeling结束 在/js/depend.type = 3 在图中显示在modling属性下
	- 4：raw开始-ego结束 在/raw/depend.type = 4 在图中显示在ego属性下
- /tasks/task/depend的difference是延迟时间
- /tasks/task/depend的hardness是箭头显示类型：
	- Strong：实线
	- Rubber：虚线



[top](#top) | [index](#index)
<a id="20240423143000"></a>
## 14:30~14:59
国密算法网页端debug

- 是大小写问题：范例是publicKey，local.3.html是pubkey。改写是没有改变大写K。
- local.3.html中的加密、解密、签名、验证全部通过。


[top](#top) | [index](#index)
<a id="20240423160000"></a>
## 16:00~16:59
设计season plan的流程和数据结构


### 流程

- 季度规划
	- 按已生效合同整理工作结果和完成期限，安排任务时间。
	- 将剩余时间分配给长期任务。推算各项目的预算案。
	- 整理任务之间的依赖关系。
- 日计划
	- 根据身体状况选择时间模版，初始化，生成draft metadata文件
		- 各时间片的候选任务排序
			- 可以有多套排序权重
		- 已生效合同工作计划的计划、已用、剩余时间。
		- 各项目季度预算、初步结算。
	- 调整确定后生成正式日计划和draft空文件
- 日小结
	- 整理draft文件
	- 生成正式日小结
		- 已生效合同的计划、已用、剩余时间
- 季度结算：根据实际使用的资源完成项目件结算。

### 数据结构

- season metadata in/ego/task （-> /ego/data)
~~~
year:
season:
dayplan:
time:
  in:
    1: 40
    2: 10
    3: 2
    // dayplanid: amount
  agreement:
    - name: contract1.deploy
      deadline: 2024-06-13 18:00:00
      budget:
        90: 2
        60: 8
        30: 4
    - name: contract2.modeling
      deadline: 2024-05-16 12:00:00
      budget:
        90: 3
        60: 2
        30: 2
    alloc:
      taskid1:
        90: 1
        60: 3
        30: 2
      taskid2:
        90: 4
        60: 4
        30: 1 
~~~