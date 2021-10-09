### multi-chain-js

#### 概述
multi-chain-js多链支持js sdk，为多链交互提供统一接口,可帮助您编写可与多个区块链一起使用的代码

选择您支持链的SDK插件,multi-chain-js目前提供：
* @sealsc/web3-wrapper   (ETH链)
* @sealsc/tronweb-wrapper   (TRON链)
* @sealsc/polkadot-wrapper   (DOT链)
* @sealsc/solana-wrapper   (SOL链)

### SDK使用说明
引入wrapper库
```
 $ yarn add @sealsc/***-wrapper 
```
 or 
```
 $ npm install @sealsc/***-wrapper 
```    

然后你需要创建一个 Actions 的实例    
按需设置provider(web3内置@metamask/detect-provider检测provider后注入)
```js
 import { Actions } from '@sealsc/web3-wrapper'
 let Action = await new Actions()
```
    
可以开始使用Action内各个模块方法了。    
Action内包含模块
* actions 用来与区块链交互
* connector 用来与生态系统钱包进行交互
* contract 用来与智能合约交互

### SDK示例代码    
example：<https://github.com>

### SDK说明
#### @sealsc/web3-wrapper
基于以太坊生态系统的各个功能    
文档：<https://github.com>
#### @sealsc/tronweb-wrapper
基于波场生态系统的各个功能    
文档：<https://github.com>
#### @sealsc/polkadot-wrapper
基于波卡生态系统的各个功能    
文档：<https://github.com>
#### @sealsc/solana-wrapper
基于solana生态系统的各个功能    
文档：<https://github.com>

 