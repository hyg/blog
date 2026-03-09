# 2026.03.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版1(1e)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260309190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1665 | 11865 | 7410 |
| PSMD | 4000 | 510 | 3490 | 570 |
| ego | 2530 | 120 | 2410 | 885 |
| infra | 2000 | 225 | 1775 | 0 |
| xuemen | 1000 | 30 | 970 | 0 |
| raw | 1000 | 315 | 685 | 90 |
| learn | 2000 | 315 | 1685 | 4485 |
| js | 1000 | 150 | 850 | 1380 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：passportjs
  - learn的第2号事项：Camunda Zeebe / Temporal.io
  - learn的第11号事项：Flink Complex Event Processing，直接运行 DMN 4Flink 或 Rego-on-Flink 扩展。
  - learn的第13号事项：OpenFGA/SpiceDB(Zanzibar模型)

- 60分钟时间片：
  - learn的第1号事项：XSTATE https://xstate.js.org/
  - js的第3号事项：TensorFlow.js
  - learn的第4号事项：按petri网定义设计几个实例
  - learn的第5号事项：Zapier

- 90分钟时间片：
  - raw的第1号事项：整理代码，理顺food.js几个成员函数之间的调用关系
  - ego的第2号事项：微观与宏观衔接的几篇论文
  - js的第2号事项：openpgp v6.1.1.
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - PSMD的第1号事项：term + COM matedata -> deploy metadata -> deploy view
  - ego的第1号事项：新版ego, instance or model, any manifest
  - PSMD的第2号事项：会话skill套装设计
  - learn的第27号事项：Julia

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.03.09.[无名任务]任务&body=日期: 2026.03.09.%0D%0A序号: 7%0D%0A手稿:../../draft/2026/20260309.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260309190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- ego:
	- 删除go代码，src下的server和client。
	- 查找代码中的硬编码路径，在path.js中增加变量，更新代码。
	- 在 `src/util.js` 中移除对 `Date.prototype` 的修改。项目已经引入了 `dayjs` 库（参考`src/ego.js` 中的引用方式），把所有地方统一使用 `dayjs` 进行日期处理。
	- 针对修改，生成单元测试，更新*.test.js。
	- 分析`task/task.js` 和 `src/` 下的代码是否有逻辑重叠：除了日期处理可以重用，功能上没有重叠。
	- 根据情况把var替换为let/const
	- 整理代码中LinkML模型定义的使用情况：data文件夹下已经手工创建了linkml的yaml文件，但是代码中还没有使用，功能较重，先用json schema，以后转到linkml。
	- 在data文件夹下增加schema子文件夹，为所有 YAML 文件创建schema，在代码中引入 JSON Schema 校验，防止因手写错误导致数据损坏或程序崩溃。
```
创建了以下文件：
Schema 文件 (data/schema/)：
- season.json - 季度元数据 schema
- day.json - 日计划 schema  
- voucher.json - 凭证/账单 schema
- task.json - 任务 schema
验证模块 (src/schema.js):
- 提供 validateSeason(), validateDay(), validateVoucher(), validateTask() 函数
- 使用 ajv 进行 JSON Schema 校验
测试文件 (src/schema.test.js):
- 7 个测试用例，全部通过
依赖更新 (src/package.json):
- 添加 ajv 和 ajv-formats
使用方式：
const schema = require('./schema.js');
const yaml = require('js-yaml');
const fs = require('fs');
const data = yaml.load(fs.readFileSync('data/season/2026S1.yaml'));
const result = schema.validateSeason(data);
if (!result.valid) {
	    console.error('Validation errors:', result.errors);
	    }
}
```


- d:\huangyg\git\awiki-agent-id-skill\
	- 清理文件夹，发布npm。
	- 在dev的openclaw测试，创建身份、删除身份ok，发送明文信息成功但是对方没有收到。
	- qwen --resume 042e54f4-dea2-4ed6-ae78-e39cada73862
- d:\huangyg\git\sample\awiki\
	- 重新整理了子文件夹，根据anp包修复了401码的自动刷新JWT。
	- 提交git。
		- ✅ DIDWbaAuthHeader 类实现                                                                                                                           │
	   	- ✅ 401 自动重试逻辑                                                                                                                                  │
	    - ✅ JWT 持久化                                                                                                                                        │
	    - ✅ 完整测试套件                                                                                                                                      │
	    - ✅ 完整文档    
	-  qwen --resume 2c484f7c-9370-4c66-9d78-90ba9367a8f4
