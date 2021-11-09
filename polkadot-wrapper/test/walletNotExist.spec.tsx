import { isWeb3Injected } from '@polkadot/extension-dapp'


describe('Retrieve wallet', () => {
  
  it('Retrieve wallet', async ()=>{
   if(!isWeb3Injected){
      console.log('It is detected that you have not installed the polkadot{.js} wallet, so you cannot reach a certain test coverage')
   }
  }).timeout(100000)
 
}).timeout(1000000)
