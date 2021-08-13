import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Install } from '../src/wrapper/web3'
let detectEthereumProvider = require('@metamask/detect-provider')

describe('getAccount', () => {
  it('Wallet installed getAccountFunction', async ()=>{

    (window as any).web3 = await web3Install()
    let Action = await new Actions()
    let shouldAccount = await Action.actions.getAccount()
    let Account = await (window as any).web3.eth.getAccounts()
    let results = new Result(PredefinedStatus.SUCCESS(Account))
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getAccountFunction',async ()=>{
    (window as any).web3 = {}
    let Action = await new Actions();
    let shouldAccount = await Action.actions.getAccount();
      
    let results = new Result(PredefinedStatus.ERROR_STATE(null));
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)

})
