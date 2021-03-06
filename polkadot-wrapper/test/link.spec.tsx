import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus  from '../src/wrapper/consts/consts'
import {ApiPromise, WsProvider} from '@polkadot/api'
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider
} from '@polkadot/extension-dapp';

describe('link', () => {
  it('linkFunction', async ()=>{
    const extensions = await web3Enable('my cool dapp');
    const allAccounts = await web3Accounts();
    let Account: any[] = []
    for (let i = 0; i < allAccounts.length; i++) {
      Account.push(allAccounts[i].address)
    }
    let results = new Result(PredefinedStatus.SUCCESS(Account))
    let Action = await new Actions()
    let linkResult = await Action.connector.link()

    expect(linkResult).to.deep.equal(results)
  }).timeout(100000)
})
