import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getAccount', () => {
   
  it('getAccount Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      //init web3
      (window as any).web3 = await web3Install()
          
      //expect
      let Action = await new Actions();
      let shouldGetAccount = await Action.actions.getAccount();

      //equal
      let reults = new Result(PredefinedStatus.DEFAULT_STATE(null))

      expect(shouldGetAccount).to.deep.equal(reults)
    }else{
      //expect
      let Action = await new Actions();
      let shouldGetAccount = await Action.actions.getAccount();

      //equal
      let reults = new Result(PredefinedStatus.DEFAULT_STATE(null))

      expect(shouldGetAccount).to.deep.equal(reults)
    }
   

  }).timeout(10000)
})
