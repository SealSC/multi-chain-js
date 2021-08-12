import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('SignWithWallet', () => {
   
  it('SignWithWallet Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      //init web3
      (window as any).web3 = await web3Install()
      //expect
      let Action = await new Actions();
      let shouldSign = await Action.actions.signWithWallet('2','0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      //equal
      let sign = await (window as any).web3.eth.personal.sign((window as any).web3.utils.utf8ToHex("2"),'0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      let results = new Result(PredefinedStatus.SUCCESS(sign));
      expect(shouldSign).to.deep.equal(results)
    }else{
      //expect
      let Action = await new Actions();
      let shouldGetTransactionCount = await Action.actions.signWithWallet('2','0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
      //equal
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldGetTransactionCount).to.deep.equal(results)
    }
  }).timeout(1000000)
}).timeout(1000000)
