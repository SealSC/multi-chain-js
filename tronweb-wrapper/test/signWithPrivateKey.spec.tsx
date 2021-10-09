import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'

describe('signTransaction', () => {

  it('signTransaction Funtion', async () => {
    let Action = await new Actions();
    let shouldSigntranction = await Action.actions.signWithPrivateKey();
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
    expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)
})
