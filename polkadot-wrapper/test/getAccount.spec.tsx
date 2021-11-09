import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';

describe('getAccount', () => {
  it('getAccountFunction', async () => {
    console.log('This test will interact with the polkadot{.js} extension wallet in the browser, please pay attention to the pop-up window in the browser.')
    let Action = await new Actions()
    await Action.init('wss://westend-rpc.polkadot.io')
    const extensions = await web3Enable('my cool dapp');
    let shouldAccount = await Action.actions.getAccount()
    const allAccounts = await web3Accounts();
    let Account: any[] = []
    for (let i = 0; i < allAccounts.length; i++) {
      Account.push(allAccounts[i].address)
    }
    let results = new Result(PredefinedStatus.SUCCESS(Account))
    expect(shouldAccount).to.deep.equal(results)

  }).timeout(100000)

})
