# 2024.07.02.
日小结  

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1。

<a id="index"></a>
- 09:30	[知识网络的基础概念和示范](#20240702093000)  
- 14:00	[整理旧代码](#20240702140000)  
- 14:30	[JSON Schema](#20240702143000)  
- 16:00	[整理ego\src代码结构](#20240702160000)  

---
season stat:

| task | alloc | sold | hold | todo |
| --- | --- | --- | --- | --- |
| total | 17700 | 255 | 17445 | 2850 |
| PSMD | 7000 | 95 | 6905 | 525 |
| ego | 4000 | 50 | 3950 | 480 |
| infra | 2000 | 30 | 1970 | 0 |
| xuemen | 1500 | 30 | 1470 | 315 |
| raw | 500 | 0 | 500 | 60 |
| learn | 1500 | 0 | 1500 | 1080 |
| js | 1200 | 50 | 1150 | 390 |

---

waiting list:


- 30分钟时间片：
  - learn的第4号事项：寻找可编程的,去中心化的信息发布方式
  - learn的第5号事项：了解免安装web im的机制
  - js的第5号事项：日期格式化
  - PSMD的第6号事项：debug- D:\huangyg\git\PSMD\data\term.25c83dac.yaml interface字段混乱。

- 60分钟时间片：
  - PSMD的第1号事项：用yaml写json schema并且验证。
  - learn的第1号事项：linkml, yaml-ld
  - xuemen的第1号事项：kernel模型升级
  - js的第1号事项：git sample

- 90分钟时间片：
  - ego的第1号事项：day plan, day log, waiting list
  - ego的第2号事项：根据ego对外信息接口编写页面代码
  - learn的第2号事项：拟制说、目的财产说、实在说
  - PSMD的第4号事项：以1406为例检查知识图谱和blawx的语法

- 195分钟时间片：
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - PSMD的第3号事项：term + COM matedata -> deploy metadata -> deploy view
  - learn的第14号事项：rust入门

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.02.[知识网络的基础概念和示范]任务&body=日期: 20240702%0D%0A序号: 0%0D%0A手稿:../../draft/2024/07/20240702093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240702093000"></a>
##  09:30~10:59
PSMD: [知识网络的基础概念和示范]

- ego as instance： D:\huangyg\git\ego\data\ego.yaml
```
id: huangyg
name: huang yonggang
aliases: ego
data:
  id: hyg.data
  name: data instance of entity "huangyg"
  entityid: huangyg
  events:
    - id: hyg.data.event
      name: the event queue of entity "huangyg"
      readme: ego\data\event
  todos: 
    - id: hyg.data.todo
      name: the todo item of entity "huangyg"
      readme: ego\data\todo
cognize: ego\data\congnize
```
- 校验是否符合模型
```
D:\huangyg\git\ego\data>linkml-validate -s entity.yaml ego.yaml
C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
WARNING:rdflib.term:C:\Users\hyg\AppData\Local\Programs\Python\Python312\Lib\site-packages\linkml_runtime\linkml_model\model\schema\types does not look like a valid URI, trying to serialize this will break.
No issues found
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.02.[整理旧代码]任务&body=日期: 20240702%0D%0A序号: 1%0D%0A手稿:../../draft/2024/07/20240702140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240702140000"></a>
## 14:00~14:29
infra: [整理旧代码]

- createAuto() : data.id = GetHash(js.toString(),-1);
- CODtransfer() : 只是生成转账记录。
- D:\huangyg\git\Infra\local\Infra.COD.js
    - getevent : COD处理事件的代码，infra最重要的代码。下一步可以自动生成js文件然后执行。
    - https://raw.githubusercontent.com/xuemen/Infra/master/server/COD.yaml
    - https://raw.githubusercontent.com/xuemen/Infra/431933ac94d0bc0701291f3f6905d130b48cb521/server/ITW.js
```
function getevent(cod){
	var jsfile = cod.name+".js";
	var codmodule ;
	https.get(cod.codeurl,function (response){
		response.on('data',function(data){
			//console.log(data.toString());
			//var datahash = new Hashes.SHA512().b64(data);
			//jsfile = datahsh+".js";
			//console.log(new Hashes.SHA512().b64(data));
			console.log(new Hashes.SHA512().b64(data.toString()));
			
			fs.writeFileSync(jsfile,data);
			codmodule = require("./"+jsfile);
			event = cod.event;
			for (var id in event) {
				//console.log(id+"\t"+event[id]);
				emitter.on(id,eval("codmodule."+event[id]));
			}
			
			emitter.emit("ticket1");
		});
	});	
}
```

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.02.[JSON Schema]任务&body=日期: 20240702%0D%0A序号: 2%0D%0A手稿:../../draft/2024/07/20240702143000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240702143000"></a>
## 14:30~14:59
js: [JSON Schema]

- https://json-schema.org/
- https://json-schema.apifox.cn/
    - https://relaxng.org/
- 似乎比linkml更适合nodejs
    - https://json-schema.org/blog/posts/get-started-with-json-schema-in-node-js
    - https://www.npmjs.com/package/jsonschema

- JSON Schema 支持 YAML： https://deepinout.com/yaml/yaml-tutorials/t_lib_121_yaml_yaml_json_schema.html
- https://www.codethink.co.uk/articles/2021/yaml-schemas/
    - Once you have the data, you check it against a JSON-Schema using ajv, or the newer djv library.
    - https://www.npmjs.com/package/ajv
    - https://www.npmjs.com/package/djv
- generator：
    - https://www.npmjs.com/package/fluent-json-schema
    - https://linkml.io/linkml/generators/
    - https://linkml.io/linkml/generators/linkml.html
    - json schema说得generator是用js代码生成schema，linkml是用linkml代码生成其它schema。
- PSMD：目前看不出json schema的表达能力不如linkml的地方。
    - 使用json schema建模和部署。
    - 学习linkml的方法学和工具链。
- 增加一个todo项：
    - '60': 用yaml写json schema并且验证。
      readme: |
        - 参考2024.7.2. 14:30 draft

---

<a href="mailto:huangyg@mars22.com?subject=关于2024.07.02.[整理ego\src代码结构]任务&body=日期: 20240702%0D%0A序号: 3%0D%0A手稿:../../draft/2024/07/20240702160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240702160000"></a>
## 16:00~16:59
ego: [整理ego\src代码结构]

### view
- blog/release/time/*.md

### data
- ego/data/season/*.yaml
- draft/yyyy/mm/*.yaml
- ego/data/draft/yyyy/*.yaml

### code
- ego/src/*.js

- 增加todo项：
    - '60': day plan, day log, waiting list 
