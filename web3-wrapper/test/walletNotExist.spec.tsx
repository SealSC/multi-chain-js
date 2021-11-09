import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')


describe('Retrieve wallet', () => {
  
  it('Retrieve wallet', async ()=>{
    let providers = await detectEthereumProvider();
    if(!providers){
      console.log('It is detected that you have not installed the MetaMask wallet, so you cannot reach a certain test coverage')
    }
  }).timeout(100000)
 
}).timeout(1000000)
