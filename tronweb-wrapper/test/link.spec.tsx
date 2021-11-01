import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('link', () => {
  it('Wallet installed linkFunction', async () => {
    (window as any).isTronLink = await web3InstallisPhantom()
    let Action = await new Actions()
    let shouldAccount: any = await Action.connector.link();
    let accountSelect = [(window as any).tronWeb.defaultAddress.base58]
    let results = new Result(PredefinedStatus.SUCCESS(accountSelect))
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)

  it('Wallet not installed linkFunction', async () => {
    (window as any).isTronLink = {};
    let Action = await new Actions();
    let shouldGetBalance: any = await Action.connector.link();
    let results = new Result(PredefinedStatus.ERROR_STATE('Please go and install'))
    expect(shouldGetBalance).to.deep.equal(results)
  }).timeout(100000)


})
