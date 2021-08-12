import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
import {signTransactionField } from '../src/wrapper/fieldDefinition/signTransactionField'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('signTransactionPrivateKey', () => {
   
  it('signTransactionPrivateKey Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      //init web3
      (window as any).web3 = await web3Install()
      //expect
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
    
      let signTransaction = await (window as any).web3.eth.accounts.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890')
      let results = new Result(PredefinedStatus.SUCCESS(signTransaction));
      expect(shouldSigntranction).to.deep.equal(results)
    }else{
      //expect
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
      
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldSigntranction).to.deep.equal(results)
    }
  }).timeout(10000)
})
