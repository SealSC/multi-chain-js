import { Result } from '../wrapper/actions/result'
import PredefinedStatus  from '../wrapper/consts/consts'
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3ListRpcProviders,
  web3UseRpcProvider
} from '@polkadot/extension-dapp';

class Connector {
  public async link(){
    const extensions = await web3Enable('my cool dapp');
      
    const allAccounts = await web3Accounts();
    return new Result(PredefinedStatus.SUCCESS(allAccounts))
  }
}
export { Connector }