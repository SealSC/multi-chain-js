# web3-wrapper

### Overview

provide unified interface conformed by our [protocol](https://github.com/SealSC/multi-chain-js/tree/main/protocol) to support EVM compatible chain interaction.

### Install

```
yarn add @sealsc/web3-wrapper
```
 or 
```
npm install @sealsc/web3-wrapper
```    

### Testing
We are using [karma](http://karma-runner.github.io/6.3/intro/configuration.html) & [mocha](https://mochajs.org/) testing @sealsc/web3-wrapper SDK .
Ethereum network the testing using will be dependence on MetaMask extension wallet.
This test will interact with the MetaMask extension wallet in the browser, please pay attention to the pop-up window in the browser.  

#### dependencies
node.js v12+   
karma v4.1.0   
mocha v6.1.4  
[MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)   

#### testing

```
git clone https://github.com/SealSC/multi-chain-js.git

cd multi-chain-js

cd ./web3-wrapper

yarn run test

```  

Using yarn run test we provided to run all test
```
yarn run test
```
Please make sure that the [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) extension wallet is installed in your browser.    

Open http://localhost:9876/ in a browser with a wallet environment, and execute the test process on the (Binance Smart Chain) BSC test network. 

**Note**: yarn run test will try to open the test report with your chrome browser.

### Document

**[web3-wrapper](https://multi-chain-js-doc.seor.io/en/web3/)**  

