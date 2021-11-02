import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('SignWithWallet', () => {

  it('Wallet installed SignWithWallet', async () => {
    (window as any).isTronLink = await web3InstallisPhantom()
    let Action = await new Actions();
    let shouldSign = await Action.actions.signWithWallet("eee");
    let results = new Result(PredefinedStatus.NOT_SUPPORT(null));
    expect(shouldSign).to.deep.equal(results)
  }).timeout(100000)

}).timeout(1000000)