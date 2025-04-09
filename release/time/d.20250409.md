# 2025.04.09.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~16:59	ego: [升级基础模型](#20250409140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1884 | 11646 | 5910 |
| PSMD | 4000 | 525 | 3475 | 1170 |
| ego | 2530 | 720 | 1810 | 1260 |
| infra | 2000 | 240 | 1760 | 210 |
| xuemen | 1000 | 84 | 916 | 480 |
| raw | 1000 | 90 | 910 | 390 |
| learn | 2000 | 105 | 1895 | 1800 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - xuemen的第1号事项：月初事务

- 60分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：熟悉内脏之间的关系
  - js的第1号事项：learn factory, constructor, prototype
  - raw的第2号事项：设计二季度时间表

- 90分钟时间片：
  - PSMD的第1号事项：子1609
  - learn的第1号事项：热更新
  - ego的第1号事项：微观与宏观衔接的几篇论文
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622

- 195分钟时间片：
  - ego的第2号事项：新版基础模型
  - xuemen的第2号事项：kernel模型升级
  - ego的第3号事项：新版ego, instance or model, any manifest
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.04.09.[升级基础模型]任务&body=日期: 2025.04.09.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250409.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250409140000"></a>
## 14:00 ~ 16:59
## ego: [升级基础模型]

- 基础模型部分先不落笔到手稿。
- 修改了day.js中git提交的代码。旧版错误提示：
```
non file changed: D:\huangyg\git\draft
file changed: [
  FileStatusSummary {
    path: 'data/day/2025/d.20250409.yaml',
    index: '?',
    working_dir: '?'
  },
  FileStatusSummary {
    path: 'data/voucher/2025/AER.133.yaml',
    index: '?',
    working_dir: '?'
  },
  FileStatusSummary {
    path: 'data/voucher/2025/AVR.136.yaml',
    index: '?',
    working_dir: '?'
  }
]
file changed: [
  FileStatusSummary {
    path: 'release/time/d.20250409.md',
    index: ' ',
    working_dir: 'M'
  },
  FileStatusSummary {
    path: 'release/time/d.20250410.md',
    index: ' ',
    working_dir: 'M'
  }
]
file changed: [
  FileStatusSummary {
    path: 'htmlparser/e.牛舌.html',
    index: '?',
    working_dir: '?'
  },
  FileStatusSummary {
    path: 'htmlparser/e.牛舌.yaml',
    index: '?',
    working_dir: '?'
  }
]
GitError: Aborting commit due to empty commit message.

    at Object.action (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1451:25)
    at PluginStore.exec (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1500:29)
    at D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1927:43
    at new Promise (<anonymous>)
    at GitExecutorChain.handleTaskData (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1925:16)
    at GitExecutorChain.<anonymous> (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1909:44)
    at Generator.next (<anonymous>)
    at fulfilled (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:52:24)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  task: {
    commands: [ '-c', 'core.abbrev=40', 'commit', '-m', '' ],
    format: 'utf-8',
    parser: [Function: parseCommitResult]
  }
}
GitError: Aborting commit due to empty commit message.

    at Object.action (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1451:25)
    at PluginStore.exec (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1500:29)
    at D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1927:43
    at new Promise (<anonymous>)
    at GitExecutorChain.handleTaskData (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1925:16)
    at GitExecutorChain.<anonymous> (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1909:44)
    at Generator.next (<anonymous>)
    at fulfilled (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:52:24)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  task: {
    commands: [ '-c', 'core.abbrev=40', 'commit', '-m', '' ],
    format: 'utf-8',
    parser: [Function: parseCommitResult]
  }
}
GitError: Aborting commit due to empty commit message.

    at Object.action (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1451:25)
    at PluginStore.exec (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1500:29)
    at D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1927:43
    at new Promise (<anonymous>)
    at GitExecutorChain.handleTaskData (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1925:16)
    at GitExecutorChain.<anonymous> (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:1909:44)
    at Generator.next (<anonymous>)
    at fulfilled (D:\huangyg\git\ego\src\node_modules\simple-git\dist\cjs\index.js:52:24)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  task: {
    commands: [ '-c', 'core.abbrev=40', 'commit', '-m', '' ],
    format: 'utf-8',
    parser: [Function: parseCommitResult]
  }
}
```
- 新版改为异步执行。
```
    gitop: async function (commitmsg) {
        await util.gitstep("D:\\huangyg\\git\\blog", commitmsg, "all", 'master');
        await util.gitstep("D:\\huangyg\\git\\draft", commitmsg, "gitee", 'master');
        await util.gitstep("D:\\huangyg\\git\\ego", commitmsg, "all", 'vat');
        await util.gitstep("D:\\huangyg\\git\\js.sample", commitmsg, "all", 'master');
    }
```