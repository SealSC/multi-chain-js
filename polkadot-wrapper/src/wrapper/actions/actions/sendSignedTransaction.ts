import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { web3Accounts, web3Enable , web3FromSource} from '@polkadot/extension-dapp';
import { Actions } from '../index'

class SendSignedTransaction{
  public async sendSignedTransaction(address:string,count:string|number){
    let ActionsIn = new Actions()
    let api = await ActionsIn.init('wss://rpc.polkadot.io');
    const allAccounts = await web3Accounts();
    const account = allAccounts[0];
    console.log(account)
    const transferExtrinsic = api.data.tx.balances.transfer(address, count)
    const injector = await web3FromSource(account.meta.source);
    transferExtrinsic.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
      if (status.isInBlock) {
        console.log(`Completed at block hash #${status.asInBlock.toString()}`);
        return new Result(PredefinedStatus.SUCCESS(status.asInBlock.toString()))
      } else {
          console.log(`Current status: ${status.type}`);
      }
    }).catch((error: any) => {
        console.log(':( transaction failed', error);
        return new Result(PredefinedStatus.ERROR_STATE(null))
    });
    return new Result(PredefinedStatus.SUCCESS(null))
  }
}
export { SendSignedTransaction }