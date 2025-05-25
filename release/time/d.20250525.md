# 2025.05.25.
日小结

<a id="top"></a>
根据[ego模型时间接口](https://gitee.com/hyg/blog/blob/master/timeflow.md)，今天绑定模版1(1d)。

<a id="index"></a>
- 14:00~14:44	ego: [entry的按月归并](#20250525140000)
- 14:30~14:44	raw: [脚脉](#20250525143000)
- 16:00~17:59	learn: [真随机数发生器](#20250525160000)

---
season stat:

| task | alloc | sold | hold | todo |
| :---: | ---: | ---: | ---: | ---: |
| total | 13530 | 4407 | 9123 | 7095 |
| PSMD | 4000 | 1080 | 2920 | 1275 |
| ego | 2530 | 1350 | 1180 | 1440 |
| infra | 2000 | 600 | 1400 | 240 |
| xuemen | 1000 | 269 | 731 | 450 |
| raw | 1000 | 105 | 895 | 450 |
| learn | 2000 | 883 | 1117 | 2010 |
| js | 1000 | 120 | 880 | 1230 |

---
waiting list:


- 30分钟时间片：
  - learn的第3号事项：重新规划vscodium workspace
  - learn的第4号事项：狄拉克算子
  - js的第5号事项：rxdb
  - js的第6号事项：LokiJS

- 60分钟时间片：
  - ego的第1号事项：entry的按月归并
  - learn的第1号事项：真随机数发生器
  - raw的第1号事项：新版food plan
  - js的第1号事项：IndexedDB + dexie

- 90分钟时间片：
  - infra的第1号事项：范例--利用js模块组合实现合同条款的组合。
  - PSMD的第2号事项：根据香港《公司條例》调整1609的部署方案 https://www.elegislation.gov.hk/hk/cap622
  - infra的第2号事项：schema立项。
  - PSMD的第3号事项：整理新版本term的manifest code

- 195分钟时间片：
  - PSMD的第1号事项：子1609:基于公司、合同
  - xuemen的第1号事项：kernel模型升级
  - xuemen的第2号事项：重新设计S2状态下的学门基本管理制度
  - ego的第4号事项：新版基础模型

---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.25.[entry的按月归并]任务&body=日期: 2025.05.25.%0D%0A序号: 5%0D%0A手稿:../../draft/2025/20250525.01.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250525140000"></a>
## 14:00 ~ 14:44
## ego: [entry的按月归并]

- 了解indexeddb，其它时间再结合dexie。
    - https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API
    - https://www.ruanyifeng.com/blog/2018/07/indexeddb.html
    - https://www.runoob.com/html/html5-web-api-indexeddb.html
- 查询功能并不强，还是需要自己实现。而且偏向于浏览器环境使用，暂时不用在这个功能。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.25.[脚脉]任务&body=日期: 2025.05.25.%0D%0A序号: 6%0D%0A手稿:../../draft/2025/20250525.02.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250525143000"></a>
## 14:30 ~ 14:44
## raw: [脚脉]

- 左脚
    - 足背动脉不在第一第二砣骨之间的缝，而偏向第二砣骨上方。寸脉关脉中偏浅、尺脉中偏深，寸脉关脉清晰有力，尺脉模糊。
    - 第一次足后动脉不明显，手指摸不清晰，但是手指按压久了脚麻。从右脚摸到后再试，在相同位置摸到，深度中、清晰。
- 右脚
    - 足背动脉在第一第二砣骨之间，关脉浅且清晰有利，寸脉尺脉模糊。
    - 足后动脉在内测踝骨后侧向下，摸到一条横向后方韧带上沿，有一指宽的脉搏，深度中、清晰有力。
---
<a href="mailto:huangyg@mars22.com?subject=关于2025.05.25.[真随机数发生器]任务&body=日期: 2025.05.25.%0D%0A序号: 8%0D%0A手稿:../../draft/2025/20250525.03.md%0D%0A---请勿修改邮件主题及以上内容 从下一行开始写您的想法---%0D%0A">[email]</a> | [top](#top) | [index](#index)
<a id="20250525160000"></a>
## 16:00 ~ 17:59
## learn: [真随机数发生器]

### https://sca.gov.cn/sca/zxfw/2017-04/25/content_1011723.shtml

### https://www.random.org/

- https://www.random.org/clients/http/
- D:\huangyg\git\js.sample\random\random.js
```
D:\huangyg\git\js.sample\random>node random
{
  status: 200,
  statusText: 'OK',
  headers: Object [AxiosHeaders] {
    date: 'Sun, 25 May 2025 09:00:09 GMT',
    'content-type': 'text/plain;charset=UTF-8',
    'content-length': '85',
    connection: 'keep-alive',
    'x-frame-options': 'SAMEORIGIN',
    'content-security-policy': "frame-ancestors 'self'",
    'x-xss-protection': '1',
    'set-cookie': [
      'RDOSESSION=c63bf88115de1b1b3ec6b4087e9c9f03; expires=Mon, 26 May 2025 09:00:09 GMT; Max-Age=86400; path=/; domain=.random.org; secure',
      '__cflb=02DiuDuFKED4b7saX36KiNaNK8QPPit7Tf2pDLfnLokxb; SameSite=Lax; path=/; expires=Sun, 01-Jun-25 09:00:09 GMT; HttpOnly'
    ],
    expires: 'Thu, 19 Nov 1981 08:52:00 GMT',
    'cache-control': 'no-store, no-cache, must-revalidate',
    pragma: 'no-cache',
    'rdo-authenticated-login': '-',
    vary: 'Accept-Encoding',
    'x-content-type-options': 'nosniff',
    'access-control-allow-origin': '*',
    'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'cf-cache-status': 'DYNAMIC',
    'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
    server: 'cloudflare',
    'cf-ray': '9453d74029b16a26-LAX'
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [ 'xhr', 'http', 'fetch' ],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function [FormData]], Blob: [class Blob] },
    validateStatus: [Function: validateStatus],
    headers: Object [AxiosHeaders] {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined,
      'User-Agent': 'axios/1.9.0',
      'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    method: 'get',
    url: 'https://www.random.org/integers/?num=16&min=-65535&max=65536&col=1&base=10&format=plain&rnd=new',
    allowAbsoluteUrls: true,
    data: undefined
  },
  request: <ref *1> ClientRequest {
    _events: [Object: null prototype] {
      abort: [Function (anonymous)],
      aborted: [Function (anonymous)],
      connect: [Function (anonymous)],
      error: [Function (anonymous)],
      socket: [Function (anonymous)],
      timeout: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: true,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: false,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 0,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: true,
    _header: 'GET /integers/?num=16&min=-65535&max=65536&col=1&base=10&format=plain&rnd=new HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'User-Agent: axios/1.9.0\r\n' +
      'Accept-Encoding: gzip, compress, deflate, br\r\n' +
      'Host: www.random.org\r\n' +
      'Connection: keep-alive\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype] {},
      freeSockets: [Object: null prototype],
      keepAliveMsecs: 1000,
      keepAlive: true,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(shapeMode)]: false,
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'GET',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    joinDuplicateHeaders: undefined,
    path: '/integers/?num=16&min=-65535&max=65536&col=1&base=10&format=plain&rnd=new',
    _ended: true,
    res: IncomingMessage {
      _events: [Object],
      _readableState: [ReadableState],
      _maxListeners: undefined,
      socket: null,
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      joinDuplicateHeaders: undefined,
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [TLSSocket],
      _consuming: false,
      _dumped: false,
      req: [Circular *1],
      _eventsCount: 4,
      responseUrl: 'https://www.random.org/integers/?num=16&min=-65535&max=65536&col=1&base=10&format=plain&rnd=new',
      redirects: [],
      [Symbol(shapeMode)]: true,
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 44,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'www.random.org',
    protocol: 'https:',
    _redirectable: Writable {
      _events: [Object],
      _writableState: [WritableState],
      _maxListeners: undefined,
      _options: [Object],
      _ended: true,
      _ending: true,
      _redirectCount: 0,
      _redirects: [],
      _requestBodyLength: 0,
      _requestBodyBuffers: [],
      _eventsCount: 3,
      _onNativeResponse: [Function (anonymous)],
      _currentRequest: [Circular *1],
      _currentUrl: 'https://www.random.org/integers/?num=16&min=-65535&max=65536&col=1&base=10&format=plain&rnd=new',
      [Symbol(shapeMode)]: true,
      [Symbol(kCapture)]: false
    },
    [Symbol(shapeMode)]: false,
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kChunkedBuffer)]: [],
    [Symbol(kChunkedLength)]: 0,
    [Symbol(kSocket)]: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'www.random.org',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 9,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'www.random.org',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _writableState: [WritableState],
      allowHalfOpen: false,
      _maxListeners: undefined,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: [TLSWrap],
      _requestCert: true,
      _rejectUnauthorized: true,
      timeout: 5000,
      parser: null,
      _httpMessage: null,
      autoSelectFamilyAttemptedAddresses: [Array],
      [Symbol(alpncallback)]: null,
      [Symbol(res)]: [TLSWrap],
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: -1,
      [Symbol(kHandle)]: [TLSWrap],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
        _idleTimeout: 5000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 1355,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 27,
        [Symbol(triggerId)]: 25,
        [Symbol(kAsyncContextFrame)]: undefined
      },
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(shapeMode)]: true,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: false,
      [Symbol(kSetKeepAlive)]: true,
      [Symbol(kSetKeepAliveInitialDelay)]: 1,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: [Object]
    },
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      accept: [Array],
      'user-agent': [Array],
      'accept-encoding': [Array],
      host: [Array]
    },
    [Symbol(errored)]: null,
    [Symbol(kHighWaterMark)]: 16384,
    [Symbol(kRejectNonStandardBodyWrites)]: false,
    [Symbol(kUniqueHeaders)]: null
  },
  data: '-47249\n' +
    '7977\n' +
    '-5403\n' +
    '54714\n' +
    '35294\n' +
    '19731\n' +
    '-10703\n' +
    '-34729\n' +
    '10037\n' +
    '-39030\n' +
    '-6519\n' +
    '57930\n' +
    '-39544\n' +
    '-42724\n' +
    '-33392\n' +
    '39088\n'
}

D:\huangyg\git\js.sample\random>node random
40329
-29738
45289
40965
57399
43116
51396
7152
58214
-56041
31796
32038
-25709
25353
-21095
-63944
```
- 每天有配额：Wait for your allowance to be topped up automatically. You get a free top-up of up to 200,000 bits every day (just after midnight UTC) until you reach the default allowance of 1,000,000 bits. If the server is lightly loaded, you may get a free top-up earlier, but don't count on it.
- 学习entropy pool熵池概念.以及各cpu厂,os厂的原生接口.
- 查看windows熵池大小 powershell: Get-ComputerInfo | Select-Object -ExpandProperty OSRandomizationPoolSize
```
PS C:\Users\hyg> Get-ComputerInfo | Select-Object -ExpandProperty OSRandomizationPoolSize
Select-Object : 找不到属性“OSRandomizationPoolSize”。
所在位置 行:1 字符: 20
+ ... -ComputerInfo | Select-Object -ExpandProperty OSRandomizationPoolSize
+                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidArgument: (Microsoft.Power...ds.ComputerInfo:PSObject) [Select-Object]，PSArgument
    Exception
    + FullyQualifiedErrorId : ExpandPropertyNotFound,Microsoft.PowerShell.Commands.SelectObjectCommand
```
- 增加了一些TRNG,追加时间试用一下.尽量试用本地数据,以避免外部提供商发来随机数时保留一份记录.