# 2025.05.06.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~15:29	ego: [draft汇总](#20250506140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 3987 | 9543 | 6345 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1305 | 1225 | 1410 |
| infra | 2000 | 360 | 1640 | 240 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 90 | 910 | 480 |
| learn | 2000 | 763 | 1237 | 1890 |
| js | 1000 | 120 | 880 | 600 |

---
waiting list:


- 30分钟时间片：
  - raw的第1号事项：脚脉
  - learn的第2号事项：狄拉克算子
  - ego的第2号事项：entry的按月报表
  - learn的第3号事项：重新规划vscodium workspace

- 60分钟时间片：
  - ego的第1号事项：entry的科目归并
  - js的第1号事项：learn factory, constructor, prototype
  - raw的第2号事项：新版food plan
  - infra的第3号事项：动态菜单设计。

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - learn的第1号事项：量子力学的各种诠释:基于门电路、event机制的思想实验
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.06.[draft汇总]任务&body=日期: 2025.05.06.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250506.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250506140000"></a>
## 14:00 ~ 15:29
## ego: [draft汇总]

- D:\huangyg\git\ego\src\day.js
    - 增加initdraft()
- D:\huangyg\git\ego\src\day.test.js
    - 增加一段测试代码：
```
test('init draft',(t)=>{
    day.debug = true;

    assert.ok(day.makedayobj(2,-1));
});
```

