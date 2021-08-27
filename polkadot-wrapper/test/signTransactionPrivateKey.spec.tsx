import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import {signTransactionField } from '../src/wrapper/fieldDefinition/signTransactionField'

describe('signTransactionPrivateKey', () => {

  it('Wallet installed signTransactionPrivateKey', async ()=>{

    let Action = await new Actions()
    let signTransactionPrivateKey= await Action.actions.signTransactionPrivateKey('2','5DFojLCUUsfZV26fg4YUj5bbocMMdCdydEBD2KeFWrVBPw1h')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(signTransactionPrivateKey).to.deep.equal(results)
    
  }).timeout(100000)

})
