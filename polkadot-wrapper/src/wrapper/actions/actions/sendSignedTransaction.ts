import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { web3Accounts, web3Enable , web3FromSource} from '@polkadot/extension-dapp';

class SendSignedTransaction{
  public async sendSignedTransaction(dataToSign:string){
    try{
      const allAccounts = await web3Accounts();
      const account = allAccounts[0];
      const transferExtrinsic =(window as any).api.tx.balances.transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)
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
    }catch(error){
      return new Result(PredefinedStatus.ERROR_STATE(null))
    }
  }
}
export { SendSignedTransaction }