import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
import {signTransactionField } from '../src/wrapper/fieldDefinition/signTransactionField'

describe('signTransactionPrivateKey', () => {

  it('Wallet installed signTransactionPrivateKey', async ()=>{
    try{
      (window as any).web3 = await web3Install()
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000",
        value:"1"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');

      let signTransaction = await (window as any).web3.eth.accounts.signTransaction({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000",
        value:"1"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890')
      let results = new Result(PredefinedStatus.SUCCESS(signTransaction));
      expect(shouldSigntranction).to.deep.equal(results)
    }catch(error){
      let Action = await new Actions();
      let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000",
        value:"1"
      },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldSigntranction).to.deep.equal(results)
    }
  }).timeout(100000)

  it('Wallet not installed signTransactionPrivateKey',async ()=>{

    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
        from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
        gas:"100000"
    },'4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
        
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldSigntranction).to.deep.equal(results)

  }).timeout(100000)

})
