import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import finedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('getBalance', () => {
   
  it('getBalance Funtion', async() => {
    //init web3
    (window as any).web3 = await web3Install()
    //expect
    let Action = await new Actions();
    let shouldGetBalance = await Action.actions.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
    
    //equal
    let getBalance = await (window as any).web3.eth.getBalance('0x5B6C6709d1000db91252c8c6E84B8987D1D10829');
    let results = new Result(finedStatus.SUCCESS(getBalance));
   
    expect(shouldGetBalance).to.deep.equal(results)
    
  }).timeout(10000)
})
