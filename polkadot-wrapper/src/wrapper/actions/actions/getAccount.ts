import { Result } from '../result'
import PredefinedStatus from '../../consts/consts'
import { getAccountInterface } from '../classInterface'
import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
class GetAccount {
  public async getAccount() {
    const allAccounts = await web3Accounts();
    console.log(allAccounts,"allAccounts")
    let Account: any[] = []
    for (let i = 0; i < allAccounts.length; i++) {
      Account.push(allAccounts[i].address)
    }
    return new Result(PredefinedStatus.SUCCESS(Account))
  }
}
export { GetAccount }