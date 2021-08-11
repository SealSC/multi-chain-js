import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('link', () => {
   
  it('link Funtion', async() => {
    let provider = await detectEthereumProvider();
    if(provider){
      //  //init web3
      // (window as any).web3 = await web3Install()
      // //expect
      // let Action = await new Actions();
      // let shouldGetBalance = await Action.connector.link();

      // //equal
      
      // let results = new Result(PredefinedStatus.SUCCESS(''));
      // expect(shouldGetBalance).to.deep.equal(results)
    }else{
      //expect
      // let Action = await new Actions();
      // let link = await Action.connector.link();
      // //equal
      // let results = new Result(PredefinedStatus.ERROR_STATE(null))
      // expect(link).to.deep.equal(results)
    }
  }).timeout(10000)
})