- 测试通过。
```
D:\huangyg\git\ego\src>node day.test
getwaketime> diff: -1
getwaketime> theDate: 2025-05-05T12:13:23.123Z
getwaketime> dateStr: 20250505
makedayobj> waketime: 35800
loadseasonobj> seasonfilename: ../data/season/2025S2.yaml
makedayobj> dayplan: 2a
makedayobj> timeslice: 0 free 3 58 15 4 12
makedayobj> timeslice: 1 prepare 4 13 60 5 12
makedayobj> timeslice: 2 food 5 13 45 5 57
makedayobj> timeslice: 3 discuss 5 58 45 6 42
makedayobj> timeslice: 4 free 6 43 61 7 44
makedayobj> timeslice: 5 work 7 45 195 10 59
deletetodoitem> delete the todo item from PSMD: [子1609:基于公司、合同]
deletetodoitem> before delete todo item:
- '195': 子1609:基于公司、合同
  readme: |
    - read ../../draft/2025/20250125.02.md
    - read ../../draft/2025/20250416.01.md
    - read ../../draft/2025/20250427.01.md
    - read ../../draft/2025/20250505.02.md
- '90': 根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  readme: |
    - read ../../draft/2025/20250403.01.md
    - read ../../draft/2025/20250418.02.md
- '90': 整理新版本term的manifest code
  readme: |
    - 为了显示而设计的term model，并不适合与代码绑定。
    - 设计前置protocol的定义和数据表现
      - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
      - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
      - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
    - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
      - 根据FSM、FPM、machine的设计决定term的粒度。
      - 设计每项知识的思考和案例积累锚点。
    - 随之修订manifest text。
    - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
    - read ../../draft/2024/09/20240905140000.md
    - read ../../draft/2024/09/20240906093000.md
    - read ../../draft/2024/09/20240908140000.md
    - read ../../draft/2024/09/20240909093000.md
    - read ../../draft/2024/09/20240911093000.md
    - read ../../draft/2024/09/20240912140000.md
    - read ../../draft/2024/09/20240913093000.md
    - read ../../draft/2024/09/20240918140000.md
    - read ../../draft/2025/20250114.02.md
    - read ../../draft/2025/20250115.02.md
    - read ../../draft/2025/20250116.02.md
- '90': 智在科技项目准备
  readme: |
    - read ../../draft/2025/20250115.01.md
- '90': 整理default模型
  readme: |
    - read ../../draft/2024/09/20240930.02.md
    - read ../../draft/2024/10/20241002.01.md
    - read ../../draft/2024/10/20241004.02.md
    - read ../../draft/2024/10/20241007.01.md
    - read ../../draft/2024/10/20241010.02.md
    - read ../../draft/2024/10/20241011.01.md
    - read ../../draft/2024/10/20241016.01.md
    - read ../../draft/2024/10/20241017.01.md
    - read ../../draft/2024/10/20241024.01.md
    - read ../../draft/2024/10/20241028.01.md
    - read ../../draft/2024/11/20241105.02.md
    - read ../../draft/2024/11/20241106.01.md
    - read ../../draft/2024/12/20241213.02.md
    - read ../../draft/2025/20250109.02.md
    - read ../../draft/2025/20250110.02.md
    - read ../../draft/2025/20250111.02.md
    - read ../../draft/2025/20250112.02.md
    - read ../../draft/2025/20250113.02.md
    - read ../../draft/2025/20250114.01.md
- '195': machines model
  readme: |
    - a sample instance of machine,FPM,FSM in manifest code
    - read D:\huangyg\git\draft\2024\07\20240723160000.md
    - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
    - 实现FPM+FSM
    - 从FSM、FPM中抽象出统一的mechine
    - 实现joint、split机制
    - 先用javascript的class实现
    - read ../../draft/2024/09/20240926.01.md
- '90': 整理新版本term的manifest text
  readme: |
    - 条款文本嵌入到machine模型。
    - 以修订和任免定义的层级嵌入到machine模型。
- '195': term + COM matedata -> deploy metadata -> deploy view
- '90': 以1406为例检查知识图谱和blawx的语法
- '60': 整理闫岸家政能力讨论
  readme: |
    - read ../../draft/2024/09/20240924.01.md
    - read ../../draft/2024/09/20240925.03.md
    - read ../../draft/2024/10/20241011.03.md
    - read ../../draft/2024/10/20241013.03.md
    - read ../../draft/2024/10/20241014.02.md
    - read ../../draft/2024/10/20241015.03.md
    - read ../../draft/2024/10/20241016.04.md
    - read ../../draft/2024/10/20241017.02.md
    - read ../../draft/2024/10/20241019.01.md
    - read ../../draft/2024/10/20241020.03.md
    - read ../../draft/2024/10/20241021.01.md
    - read ../../draft/2024/10/20241022.03.md
    - read ../../draft/2024/10/20241023.01.md
    - read ../../draft/2024/10/20241024.02.md
    - read ../../draft/2024/10/20241025.03.md
    - read ../../draft/2024/10/20241026.03.md
    - read ../../draft/2024/10/20241027.03.md
    - read ../../draft/2024/10/20241028.03.md
    - read ../../draft/2024/10/20241029.03.md
    - read ../../draft/2024/10/20241030.03.md
    - read ../../draft/2024/10/20241031.02.md
    - read ../../draft/2024/11/20241101.03.md
    - read ../../draft/2024/11/20241104.01.md
    - read ../../draft/2024/11/20241105.03.md
    - read ../../draft/2024/11/20241106.03.md
    - read ../../draft/2024/11/20241107.03.md
    - read ../../draft/2024/11/20241108.01.md
    - read ../../draft/2024/11/20241110.01.md
    - read ../../draft/2024/11/20241111.03.md
    - read ../../draft/2024/11/20241112.01.md
    - read ../../draft/2024/11/20241114.04.md
    - read ../../draft/2024/11/20241115.01.md
    - read ../../draft/2024/11/20241117.05.md
- '90': term metadata的序号，分为显示序号和唯一id两种。
  readnme: |
    - 考虑upgradeby的实现。

deletetodoitem> after delete todo item:
- '90': 根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  readme: |
    - read ../../draft/2025/20250403.01.md
    - read ../../draft/2025/20250418.02.md
- '90': 整理新版本term的manifest code
  readme: |
    - 为了显示而设计的term model，并不适合与代码绑定。
    - 设计前置protocol的定义和数据表现
      - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
      - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
      - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
    - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
      - 根据FSM、FPM、machine的设计决定term的粒度。
      - 设计每项知识的思考和案例积累锚点。
    - 随之修订manifest text。
    - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
    - read ../../draft/2024/09/20240905140000.md
    - read ../../draft/2024/09/20240906093000.md
    - read ../../draft/2024/09/20240908140000.md
    - read ../../draft/2024/09/20240909093000.md
    - read ../../draft/2024/09/20240911093000.md
    - read ../../draft/2024/09/20240912140000.md
    - read ../../draft/2024/09/20240913093000.md
    - read ../../draft/2024/09/20240918140000.md
    - read ../../draft/2025/20250114.02.md
    - read ../../draft/2025/20250115.02.md
    - read ../../draft/2025/20250116.02.md
- '90': 智在科技项目准备
  readme: |
    - read ../../draft/2025/20250115.01.md
- '90': 整理default模型
  readme: |
    - read ../../draft/2024/09/20240930.02.md
    - read ../../draft/2024/10/20241002.01.md
    - read ../../draft/2024/10/20241004.02.md
    - read ../../draft/2024/10/20241007.01.md
    - read ../../draft/2024/10/20241010.02.md
    - read ../../draft/2024/10/20241011.01.md
    - read ../../draft/2024/10/20241016.01.md
    - read ../../draft/2024/10/20241017.01.md
    - read ../../draft/2024/10/20241024.01.md
    - read ../../draft/2024/10/20241028.01.md
    - read ../../draft/2024/11/20241105.02.md
    - read ../../draft/2024/11/20241106.01.md
    - read ../../draft/2024/12/20241213.02.md
    - read ../../draft/2025/20250109.02.md
    - read ../../draft/2025/20250110.02.md
    - read ../../draft/2025/20250111.02.md
    - read ../../draft/2025/20250112.02.md
    - read ../../draft/2025/20250113.02.md
    - read ../../draft/2025/20250114.01.md
- '195': machines model
  readme: |
    - a sample instance of machine,FPM,FSM in manifest code
    - read D:\huangyg\git\draft\2024\07\20240723160000.md
    - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
    - 实现FPM+FSM
    - 从FSM、FPM中抽象出统一的mechine
    - 实现joint、split机制
    - 先用javascript的class实现
    - read ../../draft/2024/09/20240926.01.md
- '90': 整理新版本term的manifest text
  readme: |
    - 条款文本嵌入到machine模型。
    - 以修订和任免定义的层级嵌入到machine模型。
- '195': term + COM matedata -> deploy metadata -> deploy view
- '90': 以1406为例检查知识图谱和blawx的语法
- '60': 整理闫岸家政能力讨论
  readme: |
    - read ../../draft/2024/09/20240924.01.md
    - read ../../draft/2024/09/20240925.03.md
    - read ../../draft/2024/10/20241011.03.md
    - read ../../draft/2024/10/20241013.03.md
    - read ../../draft/2024/10/20241014.02.md
    - read ../../draft/2024/10/20241015.03.md
    - read ../../draft/2024/10/20241016.04.md
    - read ../../draft/2024/10/20241017.02.md
    - read ../../draft/2024/10/20241019.01.md
    - read ../../draft/2024/10/20241020.03.md
    - read ../../draft/2024/10/20241021.01.md
    - read ../../draft/2024/10/20241022.03.md
    - read ../../draft/2024/10/20241023.01.md
    - read ../../draft/2024/10/20241024.02.md
    - read ../../draft/2024/10/20241025.03.md
    - read ../../draft/2024/10/20241026.03.md
    - read ../../draft/2024/10/20241027.03.md
    - read ../../draft/2024/10/20241028.03.md
    - read ../../draft/2024/10/20241029.03.md
    - read ../../draft/2024/10/20241030.03.md
    - read ../../draft/2024/10/20241031.02.md
    - read ../../draft/2024/11/20241101.03.md
    - read ../../draft/2024/11/20241104.01.md
    - read ../../draft/2024/11/20241105.03.md
    - read ../../draft/2024/11/20241106.03.md
    - read ../../draft/2024/11/20241107.03.md
    - read ../../draft/2024/11/20241108.01.md
    - read ../../draft/2024/11/20241110.01.md
    - read ../../draft/2024/11/20241111.03.md
    - read ../../draft/2024/11/20241112.01.md
    - read ../../draft/2024/11/20241114.04.md
    - read ../../draft/2024/11/20241115.01.md
    - read ../../draft/2024/11/20241117.05.md
- '90': term metadata的序号，分为显示序号和唯一id两种。
  readnme: |
    - 考虑upgradeby的实现。

initdraft> readme: [
  'read ../../draft/2025/20250125.02.md',
  'read ../../draft/2025/20250416.01.md',
  'read ../../draft/2025/20250427.01.md',
  'read ../../draft/2025/20250505.02.md'
]
initdraft> item: read ../../draft/2025/20250125.02.md
initdraft> item: read ../../draft/2025/20250416.01.md
initdraft> item: read ../../draft/2025/20250427.01.md
initdraft> item: read ../../draft/2025/20250505.02.md
makedayobj> debug, time slice draft file name:../../draft/2025/20250505.01.md
## PSMD: [子1609:基于公司、合同]

### read ../../draft/2025/20250125.02.md

## PSMD: [子1609]



### read ../../draft/2025/20250416.01.md

## PSMD: [子1609]

- 作为1609模型的章节、附件还是独立模型？
    - 独立模型的话，是否要限定父共同体的种类？
- 情况一：父共同体是1609模型，director会议的动议是创建子共同体。可以把动议范例整理为模型，其它共同体使用时结合具体部署情况设计动议内容。
- 继续追加时间。


### read ../../draft/2025/20250427.01.md

## PSMD: [子1609]

- 对比JPU机制和完整的1609机制
    - JPU其实是1609的前身,完成了提货权的父子关系衔接,而没有配套的权力制衡.
- JPU和1609都需要继续升级
    - 货币乘数仍然需要,代表增长点.但不要依赖本金,而是根据业务决策的质量进行分配.
    - 产品提货权对供应记账,需要对需求量化的记账单位,以及两套数值统一的机制.
- 在以上机制基础上,重新思考共同体和子共同体的关系,也就是责权利分配.


### read ../../draft/2025/20250505.02.md

## PSMD: [子1609]

- 子共同体可以保留1609的部分权利分配规则，但不发行自己独立的RIU，而是使用父共同体的RIU。
- 继续追加时间，把子共同体部署为各种常见的企业种类、合同。



makedayobj> timeslice: 6 food 11 0 180 13 59
makedayobj> timeslice: 7 work 14 0 90 15 29
deletetodoitem> delete the todo item from PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]
deletetodoitem> before delete todo item:
- '90': 根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  readme: |
    - read ../../draft/2025/20250403.01.md
    - read ../../draft/2025/20250418.02.md
- '90': 整理新版本term的manifest code
  readme: |
    - 为了显示而设计的term model，并不适合与代码绑定。
    - 设计前置protocol的定义和数据表现
      - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
      - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
      - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
    - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
      - 根据FSM、FPM、machine的设计决定term的粒度。
      - 设计每项知识的思考和案例积累锚点。
    - 随之修订manifest text。
    - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
    - read ../../draft/2024/09/20240905140000.md
    - read ../../draft/2024/09/20240906093000.md
    - read ../../draft/2024/09/20240908140000.md
    - read ../../draft/2024/09/20240909093000.md
    - read ../../draft/2024/09/20240911093000.md
    - read ../../draft/2024/09/20240912140000.md
    - read ../../draft/2024/09/20240913093000.md
    - read ../../draft/2024/09/20240918140000.md
    - read ../../draft/2025/20250114.02.md
    - read ../../draft/2025/20250115.02.md
    - read ../../draft/2025/20250116.02.md
- '90': 智在科技项目准备
  readme: |
    - read ../../draft/2025/20250115.01.md
- '90': 整理default模型
  readme: |
    - read ../../draft/2024/09/20240930.02.md
    - read ../../draft/2024/10/20241002.01.md
    - read ../../draft/2024/10/20241004.02.md
    - read ../../draft/2024/10/20241007.01.md
    - read ../../draft/2024/10/20241010.02.md
    - read ../../draft/2024/10/20241011.01.md
    - read ../../draft/2024/10/20241016.01.md
    - read ../../draft/2024/10/20241017.01.md
    - read ../../draft/2024/10/20241024.01.md
    - read ../../draft/2024/10/20241028.01.md
    - read ../../draft/2024/11/20241105.02.md
    - read ../../draft/2024/11/20241106.01.md
    - read ../../draft/2024/12/20241213.02.md
    - read ../../draft/2025/20250109.02.md
    - read ../../draft/2025/20250110.02.md
    - read ../../draft/2025/20250111.02.md
    - read ../../draft/2025/20250112.02.md
    - read ../../draft/2025/20250113.02.md
    - read ../../draft/2025/20250114.01.md
- '195': machines model
  readme: |
    - a sample instance of machine,FPM,FSM in manifest code
    - read D:\huangyg\git\draft\2024\07\20240723160000.md
    - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
    - 实现FPM+FSM
    - 从FSM、FPM中抽象出统一的mechine
    - 实现joint、split机制
    - 先用javascript的class实现
    - read ../../draft/2024/09/20240926.01.md
- '90': 整理新版本term的manifest text
  readme: |
    - 条款文本嵌入到machine模型。
    - 以修订和任免定义的层级嵌入到machine模型。
- '195': term + COM matedata -> deploy metadata -> deploy view
- '90': 以1406为例检查知识图谱和blawx的语法
- '60': 整理闫岸家政能力讨论
  readme: |
    - read ../../draft/2024/09/20240924.01.md
    - read ../../draft/2024/09/20240925.03.md
    - read ../../draft/2024/10/20241011.03.md
    - read ../../draft/2024/10/20241013.03.md
    - read ../../draft/2024/10/20241014.02.md
    - read ../../draft/2024/10/20241015.03.md
    - read ../../draft/2024/10/20241016.04.md
    - read ../../draft/2024/10/20241017.02.md
    - read ../../draft/2024/10/20241019.01.md
    - read ../../draft/2024/10/20241020.03.md
    - read ../../draft/2024/10/20241021.01.md
    - read ../../draft/2024/10/20241022.03.md
    - read ../../draft/2024/10/20241023.01.md
    - read ../../draft/2024/10/20241024.02.md
    - read ../../draft/2024/10/20241025.03.md
    - read ../../draft/2024/10/20241026.03.md
    - read ../../draft/2024/10/20241027.03.md
    - read ../../draft/2024/10/20241028.03.md
    - read ../../draft/2024/10/20241029.03.md
    - read ../../draft/2024/10/20241030.03.md
    - read ../../draft/2024/10/20241031.02.md
    - read ../../draft/2024/11/20241101.03.md
    - read ../../draft/2024/11/20241104.01.md
    - read ../../draft/2024/11/20241105.03.md
    - read ../../draft/2024/11/20241106.03.md
    - read ../../draft/2024/11/20241107.03.md
    - read ../../draft/2024/11/20241108.01.md
    - read ../../draft/2024/11/20241110.01.md
    - read ../../draft/2024/11/20241111.03.md
    - read ../../draft/2024/11/20241112.01.md
    - read ../../draft/2024/11/20241114.04.md
    - read ../../draft/2024/11/20241115.01.md
    - read ../../draft/2024/11/20241117.05.md
- '90': term metadata的序号，分为显示序号和唯一id两种。
  readnme: |
    - 考虑upgradeby的实现。

deletetodoitem> after delete todo item:
- '90': 整理新版本term的manifest code
  readme: |
    - 为了显示而设计的term model，并不适合与代码绑定。
    - 设计前置protocol的定义和数据表现
      - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
      - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
      - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
    - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
      - 根据FSM、FPM、machine的设计决定term的粒度。
      - 设计每项知识的思考和案例积累锚点。
    - 随之修订manifest text。
    - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
    - read ../../draft/2024/09/20240905140000.md
    - read ../../draft/2024/09/20240906093000.md
    - read ../../draft/2024/09/20240908140000.md
    - read ../../draft/2024/09/20240909093000.md
    - read ../../draft/2024/09/20240911093000.md
    - read ../../draft/2024/09/20240912140000.md
    - read ../../draft/2024/09/20240913093000.md
    - read ../../draft/2024/09/20240918140000.md
    - read ../../draft/2025/20250114.02.md
    - read ../../draft/2025/20250115.02.md
    - read ../../draft/2025/20250116.02.md
- '90': 智在科技项目准备
  readme: |
    - read ../../draft/2025/20250115.01.md
- '90': 整理default模型
  readme: |
    - read ../../draft/2024/09/20240930.02.md
    - read ../../draft/2024/10/20241002.01.md
    - read ../../draft/2024/10/20241004.02.md
    - read ../../draft/2024/10/20241007.01.md
    - read ../../draft/2024/10/20241010.02.md
    - read ../../draft/2024/10/20241011.01.md
    - read ../../draft/2024/10/20241016.01.md
    - read ../../draft/2024/10/20241017.01.md
    - read ../../draft/2024/10/20241024.01.md
    - read ../../draft/2024/10/20241028.01.md
    - read ../../draft/2024/11/20241105.02.md
    - read ../../draft/2024/11/20241106.01.md
    - read ../../draft/2024/12/20241213.02.md
    - read ../../draft/2025/20250109.02.md
    - read ../../draft/2025/20250110.02.md
    - read ../../draft/2025/20250111.02.md
    - read ../../draft/2025/20250112.02.md
    - read ../../draft/2025/20250113.02.md
    - read ../../draft/2025/20250114.01.md
- '195': machines model
  readme: |
    - a sample instance of machine,FPM,FSM in manifest code
    - read D:\huangyg\git\draft\2024\07\20240723160000.md
    - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
    - 实现FPM+FSM
    - 从FSM、FPM中抽象出统一的mechine
    - 实现joint、split机制
    - 先用javascript的class实现
    - read ../../draft/2024/09/20240926.01.md
- '90': 整理新版本term的manifest text
  readme: |
    - 条款文本嵌入到machine模型。
    - 以修订和任免定义的层级嵌入到machine模型。
- '195': term + COM matedata -> deploy metadata -> deploy view
- '90': 以1406为例检查知识图谱和blawx的语法
- '60': 整理闫岸家政能力讨论
  readme: |
    - read ../../draft/2024/09/20240924.01.md
    - read ../../draft/2024/09/20240925.03.md
    - read ../../draft/2024/10/20241011.03.md
    - read ../../draft/2024/10/20241013.03.md
    - read ../../draft/2024/10/20241014.02.md
    - read ../../draft/2024/10/20241015.03.md
    - read ../../draft/2024/10/20241016.04.md
    - read ../../draft/2024/10/20241017.02.md
    - read ../../draft/2024/10/20241019.01.md
    - read ../../draft/2024/10/20241020.03.md
    - read ../../draft/2024/10/20241021.01.md
    - read ../../draft/2024/10/20241022.03.md
    - read ../../draft/2024/10/20241023.01.md
    - read ../../draft/2024/10/20241024.02.md
    - read ../../draft/2024/10/20241025.03.md
    - read ../../draft/2024/10/20241026.03.md
    - read ../../draft/2024/10/20241027.03.md
    - read ../../draft/2024/10/20241028.03.md
    - read ../../draft/2024/10/20241029.03.md
    - read ../../draft/2024/10/20241030.03.md
    - read ../../draft/2024/10/20241031.02.md
    - read ../../draft/2024/11/20241101.03.md
    - read ../../draft/2024/11/20241104.01.md
    - read ../../draft/2024/11/20241105.03.md
    - read ../../draft/2024/11/20241106.03.md
    - read ../../draft/2024/11/20241107.03.md
    - read ../../draft/2024/11/20241108.01.md
    - read ../../draft/2024/11/20241110.01.md
    - read ../../draft/2024/11/20241111.03.md
    - read ../../draft/2024/11/20241112.01.md
    - read ../../draft/2024/11/20241114.04.md
    - read ../../draft/2024/11/20241115.01.md
    - read ../../draft/2024/11/20241117.05.md
- '90': term metadata的序号，分为显示序号和唯一id两种。
  readnme: |
    - 考虑upgradeby的实现。

initdraft> readme: [
  'read ../../draft/2025/20250403.01.md',
  'read ../../draft/2025/20250418.02.md'
]
initdraft> item: read ../../draft/2025/20250403.01.md
initdraft> item: read ../../draft/2025/20250418.02.md
makedayobj> debug, time slice draft file name:../../draft/2025/20250505.02.md
## PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

### read ../../draft/2025/20250403.01.md

## PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

- https://www.elegislation.gov.hk/hk/cap622
    - 66. 公司类别 (b) 私人股份有限公司；
    - 66. 公司类别 (e) 无股本的担保有限公司。
    - 第2次分部 章程细则范本
- file:///D:/huangyg/git/PSMD/view/COM.1609.html
- D:\huangyg\git\com.origin\1609\cod.cn.有限责任公司.1.md
- 继续追加时间。

### read ../../draft/2025/20250418.02.md

## PSMD: [根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622]

- 先选股份有限公司，担保有限公司先不做。
- 其它部分，继续追加时间完善。


makedayobj> timeslice: 8 free 15 30 30 15 59
makedayobj> timeslice: 9 work 16 0 60 16 59
deletetodoitem> delete the todo item from ego: [redahomes]
deletetodoitem> before delete todo item:
- '60': redahomes
- '195': 新版基础模型
  readme: |
    - read ../../draft/2025/20250322.01.md
    - read ../../draft/2025/20250417.01.md
    - read ../../draft/2025/20250418.01.md
- '195': 新版ego, instance or model, any manifest
  readme: |
    - read ../../draft/2024/09/20240925.01.md
- '90': 微观与宏观衔接的几篇论文
  readme: >
    - https://journals.aps.org/pra/abstract/10.1103/PhysRevA.109.032205

    - https://arxiv.org/abs/2307.01874

    - in the quantum world even points of view are
    uncertain:https://www.quantamagazine.org/in-the-quantum-world-even-points-of-view-are-uncertain-20241122/

    - https://arxiv.org/abs/2402.10267
- '90': 新版实时手稿
  readme: |
    - read ../../draft/2025/20250226.02.md
    - read ../../draft/2025/20250322.02.md
    - read ../../draft/2025/20250330.01.md
- '90': 新版本任务、子任务的数据结构
  readme: |
    - read ../../draft/2024/10/20241001.01.md
    - read ../../draft/2024/10/20241003.01.md
    - read ../../draft/2024/10/20241004.04.md
    - read ../../draft/2024/10/20241005.01.md
    - read ../../draft/2024/10/20241007.03.md
    - read ../../draft/2024/10/20241011.04.md
    - read ../../draft/2025/20250215.01.md
- '90': 启用新字段存放前置任务的output，自动汇编写入新的draft文件。
  readme: |
    - read ../../draft/2025/20250202.01.md
- '60': eventemitter sample
  readme: |
    - event listener in module
    - auto load the event listener in main js file
      - load them in a function in module
      - load them in main js file use metadata
  bind:
    - '60': schema level 2 schema for code v1
      readme: >
        - schema means "task level and stage defined by schema"

        - schema manifest code: generate tasks by level and stage define by
        schema

        - schame level 2 schema for code: schema for develop "generate tasks by
        level and stage define by schema"
- '60': schema manifest law v0
  readme: |
    - read 2024.07.21 07:45 draft
  bind:
    - '90': schema level 2 schema for law v1
- '60': 整理task及其相互关系
  readme: |
    - readme 2024.07.20. 09:30 draft
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

deletetodoitem> after delete todo item:
- '195': 新版基础模型
  readme: |
    - read ../../draft/2025/20250322.01.md
    - read ../../draft/2025/20250417.01.md
    - read ../../draft/2025/20250418.01.md
- '195': 新版ego, instance or model, any manifest
  readme: |
    - read ../../draft/2024/09/20240925.01.md
- '90': 微观与宏观衔接的几篇论文
  readme: >
    - https://journals.aps.org/pra/abstract/10.1103/PhysRevA.109.032205

    - https://arxiv.org/abs/2307.01874

    - in the quantum world even points of view are
    uncertain:https://www.quantamagazine.org/in-the-quantum-world-even-points-of-view-are-uncertain-20241122/

    - https://arxiv.org/abs/2402.10267
- '90': 新版实时手稿
  readme: |
    - read ../../draft/2025/20250226.02.md
    - read ../../draft/2025/20250322.02.md
    - read ../../draft/2025/20250330.01.md
- '90': 新版本任务、子任务的数据结构
  readme: |
    - read ../../draft/2024/10/20241001.01.md
    - read ../../draft/2024/10/20241003.01.md
    - read ../../draft/2024/10/20241004.04.md
    - read ../../draft/2024/10/20241005.01.md
    - read ../../draft/2024/10/20241007.03.md
    - read ../../draft/2024/10/20241011.04.md
    - read ../../draft/2025/20250215.01.md
- '90': 启用新字段存放前置任务的output，自动汇编写入新的draft文件。
  readme: |
    - read ../../draft/2025/20250202.01.md
- '60': eventemitter sample
  readme: |
    - event listener in module
    - auto load the event listener in main js file
      - load them in a function in module
      - load them in main js file use metadata
  bind:
    - '60': schema level 2 schema for code v1
      readme: >
        - schema means "task level and stage defined by schema"

        - schema manifest code: generate tasks by level and stage define by
        schema

        - schame level 2 schema for code: schema for develop "generate tasks by
        level and stage define by schema"
- '60': schema manifest law v0
  readme: |
    - read 2024.07.21 07:45 draft
  bind:
    - '90': schema level 2 schema for law v1
- '60': 整理task及其相互关系
  readme: |
    - readme 2024.07.20. 09:30 draft
- '60': 用js代码完成日小结后的git操作。
  readme: |
    - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
    - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
- '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
- '60': 时间改为ISO8601格式
  readme: |
    - season metadata
    - day metada
    - draft文件名

makedayobj> debug, time slice draft file name:../../draft/2025/20250505.03.md
## ego: [redahomes]


makedayobj> timeslice: 10 food 17 0 120 18 59
makedayobj> timeslice: 11 check 19 0 60 19 59
dayfilename> diff: -1
dumpdayobj> debug, day object file: ../data/day/2025/d.20250505.yaml
date: '20250505'
mode: 2
plan: 2a
time:
  - begin: '20250505035800'
    amount: 15
    type: free
    name: 休整
  - begin: '20250505041300'
    amount: 60
    type: prepare
    name: 备餐、运动
  - begin: '20250505051300'
    amount: 45
    type: food
    name: 早餐
  - begin: '20250505055800'
    amount: 45
    type: discuss
    name: 会议、自习
  - begin: '20250505064300'
    amount: 61
    type: free
    name: 休整
  - begin: '20250505074500'
    amount: 195
    type: work
    name: 工作
    subject: PSMD
    title: 子1609:基于公司、合同
    readme: |
      - read ../../draft/2025/20250125.02.md
      - read ../../draft/2025/20250416.01.md
      - read ../../draft/2025/20250427.01.md
      - read ../../draft/2025/20250505.02.md
    output: ../../draft/2025/20250505.01.md
    namelink: http://simp.ly/p/3GXNTh
  - begin: '20250505110000'
    amount: 180
    type: food
    name: 备餐、午餐午休
  - begin: '20250505140000'
    amount: 90
    type: work
    name: 工作
    subject: PSMD
    title: 根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
    readme: |
      - read ../../draft/2025/20250403.01.md
      - read ../../draft/2025/20250418.02.md
    output: ../../draft/2025/20250505.02.md
    namelink: http://simp.ly/p/lsBYG9
  - begin: '20250505153000'
    amount: 30
    type: free
    name: 休整
  - begin: '20250505160000'
    amount: 60
    type: work
    name: 工作
    subject: ego
    title: redahomes
    output: ../../draft/2025/20250505.03.md
    namelink: http://simp.ly/p/MpcbHD
  - begin: '20250505170000'
    amount: 120
    type: food
    name: 晚餐
  - begin: '20250505190000'
    amount: 60
    type: check
    name: 讨论、整理提交

dumpseasonobj> seasonobj.time:
mode:
  '1': 41
  '2': 20
plan:
  1a: 12
  1b: 12
  1c: 8
  1d: 8
  1e: 1
  1f: 0
  2a: 12
  2b: 5
  2c: 3
timeslice:
  '30': 80
  '60': 73
  '90': 49
  '195': 12
timesum: 13530
alloc:
  PSMD: 4000
  ego: 2530
  infra: 2000
  xuemen: 1000
  raw: 1000
  learn: 2000
  js: 1000
sold:
  ego: 1215
  PSMD: 1080
  raw: 90
  js: 120
  learn: 763
  xuemen: 269
  infra: 360

makedayobj> debug, seasonobj.todo:
PSMD:
  - '90': 整理新版本term的manifest code
    readme: |
      - 为了显示而设计的term model，并不适合与代码绑定。
      - 设计前置protocol的定义和数据表现
        - 自身的行为及其原因，可以自述的范围：标出理性与非理性（下意识）行为的边界。
        - 对待自身与其他方采取相同标准的范围：标出公平与（无法自控、无法意识到的）歧视的边界。
        - 上述范围与边界对合作行为有明显影响，是protocol可以要求参与者公示的。为了展示自身的范围和边界，最佳方式就是展示前置protocol和历史记录，今后发现更好的展示方式（前置protocol无法表达的）可以随之修订。
      - 逐个条款签署和整份protocol签署的关系，是否还需要嵌套term。
        - 根据FSM、FPM、machine的设计决定term的粒度。
        - 设计每项知识的思考和案例积累锚点。
      - 随之修订manifest text。
      - 根据ego中joint、split两个原生操作的接口，设计protocol这一侧的接口。
      - read ../../draft/2024/09/20240905140000.md
      - read ../../draft/2024/09/20240906093000.md
      - read ../../draft/2024/09/20240908140000.md
      - read ../../draft/2024/09/20240909093000.md
      - read ../../draft/2024/09/20240911093000.md
      - read ../../draft/2024/09/20240912140000.md
      - read ../../draft/2024/09/20240913093000.md
      - read ../../draft/2024/09/20240918140000.md
      - read ../../draft/2025/20250114.02.md
      - read ../../draft/2025/20250115.02.md
      - read ../../draft/2025/20250116.02.md
  - '90': 智在科技项目准备
    readme: |
      - read ../../draft/2025/20250115.01.md
  - '90': 整理default模型
    readme: |
      - read ../../draft/2024/09/20240930.02.md
      - read ../../draft/2024/10/20241002.01.md
      - read ../../draft/2024/10/20241004.02.md
      - read ../../draft/2024/10/20241007.01.md
      - read ../../draft/2024/10/20241010.02.md
      - read ../../draft/2024/10/20241011.01.md
      - read ../../draft/2024/10/20241016.01.md
      - read ../../draft/2024/10/20241017.01.md
      - read ../../draft/2024/10/20241024.01.md
      - read ../../draft/2024/10/20241028.01.md
      - read ../../draft/2024/11/20241105.02.md
      - read ../../draft/2024/11/20241106.01.md
      - read ../../draft/2024/12/20241213.02.md
      - read ../../draft/2025/20250109.02.md
      - read ../../draft/2025/20250110.02.md
      - read ../../draft/2025/20250111.02.md
      - read ../../draft/2025/20250112.02.md
      - read ../../draft/2025/20250113.02.md
      - read ../../draft/2025/20250114.01.md
  - '195': machines model
    readme: |
      - a sample instance of machine,FPM,FSM in manifest code
      - read D:\huangyg\git\draft\2024\07\20240723160000.md
      - read 2024.07.24. 09:30, 2024.07.25. 09:30, 2024.07.26. 09:30 draft
      - 实现FPM+FSM
      - 从FSM、FPM中抽象出统一的mechine
      - 实现joint、split机制
      - 先用javascript的class实现
      - read ../../draft/2024/09/20240926.01.md
  - '90': 整理新版本term的manifest text
    readme: |
      - 条款文本嵌入到machine模型。
      - 以修订和任免定义的层级嵌入到machine模型。
  - '195': term + COM matedata -> deploy metadata -> deploy view
  - '90': 以1406为例检查知识图谱和blawx的语法
  - '60': 整理闫岸家政能力讨论
    readme: |
      - read ../../draft/2024/09/20240924.01.md
      - read ../../draft/2024/09/20240925.03.md
      - read ../../draft/2024/10/20241011.03.md
      - read ../../draft/2024/10/20241013.03.md
      - read ../../draft/2024/10/20241014.02.md
      - read ../../draft/2024/10/20241015.03.md
      - read ../../draft/2024/10/20241016.04.md
      - read ../../draft/2024/10/20241017.02.md
      - read ../../draft/2024/10/20241019.01.md
      - read ../../draft/2024/10/20241020.03.md
      - read ../../draft/2024/10/20241021.01.md
      - read ../../draft/2024/10/20241022.03.md
      - read ../../draft/2024/10/20241023.01.md
      - read ../../draft/2024/10/20241024.02.md
      - read ../../draft/2024/10/20241025.03.md
      - read ../../draft/2024/10/20241026.03.md
      - read ../../draft/2024/10/20241027.03.md
      - read ../../draft/2024/10/20241028.03.md
      - read ../../draft/2024/10/20241029.03.md
      - read ../../draft/2024/10/20241030.03.md
      - read ../../draft/2024/10/20241031.02.md
      - read ../../draft/2024/11/20241101.03.md
      - read ../../draft/2024/11/20241104.01.md
      - read ../../draft/2024/11/20241105.03.md
      - read ../../draft/2024/11/20241106.03.md
      - read ../../draft/2024/11/20241107.03.md
      - read ../../draft/2024/11/20241108.01.md
      - read ../../draft/2024/11/20241110.01.md
      - read ../../draft/2024/11/20241111.03.md
      - read ../../draft/2024/11/20241112.01.md
      - read ../../draft/2024/11/20241114.04.md
      - read ../../draft/2024/11/20241115.01.md
      - read ../../draft/2024/11/20241117.05.md
  - '90': term metadata的序号，分为显示序号和唯一id两种。
    readnme: |
      - 考虑upgradeby的实现。
ego:
  - '195': 新版基础模型
    readme: |
      - read ../../draft/2025/20250322.01.md
      - read ../../draft/2025/20250417.01.md
      - read ../../draft/2025/20250418.01.md
  - '195': 新版ego, instance or model, any manifest
    readme: |
      - read ../../draft/2024/09/20240925.01.md
  - '90': 微观与宏观衔接的几篇论文
    readme: |
      - https://journals.aps.org/pra/abstract/10.1103/PhysRevA.109.032205
      - https://arxiv.org/abs/2307.01874
      - in the quantum world even points of view are uncertain:https://www.quantamagazine.org/in-the-quantum-world-even-points-of-view-are-uncertain-20241122/
      - https://arxiv.org/abs/2402.10267
  - '90': 新版实时手稿
    readme: |
      - read ../../draft/2025/20250226.02.md
      - read ../../draft/2025/20250322.02.md
      - read ../../draft/2025/20250330.01.md
  - '90': 新版本任务、子任务的数据结构
    readme: |
      - read ../../draft/2024/10/20241001.01.md
      - read ../../draft/2024/10/20241003.01.md
      - read ../../draft/2024/10/20241004.04.md
      - read ../../draft/2024/10/20241005.01.md
      - read ../../draft/2024/10/20241007.03.md
      - read ../../draft/2024/10/20241011.04.md
      - read ../../draft/2025/20250215.01.md
  - '90': 启用新字段存放前置任务的output，自动汇编写入新的draft文件。
    readme: |
      - read ../../draft/2025/20250202.01.md
  - '60': eventemitter sample
    readme: |
      - event listener in module
      - auto load the event listener in main js file
        - load them in a function in module
        - load them in main js file use metadata
    bind:
      - '60': schema level 2 schema for code v1
        readme: |
          - schema means "task level and stage defined by schema"
          - schema manifest code: generate tasks by level and stage define by schema
          - schame level 2 schema for code: schema for develop "generate tasks by level and stage define by schema"
  - '60': schema manifest law v0
    readme: |
      - read 2024.07.21 07:45 draft
    bind:
      - '90': schema level 2 schema for law v1
  - '60': 整理task及其相互关系
    readme: |
      - readme 2024.07.20. 09:30 draft
  - '60': 用js代码完成日小结后的git操作。
    readme: |
      - 参考：D:\huangyg\git\draft\2024\04\20240430140000.md
      - 在各task metadata中给出git库的路径，每天根据实际任务去操作。
  - '60': 重新设计ego.js的命令行参数，合并函数，整理代码。
  - '60': 时间改为ISO8601格式
    readme: |
      - season metadata
      - day metada
      - draft文件名
infra:
  - '90': 范例--利用js模块组合实现合同条款的组合。
    readme: |
      - read ../../draft/2024/10/20241004.05.md
      - read ../../draft/2024/11/20241118.03.md
      - read ../../draft/2024/11/20241119.02.md
      - read ../../draft/2024/11/20241120.03.md
      - read ../../draft/2024/11/20241121.03.md
      - read ../../draft/2024/11/20241122.03.md
      - read ../../draft/2024/11/20241123.03.md
      - read ../../draft/2024/11/20241124.03.md
      - read ../../draft/2024/11/20241125.03.md
      - read ../../draft/2024/11/20241126.01.md
      - read ../../draft/2024/11/20241127.02.md
      - read ../../draft/2024/11/20241128.01.md
      - read ../../draft/2024/11/20241129.01.md
      - read ../../draft/2024/11/20241130.01.md
      - read ../../draft/2024/12/20241201.04.md
      - read ../../draft/2024/12/20241202.03.md
      - read ../../draft/2024/12/20241203.01.md
      - read ../../draft/2024/12/20241204.03.md
      - read ../../draft/2024/12/20241206.01.md
      - read ../../draft/2024/12/20241211.03.md
      - read ../../draft/2024/12/20241212.03.md
      - read ../../draft/2025/20250503.03.md
      - read ../../draft/2025/20250505.03.md
  - '90': schema立项。
    readme: |
      - read ../../draft/2024/09/20240919140000.md
      - read ../../draft/2025/20250110.01.md
      - read ../../draft/2025/20250112.01.md
      - read ../../draft/2025/20250116.01.md
      - read ../../draft/2025/20250408.01.md
  - '60': 动态菜单设计。
    readme: |
      - read ../../draft/2024/09/20240921.02.md
      - read ../../draft/2024/09/20240922.02.md
      - read ../../draft/2024/09/20240923.03.md
      - read ../../draft/2024/09/20240924.03.md
      - read ../../draft/2024/09/20240930.03.md
      - read ../../draft/2024/10/20241002.02.md
      - read ../../draft/2024/10/20241003.03.md
      - read ../../draft/2024/10/20241004.01.md
learn:
  - '90': 量子力学的各种诠释:基于门电路、event机制的思想实验
    readme: |
      - read ../../draft/2025/20250505.01.md
  - '30': 狄拉克算子
  - '30': 重新规划vscodium workspace
  - '90': 热更新
  - '90': 腾讯文档sdk
    readme: |
      - https://docs.qq.com/open/developers
      - https://docs.qq.com/open/document/websdk/
      - https://docs.qq.com/open/document/app/openapi/v2/file/files/permission/set.html
        - https://docs.qq.com/open/document/app/openapi/v2/file/files/permission/common.html
  - '90': 飞书 nodejs sdk
    readme: |
      - https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/preparation-before-development
  - '90': webcontainers
    readme: |
      - https://webcontainers.io/
      - https://stackblitz.com/
      - https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser
    bind:
      - '60': 基于dat,hypercore,hyperswarm等模块的浏览器动态页面范例。
        readme: |
          - read ../../draft/2025/20250326.01.md
  - '60': oData simple
    readme: |
      - https://services.odata.org/
      - http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html
  - '60': instantdb
    readme: |
      - https://www.instantdb.com
      - https://github.com/instantdb/instant
  - '60': BEP 46
    readme: |
      - https://www.npmjs.com/package/mutable-webtorrent
      - https://github.com/lmatteis/dmt
      - https://webtorrent.io/docs
  - '60': xLog
    readme: |
      - https://xlog.app/
      - https://www.xsync.app/
      - https://xchar.app/
      - https://rss3.io/
      - https://crossbell.js.org/
  - '60': markmap
    readme: |
      - https://markmap.js.org/
      - file:///C:/Users/hyg/Downloads/markmap.html
  - '60': MapLibre sample
    readme: |
      - https://maplibre.org/
      - https://maplibre.org/maplibre-gl-js/docs/
      - https://github.com/maplibre/maplibre-gl-js
  - '60': PSMD term in helia dag-json https://www.npmjs.com/package/@helia/dag-json
  - '60': learn Blogging on the Decentralized Web https://proto.school/blog
  - '60': 在nodejs读写OFD文件。
    readme: |
      - https://github.com/ofdrw/ofdrw
      - https://blog.csdn.net/lishangke/article/details/135245444
      - https://www.npmjs.com/package/ofd.js/v/0.8.0
  - '60': https://proto.school/basics  IPFS,P2P Data Links with Content Addressing
  - '60': learn web-llm
  - '60': 开发YARRRML范例
  - '90': 把PSMD的data、src部分升级到rdf，如果升级成功则作为范例。
  - '60': Windows PowerShell
  - '195': rust入门
    bind:
      - '195': 开发reenet Contracts sample
        readme: |
          - https://docs.freenet.org/components/contracts.html
          - https://docs.freenet.org/introduction.html
          - https://docs.freenet.org/tutorial.html
  - '60': 继续学习promise api
    readme: |
      - https://zh.javascript.info/promise-api
js:
  - '60': learn factory, constructor, prototype
    readme: |
      - https://juejin.cn/post/6844903653774458888
      - https://segmentfault.com/a/1190000019054466
      - https://www.javascripttutorial.net/javascript-factory-functions/
      -https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes
    bind:
      - '30': 新版raw.js的子命令-营养成分详情
        readme: |
          - 可选多种营养成分
          - 考虑不同UI
          - 使用新的模块化设计
          - 使用新的data model
      - '30': 新版raw.js的子命令-营养成分排序
  - '90': learn graphql
    readme: |
      - https://www.graphql-js.org/docs/
      - https://github.com/graphql/graphql-js
      - https://the-guild.dev/graphql/tools
      - https://github.com/ardatan/graphql-tools
      - https://aosabook.org/en/500L/dagoba-an-in-memory-graph-database.html
  - '90': implement a programming language in JavaScript
    readme: |
      - https://lisperator.net/pltut/
      - https://github.com/keyz/the-super-tiny-interpreter
      - https://github.com/jamiebuilds/the-super-tiny-compiler
  - '60': 学习 nodejs test框架
    readme: |
      - https://github.com/Vanessa219/vditor
          - https://nodejs.cn/api/test.html
      - https://github.com/markedjs/marked
      - https://bun.sh/
      bind:
        - '90': 实际编写自己的测试范例
        - '60': lint
          readme: |
            - https://www.javascriptcn.com/post/675439161b963fe9cc4d25ce
            - https://www.jslint.com/
            - https://jshint.com/
            - https://zh-hans.eslint.org/docs/latest/use/getting-started
  - '60': 向外提供js文件的范例，为代码层级互通做准备
  - '60': giiter.im bot sample
    readme: |
      - https://github.com/matrix-org/matrix-js-sdk
      - http://matrix-org.github.io/matrix-js-sdk/index.html
  - '60': 学习'Electron'，创作一个范例。
  - '60': 用代码中的对象或类，产生数据库创建SQL脚本、ER图（mermaid）
raw:
  - '30': 脚脉
  - '60': 新版food plan
  - '60': 熟悉内脏之间的关系
    readme: |
      - read ../../draft/2024/09/20240917143000.md
  - '60': 设计二季度时间表
    readme: |
      - 两片休整时间联合调节的算法需要整理。
      - 餐谱和饱腹感时间需要综合算计。
      - read ../../draft/2024/09/20240904143000.md
      - read ../../draft/2024/09/20240907140000.md
  - '60': 新版营养成分详情，允许多种营养成分。
    bind:
      - '90': 整理代码，理顺food.js几个成员函数之间的调用关系
        readme: |
          - read ../../draft/2024/09/20240907143000.md
        bind:
          - '60': 新版本food预算决算
      - '60': 新版食材排序，包括升序、降序、特定值距离、多种营养成分特定值组合距离。
xuemen:
  - '195': kernel模型升级
    readme: |
      - read ../../draft/2024/11/20241120.01.md
  - '195': 重新设计S2状态下的学门基本管理制度
  - '60': term.e6f0caec -> xuemen COD metadata-S2状态下的部门模型

✔ init draft (24.827ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 29.5031
```