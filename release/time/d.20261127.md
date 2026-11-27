# 2026.11.27.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，本月安排常规工作，今天绑定模版1(1f)。

<a id="index"></a>
- 16:04~17:03	check: [零散笔记](#20261127160400)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 540 | 12990 | 0 |
| PSMD | 4000 | 150 | 3850 | 0 |
| ego | 2530 | 60 | 2470 | 0 |
| infra | 2000 | 0 | 2000 | 0 |
| xuemen | 1000 | 330 | 670 | 0 |
| raw | 1000 | 0 | 1000 | 0 |
| learn | 2000 | 0 | 2000 | 0 |
| js | 1000 | 0 | 1000 | 0 |

---
<a href="mailto:huangyg@mars22.com?subject=关于2026.11.27.[无名任务]任务&body=日期: 2026.11.27.%0D%0A序号: 5%0D%0A手稿:/home/huangyg/git/draft/2026/20261127.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20261127160400"></a>
## 16:04 ~ 17:03
## check: [零散笔记]

- 更新 /home/huangyg/git/blog/release/entry.2day.html
	- 清除缓存purge cache需要盘付费计划。
	- 用随机参数迫使cdn更新内容。
- ego、blog等数据方增加CORS设置
	- https://edgeone.cloud.tencent.com/pages/document/162936771610066944
```
edgeone.json
{
  "headers": [
    {
      "source": "/*.yaml",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "https://你的html域名.edgeone.cool"
        }
      ]
    }
  ]
}
```
```
middleware.js
export function middleware(context) {
  return context.next({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS'
    }
  })
}
```
```
    Cloudflare Pages：根目录创建 _headers 文件，内容为：
    text

    /*
      Access-Control-Allow-Origin: *

    Vercel：在 vercel.json 中配置 headers：
    json

    {
      "headers": [{
        "source": "/(.*)",
        "headers": [{ "key": "Access-Control-Allow-Origin", "value": "*" }]
      }]
    }

    Netlify：在 netlify.toml 中添加：
    toml

    [[headers]]
      for = "/*"
      [headers.values]
        Access-Control-Allow-Origin = "*"
```
- page+cdn
	- edgeone海外：需要国外证件实名验证，否则部署只有效几小时。
	- edgeone国内：没有免费计划
	- gitee page：已经下线
	- vercel：频繁发验证码到邮箱，要用方便的地址。部署的vercel.app被墙。
		- blog-blond-zeta.vercel.app
		- ego-rust.vercel.app
	- netlify：git库更新后稍微有很小的延迟。
		- ego-vat.netlify.app
		- blog-repo.netlify.app
		- blog-gh.netlify.app
		- ego-gh.netlify.app
	- cloudflare：控制台慢，部署的workers.dev被墙。只支持github、gitab。
		- blog.huangyg.workers.dev
		- ego.huangyg.workers.dev
			- https://api.cloudflare.com/client/v4/workers/builds/deploy_hooks/deply-hook-id
	- github page：经常被墙
	- github同步的netlify和vercel可以实时更新。
	- codeberg.org：能用，很慢。	
- test.mars22.com -301-> https://blog-gh.netlify.app/release/entry.html
