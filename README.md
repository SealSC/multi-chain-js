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
