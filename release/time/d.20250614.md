# 2025.06.14.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版2(2a)。

<a id="index"></a>
- 14:00~15:29	PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622](#20250614140000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250614160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7251 | 6279 | 8280 |
| PSMD | 4000 | 1170 | 2830 | 1185 |
| ego | 2530 | 1772 | 758 | 1680 |
| infra | 2000 | 885 | 1115 | 150 |
| xuemen | 1000 | 511 | 489 | 630 |
| raw | 1000 | 345 | 655 | 585 |
| learn | 2000 | 1784 | 216 | 2190 |
| js | 1000 | 784 | 216 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：佯谬及二次革命
  - js的第3号事项：ai.js

- 60分钟时间片：
  - infra的第2号事项：动态菜单设计。
  - raw的第2号事项：设计三季度时间表
  - learn的第2号事项：量子物理的数学基础
  - raw的第3号事项：熟悉内脏之间的关系

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - ego的第1号事项：基于真实数据标志财务报表
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - raw的第1号事项：整理 resource.md
  - xuemen的第3号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.14.[根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]任务&body=日期: 2025.06.14.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250614.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250614140000"></a>
## 14:00 ~ 15:29
## PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

### read ../../draft/2025/20250403.01.md

#### PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

- https://www.elegislation.gov.hk/hk/cap622
    - 66. 公司类别 (b) 私人股份有限公司；
    - 66. 公司类别 (e) 无股本的担保有限公司。
    - 第2次分部 章程细则范本
- file:///D:/huangyg/git/PSMD/view/COM.1609.html
- D:\huangyg\git\com.origin\1609\cod.cn.有限责任公司.1.md
- 继续追加时间。

### read ../../draft/2025/20250418.02.md

#### PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

- 先选股份有限公司，担保有限公司先不做。
- 其它部分，继续追加时间完善。


---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.14.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.06.14.%0D%0A序号: 9%0D%0A手稿:../../draft/2025/20250614.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250614160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- 尝试用esm测试一下this的指向。
- npm install esm
- 全套代码改为mjs
	- 对应地修改语法。
	- 把env、state、code从metadata独立出来，直接export。action function从code独立出来知己export，code中只保留event lisenter。

```
D:\huangyg\git\js.sample\jsterms>node main.mjs
{
  id: '12',
  name: 'term12',
  env: {},
  subterm: [
    {
      localid: '1.',
      term: [Module: null prototype] {
        a0: [Function: a0] {
          [length]: 1,
          [name]: 'a0',
          [prototype]: [Object]
        },
        a1: [Function: a1] {
          [length]: 1,
          [name]: 'a1',
          [prototype]: [Object]
        },
        a2: [Function: a2] {
          [length]: 1,
          [name]: 'a2',
          [prototype]: [Object]
        },
        code: {
          e0: [Function],
          e1: [Function],
          e2: [Function],
          a3: [Function]
        },
        env: {
          rule: [Array],
          event: [Array],
          state: [Array],
          action: [Array],
          asset: [Array]
        },
        metadata: { id: '111111', name: 'term1', readme: 'term1 readme' },
        state: 's0',
        text: 'term1 text',
        [Symbol(Symbol.toStringTag)]: 'Module'
      }
    },
    {
      localid: '2.',
      term: [Module: null prototype] {
        code: {
          state: 's10',
          e11: [Function],
          e10: [Function],
          a10: [Function],
          a11: [Function]
        },
        env: {
          rule: [Array],
          event: [Array],
          state: [Array],
          action: [Array],
          asset: [Array]
        },
        metadata: { id: '222222', name: 'term2', readme: 'term2 readme' },
        state: 's10',
        text: 'term2 text',
        [Symbol(Symbol.toStringTag)]: 'Module'
      }
    },
    [length]: 2
  ],
  text: '1. term1 text\n2. term2 text\n',
  readme: '1. term1 readme\n2. term2 readme\n',
  code: {
    '1.e0': <ref *1> [Function: e0] {
      [length]: 0,
      [name]: 'e0',
      [prototype]: { [constructor]: [Circular *1] }
    },
    '1.e1': <ref *2> [Function: e1] {
      [length]: 0,
      [name]: 'e1',
      [prototype]: { [constructor]: [Circular *2] }
    },
    '1.e2': <ref *3> [Function: e2] {
      [length]: 0,
      [name]: 'e2',
      [prototype]: { [constructor]: [Circular *3] }
    },
    '2.e10': <ref *4> [Function: e10] {
      [length]: 0,
      [name]: 'e10',
      [prototype]: { [constructor]: [Circular *4] }
    },
    '2.e11': <ref *5> [Function: e11] {
      [length]: 0,
      [name]: 'e11',
      [prototype]: { [constructor]: [Circular *5] }
    }
  }
}
enter e1
{
  '1.e0': <ref *1> [Function: e0] {
    [length]: 0,
    [name]: 'e0',
    [prototype]: { [constructor]: [Circular *1] }
  },
  '1.e1': <ref *2> [Function: e1] {
    [length]: 0,
    [name]: 'e1',
    [prototype]: { [constructor]: [Circular *2] }
  },
  '1.e2': <ref *3> [Function: e2] {
    [length]: 0,
    [name]: 'e2',
    [prototype]: { [constructor]: [Circular *3] }
  },
  '2.e10': <ref *4> [Function: e10] {
    [length]: 0,
    [name]: 'e10',
    [prototype]: { [constructor]: [Circular *4] }
  },
  '2.e11': <ref *5> [Function: e11] {
    [length]: 0,
    [name]: 'e11',
    [prototype]: { [constructor]: [Circular *5] }
  }
}
r0: action a1.
{
  localid: '1.',
  term: [Module: null prototype] {
    a0: <ref *1> [Function: a0] {
      [length]: 1,
      [name]: 'a0',
      [prototype]: { [constructor]: [Circular *1] }
    },
    a1: <ref *2> [Function: a1] {
      [length]: 1,
      [name]: 'a1',
      [prototype]: { [constructor]: [Circular *2] }
    },
    a2: <ref *3> [Function: a2] {
      [length]: 1,
      [name]: 'a2',
      [prototype]: { [constructor]: [Circular *3] }
    },
    code: {
      e0: <ref *4> [Function: e0] {
        [length]: 0,
        [name]: 'e0',
        [prototype]: { [constructor]: [Circular *4] }
      },
      e1: <ref *5> [Function: e1] {
        [length]: 0,
        [name]: 'e1',
        [prototype]: { [constructor]: [Circular *5] }
      },
      e2: <ref *6> [Function: e2] {
        [length]: 0,
        [name]: 'e2',
        [prototype]: { [constructor]: [Circular *6] }
      },
      a3: <ref *7> [Function: a3] {
        [length]: 1,
        [name]: 'a3',
        [prototype]: { [constructor]: [Circular *7] }
      }
    },
    env: {
      rule: [ 'r0', 'r1', 'r2', [length]: 3 ],
      event: [ 'e0', 'e1', 'e2', [length]: 3 ],
      state: [ 's0', 's1', 's2', [length]: 3 ],
      action: [ 'a0', 'a1', 'a2', [length]: 3 ],
      asset: [ [length]: 0 ]
    },
    metadata: { id: '111111', name: 'term1', readme: 'term1 readme' },
    state: 's1',
    text: 'term1 text',
    [Symbol(Symbol.toStringTag)]: 'Module'
  }
}
r0: action a1.
r1: action a0.
{
  localid: '1.',
  term: [Module: null prototype] {
    a0: <ref *1> [Function: a0] {
      [length]: 1,
      [name]: 'a0',
      [prototype]: { [constructor]: [Circular *1] }
    },
    a1: <ref *2> [Function: a1] {
      [length]: 1,
      [name]: 'a1',
      [prototype]: { [constructor]: [Circular *2] }
    },
    a2: <ref *3> [Function: a2] {
      [length]: 1,
      [name]: 'a2',
      [prototype]: { [constructor]: [Circular *3] }
    },
    code: {
      e0: <ref *4> [Function: e0] {
        [length]: 0,
        [name]: 'e0',
        [prototype]: { [constructor]: [Circular *4] }
      },
      e1: <ref *5> [Function: e1] {
        [length]: 0,
        [name]: 'e1',
        [prototype]: { [constructor]: [Circular *5] }
      },
      e2: <ref *6> [Function: e2] {
        [length]: 0,
        [name]: 'e2',
        [prototype]: { [constructor]: [Circular *6] }
      },
      a3: <ref *7> [Function: a3] {
        [length]: 1,
        [name]: 'a3',
        [prototype]: { [constructor]: [Circular *7] }
      }
    },
    env: {
      rule: [ 'r0', 'r1', 'r2', [length]: 3 ],
      event: [ 'e0', 'e1', 'e2', [length]: 3 ],
      state: [ 's0', 's1', 's2', [length]: 3 ],
      action: [ 'a0', 'a1', 'a2', [length]: 3 ],
      asset: [ [length]: 0 ]
    },
    metadata: { id: '111111', name: 'term1', readme: 'term1 readme' },
    state: 's2',
    text: 'term1 text',
    [Symbol(Symbol.toStringTag)]: 'Module'
  }
}
```

- 下一步试试把cjs的action也放在metadata和code以外。
