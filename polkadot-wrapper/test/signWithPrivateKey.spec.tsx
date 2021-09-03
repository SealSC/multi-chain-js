import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'

describe('SignWithPrivateKey', () => {
  
  it('SignWithPrivateKey', async ()=>{

    let Action = await new Actions()
    let signWithPrivateKey= await Action.actions.signWithPrivateKey('2','5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(signWithPrivateKey).to.deep.equal(results)

  }).timeout(100000)

}).timeout(1000000)
