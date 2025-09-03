# 2025.09.03.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，九月份安排休整和总结。今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~18:59	js: [nextcloud](#20250903140000)
- 19:00~19:59	check: [零散笔记](#20250903190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 9436 | 4094 | 9855 |
| PSMD | 4000 | 1820 | 2180 | 1080 |
| ego | 2530 | 1460 | 1070 | 1455 |
| infra | 2000 | 545 | 1455 | 285 |
| xuemen | 1000 | 150 | 850 | 600 |
| raw | 1000 | 190 | 810 | 270 |
| learn | 2000 | 4475 | -2475 | 4365 |
| js | 1000 | 796 | 204 | 1800 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：整理simplenote文件，准备转移到webDAV.
  - learn的第2号事项：OpenAI Response API
  - learn的第3号事项：ABAC / CBAC - Attribute/Condition-Based Access Control
  - learn的第4号事项：LegalRuleML（Legal Rule Markup Language）

- 60分钟时间片：
  - xuemen的第1号事项：根据最新政策文件，考虑AER、AVR文件升级。
  - raw的第1号事项：新版营养成分详情，允许多种营养成分。
  - js的第1号事项：nextcloud
  - learn的第1号事项：CometAPI

- 90分钟时间片：
  - infra的第1号事项：schema立项。
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：同步新日志到webDAV。使用新的共享外链。
  - ego的第3号事项：整理task及其相互关系

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - infra的第2号事项：Rete/Phreak算法的自主实现
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第4号事项：重新设计S2状态下的学门基本管理制度

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.03.[nextcloud]任务&body=日期: 2025.09.03.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250903.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250903140000"></a>
## 14:00 ~ 18:59
## js: [nextcloud]

- https://www.npmjs.com/package/nextcloud-node-client/v/1.5.1
	- 有share功能，但是默认url拼接方式和tab.digital不同。
	- 手工修改库代码也许可以兼容，但以后就要自己维护。
	- 分析库代码找到更基础的依赖，然后再定。
```
  /**
   * create a new share
   */
  public async createShare(options: ICreateShare): Promise<Share> {
    const shareRequest = Share.createShareRequestBody(options);
    log.debug(shareRequest);

    const requestInit: RequestInit = {
      body: shareRequest,
      headers: this.getOcsHeaders(),
      method: "POST",
    };
    const url = this.nextcloudOrigin + "/ocs/v2.php/apps/files_sharing/api/v1/shares";

    // try {
    const response: Response = await this.getHttpResponse(url, requestInit, [200, 204], { description: "Share create" });

    const rawResult: { ocs: { data: { id: string } } } = (await response.json()) as { ocs: { data: { id: string } } };

    log.debug(rawResult);

    const share: Share = await Share.getShare(this, rawResult.ocs.data.id);

    if (options.publicUpload) {
      await share.setPublicUpload();
    }

    return share;

    /* } catch (e) {
            log.debug("result " + e.message);
            log.debug("requestInit ", JSON.stringify(requestInit, null, 4));
            log.debug("headers " + JSON.stringify(headers, null, 4));
            log.debug("url ", url);
            throw e;
        } */
  }
```
- https://www.npmjs.com/package/webdav
- https://www.npmjs.com/package/@nextcloud/files
	- 缺少share功能。
- https://www.npmjs.com/package/@nextcloud/sharing
- https://github.com/nextcloud-libraries/nextcloud-sharing
- https://nextcloud-libraries.github.io/nextcloud-sharing/
	- 只是判断和去token。
- d:\huangyg\git\sample\chokidar\
	- 8.10没有用现成的包，直接用web方式使用。 
	- 人工创建draft文件，设置只读共享，在季度时间模版保存url。
	- 文件路径中的斜杠需要处理一下，最好在day.js中就使用windows的"\ ：var localPath = timeperiod.output.split('/').join(path.sep);
```
const draft = {
    t1: {
        "0745": { name: "draft/t1.0745.0844.md", url: "https://kai.nl.tab.digital/s/sZW48yNjcinASkF" },
        "0930": { name: "draft/t1.0930.1059.md", url: "https://kai.nl.tab.digital/s/wxRtnMSYNGxSQPy" },
        "1400": { name: "draft/t1.1400.1429.md", url: "https://kai.nl.tab.digital/s/56zed9r4MHcMeeo" },
        "1430": { name: "draft/t1.1430.1459.md", url: "https://kai.nl.tab.digital/s/AQe92zxpc3ZBigH" },
        "1600": { name: "draft/t1.1600.1659.md", url: "https://kai.nl.tab.digital/s/AFKrPNB8RpMjBrq" },
        "1900": { name: "draft/t1.1900.1959.md", url: "https://kai.nl.tab.digital/s/W3kkLMeCZ3fCkAt" }
    },
    t2: {
        "0745": { name: "draft/t2.0745.1059.md", url: "https://kai.nl.tab.digital/s/FmpRZqDqW7pc5re" },
        "0930": { name: "draft/t2.0930.1059.md", url: "https://kai.nl.tab.digital/s/Q9meGsRiBzR28YG" },
        "1400": { name: "draft/t2.1400.1529.md", url: "https://kai.nl.tab.digital/s/zaS274tiimEFTcd" },
        "1600": { name: "draft/t2.1600.1659.md", url: "https://kai.nl.tab.digital/s/tdmXZBZceNp6siZ" },
        "1900": { name: "draft/t2.1900.1959.md", url: "https://kai.nl.tab.digital/s/6mppPLy636iKJgX" }
    }
};
```
- webdav可以正确上传文件，没有share功能，需要使用手工创建并共享的文件。
- http功能是完整的，已经整理为模块nextcloud-http.js，下一个时间片可以在ego中使用。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.09.03.[无名任务]任务&body=日期: 2025.09.03.%0D%0A序号: 10%0D%0A手稿:../../draft/2025/20250903.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250903190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]

