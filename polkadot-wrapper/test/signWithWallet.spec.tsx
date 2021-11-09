import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { web3Accounts, web3Enable ,web3FromSource } from '@polkadot/extension-dapp'
import { stringToHex } from '@polkadot/util'

describe('SignWithWallet', () => {
  
  it('SignWithWallet', async ()=>{
    try{
      const extensions = await web3Enable('my cool dapp')
      let Action = await new Actions()
      let shouldSignWithWallet = await Action.actions.signWithWallet('1')
      expect(shouldSignWithWallet.code).to.equal(0)
    }catch(error){
      let Action = await new Actions()
      let shouldSignWithWallet = await Action.actions.signWithWallet('1')
      console.log(shouldSignWithWallet)
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldSignWithWallet).to.deep.equal(results)
    }
  }).timeout(100000)
 
}).timeout(1000000)
