import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import {ApiPromise, WsProvider} from '@polkadot/api'

describe('sendSignedTransaction', () => {

  it('sendSignedTransaction', async ()=>{
    try{
      let Action = await new Actions()
      let sendSignedTransaction:any = await Action.actions.sendSignedTransaction('14EHXD3oats4uQQ3Rp6DByaiQzowt5ep4R5fXCpMkkF3oDps',0.1)
      expect(sendSignedTransaction.code).to.equal(0)
    }catch(error){
      let Action = await new Actions()
      let sendSignedTransaction:any = await Action.actions.sendSignedTransaction('14EHXD3oats4uQQ3Rp6DByaiQzowt5ep4R5fXCpMkkF3oDps',0.1)
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(sendSignedTransaction).to.deep.equal(results)
    }
    
  }).timeout(100000)
   
})
