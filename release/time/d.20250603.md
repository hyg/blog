# 2025.06.03.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，六月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 13:00~13:51	xuemen: [acme](#20250603130000)
- 13:52~14:59	learn: [整理学术工具](#20250603135200)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 5871 | 7659 | 7485 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1500 | 1030 | 1470 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 501 | 499 | 630 |
| raw | 1000 | 285 | 715 | 450 |
| learn | 2000 | 1431 | 569 | 2160 |
| js | 1000 | 474 | 526 | 1260 |

---
waiting list:


- 30分钟时间片：
  - js的第5号事项：debug in vscodium

- 60分钟时间片：
  - raw的第1号事项：新版food plan
  - learn的第1号事项：量子物理的数学基础
  - ego的第2号事项：entry的科目归并
  - raw的第2号事项：设计三季度时间表

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - ego的第1号事项：entry的按月归并
  - js的第1号事项：openpgp v6.1.1.
  - xuemen的第1号事项：mail server

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第3号事项：kernel模型升级
  - ego的第4号事项：新版基础模型
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.03.[acme]任务&body=日期: 2025.06.03.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250603.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250603130000"></a>
## 13:00 ~ 13:51
## xuemen: [acme]

- 复习nginx设置，检查个配置文件。
    - nano /etc/nginx/nginx.conf
    - /etc/nginx/sites-available$ nano default
    - 目前是一个服务器，不论域名都指向/var/www/html。以后准备配置多域名。
- 预备知识:
    - https://cloud.tencent.com/developer/article/2367988
    - https://letsencrypt.org/zh-cn/docs/client-options/
- https://certbot.eff.org/instructions?ws=nginx&os=snap
    - sudo apt install snapd
    - sudo snap install --classic certbot
    - sudo ln -s /snap/bin/certbot /usr/bin/certbot
    - sudo certbot --nginx
        - xuemen.com
        - xuemen.com.cn xuemen.cn的DNS配置缺少A记录,所以还不能申请.在重新设计xuemen规章后,再分配各域名用途.
        - mars22.com仍然指向git hosting的page服务。
```
  Certbot failed to authenticate some domains (authenticator: nginx). The Certificate Authority reported these problems:
  Domain: xuemen.cn
  Type:   dns
  Detail: no valid A records found for xuemen.cn; no valid AAAA records found for xuemen.cn

  Domain: xuemen.com.cn
  Type:   dns
  Detail: no valid A records found for xuemen.com.cn; no valid AAAA records found for xuemen.com.cn

Hint: The Certificate Authority failed to verify the temporary nginx configuration changes made by Certbot. Ensure the listed domains point to this nginx server and that it is accessible from the internet.

Some challenges have failed.
```
- https://xuemen.com/ 测试ok
- sudo certbot renew --dry-run
```
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/xuemen.com.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Account registered.
Simulating renewal of an existing certificate for xuemen.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations, all simulated renewals succeeded:
  /etc/letsencrypt/live/xuemen.com/fullchain.pem (success)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.06.03.[整理学术工具]任务&body=日期: 2025.06.03.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250603.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250603135200"></a>
## 13:52 ~ 14:59
## learn: [整理学术工具]

### https://www.microsoft.com/en-us/research/articles/microsoft-academic-to-expand-horizons-with-community-driven-approach/

- https://www.aminer.cn/
    - 已经使用。
    - 可以ai自动总结，有简要信息和入口。
    - 优缺点都是自动化。文件检索快，但是缺乏垂直领域人工整理的准确度。
- https://www.crossref.org/
    - 属于DOI agency，占使用量95%。
    - 参与指南：https://doi.org/10.13003/5jchdy
        - https://www.crossref.org/display-guidelines/
    - 给引用清单自动加doi https://apps.crossref.org/SimpleTextQuery
    - 以这篇论文为例： https://www.nature.com/articles/s41467-018-05739-8
    - https://search.crossref.org/search/works?q=10.1038%2Fs41467-018-05739-8&from_ui=yes
    - rest api： https://api.crossref.org/swagger-ui/index.html
        - https://api.crossref.org/works/10.1038/s41467-018-05739-8
    - 可以用于自动检索，比如沿着参考文献的引用关系。
    - 为PSMD的条款设计类似的服务。
- https://www.dimensions.ai/
    - 研究相关的linked data和工具集。
    - 对大量出版物和专利生成了索引数据，跟踪到临床实验数据、资助基金。
    - 提供全文检索等功能。
    - 索引更准确、工具集覆盖面更广。商业化气息浓厚。
    - 合作伙伴 https://metaphacts.com 可以为企业建立知识图谱和AI助手
- https://www.lens.org/
    - 论文、专利联合检索，突出学术成果的转化。
    - 开放检索：https://www.lens.org/lens/search/patent/structured
    - 提供API：https://www.lens.org/lens/user/subscriptions
- https://openalex.org/
    - 可以检索论文，但文献比较旧，索引也不准确（比如查物理出医学论文）。
    - 提供api： https://docs.openalex.org/api-entities/entities-overview
    - 来自 https://ourresearch.org/ 比较强调开放性。
- https://opencitations.net/
    - 强调linked data的引文检索，强调开放性。
    - 参与创建Initiative for Open Citations (I4OC) https://i4oc.org/
    - 提供了 SPARQL 端点：
        - https://opencitations.net/index/sparql
        - https://opencitations.net/meta/sparql
    - 提供开放REST API：
        - https://opencitations.net/index/api/v2
        - https://opencitations.net/meta/api/v1
    - 提供检索页面：https://opencitations.net/index/search
    - 自动抓取引用关系、构造关系网络的最佳入口。
- https://www.scopus.com/home.uri
    - 同行评议文献（包括科学期刊、书籍和会议记录）的摘要和引文数据库
    - 商业化的检索接口，功能有限。
- https://www.semanticscholar.org/
    - A free, AI-powered research tool for scientific literature
    - 提供API（高频用户需要申请API key）： https://www.semanticscholar.org/product/api
        - Most Semantic Scholar endpoints are available to the public without authentication, but they are rate-limited to 1000 requests per second shared among all unauthenticated users. Requests may also be further throttled during periods of heavy use.
    - 速度慢，服务器偶尔出错。有自己特色。
        - 对科研数据深度分析有自己的思想：https://www.semanticscholar.org/paper/The-Semantic-Scholar-Open-Data-Platform-Kinney-Anastasiades/cb92a7f9d9dbcf9145e32fdfa0e70e2a6b828eb1
        - 构建了庞大的知识图谱：https://api.semanticscholar.org/api-docs/datasets
        - 支持specter2： https://allenai.org/blog/specter2-adapting-scientific-document-embeddings-to-multiple-fields-and-task-formats-c95686c06567
        - 有很多小工具： https://www.semanticscholar.org/product
    - 适合需要借助知识图谱的深度应用。
- 一般检索可以用aminer，深度使用可以根据需求选择：
    - 引用关系：opencitations
    - 成果转化：lens、dimensions
    - 复杂应用：semanticscholar