import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import finedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('getBlockNumber', () => {
   
  it('getBlockNumber Funtion', async() => {
    //init web3
    (window as any).web3 = await web3Install()
    //expect
    let Action = await new Actions();
    let shouldGetBlockNumber = await Action.actions.getBlockNumber();
   
    //equal
    let getBlockNumber = await (window as any).web3.eth.getBlockNumber();
    let results = new Result(finedStatus.SUCCESS(getBlockNumber));

    expect(shouldGetBlockNumber).to.deep.equal(results)
    
  }).timeout(10000)
})
