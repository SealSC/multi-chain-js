import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'


describe('sendTransaction', () => {

  it('sendTransaction', async ()=>{

    let Action = await new Actions()
    let sendTransaction= await Action.actions.sendTransaction('2')
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(sendTransaction).to.deep.equal(results)

  }).timeout(100000)

})
