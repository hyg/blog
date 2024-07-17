# 2024.07.17.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2b)。

<a id="index"></a>
- 09:30~11:09	learn: [pear api sample](#20240717093000)
- 14:00~15:49	js: [try "@helia/ipns" sample](#20240717140000)
- 16:00~17:04	js: [helia, orbitdb sample](#20240717160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 17700 | 2887 | 14813 | 3435 |
| PSMD | 7000 | 402 | 6598 | 630 |
| ego | 4000 | 952 | 3048 | 360 |
| infra | 2000 | 90 | 1910 | 0 |
| xuemen | 1500 | 30 | 1470 | 645 |
| raw | 500 | 90 | 410 | 180 |
| learn | 1500 | 782 | 718 | 960 |
| js | 1200 | 541 | 659 | 660 |

---
waiting list:


- 30分钟时间片：
  - ego的第1号事项：设计ego中task的种类、设立、注销规则。
  - learn的第1号事项：确定mermaid gantt语法是否能表达ego模型task关系
  - js的第10号事项：text->id,protobuf-javascript
  - js的第11号事项：用day.js改写util.js

- 60分钟时间片：
  - js的第1号事项：helia ipns sample (libp2p/keychain)
  - raw的第1号事项：自动从网页提取营养成分表
  - ego的第2号事项：编写ego中task的schema
  - learn的第2号事项：schema in ipld

- 90分钟时间片：
  - PSMD的第3号事项：以1406为例检查知识图谱和blawx的语法
  - ego的第3号事项：用linkml和json schema沿信息接口向内建模。
  - PSMD的第4号事项：term metadata的序号，分为显示序号和唯一id两种。
  - learn的第4号事项：拟制说、目的财产说、实在说

- 195分钟时间片：
  - PSMD的第1号事项：data -> schema 迭代范例
  - xuemen的第1号事项：关于对《北京市自动驾驶汽车条例（征求意见稿）》公开征集意见的公告
  - PSMD的第2号事项：term + COM matedata -> deploy metadata -> deploy view
  - xuemen的第2号事项：kernel模型升级

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.17.[pear api sample]任务&body=日期: 2024.07.17.%0D%0A序号: 5%0D%0A手稿:../../draft/2024/07/20240717093000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240717093000"></a>
# 9:30~10:59
learn: [pear api sample]

- 复习 D:\huangyg\git\blog\release\time\d.20240708.md
- 对比pear在windows、ubuntu、browser和各版本nodejs下的表现。
- 对比dat、hypercore、hyperswarm组合，确认是否适合非专业、意向未定的用户试用场景。

## ubuntu机器
- sudo n latest，sudo n lts, sudo n选最新版本
- pear init --type terminal
- pear dev
- npm i bare-readline bare-tty hyperswarm b4a hypercore-crypto
- 用官网代码代替index.js
- pear dev .
- 去windows机器执行 pear dev . 79b29e3991bb5a381549771c8a192a9fc52622a9eb1c10b11f57f4793c2b73fa
```
D:\huangyg\git\js.sample\pear>pear dev . 79b29e3991bb5a381549771c8a192a9fc52622a9eb1c10b11f57f4793c2b73fa
[info] Number of connections is now 0
[info] New peer joined, c2e9a2
[info] Number of connections is now 1
[info] Joined chat room
> hi i am windows
> [c2e9a2] ok here ubuntu
```
- pear stage dev
- pear seed dev
- seed指令执行期间，在windows机器两边运行pear run pear://7b873qjgmj89qp56fps7bdsdsh1pg8fcn7z58otdbuwpiujhh5oo，在ubuntu机器执行 pear run pear://7b873qjgmj89qp56fps7bdsdsh1pg8fcn7z58otdbuwpiujhh5oo 7711addfbd0455b96f3aba6f36030d0be780d611c771ad3ae9fd9529c8299f9e加入房间。
```
D:\huangyg\git\js.sample\pear>pear run pear://7b873qjgmj89qp56fps7bdsdsh1pg8fcn7z58otdbuwpiujhh5oo
[info] Created new chat room: 7711addfbd0455b96f3aba6f36030d0be780d611c771ad3ae9fd9529c8299f9e
> hi
> hello, 7b. i am windows.
> [info] New peer joined, 2101ef
[info] Number of connections is now 1
[2101ef] hi f3e894. i am ubuntu.
> 2101ef, i am windows.
> [2101ef] oook
```
- pear stage production 提示pear://qiacc3mzped5rkppxcnos6s9nu4ofqfzfza61fidjt84jhaqsnco
- pear release production 
- 这时在windows机器执行pear run pear://qiacc3mzped5rkppxcnos6s9nu4ofqfzfza61fidjt84jhaqsnco 报网络错误。
- pear seed production
- seed语句执行期间，在windows机器执行pear run pear://qiacc3mzped5rkppxcnos6s9nu4ofqfzfza61fidjt84jhaqsnco 正常。

## windows

- pear init --type terminal
- pear dev
```
D:\huangyg\git\js.sample\pear>node -v
v22.4.1
D:\huangyg\git\js.sample\pear>pear dev
Pear terminal application running
{
  platform: {
    key: 'pqbzjhqyonxprx8hghxexnmctw75mr91ewqw5dxe1zmntfyaddqy',
    length: 3512,
    fork: 0
  },
  app: { key: null, length: 0, fork: 0 }
}
```
- npm i bare-readline bare-tty hyperswarm b4a hypercore-crypto
- 用官网代码代替index.js
- pear dev .
- 去ubuntu机器执行 pear dev . 40e99566a7145ad8cbfd8464ac385f698076c91e7d06446126d15976dd4c5191
```
D:\huangyg\git\js.sample\pear>pear dev .
[info] Created new chat room: 40e99566a7145ad8cbfd8464ac385f698076c91e7d06446126d15976dd4c5191
> [info] New peer joined, 9c567b
[info] Number of connections is now 1
[9c567b] hi
> hello
```
- pear stage dev
```
D:\huangyg\git\js.sample\pear>pear stage dev
* Staging psmd-node into dev
[ pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy ]
Current version is 2 with release set to 0
+ /index.js (+2.9kB)
......
+ /package-lock.json (+29.7kB)
+ /package.json (+456B)
^ Skipping warmup (bare)
Staging complete!
Latest version is now 979 with release set to 0
Use `pear release dev` to set release to latest version
[ pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy ]
^ Success
```
- 在ubuntu机器运行 pear run pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy 
    - 第一次提示TRUST，都二次提示网络问题。
- pear seed dev 没有反应，ctrl-C出来，重启机器后成功。
```
D:\huangyg\git\js.sample\pear>pear seed dev
* Seeding: psmd-node [ dev ]
   ctrl^c to stop & exit
---:
 pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy
...
^_^ announced
```
- 在上面seed语句执行期间，在windows机器执行pear run pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy，在ubuntu机器执行pear run pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy acdf472efd52ebafdbdfc498926ceddb0452ec389d55618d04e9699fffba59ac加入房间。
```
D:\huangyg\git\js.sample\pear>pear run pear://d46gr69pc3ytjc3szumu6c7kfbhjrud5gnqk6uu3rid3iwezximy
[info] Created new chat room: acdf472efd52ebafdbdfc498926ceddb0452ec389d55618d04e9699fffba59ac
> hello , d4. windows here.
> [info] New peer joined, aedd7c
[info] Number of connections is now 1
[aedd7c] hi eddb1f, i am ubuntu.
> aedd7c, i am windows.
> [aedd7c] ok
```
- pear stage production 返回 [ pear://i1j56bxr9y361yxotbzow463nemaa8w6kmydtn96jqs3pi5h6t4o ]
- pear release production
- pear seed production 指令没有反应，重启机器后正常。
- 在seed指令执行期间，去ubuntu机器执行 pear run pear://i1j56bxr9y361yxotbzow463nemaa8w6kmydtn96jqs3pi5h6t4o，windows机器加入房间，正常。

## broswer

- pear没有基于browser的模式。

## API

- https://docs.pears.com/pear-runtime/api
- 今天只使用范例代码体验操作系统和nodejs版本的影响，没有再去深入试用pear api。重点转向dat、hypercore、hyperswarm层级，不再追加时间再pear层。

## 综合分析

- ubuntu一侧没出过问题，windows两次没有反应、重启机器才正常。pear在ubuntu明显比windows稳定。
- pear虽然部署方便，但是环境搭建还是太复杂，不适合非专业用户。
- pear也是基于hypercore、hyperswarm的，可以先使用更底层底层（甚至dat）的模块。
- 增加todo项;
    - '60': 基于dat,hypercore,hyperswarm等模块的浏览器动态页面范例。

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.17.[try "@helia/ipns" sample]任务&body=日期: 2024.07.17.%0D%0A序号: 7%0D%0A手稿:../../draft/2024/07/20240717140000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240717140000"></a>
## 14:00~15:29
js: [try "@helia/ipns" sample]


- ipfs: libp2p -> ipfs,ipns -> holepunch: hypercore,hyperswarm,hyperdriver -> helia(-> dat) ,pear 
    - 主项目是ipfs   ipfs.tech
    - helia是ipfs的js实现（js-ipfs 已经Inactive https://docs.ipfs.tech/concepts/ipfs-implementations/#lite-or-experimental）
    - 
- https://docs.ipfs.tech/concepts/ipns/
```
IPFS = immutable *Pointer => content
IPNS = **Pointer => content
```
    - IPNS is not the only way to create mutable addresses on IPFS. You can also use DNSLink, which is currently much faster than IPNS, uses human-readable names, and can also point to IPNS names. Other community members are exploring ways to use blockchains to store common name records.
    - https://docs.ipfs.tech/concepts/dnslink/
- https://specs.ipfs.tech/ipns/ipns-record/
- http://songjiayang.github.io/2019-02-20-ipfsming-ming-xi-tong-shen-ru-jie-xi/
- 命令行使用可以帮助厘清概念，项目中涉及为专业用户，暂不考虑。
- https://github.com/ipfs/helia-ipns
    - https://ipfs.github.io/helia-ipns/
    - https://helia.io/modules/_helia_ipns.html
        - windows机器npm i helia失败。
        - ubuntu机器npm i helia，@helia/ipns，@helia/unixfs
        - 执行范例代码时报错。
        - 需要学习@libp2p/keychain开生成密钥。
- https://github.com/ipfs/js-ipns
    - https://ipfs.github.io/js-ipns/
        - 看起来不能单独使用，需要ipfs作为基础。
- https://github.com/ChainBook/IPFS-For-Chinese
- libp2p https://libp2p.io/
    - npm install libp2p
    - 太底层了。
- windows和ubuntu机器都安装ipfs desktop，可以使用 /ipns/xxxx 地址发布和浏览文件。是使用kubo库的。
- 增加todo项：
    - '60': helia ipns sample (libp2p/keychain)
      readme: |
        - read 2024.07.17. 14:00 draft
        - learn @libp2p/keychain https://github.com/libp2p/js-libp2p-keychain
        - learn sample https://helia.io/modules/_helia_ipns.html
    - '60': learn js implement of ipfs
      readme: |
        - https://docs.ipfs.tech/reference/js/api/#get-started
        - https://github.com/ipfs/kubo
        - https://github.com/elastic-ipfs/elastic-ipfs

---
<a href="mailto:huangyg@mars22.com?subject=关于2024.07.17.[helia, orbitdb sample]任务&body=日期: 2024.07.17.%0D%0A序号: 9%0D%0A手稿:../../draft/2024/07/20240717160000.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20240717160000"></a>
## 16:00~16:59
js: [helia, orbitdb sample]

- read 2024.07.15. 14:00 draft
    - index.js文件名错写为indx.js，改正后本地index.html和index.js测试还是没有反应。
    - 在ubuntu运行index.html，导入很久，点击没有反应。
    - 在ubuntu运行https://github.com/ipfs/helia 中的范例
        - 在同一个文件中，add、get正常，用helia新创的s2，新创h2和s3都可以get。
        - 用ipfs desktop读CID.toString()的值，正常。
        - 用multiformats/cid顺利生成了CID，在第二个文件可以读取。
```
import { CID } from 'multiformats/cid'
const addr =  CID.parse("bafkreifzjut3te2nhyekklss27nh3k72ysco7y32koao5eei66wof36n5e")
```
- 没有时间学习orbitdb，等ipns学习完再决定，因为只需要传递个别元数据，不需要完整数据库。先增加todo项：
      bind:
        - '60': learn Orbitdb
          readme: |
            - read 2024.07.15. 14:00 draft
            - read 2024.07.17. 16:00 draft
            - https://api.orbitdb.org/
