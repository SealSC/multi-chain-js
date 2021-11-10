# multi-chain-js

#### Overview
multi-chain-js provides a unified interface for multi-chain interaction.   
you only need to implement the business logic once to be able to access different blockchain systems through this SDK without changing code.

supported chains:  

**Ethereum**  
**Polkadot**  
**Solana**  
**Tron**    

### Install

we separated different chains support lib in different npm package:  

**[@sealsc/polkadot-wrapper](https://www.npmjs.com/package/@sealsc/polkadot-wrapper)**  
**[@sealsc/web3-wrapper](https://www.npmjs.com/package/@sealsc/web3-wrapper)**  
**[@sealsc/solana-wrapper](https://www.npmjs.com/package/@sealsc/solana-wrapper)**  
**[@sealsc/tronweb-wrapper](https://www.npmjs.com/package/@sealsc/tronweb-wrapper)**  

so you can just simply install them from NPM:  
```
yarn add @sealsc/***-wrapper 
```
 or 
```
npm install @sealsc/***-wrapper 
```    

### dependencies
The SDK is using extension wallets for the blockchain RPC interact, so you must install the extension wallet of the blockchain you want to access.

[polkadot{.js} for Polkadot](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd)  
[MetaMask for Ethereum](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)  
[Phantom for Solana](https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa)  
[TronLink for Tron](https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec)    

### Usage  

```js
/*
 * this is example is for using this sdk to interaction with Ethereum.
 * multi-chain-js provide unified interface for different chains, 
 * if you want to interaction with different chains, just import the right package.
 */
import { Actions } from '@sealsc/web3-wrapper'
let Action = await new Actions()
```

### Example
[code](https://github.com)  
[online-demo](https://example-multi-chain-js.seor.io/#/)  

### Documents  
**[polkadot-wrapper](https://multi-chain-js-doc.seor.io/en/polkadot/)**  
**[web3-wrapper](https://multi-chain-js-doc.seor.io/en/web3/)**  
**[solana-wrapper](https://multi-chain-js-doc.seor.io/en/solana/Actions/)**  
**[tronweb-wrapper](https://multi-chain-js-doc.seor.io/en/tronWeb/)**  
