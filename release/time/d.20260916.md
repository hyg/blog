# 2026.09.16.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排休整和总结，今天绑定模版2(2b)。

<a id="index"></a>
- 19:00~19:59	check: [零散笔记](#20260916190000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 1170 | 12360 | 0 |
| PSMD | 4000 | 825 | 3175 | 0 |
| ego | 2530 | 285 | 2245 | 0 |
| infra | 2000 | 60 | 1940 | 0 |
| xuemen | 1000 | 0 | 1000 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.09.16.[无名任务]任务&body=日期: 2026.09.16.%0D%0A序号: 11%0D%0A手稿:../../draft/2026/20260916.04.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20260916190000"></a>
## 19:00 ~ 19:59
## check: [零散笔记]


- jev仍然没有撼动ego、PSMD的agent版新框架。
	- 可以减轻选择、路由环节的负担，提高准确率。
- cordis可以作为插件系统的底座之一，插件系统本身在传统软件主程序看来是可插拔的子模块。这样可以提高未来兼容性。
- openai新版的agent API不影响新框架，不适合访问本地数据，与本地应用配合。可以作为受托方承接一部分独立性较高的子任务。
- 至此新框架基本可以定稿。

- https://typesafe.ai/
	- https://docs.typesafe.ai/introduction
	- https://docs.typesafe.ai/introduction/quickstart
		- AI primitives:Choice\Score\Noul
			- https://docs.typesafe.ai/primitives
		- API: https://docs.typesafe.ai/api
```
POST https://api.typesafe.ai/v1/systemone
Authorization: Bearer <API_KEY>
Content-Type: application/json
```
```
curl -X POST https://api.typesafe.ai/v1/systemone \
  -H "Authorization: Bearer $TYPESAFE_API_KEY" \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
  {
    "state": "Hi, I've been trying to connect my Stripe account for 3 days and it keeps failing. I'm losing sales. Please help ASAP.",
    "model": "jev-latest",
    "questions": {
      "urgency": {
        "type": "noul",
        "instructions": "Does this message express urgency?"
      }
    }
  }
EOF
```
```
{
  "state": "Hi, I've been trying to connect my Stripe account for 3 days and it keeps failing. I'm losing sales. Please help ASAP.",
  "model": "jev-latest",
  "questions": {
    "department": {
      "type": "choice",
      "instructions": "Which team should handle this",
      "criteria": {
        "billing": "Payment or subscription issues",
        "technical": "Bugs or integration problems",
        "sales": "Pricing or account questions"
      }
    },
    "frustration": {
      "type": "score",
      "instructions": "How frustrated the customer appears",
      "criteria": [
        "Calm, just stating facts",
        "Frustrated but civil",
        "Very angry, strong language"
      ]
    },
    "is_urgent": {
      "type": "noul",
      "instructions": "The message conveys urgency or time-sensitivity"
    }
  }
}
```
- https://link.springer.com/article/10.1007/s44163-026-02122-1
	- 准备轮动：语言模型->物理AI
