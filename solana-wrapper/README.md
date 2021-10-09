# solana-wrapper

### 概述
solana-wrapper库是一系列模块的集合，服务于solana生态系统的各个功能, 使用插件模型和统一接口来完成区块​​链交易的构建、签名、发送等常见的区块链功能

* solana-actions 用来与以太坊区块链交互
* solana-connector 用来与TronLink钱包进行交互
* solana-contract 用来与波场区块链合约交互

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

只需安装tronWeb-wrapper库即可开始
```js
$ yarn add @sealsc/solana-wrapper 
```
然后你需要创建一个 Action 的实例
```js
let Action = await new Actions()
```
运行ts文件和示例
```js
$ yarn test
```
