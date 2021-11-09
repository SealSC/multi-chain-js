# polkadot-wrapper

### Overview

provide unified interface conformed by our [protocol](https://github.com/SealSC/multi-chain-js/tree/main/protocol) to support Polkadot interaction.

### Install

```
yarn add @sealsc/polkadot-wrapper
```
 or 
```
npm install @sealsc/polkadot-wrapper
```    

### Testing
We are using [karma](http://karma-runner.github.io/6.3/intro/configuration.html) & [mocha](https://mochajs.org/) testing @sealsc/polkadot-wrapper SDK .
We will using Westend network for the testing.  
This test will interact with the polkadot{.js} extension wallet in the browser, please pay attention to the pop-up window in the browser.  

#### dependencies
node.js v12+   
karma v4.1.0   
mocha v6.1.4   

#### testing

```
git clone https://github.com/SealSC/multi-chain-js.git

cd multi-chain-js

git checkout polkadot-wrapper

cd ./polkadot-wrapper

yarn run test

```  

Using yarn run test we provided to run all test
```
yarn run test
```
Please make sure that the [polkadot{.js}](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd) extension wallet is installed in your browser.    

Open http://localhost:9876/ in a browser with a wallet environment, and execute the test process on the Polkadot Relay Chain network. 

**Note**: yarn run test will try to open the test report with your chrome browser.

### Document

**[polkadot-wrapper](https://multi-chain-js-doc.seor.io/en/polkadot/)**  

