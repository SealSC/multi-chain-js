import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('getBlock', () => {
   
  it('getBlock Funtion', async() => {
    // //init web3
    // (window as any).web3 = await web3Install()
    // //expect
    // let Action = await new Actions();
    // let shouldGetBlock = await Action.actions.getBlock(9603492);
    // console.log(shouldGetBlock)
    // //equal
    // let getBlock = await (window as any).web3.eth.getBlock(9603492);
    // let results = new Result(PredefinedStatus.SUCCESS(getBlock));
    // console.log(results)
    // expect(shouldGetBlock).to.deep.equal(results)
    
  }).timeout(10000)
})
