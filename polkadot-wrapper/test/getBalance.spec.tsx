import { Actions } from '../src/wrapper/wrapper'
import { Result } from '../src/wrapper/actions/result'
import PredefinedStatus from '../src/wrapper/consts/consts'
import { web3Accounts } from '@polkadot/extension-dapp';
import Decimal from 'decimal.js'


describe('getBalance', () => {

  it('getBalanceFunction', async () => {
    const allAccounts = await web3Accounts();
    const account = allAccounts[0];
    const { nonce, data: balance } = await (window as any).api.query.system.account(account.address)
    const balanceNumber = balance.free
    let free = await new Decimal(`${balanceNumber}`).div(new Decimal(Math.pow(10, 10))).toString()
    let Action = await new Actions()
    let shouldBalance = await Action.actions.getBalance(account.address)
    let results = new Result(PredefinedStatus.SUCCESS(free))
    expect(shouldBalance).to.deep.equal(results)
  }).timeout(100000)

})
