import { Result } from '../result'
import PredefinedStatus  from '../../consts/consts'
import { web3Accounts, web3Enable , web3FromSource} from '@polkadot/extension-dapp';
import { Actions } from '../index'
import Decimal from 'decimal.js'

class SendSignedTransaction{
  public async sendSignedTransaction(address:string,count:string|number){
    
    const allAccounts = await web3Accounts();
    const account = allAccounts[0];
    let counts = await new Decimal(count).mul(new Decimal(Math.pow(10,10))).toString()
    const transferExtrinsic = (window as any).api.tx.balances.transfer(address, counts)
    const injector = await web3FromSource(account.meta.source);
    const signer = await injector.signer
    return new Promise((resolve,reject)=>{
      transferExtrinsic.signAndSend(account.address, { signer: signer }, ({ status }) => {
        if (status.isInBlock) {
          console.log(`Completed at block hash #${status.asInBlock.toString()}`);
          resolve(new Result(PredefinedStatus.SUCCESS(status.asInBlock.toString())))
        } else {
          console.log(`Current status: ${status.type}`);
        }
      }).catch((error: any) => {
          console.log(':( transaction failed', error);
          reject(new Result(PredefinedStatus.ERROR_STATE(null)))
      });
    })
  }
}
export { SendSignedTransaction }