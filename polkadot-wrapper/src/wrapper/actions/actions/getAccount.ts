import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import {getAccountInterface } from '../classInterface'
import { web3Accounts, web3Enable ,web3FromSource } from '@polkadot/extension-dapp';

class GetAccount{
  public async getAccount(){
    const allAccounts = await web3Accounts();
    return new Result(PredefinedStatus.SUCCESS(allAccounts))
  }
}
export { GetAccount }