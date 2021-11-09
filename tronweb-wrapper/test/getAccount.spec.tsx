import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3InstallisPhantom } from '../src/wrapper/tronweb'

describe('getAccount', () => {
  it('Wallet installed getAccountFunction', async () => {
    console.log("This test will interact with the TronLink wallet in the browser, please pay attention to the pop-up window in the browser.")
    try{
      (window as any).isTronLink = await web3InstallisPhantom()
      let Action = await new Actions()
      let shouldAccount = await Action.actions.getAccount()
      let Account = await (window as any).isTronLink.defaultAddress.base58
      let data = [Account]
      let results = new Result(PredefinedStatus.SUCCESS(data))
      expect(shouldAccount).to.deep.equal(results)
    }catch(err){
      let Action = await new Actions();
      let shouldAccount = await Action.actions.getAccount();
      let results = new Result(PredefinedStatus.ERROR_STATE(null));
      expect(shouldAccount).to.deep.equal(results)
    }
    
  }).timeout(100000)

  it('Wallet not installed getAccountFunction', async () => {
    (window as any).isTronLink = {}
    let Action = await new Actions();
    let shouldAccount = await Action.actions.getAccount();
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldAccount).to.deep.equal(results)
  }).timeout(100000)

})
