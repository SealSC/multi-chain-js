import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'

describe('signTransactionPrivateKey', () => {

  it('Wallet installed signTransactionPrivateKey', async () => {
    let Action = await new Actions();
    let shouldSigntranction = await Action.actions.signTransactionPrivateKey({
      from: "0x5B6C6709d1000db91252c8c6E84B8987D1D10829",
      gas: "100000",
      value: "1"
    }, '4349054ad0a292657a316300d5112b48f0633c2cb3d8ece672077aa852635890');
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null))
    expect(shouldSigntranction).to.deep.equal(results)
  }).timeout(100000)

})
