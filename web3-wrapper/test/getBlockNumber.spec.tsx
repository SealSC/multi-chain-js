import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBlockNumber', () => {
   
  it('getBlockNumber Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      //init web3
      (window as any).web3 = await web3Install()
      //expect
      let Action = await new Actions();
      let shouldGetBlockNumber = await Action.actions.getBlockNumber();
    
      //equal
      let getBlockNumber = await (window as any).web3.eth.getBlockNumber();
      let results = new Result(PredefinedStatus.SUCCESS(getBlockNumber));

      expect(shouldGetBlockNumber).to.deep.equal(results)
    }else{
      //expect
      let Action = await new Actions();
      let shouldGetBlockNumber = await Action.actions.getBlockNumber();
    
      //equal
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldGetBlockNumber).to.deep.equal(results)
    }
  }).timeout(10000)
})
