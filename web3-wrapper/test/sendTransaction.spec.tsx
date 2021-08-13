import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

let detectEthereumProvider = require('@metamask/detect-provider')

describe('sendTransaction', () => {

  it('sendTransaction Funtion', async() => {
    // let provider = await detectEthereumProvider();
    // try{
    //   if(provider){
    //     //init web3
    //     (window as any).web3 = await web3Install()
      
    //     let Action = await new Actions();
    //     let shouldsendTranction = await Action.actions.sendTransaction({
    //       from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
    //       to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    //       value: '1'
    //     });
    //     if(shouldsendTranction.data) expect(shouldsendTranction.data.status).to.be.true
    
    //   }else{
    //     //expect
    //     let Action = await new Actions();
    //     let shouldsendTranction = await Action.actions.sendTransaction({
    //       from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
    //       to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    //       value: '1'
    //     });
    //     let results = new Result(PredefinedStatus.ERROR_STATE(null));
    //     if(shouldsendTranction.data) expect(shouldsendTranction.data.status).to.not.true
       
    //   }
    // }catch(error){
    //   let Action = await new Actions();
    //   let shouldsendTranction = await Action.actions.sendTransaction({
    //     from:"0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
    //     to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    //     value: '1'
    //   });
    //   let results = new Result(PredefinedStatus.ERROR_STATE(null));
    //   if(shouldsendTranction.data) expect(shouldsendTranction.data.status).to.not.true
    // }
  }).timeout(1000000)
})
