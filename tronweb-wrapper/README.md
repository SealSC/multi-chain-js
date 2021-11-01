# tronweb-wrapper

### Overview

provide unified interface conformed by our [protocol](https://github.com/SealSC/multi-chain-js/tree/main/protocol) to support Tron interaction.

### Install

```
yarn add @sealsc/tronweb-wrapper
```
 or 
```
npm install @sealsc/tronweb-wrapper
```    


### Testing
We are using [karma](http://karma-runner.github.io/6.3/intro/configuration.html) & [mocha](https://mochajs.org/) testing @sealsc/tronweb-wrapper SDK .

#### dependencies
node.js v12+   
karma v4.1.0   
mocha v6.1.4   

#### testing

Clone the project and checkout the tronweb-wrapper branch

```
git clone https://github.com/SealSC/multi-chain-js.git

cd multi-chain-js

cd ./tronweb-wrapper

yarn run test

```  

Using yarn run test we provided to run all test
```
yarn run test
```
Please make sure that the [TronLink](https://www.tronlink.org/) plugin wallet is installed in your browser. If it is not installed,[click Install MetaMask](https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec) (installation will be ignored)   

Open http://localhost:9876/ in a browser with a wallet environment to execute the test process.

**Note**: yarn run test will try to open the test report with your chrome browser.



### Document

**[tronweb-wrapper](https://multi-chain-js-doc.seor.io/en/tronWeb/)**  

