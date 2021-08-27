import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Accounts, web3Enable ,web3FromSource } from '@polkadot/extension-dapp';

describe('getAccount', () => {
  it('Wallet installed getAccountFunction', async ()=>{

    let Action  = await new Actions()
    const extensions = await web3Enable('my cool dapp');
    let shouldAccount = await Action.actions.getAccount()
   
    const allAccounts = await web3Accounts();
    let results = new Result(PredefinedStatus.SUCCESS(allAccounts))
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)

  it('Wallet not installed getAccountFunction',async ()=>{

  }).timeout(100000)

})
