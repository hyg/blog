# 2025.05.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	learn: [cursor rules](#20250527160000)
- 17:00~18:29	ego: [todoitem的readme](#20250527170000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4707 | 8823 | 7335 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1530 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 105 | 895 | 450 |
| learn | 2000 | 1033 | 967 | 2160 |
| js | 1000 | 120 | 880 | 1230 |

---
waiting list:


- 30分钟时间片：
  - js的第5号事项：rxdb
  - js的第6号事项：LokiJS
  - js的第7号事项：node-dirty
  - js的第8号事项：tiny,https://www.npmjs.com/package/tiny

- 60分钟时间片：
  - ego的第1号事项：todo item中readme的传递（数组复制）
  - learn的第1号事项：量子物理的数学基础
  - raw的第1号事项：新版food plan
  - js的第1号事项：IndexedDB + dexie

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。
  - ego的第2号事项：entry的按月归并

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第5号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.27.[cursor rules]任务&body=日期: 2025.05.27.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250527.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250527160000"></a>
## 16:00 ~ 16:59
## learn: [cursor rules]

- context 7导入github的PSMD库，一直停留在"Waiting for logs...".
    - https://context7.com/add-library?tab=github&library=%2Fxuemen%2Fpsmd
- RIPER-5需要先熟悉cursor rules，PSMD的工作过程可以借鉴这个概念，实现工作上下文的自动化。也许部分工具集也可以共用。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.27.[todoitem的readme]任务&body=日期: 2025.05.27.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250527.b.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250527170000"></a>
## 17:00 ~ 18:29
## ego: [todoitem的readme]

- readme在处理过程中，从array变成了string：season metadata->waitting list -> day obj -> day log
- 数组直接赋值，需要使用语法: array2 = [...array1] 而不是 array2 = array1.
- redo回写部分，需要用new array或者array.push，而不是字符串拼凑。
- D:\huangyg\git\ego\.vscode\launch.json
```
            "args": ["day","over"],
            "cwd": "${workspaceFolder}\\src\\"
```