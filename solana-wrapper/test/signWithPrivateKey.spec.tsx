import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'

describe('SignWithPrivateKey', () => {

  it('Wallet installed SignWithPrivateKey', async () => {
    let Action = await new Actions();
    let shouldSign = await Action.actions.signWithPrivateKey('3', '4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(shouldSign).to.deep.equal(results)

  }).timeout(100000)

}).timeout(1000000)
