import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import { web3Accounts, web3Enable ,web3FromSource } from '@polkadot/extension-dapp';
 
describe('getAccount', () => {
  it('getAccountFunction', async ()=>{
   
    let Action  = await new Actions()
    await Action.init('wss://rpc.polkadot.io')
    const extensions = await web3Enable('my cool dapp');
  
    let shouldAccount = await Action.actions.getAccount()
    const allAccounts = await web3Accounts();
    let results = new Result(PredefinedStatus.SUCCESS(allAccounts))
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)

})
