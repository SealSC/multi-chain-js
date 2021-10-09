# protocol

<<<<<<< HEAD
### 概述
protocol库是mulit-chain-js制定的统一协议，服务于各个生态系统的各个功能,制定可与多个区块链统一使用的接口以及数据类型数据结构等

#### actions模块的示例代码
获取最新区块高度
```js
  // 初始化Actions
  let Action = await new Actions()
  // 调用getBlockNumber方法,获取最新区块高度
  let BlockNumber = await Action.actions.getBlockNumber()
```

#### connector模块的示例代码
连接钱包
```js
  // 初始化Actions
  let Action = await new Actions()
  // 调用link方法,连接钱包
  await Action.connector.link()
```

#### contract模块的示例代码
创建新的合约实例,调用合约name方法
```js 
  // 初始化Actions
  let Action = await new Actions()
  // 调用loadContract方法,创建新的合约实例
  let Contract = await Action.contract.loadContract(ERC20,'0xxxxxxxxxx')
  let name =  await Action.contract.offChainCall(Contract.data,'name',[],'','')
```

### SDK文档
文档:<https://github.com>
 
### SDK示例代码    
example：<https://github.com>

### 如何开始？

只需安装protocol库即可开始
```js
$ yarn add @sealsc/protocol
```
然后你需要创建一个 Action 的实例,按需设置provider(web3-wrapper SDK内置@metamask/detect-provider检测provider后注入)
```js
let Action = await new Actions()
```


=======
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
>>>>>>> main
