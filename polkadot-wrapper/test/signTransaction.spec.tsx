import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'

describe('signTransaction', () => {
   
  it('signTransaction Function', async() => {
    let Action = await new Actions()
    let signTransaction= await Action.actions.signTransaction('2','5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(signTransaction).to.deep.equal(results)
  }).timeout(100000)

})
