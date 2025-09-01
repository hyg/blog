# 2025.09.01.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版1(1e)。

<a id="index"></a>
- 16:00~16:59	xuemen: [根据最新政策文件，考虑AER、AVR文件升级。](#20250901160000)
- 19:00~19:59	check: [零散笔记](#20250901190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9076 | 4454 | 9885 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 150 | 850 | 600 |
| raw | 1000 | 130 | 870 | 330 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 496 | 504 | 1770 |

---
waiting list:


- 30分钟时间片：
  - js的第1号事项：nextcloud
  - ego的第2号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control

- 60分钟时间片：
  - raw的第1号事项：熟悉内脏之间的关系
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - learn的第1号事项：CometAPI
  - raw的第2号事项：新版营养成分详情，允许多种营养成分。

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - ego的第1号事项：同步新日志到webDAV。使用新的共享外链。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.01.[根据最新政策文件，考虑AER、AVR文件升级。]任务&body=日期: 2025.09.01.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250901.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250901160000"></a>
## 16:00 ~ 16:59
## xuemen: [根据最新政策文件，考虑AER、AVR文件升级。]


### 自研财会软件数据结构设计
#### **一、SQL 数据库表结构**  
以下是基于 MySQL 的表设计，涵盖会计科目、记账凭证、总账、报表等核心模块：  

```sql
-- 1. 会计科目表（存储科目基本信息及层级关系）
CREATE TABLE `tb_account` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `code` VARCHAR(20) NOT NULL COMMENT '科目编码（如1001）',
  `name` VARCHAR(100) NOT NULL COMMENT '科目名称（如库存现金）',
  `parent_code` VARCHAR(20) DEFAULT NULL COMMENT '父级科目编码（如100）',
  `level` TINYINT NOT NULL DEFAULT 1 COMMENT '科目级别（1=一级，2=二级）',
  `type` ENUM('资产','负债','所有者权益','成本','损益') NOT NULL COMMENT '科目类型',
  `is_leaf` BOOLEAN NOT NULL DEFAULT TRUE COMMENT '是否末级科目（true=无下级）',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会计科目';

-- 2. 记账凭证主表（存储凭证基础信息）
CREATE TABLE `tb_voucher` (
  `voucher_id` VARCHAR(20) NOT NULL COMMENT '凭证编号（如V20250519001）',
  `voucher_date` DATE NOT NULL COMMENT '凭证日期',
  `summary` VARCHAR(200) NOT NULL COMMENT '摘要',
  `attachment_count` INT NOT NULL DEFAULT 0 COMMENT '附件数量',
  `creator` VARCHAR(50) NOT NULL COMMENT '制单人',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`voucher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='记账凭证主表';

-- 3. 记账凭证分录表（存储凭证的具体交易明细）
CREATE TABLE `tb_voucher_entry` (
  `entry_id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '分录ID',
  `voucher_id` VARCHAR(20) NOT NULL COMMENT '凭证编号',
  `account_code` VARCHAR(20) NOT NULL COMMENT '科目编码',
  `debit_amount` DECIMAL(18,2) NOT NULL DEFAULT 0.00 COMMENT '借方金额',
  `credit_amount` DECIMAL(18,2) NOT NULL DEFAULT 0.00 COMMENT '贷方金额',
  `summary` VARCHAR(200) COMMENT '分录摘要',
  `direction` ENUM('借','贷') GENERATED ALWAYS AS (CASE WHEN debit_amount>0 THEN '借' ELSE '贷' END) STORED COMMENT '借贷方向',
  PRIMARY KEY (`entry_id`),
  FOREIGN KEY (`voucher_id`) REFERENCES `tb_voucher`(`voucher_id`),
  FOREIGN KEY (`account_code`) REFERENCES `tb_account`(`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='记账凭证分录';

-- 4. 总账表（按科目+期间汇总发生额与余额）
CREATE TABLE `tb_general_ledger` (
  `account_code` VARCHAR(20) NOT NULL COMMENT '科目编码',
  `period_start_date` DATE NOT NULL COMMENT '期间开始日期（如2025-05-01）',
  `period_end_date` DATE NOT NULL COMMENT '期间结束日期（如2025-05-31）',
  `opening_balance` DECIMAL(18,2) NOT NULL DEFAULT 0.00 COMMENT '期初余额',
  `debit_total` DECIMAL(18,2) NOT NULL DEFAULT 0.00 COMMENT '借方合计',
  `credit_total` DECIMAL(18,2) NOT NULL DEFAULT 0.00 COMMENT '贷方合计',
  `closing_balance` DECIMAL(18,2) NOT NULL DEFAULT 0.00 COMMENT '期末余额',
  PRIMARY KEY (`account_code`, `period_start_date`, `period_end_date`),
  FOREIGN KEY (`account_code`) REFERENCES `tb_account`(`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='总账';

-- 5. 报表模板表（存储报表结构与 XBRL 标签）
CREATE TABLE `tb_report_template` (
  `report_id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '模板ID',
  `report_name` VARCHAR(100) NOT NULL COMMENT '报表名称（如资产负债表）',
  `template_type` ENUM('XBRL','Excel','自定义') NOT NULL DEFAULT 'XBRL' COMMENT '模板类型',
  `template_content` TEXT NOT NULL COMMENT '模板内容（XBRL 标签或 JSON 结构）',
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='报表模板';

-- 6. 报表数据表（存储各期间报表的实际数据）
CREATE TABLE `tb_report_data` (
  `report_id` INT UNSIGNED NOT NULL COMMENT '报表ID',
  `period` VARCHAR(10) NOT NULL COMMENT '期间（如202505）',
  `data_json` JSON NOT NULL COMMENT '报表数据（JSON 格式）',
  PRIMARY KEY (`report_id`, `period`),
  FOREIGN KEY (`report_id`) REFERENCES `tb_report_template`(`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='报表数据';
```


#### **二、YAML 数据结构设计**  
以 YAML 格式描述实体关系与字段属性，便于前后端交互与配置管理：  

```yaml
# 财会软件数据结构设计 - YAML 版本

## 1. 会计科目（Account）
- 实体名称: Account
- 字段定义:
  - id: 整型，主键，自增
  - code: 字符串，唯一，科目编码（如 "1001"）
  - name: 字符串，科目名称（如 "库存现金"）
  - parent_code: 字符串，父级科目编码（如 "100" 表示 "货币资金"）
  - level: 整型，科目级别（1=一级，2=二级）
  - type: 枚举，科目类型（资产/负债/所有者权益/成本/损益）
  - is_leaf: 布尔值，是否末级科目（true=无下级）

## 2. 记账凭证主表（Voucher）
- 实体名称: Voucher
- 字段定义:
  - voucher_id: 字符串，主键，凭证编号（如 "V20250519001"）
  - voucher_date: 日期，凭证日期
  - summary: 字符串，摘要
  - attachment_count: 整型，附件数量
  - creator: 字符串，制单人
  - create_time: 日期时间，创建时间

## 3. 记账凭证分录（VoucherEntry）
- 实体名称: VoucherEntry
- 字段定义:
  - entry_id: 整型，主键，自增
  - voucher_id: 字符串，外键，关联 Voucher.voucher_id
  - account_code: 字符串，外键，关联 Account.code
  - debit_amount: 浮点型，借方金额
  - credit_amount: 浮点型，贷方金额
  - summary: 字符串，分录摘要
  - direction: 枚举，借贷方向（借/贷，由 debit_amount 和 credit_amount 自动生成）

## 4. 总账（GeneralLedger）
- 实体名称: GeneralLedger
- 字段定义:
  - account_code: 字符串，外键，关联 Account.code
  - period_start_date: 日期，期间开始日期（如 "2025-05-01"）
  - period_end_date: 日期，期间结束日期（如 "2025-05-31"）
  - opening_balance: 浮点型，期初余额
  - debit_total: 浮点型，借方合计
  - credit_total: 浮点型，贷方合计
  - closing_balance: 浮点型，期末余额
- 主键: (account_code, period_start_date, period_end_date)

## 5. 报表模板（ReportTemplate）
- 实体名称: ReportTemplate
- 字段定义:
  - report_id: 整型，主键，自增
  - report_name: 字符串，报表名称（如 "资产负债表"）
  - template_type: 枚举，模板类型（XBRL/Excel/自定义）
  - template_content: 文本，模板内容（XBRL 标签或 JSON 结构）

## 6. 报表数据（ReportData）
- 实体名称: ReportData
- 字段定义:
  - report_id: 整型，外键，关联 ReportTemplate.report_id
  - period: 字符串，期间（如 "202505"）
  - data_json: JSON，报表数据
- 主键: (report_id, period)
```


### 设计说明  
1. **核心逻辑**：  
   - 凭证分录通过 `debit_amount` 和 `credit_amount` 区分借贷方向，自动生成 `direction` 字段，简化业务逻辑。  
   - 总账按科目+期间聚合分录数据，支持快速查询余额与发生额。  
   - 报表模板采用 XBRL 标准（符合参考资料中的 XBRL 规范），便于财务数据的标准化报送。  

2. **扩展性**：  
   - 科目表支持多级嵌套（通过 `parent_code` 和 `level` 实现），适应企业复杂的科目体系。  
   - 报表模板可灵活切换类型（XBRL/Excel），满足不同场景需求。  

3. **性能优化**：  
   - 总账表通过复合主键加速区间查询，适合月度/季度报表生成。  
   - 分录表与凭证表分离，避免大表膨胀，提升插入效率。  

此设计兼顾了财会业务的规范性（如借贷平衡、科目层级）与技术实现的灵活性，可直接用于自研系统的数据库搭建与接口定义。



在自研财会软件的数据结构中，**分录的借贷双方科目均记载于「记账凭证分录表」（`tb_voucher_entry`）的 `account_code` 字段**中。具体逻辑如下：  


### 1. 表结构关键字段解析  
在 `tb_voucher_entry` 表中：  
- `account_code`：记录该分录行的**科目编码**（如“1001”代表“库存现金”、“6001”代表“主营业务收入”）；  
- `debit_amount`：借方金额（若该科目为借方，则此字段非零；若为贷方，则为0）；  
- `credit_amount`：贷方金额（若该科目为贷方，则此字段非零；若为借方，则为0）。  


### 2. 分录的存储方式示例  
假设一笔凭证的分录为：  
> 借：银行存款 1000元  
> 贷：主营业务收入 1000元  

则在 `tb_voucher_entry` 表中会存储**两行记录**：  
| `voucher_id` | `account_code` | `debit_amount` | `credit_amount` |  
|--------------|----------------|----------------|-----------------|  
| V20250519001 | 100201         | 1000           | 0               | （借：银行存款）|  
| V20250519001 | 6001           | 0              | 1000            | （贷：主营业务收入）|  


### 3. 核心逻辑总结  
- 每笔分录的**所有相关科目**（无论借方还是贷方）均通过 `tb_voucher_entry` 表的 `account_code` 字段记录；  
- 借贷方向通过 `debit_amount` 和 `credit_amount` 的非零值区分：  
  - 若 `debit_amount > 0`，则该科目为**借方科目**；  
  - 若 `credit_amount > 0`，则该科目为**贷方科目**。  


这种设计既符合会计分录“一借一贷或多借多贷”的业务规则，又通过表结构清晰分离了科目信息和借贷金额，便于后续总账核算、报表生成等操作。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.01.[无名任务]任务&body=日期: 2025.09.01.%0D%0A序号: 7%0D%0A手稿:../../draft/2025/20250901.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250901190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

- qwencode的mcp server，使用官方sdk试用一下。
	- d:\huangyg\git\sample\MCP\PSMD\hyg
```
  "mcpServers": {
    "PSMD.MCP.hyg": {
      "command": "node",
      "args": [
        "index.js"
      ],
      "cwd": "d:/huangyg/git/sample/MCP/PSMD/hyg"
    }
  }
```
- 继续测试MCP server的Prompts、Completions等功能。
