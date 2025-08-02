# 2025.08.02.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~19:09	learn: [XBRL信息提取](#20250802140000)
- 22:30~22:59	ego: [AI特殊监管区设想](#20250802223000)
- 19:00~19:59	check: [零散笔记](#20250802190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 7340 | 6190 | 8820 |
| PSMD | 4000 | 1610 | 2390 | 1230 |
| ego | 2530 | 970 | 1560 | 1365 |
| infra | 2000 | 425 | 1575 | 405 |
| xuemen | 1000 | 90 | 910 | 600 |
| raw | 1000 | 70 | 930 | 390 |
| learn | 2000 | 3805 | -1805 | 3120 |
| js | 1000 | 370 | 630 | 1710 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：AI特殊监管区设想
  - js的第1号事项：a2a-js
  - js的第2号事项：graphviz
  - js的第3号事项：nodejs中调用jar

- 60分钟时间片：
  - PSMD的第1号事项：PSMD agent AI的内部角色和功能
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。

- 90分钟时间片：
  - learn的第1号事项：业务规则引擎
  - PSMD的第2号事项：筹备会议 by role+prompt
  - ego的第2号事项：整理task及其相互关系
  - infra的第3号事项：schema立项。

- 195分钟时间片：
  - xuemen的第2号事项：kernel模型升级
  - PSMD的第3号事项：machines model
  - infra的第4号事项：Rete/Phreak算法的自主实现
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.02.[XBRL信息提取]任务&body=日期: 2025.08.02.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250802.a.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250802140000"></a>
## 14:00 ~ 19:09
## learn: [XBRL信息提取]

- 电子凭证数据标准.基础工具包（推广应用版V1.0）.zip 下载到“装机”。
- https://maven.apache.org/install.html
    - 下载二进制压缩包，解压到 3-tool ，bin文件夹加到PATH环境变量中
    - mvn -v 
- java也下载，某个openjdk就行。
    - 增加环境变量JAVA_HOME
    - %JAVA_HOME%\bin 或者 C:\Program Files\Java\jdk-11.0.2\bin\ 加到PATH环境变量

### doubao

- jar中没有main()
```
D:\huangyg\git\js.sample\xbrl>java -jar C:\Users\hyg\Downloads\1.基础工具包（推广应用版V1.0）\xbrl-json-1.0.jar extractXBRLFromOFD d:\huangyg\git\js.sample\xbrl\250F981968D9.OBS3-2025-45Khb9zEQZe1Z7Mcu02o8A_69afecdfa01f4f4e914583dc83363c8c.ofd
C:\Users\hyg\Downloads\1.基础工具包（推广应用版V1.0）\xbrl-json-1.0.jar中没有主清单属性
```
- 下载并安装 Visual Studio Community 2022（或更高版本）。
    - https://visualstudio.microsoft.com/zh-hans/downloads/
    - 安装时在 “工作负载” 中勾选：
        - 桌面开发 with C++（核心组件，包含 MSVC 编译器、Windows SDK 等）
        - 可选：勾选 “使用 C++ 的桌面开发” 下的 “MSVC v143 生成工具”（确保与 Node.js 版本兼容）
- 管理员权限命令行：npm install java
- 工具包依赖的第三方类库（com.alibaba.fastjson.JSONObject）缺失
    - https://mvnrepository.com/artifact/com.alibaba/fastjson
    - https://mvnrepository.com/artifact/com.alibaba/fastjson/1.2.83
    - java.classpath.push('fastjson-1.2.83.jar');
    - 或者： mvn dependency:get -Dartifact=com.alibaba:fastjson:1.2.83

### GLM

- Invoke.java
    - javac -encoding UTF-8 -cp "xbrl-json-1.0.jar;fastjson-1.2.83.jar;commons-compress-1.21.jar;pdfbox-2.0.24.jar;commons-logging-1.2.jar" Invoker.java
    - java -cp "xbrl-json-1.0.jar;fastjson-1.2.83.jar;commons-compress-1.21.jar;pdfbox-2.0.24.jar;commons-logging-1.2.jar;." Invoker debugVoucherFileInfo
- z.main.js
- mvn dependency:get -Dartifact=org.apache.commons:commons-compress:1.21
    - 将下载的 commons-compress-1.21.jar从 C:\Users\hyg\.m2\repository\org\apache\commons\commons-compress\1.21\ 放到项目目录中
- mvn dependency:get -Dartifact=org.apache.pdfbox:pdfbox:2.0.24
    - 将下载的 pdfbox-2.0.24.jar 从 C:\Users\hyg\.m2\repository\org\apache\pdfbox\pdfbox\2.0.24\ 放到项目目录中.
- mvn dependency:get -Dartifact=commons-logging:commons-logging:1.2
    - 将下载的 commons-logging-1.2.jar 从 C:\Users\hyg\.m2\repository\commons-logging\commons-logging\1.2\ 放到项目目录中

- 很有可能银行就没有把数据按标准封装到ofd文件中。先不再投入时间。

```
D:\huangyg\git\js.sample\xbrl>node z.main
==========================================
          XBRL 工具包测试开始
==========================================

=== 检查文件是否存在 ===
OFD 文件: 250F981968D9.ofd - 存在
PDF 文件: 250F981968D9.pdf - 存在
JSON 文件: inv_ord_issuer.json - 存在
BKRS JSON 文件: bkrs.json - 存在
BKRS XML 文件: bkrs.xml - 存在

==========================================
          步骤 1: OFD 转 XBRL
==========================================
开始提取 OFD 文件...

=== 开始 OFD 提取 ===
检查输入文件: D:\huangyg\git\js.sample\xbrl\250F981968D9.ofd
输入文件存在，大小: 104402 字节
输出文件路径: extracted_ofd.xbrl
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "extractXBRLFromOFD" "D:\huangyg\git\js.sample\xbrl\250F981968D9.ofd" "D:\huangyg\git\js.sample\xbrl\extracted_ofd.xbrl"
====================
=== Java 调试输出 ===
=== Java ������Ϣ ===
������: extractXBRLFromOFD
��������: 2
����[0]: D:\huangyg\git\js.sample\xbrl\250F981968D9.ofd
����[1]: D:\huangyg\git\js.sample\xbrl\extracted_ofd.xbrl
===================
�ɹ�������: api.VoucherFileUtil
ִ�� extractXBRLFromOFD ����...
�����ļ�����: D:\huangyg\git\js.sample\xbrl\250F981968D9.ofd (104402 bytes)
����˫��������: public static api.VoucherFileInfo api.VoucherFileUtil.extractXBRLFromOFD(java.lang.String,java.lang.String) throws java.lang.Exception
��ȡ�����������
XBRL �ļ�·��: D:/huangyg/git/js.sample/xbrl/extracted_ofd.xbrl
ƾ֤����: bkrs
XBRL ���ݳ���: 1241
==================
=== Java 标准输出 ===
原始输出长度: 1388
原始输出预览: {"xbrlFilePath":"D:/huangyg/git/js.sample/xbrl/extracted_ofd.xbrl","voucherType":"bkrs","content":"<xbrl xmlns=\"http://www.xbrl.org/2003/instance\" xmlns:bkrs=\"http://xbrl.mof.gov.cn/taxonomy/2021-1...
==================
=== JSON 解析成功 ===
解析结果类型: object
==================

=== OFD 提取结果 ===
{
  "xbrlFilePath": "D:/huangyg/git/js.sample/xbrl/extracted_ofd.xbrl",
  "voucherType": "bkrs",
  "content": "<xbrl xmlns=\"http://www.xbrl.org/2003/instance\" xmlns:bkrs=\"http://xbrl.mof.gov.cn/taxonomy/2021-11-30/bkrs\" xmlns:num=\"http://www.xbrl.org/dtr/type/numeric\" xmlns:link=\"http://www.xbrl.org/2003/linkbase\" xmlns:iso4217=\"http://www.xbrl.org/2003/iso4217\" xmlns:xbrldt=\"http://xbrl.org/2005/xbrldt\" xmlns:label=\"http://xbrl.org/2008/label\" xmlns:xbrli=\"http://www.xbrl.org/2003/instance\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:gen=\"http://xbrl.org/2008/generic\" xmlns:xl=\"http://www.xbrl.org/2003/XLink\" xmlns:xbrldi=\"http://xbrl.org/2006/xbrldi\" xmlns:nonnum=\"http://www.xbrl.org/dtr/type/non-numeric\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xsi:schemaLocation=\"http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd\"><link:schemaRef xlink:type=\"simple\" xlink:href=\"bkrs_entry_point_2021-11-30.xsd\"/><context id=\"As_Of_null\"><entity><identifier scheme=\"http://xbrl.mof.gov.cn\">C1030131001288</identifier></entity><period><instant>null</instant></period></context><unit id=\"CNY\"><measure>iso4217:CNY</measure></unit><bkrs:IdentificationCodeOfIssuer contextRef=\"As_Of_null\">C1030131001288</bkrs:IdentificationCodeOfIssuer><bkrs:Currency contextRef=\"As_Of_null\">CNY</bkrs:Currency></xbrl>"
}

已保存 XBRL 内容用于后续转换，长度: 1241

=== OFD 输出文件信息 ===
文件大小: 1241 字节
创建时间: 2025-08-02T10:22:05.275Z
修改时间: 2025-08-02T10:59:09.687Z

=== OFD 输出文件内容 ===
<xbrl xmlns="http://www.xbrl.org/2003/instance" xmlns:bkrs="http://xbrl.mof.gov.cn/taxonomy/2021-11-30/bkrs" xmlns:num="http://www.xbrl.org/dtr/type/numeric" xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:iso4217="http://www.xbrl.org/2003/iso4217" xmlns:xbrldt="http://xbrl.org/2005/xbrldt" xmlns:label="http://xbrl.org/2008/label" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gen="http://xbrl.org/2008/generic" xmlns:xl="http://www.xbrl.org/2003/XLink" xmlns:xbrldi="http://xbrl.org/2006/xbrldi" xmlns:nonnum="http://www.xbrl.org/dtr/type/non-numeric" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd"><link:schemaRef xlink:type="simple" xlink:href="bkrs_entry_point_2021-11-30.xsd"/><context id="As_Of_null"><entity><identifier scheme="http://xbrl.mof.gov.cn">C1030131001288</identifier></entity><period><instant>null</instant></period></context><unit id="CNY"><measure>iso4217:CNY</measure></unit><bkrs:IdentificationCodeOfIssuer contextRef="As_Of_null">C1030131001288</bkrs:IdentificationCodeOfIssuer><bkrs:Currency contextRef="As_Of_null">CNY</bkrs:Currency></xbrl>

==========================================
      步骤 2: OFD 的 XBRL 转 JSON
==========================================
开始转换 XBRL 为 JSON...

=== 开始 XBRL 转 JSON ===
配置ID: bkrs
XBRL XML 长度: 1241
XBRL XML 预览: <xbrl xmlns="http://www.xbrl.org/2003/instance" xmlns:bkrs="http://xbrl.mof.gov.cn/taxonomy/2021-11-...
已将 XBRL 内容写入临时文件: D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "xbrl2JsonFromFile" "D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml" "bkrs"
====================
=== Java 调试输出 ===
=== Java ������Ϣ ===
������: xbrl2JsonFromFile
��������: 2
����[0]: D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� xbrl2JsonFromFile ����...
���ļ���ȡ XBRL: D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml
��ȡ�ɹ������ݳ���: 1241
�ҵ�����: public static com.alibaba.fastjson.JSONObject api.VoucherFileUtil.xbrl2Json(java.lang.String,java.lang.String)
��ȡ�ļ���ת������: null
==================
=== Java 标准输出 ===
原始输出长度: 14
原始输出预览: {"error":""}

==================
=== JSON 解析成功 ===
解析结果类型: object
==================

=== XBRL 转 JSON 结果 ===
{"error":""}

==========================================
          步骤 3: PDF 转 XBRL
==========================================
开始提取 PDF 文件...

=== 开始 PDF 提取 ===
检查输入文件: D:\huangyg\git\js.sample\xbrl\250F981968D9.pdf
输入文件存在，大小: 98437 字节
输出文件路径: extracted_pdf.xbrl
准备调用 Java 方法...
PDF 提取出错: absoluteOutputFile is not defined

==========================================
      步骤 4: JSON 转 XBRL 转 JSON
==========================================

=== 创建示例 JSON 文件 ===
已创建示例 JSON 文件: inv_ord_issuer.json

=== JSON 转 XBRL ===
读取 JSON 文件成功，长度: 361

=== 开始 JSON 转 XBRL ===
配置ID: inv_ord_issuer
JSON 字符串长度: 361
JSON 字符串预览: {
  "invOrdIssuer": {
    "invoiceCode": "12345678",
    "invoiceNumber": "12345678",
    "invoiceDa...
压缩后 JSON 长度: 287
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"invOrdIssuer":{"invoiceCode":"12345678","invoiceNumber":"12345678","invoiceDate":"\"2023-01-01\"","sellerName":"示例销售方","sellerTaxCode":"123456789012345","buyerName":"示例购买方","buyerTaxCode":"123456789012345","amount":"100.00","taxAmount":"13.00","totalAmount":"113.00","remarks":"示例备注"}}" "inv_ord_issuer"
====================
=== Java 执行错误 ===
错误信息: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"invOrdIssuer":{"invoiceCode":"12345678","invoiceNumber":"12345678","invoiceDate":"\"2023-01-01\"","sellerName":"示例销售方","sellerTaxCode":"123456789012345","buyerName":"示例购买方","buyerTaxCode":"123456789012345","amount":"100.00","taxAmount":"13.00","totalAmount":"113.00","remarks":"示例备注"}}" "inv_ord_issuer"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {invOrdIssuer:{invoiceCode:12345678,invoiceNumber:12345678,invoiceDate:"2023-01-01"",sellerName:ʾ�����۷�,sellerTaxCode:123456789012345,buyerName:ʾ������,buyerTaxCode:123456789012345,amount:100.00,taxAmount:13.00,totalAmount:113.00,remarks:ʾ����ע}}
����[1]: inv_ord_issuer
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: syntax error, position at 14, name invoiceDate
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:645)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:581)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more

==================
JSON/XBRL 转换出错: Java 执行错误: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"invOrdIssuer":{"invoiceCode":"12345678","invoiceNumber":"12345678","invoiceDate":"\"2023-01-01\"","sellerName":"示例销售方","sellerTaxCode":"123456789012345","buyerName":"示例购买方","buyerTaxCode":"123456789012345","amount":"100.00","taxAmount":"13.00","totalAmount":"113.00","remarks":"示例备注"}}" "inv_ord_issuer"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {invOrdIssuer:{invoiceCode:12345678,invoiceNumber:12345678,invoiceDate:"2023-01-01"",sellerName:ʾ�����۷�,sellerTaxCode:123456789012345,buyerName:ʾ������,buyerTaxCode:123456789012345,amount:100.00,taxAmount:13.00,totalAmount:113.00,remarks:ʾ����ע}}
����[1]: inv_ord_issuer
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: syntax error, position at 14, name invoiceDate
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:645)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:581)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more


==========================================
      测试 bkrs.json 示例文件
==========================================

=== 读取 bkrs.json 文件 ===
文件大小: 2373 字节

=== bkrs.json 基本信息 ===
发行方识别码: C1030311000455
币种: CNY
客户结算银行账户: 62XX000000010001
客户账户名称: ABC公司
银行对账单年份: 2021
银行对账单月份: 08
对账明细条数: 2
期末账户余额: 95601.54

=== bkrs.json 转 XBRL ===

=== 开始 JSON 转 XBRL ===
配置ID: bkrs
JSON 字符串长度: 2373
JSON 字符串预览: {
    "IdentificationCodeOfIssuer": "C1030311000455",
    "NumberOfBankBranch": "001",
    "Currency...
压缩后 JSON 长度: 1749
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"IdentificationCodeOfIssuer":"C1030311000455","NumberOfBankBranch":"001","Currency":"CNY","CustomerSettlementBankAccount":"62XX000000010001","NameOfCustomerAccount":"ABC公司","CodeOfBankCustomer":"A123456","YearOfBankReconciliationStatement":"2021","MonthOfBankReconciliationStatement":"08","PrintTimes":"1","PrintDate":"2021-08-31","InformationOfReconcileDetailsTuple":[{"DateOfBookkeeping":"2021-08-03","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"0987654321","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"0","TransactionAmount":"15177.33","DebitOrCreditOfBalance":"1","AccountBalance":"95445.32","TransactionCode":"42062","AccountOfCounterparty":"62XX000200020002","NameOfCounterparty":"DEF公司","DepositoryBankOfCounterparty":"XX银行北京分行","Bookkeeper":"08971","TimeOfBookkeeping":"08:34:23","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108039029660024300000000001"},{"DateOfBookkeeping":"2021-08-15","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"1234567890","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"1","TransactionAmount":"156.22","DebitOrCreditOfBalance":"1","AccountBalance":"95601.54","TransactionCode":"42063","AccountOfCounterparty":"62XX000300030003","NameOfCounterparty":"OPQ公司","DepositoryBankOfCounterparty":"XX银行朝阳支行","Bookkeeper":"06587","TimeOfBookkeeping":"15:34:24","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108157549660024300000000001"}],"AccountBalanceAtTheEndOfReconciliationCycleAmount":"95601.54","AvailableBalanceAtTheEndOfReconciliationCycleAmount":"95601.54"}" "bkrs"
====================
=== Java 执行错误 ===
错误信息: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"IdentificationCodeOfIssuer":"C1030311000455","NumberOfBankBranch":"001","Currency":"CNY","CustomerSettlementBankAccount":"62XX000000010001","NameOfCustomerAccount":"ABC公司","CodeOfBankCustomer":"A123456","YearOfBankReconciliationStatement":"2021","MonthOfBankReconciliationStatement":"08","PrintTimes":"1","PrintDate":"2021-08-31","InformationOfReconcileDetailsTuple":[{"DateOfBookkeeping":"2021-08-03","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"0987654321","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"0","TransactionAmount":"15177.33","DebitOrCreditOfBalance":"1","AccountBalance":"95445.32","TransactionCode":"42062","AccountOfCounterparty":"62XX000200020002","NameOfCounterparty":"DEF公司","DepositoryBankOfCounterparty":"XX银行北京分行","Bookkeeper":"08971","TimeOfBookkeeping":"08:34:23","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108039029660024300000000001"},{"DateOfBookkeeping":"2021-08-15","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"1234567890","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"1","TransactionAmount":"156.22","DebitOrCreditOfBalance":"1","AccountBalance":"95601.54","TransactionCode":"42063","AccountOfCounterparty":"62XX000300030003","NameOfCounterparty":"OPQ公司","DepositoryBankOfCounterparty":"XX银行朝阳支行","Bookkeeper":"06587","TimeOfBookkeeping":"15:34:24","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108157549660024300000000001"}],"AccountBalanceAtTheEndOfReconciliationCycleAmount":"95601.54","AvailableBalanceAtTheEndOfReconciliationCycleAmount":"95601.54"}" "bkrs"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: syntax error, pos 29, line 1, column 30{IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1510)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:616)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more

==================
测试 bkrs.json 出错: Java 执行错误: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"IdentificationCodeOfIssuer":"C1030311000455","NumberOfBankBranch":"001","Currency":"CNY","CustomerSettlementBankAccount":"62XX000000010001","NameOfCustomerAccount":"ABC公司","CodeOfBankCustomer":"A123456","YearOfBankReconciliationStatement":"2021","MonthOfBankReconciliationStatement":"08","PrintTimes":"1","PrintDate":"2021-08-31","InformationOfReconcileDetailsTuple":[{"DateOfBookkeeping":"2021-08-03","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"0987654321","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"0","TransactionAmount":"15177.33","DebitOrCreditOfBalance":"1","AccountBalance":"95445.32","TransactionCode":"42062","AccountOfCounterparty":"62XX000200020002","NameOfCounterparty":"DEF公司","DepositoryBankOfCounterparty":"XX银行北京分行","Bookkeeper":"08971","TimeOfBookkeeping":"08:34:23","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108039029660024300000000001"},{"DateOfBookkeeping":"2021-08-15","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"1234567890","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"1","TransactionAmount":"156.22","DebitOrCreditOfBalance":"1","AccountBalance":"95601.54","TransactionCode":"42063","AccountOfCounterparty":"62XX000300030003","NameOfCounterparty":"OPQ公司","DepositoryBankOfCounterparty":"XX银行朝阳支行","Bookkeeper":"06587","TimeOfBookkeeping":"15:34:24","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108157549660024300000000001"}],"AccountBalanceAtTheEndOfReconciliationCycleAmount":"95601.54","AvailableBalanceAtTheEndOfReconciliationCycleAmount":"95601.54"}" "bkrs"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: syntax error, pos 29, line 1, column 30{IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1510)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:616)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more


==========================================
      测试 bkrs.xml 示例文件
==========================================

=== 读取 bkrs.xml 文件 ===
文件大小: 5371 字节

=== bkrs.xml 基本信息 ===
发行方识别码: C1030311000455
币种: CNY
客户结算银行账户: 62XX000000010001
客户账户名称: ABC公司
银行对账单年份: 2021
银行对账单月份: 08
期末账户余额: 95601.54
对账明细条数: 2

=== bkrs.xml 转 JSON ===

=== 开始 XBRL 转 JSON ===
配置ID: bkrs
XBRL XML 长度: 5371
XBRL XML 预览: <?xml version="1.0" encoding="UTF-8"?>

<xbrl xmlns="http://www.xbrl.org/2003/instance" xmlns:bkrs="...
已将 XBRL 内容写入临时文件: D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "xbrl2JsonFromFile" "D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml" "bkrs"
====================
=== Java 调试输出 ===
=== Java ������Ϣ ===
������: xbrl2JsonFromFile
��������: 2
����[0]: D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� xbrl2JsonFromFile ����...
���ļ���ȡ XBRL: D:\huangyg\git\js.sample\xbrl\temp_xbrl.xml
��ȡ�ɹ������ݳ���: 5392
�ҵ�����: public static com.alibaba.fastjson.JSONObject api.VoucherFileUtil.xbrl2Json(java.lang.String,java.lang.String)
��ȡ�ļ���ת������: null
==================
=== Java 标准输出 ===
原始输出长度: 14
原始输出预览: {"error":""}

==================
=== JSON 解析成功 ===
解析结果类型: object
==================
转换成功，JSON 长度: 12
已保存 JSON 到文件: bkrs_xml_converted.json

=== 转换后的 JSON 结构 ===
发行方识别码: undefined
币种: undefined
客户结算银行账户: undefined
客户账户名称: undefined
银行对账单年份: undefined
银行对账单月份: undefined
对账明细条数: 0
期末账户余额: undefined

=== JSON 转 XBRL 验证 ===

=== 开始 JSON 转 XBRL ===
配置ID: bkrs
JSON 字符串长度: 12
JSON 字符串预览: {"error":""}
压缩后 JSON 长度: 12
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"error":""}" "bkrs"
====================
=== Java 执行错误 ===
错误信息: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"error":""}" "bkrs"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {error:"}
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: unclosed string : ␦
        at com.alibaba.fastjson.parser.JSONLexerBase.scanString(JSONLexerBase.java:896)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:495)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more

==================
测试 bkrs.xml 出错: Java 执行错误: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"error":""}" "bkrs"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {error:"}
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: unclosed string : ␦
        at com.alibaba.fastjson.parser.JSONLexerBase.scanString(JSONLexerBase.java:896)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:495)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more


==========================================
      对比 bkrs.json 和 bkrs.xml 转换结果
==========================================

=== JSON -> XBRL -> JSON ===

=== 开始 JSON 转 XBRL ===
配置ID: bkrs
JSON 字符串长度: 2373
JSON 字符串预览: {
    "IdentificationCodeOfIssuer": "C1030311000455",
    "NumberOfBankBranch": "001",
    "Currency...
压缩后 JSON 长度: 1749
准备调用 Java 方法...
=== 执行 Java 命令 ===
命令: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"IdentificationCodeOfIssuer":"C1030311000455","NumberOfBankBranch":"001","Currency":"CNY","CustomerSettlementBankAccount":"62XX000000010001","NameOfCustomerAccount":"ABC公司","CodeOfBankCustomer":"A123456","YearOfBankReconciliationStatement":"2021","MonthOfBankReconciliationStatement":"08","PrintTimes":"1","PrintDate":"2021-08-31","InformationOfReconcileDetailsTuple":[{"DateOfBookkeeping":"2021-08-03","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"0987654321","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"0","TransactionAmount":"15177.33","DebitOrCreditOfBalance":"1","AccountBalance":"95445.32","TransactionCode":"42062","AccountOfCounterparty":"62XX000200020002","NameOfCounterparty":"DEF公司","DepositoryBankOfCounterparty":"XX银行北京分行","Bookkeeper":"08971","TimeOfBookkeeping":"08:34:23","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108039029660024300000000001"},{"DateOfBookkeeping":"2021-08-15","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"1234567890","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"1","TransactionAmount":"156.22","DebitOrCreditOfBalance":"1","AccountBalance":"95601.54","TransactionCode":"42063","AccountOfCounterparty":"62XX000300030003","NameOfCounterparty":"OPQ公司","DepositoryBankOfCounterparty":"XX银行朝阳支行","Bookkeeper":"06587","TimeOfBookkeeping":"15:34:24","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108157549660024300000000001"}],"AccountBalanceAtTheEndOfReconciliationCycleAmount":"95601.54","AvailableBalanceAtTheEndOfReconciliationCycleAmount":"95601.54"}" "bkrs"
====================
=== Java 执行错误 ===
错误信息: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"IdentificationCodeOfIssuer":"C1030311000455","NumberOfBankBranch":"001","Currency":"CNY","CustomerSettlementBankAccount":"62XX000000010001","NameOfCustomerAccount":"ABC公司","CodeOfBankCustomer":"A123456","YearOfBankReconciliationStatement":"2021","MonthOfBankReconciliationStatement":"08","PrintTimes":"1","PrintDate":"2021-08-31","InformationOfReconcileDetailsTuple":[{"DateOfBookkeeping":"2021-08-03","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"0987654321","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"0","TransactionAmount":"15177.33","DebitOrCreditOfBalance":"1","AccountBalance":"95445.32","TransactionCode":"42062","AccountOfCounterparty":"62XX000200020002","NameOfCounterparty":"DEF公司","DepositoryBankOfCounterparty":"XX银行北京分行","Bookkeeper":"08971","TimeOfBookkeeping":"08:34:23","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108039029660024300000000001"},{"DateOfBookkeeping":"2021-08-15","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"1234567890","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"1","TransactionAmount":"156.22","DebitOrCreditOfBalance":"1","AccountBalance":"95601.54","TransactionCode":"42063","AccountOfCounterparty":"62XX000300030003","NameOfCounterparty":"OPQ公司","DepositoryBankOfCounterparty":"XX银行朝阳支行","Bookkeeper":"06587","TimeOfBookkeeping":"15:34:24","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108157549660024300000000001"}],"AccountBalanceAtTheEndOfReconciliationCycleAmount":"95601.54","AvailableBalanceAtTheEndOfReconciliationCycleAmount":"95601.54"}" "bkrs"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: syntax error, pos 29, line 1, column 30{IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1510)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:616)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more

==================
对比转换结果出错: Java 执行错误: Command failed: java -cp "D:\huangyg\git\js.sample\xbrl\xbrl-json-1.0.jar;D:\huangyg\git\js.sample\xbrl\fastjson-1.2.83.jar;D:\huangyg\git\js.sample\xbrl\commons-compress-1.21.jar;D:\huangyg\git\js.sample\xbrl\pdfbox-2.0.24.jar;D:\huangyg\git\js.sample\xbrl\commons-logging-1.2.jar;D:\huangyg\git\js.sample\xbrl" Invoker "json2Xbrl" "{"IdentificationCodeOfIssuer":"C1030311000455","NumberOfBankBranch":"001","Currency":"CNY","CustomerSettlementBankAccount":"62XX000000010001","NameOfCustomerAccount":"ABC公司","CodeOfBankCustomer":"A123456","YearOfBankReconciliationStatement":"2021","MonthOfBankReconciliationStatement":"08","PrintTimes":"1","PrintDate":"2021-08-31","InformationOfReconcileDetailsTuple":[{"DateOfBookkeeping":"2021-08-03","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"0987654321","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"0","TransactionAmount":"15177.33","DebitOrCreditOfBalance":"1","AccountBalance":"95445.32","TransactionCode":"42062","AccountOfCounterparty":"62XX000200020002","NameOfCounterparty":"DEF公司","DepositoryBankOfCounterparty":"XX银行北京分行","Bookkeeper":"08971","TimeOfBookkeeping":"08:34:23","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108039029660024300000000001"},{"DateOfBookkeeping":"2021-08-15","TypesOfBusinessProducts":"转账","BusinessSerialNumber":"XXXXXXXXX1","TypeOfSourceDocument":"支票","NumberOfSourceDocument":"1234567890","NotesOfBankElectronicReceipt":"转账业务","IdentificationOfCreditOrDebit":"1","TransactionAmount":"156.22","DebitOrCreditOfBalance":"1","AccountBalance":"95601.54","TransactionCode":"42063","AccountOfCounterparty":"62XX000300030003","NameOfCounterparty":"OPQ公司","DepositoryBankOfCounterparty":"XX银行朝阳支行","Bookkeeper":"06587","TimeOfBookkeeping":"15:34:24","JournalAccountOfBookkeeping":"XX交易记录","NumberOfBankElectronicReceipt":"202108157549660024300000000001"}],"AccountBalanceAtTheEndOfReconciliationCycleAmount":"95601.54","AvailableBalanceAtTheEndOfReconciliationCycleAmount":"95601.54"}" "bkrs"
=== Java ������Ϣ ===
������: json2Xbrl
��������: 2
����[0]: {IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
����[1]: bkrs
===================
�ɹ�������: api.VoucherFileUtil
ִ�� json2Xbrl ����...
�ҵ�����: public static java.lang.String api.VoucherFileUtil.json2Xbrl(java.lang.String,java.lang.String) throws java.lang.Exception
Java ִ�г���:
��������: java.lang.reflect.InvocationTargetException
������Ϣ: null
java.lang.reflect.InvocationTargetException
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at Invoker.main(Invoker.java:47)
Caused by: com.alibaba.fastjson.JSONException: syntax error, pos 29, line 1, column 30{IdentificationCodeOfIssuer:C1030311000455,NumberOfBankBranch:001,Currency:CNY,CustomerSettlementBankAccount:62XX000000010001,NameOfCustomerAccount:ABC��˾,CodeOfBankCustomer:A123456,YearOfBankReconciliationStatement:2021,MonthOfBankReconciliationStatement:08,PrintTimes:1,PrintDate:2021-08-31,InformationOfReconcileDetailsTuple:[{DateOfBookkeeping:2021-08-03,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:0987654321,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:0,TransactionAmount:15177.33,DebitOrCreditOfBalance:1,AccountBalance:95445.32,TransactionCode:42062,AccountOfCounterparty:62XX000200020002,NameOfCounterparty:DEF��˾,DepositoryBankOfCounterparty:XX���б�������,Bookkeeper:08971,TimeOfBookkeeping:08:34:23,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108039029660024300000000001},{DateOfBookkeeping:2021-08-15,TypesOfBusinessProducts:ת��,BusinessSerialNumber:XXXXXXXXX1,TypeOfSourceDocument:֧Ʊ,NumberOfSourceDocument:1234567890,NotesOfBankElectronicReceipt:ת��ҵ��,IdentificationOfCreditOrDebit:1,TransactionAmount:156.22,DebitOrCreditOfBalance:1,AccountBalance:95601.54,TransactionCode:42063,AccountOfCounterparty:62XX000300030003,NameOfCounterparty:OPQ��˾,DepositoryBankOfCounterparty:XX���г���֧��,Bookkeeper:06587,TimeOfBookkeeping:15:34:24,JournalAccountOfBookkeeping:XX���׼�¼,NumberOfBankElectronicReceipt:202108157549660024300000000001}],AccountBalanceAtTheEndOfReconciliationCycleAmount:95601.54,AvailableBalanceAtTheEndOfReconciliationCycleAmount:95601.54}
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1510)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parseObject(DefaultJSONParser.java:616)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1430)
        at com.alibaba.fastjson.parser.DefaultJSONParser.parse(DefaultJSONParser.java:1390)
        at com.alibaba.fastjson.JSON.parse(JSON.java:181)
        at com.alibaba.fastjson.JSON.parse(JSON.java:191)
        at com.alibaba.fastjson.JSON.parse(JSON.java:244)
        at com.alibaba.fastjson.JSON.parseObject(JSON.java:248)
        at com.pansoft.xbrl.xbrljson.convert.JsonToXbrl.convertXbrlXml(JsonToXbrl.java:90)
        at api.VoucherFileUtil.json2Xbrl(VoucherFileUtil.java:102)
        ... 5 more


==========================================
          XBRL 工具包测试完成
==========================================
```
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.02.[AI特殊监管区设想]任务&body=日期: 2025.08.02.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250802.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250802223000"></a>
## 22:30 ~ 22:59
## ego: [AI特殊监管区设想]

- 缺乏定量分析，利润和工作量、难度不相配。
- 需要深入整理相关法律基础，比如现有专利法律能否有效定义AI技术的归属，完善它的工作量是多少，香港立法资源是否可承受这种负荷。这类量级的问题有两位数。
- 配套的技术也类似，涉及大量还不存在的方案。
- 数据出境的问题没有展开讨论。
- 国产硬件的性能和提升速度还没有足够预判。
- AI技术的变化还没有足够预判，尤其是大模型以外的AI，特别是低算力、高效能的突破。
- 涉及的各类机构需要重新设计章程级文件，才能在国家级干预下保持独立性。目前案例至多对抗企业级的干预。
- 下个时间片：补全外界和时间轴变化因素，选择最可能突破的方向。分析其中瓶颈点。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.08.02.[无名任务]任务&body=日期: 2025.08.02.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250802.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250802190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

