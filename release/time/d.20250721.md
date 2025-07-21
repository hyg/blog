# 2025.07.21.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版2(2c)。

<a id="index"></a>
- 14:00~19:14	learn: [去中心化节点](#20250721140000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 2961 | 10569 | 7440 |
| PSMD | 4000 | 90 | 3910 | 1080 |
| ego | 2530 | 290 | 2240 | 1335 |
| infra | 2000 | 335 | 1665 | 210 |
| xuemen | 1000 | 90 | 910 | 540 |
| raw | 1000 | 0 | 1000 | 390 |
| learn | 2000 | 1816 | 184 | 2265 |
| js | 1000 | 340 | 660 | 1620 |

---
waiting list:


- 30分钟时间片：
  - learn的第6号事项：react ink
  - js的第8号事项：copilot
  - js的第9号事项：node.js
  - PSMD的第10号事项：整理闫岸家政能力讨论

- 60分钟时间片：
  - ego的第1号事项：整理task及其相互关系
  - infra的第1号事项：结合AI进展重新规划架构
  - raw的第1号事项：设计新的季度时间表
  - js的第1号事项：LangChain.js

- 90分钟时间片：
  - learn的第1号事项：去中心化节点
  - PSMD的第2号事项：子1609:基于公司、合同
  - ego的第2号事项：整理js对象检索的代码
  - xuemen的第2号事项：mail server

- 195分钟时间片：
  - PSMD的第1号事项：machines model
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第3号事项：重新设计S2状态下的学门基本管理制度
  - ego的第6号事项：新版ego, instance or model, any manifest

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.07.21.[去中心化节点]任务&body=日期: 2025.07.21.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250721.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250721140000"></a>
## 14:00 ~ 19:14
## learn: [去中心化节点]

- 暂时人工从tixati查看peer的地址，然后手工写入测试代码。
- tcp 方案，公网节点可以收到数据，而NAT内收不到公网的数据。
- udp 方案，NAT数据倒是能收到，共用端口会让dht出现大量warning。用这段代码后确实可以过滤掉。
    - newListener事件是在插入listener之前emit
    - 在处理newListener事件过程中如果注册同event的listener，新listener会先插入。
```
warning: Error: Invalid data: Missing delimiter ":" [0x3a]
    at decode.find (D:\huangyg\git\js.sample\dht\node_modules\bencode\lib\decode.js:112:9)
    at decode.buffer (D:\huangyg\git\js.sample\dht\node_modules\bencode\lib\decode.js:157:20)
    at decode.next (D:\huangyg\git\js.sample\dht\node_modules\bencode\lib\decode.js:98:21)
    at Object.decode (D:\huangyg\git\js.sample\dht\node_modules\bencode\lib\decode.js:81:17)
    at Socket.onmessage (D:\huangyg\git\js.sample\dht\node_modules\k-rpc-socket\index.js:64:29)
    at Socket.emit (node:events:530:35)
    at UDP.onMessage [as onmessage] (node:dgram:942:8)
```
```
var bfirst = true ;
socket.on('newListener', (event,listener) => {
    console.log("new listener: ",event,listener.length,listener);
    if (event === 'message') {
        // 让库后面再绑定的监听器排在最前
        //const list = socket.rawListeners('message');
        //console.log("list.length:",list.length);
        if (bfirst) {
            bfirst = false;
            //console.log("bfirst:",bfirst)
            //const dhtHandler = listener;
            //socket.removeAllListeners('message');
            //socket.removeAllListeners('newListener');
            socket.on('message', function mymessagelistener(msg, rinfo){
                // 过滤：DHT 报文首字节一定是 0x64
                console.log(`udp server received data: ${msg} from ${rinfo.address}:${rinfo.port}`)
                //const isDHT = msg.length && msg[0] === 0x64;
                //buf.slice(0,4).toString()==='d1:a'（更严谨）。
                const isDHT = msg.length >= 4 && ['d1:a', 'd2:i', 'd1:q', 'd1:r', 'd1:e'].some(m => msg.slice(0, 4).toString().startsWith(m));
                if (isDHT) {
                    console.log("由DHT处理");
                    listener(msg, rinfo);   // 给 DHT
                }else handleAppMessage(msg, rinfo);   // 给业务
            });
        }
    }
    var list = socket.rawListeners('message');
    console.log("end list:",list.length,list);
    if(list.length > 1){
        socket.removeListener('message',socket.rawListeners('message')[1]);
    }
});

const dht = new DHT({ socket });   // 让 DHT 复用 socket
```
```
D:\huangyg\git\js.sample\dht>node p2p.mjs
new listener:  message 2 [Function: onmessage]
new listener:  message 2 [Function: mymessagelistener]
end list: 0 []
end list: 1 [ [Function: mymessagelistener] ]
new listener:  error 1 [Function: onerror]
end list: 2 [ [Function: mymessagelistener], [Function: onmessage] ]
new listener:  listening 0 [Function: onlistening]
end list: 1 [ [Function: mymessagelistener] ]
new listener:  error 1 [Function (anonymous)]
end list: 1 [ [Function: mymessagelistener] ]
new listener:  listening 0 [Function (anonymous)]
end list: 1 [ [Function: mymessagelistener] ]
new listener:  error 0 [Function: removeListeners]
end list: 1 [ [Function: mymessagelistener] ]
new listener:  listening 0 [Function: onListening]
end list: 1 [ [Function: mymessagelistener] ]
udp server linstening 20000.
now listening
ready
```
- 下一个时间片设计一套简单应用协议，实践看看后面会遇到什么。
