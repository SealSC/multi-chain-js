import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
 

describe('getTransactionCount', () => {
   
  it('getTransactionCountFunction', async ()=>{
    let Action = await new Actions()
    let shouldTransaction= await Action.actions.getTransactionCount('5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(shouldTransaction).to.deep.equal(results)
  }).timeout(100000)
 
})
