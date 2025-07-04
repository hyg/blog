# 2025.07.04.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~15:29	PSMD: [整理default模型](#20250704140000)
- 16:00~16:59	infra: [范例--利用js模块组合实现合同条款的组合。](#20250704160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 150 | 13380 | 7845 |
| PSMD | 4000 | 90 | 3910 | 1140 |
| ego | 2530 | 0 | 2530 | 1485 |
| infra | 2000 | 60 | 1940 | 240 |
| xuemen | 1000 | 0 | 1000 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 0 | 2000 | 2190 |
| js | 1000 | 0 | 1000 | 1860 |

---
waiting list:


- 30分钟时间片：
  - learn的第1号事项：佯谬及二次革命
  - infra的第2号事项：整理fsm、psm的split、joint操作。
  - js的第3号事项：ai.js

- 60分钟时间片：
  - PSMD的第1号事项：整理default模型
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - raw的第1号事项：设计三季度时间表
  - learn的第2号事项：量子物理的数学基础

- 90分钟时间片：
  - ego的第1号事项：基于真实数据标志财务报表
  - xuemen的第1号事项：mail server
  - js的第1号事项：openpgp v6.1.1.
  - ego的第2号事项：整理js对象检索的代码

- 195分钟时间片：
  - PSMD的第2号事项：machines model
  - xuemen的第2号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.04.[整理default模型]任务&body=日期: 2025.07.04.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250704.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250704140000"></a>
## 14:00 ~ 15:29
## PSMD: [整理default模型]

- default行为模式的表现形式非常多。
	- 需要在假设基础上才能定型，但无论怎么措辞都很容易激起抵触。
	- 如果一一列出，要求显性地选择，又超出负荷。往往半途而废。
- 一系列的default模式：
	- 每种选择最多五种负面行为，进行假设；
	- 其余问题一一列出，要求显性选择。

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.04.[范例--利用js模块组合实现合同条款的组合。]任务&body=日期: 2025.07.04.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250704.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250704160000"></a>
## 16:00 ~ 16:59
## infra: [范例--利用js模块组合实现合同条款的组合。]

- 测试在html中调用条款js和mjs。
- <script src="term1.js"></script>
	- Uncaught ReferenceError: exports is not defined
- 需要去掉js中的export，替换为var声明，可以使用。但是同名变量会冲突。
```
	<script src="term1.html.js"></script>
	<script>
		alert(exports);
		alert(metadata);
		function event1(){
			code.e1();
		}
		function event2(){
			code.e2();
		}
	</script>
```
- import本地mjs文件会提示“已拦截跨源请求：同源策略禁止读取位于 file:///D:/huangyg/git/js.sample/jsterms/term1.mjs 的远程资源。（原因：CORS 请求不是 http）”
- vscodium下载live server，在html下侧点击go live测试。
```
	<script type="module">
		import * as term1 from './term1.mjs';
		alert(term1.env);
		let btn1 = document.getElementById("event 1");
		let btn2 = document.getElementById("event 2");
		btn1.addEventListener("click", function () {
			code.e1();
			term1.code.e1();
		}
		);
		btn2.addEventListener("click", function () {
			code.e2();
			term1.code.e2();
		}
		);
	</script>
```
- 使用mjs不需要改变习惯，也可以解决重名问题，更好用。
- 追加时间试试嵌套条款的打包。
