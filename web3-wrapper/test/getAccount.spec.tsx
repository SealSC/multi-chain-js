import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import finedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'

describe('getAccount', () => {
   
  it('getAccount Funtion', async() => {
    //init web3
    (window as any).web3 = await web3Install()
    //expect
    let Action = await new Actions();
    let shouldGetAccount = await Action.actions.getAccount();

    //equal
    let reults = new Result(finedStatus.DEFAULT_STATE(null))
    console.log(shouldGetAccount)
    console.log(await (window as any).web3.eth.getBlockNumber())

    expect(shouldGetAccount).to.deep.equal(reults)

  }).timeout(10000)
})
