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
    try{
      const extensions = await web3Enable('my cool dapp');
      if (extensions.length === 0) {
        return new Result(PredefinedStatus.ERROR_STATE(null))
      }
      const allAccounts = await web3Accounts();
      return new Result(PredefinedStatus.SUCCESS(allAccounts))
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { Connector }