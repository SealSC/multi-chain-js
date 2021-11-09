# solana-wrapper

### Overview

provide unified interface conformed by our [protocol](https://github.com/SealSC/multi-chain-js/tree/main/protocol) to support Solana interaction.

### Install

```
yarn add @sealsc/solana-wrapper
```
 or 
```
npm install @sealsc/solana-wrapper
```    


### Testing
We are using [karma](http://karma-runner.github.io/6.3/intro/configuration.html) & [mocha](https://mochajs.org/) testing @sealsc/solana-wrapper SDK .

#### dependencies
node.js v12+   
karma v4.1.0   
mocha v6.1.4   

#### testing

Clone the project and checkout the solana-wrapper branch

```
git clone https://github.com/SealSC/multi-chain-js.git

cd multi-chain-js

cd ./solana-wrapper

yarn run test

```  

Using yarn run test we provided to run all test
```
yarn run test
```
Please make sure that the [Phantom](https://docs.phantom.app/) plugin wallet is installed in your browser. If it is not installed,[click Install Phantom](https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa) (installation will be ignored)

Open http://localhost:9876/ in a browser with a wallet environment to execute the test process.  

**Note**: yarn run test will try to open the test report with your chrome browser.


### Document

**[solana-wrapper](https://multi-chain-js-doc.seor.io/en/solana/Actions/)**  
