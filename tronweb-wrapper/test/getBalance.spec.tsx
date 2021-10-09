import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getBalance', () => {
  it('Wallet installed getBalanceFunction', async () => {
    (window as any).isPhantom = await web3InstallisPhantom()
    let Action = await new Actions()
    let shouldBalance = await Action.actions.getBalance('TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH');
    let Balance = await (window as any).isPhantom.trx.getBalance('TPCgprwAAFBSgryLYUDiY9ifAoUYwqd5SH')
    let results = new Result(PredefinedStatus.SUCCESS(Balance))
    expect(shouldBalance).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed getBalanceFunction', async () => {
    (window as any).isPhantom = {}
    let Action = await new Actions();
    let shouldBalance = await Action.actions.getBalance('TPCgprwAAFBSgryLYUDiY9ifAoUYw');
    let results = new Result(PredefinedStatus.ERROR_STATE(null))
    expect(shouldBalance).to.deep.equal(results)
  }).timeout(100000)
})
