import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
import {signTransactionField } from '../src/wrapper/fieldDefinition/signTransactionField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('signTransaction', () => {
   
  it('signTransaction Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      // //init web3
      // (window as any).web3 = await web3Install()
      // //expect
      // let Action = await new Actions();
      // let shouldSigntranction = await Action.actions.signTransaction({
      //   from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
      // },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
    
      // //equal
      // let sign = await (window as any).web3.eth.signTransaction({
      //   from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      // },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      // let results = new Result(PredefinedStatus.SUCCESS(sign));

      // expect(shouldSigntranction).to.deep.equal(results)
    }else{
      // //expect
      // let Action = await new Actions();
      // let shouldSigntranction = await Action.actions.signTransaction({
      //   from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829"
      // },'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      
      // //equal
      // let results = new Result(PredefinedStatus.ERROR_STATE(null));
      // expect(shouldSigntranction).to.deep.equal(results)
    }
  }).timeout(10000)
})
